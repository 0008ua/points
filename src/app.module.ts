import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { getMongoConfig } from './common/config/mongo.config';
import { AnalyticsModule } from './analytics/analytics.module';
import { GamerModule } from './gamer/gamer.module';
import { GameModule } from './game/game.module';
import { LoggerModule } from './logger/logger.module';
// import { TelegramModule } from './telegram/telegram.module';
import { getTelegramConfig } from './common/config/telegram.config';
import { TelegrafModule } from 'nestjs-telegraf';
import { TELEGRAM_BOT_NAME } from './telegram/telegram.constants';
import { TelegramService } from './telegram/telegram.service';
import { TelegramModule } from './telegram/telegram.module';
import { sessionMiddleware } from './telegram/middlewares/session.middleware';
// import { TelegramModule } from './telegram/telegram.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'frontend_dist'),
      exclude: ['/api*'],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig,
    }),
    TelegramModule.forRootAsync({
      botName: TELEGRAM_BOT_NAME,
      imports: [ConfigModule],
      useFactory: getTelegramConfig,
      inject: [ConfigService],
      include: [],
      middlewares: [sessionMiddleware],
    }),
    AuthModule,
    ConfigModule.forRoot(),
    AnalyticsModule,
    GameModule,
    GamerModule,
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
