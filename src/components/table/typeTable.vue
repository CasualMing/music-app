<template>
  <div class="table-box">
    <p class="all">全部歌单</p>
    <li class="tableItem" v-for="i in 5" :key="i">
      <p class="type">
        <v-icon name="globe"></v-icon>
        <span>语种</span>
     </p>
      <router-link to="/songList" class="typeLink"> <v-icon name="fire"></v-icon> 华语</router-link>
      <router-link to="/songList" class="typeLink"> <v-icon name="fire"></v-icon> 欧美</router-link>
      <router-link to="/songList" class="typeLink"> <v-icon name="fire"></v-icon> 日语</router-link>
      <router-link to="/songList" class="typeLink"> <v-icon name="fire"></v-icon> 韩语</router-link>
      <router-link to="/songList" class="typeLink"> <v-icon name="fire"></v-icon> 粤语</router-link>
      <router-link to="/songList" class="typeLink"> <v-icon name="fire"></v-icon> 小语种</router-link>
    </li>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.table-box {
  .all {
    text-align: center;
    line-height: 1rem;
    border: 1px solid #eee;
    margin: 0.2rem;
    font-size: 0.34rem;
  }
  .tableItem {
    font-size: 0px;
    overflow: hidden;
    &:first-of-type{
        border-top: 1px solid #eee;
    }
    .type {
      height: 2rem;
      width: 25%;
      float: left;
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 0.28rem;
      color: #222;
      border-bottom: 1px solid #eee;
        border-right: 1px solid #eee;
    }
    .typeLink {
      float: left;
      display: inline-flex;
      width: 25%;
      line-height: 1rem;
      height: 1rem;
      justify-content: center;
      align-items: center;
      border-right: 1px solid #eee;
      border-bottom: 1px solid #eee;
      font-size: 0.28rem;
      color: #222;
      .fa-icon{
          color: red;
          width: .3rem;
          height: .3rem;
          margin-right: .2rem;
          vertical-align: middle;
      }
    }
    .fa-icon{
        color: #999;
        width: .6rem;
        height: .6rem;
        margin-bottom: .2rem;
    }
  }
}
</style>
