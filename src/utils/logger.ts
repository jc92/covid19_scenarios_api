/*import * as winston from 'winston';
import getEnvironment from './getEnvironment';

const logger =
  process.env.NODE_ENV === 'production'
    ? winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        defaultMeta: { service: getEnvironment().APP_NAME },
        transports: [
          new winston.transports.Console({ format: winston.format.json() }),
          new winston.transports.File({ filename: 'error.log', level: 'error' }),
          new winston.transports.File({ filename: 'combined.log' }),
        ],
      })
    : winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        defaultMeta: { service: getEnvironment().APP_NAME },
        transports: [new winston.transports.Console({ format: winston.format.simple() })],
      });
*/
const logger = {
  info: (msg: string, _options?: object) => console.log(msg),
  error: (msg: string, _options?: object) => console.error(msg),
};
export default logger;
