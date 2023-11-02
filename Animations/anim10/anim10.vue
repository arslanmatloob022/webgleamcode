<template>
  <div class="particle-container" @mousemove="createParticle">
    <h3>Click and move the cursor.</h3>
  </div>
</template>

<script>
export default {
  methods: {
    createParticle(event) {
      const particle = document.createElement("div");
      particle.className = "particle";
      const size = Math.random() * 5 + 3;
      const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      })`;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = color;
      particle.style.left = `${event.clientX - size / 2}px`;
      particle.style.top = `${event.clientY - size / 2}px`;

      this.$el.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 2000);
    },
  },
};
</script>

<style scoped>
.particle-container {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}
.particle-container h3 {
  color: #3b3b3b;
  text-align: center;
  z-index: 1;
}
.particle {
  position: absolute;
  border-radius: 50%;
  animation: moveParticle 2s ease-out;
}

@keyframes moveParticle {
  to {
    transform: translate(0, 100vh);
    opacity: 0;
  }
}
</style>
