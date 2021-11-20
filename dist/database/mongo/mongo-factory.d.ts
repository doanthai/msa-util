import { ConfigService } from '@nestjs/config';
import { DefaultEnvConfig } from '../../config/interfaces';
export declare const mongoFactory: (configService: ConfigService<DefaultEnvConfig>) => {
    uri: string;
};
