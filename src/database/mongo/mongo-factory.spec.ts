import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { MsaConfigModule } from '../../config';
import { mongoFactory } from './index';

describe('MongoDBModule', () => {
  let module: MongooseModule;

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
  });

  it('should be defined', async () => {
    expect(module).toBeDefined();
  });
});
