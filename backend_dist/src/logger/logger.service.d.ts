import { ErrorLogger, ErrorLoggerModel } from './entities/error-logger.entity';
export declare class LoggerService {
    readonly errorLoggerModel: ErrorLoggerModel;
    constructor(errorLoggerModel: ErrorLoggerModel);
    logErrorToDB(errorLogger: ErrorLogger): Promise<any>;
}
