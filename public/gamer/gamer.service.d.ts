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
import { GamerDataDto } from './dto/gamerData.dto';
import { UpdateGamerDto } from './dto/update-gamer.dto';
import { Gamer, GamerDocument, GamerModel } from './entities/gamer.entity';
export declare class GamerService {
    protected gamerModel: GamerModel;
    constructor(gamerModel: GamerModel);
    private normalizeGamerDocument;
    create(newGamer: Gamer): Promise<GamerDataDto>;
    getWithQuery(query: any, owner: string): Promise<any>;
    getAll(owner: string): Promise<GamerDataDto[]>;
    findOne(_id: string, owner?: string): Promise<GamerDataDto>;
    findOneAllData(_id: string, owner?: string): Promise<GamerDocument>;
    update(_id: string, dto: UpdateGamerDto, owner?: string): Promise<GamerDataDto>;
    remove(_id: string, owner: string): string;
    findByQuery(query: Partial<Gamer>): import("mongoose").Query<(import("mongoose").Document<unknown, any, Gamer> & Omit<Gamer & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, any, Gamer> & Omit<Gamer & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, any, Gamer> & Omit<Gamer & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findOneByQuery(query: Partial<Gamer>): import("mongoose").Query<import("mongoose").Document<unknown, any, Gamer> & Omit<Gamer & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, import("mongoose").Document<unknown, any, Gamer> & Omit<Gamer & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, any, Gamer> & Omit<Gamer & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
}
