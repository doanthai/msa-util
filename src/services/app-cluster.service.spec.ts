import { AppClusterService } from './app-cluster.service';
import { Test, TestingModule } from '@nestjs/testing';
import { MsaLogger, MsaLoggerModule } from '../log';
import { LoggerService } from '@nestjs/common';

describe('AppClusterService', () => {
  let service: AppClusterService;
  let logger: LoggerService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [MsaLoggerModule],
      providers: [AppClusterService],
    }).compile();

    service = moduleRef.get<AppClusterService>(AppClusterService);
    // logger = moduleRef.get<MsaLogger>(MsaLogger);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // it('should be run', () => {
  //   AppClusterService.register(logger, () => {
  //     console.log('Run main');
  //   });
  // });
});
