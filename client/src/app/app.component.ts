import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor(private data: DataService) { }

  onClick() {
    console.log('CLICKED');
    this.data.getGamesByDate('2019', '07', '04').subscribe(data => {
      console.log(`Teams: ${JSON.stringify(data.data.games.game[0].home_team_city)}
        ${JSON.stringify(data.data.games.game[0].home_team_name)} -
        ${JSON.stringify(data.data.games.game[0].away_team_city)} ${JSON.stringify(data.data.games.game[0].away_team_name)}`);
      console.log(`Status: ${JSON.stringify(data.data.games.game[0].status)}`);
      console.log(`WPitcher: ${JSON.stringify(data.data.games.game[0].winning_pitcher)}`);
      console.log(`LPitcher: ${JSON.stringify(data.data.games.game[0].losing_pitcher)}`);
      console.log(`SPitcher: ${JSON.stringify(data.data.games.game[0].save_pitcher)}`);
      console.log(`Linescore: ${JSON.stringify(data.data.games.game[0].linescore)}`);
      console.log(`Home Broadcast: ${JSON.stringify(data.data.games.game[0].broadcast.home)}`);
      console.log(`Away Broadcast: ${JSON.stringify(data.data.games.game[0].broadcast.away)}`);
      console.log(`Game Time: ${JSON.stringify(data.data.games.game[0].time_date)}${JSON.stringify(data.data.games.game[0].amPm)}`);
      console.log(`Location: ${JSON.stringify(data.data.games.game[0].venue)} ${JSON.stringify(data.data.games.game[0].location)}`);
    });
  }
}
