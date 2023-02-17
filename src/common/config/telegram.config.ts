import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';
import { TelegrafModuleOptions } from 'nestjs-telegraf';
import { TelegramOptions } from 'src/telegram/telegram.interface';
import { TelegramModule } from 'src/telegram/telegram.module';
// import { TelegramModule } from 'src/telegram/telegram.module';
import { TelegramService } from 'src/telegram/telegram.service';

export const getTelegramConfig = (
  configService: ConfigService,
): TelegrafModuleOptions => {
  const token = configService.get('TELEGRAM_TOKEN');
  if (!token) {
    throw new Error('No TELEGRAM_TOKEN');
  }
  return {
    token,
    // include: [TelegramModule],
  };
};
