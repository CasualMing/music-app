<template>
  <div class="item">
    <router-link to="/songListInfo">
        <img :src="temp" alt srcset>
    </router-link>
    <p class="count">
      <v-icon name="headphones-alt"></v-icon>
      <span>34w</span>
    </p>
    <p class="people">
      <v-icon name="user"></v-icon>
      <span>原创君</span>
    </p>
    <p class="brief">古典传奇拿索斯经典精选系列-古典乐中的女子力古典传奇拿索斯经典精选系列古典传奇拿索斯经典精选系列古典传奇拿索斯经典精选系列</p>
  </div>
</template>
<script>
import temp from "@/assets/temp.jpg";
export default {
  data() {
    return {
      temp
    };
  }
};
</script>



<style lang="scss" scoped>
.item {
  width: calc((100% - 0.4rem) / 2);
  display: inline-flex;
  flex-direction: column;
  margin: 0.3rem 0.4rem 0px 0px;
  position: relative;
  &:nth-of-type(2n) {
    margin-right: 0px;
  }
  &:nth-of-type(1){
      margin-top: 0px;
  }
   &:nth-of-type(2){
      margin-top: 0px;
  }
  img {
    width: 100%;
  }
  .count {
    position: absolute;
    right: 0.1rem;
    top: 0.1rem;
    color: #fff;
  }
  .people {
    position: absolute;
    left: 0.1rem;
    bottom: 1.2rem;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .fa-icon {
      vertical-align: middle;
      margin-right: .2rem;
    }
  }
  .brief {
    line-height: 0.4rem;
    margin-top: 0.2rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
}
</style>
