import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import './app.json';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-view-trip-page',
  templateUrl: './view-trip-page.component.html',
  styleUrls: ['./view-trip-page.component.css']
})


export class ViewTripPageComponent implements OnInit {

  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = ELEMENT_DATA;  
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

  block: any = [];
  ngOnInit(): void {
    console.log(this.json);

    let uId;
    // let username = get the username from the login/signup service;

    // this.http.get<any>(`http://3.132.232.218:8085/user/getUser/${username}`).subscribe(
    //   (res) => {
    // uId = res.userId;

    // this.http.get<any>(`http://3.132.232.218:8085/user/gettripplan/${uId}`).subscribe(
    //   (res) => {

            for (let i = 1; i <= this.json.length; i++) {  
              this.block.push(i);
              // you need another for loop
              // this loop will get the amount of blocks/cards needed and generate a block [i] amount of times
              // 
            }
    //   })
  // })
  }


  // make fat rectangles for each destination ID (each trip) 
  // display flight data: depart_date, arrival_date, airline_name
  // run get request on


}
