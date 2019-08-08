import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DateClass } from '../classes/date';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  url: string;
  results: Observable<any>;

  constructor(private http: HttpClient) {
    this.url = 'http://gd.mlb.com/components/game/mlb';
  }

  getGamesByDate(date: DateClass): any {
    this.results = this.http.get<any>(`${this.url}/year_${date.year}/month_${date.month}/day_${date.day}/master_scoreboard.json`);
    return this.results;
  }
}
