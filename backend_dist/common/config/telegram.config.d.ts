import { ConfigService } from '@nestjs/config';
import { TelegrafModuleOptions } from 'nestjs-telegraf';
export declare const getTelegramConfig: (configService: ConfigService) => TelegrafModuleOptions;
