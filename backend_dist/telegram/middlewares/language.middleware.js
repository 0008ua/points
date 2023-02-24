"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.languageMiddleware = void 0;
async function languageMiddleware(ctx, next) {
    if (ctx.update.message) {
        ctx.language = ctx.update.message.from.language_code;
    }
    next();
}
exports.languageMiddleware = languageMiddleware;
//# sourceMappingURL=language.middleware.js.map