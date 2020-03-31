import Koa from 'koa';
import KoaLogger from 'koa-logger';
import cors from '@koa/cors';
import setupRoutes from './setupRoutes';
import getEnvironment from './utils/getEnvironment';
import logger from './utils/logger';

const PORT = getEnvironment().APP_PORT;
const HOST = getEnvironment().APP_HOST;
const isDev = getEnvironment().NODE_ENV === 'development';

async function run() {
  const app = new Koa();
  // TODO: specify this for production
  app.use(cors());
  if (isDev) {
    app.use(KoaLogger());
  }
  setupRoutes(app);
  app.listen(PORT, HOST, () => {
    logger.info(`${getEnvironment().APP_NAME} running on port ${PORT}`);
  });

  const graceShutdown = async () => {
    logger.info('☠️  Application received SIGTERM signal. Shutting down.');
    process.exit();
  };

  // Clean up in cloud env
  process.on('SIGTERM', graceShutdown);

  // Clean up in dev env
  process.on('SIGINT', graceShutdown);
}

run();
