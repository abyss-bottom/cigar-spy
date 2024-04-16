<template>
  <div id="app_main">
    <CigarHeader/>
    <div style="background-color: black; width: 100%; height: 2px;"></div>
    <div style="height: 60px"></div>
    <div class="home_container_box">
      <div class="home_container_left"></div>
      <router-view/>
      <div class="home_container_right"></div>
    </div>
    <div style="height: 60px"></div>
  </div>
</template>

<script>

import CigarHeader from "@/components/common/CigarHeader.vue";

export default {
  name: "CigarIndexLayout",
  components: {CigarHeader}
}
</script>

<style scoped>
#app_main {
  display: block;
}
.home_container_box {
  display: flex;
  width: 100%;
  min-width: 1260px;
}
.home_container_left, .home_container_right {
  flex: 1;
}
</style>