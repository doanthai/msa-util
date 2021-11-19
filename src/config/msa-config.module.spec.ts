import { ConfigService } from '@nestjs/config';
import { DefaultEnvConfig } from './interfaces';
import { Test, TestingModule } from '@nestjs/testing';
import { MsaConfigModule } from './msa-config.module';
import defaultConfig from './default-configuration';

interface CustomConfig extends DefaultEnvConfig {
  customVar: string;
}

const customConfig = (): CustomConfig => {
  const config = defaultConfig();
  return {
    ...config,
    customVar: process.env.CUSTOM_VAR,
  };
};

describe('MsaConfigModule', () => {
  let module: MsaConfigModule;
  let service: ConfigService<DefaultEnvConfig>;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        MsaConfigModule.register({ folder: './env-test', env: 'test' }),
      ],
    }).compile();

    module = moduleRef.get<MsaConfigModule>(MsaConfigModule);
    service = moduleRef.get<ConfigService<DefaultEnvConfig>>(ConfigService);
  });

  it('should be defined', async () => {
    expect(module).toBeDefined();
  });

  it('service should read config', () => {
    expect(service.get<number>('port')).toBe(1234);
  });

  it('dont read custom var', () => {
    expect(service.get('CUSTOM_VAR')).toBeUndefined();
  });

  it('should be read custom var', async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        MsaConfigModule.register({
          load: [customConfig],
          folder: './env-test',
          env: 'test2',
        }),
      ],
    }).compile();
    const service2: ConfigService<CustomConfig> =
      moduleRef.get<ConfigService<CustomConfig>>(ConfigService);

    expect(service2.get('CUSTOM_VAR')).toBeDefined();
    expect(service2.get<string>('CUSTOM_VAR')).toBe('abc');
  });
});
