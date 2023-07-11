import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props, union } from '@ngrx/store';
import { GameType, IGamer } from 'src/app/interfaces';

export enum AnalyticsActionTypes {
  getRatingByWinsType = 'analytics/ratingByWins',
  getRatingByWinsToGamesType = 'analytics/ratingByWinsToGames',
  getRatingType = 'analytics/rating',
  getRatingSuccessType = 'analytics/getRatingSuccess',
  addManyType = 'analytics/addMany',
  addErrorType = 'analytics/addError',
  removeErrorType = 'analytics/removeError',
  loadingType = 'analytics/loading',
}

export const getRatingByWins = createAction(
  AnalyticsActionTypes.getRatingByWinsType,
  props<{
    gameType: GameType;
    query?: any;
  }>(),
);

export const getRatingByWinsToGames = createAction(
  AnalyticsActionTypes.getRatingByWinsToGamesType,
  props<{
    gameType: GameType;
    query?: any;
  }>(),
);

export const getRating = createAction(
  AnalyticsActionTypes.getRatingType,
  props<{
    gameType: GameType;
    query?: any;
  }>(),
);

export const getRatingSuccess = createAction(
  AnalyticsActionTypes.getRatingSuccessType,
  props<{ analytics: IGamer[] }>(),
);

export const addMany = createAction(
  AnalyticsActionTypes.addManyType,
  props<{ analytics: IGamer[] }>(),
);

export const addError = createAction(
  AnalyticsActionTypes.addErrorType,
  props<{ error: HttpErrorResponse }>(),
);

export const removeError = createAction(AnalyticsActionTypes.removeErrorType);

export const loading = createAction(
  AnalyticsActionTypes.loadingType,
  props<{ loading: boolean }>(),
);

const all = union({
  addError,
  removeError,
  getRatingByWins,
  getRatingByWinsToGames,
  getRating,
  getRatingSuccess,
  loading,
});

export type CoreActionsUnion = typeof all;
