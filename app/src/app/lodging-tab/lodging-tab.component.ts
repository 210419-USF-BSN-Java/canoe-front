import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/lodging.service';
import { LodgingMap } from './lodging-interface';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-lodging-tab',
  templateUrl: './lodging-tab.component.html',
  styleUrls: ['./lodging-tab.component.css'],
  providers: [
    DatePipe, 
  ],

})


export class LodgingTabComponent implements OnInit {

  selection = new SelectionModel<any>(false, []);
  lodging: string = '';
  res: any;
  lodgingMap: LodgingMap[] = [];
  checkInDate = new Date;
  checkOutDate = new Date;
  checkInString: any = '';
  checkOutString: any = '';
  hotelName = "";
  rating = "";
  address = "";

  constructor(public datepipe: DatePipe, private Serv: UserService, private router: Router, private http: HttpClient) {

  }

  ngOnInit(): void { 

  }

  onClickSubmit(data: LodgingMap[]) {

    console.log("Entered location: " + this.lodging);

    this.lodgingMap.splice(0, 20);
    this.http.get<any>(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${this.lodging} lodging&radius=150000&type=lodging&key=AIzaSyADD_M19PUWlXleB8ix4PnIjLh9F2D90uQ`).subscribe(
      (res) => {

        console.log(res);
        for (let i = 0; i < res.results.length; i++) {
          let num = i + 1;
          let names = res.results[i].name;
          let addresses = res.results[i].formatted_address;
          let ratings = res.results[i].rating;

          data.push({
            number: num,
            name: names,
            address: addresses,
            rating: ratings
          });
        };
        console.log(this.lodgingMap);
      })
  }

  submitForm(): void {
    console.log('submit Lodging data');

    console.log("Your date obj " + this.checkInDate);
    let checkInStringOrNull = this.datepipe.transform(this.checkInDate, 'yyyy-MM-dd');
    let checkOutStringOrNull = this.datepipe.transform(this.checkOutDate, 'yyyy-MM-dd');
    console.log("Your transformed obj " + this.checkInString);

    this.checkInString = checkInStringOrNull;
    this.checkOutString = checkOutStringOrNull;

    let newDate = new Date(this.checkInString)

    console.log(newDate);


    this.Serv
      .saveLodging(
        this.checkInString,
        this.checkOutString,
        this.hotelName,
        this.rating,
        this.address
      )
      .subscribe(
        (data) => {
          this.router.navigate(['/create-trip']);
        },
        (error) => {
          console.log('Error saving lodging info');
          console.log(error);
        }
      );
  }

  onSelect(selectedItem: any) {

    this.hotelName = selectedItem.name;
    this.rating = selectedItem.address;
    this.address = selectedItem.rating;
  }
}
