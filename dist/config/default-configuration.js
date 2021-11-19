"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    var _a;
    return ({
        port: +process.env.PORT || 3000,
        redis: {
            port: +process.env.REDIS_PORT || 6379,
            host: process.env.REDIS_HOST || 'localhost',
            cache_key: 'msa-',
            db: 0,
        },
        database: {
            host: process.env.DATABASE_HOST || 'localhost',
            name: process.env.DATABASE_NAME || 'msa',
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            ssl: process.env.DATABASE_SSL === 'true',
            poolSize: +process.env.DATABASE_POOL_SIZE || 3,
            isSRV: process.env.DATABASE_IS_SRV === 'true',
        },
        kafka: {
            consumerGroupId: process.env.KAFKA_CONSUMER_GROUP_ID,
            hostname: process.env.KAFKA_HOSTNAME,
            password: process.env.KAFKA_PASSWORD,
            defaultTopic: process.env.KAFKA_DEFAULT_TOPIC,
        },
        loggerOutput: (_a = process.env.LOGGER_OUTPUT) === null || _a === void 0 ? void 0 : _a.split(','),
    });
};
//# sourceMappingURL=default-configuration.js.map