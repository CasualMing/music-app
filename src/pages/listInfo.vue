<template>
  <div class="listInfo">
    <div class="title">
      <Header :title="title"/>
    </div>
    <div class="listCover">
      <cover/>
    </div>
    <div class="music-list">
      <div class="list-header">
        <div class="left">
          <v-icon name="play-circle"></v-icon>
          <span>
            播放全部
            <em>(共100首)</em>
          </span>
        </div>
        <div class="right">
          <v-icon name="plus"></v-icon>
          <span>收藏(162.7万)</span>
        </div>
      </div>
      <InfoItem v-for="i in 15" :key="i" :num="i"/>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header/songListHeader";
import cover from "@/components/introduce/listInfoCover";
import InfoItem from "@/components/list/rankingInfoItem";
export default {
  components: {
    Header,
    cover,
    InfoItem
  },
  data() {
    return {
      title: " "
    };
  }
};
</script>
<style lang="scss" scoped>
.listInfo {
  padding: 1.2rem 0px 1.4rem;
  .title {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    z-index: 777;
  }
  .music-list {
    transform: translateY(-0.2rem);
    border-radius: 0.3rem 0.3rem 0px 0px;
    background-color: #fff;
  }
  .list-header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1rem;
    line-height: 1rem;
    border-bottom: 1px solid #eee;
    .left {
      width: 56%;
      padding: 0px 0.2rem;
      display: flex;
      align-items: center;
      border-radius: 0.3rem 0px 0px 0px;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
      .fa-icon {
        color: #666;
        vertical-align: middle;
      }
      span {
        font-size: 0.4rem;
        margin-left: 0.4rem;
        em {
          font-size: 0.3rem;
          color: #999;
        }
      }
    }
    .right {
      height: 100%;
      flex: 1;
      line-height: 100%;
      background-color: #ed4b4b;
      color: #fff;
      display: flex;
      align-items: center;
      padding: 0px 0.3rem;
      border-radius: 0px 0.3rem 0px 0px;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
      span {
        font-size: 0.4rem;
        margin-left: 0.6rem;
      }
    }
  }
}
</style>

