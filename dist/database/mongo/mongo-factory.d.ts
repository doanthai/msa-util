import { ConfigService } from '@nestjs/config';
import { DefaultEnvConfig } from '../../config';
export declare const mongoFactory: (configService: ConfigService<DefaultEnvConfig>) => Promise<{
    uri: string;
}>;
