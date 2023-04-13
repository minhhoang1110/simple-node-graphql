import express from 'express';
import rootResolver from './resolvers';
import schema from './schema';
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
app.use(
  cors({
    origin: '*'
  })
);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
const startApolloServer = async () => {
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers: rootResolver
  });
  await server.start();
  server.applyMiddleware({ app });
};
startApolloServer();
export { app };
