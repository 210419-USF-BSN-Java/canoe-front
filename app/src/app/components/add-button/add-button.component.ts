import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css'],
})
export class AddButtonComponent implements OnInit {
  constructor() {}

  @Input() label = '';
  @Output() controlView = new EventEmitter<string>();
  ngOnInit(): void {}

  handleClick() {
    this.controlView.emit(this.label);
  }
}
