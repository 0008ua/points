import { GameType, NamedScore, UID } from 'src/app.interfaces';
import { CreateGameDto } from 'src/game/dto/create-game.dto';

export interface Message {
  chatId: string;
  text: string;
}

export interface MessageDto {
  playerId: UID;
  gameType: GameType;
}

export interface MessageThousandRound {
  lastScores: Pick<NamedScore, 'value' | 'name' | 'total'>;
}

export interface MessageFinishGame {
  score: string;
}

export type MessageThousandRoundDto = MessageDto & MessageThousandRound;

export type MessageFinishGameDto = MessageDto & MessageFinishGame;
