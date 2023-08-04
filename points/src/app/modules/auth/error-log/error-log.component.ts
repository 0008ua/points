import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  EnvironmentInjector,
  OnChanges,
  OnInit,
  Signal,
  SimpleChanges,
  ViewChild,
  WritableSignal,
  computed,
  effect,
  inject,
  runInInjectionContext,
  signal,
} from '@angular/core';
import { InfiniteScrollCustomEvent, IonModal } from '@ionic/angular';
import { Store } from '@ngrx/store';
import {
  BehaviorSubject,
  combineLatest,
  Observable,
  of,
  ReplaySubject,
  Subject,
} from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { selectUser } from 'src/app/store/reducers/auth.reducer';
import {
  ErrorLoggerDocumentDto,
  ErrorLogQueryDto,
  OwnerDataDto,
  OwnerQueryDto,
} from 'src/app/dtos';
import { errors, ErrorTypes, IUser, OwnerData } from 'src/app/interfaces';
import { ModalService } from 'src/app/services/modal.service';
import { selectAllErrorLogs } from 'src/app/store/reducers/error-log.reducer';
import * as fromErrorLogActions from '../../../store/actions/error-log.actions';
import { SelectWithSearchComponent } from '../../common/select-with-search/select-with-search.component';
import { SelectWithSearchItem } from '../../common/select-with-search/select-with-search.interface';
import { ErrorDetailsComponent } from './error-details/error-details.component';
import { ErrorLogService } from './error-log.service';
import { SharedService } from 'src/app/services/shared.service';
import { sub, isAfter, parseISO, add } from 'date-fns';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-error-log',
  templateUrl: './error-log.component.html',
  styleUrls: ['./error-log.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorLogComponent implements OnInit {
  injector = inject(EnvironmentInjector);
  store = inject(Store);
  errorLogService = inject(ErrorLogService);
  sharedService = inject(SharedService);
  modalService = inject(ModalService);

  @ViewChild('modal', { static: true }) modal!: IonModal;
  loadedErrorsWithQuery$: Observable<ErrorLoggerDocumentDto[]>;
  loadedErrorsWithQuerySignal: Signal<ErrorLoggerDocumentDto[]>;
  user$: Observable<IUser>;
  allErrors: ErrorLoggerDocumentDto[] = [];
  allErrorsSignal: Signal<ErrorLoggerDocumentDto[]>;
  errorTypes = ['all', ...errors];
  allOwners: OwnerDataDto;

  ownersQuerySignal: WritableSignal<OwnerQueryDto>;
  allOwnersSignal: Signal<OwnerDataDto>;
  loadedOwnersSignal: Signal<OwnerDataDto>;
  getOwnersWithQuerySignal: Signal<OwnerDataDto>;
  getOwnersWithQuery$: ReplaySubject<OwnerQueryDto> = new ReplaySubject(1);

  selectedOwner: OwnerData;
  errorsQuery: ErrorLogQueryDto;

  newOwnersSearch = true;
  newErrorsSearch = true;
  minDate: string;
  maxDate: string;
  maxDateRange: {
    min: string;
    max: string;
  };
  minDateRange: {
    max: string;
  };

  constructor() {} // private sharedService: SharedService, // private modalService: ModalService, // private errorLogService: ErrorLogService, // private store: Store,

  ngOnInit() {
    this.minDate = this.sharedService.convertDateToISO(sub(new Date(), { days: 7 }));
    this.maxDate = this.sharedService.convertDateToISO(new Date());
    this.createDateRanges();

    this.errorsQuery = {
      skip: 0,
      limit: 20,
      minDate: this.sharedService.convertISOToShort(this.minDate),
      // query all docs that 'lt' than upper limit + 1day
      maxDate: this.sharedService.convertDateToShort(
        add(this.sharedService.convertISOToDate(this.maxDate), { days: 1 }),
      ),
    };

    this.ownersQuerySignal = signal({ name: '', skip: 0, limit: 20 });
    this.loadedErrorsWithQuery$ = this.store.select(selectAllErrorLogs);

    this.allErrorsSignal = toSignal(
      this.loadedErrorsWithQuery$.pipe(
        map((loadedErrors) => {
          if (this.newErrorsSearch) {
            return loadedErrors;
          } else {
            return [...this.allErrorsSignal(), ...loadedErrors];
          }
        }),
      ),
      { initialValue: [], injector: this.injector },
    );

    this.user$ = this.store.select(selectUser);

    // listen ownersQuerySignal change and run request with new query
    effect(
      () => {
        this.getOwnersWithQuery$.next(this.ownersQuerySignal());
      },
      { injector: this.injector },
    );

    // convert request result from observable to signal
    this.allOwnersSignal = toSignal(
      this.getOwnersWithQuery$.pipe(
        switchMap((query) => this.errorLogService.getOwnersWithQuery$(query)),
        map((loadedOwners) => {
          if (this.newOwnersSearch) {
            return loadedOwners;
          }
          return {
            totalDocuments: loadedOwners.totalDocuments,
            data: [...this.allOwnersSignal().data, ...loadedOwners.data],
          };
        }),
      ),
      { initialValue: { data: [], totalDocuments: 0 }, injector: this.injector },
    );

    this.user$.subscribe((user) => {
      this.errorsQuery = { ...this.errorsQuery, owner: user._id };
      this.getErrorsWithQuery();
    });
  }

  createDateRanges(): void {
    this.maxDateRange = {
      min: this.sharedService.convertDateToISO(
        add(this.sharedService.convertISOToDate(this.minDate), { days: 1 }),
      ),
      max: this.sharedService.convertDateToISO(new Date()),
    };
    this.minDateRange = {
      max: this.sharedService.convertDateToISO(
        sub(this.sharedService.convertISOToDate(this.maxDate), { days: 1 }),
      ),
    };
  }

  onMinDateChange() {
    this.createDateRanges();
    this.errorsQuery = {
      ...this.errorsQuery,
      minDate: this.sharedService.convertISOToShort(this.minDate),
    };
    this.newErrorsSearch = true;
    this.getErrorsWithQuery();
  }

  onMaxDateChange() {
    this.createDateRanges();
    this.errorsQuery = {
      ...this.errorsQuery,
      // query all docs that 'lt' than upper limit+1day
      maxDate: this.sharedService.convertDateToShort(
        add(this.sharedService.convertISOToDate(this.maxDate), { days: 1 }),
      ),
    };
    this.newErrorsSearch = true;
    this.getErrorsWithQuery();
  }

  errorDetails(error: ErrorLoggerDocumentDto) {
    this.modalService.presentModal(ErrorDetailsComponent, { error });
  }

  onSelectErrorType(event: any) {
    if (event.target.value === 'all') {
      const { errorType, ...rest } = this.errorsQuery;
      this.errorsQuery = rest;
    } else {
      this.errorsQuery = {
        ...this.errorsQuery,
        errorType: event.target.value,
      };
    }
    this.newErrorsSearch = true;
    this.getErrorsWithQuery();
  }

  convertOwnersToItems(owners: OwnerDataDto): SelectWithSearchItem[] {
    return owners.data.map(({ name, owner }) => ({ name, data: owner }));
  }

  convertItemToOwner(item: SelectWithSearchItem): OwnerData {
    const { name, data } = item;
    return { name, owner: data };
  }

  onSelectOwner(item: SelectWithSearchItem): void {
    this.selectedOwner = this.convertItemToOwner(item);
    this.errorsQuery = { ...this.errorsQuery, owner: this.selectedOwner.owner };
    this.newErrorsSearch = true;
    this.getErrorsWithQuery();
    this.modal.dismiss();
  }

  onIonInfinite(event: any) {
    this.newErrorsSearch = false;
    this.getErrorsWithQuery(this.allErrorsSignal().length);
    (event as InfiniteScrollCustomEvent).target.complete();
  }

  onIonInfiniteSelectwithSearch(event: any) {
    this.newOwnersSearch = false;
    this.ownersQuerySignal.update((ownersQuery) => ({
      ...ownersQuery,
      skip: this.allOwnersSignal().data?.length || 0,
    }));
  }

  searchOwnersWithQuery(name: string) {
    this.ownersQuerySignal.update((ownersQuery) => ({ ...ownersQuery, name }));
    this.newOwnersSearch = true;
  }

  private getErrorsWithQuery(skip = 0): void {
    this.errorsQuery = { ...this.errorsQuery, skip };
    this.store.dispatch(fromErrorLogActions.getWithQuery({ query: this.errorsQuery }));
  }
}
