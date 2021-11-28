import { Test, TestingModule } from '@nestjs/testing';
import { MsaLoggerModule } from '../log';
import { CACHE_MANAGER, CacheModule } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cache } from 'cache-manager';
import { cachingFactory } from './caching-factory';
import { MsaConfigModule } from '../config';

describe('CachingService', () => {
  let cacheManage: Cache;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        MsaConfigModule.register({
          folder: '../../env-test',
          env: 'redis',
          isShareModule: true,
          isGlobal: true,
        }),
        CacheModule.registerAsync({
          imports: [MsaLoggerModule],
          useFactory: cachingFactory,
          inject: [ConfigService],
        }),
      ],
    }).compile();

    cacheManage = moduleRef.get<Cache>(CACHE_MANAGER);
  });

  it('should be defined', () => {
    expect(cacheManage).toBeDefined();
  });

  it('should be cached', async () => {
    await cacheManage.set('key', 'value');
    const value = await cacheManage.get('key');
    expect(value).toBe('value');
  });

  it('should be clear', async () => {
    await cacheManage.set('keyc', 'value');
    await cacheManage.del('keyc');
    const value = await cacheManage.get('keyc');
    expect(value).toBe(null);
  });

  it('remove cache when time out', async () => {
    jest.useFakeTimers();
    await cacheManage.set('keyttl', 'value', { ttl: 5 }); // set timeout 5s
    const value = await cacheManage.get('keyttl');
    expect(value).toBe('value');
    await setTimeout(async () => {
      const value = await cacheManage.get('keyttl');
      console.log(value);
      expect(value).toBe(null);
    }, 7000);
    jest.runAllTimers();
  });
});
