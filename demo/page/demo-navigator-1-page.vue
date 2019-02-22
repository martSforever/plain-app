<template>
    <link-page name="demo-navigator-1-page">
        <link-header title="页面一"/>
        <link-content>
            <div>
                <input type="text" v-model="msg">
            </div>
            <div>
                <link-button label="打开页面二" @click="$navigator.push('/demo-navigator-2',{msg})" long/>
            </div>
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
                msg: this.param.msg,
            }
        },
    }
</script>

<style lang="scss">

</style>