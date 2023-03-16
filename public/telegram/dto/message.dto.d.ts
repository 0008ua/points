import { GameType, NamedScore, UID } from 'src/app.interfaces';
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
export type ComposeTypes = MessageThousandRound | MessageFinishGame;
export type ComposeStrategyConstructor<T extends ComposeTypes> = {
    new (...args: any[]): ComposeStrategy<T>;
};
export interface ComposeStrategy<T extends ComposeTypes> {
    compose(messages: MessageDto<T>[], lang: string): Promise<string>;
}
