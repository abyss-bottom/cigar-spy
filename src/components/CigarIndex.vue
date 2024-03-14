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
    <div style="height: 60px"></div>
    <div class="home_container_box">
      <div class="home_container_left"></div>
      <div class="home_container_center">
        <div class="hot-subject">
          <ul class="sub-tab">
            <li class="tab-item"><span>库存优先</span></li>
            <li class="tab-item"><span>品质优先</span></li>
            <li class="tab-item"><span>价格优先</span></li>
          </ul>
        </div>
        <div class="cigar-list-box"></div>
      </div>
      <div class="home_container_right"></div>
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
      }, {
        "brand_id": 1,
        "brand_name": "保利華",
        "brand_name_en": "Bolivar",
        "brand_icon": "https://webfile.timeforshares.com/product_manufacturer/1/main_image/Bolivar_450_x_300_274.jpg"
      }, {
        "brand_id": 1,
        "brand_name": "保利華",
        "brand_name_en": "Bolivar",
        "brand_icon": "https://webfile.timeforshares.com/product_manufacturer/1/main_image/Bolivar_450_x_300_274.jpg"
      }, {
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

.nav_left, .nav_right, .home_container_left, .home_container_right {
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
  color: #f1f0de;
  font-size: 19px;
  font-weight: bold;
  text-align: center;
}

.nav_wx_ad {
  color: #f1f0de;
  font-size: 15px;
  font-weight: bold;
}

.nav_brand_name:hover {
  cursor: pointer;
  background-color: #6b530a;
}

.nav_wx_ad:hover {
  cursor: pointer;
}

.home_container_box {
  display: flex;
  width: 100%;
  min-width: 1400px;
  padding-top: 20px;
  height: 1000px;
}

.home_container_center {
  width: 1400px;
  /*background: white;*/
}

.sub-tab{
  display: flex;
  width: max-content;
  height: 52px;
  transform: skew(-10deg);
  align-items: center;
  background-color: #ffd9b9;;
  padding: 0 10px;
  border-radius: 12px;
}

.sub-tab li{
  flex-shrink: 0;
  position: relative;
  width: 200px !important;
  height: 40px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  cursor: pointer;
  margin: 0 6px;
}
.tab-item {
  background: linear-gradient(180deg, #ffffff 0%, #fff4e5 100%);
}

.tab-item span{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transform: skew(10deg);
  font-size: 16px;
  line-height: 24px;
  color: #a96c50;
}

.cigar-list-box {
  background-color: white;
  height: 100%;
}
</style>