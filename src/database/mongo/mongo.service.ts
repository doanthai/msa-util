import { Injectable } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { DefaultEnvConfig, MongoDBConfig } from '../../config/interfaces';

@Injectable()
export class MongoConfigService implements MongooseOptionsFactory {
  constructor(private configService: ConfigService<DefaultEnvConfig>) {}

  createMongooseOptions(): MongooseModuleOptions {
    const config: MongoDBConfig =
      this.configService.get<MongoDBConfig>('database');
    return {
      uri: `mongodb${config.isSRV ? '+srv' : ''}://
      ${config.user}:${config.password}@${config.host}/${config.database}
      ?retryWrites=true&w=majority&readPreference=secondaryPreferred`,
    };
  }
}
