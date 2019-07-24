import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Count } from '../classes/count';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  gamesDisplayed: Array<any>;
  constructor(private data: DataService) { }

  ngOnInit() {
    //  this.gamesDisplayed = this.mockData.getGames();
    this.data.getGamesByDate('2019', '07', '06').subscribe(data => {
      this.gamesDisplayed = data.data.games.game;
    });
  }

  sumHomeScore(scores: Count[]): number {
    let result = 0;

    for (let i = 0; i < scores.length; i++) {
      console.log(`HOME -> Pre Result: ${result}  Score: ${scores[i].home}`);
      let temp = parseInt(result.toString(), 10) + parseInt(scores[i].home.toString(), 10);
      if (Number.isNaN(temp)) {
        console.log('Is NAN');
      } else {
        result = temp;
      }
    }

    console.log(`Home Result: ${result}`);
    return result;
  }


  sumAwayScore(scores: Count[]): number {
    let result = 0;

    for (let i = 0; i < scores.length; i++) {
      console.log(`AWAY -> Pre Result: ${result}  Score: ${scores[i].away}`);
      let temp = parseInt(result.toString(), 10) + parseInt(scores[i].away.toString(), 10);
      if (Number.isNaN(temp)) {
        console.log('Is NAN');
      } else {
        result = temp;
      }
    }

    console.log(`Away Result: ${result}`);
    return result;
  }

  setInning(inningStatus: string, inning: number) {
    return `${inningStatus.substring(0, 3)} ${inning}`;
  }
}
