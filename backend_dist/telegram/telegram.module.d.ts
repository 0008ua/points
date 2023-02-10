import { DynamicModule } from '@nestjs/common';
import { TelegramModuleAsyncOptions } from './telegram.interface';
export declare class TelegramModule {
    static forRootAsync(options: TelegramModuleAsyncOptions): DynamicModule;
    private static extendFactory;
}
