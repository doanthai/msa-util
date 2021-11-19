"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MongoModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
let MongoModule = MongoModule_1 = class MongoModule {
    static register(options) {
        return {
            module: MongoModule_1,
            imports: [
                mongoose_1.MongooseModule.forRootAsync({
                    imports: [config_1.ConfigModule],
                    useFactory: async (configService) => ({
                        uri: configService.get('MONGODB_URI'),
                    }),
                    inject: [config_1.ConfigService],
                }),
            ],
        };
    }
};
MongoModule = MongoModule_1 = __decorate([
    (0, common_1.Module)({})
], MongoModule);
exports.MongoModule = MongoModule;
//# sourceMappingURL=mongo.module.js.map