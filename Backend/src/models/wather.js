// src/models/Weather.js
const mongoose = require('mongoose');

const WeatherSchema = new mongoose.Schema({
  location: { type: String, required: true },
  date: { type: String, required: true },
  temperature: { type: Number, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
});

module.exports = mongoose.model('Weather', WeatherSchema);
