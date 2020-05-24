import Repository from '../interfaces/repository';
import User from '../models/user';
import logger from '../utils/logger';

import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  getRepository,
} from 'typeorm';

@Entity({ name: 'users' })
@Unique(['email'])
export class UserDao extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'email' })
  email!: string;

  @Column({ name: 'first_name' })
  firstName!: string;

  @Column({ name: 'last_name' })
  lastName!: string;
}

export default class UserRepository implements Repository<User> {
  public async getAll(): Promise<(User | null)[]> {
    return UserDao.find().then((users) => {
      return users;
    });
  }
  public async getUserByEmail(email: string): Promise<User | null> {
    logger.debug(`user.getUserByEmail with email: ${email}`);
    return UserDao.findOne({ email: email }).then((user) => {
      return user ?? null;
    });
  }
  public async exists(user: User): Promise<boolean> {
    logger.debug(`user.exists with user: ${user}`);
    return true;
    /* const userModel = this.models.User;
    const result = await userModel.findOne({
      where: { user_email: user.email.toString() },
    });
    return !!result === true; */
  }
  public async delete(user: User): Promise<User> {
    logger.debug(`user.delete with user: ${user}`);
    return user;
    /* const userModel = this.models.User;
    return userModel.destroy({
      where: { user_email: user.email.toString() },
    }); */
  }
  public async save(user: User): Promise<User> {
    logger.debug(`user.save with user: ${user}`);
    return await getRepository(UserDao).save(user);

    // return await UserDao.save(UserMapper.toPersistence(user));

    /*     const userModel = this.models.User;
    const exists = await this.exists(user);
    const rawUserData = UserMapper.toPersistence(user);

    if (exists) {
      const sequelizeUser = await userModel.findOne({
        where: { user_email: user.email.toString() },
      });

      try {
        await sequelizeUser.update(rawUserData);
        // scaffold all of the other related tables (UserGenres, Tracks, etc)
        // ...
      } catch (err) {
        // If it fails, we need to roll everything back this.delete(user);
      }
    } else {
      await userModel.create(rawUserData);
    }
 */
  }
}
