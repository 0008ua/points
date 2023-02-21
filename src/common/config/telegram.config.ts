import { ConfigService } from '@nestjs/config';
import { TelegrafModuleOptions } from 'nestjs-telegraf';
import { sessionMiddleware } from 'src/telegram/middlewares/session.middleware';

export const getTelegramConfig = (
  configService: ConfigService,
): TelegrafModuleOptions => {
  const token = configService.get('TELEGRAM_TOKEN');
  if (!token) {
    throw new Error('No TELEGRAM_TOKEN');
  }
  return { token };
};

export const telegrafFactory = (configService: ConfigService) => {
  return {
    ...getTelegramConfig(configService),
    include: [],
    middlewares: [sessionMiddleware],
  };
};
