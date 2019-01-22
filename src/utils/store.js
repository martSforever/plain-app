import $utils from './utils'

const STORAGE_NAME = 'lvstore'

export class LvStore {
    component;

    constructor(vue, state = {}) {
        const stateBak = $utils.deepCopy(state)
        const storageState = JSON.parse(localStorage.getItem(STORAGE_NAME)) || {}
        Object.keys(storageState).forEach(key => storageState[key] !== undefined && (stateBak[key] = storageState[key]))
        this.component = new vue({
            render() {
                return null
            },
            data() {
                return {
                    ...stateBak,
                    originalState: state,
                }
            },
        }).$mount();
    }

    get state() {
        return this.component
    }

    commit(property, val) {
        this.state[property] = val
        const storageState = JSON.parse(localStorage.getItem(STORAGE_NAME)) || {}
        storageState[property] = val
        localStorage.setItem(STORAGE_NAME, JSON.stringify(storageState))
    }
}

export default LvStore
