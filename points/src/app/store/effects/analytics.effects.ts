import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, tap, mergeMap, filter, withLatestFrom } from 'rxjs/operators';
import * as fromAuthActions from '../actions/auth.actions';
import { SharedService } from 'src/app/services/shared.service';
import * as fromAnalyticsActions from '../actions/analytics.actions';
import { Store } from '@ngrx/store';
import { GamerService } from '../gamer-data.service';
import { IGamer, ErrorTypes } from 'src/app/interfaces';
import { AnalyticsService } from 'src/app/modules/analytics-tab/analytics.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';

@Injectable()
export class AnalyticsEffects {
  setLoading = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        fromAnalyticsActions.getRatingByWins,
        fromAnalyticsActions.getRatingByWinsToGames,
        fromAnalyticsActions.getRating,
      ),
      map((_) => fromAnalyticsActions.loading({ loading: true })),
    );
  });

  cancelLoading = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAnalyticsActions.getRatingSuccess, fromAnalyticsActions.addError),
      // filter(
      //   (action) =>
      //     // ignore error cancelling (null) actions
      //     action.type !== fromAnalyticsActions.AnalyticsActionTypes.errorType ||
      //     (action.type === fromAnalyticsActions.AnalyticsActionTypes.errorType && !!action.error),
      // ),
      map((_) => fromAnalyticsActions.loading({ loading: false })),
    );
  });

  errorHadler = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAnalyticsActions.addError),
      map(({ error }) =>
        this.errorHandlerService.logError({
          error,
          errorType: 'analytics/error',
        }),
      ),
      map((_) => fromAnalyticsActions.removeError()),
    );
  });

  getRatingByWins = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAnalyticsActions.getRatingByWins),
      switchMap(({ gameType }) =>
        this.analyticsService.getRatingByWins(gameType).pipe(
          switchMap((result) => this.addLoosers(of(result))),
          map((analytics) => fromAnalyticsActions.getRatingSuccess({ analytics })),
          catchError((error: HttpErrorResponse) => of(fromAnalyticsActions.addError({ error }))),
        ),
      ),
    );
  });

  getRatingByWinsToGames = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAnalyticsActions.getRatingByWinsToGames),
      switchMap(({ gameType }) =>
        this.analyticsService.getRatingByWinsToGames(gameType).pipe(
          map((analytics) => fromAnalyticsActions.getRatingSuccess({ analytics })),
          catchError((error: HttpErrorResponse) => of(fromAnalyticsActions.addError({ error }))),
        ),
      ),
    );
  });

  getRating = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAnalyticsActions.getRating),
      switchMap(({ gameType }) => {
        return this.analyticsService.getRating(gameType).pipe(
          map((analytics) => fromAnalyticsActions.getRatingSuccess({ analytics })),
          catchError((error: HttpErrorResponse) => of(fromAnalyticsActions.addError({ error }))),
        );
      }),
    );
  });

  constructor(
    private actions$: Actions<fromAuthActions.CoreActionsUnion>,
    private errorHandlerService: ErrorHandlerService,
    private analyticsService: AnalyticsService,
    private gamerService: GamerService,
  ) {}

  // append gamers which hasn't wins yet
  addLoosers(stream: Observable<IGamer[]>): Observable<IGamer[]> {
    return stream.pipe(
      withLatestFrom(this.gamerService.entities$),
      map(([analytics, gamers]) => {
        const losers = gamers
          .filter((gamer) => !analytics.some((winner) => winner._id === gamer._id))
          .map(({ _id, name, color, telegramCheckCode, telegramSubscriptionName }) => ({
            _id,
            name,
            color,
            telegramCheckCode,
            telegramSubscriptionName,
            rating: { wins: 0 },
          }));
        const fullList = analytics.concat(losers);
        return fullList;
      }),
    );
  }
}
