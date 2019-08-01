export class Player {
  first: string;
  hr: number;
  id: number;
  inning: number;
  last: string;
  nameDisplayRoster: string;
  number: number;
  runners: number;
  stdHr: number;
  teamCode: string;

  constructor(first: string, hr: number, id: number, inning: number, last: string,
    nameDisplayRoster: string, number: number, runners: number, stdHr: number,
    teamCode: string) {
    this.first = first;
    this.hr = hr;
    this.id = id;
    this.inning = inning;
    this.last = last;
    this.nameDisplayRoster = nameDisplayRoster;
    this.number = number;
    this.runners = runners;
    this.stdHr = stdHr;
    this.teamCode = teamCode;
  }
}
