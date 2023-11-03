<template>
  <div class="product-card">
    <div class="product-image">
      <img src="@/assets/Images/e1.jpg" alt="Product Image" />
    </div>
    <div class="product-details">
      <h2>{{ product.name }}</h2>
      <p class="price">${{ product.price.toFixed(2) }}</p>
      <button @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstProductCard",
  data() {
    return {
      product: {
        name: "Product Name",
        price: 23,
      },
    };
  },

  methods: {
    addToCart() {
      // Implement your add to cart logic here
      console.log(`Added ${this.product.name} to cart`);
    },
  },
};
</script>

<style scoped>
.product-card {
  width: 50%;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.3s ease;
  margin-bottom: 20px;
}

.product-card:hover {
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
}

.product-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-details {
  padding: 12px;
}

.product-details h2 {
  font-size: 1.2rem;
  margin-bottom: 8px;
}
.product-details p {
  text-align: center;
  font-size: 1rem;
  margin-bottom: 6px;
}

.price {
  font-size: 1.1rem;
  color: #e74c3c;
  margin-bottom: 8px;
}

button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2980b9;
}

@media screen and (max-width: 768px) {
  .product-card {
    width: 80%;
  }

  .product-details {
    padding: 12px;
  }

  .product-details h2 {
    font-size: 1rem;
    margin-bottom: 8px;
  }
  .product-details p {
    text-align: center;
    font-size: 0.7rem;
    margin-bottom: 6px;
  }

  .price {
    font-size: 0.7rem;
  }

  button {
    padding: 6px 8px;
  }
}
</style>
