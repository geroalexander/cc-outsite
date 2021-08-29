const express = require('express');
const cors = require('cors');
const LOCAL_HOST = 'http://localhost:3000';
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const root = require('./root');

const app = express();

const corsConfig = {
  origin: LOCAL_HOST,
  credentials: true,
};
app.use(cors(corsConfig));
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }),
);
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
