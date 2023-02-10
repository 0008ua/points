import { ModuleMetadata } from '@nestjs/common';
import { Scenes } from 'telegraf';
export interface TelegramOptions {
    token: string;
}
export interface TelegramModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    useFactory(...args: any[]): Promise<TelegramOptions> | TelegramOptions;
    inject?: any[];
    imports?: any[];
    include?: any[];
    middlewares?: any[];
    botName: string;
}
export interface SceneContext extends Scenes.SceneContext {
}
