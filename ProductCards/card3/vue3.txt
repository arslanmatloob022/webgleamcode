<template>
  <div class="product-card">
    <div class="product-images">
      <div class="main-image">
        <img :src="product.images[activeImage]" alt="Product" />
      </div>
      <div class="thumbnail-images">
        <img
          v-for="(image, index) in product.images"
          :key="index"
          :src="image"
          alt="Thumbnail"
          @mouseover="changeActiveImage(index)"
        />
      </div>
    </div>
    <div class="product-details">
      <h2>{{ product.name }}</h2>
      <p class="price">${{ product.price.toFixed(2) }}</p>
      <div class="buttons">
        <button class="add-to-cart" @click="addToCart">Add to Cart</button>
        <button class="quick-view" @click="openQuickView">Quick View</button>
      </div>
    </div>
    <div v-if="showQuickView" class="quick-view-modal">
      <div class="main-image">
        <img :src="product.images[activeImage]" alt="Product" />
      </div>
      <h2>{{ product.name }}</h2>
      <p class="description">{{ product.description }}</p>
      <p class="price">${{ product.price.toFixed(2) }}</p>
      <button class="add-to-cart" @click="addToCart">Add to Cart</button>
      <button class="close-modal" @click="closeQuickView">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThirdProductCard",
  data() {
    return {
      product: {
        images: [
          require("@/assets/Images/e1.jpg"),
          require("@/assets/Images/e2.jpg"),
          require("@/assets/Images/e3.jpg"),
        ],
        name: "Product Name",
        price: 60.2353,
        description: "Here you will write the description of your product",
      },

      activeImage: 0,
      showQuickView: false,
    };
  },
  methods: {
    changeActiveImage(index) {
      this.activeImage = index;
    },
    addToCart() {
      // Implement your add to cart logic here
      console.log(`Added ${this.product.name} to cart`);
    },
    openQuickView() {
      this.showQuickView = true;
    },
    closeQuickView() {
      this.showQuickView = false;
    },
  },
};
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  width: 300px;
  margin: 20px;
}

.product-images {
  position: relative;
  text-align: center;
}

.main-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.thumbnail-images {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.thumbnail-images img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin: 0 5px;
  cursor: pointer;
}

.product-details {
  padding: 20px;
  text-align: center;
}

.price {
  font-weight: bold;
  margin-bottom: 10px;
}

.add-to-cart,
.quick-view,
.close-modal {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 10px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-to-cart:hover,
.quick-view:hover,
.close-modal:hover {
  background-color: #45a049;
}

.quick-view-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: white;
}

.buttons {
  display: flex;
}
</style>
