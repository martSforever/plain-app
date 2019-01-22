<template>
    <div class="pl-header">
        <div class="pl-header-left">
            <slot name="start"></slot>
        </div>
        <div class="pl-header-center">
            <slot></slot>
        </div>
        <div class="pl-header-right">
            <slot name="end"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pl-header"
    }
</script>

<style lang="scss">
    .pl-header {
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        box-shadow: $box-shadow;
        color: $color-normal-title;
        padding: 0 $padding/2;
        box-sizing: border-box;
        .pl-header-left, .pl-header-right {
            flex: 1;
        }
        .pl-header-center {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: center;
            min-width: 50%;
        }
    }
</style>
