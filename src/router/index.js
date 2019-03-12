import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import songList from "@/pages/songList"
import dayRecom from "@/pages/dayRecom"
import leaderBoard from "@/pages/leaderBoard"
import songListSort from "@/pages/songListSort"


import listInfo from "@/pages/listInfo"
Vue.use(Router)

export default new Router({
    type: history,
    routes: [{
        meta: { title: "首页" },
        path: '/',
        name: 'home',
        component: Home,
    }, {
        meta: { title: "歌单" },
        path: "/songList",
        name: "songList",
        component: songList,
    }, {
        meta: { title: "歌单分类" },
        path: "/songListSort",
        name: "songListSort",
        component: songListSort,
    }, {
        meta: { title: "每日推荐" },
        path: "/dayRecom",
        name: "dayRecom",
        component: dayRecom,
    }, {
        meta: { title: "排行榜" },
        path: "/leaderBoard",
        name: "leaderBoard",
        component: leaderBoard,
    }, {
        meta: { title: "排行榜详情" },
        path: "/leaderBoard/listInfo",
        name: "listInfo",
        component: listInfo,
    }]
})