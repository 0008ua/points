import { Inject, Injectable } from '@nestjs/common';
import { InjectBot } from 'nestjs-telegraf';
import { getTelegramConfig } from 'src/common/config/telegram.config';
import { Context, Telegraf } from 'telegraf';
import { TELEGRAM_BOT_NAME } from './telegram.constants';
import { TelegramOptions } from './telegram.interface';

@Injectable()
export class TelegramService {
  constructor(@InjectBot(TELEGRAM_BOT_NAME) private readonly bot: Telegraf<Context>) {}

  async sendMessage(message: string, chatId: string) {
    await this.bot.telegram.sendMessage(chatId, message);
  }
}
