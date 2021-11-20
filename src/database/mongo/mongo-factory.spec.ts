import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DefaultEnvConfig } from '../../config/interfaces';
import { Test, TestingModule } from '@nestjs/testing';
import { MsaConfigModule } from '../../config';
import { mongoFactory } from './index';

describe('MongoDBModule', () => {
  let module: MongooseModule;
  let service: ConfigService<DefaultEnvConfig>;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        MsaConfigModule.register({
          folder: '../../env-test',
          env: 'mongo',
          isShareModule: true,
          isGlobal: true,
        }),
        MongooseModule.forRootAsync({
          imports: [MsaConfigModule],
          useFactory: mongoFactory,
          inject: [ConfigService],
        }),
      ],
    }).compile();

    module = moduleRef.get<MsaConfigModule>(MsaConfigModule);
    service = moduleRef.get<ConfigService<DefaultEnvConfig>>(ConfigService);
  });

  it('should be defined', async () => {
    expect(module).toBeDefined();
  });
});

