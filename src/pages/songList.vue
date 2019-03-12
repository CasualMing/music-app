<template>
  <div class="songList">
    <div class="title">
      <songHeader/>
    </div>
    <div class="songCover">
      <songCover/>
    </div>
    <div class="songListTitle">
      <router-link to="/songListSort">全部歌单
        <v-icon name="chevron-right"></v-icon>
      </router-link>
      <p>
        <span>华语</span>
        <span>电子</span>
        <span>摇滚</span>
      </p>
    </div>
    <div class="songItem">
      <listItem v-for="i in 6" :key="i"/>
    </div>
  </div>
</template>
<script>
import songHeader from "@/components/header/songListHeader";
import songCover from "@/components/introduce/songListCover";

import listItem from "@/components/table/songlistItem";
export default {
  components: {
    songHeader,
    songCover,
    listItem
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.songList {
  padding: 1.2rem 0px 1.4rem;
}
.title {
  position: fixed;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  top: 0px;
  z-index: 666;
}
.songListTitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1rem;
  padding: 0px 0.4rem;
  a {
    color: #333;
    font-size: 0.36rem;
    .fa-icon {
      vertical-align: middle;
    }
  }
  p {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    span {
      font-size: 0.12rem;
      border-right: 1px solid #333;
      line-height: 1.2;
      border: 60%;
      margin-right: 0.2rem;
      padding-right: 0.2rem;
      &:nth-last-of-type(1) {
        margin: 0px;
        padding: 0px;
        border: 0px;
      }
    }
  }
}
.songItem {
  padding: 0px 0.2rem;
}
</style>
