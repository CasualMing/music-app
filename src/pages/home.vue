<template>
    <div class="jiugongge">
        <homeHeader />
       <div class="content">
           <group/>
            <commonTable v-for="i in 4" :key="i"/>
       </div>
    </div>
</template>

<script>
import commonTable from "@/components/table/commonTable"
import group from "@/components/table/group"
import homeHeader from "@/components/header/homeHeader"
export default {
    components:{
        commonTable,
        homeHeader,
        group,
    },
    data(){
        return{

        }
    },
    methods:{},
    created(){
        
    }
}
</script>
<style lang="scss" scoped>
.content{
    padding: 1.5rem 0px;
}
</style>

