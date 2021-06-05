import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TripService {
  departureDate: Date = new Date();
  returnDate: Date = new Date();

  constructor() {}

  getDepartureDate() {
    return this.departureDate;
  }

  setDepartureDate(date: Date) {
    this.departureDate = date;
  }

  getReturnDate() {
    return this.returnDate;
  }

  setReturnDate(date: Date) {
    this.returnDate = date;
  }
}
