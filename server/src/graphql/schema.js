import { merge } from 'lodash';

const Query = `
  type Query {
    _empty: String
  }
`;

const Mutation = `
  type Mutation {
    _empty: String
  }
`;

export const typeDefs = [Query, Mutation];

export const resolvers = merge({});
