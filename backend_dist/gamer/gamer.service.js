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
exports.GamerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const gamer_entity_1 = require("./entities/gamer.entity");
let GamerService = class GamerService {
    constructor(gamerModel) {
        this.gamerModel = gamerModel;
    }
    createGamerData(gamer) {
        if (Array.isArray(gamer)) {
            return gamer.map((gamer) => ({
                _id: gamer._id.toString(),
                name: gamer.name,
                color: gamer.color,
                owner: gamer.owner,
                telegramCheckCode: gamer.telegramCheckCode,
                telegramSubscriptionName: gamer.telegramSubscriptionName,
            }));
        }
        return {
            _id: gamer._id.toString(),
            name: gamer.name,
            color: gamer.color,
            owner: gamer.owner,
            telegramCheckCode: gamer.telegramCheckCode,
            telegramSubscriptionName: gamer.telegramSubscriptionName,
        };
    }
    async create(newGamer) {
        const gamer = await this.gamerModel.createGamer(newGamer);
        return this.createGamerData(gamer);
    }
    async getWithQuery(query, owner) {
        return `This action returns query game ${JSON.stringify(query)}`;
    }
    async getAll(owner) {
        const gamers = await this.gamerModel.find({ owner });
        return this.createGamerData(gamers);
    }
    async findOne(_id, owner) {
        const query = owner ? { _id, owner } : { _id };
        const gamer = await this.gamerModel.findOne(query);
        return this.createGamerData(gamer);
    }
    async findOneAllData(_id, owner) {
        const query = owner ? { _id, owner } : { _id };
        const gamer = await this.gamerModel.findOne(query);
        return gamer;
    }
    async update(_id, dto, owner) {
        let gamer;
        const query = owner ? { _id, owner } : { _id };
        try {
            gamer = await this.gamerModel.findOneAndUpdate(query, { $set: dto }, {
                upsert: true,
                useFindAndModify: true,
                new: true,
                rawResult: false,
            });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
        return this.createGamerData(gamer);
    }
    remove(_id, owner) {
        return `This action removes a #${_id} gamer`;
    }
    findByQuery(query) {
        try {
            return this.gamerModel.find(query);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    findOneByQuery(query) {
        try {
            return this.gamerModel.findOne(query);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
GamerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(gamer_entity_1.Gamer.name)),
    __metadata("design:paramtypes", [Object])
], GamerService);
exports.GamerService = GamerService;
//# sourceMappingURL=gamer.service.js.map