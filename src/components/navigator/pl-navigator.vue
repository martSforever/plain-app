<template>
    <div class="pl-navigator">
        <component :is="page.component"
                   ref="pages"
                   v-for="(page,index) in pageStack"
                   :key="page.id"
                   v-if="index>=pageStack.length-2"
                   :param="page.param"/>
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
                    pageStack = selfStorage.pageStack.map((item) => Object.assign({id: this.$plain.$utils.uuid()}, item))
                }
            }
            console.log(pageStack)
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
                this.p_save()
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
                return {pageInfo, pageInstance}
            },
            p_save() {
                if (!this.id) return
                this.selfStorage.pageStack = this.pageStack.map(({path, param}) => ({path, param}))
                this.tabsStorage[this.id] = this.selfStorage
                this.$plain.$storage.set(STORAGE_KEY, this.tabsStorage)
                console.log(this.tabsStorage)
            },
            p_initComponent() {

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