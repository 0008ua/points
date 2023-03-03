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
exports.ComposeThousandRoundStrategy = void 0;
const common_1 = require("@nestjs/common");
const app_environment_1 = require("../../app.environment");
const gamer_service_1 = require("../../gamer/gamer.service");
let ComposeThousandRoundStrategy = class ComposeThousandRoundStrategy {
    constructor(gamerService) {
        this.gamerService = gamerService;
        this.environment = app_environment_1.environment;
    }
    async compose(messages, lang) {
        const language = lang === 'uk' ? 'uk' : 'en';
        const tg = this.environment[language].games[messages[0].gameType];
        const tc = this.environment[language].common;
        let text = `<b>'${tg.name}' ${tc.round} ${tc.hasFinished}</b>\n${tc.results}:\n`;
        for (const [index, message] of messages.entries()) {
            const player = await this.gamerService.findOneAllData(message.playerId);
            text += `<i>${player.name}</i>: ${message.data.lastScores.total}\n`;
        }
        return text;
    }
};
ComposeThousandRoundStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [gamer_service_1.GamerService])
], ComposeThousandRoundStrategy);
exports.ComposeThousandRoundStrategy = ComposeThousandRoundStrategy;
//# sourceMappingURL=compose-thousand-round.strategy.js.map