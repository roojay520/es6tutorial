module.exports = {
  title: 'ECMAScript 6 入门',
  description: '《ECMAScript 6 入门教程》是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性。',
  themeConfig: {
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    nav: [
      { text: '源码', link: 'http://github.com/ruanyf/es6tutorial/'},
      { text: '修订历史', link: 'https://github.com/ruanyf/es6tutorial/commits/gh-pages'},
      { text: '反馈意见', link: 'https://github.com/ruanyf/es6tutorial/issues'},
      {
        text: '了解更多',
        items: [
          { text: '作者：阮一峰', link: 'http://www.ruanyifeng.com/' },
          { text: '授权协议', link: 'http://creativecommons.org/licenses/by-nc/4.0/' }
        ]
      }
    ],
    sidebar: [
      ['/', '前言'],
      {
        title: '目录',
        path: '/intro',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/intro', 'ECMAScript 6简介'],
          ['/let', 'let 和 const 命令'],
          ['/destructuring', '变量的解构赋值'],
          ['/string', '字符串的扩展'],
          ['/string-methods', '字符串的新增方法'],
          ['/regex', '正则的扩展'],
          ['/number', '数值的扩展'],
          ['/function', '函数的扩展'],
          ['/array', '数组的扩展'],
          ['/object', '对象的扩展'],
          ['/object-methods', '对象的新增方法'],
          ['/symbol', 'Symbol'],
          ['/set-map', 'Set 和 Map 数据结构'],
          ['/proxy', 'Proxy'],
          ['/reflect', 'Reflect'],
          ['/promise', 'Promise 对象'],
          ['/iterator', 'Iterator 和 for...of 循环'],
          ['/generator', 'Generator 函数的语法'],
          ['/generator-async', 'Generator 函数的异步应用'],
          ['/async', 'async 函数'],
          ['/class', 'Class 的基本语法'],
          ['/class-extends', 'Class 的继承'],
          ['/module', 'Module 的语法'],
          ['/module-loader', 'Module 的加载实现'],
          ['/style', '编程风格'],
          ['/spec', '读懂规格'],
          ['/async-iterator', '异步遍历器'],
          ['/arraybuffer', 'ArrayBuffer'],
          ['/proposals', '最新提案'],
          ['/decorator', 'Decorator'],
          ['/reference', '参考链接']
        ]
      }
    ]
  }
}
