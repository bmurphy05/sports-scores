import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { DateService } from './date.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  startDate: Date;

  constructor(private dateService: DateService) {
    this.startDate = new Date(1990, 0, 1);
  }

  ngOnInit() {
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    const dayDate = event.value.getDate();
    let day = '';
    const monthDate = event.value.getMonth() + 1;
    let month = '';
    const year = event.value.getFullYear();

    if (dayDate.toString().length === 1) {
      day = `0${dayDate.toString()}`;
    } else {
      day = dayDate.toString();
    }

    if (monthDate.toString().length === 1) {
      month = `0${monthDate.toString()}`;
    } else {
      month = monthDate.toString();
    }

    const fullDate = {
      year: year.toString(),
      month,
      day
    };

    this.dateService.changeDate(fullDate);
  }
}
