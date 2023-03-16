import { TelegramService } from './telegram.service';
import { Request } from 'express';
import { MessageDto } from './dto/message.dto';
import { MessageThousandRound } from './telegram.interface';
export declare class TelegramController {
    private readonly telegramService;
    constructor(telegramService: TelegramService);
    unsubscribe(_id: string, { user }: Request): Promise<void>;
    messages(messages: MessageDto<MessageThousandRound>[]): Promise<void>;
}
