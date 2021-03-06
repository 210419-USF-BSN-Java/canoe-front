import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})

export class UserService {
  constructor( private http: HttpClient) {

  }

  saveLodging(
    checkInDate: Date,
    checkOutDate: Date,
    hotelName: string,
    hotel_address: string,
    hotelRating: string
  ): Observable<string> {
    let lodgingFormData = {
      checkInDate,
      checkOutDate,
      hotelName,
      hotel_address,
      hotelRating,
    };

    console.log('***************');
    console.log('  ADD LODGING  ');
    console.log('***************');
    
    console.log(lodgingFormData);


    return this.http
      .post('http://3.132.232.218:8085/user/saveLodging', lodgingFormData)
      .pipe(map((res) => res as string));
  }

}
