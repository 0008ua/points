import { UID } from 'src/app.interfaces';
import { AuthService } from 'src/auth/auth.service';
import { HelpersService } from 'src/common/helpers.service';
import { GamerService } from 'src/gamer/gamer.service';
import { Context, Telegraf } from 'telegraf';
import { ParseMode } from 'telegraf/typings/core/types/typegram';
import { Message, MessageFinishGameDto, MessageThousandRoundDto } from './dto/message.dto';
import { SubscribtionDto } from './dto/subscribtion.dto';
import { SubscribeToBotDto } from './dto/subsctibe-to-bot.dto';
export declare class TelegramService {
    private readonly bot;
    private readonly gamerService;
    private readonly authService;
    private readonly helpersService;
    constructor(bot: Telegraf<Context>, gamerService: GamerService, authService: AuthService, helpersService: HelpersService);
    sendMessage(message: Message, parse_mode?: ParseMode): Promise<void>;
    subscribeToBot({ telegramId, telegramSubscriptionName, telegramCheckCode, }: SubscribeToBotDto): Promise<void>;
    unsubscribeFromBot(gamerId: string, owner?: string): Promise<void>;
    getSubscribtions(telegramId: string): Promise<SubscribtionDto[]>;
    composeFinishGameMessage(messages: MessageFinishGameDto[]): Promise<string>;
    composeMessageThousandRound(messages: MessageThousandRoundDto[]): Promise<string>;
    broadcastMessages(playerId: UID, text: string): Promise<void>;
    broadcastMessagesFinishGame(messages: MessageFinishGameDto[]): Promise<void>;
    broadcastMessagesThousandRound(messages: MessageThousandRoundDto[]): Promise<void>;
}
