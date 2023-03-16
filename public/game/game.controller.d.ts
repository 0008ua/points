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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Request } from 'express';
import { Game } from './entities/game.entity';
import { TelegramService } from 'src/telegram/telegram.service';
export declare class GameController {
    private readonly gameService;
    private readonly telegramService;
    constructor(gameService: GameService, telegramService: TelegramService);
    create(dto: CreateGameDto, { user }: Request): Promise<import("mongoose").Document<unknown, any, Game> & Game & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getWithQuery(query: any, { user }: Request): Promise<any>;
    findOne(_id: string, { user }: Request): Promise<import("mongoose").Document<unknown, any, Game> & Game & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(_id: string, dto: UpdateGameDto, { user }: Request): Promise<import("mongoose").Document<unknown, any, Game> & Game & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(_id: string, { user }: Request): string;
}
