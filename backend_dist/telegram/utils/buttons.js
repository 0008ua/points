"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewSubscriptionsMenuButtons = exports.backMenuButtton = exports.mainMenuButtons = void 0;
const telegraf_1 = require("telegraf");
const telegram_constants_1 = require("../telegram.constants");
exports.mainMenuButtons = telegraf_1.Markup.keyboard([
    [telegram_constants_1.BUTTON_TEXT.subscribe, telegram_constants_1.BUTTON_TEXT.viewSubscribtions],
]).resize();
exports.backMenuButtton = telegraf_1.Markup.keyboard([telegram_constants_1.BUTTON_TEXT.back]).resize();
const viewSubscriptionsMenuButtons = (btns) => {
    return telegraf_1.Markup.inlineKeyboard(btns.map((btn) => [telegraf_1.Markup.button.callback(btn.text, btn.data)]));
};
exports.viewSubscriptionsMenuButtons = viewSubscriptionsMenuButtons;
//# sourceMappingURL=buttons.js.map