import { SceneContext } from '../telegram.interface';
import { TelegramService } from '../telegram.service';
export declare class BindUserScene {
    protected telegramService: TelegramService;
    constructor(telegramService: TelegramService);
    onSceneEnter(ctx: SceneContext): Promise<void>;
    hearsReturn(ctx: any): Promise<void>;
    onText(ctx: any): Promise<void>;
    onRandomCommand(): number;
    onLeaveCommand(ctx: SceneContext): Promise<void>;
}
