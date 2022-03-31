import { defineUserConfig } from 'vuepress-webpack'
import type { DefaultThemeOptions } from 'vuepress-webpack'
import { navbar } from './navbarConfig'
import { sidebar } from './sidebarConfig'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',
  title: 'Sober',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
    '/en/': {
      lang: 'en-US'
    },
  },
  themeConfig: {
    logo: '/images/study.png',
    logoDark: '/images/study.png',
    repo: 'https://baidu.com',
    repoLabel: 'Gitee',
    navbar,
    sidebar,
    locales: {
      '/': {
        selectLanguageText: '切换语言',
        selectLanguageName: '简体中文',
      },
      '/en/': {
        selectLanguageText: 'Languages',
        selectLanguageName: 'English',
      },
    },
  },
})