<template>
  <div class="loader-container">
    <div class="loader"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pulseSpeed: 1.5, // Pulse speed in seconds
    };
  },
};
</script>
<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #2c3e50;
}

.loader {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: radial-gradient(circle, #3498db, #e74c3c);
  animation: pulse 1.5s infinite alternate;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0.5;
  }
}
</style>
