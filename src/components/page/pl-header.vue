<template>
    <div class="pl-header">
        <div class="pl-header-content-wrapper">
            <div class="pl-header-left">
                <slot name="left">
                    <pl-back-button/>
                </slot>
            </div>
            <div class="pl-header-center">
                <slot name="center"><span>{{title}}</span></slot>
            </div>
            <div class="pl-header-right">
                <slot name="right"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import PlBackButton from "../button/pl-back-button";

    export default {
        name: "pl-header",
        components: {PlBackButton},
        props: {
            title: {},
        },
    }
</script>

<style lang="scss">
    .pl-header {
        height: 64px;
        position: relative;
        z-index: 1;
        .pl-header-content-wrapper {
            height: 100%;
            width: 100%;
            position: relative;
            z-index: 1;
            display: flex;
            align-items: center;
            padding: 0 6px;
            background-color: white;
            .pl-header-left, .pl-header-right {
                flex: 1;
                font-size: 14px;
            }
            .pl-header-center {
                display: flex;
                flex: 1;
                align-items: center;
                justify-content: center;
                min-width: 50%;
            }
        }
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 1px;
            box-shadow: 0 0 15px 1px #ddd;
        }
    }
</style>
