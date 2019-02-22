<template>
    <div class="main-page">
        <link-navigator ref="navigator"/>
    </div>
</template>

<script>
    export default {
        name: "main-page",
        data() {
            return {
                demo: [
                    {icon: 'pl-tab', path: 'navigator', label: 'navigator'},
                    {icon: 'icon-nav', path: 'nav1', label: 'nav'},
                    {icon: 'icon-icon', path: 'icon', label: 'icon'},
                    {icon: 'icon-ioslist', path: 'list', label: 'list'},
                    {icon: 'icon-youtubeplay', path: 'button', label: 'button'},
                    {icon: 'icon-scroll', path: 'scroll', label: 'scroll'},
                    {icon: 'icon-loading', path: 'loading', label: 'loading'},
                    {icon: 'pl-switch-on', path: 'toggle', label: 'toggle'},
                    {icon: 'icon-boardsheet', path: 'picker', label: 'picker'},
                ]
            }
        },
        methods: {
            jump(item) {
                this.$nav.push(item.path)
            },
        },
        mounted() {
            this.$refs.navigator.push('/button', '按钮', {ddd: '按钮'})
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
