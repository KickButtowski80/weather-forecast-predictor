<template>
  <div>
    <Navigation />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navigation from "./components/Nav/Navigation.vue";
export default {
  components: {
    Navigation,
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

ol li {
  list-style-type: none;
  color: blue;
}
</style>