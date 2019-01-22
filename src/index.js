import $utils from './utils/utils'
import $dom from './utils/dom'
import PlStore from './utils/store'
import {Nav, navState} from "./utils/nav";
import components from './components'
import './styles/index.scss'

const LvApp = {
    $utils,
    $dom,
    install(Vue, {prefix = 'lv', allPages, iconfont} = {}) {
        Object.keys(components).forEach(key => Vue.component(`${prefix}-${$utils.getKebabCase(key)}`, components[key]))
        $utils.addScript('https://at.alicdn.com/t/font_948159_kzmnpxbcbzd.js')
        !!iconfont && $utils.addScript(iconfont)
        this.$plstore = this.$plstore = new PlStore(Vue, {name: '$plstore', ...navState,});
        Vue.prototype.$nav = new Nav(this.$plstore, allPages);
        Vue.prototype.$plapp = LvApp
    },
}

window.LvApp = LvApp;

export default LvApp