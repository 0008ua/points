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
import { MessageDto } from './dto/message.dto';

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
  @Post('messages')
  async messages(@Req() { user }: Request, @Body() messages : MessageDto[]) {
    console.log('messages', messages);
    for (const message of messages) {
      const gamer = await this.gamerService.findOneAllData(
        message.gamerId,
        user._id,
      );
      if (gamer.telegramId) {
        this.telegramService.sendMessage(gamer.telegramId, message.message);
      }
    }
    // Promise.all(
    //   messages.map(async (message) => {
    //     const gamer = await this.gamerService.findOneAllData(
    //       message.gamerId,
    //       user._id,
    //     );
    //     if (gamer.telegramId) {
    //       this.telegramService.sendMessage(gamer.telegramId, message.message);
    //     }
    //     return;
    //   }),
    // );
  }
}
