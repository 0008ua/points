import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectBot } from 'nestjs-telegraf';
import { UID } from 'src/app.interfaces';
import { AuthService } from 'src/auth/auth.service';
import { UserDataDto } from 'src/auth/dto/userData.dto';
import { getTelegramConfig } from 'src/common/config/telegram.config';
import { DB_ERROR, WRONG_CODE } from 'src/common/error.constants';
import { HelpersService } from 'src/common/helpers.service';
import { CreateGameDto } from 'src/game/dto/create-game.dto';
import { Gamer, GamerModel } from 'src/gamer/entities/gamer.entity';
import { GamerService } from 'src/gamer/gamer.service';
import { Context, Telegraf } from 'telegraf';
import { ParseMode } from 'telegraf/typings/core/types/typegram';
import {
  Message,
  MessageFinishGameDto,
  MessageThousandRoundDto,
} from './dto/message.dto';
import { SubscribtionDto } from './dto/subscribtion.dto';
import { SubscribeToBotDto } from './dto/subsctibe-to-bot.dto';
import { TELEGRAM_BOT_NAME } from './telegram.constants';
import { TelegramOptions } from './telegram.interface';

@Injectable()
export class TelegramService {
  constructor(
    @InjectBot(TELEGRAM_BOT_NAME) private readonly bot: Telegraf<Context>,
    private readonly gamerService: GamerService,
    private readonly authService: AuthService,
    private readonly helpersService: HelpersService,
  ) {}

  async sendMessage(
    message: Message,
    parse_mode: ParseMode = 'Markdown',
  ): Promise<void> {
    await this.bot.telegram.sendMessage(message.chatId, message.text, {
      parse_mode: parse_mode,
    });
  }

  async subscribeToBot({
    telegramId,
    telegramSubscriptionName,
    telegramCheckCode,
  }: SubscribeToBotDto): Promise<void> {
    const gamer = await this.gamerService.findOneByQuery({ telegramCheckCode });
    if (!gamer) {
      throw new HttpException(...WRONG_CODE);
    }
    await this.gamerService.update(gamer._id.toString(), {
      telegramId,
      telegramSubscriptionName,
    });
  }

  async unsubscribeFromBot(gamerId: string, owner?: string): Promise<void> {
    const patch: SubscribeToBotDto = {
      telegramId: '',
      telegramSubscriptionName: '',
      telegramCheckCode: this.helpersService.generateTelegramSecurityCode(),
    };
    await this.gamerService.update(gamerId, patch, owner);
  }

  async getSubscribtions(telegramId: string): Promise<SubscribtionDto[]> {
    const gamers = await this.gamerService.findByQuery({ telegramId });
    return await Promise.all(
      gamers.map(async (gamer) => {
        const userData: UserDataDto = await this.authService.findById(
          gamer.owner,
        );
        const ownerName = userData.name;
        return {
          _id: gamer._id.toString(),
          name: gamer.name,
          ownerName: ownerName,
        };
      }),
    );
  }

  async composeFinishGameMessage(messages: MessageFinishGameDto[]) {
    let text = `<b>Game '${messages[0].gameType}' has finished</b>\n\n`;
    for (const message of messages) {
      const gamer = await this.gamerService.findOneAllData(message.playerId);
      text += `<i>${gamer.name}</i> - ${message.score}\n`;
    }
    return text;
  }

  async composeMessageThousandRound(
    messages: MessageThousandRoundDto[],
  ): Promise<string> {
    let text = `<b>${messages[0].gameType}</b>\n\n`;
    for (const message of messages) {
      const player = await this.gamerService.findOneAllData(message.playerId);

      text += `<i>${player.name}:</i> ${
        message.lastScores.name === 'r' || message.lastScores.name === 's'
          ? message.lastScores.name.toUpperCase()
          : message.lastScores.value
      } total: ${message.lastScores.total}\n`;
    }
    return text;
  }
  async broadcastMessages(playerId: UID, text: string) {
    const gamer = await this.gamerService.findOneAllData(playerId);
    if (gamer.telegramId) {
      this.sendMessage(
        {
          chatId: gamer.telegramId,
          text,
        },
        'HTML',
      );
    }
  }

  async broadcastMessagesFinishGame(
    messages: MessageFinishGameDto[],
  ): Promise<void> {
    const text = await this.composeFinishGameMessage(messages);
    for (const message of messages) {
      this.broadcastMessages(message.playerId, text);
    }
  }

  async broadcastMessagesThousandRound(
    messages: MessageThousandRoundDto[],
  ): Promise<void> {
    const text = await this.composeMessageThousandRound(messages);
    for (const message of messages) {
      this.broadcastMessages(message.playerId, text);
    }
  }
}
