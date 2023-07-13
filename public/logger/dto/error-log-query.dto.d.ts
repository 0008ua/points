import { ErrorType, ErrorTypes, Owner } from 'src/app.interfaces';
export declare class ErrorLogQueryDto implements Partial<ErrorType>, Partial<Owner> {
    owner: string | null;
    errorType: ErrorTypes | null;
    skip?: number;
    limit?: number;
}
