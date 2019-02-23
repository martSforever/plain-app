<template>
    <link-page name="demo-navigator-3-page">
        <link-header title="页面三"/>
        <link-content>
            <link-button :label="`上个页面参数：${paramMsg}`"/>
            <link-button label="再次打开页面三" @click="$navigator.push('/demo-navigator-3',{msg})" long color="info"/>
            <input type="text" v-model="msg">
        </link-content>
    </link-page>
</template>

<script>
    export default {
        name: "demo-navigator-3-page",
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