<template>
  <div>
    <h1>Weather Info</h1>
    <h4>{{ info }}</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {},
    };
  },
  mounted() {
    this.fetchWeatherInfo();
  },
  methods: {
    async fetchWeatherInfo() {
      const response = await fetch("http://localhost:4000");
      if (response.ok) {
        this.info = await response.json();
      } else {
        console.log("http - error", response.status);
      }
    },
  },
};
</script>

<style>
</style>