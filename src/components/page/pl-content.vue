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

        flex: 1;
        width: 100vw;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        overflow-y: scroll;
        overflow-x: hidden;

        &.lv-content-padding {
            padding: $padding;
        }
    }
</style>
