import { ErrorBody, ErrorType, ErrorTypes, ErrorMessage } from 'src/app.interfaces';

export class ErrorLogCreateDto implements ErrorBody, ErrorMessage, ErrorType {
  message: string;
  errorType: ErrorTypes;
  error: any;
}
