import { Injectable, LoggerService } from '@nestjs/common';
import * as cluster from 'cluster';
import { cpus } from 'os';
import { Cluster } from 'cluster';

const numCPUs = cpus().length;
const clt: Cluster = cluster as any as Cluster;

@Injectable()
export class AppClusterService {
  static register(logger: LoggerService, callback: () => void): void {
    if (clt.isPrimary) {
      logger.log(`Master server started on ${process.pid}`);
      for (let i = 0; i < numCPUs; i++) {
        clt.fork();
      }
      clt.on('online', (worker) => {
        logger.log('Worker %s is online', worker.process.pid);
      });
      clt.on('exit', (worker) => {
        logger.log(`Worker ${worker.process.pid} died. Restarting`);
        clt.fork();
      });
    } else {
      logger.log(`Cluster server started on ${process.pid}`);
      callback();
    }
  }
}
