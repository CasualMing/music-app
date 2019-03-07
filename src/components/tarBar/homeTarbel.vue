<template>
  <div class="fotter">
    <div class="music-list">
      <ul>
        <li></li>
      </ul>
    </div>
    <v-icon name="play-circle"></v-icon>
    <v-icon name="list-ul"></v-icon>
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
.fotter {
  position: fixed;
  width: 100%;
  height: 1.2rem;
  background-color: pink;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0px;
  .fa-icon {
    color: #fff;
    height: 0.6rem;
    width: 0.6rem;
    margin-top: 0.3rem;
    &:nth-of-type(1) {
      margin-right: 0.1rem;
    }
  }
  .music-list {
    width: calc(100% - 1.6rem);
    float: left;
    height: 100%;
    background-color: #fff;
  }
}
</style>

