const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const axios = require('axios');
const { buildSchema } = require('graphql');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/weatherapp', { useNewUrlParser: true, useUnifiedTopology: true });

const weatherSchema = new mongoose.Schema({
  location: String,
  date: String,
  temperature: Number,
  description: String,
  icon: String,
});

const Weather = mongoose.model('Weather', weatherSchema);

// GraphQL Schema
const schema = buildSchema(`
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

// GraphQL Resolvers
const root = {
  getWeather: async ({ location, date }) => {
    const weather = await Weather.findOne({ location, date });
    if (!weather) {
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY`);
      const { temp } = response.data.main;
      const description = response.data.weather[0].description;
      const icon = response.data.weather[0].icon;
      const newWeather = new Weather({ location, date, temperature: temp, description, icon });
      await newWeather.save();
      return newWeather;
    }
    return weather;
  },
  getHistoricalWeather: async ({ location, from, to }) => {
    return Weather.find({ location, date: { $gte: from, $lte: to } });
  },
  addWeather: async ({ location, date, temperature, description, icon }) => {
    const newWeather = new Weather({ location, date, temperature, description, icon });
    await newWeather.save();
    return newWeather;
  },
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
