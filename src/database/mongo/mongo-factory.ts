import { ConfigService } from '@nestjs/config';
import { DefaultEnvConfig, MongoDBConfig } from '../../config/interfaces';

export default (configService: ConfigService<DefaultEnvConfig>) => {
  const config: MongoDBConfig = configService.get<MongoDBConfig>('database');
  const uri = `mongodb${config.isSRV ? '+srv' : ''}://
      ${config.user}:${config.password}@${config.host}/${config.database}
      ?retryWrites=true&w=majority&readPreference=secondaryPreferred`;
  if (config.isDebug) console.log(uri);
  return {
    uri,
  };
};
