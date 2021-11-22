import { Injectable, LoggerService } from '@nestjs/common';
import cluster from 'cluster';
import * as os from 'os';

const numCPUs = os.cpus().length;

@Injectable()
export class AppClusterService {
  static clusteize(logger: LoggerService, callback: () => void): void {
    if (cluster.isPrimary) {
      logger.log(`Master server started on ${process.pid}`);
      for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
      }
      cluster.on('online', (worker) => {
        logger.log('Worker %s is online', worker.process.pid);
      });
      cluster.on('exit', (worker) => {
        logger.log(`Worker ${worker.process.pid} died. Restarting`);
        cluster.fork();
      });
    } else {
      logger.log(`Cluster server started on ${process.pid}`);
      callback();
    }
  }
}
