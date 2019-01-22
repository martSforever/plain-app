<template>
    <div class="lv-list">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "lv-list"
    }
</script>

<style lang="scss">
    .lv-list {
        flex: 1;
        width: 100%;
        box-sizing: border-box;
        .lv-item:first-child {
            border-top: $border;
        }
        .lv-item:last-child {
            border-bottom: $border;
            .lv-item-content {
                border-bottom: unset
            }
        }
    }
</style>
