import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

export interface TripView {
  num: number;
  destination: string;
  arrivalAirport: string;
  arrivalDate: string;
  departAirport: string;
  departDate: string;

  foodReserveDate: string[];
  foodReservationName: string[];
  tourReserveDate: string[];
  tourReserveName: string[];

  checkingInDate: string;
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
  user = this.uService.getUser();

  myTrips: TripView[] = [];

  displayedColumns: string[] = ['destination', 'arrivalAirport', 'arrivalDate', 'departAirport', 'departDate', 'foodReserveDate', 'foodReservationName', 'tourReserveDate', 'tourReserveName', 'checkInDate', 'checkOutDate', 'hotelName', 'hotelRating', 'hotel_address', 'pricePerNight'];
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
        },
        {
          "bookedDate": "2021-06-09",
          "customerId": 3,
          "destinationId": 4,
          "localTouristAttaraction": 3,
          "localTouristAttractionPlace": "Chinatown"
        },
        {
          "bookedDate": "2021-06-08",
          "customerId": 3,
          "destinationId": 4,
          "localTouristAttaraction": 3,
          "localTouristAttractionPlace": "Redwood Forest"
        }
      ],
      "lodging": {
        "checkInDate": "2021-06-08",
        "checkOutDate": "2021-06-28",
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
        "checkOutDate": "2021-06-30",
        "customerId": 3,
        "destinationId": 4,
        "hotelName": "DoubleTree by Hilton Hotel",
        "hotelRating": "4.7",
        "hotel_address": "2015 Market Center Blvd, San Jose, CA 94133, United States",
        "lodgingId": 7,
        "pricePerNight": 241
      },
      "lodgingId": 7
    }
  ]
  constructor(private http: HttpClient, private uService: UserService) { }

  ngOnInit(): void {
    this.fillData(this.myTrips);
  }

  fillData(data: TripView[]) {
    let user = this.uService.getUser();
    console.log(user);

    let uId = user.userId;
    console.log(uId);

    
    this.http.get<any>(`http://3.132.232.218:8085/user/getUser/2`).subscribe(
      (res) => {
        console.log(res);
      })
    this.http.get<any>(`http://3.132.232.218:8085/user/gettripplan/${uId}`).subscribe(
      (res) => {

        for (let i = 0; i < res.length; i++) {
          console.log(res);
          this.block.push(i + 1);
          let dest = res[i].destination;
          let aAirp = res[i].flight.arrivalAirport;
          let arrDate = res[i].flight.arrivalDate;
          let depAir = res[i].flight.departAirport;
          let depDate = res[i].flight.departDate;

          let foodResDate = [];
          let foodResName = [];
          for (let j = 0; j < res[i].localFood.length; j++) {
            foodResDate.push(" " + res[i].localFood[j].bookedDate);
            foodResName.push(" " + res[i].localFood[j].locaFoodName);
          }

          let tourResDate = [];
          let tourResName = [];
          for (let k = 0; k < res[i].localTouristAttraction.length; k++) {
            tourResDate.push(" " + res[i].localTouristAttraction[k].bookedDate);
            tourResName.push(" " + res[i].localTouristAttraction[k].localTouristAttractionPlace);
          }

          let lodgeIn = res[i].lodging.checkInDate;
          let lodgeOut = res[i].lodging.checkOutDate;
          let lodgeNM = res[i].lodging.hotelName;
          let lodgeRat = res[i].lodging.hotelRating;
          let lodgeAdd = res[i].lodging.hotel_address;
          let lodgePri = res[i].lodging.pricePerNight;

          data.push({
            num: i+1,
            destination: dest,
            arrivalAirport: aAirp,
            arrivalDate: arrDate,
            departAirport: depAir,
            departDate: depDate,

            foodReserveDate: foodResDate, // more than one is possible
            foodReservationName: foodResName, // more than one is possible
            tourReserveDate: tourResDate, // more than one is possible
            tourReserveName: tourResName, // more than one is possible

            checkingInDate: lodgeIn,
            checkOutDate: lodgeOut,
            hotelName: lodgeNM,
            hotelRating: lodgeRat,
            hotel_address: lodgeAdd,
            pricePerNight: lodgePri,

          })

        }
        this.oneTrip = this.myTrips;
      })
  }
}



