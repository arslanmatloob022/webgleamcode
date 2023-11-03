<template>
  <div class="testimonial-card">
    <div class="profile-picture">
      <img :src="testimonial.profilePicture" alt="Profile" />
    </div>
    <div class="testimonial-content">
      <h3>{{ testimonial.name }}</h3>
      <p>{{ testimonial.feedback }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonial: {
        profilePicture: require("@/assets/Images/e1.jpg"),
        name: "Trvis Scott",
        feedback: "This is amazing site youo will find what you want exactly!",
      },
    };
  },
};
</script>

<style scoped>
.testimonial-card {
  width: 300px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}

.testimonial-card:hover {
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
}

.profile-picture {
  width: 100px;
  height: 100px;
  overflow: hidden;
  margin: 20px auto;
  border-radius: 50%;
}

.profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.testimonial-content {
  text-align: center;
  padding: 20px;
}

h3 {
  color: #333;
  margin-bottom: 10px;
}

p {
  color: #666;
  font-style: italic;
}
</style>
