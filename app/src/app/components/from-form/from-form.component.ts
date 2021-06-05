import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DestinationService } from '../../services/destination.service';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-from-form',
  templateUrl: './from-form.component.html',
  styleUrls: ['./from-form.component.css'],
})
export class FromFormComponent implements OnInit {
  from: string = '';
  // date: Date = new Date();
  @Output() controlView = new EventEmitter<string>();
  @Output() formSubmit = new EventEmitter();

  constructor(
    private dService: DestinationService,
    private tService: TripService
  ) {}

  addDate(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
    this.tService.setDepartureDate(event.value ? event.value : new Date());
  }

  submitForm() {
    this.formSubmit.emit(); // sets from in create trip
    this.controlView.emit(); // controls create trip view
    this.dService.setFrom(this.from);
  }

  ngOnInit(): void {}
}
