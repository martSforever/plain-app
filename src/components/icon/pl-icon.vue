<template>
    <svg class="pl-icon" aria-hidden="true">
        <use :xlink:href="`#${icon}`"></use>
    </svg>
</template>

<script>
    export default {
        name: "pl-icon",
        props: {
            icon: {require: true},
        },
    }
</script>

<style lang="scss">
    .pl-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>