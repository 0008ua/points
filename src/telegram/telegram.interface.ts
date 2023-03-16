import { Scenes } from 'telegraf';
import { ComposeTypes, MessageDto } from './dto/message.dto';

export interface TelegramOptions {
  token: string;
}

export interface TelegrafFactory {
  (...args: any[]): Promise<TelegramOptions> | TelegramOptions;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SceneContext extends Scenes.SceneContext {}
