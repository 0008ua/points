import { Scenes } from 'telegraf';
import { ComposeStrategies, MessageDto } from './dto/message.dto';

export interface TelegramOptions {
  token: string;
}

export interface TelegrafFactory {
  (...args: any[]): Promise<TelegramOptions> | TelegramOptions;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SceneContext extends Scenes.SceneContext {}

export interface ComposeStrategy<T extends ComposeStrategies> {
  compose(messages: MessageDto<T>[], lang: string): Promise<string>;
}
