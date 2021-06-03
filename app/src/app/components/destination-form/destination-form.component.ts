import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../../services/destination.service';

@Component({
  selector: 'app-destination-form',
  templateUrl: './destination-form.component.html',
  styleUrls: ['./destination-form.component.css'],
})
export class DestinationFormComponent implements OnInit {
  destination = '';
  submitForm() {
    this.dService.setDestination(this.destination);
  }

  constructor(public dService: DestinationService) {}

  ngOnInit(): void {}
}
