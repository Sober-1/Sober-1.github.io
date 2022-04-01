export const themeData = {
  "logo": "/images/study.png",
  "logoDark": "/images/study.png",
  "repo": "https://baidu.com",
  "repoLabel": "Gitee",
  "contributors": false,
  "contributorsText": "作者",
  "lastUpdatedText": "最近更新",
  "navbar": [
    {
      "text": "技术类型",
      "children": [
        {
          "text": "JavaScript",
          "link": "/javaScript/数据类型.html"
        }
      ]
    },
    {
      "text": "工作相关",
      "children": [
        {
          "text": "Axios",
          "link": "/axios"
        }
      ]
    }
  ],
  "sidebar": {
    "/javaScript": [
      {
        "text": "JavaScript",
        "collapsible": true,
        "children": [
          "/javaScript/数据类型.md",
          "/javaScript/变量和作用域.md",
          "/javaScript/函数.md",
          "/javaScript/事件循环.md",
          "/javaScript/继承.md",
          "/javaScript/对象的拷贝.md",
          "/javaScript/防抖和节流.md",
          "/javaScript/手写Promise.md"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageText": "切换语言",
      "selectLanguageName": "简体中文"
    },
    "/en/": {
      "selectLanguageText": "Languages",
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
