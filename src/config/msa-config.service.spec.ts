import { Test, TestingModule } from '@nestjs/testing';
import { DefaultEnvConfig } from './interfaces';
import { ConfigService } from '@nestjs/config';
import { CONFIGURATION_TOKEN } from '@nestjs/config/dist/config.constants';

describe('MsaConfigService', () => {
  let service: ConfigService<DefaultEnvConfig>;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        ConfigService,
        {
          provide: CONFIGURATION_TOKEN,
          useValue: {
            port: 1234,
          },
        },
      ],
    }).compile();

    service = moduleRef.get<ConfigService<DefaultEnvConfig>>(ConfigService);
  });

  it('should be defined', async () => {
    expect(service).toBeDefined();
  });

  it('should be read config', () => {
    expect(service.get<number>('port')).toBe(1234);
  });
});
