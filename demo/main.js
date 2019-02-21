import Vue from 'vue'
import App from './App.vue'
import PlainApp from 'src'
import allPages from './page'
import './styles/index.scss'

Vue.config.productionTip = false
Vue.use(PlainApp, {
    iconfont: 'https://at.alicdn.com/t/font_954560_ushjleuazj.js',                               //自定义iconfont图表地址
    allPages,
    prefix: 'link',
})

new Vue({
    render: h => h(App),
}).$mount('#app')
