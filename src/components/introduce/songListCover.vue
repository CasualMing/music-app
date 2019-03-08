<template>
    <div class="cover">
        <div class="left">
            <img :src="temp" alt="" srcset="">
        </div>
        <div class="right">
            <h4 class="title">
                <v-icon name="crown"></v-icon>
                精品歌单
                <v-icon name="chevron-right"></v-icon>
            </h4>
            <p>[日语民谣]月色中的浅吟低唱</p>
            <span>让月色把这份平静、轻盈娓娓道来</span>
        </div>
    </div>
</template>
<script>
import temp  from "@/assets/temp.jpg"
export default {
    data(){
        return {
            temp,
        }
    }
}
</script>
<style lang="scss" scoped>
.cover{
    width: 100%;
    height: 3rem;
    background-color: pink;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px .4rem;
    .left{
        width: 2.2rem;
        height: 2.2rem;
        box-shadow: .1rem 0px .24rem rgba(0,0,0,.4);
          border-radius: .1rem;
          overflow: hidden;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .right{
        flex: 1;
        margin-left: .3rem;
        .title{
            color: #fff;
            font-size: .3rem;
            font-weight: 550;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .fa-icon{
                &:nth-of-type(1){
                    color: gold;
                    width: .6rem;
                    height: .6rem;
                    padding: .1rem;
                    border:1px solid gold;
                    box-sizing: border-box;
                    border-radius: 50%;
                    margin-right: .15rem;
                }
                 &:nth-of-type(2){
                     color: rgba(255,255,255,.8);
                     width: .4rem;
                     height: .4rem;
                 }
            }
        }
        p{
            color: #fff;
            font-size: .28rem;
            line-height: .6rem;
        }
        span{
            color: rgba(255,255,255,.7);
            font-size: .12rem;
        }
    }
}
</style>


