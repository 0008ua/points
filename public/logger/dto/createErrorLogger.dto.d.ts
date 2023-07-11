import { ErrorTypesEnum } from 'src/app.interfaces';
import { IErrorLogger } from './error-logger.interface';
export declare class CreateErrorLoggerDto implements Omit<IErrorLogger, 'owner'> {
    message: string;
    errorType: ErrorTypesEnum;
    error: any;
}
