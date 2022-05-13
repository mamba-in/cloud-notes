import{_ as t,f as a,e as n,N as s}from"./plugin-vue_export-helper.147b70e9.js";const g='{"title":"CountTo","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Methods","slug":"methods"}],"relativePath":"components/count-to.md","lastUpdated":1652416784977}',o={},e=s(`__VP_STATIC_START__<h1 id="countto"><a class="header-anchor" href="#countto" aria-hidden="true">#</a> CountTo</h1><p>\u6570\u5B57\u52A8\u753B\u7EC4\u4EF6</p><p>\u8BE5\u7EC4\u4EF6\u5BF9 <a href="https://github.com/PanJiaChen/vue-countTo" target="_blank" rel="noopener noreferrer">vue-countTo</a> \u8FDB\u884C\u4E86\u91CD\u6784\uFF0C\u6539\u9020\u6210\u9002\u914D vue3 \u8BED\u6CD5\u7684\u7EC4\u4EF6\u3002</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CountTo</span> <span class="token attr-name">prefix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>#409EFF<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">:startVal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:endVal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200000<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:duration</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8000<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> CountTo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/CountTo/index&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      CountTo<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>startVal</td><td><code>number</code></td><td><code>0</code></td><td>\u8D77\u59CB\u503C</td></tr><tr><td>endVal</td><td><code>number</code></td><td><code>2021</code></td><td>\u7ED3\u675F\u503C</td></tr><tr><td>duration</td><td><code>number</code></td><td><code>1500</code></td><td>\u52A8\u753B\u6301\u7EED\u65F6\u95F4</td></tr><tr><td>autoplay</td><td><code>boolean</code></td><td><code>true</code></td><td>\u81EA\u52A8\u6267\u884C</td></tr><tr><td>prefix</td><td><code>string</code></td><td>-</td><td>\u524D\u7F00</td></tr><tr><td>suffix</td><td><code>string</code></td><td>-</td><td>\u540E\u7F00</td></tr><tr><td>separator</td><td><code>string</code></td><td><code>,</code></td><td>\u5206\u9694\u7B26</td></tr><tr><td>color</td><td><code>string</code></td><td>-</td><td>\u5B57\u4F53\u989C\u8272</td></tr><tr><td>useEasing</td><td><code>boolean</code></td><td><code>true</code></td><td>\u662F\u5426\u5F00\u542F\u52A8\u753B</td></tr><tr><td>transition</td><td><code>string</code></td><td><code>linear</code></td><td>\u52A8\u753B\u6548\u679C</td></tr><tr><td>decimals</td><td><code>number</code></td><td><code>0</code></td><td>\u4FDD\u7559\u5C0F\u6570\u70B9\u4F4D\u6570</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>start</td><td><code>()=&gt;void</code></td><td>\u5F00\u59CB\u6267\u884C\u52A8\u753B</td></tr><tr><td>reset</td><td><code>()=&gt;void</code></td><td>\u91CD\u7F6E</td></tr></tbody></table>__VP_STATIC_END__`,9),p=[e];function c(d,u,r,l,i,k){return n(),a("div",null,p)}var m=t(o,[["render",c]]);export{g as __pageData,m as default};
