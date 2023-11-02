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
        borderColor:
          this.colors[Math.floor(Math.random() * this.colors.length)],
      };
    },
  },
  methods: {
    moveLight(event) {
      this.lightX = event.clientX;
      this.lightY = event.clientY;
    },
  },
};
</script>

<style scoped>
.neon-light {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #c9c9c9;
  overflow: hidden;
  cursor: none;
}
.neon-light h3 {
  text-align: center;
  color: #fff;
  z-index: 1;
}
.neon-glow {
  position: absolute;
  width: 10px;
  height: 10px;
  border: 2px solid;
  border-radius: 50%;
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
}
</style>