<template>
    <div class="pl-button" :class="classes" @click="e=>$emit('click',e)">
        <slot>
            {{label}}
        </slot>
    </div>
</template>

<script>
    export default {
        name: "pl-button",
        props: {
            label: {type: String},
            type: {type: String, default: 'fill'},
            color: {type: String, default: 'primary'},
            shape: {type: String, default: 'fillet'},
            long: {type: Boolean, default: false},
        },
        computed: {
            classes() {
                return {
                    [`pl-button-type-${this.type}`]: !!this.type,
                    [`pl-button-color-${this.color}`]: !!this.color,
                    [`pl-button-shape-${this.shape}`]: !!this.shape,
                    'pl-button-long': !!this.long,
                }
            },
        },
    }
</script>

<style lang="scss">
    .pl-button {
        box-sizing: border-box;
        border: 1px solid transparent;
        height: 44px;
        padding: 0 18px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        box-sizing: border-box;

        &.pl-button-long {
            width: 100%;
        }

        @each $key, $value in $list-shape {
            &.pl-button-shape-#{$key} {
                border-radius: $value;
            }
        }

        &.pl-button-type-fill {
            @each $key, $value in $list-color {
                &.pl-button-color-#{$key} {
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

        &.pl-button-type-line {
            @each $key, $value in $list-color {
                &.pl-button-color-#{$key} {
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

        &.pl-button-type-none {
            @each $key, $value in $list-color {
                &.pl-button-color-#{$key} {
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
