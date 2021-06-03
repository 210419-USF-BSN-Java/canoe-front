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
    console.log(this.destination);
    this.dService.setDestination(this.destination);
  }

  constructor(private dService: DestinationService) {}

  ngOnInit(): void {}
}
