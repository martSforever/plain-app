<template>
    <transition-group :name="'lv-'+$plapp.$lvstore.state.animate">
        <component :is="page.component"
                   v-for="(page,index) in $plapp.$lvstore.state.pageStack"
                   :key="page.name+index"
                   v-if="page.initialized"
                   :param="page.param"

        />
    </transition-group>
</template>

<script>
    export default {
        name: "lv-app",
    }
</script>