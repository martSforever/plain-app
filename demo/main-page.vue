<template>
    <div class="main-page">
        <link-navigator ref="navigator"
                        :root="root"/>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: "main-page",
        data() {
            return {
                root: {
                    path: '/demo-main',
                },
            }
        },
        mounted() {
            this.$set(Vue.prototype, '$navigator', this.$refs.navigator)
        },
    }
</script>

<style lang="scss">
    .main-page {
        height: 100%;
        width: 100%;
        background-color: #f2f2f2;
        .pl-item {
            .icon {
                margin-right: 12px;
            }
        }
    }
</style>
