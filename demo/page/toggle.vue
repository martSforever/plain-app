<template>
    <link-page class="demo-toggle">
        <link-header>
            <link-back-button slot="start"/>
            <span>toggle</span>
        </link-header>
        <link-content padding>
            <div>
                <link-toggle color="primary" :value="true"/>
                <link-toggle color="success" :value="true"/>
                <link-toggle color="warn" :value="true"/>
                <link-toggle color="error" :value="true"/>
                <link-toggle color="info" :value="true"/>
            </div>
        </link-content>
    </link-page>
</template>

<script>
    export default {
        name: "toggle"
    }
</script>

<style lang="scss">
    .demo-toggle {
        .lv-toggle {
            margin-right: 12px;
        }
    }
</style>