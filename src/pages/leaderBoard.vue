<template>  
    <div class="leaderBoard">
        <div class="leaderTitle">
            <listHeader :title="title"/>
        </div>
        <term v-for="i in 5" :key="i"/>
    </div>
</template>
<script>
import listHeader from "@/components/header/songListHeader"
import term from "@/components/list/leaderList.vue"
export default {
    components:{
        listHeader,
        term
    },
    data(){
        return{
            title:"排行榜",
        }
    }
    
}
</script>
<style lang="scss" scoped>
.leaderBoard{
    padding: 1.4rem 0px;
    .leaderTitle{
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        z-index: 777;
    }
}
</style>
