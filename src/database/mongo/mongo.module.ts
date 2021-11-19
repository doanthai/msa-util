import { DynamicModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MsaConfigModule, MsaConfigModuleOptions } from '../../config';
import { MongoConfigService } from './mongo.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({})
export class MongoModule {
  static register(options: MsaConfigModuleOptions): DynamicModule {
    return {
      module: MongoModule,
      imports: [
        MongooseModule.forRootAsync({
          imports: [ConfigModule],
          // useExisting: MongoConfigService,
          useFactory: async (configService: ConfigService) => ({
            uri: configService.get<string>('MONGODB_URI'),
          }),
          inject: [ConfigService],
        }),
      ],
    };
  }
}
