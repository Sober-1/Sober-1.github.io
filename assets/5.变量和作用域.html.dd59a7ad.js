import{_ as n,c as s}from"./app.1c4ce4b7.js";const a={},t=s(`<h1 id="\u53D8\u91CF\u548C\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u548C\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u53D8\u91CF\u548C\u4F5C\u7528\u57DF</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5728 JavaScript \u4E2D, \u4F5C\u7528\u57DF\u4E3A\u53EF\u8BBF\u95EE\u53D8\u91CF\uFF0C\u5BF9\u8C61\uFF0C\u51FD\u6570\u7684\u96C6\u5408\u3002</p><p>\u4F5C\u7528\u57DF\u7684\u5B57\u9762\u610F\u601D\u5C31\u662F\uFF0C\u4EE3\u7801\u5757\u53EA\u5728\u67D0\u4E00\u533A\u57DF\u8D77\u4F5C\u7528\u3002</p></div><h2 id="\u4E86\u89E3-var\u3001let\u3001const" tabindex="-1"><a class="header-anchor" href="#\u4E86\u89E3-var\u3001let\u3001const" aria-hidden="true">#</a> \u4E86\u89E3 var\u3001let\u3001const</h2><p>\u5728\u5B66\u4E60\u4F5C\u7528\u57DF\u4E4B\u524D\uFF0C\u6211\u4EEC\u9996\u5148\u8981\u4E86\u89E3 js \u4E2D\u5E38\u7528\u58F0\u660E\u4E00\u4E2A<strong>\u53D8\u91CF</strong>\u6216<strong>\u5E38\u91CF</strong>\u7684\u65B9\u5F0F\u3002</p><p>\u5728 ES6 \u4E4B\u524D\uFF0C\u6211\u4EEC\u7684\u4EE3\u7801\u4E2D\uFF0C\u58F0\u660E\u4E00\u4E2A\u53D8\u91CF\u7684\u65B9\u5F0F\uFF0C\u65E0\u8BBA\u662F\u5B57\u7B26\u4E32\u6216\u8005\u662F\u5BF9\u8C61\u7B49\u3002\u90FD\u662F\u4F7F\u7528 <code>var \u53D8\u91CF\u540D = xxx</code> \u7684\u683C\u5F0F\u3002\u76F4\u5230 <strong>let</strong> \u548C <strong>const</strong> \u7684\u51FA\u73B0\uFF0C\u6211\u4EEC\u7684\u4EE3\u7801\u624D\u66F4\u52A0\u89C4\u8303\u8D77\u6765\u3002</p><p>\u90A3\u4E48\u5B83\u4EEC\u76F4\u63A5\u6709\u4EC0\u4E48\u533A\u522B\u5462\uFF1F</p><p><code>var</code>\uFF1A\u58F0\u660E\u4E00\u4E2A<strong>\u53D8\u91CF</strong>\uFF0C\u5728\u8BE5\u53D8\u91CF\u88AB\u58F0\u660E\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u4E0B\u6587\u4EE3\u7801\u4E2D\u5BF9\u8BE5\u53D8\u91CF\u8FDB\u884C\u91CD\u65B0\u8D4B\u503C\uFF0C\u5E76<strong>\u8986\u76D6</strong>\u539F\u6709\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8F93\u5165</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>

a <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>let</code>\uFF1A\u58F0\u660E\u4E00\u4E2A<strong>\u53D8\u91CF</strong>\uFF0C\u548C<code>var</code>\u7684\u4F5C\u7528\u57FA\u672C\u4E00\u81F4\uFF0C\u4E0D\u8FC7\u4F7F\u7528<code>let</code>\u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u53EA\u5728<strong>\u5F53\u524D\u5757\u7EA7\u4F5C\u7528\u57DF</strong>\u53EF\u4EE5\u4F7F\u7528\u3002</p><p><code>const</code>: \u548C<code>let</code>\u57FA\u672C\u4E00\u81F4\uFF0C\u90FD\u662F<strong>\u53EA\u5728\u5757\u7EA7\u4F5C\u7528\u57DF\u751F\u6548</strong>\uFF0C\u4F46\u8868\u793A\u58F0\u660E\u4E00\u4E2A<strong>\u5E38\u91CF</strong>\uFF0C\u987E\u540D\u601D\u4E49\uFF0C\u5E38\u91CF\u4EE3\u8868\u7740\u4E0D\u53EF\u4EE5\u88AB\u6539\u53D8\u7684\u503C\uFF0C\u4E00\u65E6\u88AB\u8D4B\u503C\uFF0C\u5C31\u4E0D\u53EF\u4FEE\u6539,\u5426\u5219\u5C31\u4F1A\u629B\u51FA\u5F02\u5E38\u3002</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u8FD9\u4E5F\u5C31\u610F\u5473\u7740\uFF0C\u901A\u8FC7<code>let</code>\uFF0C<code>const</code>\u58F0\u660E\u7684\u53D8\u91CF\u6216\u8005\u5E38\u91CF\uFF0C<strong>\u4E0D\u4F1A</strong>\u5B58\u653E\u5728<code>window</code>\u5BF9\u8C61\u4EE5\u53CA<code>\u5168\u5C40\u7684this</code>\u4E2D\u3002</p></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8F93\u5165</span>
<span class="token keyword">const</span> <span class="token constant">BASE</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token constant">BASE</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">BASE</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Uncaught TypeError: Assignment to constant variable.\u62A5\u9519</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u901A\u5E38\u6211\u4EEC\u7684\u5E38\u91CF\u90FD\u4F1A\u4F7F\u7528\u5927\u5199\u5B57\u6BCD\uFF0C\u591A\u4E2A\u5B57\u7B26\u53EF\u4EE5\u7528\u4E0B\u5212\u7EBF\uFF08_\uFF09\u8FDB\u884C\u5206\u5272\uFF0C\u4F46\u662F\u5728\u65E5\u5E38\u5F00\u53D1\u4E2D\uFF0C\u5373\u4F7F\u662F const \u58F0\u660E\u7684\u5E38\u91CF\uFF0C\u6211\u4EEC\u4E5F\u7ECF\u5E38\u4F1A\u4F7F\u7528\u5C0F\u5199\u5B57\u6BCD\uFF0C\u53EA\u9700\u4FDD\u8BC1\u8BE5\u5E38\u91CF\u4E0D\u4F1A\u88AB\u4EE5\u5176\u5B83\u65B9\u5F0F\u4FEE\u6539\u5C31\u53EF\u4EE5</p></div><h2 id="\u4F5C\u7528\u57DF\u548C\u4F5C\u7528\u57DF\u94FE" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF\u548C\u4F5C\u7528\u57DF\u94FE" aria-hidden="true">#</a> \u4F5C\u7528\u57DF\u548C\u4F5C\u7528\u57DF\u94FE</h2><ul><li>\u5728\u4E86\u89E3<code>\u5168\u5C40\u53D8\u91CF</code>\u4EE5\u53CA<code>\u5C40\u90E8\u53D8\u91CF</code>\u4E4B\u524D\uFF0C\u6211\u4EEC\u9700\u8981\u5148\u4E86\u89E3\u4EC0\u4E48\u662F<code>\u5168\u5C40\u4F5C\u7528\u57DF</code>\u4EE5\u53CA<code>\u5C40\u90E8\u4F5C\u7528\u57DF</code>\uFF0C\u4EE5\u53CA\u4EC0\u4E48\u53EB\u505A<code>\u4F5C\u7528\u57DF\u94FE</code>\u3002</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><strong>\u5168\u5C40\u4F5C\u7528\u57DF</strong></p><ul><li>\u4E00\u4E2A<strong>js \u6587\u4EF6</strong>\u6216\u4E00\u4E2A<strong>script \u6807\u7B7E</strong>\u4E4B\u4E2D\u7684\u5185\u5BB9\uFF0C\u90FD\u53EF\u4EE5\u79F0\u4E4B\u4E3A<strong>\u5168\u5C40</strong>\uFF0C\u8FD9\u4E00\u5757\u533A\u57DF\u4E4B\u4E2D\u5B9A\u4E49\u7684\u6240\u6709<strong>\u53D8\u91CF\u6216\u5E38\u91CF</strong>\uFF0C\u90FD\u5904\u4E8E<strong>\u5168\u5C40\u4F5C\u7528\u57DF</strong>\u4E2D\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u5171\u4EAB\u67D0\u4E2A\u53D8\u91CF\u6216\u5E38\u91CF\u3002</li><li><strong>\u5168\u5C40\u4F5C\u7528\u57DF</strong>\u5728<strong>\u9875\u9762\u6253\u5F00\u7684\u65F6\u5019\u521B\u5EFA</strong>\uFF0C\u5728<strong>\u9875\u9762\u5173\u95ED\u65F6\u9500\u6BC1</strong>\uFF0C\u5168\u5C40\u4F5C\u7528\u57DF\u5176\u5B9E\u5C31\u662F<strong>\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\u7684 GO</strong>\u3002</li><li>\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\u6709\u4E00\u4E2A\u5168\u5C40\u5BF9\u8C61 <strong>window</strong>\uFF08\u4EE3\u8868\u7684\u662F\u4E00\u4E2A\u6D4F\u89C8\u5668\u7684\u7A97\u53E3\uFF0C\u7531\u6D4F\u89C8\u5668\u521B\u5EFA\uFF09\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u3002\u5982\u6211\u4EEC\u7ECF\u5E38\u4F7F\u7528\u7684<code>console</code>\u4EE5\u53CA<code>alert</code>\u51FD\u6570\uFF0C\u5C31\u662F window \u5BF9\u8C61\u4E2D\u7684\u51FD\u6570\u3002</li></ul></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><ul><li>\u6709\u4E00\u79CD\u7279\u6B8A\u60C5\u51B5\uFF0C\u5728 ES5 \u4EE5\u53CA\u4E4B\u524D\uFF0C\u6240\u6709<strong>\u6CA1\u6709</strong>\u901A\u8FC7<strong>var \u5173\u952E\u5B57</strong>\u58F0\u660E\u7684\u53D8\u91CF\u90FD\u4F1A\u9ED8\u8BA4\u8FDB\u884C<strong>\u53D8\u91CF\u63D0\u5347</strong>\uFF0C\u6210\u4E3A<strong>\u5168\u5C40\u53D8\u91CF</strong>\u3002</li></ul></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><strong>\u5C40\u90E8\u4F5C\u7528\u57DF</strong></p><ul><li><strong>\u5C40\u90E8\u4F5C\u7528\u57DF</strong>\uFF0C\u987E\u540D\u601D\u4E49\uFF0C\u5C31\u662F\u4EE3\u8868<strong>\u53EA\u4F5C\u7528\u5728\u67D0\u4E00\u5757\u533A\u57DF\u5185</strong>\uFF0C\u5728<strong>\u5C40\u90E8\u4F5C\u7528\u57DF</strong>\u5B9A\u4E49\u7684\u5185\u5BB9\uFF0C<strong>\u53EA\u5728\u8FD9\u4E00\u533A\u57DF\u53EF\u4EE5\u8BBF\u95EE\uFF0C\u5916\u90E8\u65E0\u6CD5\u8BBF\u95EE\u5C40\u90E8\u4F5C\u7528\u57DF</strong>\u3002</li><li><strong>\u5C40\u90E8\u4F5C\u7528\u57DF</strong>\u4E5F\u53EF\u4EE5\u79F0\u4E3A<strong>\u51FD\u6570\u4F5C\u7528\u57DF</strong>\uFF0C\u56E0\u4E3A<strong>\u5C40\u90E8\u4F5C\u7528\u57DF\u662F\u5728\u51FD\u6570\u8C03\u7528\u7684\u65F6\u5019\u751F\u6210</strong>\uFF0C\u5728<strong>\u51FD\u6570\u8C03\u7528\u5B8C\u6210\u540E\u9500\u6BC1</strong>\uFF0C\u800C\u51FD\u6570\u4F5C\u7528\u57DF\u5176\u5B9E\u5C31\u662F<strong>\u51FD\u6570\u7684 AO \u5BF9\u8C61\u4EE5\u53CA this(\u53EF\u4EE5\u7ED1\u5B9A)</strong>\u3002</li><li><strong>\u6BCF\u8C03\u7528\u4E00\u6B21\u51FD\u6570</strong>\u5C31\u4F1A\u521B\u5EFA\u4E00\u4E2A<strong>\u65B0\u7684\u51FD\u6570\u4F5C\u7528\u57DF</strong>\uFF0C\u5B83\u4EEC\u4E4B\u95F4\u662F<strong>\u76F8\u4E92\u72EC\u7ACB\u7684</strong>\u3002</li></ul></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><strong>\u4F5C\u7528\u57DF\u94FE</strong></p><ul><li>\u5F53\u6211\u4EEC\u67E5\u627E\u67D0\u4E2A\u53D8\u91CF\u6216\u5C5E\u6027\u65F6\uFF0C\u67E5\u627E\u7684\u8DEF\u5F84\u90FD\u662F\u6309\u7167<code>\u4F5C\u7528\u57DF\u94FE</code>\u6765\u67E5\u627E\uFF0C\u76F4\u81F3<strong>\u627E\u5230 GO \u4E3A\u6B62</strong></li><li><code>\u4F5C\u7528\u57DF\u94FE</code>\u5176\u5B9E\u5C31\u662F<code>\u81EA\u8EAB\u4E0A\u4E0B\u6587VO</code>\u52A0\u4E0A<code>\u7236\u7EA7\u7684\u4F5C\u7528\u57DF</code>\u3002</li></ul></div><ul><li>\u4E86\u89E3\u4E86\u5168\u5C40\u4F5C\u7528\u57DF\u4EE5\u53CA\u5C40\u90E8\u4F5C\u7528\u57DF\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5927\u6982\u4E86\u89E3\u4EC0\u4E48\u662F<strong>\u5168\u5C40\u53D8\u91CF</strong>\u4EE5\u53CA<strong>\u5C40\u90E8\u53D8\u91CF</strong>\u4E86\uFF0C\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\u58F0\u660E\u7684\u53D8\u91CF\u5C31\u662F\u5168\u5C40\u53D8\u91CF\uFF0C\u5728\u5C40\u90E8\u4F5C\u7528\u57DF\u58F0\u660E\u7684\u53D8\u91CF\u5C31\u662F\u5C40\u90E8\u53D8\u91CF</li></ul><h2 id="\u5168\u5C40\u53D8\u91CF\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u53D8\u91CF\u793A\u4F8B" aria-hidden="true">#</a> \u5168\u5C40\u53D8\u91CF\u793A\u4F8B</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>

bar <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">checkGlobalObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">checkGlobalObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123  456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u901A\u8FC7\u4E0A\u8FF0\u4EE3\u7801\u6211\u4EEC\u53EF\u77E5\uFF0Cfoo \u4EE5\u53CA bar \u90FD\u5728 script \u6587\u4EF6\u4E2D\uFF0C\u4E14\u5916\u5C42\u6CA1\u6709\u4EE3\u7801\u5757\uFF0C\u6240\u4EE5\u5B83\u4EEC\u88AB<strong>\u4F5C\u4E3A\u5168\u5C40\u53D8\u91CF</strong>\uFF0C\u5373\u4FBF\u5728\u51FD\u6570 checkGlobalObject \u4E2D\uFF0C\u4E5F\u53EF\u4EE5\u6B63\u5E38\u8BBF\u95EE foo \u548C bar\uFF0C\u5E76\u4E14 bar<strong>\u6CA1\u6709\u901A\u8FC7 var \u5173\u952E\u5B57</strong>\u58F0\u660E\uFF0C\u4E5F\u53EF\u4F5C\u4E3A\u5168\u5C40\u53D8\u91CF\u3002</p><h2 id="\u5C40\u90E8\u53D8\u91CF\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5C40\u90E8\u53D8\u91CF\u793A\u4F8B" aria-hidden="true">#</a> \u5C40\u90E8\u53D8\u91CF\u793A\u4F8B</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> bar <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123  bar is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u6211\u4EEC\u53EF\u77E5\uFF0C\u5F53\u4F7F\u7528 var \u5173\u952E\u5B57\u58F0\u660E\u53D8\u91CF bar \u7684\u65F6\u5019\uFF0C<strong>\u53D8\u91CF bar \u88AB\u5B9A\u4E49\u5728\u51FD\u6570 create \u7684\u5C40\u90E8\u4F5C\u7528\u57DF\u4E2D</strong>\uFF0C\u53EA\u53EF\u5728<strong>create \u5185\u90E8\u8BBF\u95EE</strong>\uFF0C\u5916\u90E8\u65E0\u6CD5\u8BBF\u95EE\uFF0C\u6B64\u65F6\u7684\u53D8\u91CF bar \u4E3A<strong>\u5C40\u90E8\u53D8\u91CF</strong>\u3002</p><ul><li>\u5982\u679C\u6211\u4EEC\u5728\u5C40\u90E8\u4F5C\u7528\u57DF\u4E2D\u4E0D\u7528\u4EFB\u4F55\u5173\u952E\u5B57\u6765\u58F0\u660E\u53D8\u91CF\u5462\uFF1F</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  foo <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return: 123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u6211\u4EEC\u53EF\u4EE5\u77E5\u9053\uFF0C\u5F53\u6211\u4EEC<strong>\u5728\u5C40\u90E8\u4F5C\u7528\u57DF\u4E2D\u4E0D\u4F7F\u7528\u4EFB\u4F55\u5173\u952E\u5B57\u58F0\u660E\u4E00\u4E2A\u53D8\u91CF\u65F6</strong>\uFF0C\u7CFB\u7EDF\u4F1A<strong>\u9ED8\u8BA4\u5C06\u8BE5\u53D8\u91CF\u4F5C\u4E3A\u5168\u5C40\u53D8\u91CF</strong>\uFF0C\u8FD9\u4E5F\u9A8C\u8BC1\u4E86\u6211\u4EEC\u4E0A\u9762\u7684\u89C2\u70B9\u3002</p><h2 id="\u5757\u7EA7\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u5757\u7EA7\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u5757\u7EA7\u4F5C\u7528\u57DF</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5176\u5B9E\u9664\u4E86<strong>\u5C40\u90E8\u4F5C\u7528\u57DF</strong>\u548C<strong>\u5168\u5C40\u4F5C\u7528\u57DF</strong>\uFF0C\u5728 ES6 \u4E2D\u6709\u4E86\u4E00\u4E2A\u65B0\u7684\u6982\u5FF5\u2014\u2014<strong>\u5757\u7EA7\u4F5C\u7528\u57DF</strong>\uFF0C\u5177\u4F53\u662F\u4EC0\u4E48\u610F\u601D\u5462\uFF1F\u987E\u540D\u601D\u4E49\uFF0C\u5757\u7EA7\u4F5C\u7528\u57DF\u7684\u610F\u601D\u5C31\u662F<strong>\u6BCF\u4E2A\u4EE3\u7801\u5757\u90FD\u6709\u81EA\u5DF1\u7684\u4F5C\u7528\u57DF</strong>\uFF0C\u6BD4\u5982\u4E00\u4E2A\u5927\u62EC\u53F7\u5305\u88F9\u8D77\u6765\u7684\u5185\u5BB9\u5C31\u662F\u4E00\u4E2A\u4EE3\u7801\u5757\uFF0C\u5B83\u6709\u4EC0\u4E48\u7528\u5462\uFF1F</p></div><p>\u6211\u4EEC\u5148\u6765\u770B\u8FD9\u6BB5\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//  ?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u4F1A\u6253\u5370\u51FA\u4EC0\u4E48\u5185\u5BB9\u5462\uFF1F\u5F88\u591A\u4EBA\u90FD\u4F1A\u89C9\u5F97\u662F 1 \u548C 123\uFF1F</p><p>\u5176\u5B9E\u5E76\u4E0D\u662F\uFF0C\u4E0A\u8FF0\u4EE3\u7801\u4F1A\u6253\u5370\u51FA<strong>undefined \u548C 123</strong>\u3002</p><p>\u4E3A\u4EC0\u4E48\u4F1A\u6253\u5370\u51FA<strong>undefined</strong>\u5462\u{1F62E}\uFF1F</p><p>\u539F\u56E0\u5C31\u662F\uFF0C\u5F53\u6211\u4EEC\u6267\u884C test \u51FD\u6570\u65F6\uFF0C\u56E0\u4E3A\u662F\u5728\u5C40\u90E8\u4F5C\u7528\u57DF\u4E2D\u8BBF\u95EE\u53D8\u91CF a\uFF0C\u56E0\u6B64\u4F1A<strong>\u5148\u53BB\u5C40\u90E8\u4F5C\u7528\u57DF\u4E2D\u5BFB\u627E\u53D8\u91CF a</strong>\uFF0C\u90A3\u5C40\u90E8\u4F5C\u7528\u57DF\u4E2D\u6709\u6CA1\u6709\u53D8\u91CF a \u5462\uFF1F\u6211\u4EEC\u53EF\u4EE5\u770B\u5230 if \u8BED\u53E5\u4E2D\u58F0\u660E\u4E86\u53D8\u91CF a\uFF0C\u4F46\u662F\u5F53\u6211\u4EEC\u8BBF\u95EE\u53D8\u91CF a \u65F6\uFF0C\u8FD8\u6CA1\u6709\u6267\u884C\u5230\u8FD9\u4E00\u6B65\uFF0C\u4F46\u662F\u6709<strong>\u53D8\u91CF\u63D0\u5347</strong>\u8FD9\u4E2A\u4E1C\u897F\u554A\uFF0C\u6B64\u65F6\u5728\u5C40\u90E8\u4F5C\u7528\u57DF\u4E2D<strong>\u53D8\u91CF a \u5DF2\u7ECF\u8FDB\u884C\u4E86\u53D8\u91CF\u63D0\u5347\u4E86</strong>\uFF0C\u5F53\u6211\u4EEC\u5728\u5C40\u90E8\u4F5C\u7528\u57DF\u4E2D\u8BBF\u95EE\u53D8\u91CF a \u65F6\uFF0C\u5C40\u90E8\u4F5C\u7528\u57DF\u662F\u8FD9\u6837\u7684<code>var a = undefined</code>\uFF0C\u56E0\u6B64<strong>\u7B2C\u4E00\u6B21</strong>\u6253\u5370\u4F1A\u6253\u5370\u51FA undefined\uFF0C\u800C\u7B2C\u4E8C\u6B21\u6253\u5370\u65F6\u56E0\u4E3A\u5DF2\u7ECF\u6267\u884C\u5B8C\u6BD5\u4E86<code>var a = 123</code>\uFF0C\u6240\u4EE5\u4F1A\u76F4\u63A5\u6253\u5370\u51FA 123\u3002</p><p>\u6211\u4EEC\u5148\u6765\u770B\u770B\u4E0A\u8FF0\u4EE3\u7801\u4E2D\u5982\u679C\u6211\u4EEC\u4F7F\u7528<code>let</code>\u6216\u8005<code>const</code>\u4F1A\u600E\u6837\u5462\uFF1F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
    <span class="token comment">// const a = 123</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//  1   123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u770B\u5230\u8FD9\u5F88\u591A\u4EBA\u4F1A\u95EE\uFF0C\u5C31\u6362\u4E2A\u5355\u8BCD\u5DEE\u8DDD\u8FD9\u4E48\u5927\uFF1F\u4E3A\u4EC0\u4E48\u7B2C\u4E00\u6B21\u76F4\u63A5\u7528\u4E86\u5168\u5C40\u53D8\u91CF a \u5462\uFF1F</p><p>\u9996\u5148\u6211\u4EEC\u9700\u8981\u4E86\u89E3\u4E00\u4E2A\u77E5\u8BC6\u70B9\u2014\u2014<strong>\u6682\u65F6\u6027\u6B7B\u533A</strong></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>\u6682\u65F6\u6027\u6B7B\u533A</li></ul><p>The variables are created when their containing Lexical Environment is instantiated but may not be accessed inany way until the variable\u2019s LexicalBinding is evaluated.</p><p>\u8BD1\u6587\uFF1A</p><p>\u5F53\u7A0B\u5E8F\u7684\u63A7\u5236\u6D41\u7A0B\u5728\u65B0\u7684\u4F5C\u7528\u57DF\uFF08module function \u6216 block \u4F5C\u7528\u57DF\uFF09\u8FDB\u884C\u5B9E\u4F8B\u5316\u65F6\uFF0C\u5728\u6B64\u4F5C\u7528\u57DF\u4E2D\u7528 let/const \u58F0\u660E\u7684\u53D8\u91CF\u4F1A\u5148\u5728\u4F5C\u7528\u57DF\u4E2D\u88AB\u521B\u5EFA\u51FA\u6765\uFF0C\u4F46\u56E0\u6B64\u65F6\u8FD8\u672A\u8FDB\u884C\u8BCD\u6CD5\u7ED1\u5B9A\uFF0C\u6240\u4EE5\u662F\u4E0D\u80FD\u88AB\u8BBF\u95EE\u7684\uFF0C\u5982\u679C\u8BBF\u95EE\u5C31\u4F1A\u629B\u51FA\u9519\u8BEF\u3002\u56E0\u6B64\uFF0C\u5728\u8FD9\u8FD0\u884C\u6D41\u7A0B\u8FDB\u5165\u4F5C\u7528\u57DF\u521B\u5EFA\u53D8\u91CF\uFF0C\u5230\u53D8\u91CF\u53EF\u4EE5\u88AB\u8BBF\u95EE\u4E4B\u95F4\u7684\u8FD9\u4E00\u6BB5\u65F6\u95F4\uFF0C\u5C31\u79F0\u4E4B\u4E3A\u6682\u65F6\u6B7B\u533A\u3002</p></div><p>\u8FD9\u8BF4\u660E\u5565\u5462\uFF1F\u8BF4\u660E\u5176\u5B9E\u5728\u5185\u90E8\u6211\u4EEC<strong>\u5DF2\u7ECF\u521B\u5EFA\u4E86\u5C40\u90E8\u4F5C\u7528\u57DF\u7684\u53D8\u91CF a</strong>\uFF0C\u53EA\u662F\u6B64\u65F6\u8FD8\u4E0D\u80FD\u88AB\u8BBF\u95EE\uFF0C\u56E0\u6B64\u5728\u6211\u4EEC\u7B2C\u4E00\u6B21\u6253\u5370\u53D8\u91CF a \u65F6\uFF0C\u8BBF\u95EE\u4E0D\u5230\u5C40\u90E8\u53D8\u91CF a\uFF0C\u53EA\u80FD\u53BB\u4E0A\u7EA7\u9010\u7EA7\u5BFB\u627E\uFF0C\u5728\u5168\u5C40\u53D8\u91CF\u4E2D\u627E\u5230\u4E86\u53D8\u91CF a\uFF0C\u56E0\u6B64<strong>\u7B2C\u4E00\u6B21\u6253\u5370\u51FA\u6765\u7684\u5C31\u662F\u5168\u5C40\u53D8\u91CF a(1)</strong>\uFF0C\u800C<strong>\u7B2C\u4E8C\u6B21\u5C31\u4F1A\u627E\u81EA\u5DF1\u7684\u5C40\u90E8\u53D8\u91CF\u4E86\uFF0C\u5C31\u4F1A\u6B63\u5E38\u6253\u5370\u51FA 123</strong></p><p>\u56E0\u4E3A<strong>\u6682\u65F6\u6027\u6B7B\u533A</strong>\u7684\u539F\u56E0\uFF0C\u4F7F\u5F97\u6211\u4EEC\u901A\u8FC7<code>let</code>\u548C<code>const</code>\u58F0\u660E\u7684\u53D8\u91CF\u6216\u5E38\u91CF<strong>\u53EA\u80FD\u5728\u540C\u7EA7\u7684\u4EE3\u7801\u5757\u4E2D\u4F7F\u7528</strong>\uFF0C\u8FD9\u4E5F\u5C31\u5F62\u6210\u4E86\u6240\u8C13\u7684<strong>\u5757\u7EA7\u4F5C\u7528\u57DF</strong>\u3002\u6211\u4EEC\u53EF\u4EE5\u7B80\u5355\u7406\u89E3\u4E3A<strong>\u62EC\u53F7\u5305\u88F9\u7684\u5185\u5BB9</strong>\u5C31\u5F62\u6210\u4E00\u4E2A\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C\u6BD4\u5982<strong>if \u8BED\u53E5</strong>,<strong>for \u5FAA\u73AF</strong>\u7B49\u3002</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u5F88\u591A\u4EBA\u90FD\u8BF4<code>let</code>\u548C<code>const</code>\u4E0D\u4F1A\u8FDB\u884C\u53D8\u91CF\u63D0\u5347\uFF0C\u8FD9\u79CD\u8BF4\u6CD5\u5176\u5B9E\u662F\u9519\u8BEF\u7684\uFF0C\u53EA\u662F\u56E0\u4E3A<strong>\u6682\u65F6\u6027\u6B7B\u533A</strong>\u7684\u5B58\u5728\uFF0C\u5BFC\u81F4\u6211\u4EEC\u611F\u5B98\u4E0A\u4E0D\u662F\u7279\u522B\u660E\u663E\uFF0C\u4F46\u662F\u8BF4\u5B83\u4EEC\u4E0D\u4F1A\u8FDB\u884C\u53D8\u91CF\u63D0\u5347\u662F\u9519\u8BEF\u7684\u3002</p></div><p>\u6211\u4EEC\u518D\u6765\u770B\u4E00\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&quot;global&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">global</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&quot;local&quot;</span><span class="token punctuation">;</span>
  <span class="token function">global</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5168\u5C40\u53D8\u91CF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u8FD9\u6BB5\u4EE3\u7801\u7684 global \u51FD\u6570\u4F1A\u6253\u5370\u51FA\u6765\u4EC0\u4E48\u5462\uFF1F</p><p>\u80AF\u5B9A\u5F88\u591A\u4EBA\u89C9\u5F97\u4F1A\u6253\u5370\u51FA<code>local</code>\uFF0C\u56E0\u4E3A global \u51FD\u6570\u5728 test \u51FD\u6570\u5185\u6267\u884C\uFF0C\u800C test \u51FD\u6570\u7684 AO/VO \u4E2D\u6709\u4E00\u4E2A\u53D8\u91CF a \u4E3A local\u3002</p><p>\u4F46\u662F\u5B83\u6253\u5370\u51FA\u6765\u7684\u662F<code>global</code>\uFF0C\u4E3A\u4EC0\u4E48\u5462\uFF1F\u5728<code>\u4F5C\u7528\u57DF\u94FE</code>\u7684\u6982\u5FF5\u4E2D\u6211\u4EEC\u8BF4\uFF0C\u67E5\u627E\u4E00\u4E2A\u53D8\u91CF\u4F1A\u987A\u7740\u4F5C\u7528\u57DF\u94FE\u67E5\u627E\uFF0C\u800C\u4F5C\u7528\u57DF\u94FE\u5176\u5B9E\u5C31\u662F\u81EA\u8EAB\u4E0A\u4E0B\u6587\u548C\u7236\u7EA7\u4F5C\u7528\u57DF\uFF0C\u6211\u4EEC<strong>\u53EA\u9700\u8981\u627E\u51FA\u6765 global \u51FD\u6570\u7684\u4F5C\u7528\u57DF\u94FE\u5C31\u77E5\u9053\u4E3A\u4EC0\u4E48\u4E86</strong>\u3002</p><p>\u6211\u4EEC\u627E<strong>\u51FD\u6570\u7684\u7236\u7EA7\u4F5C\u7528\u57DF\u65F6</strong>\uFF0C<strong>\u4E0D\u8981\u770B\u51FD\u6570\u5728\u54EA\u91CC\u88AB\u6267\u884C\uFF0C\u800C\u8981\u770B\u51FD\u6570\u5728\u54EA\u91CC\u88AB\u5B9A\u4E49</strong>\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u51FD\u6570 global \u5904\u4E8E\u5168\u5C40\u53D8\u91CF\u4E2D\uFF0C\u56E0\u6B64\uFF0C\u51FD\u6570 global \u7684\u7236\u7EA7\u80AF\u5B9A\u662F\u5168\u5C40\uFF0C\u4E5F\u5C31\u662F GO\u3002</p><p>\u6211\u4EEC\u518D\u770B global \u51FD\u6570\u81EA\u8EAB\u7684 VO \u90FD\u6709\u4EC0\u4E48\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\uFF0C\u5B83\u7684 AO/VO \u662F\u7A7A\u7684\uFF0C\u6240\u4EE5\u5F53\u6267\u884C global \u51FD\u6570\u6253\u5370\u53D8\u91CF a \u65F6\uFF0C\u5148\u53BB VO \u5BFB\u627E\uFF0C\u53D1\u73B0\u6CA1\u6709\uFF0C\u987A\u7740\u4F5C\u7528\u57DF\u94FE\u53BB GO \u4E2D\u5BFB\u627E\uFF0C\u53D1\u73B0 GO \u4E2D\u53D8\u91CF a \u7684\u503C\u4E3A&#39;global&#39;\uFF0C\u6240\u4EE5\u6253\u5370\u51FA\u4E86 global\u3002</p>`,52);function p(o,e){return t}var l=n(a,[["render",p],["__file","5.\u53D8\u91CF\u548C\u4F5C\u7528\u57DF.html.vue"]]);export{l as default};
