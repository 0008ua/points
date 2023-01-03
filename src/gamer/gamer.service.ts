import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { GamerDataDto } from './dto/gamerData.dto';
import { UpdateGamerDto } from './dto/update-gamer.dto';
import { Gamer, GamerDocument, GamerModel } from './entities/gamer.entity';

@Injectable()
export class GamerService {
  constructor(@InjectModel(Gamer.name) protected gamerModel: GamerModel) {}

  private createGamerData(gamer: GamerDocument[]): GamerDataDto[];
  private createGamerData(gamer: GamerDocument): GamerDataDto;
  private createGamerData(gamer: GamerDocument | GamerDocument[]): GamerDataDto | GamerDataDto[] {
    if (Array.isArray(gamer)) {
      return gamer.map((gamer) => ({
        _id: gamer._id.toString(),
        name: gamer.name,
        color: gamer.color,
        owner: gamer.owner,
      }));
    }
    return {
      _id: gamer._id.toString(),
      name: gamer.name,
      color: gamer.color,
      owner: gamer.owner,
    };
  }

  async create(newGamer: Gamer): Promise<GamerDataDto> {
    const gamer: GamerDocument = await this.gamerModel.createGamer(newGamer);
    return this.createGamerData(gamer);
  }

  async getWithQuery(query: any, owner: string): Promise<any> {
    //Promise<GameDocument[]> {
    return `This action returns query game ${JSON.stringify(query)}`;
  }

  async getAll(owner: string): Promise<GamerDataDto[]> {
    const gamers: GamerDocument[] = await this.gamerModel.find({ owner });
    return this.createGamerData(gamers);
  }

  async findOne(_id: string, owner: string): Promise<GamerDataDto> {
    const gamer: GamerDocument = await this.gamerModel.findOne({ _id, owner });
    return this.createGamerData(gamer);
  }

  async update(_id: string, dto: UpdateGamerDto, owner: string): Promise<GamerDataDto> {
    let gamer: GamerDocument;
    try {
      gamer = await this.gamerModel.findOneAndUpdate(
        { _id, owner },
        { $set: dto },
        {
          upsert: true, // Create a document if one isn't found. if {upsert: false} and added new document, db returns null
          useFindAndModify: true, // use findOneAndUpdate MongoDB driver's instead of findAndModify()
          new: true, // Return NEW document after updates are applied, by default old
          rawResult: false, // return mongoDB object instead of doc (old version of doc included)
        },
      );
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }

    return this.createGamerData(gamer);
  }

  remove(_id: string, owner: string) {
    return `This action removes a #${_id} gamer`;
  }
}
