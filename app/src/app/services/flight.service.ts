import { Injectable, OnInit } from '@angular/core';
import { DestinationService } from './destination.service';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor(public dService: DestinationService) {}

  public test() {
    console.log('FLIGHT SERVICE');
    console.log(this.dService.getFrom());
    console.log(this.dService.getDestination());

    // get airports with google places

    // get flights with amadeus
  }
}
