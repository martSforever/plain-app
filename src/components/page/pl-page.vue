<template>
    <div class="pl-page" @touchstart="touchstart">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "pl-page",
        props: {
            name: {},
        },
        data() {
            return {
                totalWidth: window.screen.width,
                left: 0,
                tempLeft: 0,
                startX: 0,
            }
        },
        watch: {
            left(val) {
                this.$emit('move', val)
            },
        },
        mounted() {
        },
        beforeDestroy() {
            !!this.name && console.log(this.name + '-->>destroyed');
        },
        computed: {},
        methods: {
            touchstart(e) {
                e.stopPropagation()
                e.preventDefault()
                document.body.addEventListener('touchmove', this.touchmove)
                document.body.addEventListener('touchend', this.touchend)
                this.tempLeft = this.left
                this.startX = e.touches[0].clientX
            },
            touchmove(e) {
                e.stopPropagation()
                e.preventDefault()
                const durX = e.touches[0].clientX - this.startX
                this.left = Math.max(0, Math.min(durX + this.tempLeft, this.totalWidth))
            },
            touchend(e) {
                e.stopPropagation()
                e.preventDefault()
                document.body.removeEventListener('touchmove', this.touchmove)
                document.body.removeEventListener('touchend', this.touchend)
            },
        },
    }
</script>

<style lang="scss">
    .pl-page {
        @include public-style;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
    }
</style>
