<template>
  <div class="rain-animation">
    <h3>Rainning Animation</h3>
    <div
      v-for="(drop, index) in drops"
      :key="index"
      class="drop"
      :style="{
        left: drop.x + 'px',
        top: drop.y + 'px',
      }"
    ></div>
  </div>
</template>

<style scoped>
.rain-animation {
  position: relative;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #dff3fc;
}
.rain-animation h3 {
  color: #fff;
  text-align: center;
  z-index: 1;
}
.drop {
  position: absolute;
  width: 3px;
  height: 6px;
  background-color: #4682b4;
  border-radius: 80% 0 55% 50% / 55% 0 80% 50%;
  animation: fall 4s linear infinite, spread 3.5s ease-in-out;
}

@keyframes fall {
  0% {
    transform: translateY(-10vh);
  }
  100% {
    transform: translateY(280vh);
  }
}

@keyframes spread {
  0% {
    height: 6px;
    opacity: 1;
    transform: scaleX(1);
  }
  100% {
    height: 2px;
    width: 10px;
    opacity: 1;
    transform: scaleX(1.5);
  }
}
</style>

<script>
export default {
  data() {
    return {
      drops: [],
    };
  },
  mounted() {
    this.interval = setInterval(this.createDrop, 90); // Add a new drop every 200 milliseconds
  },
  beforeDestroy() {
    clearInterval(this.interval); // Clear the interval when the component is destroyed
  },
  methods: {
    createDrop() {
      const drop = {
        x: Math.random() * window.innerWidth,
        y: -10, // Start above the screen
      };
      this.drops.push(drop);
      // Remove the first drop after the animation completes
      setTimeout(() => {
        this.drops.shift();
      }, 2500);
    },
  },
};
</script>
