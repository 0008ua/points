import { SceneContext } from '../telegram.interface';
export declare class BindUserScene {
    onSceneEnter(ctx: SceneContext): Promise<void>;
    hearsReturn(ctx: any): Promise<void>;
    onText(ctx: any): Promise<void>;
    onRandomCommand(): number;
    onLeaveCommand(ctx: SceneContext): Promise<void>;
}
