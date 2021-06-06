import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { IFood } from 'src/app/services/IFood';
import {Observable} from 'rxjs'
import { MatTableDataSource } from '@angular/material/table';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   address: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', address: "1"},
//   {position: 2, name: 'Helium', address: "13"},
//   {position: 3, name: 'Lithium', address: "134"},
//   {position: 4, name: 'Beryllium', address: "1423"},
//   {position: 5, name: 'Boron', address: "1234"},
//   {position: 6, name: 'Carbon', address: "1432"},
//   {position: 7, name: 'Nitrogen', address: "1234"},
//   {position: 8, name: 'Oxygen', address: "1342"},
//   {position: 9, name: 'Fluorine', address: "1432"},
//   {position: 10, name: 'Neon', address: "1234"},
// ];

export interface PeriodicElement {
  number: number;
  name: String;
  address: String;
  rating: number;
}

// let ELEMENT_DATA: PeriodicElement[] = [

//];
const ELEMENT_DATA:PeriodicElement[] = [
  {number: 1, name: "asdf", address: "asdf", rating:5},
  {number: 1, name: "asdf", address: "asdf", rating:5},
  {number: 1, name: "asdf", address: "asdf", rating:5},
]



@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoodComponent implements OnInit {

  url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=food+in+los+angelos&key=AIzaSyDgUg6GkaiJXjiZWI0kvKnCfT0mr3I09qU`;
  readonly post_url = 'http://localhost:8085/user/saveLocalFood';
  // res: IFood[] = [];
  //displayedColumns: string[] = ['position', 'name', 'address', 'action'];
  displayedColumns: string[] = ['number', 'name', 'address','rating', 'action'];
  dataSource = ELEMENT_DATA;
  //dataSource = this.res;
  //dataSource = aa;

 
  constructor(private http: HttpClient, private ref:ChangeDetectorRef){};
ngOnInit() : void{
  
  console.log("starting...");
  this.http.get<any>(this.url)
    //.subscribe((data) =>console.log("this data:" + data));
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
      
      //this.res.push(foodData);
      //aa.push(foodData);
      ELEMENT_DATA.push(foodData);
      //this.dataSource.push(foodData);
      //this.dataSource = [...this.dataSource];
     
      //Array.prototype.push(this.res, foodData);
      //this.res = this.res.concat(foodData);
      //this.res.concat(aa);
      
       this.ref.detectChanges();
      //aa.detectChanges();
      
  
    };

   });
    

   //console.log(this.res);
    // console.log(aa);
    console.log(ELEMENT_DATA);
    console.log(this.dataSource);
//    this.ref.detectChanges();
//    //console.log(this.res[0].name);
// }

  }


  addFood(elements: PeriodicElement){
    //console.log("Position: " + elements.position);
    console.log("Name: " + elements.name);
    console.log("Address: " + elements.address);

    //this.http.post(this.url, body).subscribe


  }

}


