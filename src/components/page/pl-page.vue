<template>
    <div class="pl-page">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "pl-page",
        props: {
            name: {},
        },
        data() {
            return {}
        },
        mounted() {
        },
        beforeDestroy() {
            !!this.name && console.log(this.name + '-->>destroyed');
        },
        computed: {

        },
        methods: {

        },
    }
</script>

<style lang="scss">
    .pl-page {
        @include public-style;
        background-color: white;
        height: 100%;
        width: 100%;
    }
</style>
