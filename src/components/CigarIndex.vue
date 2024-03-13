<template>
  <div id="app_main">
    <div class="top_nav">
      <div class="nav_left">
      </div>
      <div class="nav_center">
        <div class="nav_center_left" id="nav-logo" onclick="window.location='/'"></div>
        <div class="nav_center_right">
          <div class="product_main_cuba">
            <div class="nav_brand_name">古巴雪茄</div>
            <div style="display: none;">
              <div v-for="brand in brandArray" :key="brand.brand_id">
                <div>
                  <div class="brand_logo">
                    <img :src="brand.brand_icon" :alt="brand.brand_name"></div>
                  <div class="name">
                    <div style="letter-spacing: 0;">{{brand.brand_name}}</div>
                    <div>{{brand.brand_name_en}}</div> </div>
                </div>
              </div>
            </div>
          </div>
          <div class="product_main_world">
            <div class="nav_brand_name">世界雪茄</div>
          </div>
          <div class="ad">
            <div class="nav_wx_ad">雪茄交流群</div>
          </div>
        </div>
      </div>
      <div class="nav_right">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CigarIndex',
  data() {
    return {
      brandArray: [{
        "brand_id": 1,
        "brand_name": "保利華",
        "brand_name_en": "Bolivar",
        "brand_icon": "https://webfile.timeforshares.com/product_manufacturer/1/main_image/Bolivar_450_x_300_274.jpg"
      },{
        "brand_id": 1,
        "brand_name": "保利華",
        "brand_name_en": "Bolivar",
        "brand_icon": "https://webfile.timeforshares.com/product_manufacturer/1/main_image/Bolivar_450_x_300_274.jpg"
      },{
        "brand_id": 1,
        "brand_name": "保利華",
        "brand_name_en": "Bolivar",
        "brand_icon": "https://webfile.timeforshares.com/product_manufacturer/1/main_image/Bolivar_450_x_300_274.jpg"
      },{
        "brand_id": 1,
        "brand_name": "保利華",
        "brand_name_en": "Bolivar",
        "brand_icon": "https://webfile.timeforshares.com/product_manufacturer/1/main_image/Bolivar_450_x_300_274.jpg"
      }],
    }
  }
}
</script>

<style scoped>
#app_main {
  display: block;
}

.top_nav {
  display: flex;
  justify-content: space-between;
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
.nav_left {
  flex: 1;
}
.nav_right {
  flex: 1;
}
.nav_center {
  width: 1400px;
  display: flex;
  justify-content: space-between;
}
.nav_center_right {
  display: flex;
  justify-content: flex-end;
  width: 20%;
}
.product_main_cuba, .product_main_world, .ad {
  align-items: center;
  display: inline-flex;
  text-align: center;
  justify-content: center;
  white-space: nowrap;
}

.nav_brand_name {
  color: rgba(245, 222, 179, 0.76);
  font-size: 18px;
  font-weight: bold;
}
.nav_wx_ad {
  color: rgba(245, 222, 179, 0.76);
  font-size: 14px;
  font-weight: bold;
}
.nav_brand_name:hover{
  cursor: pointer;
}
.nav_wx_ad:hover{
  cursor: pointer;
}
</style>