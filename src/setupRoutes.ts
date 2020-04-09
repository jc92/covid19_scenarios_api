import Koa from 'koa';
import koaBody from 'koa-body';
import health from './routes/health';
import runSimulation from './routes/runSimulation2';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const router = require('koa-router')();

export default function setupRoutes(app: Koa): void {
  router.get('/health', koaBody(), health);
  router.get('/run/:resultType', koaBody(), runSimulation);
  app.use(router.routes());
}
