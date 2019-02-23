<template>
    <link-page>
        <link-header>
            <link-back-button slot="start"/>
            <span>scroll-view</span>
        </link-header>
        <link-content>
            <link-button>
                {{index}}
            </link-button>
            <div class="picker-wrapper">
                <link-picker :data="data1" v-model="index">
                    <div slot-scope="{data:{item,index}}">{{item.text}}</div>
                </link-picker>
                <link-picker :data="data1" v-model="index">
                    <div slot-scope="{data:{item,index}}">{{item.text}}</div>
                </link-picker>
            </div>
        </link-content>
    </link-page>
</template>

<script>

    let data1 = [
        {
            text: '剧毒',
            value: 1
        }, {
            text: '蚂蚁',
            value: 2
        },
        {
            text: '幽鬼',
            value: 3
        },
        {
            text: '主宰',
            value: 4
        },
        {
            text: '卡尔',
            value: 5
        },
        {
            text: '宙斯',
            value: 6
        },
        {
            text: '巫医',
            value: 7
        }, {
            text: '巫妖',
            value: 8
        },
        {
            text: '神谕者',
            value: 9
        },
        {
            text: '撼地神牛',
            value: 10
        },
        {
            text: '蓝胖子',
            value: 11
        },
        {
            text: '水晶室女',
            value: 12
        },
        {
            text: '莉娜',
            value: 13
        },
        {
            text: '斯拉克',
            value: 14
        },
        {
            text: '斯拉达',
            value: 15
        }
    ]
    export default {
        name: "picker",
        data() {
            return {
                index: 10,
                data1,
            }
        },
        mounted() {
        },
        methods: {}
    }
</script>

<style lang="scss">
    .picker-wrapper {
        display: flex;
        flex-direction: row;
        .pl-picker {
            flex: 1;
        }
    }
</style>