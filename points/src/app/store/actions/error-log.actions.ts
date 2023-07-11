import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { ErrorLogQueryDto, ErrorLoggerDocumentDto } from 'src/app/dtos';

export const loadErrorLogs = createAction(
  '[ErrorLog/API] Load ErrorLogs',
  props<{ errorLogs: ErrorLoggerDocumentDto[] }>(),
);

export const addErrorLog = createAction(
  '[ErrorLog/API] Add ErrorLog',
  props<{ errorLog: ErrorLoggerDocumentDto }>(),
);

export const upsertErrorLog = createAction(
  '[ErrorLog/API] Upsert ErrorLog',
  props<{ errorLog: ErrorLoggerDocumentDto }>(),
);

export const addErrorLogs = createAction(
  '[ErrorLog/API] Add ErrorLogs',
  props<{ errorLogs: ErrorLoggerDocumentDto[] }>(),
);

export const upsertErrorLogs = createAction(
  '[ErrorLog/API] Upsert ErrorLogs',
  props<{ errorLogs: ErrorLoggerDocumentDto[] }>(),
);

export const updateErrorLog = createAction(
  '[ErrorLog/API] Update ErrorLog',
  props<{ errorLog: Update<ErrorLoggerDocumentDto> }>(),
);

export const updateErrorLogs = createAction(
  '[ErrorLog/API] Update ErrorLogs',
  props<{ errorLogs: Update<ErrorLoggerDocumentDto>[] }>(),
);

export const deleteErrorLog = createAction(
  '[ErrorLog/API] Delete ErrorLog',
  props<{ id: string }>(),
);

export const deleteErrorLogs = createAction(
  '[ErrorLog/API] Delete ErrorLogs',
  props<{ ids: string[] }>(),
);

export const clearErrorLogs = createAction('[ErrorLog/API] Clear ErrorLogs');

// data
export const getWithQuery = createAction(
  '[ErrorLog/API/data] getWithQuery ErrorLogs',
  props<{ query: ErrorLogQueryDto }>(),
);
