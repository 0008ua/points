import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as ErrorLogActions from '../actions/error-log.actions';
import { ErrorLoggerDocumentDto } from 'src/app/dtos';

export const errorLogsFeatureKey = 'errorLogs';

export type State = EntityState<ErrorLoggerDocumentDto>;

export const adapter: EntityAdapter<ErrorLoggerDocumentDto> =
  createEntityAdapter<ErrorLoggerDocumentDto>({
    selectId: (errorLog: ErrorLoggerDocumentDto) => errorLog._id,
  });

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(ErrorLogActions.addErrorLog, (state, action) =>
    adapter.addOne(action.errorLog, state),
  ),
  on(ErrorLogActions.upsertErrorLog, (state, action) =>
    adapter.upsertOne(action.errorLog, state),
  ),
  on(ErrorLogActions.addErrorLogs, (state, action) =>
    adapter.addMany(action.errorLogs, state),
  ),
  on(ErrorLogActions.upsertErrorLogs, (state, action) =>
    adapter.upsertMany(action.errorLogs, state),
  ),
  on(ErrorLogActions.updateErrorLog, (state, action) =>
    adapter.updateOne(action.errorLog, state),
  ),
  on(ErrorLogActions.updateErrorLogs, (state, action) =>
    adapter.updateMany(action.errorLogs, state),
  ),
  on(ErrorLogActions.deleteErrorLog, (state, action) =>
    adapter.removeOne(action.id, state),
  ),
  on(ErrorLogActions.deleteErrorLogs, (state, action) =>
    adapter.removeMany(action.ids, state),
  ),
  on(ErrorLogActions.loadErrorLogs, (state, action) =>
    adapter.setAll(action.errorLogs, state),
  ),
  on(ErrorLogActions.clearErrorLogs, (state) => adapter.removeAll(state)),
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectFeature = createFeatureSelector<State>(errorLogsFeatureKey);
export const selectAllErrorLogs = createSelector(selectFeature, selectAll);
export const selectEntitiesAllErrorLogs = createSelector(selectFeature, selectEntities);
export const selectByIdRoundMember = (id: string) =>
  createSelector(selectEntitiesAllErrorLogs, (entities) => entities[id]);
