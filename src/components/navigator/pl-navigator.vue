<template>
    <div class="pl-navigator">
        <component ref="pages"
                   v-for="(page,index) in pageStack"
                   :key="page.id"
                   :is="page.component"
                   :param="page.param"
                   v-if="!!page.component && index>=pageStack.length-2"/>
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
        data() {
            let pageStack = []
            let tabsStorage, selfStorage;
            if (!!this.id) {
                tabsStorage = this.$plain.$storage.get(STORAGE_KEY) || {}
                selfStorage = tabsStorage[this.id] || {}
                if (!!selfStorage.pageStack && selfStorage.pageStack.length > 0) {
                    pageStack = selfStorage.pageStack.map((item) => Object.assign({id: this.$plain.$utils.uuid(), component: null}, item))
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
                    component
                })
                await this.p_save()
                this.$emit('push', {path, param})
            },
            async back() {
                if (this.pageStack.length === 1) {
                    console.info("is last page!!!")
                    return
                }

                let pageInstance = this.$refs.pages[this.$refs.pages.length - 1]
                if (pageInstance.$children[0].$options.name !== 'pl-page') {
                    console.error('page must be wrapped by page component!!!')
                    return
                }
                let page = pageInstance.$children[0]
                await page.hide()
                const pageInfo = this.pageStack.pop()
                this.$emit('back', {path: pageInfo.path, param: pageInfo.param})
                return {pageInfo, pageInstance}
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