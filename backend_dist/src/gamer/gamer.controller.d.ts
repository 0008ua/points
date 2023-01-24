import { GamerService } from './gamer.service';
import { CreateGamerDto } from './dto/create-gamer.dto';
import { UpdateGamerDto } from './dto/update-gamer.dto';
export declare class GamerController {
    private readonly gamerService;
    constructor(gamerService: GamerService);
    create(createGamerDto: CreateGamerDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateGamerDto: UpdateGamerDto): string;
    remove(id: string): string;
}
