import { ConfigService } from '@nestjs/config';
import { DefaultEnvConfig } from '../config';
export declare const cachingFactory: (configService: ConfigService<DefaultEnvConfig>) => {
    ttl: number;
    isGlobal: boolean;
};
