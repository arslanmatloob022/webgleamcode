<template>
  <div class="loader-container">
    <div class="loader">
      <div class="loader">
        <div class="loader">
          <div class="loader"><div class="loader"></div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rotationSpeed: 1, // Rotation speed in seconds per rotation
    };
  },
};
</script>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
}

.loader {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 1px;
  border: 8px solid transparent;
  border-top-color: #ff7e5f; /* Change this color to customize the loader */
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
