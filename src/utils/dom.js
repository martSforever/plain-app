import $utils from './utils'

/**
 * 向下查找组件
 * @author 韦胜健
 * @date 2018/11/19
 */
function findComponentsDownward(context, componentName) {
    return context.$children.reduce((components, child) => {
        if (child.$options.name === componentName) components.push(child);
        const foundChilds = findComponentsDownward(child, componentName);
        return components.concat(foundChilds);
    }, []);
}

/**
 * 向上查找组件
 * @author 韦胜健
 * @date 2018/11/19
 */
function findComponentsUpward(context, componentName) {
    let parents = [];
    const parent = context.$parent;
    if (parent) {
        if (parent.$options.name === componentName) parents.push(parent);
        return parents.concat(findComponentsUpward(parent, componentName));
    } else {
        return [];
    }
}

/**
 * 向上查找一个组件
 * @author 韦胜健
 * @date 2018/11/19
 */
function findComponentUpward(context, componentName, componentNames) {
    if (typeof componentName === 'string') {
        componentNames = [componentName];
    } else {
        componentNames = componentName;
    }

    let parent = context.$parent;
    let name = parent.$options.name;
    while (parent && (!name || componentNames.indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
    }
    return parent;
}

/**
 * 是否包含某种样式class
 * @author 韦胜健
 * @date 2018/11/19
 */
function hasClass(cls, clsList) {
    return $utils.oneOf(cls, clsList.value.split(' '));
}

/**
 * 添加class
 * @author 韦胜健
 * @date 2018/11/19
 */
function addClass(el, cls) {
    if (!el) return;
    let curClass = el.className;
    const classes = (cls || '').split(' ');

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.add(clsName);
        } else {
            if (!hasClass(el, clsName)) {
                curClass += ' ' + clsName;
            }
        }
    }
    if (!el.classList) {
        el.className = curClass;
    }
}

/**
 * 删除class
 * @author 韦胜健
 * @date 2018/11/19
 */
function removeClass(el, cls) {
    if (!el || !cls) return;
    const classes = cls.split(' ');
    let curClass = ' ' + el.className + ' ';

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.remove(clsName);
        } else {
            if (hasClass(el, clsName)) {
                curClass = curClass.replace(' ' + clsName + ' ', ' ');
            }
        }
    }
    if (!el.classList) {
        el.className = curClass.trim();
    }
}

/**
 * 在元素节点后面添加新的节点
 * @author 韦胜健
 * @date 2018/11/19
 */
function insertAfter(newEl, targetEl) {
    let parentEl = targetEl.parentNode;
    if (parentEl.lastChild === targetEl) {
        // 如果最后的节点是目标元素，则直接添加。因为默认是最后
        parentEl.appendChild(newEl);
    } else {
        //如果不是，则插入在目标元素的下一个兄弟节点 的前面。也就是目标元素的后面
        parentEl.insertBefore(newEl, targetEl.nextSibling);
    }
}

const $dom = {
    findComponentsDownward,
    findComponentsUpward,
    findComponentUpward,
    hasClass,
    addClass,
    removeClass,
    insertAfter,
}

export default $dom
