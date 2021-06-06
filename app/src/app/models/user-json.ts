import { User } from './user.model';

export class UserJSON {
  user: User;

  constructor(user: User) {
    this.user = user;
  }
}
