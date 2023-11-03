<template>
  <div class="header">
    <!-- Upper Header Section -->
    <div class="upper-header">
      <div class="user-info">
        <img src="@/assets/logo.png" alt="User Avatar" class="user-avatar" />
        <span class="user-name">{{ userName }}</span>
      </div>
      <div class="search-bar">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search..."
          class="search-input"
          :class="{ active: showSearch }"
        />
        <button @click="openSearch" class="search-button">
          <i class="fa fa-search"></i>
        </button>
      </div>
      <div class="notifications">
        <div class="notify">
          <i class="fa fa-bell" aria-hidden="true"></i
          ><sup>{{ notifications }}</sup>
        </div>
        <div class="playlist">
          <i class="fa fa-list" aria-hidden="true"></i
          ><span><p>Watch Later</p></span>
        </div>
      </div>
      <i class="fa fa-bars menuBtn" @click="openMenu" aria-hidden="true"></i>
    </div>

    <!-- Lower Header Section -->
    <div class="lower-header">
      <div class="nav-links" :class="{ show: showMenu }">
        <a href="/">Home</a>
        <a href="/movies">Movies</a>
        <a href="/tv-shows">TV Shows</a>
        <a href="/music">Music</a>
        <!-- Add more navigation links as needed -->
      </div>
      <div class="user-actions">
        <button @click="openFavorites" class="action-button">
          <i class="fa fa-heart"></i> Favorites
        </button>
        <button @click="openSettings" class="action-button">
          <i class="fa fa-cog"></i> Settings
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "John Doe", // Example user name
      searchQuery: "",
      showNavLinks: false,
      notifications: 3,
      showMenu: false,
      showSearch: false,
    };
  },
  methods: {
    openSearch() {
      this.showSearch = !this.showSearch;
    },
    search() {
      // Implement search functionality
      console.log("Searching for: " + this.searchQuery);
    },
    openFavorites() {
      // Implement open favorites functionality
      console.log("Opening Favorites");
    },
    openSettings() {
      // Implement open settings functionality
      console.log("Opening Settings");
    },
    openMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style scoped>
.header {
  margin: 0;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.upper-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-avatar {
  width: 30px;
  height: 30px;
  background-color: #79f3b0;
  border-radius: 50%;
  margin-right: 10px;
}

.search-bar {
  display: flex;
  align-items: center;
}

.search-input {
  width: 200px;
  padding: 8px;
  border: none;
  border-radius: 20px;
  margin-right: 10px;
}

.search-button {
  background-color: #fff;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #ddd;
}
.notifications {
  display: flex;
  align-items: center;
  gap: 10px;
}
.notifications i {
  color: #ffcc00;
}
.playlist {
  display: flex;
  gap: 6px;
}
.playlist i {
  color: #ffcc00;
}

.lower-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.nav-links {
  display: flex;
  animation: slide 0.3s;
}
@keyframes slide {
  from {
    transform: translateX(-100px);
  }
  to {
    transform: translateX(0);
  }
}
.nav-links a {
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #ffcc00;
}

.user-actions {
  display: flex;
}

.action-button {
  background-color: #ffcc00;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.action-button:hover {
  background-color: #333;
  color: #ffcc00;
}

.menuBtn {
  display: none;
  font-size: 1.4rem;
  color: #ddd;
  cursor: pointer;
  color: #ffcc00;
}
.menuBtn:hover {
  color: #ddd;
}

/* Responsive Styles */
@media screen and (max-width: 768px) {
  .upper-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
  }

  .user-info {
    display: flex;
    align-items: center;
  }

  .search-input {
    display: none;
    position: absolute;
    top: 100%;
    width: 40%;
    left: 30%;
  }
  .search-input.active {
    display: block;
  }

  .notifications .playlist {
    display: none;
  }
  .header {
    position: relative;
  }
  .nav-links {
    display: none;
    background-color: #333;
    flex-direction: column;
    position: absolute;
    gap: 16px;
    width: 30%;
    top: 100%;
    left: 0;
  }
  .nav-links.show {
    display: block;
  }
  .nav-links a {
    margin: 16px 6px;
    display: block;
  }

  .user-actions {
    display: none;
  }
  .menuBtn {
    margin: 0;
    display: block;
  }
}
</style>
