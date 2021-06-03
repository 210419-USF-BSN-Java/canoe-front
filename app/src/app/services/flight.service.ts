import { Injectable, OnInit } from '@angular/core';
import { DestinationService } from './destination.service';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  destination: string = '';
  constructor(public dService: DestinationService) {}

  public test() {
    console.log('FLIGHT SERVICE');
    console.log(this.dService.getDestination());
  }
}
