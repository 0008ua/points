import { GameType, NamedScore, UID } from 'src/app.interfaces';

export interface Message {
  chatId: string;
  text: string;
}

export interface MessageDto<T extends ComposeStrategies> {
  playerId: UID;
  gameType: GameType;
  data: T;
}

export type ComposeStrategies = MessageThousandRound | MessageFinishGame;

export interface MessageThousandRound {
  lastScores: Pick<NamedScore, 'value' | 'name' | 'total'>;
}

export interface MessageFinishGame {
  score: string;
}
