import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DateClass } from '../classes/date';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  date: DateClass;
  $date = new BehaviorSubject(this.date);

  changeDate(date): void {
    this.date = date;
    this.$date.next(this.date);
  }

  getCurrentDate(): DateClass {
    const today = new Date();
    const dd = today.getDate()-1;
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    let day = '';
    let month = '';

    if (dd.toString().length === 1) {
      day = `0${dd.toString()}`;
    } else {
      day = dd.toString();
    }

    if (mm.toString().length === 1) {
      month = `0${mm.toString()}`;
    } else {
      month = mm.toString();
    }

    const current = new DateClass(yyyy.toString(), month, day);

    return current;
  }
}
