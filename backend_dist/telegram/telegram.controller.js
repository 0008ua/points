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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUpdate = void 0;
const nestjs_telegraf_1 = require("nestjs-telegraf");
const telegraf_context_interface_ts_1 = require("./common/interfaces/telegraf-context.interface.ts");
let AppUpdate = class AppUpdate {
    async start(ctx) {
        await ctx.reply('Welcome');
    }
    async help(ctx) {
        await ctx.reply('Send me a sticker');
    }
    async on(ctx) {
        await ctx.reply('👍');
    }
    async hears(ctx) {
        await ctx.reply('Hey there');
    }
};
__decorate([
    (0, nestjs_telegraf_1.Start)(),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof telegraf_context_interface_ts_1.TelegrafContext !== "undefined" && telegraf_context_interface_ts_1.TelegrafContext) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], AppUpdate.prototype, "start", null);
__decorate([
    (0, nestjs_telegraf_1.Help)(),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof telegraf_context_interface_ts_1.TelegrafContext !== "undefined" && telegraf_context_interface_ts_1.TelegrafContext) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AppUpdate.prototype, "help", null);
__decorate([
    (0, nestjs_telegraf_1.On)('sticker'),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof telegraf_context_interface_ts_1.TelegrafContext !== "undefined" && telegraf_context_interface_ts_1.TelegrafContext) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AppUpdate.prototype, "on", null);
__decorate([
    (0, nestjs_telegraf_1.Hears)('hi'),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof telegraf_context_interface_ts_1.TelegrafContext !== "undefined" && telegraf_context_interface_ts_1.TelegrafContext) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], AppUpdate.prototype, "hears", null);
AppUpdate = __decorate([
    (0, nestjs_telegraf_1.Update)()
], AppUpdate);
exports.AppUpdate = AppUpdate;
//# sourceMappingURL=telegram.controller.js.map