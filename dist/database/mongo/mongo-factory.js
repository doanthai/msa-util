"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoFactory = void 0;
const mongoFactory = async (configService) => {
    const config = configService.get('database');
    let uri = `mongodb${config.isSRV ? '+srv' : ''}://`;
    if (config.user)
        uri += `${config.user}:${config.password}@`;
    uri += `${config.host}/${config.name}?retryWrites=true&w=majority&readPreference=secondaryPreferred`;
    return {
        uri,
    };
};
exports.mongoFactory = mongoFactory;
//# sourceMappingURL=mongo-factory.js.map