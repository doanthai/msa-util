import { DynamicModule } from '@nestjs/common';
import { ConfigModuleOptions } from '@nestjs/config';
export interface MsaConfigModuleOptions extends ConfigModuleOptions {
    folder: string;
    env: string;
}
export declare class MsaConfigModule {
    static register(options: MsaConfigModuleOptions): DynamicModule;
}
