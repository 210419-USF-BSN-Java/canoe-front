import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  username = ''
  password = ''

  submitForm(): void{
    //validate form data
    // call login service
    // loginService(this.username, this.password)
    console.log('login click')
  }

  ngOnInit(): void {
  }

}
