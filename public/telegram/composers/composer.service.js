"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComposerStrategyService = void 0;
const app_environment_1 = require("../../app.environment");
class ComposerStrategyService {
    constructor(gamerService) {
        this.gamerService = gamerService;
        this.environment = app_environment_1.environment;
    }
}
exports.ComposerStrategyService = ComposerStrategyService;
//# sourceMappingURL=composer.service.js.map