<template>
    <link-page class="demo-loading">
        <link-header>
            <link-back-button slot="start"/>
            <span>loading</span>
        </link-header>
        <link-content>
            <link-list>
                <link-item>default:
                    <link-loading/>
                </link-item>
                <link-item>dual:
                    <link-loading type="dual"/>
                </link-item>
                <link-item>eclipse:
                    <link-loading type="eclipse"/>
                </link-item>
                <link-item>ripple:
                    <link-loading type="ripple"/>
                </link-item>
                <link-item>rolling:
                    <link-loading type="rolling"/>
                </link-item>
                <link-item>spin:
                    <link-loading type="spin"/>
                </link-item>
                <link-item>spinner1:
                    <link-loading type="spinner1"/>
                </link-item>
                <link-item>spinner2:
                    <link-loading type="spinner2"/>
                </link-item>
                <link-item>spinner3:
                    <link-loading type="spinner3"/>
                </link-item>
            </link-list>
        </link-content>
    </link-page>
</template>

<script>
    export default {
        name: "loading"
    }
</script>

<style lang="scss">
    .demo-loading {
        .lv-loading {
            margin-bottom: 12px;
        }
    }
</style>