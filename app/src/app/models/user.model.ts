import { UserRole } from './user-role.model';
export class User {
  private active: boolean;
  private userEmail: string;
  private userFname: string;
  public userId: number;
  private userLname: string;
  private userLogin: string;
  private userLoginPassword: string;
  private userRoleId: UserRole;

  constructor(
    active: boolean,
    userEmail: string,
    userFname: string,
    userLname: string,
    userId: number,
    userLogin: string,
    userLoginPassword: string,
    userRoleId: UserRole
  ) {
    (this.active = active),
      (this.userEmail = userEmail),
      (this.userFname = userFname),
      (this.userId = userId),
      (this.userLname = userLname),
      (this.userLogin = userLogin),
      (this.userLoginPassword = userLoginPassword),
      (this.userRoleId = new UserRole('test', 0));
  }

  getUserId() {
    return this.userId;
  }
}
