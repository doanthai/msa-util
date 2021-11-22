"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppClusterService = void 0;
const common_1 = require("@nestjs/common");
const cluster_1 = require("cluster");
const os = require("os");
const numCPUs = os.cpus().length;
let AppClusterService = class AppClusterService {
    static clusteize(logger, callback) {
        if (cluster_1.default.isPrimary) {
            logger.log(`Master server started on ${process.pid}`);
            for (let i = 0; i < numCPUs; i++) {
                cluster_1.default.fork();
            }
            cluster_1.default.on('online', (worker) => {
                logger.log('Worker %s is online', worker.process.pid);
            });
            cluster_1.default.on('exit', (worker) => {
                logger.log(`Worker ${worker.process.pid} died. Restarting`);
                cluster_1.default.fork();
            });
        }
        else {
            logger.log(`Cluster server started on ${process.pid}`);
            callback();
        }
    }
};
AppClusterService = __decorate([
    (0, common_1.Injectable)()
], AppClusterService);
exports.AppClusterService = AppClusterService;
//# sourceMappingURL=app-cluster.service.js.map