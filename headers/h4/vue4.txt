<template>
  <div class="header">
    <div class="logo">
      <img src="@/assets/logo.png" alt="Logo" />
    </div>
    <div class="nav" :class="{ active: showMenu }">
      <a to="/" class="nav-link">Home</a>
      <a to="/movies" class="nav-link">Movies</a>
      <a to="/tv-shows" class="nav-link">TV Shows</a>
      <a to="/music" class="nav-link">Music</a>
      <a to="/games" class="nav-link">Games</a>
      <a to="/news" class="nav-link">News</a>
      <a to="/events" class="nav-link">Events</a>
    </div>
    <div class="user-actions">
      <button @click="openProfile">Profile</button>
      <button @click="openSettings">Settings</button>
      <button @click="logout">Logout</button>
    </div>
    <i class="fa fa-bars menuBars" @click="openMenu" aria-hidden="ture"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    openProfile() {
      console.log("Opening Profile");
    },
    openSettings() {
      console.log("Opening Settings");
    },
    logout() {
      console.log("Logging out");
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.header:hover {
  background-color: #388e3c;
}

.logo img {
  background-color: #8cf183;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.nav {
  z-index: 0;
  display: flex;
  position: relative;
  justify-content: space-between;
  animation: slide 0.3s;
}
@keyframes slide {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
.nav a {
  margin-right: 20px;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;
}

.nav a:hover {
  color: #e1f5fe;
}

.user-actions button {
  background-color: transparent;
  color: white;
  border: none;
  margin-left: 20px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
}

.user-actions button:hover {
  text-decoration: underline;
  transform: scale(1.1);
}
.menuBars {
  cursor: pointer;
  display: none;
}

@media screen and (max-width: 768px) {
  .menuBars {
    display: block;
  }
  .header {
    position: relative;
  }
  .nav {
    display: none;
  }
  .nav.active {
    display: block;
    position: absolute;
    display: flex;
    justify-content: space-around;
    padding: 10px 0px;
    width: 100%;
    left: 0;
    top: 100%;
    background-color: #4caf50;
  }
}
</style>
