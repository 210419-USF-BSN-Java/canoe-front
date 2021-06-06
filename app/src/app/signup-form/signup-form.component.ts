import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  firstName = '';
  lastName = '';
  email = '';
  username = '';
  password = '';

  constructor(private uServ: UserService, private router: Router) {}

  submitForm(): void {
    console.log('submit signup');
    //TODO validate form data
    this.uServ
      .signup(
        this.firstName,
        this.lastName,
        this.email,
        this.username,
        this.password
      )
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/login']);
        },
        (error) => {
          console.log('Sign up error');
          console.log(error);
        }
      );
  }
  ngOnInit(): void {
    // init form validation here
  }
}
