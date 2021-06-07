import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { IFood } from 'src/app/services/IFood';
import {Observable} from 'rxjs'
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import {MatInputModule} from '@angular/material/input'
import {MatCalendarCellClassFunction, MatDatepickerModule} from '@angular/material/datepicker';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

export interface PeriodicElement {
  number: number;
  name: String;
  address: String;
  rating: number;
}



@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoodComponent implements OnInit {
  location: string = '';
  //url = ;
  readonly post_url = 'http://3.132.232.218:8085/user/saveLocalFood';
  ELEMENT_DATA:PeriodicElement[] = [];
  displayedColumns: string[] = ['number', 'name', 'address','rating', 'action'];
  dataSource = this.ELEMENT_DATA;
  checkInDate = new Date;
  checkInString: any = '';
  roomsFilter: any;

 
constructor(public datepipe: DatePipe, private http: HttpClient, private ref:ChangeDetectorRef,
   private router: Router){};
ngOnInit() : void{

  }

  submitDate(){
    let checkInStringOrNull = this.datepipe.transform(this.checkInDate, 'yyyy-MM-dd');
    this.checkInString = checkInStringOrNull;
  }

  onClickSubmit(array:PeriodicElement[]){
    console.log("Entered location: " + this.location);
    console.log("starting...");
  this.http.get<any>(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${this.location}+food&key=AIzaSyDgUg6GkaiJXjiZWI0kvKnCfT0mr3I09qU`)
   .subscribe((data) =>{
     
 
    for (let i = 0; i < data.results.length; i++) {
      let num = i + 1;
      let names = data.results[i].name;
      let addresses = data.results[i].formatted_address;
      let ratings = data.results[i].rating;

      let foodData = {
        number: num,
        name: names,
        address: addresses,
        rating: ratings
      }

      array.push(foodData);
      // this.ELEMENT_DATA = [...this.ELEMENT_DATA];
      // this.ref.detectChanges();
      //  this.refresh();
       console.log("datasource: ")
       console.log(this.dataSource);
    };
    this.ELEMENT_DATA = [...this.ELEMENT_DATA];
    this.ref.detectChanges();
     this.refresh();
   });
    
    console.log(this.checkInString);
    console.log(this.checkInString);

    console.log(this.dataSource);
  }
  refresh(){
    this.dataSource = this.dataSource;
  }
  addFood(elements: PeriodicElement){
    console.log("Date: " + this.checkInString)
    console.log("Position: " + elements.number);
    console.log("Name: " + elements.name);
    console.log("Address: " + elements.address);
    console.log("Rating: " + elements.rating);
    let checkInStringOrNull = this.datepipe.transform(this.checkInDate, 'yyyy-MM-dd');
    this.checkInString = checkInStringOrNull;
    let newDate = new Date(this.checkInString)
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );

    let body = {
        bookedDate: this.checkInString,
        localFoodName: elements.name,
        address: elements.address,
        rating: elements.rating,
    }
    this.http
      .post<any>('http://3.132.232.218:8085/user/saveLocalFood', body, {
        headers: headers
      })
      .subscribe((res) => console.log(res));
  }


  }




