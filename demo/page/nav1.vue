<template>
    <link-page name="nav1">
        <link-header>
            <link-back-button slot="start"/>
            <span>nav1</span>
        </link-header>
        <link-content padding>
            <link-button long @click="$nav.push('nav2',{name:'nav1',data:text})">open nav1</link-button>
            <input type="text" v-model="text">
        </link-content>
    </link-page>
</template>

<script>
    export default {
        name: "nav1",
        data() {
            return {
                text: null,
            }
        },
        mounted() {
        },
    }
</script>

<style lang="scss">

</style>
