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
exports.LocalStrategy = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const passport_1 = require("@nestjs/passport");
const passport_local_1 = require("passport-local");
const auth_service_1 = require("../auth.service");
const user_entity_1 = require("../entities/user.entity");
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(userModel, authService) {
        super({
            usernameField: 'name',
            passwordField: 'password',
        });
        this.userModel = userModel;
        this.authService = authService;
    }
    async validate(name, password) {
        const userCandidate = {
            name,
            password,
        };
        return this.userModel
            .isNameExist(userCandidate.name)
            .then((userFromDb) => this.userModel.isPasswordMatched(userCandidate.password, userFromDb))
            .then((userFromDb) => this.authService.createUserData(userFromDb));
    }
};
LocalStrategy = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [Object, auth_service_1.AuthService])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;
//# sourceMappingURL=local.strategy.js.map