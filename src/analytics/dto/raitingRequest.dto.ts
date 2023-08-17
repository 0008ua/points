import { GameType, UID } from '../../app.interfaces';

export interface RequestByGameType {
  userId: UID;
  gameType: GameType;
}
