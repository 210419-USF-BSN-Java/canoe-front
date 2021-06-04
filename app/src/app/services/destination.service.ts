import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  from: string = '';
  destination: string = '';

  constructor() {}
  setFrom(from: string) {
    this.from = from;
  }

  public getFrom() {
    return this.from;
  }

  setDestination(destination: string) {
    this.destination = destination;
  }

  public getDestination() {
    return this.destination;
  }
}
