<template>
  <div>
    <WeatherForm @fetchWeather="fetchHistoricalWeather" historical/>
    <HistoricalWeather v-if="historicalWeather.length" :weather="historicalWeather"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import WeatherForm from '@/components/WeatherForm.vue';
import HistoricalWeather from '@/components/HistoricalWeather.vue';

export default {
  components: {
    WeatherForm,
    HistoricalWeather,
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
