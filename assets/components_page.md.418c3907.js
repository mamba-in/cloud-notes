import{_ as a,f as n,e as t,N as s}from"./plugin-vue_export-helper.147b70e9.js";const h='{"title":"Page","description":"","frontmatter":{},"headers":[{"level":2,"title":"PageWrapper","slug":"pagewrapper"},{"level":3,"title":"Usage","slug":"usage"},{"level":3,"title":"Props","slug":"props"},{"level":3,"title":"Slots","slug":"slots"},{"level":2,"title":"PageFooter","slug":"pagefooter"},{"level":3,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":3,"title":"Slots","slug":"slots-1"}],"relativePath":"components/page.md","lastUpdated":1652416784985}',p={},e=s(`<h1 id="page"><a class="header-anchor" href="#page" aria-hidden="true">#</a> Page</h1><p>\u9875\u9762\u76F8\u5173\u7EC4\u4EF6</p><h2 id="pagewrapper"><a class="header-anchor" href="#pagewrapper" aria-hidden="true">#</a> PageWrapper</h2><p>\u7528\u4E8E\u5305\u88F9\u9875\u9762\u7EC4\u4EF6</p><h3 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PageWrapper</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#left</span><span class="token punctuation">&gt;</span></span>left<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#right</span><span class="token punctuation">&gt;</span></span>right<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PageWrapper</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> PageWrapper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Page&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> PageWrapper <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td><code>string</code></td><td>-</td><td>pageHeader title</td></tr><tr><td>dense</td><td><code>\u662F\u5426\u7F29\u5C0F\u4E3B\u4F53\u533A\u57DF</code></td><td>false</td><td>\u4E3A true \u5C06\u4F1A\u53D6\u6D88 padding/margin</td></tr><tr><td>content</td><td><code>string</code></td><td>-</td><td>pageHeader Content \u5185\u5BB9</td></tr><tr><td>contentStyle</td><td><code>object</code></td><td>-</td><td>\u4E3B\u4F53\u533A\u57DF\u6837\u5F0F</td></tr><tr><td>contentClass</td><td><code>string</code></td><td>-</td><td>\u4E3B\u4F53\u533A\u57DF class</td></tr><tr><td>contentBackground</td><td><code>boolean</code></td><td>-</td><td>\u4E3B\u4F53\u533A\u57DF\u80CC\u666F</td></tr><tr><td>contentFullHeight</td><td><code>boolean</code></td><td>false</td><td>\u4E3B\u4F53\u533A\u57DF\u662F\u5426\u5360\u6EE1\u6574\u4E2A\u5C4F\u5E55\u9AD8\u5EA6</td></tr><tr><td>fixedHeight</td><td><code>boolean</code></td><td>false</td><td>\u56FA\u5B9A\u4E3B\u4F53\u533A\u57DF\u9AD8\u5EA6</td></tr></tbody></table><h3 id="slots"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h3><p><strong>pageHeader \u7684 slot \u90FD\u652F\u6301</strong></p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>leftFooter</td><td>PageFooter \u5DE6\u4FA7\u533A\u57DF</td></tr><tr><td>rightFooter</td><td>PageFooter \u53F3\u4FA7\u533A\u57DF</td></tr><tr><td>headerContent</td><td>pageHeader \u4E3B\u4F53\u5185\u5BB9</td></tr><tr><td>default</td><td>\u4E3B\u4F53\u533A\u57DF</td></tr></tbody></table><h2 id="pagefooter"><a class="header-anchor" href="#pagefooter" aria-hidden="true">#</a> PageFooter</h2><p>\u7528\u4E8E\u9875\u9762\u5E95\u90E8\u5DE5\u5177\u680F</p><h3 id="\u4F7F\u7528"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PageFooter</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#left</span><span class="token punctuation">&gt;</span></span>left<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#right</span><span class="token punctuation">&gt;</span></span>right<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PageFooter</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> PageFooter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Page&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> PageFooter <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="slots-1"><a class="header-anchor" href="#slots-1" aria-hidden="true">#</a> Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>left</td><td>\u5DE6\u4FA7\u533A\u57DF</td></tr><tr><td>right</td><td>\u53F3\u4FA7\u533A\u57DF</td></tr></tbody></table>`,17),o=[e];function c(l,u,r,d,k,i){return t(),n("div",null,o)}var f=a(p,[["render",c]]);export{h as __pageData,f as default};