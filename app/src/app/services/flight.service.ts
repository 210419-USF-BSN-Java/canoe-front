import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Airport } from '../models/airport';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  airport: {} = {};
  googlePlacesUrl =
    'https://maps.googleapis.com/maps/api/place/textsearch/json?query=airport';

  constructor(private httpClient: HttpClient) {}

  public getAirport(place: string): Observable<Airport> {
    console.log('FlightService: getAirports');
    return this.httpClient
      .get<Airport>(
        `${this.googlePlacesUrl} ${place}&radius=150000&key=${environment.STREAM}`
      )
      .pipe(
        map((data) => new Airport().deserialize(data)),
        catchError(() => throwError('Airport not found'))
      );
  }

  getIcaoCode(airport: string) {}
}
