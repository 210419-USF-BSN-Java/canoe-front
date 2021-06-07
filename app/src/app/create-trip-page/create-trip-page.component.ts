import { Component, OnInit } from '@angular/core';
// import { User } from '../models/user.model';
// import { DestinationService } from '../services/destination.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-create-trip-page',
  templateUrl: './create-trip-page.component.html',
  styleUrls: ['./create-trip-page.component.css'],
})
export class CreateTripPageComponent implements OnInit {
  labels = ['Flight', 'Lodging', 'Food', 'Explore'];
  view = 'from';

  constructor(private uService: UserService) {}

  controlView(view: string): void {
    this.view = view;
  }

  checkUser() {
    this.uService.getUser();
  }
  ngOnInit() {
    this.checkUser();
  }
}
