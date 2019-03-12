<template>
  <div class="songListSort">
    <div class="title">
      <Header :title="title"/>
    </div>
    <p class="header-title">全部歌单</p>
  </div>
</template>
<script>
import Header from "@/components/header/songListHeader";
export default {
  components: {
    Header
  },
  data() {
    return {
      title: "选择分类"
    };
  }
};
</script>
<style lang="scss" scoped>
</style>

