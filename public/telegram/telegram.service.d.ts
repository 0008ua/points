import { AuthService } from 'src/auth/auth.service';
import { HelpersService } from 'src/common/helpers.service';
import { GamerService } from 'src/gamer/gamer.service';
import { Telegraf } from 'telegraf';
import { ParseMode } from 'telegraf/typings/core/types/typegram';
import { Message, MessageFinishGameDto, MessageThousandRoundDto } from './dto/message.dto';
import { SubscribtionDto } from './dto/subscribtion.dto';
import { SubscribeToBotDto } from './dto/subsctibe-to-bot.dto';
import { ComposerService } from './utils/composer.service';
export declare class TelegramService {
    readonly bot: Telegraf<any>;
    private readonly gamerService;
    private readonly authService;
    private readonly helpersService;
    private readonly composerService;
    language: string;
    constructor(bot: Telegraf<any>, gamerService: GamerService, authService: AuthService, helpersService: HelpersService, composerService: ComposerService);
    sendMessage(message: Message, parse_mode?: ParseMode): Promise<void>;
    subscribeToBot({ telegramId, telegramSubscriptionName, telegramCheckCode, }: SubscribeToBotDto): Promise<void>;
    unsubscribeFromBot(gamerId: string, owner?: string): Promise<void>;
    getSubscribtions(telegramId: string): Promise<SubscribtionDto[]>;
    broadcastMessagesFinishGame(messages: MessageFinishGameDto[]): Promise<void>;
    broadcastMessagesThousandRound(messages: MessageThousandRoundDto[]): Promise<void>;
}
