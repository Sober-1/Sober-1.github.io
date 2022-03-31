<template><h1 id="axios-在项目中的使用" tabindex="-1"><a class="header-anchor" href="#axios-在项目中的使用" aria-hidden="true">#</a> axios 在项目中的使用</h1>
<h2 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构" aria-hidden="true">#</a> 项目结构</h2>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>├─  src
|  ├─ common
|  |   └ https.js   封装axios的文件
|  ├─ api
|  |  ├─ detail.js  按照功能划分接口请求并封装
|  |  └  home.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>一般情况下，我们会将 axios 先进行封装，配置 axios 的<code>响应器</code>以及<code>拦截器</code>，然后根据<strong>不同的接口请求</strong>，再分成多个文件进行封装。</p>
<h2 id="请求方法" tabindex="-1"><a class="header-anchor" href="#请求方法" aria-hidden="true">#</a> 请求方法</h2>
<p>当我们有一个请求方法时，我们可以将它写到对应板块的<code>js文件</code>中，并导出。比如我们有一个<strong>请求详情</strong>的接口。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getDetail</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> params<span class="token punctuation">,</span> headers <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"接口地址url"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    params<span class="token punctuation">,</span>
    headers<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="调用接口" tabindex="-1"><a class="header-anchor" href="#调用接口" aria-hidden="true">#</a> 调用接口</h2>
<p>当我们封装好 axios 请求之后，如何在<strong>Vue</strong>不同的<strong>组件</strong>或<strong>页面</strong>中使用呢？</p>
<ul>
<li>当我们想调用<code>getHome</code>请求时</li>
<li>当我们想调用<code>getDetail</code>请求时</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// @ 是给路径取的别名</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getHome <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/api/home"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getDetail <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/api/detail"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>当然，通过这种方式<strong>引入</strong>也有一些麻烦，因为我们每次引入<strong>不同模块</strong>的请求都需要写一行<strong>import</strong>，我们可以通过在<strong>api 文件夹下新增 index.js 文件</strong>，在<strong>index.js</strong>中将所有请求模块导出。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">"./home"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">"./detail"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这样我们在使用的时候就可以直接引入<strong>index.js</strong>文件，可以简写为：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getHome<span class="token punctuation">,</span> getDetail <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/api"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="封装-axios-基本配置" tabindex="-1"><a class="header-anchor" href="#封装-axios-基本配置" aria-hidden="true">#</a> 封装 axios 基本配置</h2>
<p>上面说了那么多，其实一切都基于我们的<code>axios</code>，如何把<code>axios</code>封装成可以让上述需求共享的呢？</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 导入axios包,qs包</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">"axios"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> qs <span class="token keyword">from</span> <span class="token string">"qs"</span><span class="token punctuation">;</span>

<span class="token comment">// 创建axios的实例</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
  <span class="token function-variable function">paramsSerializer</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">arrayFormat</span><span class="token operator">:</span> <span class="token string">"repeat"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 导出http</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> http<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>其中<code>timeout</code>代表 axios 的响应时间，单位为<code>毫秒</code>，超出时间后，会请求超时，抛出异常。</p>
<p>qs 是处理参数的包，通过<code>qs.stringify</code>可以将传入的<code>对象参数或数组参数</code>序列化成 URL 的形式。通过<code>qs.parse</code>可以将 URL 解析成对象形式。</p>
<h2 id="axios-的-baseurl" tabindex="-1"><a class="header-anchor" href="#axios-的-baseurl" aria-hidden="true">#</a> axios 的 baseURL</h2>
<h3 id="一个域名地址" tabindex="-1"><a class="header-anchor" href="#一个域名地址" aria-hidden="true">#</a> 一个域名地址</h3>
<p>如果你的项目所有的请求都只在一个接口域名下，只有测试和生产环境的区别的话，那么可以配置一下 baseURL，这种情况可以通过 node 的环境变量来匹配 BaseURL。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>http<span class="token punctuation">.</span>default<span class="token punctuation">.</span>baseURL <span class="token operator">=</span>
  process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">"development"</span> <span class="token operator">?</span> <span class="token string">"测试URL"</span> <span class="token operator">:</span> <span class="token string">"生产URL"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>axios 帮助我们发出请求的<strong>实际地址</strong>就是<strong>baseURL</strong> + <strong>request url</strong>，比如我们的接口地址为<code>https://test.com/detail</code>，我们把<strong>baseURL</strong>配置为<code>https://test.com</code>,配置完<strong>baseURL</strong>后我们就可以这么写。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getDetail</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> params<span class="token punctuation">,</span> headers <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/detail"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    params<span class="token punctuation">,</span>
    headers<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="多个域名地址" tabindex="-1"><a class="header-anchor" href="#多个域名地址" aria-hidden="true">#</a> 多个域名地址</h3>
<p>如果项目中需要请求多个域名地址，并且<strong>测试环境和生产环境不同</strong>，我们可以用一个公共文件将它们导出，然后在不同文件<strong>按需引入</strong>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token constant">HOME_URL</span> <span class="token operator">=</span> <span class="token string">"https://home.com"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token constant">DETAIL_URL</span> <span class="token operator">=</span> <span class="token string">"https://detail.com"</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE</span><span class="token punctuation">.</span><span class="token constant">ENV</span> <span class="token operator">===</span> <span class="token string">"development"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token constant">HOME_URL</span> <span class="token operator">=</span> <span class="token string">"https://test-home.com"</span><span class="token punctuation">;</span>
  <span class="token constant">DETAIL_URL</span> <span class="token operator">=</span> <span class="token string">"https://test-detail.com"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token constant">HOME_URL</span><span class="token punctuation">,</span> <span class="token constant">DETAIL_URL</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>假如公共文件名为<code>baseURL.js</code>，当我们需要使用时，可以按需导入。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> http <span class="token keyword">from</span> <span class="token string">"@/common/http.js"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">DETAIL_URL</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/common/baseURL.js"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getDetail</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> params<span class="token punctuation">,</span> headers <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">DETAIL_URL</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/detail</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    params<span class="token punctuation">,</span>
    headers<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="拦截器" tabindex="-1"><a class="header-anchor" href="#拦截器" aria-hidden="true">#</a> 拦截器</h2>
<p>在我们发起请求的过程中，我们可能需要对<code>请求头</code>或者对一些<code>权限判断</code>进行处理，这个时候就用到了 axios 的<strong>拦截器</strong>。</p>
<p>比如给我们的请求头加上 token</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// http 代表了axios的实例</span>
http<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> token <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">"token"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 一般都会使用Bearer空格+token的方式来放进请求头</span>
      config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> <span class="token string">"Bearer "</span> <span class="token operator">+</span> token<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>这时候，每当我们发请求的时候，就会判断是否有 token 的存在，如果有，则携带 token 进行请求，如果没有，就会抛出异常。通常用来判断用户是否进行登录，或者是否有权限进行某些请求。</p>
<h2 id="响应器" tabindex="-1"><a class="header-anchor" href="#响应器" aria-hidden="true">#</a> 响应器</h2>
<p>我们发出的请求有可能会发送失败或者请求失败，这时，axios 的响应器会帮助我们做一些公共的处理，比如后台传过来的响应码是 401，我们该如何给用户展示？如果是 402 呢？响应器就可以对这些公共的错误信息进行统一处理。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>http<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 捕获错误，比如错误码为401</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">401</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"当前账户没有权限，请重新登录"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="完整的封装" tabindex="-1"><a class="header-anchor" href="#完整的封装" aria-hidden="true">#</a> 完整的封装</h2>
<p>在我们的项目中，有一些请求在请求的过程中可能需要我们<strong>不进行任何操作</strong>，比如一些<strong>发放，删除等操作</strong>，那么我们就需要在请求时通过一些 UI 组件库加上 loading，在请求结束后结束 loading。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">"axios"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> qs <span class="token keyword">from</span> <span class="token string">"qs"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Loading<span class="token punctuation">,</span> Message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"element-ui"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> http <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
  <span class="token function-variable function">paramsSerializer</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">arrayFormat</span><span class="token operator">:</span> <span class="token string">"repeat"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> loading<span class="token punctuation">;</span>
http<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> token <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">"token"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> <span class="token string">"Bearer "</span> <span class="token operator">+</span> token<span class="token punctuation">;</span>
    <span class="token comment">// 传参如果noLoading是false</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>config<span class="token operator">?.</span>noLoading<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果有loading，就取消</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>loading<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        loading<span class="token operator">?.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      loading <span class="token operator">=</span> Loading<span class="token punctuation">.</span><span class="token function">service</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">lock</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> config<span class="token operator">?.</span>el <span class="token operator">||</span> document<span class="token punctuation">.</span>body<span class="token punctuation">,</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"数据正在加载中"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">spinner</span><span class="token operator">:</span> <span class="token string">"el-icon-loading"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">"transparent"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">customClass</span><span class="token operator">:</span> <span class="token string">"loading"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    loading<span class="token operator">?.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

http<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token comment">// 响应成功</span>
  <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    loading<span class="token operator">?.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    loading<span class="token operator">?.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>error<span class="token operator">?.</span>response<span class="token operator">?.</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token number">401</span><span class="token operator">:</span>
        Message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"请先登录"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">"token"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">"/"</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token number">412</span><span class="token operator">:</span>
        Message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"密码输入错误"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token number">403</span><span class="token operator">:</span>
        Message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"权限不足,请调整后重试"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> http<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div><p>现在我们如何发出请求呢?</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> http <span class="token keyword">from</span> <span class="token string">'@/common/http'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">DETAIL_URL</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/common/baseURL.js'</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getDetail</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> params<span class="token punctuation">,</span>headers <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">DETAIL_URL</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/detail</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    params<span class="token punctuation">,</span>
    headers<span class="token punctuation">,</span>
    el<span class="token punctuation">,</span> <span class="token comment">// 新增的config,用来确定loading动画挂载在哪个元素上</span>
    <span class="token literal-property property">noLoading</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// false代表需要loading,true代表不需要loading</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>在组件中我们可以这样使用:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>getDetail<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api'</span>

<span class="token function">_getDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">getDetail</span><span class="token punctuation">(</span><span class="token punctuation">{</span>params<span class="token punctuation">,</span>headers<span class="token punctuation">,</span><span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">'#body'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// #body就是loading动画挂载的元素</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="config的优先级" tabindex="-1"><a class="header-anchor" href="#config的优先级" aria-hidden="true">#</a> config的优先级</h2>
<p>上述代码，我们封装了timeout为10000毫秒，如果产生下面的情况呢？</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://test.com</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">20000</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>在这个请求中，新传了一个timeout，那么axios的拦截器在请求的时候，会将新的timeout覆盖旧的timeout，也就是说，这个响应的超时时间会变成<strong>20000</strong>毫秒。</p>
<p>综上所述，新建axios实例的基本配置的优先级要低一点，传入参数的优先级更高。</p>
</template>
