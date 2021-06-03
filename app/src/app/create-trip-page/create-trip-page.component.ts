import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-trip-page',
  templateUrl: './create-trip-page.component.html',
  styleUrls: ['./create-trip-page.component.css'],
})
export class CreateTripPageComponent implements OnInit {
  labels = ['Flight', 'Lodging', 'Food', 'Explore'];

  constructor() {}

  ngOnInit(): void {}

  view: string = '';

  controlView(view: string): void {
    this.view = view;
  }
}
