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
  fromAirport: any = { results: [] };
  toAirport: any = { results: [] };

  constructor(
    private fService: FlightService,
    private dService: DestinationService
  ) {}

  getFromAirport(): void {
    this.fService.getAirport(this.dService.getFrom()).subscribe((airports) => {
      this.fromAirport = airports;
    });
  }

  getToAirport(): void {
    this.fService
      .getAirport(this.dService.getDestination())
      .subscribe((airports) => {
        this.toAirport = airports;
      });
  }

  getDepartingFlights() {
    console.log(this.fromAirport.results[0].name);
  }

  getReturningFlights() {
    // use airport to request flights with date
    console.log(this.fromAirport.results[0].name);
  }

  ngOnInit(): void {
    this.getFromAirport();
    this.getToAirport();
    this.getDepartingFlights();
    this.getReturningFlights();
  }
}
