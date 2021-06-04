import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { DestinationService } from '../../services/destination.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
})
export class FlightsComponent implements OnInit {
  fromAirport = {};
  toAirport = '';

  constructor(
    private fService: FlightService,
    private dService: DestinationService
  ) {}

  getFromAirport(): void {
    this.fService.getAirport(this.dService.getFrom()).subscribe((airports) => {
      console.log(airports);
    });
  }

  getToAirport(): void {
    this.fService
      .getAirport(this.dService.getDestination())
      .subscribe((airports) => {
        console.log(airports);
      });
  }

  // getToAirport(): void {
  //   this.toAirport = this.fService.getAirport(this.dService.getDestination());
  // }

  ngOnInit(): void {
    this.getFromAirport();
    this.getToAirport();
  }
}
