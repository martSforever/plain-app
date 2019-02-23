<template>
    <link-page name="button">
        <link-header title="按钮"/>
        <link-content padding>
            <div class="button-wrapper">
                <link-button color="primary">primary</link-button>
                <link-button color="info">info</link-button>
                <link-button color="success">success</link-button>
                <link-button color="warn">warn</link-button>
                <link-button color="error">error</link-button>
            </div>
            <div class="button-wrapper">
                <link-button color="primary" type="line">primary</link-button>
                <link-button color="info" type="line">info</link-button>
                <link-button color="success" type="line">success</link-button>
                <link-button color="warn" type="line">warn</link-button>
                <link-button color="error" type="line">error</link-button>
            </div>
            <div class="button-wrapper">
                <link-button color="primary" type="none">primary</link-button>
                <link-button color="info" type="none">info</link-button>
                <link-button color="success" type="none">success</link-button>
                <link-button color="warn" type="none">warn</link-button>
                <link-button color="error" type="none">error</link-button>
            </div>
        </link-content>
    </link-page>
</template>

<script>
    export default {
        name: "demo-button",
    }
</script>

<style lang="scss" scoped>
    .button-wrapper {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        .pl-button {
            margin-right: 6px;
            margin-bottom: 6px;
        }
    }
</style>
