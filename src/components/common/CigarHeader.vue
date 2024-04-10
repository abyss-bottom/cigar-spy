<script>
export default {
  name: "CigarHeader",
  methods: {
    goToCubanCigars() {
      this.$router.push('/cuba');
    },
    goToWroldCigars() {
      this.$router.push('/world');
    },
  }
}
</script>

<template>
  <div class="top_nav">
    <div class="nav_left">
    </div>
    <div class="nav_center">
      <div class="nav_center_left" id="nav-logo" onclick="window.location='/'"></div>
      <div class="nav_center_right">
        <div class="product_main_cuba">
          <div class="nav_brand_name" @click="goToCubanCigars">古巴雪茄</div>
        </div>
        <div class="product_main_world">
          <div class="nav_brand_name" @click="goToWroldCigars">世界雪茄</div>
        </div>
        <div class="ad">
          <div class="nav_wx_ad">雪茄交流群</div>
        </div>
      </div>
    </div>
    <div class="nav_right">
    </div>
  </div>

</template>

<style scoped>


.top_nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  line-height: 55px;
  background-color: #e9f3ef;
}

#nav-logo {
  background-image: url("../../assets/nav-logo.png");
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

.nav_left, .nav_right {
  flex: 1;
}

.nav_center {
  width: 1400px;
  display: flex;
  justify-content: space-between;
}

.nav_center_right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 25%;
}

.product_main_cuba, .product_main_world, .ad {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav_brand_name {
  width: 100%;
  color: #535971;
  font-size: 19px;
  font-weight: bold;
  text-align: center;
}

.nav_brand_name:hover {
  transition: all 0.5s ease 0s;
}

.nav_wx_ad {
  color: #535971;
  font-size: 16px;
}

.nav_brand_name:hover {
  cursor: pointer;
}

.nav_wx_ad:hover {
  cursor: pointer;
  color: #E6A57E;
}

</style>