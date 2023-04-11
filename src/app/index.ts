import express from 'express';
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const schema = buildSchema(`
  type Query {
    book: String
  }
`);
const root = {
  book: () => {
    return 'Hello world!';
  }
};
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
    rootValue: root,
    graphiql: true
  })
);
export { app };
