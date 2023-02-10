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
const telegram_constants_1 = require("../telegram.constants");
const buttons_1 = require("../utils/buttons");
let BindUserScene = class BindUserScene {
    async onSceneEnter(ctx) {
        (0, buttons_1.onSubscribeSceneCmd)(ctx);
    }
    async hearsReturn(ctx) {
        await ctx.scene.leave();
        (0, buttons_1.backCmd)(ctx);
    }
    async onText(ctx) {
        await ctx.reply('Ваш код ' + ctx.message.text);
        await ctx.reply('Ваш id ' + ctx.from.id);
        await ctx.scene.leave();
        (0, buttons_1.backCmd)(ctx);
    }
    onRandomCommand() {
        console.log('Use "random" command');
        return Math.floor(Math.random() * 11);
    }
    async onLeaveCommand(ctx) {
        await ctx.scene.leave();
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
    (0, nestjs_telegraf_1.Hears)(telegram_constants_1.BUTTON_TEXT.back),
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
__decorate([
    (0, nestjs_telegraf_1.Command)(['rng', 'random']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], BindUserScene.prototype, "onRandomCommand", null);
__decorate([
    (0, nestjs_telegraf_1.Command)('leave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BindUserScene.prototype, "onLeaveCommand", null);
BindUserScene = __decorate([
    (0, nestjs_telegraf_1.Scene)(telegram_constants_1.BIND_USER)
], BindUserScene);
exports.BindUserScene = BindUserScene;
//# sourceMappingURL=bind-user.js.map