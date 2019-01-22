<template>
    <div class="pl-toggle" :class="classes" @click="_click" @touchstart="_touchstart" @touchend="_touchend">
        <div class="pl-toggle-circle"></div>
    </div>
</template>

<script>
    export default {
        name: "pl-toggle",
        props: {
            value: {},
            color: {type: String, default: 'primary'},

            trueValue: {default: true},
            falseValue: {default: false},
        },
        data() {
            return {
                currentValue: this.value,
                active: false,
            }
        },
        computed: {
            on() {
                return this.currentValue === this.trueValue
            },
            classes() {
                return [
                    `pl-toggle-color-${this.color}`,
                    {
                        'pl-toggle-on': !!this.on,
                        'pl-toggle-active': this.active,
                    }
                ]
            },
        },
        methods: {
            _click() {
                this.currentValue = !this.on ? this.trueValue : this.falseValue
            },
            _touchstart() {
                this.active = true
            },
            _touchend() {
                this.active = false
            },
        },
    }
</script>

<style lang="scss">
    .pl-toggle {
        width: 52px;
        height: 32px;
        background-color: #f2f2f2;
        position: relative;
        border-radius: 16px;
        transition: background-color .3s;
        display: inline-block;
        vertical-align: center;

        &:before {
            position: absolute;
            left: 2px;
            right: 2px;
            top: 2px;
            bottom: 2px;
            border-radius: 16px;
            background-color: #fff;
            content: "";
            transform: scale3d(1, 1, 1);
            transition: transform .3s;
        }
        &.pl-toggle-on {
            &:before {
                transform: scale3d(0, 0, 0);
            }
            .pl-toggle-circle {
                left: 22px;
                right: 2px;
            }
            @each $key, $value in $list-color {
                &.pl-toggle-color-#{$key} {
                    background-color: $value;
                }
            }
        }
        .pl-toggle-circle {
            position: absolute;
            left: 2px;
            right: 22px;
            top: 2px;
            bottom: 2px;

            border-radius: 14px;
            background: white;
            box-shadow: 0 3px 12px rgba(0, 0, 0, .16), 0 3px 1px rgba(0, 0, 0, .1);
            transition: all 0.3s;
        }
        &.pl-toggle-active {
            .pl-toggle-circle {
                left: 2px;
                right: 16px;
            }
            &.pl-toggle-on .pl-toggle-circle {
                left: 16px;
                right: 2px;
            }
        }
    }
</style>