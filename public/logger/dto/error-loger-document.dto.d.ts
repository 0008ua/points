import { ErrorBody, ErrorType, Owner, ErrorMessage, ErrorTypes } from 'src/app.interfaces';
export declare class ErrorLoggerDocumentDto implements ErrorBody, ErrorType, Owner, ErrorMessage {
    message: string;
    errorType: ErrorTypes;
    error: any;
    owner: string;
    _id: string;
    createdAt: string;
}
