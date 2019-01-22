export let navState = {
    storagePageNameStack: [],
    pageStack: [],
}

export class Nav {
    store;
    allPages;
    timer;

    constructor(store, allPages = []) {
        this.store = store
        this.allPages = allPages || [];
        this.init()
    }

    /*
     *  所有页面名称数组
     *  @author     martsforever
     *  @datetime   2018/11/28 22:44
     */
    get allPageNames() {
        return !!this.allPages ? this.allPages.map(item => item.name) : []
    }

    /*
     *  根据页面组件名称获取页面参数
     *  @author     martsforever
     *  @datetime   2018/11/28 22:41
     *  @param      pageName 页面组件名称
     */
    getPageByName(pageName) {
        const pageIndex = this.allPageNames.indexOf(pageName)
        return pageIndex === -1 ? null : this.allPages[pageIndex]
    }

    /*
     *  刷新当前页面
     *  @author     martsforever
     *  @datetime   2018/11/28 22:49
     */
    refreshPage(animate = 'push') {
        this.store.commit('animate', animate)
        this.store.commit('storagePageNameStack', this.store.state.storagePageNameStack)
        const page = this.store.state.pageStack[this.store.state.pageStack.length - 1]
        const lastPage = this.store.state.pageStack[this.store.state.pageStack.length - 2]
        !page.initialized && (page.initialized = true)
        !!lastPage && !lastPage.initialized && (lastPage.initialized = true)
    }

    /*
     *  初始化逻辑
     *  @author     martsforever
     *  @datetime   2018/11/28 22:46
     */
    init() {
        if (!this.store.state.storagePageNameStack || this.store.state.storagePageNameStack.length < 1) {
            this.goHome()
            return
        }
        for (let {name, param} of this.store.state.storagePageNameStack) {
            const page = this.getPageByName(name)
            if (!!page) {
                this.store.state.pageStack.push({
                    name: page.name,
                    component: page.component,
                    param,
                    initialized: false,
                })
            } else {
                this.goHome()
                return
            }
        }
        this.refreshPage('push')
    }

    /*
     *  获取当前显示页参数
     *  @author     martsforever
     *  @datetime   2018/11/29 23:26
     */
    getParam() {
        return this.store.state.pageStack[this.store.state.pageStack.length - 1].param
    }

    /*
     *  回到主页
     *  @author     martsforever
     *  @datetime   2018/11/28 22:44
     */
    async goHome(param) {
        await this.avoidFastClick();
        this.store.state.pageStack = [{
            name: this.allPages[0].name,
            component: this.allPages[0].component,
            param,
        }]
        this.store.state.storagePageNameStack = [{
            name: this.allPages[0].name,
            param,
        }]
        this.refreshPage('pop')
    }

    /*
     *  打开页面
     *  @author     martsforever
     *  @datetime   2018/11/28 22:53
     *  @param      pageName 页面名称
     *  @param      param    页面参数
     */
    async push(pageName, param, avoiding = true) {
        avoiding && await this.avoidFastClick();
        const page = this.getPageByName(pageName)
        if (!page) {
            console.error(`找不到页面[${pageName}]`, this.allPages)
            return
        }
        this.store.state.pageStack.push({
            name: page.name,
            component: page.component,
            param,
        })
        this.store.state.storagePageNameStack.push({
            name: pageName,
            param,
        })
        this.refreshPage('push')
    }

    /*
     *  弹出页面
     *  @author     martsforever
     *  @datetime   2018/11/28 23:12
     */
    async pop(num = 1) {
        await this.avoidFastClick();
        if (this.store.state.pageStack.length === 1) {
            console.log('已经是最后一个页面了！', this.store.state.pageStack)
            return
        }
        if (this.store.state.pageStack.length - num === 0) {
            console.log('回退的页面过多！', num, this.store.state.pageStack)
            return
        }
        while (num > 0) {
            this.store.state.pageStack.pop()
            this.store.state.storagePageNameStack.pop()
            num--
        }
        this.refreshPage('pop')
    }

    /*
     *  替换当前页为指定页面
     *  @author     martsforever
     *  @datetime   2018/11/29 23:28
     */
    async replace(pageName, param) {
        await this.avoidFastClick();
        this.store.state.pageStack.pop()
        this.store.state.storagePageNameStack.pop()
        await this.push(pageName, param, false)
    }

    async avoidFastClick() {
        return new Promise((rs) => {
            if (!!this.timer) return
            this.timer = setTimeout(() => {
                let t = this.timer
                this.timer = null
                clearTimeout(t)
            }, 300)
            rs();
        })
    }
}
