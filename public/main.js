"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const fs = require("fs");
const path = require("path");
const nestjs_telegraf_1 = require("nestjs-telegraf");
const telegram_constants_1 = require("./telegram/telegram.constants");
async function bootstrap() {
    let app;
    if (process.env.NODE_ENV === 'development') {
        const httpsOptions = {
            key: fs.readFileSync(path.join(__dirname, '..', 'security', 'cert.key')),
            cert: fs.readFileSync(path.join(__dirname, '..', 'security', 'cert.pem')),
        };
        app = await core_1.NestFactory.create(app_module_1.AppModule, { httpsOptions });
    }
    else {
        app = await core_1.NestFactory.create(app_module_1.AppModule);
    }
    const bot = app.get((0, nestjs_telegraf_1.getBotToken)(telegram_constants_1.TELEGRAM_BOT_NAME));
    app.use(bot.webhookCallback('/api/' + process.env.TELEGRAM_TOKEN.slice(11)));
    app.setGlobalPrefix('api');
    await app.listen(process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map