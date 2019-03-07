<template>
    <div class="grid">
       <li>
           <router-link to="/" class="icon">
             <v-icon name="podcast"></v-icon>
           </router-link>
           <span>私人FM</span>
       </li>
        <li>
           <router-link to="/" class="icon">
             <v-icon name="calendar-check"></v-icon>
           </router-link>
           <span>每日推荐</span>
       </li>
        <li>
           <router-link to="/" class="icon">
             <v-icon name="music"></v-icon>
           </router-link>
           <span>歌单</span>
       </li>
        <li>
           <router-link to="/" class="icon">
             <v-icon name="list-ul"></v-icon>
           </router-link>
           <span>排行榜</span>
       </li>
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
     .grid{
         overflow: hidden;
         li{
             float: left;
             list-style: none;
             width: 25%;
             text-align: center;
             display: flex;
            align-items: center;
             justify-content: center;
             flex-direction: column;
            .icon{
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
                background-color: pink;
                display: flex;
                align-items: center;
                justify-content: center;
                .fa-icon{
                    font-size: .6rem;
                    width: .6rem;
                    height: .6rem;
                }
            }
            span{
                font-size: .28rem;
                color: #666;
                margin-top: .3rem;
            }
         }
     }
</style>

