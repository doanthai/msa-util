"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoFactory = void 0;
const mongoFactory = (configService) => {
    const config = configService.get('database');
    let uri = `mongodb${config.isSRV ? '+srv' : ''}://`;
    if (config.user)
        uri += `${config.user}:${config.password}@`;
    uri += `${config.user}:${config.password}@${config.host}/${config.database}?retryWrites=true&w=majority&readPreference=secondaryPreferred`;
    if (config.isDebug)
        console.log(uri);
    return {
        uri,
    };
};
exports.mongoFactory = mongoFactory;
//# sourceMappingURL=mongo-factory.js.map