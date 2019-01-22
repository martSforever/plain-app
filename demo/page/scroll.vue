<template>
    <link-page>
        <link-header>
            <link-back-button slot="start"/>
            <span>nav1</span>
        </link-header>
        <link-content>
            <div>
                <link-button @click="list.push(list.length)">add length:{{list.length}}</link-button>
                <link-button @click="list.pop()">remove</link-button>
            </div>
            <link-scroll :drop="onDrop" :pull="onPull">
                <link-item v-for="(item,index) in list" :key="index" @click="handleClick(item)">{{item+1}}、hello world
                </link-item>
            </link-scroll>
        </link-content>
        <link-footer>
            this footer content
        </link-footer>
    </link-page>
</template>

<script>
    export default {
        name: "scroll",
        data() {
            const list = []
            for (let i = 0; i < 30; i++) {
                list.push(i)
            }
            return {
                list,
            }
        },
        methods: {
            onDrop(next) {
                console.log('onDrop');
                setTimeout(() => {
                    const list = []
                    for (let i = 0; i < 20; i++) {
                        list.push(i)
                    }
                    this.list = list
                    next()
                }, 3000)
            },
            onPull(next) {
                console.log('onPull', new Date().getTime());
                setTimeout(() => {
                    for (let i = 0; i < 20; i++) {
                        this.list.push(this.list.length)
                    }
                    next()
                }, 3000)
            },
            handleClick(item) {
                console.log(item)
            },
        },
    }
</script>

<style lang="scss">

</style>