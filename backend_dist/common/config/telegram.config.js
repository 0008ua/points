"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telegrafFactory = exports.getTelegramConfig = void 0;
const session_middleware_1 = require("../../telegram/middlewares/session.middleware");
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
const telegrafFactory = (configService) => (Object.assign(Object.assign({}, (0, exports.getTelegramConfig)(configService)), { include: [], middlewares: [session_middleware_1.sessionMiddleware] }));
exports.telegrafFactory = telegrafFactory;
//# sourceMappingURL=telegram.config.js.map