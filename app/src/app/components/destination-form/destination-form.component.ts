import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination-form',
  templateUrl: './destination-form.component.html',
  styleUrls: ['./destination-form.component.css'],
})
export class DestinationFormComponent implements OnInit {
  destination = '';
  submitForm() {
    console.log(this.destination);
  }

  constructor() {}

  ngOnInit(): void {}
}
