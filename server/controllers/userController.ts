import logger from '../utils/logger';
import { Request, Response, NextFunction, Router } from 'express';
import IController from './controller';

class UserController implements IController {
  public path = '/users';
  public router = Router();
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(this.path, this.get);
  }

  private get = (req: Request, res: Response, next: NextFunction): void => {
    logger.info('users');
    res.send('respond with a resource');
    next();
  };
}

export default UserController;
