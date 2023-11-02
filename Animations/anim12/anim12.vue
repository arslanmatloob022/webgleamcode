<template>
  <div class="falling-stars">
    <h3>Shinning and moving stars</h3>
    <div class="sun">
      <img src="@/components/Media/Images/moon.png" alt="" />
    </div>

    <div
      v-for="(star, index) in stars"
      :key="index"
      class="star"
      :style="{
        left: star.x + 'px',
        top: star.y + 'px',
      }"
    ></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stars: [],
    };
  },
  mounted() {
    this.interval = setInterval(this.createStar, 80); // Add a new star every 200 milliseconds
  },
  beforeDestroy() {
    clearInterval(this.interval); // Clear the interval when the component is destroyed
  },
  methods: {
    createStar() {
      const star = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight, // Start above the screen
        speed: 3 + Math.random() * 3, // Random falling speed between 2 and 4 pixels per frame
      };
      this.stars.push(star);
      // Remove the first star after 10 seconds
      setTimeout(() => {
        this.stars.shift();
      }, 9999);
    },
  },
};
</script>

<style scoped>
.falling-stars {
  position: relative;
  width: 100%;
  height: 92vh;
  overflow: hidden;
  background-color: #c5ddf8;
}
.falling-stars {
  color: #fff;
  text-align: center;
  z-index: 1;
}
.star {
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: #ffcc00;
  opacity: 0.6;
  transition: all 0.2s ease-in-out;
  clip-path: polygon(
    50% 0%,
    61% 38%,
    100% 45%,
    69% 69%,
    79% 100%,
    50% 83%,
    21% 100%,
    31% 69%,
    0% 45%,
    39% 38%
  );
  transition: all;
  animation: fall 35s linear infinite, rotate 8s infinite;
}

@keyframes fall {
  0% {
    transform: translateY(-10vh);
  }
  100% {
    transform: translateY(300vh);
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.sun {
  position: absolute;
  opacity: 0.6;
  top: 50%;
  left: 46%;
  width: 80px;
  height: 80px;
  animation: rotatesun 20s infinite linear;
}
.sun img {
  width: 80px;
  height: 80px;
}

.rays line {
  background-color: #fffb00;
  border-radius: 50%;
  animation: ray-pulse 2s infinite alternate ease-in-out;
}

@keyframes rotatesun {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes ray-pulse {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}
</style>
