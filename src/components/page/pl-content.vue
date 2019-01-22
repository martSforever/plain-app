<template>
    <div class="pl-content" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "pl-content",
        props: {
            padding: {type: Boolean},
        },
        computed: {
            classes() {
                return {
                    ['pl-content-padding']: !!this.padding,
                }
            },
        },
    }
</script>

<style lang="scss">
    .pl-content {
        flex: 1;
        width: 100vw;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        overflow-y: scroll;
        overflow-x: hidden;

        &.pl-content-padding {
            padding: $padding;
        }
    }
</style>
