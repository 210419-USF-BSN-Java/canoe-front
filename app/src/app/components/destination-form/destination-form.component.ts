import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DestinationService } from '../../services/destination.service';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-destination-form',
  templateUrl: './destination-form.component.html',
  styleUrls: ['./destination-form.component.css'],
})
export class DestinationFormComponent implements OnInit {
  @Output() controlView = new EventEmitter<string>();
  @Output() formSubmit = new EventEmitter();

  from: string = '';
  constructor(
    private dService: DestinationService,
    private tService: TripService
  ) {}

  addDate(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
    this.tService.setReturnDate(event.value || new Date());
  }

  submitForm() {
    this.dService.setDestination(this.from);
    this.formSubmit.emit(); // sets from in create trip
    this.controlView.emit(); // controls create trip view
  }

  ngOnInit(): void {}
}
