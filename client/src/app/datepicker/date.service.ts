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
    let current = {
      year: yyyy.toString(),
      month: mm.toString(),
      day: dd.toString()
    }
    return current;
  }
}
