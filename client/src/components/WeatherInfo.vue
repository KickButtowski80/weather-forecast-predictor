<template>
  <div>
    <h1>Weather Info</h1>
    <h3>Place: {{ info.address }}</h3>
    <h3>Description: {{ info.description }}</h3>
    <h3>Days</h3>
    <ol v-for="day in info.days" :key="day.datetime">
      <li>{{ day.datetime}}</li>
      <li>Temperature {{day.temp}}</li>
      <li>Feels Like: {{day.feelslike}}</li>
      <li>Max Temp: {{day.tempmax}}</li>
      <li>Min Temp: {{day.tempmin}}</li>
      <li>Condition: {{day.condition}}</li>
      <li>Description: {{day.description}}</li>
    <li>{{day.icon}}</li>
    </ol>
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
        consule.log("http - error", response.status);
      }
    },
  },
};
</script>

<style scoped>
ol li{
  list-style-type: none;
  color: blue;
}
</style> 