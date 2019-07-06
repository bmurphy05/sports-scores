export class Status {
  balls: number;
  ind: string;
  inning: number;
  inningState: string;
  isNoHitter: string;
  isPerfectGame: string;
  note: string;
  outs: number;
  reason: string;
  status: string;
  strikes: number;
  topInning: string;

  constructor(balls: number, ind: string, inning: number, inningState: string,
              isNoHitter: string, isPerfectGame: string, note: string, outs: number,
              reason: string, status: string, strikes: number, topInning: string) {
      this.balls = balls;
      this.ind = ind;
      this.inning = inning;
      this.inningState = inningState;
      this.isNoHitter = isNoHitter;
      this.isPerfectGame = isPerfectGame;
      this.note = note;
      this.outs = outs;
      this.reason = reason;
      this.status = status;
      this.strikes = strikes;
      this.topInning = topInning;
     }
}
