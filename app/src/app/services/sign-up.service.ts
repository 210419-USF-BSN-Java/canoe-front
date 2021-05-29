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

  signup( userFname: string, userLname: string,userEmail: string,userLogin: string, userLoginPassword: string):Observable<boolean>{
    let signUpFormData = {
      userFname,
      userLname,
      userEmail,
      userLogin,
      userLoginPassword
    }

    return this.http.post(`${env.CANOE_BACK_URL}/users/signup`, signUpFormData).pipe(map(res => res as boolean))
    }

  }
