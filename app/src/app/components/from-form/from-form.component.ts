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

  constructor(private dService: DestinationService) {}

  submitForm() {
    this.dService.setFrom(this.from);
    this.controlView.emit('destination');
  }

  ngOnInit(): void {}
}
