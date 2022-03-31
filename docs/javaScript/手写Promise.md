# 手写 Promise

## 了解 Promise

在我们手写 Promise 之前，我们得先知道这是个什么东西？推荐大家去`MDN`查看对`Promise`的介绍。[MDN-Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Promise 的设计，是为了解决`回调地狱`的问题，使用 Promise，我们可以链式调用，让代码看起来更加简洁，方便维护。

Promise 有着它自己的规范，这里借鉴[Promise/A+](https://promisesaplus.com/)里的规范，大家也可以自己去看。

### 1. **术语**

- “Promise” 是一个符合`promise规范`并且定义了`then方法`的一个对象或者函数。
- “thenable” 是定义了 then 方法的对象或函数。
- value 是任意合法的 JavaScript 值（包括 undefined、thenable 或者是 promise）。
- “exception” 是使用 throw 语句抛出的值。
- “reason”是一个值，表示拒绝 Promise 的原因。

### 2. **Promise 状态**

一个 Promise 必须为三种状态的其中之一：pending、fulfilled、rejected。

- pending 状态的 Promise 可以转换为 fulfilled 或是 rejected 状态

- fulfilled 状态的 Promise 无法再更改状态，且必须包含一个 value

- rejected 状态的 Promise 无法再更改状态，且必须包含一个 reason

### 3. **then 方法**

Promise 必须提供一个 then 方法来访问当前或者是最终的 value 或者是 reason

then 方法接收两个可选的函数作为参数，如果任一参数不为函数，那么此参数将被忽略

```js
Promise.then(onFulfilled, onRejected);
```
