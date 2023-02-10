import { Context, Telegraf } from 'telegraf';
export declare class TelegramService {
    private readonly bot;
    constructor(bot: Telegraf<Context>);
    sendMessage(message: string, chatId: string): Promise<void>;
}
