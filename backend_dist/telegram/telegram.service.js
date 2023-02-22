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
exports.TelegramService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_telegraf_1 = require("nestjs-telegraf");
const auth_service_1 = require("../auth/auth.service");
const error_constants_1 = require("../common/error.constants");
const helpers_service_1 = require("../common/helpers.service");
const gamer_service_1 = require("../gamer/gamer.service");
const telegraf_1 = require("telegraf");
const telegram_constants_1 = require("./telegram.constants");
let TelegramService = class TelegramService {
    constructor(bot, gamerService, authService, helpersService) {
        this.bot = bot;
        this.gamerService = gamerService;
        this.authService = authService;
        this.helpersService = helpersService;
    }
    async sendMessage(message, parse_mode = 'Markdown') {
        await this.bot.telegram.sendMessage(message.chatId, message.text, {
            parse_mode: parse_mode,
        });
    }
    async subscribeToBot({ telegramId, telegramSubscriptionName, telegramCheckCode, }) {
        const gamer = await this.gamerService.findOneByQuery({ telegramCheckCode });
        if (!gamer) {
            throw new common_1.HttpException(...error_constants_1.WRONG_CODE);
        }
        await this.gamerService.update(gamer._id.toString(), {
            telegramId,
            telegramSubscriptionName,
        });
    }
    async unsubscribeFromBot(gamerId, owner) {
        const patch = {
            telegramId: '',
            telegramSubscriptionName: '',
            telegramCheckCode: this.helpersService.generateTelegramSecurityCode(),
        };
        await this.gamerService.update(gamerId, patch, owner);
    }
    async getSubscribtions(telegramId) {
        const gamers = await this.gamerService.findByQuery({ telegramId });
        return await Promise.all(gamers.map(async (gamer) => {
            const userData = await this.authService.findById(gamer.owner);
            const ownerName = userData.name;
            return {
                _id: gamer._id.toString(),
                name: gamer.name,
                ownerName: ownerName,
            };
        }));
    }
    async composeFinishGameMessage(messages) {
        let text = `<b>Game '${messages[0].gameType}' has finished</b>\n\n`;
        for (const message of messages) {
            const gamer = await this.gamerService.findOneAllData(message.playerId);
            text += `<i>${gamer.name}</i> - ${message.score}\n`;
        }
        return text;
    }
    async composeMessageThousandRound(messages) {
        let text = `<b>${messages[0].gameType}</b>\n\n`;
        for (const message of messages) {
            const player = await this.gamerService.findOneAllData(message.playerId);
            text += `<i>${player.name}:</i> ${message.lastScores.name === 'r' || message.lastScores.name === 's'
                ? message.lastScores.name.toUpperCase()
                : message.lastScores.value} total: ${message.lastScores.total}\n`;
        }
        return text;
    }
    async broadcastMessages(playerId, text) {
        const gamer = await this.gamerService.findOneAllData(playerId);
        if (gamer.telegramId) {
            this.sendMessage({
                chatId: gamer.telegramId,
                text,
            }, 'HTML');
        }
    }
    async broadcastMessagesFinishGame(messages) {
        const text = await this.composeFinishGameMessage(messages);
        for (const message of messages) {
            this.broadcastMessages(message.playerId, text);
        }
    }
    async broadcastMessagesThousandRound(messages) {
        const text = await this.composeMessageThousandRound(messages);
        for (const message of messages) {
            this.broadcastMessages(message.playerId, text);
        }
    }
};
TelegramService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_telegraf_1.InjectBot)(telegram_constants_1.TELEGRAM_BOT_NAME)),
    __metadata("design:paramtypes", [telegraf_1.Telegraf,
        gamer_service_1.GamerService,
        auth_service_1.AuthService,
        helpers_service_1.HelpersService])
], TelegramService);
exports.TelegramService = TelegramService;
//# sourceMappingURL=telegram.service.js.map