import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  mlbGames = [
    {
      team1: 'Orioles',
      team2: 'Blue Jays',
      score1: 2,
      score2: 3,
      inning: 9,
      outs: 2
    },
    {
      team1: 'Yankees',
      team2: 'Mets',
      score1: 2,
      score2: 3,
      inning: 9,
      outs: 2
    },
    {
      team1: 'White Sox',
      team2: 'Red Sox',
      score1: 2,
      score2: 3,
      inning: 9,
      outs: 2
    },
    {
      team1: 'Cubs',
      team2: 'Padres',
      score1: 2,
      score2: 3,
      inning: 9,
      outs: 2
    },
    {
      team1: 'Expos',
      team2: 'Cardinals',
      score1: 2,
      score2: 3,
      inning: 9,
      outs: 2
    },
    {
      team1: 'Orioles',
      team2: 'Blue Jays',
      score1: 2,
      score2: 3,
      inning: 9,
      outs: 2
    },
    {
      team1: 'Yankees',
      team2: 'Mets',
      score1: 2,
      score2: 3,
      inning: 9,
      outs: 2
    },
    {
      team1: 'White Sox',
      team2: 'Red Sox',
      score1: 2,
      score2: 3,
      inning: 9,
      outs: 2
    },
    {
      team1: 'Cubs',
      team2: 'Padres',
      score1: 2,
      score2: 3,
      inning: 9,
      outs: 2
    },
    {
      team1: 'Expos',
      team2: 'Cardinals',
      score1: 2,
      score2: 3,
      inning: 9,
      outs: 2
    },
  ];

  getGames(): any {
    return this.mlbGames;
  }
}
