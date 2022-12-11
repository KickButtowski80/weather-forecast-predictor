<template>
  <base-card >
    <div class="display-flex row">
         <span>Location:</span>

         <input type="text" name="" id="" v-model="location" />
     
      
    </div>
    <div class="display-flex row">
      
        <label for="m-units">Measurement Unit:</label>

        <select name="cars" id="cars">
          <option value="volvo">F, mi</option>
          <option value="saab">C, km</option>
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
    };
  },
  methods: {
    search() {
      this.$emit("send-location", this.location);
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

span {

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