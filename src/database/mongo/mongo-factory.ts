import { ConfigService } from '@nestjs/config';
import { DefaultEnvConfig, MongoDBConfig } from '../../config/interfaces';

export default (configService: ConfigService<DefaultEnvConfig>) => {
  const config: MongoDBConfig = configService.get<MongoDBConfig>('database');
  return {
    uri: `mongodb${config.isSRV ? '+srv' : ''}://
      ${config.user}:${config.password}@${config.host}/${config.database}
      ?retryWrites=true&w=majority&readPreference=secondaryPreferred`,
  };
};
