import { ConfigService } from '@nestjs/config';
import { DefaultEnvConfig } from '../../config';
import { LoggerService } from '@nestjs/common';
export declare const mongoFactory: (configService: ConfigService<DefaultEnvConfig>, logger: LoggerService) => Promise<{
    uri: string;
}>;
