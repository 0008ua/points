import { UID } from 'src/app.interfaces';
import { GameType } from '../entities/game.entity';

export class CreateGameDto {
  type: GameType;
  rounds: {
    _id: string;
    players: {
      _id: UID;
      score: number;
    }[];
  }[];
}
