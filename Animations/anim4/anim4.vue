<template>
  <div class="balloon-animation">
    <h3>Flying balloons Animation</h3>
    <div
      class="balloon"
      v-for="(balloon, index) in balloons"
      :key="index"
      :style="balloon.style"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      balloons: [],
    };
  },
  computed: {
    totalBalloons() {
      return 30; // Adjust the number of balloons
    },
  },
  methods: {
    createBalloon() {
      return {
        style: {
          top: `${Math.random() * 100}vw`,
          left: `${Math.random() * 100}vw`,
          animationDuration: `${Math.random() * 20 + 5}s`,
          animationDelay: `${Math.random() * 5}s`,
          backgroundColor: this.getRandomColor(),
        },
      };
    },
    getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
  },
  created() {
    for (let i = 0; i < this.totalBalloons; i++) {
      this.balloons.push(this.createBalloon());
    }
  },
};
</script>

<style scoped>
.balloon-animation {
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
  background-color: #e0e0e0;
}
.balloon-animation h3 {
  text-align: center;
  color: #fff;
}
.balloon {
  position: absolute;
  width: 20px;
  height: 50px;
  background-color: #ff69b4;
  border-radius: 50% 50% 0 0;
  transform: translate(-50%, -50%);
  animation: float 10s infinite, colorChange 5s infinite alternate;
}

@keyframes float {
  0% {
    transform: translate(-50%, -50%) translateY(0);
  }
  100% {
    transform: translate(-50%, -50%) translateY(-620vh);
  }
}

@keyframes colorChange {
  0% {
    background-color: #ff69b4;
  }
  100% {
    background-color: #87ceeb;
  }
}
</style>
