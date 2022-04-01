export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroImage": "/images/study.png",
    "heroText": "Sober",
    "tagline": null,
    "actions": [
      {
        "text": "进入专题",
        "link": "/javaScript/数据类型.html",
        "type": "primary"
      },
      {
        "text": "想了解作者?",
        "link": "/",
        "type": "secondary"
      }
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1648720637000
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
