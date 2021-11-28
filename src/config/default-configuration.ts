import { DefaultEnvConfig } from './interfaces';

export default (): DefaultEnvConfig => ({
  port: +process.env.PORT || 3000,

  redis: {
    port: +process.env.REDIS_PORT || 6379,
    host: process.env.REDIS_HOST || 'localhost',
    cache_key: 'msa-',
    default_ttl: +process.env.REDIS_DEFAULT_TTL || 120,
    db: 0,
  },

  database: {
    host: process.env.DATABASE_HOST || 'localhost:27017',
    name: process.env.DATABASE_NAME || 'msa',
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    ssl: process.env.DATABASE_SSL === 'true',
    poolSize: +process.env.DATABASE_POOL_SIZE || 3,
    isSRV: process.env.DATABASE_IS_SRV === 'true',
    isDebug: process.env.DATABASE_IS_DEBUG === 'true',
  },

  kafka: {
    consumerGroupId: process.env.KAFKA_CONSUMER_GROUP_ID,
    hostname: process.env.KAFKA_HOSTNAME,
    password: process.env.KAFKA_PASSWORD,
    defaultTopic: process.env.KAFKA_DEFAULT_TOPIC,
  },
  loggerOutput: process.env.LOGGER_OUTPUT?.split(','),
});
