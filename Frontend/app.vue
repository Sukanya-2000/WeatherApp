<template>
  <div>
    <header>
      <h1 class="text-center text-4xl font-bold my-4">Weather App</h1>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  @apply bg-gray-100;
}
</style>
