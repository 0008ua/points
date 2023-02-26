"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telegrafFactory = exports.getTelegramConfig = void 0;
const language_middleware_1 = require("../../telegram/middlewares/language.middleware");
const session_middleware_1 = require("../../telegram/middlewares/session.middleware");
const getTelegramConfig = (configService) => {
    const token = configService.get('TELEGRAM_TOKEN');
    if (!token) {
        throw new Error('No TELEGRAM_TOKEN');
    }
    if (configService.get('NODE_ENV') === 'development') {
        return {
            token,
            launchOptions: {
                webhook: {
                    domain: configService.get('DOMAIN'),
                    hookPath: '/api/tg',
                },
            },
        };
    }
    else {
        return {
            token,
            launchOptions: {
                webhook: {
                    domain: configService.get('DOMAIN'),
                    hookPath: '/api/tg',
                },
            },
        };
    }
};
exports.getTelegramConfig = getTelegramConfig;
const telegrafFactory = (configService) => {
    return Object.assign(Object.assign({}, (0, exports.getTelegramConfig)(configService)), { include: [], middlewares: [session_middleware_1.sessionMiddleware, language_middleware_1.languageMiddleware] });
};
exports.telegrafFactory = telegrafFactory;
//# sourceMappingURL=telegram.config.js.map