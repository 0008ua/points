import { NamedScore, UID } from 'src/app.interfaces';

export interface Message {
  chatId: string;
  text: string;
}

export interface MessageDto {
  playerId: UID;
}

export interface MessageThousandRound {
  lastScores: Pick<NamedScore, 'value' | 'name' | 'total'>;
}

export type MessageThousandRoundDto = MessageDto & MessageThousandRound;
