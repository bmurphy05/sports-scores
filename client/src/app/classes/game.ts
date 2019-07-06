import { Linescore } from './linescore';
import { Status } from './status';
import { Pitcher } from './pitcher';
import { Player } from './player';

export class Game {
  gamePk: number;
  status: Status;
  linescore: Linescore;
  winningPitcher: Pitcher;
  losingPitcher: Pitcher;
  savePitcher: Pitcher;
  // homeruns: [Player];
  awaywin: number;
  awayloss: number;
  awaycity: string;
  awayname: string;
  awayabv: string;
  homewin: number;
  homeloss: number;
  homecity: string;
  homename: string;
  homeabv: string;
  location: string;
  series: string;
  statsseason: number;
  timedate: string;
  amPm: string;
  venue: string;

  constructor(gamePk: number, status: Status, linescore: Linescore, winningPitcher: Pitcher,
    losingPitcher: Pitcher, savePitcher: Pitcher, awaywin: number,
    awayloss: number, awaycity: string, awayname: string, awayabv: string, homewin: number,
    homeloss: number, homecity: string, homename: string, homeabv: string, location: string,
    series: string, statsseason: number, timedate: string, amPm: string, venue: string) {
      this.gamePk = gamePk;
      this.status = status;
      this.linescore = linescore;
      this.winningPitcher = winningPitcher;
      this.losingPitcher = losingPitcher;
      this.savePitcher = savePitcher;
      // this.homeruns = homeruns;
      this.awaywin = awaywin;
      this.awayloss = awayloss;
      this.awaycity = awaycity;
      this.awayname = awayname;
      this.awayabv = awayabv;
      this.homewin = homewin;
      this.homeloss = homeloss;
      this.homecity = homecity;
      this.homename = homename;
      this.homeabv = homeabv;
      this.location = location;
      this.series = series;
      this.statsseason = statsseason;
      this.timedate = timedate;
      this.amPm = amPm;
      this.venue = venue;
    }
}
