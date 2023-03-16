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
const core_1 = require("@nestjs/core");
const nestjs_telegraf_1 = require("nestjs-telegraf");
const auth_service_1 = require("../auth/auth.service");
const error_constants_1 = require("../common/error.constants");
const helpers_service_1 = require("../common/helpers.service");
const gamer_service_1 = require("../gamer/gamer.service");
const telegraf_1 = require("telegraf");
const telegram_constants_1 = require("./telegram.constants");
let TelegramService = class TelegramService {
    constructor(bot, gamerService, authService, helpersService, moduleRef) {
        this.bot = bot;
        this.gamerService = gamerService;
        this.authService = authService;
        this.helpersService = helpersService;
        this.moduleRef = moduleRef;
        this.bot.use((ctx, next) => {
            if (ctx.update.message) {
                this.language = ctx.update.message.from.language_code;
            }
            return next();
        });
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
        let query = {
            telegramId,
            telegramSubscriptionName,
        };
        if (this.language) {
            query = Object.assign(Object.assign({}, query), { telegramLanguage: this.language });
        }
        await this.gamerService.update(gamer._id.toString(), query);
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
    async broadcast(messages, strategy) {
        const injector = this.moduleRef.get(strategy);
        for (const message of messages) {
            const gamer = await this.gamerService.findOneAllData(message.playerId);
            if (gamer.telegramId) {
                this.sendMessage({
                    chatId: gamer.telegramId,
                    text: await injector.compose(messages, gamer.telegramLanguage),
                }, 'HTML');
            }
        }
    }
};
TelegramService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_telegraf_1.InjectBot)(telegram_constants_1.TELEGRAM_BOT_NAME)),
    __metadata("design:paramtypes", [telegraf_1.Telegraf,
        gamer_service_1.GamerService,
        auth_service_1.AuthService,
        helpers_service_1.HelpersService,
        core_1.ModuleRef])
], TelegramService);
exports.TelegramService = TelegramService;
//# sourceMappingURL=telegram.service.js.map