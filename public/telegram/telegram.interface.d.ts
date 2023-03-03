import { Scenes } from 'telegraf';
import { ComposeStrategies, MessageDto } from './dto/message.dto';
export interface TelegramOptions {
    token: string;
}
export interface TelegrafFactory {
    (...args: any[]): Promise<TelegramOptions> | TelegramOptions;
}
export interface SceneContext extends Scenes.SceneContext {
}
export interface ComposeStrategy<T extends ComposeStrategies> {
    compose(messages: MessageDto<T>[], lang: string): Promise<string>;
}
