const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
    bye: String
    getAllProperties: [Property]
  }

  type Property {
    id: String!
    name: String!
    country: String!
    region: String!
    wfContent: PropInfo
  }

  type PropInfo {
    id: String
    heroImage: String!
    cityImage: String!
    houseName: String
    name: String!
  } 
`);

module.exports = schema;
