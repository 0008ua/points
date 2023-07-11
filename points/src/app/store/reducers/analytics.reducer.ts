import { createReducer, on } from '@ngrx/store';
import { IGamer } from '../../interfaces';
import * as fromAnalyticsActions from '../actions/analytics.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const analyticsFeatureKey = 'analytics';

export interface State {
  analytics: IGamer[];
  error: HttpErrorResponse | null;
  loading: boolean;
}

export const initialState: State = {
  analytics: [],
  error: null,
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(
    fromAnalyticsActions.getRatingSuccess,
    (state, { analytics }): State => ({
      ...state,
      analytics,
      error: null,
    }),
  ),
  on(
    fromAnalyticsActions.addMany,
    (state, { analytics }): State => ({
      ...state,
      analytics: [...state.analytics, ...analytics],
      error: null,
    }),
  ),
  on(
    fromAnalyticsActions.addError,
    (state, { error }): State => ({
      ...state,
      error,
    }),
  ),
  on(
    fromAnalyticsActions.removeError,
    (state, _): State => ({
      ...state,
      error: null,
    }),
  ),
  on(
    fromAnalyticsActions.loading,
    (state, { loading }): State => ({
      ...state,
      loading,
    }),
  ),
);

const selectFeature = createFeatureSelector<State>(analyticsFeatureKey);

export const selectRating = createSelector(selectFeature, (state) => state.analytics);
export const selectLoading = createSelector(selectFeature, (state) => state.loading);
