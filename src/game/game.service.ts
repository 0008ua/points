import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game, GameDocument, GameModel } from './entities/game.entity';

@Injectable()
export class GameService {
  constructor(@InjectModel(Game.name) readonly gameModel: GameModel) {}

  async create(newGame: Game): Promise<GameDocument> {
    return await this.gameModel.createGame(newGame);
  }

  async getWithQuery(query: any, owner: string): Promise<any> {
    //Promise<GameDocument[]> {
    return `This action returns query game ${JSON.stringify(query)}`;
  }

  async getAll(owner: string): Promise<GameDocument[]> {
    return await this.gameModel.find({ owner });
  }

  async findOne(_id: string, owner: string): Promise<GameDocument> {
    return await this.gameModel.findOne({ _id, owner });
  }

  async update(_id: string, dto: UpdateGameDto, owner: string): Promise<GameDocument> {
    try {
      return await this.gameModel.findOneAndUpdate(
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
  }

  remove(_id: string, owner: string) {
    return `This action removes a #${_id} game`;
  }
}
