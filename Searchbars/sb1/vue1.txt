<template>
  <section>
    <div class="input-box">
      <i class="fa fa-search fa-3x"></i>
      <input type="text" placeholder="Search..." />
      <button class="button">Search</button>
    </div>
  </section>
</template>
<script>
export default {
  name: "searchbarOne",
};
</script>

<style scoped>
.input-box {
  position: relative;
  height: 40px;
  max-width: 900px;
  width: 70%; /*adjust size of search-bar*/
  background: #ffffff;
  margin: 20px 20px;
  border-radius: 8px;
  box-shadow: 0 5px 10px #e7820d1a;
}
.input-box input {
  height: 100%;
  width: 100%;
  box-shadow: 0px 2px 8px 3px rgba(62, 65, 63, 0.2),
    0 6px 20px 0 rgba(58, 59, 58, 0.19);
  outline: none;
  font-size: 18px;
  font-weight: 400;
  border: none;
  border-radius: 7px;
  padding: 0 80px 0 55px;
  background-color: transparent;
}
.input-box i,
.input-box .button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.input-box i {
  left: 20px;
  font-size: 30px;
  color: gray;
}
.input-box .button {
  right: 0px;
  font-size: 16px;
  font-weight: 300;
  color: white;
  border: none;
  padding: 8px 10px;
  border-radius: 6px;
  background-color: gray;
  cursor: pointer;
}
.input-box .button:active {
  background-color: #707070;
  transform: translateY(-50%) scale(0.98);
}
/* Responsive */
@media screen and (max-width: 768px) {
  .input-box {
    height: 50px;
    width: 120px;
    margin: 10px 8px;
  }
  .input-box i {
    left: 12px;
    font-size: 25px;
  }
  .input-box input {
    padding: 0 10px 0 50px;
  }
  .input-box .button {
    display: none;
  }
}
</style>
