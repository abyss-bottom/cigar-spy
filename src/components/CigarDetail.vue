<script>

import {getCategoryCigarData, getCategoryIntro} from "@/http/api";
import {ElMessage} from "element-plus";
import CigarHeader from "@/components/common/CigarHeader.vue";
import CigarNormalFree from "@/components/common/CigarNormalFree.vue";

export default {
  name: "CigarDetail",
  components: {CigarNormalFree, CigarHeader},
  data() {
    return {
      cigar_id: null,
      loading: true,
      categoryData: {},
      categoryCigarList: []
    }
  },
  methods: {
    categoryIntro() {
      getCategoryIntro(this.category_id).then(r => {
        this.categoryData = r.data;
        console.log(this.categoryData)
        this.loading = false;
      }).catch(e => {
        ElMessage.error(e.message)
        console.log({message: e.message, type: 'error'})
      })
    },
    categoryCigarDetail() {
      getCategoryCigarData(this.category_id).then(r => {
        this.categoryCigarList = r.data;
      }).catch(e => {
        ElMessage.error(e.message)
        console.log({message: e.message, type: 'error'})
      })
    },
  },
  mounted() {
    this.categoryIntro();
    this.categoryCigarDetail()
  },
  created() {
    // 获取传递过来的 id
    this.category_id = this.$route.query.id;
  }
}
</script>

<template>
  <div id="app_main">
    <CigarHeader/>
    <CigarNormalFree/>
    <div class="home_container_box">
      <div class="home_container_left"></div>
      <div class="home_container_center">
        <div class="category-info">
          <div class="category-pic">
            <img v-if="!loading" :src="this.categoryData.category_pic" :alt="this.categoryData.category_name_cn">
          </div>
          <div class="category-intro">
            <div class="category-name">{{ this.categoryData.category_name_cn }}</div>
            <div class="category-property">
              <span>品形：{{ this.categoryData.category_shape }}</span>
              <span>长度：{{ this.categoryData.category_length }}</span>
              <span>环径：{{ this.categoryData.category_ring }}</span>
              <span>浓度：{{ this.categoryData.category_density }}</span>
            </div>
            <div class="category-desc">{{ this.categoryData.category_desc }}</div>
          </div>
        </div>
        <div class="cigar-item-list">
          <div class="ant-table-head">
            <div class="item-name">名称</div>
            <div class="item-specs">规格</div>
            <div class="item-price">价格</div>
            <div class="item-state">库存</div>
            <div class="item-update-time">更新时间</div>
            <div class="goToBuy">来源</div>
          </div>
          <div class="ant-table-row" v-for="item in categoryCigarList" :key="item.cigar_id">
            <div class="item-info">
              <div class="item-detail">
                <div class="ant-table-col item-name">
                  <div style="width: 30px"></div>
                  <div class="item-img"><img :src="item.cigar_pic" :alt="item.cigar_name_cn"></div>
                  <div style="width: 15px"></div>
                  <div class="item-name-cn">{{ item.cigar_name_cn }}</div>
                </div>
                <div class="ant-table-col item-specs">
                  <span>{{ item.cigar_specs }}</span>
                </div>
                <div class="ant-table-col item-price">
                  <span>￥{{ item.cigar_price_cny }}</span>
                </div>
                <div class="ant-table-col item-state">
                  <span :style="{ color: item.inventory === 0 ? '#E74C3C' : '#88B04B' }">{{ item.inventory === 0 ? '无库存' : '有库存' }}</span>
                </div>
                <div class="ant-table-col item-update-time">
                  <span>{{ item.last_update_time }}</span>
                </div>
                <div class="ant-table-col goToBuy">
                  <a :href="item.origin" target="_blank"><div>前往购买</div></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home_container_right"></div>
    </div>
    <div style="height: 60px"></div>
  </div>
</template>

<style scoped>
.home_container_center {
  width: 1400px;
}

.category-info {
  display: flex;
  justify-content: flex-start;
  background-color: white;
  margin-bottom: 40px;
  padding: 10px 20px;
  border: 2px solid #201c00;
  border-radius: 12px;
  transition: box-shadow .2s linear;
  min-height: 170px;
  align-items: center;
}

.category-pic img {
  width: 150px;
  height: 150px;
}

.category-intro {
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
  min-height: 110px;
}

.category-name {
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 15px;
}

.category-property {
  margin-bottom: 15px;
}

.category-property span {
  margin-right: 25px;
}

.category-info .category-desc {
  color: #5C5F5E;
}

.cigar-item-list {
  background-color: white;
  border: 2px solid #201c00;
  border-radius: 12px;
  transition: box-shadow .2s linear;
}

table {
  width: 100%;
}

table tr th {
  padding: 16px 8px;
}

.ant-table-head {
  display: flex;
  height: 55px;
  margin-left: 20px;
  align-items: center;
  text-align: center;
}

.item-name {
  width: 25%;
}

.item-specs {
  width: 15%;
}

.item-price {
  width: 15%;
}

.item-state {
  width: 15%;
}
.goToBuy {
  width: 15%;
}

.item-update-time {
  width: 15%;
}
.item-img img {
  height: 90px;
  width: 90px;
}

.item-info {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 0;
  border-top: 1px solid #e5e5e5;
  transform-origin: 0 0;
}

.item-info:hover {
  background-color: rgba(245, 245, 245, 0.2);
}

.item-detail {
  flex-grow: 1;
  display: flex;
  font-size: 15px;
}

.ant-table-col.item-price {
  color: #E63946;
}

.ant-table-col.item-update-time {
  color: #5C5F5E;

}
.ant-table-col {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}

.ant-table-col.item-name{
  justify-content: flex-start;
  margin-left: 20px;
}

.ant-table-col.goToBuy div{
  width: 106px;
  height: 36px;
  background: #ffffff;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #508aff;
  cursor: pointer;
}
.ant-table-col.goToBuy div:hover{
  background: #508aff;
}

a:hover{
  color: #ffffff;
}

</style>