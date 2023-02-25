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
exports.ErrorLoggerSchema = exports.ErrorLogger = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
let ErrorLogger = class ErrorLogger {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 'Unknown Error' }),
    __metadata("design:type", String)
], ErrorLogger.prototype, "message", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ErrorLogger.prototype, "owner", void 0);
ErrorLogger = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        collection: 'games',
        statics: {
            async createErrorLogger(errorLogger) {
                try {
                    return this.create(errorLogger);
                }
                catch (error) {
                    throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
                }
            },
        },
    })
], ErrorLogger);
exports.ErrorLogger = ErrorLogger;
exports.ErrorLoggerSchema = mongoose_1.SchemaFactory.createForClass(ErrorLogger);
//# sourceMappingURL=error-logger.entity.js.map