import { ErrorBody, ErrorType, Owner, ErrorMessage } from 'src/app.interfaces';
export interface IErrorLogger extends ErrorBody, ErrorType, Owner, ErrorMessage {
}
