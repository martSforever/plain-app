<template>
    <link-page name="nav3">
        <link-header>
            <link-back-button slot="start"/>
            <span>nav3</span>
        </link-header>
        <link-content padding>
            <div>
                上一页数据：{{param.data}}
            </div>
            <input type="text" v-model="text">
        </link-content>
    </link-page>
</template>

<script>
    export default {
        name: "nav3",
        props: {
            param: {},
        },
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
