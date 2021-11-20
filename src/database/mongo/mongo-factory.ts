import { ConfigService } from '@nestjs/config';
import { DefaultEnvConfig, MongoDBConfig } from '../../config';

export const mongoFactory = async (
  configService: ConfigService<DefaultEnvConfig>,
) => {
  const config: MongoDBConfig = configService.get<MongoDBConfig>('database');
  let uri = `mongodb${config.isSRV ? '+srv' : ''}://`;
  if (config.user) uri += `${config.user}:${config.password}@`;
  uri += `${config.user}:${config.password}@${config.host}/${config.database}?retryWrites=true&w=majority&readPreference=secondaryPreferred`;
  if (config.isDebug) console.log(uri);
  return {
    uri,
  };
};
