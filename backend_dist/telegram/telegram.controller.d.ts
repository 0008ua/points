import { TelegrafContext } from './common/interfaces/telegraf-context.interface.ts';
export declare class AppUpdate {
    start(ctx: TelegrafContext): Promise<void>;
    help(ctx: TelegrafContext): Promise<void>;
    on(ctx: TelegrafContext): Promise<void>;
    hears(ctx: TelegrafContext): Promise<void>;
}
