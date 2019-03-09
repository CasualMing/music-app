<template>
  <div class="listInfoCover">
    <em class="belong">云音乐</em>
    <div class="sort" @click="infoAppear">
      <img :src="typeImg" alt srcset>
      <div class="info-text">
        <span>
          <v-icon name="info-circle"></v-icon>
          <i v-if="isDisplay"></i>
        </span>
        <p v-if="isDisplay">云音乐热歌榜:云音乐用户一周内收听所有线上歌曲 官方TOP排行榜，每周四更新</p>
      </div>
    </div>
    <span class="upDateTime">最近更新:3月7日</span>
    <div class="operate">
      <span>
        <v-icon name="comment-dots"></v-icon>20.3万
      </span>
      <span>
        <v-icon name="share-alt"></v-icon>24807
      </span>
      <span>
        <v-icon name="download"></v-icon>下载
      </span>
      <span>
        <v-icon name="check-square"></v-icon>多选
      </span>
    </div>
  </div>
</template>
<script>
import typeImg from "@/assets/typeImg.png";
export default {
  data() {
    return {
      typeImg,
      isDisplay: false
    };
  },
  methods: {
    infoAppear() {
      this.isDisplay = !this.isDisplay;
    }
  }
};
</script>
<style lang="scss" scoped>
.listInfoCover {
  background-color: pink;
  padding: 0.4rem 0.6rem;
  .belong {
    color: #fff;
    font-style: italic;
    display: flex;
  }
  .sort {
    margin-top: 0.2rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    position: relative;
    img {
      width: 4.245rem;
      height: 1.425rem;
    }
    .fa-icon {
      width: 0.3rem;
      color: #fff;
      margin-left: 0.2rem;
    }

    .info-text {
      p {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 1.66rem;
        width: 102%;
        color: #fff;
        font-size: 0.12rem;
        line-height: 0.4rem;
        background-color: rgba(0, 0, 0, 0.7);
        padding: 0.2rem;
        border-radius: 0.08rem;
      }
      span {
        i {
          position: absolute;
          left: 4.4rem;
          bottom: -0.24rem;
          border: 0.2rem solid transparent;
          border-bottom-color: rgba(0, 0, 0, 0.7);
        }
      }
    }
  }
  .upDateTime {
    color: #fff;
    font-size: 0.12rem;
    margin-top: 0.2rem;
    display: flex;
  }
  .operate {
    margin-top: 1.2rem;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: rgba(255, 255, 255, 0.7);
      .fa-icon {
        margin-bottom: 0.2rem;
      }
    }
  }
}
</style>

