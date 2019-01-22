<template>
    <link-page name="nav2">
        <link-header>
            <link-back-button slot="start"/>
            <span>nav2</span>
        </link-header>
        <link-content padding>
            <div>
                上一页数据：{{param.data}}
            </div>
            <link-button @click="$nav.pop()">back</link-button>
            <link-button long @click="$nav.push('nav3',{name:'nav2',data:text})" color="success">open nav3</link-button>
            <link-button long @click="$nav.push('nav2',{name:'nav2',data:text})" color="error">open nav2</link-button>
            <link-button long @click="$nav.replace('nav3',{name:'nav2',data:text})" color="warn">replace to nav3</link-button>
            <link-button long @click="$nav.goHome()">goHome</link-button>
            <input type="text" v-model="text">
        </link-content>
    </link-page>
</template>

<script>
    export default {
        name: "nav2",
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
