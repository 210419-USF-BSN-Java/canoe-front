import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-trip-page',
  templateUrl: './create-trip-page.component.html',
  styleUrls: ['./create-trip-page.component.css'],
})
export class CreateTripPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  showElement = false;
  showFlights = false;
  showFood = false;
  showAttractions = false;
  showLodging = false;
  location: string = '';
  view: string = '';

  controlView(view: string): void {
    this.view = view;
  }

  labels = ['Flight', 'Lodging', 'Food', 'Explore'];
}
