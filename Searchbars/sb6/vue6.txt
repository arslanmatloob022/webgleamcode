<template>
  <section>
    <div class="search-bar" :class="{ active: isActive }">
      <div class="search-icon" @click="toggleSearch">
        <i class="fas fa-search"></i>
      </div>
      <input
        type="text"
        placeholder="Search..."
        v-model="searchQuery"
        @input="handleInput"
      />
      <button class="searchbtn" @click="search">Search</button>
    </div>
  </section>
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
    handleInput() {
      // Handle input change if needed
      this.showBtn();
    },
    search() {
      // Handle search functionality
      console.log("Searching for: " + this.searchQuery);

      // Add your search logic here
    },
    toggleSearch() {
      this.isActive = !this.isActive;
    },
    showBtn() {
      const show = `block`;
      if (this.searchQuery.length > 0) {
        document.querySelector(".searchbtn").style.display = show;
      } else {
        document.querySelector(".searchbtn").style.display = "none";
      }
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
  padding: 5px 6px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 250px;
  z-index: 1;
  transition: width 0.3s ease;
}

.search-bar.active {
  width: 300px;
}

.search-bar .search-icon {
  margin-right: 10px;
  cursor: pointer;
}

.search-bar input {
  flex: 1;
  background-color: transparent;
  border: none;
  padding: 6px 8px;
  font-size: 16px;
  outline: none;
}

.search-bar .searchbtn {
  background-color: #4caf50;
  display: none;
  border: none;
  color: white;
  padding: 10px 15px;
  border-radius: 0px 25px 25px 0px;
  cursor: pointer;
  z-index: 0;
  transition: all 0.3s ease-in-out;
}

.search-bar button:hover {
  background-color: #45a049;
}

/* Font Awesome Icons */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");
</style>
