import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  startDate: Date;

  constructor() {
    this.startDate = new Date(1990, 0, 1);
  }

  ngOnInit() {
  }
}
