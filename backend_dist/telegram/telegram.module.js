"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TelegramModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_telegraf_1 = require("nestjs-telegraf");
const telegram_service_1 = require("./telegram.service");
const telegram_update_1 = require("./telegram.update");
const bind_user_1 = require("./scenes/bind-user");
let TelegramModule = TelegramModule_1 = class TelegramModule {
    static forRootAsync(options) {
        const useFactory = this.extendFactory(options);
        return {
            module: TelegramModule_1,
            imports: [
                nestjs_telegraf_1.TelegrafModule.forRootAsync({
                    botName: options.botName,
                    useFactory,
                    inject: options.inject,
                    imports: options.imports,
                }),
            ],
        };
    }
    static extendFactory(options) {
        return (...args) => (Object.assign(Object.assign({}, options.useFactory(...args)), { include: options.include || [], middlewares: options.middlewares || [] }));
    }
};
TelegramModule = TelegramModule_1 = __decorate([
    (0, common_1.Module)({
        providers: [telegram_service_1.TelegramService, telegram_update_1.TelegramUpdate, bind_user_1.BindUserScene],
        exports: [telegram_service_1.TelegramService, telegram_update_1.TelegramUpdate, bind_user_1.BindUserScene],
    })
], TelegramModule);
exports.TelegramModule = TelegramModule;
//# sourceMappingURL=telegram.module.js.map