<template>
  <div class="loader-container">
    <div class="loader">
      <div
        v-for="(ball, index) in balls"
        :key="index"
        :style="ball.style"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      balls: [],
    };
  },
  mounted() {
    this.createBalls();
    setInterval(this.updateBalls, 1000); // Update ball sizes and positions every 1 second
  },
  methods: {
    createBalls() {
      for (let i = 0; i < 5; i++) {
        this.balls.push({
          size: Math.floor(Math.random() * 30) + 20, // Random size between 20 and 50
          style: {
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random()}s`,
          },
        });
      }
    },
    updateBalls() {
      this.balls.forEach((ball) => {
        ball.size = Math.floor(Math.random() * 30) + 20;
        ball.style.top = `${Math.random() * 100}%`;
        ball.style.left = `${Math.random() * 100}%`;
        ball.style.animationDelay = `${Math.random()}s`;
      });
    },
  },
};
</script>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
}

.loader {
  position: relative;
}

.loader div {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(to right, #ff7e5f, #feb47b, #ffcc6b, #c5d86d);
  position: absolute;
  animation: bounceBall 2s ease-in-out infinite;
}

@keyframes bounceBall {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50vh);
  }
}
</style>
