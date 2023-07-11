import {
  ErrorBody,
  ErrorType,
  Owner,
  ErrorMessage,
  ErrorTypes,
} from 'src/app.interfaces';

export interface IErrorLogger extends ErrorBody, ErrorType, Owner, ErrorMessage {}
