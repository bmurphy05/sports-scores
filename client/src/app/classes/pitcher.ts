export class Pitcher {
  era: number;
  first: string;
  id: number;
  last: string;
  losses: number;
  name_display_roster: string;
  number: number;
  win: number;

  constructor(era: number, first: string, id: number, last: string, losses: number,
    name_display_roster: string, number: number, win: number) {
      this.era = era;
      this.first = first;
      this.id = id;
      this.last = last;
      this.losses = losses;
      this.name_display_roster = name_display_roster;
      this.number = number;
      this.win = win;
    }
}
