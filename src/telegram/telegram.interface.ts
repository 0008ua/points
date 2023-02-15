import { ModuleMetadata } from '@nestjs/common';
import { Scenes } from 'telegraf';

export interface TelegramOptions {
  token: string;
}

export interface TelegrafFactory {
  (...args: any[]): Promise<TelegramOptions> | TelegramOptions;
}

export interface TelegramModuleAsyncOptions
  extends Pick<
    ModuleMetadata,
    'imports' | 'providers' | 'exports' | 'controllers'
  > {
  // useFactory(...args: any[]): Promise<TelegramOptions> | TelegramOptions;
  // inject?: any[];
  // imports?: any[];
  // providers?: any[];
  // exports?: any[];
  // include?: any[];
  // middlewares?: any[];
  // botName: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SceneContext extends Scenes.SceneContext {}
