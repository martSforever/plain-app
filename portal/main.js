import Vue from 'vue'
import App from './App.vue'
import LvApp from 'src'

Vue.config.productionTip = false
Vue.use(LvApp)

new Vue({
    render: h => h(App),
}).$mount('#app')
