<template>
    <div class="songheader">
        <span @click="$router.go(-1)" class="icon">
            <v-icon name="arrow-left"></v-icon>
        </span>
        <strong class="songTitle">{{title}}</strong>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            default:"歌单"
        }
    },
    data(){
        return{}
    }
}
</script>
<style lang="scss" scoped>
    .songheader{
        height: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        background-color: pink;
        padding:0px .3rem;
        .icon{
            color: #666;
            display: inline-flex;
            justify-content: center;
            align-items: center;
           .fa-icon{
               height: .45rem;
               width: .4rem;
               vertical-align: middle;
           }
        }
        .songTitle{
            font-size: .45rem;
            font-weight: 550;
            color: #666;
            margin-left: .3rem;
        }
    }
</style>
