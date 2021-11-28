import { ConfigService } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';
import { DefaultEnvConfig, RedisConfig } from '../config';

export const cachingFactory = (
  configService: ConfigService<DefaultEnvConfig>,
) => {
  const redis: RedisConfig = configService.get<RedisConfig>('redis');
  return {
    store: redisStore,
    host: redis.host,
    port: redis.port,
    ttl: redis.default_ttl,
    isGlobal: true,
  };
};
