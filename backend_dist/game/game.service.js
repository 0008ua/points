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
exports.GameService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const gamer_service_1 = require("../gamer/gamer.service");
const telegram_service_1 = require("../telegram/telegram.service");
const game_entity_1 = require("./entities/game.entity");
let GameService = class GameService {
    constructor(gameModel, telegramService, gamerService) {
        this.gameModel = gameModel;
        this.telegramService = telegramService;
        this.gamerService = gamerService;
    }
    async composeFinishGameMessage(dto) {
        const game = dto.type;
        const players = dto.rounds.find((round) => round._id === 'result').players;
        let message = `<b>Game '${game}' has finished</b>\n`;
        for (const player of players) {
            const gamer = await this.gamerService.findOneAllData(player._id);
            message = message + `<i>${gamer.name}</i> - ${player.score}\n`;
        }
        return message;
    }
    async broadcastFinishGameMessages(dto) {
        const players = dto.rounds.find((round) => round._id === 'result').players;
        for (const player of players) {
            const gamer = await this.gamerService.findOneAllData(player._id);
            if (gamer.telegramId) {
                this.telegramService.sendMessage({
                    chatId: gamer.telegramId,
                    text: await this.composeFinishGameMessage(dto),
                }, 'HTML');
            }
        }
    }
    async create(newGame) {
        return await this.gameModel.createGame(newGame);
    }
    async getWithQuery(query, owner) {
        return `This action returns query game ${JSON.stringify(query)}`;
    }
    async getAll(owner) {
        return await this.gameModel.find({ owner });
    }
    async findOne(_id, owner) {
        return await this.gameModel.findOne({ _id, owner });
    }
    async update(_id, dto, owner) {
        try {
            return await this.gameModel.findOneAndUpdate({ _id, owner }, { $set: dto }, {
                upsert: true,
                useFindAndModify: true,
                new: true,
                rawResult: false,
            });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    remove(_id, owner) {
        return `This action removes a #${_id} game`;
    }
};
GameService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(game_entity_1.Game.name)),
    __metadata("design:paramtypes", [Object, telegram_service_1.TelegramService,
        gamer_service_1.GamerService])
], GameService);
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map