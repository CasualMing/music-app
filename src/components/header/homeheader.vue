<template>
    <div class="header">
        <v-icon name="align-justify" class="icon"></v-icon>
        <span>首页</span>
        <router-link to="home">
            <v-icon name="search" class="icon"></v-icon>
        </router-link>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{},
    created(){}
}
</script>
<style lang="scss" scoped>
.header{
    height: 1.2rem;
    line-height: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items:center;
    background-color: pink;
    width: 100%;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 0px;
    z-index: 666;
    .icon{
        vertical-align: middle;
        color: #fff;
        font-size: .8rem;
        height: .6rem;;
        width: .8rem;
    }
    span{
        font-size: .4rem;
        color: #fff;
    }
}
</style>

