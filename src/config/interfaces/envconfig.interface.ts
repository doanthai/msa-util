export interface EnvConfig {
  [key: string]: any;
}

export interface DefaultEnvConfig extends EnvConfig {
  port?: number;

  redis?: {
    port?: number;
    host?: string;
    cache_key?: string;
    db?: number;
  };

  database?: {
    host?: string;
    name?: string;
    user?: string;
    password?: string;
    ssl?: boolean;
    poolSize?: number;
    isSRV?: boolean;
  };

  kafka?: {
    consumerGroupId?: string;
    hostname?: string;
    password?: string;
    defaultTopic?: string;
  };
  loggerOutput?: string[];
}
