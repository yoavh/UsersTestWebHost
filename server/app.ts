import express from 'express';
import IController from './controllers/icontroller';
import logger from './utils/logger';
import morgan from 'morgan';
// import morgan from 'morgan';
class App {
  app: express.Application;
  port: number;
  controllers: IController[];

  constructor(port: number, controllers: IController[] = []) {
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
    this.controllers.forEach((controller: IController) => {
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
