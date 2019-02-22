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
    pageRegistry(path) {
        return new Promise((rs, rj) => {
            import('demo/page' + path + '-page.vue')
                .then(module => rs(module.default))
                .catch(e => rj(e))
        })
    },
})

new Vue({
    render: h => h(App),
}).$mount('#app')
