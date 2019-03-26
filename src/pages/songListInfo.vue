<template>
  <div class="songListInfo">
    <div class="title">
      <Header :title="title"/>
    </div>
    <div class="info-box">
        <header>
            <div class="header-top">
                <img src="../assets/temp.jpg" alt="" srcset="">
                <div class="right">
                    <h4>心累了，偷偷丧一会儿吧</h4>
                    <img src="../assets/temp.jpg" alt="" srcset="">
                    <span>狗大叔爱听歌</span>
                </div>
            </div>
        </header>
    </div>
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
      title: "歌单"
    };
  }
};
</script>
<style lang="scss" scoped>
.title{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
}
.info-box{
    padding: 1.2rem 0px;
    header{
        width: 100%;
        height: 5rem;
        background-color: pink;
        padding: .4rem;
        .header-top{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            >img{
                width: 3rem;
            }
            .right{
                margin-left: .4rem;
                h4{
                    font-size: .4rem;
                    font-weight: 550;
                    color: #fff;
                    margin-bottom: .4rem;
                }
                img{
                    width: .5rem;
                    border-radius: 50%;
                    vertical-align:middle;
                }
                span{
                    color: #fff;
                    margin-left: .1rem;
                }
            }
        }
    }
}
</style>