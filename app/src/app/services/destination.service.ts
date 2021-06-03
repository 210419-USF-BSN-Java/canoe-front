import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  destination: string = '';
  constructor() {}

  setDestination(destination: string) {
    this.destination = destination;
  }
}
