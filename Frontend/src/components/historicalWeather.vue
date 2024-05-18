<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold">Historical Weather</h2>
    <div class="mt-4">
      <WeatherForm @fetchWeather="fetchHistoricalWeather" historical/>
      <div v-if="historicalWeather.length">
        <table class="min-w-full mt-4 bg-white">
          <thead>
            <tr>
              <th class="px-4 py-2">Date</th>
              <th class="px-4 py-2">Temperature</th>
              <th class="px-4 py-2">Description</th>
              <th class="px-4 py-2">Icon</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="weather in historicalWeather" :key="weather.date">
              <td class="border px-4 py-2">{{ weather.date }}</td>
              <td class="border px-4 py-2">{{ weather.temperature }}°C</td>
              <td class="border px-4 py-2">{{ weather.description }}</td>
              <td class="border px-4 py-2">
                <img :src="`http://openweathermap.org/img/w/${weather.icon}.png`" alt="Weather Icon"/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import WeatherForm from '@/components/WeatherForm.vue';

export default {
  components: {
    WeatherForm,
  },
  computed: {
    ...mapState(['historicalWeather']),
  },
  methods: {
    fetchHistoricalWeather(location, from, to) {
      this.$store.dispatch('fetchHistoricalWeather', { location, from, to });
    },
  },
};
</script>
