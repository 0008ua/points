import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as path from 'path';
import { INestApplication } from '@nestjs/common';
import { getBotToken } from 'nestjs-telegraf';
import { TELEGRAM_BOT_NAME } from './telegram/telegram.constants';

async function bootstrap() {
  let app: INestApplication;
  if (process.env.NODE_ENV === 'development') {
    const httpsOptions = {
      key: fs.readFileSync(path.join(__dirname, '..', 'security', 'cert.key')),
      cert: fs.readFileSync(path.join(__dirname, '..', 'security', 'cert.pem')),
    };
    app = await NestFactory.create(AppModule, { httpsOptions });
    const bot = app.get(getBotToken(TELEGRAM_BOT_NAME));
    app.use(bot.webhookCallback('/api/tg'));
  } else {
    app = await NestFactory.create(AppModule);
    const bot = app.get(getBotToken(TELEGRAM_BOT_NAME));
    app.use(bot.webhookCallback('/api/tg'));
  }
  app.setGlobalPrefix('api');

  await app.listen(process.env.PORT);
}
bootstrap();
