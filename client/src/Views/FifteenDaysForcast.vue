<template>
    <main>
    <search-form @send-location="gotLoc"></search-form>
    <hr />
    <weather-info :lookcriteria="lookcriteria"></weather-info>
  </main>
</template>

<script>
import WeatherInfo from "../components/WeatherInfo.vue";
import SearchForm from "../components/SearchForm.vue";
export default {
  components: {
    WeatherInfo,
    SearchForm,
  },
  data() {
    return {
      lookcriteria: {},
    };
  },
  methods: {
    gotLoc(searchCriteria) {
      this.lookcriteria = searchCriteria;
    },
  },
};
</script>

<style>

</style>