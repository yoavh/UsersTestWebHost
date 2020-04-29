import express from 'express';
import Controller from './controllers/controller';
import logger from './utils/logger';
import morgan from 'morgan';
// import morgan from 'morgan';
class App {
  app: express.Application;
  port: number;
  controllers: Controller[];

  constructor(port: number, controllers: Controller[] = []) {
    this.port = port;
    this.controllers = controllers;
    this.app = express();
    this.initializeMiddlewares();
    this.initializeControllers();
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      logger.info(`App listening on the port ${this.port}`);
    });
  }

  private initializeControllers(): void {
    this.controllers.forEach((controller: Controller) => {
      logger.debug(`register ${controller.path}`);
      this.app.use('/api/', controller.router);
    });
  }

  private initializeMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(
      morgan('combined', {
        stream: {
          write: (message: string): void => {
            logger.log('info', message);
          },
        },
      })
    );
  }
}
export default App;
