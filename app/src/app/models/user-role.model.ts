export class UserRole {
  userRole: string;
  userRoleId: number;

  constructor(userRole: string, userRoleId: number) {
    this.userRole = userRole;
    this.userRoleId = userRoleId;
  }

  setUserRole(role: string) {
    this.userRole = role;
  }

  getUserRole() {
    return this.userRole;
  }

  getUserRoleId() {
    return this.userRoleId;
  }

  setUserRoleId(id: number) {
    this.userRoleId = id;
  }
}
