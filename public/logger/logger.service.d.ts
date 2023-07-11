import { ErrorLogQueryDto } from './dto/error-log-query.dto';
import { ErrorLoggerDocumentDto } from './dto/error-loger-document.dto';
import { OwnerDataDto, OwnerQueryDto } from './dto/owner.dto';
import { ErrorLogger, ErrorLoggerModel } from './entities/error-logger.entity';
export declare class LoggerService {
    readonly errorLoggerModel: ErrorLoggerModel;
    constructor(errorLoggerModel: ErrorLoggerModel);
    logErrorToDB(errorLogger: ErrorLogger): Promise<ErrorLoggerDocumentDto>;
    getOwnersWithQuery(query: OwnerQueryDto): Promise<OwnerDataDto>;
    getWithQuery(query: ErrorLogQueryDto, userId: string): Promise<ErrorLoggerDocumentDto[]>;
    private normalizeErrorDocument;
}
