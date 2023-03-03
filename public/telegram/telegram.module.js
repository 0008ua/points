"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramModule = void 0;
const common_1 = require("@nestjs/common");
const telegram_service_1 = require("./telegram.service");
const telegram_update_1 = require("./telegram.update");
const bind_user_scene_1 = require("./scenes/bind-user.scene");
const gamer_module_1 = require("../gamer/gamer.module");
const view_subscribtions_scene_1 = require("./scenes/view-subscribtions.scene");
const common_module_1 = require("../common/common.module");
const auth_module_1 = require("../auth/auth.module");
const telegram_controller_1 = require("./telegram.controller");
const compose_finish_game_strategy_1 = require("./composers/compose-finish-game.strategy");
const compose_thousand_round_strategy_1 = require("./composers/compose-thousand-round.strategy");
let TelegramModule = class TelegramModule {
};
TelegramModule = __decorate([
    (0, common_1.Module)({
        imports: [gamer_module_1.GamerModule, common_module_1.CommonModule, auth_module_1.AuthModule],
        providers: [
            telegram_service_1.TelegramService,
            telegram_update_1.TelegramUpdate,
            bind_user_scene_1.BindUserScene,
            view_subscribtions_scene_1.ViewSubscribtionsScene,
            compose_finish_game_strategy_1.ComposeFinishGameStrategy,
            compose_thousand_round_strategy_1.ComposeThousandRoundStrategy,
        ],
        exports: [telegram_service_1.TelegramService, compose_finish_game_strategy_1.ComposeFinishGameStrategy],
        controllers: [telegram_controller_1.TelegramController],
    })
], TelegramModule);
exports.TelegramModule = TelegramModule;
//# sourceMappingURL=telegram.module.js.map