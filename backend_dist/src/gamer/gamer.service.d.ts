import { CreateGamerDto } from './dto/create-gamer.dto';
import { UpdateGamerDto } from './dto/update-gamer.dto';
export declare class GamerService {
    create(createGamerDto: CreateGamerDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateGamerDto: UpdateGamerDto): string;
    remove(id: number): string;
}
