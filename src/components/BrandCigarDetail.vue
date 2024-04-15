<template>
  <div class="home_container_center">
    <div class="brand-info">
      <div class="brand-pic"><img v-if="!loading" :src="this.brandPic" :alt="this.brandName"></div>
      <div class="brand-intro">
        <div class="brand-name">{{ this.brandName }}</div>
        <div class="brand-desc">{{ this.desc }}</div>
      </div>
    </div>
    <div class="cigar-list-box">
      <div id="goods-list-item" v-for="item in cigarArray" :key="item.category_id" @click="goToCigarDetail(item.category_id)">
        <img :src="item.cigar_pic" :alt="item.cigar_name">
        <div class="goods-info">
          <div class="cigar-name-cn"><span>{{ item.cigar_name }}</span></div>
          <div class="cigar-name-en"><span>{{ item.cigar_name_en }}</span></div>
          <div class="cigar-price"><span>￥{{ item.cigar_price }}</span></div>
          <div class="cigar-state" :style="{ color: item.cigar_inventory >= 1 ? '#88B04B' : '#E74C3C' }"><span>{{ item.cigar_inventory >= 1 ? "库存充足" : "库存不足"}}</span></div>
          <div>
            <div class="cigar-detail"><span>查看详情</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getBrandDesc, getBrandDetail} from "@/http/api";
import {ElMessage} from "element-plus";

export default {
  name: "BrandCigarDetail",
  data() {
    return {
      loading: true,
      brand_id: null,
      brandPic: null,
      brandName: null,
      desc: null,
      cigarArray: null,
    }
  },
  methods: {
    brandDesc(brand_id) {
      getBrandDesc(brand_id).then(r => {
        const brandDescData = r.data;
        this.loading = false;
        this.brandPic = brandDescData.brand_pic;
        this.desc = brandDescData.brand_desc;
        this.brandName = brandDescData.brand_name;
      }).catch(e => {
        ElMessage.error(e.message)
        console.log({message: e.message, type: 'error'})
      })
    },
    brandDetail(brand_id) {
      getBrandDetail(brand_id).then(r => {
        this.cigarArray = r.data;
      }).catch(e => {
        ElMessage.error(e.message)
        console.log({message: e.message, type: 'error'})
      })
    },
    goToCigarDetail(category_id) {
      this.$router.push({ path: '/cigar/detail', query: { id: category_id } });
    }
  },
  mounted() {
    this.brandDesc(this.brand_id);
    this.brandDetail(this.brand_id)
  },
  created() {
    // 获取传递过来的 id
    this.brand_id = this.$route.query.id;
  }
}
</script>

<style scoped>

.home_container_center {
  width: 1400px;
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
  padding-right: 10px;
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
}

.cigar-name-cn span {
  font-size: 16px;
  font-weight: bold;
}

.cigar-name-en span {
  font-size: 13px;
  color: #888;
}

.brand-info {
  display: flex;
  justify-content: flex-start;
  background-color: white;
  margin-bottom: 40px;
  padding: 10px 20px;
  border: 2px solid #201c00;
  border-radius: 12px;
  transition: box-shadow .2s linear;
  min-height: 180px;
}

.brand-pic img{
  width: 210px;
  height: 150px;
}

.brand-intro {
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
}
.brand-intro .brand-name {
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 15px;
}
.brand-info .brand-desc {
  color: #5C5F5E;
}
</style>