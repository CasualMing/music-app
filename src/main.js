import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
    // 引入字体
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons'
// 引入自适应配置
import 'lib-flexible'
Vue.component('v-icon', Icon)



new Vue({
    el: '#app',
    router,
    render: h => h(App)
})