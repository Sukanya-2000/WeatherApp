// src/controllers/weatherController.js
const axios = require('axios');
const Weather = require('../models/Weather');

const getWeather = async (location) => {
  const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.API_KEY}`);
  const { temp } = response.data.main;
  const description = response.data.weather[0].description;
  const icon = response.data.weather[0].icon;

  return { temperature: temp, description, icon };
};

const saveWeather = async (data) => {
  const weather = new Weather(data);
  await weather.save();
};

module.exports = { getWeather, saveWeather };
