<template>
  <div class="loader">
    <div class="line" :style="{ backgroundColor: 'green' }">
      <div class="line" :style="{ backgroundColor: 'red' }">
        <div class="line" :style="{ backgroundColor: 'blue' }">
          <div class="line" :style="{ backgroundColor: 'yellow' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.line {
  width: 4px;
  height: 20px;
  margin: 0 10px;
  background-color: #3498db;
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  0% {
    transform: translateY(-20px) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) rotate(90deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
  75% {
    transform: translateY(-20px) rotate(270deg);
  }
  100% {
    transform: translateY(-20px) rotate(360deg);
  }
}
</style>
