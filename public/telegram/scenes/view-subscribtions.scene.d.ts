import { TelegramService } from '../telegram.service';
export declare class ViewSubscribtionsScene {
    protected telegramService: TelegramService;
    constructor(telegramService: TelegramService);
    onSceneEnter(ctx: any): Promise<void>;
    hearsReturn(ctx: any): Promise<void>;
    onAction(ctx: any): Promise<void>;
}
