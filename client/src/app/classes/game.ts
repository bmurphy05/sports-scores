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
  homeruns: [Player];
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

  constructor() { }
}
