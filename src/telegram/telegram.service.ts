import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectBot } from 'nestjs-telegraf';
import { AuthService } from 'src/auth/auth.service';
import { UserDataDto } from 'src/auth/dto/userData.dto';
import { WRONG_CODE } from 'src/common/error.constants';
import { HelpersService } from 'src/common/helpers.service';
import { GamerService } from 'src/gamer/gamer.service';
import { Telegraf } from 'telegraf';
import { ParseMode } from 'telegraf/typings/core/types/typegram';
import { ComposeStrategies, Message, MessageDto } from './dto/message.dto';
import { SubscribtionDto } from './dto/subscribtion.dto';
import { SubscribeToBotDto } from './dto/subsctibe-to-bot.dto';
import { TELEGRAM_BOT_NAME } from './telegram.constants';
import { ComposeStrategy } from './telegram.interface';

@Injectable()
export class TelegramService {
  public language: string;

  constructor(
    @InjectBot(TELEGRAM_BOT_NAME) public readonly bot: Telegraf<any>,
    private readonly gamerService: GamerService,
    private readonly authService: AuthService,
    private readonly helpersService: HelpersService,
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

  async broadcast<T extends ComposeStrategies>(
    messages: MessageDto<T>[],
    strategy: ComposeStrategy<T>,
  ): Promise<void> {
    for (const message of messages) {
      const gamer = await this.gamerService.findOneAllData(message.playerId);
      if (gamer.telegramId) {
        this.sendMessage(
          {
            chatId: gamer.telegramId,
            text: await strategy.compose(messages, gamer.telegramLanguage),
          },
          'HTML',
        );
      }
    }
  }
}
