export const ValueMixin = {
    props: {
        value: {},
    },
    watch: {
        value(val) {
            this.p_watchValue && val !== this.currentValue && (this.currentValue = val)
        },
        currentValue(val) {
            this.p_watchCurrentValue && this.$emit('input', val)
        },
    },
    data() {
        return {
            currentValue: this.value,
            p_watchValue: true,
            p_watchCurrentValue: true,
        }
    },
}

export const ValidMixin = {
    props: {
        required: {type: Boolean},                                      //是否必输
        rules: {type: Array},                                           //校验规则
        validOnInit: {type: Boolean},                                   //是否在初始化的时候进行校验
    }
}

export const BoxMixin = {
    mixins: [ValueMixin, ValidMixin],
    props: {
        /*---------------------------------------box props-------------------------------------------*/
        boxType: {type: String, default: 'fill',},                      //盒子类型
        boxColor: {type: String, default: 'primary'},                   //盒子颜色
        boxShape: {type: String, default: 'none'},                      //盒子形状
        boxSize: {type: String, default: 'default'},                    //盒子大小

        prefixIcon: {type: String},                                     //前置图标
        suffixIcon: {type: String},                                     //后置图标
        clearIcon: {type: String},                                      //清除图标，当该属性存在时，hover自动为true，当value有值并且hovering时，显示pl-close，否则显示clearIcon
        clearable: {type: Boolean, default: true},                      //是否可清除
        loading: {type: Boolean},                                       //loading 图标
        iconOnly: {type: Boolean},                                      //只有图标，设置为true则盒子宽高相等，并且为圆形

        readonly: {type: Boolean},                                      //只读
        disabled: {type: Boolean},                                      //禁用（颜色变为disabled）

        padding: {type: Boolean, default: true},                        //左右边距
        long: {type: Boolean,},                                         //长按钮
        width: {type: Number, default: 200},                            //盒子宽度
        hover: {type: Boolean},                                         //是否监听鼠标hover事件

        value: {},                                                      //当前值
    },
}

export const MountedMixin = {
    data() {
        return {
            p_mounted: false
        }
    },
    mounted() {
        this.p_mounted = true
    },
    beforeDestroy() {
        this.p_mounted = false
    },
}

export const InputMixin = {
    props: {
        boxType: {default: 'line'},                                 //盒子类型
        boxColor: {default: 'info'},                                //盒子颜色
        clearIcon: {default: 'none'},                               //默认输入框不带图标

        replaceRegexp: {type: RegExp},                              //输入的时候需要替换掉文本的正则表达式，比如/[^\-0-9.]/g就是去除数字与小数点的正则表达式
        type: {type: String, default: 'text'},                      //输入框类型，input的type属性比如password等
        focusOnHover: {type: Boolean},                              //是否在鼠标移动到输入框上方的时候就获取焦点
        defaultClear: {type: Boolean, default: true},               //是否在点击清楚图标的时候清除默认input的内容
        placeholder: {type: String, default: '点击输入...'},         //空值占位符
        keyboard: {type: Boolean,},                                 //是否监听案件事件，开启之后就可以监听back、enter、up等事件
    }
}



