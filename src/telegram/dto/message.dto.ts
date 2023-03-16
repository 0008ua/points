import { GameType, NamedScore, UID } from 'src/app.interfaces';
import { ComposeFinishGameStrategy } from '../composers/compose-finish-game.strategy';
import { ComposeThousandRoundStrategy } from '../composers/compose-thousand-round.strategy';
// import { ComposeStrategy } from '../telegram.interface';

export interface Message {
  chatId: string;
  text: string;
}

export interface MessageDto<T extends ComposeTypes> {
  playerId: UID;
  gameType: GameType;
  data: T;
}

export interface MessageThousandRound {
  lastScores: Pick<NamedScore, 'value' | 'name' | 'total'>;
}

export interface MessageFinishGame {
  score: string;
}

// export type ComposeTypes = MessageThousandRound | MessageFinishGame;

export type ComposeTypes = MessageThousandRound | MessageFinishGame;

export type ComposeStrategyConstructor<T extends ComposeTypes> = {
  new (...args: any[]): ComposeStrategy<T>;
};

// export const ComposeStrategiesMap: Record<
//   string,
//   ComposeStrategyConstructor<ComposeTypes>
// > = {
//   composeThousandRoundStrategy: ComposeThousandRoundStrategy,
//   composeFinishGameStrategy: ComposeFinishGameStrategy,
// };

export interface ComposeStrategy<T extends ComposeTypes> {
  compose(messages: MessageDto<T>[], lang: string): Promise<string>;
}

// export const M = new Map<string, ComposeStrategyConstructor<ComposeTypes>>();
// M.set('composeThousandRoundStrategy', ComposeThousandRoundStrategy);
// M.set('composeFinishGameStrategy', ComposeFinishGameStrategy);
