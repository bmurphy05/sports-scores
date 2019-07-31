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
    this.data.getGamesByDate('2019', '07', '30').subscribe(data => {
      this.gamesDisplayed = data.data.games.game;
    });
  }

  sumHomeScore(scores: Count[]): number {
    let result = 0;

    scores.forEach(game => {
      console.log(`HOME -> Pre Result: ${result}  Score: ${game.home}`);
      let temp = parseInt(result.toString(), 10) + parseInt(game.home.toString(), 10);
      if (Number.isNaN(temp)) {
        console.log('Is NAN');
      } else {
        result = temp;
      }
    })

    console.log(`Home Result: ${result}`);
    return result;
  }


  sumAwayScore(scores: Count[]): number {
    let result = 0;

    scores.forEach(game => {
      console.log(`Away -> Pre Result: ${result}  Score: ${game.away}`);
      let temp = parseInt(result.toString(), 10) + parseInt(game.away.toString(), 10);
      if (Number.isNaN(temp)) {
        console.log('Is NAN');
      } else {
        result = temp;
      }
    })

    console.log(`Away Result: ${result}`);
    return result;
  }

  setInning(inningStatus: string, inning: number) {
    return `${inningStatus.substring(0, 3)} ${inning}`;
  }
}
