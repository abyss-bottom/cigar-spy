<script>

export default {
  name: "CigarDetail",
  data() {
    return {
      cigar_id: null,
    }
  },
  methods: {},
  mounted() {
  },
  created() {
    // 获取传递过来的 id
    this.cigar_id = this.$route.query.id;
  }
}
</script>

<template>
  <div class="home_container_center">
    <div class="category-info">
      <div class="category-pic"><img v-if="!loading"
                                  src="https://webfile.timeforshares.com/product_profile/390/gallery/01_640.jpg?934537996"
                                  alt="贝喜奇"></div>
      <div class="category-intro">
        <div class="category-name">贝喜奇</div>
        <div class="category-property">
          <span>品形：小罗伯图</span>
          <span>长度：119mm</span>
          <span>环径：52</span>
          <span>浓度：3</span>
        </div>
        <div class="category-desc">Behike 是Cohiba品牌的最高端系列。首次在这三个系列上加入“Medio Tiempo”烟叶。Medio
          Tiempo是一种非常珍稀的烟叶品种。它是指用阳植法培育的烟草植株的上两层烟叶。由于这种烟叶在烟草植株上得天独厚的位置)使它有优良好特性和风味，良好的燃烧和性强烈浓度令你感觉它独一无二的精致风味。
        </div>
      </div>
    </div>
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
.category-property span{
  margin-right: 25px;
}
.category-info .category-desc {
  color: #5C5F5E;
}
</style>