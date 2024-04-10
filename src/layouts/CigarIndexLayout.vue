<template>
  <div id="app_main">
    <CigarHeader/>
    <div style="background-color: black; width: 100%; height: 2px;"></div>
    <router-view/>
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
</style>