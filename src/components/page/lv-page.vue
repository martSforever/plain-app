<template>
    <div class="lv-page" ref="page" :style="styles" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "lv-page",
        props: {
            name: {},
        },
        data() {
            return {
                page: null,
                touch: {
                    initialized: false,
                    startX: 0
                },
                left: 0,
            }
        },
        mounted() {
            !!this.name && console.log(this.name + '-->>mounted');
            this.$refs.page.addEventListener('touchstart', this.touchstart)
            this.$refs.page.addEventListener('touchmove', this.touchmove)
            this.$refs.page.addEventListener('touchend', this.touchend)
        },
        beforeDestroy() {
            !!this.name && console.log(this.name + '-->>destroyed');
            if (this.$plapp.$plstore.state.pageStack.length === 1) return
            this.$refs.page.removeEventListener('touchstart', this.touchstart)
            this.$refs.page.removeEventListener('touchmove', this.touchmove)
            this.$refs.page.removeEventListener('touchend', this.touchend)
        },
        computed: {
            styles() {
                const styles = {}
                styles.transform = `translateX(${this.left}px)`
                return styles
            },
            classes() {
                return {
                    'lv-page-touching': this.touch.initialized
                }
            },
        },
        methods: {
            touchstart(e) {
                if (this.$plapp.$plstore.state.pageStack.length === 1 || e.touches[0].clientX > 50) return
                e.stopPropagation()
                this.touch.initialized = true;
                this.touch.startX = e.touches[0].pageX;
            },
            touchmove(e) {
                if (!this.touch.initialized) return
                this.left = Math.max(e.touches[0].pageX - this.touch.startX, 0);
            },
            touchend(e) {
                if (!this.touch.initialized) return
                this.touch.initialized = false;
                if (this.left > window.screen.width / 2) {
                    this.left = window.screen.width
                    this.$nav.pop()
                } else {
                    this.left = 0
                }
            },
        },
    }
</script>

<style lang="scss">
    .lv-page {
        box-sizing: border-box;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;

        display: flex;
        flex-direction: column;
        overflow: hidden;

        background-color: white;
        @include transition-all-cubic-bezier;
        &.lv-page-touching {
            transition: unset;
        }
    }
</style>
