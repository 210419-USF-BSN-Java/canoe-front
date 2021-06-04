import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class FlightService {
  url =
    'https://maps.googleapis.com/maps/api/place/textsearch/json?query=airport';
  airport: any = null;

  constructor(private httpClient: HttpClient) {}

  getAirport(place: string) {
    return this.httpClient.get(
      `${this.url} ${place}&radius=150000&key=${environment.STREAM}`
    );
  }
}
