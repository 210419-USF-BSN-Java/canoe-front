import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  from = '';
  destination = '';

  constructor(private http: HttpClient) {}
  setFrom(from: string) {
    this.from = from;
  }

  getFrom() {
    return this.from;
  }

  setDestination(destination: string): Observable<string> {
    this.destination = destination;
    console.log("posting" + this.destination);

      return this.http
        .post('http://3.132.232.218:8085/user/saveDestination', this.destination)
        .pipe(map((res) => res as string));    
  }

  getDestination() {
    return this.destination;
  }
}
