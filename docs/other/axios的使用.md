# axios 在项目中的使用

## 项目结构

```json
├─  src
|  ├─ common
|  |   └ https.js   封装axios的文件
|  ├─ api
|  |  ├─ detail.js  按照功能划分接口请求并封装
|  |  └  home.js
```

一般情况下，我们会将 axios 先进行封装，配置 axios 的`响应器`以及`拦截器`，然后根据**不同的接口请求**，再分成多个文件进行封装。

## 请求方法

当我们有一个请求方法时，我们可以将它写到对应板块的`js文件`中，并导出。比如我们有一个**请求详情**的接口。

```js
export function getDetail({ params, headers }) {
  return http.get("接口地址url", {
    params,
    headers,
  });
}
```

## 调用接口

当我们封装好 axios 请求之后，如何在**Vue**不同的**组件**或**页面**中使用呢？

- 当我们想调用`getHome`请求时
- 当我们想调用`getDetail`请求时

```js
// @ 是给路径取的别名
import { getHome } from "@/api/home";
import { getDetail } from "@/api/detail";
```

当然，通过这种方式**引入**也有一些麻烦，因为我们每次引入**不同模块**的请求都需要写一行**import**，我们可以通过在**api 文件夹下新增 index.js 文件**，在**index.js**中将所有请求模块导出。

```js
export * from "./home";
export * from "./detail";
```

这样我们在使用的时候就可以直接引入**index.js**文件，可以简写为：

```js
import { getHome, getDetail } from "@/api";
```

## 封装 axios 基本配置

上面说了那么多，其实一切都基于我们的`axios`，如何把`axios`封装成可以让上述需求共享的呢？

```js
// 导入axios包,qs包
import axios from "axios";
import qs from "qs";

// 创建axios的实例
const http = axios.create({
  timeout: 10000,
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: "repeat" });
  },
});

// 导出http
export default http;
```

其中`timeout`代表 axios 的响应时间，单位为`毫秒`，超出时间后，会请求超时，抛出异常。

qs 是处理参数的包，通过`qs.stringify`可以将传入的`对象参数或数组参数`序列化成 URL 的形式。通过`qs.parse`可以将 URL 解析成对象形式。

## axios 的 baseURL

### 一个域名地址

如果你的项目所有的请求都只在一个接口域名下，只有测试和生产环境的区别的话，那么可以配置一下 baseURL，这种情况可以通过 node 的环境变量来匹配 BaseURL。

```js
http.default.baseURL =
  process.env.NODE_ENV === "development" ? "测试URL" : "生产URL";
```

axios 帮助我们发出请求的**实际地址**就是**baseURL** + **request url**，比如我们的接口地址为`https://test.com/detail`，我们把**baseURL**配置为`https://test.com`,配置完**baseURL**后我们就可以这么写。

```js
export function getDetail({ params, headers }) {
  return http.get("/detail", {
    params,
    headers,
  });
}
```

### 多个域名地址

如果项目中需要请求多个域名地址，并且**测试环境和生产环境不同**，我们可以用一个公共文件将它们导出，然后在不同文件**按需引入**。

```js
let HOME_URL = "https://home.com";
let DETAIL_URL = "https://detail.com";

if (process.env.NODE.ENV === "development") {
  HOME_URL = "https://test-home.com";
  DETAIL_URL = "https://test-detail.com";
}

export { HOME_URL, DETAIL_URL };
```

假如公共文件名为`baseURL.js`，当我们需要使用时，可以按需导入。

```js
import http from "@/common/http.js";
import { DETAIL_URL } from "@/common/baseURL.js";

export function getDetail({ params, headers }) {
  return http.get(`${DETAIL_URL}/detail`, {
    params,
    headers,
  });
}
```

## 拦截器

在我们发起请求的过程中，我们可能需要对`请求头`或者对一些`权限判断`进行处理，这个时候就用到了 axios 的**拦截器**。

比如给我们的请求头加上 token

```js
// http 代表了axios的实例
http.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("token");
    if (token) {
      // 一般都会使用Bearer空格+token的方式来放进请求头
      config.headers.Authorization = "Bearer " + token;
    }
  },
  (err) => {
    return Promise.reject(err);
  }
);
```

这时候，每当我们发请求的时候，就会判断是否有 token 的存在，如果有，则携带 token 进行请求，如果没有，就会抛出异常。通常用来判断用户是否进行登录，或者是否有权限进行某些请求。

## 响应器

我们发出的请求有可能会发送失败或者请求失败，这时，axios 的响应器会帮助我们做一些公共的处理，比如后台传过来的响应码是 401，我们该如何给用户展示？如果是 402 呢？响应器就可以对这些公共的错误信息进行统一处理。

```js
http.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    // 捕获错误，比如错误码为401
    if (err.response.status === 401) {
      alert("当前账户没有权限，请重新登录");
    }
    return Promise.reject(err);
  }
);
```

## 完整的封装

在我们的项目中，有一些请求在请求的过程中可能需要我们**不进行任何操作**，比如一些**发放，删除等操作**，那么我们就需要在请求时通过一些 UI 组件库加上 loading，在请求结束后结束 loading。

```js
import axios from "axios";
import qs from "qs";
import { Loading, Message } from "element-ui";

const http = axios.create({
  timeout: 10000,
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: "repeat" });
  },
});

let loading;
http.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("token");
    config.headers.Authorization = "Bearer " + token;
    // 传参如果noLoading是false
    if (!config?.noLoading) {
      // 如果有loading，就取消
      if (loading) {
        loading?.close();
      }
      loading = Loading.service({
        lock: true,
        target: config?.el || document.body,
        text: "数据正在加载中",
        spinner: "el-icon-loading",
        background: "transparent",
        customClass: "loading",
      });
    }
    return config;
  },
  (error) => {
    loading?.close();
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  // 响应成功
  (response) => {
    loading?.close();
    return response.data;
  },
  (error) => {
    loading?.close();
    switch (error?.response?.status) {
      case 401:
        Message.error("请先登录");
        localStorage.removeItem("token");
        location.href = "/";
        break;
      case 412:
        Message.error("密码输入错误");
        break;
      case 403:
        Message.error("权限不足,请调整后重试");
    }
    return Promise.reject(error);
  }
);

export default http;
```
现在我们如何发出请求呢?

``` js
import http from '@/common/http'
import { DETAIL_URL } from '@/common/baseURL.js'

export function getDetail({ params,headers }) {
  return http.get(`${DETAIL_URL}/detail`, {
    params,
    headers,
    el, // 新增的config,用来确定loading动画挂载在哪个元素上
    noLoading: false // false代表需要loading,true代表不需要loading
  })
}
```
在组件中我们可以这样使用:
``` js
import {getDetail} from '@/api'

_getDetail() {
  getDetail({params,headers,el:'#body'}).then(() => {
    // #body就是loading动画挂载的元素
  }).catch(err => {
    console.log(err)
  })
}
```

## config的优先级
上述代码，我们封装了timeout为10000毫秒，如果产生下面的情况呢？
``` js
export function test() {
  return http.get(`https://test.com`, {
    timeout: 20000
  })
}
```

在这个请求中，新传了一个timeout，那么axios的拦截器在请求的时候，会将新的timeout覆盖旧的timeout，也就是说，这个响应的超时时间会变成**20000**毫秒。

综上所述，新建axios实例的基本配置的优先级要低一点，传入参数的优先级更高。