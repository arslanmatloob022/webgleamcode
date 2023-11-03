<template>
  <div class="product-card">
    <div class="product-rotate">
      <div class="product-images">
        <div
          class="product-image"
          v-for="(image, index) in product.images"
          :key="index"
        >
          <img :src="image" alt="Product Image" />
        </div>
      </div>
    </div>
    <div class="product-details">
      <h2>{{ product.name }}</h2>
      <p class="description">{{ product.description }}</p>
      <p class="price">${{ product.price.toFixed(2) }}</p>
      <button @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecondProductCard",
  data() {
    return {
      product: {
        images: [
          require("@/assets/Images/e3.jpg"),
          require("@/assets/Images/e1.jpg"),
          require("@/assets/Images/e2.jpg"),
        ],
        name: "Mobile Phone",
        price: 60,
      },
    };
  },
  methods: {
    addToCart() {
      // Implement your add to cart logic here
      alert(`Added ${this.product.name} to cart`);
    },
  },
};
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  margin: 20px;
  background-color: #fff;
}

.product-rotate {
  width: 100%;
  height: 250px;
  overflow: hidden;
  perspective: 1000px;
  position: relative;
}

.product-images {
  width: 100%;
  height: 100%;
  display: flex;
  transform-style: preserve-3d;
  transition: transform 0.5s ease;
}

.product-images .product-image {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-images .product-image img {
  width: 80%;
  height: 80%;
  object-fit: cover;
  border-radius: 8px;
}

.product-card:hover .product-images {
  transform: rotateY(180deg);
}

.product-details {
  padding: 20px;
  text-align: center;
}

.product-details h2 {
  font-size: 1.4rem;
  margin-bottom: 8px;
}

.description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;
}

.price {
  font-size: 1.2rem;
  color: #e74c3c;
  margin-bottom: 12px;
}

button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2980b9;
}
</style>
