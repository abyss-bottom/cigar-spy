<template>
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
        <img :src="item.brand_icon" :alt="item.brand_name">
        <div class="goods-info">
          <div class="cigar-name-cn"><span>{{ item.brand_name }}</span></div>
          <div class="cigar-name-en"><span>{{ item.brand_name_en }}</span></div>
          <div class="cigar-price"><span>￥156</span></div>
          <div class="cigar-state"><span>库存充足</span></div>
          <div>
            <div class="cigar-detail"><span>查看详情</span></div>
          </div>
        </div>
      </div>
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
    selectTab(tabName) {
      this.activeTab = tabName;
    }
  }
}
</script>

<style scoped>

.home_container_center {
  width: 1400px;
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
  font-weight: bold;
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
  color: rgba(0, 163, 143, 0.9) !important;
  line-height: 21px;
}

.cigar-list-box {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

#goods-list-item {
  width: 100%;
  flex: 0 0 24%;
  border: 2px solid #201c00;
  border-radius: 12px;
  transition: box-shadow .2s linear;
  position: relative;
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: flex-start;
  margin-bottom: 35px;
  background-color: white;
}

#goods-list-item img {
  width: 170px;
  height: 170px;
}

#goods-list-item:hover {
  cursor: pointer;
  box-shadow: 4px 4px #000
}

#goods-list-item img {
  line-height: 100px;
}


.goods-info {
  padding: 10px 0;
  display: flex;
  flex-direction: column;
}

.goods-info:hover {
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
  background-color: rgba(245, 222, 179, 0.83);
  display: inline-block;
}

.cigar-detail span {
  color: black;
  font-size: 15px;
}

.cigar-price span {
  font-size: 18px;
  font-weight: bold;
  color: #E63946;
}

.cigar-state span {
  font-size: 15px;
  color: #88B04B;
}

.cigar-name-cn span {
  font-size: 16px;
  font-weight: bold;
}

.cigar-name-en span {
  font-size: 13px;
  color: #888;
}
</style>