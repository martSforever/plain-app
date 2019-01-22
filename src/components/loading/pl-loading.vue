<template>
    <div class="pl-loading" :style="styles">
        <img :src="src" class="pl-loading-img"/>
    </div>
</template>

<script>
    import svgs from './index'

    export default {
        name: "pl-loading",
        props: {
            type: {type: String, default: 'spinner2'},
            size: {type: Number | String, default: '56px'},
        },
        computed: {
            src() {
                console.log(this.type)
                return svgs[this.type]
            },
            styles() {
                const styles = {}
                !!this.size && Object.assign(styles, {
                    width: this.$plapp.$utils.typeOf(this.size) === 'string' ? this.size : `${this.size}px`,
                    height: this.$plapp.$utils.typeOf(this.size) === 'string' ? this.size : `${this.size}px`,
                })
                return styles
            },
        },
    }
</script>

<style lang="scss">
    .pl-loading {
        display: inline-block;
        vertical-align: center;
        img.pl-loading-img {
            height: 100%;
            width: 100%;
            display: block;
        }
    }
</style>