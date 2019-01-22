<template>
    <div class="lv-item" @click="e=>$emit('click',e)">
        <div class="lv-item-content">
            <slot></slot>
            <div class="lv-item-chevron" v-if="!!arrow">
                <lv-icon icon="lv-arrow-right"/>
            </div>
        </div>
    </div>
</template>

<script>
    import LvIcon from "src/components/icon/lv-icon";

    export default {
        name: "lv-item",
        components: {LvIcon},
        props: {
            arrow: {type: Boolean, default: false},
        },
    }
</script>

<style lang="scss">
    .lv-item {
        padding-left: $padding;
        box-sizing: border-box;
        .lv-item-content {
            min-height: 44px;
            border-bottom: solid 1px $color-normal-light;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-right: $padding;
            position: relative;
            .lv-item-chevron {
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
