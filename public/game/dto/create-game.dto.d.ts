import { GameType, UID } from 'src/app.interfaces';
export declare class CreateGameDto {
    type: GameType;
    rounds: {
        _id: string;
        players: {
            _id: UID;
            score: number;
        }[];
    }[];
}
