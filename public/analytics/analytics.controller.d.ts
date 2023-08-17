import { Request } from 'express';
import { AnalyticsService } from './analytics.service';
import { GameType } from '../app.interfaces';
import { PlayedGamesCountDto } from './dto/playedGamesCount.dto';
export declare class AnalyticsController {
    readonly analyticsService: AnalyticsService;
    constructor(analyticsService: AnalyticsService);
    getWins(req: Request, gameType: GameType): Promise<any>;
    getWinsToGames(req: Request, gameType: GameType): Promise<any>;
    getRating(req: Request, gameType: GameType): Promise<any>;
    getPlayedGamesCount(req: Request): Promise<PlayedGamesCountDto[]>;
}
