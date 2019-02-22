<template>
    <div class="pl-back-button" @click="handleClick">
        <pl-icon icon="pl-arrow-left"/>
        <span>返回</span>
    </div>
</template>

<script>
    import PlIcon from "src/components/icon/pl-icon";

    export default {
        name: "pl-back-button",
        components: {PlIcon},
        data() {
            return {
                p_navigator: null,
            }
        },
        mounted() {
            this.p_navigator = this.$plain.$dom.findComponentUpward(this, 'pl-navigator')
        },
        methods: {
            handleClick() {
                console.log('handleClick')
                this.p_navigator.back()
            }
        },

    }
</script>

<style lang="scss">
    .pl-back-button {
        display: inline-block;
        color: $color-primary;
        box-sizing: border-box;
    }
</style>
