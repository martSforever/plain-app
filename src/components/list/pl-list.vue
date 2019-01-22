<template>
    <div class="pl-list">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "pl-list"
    }
</script>

<style lang="scss">
    .pl-list {
        flex: 1;
        width: 100%;
        box-sizing: border-box;
        .pl-item:first-child {
            border-top: $border;
        }
        .pl-item:last-child {
            border-bottom: $border;
            .pl-item-content {
                border-bottom: unset
            }
        }
    }
</style>
