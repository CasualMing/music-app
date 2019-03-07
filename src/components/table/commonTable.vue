<template>
  <div class="jiugongge">
    <h2 class="title">
      <span>推荐歌单</span>
      <v-icon name="chevron-right" class="icon"/>
    </h2>
    <ul class="music-list">
      <li v-for="i in 6" :key="i">
        <router-link to="home">
          <img :src="imgSRC" alt srcset>
          <span>
            <v-icon name="headphones-alt"></v-icon>174万
          </span>
        </router-link>
        <p>女生节|唤起心里那个需要疼爱的女孩</p>
      </li>
    </ul>
  </div>
</template>

<script>
import temp from "../../assets/temp.jpg";
export default {
  data() {
    return {
      imgSRC: temp
    };
  },
  methods: {},
  created() {}
};
</script>
<style lang="scss" scoped>
.jiugongge {
  .title {
    color: #ccc;
    height: 1rem;
    line-height: 1rem;
    font-size: 0px;
    padding: 0px 0.2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span {
      color: #666;
      font-weight: 550;
      font-size: 0.4rem;
    }
    .icon {
      font-size: 0.1rem;
      font-weight: normal;
      height: 0.5rem;
      margin-left: 0.1rem;
    }
  }
  .music-list {
    overflow: hidden;
    padding: 0.15rem;
    li {
      float: left;
      width: calc((100% - 0.3rem) / 3 - 0.01rem);
      height: 4.6rem;
      margin: 0.15rem 0.15rem 0px 0px;
      &:nth-of-type(3n) {
        margin-right: 0px;
      }
      a {
        display: block;
        position: relative;
        font-size: 0px;
        img {
          width: 100%;
        }
        span {
          position: absolute;
          color: #f0f0f0;
          right: 0.1rem;
          top: 0.1rem;
          font-size: 0.24rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      p {
        margin-top: 0.2rem;
        font-size: 0.26rem;
        line-height: 0.5rem;
        color: #333;
      }
    }
  }
}
</style>


