import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { TelegramUpdate } from './telegram.update';
import { BindUserScene } from './scenes/bind-user.scene';
import { GamerModule } from 'src/gamer/gamer.module';
import { ViewSubscribtionsScene } from './scenes/view-subscribtions.scene';
import { CommonModule } from 'src/common/common.module';
import { AuthModule } from 'src/auth/auth.module';
import { ComposerService } from './utils/composer.service';
import { languageMiddleware } from './middlewares/language.middleware';
import { TelegramController } from './telegram.controller';

export const LANG = 'LanguageMiddleware';

@Module({
  imports: [GamerModule, CommonModule, AuthModule],
  providers: [
    TelegramService,
    TelegramUpdate,
    BindUserScene,
    ViewSubscribtionsScene,
    ComposerService,
  ],
  exports: [TelegramService],
  controllers: [TelegramController],
})
export class TelegramModule {}
