import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../services/destination.service';

@Component({
  selector: 'app-create-trip-page',
  templateUrl: './create-trip-page.component.html',
  styleUrls: ['./create-trip-page.component.css'],
})
export class CreateTripPageComponent implements OnInit {
  labels = ['Flight', 'Lodging', 'Food', 'Explore'];
  view = 'from';

  controlView(view: string): void {
    this.view = view;
  }

  ngOnInit() {}
}
