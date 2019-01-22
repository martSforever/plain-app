<template>
    <div class="pl-footer">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "pl-footer"
    }
</script>

<style lang="scss">
    .pl-footer {
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        box-shadow: $box-shadow;
        color: $color-normal-title;
        box-sizing: border-box;
    }
</style>
