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
    this.data.getGamesByDate('2019', '07', '30').subscribe(data => {
      console.log(`Teams: ${JSON.stringify(data.data.games.game[1].home_team_city)}
        ${JSON.stringify(data.data.games.game[1].home_team_name)} -
        ${JSON.stringify(data.data.games.game[1].away_team_city)} ${JSON.stringify(data.data.games.game[1].away_team_name)}`);
      console.log(`Status: ${JSON.stringify(data.data.games.game[1].status)}`);
      console.log(`WPitcher: ${JSON.stringify(data.data.games.game[1].winning_pitcher)}`);
      console.log(`LPitcher: ${JSON.stringify(data.data.games.game[1].losing_pitcher)}`);
      console.log(`SPitcher: ${JSON.stringify(data.data.games.game[1].save_pitcher)}`);
      console.log(`Linescore: ${JSON.stringify(data.data.games.game[1].linescore)}`);
      console.log(`Home Broadcast: ${JSON.stringify(data.data.games.game[1].broadcast.home)}`);
      console.log(`Away Broadcast: ${JSON.stringify(data.data.games.game[1].broadcast.away)}`);
      console.log(`Game Time: ${JSON.stringify(data.data.games.game[1].time_date)}${JSON.stringify(data.data.games.game[1].amPm)}`);
      console.log(`Location: ${JSON.stringify(data.data.games.game[1].venue)} ${JSON.stringify(data.data.games.game[1].location)}`);
    });
  }

}
