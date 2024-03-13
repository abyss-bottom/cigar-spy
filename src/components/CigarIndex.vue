<template>
  <div id="app_main">
    <div class="top_nav">
      <div class="nav_left">
        <div id="nav-logo" onclick="window.location='/'"></div>
      </div>
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
  height: 55px;
  line-height: 55px;
  background-color: black;
}

#nav-logo {
  background-image: url("../assets/nav-logo.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 140px;
  min-height: 40px;
  image-rendering: auto;
  margin-left: 15px;
}

#nav-logo:hover {
  cursor: pointer;
}
</style>