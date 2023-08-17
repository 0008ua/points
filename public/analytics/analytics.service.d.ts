import { GameModel } from '../game/entities/game.entity';
import { RequestByGameType } from './dto/raitingRequest.dto';
import { PlayedGamesCountDto } from './dto/playedGamesCount.dto';
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
    getRating({ userId, gameType }: RequestByGameType): Promise<any>;
    getPlayedGamesCount({ userId }: {
        userId: any;
    }): Promise<PlayedGamesCountDto[]>;
}
