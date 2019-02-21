const pages = {
    main: resolve => require(['demo/main-page'], resolve),
    nav1: resolve => require(['demo/page/nav1'], resolve),
    nav2: resolve => require(['demo/page/nav2'], resolve),
    nav3: resolve => require(['demo/page/nav3'], resolve),
    button: resolve => require(['demo/page/button'], resolve),
    icon: resolve => require(['demo/page/icon'], resolve),
    scroll: resolve => require(['demo/page/scroll'], resolve),
    loading: resolve => require(['demo/page/loading'], resolve),
    toggle: resolve => require(['demo/page/toggle'], resolve),
    picker: resolve => require(['demo/page/picker'], resolve),
    navigator: resolve => require(['demo/page/navigator'], resolve),
};

export default Object.keys(pages).map(name => {
    return {
        name,
        component: pages[name]
    }
})