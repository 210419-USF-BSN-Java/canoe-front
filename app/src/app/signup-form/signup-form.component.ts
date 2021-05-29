import { Component, OnInit } from '@angular/core';
import {SignUpService} from '../services/sign-up.service'

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  firstName = '';
  lastName = '';
  email = '';
  username = '';
  password = '';

  constructor(private signUpServ: SignUpService) { }

 submitForm(): void {
   console.log("submit signup")
    //validate form data
    // call signup service
    this.signUpServ.signup(this.firstName, 
      this.lastName, 
      this.email, 
      this.username, 
      this.password)
      .subscribe( res => console.log('RESPONSE, ', res) )
  }

  ngOnInit(): void {
  }

}
