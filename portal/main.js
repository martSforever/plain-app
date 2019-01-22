import Vue from 'vue'
import App from './App.vue'
import PlApp from 'src'

Vue.config.productionTip = false
Vue.use(PlApp)

new Vue({
    render: h => h(App),
}).$mount('#app')
