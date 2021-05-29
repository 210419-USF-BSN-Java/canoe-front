import { Component, OnInit } from '@angular/core';

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

  constructor() { }

 submitForm(): void {
   console.log("submit signup")
    //validate form data
    // call signup service
    // signUpService(this.firstName, this.lastName, this.email, this.username, this.password)

  }

  ngOnInit(): void {
  }

}
