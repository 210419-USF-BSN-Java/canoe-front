import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class IcaoCodeService {
  icaoCodes = 'https://ourairports.com/data/airports.csv';

  constructor(private http: HttpClient) {}

  getIcaoCodes() {
    return this.http.get(this.icaoCodes, { responseType: 'text' });
  }
}
