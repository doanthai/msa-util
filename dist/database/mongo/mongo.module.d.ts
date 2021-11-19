import { DynamicModule } from '@nestjs/common';
import { MsaConfigModuleOptions } from '../../config';
export declare class MongoModule {
    static register(options: MsaConfigModuleOptions): DynamicModule;
}
