<template>
    <div class="lv-back-button" @click="handleClick">
        <lv-icon icon="lv-arrow-left"/>
        <span>返回</span>
    </div>
</template>

<script>
    import LvIcon from "src/components/icon/lv-icon";

    export default {
        name: "lv-back-button",
        components: {LvIcon},
        methods: {
            handleClick() {
                this.$nav.pop()
            }
        },

    }
</script>

<style lang="scss">
    .lv-back-button {
        display: inline-block;
        color: $color-primary;
        box-sizing: border-box;
    }
</style>
