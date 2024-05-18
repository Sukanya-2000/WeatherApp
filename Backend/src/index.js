// src/index.js
require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const connectDB = require('./config/db');
const schema = require('./schemas/weatherSchema');
const { getWeather, saveWeather } = require('./controllers/weatherController');
const Weather = require('./models/Weather');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// GraphQL root resolver
const root = {
  getWeather: async ({ location, date }) => {
    let weather = await Weather.findOne({ location, date });
    if (!weather) {
      const data = await getWeather(location);
      weather = new Weather({ location, date, ...data });
      await saveWeather(weather);
    }
    return weather;
  },
  getHistoricalWeather: async ({ location, from, to }) => {
    return Weather.find({ location, date: { $gte: from, $lte: to } });
  },
  addWeather: async ({ location, date, temperature, description, icon }) => {
    const weather = new Weather({ location, date, temperature, description, icon });
    await saveWeather(weather);
    return weather;
  },
};

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/graphql`);
});
