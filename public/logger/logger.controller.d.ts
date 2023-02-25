import { Request } from 'express';
import { CreateErrorLoggerDto } from './dto/createErrorLogger.dto';
import { LoggerService } from './logger.service';
export declare class LoggerController {
    readonly loggerService: LoggerService;
    constructor(loggerService: LoggerService);
    logErrorToDB({ user }: Request, dto: CreateErrorLoggerDto): Promise<any>;
}
