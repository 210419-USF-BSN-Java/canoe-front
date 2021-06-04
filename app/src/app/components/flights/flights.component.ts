import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
})
export class FlightsComponent implements OnInit {
  constructor(private fService: FlightService) {}

  ngOnInit(): void {
    this.fService.getDestinationAirport();
    // this.fService.getDestinationAirport();
  }
}
