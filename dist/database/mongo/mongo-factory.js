"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (configService) => {
    const config = configService.get('database');
    return {
        uri: `mongodb${config.isSRV ? '+srv' : ''}://
      ${config.user}:${config.password}@${config.host}/${config.database}
      ?retryWrites=true&w=majority&readPreference=secondaryPreferred`,
    };
};
//# sourceMappingURL=mongo-factory.js.map