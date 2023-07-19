import { ErrorType, ErrorTypes, Owner } from 'src/app.interfaces';
export declare class ErrorLogQueryDto implements Partial<ErrorType>, Partial<Owner> {
    owner?: string;
    errorType?: ErrorTypes;
    minDate: string;
    maxDate: string;
    skip?: number;
    limit?: number;
}
