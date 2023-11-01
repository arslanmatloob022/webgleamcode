<template>
  <div class="loader-container">
    <div class="loaders" :style="colors"></div>
    <div class="loader" :style="colors"></div>
    <div class="loaders" :style="colors"></div>
    <div class="loader" :style="colors"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: {
        borderColor: this.getRandomColor(),
      },
    };
  },
  methods: {
    getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
  },
};
</script>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 89vh;
  background-color: #f1c40f;
}

.loader {
  width: 25px;
  height: 25px;
  border: 8px solid #e74c3c;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}
.loaders {
  width: 25px;
  height: 25px;
  border: 8px solid #e74c3c;
  border-radius: 50%;
  animation: secpulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.5);
    opacity: 0.7;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.5);
    opacity: 0.7;
  }
}

@keyframes secpulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.5);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
