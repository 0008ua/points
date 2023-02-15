import { GamerService } from './gamer.service';
import { CreateGamerDto } from './dto/create-gamer.dto';
import { UpdateGamerDto } from './dto/update-gamer.dto';
import { Request } from 'express';
import { HelpersService } from 'src/common/helpers.service';
export declare class GamerController {
    private readonly gamerService;
    readonly helpersService: HelpersService;
    constructor(gamerService: GamerService, helpersService: HelpersService);
    create(dto: CreateGamerDto, { user }: Request): Promise<import("./dto/gamerData.dto").GamerDataDto>;
    getWithQuery(query: any, { user }: Request): Promise<any>;
    findOne(_id: string, { user }: Request): Promise<import("./dto/gamerData.dto").GamerDataDto>;
    update(_id: string, { user }: Request, dto: UpdateGamerDto): Promise<import("./dto/gamerData.dto").GamerDataDto>;
    remove(_id: string, { user }: Request): string;
}
