import { Markup } from 'telegraf';
export declare const mainMenuButtons: Markup.Markup<import("typegram").ReplyKeyboardMarkup>;
export declare const backMenuButtton: Markup.Markup<import("typegram").ReplyKeyboardMarkup>;
export declare const viewSubscriptionsMenuButtons: (btns: {
    text: string;
    data: string;
}[]) => Markup.Markup<import("typegram").InlineKeyboardMarkup>;
