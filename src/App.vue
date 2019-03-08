<template>
  <div id="app">
    <router-view/>
    <fotterBar/>
  </div>
</template>

<script>

import fotterBar from "@/components/tarBar/homeTarbel"
export default {
  components:{fotterBar},
  name: "App"
};
</script>

<style>
</style>
