import { Request } from 'express';
import { AnalyticsService } from './analytics.service';
export declare class AnalyticsController {
    readonly analyticsService: AnalyticsService;
    constructor(analyticsService: AnalyticsService);
    getWins(req: Request): Promise<any>;
    getWinsToGames(req: Request): Promise<any>;
    getRating(req: Request): Promise<any>;
}
