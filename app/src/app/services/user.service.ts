import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserRole } from '../models/user-role.model';
import { UserJSON } from '../models/user-json';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User = new User(true, '', '', '', 0, '', '', new UserRole('', 0));
  constructor(private http: HttpClient) {}

  signup(
    userFname: string,
    userLname: string,
    userEmail: string,
    userLogin: string,
    userLoginPassword: string
  ): Observable<string> {
    let signUpFormData = {
      userFname,
      userLname,
      userEmail,
      userLogin,
      userLoginPassword,
    };
    const user = new User(
      true,
      userEmail,
      userFname,
      userLname,
      0,
      userLogin,
      userLoginPassword,
      new UserRole('test', 0)
    );
    console.log('***************');
    console.log('   SIGN UP     ');
    console.log('***************');

    return this.http
      .post('http://localhost:8085/user/signup', signUpFormData)
      .pipe(map((res) => res as string));
  }

  // implement login
  login(userLogin: string, userLoginPassword: string): Observable<User> {
    console.log(userLogin, userLogin);
    let signUpFormData = {
      userLogin,
      userLoginPassword,
    };

    console.log('***************');
    console.log('    LOGIN     ');
    console.log('***************');

    return this.http
      .post('http://localhost:8085/user/login', signUpFormData)
      .pipe(
        map((res) => {
          return res as User;
        })
      );
  }

  saveUser(user: User) {
    this.user = user;
  }
  getUser() {
    return this.user;
  }
}
