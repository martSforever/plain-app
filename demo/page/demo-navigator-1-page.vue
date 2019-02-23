<template>
    <link-page name="demo-navigator-1-page">
        <link-header title="页面一"/>
        <link-content>
            <link-button :label="`上个页面参数：${paramMsg}`"/>
            <link-button label="打开页面二" @click="$navigator.push('/demo-navigator-2',{msg})" long color="success"/>
            <input type="text" v-model="msg">

        </link-content>
    </link-page>
</template>

<script>
    export default {
        name: "demo-navigator-1-page",
        props: {
            param: {},
        },
        data() {
            return {
                paramMsg: this.param.msg,
                msg: null,
            }
        },
    }
</script>

<style lang="scss">

</style>