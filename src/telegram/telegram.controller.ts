import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TelegramService } from './telegram.service';
import { Request } from 'express';
import { GamerService } from 'src/gamer/gamer.service';
import {
  MessageThousandRound,
  MessageThousandRoundDto,
} from './dto/message.dto';

@Controller(['tg'])
export class TelegramController {
  constructor(
    private readonly telegramService: TelegramService,
    private readonly gamerService: GamerService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Patch('unsubscribe/:_id')
  async unsubscribe(@Param('_id') _id: string, @Req() { user }: Request) {
    return this.telegramService.unsubscribeFromBot(_id, user._id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('messages/thousand-round')
  async messages(
    @Req() { user }: Request,
    @Body() messages: MessageThousandRoundDto[],
  ) {
    return this.telegramService.broadcastMessagesThousandRound(messages);
  }
}
