# 函数式组件

在当今前后端分离的项目之中，组件化开发已经越来越重要，划分不同的组件，可以让我们的代码更好的维护，减少代码冗余等。那么我们平时是怎么定义组件的呢？

## 普通定义组件

首先我们定义一个组件，并导出该组件

```vue
<template>
  <div class="loading">
    <span>加载中</span>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {};
  },
};
</script>
```

然后我们在别的组件中使用该组件，在使用时，我们首先应该导入该组件，然后进行注册，就可以使用了。

```vue
<template>
  <div class="home">
    <Loading />
  </div>
</template>

<script>
import Loading from "./components/loading";

export default {
  name: "Home",
  components: {
    Loading,
  },
  data() {
    return {};
  },
};
</script>
```

像这种`Loading`组件或是其它一些复用率高的组件，我们每次调用时，都需要去`导入`然后`注册`才可以使用，极其不方便，在一些**组件库**中，我们经常可以看到一些类似消息提醒的组件的使用方式。如`ElementUI`的`Message`，我们在使用时，只需要这样调用。

```js
this.$message({
  type: "success",
  message: "成功",
});
```

这样的调用方式，给我们带来了很大的便利，节约了很多引入导出的代码。那么如何实现像这种一样的调用组件的方式呢？就需要我们来看一下`Vue函数式组件的调用`。
