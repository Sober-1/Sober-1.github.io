<template><h1 id="拷贝" tabindex="-1"><a class="header-anchor" href="#拷贝" aria-hidden="true">#</a> 拷贝</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>在我们学习对象拷贝之前，我们需要了解一下<code>对象</code>这个数据类型。我们知道<code>Object</code>在 <strong>JavaScript</strong> 中属于<code>引用数据类型</code>，
所谓<code>引用数据类型</code>就意味着 <strong>每一个对象</strong> 都是引用了 <strong>内存中的一块地址</strong>。每<code>定义一个新对象</code>都会在<code>内存中开辟一块新地址</code>。如下图所示：</p>
</div>
<p><img src="/img/对象的地址.jpg" alt="obj"></p>
<h2 id="浅拷贝" tabindex="-1"><a class="header-anchor" href="#浅拷贝" aria-hidden="true">#</a> 浅拷贝</h2>
<p>当我们想<code>拷贝</code>一个和当前对象<code>一模一样的对象</code>的时候，我们首先想到的就是，让<code>新对象=旧对象</code>，但是从图片我们可以知道，<code>对象</code>引用的是内存地址，当我们给<code>新对象</code>赋值为<code>旧对象</code>的时候，其实是把<code>新对象的指针</code><strong>指向</strong>了<code>旧的对象</code>。相当于两个对象共用一块内存地址。因此，有一方改变数据的时候，<code>任何指向该地址的对象</code>的数据都会发生改变。而这种<code>看似拷贝</code>，实际上没有改变<code>引用地址</code>的拷贝方式，我们称之为<code>浅拷贝</code>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 此时会开辟一块内存地址，假设该地址为a   对象obj的指针指向a</span>

<span class="token keyword">let</span> obj1 <span class="token operator">=</span> obj <span class="token comment">// 此时，创建了一个新的对象，并将该对象的指针也指向a，看似拥有和obj一样的属性和方法，其实不过是和obj用的一套罢了。</span>

obj<span class="token punctuation">.</span>num <span class="token operator">=</span> <span class="token number">666</span> <span class="token comment">// 给对象obj添加属性 num = 666</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>num<span class="token punctuation">)</span> <span class="token comment">// 打印出obj1也有num属性，且也为666</span>

obj1<span class="token punctuation">.</span>num <span class="token operator">=</span> <span class="token number">888</span>  <span class="token comment">// 当我们给obj1改变num的值时，我们预期obj.num的值还是666，因为我们不希望两个对象互想影响</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>num<span class="token punctuation">)</span>  <span class="token comment">// 打印出888，说明两个对象的属性方法是会互相影响的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>这种<code>只拷贝对象内容</code>而不<code>开辟新的内存地址</code>的拷贝方式我们称之为 <strong>浅拷贝</strong>。
<strong>浅拷贝</strong> 常见的方式有：</p>
<ol>
<li>引用赋值 2. Object.assign()</li>
</ol>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Object.assign(obj1,obj2)，该方法允许我们传入两个对象参数，会帮我们把 <strong>obj1</strong> 和 <strong>obj2</strong> 两个对象中的属性进行合并，如果 <strong>obj1</strong>和 <strong>obj2</strong> 中共同存在的属性，会被 <strong>obj2</strong> 覆盖，没有的则会新增。该方法最终会把obj1当作返回值。
该方法如果拷贝的对象只有一级属性，即对象中没有对象，那么 <strong>该方法就是深拷贝</strong>，否则该方法就是 <strong>浅拷贝</strong>。</p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 输入</span>
<span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'coder'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span>
  <span class="token literal-property property">arr</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token literal-property property">arr</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fun</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> obj3 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>obj2<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj3<span class="token punctuation">)</span> <span class="token comment">// {age: 18, arr: Array(2), fun: ƒ} 实现了拷贝obj2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span>obj2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {name: "coder", age: 18, arr: Array(2), fun: ƒ}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span> <span class="token comment">// {name: "coder", age: 18, arr: Array(2), fun: ƒ}</span>

obj3<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">19</span>
obj3<span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// 18 一级属性未受影响</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">.</span>arr<span class="token punctuation">)</span> <span class="token comment">// [1] 引用类型的属性受到了影响</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="深拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝" aria-hidden="true">#</a> 深拷贝</h2>
<p>通过<code>浅拷贝</code>我们可想而知，假如我们需要一个 <strong>新的对象</strong> ，但是我们不想修改 <strong>新对象</strong> 的时候让 <strong>被拷贝</strong> 的对象发生属性的改变，我们应该怎么做呢？这时候我们就需要采用<code>深拷贝</code>来进行对象的拷贝。所谓<code>深拷贝</code>就是在我们拷贝对象的时候，对那些<code>引用数据类型</code>的数据开辟新的内存空间，从而让两个对象 <strong>互不影响</strong>。</p>
<h3 id="方法一-转json进行深拷贝" tabindex="-1"><a class="header-anchor" href="#方法一-转json进行深拷贝" aria-hidden="true">#</a> 方法一：转JSON进行深拷贝</h3>
<ul>
<li>该方法只适用于可以转为 <strong>JSON字符串</strong> 的对象，如果对象中含有<code>function</code>或者<code>RegExp</code>就不能使用该方法</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 输入</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> jsonStr <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// 将对象转成JSON字符串</span>

<span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>jsonStr<span class="token punctuation">)</span>

obj<span class="token punctuation">.</span>c<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>c<span class="token punctuation">)</span> <span class="token comment">// [1,2] obj中的引用类型c改变了</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>a<span class="token punctuation">)</span> <span class="token comment">// 1 拷贝成功</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>c<span class="token punctuation">)</span> <span class="token comment">// [1,2,3] obj1中的引用类型c未改变，说明二者互不影响 深拷贝成功</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="方法二-封装deepclone方法" tabindex="-1"><a class="header-anchor" href="#方法二-封装deepclone方法" aria-hidden="true">#</a> 方法二：封装deepClone方法</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 输入</span>
<span class="token keyword">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果参数的类型不是'object' 直接返回</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">'object'</span><span class="token punctuation">)</span> <span class="token keyword">return</span> obj
  <span class="token comment">// 如果是object，判断是数组还是对象</span>
  <span class="token keyword">let</span> newObj <span class="token operator">=</span> obj <span class="token keyword">instanceof</span> <span class="token class-name">Array</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token comment">// 如果是object，则遍历对象的属性</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果该key是该对象的可枚举属性（防止拷贝原型上的数据）</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 对新对象的key进行赋值</span>
      newObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> newObj
<span class="token punctuation">}</span>

<span class="token comment">// 测试</span>
<span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">c</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'obj1'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span>

obj1<span class="token punctuation">.</span>d<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>d<span class="token punctuation">)</span> <span class="token comment">// [1,2]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">.</span>d<span class="token punctuation">)</span> <span class="token comment">// [1,2,3]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">.</span>a<span class="token punctuation">)</span> <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">.</span>b<span class="token punctuation">)</span> <span class="token comment">// '2'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">.</span>c<span class="token punctuation">)</span> <span class="token comment">// f(){}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><ul>
<li>上述的拷贝代码，可以帮我们实现深拷贝。我们可以看到，<code>obj1</code>中的属性全部被 <strong>拷贝</strong> 到了 <code>obj2</code>中，且<code>obj1</code>中的引用类型哪怕发生改变，也不会影响<code>obj2</code>中引用类型的值。</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ul>
<li>深浅拷贝没有谁好谁坏，根据自己的业务需求来选择自己需要进行<code>深拷贝</code>还是<code>浅拷贝</code>。</li>
</ul>
</div>
</template>
