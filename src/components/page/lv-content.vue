<template>
    <div class="lv-content" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "lv-content",
        props: {
            padding: {type: Boolean},
        },
        computed: {
            classes() {
                return {
                    ['lv-content-padding']: !!this.padding,
                }
            },
        },
    }
</script>

<style lang="scss">
    .lv-content {
        flex: 1;
        width: 100vw;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        overflow-y: scroll;
        overflow-x: hidden;

        &.lv-content-padding {
            padding: $padding;
        }
    }
</style>
