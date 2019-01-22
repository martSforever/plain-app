<template>
    <div class="lv-picker">
        <ul class="lv-picker-ul" v-resize-detector="_resize">
            <li v-for="(item,index) in data" class="lv-picker-li">
                <slot :data="{item:item,index:index}">{{item}}</slot>
            </li>
        </ul>
        <div class="lv-picker-mask-top"></div>
        <div class="lv-picker-mask-bottom"></div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import ResizeDetector from 'src/utils/resize-detector'

    export default {
        name: "lv-picker",
        directives: {ResizeDetector},
        props: {
            value: {type: Number, default: 0},
            data: {type: Array, default: () => []},
        },
        watch: {
            value(val) {
                if (this.currentValue !== val) {
                    this.currentValue = val
                    this.scroll.wheelTo(val)
                }
            },
            currentValue(val) {
                this.$emit('input', val)
            },
        },
        data() {
            return {
                scroll: null,
                currentValue: this.value,
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$el, {
                wheel: {
                    selectedIndex: this.currentValue,
                    /** 默认值就是下面配置的两个，为了展示二者的作用，这里再配置一下 */
                    wheelWrapperClass: 'lv-picker-ul',
                    wheelItemClass: 'lv-picker-li'
                },
                probeType: 3
            })
            this.scroll.on('scrollEnd', () => this.currentValue = this.scroll.getSelectedIndex())
        },
        methods: {
            _resize() {
                this.refresh()
            },
            refresh() {
                this.scroll.refresh()
            },
        },
    }
</script>

<style lang="scss">

    .lv-picker {
        height: 172px;
        overflow: hidden;
        font-size: 18px;
        position: relative;
        .lv-picker-ul {
            padding: 0;
            margin-top: 68px;
            line-height: 36px;
            list-style: none;
            .lv-picker-li {
                list-style: none;
                height: 36px;
                overflow: hidden;
                white-space: nowrap;
                color: gray;
                text-align: center;
            }
        }
        .lv-picker-mask-top, .lv-picker-mask-bottom {
            position: absolute;
            left: 0;
            right: 0;
            height: 68px;
        }
        .lv-picker-mask-top {
            top: 0;
            background: linear-gradient(0deg, hsla(0, 0%, 100%, .4), hsla(0, 0%, 100%, .8));
            border-bottom: #ebebeb solid 1px;
        }
        .lv-picker-mask-bottom {
            bottom: 0;
            background: linear-gradient(180deg, hsla(0, 0%, 100%, .4), hsla(0, 0%, 100%, .8));
            border-top: #ebebeb solid 1px;
        }
    }
</style>