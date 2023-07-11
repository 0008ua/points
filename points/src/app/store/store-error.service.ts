import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { of, throwError } from 'rxjs';
import { catchError, filter, switchMap, tap } from 'rxjs/operators';
import {
  EntityAction,
  ofEntityOp,
  OP_ERROR,
  OP_SUCCESS,
  EntityCacheAction,
  DataServiceError,
} from '@ngrx/data';
import * as fromAnalyticsActions from './actions/analytics.actions';
import * as fromAuthActions from './actions/auth.actions';
import { Action, Store } from '@ngrx/store';
import { ToastService } from '../services/toast.service';
import { SharedService } from '../services/shared.service';

/** Report ngrx-data success/error actions as toast messages **/
@Injectable({ providedIn: 'root' })
export class StoreErrorService {
  constructor(
    private store: Store,
    private actions$: Actions,
    public toastService: ToastService,
    private sharedService: SharedService,
  ) {
    // actions$
    //   .pipe(
    //     ofEntityOp(),
    //     filter((ea: EntityAction) => ea.payload.entityOp.endsWith(OP_ERROR)),
    //     tap((x) => console.log('x', x)),
    //   )
    //   .subscribe(
    //     (result) => {
    //       console.log('Error successefuly logged to db');
    //     },
    //     (error) => {
    //       console.log('Fail to log error', error);
    //     },
    //   );
    // actions$.pipe(ofType(EntityCacheAction.SAVE_ENTITIES_ERROR)).subscribe((action) => {
    //   console.log('entity save toast error', action);
    //   this.toastService.presentErrorToast(`Error SAVE_ENTITIES_ERROR`);
    // });
    // actions$
    //   .pipe(
    //     ofType(fromAnalyticsActions.error, fromAuthActions.error),
    //     filter((action) => action.error !== null),
    //     switchMap((action) => {
    //       let errorType: any = 'unknownError';
    //       switch (action.type) {
    //         case fromAnalyticsActions.AnalyticsActionTypes.errorType:
    //           this.toastService.presentErrorToast(
    //             'Analytics error',
    //             `${action.error}`,
    //             fromAnalyticsActions.error,
    //           );
    //           errorType = fromAnalyticsActions.AnalyticsActionTypes.errorType;
    //           break;
    //         case fromAuthActions.AuthActionTypes.errorType:
    //           this.toastService.presentErrorToast(
    //             'Authentication error',
    //             `${action.error}`,
    //             fromAuthActions.error,
    //           );
    //           errorType = fromAuthActions.AuthActionTypes.errorType;
    //           break;
    //         default:
    //       }
    //       return this.sharedService.logErrorToDB({
    //         message: action.error,
    //         errorType,
    //       });
    //     }),
    //   )
    //   .subscribe((result) => {
    //     console.log('Error successefuly logged to db');
    //   });
  }
}
