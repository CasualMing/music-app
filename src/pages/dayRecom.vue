<template>
  <div class="dayRecomSongList">
    <div class="day-title">
      <songHeader :title="title"/>
    </div>
    <div class="music-list">
      <li class="music-item other-item">
        <span class="playAll">
          <v-icon name="play-circle"></v-icon>播放全部
        </span>
        <span class="selectMore">
          <v-icon name="list"></v-icon>多选
        </span>
      </li>
      <li class="music-item" v-for="i in 100" :key="i">
        <div class="left">
          <img :src="temp" alt srcset>
          <div class="music-info">
            <h6>盗将行</h6>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="11px"
              height="11px"
            >
              <image
                x="0px"
                y="0px"
                width="11px"
                height="11px"
                xlink:href="data:img/png;base64,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"
              ></image>
            </svg>
            <span>上师大哔哩哔哩动画</span>
          </div>
        </div>
        <div class="right">
          <span>
            <v-icon name="play-circle"></v-icon>
          </span>
          <span>
            <v-icon name="ellipsis-v"></v-icon>
          </span>
        </div>
      </li>
    </div>
  </div>
</template>
<script>
import songHeader from "@/components/header/songListHeader";
import temp from "@/assets/temp.jpg";
export default {
  components: { songHeader },
  data() {
    return {
      title: "每日推荐",
      temp
    };
  }
};
</script>
<style lang="scss" scoped>
.dayRecomSongList {
  padding: 1.4rem 0px;
}
.day-title {
  position: fixed;
  width: 100%;
  left: 0px;
  top: 0px;
}
.music-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0.2rem;
  height: 60px;
  color: #333;
  border-bottom: 1px solid #eee;
  .playAll,
  .selectMore {
    color: #666;
    display: flex;
    align-items: center;
    .fa-icon {
      vertical-align: middle;
      margin-right: 0.2rem;
    }
  }
  .left {
    height: 45px;
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      width: 45px;
      height: 45px;
    }
    .music-info {
      margin-left: 0.2rem;
      h6 {
        font-size: 14px;
        line-height: 16px;
        margin-bottom: 0.2rem;
      }
      i {
        font-size: 11px;
        color: tomato;
        padding: 2px;
        border-radius: 6px;
        border: 1px solid tomato;
      }
      span {
        font-size: 12px;
      }
    }
  }
  .right {
    height: 100%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    span {
      width: 30px;
      height: 100%;
      display: flex;
      align-items: center;
    }
    .fa-icon {
      width: 20px;
      color: #999;
    }
  }
}
.other-item {
  height: 40px;
}
</style>
    