<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold">Current Weather</h2>
    <div class="mt-4">
      <p><strong>Temperature:</strong> {{ weather.temperature }}°C</p>
      <p><strong>Description:</strong> {{ weather.description }}</p>
      <img :src="`http://openweathermap.org/img/w/${weather.icon}.png`" alt="Weather Icon"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    weather: {
      type: Object,
      required: true,
    },
  },
};
</script>
