<template>
  <div>
    <input type="text" name="" id="" v-model="location" />
    <button @click="search">Search</button>
  </div>
</template>

<script>
export default {
  emits: ["send-location"],
  data() {
    return {
      location: "",
    };
  },
  methods: {
    search() {
      this.$emit("send-location", this.location);
      this.location = ''
    },
  },
};
</script>

<style scoped>
* {
  font-size: 1.5rem;
}

input {
  height: 32px;
  width: 224px;
}

button {
  font-size: 1rem;
  border-color: aquamarine;
  color: rgb(61, 92, 92);
  margin-left: 12px;
}
</style>