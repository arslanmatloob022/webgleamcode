<template>
  <div class="neon-light" @mousemove="moveLight">
    <h3>Move Cursor In Div</h3>
    <div class="neon-glow" :style="lightStyle"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mouseX: 3,
      mouseY: 0,
      colors: ["#f06", "#0f6", "#06f", "#f60", "#60f", "#6f0"], // Neon colors
    };
  },
  computed: {
    lightStyle() {
      return {
        left: `${this.mouseX}px`,
        top: `${this.mouseY}px`,
        width: "1px", // Neon light width
        height: "1px", // Neon light height
        position: "absolute",
        borderRadius: "50%",
        pointerEvents: "none",
        boxShadow: `0 0 10px 6px ${this.getRandomColor()}`, // Neon light effect with mixed colors
        zIndex: "9999",
        transition: "box-shadow 0.1s ease", // Smooth transition for the light effect
        transform: "translate(-50%, -50%)",
      };
    },
  },
  methods: {
    moveLight(event) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    },
    getRandomColor() {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    },
  },
};
</script>

<style scoped>
.neon-light {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  overflow: hidden;
  cursor: none;
}
.neon-light h3 {
  color: #fff;
  text-align: center;
  z-index: 1;
}
.neon-glow {
  animation: smoke 3s linear infinite;
}

@keyframes smoke {
  0% {
    transform: skewX(10px);
    opacity: 1;
    transition-delay: 3ms;
  }
  100% {
    transform: skewY(6px);
    opacity: 1;
  }
}
</style>
