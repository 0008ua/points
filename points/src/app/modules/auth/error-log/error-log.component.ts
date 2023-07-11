import { Component, OnInit, ViewChild } from '@angular/core';
import { InfiniteScrollCustomEvent, IonModal } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import {
  ErrorLoggerDocumentDto,
  ErrorLogQueryDto,
  OwnerDataDto,
  OwnerQueryDto,
} from 'src/app/dtos';
import { errors, ErrorTypes, OwnerData } from 'src/app/interfaces';
import { ModalService } from 'src/app/services/modal.service';
import { selectAllErrorLogs } from 'src/app/store/reducers/error-log.reducer';
import * as fromErrorLogActions from '../../../store/actions/error-log.actions';
import { SelectWithSearchComponent } from '../../common/select-with-search/select-with-search.component';
import { SelectWithSearchItem } from '../../common/select-with-search/select-with-search.interface';
import { ErrorDetailsComponent } from './error-details/error-details.component';
import { ErrorLogService } from './error-log.service';

@Component({
  selector: 'app-error-log',
  templateUrl: './error-log.component.html',
  styleUrls: ['./error-log.component.scss'],
})
export class ErrorLogComponent implements OnInit {
  @ViewChild('modal', { static: true }) modal!: IonModal;
  loadedErrorsWithQuery$: Observable<ErrorLoggerDocumentDto[]>;
  allErrors: ErrorLoggerDocumentDto[] = [];
  errorTypes = errors;
  allOwners: OwnerDataDto;
  ownersQuery: OwnerQueryDto;
  selectedOwner: OwnerData;
  errorsQuery: ErrorLogQueryDto;
  getOwnersWithQuery$: BehaviorSubject<OwnerQueryDto>;
  newOwnersSearch = true;
  newErrorsSearch = true;

  constructor(
    private store: Store,
    private errorLogService: ErrorLogService,
    private modalService: ModalService,
  ) {}

  ngOnInit() {
    this.errorsQuery = { errorType: this.errorTypes[0], skip: 0, limit: 20 };
    this.ownersQuery = { name: '', skip: 0, limit: 20 };
    this.allOwners = { data: [], totalDocuments: 0 };

    this.loadedErrorsWithQuery$ = this.store.select(selectAllErrorLogs);

    this.loadedErrorsWithQuery$.subscribe((loadedErrorsWithQuery) => {
      console.log('loadedErrorsWithQuery', loadedErrorsWithQuery);
      if (this.newErrorsSearch) {
        return (this.allErrors = loadedErrorsWithQuery);
      }
      return this.allErrors.push(...loadedErrorsWithQuery);
    });

    this.getOwnersWithQuery$ = new BehaviorSubject(this.ownersQuery);

    this.getOwnersWithQuery$
      .pipe(
        switchMap((ownersQuery) => this.errorLogService.getOwnersWithQuery(ownersQuery)),
      )
      .subscribe((loadedOwners) => {
        if (this.newOwnersSearch) {
          return (this.allOwners = loadedOwners);
        }
        return (this.allOwners = {
          totalDocuments: loadedOwners.totalDocuments,
          data: [...this.allOwners.data, ...loadedOwners.data],
        });
      });
    this.getErrorsWithQuery();
  }

  errorDetails(error: ErrorLoggerDocumentDto) {
    this.modalService.presentModal(ErrorDetailsComponent, { error });
    // .then((_) => console.log('_', _));
    console.log('error Details', error);
  }

  onSelectErrorType(event: any) {
    this.errorsQuery = { ...this.errorsQuery, errorType: event.target.value };
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
    this.getErrorsWithQuery(this.allErrors.length);
    (event as InfiniteScrollCustomEvent).target.complete();
  }

  onIonInfiniteSelectwithSearch(event: any) {
    this.newOwnersSearch = false;
    this.getOwnersWithQuery(this.allOwners.data.length);
  }

  searchOwnersWithQuery(name: string) {
    this.ownersQuery = { ...this.ownersQuery, name };
    this.newOwnersSearch = true;
    this.getOwnersWithQuery();
  }

  private getOwnersWithQuery(skip = 0): void {
    this.ownersQuery = { ...this.ownersQuery, skip };
    this.getOwnersWithQuery$.next(this.ownersQuery);
  }

  private getErrorsWithQuery(skip = 0): void {
    this.errorsQuery = { ...this.errorsQuery, skip };
    this.store.dispatch(fromErrorLogActions.getWithQuery({ query: this.errorsQuery }));
  }
}
