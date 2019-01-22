<template>
    <div class="lv-header">
        <div class="lv-header-left">
            <slot name="start"></slot>
        </div>
        <div class="lv-header-center">
            <slot></slot>
        </div>
        <div class="lv-header-right">
            <slot name="end"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "lv-header"
    }
</script>

<style lang="scss">
    .lv-header {
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        box-shadow: $box-shadow;
        color: $color-normal-title;
        padding: 0 $padding/2;
        box-sizing: border-box;
        .lv-header-left, .lv-header-right {
            flex: 1;
        }
        .lv-header-center {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: center;
            min-width: 50%;
        }
    }
</style>
