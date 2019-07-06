import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../services/mock-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  gamesDisplayed: Array<any>;
  constructor(private mockData: MockDataService) { }

  ngOnInit() {
    this.gamesDisplayed = this.mockData.getGames();
  }

}
