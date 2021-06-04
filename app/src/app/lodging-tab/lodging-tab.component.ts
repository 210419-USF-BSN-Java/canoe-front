import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lodging-tab',
  templateUrl: './lodging-tab.component.html',
  styleUrls: ['./lodging-tab.component.css']
})


export class LodgingTabComponent implements OnInit {

  lodging: string = '';
  res: any;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }
  // onClickSubmit() {
  //   console.log("Entered lodging: " + this.lodging);

  //   let body = new FormData().append('place', this.lodging);
  //   const obj = JSON.stringify(body);

  //   const params = new HttpParams().append('place', this.lodging);

  //   const headers = new HttpHeaders().append('Content-Type', 'application/json');
  //   headers.append('Access-Control-Allow-Origin', '*');
  //   headers.append('Access-Control-Allow-Methods', "OPTIONS,POST,GET");


  //   this.http.post<any>
  //     ('https://cw2hbv7nwi.execute-api.us-east-2.amazonaws.com/Lodging-API', body,
  //       {
  //         headers: headers
  //       })
  //     .subscribe((res) => console.log(res));
  // }
  onClickSubmit() {

    console.log("Entered lodging: " + this.lodging);

    let body = new FormData().append('place', this.lodging);
    const obj = JSON.stringify(body);

    const params = new HttpParams().append('place', this.lodging);

    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', "OPTIONS,POST,GET");

    let arr: string[] = [];

    this.http.get<any>('https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotels&key=AIzaSyADD_M19PUWlXleB8ix4PnIjLh9F2D90uQ&type=lodging').subscribe(
      (res) => {

        console.log(res);
        for (let i = 0; i < res.results.length; i++) {
          console.log(res.results[i].name);
          console.log(res.results[i].formatted_address);
          console.log(res.results[i].rating);

          let data = `
          <tr>
              <th scope="row">${i + 1}</th>
              <td>${res.results[i].name}</td>
              <td>${res.results[i].formatted_address}</td>
              <td>${res.results[i].rating}</td>
          </tr>
          `
          arr.push(data);
        };
        console.log(arr);
        let form = document.getElementById('data');
        if (form) (form as HTMLFormElement);

      })
  }
}

// for (let i = 0; i < res.results.length; i++) {
//   let data = this.res;
//   console.log(data + " firing?");
//   console.log(this.res);


//   data = ` 
//     <tr>
//         <th scope="row">${i + 1}</th>
//         <td>${data[i].reimb_submitted}</td>
//         <td>${data[i].reimb_resolved}</td>
//         <td>${data[i].reimb_desc}</td>

//     </tr>
// `;
// }