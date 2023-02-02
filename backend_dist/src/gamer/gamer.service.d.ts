import { GamerDataDto } from './dto/gamerData.dto';
import { UpdateGamerDto } from './dto/update-gamer.dto';
import { Gamer, GamerModel } from './entities/gamer.entity';
export declare class GamerService {
    protected gamerModel: GamerModel;
    constructor(gamerModel: GamerModel);
    private createGamerData;
    create(newGamer: Gamer): Promise<GamerDataDto>;
    getWithQuery(query: any, owner: string): Promise<any>;
    getAll(owner: string): Promise<GamerDataDto[]>;
    findOne(_id: string, owner: string): Promise<GamerDataDto>;
    update(_id: string, dto: UpdateGamerDto, owner: string): Promise<GamerDataDto>;
    remove(_id: string, owner: string): string;
}
