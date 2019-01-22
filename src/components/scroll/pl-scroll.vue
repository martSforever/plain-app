<template>
    <div class="pl-scroll" ref="wrapper" :class="classes">
        <div class="pl-scroll-content" v-resize-detector="handleResize">
            <slot></slot>
        </div>
        <div class="pl-scroll-drop-ready">
            <span>下拉刷新</span>
            &nbsp;&nbsp;
            <link-icon icon="pl-arrow-down-flat"/>
        </div>
        <div class="pl-scroll-drop-doing">
            <div class="pl-scroll-loading-content">
                <span>正在刷新</span>
                <pl-loading size="32px"/>
            </div>
        </div>
        <div class="pl-scroll-pull-ready">
            <span>上拉加载更多数据</span>
            &nbsp;&nbsp;
            <link-icon icon="pl-arrow-up-flat"/>
        </div>
        <div class="pl-scroll-pull-doing">
            <div class="pl-scroll-loading-content">
                <span>正在加载更多数据</span>
                <pl-loading size="32px"/>
            </div>
        </div>
    </div>
</template>

<script>

    import BScroll from 'better-scroll'
    import ResizeDetector from 'src/utils/resize-detector'
    import PlLoading from 'src/components/loading/pl-loading'

    export default {
        name: "pl-scroll",
        directives: {ResizeDetector},
        components: {PlLoading},
        props: {
            /**
             * 1 滚动的时候会派发scroll事件，会截流。
             * 2 滚动的时候实时派发scroll事件，不会截流。
             * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
             */
            probeType: {type: Number, default: 1},
            click: {type: Boolean, default: true},                              //点击列表是否派发click事件
            scrollX: {type: Boolean, default: false},                           //是否开启横向滚动
            listenScroll: {type: Boolean, default: false},                      //是否派发滚动事件
            beforeScroll: {type: Boolean, default: false},                      //是否派发列表滚动开始的事件

            drop: {type: Function},                                             //监听下来刷新事件
            pull: {type: Function},                                             //监听上拉加载事件
        },
        mounted() {
            // 保证在DOM渲染完毕后初始化better-scroll
            setTimeout(() => this._initScroll(), 20)
        },
        data() {
            return {
                scroll: null,

                dropReady: false,
                dropDoing: false,
                pullReady: false,
                pullDoing: false,
            }
        },
        computed: {
            classes() {
                return {
                    'pl-scroll-drop-ready': this.dropReady,
                    // 'pl-scroll-drop-doing': true,
                    'pl-scroll-drop-doing': this.dropDoing,
                    'pl-scroll-pull-ready': this.pullReady,
                    'pl-scroll-pull-doing': this.pullDoing,
                }
            },
        },
        methods: {
            _initScroll() {
                this.scroll = new BScroll(this.$refs.wrapper, {
                    probeType: this.probeType,
                    click: this.click,
                    scrollX: this.scrollX
                })

                if (!!this.drop || !!this.pull || this.listenScroll)
                    this.scroll.on('scroll', (pos) => {
                        this.listenScroll && this.$emit('scroll', pos)
                        !!this.drop && !this.dropDoing && (this.dropReady = pos.y >= 50)
                        !!this.pull && !this.pullDoing && (this.pullReady = -pos.y > (-this.scroll.maxScrollY + 50))
                    })
                if (!!this.drop || !!this.pull)
                    this.scroll.on('touchEnd', () => {
                        if (!!this.drop && this.dropReady && !this.dropDoing) {
                            this.dropReady = false
                            this.dropDoing = true
                            const next = () => this.dropDoing = false
                            !!this.drop ? this.drop(next) : next()
                        }
                        if (!!this.pull && this.pullReady && !this.pullDoing) {
                            this.pullReady = false
                            this.pullDoing = true
                            const next = () => this.pullDoing = false
                            !!this.pull ? this.pull(next) : next()
                        }
                    })
                // 是否派发列表滚动开始的事件
                this.beforeScroll && this.scroll.on('beforeScrollStart', () => this.$emit('beforeScroll'))
            },
            disable() {
                // 代理better-scroll的disable方法
                this.scroll && this.scroll.disable()
            },
            enable() {
                // 代理better-scroll的enable方法
                this.scroll && this.scroll.enable()
            },
            refresh() {
                // 代理better-scroll的refresh方法
                this.scroll && this.scroll.refresh()
            },
            scrollTo() {
                // 代理better-scroll的scrollTo方法
                this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
            },
            scrollToElement() {
                // 代理better-scroll的scrollToElement方法
                this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
            },
            handleResize() {
                this.refresh()
            },
        },
        beforeDestroy() {
            this.scroll.destroy()
        },
    }
</script>

<style lang="scss">
    .pl-scroll {
        height: 100%;
        width: 100%;
        overflow: hidden;
        position: relative;
        .pl-scroll-drop-ready, .pl-scroll-drop-doing, .pl-scroll-pull-ready, .pl-scroll-pull-doing {
            position: absolute;
            left: 0;
            right: 0;
            height: 90px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: $color-normal-sub-color;
            opacity: 0;
            z-index: -1;
            @include transition-all;

            .pl-icon {
                font-size: 20px;
                position: relative;
                top: 2px;
            }
        }
        .pl-scroll-loading-content {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
        .pl-scroll-drop-ready, .pl-scroll-drop-doing {
            top: 0
        }
        .pl-scroll-pull-ready, .pl-scroll-pull-doing {
            bottom: 0;
        }

        &.pl-scroll-drop-ready .pl-scroll-drop-ready,
        &.pl-scroll-drop-doing .pl-scroll-drop-doing,
        &.pl-scroll-pull-ready .pl-scroll-pull-ready,
        &.pl-scroll-pull-doing .pl-scroll-pull-doing {
            opacity: 1;
            z-index: 1;
        }
    }
</style>