<template>
  <div>
    <WeatherForm @fetchWeather="fetchWeather"/>
    <CurrentWeather v-if="currentWeather" :weather="currentWeather"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import WeatherForm from '@/components/WeatherForm.vue';
import CurrentWeather from '@/components/CurrentWeather.vue';

export default {
  components: {
    WeatherForm,
    CurrentWeather,
  },
  computed: {
    ...mapState(['currentWeather']),
  },
  methods: {
    fetchWeather(location, date) {
      this.$store.dispatch('fetchCurrentWeather', { location, date });
    },
  },
};
</script>
