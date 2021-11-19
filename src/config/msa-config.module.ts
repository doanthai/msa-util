import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigModuleOptions } from '@nestjs/config';
import defaultConfig from './default-configuration';
import * as path from 'path';

export interface MsaConfigModuleOptions extends ConfigModuleOptions {
  folder: string;
  isShareModule?: boolean;
  env: string;
}

@Module({})
export class MsaConfigModule {
  static register(options: MsaConfigModuleOptions): DynamicModule {
    const envFilePath = !options.isShareModule
      ? path.resolve(
          __dirname,
          '../../../..', // back root dir from node_module
          options.folder,
          `${options.env || process.env.NODE_ENV}.env`,
        )
      : path.resolve(
          __dirname,
          options.folder,
          `${options.env || process.env.NODE_ENV}.env`,
        );
    console.log(envFilePath);
    return {
      module: MsaConfigModule,
      imports: [
        ConfigModule.forRoot({
          ...options,
          load: [defaultConfig],
          envFilePath,
        }),
      ],
    };
  }
}
