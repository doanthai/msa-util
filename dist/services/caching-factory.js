"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cachingFactory = void 0;
const redisStore = require("cache-manager-redis-store");
const cachingFactory = (configService) => {
    const redis = configService.get('redis');
    return {
        store: redisStore,
        host: redis.host,
        port: redis.port,
        ttl: redis.default_ttl,
        isGlobal: true,
    };
};
exports.cachingFactory = cachingFactory;
//# sourceMappingURL=caching-factory.js.map