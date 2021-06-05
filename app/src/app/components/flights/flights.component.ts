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
  fromAirport: {} = {};
  toAirport: {} = {};

  constructor(
    private fService: FlightService,
    private dService: DestinationService
  ) {}

  getFromAirport(): void {
    this.fService.getAirport(this.dService.getFrom()).subscribe((airports) => {
      console.log('to airports ', airports);
      this.toAirport = airports;
    });
  }

  // getFromAirport() {
  //   console.log(this.fService.getAirport(this.dService.getFrom()));
  // }

  // getToAirport() {
  //   console.log(this.fService.getAirport(this.dService.getDestination()));
  // }

  getToAirport(): void {
    this.fService
      .getAirport(this.dService.getDestination())
      .subscribe((airports) => {
        console.log('to airports ', airports);
        this.toAirport = airports;
      });
  }

  getDepartingFlights() {}

  getReturningFlights() {
    // use airport to request flights with date
    console.log(this.fromAirport);
  }

  ngOnInit(): void {
    this.getFromAirport();
    this.getToAirport();
    // this.getDepartingFlights();
    // this.getReturningFlights();
  }
}
