<template>
  <div class="underwater-animation">
    <h3>Water bubbles animation</h3>
    <div class="wave"></div>
    <div
      v-for="(bubble, index) in bubbles"
      :key="index"
      class="bubble"
      :style="bubble.style"
      @mousemove="repelBubbles"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bubbles: [],
    };
  },
  mounted() {
    this.createBubbles();
  },
  methods: {
    createBubbles() {
      const numberOfBubbles = 50;

      for (let i = 0; i < numberOfBubbles; i++) {
        this.bubbles.push({
          style: {
            width: `${Math.random() * 20 + 5}px`,
            height: `${Math.random() * 20 + 5}px`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 6 + 4}s`,
          },
        });
      }
    },
  },
};
</script>

<style scoped>
.underwater-animation {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #5bc0de; /* Ocean Blue */
  overflow: hidden;
}
.underwater-animation h3 {
  color: #fff;
  text-align: center;
  z-index: 1;
}
/*
.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: repeating-linear-gradient(
    45deg,
    #29a2c7,
    #5bc0de 10px,
    #4da0b0 10px,
    #4da0b0 20px
  );
  animation: wave 4s infinite;
}
*/
.bubble {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  animation: float 5s infinite;
}

@keyframes wave {
  0% {
    background-position: 50% 0;
  }
  100% {
    background-position: 100% 0;
  }
}

@keyframes float {
  0% {
    transform: translateY(20px);
  }
  50% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(20px);
  }
}
</style>
