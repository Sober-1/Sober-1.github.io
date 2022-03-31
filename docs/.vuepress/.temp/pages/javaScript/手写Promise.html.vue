<template><h1 id="手写-promise" tabindex="-1"><a class="header-anchor" href="#手写-promise" aria-hidden="true">#</a> 手写 Promise</h1>
<h2 id="了解-promise" tabindex="-1"><a class="header-anchor" href="#了解-promise" aria-hidden="true">#</a> 了解 Promise</h2>
<p>在我们手写 Promise 之前，我们得先知道这是个什么东西？推荐大家去<code>MDN</code>查看对<code>Promise</code>的介绍。<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noopener noreferrer">MDN-Promise<ExternalLinkIcon/></a></p>
<p>Promise 的设计，是为了解决<code>回调地狱</code>的问题，使用 Promise，我们可以链式调用，让代码看起来更加简洁，方便维护。</p>
<p>Promise 有着它自己的规范，这里借鉴<a href="https://promisesaplus.com/" target="_blank" rel="noopener noreferrer">Promise/A+<ExternalLinkIcon/></a>里的规范，大家也可以自己去看。</p>
<h3 id="_1-术语" tabindex="-1"><a class="header-anchor" href="#_1-术语" aria-hidden="true">#</a> 1. <strong>术语</strong></h3>
<ul>
<li>“Promise” 是一个符合<code>promise规范</code>并且定义了<code>then方法</code>的一个对象或者函数。</li>
<li>“thenable” 是定义了 then 方法的对象或函数。</li>
<li>value 是任意合法的 JavaScript 值（包括 undefined、thenable 或者是 promise）。</li>
<li>“exception” 是使用 throw 语句抛出的值。</li>
<li>“reason”是一个值，表示拒绝 Promise 的原因。</li>
</ul>
<h3 id="_2-promise-状态" tabindex="-1"><a class="header-anchor" href="#_2-promise-状态" aria-hidden="true">#</a> 2. <strong>Promise 状态</strong></h3>
<p>一个 Promise 必须为三种状态的其中之一：pending、fulfilled、rejected。</p>
<ul>
<li>
<p>pending 状态的 Promise 可以转换为 fulfilled 或是 rejected 状态</p>
</li>
<li>
<p>fulfilled 状态的 Promise 无法再更改状态，且必须包含一个 value</p>
</li>
<li>
<p>rejected 状态的 Promise 无法再更改状态，且必须包含一个 reason</p>
</li>
</ul>
<h3 id="_3-then-方法" tabindex="-1"><a class="header-anchor" href="#_3-then-方法" aria-hidden="true">#</a> 3. <strong>then 方法</strong></h3>
<p>Promise 必须提供一个 then 方法来访问当前或者是最终的 value 或者是 reason</p>
<p>then 方法接收两个可选的函数作为参数，如果任一参数不为函数，那么此参数将被忽略</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>onFulfilled<span class="token punctuation">,</span> onRejected<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
