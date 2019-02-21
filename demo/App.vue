<template>
    <main-page/>
</template>

<script>
    import MainPage from "./main-page";

    export default {
        name: "App",
        components: {MainPage},
    }
</script>

<style lang="scss">
    html, body {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
    }
</style>