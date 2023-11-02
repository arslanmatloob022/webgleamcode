<template>
  <div class="wave-container">
    <div class="wave">
      <h3>Moving corners animation</h3>
    </div>
  </div>
</template>

<style scoped>
.wave-container {
  width: 100%;
  height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.wave {
  width: 100%;
  height: 200px;
  background: linear-gradient(to right, #ff7e5a, #feb47b, #ff7e5a);
  position: relative;
  bottom: 0;
  animation: wave-animation 3s infinite linear;
}
.wave h3 {
  color: #fff;
  text-align: center;
  z-index: 1;
}
@keyframes wave-animation {
  0% {
    transform: skewX(0deg);
  }
  50% {
    transform: skewX(45deg);
  }
  100% {
    transform: skewX(0deg);
  }
}
</style>
