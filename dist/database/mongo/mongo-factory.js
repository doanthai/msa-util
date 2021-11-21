"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoFactory = void 0;
const mongoFactory = async (configService, logger) => {
    const config = configService.get('database');
    let uri = `mongodb${config.isSRV ? '+srv' : ''}://`;
    if (config.user)
        uri += `${config.user}:${config.password}@`;
    uri += `${config.host}/${config.name}?retryWrites=true&w=majority&readPreference=secondaryPreferred`;
    if (config.isDebug)
        logger.debug(uri);
    return {
        uri,
    };
};
exports.mongoFactory = mongoFactory;
//# sourceMappingURL=mongo-factory.js.map