"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMsgText = exports.getCmdText = void 0;
const app_environment_1 = require("../../app.environment");
function getCmdText(cmd, ctx) {
    let lang = 'en';
    if (ctx.update.message) {
        lang = ctx.update.message.from.language_code === 'uk' ? 'uk' : 'en';
    }
    const { commands } = app_environment_1.environment[lang];
    return commands[cmd];
}
exports.getCmdText = getCmdText;
function getMsgText(msg, ctx) {
    let lang = 'en';
    if (ctx.update.message) {
        lang = ctx.update.message.from.language_code === 'uk' ? 'uk' : 'en';
    }
    const { messages } = app_environment_1.environment[lang];
    return messages[msg];
}
exports.getMsgText = getMsgText;
//# sourceMappingURL=composer.js.map