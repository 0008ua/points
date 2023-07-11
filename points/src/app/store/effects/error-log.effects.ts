import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import { ErrorLogService } from 'src/app/modules/auth/error-log/error-log.service';
import * as fromErrorLogActions from '../actions/error-log.actions';

@Injectable()
export class ErrorLogEffects {
  getWithQuery = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromErrorLogActions.getWithQuery),
      switchMap(({ query }) => this.errorLogService.getWithQuery(query)),
      map((errorLogs) => fromErrorLogActions.loadErrorLogs({ errorLogs })),
    );
  });

  constructor(private actions$: Actions, private errorLogService: ErrorLogService) {}
}
