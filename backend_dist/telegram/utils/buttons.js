"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onSubscribeSceneCmd = exports.backCmd = exports.startCmd = exports.backMenuButtton = exports.mainMenuButtons = void 0;
const telegraf_1 = require("telegraf");
const telegram_constants_1 = require("../telegram.constants");
exports.mainMenuButtons = telegraf_1.Markup.keyboard([
    telegram_constants_1.BUTTON_TEXT.subscribe,
]).resize();
exports.backMenuButtton = telegraf_1.Markup.keyboard([telegram_constants_1.BUTTON_TEXT.back]).resize();
const startCmd = async (ctx) => await ctx.reply('Welcome', Object.assign({}, exports.mainMenuButtons));
exports.startCmd = startCmd;
const backCmd = async (ctx) => await ctx.reply('You back to main menu', Object.assign({}, exports.mainMenuButtons));
exports.backCmd = backCmd;
const onSubscribeSceneCmd = async (ctx) => await ctx.reply('Enter code', Object.assign({}, exports.backMenuButtton));
exports.onSubscribeSceneCmd = onSubscribeSceneCmd;
//# sourceMappingURL=buttons.js.map