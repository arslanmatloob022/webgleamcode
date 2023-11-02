<template>
  <div class="light-animation">
    <h3>Shinning mid-night stars animation</h3>
    <div
      v-for="(light, index) in lights"
      :key="index"
      class="light"
      :style="light.style"
    ></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lights: [],
    };
  },
  mounted() {
    this.interval = setInterval(this.createLight, 2000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    createLight() {
      const light = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.floor(Math.random() * 8) + 3,
      };
      light.style = {
        left: `${light.x}px`,
        top: `${light.y}px`,
        width: `${light.size}px`,
        height: `${light.size}px`,
      };

      this.lights.push(light);

      setTimeout(() => {
        this.lights.shift();
      }, 50000);
    },
  },
};
</script>

<style scoped>
.light-animation {
  width: 100%;
  height: 92vh;
  overflow: hidden;
  position: relative;
  background-image: url("@/components/Media/Images/sky.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.light-animation h3 {
  color: #fff;
  text-align: center;
  z-index: 1;
}
.light {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: flicker 5s infinite;
}

@keyframes flicker {
  0%,
  100% {
    width: 3px;
    height: 3px;
    box-shadow: 0px 0px 4px 1px #fffbca;
    opacity: 1;
  }
  25% {
    width: 5px;
    height: 5px;
    box-shadow: 0px 0px 2px 1px #fffbca;
    opacity: 0.8;
  }
  50% {
    width: 8px;
    height: 8px;
    box-shadow: 0px 0px 3px 1px #fffbca;
    opacity: 0.9;
  }
  75% {
    width: 6px;
    height: 6px;
    box-shadow: 0px 0px 2px 1px #fffbca;
    opacity: 1;
  }
}
</style>
