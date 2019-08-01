import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Count } from '../classes/count';
import { DateService } from '../datepicker/date.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  gamesDisplayed: Array<any>;

  constructor(
    private data: DataService,
    private dateService: DateService) { }

  ngOnInit() {
    const date = this.dateService.getDate();
    console.log('Date: ' + JSON.stringify(date));
    this.data.getGamesByDate(date.year, date.month, date.day).subscribe(data => {
      this.gamesDisplayed = data.data.games.game;
    });
  }

  sumHomeScore(scores: Count[]): number {
    let result = 0;

    scores.forEach(game => {
      let temp = parseInt(result.toString(), 10) + parseInt(game.home.toString(), 10);
      if (!Number.isNaN(temp)) {
        result = temp;
      }
    })

    return result;
  }


  sumAwayScore(scores: Count[]): number {
    let result = 0;

    scores.forEach(game => {
      let temp = parseInt(result.toString(), 10) + parseInt(game.away.toString(), 10);
      if (!Number.isNaN(temp)) {
        result = temp;
      }
    })

    return result;
  }

  setInning(inningStatus: string, inning: number) {
    return `${inningStatus.substring(0, 3)} ${inning}`;
  }
}
