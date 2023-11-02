<template>
  <div class="particle-explosion">
    <h3>Particles explosion animation</h3>
    <div
      class="particle"
      v-for="(particle, index) in particles"
      :key="index"
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
  mounted() {
    this.interval = setInterval(this.createParticle, 200);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    createParticle() {
      const colors = ["#ff6b6b", "#f9ca24", "#7ed6df", "#686de0", "#FDA7DF"];
      const particle = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.floor(Math.random() * 10) + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
      particle.style = {
        left: `${particle.x}px`,
        top: `${particle.y}px`,
        width: `${particle.size}px`,
        height: `${particle.size}px`,
        backgroundColor: particle.color,
        "--x": `${Math.random() * 200 - 100}px`, // Random horizontal movement
        "--y": `${Math.random() * 200 - 100}px`, // Random vertical movement
      };
      this.particles.push(particle);

      setTimeout(() => {
        this.particles.shift();
      }, 1000);
    },
  },
};
</script>

<style scoped>
.particle-explosion {
  width: 100%;
  height: 93vh;
  position: relative;
  background-color: #414142;
  overflow: hidden;
}
.particle-explosion h3 {
  color: #fff;
  text-align: center;
  z-index: 1;
}
.particle {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  animation: explode 2s linear infinite;
}

@keyframes explode {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(var(--x), var(--y)) scale(0);
    opacity: 0;
  }
}
</style>
