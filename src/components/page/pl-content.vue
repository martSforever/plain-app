<template>
    <div class="pl-content" :style="styles">
        <slot></slot>

    </div>
</template>

<script>
    export default {
        name: "pl-content",
        props: {},
        data() {
            return {
                page: null,
                pageLeft: null,
            }
        },
        mounted() {
            this.page = this.$plain.$dom.findComponentUpward(this, 'pl-page')
            this.pageLeft = this.page.left
            this.page.$on('move', (left) => {
                this.pageLeft = left
            })
        },
        computed: {
            styles() {
                return {
                    left: `${this.pageLeft}px`
                }
            },
        },
    }
</script>

<style lang="scss">
    .pl-content {
        @include public-style;
        @include transition-all-cubic-bezier;
        position: relative;
        background-color: white;
        width: 100%;
        flex: 1;
    }
</style>
