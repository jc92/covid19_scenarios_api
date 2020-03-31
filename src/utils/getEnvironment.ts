import { config } from 'dotenv';

config({ path: `${process.cwd()}/.env` });

type ConfigType = {
  NODE_ENV: string;
  APP_NAME: string;
  APP_HOST: string;
  APP_PORT: number;
};

let env: ConfigType | null = null;

function getEnv(key: string, defaultValue = '', shouldThrowIfNonPresent = false): string {
  if (shouldThrowIfNonPresent && process.env[key] === undefined) {
    throw new Error(`${key} environment variable not found.`);
  }
  return process.env[key] || defaultValue;
}

export function getEnvAsBoolean(key: string): boolean {
  return getEnv(key, 'false') === 'true';
}

export default function getEnvironment() {
  if (env === null) {
    env = {
      NODE_ENV: getEnv('NODE_ENV', 'production', false),
      APP_NAME: getEnv('APP_NAME', '', true),
      APP_HOST: getEnv('APP_HOST', 'localhost', false),
      APP_PORT: Number(getEnv('APP_PORT', '5000', false)),
    };
  }
  return env;
}
