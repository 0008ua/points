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
exports.BindUserScene = void 0;
const nestjs_telegraf_1 = require("nestjs-telegraf");
const app_environment_1 = require("../../app.environment");
const telegram_constants_1 = require("../telegram.constants");
const telegram_service_1 = require("../telegram.service");
const commands_1 = require("../utils/commands");
const composer_1 = require("../utils/composer");
let BindUserScene = class BindUserScene {
    constructor(telegramService) {
        this.telegramService = telegramService;
    }
    async onSceneEnter(ctx) {
        (0, commands_1.onSubscribeSceneCmd)(ctx);
    }
    async hearsReturn(ctx) {
        await ctx.scene.leave();
        (0, commands_1.backCmd)(ctx);
    }
    async onText(ctx) {
        try {
            await this.telegramService.subscribeToBot({
                telegramId: ctx.from.id,
                telegramSubscriptionName: ctx.from.first_name,
                telegramCheckCode: ctx.message.text,
            });
            await ctx.reply((0, composer_1.getMsgText)('subscribeSuccess', ctx));
        }
        catch (error) {
            await ctx.reply((0, composer_1.getMsgText)('subscribeError', ctx) + ' ' + error.message);
        }
        await ctx.scene.leave();
        (0, commands_1.backCmd)(ctx);
    }
};
__decorate([
    (0, nestjs_telegraf_1.SceneEnter)(),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BindUserScene.prototype, "onSceneEnter", null);
__decorate([
    (0, nestjs_telegraf_1.Hears)(app_environment_1.buttons.back),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BindUserScene.prototype, "hearsReturn", null);
__decorate([
    (0, nestjs_telegraf_1.On)('text'),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BindUserScene.prototype, "onText", null);
BindUserScene = __decorate([
    (0, nestjs_telegraf_1.Scene)(telegram_constants_1.BIND_USER),
    __metadata("design:paramtypes", [telegram_service_1.TelegramService])
], BindUserScene);
exports.BindUserScene = BindUserScene;
//# sourceMappingURL=bind-user.scene.js.map