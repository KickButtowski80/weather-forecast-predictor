<template>
  <base-card>
  
    <h1>Today Forcast</h1>
    <div>
      <base-card>
        <h3>Place: {{ place}}</h3>
        <h3>General Description: {{ todayInfo.description }}</h3>
      </base-card>

      <base-card>
        <ol>
          <li>{{todayInfo.datetime }}</li>
          <li>Temperature {{ todayInfo.temp }}</li>
          <li>Feels Like: {{ todayInfo.feelslike }}</li>
          <li>Max Temp: {{ todayInfo.tempmax }}</li>
          <li>Min Temp: {{ todayInfo.tempmin }}</li>
          <li>Condition: {{ todayInfo.conditions }}</li>
          <li>Description: {{ todayInfo.description }}</li>
          <li>{{ todayInfo.icon }}</li>
        </ol>
      </base-card>
    </div>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      todayInfo: "",
      place: '',
    };
  },
  mounted() {
    this.fetchWeatherInfo();
  },
  methods: {
    async fetchWeatherInfo() {
      const response = await fetch(`http://localhost:4000/today-forcast`);
      if (response.ok) {
        const data = await response.json();
        const { place , todayInfo } = data
        this.place = place;
        this.todayInfo = todayInfo;

      } else {
        console.log("http - error", response.status);
      }
    },
  },
};
</script>

<style>
</style>