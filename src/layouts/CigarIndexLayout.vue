<template>
  <div>
    <CigarHeader/>
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

</style>