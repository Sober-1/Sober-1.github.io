<template><h1 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h1>
<p>在了解<code>继承</code>之前，我们需要了解一些知识。</p>
<ul>
<li>构造函数(constructor): 我们可以通过 <strong>new</strong> 一个构造函数生成新的实例，且该实例会继承来自构造函数的方法和属性。</li>
<li>构造函数都有一个属性 <strong>prototype</strong> ，构造函数的实例会继承 <strong>prototype</strong> 上的方法</li>
<li>构造函数的 <strong>prototype</strong> 上的 <strong>constructor</strong> 属性，指向的是构造函数本身</li>
<li>构造函数的实例上有 <strong>__proto__</strong> 属性，该属性指向构造函数的 <strong>prototype</strong></li>
<li>原型链：每个对象都有自己的<code>原型</code>，原型也有自己的原型，当对象的<code>原型</code>不为<code>null</code>的话，就可称之为<code>原型链</code>。当调用某个对象的方法时，会先在自身的<code>prototype</code>上寻找该方法，如果没有就会通过自己的去构造函数的 <strong>原型</strong> 上找，以此类推，直到一个对象的<code>原型对象</code>为<code>null</code>时还未找到，就会抛出异常。。</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ul>
<li>
<p>任何函数都可作 <strong>构造函数</strong> ，即任何函数都可以通过 <strong>new</strong> 来创建一个实例。而我们常见的 <strong>构造函数</strong> 的函数名都是以 <strong>大写字母</strong> 开头，这只是一种规范，来说明该函数作为 <strong>构造函数</strong> 来使用。</p>
</li>
<li>
<p>JS的继承是基于原型的。</p>
</li>
</ul>
</div>
<h2 id="冒充继承" tabindex="-1"><a class="header-anchor" href="#冒充继承" aria-hidden="true">#</a> 冒充继承</h2>
<p>这个名字听起来很怪，很难理解，其实很简单，就是让父类的构造函数作为子类的方法，然后调用子类的方法，实现继承。代码如下:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 输入</span>
<span class="token keyword">function</span> <span class="token function">Parent</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">21</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">sayAge</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>sex <span class="token operator">=</span> <span class="token string">'男'</span>

<span class="token keyword">function</span> <span class="token function">Child</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>parent <span class="token operator">=</span> Parent
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">parent</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>

  <span class="token comment">// 此时执行</span>
  <span class="token comment">// this.name = name</span>
  <span class="token comment">// this.age = 21</span>
  <span class="token comment">// this.sayAge = function() { console.log(this.age) }</span>
  <span class="token comment">// 这时子类已经继承了所有的父类属性和方法，多了一个this.parent = Parent， 只需删掉</span>
  <span class="token keyword">delete</span> <span class="token keyword">this</span><span class="token punctuation">.</span>parent
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sayAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> child <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">'coder'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span>sex<span class="token punctuation">)</span>
child<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//输出 undefined coder 21</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><ul>
<li>优点：可以实现多继承</li>
<li>缺点：无法继承父类原型链上的属性和方法</li>
</ul>
<h2 id="原型继承" tabindex="-1"><a class="header-anchor" href="#原型继承" aria-hidden="true">#</a> 原型继承</h2>
<p>该方法其实就是将子类的原型对象指向父类的实例，子类通过访问原型链，从而与父类公用方法和属性。
代码如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 输入</span>
<span class="token keyword">function</span> <span class="token function">Parent</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">21</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>sex <span class="token operator">=</span> <span class="token string">'男'</span>

<span class="token keyword">function</span> <span class="token function">Child</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>skill <span class="token operator">=</span> <span class="token string">'coder'</span>
<span class="token punctuation">}</span>

<span class="token comment">// 将子类的原型对象指向父类的实例</span>
<span class="token class-name">Child</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token string">'Lee'</span><span class="token punctuation">)</span>

<span class="token comment">// 由于子类的原型指向了父类的实例，因此子类的constructor变成了父类，这显然看起来很奇怪</span>
<span class="token comment">// 我们手动改变</span>
<span class="token class-name">Child</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Child
<span class="token keyword">let</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> child2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
child1<span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span>arr<span class="token punctuation">)</span>

<span class="token comment">//输出 Lee [1,2]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><ul>
<li>优点：做到了属性和方法共享</li>
<li>缺点：1. 子类不可以传参<br>
&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp2. 当父类的属性有引用类型的时候,修改任意一个实例的该属性，其它子类都会受到影响。</li>
</ul>
<h2 id="构造函数继承" tabindex="-1"><a class="header-anchor" href="#构造函数继承" aria-hidden="true">#</a> 构造函数继承</h2>
<p>为了让子类可以自己添加方法和属性，我们可以通过<code>call</code>来调用父类的构造函数，从而给每个子类生成独立的属性和方法。</p>
<p>代码如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 输入</span>
<span class="token keyword">function</span> <span class="token function">Parent</span> <span class="token punctuation">(</span><span class="token parameter">firstName<span class="token punctuation">,</span>lastName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> firstName <span class="token operator">+</span> lastName
    <span class="token keyword">this</span><span class="token punctuation">.</span>arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Child</span> <span class="token punctuation">(</span><span class="token parameter">firstName<span class="token punctuation">,</span>lastName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 调用父类并传参</span>
    <span class="token function">Parent</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>firstName<span class="token punctuation">,</span>lastName<span class="token punctuation">)</span>
    <span class="token comment">// 或者使用</span>
    <span class="token comment">// Parent.apply(this,[firstName,lastName])</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">'李'</span><span class="token punctuation">,</span><span class="token string">'璞'</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> child2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">'李'</span><span class="token punctuation">,</span><span class="token string">'璞'</span><span class="token punctuation">)</span>
child1<span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span>arr<span class="token punctuation">)</span>

<span class="token comment">// 输出  李璞  [1,2,3]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ul>
<li>优点：子类实例可以传参，实现子类所有属性方法独享，不同实例不会受到影响。</li>
<li>缺点：1. 只能继承父类中已经定义的方法，每次增加方法都需要先在父类中定义，复用性不强。<br>
&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp2. 无法继承父类原型链上的属性和方法</li>
</ul>
<h2 id="组合继承" tabindex="-1"><a class="header-anchor" href="#组合继承" aria-hidden="true">#</a> 组合继承</h2>
<p>该方法相当于<code>原型继承</code>和<code>构造函数继承</code>的结合。</p>
<p>代码如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 输入</span>
<span class="token keyword">function</span> <span class="token function">Parent</span> <span class="token punctuation">(</span><span class="token parameter">firstName<span class="token punctuation">,</span>lastName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> firstName <span class="token operator">+</span> lastName
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">21</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>sex <span class="token operator">=</span> <span class="token string">'男'</span>

<span class="token keyword">function</span> <span class="token function">Child</span> <span class="token punctuation">(</span><span class="token parameter">firstName<span class="token punctuation">,</span>lastName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 调用父类并传参</span>
    <span class="token function">Parent</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>firstName<span class="token punctuation">,</span>lastName<span class="token punctuation">)</span>
    <span class="token comment">// 或者使用</span>
    <span class="token comment">// Parent.apply(this,[firstName,lastName])</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>skill <span class="token operator">=</span> <span class="token string">'coder'</span>
<span class="token punctuation">}</span>

<span class="token comment">// 将子类的原型对象指向父类的实例</span>
<span class="token class-name">Child</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token string">'张'</span><span class="token punctuation">,</span><span class="token string">'三'</span><span class="token punctuation">)</span>
<span class="token class-name">Child</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Child
<span class="token keyword">let</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">'李'</span><span class="token punctuation">,</span><span class="token string">'璞'</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> child2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">'李'</span><span class="token punctuation">,</span><span class="token string">'璞'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
child1<span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span>arr<span class="token punctuation">)</span>

<span class="token comment">//输出 李璞 [1,2，3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><ul>
<li>优点：实现子类所有属性方法独享，不同实例不会受到影响。</li>
<li>缺点：调用了多次父类构造函数。</li>
</ul>
<h2 id="寄生继承" tabindex="-1"><a class="header-anchor" href="#寄生继承" aria-hidden="true">#</a> 寄生继承</h2>
<p>该继承方式实现的原理就是封装一个<strong>继承过程的函数</strong>，该函数在内部以某种形式来做增强对象，最后返回该对象。这句话优点拗口，具体还是看代码如何实现。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 输入</span>
方法一：
    <span class="token comment">// 封装一个函数，该函数接收一个参数，参数格式为Object，创建一个函数，该函数的原型指向传进的参数对象，最后返回该函数的实例</span>
    <span class="token keyword">function</span> <span class="token function">strongObj</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">function</span> <span class="token function">Fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token class-name">Fun</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> obj
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
方法二：
    <span class="token comment">// 在ES5中有一个Object.create(obj)方法， 该方法可以看作是上述方法的封装</span>
    <span class="token keyword">function</span> <span class="token function">Child</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> child <span class="token operator">=</span> <span class="token function">strongObj</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
      <span class="token comment">// 或</span>
      <span class="token comment">// let child = Object.create(obj)</span>

      <span class="token comment">// 再给child增加自身的属性以及方法</span>
      child<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">21</span>
      child<span class="token punctuation">.</span>arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
      <span class="token keyword">return</span> child
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'李'</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> child1 <span class="token operator">=</span> <span class="token function">Child</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
    <span class="token keyword">let</span> child2 <span class="token operator">=</span> <span class="token function">Child</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
    child1<span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span>arr<span class="token punctuation">)</span>

<span class="token comment">// 输出 李 [1，2，3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><ul>
<li>优点：实现子类所有属性方法独享。</li>
<li>缺点：和构造函数继承一样，复用性差。</li>
</ul>
<h2 id="寄生组合继承" tabindex="-1"><a class="header-anchor" href="#寄生组合继承" aria-hidden="true">#</a> 寄生组合继承</h2>
<p>无论通过<code>原型继承</code>还是<code>组合继承</code>亦或是<code>寄生继承</code>，都不是完美的，比如在使用<code>组合继承</code>的时候，调用了两次父类的构造函数。一次是 <strong>call</strong> ，一次是 <strong>new</strong> 。为了减少一次调用，同时让子类共享父类的方法，我们可以将上述代码的<code>20</code>行这样写。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token class-name">Child</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>但是问题来了，<code>Parent.prototype</code>指向的是一个对象，是引用数据类型，因此，当我们改变<code>Child.prototype.constructor = Child</code>的时候，父类构造函数的<code>constructor</code>也会改变，如何解决呢？<code>寄生组合继承</code>可以帮我们实现，何为<code>寄生</code>？其实就是在<code>Child.prototype</code>和<code>Parent.prototype</code>直接加一层媒介，让它们胡不影响。</p>
<p>而<code>寄生组合继承</code>几乎完美的实现了继承，究竟怎么做到的呢？代码如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 输入</span>
<span class="token keyword">function</span> <span class="token function">Parent</span> <span class="token punctuation">(</span><span class="token parameter">firstName<span class="token punctuation">,</span>lastName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> firstName <span class="token operator">+</span> lastName
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">21</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>sex <span class="token operator">=</span> <span class="token string">'男'</span>

<span class="token keyword">function</span> <span class="token function">Child</span> <span class="token punctuation">(</span><span class="token parameter">firstName<span class="token punctuation">,</span>lastName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 调用父类并传参</span>
    <span class="token function">Parent</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>firstName<span class="token punctuation">,</span>lastName<span class="token punctuation">)</span>
    <span class="token comment">// 或者使用</span>
    <span class="token comment">// Parent.apply(this,[firstName,lastName])</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>skill <span class="token operator">=</span> <span class="token string">'coder'</span>
<span class="token punctuation">}</span>

<span class="token comment">// 将子类的原型对象指向父类的实例</span>
<span class="token class-name">Child</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>

<span class="token class-name">Child</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Child

<span class="token keyword">let</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">'李'</span><span class="token punctuation">,</span><span class="token string">'璞'</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> child2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">'李'</span><span class="token punctuation">,</span><span class="token string">'璞'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
child1<span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span>arr<span class="token punctuation">)</span>

<span class="token comment">//输出 李璞 [1,2，3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Object.create(obj)方法会创建一个新对象，采用传入对象作为新对象的<code>__proto__</code></p>
</div>
<p>通过增加这行代码，会让<code>Child.prototype</code>指向<code>__proto__</code>为<code>Parent.prototype</code>的新对象，通过这个对象让Child的原型和Parent的原型建立联系，但又不指向同一块内存地址，因此改变<code>Child.prototype.constructor</code>的时候就不会影响到父类的构造函数。</p>
<h2 id="class继承" tabindex="-1"><a class="header-anchor" href="#class继承" aria-hidden="true">#</a> Class继承</h2>
<p>在ES6中，JS为我们提供了<code>继承</code>的<code>语法糖</code>，那就是<code>Class</code>关键字</p>
<p><code>Class</code>继承中，有几个关键字，分别为<code>Class</code>、<code>constructor</code>、<code>super</code>和<code>extends</code>，<code>Class</code>代表声明一个<code>类</code>，<code>constructor</code>就是构造函数方法，而<code>super</code>则相当于ES5中<code>call</code>或者<code>apply</code>的作用，<code>extends</code>则代表<code>继承自</code>，<code>类</code>中除了<code>构造函数方法</code>,其它方法都挂载在<code>类的原型链上</code>。</p>
<h3 id="class继承的写法" tabindex="-1"><a class="header-anchor" href="#class继承的写法" aria-hidden="true">#</a> Class继承的写法</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 输入</span>
<span class="token keyword">class</span> <span class="token class-name">Parent</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>

  <span class="token function">skill</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"coder"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Child</span> <span class="token keyword">extends</span> <span class="token class-name">Parent</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> sex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex
  <span class="token punctuation">}</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> child <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">'李'</span><span class="token punctuation">,</span><span class="token number">21</span><span class="token punctuation">,</span><span class="token string">'男'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
child<span class="token punctuation">.</span><span class="token function">skill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
child<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 输出 21 coder 李</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="new-操作符做了什么" tabindex="-1"><a class="header-anchor" href="#new-操作符做了什么" aria-hidden="true">#</a> new 操作符做了什么</h2>
<p>通过继承，我们知道 <strong>new</strong> 一个构造函数，可以得到一个实例，那么 <strong>new</strong> 的过程中，JS帮助我们做了什么呢？</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// example</span>
<span class="token keyword">function</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>

<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token string">'李'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>内部帮我们做了：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 声明空对象</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// 共享原型链方法</span>
a<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token class-name">A</span><span class="token punctuation">.</span>prototype
<span class="token comment">// 共享属性</span>
<span class="token constant">A</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>上述代码我们可知，在 <strong>new</strong> 的时候，内部帮我们最后做了一步<code>call</code>的操作，这也是为什么我们说在<code>组合继承</code>中，调用了两次父类的构造函数。</p>
</div>
<p><strong>new</strong> 一共帮我们执行了三步操作</p>
<ol>
<li>声明一个<code>空对象</code></li>
<li>将新对象的<code>__proto__</code>指向了<code>父类的prototype</code></li>
<li>将父类的this指针替换成新对象，然后再调用父类</li>
</ol>
</template>
