import { ConfigService } from '@nestjs/config';
import { DefaultEnvConfig, MongoDBConfig } from '../../config';
import { MsaLogger } from '../../log';

export const mongoFactory = async (
  configService: ConfigService<DefaultEnvConfig>,
  logger: MsaLogger,
) => {
  const config: MongoDBConfig = configService.get<MongoDBConfig>('database');
  let uri = `mongodb${config.isSRV ? '+srv' : ''}://`;
  if (config.user) uri += `${config.user}:${config.password}@`;
  uri += `${config.host}/${config.name}?retryWrites=true&w=majority&readPreference=secondaryPreferred`;
  if (config.isDebug) logger.debug(uri);
  return {
    uri,
  };
};
