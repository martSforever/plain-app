<template>
    <div class="pl-navigator">
        <component ref="pages"
                   v-for="(page) in pageStack"
                   :key="page.id"
                   :id="page.id"
                   :path="page.path"
                   :is="page.component"
                   :param="page.param || {}"
                   v-if="page.initialized"/>
    </div>
</template>

<script>
    const STORAGE_KEY = 'navigator'
    export default {
        name: "pl-navigator",
        props: {
            root: {},
            id: {},
        },
        watch: {
            pageStack: {
                immediate: true,
                async handler(val) {
                    await this.$plain.nextTick()
                    for (let i = 0; i < this.$children.length; i++) {
                        const $child = this.$children[i];
                        if ($child.$children[0].$options.name !== 'pl-page') {
                            console.error('page must be wrapped by page component, path:', $child.$attrs.path)
                            return
                        }
                    }
                },
            }
        },
        data() {
            let pageStack = []
            let tabsStorage, selfStorage;
            if (!!this.id) {
                tabsStorage = this.$plain.$storage.get(STORAGE_KEY) || {}
                selfStorage = tabsStorage[this.id] || {}
                if (!!selfStorage.pageStack && selfStorage.pageStack.length > 0) {
                    pageStack = selfStorage.pageStack.map((item, index) => Object.assign({
                        id: this.$plain.$utils.uuid(),
                        component: null,
                        initialized: index >= selfStorage.pageStack.length - 2
                    }, item))
                }
            }
            this.$nextTick(() => this.p_initComponent())
            return {
                pageStack,
                tabsStorage,
                selfStorage,
            }
        },
        mounted() {
            this.pageStack.length === 0 && !!this.root && this.push(this.root.path, this.root.param)
        },
        methods: {
            async push(path, param) {
                const component = await this.$plain.pageRegistry(path)
                this.pageStack.push({
                    id: this.$plain.$utils.uuid(),
                    path,
                    param,
                    component,
                    initialized: true,
                })
                await this.p_save()
                this.$emit('push', {path, param})
            },
            async redirect(path, param) {
                const component = await this.$plain.pageRegistry(path)
                this.pageStack.push({
                    id: this.$plain.$utils.uuid(),
                    path,
                    param,
                    component,
                    initialized: true,
                })
                await this.$plain.nextTick()
                await this.$plain.$utils.delay(500)
                this.pageStack.splice(this.pageStack.length - 2, 1)
                this.p_save()
                this.$emit('push', {path, param})
                this.$emit('redirect', {path, param})
            },
            async back(num = 1) {
                if (this.pageStack.length === 1) {
                    console.info("is last page!!!")
                    return
                }
                /*页面退回，将最后一页之前需要删除的页移除*/
                while (num - 1 > 0) {
                    this.pageStack.length > 2 && this.pageStack.splice(this.pageStack.length - 2, 1)
                    num--
                }
                /*初始化需要初始化的页面*/
                this.pageStack.forEach((page, index) => !page.initialized && index >= (this.pageStack.length - 2 - num) && (page.initialized = true))
                await this.$plain.nextTick()

                /*获取最后一个pageInstance实例，调用退出动画*/
                const lastPage = this.pageStack[this.pageStack.length - 1]
                const {path, param} = lastPage;
                let lastPageInstance = this.p_getPageInstance(lastPage)
                await lastPageInstance.hide()

                /*弹出页面*/
                this.pageStack.pop()

                /*保存*/
                await this.p_save()
                this.$emit('back', {path, param})
                return {path, param}
            },
            async p_save() {
                if (!this.id) return
                this.selfStorage.pageStack = this.pageStack.map(({path, param}) => ({path, param}))
                this.tabsStorage[this.id] = this.selfStorage
                this.$plain.$storage.set(STORAGE_KEY, this.tabsStorage)
            },
            async p_initComponent() {
                for (let i = 0; i < this.pageStack.length; i++) {
                    const page = this.pageStack[i];
                    if (!page.component) page.component = await this.$plain.pageRegistry(page.path)
                }
            },
            p_getPageInstance(page) {
                for (let i = 0; i < this.$children.length; i++) {
                    const $child = this.$children[i];
                    if ($child.$attrs.id === page.id) return $child.$children[0]
                }
            },
        }
    }
</script>

<style lang="scss">
    .pl-navigator {
        @include public-style;
        height: 100%;
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
    }
</style>