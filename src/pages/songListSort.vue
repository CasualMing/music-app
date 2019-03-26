<template>
  <div class="songListSort">
    <div class="title">
      <Header :title="title"/>
    </div>
    <TypeTable/>
  </div>
</template>
<script>
import Header from "@/components/header/songListHeader";
import TypeTable from "@/components/table/typeTable"
export default {
  components: {
    Header,
    TypeTable
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

