"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onViewSubscribtionsCmd = exports.onSubscribeSceneCmd = exports.backCmd = exports.startCmd = void 0;
const buttons_1 = require("./buttons");
const composer_1 = require("./composer");
const startCmd = async (ctx) => await ctx.reply((0, composer_1.getCmdText)('welcome', ctx), Object.assign({}, buttons_1.mainMenuButtons));
exports.startCmd = startCmd;
const backCmd = async (ctx) => await ctx.reply((0, composer_1.getCmdText)('getBack', ctx), Object.assign({}, buttons_1.mainMenuButtons));
exports.backCmd = backCmd;
const onSubscribeSceneCmd = async (ctx) => await ctx.reply((0, composer_1.getCmdText)('enterCode', ctx), Object.assign({}, buttons_1.backMenuButtton));
exports.onSubscribeSceneCmd = onSubscribeSceneCmd;
const onViewSubscribtionsCmd = async (ctx) => await ctx.reply((0, composer_1.getCmdText)('viewSubscribtions', ctx), Object.assign({}, buttons_1.backMenuButtton));
exports.onViewSubscribtionsCmd = onViewSubscribtionsCmd;
//# sourceMappingURL=commands.js.map