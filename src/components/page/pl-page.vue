<template>
    <div class="pl-page"
         :class="{'pl-page-touching':touching}"
         @touchstart.stop.prevent="touchstart"
         @touchmove.stop.prevent="touchmove"
         @touchend.stop.prevent="touchend">
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
                left: window.screen.width,
                tempLeft: 0,
                startX: 0,
                touching: false,
            }
        },
        watch: {
            left(val) {
                this.$emit('move', val)
            },
        },
        async mounted() {
            await this.$plain.nextTick()
            setTimeout(() => {
                this.left = 0
            }, 0)
        },
        beforeDestroy() {
            !!this.name && console.log(this.name + '-->>destroyed');
        },
        computed: {},
        methods: {
            async show() {
                this.left = 0
                await this.$plain.$utils.delay(1000)
                this.$emit('show')
            },
            async hide() {
                this.left = this.totalWidth
                await this.$plain.$utils.delay(1000)
                this.$emit('hide')
            },
            touchstart(e) {
                if (e.touches[0].clientX > 50) return
                this.touching = true
                this.tempLeft = this.left
                this.startX = e.touches[0].clientX
            },
            touchmove(e) {
                if (!this.touching) return
                const durX = e.touches[0].clientX - this.startX
                this.left = Math.max(0, Math.min((durX + this.tempLeft).toFixed(0) - 1, this.totalWidth))
            },
            touchend(e) {
                if (!this.touching) return
                this.touching = false
                if (this.left > this.totalWidth * 0.6) {
                    this.hide()
                } else {
                    this.show()
                }
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
        &.pl-page-touching {
            .pl-header .pl-header-content-wrapper, .pl-content {
                transition: initial;
            }
        }
    }
</style>
