import Vue from 'vue'
import App from './App.vue'
import PlainApp from 'src'

Vue.config.productionTip = false
Vue.use(PlainApp)

new Vue({
    render: h => h(App),
}).$mount('#app')
