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
exports.LoggerController = void 0;
const common_1 = require("@nestjs/common");
const request_mapping_decorator_1 = require("@nestjs/common/decorators/http/request-mapping.decorator");
const route_params_decorator_1 = require("@nestjs/common/decorators/http/route-params.decorator");
const passport_1 = require("@nestjs/passport");
const createErrorLogger_dto_1 = require("./dto/createErrorLogger.dto");
const logger_service_1 = require("./logger.service");
let LoggerController = class LoggerController {
    constructor(loggerService) {
        this.loggerService = loggerService;
    }
    logErrorToDB({ user }, dto) {
        const errorLogger = Object.assign(Object.assign({}, dto), { owner: user._id });
        return this.loggerService.logErrorToDB(errorLogger);
    }
};
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, request_mapping_decorator_1.Post)('log-error-to-db'),
    __param(0, (0, route_params_decorator_1.Req)()),
    __param(1, (0, route_params_decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, createErrorLogger_dto_1.CreateErrorLoggerDto]),
    __metadata("design:returntype", void 0)
], LoggerController.prototype, "logErrorToDB", null);
LoggerController = __decorate([
    (0, common_1.Controller)('logger'),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], LoggerController);
exports.LoggerController = LoggerController;
//# sourceMappingURL=logger.controller.js.map