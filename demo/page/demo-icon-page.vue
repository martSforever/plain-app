<template>
    <link-page>
        <link-header>
            <link-back-button slot="start"/>
            <span>ICON</span>
        </link-header>
        <link-content>
            <link-list>
                <link-item>
                    Standard icon:
                    <link-icon icon="pl-plus"/>
                </link-item>
                <link-item>
                    Costume icon:
                    <link-icon icon="icon-nav"/>
                </link-item>
            </link-list>
        </link-content>
    </link-page>
</template>

<script>
    export default {
        name: "icon"
    }
</script>

<style lang="scss">

</style>