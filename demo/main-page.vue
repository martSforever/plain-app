<template>
    <link-page class="main-page" name="main">
        <link-header>
            <link-back-button slot="start"/>
            AMobile
        </link-header>
        <link-content>
            <link-list>
                <link-item arrow v-for="(item,index) in demo"
                           :key="index"
                           @click="jump(item)">
                    <div>
                        <link-icon :icon="item.icon" class="icon"/>
                        <span>{{item.label}}</span>
                    </div>
                </link-item>
            </link-list>
        </link-content>
        <link-footer>FOOTER</link-footer>
    </link-page>
</template>

<script>
    export default {
        name: "main-page",
        data() {
            return {
                demo: [
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
        }
    }
</script>

<style lang="scss">
    .main-page {
        .pl-item {
            .icon {
                margin-right: 12px;
            }
        }
    }
</style>
