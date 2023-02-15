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
exports.TelegramUpdate = void 0;
const nestjs_telegraf_1 = require("nestjs-telegraf");
const telegram_constants_1 = require("./telegram.constants");
const commands_1 = require("./utils/commands");
let TelegramUpdate = class TelegramUpdate {
    async start(ctx) {
        await (0, commands_1.startCmd)(ctx);
    }
    async hearsBack(ctx) {
        await (0, commands_1.backCmd)(ctx);
    }
    async hearsSubscribe(ctx) {
        await ctx.scene.enter(telegram_constants_1.BIND_USER);
    }
    async hearsVievSubscribtions(ctx) {
        await ctx.scene.enter(telegram_constants_1.VIEW_SUBSCRIBTIONS);
    }
};
__decorate([
    (0, nestjs_telegraf_1.Start)(),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TelegramUpdate.prototype, "start", null);
__decorate([
    (0, nestjs_telegraf_1.Hears)(telegram_constants_1.BUTTON_TEXT.back),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TelegramUpdate.prototype, "hearsBack", null);
__decorate([
    (0, nestjs_telegraf_1.Hears)(telegram_constants_1.BUTTON_TEXT.subscribe),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TelegramUpdate.prototype, "hearsSubscribe", null);
__decorate([
    (0, nestjs_telegraf_1.Hears)(telegram_constants_1.BUTTON_TEXT.viewSubscribtions),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TelegramUpdate.prototype, "hearsVievSubscribtions", null);
TelegramUpdate = __decorate([
    (0, nestjs_telegraf_1.Update)()
], TelegramUpdate);
exports.TelegramUpdate = TelegramUpdate;
//# sourceMappingURL=telegram.update.js.map