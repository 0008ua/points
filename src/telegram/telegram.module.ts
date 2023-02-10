import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { TelegrafModule, TelegrafModuleAsyncOptions, TelegrafModuleOptions } from 'nestjs-telegraf';
import { TelegramModuleAsyncOptions, TelegramOptions } from './telegram.interface';
import { TelegramService } from './telegram.service';
import { TelegramUpdate } from './telegram.update';
import { BindUserScene } from './scenes/bind-user';
// @Global()
@Module({
  providers: [TelegramService, TelegramUpdate, BindUserScene],
  exports: [TelegramService, TelegramUpdate, BindUserScene],
})
export class TelegramModule {
  static forRootAsync(options: TelegramModuleAsyncOptions): DynamicModule {
    const useFactory = this.extendFactory(options);
    return {
      module: TelegramModule,
      imports: [
        TelegrafModule.forRootAsync({
          botName: options.botName,
          useFactory,
          inject: options.inject,
          imports: options.imports,
        }),
      ],
    };
  }

  private static extendFactory(options: TelegramModuleAsyncOptions) {
    return (...args: any[]) => ({
      ...options.useFactory(...args),
      include: options.include || [],
      middlewares: options.middlewares || [],
    });
  }
}
