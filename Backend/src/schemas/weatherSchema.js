// src/schemas/weatherSchema.js
const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Weather {
    id: ID!
    location: String!
    date: String!
    temperature: Float!
    description: String!
    icon: String!
  }

  type Query {
    getWeather(location: String!, date: String!): Weather
    getHistoricalWeather(location: String!, from: String!, to: String!): [Weather]
  }

  type Mutation {
    addWeather(location: String!, date: String!, temperature: Float!, description: String!, icon: String!): Weather
  }
`);
