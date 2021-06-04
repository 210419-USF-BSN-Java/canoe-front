import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../services/destination.service';

@Component({
  selector: 'app-create-trip-page',
  templateUrl: './create-trip-page.component.html',
  styleUrls: ['./create-trip-page.component.css'],
})
export class CreateTripPageComponent implements OnInit {
  labels = ['Flight', 'Lodging', 'Food', 'Explore'];

  constructor(private dService: DestinationService) {}

  view = 'from';

  from = '';
  destination = '';

  // onDestinationSubmit(d: any): void {
  //   this.destination = d;
  //   this.dService.setDestination(d);
  // }

  formSubmit(): void {
    this.destination = this.dService.getDestination();
    this.from = this.dService.getFrom();
  }
  controlView(view: string): void {
    this.view = view;
  }

  ngOnInit() {}
}
