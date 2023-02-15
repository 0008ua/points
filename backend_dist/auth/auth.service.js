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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_entity_1 = require("./entities/user.entity");
const jwt_1 = require("@nestjs/jwt");
const bcryptjs_1 = require("bcryptjs");
const uuid_1 = require("uuid");
const error_constants_1 = require("../common/error.constants");
let AuthService = class AuthService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    createUserData(user) {
        return {
            name: user.name,
            role: user.role,
            _id: user._id.toString(),
        };
    }
    async createUser(dto) {
        let user;
        if (dto && dto.name && dto.password) {
            user = Object.assign(Object.assign({}, dto), { role: user_entity_1.UserRoles.Member });
        }
        else {
            user = {
                role: user_entity_1.UserRoles.Guest,
                name: (0, uuid_1.v4)(),
                password: (0, uuid_1.v4)(),
            };
        }
        return this.userModel
            .isNameUnique(user.name)
            .then(() => (0, bcryptjs_1.hash)(user.password, (0, bcryptjs_1.genSaltSync)()))
            .then((hash) => {
            user.password = hash;
            return this.userModel.createUser(user);
        })
            .then((newUser) => this.createUserData(newUser));
    }
    async createJwt(sub, prefix = 'Bearer ', exp = 300) {
        const date = Math.floor(Date.now() / 1000);
        const subject = Object.assign(Object.assign({}, sub), { iat: date, exp: date + exp });
        let token;
        try {
            token = await this.jwtService.signAsync(subject);
        }
        catch (error) {
            throw new common_1.HttpException(...error_constants_1.INTERNAL_SERVER_ERROR);
        }
        return prefix + token;
    }
    async findById(userId) {
        try {
            return this.createUserData(await this.userModel.findById(userId));
        }
        catch (error) {
            throw new common_1.HttpException(...error_constants_1.DB_ERROR);
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map