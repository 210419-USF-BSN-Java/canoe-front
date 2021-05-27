import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

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

  ngOnInit(): void {
  }

}
