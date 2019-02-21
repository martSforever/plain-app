<template>
    <div class="pl-content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "pl-content",
        props: {},
        data() {
            return {
                page: null,
            }
        },
        mounted() {
            this.page = this.$plain.$dom.findComponentUpward(this, 'pl-page')
        },
        computed: {},
    }
</script>

<style lang="scss">
    .pl-content {
    }
</style>
