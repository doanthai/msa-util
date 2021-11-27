import { ConfigService } from '@nestjs/config';
import { DefaultEnvConfig, RedisConfig } from '../config';

export const cachingFactory = (
  configService: ConfigService<DefaultEnvConfig>,
) => {
  const redis: RedisConfig = configService.get<RedisConfig>('redis');
  return {
    ttl: redis.default_ttl,
    isGlobal: true,
  };
};
