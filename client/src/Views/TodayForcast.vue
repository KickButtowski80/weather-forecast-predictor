<template>
  <base-card>
    <h1>Today Forcast</h1>
    <div>
      <base-card>
        <h3>Place: {{ info.address }}</h3>
        <h3>General Description: {{ info.description }}</h3>
      </base-card>

      <base-card>
        <ol>
          <li>{{ info.datetime }}</li>
          <li>Temperature {{ info.temp }}</li>
          <li>Feels Like: {{ info.feelslike }}</li>
          <li>Max Temp: {{ info.tempmax }}</li>
          <li>Min Temp: {{ info.tempmin }}</li>
          <li>Condition: {{ info.conditions }}</li>
          <li>Description: {{ info.description }}</li>
          <li>{{ info.icon }}</li>
        </ol>
      </base-card>
    </div>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      info: "",
    };
  },
  mounted() {
    this.fetchWeatherInfo();
  },
  methods: {
    async fetchWeatherInfo() {
      const response = await fetch(`http://localhost:4000/today-forcast`);
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