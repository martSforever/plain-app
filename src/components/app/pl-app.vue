<template>
    <transition-group :name="'pl-'+$plapp.$plstore.state.animate">
        <component :is="page.component"
                   v-for="(page,index) in $plapp.$plstore.state.pageStack"
                   :key="page.name+index"
                   v-if="page.initialized"
                   :param="page.param"

        />
    </transition-group>
</template>

<script>
    export default {
        name: "pl-app",
    }
</script>