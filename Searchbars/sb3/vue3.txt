<template>
  <section>
    <div class="search-bar">
      <input
        type="text"
        placeholder="Search..."
        v-model="searchQuery"
        @input="handleInput"
      />
      <button @click="search">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    handleInput() {
      // Handle input change if needed
    },
    search() {
      // Handle search functionality
      console.log("Searching for: " + this.searchQuery);
      // Add your search logic here
    },
  },
};
</script>
<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 25px;
  padding: 5px 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 300px;
}

.search-bar input {
  flex: 1;
  border: none;
  padding: 10px;
  font-size: 16px;
  outline: none;
}

.search-bar button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 15px;
  border-radius: 0 25px 25px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-bar button:hover {
  background-color: #45a049;
}
</style>
