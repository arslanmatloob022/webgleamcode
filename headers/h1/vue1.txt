<template>
  <div class="top-navbar">
    <div class="menu-icon" @click="toggleMenu">
      <i class="fa fa-bars"></i>
    </div>
    <div class="logo">CRM System</div>
    <div class="menu" :class="{ 'show-menu': isMenuOpen }">
      <router-link to="/">Home</router-link>
      <router-link to="/contacts">Contacts</router-link>
      <router-link to="/opportunities">Opportunities</router-link>
      <router-link to="/tasks">Tasks</router-link>
      <router-link to="/reports">Reports</router-link>
      <router-link to="/support">Support</router-link>
    </div>
    <div class="user-profile">
      <span>Welcome, {{ username }}</span>
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    logout() {
      // Implement logout functionality
      console.log("User logged out.");
    },
  },
};
</script>

<style scoped>
.top-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.menu-icon {
  font-size: 24px;
  cursor: pointer;
  display: none; /* Hide the menu icon by default on larger screens */
}

.menu {
  display: flex;
  gap: 20px;
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
.menu a {
  color: #fff;
  padding: 6px 8px;
  text-decoration: none;
}

.menu a:hover {
  background-color: #0071eb;
}
.user-profile button {
  margin-left: 20px;
  padding: 8px 16px;
  background-color: #fff;
  color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.user-profile button:hover {
  background-color: #007bff;
  color: #fff;
}

/* Media Query for Mobile Responsiveness */
@media (max-width: 768px) {
  .menu {
    display: none;
  }
  .menu-icon {
    display: block;
  }
  .top-navbar {
    position: relative;
  }
  .show-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    width: 30%;
    left: 0;
    background-color: #007bff;
    padding: 10px;
  }
}
</style>
