import { GameModel } from 'src/game/entities/game.entity';
export declare class AnalyticsService {
    readonly gameModel: GameModel;
    constructor(gameModel: GameModel);
    getWins(userId: string): Promise<any>;
    getWinsToGames(userId: string): Promise<any>;
    getRating(userId: string): Promise<any>;
}
