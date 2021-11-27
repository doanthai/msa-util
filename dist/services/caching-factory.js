"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cachingFactory = void 0;
const cachingFactory = (configService) => {
    const redis = configService.get('redis');
    return {
        ttl: redis.default_ttl,
        isGlobal: true,
    };
};
exports.cachingFactory = cachingFactory;
//# sourceMappingURL=caching-factory.js.map