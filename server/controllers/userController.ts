import { Request, Response, NextFunction, Router } from 'express';
import Controller from '../interfaces/controller';
import UserRepository from '../repositories/userRepository';
import User from '../models/user';

class UserController implements Controller {
  public path = '/users';
  public router = Router();
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(`${this.path}`, this.get);
    this.router.post(`${this.path}`, this.post);
    1;
  }

  private get = (req: Request, res: Response, next: NextFunction): void => {
    const email = req.query.email as string;
    if (email) {
      this.userRepository
        .getUserByEmail(email)
        .then((user) => {
          res.send(user);
          next();
        })
        .catch((error) => {
          next(error);
        });
    } else {
      this.userRepository
        .getAll()
        .then((users) => {
          res.send(users);
          next();
        })
        .catch((error) => {
          next(error);
        });
    }
  };
  private post = (req: Request, res: Response, next: NextFunction): void => {
    const user = new User(
      req.body.firstName,
      req.body.lastName,
      req.body.email
    );
    this.userRepository
      .save(user)
      .then((user) => {
        res.send(user);
        next();
      })
      .catch((error) => {
        next(error);
      });
  };
}

export default UserController;
