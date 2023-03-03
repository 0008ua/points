import { TelegramService } from './telegram.service';
import { Request } from 'express';
import { MessageDto, MessageThousandRound } from './dto/message.dto';
import { ComposeThousandRoundStrategy } from './composers/compose-thousand-round.strategy';
export declare class TelegramController {
    private readonly telegramService;
    private readonly composeThousandRoundStrategy;
    constructor(telegramService: TelegramService, composeThousandRoundStrategy: ComposeThousandRoundStrategy);
    unsubscribe(_id: string, { user }: Request): Promise<void>;
    messages(messages: MessageDto<MessageThousandRound>[]): Promise<void>;
}
