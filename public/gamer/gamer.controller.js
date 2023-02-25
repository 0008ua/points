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
exports.GamerController = void 0;
const common_1 = require("@nestjs/common");
const gamer_service_1 = require("./gamer.service");
const create_gamer_dto_1 = require("./dto/create-gamer.dto");
const update_gamer_dto_1 = require("./dto/update-gamer.dto");
const passport_1 = require("@nestjs/passport");
const helpers_service_1 = require("../common/helpers.service");
let GamerController = class GamerController {
    constructor(gamerService, helpersService) {
        this.gamerService = gamerService;
        this.helpersService = helpersService;
    }
    create(dto, { user }) {
        const code = this.helpersService.generateTelegramSecurityCode();
        const newGamer = Object.assign(Object.assign({}, dto), { owner: user._id, uniqueName: user._id + dto.name, telegramCheckCode: code, telegramId: '', telegramSubscriptionName: '', telegramLanguage: 'en' });
        return this.gamerService.create(newGamer);
    }
    async getWithQuery(query, { user }) {
        if (Object.keys(query).length === 0) {
            return this.gamerService.getAll(user._id);
        }
        return this.gamerService.getWithQuery(query, user._id);
    }
    findOne(_id, { user }) {
        return this.gamerService.findOne(_id, user._id);
    }
    update(_id, { user }, dto) {
        return this.gamerService.update(_id, dto, user._id);
    }
    remove(_id, { user }) {
        return this.gamerService.remove(_id, user._id);
    }
};
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gamer_dto_1.CreateGamerDto, Object]),
    __metadata("design:returntype", void 0)
], GamerController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GamerController.prototype, "getWithQuery", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)(':_id'),
    __param(0, (0, common_1.Param)('_id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], GamerController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Put)(':_id'),
    __param(0, (0, common_1.Param)('_id')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, update_gamer_dto_1.UpdateGamerDto]),
    __metadata("design:returntype", void 0)
], GamerController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Delete)(':_id'),
    __param(0, (0, common_1.Param)('_id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], GamerController.prototype, "remove", null);
GamerController = __decorate([
    (0, common_1.Controller)(['store/gamer', 'store/gamers']),
    __metadata("design:paramtypes", [gamer_service_1.GamerService,
        helpers_service_1.HelpersService])
], GamerController);
exports.GamerController = GamerController;
//# sourceMappingURL=gamer.controller.js.map