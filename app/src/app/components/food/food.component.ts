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

export interface PeriodicElement {
  number: number;
  name: String;
  address: String;
  rating: number;
}

const ELEMENT_DATA:PeriodicElement[] = [

]

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoodComponent implements OnInit {
  // dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
  //   // Only highligh dates inside the month view.
  //   if (view === 'month') {
  //     const date = cellDate.getDate();

  //     // Highlight the 1st and 20th day of each month.
  //     return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
  //   }

  //   return '';
  // }
  url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=food+in+los+angelos&key=AIzaSyDgUg6GkaiJXjiZWI0kvKnCfT0mr3I09qU`;
  readonly post_url = 'http://3.132.232.218:8085/user/saveLocalFood';

  displayedColumns: string[] = ['number', 'name', 'address','rating', 'action'];
  dataSource = ELEMENT_DATA;
  checkInDate = new Date;
  checkInString: any = '';
  roomsFilter: any;

 
constructor(public datepipe: DatePipe, private http: HttpClient, private ref:ChangeDetectorRef){};
ngOnInit() : void{
  // for(let i = 0; i<ELEMENT_DATA.length; i++){
  //   delete ELEMENT_DATA[i];
  // }

  console.log("starting...");
  this.http.get<any>(this.url)
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

      ELEMENT_DATA.push(foodData);
       this.ref.detectChanges();
    };
   });
    
    console.log(this.checkInString);
    console.log(this.checkInString);
    console.log(ELEMENT_DATA);
    console.log(this.dataSource);
  
  }

  // submitDate(){
  //   let checkInStringOrNull = this.datepipe.transform(this.checkInDate, 'yyyy-MM-dd');
  //   this.checkInString = checkInStringOrNull;
  // }




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
      .post<any>('post_url', body, {
        headers: headers
      })
      .subscribe((res) => console.log(res));
  }


  }




