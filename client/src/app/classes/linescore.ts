import { Count } from './count';

export class Linescore {
  inning: [Count];
  hits: Count;
  runs: Count;
  homeruns: Count;
  strikeouts: Count;
  stolenbases: Count;
  errors: Count;

  constructor(inning: [Count], hits: Count, runs: Count, homeruns: Count, strikeouts: Count, 
    stolenbases: Count, errors: Count) {
      this.inning = inning;
      this.hits = hits;
      this.runs = runs;
      this.homeruns = homeruns;
      this.strikeouts = strikeouts;
      this.stolenbases = stolenbases;
      this.errors = errors;
    }
}
