import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectBot } from 'nestjs-telegraf';
import { environment } from 'src/app.environment';
import { BtnType, CmdType, UID } from 'src/app.interfaces';
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
import { ComposerService } from './utils/composer.service';

@Injectable()
export class TelegramService {
  public language: string;

  constructor(
    @InjectBot(TELEGRAM_BOT_NAME) public readonly bot: Telegraf<any>,
    private readonly gamerService: GamerService,
    private readonly authService: AuthService,
    private readonly helpersService: HelpersService,
    private readonly composerService: ComposerService,
  ) {
    this.bot.use((ctx, next) => {
      if (ctx.update.message) {
        this.language = ctx.update.message.from.language_code;
      }
      return next();
    });
  }

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

    let query: any = {
      telegramId,
      telegramSubscriptionName,
    };
    if (this.language) {
      query = { ...query, telegramLanguage: this.language };
    }
    await this.gamerService.update(gamer._id.toString(), query);
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

  // private async broadcastMessages(
  //   messages: MessageFinishGameDto[] | MessageThousandRoundDto[],
  //   text: string,
  // ) {
  //   for (const message of messages) {
  //     const gamer = await this.gamerService.findOneAllData(message.playerId);
  //     if (gamer.telegramId) {
  //       this.sendMessage(
  //         {
  //           chatId: gamer.telegramId,
  //           text,
  //         },
  //         'HTML',
  //       );
  //     }
  //   }
  // }

  async broadcastMessagesFinishGame(
    messages: MessageFinishGameDto[],
  ): Promise<void> {
    for (const message of messages) {
      const gamer = await this.gamerService.findOneAllData(message.playerId);
      if (gamer.telegramId) {
        this.sendMessage(
          {
            chatId: gamer.telegramId,
            text: await this.composerService.composeFinishGameMessage(
              messages,
              gamer.telegramLanguage,
            ),
          },
          'HTML',
        );
      }
    }
  }

  async broadcastMessagesThousandRound(
    messages: MessageThousandRoundDto[],
  ): Promise<void> {
    for (const message of messages) {
      const gamer = await this.gamerService.findOneAllData(message.playerId);
      if (gamer.telegramId) {
        this.sendMessage(
          {
            chatId: gamer.telegramId,
            text: await this.composerService.composeMessageThousandRound(
              messages,
              this.language,
            ),
          },
          'HTML',
        );
      }
    }
  }
}
