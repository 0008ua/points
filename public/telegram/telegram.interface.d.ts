import { NamedScore } from 'src/app.interfaces';
import { Scenes } from 'telegraf';
import { MessageDto } from './dto/message.dto';
export interface TelegramOptions {
    token: string;
}
export interface TelegrafFactory {
    (...args: any[]): Promise<TelegramOptions> | TelegramOptions;
}
export interface SceneContext extends Scenes.SceneContext {
}
export interface Message {
    chatId: string;
    text: string;
}
export type ComposeTypes = MessageThousandRound | MessageFinishGame;
export interface MessageThousandRound {
    lastScores: Pick<NamedScore, 'value' | 'name' | 'total'>;
}
export interface MessageFinishGame {
    score: string;
}
export type ComposeStrategyConstructor<T extends ComposeTypes> = {
    new (...args: any[]): ComposeStrategy<T>;
};
export interface ComposeStrategy<T extends ComposeTypes> {
    compose(messages: MessageDto<T>[], lang: string): Promise<string>;
}
