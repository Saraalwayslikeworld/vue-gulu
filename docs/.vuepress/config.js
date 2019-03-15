module.exports = {
  title: '轮子',
  description:'一套简单好用的UI组件库',
  themeConfig: {
    sidebar: [
      '/install/',
      '/get-started/',
      {
        title:'组件',
        children: [
          '/components/icon',
          '/components/button',
          '/components/input',
          '/components/layout',
          '/components/container',
          '/components/collapse',
          '/components/popover',
          // '/components/button',
          // '/components/button',
          // '/components/button',
        ]
      }
    ],
    nav: [
      { text: '指南', link: '/install/' },
      { text: '组件', link: '/components/' },
      { text: '源码', link: 'https://google.com' },
    ]
  }
}