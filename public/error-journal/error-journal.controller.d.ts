import { Request } from 'express';
import { ErrorJournalQueryDto } from 'src/app.interfaces';
import { ErrorJournalService } from './error-journal.service';
export declare class ErrorJournalController {
    readonly errorJournalService: ErrorJournalService;
    constructor(errorJournalService: ErrorJournalService);
    getWithQuery(query: ErrorJournalQueryDto, { user }: Request): void;
}
