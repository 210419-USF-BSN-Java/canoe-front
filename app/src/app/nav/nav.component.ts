import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  userLoggedIn: boolean = false;

  constructor(private uService: UserService) {}

  logout() {
    console.log('logout');
    this.userLoggedIn = false;
    this.uService.logout();
  }

  checkForLoggedInUser() {
    const user = this.uService.getUser();
    if (user.getUserId()) {
      this.userLoggedIn = true;
    } else {
      this.userLoggedIn = false;
    }
  }

  ngOnInit(): void {
    // check if user logged in
    this.checkForLoggedInUser();
  }
}
