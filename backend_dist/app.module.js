"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const serve_static_1 = require("@nestjs/serve-static");
const path = require("path");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const mongo_config_1 = require("./common/config/mongo.config");
const analytics_module_1 = require("./analytics/analytics.module");
const gamer_module_1 = require("./gamer/gamer.module");
const game_module_1 = require("./game/game.module");
const logger_module_1 = require("./logger/logger.module");
const common_module_1 = require("./common/common.module");
const telegram_module_1 = require("./telegram/telegram.module");
const telegraf_module_1 = require("./telegram/telegraf.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path.join(__dirname, '..', 'frontend_dist'),
                exclude: ['/api*'],
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: mongo_config_1.getMongoConfig,
            }),
            telegram_module_1.TelegramModule,
            telegraf_module_1.TelegrafDynamicModule.forRootAsync(),
            auth_module_1.AuthModule,
            config_1.ConfigModule.forRoot(),
            analytics_module_1.AnalyticsModule,
            game_module_1.GameModule,
            gamer_module_1.GamerModule,
            logger_module_1.LoggerModule,
            common_module_1.CommonModule,
            telegram_module_1.TelegramModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map