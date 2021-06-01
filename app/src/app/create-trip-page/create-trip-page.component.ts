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

  addTrip() {
    this.showElement = !this.showElement;
  }
  element: string = '';
  elements: string[] = [
    'Add Flight',
    'Add Lodging',
    'Add Local Attraction',
    'Add Local Eatery',
  ];
  splitLocation: string[] = [];

  city: string = '';
  country: string = '';
  addTripElement(element: string) {
    switch (element) {
      case 'Add Flight':
        this.showFlights = true;
        this.showLodging = false;
        this.showAttractions = false;
        this.showFood = false;
        break;
      case 'Add Lodging':
        this.showFlights = false;
        this.showLodging = true;
        this.showAttractions = false;
        this.showFood = false;
        break;
      case 'Add Local Attraction':
        this.showFlights = false;
        this.showLodging = false;
        this.showAttractions = true;
        this.showFood = false;
        break;
      case 'Add Local Eatery':
        this.showFlights = false;
        this.showLodging = false;
        this.showAttractions = false;
        this.showFood = true;
        break;
      default:
        console.log('default');
        break;
    }
  }
}
