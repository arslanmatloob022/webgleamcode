<template>
  <div class="particle-container">
    <h3>Sider shaped particles</h3>
    <div
      v-for="(particle, index) in particles"
      :key="index"
      class="particle"
      :style="{
        left: particle.x + 'px',
        top: particle.y + 'px',
        background: particle.color,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      particles: [], // Array to store particle positions
    };
  },
  mounted() {
    // Create initial particles
    this.createParticles();

    // Update particle positions every 1 second
    setInterval(this.updateParticles, 1000);
  },
  methods: {
    createParticles() {
      // Create 50 particles with random positions
      for (let i = 0; i < 50; i++) {
        this.particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          color: this.getRandomColor(),
        });
      }
    },
    updateParticles() {
      // Update particle positions randomly
      this.particles.forEach((particle) => {
        particle.x += Math.random() * 10 - 5;
        particle.y += Math.random() * 10 - 5;

        // Ensure particles stay within the screen boundaries
        particle.x = Math.max(0, Math.min(window.innerWidth, particle.x));
        particle.y = Math.max(0, Math.min(window.innerHeight, particle.y));
      });
    },
    getRandomColor() {
      // Generate a random RGB color
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
.particle-container {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.particle-container h3 {
  color: #2e2e2e;
  text-align: center;
  z-index: 1;
}
.particle {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
</style>
