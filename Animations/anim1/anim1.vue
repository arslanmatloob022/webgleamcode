<template>
  <div class="animated-gradient-background">
    <div class="gradient"><h3>The Animated Gradient Background.</h3></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.animated-gradient-background {
  width: 100%;
  height: 94vh;
  position: relative;
  overflow: hidden;
}

.gradient {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(45deg, #ff00cc, #3333ff, #00ffcc, #ffcc00);
  background-size: 400% 400%;
  animation: gradientAnimation 10s ease infinite;
}

.gradient h3 {
  text-align: center;
  color: #fff;
  font-style: italic;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
