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
exports.TelegramController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const telegram_service_1 = require("./telegram.service");
const gamer_service_1 = require("../gamer/gamer.service");
let TelegramController = class TelegramController {
    constructor(telegramService, gamerService) {
        this.telegramService = telegramService;
        this.gamerService = gamerService;
    }
    async unsubscribe(_id, { user }) {
        return this.telegramService.unsubscribeFromBot(_id, user._id);
    }
    async messages({ user }, messages) {
        console.log('messages', messages);
        for (const message of messages) {
            const gamer = await this.gamerService.findOneAllData(message.gamerId, user._id);
            if (gamer.telegramId) {
                this.telegramService.sendMessage(gamer.telegramId, message.message);
            }
        }
    }
};
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Patch)('unsubscribe/:_id'),
    __param(0, (0, common_1.Param)('_id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TelegramController.prototype, "unsubscribe", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)('messages'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array]),
    __metadata("design:returntype", Promise)
], TelegramController.prototype, "messages", null);
TelegramController = __decorate([
    (0, common_1.Controller)(['tg']),
    __metadata("design:paramtypes", [telegram_service_1.TelegramService,
        gamer_service_1.GamerService])
], TelegramController);
exports.TelegramController = TelegramController;
//# sourceMappingURL=telegram.controller.js.map