import { Injectable } from '@angular/core';
import { DestinationService } from './destination.service';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  url =
    'https://maps.googleapis.com/maps/api/place/textsearch/json?query=airport';
  fromAirport = '';
  destinationAirport = '';
  flights: string[] = [];

  constructor(
    private dService: DestinationService,
    private httpClient: HttpClient
  ) {}

  public async getFromAirport() {
    const results = await axios.get(
      `${this.url} ${this.fromAirport}&radius=150000&key=${process.env.GMAPS_API_KEY}`
    );

    const airports = await results.data.results.filter(
      (el: { types: string | string[] }) => el.types.includes('airport')
    );

    console.log(airports[0].name);
    return airports[0].name;
  }

  public async getDestinationAirport() {
    const results = await axios.get(
      `${this.url} ${this.destinationAirport}&radius=150000&key=${process.env.GMAPS_API_KEY}`
    );

    const airports = await results.data.results.filter(
      (el: { types: string | string[] }) => el.types.includes('airport')
    );

    console.log(airports[0].name);
    return airports[0].name;
  }
}
