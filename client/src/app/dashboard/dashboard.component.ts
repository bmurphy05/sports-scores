import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

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
    this.data.getGamesByDate('2019', '07', '04').subscribe(data => {
      this.gamesDisplayed = data.data.games.game;
    });
  }

  sumScore(scores: number[]): number {
    let result = 0;

    for(let i = 0; i < scores.length; i++) {
      console.log(`Iteration: ${i} Runs: ${scores[i]}`);
      result = parseInt(result.toString(), 10) + parseInt(scores[i].toString(), 10);
    }

    console.log(`Result: ${result}`);
    return result;
  }
}
