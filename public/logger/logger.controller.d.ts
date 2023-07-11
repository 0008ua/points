import { Request } from 'express';
import { ErrorLogQueryDto } from './dto/error-log-query.dto';
import { ErrorLogCreateDto } from './dto/error-log.-createdto';
import { OwnerQueryDto } from './dto/owner.dto';
import { LoggerService } from './logger.service';
export declare class LoggerController {
    readonly loggerService: LoggerService;
    constructor(loggerService: LoggerService);
    logErrorToDB({ user }: Request, dto: ErrorLogCreateDto): Promise<import("./dto/error-loger-document.dto").ErrorLoggerDocumentDto>;
    getOwnersWithQuery(query: OwnerQueryDto): Promise<import("./dto/owner.dto").OwnerDataDto>;
    getWithQuery(query: ErrorLogQueryDto, { user }: Request): Promise<import("./dto/error-loger-document.dto").ErrorLoggerDocumentDto[]>;
}
