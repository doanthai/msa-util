import { Test, TestingModule } from '@nestjs/testing';
import { CONFIG_OPTIONS } from '../constants';
import { DefaultEnvConfig } from './interfaces';
import { ConfigService } from '@nestjs/config';
//
// jest.mock('dotenv');
// jest.mock('fs');

describe('ConfigService', () => {
  let service: ConfigService<DefaultEnvConfig>;

  it('should be defined', async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        ConfigService,
        {
          provide: CONFIG_OPTIONS,
          useValue: {
            folder: 'config',
            env: 'testing',
          },
        },
      ],
    }).compile();

    service = moduleRef.get<ConfigService<DefaultEnvConfig>>(ConfigService);

    expect(service).toBeDefined();
  });
});
