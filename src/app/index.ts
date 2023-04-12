import express from 'express';
import rootResolver from './resolvers';
import { schema } from './schema';
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
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
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: rootResolver,
    graphiql: true
  })
);
export { app };
