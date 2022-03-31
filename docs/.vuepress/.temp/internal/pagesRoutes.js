import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-9eee49ac","/javaScript/%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF.html",{"title":"事件循环"},["/javaScript/事件循环.html","/javaScript/%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF","/javaScript/事件循环.md","/javaScript/%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF.md"]],
  ["v-d656f7c0","/javaScript/%E5%87%BD%E6%95%B0.html",{"title":"函数"},["/javaScript/函数.html","/javaScript/%E5%87%BD%E6%95%B0","/javaScript/函数.md","/javaScript/%E5%87%BD%E6%95%B0.md"]],
  ["v-9b679492","/javaScript/%E5%8F%98%E9%87%8F%E5%92%8C%E4%BD%9C%E7%94%A8%E5%9F%9F.html",{"title":"变量和作用域"},["/javaScript/变量和作用域.html","/javaScript/%E5%8F%98%E9%87%8F%E5%92%8C%E4%BD%9C%E7%94%A8%E5%9F%9F","/javaScript/变量和作用域.md","/javaScript/%E5%8F%98%E9%87%8F%E5%92%8C%E4%BD%9C%E7%94%A8%E5%9F%9F.md"]],
  ["v-6f4f208e","/javaScript/%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%8B%B7%E8%B4%9D.html",{"title":"拷贝"},["/javaScript/对象的拷贝.html","/javaScript/%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%8B%B7%E8%B4%9D","/javaScript/对象的拷贝.md","/javaScript/%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%8B%B7%E8%B4%9D.md"]],
  ["v-99a9d582","/javaScript/%E6%89%8B%E5%86%99Promise.html",{"title":"手写 Promise"},["/javaScript/手写Promise.html","/javaScript/%E6%89%8B%E5%86%99Promise","/javaScript/手写Promise.md","/javaScript/%E6%89%8B%E5%86%99Promise.md"]],
  ["v-20a6c182","/javaScript/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html",{"title":"数据类型"},["/javaScript/数据类型.html","/javaScript/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B","/javaScript/数据类型.md","/javaScript/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md"]],
  ["v-398f9d64","/javaScript/%E7%BB%A7%E6%89%BF.html",{"title":"继承"},["/javaScript/继承.html","/javaScript/%E7%BB%A7%E6%89%BF","/javaScript/继承.md","/javaScript/%E7%BB%A7%E6%89%BF.md"]],
  ["v-0f047f68","/javaScript/%E9%98%B2%E6%8A%96%E5%92%8C%E8%8A%82%E6%B5%81.html",{"title":"防抖和节流"},["/javaScript/防抖和节流.html","/javaScript/%E9%98%B2%E6%8A%96%E5%92%8C%E8%8A%82%E6%B5%81","/javaScript/防抖和节流.md","/javaScript/%E9%98%B2%E6%8A%96%E5%92%8C%E8%8A%82%E6%B5%81.md"]],
  ["v-45db3222","/other/axios%E7%9A%84%E4%BD%BF%E7%94%A8.html",{"title":"axios 在项目中的使用"},["/other/axios的使用.html","/other/axios%E7%9A%84%E4%BD%BF%E7%94%A8","/other/axios的使用.md","/other/axios%E7%9A%84%E4%BD%BF%E7%94%A8.md"]],
  ["v-cfaa12dc","/other/vue%E5%87%BD%E6%95%B0%E5%BC%8F%E8%B0%83%E7%94%A8%E7%BB%84%E4%BB%B6.html",{"title":"函数式组件"},["/other/vue函数式调用组件.html","/other/vue%E5%87%BD%E6%95%B0%E5%BC%8F%E8%B0%83%E7%94%A8%E7%BB%84%E4%BB%B6","/other/vue函数式调用组件.md","/other/vue%E5%87%BD%E6%95%B0%E5%BC%8F%E8%B0%83%E7%94%A8%E7%BB%84%E4%BB%B6.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
