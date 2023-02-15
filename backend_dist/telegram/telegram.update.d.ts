import { SceneContext } from './telegram.interface';
export declare class TelegramUpdate {
    start(ctx: SceneContext): Promise<void>;
    hearsBack(ctx: any): Promise<void>;
    hearsSubscribe(ctx: any): Promise<void>;
    hearsVievSubscribtions(ctx: any): Promise<void>;
}
