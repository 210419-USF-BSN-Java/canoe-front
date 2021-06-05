import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  airport: {} = {};
  googlePlacesUrl =
    'https://maps.googleapis.com/maps/api/place/textsearch/json?query=airport';

  // amadeusAirportCodeUrl =
  //   'https://test.api.amadeus.com/v1/reference-data/locations';

  // // example. must supply city name
  // amadeus =
  //   'https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY&keyword=';

  constructor(private httpClient: HttpClient) {}

  public getAirport(place: string) {
    console.log('FlightService: getAirports');
    return this.httpClient.get(
      `${this.googlePlacesUrl} ${place}&radius=150000&key=${environment.STREAM}`
    );
  }

  public extractAirportName(data: { results: [{ name: string }] }) {
    return data.results[0].name;
  }

  // public getAirport(city: string) {
  //   console.log('FlightService: getAirports');
  //   this.airport = getAirport(city);
  // }
  // public getAirportCOd

  // public getFlights(
  //   airport: { result: [{ name: string }] },
  //   destination: string,
  //   date: Date
  // ) {
  //   console.log('FlightService: getFlights');
  //   // airport.result[0]
  // }
}
