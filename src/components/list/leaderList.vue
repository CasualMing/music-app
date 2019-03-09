<template>
  <div class="leader-list" @click="$router.push({name:'listInfo'})">
    <h4>官方版</h4>
    <li class="leader-item" v-for="i in 2" :key="i">
      <div class="left">
        <img :src="temp" alt srcset>
        <span>每天更新</span>
      </div>
      <div class="right">
        <p>1.解忧-解忧邵帅</p>
        <p>2.Here With Me-Marshmello/CHVMarshmello</p>
        <p>3.出山-花粥/胜男</p>
      </div>
    </li>
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
.leader-list {
  padding: 0px 0.4rem;
  h4 {
    line-height: 1rem;
    font-size: 0.2rem;
    font-weight: 600;
  }
  .leader-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: .1rem;
    .left {
      position: relative;
      img {
        width: 3.8rem;
      }
      span {
        color: #fff;
        font-size: 0.12rem;
        position: absolute;
        left: 0.1rem;
        bottom: 0.1rem;
      }
    }
    .right {
        width: calc(100%  - 4rem);
        height: 3.8rem;
        border-bottom: 1px solid #eee;
      p {
        line-height: 1rem;
        font-size: 0.14rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
