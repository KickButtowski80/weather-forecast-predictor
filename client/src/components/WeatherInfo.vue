<template>
  <div>
    <base-card>
      <h1>Weather Info</h1>
      <h3>Place: {{ info.address }}</h3>
      <h3>General Description: {{ info.description }}</h3>
      <h3>Days</h3>
    </base-card>
    <ol v-for="day in info.days" :key="day.datetime">
      <base-card>
        <li>{{ day.datetime }}</li>
        <li>Temperature {{ day.temp }}</li>
        <li>Feels Like: {{ day.feelslike }}</li>
        <li>Max Temp: {{ day.tempmax }}</li>
        <li>Min Temp: {{ day.tempmin }}</li>
        <li>Condition: {{ day.condition }}</li>
        <li>Description: {{ day.description }}</li>
        <li>{{ day.icon }}</li>
      </base-card>
    </ol>
  </div>
</template>

<script>
export default {
  props: ["lookcriteria"],
  data() {
    return {
      info: {},
      loc: this.lookcriteria.location,
      unit: this.lookcriteria.unit,
    };
  },
  mounted() {
    this.fetchWeatherInfo();
  },
  watch: {
    lookcriteria(newV, oldV) {
      this.fetchWeatherInfo();
    },
  },
  methods: {
    async fetchWeatherInfo() {
      const response = await fetch(
        `https://4000-kickbuttows-weatherfore-5e8oxfdfyjo.ws-us78.gitpod.io/?loc=${this.lookcriteria.location || ''}&unit=${this.lookcriteria.unit || ''}`
      );
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
ol li {
  list-style-type: none;
  color: blue;
}
</style> 