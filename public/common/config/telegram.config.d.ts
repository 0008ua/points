import { ConfigService } from '@nestjs/config';
import { TelegrafModuleOptions } from 'nestjs-telegraf';
export declare const getTelegramConfig: (configService: ConfigService) => TelegrafModuleOptions;
export declare const telegrafFactory: (configService: ConfigService) => {
    include: any[];
    middlewares: import("telegraf").MiddlewareFn<import("telegraf/typings/session").SessionContext<object>>[];
    token: string;
    botName?: string;
    options?: Partial<import("telegraf").Telegraf.Options<any>>;
    launchOptions?: false | import("telegraf").Telegraf.LaunchOptions;
};
