import { Test, TestingModule } from '@nestjs/testing';
import { MsaLogger } from './msa-logger.service';

describe('MsaLogger', () => {
  let service: MsaLogger;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [MsaLogger],
    }).compile();

    service = moduleRef.get<MsaLogger>(MsaLogger);
  });

  it('should be defined', async () => {
    expect(service).toBeDefined();
  });
});
