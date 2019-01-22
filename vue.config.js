const path = require('path')
const resolve = (dir) => path.join(__dirname, '.', dir)

module.exports = {
    baseUrl: './',
    lintOnSave: false,
    outputDir: resolve('page'),
    pages: {
        index: {
            // page 的入口
            entry: 'demo/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'demo.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'lv-app demo',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        portal: {
            // page 的入口
            entry: 'portal/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'lv-app portal',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'portal']
        },
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                'src': resolve('src'),
                'demo': resolve('demo'),
            }
        },
    },
    css: {
        loaderOptions: {
            sass: {
                data: `@import "src/styles/global.scss";`
            }
        }
    },
    chainWebpack: config => {
        config.plugins.delete('prefetch-index')
        config.plugins.delete('prefetch-portal')
    }
}