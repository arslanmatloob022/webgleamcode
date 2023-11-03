<template>
  <div class="testimonial-card">
    <div class="testimonial-header">
      <div class="profile-picture">
        <img :src="testimonial.profilePicture" alt="Profile" />
      </div>
      <div class="header-text">
        <h3>{{ testimonial.name }}</h3>
        <p>{{ testimonial.position }}</p>
      </div>
    </div>
    <div class="testimonial-content">
      <p>{{ testimonial.feedback }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonial: {
        profilePicture: require("@/assets/Images/ent1.jpg"),
        name: "Trvis Scott",
        position: "CEO-Binance",
        feedback: "This is amazing site youo will find what you want exactly!",
      },
    };
  },
};
</script>

<style scoped>
.testimonial-card {
  width: 300px;
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  margin: 20px;
}

.testimonial-card:hover {
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
}

.testimonial-header {
  background-color: #007bff;
  color: #fff;
  padding: 15px;
  display: flex;
  align-items: center;
}

.profile-picture {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
}

.profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.header-text {
  flex: 1;
}

h3 {
  margin: 0;
  font-size: 1.2em;
}

p {
  margin: 0;
  font-size: 0.9em;
  opacity: 0.8;
}

.testimonial-content {
  padding: 20px;
  text-align: center;
}
</style>
