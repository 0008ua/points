import { ModuleMetadata } from '@nestjs/common';
import { Scenes } from 'telegraf';
export interface TelegramOptions {
    token: string;
}
export interface TelegrafFactory {
    (...args: any[]): Promise<TelegramOptions> | TelegramOptions;
}
export interface TelegramModuleAsyncOptions extends Pick<ModuleMetadata, 'imports' | 'providers' | 'exports' | 'controllers'> {
}
export interface SceneContext extends Scenes.SceneContext {
}
