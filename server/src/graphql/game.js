import { gql } from 'apollo-server-express';

export const typeDefs = gql`
extend type Query {

}
extend type Mutation {

}
  type Game {
    game_pk: Int,
    status: Status,
    linescore: Linescore,
    winning_pitcher: Pitcher,
    losing_pitcher: Pitcher,
    save_pitcher: Pitcher,
    homeruns: [Player],
    away_win: Int,
    away_loss: Int,
    away_city: String,
    away_name: String,
    away_abv: String,
    home_win: Int,
    home_loss: Int,
    home_city: String,
    home_name: String,
    home_abv: String,
    location: String,
    series: String,
    stats_season: Int,
    time_date: String,
    amPm: String,
    venue: String,
  }
`;

export const resolvers = {
    Query: {

    },
    Mutation: {

    },
};
