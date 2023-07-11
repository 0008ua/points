import { createReducer, on } from '@ngrx/store';
import * as fromAppActions from '../actions/app.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ErrorTypes, GameType } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';

export const appFeatureKey = 'app';

export interface State {
  loading: boolean;
  gameType: GameType | null;
  redirectionUrl: string | null;
  error: any | null;
  errorType?: ErrorTypes | null;
}

export const initialState: State = {
  loading: false,
  gameType: null, //Object.keys(environment.games)[0] as GameType,
  redirectionUrl: null,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(
    fromAppActions.loading,
    (state, { loading }): State => ({
      ...state,
      loading,
    }),
  ),
  on(
    fromAppActions.finishGame,
    (state, _): State => ({
      ...state,
      loading: true,
    }),
  ),
  on(
    fromAppActions.gameType,
    (state, { gameType }): State => ({
      ...state,
      gameType,
    }),
  ),
  on(
    fromAppActions.gameTypeAndClearGame,
    (state, { gameType }): State => ({
      ...state,
      gameType,
    }),
  ),
  on(
    fromAppActions.redirection,
    (state, { redirectionUrl }): State => ({
      ...state,
      redirectionUrl,
    }),
  ),
  on(
    fromAppActions.addError,
    (state, { error, errorType }): State => ({
      ...state,
      error,
      errorType,
    }),
  ),
  on(
    fromAppActions.removeError,
    (state, _): State => ({
      ...state,
      error: null,
      errorType: null,
    }),
  ),
);

const selectFeature = createFeatureSelector<State>(appFeatureKey);

export const selectLoading = createSelector(selectFeature, (state) => state.loading);
export const selectGameType = createSelector(selectFeature, (state) => state.gameType);
export const selectRedirectionUrl = createSelector(selectFeature, (state) => state.redirectionUrl);
