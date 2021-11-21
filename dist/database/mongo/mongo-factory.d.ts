import { ConfigService } from '@nestjs/config';
import { DefaultEnvConfig } from '../../config';
import { MsaLogger } from '../../log';
export declare const mongoFactory: (configService: ConfigService<DefaultEnvConfig>, logger: MsaLogger) => Promise<{
    uri: string;
}>;
