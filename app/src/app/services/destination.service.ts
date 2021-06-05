import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  from = '';
  destination = '';

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
}
