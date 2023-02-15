"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onViewSubscribtionsCmd = exports.onSubscribeSceneCmd = exports.backCmd = exports.startCmd = void 0;
const buttons_1 = require("./buttons");
const startCmd = async (ctx) => await ctx.reply('Welcome', Object.assign({}, buttons_1.mainMenuButtons));
exports.startCmd = startCmd;
const backCmd = async (ctx) => await ctx.reply('You get back to the main menu', Object.assign({}, buttons_1.mainMenuButtons));
exports.backCmd = backCmd;
const onSubscribeSceneCmd = async (ctx) => await ctx.reply('Enter code', Object.assign({}, buttons_1.backMenuButtton));
exports.onSubscribeSceneCmd = onSubscribeSceneCmd;
const onViewSubscribtionsCmd = async (ctx) => await ctx.reply('View subscribtions', Object.assign({}, buttons_1.backMenuButtton));
exports.onViewSubscribtionsCmd = onViewSubscribtionsCmd;
//# sourceMappingURL=commands.js.map