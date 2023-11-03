<template>
  <section>
    <div class="unique-search-bar">
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
      // In this example, we'll adjust the background gradient based on the input length
      this.updateGradient();
    },
    search() {
      // Handle search functionality
      console.log("Searching for: " + this.searchQuery);
      // Add your search logic here
    },
    updateGradient() {
      // Dynamically update the background gradient
      const inputLength = this.searchQuery.length;
      const gradient = `linear-gradient(to right, #ed6498 ${inputLength}%, #4682b4 ${inputLength}%)`;
      document.querySelector(".unique-search-bar").style.backgroundImage =
        gradient;
    },
  },
};
</script>
<style scoped>
.unique-search-bar {
  display: flex;
  align-items: center;
  border-radius: 25px;
  padding: 6px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 300px;
  background-image: linear-gradient(to right, #ed6498 0%, #4682b4 0%);
  transition: background-image 0.3s ease;
}

.unique-search-bar input {
  flex: 1;
  border: none;
  padding: 10px;
  font-size: 16px;
  outline: none;
  background: transparent;
  border-radius: 25px;
}
.unique-search-bar input::placeholder {
  color: #e4e4e4;
}

.unique-search-bar button {
  background: transparent;
  border: none;
  color: #e4e4e4;
  padding: 10px 15px;
  border-radius: 0 25px 25px 0;
  cursor: pointer;
}

.unique-search-bar button:hover {
  color: #ed6498;
  transition: color 0.3s ease;
}
</style>
