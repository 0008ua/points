import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import {
  Actions,
  concatLatestFrom,
  createEffect,
  ofType,
  OnInitEffects,
} from '@ngrx/effects';
import { noop, Observable, of, throwError } from 'rxjs';
import {
  map,
  switchMap,
  catchError,
  tap,
  mergeMap,
  filter,
  withLatestFrom,
} from 'rxjs/operators';

import * as fromAuthActions from '../actions/auth.actions';
import * as fromRoundActions from '../actions/round.actions';
import * as fromPlayerActions from '../actions/player.actions';
import * as fromAppActions from '../actions/app.actions';

import { AuthService } from '../../modules/auth/auth.service';
import { ErrorTypes, IUser } from 'src/app/interfaces';
import { userInfo } from 'os';
import { GamerService } from '../gamer-data.service';
import { EntityActionFactory, EntityOp, MergeStrategy } from '@ngrx/data';
import { SharedService } from 'src/app/services/shared.service';
import { State } from '../reducers';
import { selectUser } from '../reducers/auth.reducer';
import { nop } from '../actions/app.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';

@Injectable()
export class AuthEffects implements OnInitEffects {
  setLoading = createEffect(() =>
     this.actions$.pipe(
      ofType(fromAuthActions.signin, fromAuthActions.signup, fromAuthActions.logout),
      map((_) => fromAuthActions.loading({ loading: true })),
    )
  );

  cancelLoading = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.storeUserFromTokenSuccess, fromAuthActions.addError),
      // filter(
      //   (action) =>
      //     // ignore error cancelling (null) actions
      //     action.type !== fromAuthActions.AuthActionTypes.errorType ||
      //     (action.type === fromAuthActions.AuthActionTypes.errorType && !!action.error),
      // ),
      map((_) => fromAuthActions.loading({ loading: false })),
    );
  });

  errorHadler = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.addError),
      map(({ error }) =>
        this.errorHandlerService.logError({
          error,
          errorType: 'auth/error',
        }),
      ),
      map((_) => fromAuthActions.removeError()),
    );
  });

  // signin, signup, logout -> clearRounds
  // signup, logout -> clearPlayers
  // signin, signup, logout -> storeToken -> storeUserFromToken -> storeUserFromTokenSuccess

  signin = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.signin),
      map((action) => action.user),
      switchMap((user) =>
        this.authService.signin(user).pipe(
          map((token) => fromAuthActions.storeToken({ token })),
          catchError((error: HttpErrorResponse) =>
            of(fromAuthActions.addError({ error })),
          ),
        ),
      ),
    );
  });

  signup = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.signup, fromAuthActions.logout),
      map((action = null) => {
        if ('user' in action) {
          return action.user;
        }
        return null;
      }),
      switchMap((user) =>
        this.authService.signup(user).pipe(
          map((token) => fromAuthActions.storeToken({ token })),
          catchError((error: HttpErrorResponse) =>
            of(fromAuthActions.addError({ error })),
          ),
        ),
      ),
    );
  });

  clearRounds = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.signup, fromAuthActions.signin, fromAuthActions.logout),
      map(() => fromRoundActions.clearRounds()),
      catchError((error: HttpErrorResponse) => of(fromAuthActions.addError({ error }))),
    );
  });

  clearPlayers = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.signup, fromAuthActions.logout),
      map(() => fromPlayerActions.clearPlayers()),
      catchError((error: HttpErrorResponse) => of(fromAuthActions.addError({ error }))),
    );
  });

  storeToken = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.storeToken),
      map((action) => action.token),
      switchMap((token) => this.sharedService.setToken(token)),
      map(() => fromAuthActions.storeUserFromToken()),
      catchError((error: HttpErrorResponse) => of(fromAuthActions.addError({ error }))),
    );
  });

  storeUserFromToken = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.storeUserFromToken),
      switchMap(() =>
        this.sharedService.getTokenAndDecode().pipe(
          map((user) => fromAuthActions.storeUserFromTokenSuccess({ user })),
          catchError((error) => {
            return of(fromAuthActions.signup({}));
          }),
        ),
      ),
      catchError((error: HttpErrorResponse) => of(fromAuthActions.addError({ error }))),
    );
  });

  redirectAfterSignin = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.storeUserFromTokenSuccess),
      map((payload) => {
        if (payload.user?.role === 'member' || payload.user?.role === 'admin') {
          return fromAuthActions.redirection({ redirectionUrl: '/' });
        }
        return nop();
      }),
    );
  });

  removeAllRecentPlayers = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.signinSuccess),
      map((action) => action.token),
      map((token) => fromAuthActions.storeToken({ token })),
      catchError((error: HttpErrorResponse) => of(fromAuthActions.addError({ error }))),
    );
  });

  constructor(
    private actions$: Actions<fromAuthActions.CoreActionsUnion>,
    private errorHandlerService: ErrorHandlerService,
    private authService: AuthService,
    private sharedService: SharedService,
    private entityActionFactory: EntityActionFactory,
    private gamerService: GamerService,
  ) {}

  ngrxOnInitEffects(): Action {
    return fromAuthActions.storeUserFromToken();
  }
}
