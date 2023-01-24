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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = exports.UserSchema = exports.User = exports.UserRole = void 0;
const enums_1 = require("@nestjs/common/enums");
const exceptions_1 = require("@nestjs/common/exceptions");
const mongoose_1 = require("@nestjs/mongoose");
const bcryptjs_1 = require("bcryptjs");
const error_constants_1 = require("../common/error.constants");
var UserRole;
(function (UserRole) {
    UserRole["Member"] = "member";
    UserRole["Guest"] = "guest";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
let User = class User {
};
__decorate([
    (0, mongoose_1.Prop)({ unique: true, required: true }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: UserRole, default: UserRole.Guest }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
User = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        collection: 'users',
        statics: {
            isNameUnique(name) {
                return new Promise((resolve, reject) => {
                    this.findOne({ name })
                        .then((userFromDb) => {
                        if (userFromDb) {
                            return reject(new exceptions_1.HttpException(...error_constants_1.NAME_EXIST));
                        }
                        return resolve(true);
                    })
                        .catch((err) => reject(err));
                });
            },
            isNameExist(name) {
                return new Promise((resolve, reject) => {
                    this.findOne({ name })
                        .then((userFromDb) => {
                        if (userFromDb) {
                            return resolve(userFromDb);
                        }
                        return reject(new exceptions_1.HttpException(...error_constants_1.USER_NOT_FOUND));
                    })
                        .catch((err) => reject(err));
                });
            },
            isPasswordMatched(candidatePassword, userFromDb) {
                return new Promise((resolve, reject) => {
                    (0, bcryptjs_1.compare)(candidatePassword, userFromDb.password)
                        .then((passwordMatched) => {
                        if (passwordMatched) {
                            return resolve({
                                name: userFromDb.name,
                                role: userFromDb.role,
                                _id: userFromDb._id.toString(),
                            });
                        }
                        else {
                            return reject(new exceptions_1.HttpException(...error_constants_1.WRONG_PASSWORD));
                        }
                    })
                        .catch((err) => reject(err));
                });
            },
            findUserByIdAndUpdateTimestamp(_id) {
                return new Promise((resolve, reject) => {
                    if (!_id) {
                        return reject(new exceptions_1.HttpException(...error_constants_1.USER_NOT_FOUND));
                    }
                    this.findOneAndUpdate({ _id }, { $set: {} }, {
                        upsert: false,
                        useFindAndModify: false,
                        new: true,
                        rawResult: false,
                    })
                        .then((userFromDb) => {
                        if (userFromDb) {
                            return resolve(userFromDb);
                        }
                        return reject(new exceptions_1.HttpException(...error_constants_1.USER_NOT_FOUND));
                    })
                        .catch((err) => reject(err));
                });
            },
            async createUser(user) {
                try {
                    return this.create(user);
                }
                catch (error) {
                    throw new exceptions_1.HttpException(error.message, enums_1.HttpStatus.BAD_REQUEST);
                }
            },
        },
    })
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
exports.userModel = { name: User.name, schema: exports.UserSchema };
//# sourceMappingURL=user.model.js.map