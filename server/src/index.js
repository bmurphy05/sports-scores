import { ApolloServer } from 'apollo-server-express';
import chalk from 'chalk';
import app from './app';
import { typeDefs, resolvers } from './graphql/schema';

const port = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen(port, () => {
  console.log(chalk.greenBright(`⚾ 🏀 Sports Score API server started at localhost:${port}${server.graphqlPath}... 🏈 🏒`));
});
