<template><h1 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h1>
<h2 id="数据类型的种类" tabindex="-1"><a class="header-anchor" href="#数据类型的种类" aria-hidden="true">#</a> 数据类型的种类</h2>
<p><strong>JavaScript</strong> 的数据类型可分为两种，分别为 <strong>基本数据类型</strong> 和 <strong>引用数据类型</strong></p>
<h3 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型" aria-hidden="true">#</a> 基本数据类型</h3>
<ul>
<li>
<p>数字类型 <code>Number</code></p>
</li>
<li>
<p>字符串类型 <code>String</code></p>
</li>
<li>
<p>undefined 型 <code>undefined</code></p>
</li>
<li>
<p>null 类型 <code>null</code></p>
</li>
<li>
<p>布尔类型 <code>Boolean</code></p>
</li>
<li>
<p>符号类型 <code>Symbol</code></p>
</li>
<li>
<p>BigInt 类型 <code>BigInt</code></p>
</li>
</ul>
<h3 id="引用数据类型" tabindex="-1"><a class="header-anchor" href="#引用数据类型" aria-hidden="true">#</a> 引用数据类型</h3>
<p>对象类型 <code>Object</code></p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ul>
<li>
<p>BigInt 类型不能与 Number 类型进行相互转换，否则会抛出异常。</p>
</li>
<li>
<p>JS 中，万物皆为对象，我们熟知的<code>Function</code>以及<code>Array</code>其实也是对象，而不是单独的数据类型，但有人喜欢把<code>Object</code>和<code>Function</code>平起平坐，这大部分原因是 typeof 可以检测出<code>Function</code>类型。</p>
</li>
</ul>
</div>
<h2 id="判断数据类型" tabindex="-1"><a class="header-anchor" href="#判断数据类型" aria-hidden="true">#</a> 判断数据类型</h2>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>我们既然学习了 JS 基本的数据类型，当我们编写代码时如何判断当前数据的类型呢？</p>
</div>
<h3 id="简单类型的判断" tabindex="-1"><a class="header-anchor" href="#简单类型的判断" aria-hidden="true">#</a> 简单类型的判断</h3>
<p>在 JS 中，已经有方法可以判断简单的数据类型，该方法就是 <code>typeof</code></p>
<p>接下来我们来看一段代码</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 输入</span>
<span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">"123"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> boo <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">fun</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> boo<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> fun<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// return number string boolean function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>此时，我们定义了四个 <strong>常量</strong> 的值，当我们通过<code>typeof</code>来判断它的类型时，控制台分别给我们打印出了<code>number</code>、<code>string</code>、<code>boolean</code>、<code>function</code>，这说明<code>typeof</code>是可以帮助我们判断一些简单的数据类型，同时，<code>typeof</code>还可以帮我们判断<code>function</code>类型，这也是为什么很多人把<code>Function</code>也当作一种数据类型。</p>
<h3 id="复杂类型的判断" tabindex="-1"><a class="header-anchor" href="#复杂类型的判断" aria-hidden="true">#</a> 复杂类型的判断</h3>
<p>简单的类型可以通过<code>typeof</code>方法来进行判断，那么如果是复杂的 <strong>引用数据类型</strong> 呢？</p>
<p>来看这段代码</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 输入</span>
<span class="token keyword">const</span> empty <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"coder"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">"21"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> empty<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// return object</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>通过这段代码，我们可以发现，无论是<code>Array</code>还是<code>Object</code>,通过<code>typeof</code>来判断的结果都是<code>object</code>，甚至连 <strong>基本数据类型</strong> 的<code>null</code>也是<code>object</code>，这是为什么呢？</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>首先我们应该知道<code>null</code>到底代表了什么。<code>null</code>其实代表了一个尚未存在的 <strong>对象</strong>，当把<code>null</code>转化为数值类型时，它的值是<code>0</code>，因此我们可以理解为，<code>null</code>代表了一个 <strong>不确定的对象</strong>，API 中，<code>null</code>接收的返回值通常为对象，这是<code>JavaScript</code>的历史遗留问题，我们无法控制，这样的话我们就可以理解为什么 <code>typeof(null)</code>会返回<code>object</code>了。</p>
</div>
<p>而 <strong>Array</strong> 和 <strong>Object</strong> 的判断结果都是<code>object</code>我们就很好理解了，因为它们都是<code>引用数据类型</code>。那么我们在使用的过程中，如何区分这些数据类型呢？ 废话少说，上代码！</p>
<p><strong>首先是判断<code>Array</code>和<code>Object</code>两个</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 输入</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"coder"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">"21"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Date</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr <span class="token keyword">instanceof</span> <span class="token class-name">Date</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date <span class="token keyword">instanceof</span> <span class="token class-name">Date</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// return false、true、false、false、false、true、true、true、true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p><code>instanceof</code>是<strong>JavaScript</strong>内置的一种方法，它可以判断<strong>某个变量的原型链上</strong>是否出现了某个<strong>构造函数对象</strong>。</p>
<p>这样听起来有点拗口，我们只能用代码来解释下了😭</p>
<p>首先我们拿到 obj 的原型对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return: {constructor:f Object(), ...}</span>
<span class="token comment">// 继续直到返回null</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return: null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>我们可以通过以上方式拿到<code>arr</code>和<code>date</code>两个变量的原型链，我们可以分析它们<code>原型链上</code>每一次的<code>原型对象</code>，它们的原型链上分别出现了包含<strong>Array、Object</strong>和<strong>Date、Object</strong>构造函数的原型对象，所以当我们使用<code>instanceof</code>来判断时，如果是 Array，只有 arr 满足条件，如果是 Date，只有 date 满足，但如果是 Object，它们三个都满足，因为在它们的原型链上都有一个为<strong>Object 构造函数</strong>的属性😏</p>
<p><strong>判断<code>null</code>、<code>Array</code>、<code>Object</code>三种</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 使用转字符串的方式进行判断</span>

<span class="token comment">// 输入</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"coder"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">"21"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> empty <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>empty<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// return [object Object]、[object Null]、[object Array]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>为什么可以采用这种方法来进行判断呢？因为在 <strong>Object</strong> 的 <strong>原型链</strong> 上有<code>toString</code>方法，通过<code>call</code>来改变<code>this</code>的指向，通俗的说就是让<strong>call</strong>后边括号里的<strong>变量</strong>或者<strong>常量</strong>来调用<code>toString</code>方法，就会得到不同的结果，就可以来判断到底是什么类型啦。至于如何改变 this 的指向，我们后续再说。</p>
</template>
