<template>
  <form @submit.prevent="submitForm" class="p-4">
    <div class="mb-4">
      <label for="location" class="block text-gray-700">Location</label>
      <select v-model="location" id="location" class="block w-full mt-1">
        <option>Delhi</option>
        <option>Moscow</option>
        <option>Paris</option>
        <option>New York</option>
        <option>Sydney</option>
        <option>Riyadh</option>
      </select>
    </div>
    <div class="mb-4">
      <label for="date" class="block text-gray-700">Date</label>
      <input type="date" v-model="date" id="date" class="block w-full mt-1"/>
    </div>
    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Get Weather</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      location: 'Delhi',
      date: '',
    };
  },
  methods: {
    submitForm() {
      this.$emit('fetchWeather', this.location, this.date);
    },
  },
};
</script>
