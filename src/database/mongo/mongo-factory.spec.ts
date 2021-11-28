import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { DefaultEnvConfig, MongoDBConfig, MsaConfigModule } from '../../config';
import { mongoFactory } from './index';
import { MsaLogger, MsaLoggerModule } from '../../log';

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
          imports: [MsaConfigModule, MsaLoggerModule],
          useFactory: mongoFactory,
          inject: [ConfigService, MsaLogger],
        }),
      ],
    }).compile();

    module = moduleRef.get<MsaConfigModule>(MsaConfigModule);
    service = moduleRef.get<ConfigService<DefaultEnvConfig>>(ConfigService);
  });

  it('should be defined', async () => {
    expect(module).toBeDefined();
  });

  it('should be read host mongodb', () => {
    expect(service.get<string>('database.host')).toBe('localhost:27017');
    const config: MongoDBConfig = service.get<MongoDBConfig>('database');
    expect(config.host).toBe('localhost:27017');
    expect(config.user).toBe('');
    expect(config.password).toBe('');
    expect(config.name).toBe('msa');
  });

  // it('connection should be defined', async () => {
  //   expect(mongoose.connection.readyState).toBe(1);
  // });
});
