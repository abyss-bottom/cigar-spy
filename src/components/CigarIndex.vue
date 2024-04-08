<template>
  <div id="app_main">
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
    <div style="height: 60px"></div>
    <div class="home_container_box">
      <div class="home_container_left"></div>
      <div class="home_container_center">
        <div class="hot-subject">
          <ul class="sub-tab">
            <li class="tab-item" @click="selectTab('inventory')" :class="{ 'tab-active': activeTab === 'inventory' }">
              <span>库存优先</span></li>
            <li class="tab-item" @click="selectTab('quality')" :class="{ 'tab-active': activeTab === 'quality' }"><span>品质优先</span>
            </li>
            <li class="tab-item" @click="selectTab('price')" :class="{ 'tab-active': activeTab === 'price' }">
              <span>价格优先</span></li>
          </ul>
        </div>
        <div class="cigar-list-box">
          <div id="goods-list-item" v-for="item in brandArray" :key="item.brand_id">
            <img :src="item.brand_icon" :alt="item.brand_name" style="width: 170px; height: 170px;">
            <div class="goods-info">
              <div class="cigar-name-cn"><span>{{ item.brand_name }}</span></div>
              <div class="cigar-name-en"><span>{{ item.brand_name_en }}</span></div>
              <div class="cigar-price"><span>￥156</span></div>
              <div class="cigar-state"><span>库存充足</span></div>
              <div class="cigar-detail"><span>查看详情</span></div>
            </div>
          </div>
        </div>
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
      activeTab: null,
      brandArray: [{
        "brand_id": 234,
        "brand_name": "保利華",
        "brand_name_en": "Bolivar",
        "brand_icon": "https://webfile.timeforshares.com/product_profile/364/gallery/01_79.jpg?1015677382"
      }, {
        "brand_id": 234,
        "brand_name": "俱乐部",
        "brand_name_en": "Bolivar",
        "brand_icon": "https://webfile.timeforshares.com/product_profile/1413/gallery/01_253.jpg?756586386"
      }, {
        "brand_id": 234,
        "brand_name": "公开赛系列迷你",
        "brand_name_en": "Bolivar",
        "brand_icon": "https://webfile.timeforshares.com/product_profile/4994/gallery/01_77.jpg?637174503"
      }, {
        "brand_id": 234,
        "brand_name": "大金字塔2017限量版",
        "brand_name_en": "Bolivar",
        "brand_icon": "https://webfile.timeforshares.com/product_profile/6170/gallery/Montecristo_Master_AT_02_777.jpg?551337389"
      },{
        "brand_id": 234,
        "brand_name": "保利華",
        "brand_name_en": "Bolivar",
        "brand_icon": "https://webfile.timeforshares.com/product_profile/364/gallery/01_79.jpg?1015677382"
      }, {
        "brand_id": 234,
        "brand_name": "俱乐部",
        "brand_name_en": "Bolivar",
        "brand_icon": "https://webfile.timeforshares.com/product_profile/1413/gallery/01_253.jpg?756586386"
      }, {
        "brand_id": 234,
        "brand_name": "公开赛系列迷你",
        "brand_name_en": "Bolivar",
        "brand_icon": "https://webfile.timeforshares.com/product_profile/4994/gallery/01_77.jpg?637174503"
      }, {
        "brand_id": 234,
        "brand_name": "大金字塔2017限量版",
        "brand_name_en": "Bolivar",
        "brand_icon": "https://webfile.timeforshares.com/product_profile/6170/gallery/Montecristo_Master_AT_02_777.jpg?551337389"
      },{
        "brand_id": 234,
        "brand_name": "保利華",
        "brand_name_en": "Bolivar",
        "brand_icon": "https://webfile.timeforshares.com/product_profile/364/gallery/01_79.jpg?1015677382"
      }, {
        "brand_id": 234,
        "brand_name": "俱乐部",
        "brand_name_en": "Bolivar",
        "brand_icon": "https://webfile.timeforshares.com/product_profile/1413/gallery/01_253.jpg?756586386"
      }, {
        "brand_id": 234,
        "brand_name": "公开赛系列迷你",
        "brand_name_en": "Bolivar",
        "brand_icon": "https://webfile.timeforshares.com/product_profile/4994/gallery/01_77.jpg?637174503"
      }, {
        "brand_id": 234,
        "brand_name": "大金字塔2017限量版",
        "brand_name_en": "Bolivar",
        "brand_icon": "https://webfile.timeforshares.com/product_profile/6170/gallery/Montecristo_Master_AT_02_777.jpg?551337389"
      },{
        "brand_id": 234,
        "brand_name": "保利華",
        "brand_name_en": "Bolivar",
        "brand_icon": "https://webfile.timeforshares.com/product_profile/364/gallery/01_79.jpg?1015677382"
      }, {
        "brand_id": 234,
        "brand_name": "俱乐部",
        "brand_name_en": "Bolivar",
        "brand_icon": "https://webfile.timeforshares.com/product_profile/1413/gallery/01_253.jpg?756586386"
      }, {
        "brand_id": 234,
        "brand_name": "公开赛系列迷你",
        "brand_name_en": "Bolivar",
        "brand_icon": "https://webfile.timeforshares.com/product_profile/4994/gallery/01_77.jpg?637174503"
      }, {
        "brand_id": 234,
        "brand_name": "大金字塔2017限量版",
        "brand_name_en": "Bolivar",
        "brand_icon": "https://webfile.timeforshares.com/product_profile/6170/gallery/Montecristo_Master_AT_02_777.jpg?551337389"
      },{
        "brand_id": 234,
        "brand_name": "保利華",
        "brand_name_en": "Bolivar",
        "brand_icon": "https://webfile.timeforshares.com/product_profile/364/gallery/01_79.jpg?1015677382"
      }, {
        "brand_id": 234,
        "brand_name": "俱乐部",
        "brand_name_en": "Bolivar",
        "brand_icon": "https://webfile.timeforshares.com/product_profile/1413/gallery/01_253.jpg?756586386"
      }, {
        "brand_id": 234,
        "brand_name": "公开赛系列迷你",
        "brand_name_en": "Bolivar",
        "brand_icon": "https://webfile.timeforshares.com/product_profile/4994/gallery/01_77.jpg?637174503"
      }, {
        "brand_id": 234,
        "brand_name": "大金字塔2017限量版",
        "brand_name_en": "Bolivar",
        "brand_icon": "https://webfile.timeforshares.com/product_profile/6170/gallery/Montecristo_Master_AT_02_777.jpg?551337389"
      }],
    }
  },
  methods: {
    goToCubanCigars() {
      this.$router.push('/cuba');
    },
    goToWroldCigars() {
      this.$router.push('/world');
    },
    selectTab(tabName) {
      this.activeTab = tabName;
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
  background-color: #f7f7f7;
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
  color: #E6A57E;
}

.nav_wx_ad:hover {
  cursor: pointer;
  color: #E6A57E;
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

.sub-tab {
  display: flex;
  width: max-content;
  height: 52px;
  transform: skew(-10deg);
  align-items: center;
  background-color: #F0EFEB;
  padding: 0 10px;
  border-radius: 12px;
}

.sub-tab li {
  flex-shrink: 0;
  position: relative;
  width: 200px !important;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 6px;
}

.tab-item {
  background: linear-gradient(180deg, white 0%, #f7f7f7 100%);
}

.tab-item span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transform: skew(10deg);
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.8);
}

.tab-item:hover {
  background: #F5F5F5;
}

.tab-active span {
  position: relative;
  z-index: 10;
  transform: skew(0deg);
  font-size: 18px;
  font-weight: 900;
  font-style: italic;
  color: #F9A825 !important;
  line-height: 21px;
}

.cigar-list-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

#goods-list-item {
  width: 100%;
  flex: 0 0 24%;
  box-sizing: border-box;
  position: relative;
  border: 1px solid #ddd;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 35px;
}
#goods-list-item:hover{
  box-shadow: 0 0 10px #D8BFD8;
}
.goods-info {
  padding: 10px 0;
  display: flex;
  flex-direction: column;
//justify-content: c;
}

.goods-info:hover{
  cursor: pointer;
}

.goods-info div {
  margin-bottom: 10px;
  text-align: center;
}

.cigar-detail {
  height: 40px;
  border-radius: 12px;
  margin-top: 5px;
  width: 120px;
  line-height: 40px;
  background-color: #D57A66;
}

.cigar-detail span{
  color: black;
}

.cigar-detail:hover {
  cursor: pointer;
}
</style>