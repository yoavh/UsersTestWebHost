import { createConnection, Connection } from 'typeorm';
import logger from './logger';
let dbConn: Connection;

export const connected = (): boolean => {
  return typeof dbConn !== 'undefined';
};
export function connectToDb(): void {
  if (connected()) {
    logger.debug('connected');
  }
  createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 54320,
    username: 'admin_users_test',
    password: 'useRs!test',
    database: 'users_test',
    logging: true,
    logger: 'file',
    entities: ['dist-server/repositories/*.js'],
    synchronize: true,
  })
    .then((conn) => {
      logger.debug(`db connected to ${conn.name}`);
      dbConn = conn;
    })
    .catch((error) => {
      logger.error(`Failed to connect to database, ${error}`);
    });
}
