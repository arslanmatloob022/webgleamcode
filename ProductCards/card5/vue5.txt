<template>
  <section class="main">
    <!-- <button @click="emitEvent">Emit Event</button> -->
    <div class="product-card">
      <div class="image-container">
        <img
          class="image-size"
          :src="eproduct.images[currentImage]"
          alt="Product"
          @click="openSlider"
        />
        <div class="image-nav">
          <button class="prev-btn" @click="prevImage" @mouseover="prevImage">
            &#10094;
          </button>
          <button class="next-btn" @click="nextImage" @mouseover="nextImage">
            &#10095;
          </button>
        </div>
      </div>

      <div class="product-card-content">
        <h3>{{ eproduct.name }}</h3>
        <div class="product-data">
          <p class="price">$ {{ eproduct.price }}</p>
          <div class="product-reviews">
            <div class="product-total-rating">
              <span class="total-rating-label">Rating:</span>
              <div class="total-rating-stars">
                <i
                  v-for="rating in 5"
                  :key="rating"
                  class="star-icon fa fa-star"
                  :class="{ 'rated-star': rating <= averageRating }"
                >
                </i>
              </div>
            </div>
          </div>
        </div>

        <div class="action-btn">
          <button class="cart-btn" @click="addToCart">
            Add to <span><i class="uil uil-shopping-cart-alt"></i></span>
          </button>
          <button class="detail-btn" @click="openDetails">Details</button>
          <button class="review-button like-btn" @click="toggleRating">
            <i class="fa fa-star"></i> Rate
          </button>
          <div v-if="showRating" class="rating-stars">
            <i
              v-for="rating in 5"
              :key="rating"
              class="star-icon fa fa-star"
              :class="{ active: rating <= selectedRating }"
              @click="rateProduct(rating)"
            >
            </i>
          </div>
        </div>
      </div>

      <div v-if="sliderOpen" class="image-slider">
        <button @click="prevSlide" class="prev-slide-btn slide-btn">
          &#10094;
        </button>
        <img
          class="slider-img"
          :src="eproduct.images[currentSlide]"
          alt="Product"
        />

        <button @click="nextSlide" class="next-slide-btn slide-btn">
          &#10095;
        </button>
        <button class="close-slider" @click="closeSlider">&times;</button>
      </div>

      <div v-if="detailsOpen" class="details-popup">
        <h3>{{ eproduct.name }}</h3>
        <p>{{ eproduct.description }}</p>
        <!-- Other product details -->
        <button @click="closeDetails">Close</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FifthProductCard",
  props: {},
  data() {
    return {
      showRating: false,
      selectedRating: 0,
      userRatings: [],
      sliderOpen: false,
      detailsOpen: false,
      currentImage: 0,
      currentSlide: 0,
      eproduct: {
        name: "Mobile Phone",
        price: 100,
        description:
          "Here we will write the description of our product that help to define our product",
        images: [
          require("@/assets/Images/e1.jpg"),
          require("@/assets/Images/e2.jpg"),
          require("@/assets/Images/e3.jpg"),
        ],
      },
    };
  },
  computed: {
    averageRating() {
      const totalRatings = this.userRatings.length;
      if (totalRatings === 0) {
        return 0;
      }
      const sumRatings = this.userRatings.reduce(
        (total, rating) => total + rating,
        0
      );
      return Math.round(sumRatings / totalRatings);
    },
  },
  methods: {
    // emitEvent() {
    //   this.$emit("custom-event", "Data from the child Comp");
    // },
    addToCart() {
      alter("Product Added to Cart !");
    },
    toggleRating() {
      this.showRating = !this.showRating;
    },
    rateProduct(rating) {
      this.selectedRating = rating;
      this.showRating = false; // Hide the rating stars after selection
      this.userRatings.push(rating); // Store the user's rating
    },
    openSlider() {
      this.sliderOpen = true;
    },
    closeSlider() {
      this.sliderOpen = false;
    },
    prevImage() {
      this.currentImage =
        (this.currentImage - 1 + this.eproduct.images.length) %
        this.eproduct.images.length;
    },
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.eproduct.images.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.eproduct.images.length) %
        this.eproduct.images.length;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.eproduct.images.length;
    },
    openDetails() {
      this.detailsOpen = true;
    },
    closeDetails() {
      this.detailsOpen = false;
    },
  },
};
</script>

<style scoped>
.blur-button {
  opacity: 0.6;
}
.review-button {
  position: relative;
}
.rating-stars {
  font-size: 20px;
  right: 14px;
  bottom: 20px;
  position: absolute;
  z-index: 1;
  transition: all 0.3s ease;
  border-radius: 8px;
  transform: scale(1.02);
  backdrop-filter: blur(8px);
}
.product-reviews {
  display: flex;
}
.product-total-rating {
  display: flex;
  align-items: center;
  color: #e44d26;
}
.star-icon {
  color: #e44d26;
}
.star-icon.rated-star {
  color: gold; /* Change the color for rated stars */
}
.main {
  position: relative;
}
.product-card {
  position: relative;
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  border: 1px solid rgba(228, 77, 38, 0.4);
}

.product-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.image-container {
  position: relative;
}

.image-container img {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.image-size {
  width: 100%;
  height: 200px;
}

.image-container:hover img {
  transform: scale(1.2);
}
.product-data {
  display: flex;
  justify-content: space-between;
}

.image-nav {
  position: absolute;
  bottom: 40%;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.image-nav button {
  padding: 10px 14px;
  width: 24px;
  padding: 1px;
  border: none;
  cursor: pointer;
}

.prev-btn {
  padding: 10px 14px;
  border-radius: 0 100% 100% 0;
}
.next-btn {
  padding: 10px 14px;
  border-radius: 100% 0 0 100%;
}

.close-slider {
  position: absolute;
  width: 28px;
  height: 28px;
  top: 10px;
  right: 42%;
  border-radius: 6px;
  color: #fff;
  background-color: #fff;
  cursor: pointer;
}
.product-card button {
  border: 1px solid #e44d26;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: #fff5f2;
  color: #e44d26;
  transition: background-color 0.3s ease;
}
.product-card button:active {
  border: 1px solid #c5371e;
}
.action-btn {
  font-size: 1rem;
  display: flex;
  gap: 3px;
}
.action-btn .like-btn {
  gap: 5px;
  width: 35%;
  border-radius: 0 20px 20px 0;
  display: flex;
  align-items: center;
}
.action-btn button {
  padding: 4px;
}
.cart-btn {
  font-size: 1rem;
  width: 35%;
  border-radius: 20px 0 0 20px;
}

.like-btn:focus {
  outline: #c5371e;
  border: 1px solid #c5371e;
}
.detail-btn {
  width: 30%;
}

.product-card button:hover {
  background-color: #ffffff;
}

/* Product Likes*/

.liked-heart path {
  fill: red; /* Change to the desired color */
}
.heart-icon {
  width: 24px;
  height: 24px;
  fill: #888;
  transition: color 0.3s ease;
}

.product-card-content {
  padding: 15px;
}

.product-card h3 {
  font-size: 1.5rem;
  margin: 0;
  color: #333;
  transition: color 0.3s ease;
}

.product-card:hover h3 {
  color: #e44d26;
}

.product-card p.price {
  font-size: 1.3rem;
  margin: 10px 0;
  color: #e44d26;
}

/* Image pop up slider*/
.image-slider {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 6px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slider-img {
  height: 100%;
  width: 100%;
}
.image-slider img {
  max-height: 100%;
  max-width: 100%;
  border-radius: 10px;
}

.slide-btn {
  position: absolute;
  padding: 4px 6px;
  width: 20px;
}
.prev-slide-btn {
  left: 0;
  border-radius: 0px 10px 10px 0px;
}
.next-slide-btn {
  right: 0;
  border-radius: 10px 0px 0px 10px;
}

/* Product Detail Pop up*/
.details-popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.details-popup {
  width: 96%;
  height: 96%;
  display: flex;
  flex-direction: column;
  max-width: 80vw;
  max-height: 80vh;
  overflow-y: auto;
  padding: 20px;
  text-align: left;
}

.details-popup h3 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.details-popup p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.details-popup button {
  display: block;
  margin-top: 10px;
  background-color: #e44d26;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.details-popup button:hover {
  background-color: #c5371e;
}
</style>
