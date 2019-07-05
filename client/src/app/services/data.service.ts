import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Game } from '../classes/game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string;
  results: Observable<any>;

  constructor(private http: HttpClient) {
    this.url = 'http://gd.mlb.com/components/game/mlb';
  }

  getGamesByDate(year: string, month: string, day: string) {
    this.results = this.http.get<any>(`${this.url}/year_${year}/month_${month}/day_${day}/master_scoreboard.json`);
    return this.results;
  }

}
