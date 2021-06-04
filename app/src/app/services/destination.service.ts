import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  from = '';
  destination = '';
  departDate = '';
  returnDate = '';

  constructor() {}
  setFrom(from: string) {
    this.from = from;
  }

  getFrom() {
    return this.from;
  }

  setDestination(destination: string) {
    this.destination = destination;
  }

  getDestination() {
    return this.destination;
  }

  getDepartDate() {
    return this.departDate;
  }

  setDepartDate(date: string) {
    this.departDate = date;
  }

  getReturnDate() {
    return this.returnDate;
  }

  setReturnDate(date: string) {
    this.returnDate = date;
  }
}
