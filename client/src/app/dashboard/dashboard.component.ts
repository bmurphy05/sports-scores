import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Count } from '../classes/count';
import { DateService } from '../datepicker/date.service';
import { DateClass } from '../classes/date';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  gamesDisplayed: Array<any>;
  date: DateClass;
  dateSub: Subscription;
  gameSub: Subscription;

  constructor(
    private data: DataService,
    private dateService: DateService) { }

  ngOnInit() {
    this.dateSub = this.dateService.$date.subscribe(date => {
      this.date = date;
      console.log('Date: ' + JSON.stringify(this.date));
      this.gameSub = this.data.getGamesByDate(this.date).subscribe(data => {
        this.gamesDisplayed = data.data.games.game;
      });
    });
  }

  sumHomeScore(scores: Count[]): number {
    let result = 0;

    for (let i = 0; i < scores.length; i++) {
      let temp = parseInt(result.toString(), 10) + parseInt(scores[i].home.toString(), 10);
      if (Number.isNaN(temp)) {
      } else {
        result = temp;
      }
    }
    return result;
  }


  sumAwayScore(scores: Count[]): number {
    let result = 0;

    for (let i = 0; i < scores.length; i++) {
      let temp = parseInt(result.toString(), 10) + parseInt(scores[i].away.toString(), 10);
      if (Number.isNaN(temp)) {
      } else {
        result = temp;
      }
    }

    return result;
  }

  setInning(inningStatus: string, inning: number) {
    return `${inningStatus.substring(0, 3)} ${inning}`;
  }

  ngOnDestroy() {
    this.dateSub.unsubscribe();
    this.gameSub.unsubscribe();
  }
}
