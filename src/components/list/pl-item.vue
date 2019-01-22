<template>
    <div class="pl-item" @click="e=>$emit('click',e)">
        <div class="pl-item-content">
            <slot></slot>
            <div class="pl-item-chevron" v-if="!!arrow">
                <pl-icon icon="pl-arrow-right"/>
            </div>
        </div>
    </div>
</template>

<script>
    import PlIcon from "src/components/icon/pl-icon";

    export default {
        name: "pl-item",
        components: {PlIcon},
        props: {
            arrow: {type: Boolean, default: false},
        },
    }
</script>

<style lang="scss">
    .pl-item {
        padding-left: $padding;
        box-sizing: border-box;
        .pl-item-content {
            min-height: 44px;
            border-bottom: solid 1px $color-normal-light;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-right: $padding;
            position: relative;
            .pl-item-chevron {
                position: absolute;
                top: 0;
                right: 0;
                width: $padding;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: $color-normal-divider;
                font-size: 16px;
            }
        }
    }
</style>
