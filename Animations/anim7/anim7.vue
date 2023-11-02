<template>
  <div class="neon-light" @mousemove="moveLight">
    <h3>Move cursor in div</h3>
    <div class="neon-glow" :style="lightStyle"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lightX: 0,
      lightY: 0,
      colors: ["#f06", "#0f6", "#06f", "#f60", "#60f", "#6f0"], // Neon colors
    };
  },
  computed: {
    lightStyle() {
      return {
        left: `${this.lightX}px`,
        top: `${this.lightY}px`,
        width: "10px", // Neon light width
        height: "10px", // Neon light height
        background: this.colors[Math.floor(Math.random() * this.colors.length)],
        transition: "background 0.6s ease-in-out",
        position: "absolute",
        borderRadius: "50%",
        pointerEvents: "none",
        boxShadow: "0 0 10px 5px #ffffff", // Neon light effect
        zIndex: "9999",
      };
    },
  },
  methods: {
    moveLight(event) {
      this.lightX = event.clientX - 1; // Adjusting position to center the neon light
      this.lightY = event.clientY - 1;
    },
  },
};
</script>

<style scoped>
.neon-light {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #000;
  overflow: hidden;
  cursor: default;
}
.neon-light h3 {
  color: #fff;
  text-align: center;
  z-index: 1;
}
</style>
