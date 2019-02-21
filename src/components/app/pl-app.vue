<template>
    <transition-group :name="'pl-'+$plain.$plstore.state.animate">
        <component :is="page.component"
                   v-for="(page,index) in $plain.$plstore.state.pageStack"
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