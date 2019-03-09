<template>
  <div class="listInfo">
    <div class="title">
      <Header :title="title"/>
    </div>
    <div class="listCover">
      <cover/>
    </div>
    <div class="music-list">
        
    </div>
  </div>
</template>
<script>
import Header from "@/components/header/songListHeader";
import cover from "@/components/introduce/listInfoCover";
export default {
  components: {
    Header,
    cover
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
}
</style>

