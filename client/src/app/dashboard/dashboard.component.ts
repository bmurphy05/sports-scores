import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../services/mock-data.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  gamesDisplayed: Array<any>;
  constructor(private mockData: MockDataService, private data: DataService) { }

  ngOnInit() {
  //  this.gamesDisplayed = this.mockData.getGames();
    this.data.getGamesByDate('2019', '07', '04').subscribe(data => {
      this.gamesDisplayed = data.data.games.game;
    });
  }

}
