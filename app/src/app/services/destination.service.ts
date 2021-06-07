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
    let post = {
      destination
    }
    console.log("saving " + this.destination + post);

      return this.http
        .post('http://3.132.232.218:8085/user/saveDestination', post)
        .pipe(map((res) => res as string));    
        this.destination = destination;

  }

  getDestination() {
    return this.destination;
  }
}
