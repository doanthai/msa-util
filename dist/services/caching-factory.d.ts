import { ConfigService } from '@nestjs/config';
import { DefaultEnvConfig } from '../config';
export declare const cachingFactory: (configService: ConfigService<DefaultEnvConfig>) => {
    store: any;
    host: string;
    port: number;
    ttl: number;
    isGlobal: boolean;
};
