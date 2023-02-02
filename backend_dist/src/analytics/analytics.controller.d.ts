import { Request } from 'express';
import { AnalyticsService } from './analytics.service';
import { IFront } from '../app.interfaces';
export declare class AnalyticsController {
    readonly analyticsService: AnalyticsService;
    constructor(analyticsService: AnalyticsService);
    getWins(req: Request, gameType: IFront.GameType): Promise<any>;
    getWinsToGames(req: Request, gameType: IFront.GameType): Promise<any>;
    getRating(req: Request, gameType: IFront.GameType): Promise<any>;
}
