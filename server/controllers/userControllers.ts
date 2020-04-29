import logger from '../utils/logger';
import { Request, Response, NextFunction, Router } from 'express';
import IController from './icontroller';

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
    throw new Error('my error');
    res.send('respond with a resource');
    next();
  };
}

export default UserController;
