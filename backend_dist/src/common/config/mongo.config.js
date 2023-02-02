"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMongoConfig = void 0;
const getMongoConfig = async (configService) => {
    return Object.assign({ uri: getMongoString(configService) }, getMongoOptions);
};
exports.getMongoConfig = getMongoConfig;
const getMongoString = (configService) => configService.get('DB_URL');
const getMongoOptions = () => ({
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
//# sourceMappingURL=mongo.config.js.map