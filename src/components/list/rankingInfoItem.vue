<template>
  <div class="infoList">
    <div class="hot">
      <span :class="{color:num<4}">{{num}}</span>
      <span>
        <v-icon name="arrow-up"></v-icon>
        <v-icon name="minus" v-if="false"></v-icon>
        <v-icon name="arrow-down" v-if="false"></v-icon>200%
      </span>
    </div>
    <div class="song-name">
      <h3>多想在平庸的生活里拥抱你多想在平庸的生活里拥抱你多想在平庸的生活里拥抱你多想在平庸的生活里拥抱你</h3>
      <p>赖冠霖-9801多想在平庸的生活里拥抱你多想在平庸的生活里拥抱你多想在平庸的生活里拥抱你多想在平庸的生活里拥抱你</p>
    </div>
    <div class="song-operate">
      <span>
          <v-icon name="play"></v-icon>
      </span>
      <span>
          <v-icon name="ellipsis-v"></v-icon>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    num: {
      default: 1,
      type: Number
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.infoList {
  line-height: 1.5rem;
  height: 1.5rem;
  border-bottom: 1px solid #eee;
  overflow: hidden;
  padding: 0px 0.2rem;
  &:nth-last-of-type(1) {
    border: 0px;
  }
  .hot {
    float: left;
    width: 1.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1;
    span {
      color: #999;
      display: flex;
      justify-content: center;
      align-items: center;
      .fa-icon {
        width: 0.2rem;
      }
      &:nth-of-type(1) {
        font-size: 0.4rem;
      }
      &:nth-of-type(2) {
        font-size: 0.09rem;
      }
    }
    .color {
      color: red;
    }
  }
  .song-name {
    float: left;
    width: 6.5rem;
    height: 100%;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h3,
    p {
      overflow: hidden; 
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    h3{
        font-size: .34rem;
        font-weight: 600;
        color: #333;
    }
    p{
        color: #777;
    }
  }
  .song-operate {
    float: right;
    width: 1.5rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .fa-icon {
      color: #999;
    }
    span{
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
  }
}
</style>

