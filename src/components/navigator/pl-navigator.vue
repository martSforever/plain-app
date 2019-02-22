<template>
    <div class="pl-navigator">
        <component v-for="(page,index) in pageStack"
                   ref="pages"
                   class="pl-navigator-page-item"
                   :key="page.id"
                   :param="page.param || {}"
                   :is="page.component"
                   v-if="index===pageStack.length-1"
                   v-show="index === pageStack.length-1"/>
    </div>
</template>

<script>
    export default {
        name: "pl-navigator",
        data() {
            const pageStack = []
            return {
                pageStack
            }
        },
        methods: {
            async push(path, title, param) {
                const component = await this.$plain.pageRegistry(path)
                this.pageStack.push({
                    id: this.$plain.$utils.uuid(),
                    title: title,
                    path,
                    param,
                    component
                })
            },
            async back() {
                const pageInstance = this.$refs.pages[this.$refs.pages.length - 1]
                await pageInstance.hide()
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
    }
</style>