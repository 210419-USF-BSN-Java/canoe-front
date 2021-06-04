import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinationService } from '../../services/destination.service';

@Component({
  selector: 'app-destination-form',
  templateUrl: './destination-form.component.html',
  styleUrls: ['./destination-form.component.css'],
})
export class DestinationFormComponent implements OnInit {
  destination = '';

  @Output() controlView = new EventEmitter<string>();
  @Output() formSubmit = new EventEmitter();
  submitForm() {
    this.formSubmit.emit(); // sets from in create trip
    this.controlView.emit(); // controls create trip view
    this.dService.setDestination(this.destination);
  }

  constructor(public dService: DestinationService) {}

  ngOnInit(): void {}
}
