<template>
  <main>
    <search-box></search-box>
    <hr>
    <weather-info></weather-info>
  </main>
</template>

<script>
import WeatherInfo from "./components/WeatherInfo.vue";
import SearchBox from "./components/SearchBox.vue";
export default {
  components: {
    WeatherInfo,
    SearchBox,
  },
};
</script>

<style>
</style>