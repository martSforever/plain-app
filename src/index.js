import $utils from './utils/utils'
import $dom from './utils/dom'
import $storage from './utils/storage'

import PlStore from './utils/store'
import {Nav, navState} from "./utils/nav";
import components from './components'
import './styles/index.scss'

const PlainApp = {
    $utils,
    $dom,
    $storage,
    _pageRegistry: null,
    async pageRegistry(path) {
        if (!this._pageRegistry) {
            return Promise.reject('plain need pageRegistry function when installed.')
        } else {
            return await this._pageRegistry(path)
        }
    },
    install(Vue, {prefix = 'lv', allPages, iconfont, pageRegistry} = {}) {
        this._pageRegistry = pageRegistry
        Object.keys(components).forEach(key => Vue.component(`${prefix}-${$utils.getKebabCase(key)}`, components[key]))
        $utils.addScript('https://at.alicdn.com/t/font_948159_ukep6sz7tw8.js')
        !!iconfont && $utils.addScript(iconfont)
        this.nextTick = () => new Promise((rs) => Vue.prototype.$nextTick(rs))
        Vue.prototype.$plain = PlainApp
    },
}

window.PlainApp = PlainApp;

export default PlainApp