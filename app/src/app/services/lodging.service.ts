import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})

export class UserService {
  constructor(public datepipe: DatePipe, private http: HttpClient) {

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
      .post('http://ec2-3-141-202-118.us-east-2.compute.amazonaws.com:8085/user/signup', lodgingFormData)
      .pipe(map((res) => res as string));
  }

}
