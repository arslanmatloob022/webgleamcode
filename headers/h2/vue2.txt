<template>
  <div class="header">
    <div class="logo">
      <i class="fas fa-store"></i>
      DotShop
    </div>
    <div class="nav">
      <a href="">Home</a>

      <a href="">Products</a>
      <a href="">Categories</a>
      <a href="">Deals</a>
      <a href="">Contact</a>
    </div>
    <div class="search">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search"
        @focus="showSearchDropdown"
      />
      <div class="search-dropdown" v-if="showDropdown">
        <!-- Search results go here -->
      </div>
    </div>
    <div class="cart" @mouseenter="openCart" @mouseleave="closeCart">
      <i class="fa fa-shopping-cart fa-fade"></i>
      Cart ({{ cartItems }})
      <div class="cart-dropdown" v-if="cartOpen">
        <div class="user-data">
          <img src="" alt="" srcset="" />
          <a href="">HeadPhone</a><span><p>$16</p></span>
        </div>

        <div class="user-data">
          <img src="" alt="" srcset="" />
          <a href="">HeadPhone</a><span><p>$16</p></span>
        </div>
      </div>
    </div>
    <div class="user">
      <i class="uil uil-user"></i>
      {{ userLoggedIn ? "My Account" : "Login / Signup" }}
    </div>
  </div>
</template>

<script>
export default {
  name: "EcomHeader",
  data() {
    return {
      searchQuery: "",
      showDropdown: false,
      cartItems: 0,
      cartOpen: false,
      userLoggedIn: false,
    };
  },
  methods: {
    showSearchDropdown() {
      this.showDropdown = true;
    },
    openCart() {
      this.cartOpen = true;
    },
    closeCart() {
      this.cartOpen = false;
    },
  },
};
</script>

<style scoped>
/* Reset default margin and padding */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Global styles */
body {
  font-family: Arial, sans-serif;
}

/* Header styles */
.header {
  width: 100%;
  background-color: #333;
  color: white;
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  gap: 10px;
}

.logo i {
  font-size: 30px;
}

.nav {
  display: flex;
  gap: 20px;
}

.nav a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.nav a:hover {
  display: inline-block;
  color: #e44d26;
  animation: rollUp 0.3s;
}

@keyframes rollUp {
  0% {
    transform: scaleY(-1);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}

.search {
  position: relative;
}

.search input[type="text"] {
  border: none;
  border-radius: 20px;
  padding: 8px 15px;
  width: 200px;
  transition: width 0.3s;
}

.search-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  display: none;
}

.search input[type="text"]:focus {
  width: 300px;
}

.cart {
  position: relative;
  cursor: pointer;
}
.cart i {
  color: #ccc;
}
.user {
  position: relative;
  cursor: pointer;
}
.user i {
  color: #ccc;
}
.cart-dropdown,
.user-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  display: none;
  animation: fadeIn 0.3s;
}
.cart-dropdown,
.user-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  display: none;
  animation: fadeIn 0.5s;
  display: flex;
  width: max-content;

  flex-direction: column;
}
.user-data {
  padding: 10px;
  gap: 10px;
  align-items: center;
  display: flex;
  margin-top: 10px;
}
.user-data img {
  width: 20px;
  height: 20px;
  border-radius: 3px;
  border: 1px solid rgba(255, 101, 66, 0.5);
}
.user-data p {
  background-color: #ff6542;
  border-radius: 45%;
  color: #333;
}
.user-data:hover {
  border-radius: 6px;
  background-color: #ccc;
  transform: scale(1.03);
  transition: all ease-in-out 0.1s;
}
.user-data i {
  font-size: 22px;
  color: #e44d26;
}
.user-data a {
  color: #333;
  text-align: left;
  text-decoration: none;
}
.cart:hover .cart-dropdown,
.user:hover .user-dropdown {
  display: block;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive styles */
@media screen and (max-width: 768px) {
  .nav {
    display: none;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 10px 0;
    text-align: center;
  }

  .nav.active {
    display: flex;
  }

  .nav a {
    display: block;
    padding: 8px 0;
  }

  .search input[type="text"] {
    width: 100%;
  }

  .cart,
  .user {
    display: none;
  }
}
</style>
