// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentWeather: null,
    historicalWeather: [],
  },
  mutations: {
    setCurrentWeather(state, weather) {
      state.currentWeather = weather;
    },
    setHistoricalWeather(state, weather) {
      state.historicalWeather = weather;
    },
  },
  actions: {
    async fetchCurrentWeather({ commit }, { location, date }) {
      const response = await axios.post('/graphql', {
        query: `
          query {
            getWeather(location: "${location}", date: "${date}") {
              temperature
              description
              icon
            }
          }
        `,
      });
      commit('setCurrentWeather', response.data.data.getWeather);
    },
    async fetchHistoricalWeather({ commit }, { location, from, to }) {
      const response = await axios.post('/graphql', {
        query: `
          query {
            getHistoricalWeather(location: "${location}", from: "${from}", to: "${to}") {
              temperature
              description
              icon
              date
            }
          }
        `,
      });
      commit('setHistoricalWeather', response.data.data.getHistoricalWeather);
    },
  },
});
