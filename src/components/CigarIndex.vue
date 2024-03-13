<template>
  <div id="app_main">
    <div class="top_nav">
      <div class="nav_left"><span>茄探</span></div>
      <div class="nav_center"></div>
      <div class="nav_right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CigarIndex',
}
</script>

<style scoped>
#app_main {
  display: block;
}

.top_nav {
  display: flex;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: black;
}

.top_nav .nav_left span {
  display: block;
  font-size: 30px;
  color: white;
  margin-left: 40px;
  z-index: 1000;
}
</style>