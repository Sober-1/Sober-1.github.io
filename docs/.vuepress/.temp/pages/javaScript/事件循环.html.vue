<template><h1 id="事件循环" tabindex="-1"><a class="header-anchor" href="#事件循环" aria-hidden="true">#</a> 事件循环</h1>
<p>js是一门单线程语言，代码的执行过程由上而下依次执行。因此当遇到一些耗时的操作，进程就会被阻塞，下面的代码都将不能执行，如何解决这种情况呢？JavaScript将任务分为了<code>同步任务</code>以及<code>异步任务</code>。</p>
<ul>
<li><strong>同步任务</strong>指的是，所有任务都在一个进程中，只有执行完上一个任务，才可以执行下一个任务，同步任务一般在主线程执行。</li>
<li><strong>异步任务</strong> 指的是不进入主线程，而是通过调用web api先进入<strong>任务队列</strong>进行等待，然后在特定时机进入主线程开始执行。</li>
</ul>
<h2 id="函数调用栈" tabindex="-1"><a class="header-anchor" href="#函数调用栈" aria-hidden="true">#</a> 函数调用栈</h2>
<p>在我们学习JavaScript的事件循环之前，我们需要先了解一下JavaScript中函数的执行过程。函数的执行过程其实是一个<code>压栈</code>的过程。我们可以把<code>栈结构</code>比喻成一个桶，我们往里面塞东西，先塞进去的东西被压在下面，如果想把它拿出来，必须把上面的东西全拿出来才能拿最下面的。因此<code>栈结构</code>最显著的特点就是<code>先进后出</code>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span>num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">result</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">result</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>这段代码的出入栈顺序是怎样的呢？</p>
<p><img src="/img/函数栈demo.png" alt="fun"></p>
<p>有人会问？代码中明明是<strong>函数add</strong>定义在<strong>函数result</strong>之前，为什么入栈顺序相反呢？这是因为当函数<strong>未执行的时候</strong>并不会<strong>进入函数栈</strong>。</p>
<p>这段代码的意思其实是这样的，console.log其实也是一个函数，它执行完会立刻出栈，因此上图其实是不需要画console.log的。紧接着，我们定义了add函数和result函数，这时我们并没有执行这两个函数，因此这两个函数也未入栈。接下来我们<strong>执行了result函数</strong>，result函数入栈，<strong>开始执行result函数</strong>，在result函数内部<strong>执行了add函数</strong>，此时<strong>add函数入栈</strong>，<strong>开始执行add函数</strong>，执行完毕后，<strong>add函数出栈</strong>，紧接着<strong>执行result函数</strong>剩下的代码，打印出res，<strong>result函数执行完毕并出栈</strong>，此时函数栈清空，执行完毕所有函数。这就是<code>函数压栈</code>的过程，先进后出。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><code>主线程</code>上的函数就是通过<code>函数栈</code>的方式来执行的。</p>
</div>
<h2 id="settimeout" tabindex="-1"><a class="header-anchor" href="#settimeout" aria-hidden="true">#</a> setTimeout</h2>
<ul>
<li>setTimeout执行时也会被<strong>压入函数栈</strong>，进入函数栈后会<strong>马上弹出函数栈</strong>。</li>
<li>setTimeout不会阻塞后续代码的执行，原因就是<strong>浏览器的事件循环</strong>。</li>
</ul>
<p>问题来了，既然setTimeout进入函数栈后立马出栈，那么它的<strong>回调函数</strong>什么时候执行呢？</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'setTimeout回调'</span><span class="token punctuation">)</span><span class="token comment">// ? 何时执行</span>
<span class="token punctuation">}</span>，<span class="token number">1000</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>假如我们称<strong>setTimeout</strong>的回调函数为<code>timer</code>，那么在合适的时机(比如我们设置的回调时间为1000毫秒)调用浏览器内部的web api，将<code>timer</code>加入到<strong>任务队列</strong>(Event Queue)。</li>
<li><strong>任务队列</strong>中存放的函数<strong>先进先出</strong>，轮到谁执行的时候，会将它们<strong>放入主进程的函数调用栈中</strong>，在调用栈中执行。</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><code>定时器</code>、<code>dom监听</code>、<code>ajax请求</code>的回调函数都会被存放在<strong>任务队列</strong>中。</p>
</div>
<p>综上所述，在JavaScript中，同步任务和异步任务分别进入不同的执行环境。<strong>同步任务进行主线程</strong>，<strong>异步任务进入任务队列</strong>，等到<strong>主线程的任务执行完毕后</strong>，会去<strong>任务队列</strong>取出合适时机的任务，将它放入<strong>主线程的函数调用栈</strong>中执行，这个过程就是<strong>事件循环</strong>。</p>
<h2 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h2>
<p><strong>Promise</strong>对象的<strong>回调函数的函数体</strong>会在<strong>主进程</strong>执行的时候同时执行，但是<code>Promise.then</code>,
<code>Promise.catch</code>，<code>Promise.finally</code>，<code>Promise.resolve()</code>，<code>Promise.reject()</code>会被加入到任务队列中执行。</p>
<h2 id="async" tabindex="-1"><a class="header-anchor" href="#async" aria-hidden="true">#</a> async</h2>
<ul>
<li>async会做什么呢？函数之前加上async关键字，函数的返回值就会隐式的返回一个<strong>promise对象</strong>，如下代码：</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'test'</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// Promise {&lt;fulfilled>: "test"}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>可以看到，当函数test加上async关键字时，返回值会被Promise对象包裹。</p>
<h3 id="await是什么" tabindex="-1"><a class="header-anchor" href="#await是什么" aria-hidden="true">#</a> await是什么？</h3>
<ul>
<li>await关键字只能在带有async关键字的函数内部使用，在外部使用时会报错。</li>
<li><strong>await</strong> 表示的是 <strong>等待</strong> , await等待的是右侧的[表达式结果]，如果右侧是一个函数，等待的是右侧函数的返回值，如果右侧的表达式不是函数则直接是右侧的表达式。await在等待时会让出线程阻塞后面的执行。await的执行顺序为从右到左，会阻塞await语句后面的代码执行，但并不是直接阻塞await的表达式。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// await后跟函数</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 不会阻塞test1的执行</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'test'</span><span class="token punctuation">)</span> <span class="token comment">// 会阻塞</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'test1'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// test1 => test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>当await后<strong>跟一个函数时</strong>，await会<strong>等待函数的返回值</strong>，因此，test1函数不会被阻塞，会进入主线程执行，之后的任务被加入<strong>任务队列中</strong>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token number">3</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'test'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'test1'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 输出：test1 => 1 => 3 => test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>我们可以发现，当await后跟的<strong>不是一个函数时</strong>，await会立马<strong>让出线程</strong>，先让后边的同步代码执行，将<strong>await语句之后，async函数中剩下的任务放入任务队列</strong>。</p>
<p>在ES最新的标准中，<strong>await</strong>和**Promise.resolve()**语义一致。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token number">3</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 等价于</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>从这里我们可以理解，<strong>await</strong>后跟的内容，其实是作为<strong>resolve的参数</strong>，传入到<strong>Promise.then()中</strong>，因此它不会被阻塞，而<strong>执行完await</strong>之后的内容，即let res = await 3 下面的 console.log(res)其实相当于在<strong>Promise.then()中执行</strong>，因此会被加入**任务队列。</p>
<p>既然这样我们就可以这么来理解，<strong>await后的函数</strong>我们可以把它当做<strong>Promise的回调函数的主体</strong>，<strong>不会加入到任务队列</strong>，会<strong>立即执行</strong>，而<strong>await那一句代码之后的函数</strong>，相当于<strong>Promise.then()包裹的内容</strong>，会被加入到任务队列，<strong>异步执行</strong>。</p>
<h2 id="宏任务和微任务" tabindex="-1"><a class="header-anchor" href="#宏任务和微任务" aria-hidden="true">#</a> 宏任务和微任务</h2>
<p>任务队列并<strong>不是只有一个队列</strong>，它可以细分为<strong>宏任务队列(macrotask queue)<strong>和</strong>微任务队列(microtask queue)</strong>。</p>
<ul>
<li><strong>宏任务队列</strong>常见的有<code>DOM的监听</code>，<code>setTimeout</code>，<code>setInterval</code>，<code>ajax</code>等。</li>
<li><strong>微任务队列</strong>常见的有<code>Promise</code>，<code>queueMicrotask()</code>等。</li>
</ul>
<p>宏任务队列和微任务队列的执行顺序又是怎样的呢？</p>
<ol>
<li>执行<strong>微任务队列</strong>，将<strong>微任务队列</strong>中的任务执行完毕。</li>
<li>执行<strong>宏任务队列</strong>，执行完<strong>宏任务队列中的第一个任务</strong>。</li>
<li>查看<strong>微任务队列是否有新加入的微任务</strong>。</li>
<li>如果<strong>没有新增</strong>，继续执行<strong>宏任务的下一个任务</strong>，如果<strong>微任务队列有新增任务</strong>，继续执行<strong>微任务队列中的所有任务</strong>。</li>
<li>重复<strong>步骤3和步骤4</strong>。</li>
<li>执行完毕任务队列中所有任务。</li>
</ol>
<p>我们来通过一段代码来体验一下<strong>事件循环</strong>以及<strong>任务队列</strong>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'set1'</span><span class="token punctuation">)</span>
    <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'then4'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'then2'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'promise1'</span><span class="token punctuation">)</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'then1'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'set2'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'log'</span><span class="token punctuation">)</span>

<span class="token comment">// 自定义微任务</span>
<span class="token function">queueMicrotask</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'queueMicrotask'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'then3'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>我们来看一下上述代码的执行过程：</p>
<ol>
<li>执行setTimeout函数，回调函数(set1)放入宏任务队列</li>
<li>执行new Promise，因为promise回调函数的主体会放入主进程执行，因此打印出<strong>promise1</strong>，
接下来执行resolve()，进入promise.then，promise.then的回调(then1)被放入微任务队列</li>
<li>执行setTimeout函数，回调函数(set2)放入宏任务队列</li>
<li>执行console.log函数，进入主进程，打印出log</li>
<li>自定义微任务，微任务(queueMicrotask)进入微任务队列</li>
<li>执行new Promise，执行resolve(),进入promise.then，(then3)被放入微任务队列</li>
</ol>
<p>至此，我们可以得到此时的情况：</p>
<p>已打印：promise1，log</p>
<p>微任务队列：then1,，queueMicrotask，then3</p>
<p>宏任务队列：set1，set2</p>
<p>继续执行微任务队列中的任务：</p>
<ol>
<li>执行console.log('then1')，放入函数调用栈打印出then1</li>
<li>执行console.log('queueMicrotask')，打印出queueMicrotask</li>
<li>执行console.log('then3')，打印出then3</li>
<li>微任务执行完毕，开始执行宏任务set1，首先执行console.log('set1')，打印出set1，紧接着执行new Promise，执行resolve，进入promise.then，将new Promise放入微任务队列，此时微任务队列新增了任务，因此会继续执行new Promise，再次调用resolve，将then4加入到微任务队列，此时then2在主线程执行，因此会打印出then2。回头继续执行微任务，打印出then4，微任务队列再次清空，开始执行宏任务。</li>
<li>执行console.log('set2')打印出set2</li>
<li>任务队列执行完毕，代码执行完成</li>
</ol>
<p>从上述过程可得知最后的结果为 promise1 =&gt; log =&gt; then1 =&gt; queueMicrotask =&gt; then3 =&gt; set1 =&gt; then2 =&gt; then4 =&gt; set2</p>
</template>
