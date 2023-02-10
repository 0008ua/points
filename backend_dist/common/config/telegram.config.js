"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTelegramConfig = void 0;
const getTelegramConfig = (configService) => {
    const token = configService.get('TELEGRAM_TOKEN');
    if (!token) {
        throw new Error('No TELEGRAM_TOKEN');
    }
    return {
        token,
    };
};
exports.getTelegramConfig = getTelegramConfig;
//# sourceMappingURL=telegram.config.js.map