<template>
    <div class="pl-header">
        <div class="pl-header-content-wrapper">
            <pl-back-button/>
        </div>
    </div>
</template>

<script>
    import PlBackButton from "../button/pl-back-button";

    export default {
        name: "pl-header",
        components: {PlBackButton}
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
        }
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 1px;
            box-shadow: 0 0 15px 1px #aaa;
        }
    }
</style>
