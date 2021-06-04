import { Injectable } from '@angular/core';
import { DestinationService } from './destination.service';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  url =
    'https://03xsaqcsqh.execute-api.us-east-2.amazonaws.com/api-places-airports';
  fromAirport = '';
  destinationAirport = '';
  flights: string[] = [];

  constructor(
    private dService: DestinationService,
    private httpClient: HttpClient
  ) {}

  public getFromAirport() {
    console.log('flight service: getFromAirport');
    return this.httpClient.post(this.url, { place: this.dService.getFrom() });
  }

  public getDestinationAirport() {
    console.log('flight service: getDestinationAirport');
    return this.httpClient.post(this.url, {
      place: this.dService.getDestination(),
    });
  }
}
