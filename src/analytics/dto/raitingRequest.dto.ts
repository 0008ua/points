import { GameType } from 'points/src/app/interfaces';
import { IFront } from 'src/app.interfaces';

export interface RatingRequest {
  userId: IFront.UID;
  gameType: GameType;
}
