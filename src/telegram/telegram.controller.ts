import {
  Body,
  Controller,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TelegramService } from './telegram.service';
import { Request } from 'express';
import { MessageDto, MessageThousandRound } from './dto/message.dto';
import { ComposeThousandRoundStrategy } from './composers/compose-thousand-round.strategy';

@Controller(['tg'])
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}

  @UseGuards(AuthGuard('jwt'))
  @Patch('unsubscribe/:_id')
  async unsubscribe(@Param('_id') _id: string, @Req() { user }: Request) {
    return this.telegramService.unsubscribeFromBot(_id, user._id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('messages/thousand-round')
  async messages(@Body() messages: MessageDto<MessageThousandRound>[]) {
    return this.telegramService.broadcast<MessageThousandRound>(
      messages,
      ComposeThousandRoundStrategy,
    );
  }
}
