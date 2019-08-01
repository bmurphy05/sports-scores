import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private date: any;

  setInitialDate(): void {
    this.date = this.getCurrentDate();
  }

  getDate(): any {
    return this.date;
  }

  changeDate(date): string {
    this.date = date;
    return this.date;
  }

  getCurrentDate(): any {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
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

    let current = {
      year: yyyy.toString(),
      month: month,
      day: day
    }
    return current;
  }
}
