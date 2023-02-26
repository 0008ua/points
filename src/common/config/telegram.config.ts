import { ConfigService } from '@nestjs/config';
import { TelegrafModuleOptions } from 'nestjs-telegraf';
import { languageMiddleware } from 'src/telegram/middlewares/language.middleware';
import { sessionMiddleware } from 'src/telegram/middlewares/session.middleware';
import { TelegramService } from 'src/telegram/telegram.service';

export const getTelegramConfig = (
  configService: ConfigService,
): TelegrafModuleOptions => {
  const token = configService.get('TELEGRAM_TOKEN');
  if (!token) {
    throw new Error('No TELEGRAM_TOKEN');
  }
  if (configService.get('NODE_ENV') === 'development') {
    return {
      token,
      launchOptions: {
        webhook: {
          domain: configService.get('DOMAIN'),
          hookPath: '/api/tg',
        },
      },
    };
  } else {
    return {
      token,
      launchOptions: {
        webhook: {
          domain: configService.get('DOMAIN'),
          hookPath: '/api/tg',
        },
      },
    };
  }
};

export const telegrafFactory = (
  configService: ConfigService,
  // languageMiddleware: LanguageMiddleware,
  // telegramService: TelegramService,
) => {
  return {
    ...getTelegramConfig(configService),
    include: [],
    middlewares: [sessionMiddleware, languageMiddleware],
  };
};
