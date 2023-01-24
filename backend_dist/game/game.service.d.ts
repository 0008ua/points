import { UpdateGameDto } from './dto/update-game.dto';
import { Game, GameDocument, GameModel } from './entities/game.entity';
export declare class GameService {
    readonly gameModel: GameModel;
    constructor(gameModel: GameModel);
    create(newGame: Game): Promise<GameDocument>;
    getWithQuery(query: any, owner: string): Promise<any>;
    getAll(owner: string): Promise<GameDocument[]>;
    findOne(_id: string, owner: string): Promise<GameDocument>;
    update(_id: string, dto: UpdateGameDto, owner: string): Promise<GameDocument>;
    remove(_id: string, owner: string): string;
}
