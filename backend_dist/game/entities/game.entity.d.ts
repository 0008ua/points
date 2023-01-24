/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { HydratedDocument, Model } from 'mongoose';
export declare enum GameType {
    Rummy = "rummy",
    Uno = "uno",
    Thousand = "thousand",
    Train = "train"
}
export declare class Game {
    owner: string;
    type: GameType;
    rounds: Round[];
}
declare class Score {
    score: number;
}
declare class Round {
    players: Score[];
}
export type GameDocument = HydratedDocument<Game>;
export interface GameModel extends Model<GameDocument> {
    createGame(game: Game): Promise<any>;
}
export declare const GameSchema: import("mongoose").Schema<Game, Model<Game, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Game>;
export {};
