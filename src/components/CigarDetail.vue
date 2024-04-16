<script>

import {getCategoryCigarData, getCategoryIntro} from "@/http/api";
import {ElMessage} from "element-plus";

export default {
  name: "CigarDetail",
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
      <table>
        <thead>
        <tr>
          <th></th>
          <th>雪茄名称</th>
          <th>规格</th>
          <th>当前价格</th>
          <th>库存状态</th>
          <th>更新时间</th>
          <th>来源</th>
        </tr>
        </thead>
        <tbody class="ant-table-tbody">
        <tr class="ant-table-row" v-for="item in categoryCigarList" :key="item.cigar_id">
          <td colspan="56">
            <div class="item-info">
              <img :src="item.cigar_pic" :alt="item.cigar_name_cn">
              <div>
                {{ item.cigar_name_cn }}
              </div>
              <div>
                {{ item.cigar_specs }}
              </div>
              <div>
                {{ item.cigar_price_cny }}
              </div>
              <div>
                {{ item.inventory }}
              </div>
              <div>
                {{ item.last_update_time }}
              </div>
              <div>
                <a class="toBuy" :href="item.origin">前往购买</a>
              </div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.home_container_center {
  width: 1260px;
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
  min-height: 140px;
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
.ant-table-row {
  height: 80px;
  width: 1000px;
}

.ant-table-row img {
  height: 100px;
  width: 100px;
}

.item-info {
  position: relative;
  display: flex;
  align-items: center;
  padding: 24px;
  border-top: 1px solid #e5e5e5;
  transform-origin: 0 0;
}
.item-info:hover {
  background-color: rgba(245, 245, 245, 0.2);
}
</style>