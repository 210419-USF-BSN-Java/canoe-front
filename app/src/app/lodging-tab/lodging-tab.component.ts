import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LodgingMap } from './lodging-interface';


@Component({
  selector: 'app-lodging-tab',
  templateUrl: './lodging-tab.component.html',
  styleUrls: ['./lodging-tab.component.css']
})


export class LodgingTabComponent implements OnInit {

  lodging: string = '';
  res: any;
  lodgingMap: LodgingMap[] = [];

  constructor(private http: HttpClient) {
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
}
