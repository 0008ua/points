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
exports.GameController = void 0;
const common_1 = require("@nestjs/common");
const game_service_1 = require("./game.service");
const create_game_dto_1 = require("./dto/create-game.dto");
const update_game_dto_1 = require("./dto/update-game.dto");
const passport_1 = require("@nestjs/passport");
let GameController = class GameController {
    constructor(gameService) {
        this.gameService = gameService;
    }
    create(dto, { user }) {
        const newGame = Object.assign(Object.assign({}, dto), { owner: user._id });
        console.log('newGame', newGame);
        return this.gameService.create(newGame);
    }
    getWithQuery(query, { user }) {
        if (Object.keys(query).length === 0) {
            return this.gameService.getAll(user._id);
        }
        return this.gameService.getWithQuery(query, user._id);
    }
    findOne(_id, { user }) {
        return this.gameService.findOne(_id, user._id);
    }
    update(_id, dto, { user }) {
        return this.gameService.update(_id, dto, user._id);
    }
    remove(_id, { user }) {
        return this.gameService.remove(_id, user._id);
    }
};
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_game_dto_1.CreateGameDto, Object]),
    __metadata("design:returntype", void 0)
], GameController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], GameController.prototype, "getWithQuery", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)(':_id'),
    __param(0, (0, common_1.Param)('_id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], GameController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Put)(':_id'),
    __param(0, (0, common_1.Param)('_id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_game_dto_1.UpdateGameDto, Object]),
    __metadata("design:returntype", void 0)
], GameController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Delete)(':_id'),
    __param(0, (0, common_1.Param)('_id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], GameController.prototype, "remove", null);
GameController = __decorate([
    (0, common_1.Controller)(['store/game', 'store/games']),
    __metadata("design:paramtypes", [game_service_1.GameService])
], GameController);
exports.GameController = GameController;
//# sourceMappingURL=game.controller.js.map