import { Scenes } from 'telegraf';
export interface TelegramOptions {
    token: string;
}
export interface TelegrafFactory {
    (...args: any[]): Promise<TelegramOptions> | TelegramOptions;
}
export interface SceneContext extends Scenes.SceneContext {
}
