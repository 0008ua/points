"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewSubscribtionsScene = void 0;
const nestjs_telegraf_1 = require("nestjs-telegraf");
const telegram_constants_1 = require("../telegram.constants");
const telegram_service_1 = require("../telegram.service");
const commands_1 = require("../utils/commands");
const buttons_1 = require("../utils/buttons");
const app_environment_1 = require("../../app.environment");
const composer_1 = require("../utils/composer");
let ViewSubscribtionsScene = class ViewSubscribtionsScene {
    constructor(telegramService) {
        this.telegramService = telegramService;
    }
    async onSceneEnter(ctx) {
        (0, commands_1.onViewSubscribtionsCmd)(ctx);
        const telegramId = String(ctx.from.id);
        const subscribtions = await this.telegramService.getSubscribtions(telegramId);
        if (!subscribtions.length) {
            ctx.reply((0, composer_1.getMsgText)('noSubscribtionsYet', ctx));
            this.hearsReturn(ctx);
        }
        else {
            const buttons = subscribtions.map((sub) => ({
                text: `${(0, composer_1.getMsgText)('unsubscribe', ctx)} '${sub.name}' (${(0, composer_1.getMsgText)('user', ctx)}: ${sub.ownerName})`,
                data: sub._id,
            }));
            ctx.reply((0, composer_1.getMsgText)('subscriptions', ctx) + ': ', (0, buttons_1.viewSubscriptionsMenuButtons)(buttons));
        }
    }
    async hearsReturn(ctx) {
        await ctx.scene.leave();
        (0, commands_1.backCmd)(ctx);
    }
    async onAction(ctx) {
        const gamerId = ctx.callbackQuery.data;
        try {
            await this.telegramService.unsubscribeFromBot(gamerId);
            await ctx.reply((0, composer_1.getMsgText)('unsubscribeSuccess', ctx));
            await ctx.answerCbQuery();
        }
        catch (error) {
            await ctx.reply((0, composer_1.getMsgText)('subscribeError', ctx) + ' ' + error.message);
            await ctx.answerCbQuery();
        }
        this.hearsReturn(ctx);
    }
};
__decorate([
    (0, nestjs_telegraf_1.SceneEnter)(),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ViewSubscribtionsScene.prototype, "onSceneEnter", null);
__decorate([
    (0, nestjs_telegraf_1.Hears)(app_environment_1.buttons.back),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ViewSubscribtionsScene.prototype, "hearsReturn", null);
__decorate([
    (0, nestjs_telegraf_1.On)('callback_query'),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ViewSubscribtionsScene.prototype, "onAction", null);
ViewSubscribtionsScene = __decorate([
    (0, nestjs_telegraf_1.Scene)(telegram_constants_1.VIEW_SUBSCRIBTIONS),
    __metadata("design:paramtypes", [telegram_service_1.TelegramService])
], ViewSubscribtionsScene);
exports.ViewSubscribtionsScene = ViewSubscribtionsScene;
//# sourceMappingURL=view-subscribtions.scene.js.map