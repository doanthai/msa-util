import { Test, TestingModule } from '@nestjs/testing';
import { MsaLoggerModule } from '../log';
import { CacheModule } from '@nestjs/common';
import { CachingService } from './caching.service';
import { ConfigService } from '@nestjs/config';

describe('CachingService', () => {
  let service: CachingService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        MsaLoggerModule,
        CacheModule.registerAsync({
          imports: [MsaLoggerModule],
          useFactory: () =>
          inject: [ConfigService],
        }),
      ],
      providers: [CachingService],
    }).compile();

    service = moduleRef.get<CachingService>(CachingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be run', () => {

  });
});
