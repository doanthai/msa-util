import { MsaLoggerModule } from './msa-logger.module';
import { MsaLogger } from './msa-logger.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('MsaLoggerModule', () => {
  let module: MsaLoggerModule;
  let service: MsaLogger;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [MsaLoggerModule],
    }).compile();

    module = moduleRef.get<MsaLoggerModule>(MsaLoggerModule);
    service = moduleRef.get<MsaLogger>(MsaLogger);
  });

  it('should be defined', async () => {
    expect(module).toBeDefined();
  });

  it('should be defined service', () => {
    expect(service).toBeDefined();
  });
});
