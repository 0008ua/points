import { ErrorBody, ErrorType, ErrorTypesEnum, ErrorMessage } from 'src/app.interfaces';
export declare class ErrorLogDto implements ErrorBody, ErrorMessage, ErrorType {
    message: string;
    errorType: ErrorTypesEnum;
    error: any;
}
