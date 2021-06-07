import { DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import './app.json';

export interface TripView {
  destination: string;
  arrivalAirport: string;
  arrivalDate: string;
  departAirport: string;
  departDate: string;

  foodReserveDate: string;
  foodReservationName: string;
  tourReserveDate: string;
  tourReserveName: string;

  checkInDate: string;
  checkOutDate: string;
  hotelName: string;
  hotelRating: string;
  hotel_address: string;
  pricePerNight: number;
}
@Component({
  selector: 'app-view-trip-page',
  templateUrl: './view-trip-page.component.html',
  styleUrls: ['./view-trip-page.component.css']
})


export class ViewTripPageComponent implements OnInit {

  block: any = [];
  oneTrip: any[] = [];
  myTrips: TripView[] = [];
  displayedColumns: string[] = ['destination', 'arrivalAirport', 'arrivalDate', 'departAirport', 'departDate', 'foodReserveDate', 'foodReservationName', 'tourReserveDate', 'tourReserveName', 'checkinInDate', 'checkOutDate', 'hotelName', 'hotelRating', 'hotel_address', 'pricePerNight'];
  json = [
    {
      "customer": {
        "active": true,
        "userEmail": "zhou3440@gmail.com",
        "userFname": "Kevin",
        "userId": 3,
        "userLname": "Cho",
        "userLogin": "kcho",
        "userLoginPassword": "root",
        "userRoleId": {
          "userRole": "user",
          "userRoleId": 1
        }
      },
      "customerId": 6,
      "destination": "San Francisco",
      "destinationId": 4,
      "flight": {
        "airlineName": "United",
        "arrivalAirport": "San Francisco International",
        "arrivalDate": "2021-06-06",
        "customerId": 3,
        "departAirport": "New York John F. Kennedy",
        "departDate": "2021-06-21",
        "destinationId": 4,
        "flightInfoId": 0,
        "flightNo": "331246",
        "flightPrice": 122
      },
      "flightId": 0,
      "localFood": [
        {
          "bookedDate": "2021-06-06",
          "customerId": 3,
          "destinationId": 4,
          "locaFoodName": "Las Palomas",
          "localFoodId": 6,
          "restaurantName": "Sample Restaurant"
        },
        {
          "bookedDate": "2021-06-19",
          "customerId": 3,
          "destinationId": 4,
          "locaFoodName": "Las Palmas",
          "localFoodId": 6,
          "restaurantName": "Sample Cafe"
        }
      ],
      "localTouristAttraction": [
        {
          "bookedDate": "2021-06-06",
          "customerId": 3,
          "destinationId": 4,
          "localTouristAttaraction": 3,
          "localTouristAttractionPlace": "San Francisco Zoo"
        }
      ],
      "lodging": {
        "checkInDate": "2021-06-08",
        "checkOutDate": "2021-06-10",
        "customerId": 3,
        "destinationId": 4,
        "hotelName": "Courtyard by Marriott San Francisco Fisherman's Wharf",
        "hotelRating": "4.2",
        "hotel_address": "580 Beach St, San Francisco, CA 94133, United States",
        "lodgingId": 7,
        "pricePerNight": 241
      },
      "lodgingId": 7
    },
    {
      "customer": {
        "active": true,
        "userEmail": "zhou3440@gmail.com",
        "userFname": "Kevin",
        "userId": 3,
        "userLname": "Cho",
        "userLogin": "kcho",
        "userLoginPassword": "root",
        "userRoleId": {
          "userRole": "user",
          "userRoleId": 1
        }
      },
      "customerId": 6,
      "destination": "San Jose",
      "destinationId": 4,
      "flight": {
        "airlineName": "United",
        "arrivalAirport": "San Jose International",
        "arrivalDate": "2021-06-06",
        "customerId": 3,
        "departAirport": "New York John F. Kennedy",
        "departDate": "2021-06-21",
        "destinationId": 4,
        "flightInfoId": 0,
        "flightNo": "331246",
        "flightPrice": 122
      },
      "flightId": 0,
      "localFood": [
        {
          "bookedDate": "2021-06-06",
          "customerId": 3,
          "destinationId": 4,
          "locaFoodName": "Las Palomas",
          "localFoodId": 6,
          "restaurantName": "Sample Restaurant"
        }
      ],
      "localTouristAttraction": [
        {
          "bookedDate": "2021-06-06",
          "customerId": 3,
          "destinationId": 4,
          "localTouristAttaraction": 3,
          "localTouristAttractionPlace": "San Jose Zoo"
        }
      ],
      "lodging": {
        "checkInDate": "2021-06-08",
        "checkOutDate": "2021-06-10",
        "customerId": 3,
        "destinationId": 4,
        "hotelName": "Courtyard by Marriott San Jose Fisherman's Wharf",
        "hotelRating": "4.2",
        "hotel_address": "580 Beach St, San Jose, CA 94133, United States",
        "lodgingId": 7,
        "pricePerNight": 241
      },
      "lodgingId": 7
    }
  ]
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fillData(this.myTrips);
  }

  fillData(data: TripView[]) {
    let uId;
    // let username = get the username from the login/signup service;

    // this.http.get<any>(`http://3.132.232.218:8085/user/getUser/${username}`).subscribe(
    //   (res) => {
    // uId = res.userId;

    // this.http.get<any>(`http://3.132.232.218:8085/user/gettripplan/${uId}`).subscribe(
    //   (res) => {

    for (let i = 0; i < this.json.length; i++) {
      this.block.push(i + 1);
      let dest = this.json[i].destination;
      let aAirp = this.json[i].flight.arrivalAirport;
      let arrDate = this.json[i].flight.arrivalDate;
      let depAir = this.json[i].flight.departAirport;
      let depDate = this.json[i].flight.departDate;

      let foodResDate = '';
      let foodResName = '';
      for (let j = 0; j < this.json[i].localFood.length; j++) {
        foodResDate = this.json[i].localFood[j].bookedDate;
        foodResName = this.json[i].localFood[j].locaFoodName;
      }

      let tourResDate = '';
      let tourResName = '';
      for (let k = 0; k < this.json[i].localTouristAttraction.length; k++) {
        tourResDate = this.json[i].localTouristAttraction[k].bookedDate;
        tourResName = this.json[i].localTouristAttraction[k].localTouristAttractionPlace;
      }

      let lodgeIn = this.json[i].lodging.checkInDate;
      let lodgeOut = this.json[i].lodging.checkOutDate;
      let lodgeNM = this.json[i].lodging.hotelName;
      let lodgeRat = this.json[i].lodging.hotelRating;
      let lodgeAdd = this.json[i].lodging.hotel_address;
      let lodgePri = this.json[i].lodging.pricePerNight;

      data.push({
        destination: dest,
        arrivalAirport: aAirp,
        arrivalDate: arrDate,
        departAirport: depAir,
        departDate: depDate,

        foodReserveDate: foodResDate,
        foodReservationName: foodResName,
        tourReserveDate: tourResDate,
        tourReserveName: tourResName,

        checkInDate: lodgeIn,
        checkOutDate: lodgeOut,
        hotelName: lodgeNM,
        hotelRating: lodgeRat,
        hotel_address: lodgeAdd,
        pricePerNight: lodgePri,

      })
    }

    let arrayDestination:any[] = [];

    this.oneTrip = this.myTrips;
    console.log(this.myTrips)
    console.log(this.oneTrip)
  }
}
