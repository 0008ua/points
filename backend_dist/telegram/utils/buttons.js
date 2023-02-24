"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewSubscriptionsMenuButtons = exports.backMenuButtton = exports.mainMenuButtons = void 0;
const app_environment_1 = require("../../app.environment");
const telegraf_1 = require("telegraf");
exports.mainMenuButtons = telegraf_1.Markup.keyboard([
    [app_environment_1.buttons.subscribe, app_environment_1.buttons.viewSubscribtions],
]).resize();
exports.backMenuButtton = telegraf_1.Markup.keyboard([app_environment_1.buttons.back]).resize();
const viewSubscriptionsMenuButtons = (btns) => {
    return telegraf_1.Markup.inlineKeyboard(btns.map((btn) => [telegraf_1.Markup.button.callback(btn.text, btn.data)]));
};
exports.viewSubscriptionsMenuButtons = viewSubscriptionsMenuButtons;
//# sourceMappingURL=buttons.js.map