import { Module } from '@nestjs/common';
import { MsaLogger } from './msa-logger.service';

@Module({
  providers: [MsaLogger],
  exports: [MsaLogger],
})
export class MsaLoggerModule {}
