<template>
    <div class="lv-button" :class="classes" @click="e=>$emit('click',e)">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "lv-button",
        props: {
            type: {type: String, default: 'fill'},
            color: {type: String, default: 'primary'},
            shape: {type: String, default: 'fillet'},
            long: {type: Boolean, default: false},
        },
        computed: {
            classes() {
                return {
                    [`lv-button-type-${this.type}`]: !!this.type,
                    [`lv-button-color-${this.color}`]: !!this.color,
                    [`lv-button-shape-${this.shape}`]: !!this.shape,
                    'lv-button-long': !!this.long,
                }
            },
        },
    }
</script>

<style lang="scss">
    .lv-button {
        box-sizing: border-box;
        border: 1px solid transparent;
        height: 44px;
        padding: 0 18px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        box-sizing: border-box;

        &.lv-button-long {
            width: 100%;
        }

        @each $key, $value in $list-shape {
            &.lv-button-shape-#{$key} {
                border-radius: $value;
            }
        }

        &.lv-button-type-fill {
            @each $key, $value in $list-color {
                &.lv-button-color-#{$key} {
                    background-color: $value;
                    border-color: $value;
                    color: white;
                    &:active {
                        background-color: mix($value, white, 50%);
                        border-color: mix($value, white, 50%);
                    }
                }
            }
        }

        &.lv-button-type-line {
            @each $key, $value in $list-color {
                &.lv-button-color-#{$key} {
                    background-color: white;
                    border-color: $value;
                    color: $value;
                    &:active {
                        border-color: mix($value, white, 50%);
                        color: mix($value, white, 50%);
                    }
                }
            }
        }

        &.lv-button-type-none {
            @each $key, $value in $list-color {
                &.lv-button-color-#{$key} {
                    background-color: transparent;
                    color: $value;
                    &:active {
                        color: mix($value, white, 50%);
                    }
                }
            }
        }
    }
</style>
