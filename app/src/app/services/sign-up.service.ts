import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment as env} from '../../environments/environment'




@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  
  constructor(private http: HttpClient) { }

  signup( userFname: string, userLname: string,userEmail: string,userLogin: string, userLoginPassword: string):Observable<string>{
    let signUpFormData = {
      userFname,
      userLname,
      userEmail,
      userLogin,
      userLoginPassword
    }

    console.log("***************")
    console.log("SIGN UP SERVICE")
    console.log("***************")

    return this.http.post('http://localhost:8085/user/signup', signUpFormData).pipe(map(res => res as string))
    }

  }
