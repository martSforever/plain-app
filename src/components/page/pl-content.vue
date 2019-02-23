<template>
    <div class="pl-content" :style="styles" :class="{'pl-content-padding':padding}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "pl-content",
        props: {
            padding: {type: Boolean},
        },
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
        transition: $page-transition;
        position: relative;
        background-color: white;
        width: 100%;
        flex: 1;
        &.pl-content-padding {
            padding: 20px;
        }
    }
</style>
