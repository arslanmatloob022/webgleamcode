<template>
  <div class="search-container">
    <div class="search-bar" :class="{ active: isActive }" @click="toggleSearch">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search..."
        @click.stop
      />
      <i class="fas fa-search"></i>
    </div>
    <div class="search-options" v-show="isActive">
      <!-- Search options go here -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
      searchQuery: "",
    };
  },
  methods: {
    toggleSearch() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
<style scoped>
.search-container {
  position: relative;
  width: 300px;
}

.search-bar {
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 25px;
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.search-bar.active {
  width: 360px;
}

.search-bar input {
  border: none;
  outline: none;
  flex: 1;
  font-size: 16px;
  padding: 5px;
}

.search-bar i {
  margin-left: 10px;
  color: #4caf50;
  font-size: 20px;
  transition: transform 0.3s ease;
}

.search-bar.active i {
  transform: rotate(90deg);
}

.search-options {
  background-color: #fff;
  border: 2px solid #ccc;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  z-index: 999;
  display: none;
  /* Add styles for search options */
}
</style>
