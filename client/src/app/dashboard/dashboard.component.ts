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

  sumHomeScore(games: any): number {
    let result = 0;
    let scores = Array<Count>();

    if (games.status.status === 'Postponed') {
      result = 0;
    } else {
      if (games.hasOwnProperty('linescore')) {
        scores = games.linescore.inning;
        Array.from(scores).forEach(game => {
          const temp = parseInt(result.toString(), 10) + parseInt(game.home.toString(), 10);
          if (!Number.isNaN(temp)) {
            result = temp;
          }
        });
      }
    }

    return result;
  }


  sumAwayScore(games: any): number {
    let result = 0;
    let scores = Array<Count>();

    if (games.status.status === 'Postponed') {
      result = 0;
    } else {
      if (games.hasOwnProperty('linescore')) {
        scores = games.linescore.inning;
        Array.from(scores).forEach(game => {
          const temp = parseInt(result.toString(), 10) + parseInt(game.away.toString(), 10);
          if (!Number.isNaN(temp)) {
            result = temp;
          }
        });
      }
    }

    return result;
  }

  setInning(inningStatus: string, inning: number, status: string) {
    let result = '';

    if (status === 'Final') {
      result = 'F';
    } else if (status === 'Pre-Game') {
      result = `PRE`;
    } else if (status === 'Preview') {
      result = `PRE`;
    } else if (status === 'Postponed' || status.includes('Suspended')) {
      result = 'PPD';
    } else {
      result = `${inningStatus.substring(0, 3)} ${inning}}`;
    }

    return result;
  }

  ngOnDestroy() {
    this.dateSub.unsubscribe();
    this.gameSub.unsubscribe();
  }
}
