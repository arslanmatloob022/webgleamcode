<template>
  <div class="container">
    <h3>Fire Work Animation</h3>
    <div
      v-for="particle in particles"
      :key="particle.id"
      class="particle"
      :style="particle.style"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      particles: [],
    };
  },
  created() {
    setInterval(this.createParticle, 100);
  },
  methods: {
    createParticle() {
      const size = Math.random() * 15 + 10;
      const animationDuration = Math.random() * 5 + 2;
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      })`;

      this.particles.push({
        id: Date.now(),
        style: {
          width: size + "px",
          height: size + "px",
          left: x + "px",
          top: y + "px",
          backgroundColor: color,
          animation: `float ${animationDuration}s linear infinite`,
        },
      });
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  background: black;
  overflow: hidden;
}
.container h3 {
  text-align: center;
  z-index: 1000;
  color: #fff;
}
.particle {
  position: absolute;
  background-color: #3498db;
  border-radius: 50%;
  pointer-events: none;
  overflow: hidden;
  transform-origin: center;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
