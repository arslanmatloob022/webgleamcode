<template>
  <div class="loader-container">
    <div class="loader">
      <div
        v-for="(circle, index) in circles"
        :key="index"
        :style="circle.style"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circles: [],
    };
  },
  mounted() {
    this.createCircles();
    setInterval(this.updateCircles, 1500); // Update circle colors and positions every 1.5 seconds
  },
  methods: {
    createCircles() {
      for (let i = 0; i < 6; i++) {
        this.circles.push({
          style: {
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random()}s`,
          },
        });
      }
    },
    updateCircles() {
      this.circles.forEach((circle) => {
        circle.style.top = `${Math.random() * 100}%`;
        circle.style.left = `${Math.random() * 100}%`;
        circle.style.animationDelay = `${Math.random()}s`;
      });
    },
  },
};
</script>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: #f2f2f2;
  position: relative;
  overflow: hidden;
}

.loader {
  position: absolute;
  width: 50%;
  height: 50%;
}

.loader div {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #3498db;
  position: absolute;
  transition: all 3s ease-in-out;
  animation: moveCircle 3s ease-in-out infinite;
}

@keyframes moveCircle {
  0%,
  100% {
    transform: translate(-50%, -50%);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
  }
}
</style>
