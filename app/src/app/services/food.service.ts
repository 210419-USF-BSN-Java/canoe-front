import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import {IFood} from './IFood'

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor(private http: HttpClient) { }

  readonly url = 'https://dvltrahm5i.execute-api.us-east-1.amazonaws.com/Restaurant-API';

// postBody = 
// {
//   "place": "boston"
// }
// options = {
//   headers: new HttpHeaders({
//     'Access-Control-Allow-Headers' : 'Content-Type',
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
//   })
// };

//postData(postData: IFood){
//   postData(){
//   return this.http.post(this.url, this.postBody, this.options);
// }
postFood(){
  // async function postData(url = '', data = {}) {
  //   // Default options are marked with *
  //   const response = await fetch(url, {
  //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //     mode: 'cors', // no-cors, *cors, same-origin
  //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: 'same-origin', // include, *same-origin, omit
  //     headers: {
  //       'Content-Type': 'application/json'
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     redirect: 'follow', // manual, *follow, error
  //     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //     body: JSON.stringify(data) // body data type must match "Content-Type" header
  //   });
  //   return response.json(); // parses JSON response into native JavaScript objects
  // }

  // postData('https://dvltrahm5i.execute-api.us-east-1.amazonaws.com/Restaurant-API', { place: "Boston" })
  //   .then(data => {
  //     //console.log(data); // JSON data parsed by `data.json()` call

  //   });
//////////////////////
  //return fetch('https://dvltrahm5i.execute-api.us-east-1.amazonaws.com/Restaurant-API');
}
  getFood(){
    
    //return this.http.post(url, )

  }


  

}
