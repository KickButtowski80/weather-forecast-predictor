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
  computed: {
    loc() {
      // debugger;
      // return this.lookcriteria.
    },
  },
  methods: {
    async fetchWeatherInfo() {
      const loc = this.lookcriteria.location || "los angeles";
      const unit = this.lookcriteria.unit || "us";
      const response = await fetch(
        `http://localhost:4000/?loc=${loc}&unit=${unit}`
      );

      if (response.ok) {
        this.info = await response.json();
      } else {
        console.log("http - error", response.status, response.message);
      }
    },
  },
};
</script>

<style scoped>
</style> 