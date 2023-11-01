<template>
  <div class="loader-container">
    <div class="loader">
      <div class="loaders"><div class="circle"></div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SixthLoader",
};
</script>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 89vh;
  background: linear-gradient(45deg, #ff0055, #6b05a1, #0099ff, #00ffcc);
  background-size: 400% 400%;
  animation: gradient 15s infinite alternate;
}

.loader {
  position: relative;
  width: 50px;
  height: 50px;
  border: 8px solid transparent;
  border-left-color: white;
  border-right-color: #ffffff;
  border-radius: 50%;
  animation: rotate 6.5s linear infinite;
}
.loaders {
  position: absolute;
  position: inherit;
  margin: 1px;
  width: 30px;
  height: 30px;
  border: 8px solid transparent;
  border-left-color: white;
  border-right-color: #ffffff;
  border-radius: 50%;
  animation: rotate 1.5s linear infinite;
}
.circle {
  margin: 1px;
  width: 30px;
  height: 30px;
  background: linear-gradient(45deg, #ff0055, #6b05a1, #0099ff, #00ffcc);
  animation: gradient 1.5s infinite alternate;
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
</style>
