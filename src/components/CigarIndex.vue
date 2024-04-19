<template>
  <div id="app_main">
    <CigarHeader/>
    <CigarNormalFree/>
    <div class="home_container_box">
      <div class="home_container_left"></div>
      <div class="home_container_center">
        <div class="hot-subject">
          实时库存监控
        </div>
        <div class="cigar-list-box">

          <div id="goods-list-item" v-for="item in cigarArray" :key="item.cigar_id">
            <img :src="item.cigar_pic" :alt="item.cigar_name_cn">
            <a :href="item.origin" target="_blank">
              <div class="goods-info">
                <div class="cigar-name-cn"><span>{{ item.cigar_name_cn }}</span></div>
                <div class="cigar-name-en"><span>{{ item.cigar_name_en }}</span></div>
                <div class="cigar-price"><span>￥{{ item.cigar_price_cny }}</span></div>
                <div class="cigar-state"><span>库存充足</span></div>
                <div>
                  <div class="cigar-detail"><span>前往购买</span></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="home_container_right"></div>
    </div>
    <div style="height: 60px"></div>
  </div>
</template>

<script>
import {getCigarRecommend} from "@/http/api";
import {ElMessage} from "element-plus";
import CigarHeader from "@/components/common/CigarHeader.vue";
import CigarNormalFree from "@/components/common/CigarNormalFree.vue";

export default {
  name: 'CigarIndex',
  components: {CigarNormalFree, CigarHeader},
  data() {
    return {
      activeTab: null,
      cigarArray: [],
    }
  },
  methods: {
    cigarRecommend() {
      getCigarRecommend(1).then(r => {
        this.cigarArray = r.data;
      }).catch(e => {
        ElMessage.error(e.message)
        console.log({message: e.message, type: 'error'})
      })
    }
  },
  mounted() {
    this.cigarRecommend()
  }
}
</script>

<style scoped>
.home_container_center {
  width: 1400px;
}

.hot-subject {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 25px;
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
  min-height: 258px;
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
  padding: 15px 10px;
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
a {
  color: #508aff;
}
</style>