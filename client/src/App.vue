<template>
  <main>
    <search-form @send-location="gotLoc"></search-form>
    <hr />
    <weather-info :location="loc"></weather-info>
  </main>
</template>

<script>
import WeatherInfo from "./components/WeatherInfo.vue";
import SearchForm from "./components/SearchForm.vue";
export default {
  components: {
    WeatherInfo,
    SearchForm,
  },
  data() {
    return {
      loc: "",
    };
  },
  methods: {
    gotLoc(loc) {
      this.loc = loc;
    },
  },
};
</script>

<style>
.display-flex {
  display: flex;
}

.row {
  flex-direction: row;
}

.col {
  flex-direction: column;
}
</style>