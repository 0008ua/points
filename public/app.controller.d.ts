import { TelegramService } from './telegram/telegram.service';
export declare class AppController {
    readonly telegramService: TelegramService;
    constructor(telegramService: TelegramService);
    chat(): string;
}
