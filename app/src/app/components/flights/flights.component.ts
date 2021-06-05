import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { DestinationService } from '../../services/destination.service';
import { Airport } from '../../models/airport';
@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
})
export class FlightsComponent implements OnInit {
  fromAirport: string = '';
  toAirport: string = '';

  constructor(
    private fService: FlightService,
    private dService: DestinationService
  ) {}

  getFromAirport(): void {
    console.log('fservice: get from airport ');
    this.fService
      .getAirport(this.dService.getFrom())
      .subscribe((airport) => (this.fromAirport = airport.getName()));
  }

  getToAirport() {
    console.log('fservice: get to airport ');
    this.fService
      .getAirport(this.dService.getDestination())
      .subscribe((airport) => (this.toAirport = airport.getName()));
  }

  getAirports() {
    this.getToAirport();
    this.getFromAirport();
  }

  getDepartingFlights() {}

  getReturningFlights() {
    // use airport to request flights with date
    console.log(this.fromAirport);
  }

  ngOnInit(): void {
    this.getAirports();
    // this.getDepartingFlights();
    // this.getReturningFlights();
  }
}
