<script>
import {getBrandData} from "@/http/api";
import { ElMessage } from 'element-plus'

export default {
  name: 'WorldCigar',
  data() {
    return {
      brandArray: null,
    }
  },
  methods: {
    brandData() {
      getBrandData(0).then(r => {
        this.brandArray = r.data;
      }).catch(e => {
        ElMessage.error(e.message)
        console.log({message: e.message, type: 'error'})
      })
    },
    goToCigarList(brand_id) {
      this.$router.push({ path: '/brand/detail', query: { id: brand_id } });
    }
  },
  mounted() {
    this.brandData()
  }
}
</script>

<template>
  <div class="cuba-nav-box">
    <h1>世界雪茄</h1>
    <div class="cuba-cigar-brand">
      <div class="cuba-cigar-brand-grid">
        <div class="grid-item-info" v-for="item in brandArray" :key="item.brand_id" @click="goToCigarList(item.brand_id)">
          <div class="item-img"><img :src="item.brand_pic" :alt="item.brand_name"></div>
          <div class="item-state">
            <p><span style="color: #FF7F00">{{ item.brand_name }}</span> 共有{{ item.cigar_number }}款雪茄在售</p>
          </div>
          <div class="item-desc">
            <div class="item-desc-name"><span>{{ item.brand_name_en }}</span></div>
            <div class="item-desc-update"><span>{{ item.last_update_time }}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cuba-nav-box {
  width: 1260px;
}

.cuba-cigar-brand-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  box-sizing: border-box;
}

.grid-item-info {
  padding: 18px;
  display: flex;
  align-items: center; /* 垂直居中 */
  flex-direction: column;
  height: 280px;
  background-color: white;
  color: inherit;
  text-decoration: inherit;
  border: 2px solid #201c00;
  border-radius: 12px;
  transition: box-shadow .2s linear;
}

.grid-item-info:hover {
  cursor: pointer;
  box-shadow: 4px 4px #000
}

.grid-item-info img {
  width: 100%;
  height: 150px;
}

.item-state p {
  color: #5C5F5E;
}

.item-desc {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-desc-name {
  background-color: #e9f3ef;
  padding: 6px 10px;
  border-radius: 10px;
  font-size: 14px;
}

.item-desc-update {
  color: #5C5F5E;
  font-size: 13px;
}
</style>