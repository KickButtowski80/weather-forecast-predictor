<template>
  <base-card >
    <div class="display-flex row">
         <span>Location:</span>

         <input type="text" name="" id="" v-model="location" />
     
      
    </div>
    <div class="display-flex row">
      
        <label for="m-units">Measurement Unit:</label>

        <select name="m-units" id="m-units" v-model="unitSelected">
          <option disabled value="">Please select one</option>
          <option value="us">F, mi</option>
          <option value="base">C, km</option>
        </select>
    
    </div>

    <button @click="search">Search</button>
  </base-card>
</template>

<script>
export default {
  emits: ["send-location"],
  data() {
    return {
      location: "",
      unitSelected:""
    };
  },
  methods: {
    search() {
      const searchCriteria = {
        location: this.location,
        unit: this.unitSelected,
      }
      this.$emit("send-location", searchCriteria);
      this.location = "";
    },
  },
};
</script>

<style scoped>
* {
  font-size: 1.5rem;
  margin: 5px;
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

.form {
  display: flex;
  flex-direction: column;
  width: 500px;
}
</style>