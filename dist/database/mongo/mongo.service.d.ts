import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { DefaultEnvConfig } from '../../config/interfaces';
export declare class MongoConfigService implements MongooseOptionsFactory {
    private configService;
    constructor(configService: ConfigService<DefaultEnvConfig>);
    createMongooseOptions(): MongooseModuleOptions;
}
