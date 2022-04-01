import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
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
    contributors: false,
    contributorsText: '作者',
    lastUpdatedText: '最近更新',
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