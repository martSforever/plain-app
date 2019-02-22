<template>
    <link-page name="demo-navigator-page">
        <link-header title="页面导航"/>
        <link-content padding>
            页面导航示例
            <div>
                <input type="text" v-model="msg">
            </div>
            <div>
                <link-button label="打开页面一" @click="$navigator.push('/demo-navigator-1',{msg})" long/>
            </div>
        </link-content>
    </link-page>
</template>

<script>
    export default {
        name: "demo-navigator-page",
        props: {
            param: {},
        },
        data() {
            return {
                msg: null,
            }
        },
    }
</script>

<style lang="scss">

</style>