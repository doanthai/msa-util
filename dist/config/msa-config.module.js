"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MsaConfigModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsaConfigModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const default_configuration_1 = require("./default-configuration");
const path = require("path");
let MsaConfigModule = MsaConfigModule_1 = class MsaConfigModule {
    static register(options) {
        const envFilePath = !options.isShareModule
            ? path.resolve(__dirname, '../../../..', options.folder, `${options.env || process.env.NODE_ENV}.env`)
            : path.resolve(__dirname, options.folder, `${options.env || process.env.NODE_ENV}.env`);
        return {
            module: MsaConfigModule_1,
            imports: [
                config_1.ConfigModule.forRoot(Object.assign(Object.assign({}, options), { load: [default_configuration_1.default], envFilePath })),
            ],
        };
    }
};
MsaConfigModule = MsaConfigModule_1 = __decorate([
    (0, common_1.Module)({})
], MsaConfigModule);
exports.MsaConfigModule = MsaConfigModule;
//# sourceMappingURL=msa-config.module.js.map