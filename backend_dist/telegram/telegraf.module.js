"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TelegrafDynamicModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegrafDynamicModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nestjs_telegraf_1 = require("nestjs-telegraf");
const telegram_config_1 = require("../common/config/telegram.config");
const session_middleware_1 = require("./middlewares/session.middleware");
const telegram_constants_1 = require("./telegram.constants");
let TelegrafDynamicModule = TelegrafDynamicModule_1 = class TelegrafDynamicModule {
    static forRootAsync() {
        const useFactory = this.extendFactory(telegram_config_1.getTelegramConfig);
        return {
            module: TelegrafDynamicModule_1,
            imports: [
                nestjs_telegraf_1.TelegrafModule.forRootAsync({
                    botName: telegram_constants_1.TELEGRAM_BOT_NAME,
                    useFactory,
                    inject: [config_1.ConfigService],
                    imports: [config_1.ConfigModule],
                }),
            ],
        };
    }
    static extendFactory(factory) {
        return (...args) => (Object.assign(Object.assign({}, factory(...args)), { include: [], middlewares: [session_middleware_1.sessionMiddleware] }));
    }
};
TelegrafDynamicModule = TelegrafDynamicModule_1 = __decorate([
    (0, common_1.Module)({})
], TelegrafDynamicModule);
exports.TelegrafDynamicModule = TelegrafDynamicModule;
//# sourceMappingURL=telegraf.module.js.map