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
    export default {
        name: "pl-navigator",
        props: {
            root: {},
        },
        data() {
            const pageStack = []
            return {
                pageStack
            }
        },
        mounted() {
            !!this.root && this.push(this.root.path, this.root.param)
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