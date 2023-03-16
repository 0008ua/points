import { GameType, NamedScore, UID } from 'src/app.interfaces';
import { ComposeTypes } from '../telegram.interface';

export interface MessageDto<T extends ComposeTypes> {
  playerId: UID;
  gameType: GameType;
  data: T;
}
