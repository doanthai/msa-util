export interface EnvConfig {
    [key: string]: any;
}
export interface MongoDBConfig extends EnvConfig {
    host?: string;
    name?: string;
    user?: string;
    password?: string;
    ssl?: boolean;
    poolSize?: number;
    isSRV?: boolean;
}
export interface RedisConfig extends EnvConfig {
    port?: number;
    host?: string;
    cache_key?: string;
    db?: number;
}
export interface KafkaConfig extends EnvConfig {
    consumerGroupId?: string;
    hostname?: string;
    password?: string;
    defaultTopic?: string;
}
export interface DefaultEnvConfig extends EnvConfig {
    port?: number;
    redis?: RedisConfig;
    database?: MongoDBConfig;
    kafka?: KafkaConfig;
    loggerOutput?: string[];
}
