export default {
  themeConfig: {
    siteTitle: false,
    nav: [
      { text: "指南", link: "/guild/installation",activeMatch: '/guide' },
      { text: "组件e", link: "/component/icon",activeMatch: '/component' },
    ],
    socialLinks: [{ icon: "github", link: "https://gitee.com/geeksdidi" }],
    sidebar: {
      '/guide': [
        {
          text: '指南',
          items: [
            { text: "安装", link: "/guild/installation",activeMatch: '/guide' },
            // { text: "快速开始", link: "/component/icon",activeMatch: '/component' },
          ]
        }
      ],
      '/component/': [
        {
          text: '基础组件',
          items: [{text: 'Icon', link:'/component/icon'}]
        }
      ]
    }
  },
}
