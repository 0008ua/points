import { GameModel } from '../game/entities/game.entity';
import { RatingRequest } from './dto/raitingRequest.dto';
export declare class AnalyticsService {
    readonly gameModel: GameModel;
    constructor(gameModel: GameModel);
    getWins({ userId, gameType }: {
        userId: any;
        gameType: any;
    }): Promise<any>;
    getWinsToGames({ userId, gameType }: {
        userId: any;
        gameType: any;
    }): Promise<any>;
    getRating({ userId, gameType }: RatingRequest): Promise<any>;
}
