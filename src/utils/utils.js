const SPECIAL_CHARS_REGEXP = /([:\-_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

/**
 * 驼峰命名转横杠命名
 * @author 韦胜健
 * @date 2018/11/14
 */
function getKebabCase(str) {
    return str.replace(/[A-Z]/g, function (i) {
        return '-' + i.toLowerCase();
    })
}

/**
 * 引入js文件
 * @author  韦胜健
 * @date    2018/11/30 09:46
 */
function addScript(scriptPath) {
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", scriptPath);
    const heads = document.getElementsByTagName("head");
    if (heads.length)
        heads[0].appendChild(script);
    else
        document.documentElement.appendChild(script);
}

/**
 * 插入排序
 * @author 韦胜健
 * @date 2018/11/19
 */
function insertSort(arr, func) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let temp = arr[i];
        /*默认已排序的元素*/
        let j = i - 1;
        /*在已排序好的队列中从后向前扫描*/
        while (j >= 0 && func(arr[j], temp)) {
            /*已排序的元素大于新元素，将该元素移到一下个位置*/
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr
}


/**
 * 推迟时间
 * @author 韦胜健
 * @date 2018/11/15
 */
function delay(duration = 100) {
    return new Promise(rs => setTimeout(() => rs(), duration))
}

/**
 * 日期格式化
 * @author 韦胜健
 * @date 2018/11/19
 */
function dateFormat(date, format) {
    if (!date) return null
    let o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, //小时
        "H+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    let week = {
        "0": "\u65e5",
        "1": "\u4e00",
        "2": "\u4e8c",
        "3": "\u4e09",
        "4": "\u56db",
        "5": "\u4e94",
        "6": "\u516d"
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(format)) {
        format = format.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "\u661f\u671f" : "\u5468") : "") + week[date.getDay() + ""]);
    }
    for (let k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return format;
}

/**
 * 从数组中删除
 * @author 韦胜健
 * @date 2018/11/19
 */
function removeFromArray(array, target) {
    const index = array.indexOf(target)
    index > -1 && array.splice(index, 1)
}

/**
 * 获取唯一标识符
 * @author 韦胜健
 * @date 2018/11/19
 */
function uuid() {
    let s = [];
    let hexDigits = '0123456789abcdef';
    for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = '4';                                        // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);   // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = '-';

    let uuid = s.join('');
    return uuid;
}

/**
 * 填充0字符
 * @author 韦胜健
 * @date 2018/11/19
 */
function zeroize(value, length = 2) {
    let val = value + '';
    let i = length - val.length;
    while (i > 0) {
        val = '0' + val;
        i--;
    }
    return val;
}

/**
 * 转为驼峰命名
 * @author 韦胜健
 * @date 2018/11/19
 */
function camelCase(name) {
    return name
        .replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
            return offset ? letter.toUpperCase() : letter;
        }).replace(MOZ_HACK_REGEXP, 'Moz$1');
}

/**
 * 深度复制
 * @author 韦胜健
 * @date 2018/11/19
 */
function deepCopy(data) {
    const t = typeOf(data);
    let o;

    if (t === 'array') {
        o = [];
    } else if (t === 'object') {
        o = {};
    } else {
        return data;
    }

    if (t === 'array') {
        for (let i = 0; i < data.length; i++) {
            o.push(deepCopy(data[i]));
        }
    } else if (t === 'object') {
        for (let i in data) {
            o[i] = deepCopy(data[i]);
        }
    }
    return o;
}

/**
 * 去掉px,返回数字
 * @author 韦胜健
 * @date 2018/11/19
 */
function removePx(value) {
    return ((value + '').replace(/px/g, '') - 0);
}

/**
 * 判断变量类型
 * @author 韦胜健
 * @date 2018/11/19
 */
function typeOf(obj) {
    const toString = Object.prototype.toString;
    const map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    };
    return map[toString.call(obj)];
}

/**
 * 判断是否存在于数组中
 * @author 韦胜健
 * @date 2018/11/19
 */
function oneOf(val, array) {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (item === val) return true;
    }
    return false;
}

const $utils = {
    getKebabCase,                               //驼峰命名转横杠命名
    camelCase,                                  //转为驼峰命名
    addScript,                                  //引入js文件
    insertSort,                                 //插入排序
    delay,                                      //推迟时间
    dateFormat,                                 //日期格式化
    removeFromArray,                            //从数组中删除
    uuid,                                       //获取唯一标识符
    zeroize,                                    //填充0字符
    deepCopy,                                   //深度复制
    removePx,                                   //去掉px,返回数字
    typeOf,                                     //判断变量类型
    oneOf,                                      //判断是否存在于数组中
}

export default $utils