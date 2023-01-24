import { GamerService } from './gamer.service';
import { CreateGamerDto } from './dto/create-gamer.dto';
import { UpdateGamerDto } from './dto/update-gamer.dto';
import { Request } from 'express';
export declare class GamerController {
    private readonly gamerService;
    constructor(gamerService: GamerService);
    create(dto: CreateGamerDto, { user }: Request): Promise<import("./dto/gamerData.dto").GamerDataDto>;
    getWithQuery(query: any, { user }: Request): Promise<any>;
    findOne(_id: string, { user }: Request): Promise<import("./dto/gamerData.dto").GamerDataDto>;
    update(_id: string, dto: UpdateGamerDto, { user }: Request): Promise<import("./dto/gamerData.dto").GamerDataDto>;
    remove(_id: string, { user }: Request): string;
}
