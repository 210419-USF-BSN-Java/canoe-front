import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../services/user.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username: string = '';
  password: string = '';
  constructor(private uServ: UserService, private router: Router) { }


  submitForm(): void{
   console.log("log in")
    //validate form data
    this.uServ.login(this.username, 
      this.password)
      .subscribe(
         data => {
           console.log(data)
           this.router.navigate(['/create-trip'])
         },
         error => {
            console.log('Display Error')
            console.log(error)
         })
  }

  ngOnInit(): void {
  }

}
