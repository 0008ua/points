import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { TelegramUpdate } from './telegram.update';
import { BindUserScene } from './scenes/bind-user.scene';
import { GamerModule } from 'src/gamer/gamer.module';
import { ViewSubscribtionsScene } from './scenes/view-subscribtions.scene';
import { CommonModule } from 'src/common/common.module';
import { AuthModule } from 'src/auth/auth.module';
import { TelegramController } from './telegram.controller';
import { ComposeFinishGameStrategy } from './composers/compose-finish-game.strategy';
import { ComposeThousandRoundStrategy } from './composers/compose-thousand-round.strategy';

@Module({
  imports: [GamerModule, CommonModule, AuthModule],
  providers: [
    TelegramService,
    TelegramUpdate,
    BindUserScene,
    ViewSubscribtionsScene,
    ComposeFinishGameStrategy,
    ComposeThousandRoundStrategy,
  ],
  exports: [TelegramService, ComposeFinishGameStrategy],
  controllers: [TelegramController],
})
export class TelegramModule {}
