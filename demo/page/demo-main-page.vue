<template>
    <link-page class="demo-main-page" name="demo-main-page">
        <link-header title="demo示例"/>
        <link-content>
            <link-list>
                <link-item v-for="(item,index) in demos"
                           :key="index" arrow
                           @click="p_click(item)">
                    <div>
                        <link-icon :icon="item.icon"/>
                        <span>{{item.label}}</span>
                    </div>
                </link-item>
            </link-list>
        </link-content>
    </link-page>
</template>

<script>
    export default {
        name: "demo-main-page",
        data() {
            return {
                demos: [
                    {icon: 'icon-nav', path: '/demo-navigator', label: 'navigator'},
                    {icon: 'icon-icon', path: '/demo-icon', label: 'icon'},
                    {icon: 'icon-ioslist', path: '/demo-list', label: 'list'},
                    {icon: 'icon-youtubeplay', path: '/demo-button', label: 'button'},
                    {icon: 'icon-scroll', path: '/demo-scroll', label: 'scroll'},
                    {icon: 'icon-loading', path: '/demo-loading', label: 'loading'},
                    {icon: 'pl-switch-on', path: '/demo-toggle', label: 'toggle'},
                    {icon: 'icon-boardsheet', path: '/demo-picker', label: 'picker'},
                ]
            }
        },
        methods: {
            p_click(item) {
                this.$navigator.push(item.path)
            },
        }
    }
</script>

<style lang="scss">

</style>