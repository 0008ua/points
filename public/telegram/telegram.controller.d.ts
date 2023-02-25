import { TelegramService } from './telegram.service';
import { Request } from 'express';
import { GamerService } from 'src/gamer/gamer.service';
import { MessageThousandRoundDto } from './dto/message.dto';
export declare class TelegramController {
    private readonly telegramService;
    private readonly gamerService;
    constructor(telegramService: TelegramService, gamerService: GamerService);
    unsubscribe(_id: string, { user }: Request): Promise<void>;
    messages({ user }: Request, messages: MessageThousandRoundDto[]): Promise<void>;
}
