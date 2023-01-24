"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const fs = require("fs");
const path = require("path");
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
    app.setGlobalPrefix('api');
    await app.listen(8090);
}
bootstrap();
//# sourceMappingURL=main.js.map