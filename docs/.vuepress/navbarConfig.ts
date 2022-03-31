import type { NavbarItem, NavbarGroup } from '@vuepress/theme-default'
type MyNavBarItem = NavbarItem | NavbarGroup
export const navbar: MyNavBarItem[] = [
  {
    text: '技术类型',
    children: [
      {
        text: "JavaScript",
        link: '/javaScript/数据类型.html'
      }
    ]
  },
  {
    text: '工作相关',
    children: [
      {
        text: 'Axios',
        link: '/axios'
      }
    ]
  }
] 