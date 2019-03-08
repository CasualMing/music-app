import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import songList from "@/pages/songList"
import dayRecom from "@/pages/dayRecom"
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
        meta: { title: "每日推荐" },
        path: "/dayRecom",
        name: "dayRecom",
        component: dayRecom,
    }]
})