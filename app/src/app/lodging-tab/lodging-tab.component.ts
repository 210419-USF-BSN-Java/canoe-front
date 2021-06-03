import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lodging-tab',
  templateUrl: './lodging-tab.component.html',
  styleUrls: ['./lodging-tab.component.css']
})


export class LodgingTabComponent implements OnInit {

  lodging: string = '';
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }
  onClickSubmit() {
    alert("Entered lodging: " + this.lodging);
    
    const body = JSON.stringify(Object);
    const params = new HttpParams().append('place', this.lodging);
    const headers = new HttpHeaders().append(
        'Content-Type',
        'application/json'
      );

    this.http
      .post<any>('https://cw2hbv7nwi.execute-api.us-east-2.amazonaws.com/Lodging-API', body, {
        headers: headers,
        params: params,
      })
      .subscribe((res) => console.log(res));
  }
}