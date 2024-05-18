# Weather App

## Overview

This project is a weather application that provides current and historical weather data for various cities around the world. The app uses Vue.js for the frontend, Express.js for the backend, and integrates with the OpenWeatherMap API to fetch weather data. MongoDB is used for storing historical weather data.

## Features

- Fetch current weather data for a specified city and date.
- Fetch historical weather data for a specified city and date range.
- Display weather data in a user-friendly interface.
- Persist historical weather data in MongoDB.

## Technologies Used

- **Frontend:** Vue.js, Vuex, Vue Router, Tailwind CSS
- **Backend:** Node.js, Express.js, GraphQL, Apollo Server, MongoDB, Mongoose
- **API:** OpenWeatherMap API

## Prerequisites

- Node.js (v12.x or later)
- npm (v6.x or later)
- MongoDB (v4.x or later)

## Installation

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file in the root directory and add your OpenWeatherMap API key and MongoDB URI**
   ```env
   MONGO_URI=mongodb://localhost:27017/weatherapp
   API_KEY=bd5e37850979ddaeb76f12ad7a97608
   ```

4. **Start the backend server**
   ```bash
   npm start
   ```

### Frontend Setup

1. **Navigate to the frontend directory**
   ```bash
   cd weather-app-frontend
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Start the frontend server**
   ```bash
   npm run serve
   ```

4. **Open `http://localhost:8080` in your browser to view the app.**

## Project Structure

### Backend

- **server.js**: Entry point for the backend server.
- **graphql/**: Contains GraphQL schema and resolvers.
  - **schema.js**: Defines the GraphQL schema.
  - **resolvers.js**: Defines the resolvers for the GraphQL schema.
- **models/**: Contains Mongoose models.
  - **Weather.js**: Mongoose model for weather data.
- **services/**: Contains services for fetching weather data from the OpenWeatherMap API.

### Frontend

- **src/**: Contains the source code for the frontend application.
  - **assets/**: Contains static assets such as Tailwind CSS.
    - **tailwind.css**: Tailwind CSS configuration file.
  - **components/**: Contains Vue components.
    - **WeatherForm.vue**: Component for the weather form.
    - **CurrentWeather.vue**: Component for displaying current weather.
    - **HistoricalWeather.vue**: Component for displaying historical weather.
  - **router/**: Contains Vue Router configuration.
    - **index.js**: Defines routes for the application.
  - **store/**: Contains Vuex store configuration.
    - **index.js**: Defines the Vuex store for state management.
  - **views/**: Contains view components.
    - **Home.vue**: Home view component.
    - **Historical.vue**: Historical weather view component.
  - **App.vue**: Root component of the application.
  - **main.js**: Entry point for the Vue application.

## Usage

### Fetch Current Weather

1. **Open the app in your browser.**
2. **Select a location and date in the weather form.**
3. **Click the "Get Weather" button to fetch and display the current weather data.**

### Fetch Historical Weather

1. **Navigate to the historical weather view.**
2. **Select a location and date range in the weather form.**
3. **Click the "Get Weather" button to fetch and display the historical weather data.**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- This project uses the [OpenWeatherMap API](https://openweathermap.org/api) for fetching weather data.
- Tailwind CSS for styling the frontend application.
- Vue.js for building the frontend application.
- Node.js, Express.js, and MongoDB for building the backend application.
```
