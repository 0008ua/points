import { GameType } from 'src/app.interfaces';

export class PlayedGamesCountDto {
  gameType: GameType;
  count: number;
}
