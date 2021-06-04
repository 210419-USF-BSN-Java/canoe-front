import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinationService } from '../../services/destination.service';

@Component({
  selector: 'app-from-form',
  templateUrl: './from-form.component.html',
  styleUrls: ['./from-form.component.css'],
})
export class FromFormComponent implements OnInit {
  from: string = '';
  @Output() controlView = new EventEmitter<string>();
  @Output() formSubmit = new EventEmitter();

  constructor(private dService: DestinationService) {}

  submitForm() {
    this.formSubmit.emit(); // sets from in create trip
    this.controlView.emit(); // controls create trip view
    this.dService.setFrom(this.from);
  }

  ngOnInit(): void {}
}
