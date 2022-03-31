<template><h1 id="变量和作用域" tabindex="-1"><a class="header-anchor" href="#变量和作用域" aria-hidden="true">#</a> 变量和作用域</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>在 JavaScript 中, 作用域为可访问变量，对象，函数的集合。</p>
<p>作用域的字面意思就是，代码块只在某一区域起作用。</p>
</div>
<h2 id="了解-var、let、const" tabindex="-1"><a class="header-anchor" href="#了解-var、let、const" aria-hidden="true">#</a> 了解 var、let、const</h2>
<p>在学习作用域之前，我们首先要了解 js 中常用声明一个<strong>变量</strong>或<strong>常量</strong>的方式。</p>
<p>在 ES6 之前，我们的代码中，声明一个变量的方式，无论是字符串或者是对象等。都是使用 <code>var 变量名 = xxx</code> 的格式。直到 <strong>let</strong> 和 <strong>const</strong> 的出现，我们的代码才更加规范起来。</p>
<p>那么它们直接有什么区别呢？</p>
<p><code>var</code>：声明一个<strong>变量</strong>，在该变量被声明之后，可以在下文代码中对该变量进行重新赋值，并<strong>覆盖</strong>原有值。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 输入</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>

a <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>let</code>：声明一个<strong>变量</strong>，和<code>var</code>的作用基本一致，不过使用<code>let</code>声明的变量，只在<strong>当前块级作用域</strong>可以使用。
<code>const</code>: 和<code>let</code>基本一致，都是<strong>只在块级作用域生效</strong>，但表示声明一个<strong>常量</strong>，顾名思义，常量代表着不可以被改变的值，一旦被赋值，就不可修改,否则就会抛出异常。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 输入</span>
<span class="token keyword">const</span> <span class="token constant">BASE</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token constant">BASE</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">BASE</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Uncaught TypeError: Assignment to constant variable.报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>通常我们的常量都会使用大写字母，多个字符可以用下划线（_）进行分割，但是在日常开发中，即使是 const 声明的常量，我们也经常会使用小写字母，只需保证该常量不会被以其它方式修改就可以</p>
</div>
<h2 id="全局变量" tabindex="-1"><a class="header-anchor" href="#全局变量" aria-hidden="true">#</a> 全局变量</h2>
<ul>
<li><strong>最外层的函数</strong>以及<strong>在最外层函数外定义的变量</strong>,拥有<code>全局作用域</code>,可以称之为<strong>全局变量</strong>。</li>
<li>所有没有通过<strong>var</strong>关键字声明的变量都会默认提升为<strong>全局变量</strong>。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  b <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123  456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>通过上述代码我们可知，<strong>b 明明写在函数 test 内</strong>，按理说<strong>b 应该只能在函数 test 局部使用</strong>，但是因为没有<strong>使用 var</strong>关键字，<strong>b 被默认提升为了全局变量</strong>。</p>
<h2 id="局部变量" tabindex="-1"><a class="header-anchor" href="#局部变量" aria-hidden="true">#</a> 局部变量</h2>
<ul>
<li>声明在<strong>函数内部的变量</strong>，和全局变量相反，局部变量一般只拥有<strong>局部作用域</strong>，最常见的例如函数内部。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123  b is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>上述代码我们可知，当使用<strong>var</strong>关键字声明变量 b 的时候，<strong>变量 b 被定义在函数 test 的局部作用域中</strong>，只可在<strong>test 内部访问</strong>，外部无法访问，此时的变量 b 为<strong>局部变量</strong>。</p>
<h2 id="全局作用域" tabindex="-1"><a class="header-anchor" href="#全局作用域" aria-hidden="true">#</a> 全局作用域</h2>
<ul>
<li>一个<code>js文件</code>或一个<code>script</code>标签之中的内容，都可以称之为<code>全局</code>，这一块区域之中定义的所有<code>变量或常量</code>，都处于<strong>全局作用域</strong>中，这个文件共享某个变量。</li>
<li><code>全局作用域</code>在<strong>页面打开的时候创建</strong>，在<strong>页面关闭时销毁</strong>。</li>
<li>在全局作用域中有一个全局对象 <strong>window</strong>（代表的是一个浏览器的窗口，由浏览器创建），可以直接使用。如我们经常使用的<code>console</code>以及<code>alert</code>函数，就是<code>window对象</code>中的函数。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123</span>
<span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>从上述例子我们可以看出，当我们在<strong>一个 js 文件中定义了变量 a 的值</strong>，无论是在<strong>函数 test 还是在函数 test1</strong>中都可以访问到 a 的值，并进行打印，因此我们可以知道，定义在全局作用域中的变量，在<code>这个js文件</code>中是共享的，任何函数都可以访问。</p>
<h2 id="局部作用域" tabindex="-1"><a class="header-anchor" href="#局部作用域" aria-hidden="true">#</a> 局部作用域</h2>
<ul>
<li><code>局部作用域</code>，顾名思义，就是代表<strong>只作用在某一块区域内</strong>，在<code>局部作用域</code>定义的内容，<strong>只在这一区域可以访问，外部无法访问局部作用域</strong>。</li>
<li><code>局部作用域</code>也可以成为<code>函数作用域</code>，一般在<code>调用函数</code>的时候生成<code>局部作用域</code>，局部作用域中的内容，在<code>函数调用完成后</code>销毁。</li>
<li><strong>每调用一次函数</strong>就会创建一个<strong>新的函数作用域</strong>，它们之间是<strong>相互独立的</strong>。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token string">"全局"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123  '全局'</span>
<span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// '全局'  a is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>上述代码我们可以看出，在<code>函数外部</code>定义<strong>全局变量 b</strong>，在<code>函数test内部</code>定义<strong>局部变量 a</strong>，结果 b 可以同时被 test 和 test1 所访问，而 a 只能被 test 所访问，就是因为<strong>变量 a 处于函数 test 的局部作用域中，外部无法访问</strong>。</p>
<p>为什么在函数 test1 中我们先打印 b 再打印 a 呢？这是因为<code>js是单线程的</code>，如果我们先打印 a，而找不到 a，就会抛出异常，停止执行下面的代码，我们的 b 就打印不出来了。</p>
<h2 id="块级作用域" tabindex="-1"><a class="header-anchor" href="#块级作用域" aria-hidden="true">#</a> 块级作用域</h2>
<ul>
<li>为了解决 ES5 中，变量提升，导致<strong>内部变量</strong>覆盖<strong>外部变量</strong>的情况，ES6 中出现了新的<strong>声明变量的方式</strong>，就是开头我们所说的<code>let</code>和<code>const</code>。它们两个究竟能解决怎样的问题呢？我们来看以下代码：</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//  ?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>上述代码会打印出什么内容呢？很多人都会觉得是 1，或者是 123.其实并不是，上述代码会打印出<strong>undefined 和 123</strong>。为什么会打印出<strong>undefined</strong>呢？原因就是，当我们<strong>执行 test 函数</strong>的时候，<strong>变量 a</strong>会进行<strong>变量提升</strong>，这就意味着，在<strong>函数 test 的内部会创建一块局部作用域</strong>，此时<strong>局部作用域中 var a = undefined</strong>(变量提升的过程中并不会对 a 进行赋值，只有执行到 var a = 123 这一步时，才会进行赋值)。并且在<strong>执行 log 函数</strong>的时候，<strong>局部作用域中的 a 还未进行赋值操作</strong>，因此会打印出<strong>undefined</strong>，而在<strong>if 语句里</strong>，变量 a 已经进行了赋值操作，此时打印出的 a 为 123。</p>
<p>如果我们使用<code>let</code>或者<code>const</code>会怎样呢？</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
    <span class="token comment">// const a = 123</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//  1   123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>从上述代码我们可知，结果为<strong>1 和 123</strong>，这是因为，当我们使用<code>let</code>或者<code>const</code>声明变量时，<strong>该变量只在块级作用域中生效</strong>，什么是<strong>块级作用域</strong>呢？根据我的理解，我们可以简单理解为<strong>括号包裹的内容</strong>就形成一个块级作用域，比如<strong>if 语句</strong>,<strong>for 循环</strong>等。此时因为<strong>let a</strong>只在<strong>块级作用域中生效</strong>，因此<strong>不会进行变量提升</strong>，当我们执行<strong>console.log(a)<strong>的时候，因为</strong>局部变量没有 a</strong>，因此会去外层也就是<strong>全局变量寻找</strong>,于是就打印出了<strong>全局变量的 a</strong>。</p>
<h2 id="作用域链" tabindex="-1"><a class="header-anchor" href="#作用域链" aria-hidden="true">#</a> 作用域链</h2>
<p>我们知道，<strong>函数内部有自己的作用域</strong>，因此<strong>全局变量</strong>和<strong>局部变量</strong>互不冲突，比如我们在<strong>全局变量定义 a</strong>，我们在<strong>局部变量中也可以定义一个 a</strong>，此时两个 a 并不冲突。如下代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">"全局变量"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">"test内部变量"</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// test内部变量</span>
<span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 全局变量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>上述代码中，分别定义了<code>全局变量a</code>和<code>局部变量a</code>。当两个函数同时打印 a 时，有<code>局部变量a</code>的打印出了<strong>局部变量的值</strong>，没有<code>局部变量a</code>的则打印出来<code>全局变量a</code>的值，这是为什么呢？因为当<code>访问作用域中的内容时</code>，会先从<strong>局部作用域中查找</strong>，如果<strong>局部作用域没有找到</strong>，则会去<strong>上一级的局部作用域</strong>查找，直至<strong>全局作用域</strong>，这种逐级查找的方式就叫做<strong>作用域链</strong>。</p>
<p>我们再来看一个例子：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">"全局变量"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">global</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">"test内部变量"</span><span class="token punctuation">;</span>
  <span class="token function">global</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 全局变量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>这个示例中，可能有些人会认为打印出来的 a 会打印出<strong>函数 test 的内部变量</strong>，因为<strong>global 函数是在 test 内部执行的</strong>。但实际上并不是这样，我们不能看<strong>函数在哪里执行</strong>，而是要看<strong>函数在哪里被定义</strong>，上述代码中，因为<strong>函数 global 定义在全局作用域</strong>，因此访问<strong>变量 a</strong>的时候，首先会去自己的作用域，即<strong>全局作用域</strong>中寻找，所以会打印出<strong>全局变量的 a</strong>。</p>
</template>
