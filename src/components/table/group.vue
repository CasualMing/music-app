<template>
  <div class="grid">
    <li>
      <router-link to="/" class="icon">
        <v-icon name="podcast"></v-icon>
      </router-link>
      <span>私人FM</span>
    </li>
    <li>
      <router-link to="/dayRecom" class="icon">
        <v-icon name="calendar-check"></v-icon>
      </router-link>
      <span>每日推荐</span>
    </li>
    <li>
      <router-link to="/songList" class="icon">
        <v-icon name="music"></v-icon>
      </router-link>
      <span>歌单</span>
    </li>
    <li>
      <router-link to="/leaderBoard" class="icon">
        <v-icon name="list-ul"></v-icon>
      </router-link>
      <span>排行榜</span>
    </li>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>
<style lang="scss" scoped>
.grid {
  overflow: hidden;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid #ccc;
  li {
    float: left;
    list-style: none;
    width: 25%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .icon {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      color: #ffff;
      background-color: pink;
      display: flex;
      align-items: center;
      justify-content: center;
      .fa-icon {
        font-size: 0.6rem;
        width: 0.6rem;
        height: 0.6rem;
      }
    }
    span {
      font-size: 0.28rem;
      color: #666;
      margin-top: 0.3rem;
    }
  }
}
</style>

