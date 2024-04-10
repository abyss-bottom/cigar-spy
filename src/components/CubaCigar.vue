<script>
export default {
  name: 'CubaCigar',
  data() {
    return {
      brandArray: [{
        "brand_id": 234,
        "brand_name": "高希霸",
        "brand_name_en": "Cohiba",
        "brand_icon": "https://www.jiahaitao.com/upload/20220907/166253510010911.jpg"
      }, {
        "brand_id": 234,
        "brand_name": "高希霸",
        "brand_name_en": "Cohiba",
        "brand_icon": "https://www.jiahaitao.com/upload/20220907/166253510010911.jpg"
      }, {
        "brand_id": 234,
        "brand_name": "高希霸",
        "brand_name_en": "Cohiba",
        "brand_icon": "https://www.jiahaitao.com/upload/20220907/166253510010911.jpg"
      }, {
        "brand_id": 234,
        "brand_name": "高希霸",
        "brand_name_en": "Cohiba",
        "brand_icon": "https://www.jiahaitao.com/upload/20220907/166253510010911.jpg"
      }],
    }
  },
  methods: {
  }
}
</script>

<template>
  <div class="cuba-nav-box">
    <h1>古巴雪茄</h1>
    <div class="cuba-cigar-brand">
      <div class="cuba-cigar-brand-grid">
        <div class="grid-item-info" v-for="item in brandArray" :key="item.brand_id">
          <div><img :src="item.brand_icon" :alt="item.brand_name"></div>
          <div class="item-desc">
            <span>{{ item.brand_name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cuba-nav-box {
  width: 1400px;
}
.cuba-cigar-brand-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  box-sizing: border-box;
}

.grid-item-info {
  padding: 10px;
  display: flex;
  align-items: center; /* 垂直居中 */
  flex-direction: column;
  height: 300px;
  background-color: white;
  color: inherit;
  text-decoration: inherit;
  border: 2px solid #201c00;
  border-radius: 12px;
  transition: box-shadow .2s linear;
}

.grid-item-info:hover {
  box-shadow: 4px 4px #000
}

.grid-item-info img{
  height: 160px;
}
</style>