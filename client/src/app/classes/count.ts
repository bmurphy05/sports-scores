export class Count {
  home: number;
  away: number;

  constructor(home: number, away: number) {
    this.home = home;
    this.away = away;
  }

  getHome(): number {
    return this.home;
  }

  getAway(): number {
    return this.away;
  }
}
