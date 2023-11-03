<template>
  <section>
    <div class="search-bar">
      <input
        type="text"
        placeholder="Search..."
        v-model="searchQuery"
        @input="handleInput"
      />
      <button @click="search">Search</button>
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
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 25px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: fit-content;
}

.search-bar input {
  flex: 1;
  border: none;
  padding: 10px;
  font-size: 16px;
  outline: none;
  border-radius: 25px;
}

.search-bar button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-bar button:hover {
  background-color: #45a049;
}
</style>
