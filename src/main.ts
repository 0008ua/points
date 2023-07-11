import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as path from 'path';
import { INestApplication } from '@nestjs/common';
import { getBotToken } from 'nestjs-telegraf';
import { TELEGRAM_BOT_NAME } from './telegram/telegram.constants';
import { HttpExceptionFilter } from './http-exception.filter';

async function bootstrap() {
  let app: INestApplication;
  if (process.env.NODE_ENV === 'development') {
    const httpsOptions = {
      key: fs.readFileSync(path.join(__dirname, '..', 'security', 'cert.key')),
      cert: fs.readFileSync(path.join(__dirname, '..', 'security', 'cert.pem')),
    };
    app = await NestFactory.create(AppModule, { httpsOptions });
  } else {
    app = await NestFactory.create(AppModule);
  }
  // app.use((req, res, next) => {
  //   if (req.url.slice(0, 4) === '/api') {
  //     console.log('url: ', req.url);
  //   }
  //   return next();
  // });

  const bot = app.get(getBotToken(TELEGRAM_BOT_NAME));
  app.use(bot.webhookCallback('/api/' + process.env.TELEGRAM_TOKEN.slice(11)));
  app.setGlobalPrefix('api');
  // app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(process.env.PORT);
}

bootstrap();
