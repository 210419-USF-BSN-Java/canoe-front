import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
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

    console.log('***************');
    console.log('   SIGN UP     ');
    console.log('***************');

    return this.http
      .post('http://ec2-3-141-202-118.us-east-2.compute.amazonaws.com:8085/user/signup', signUpFormData)
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
      .pipe(map((res) => res as User));
  }
}
