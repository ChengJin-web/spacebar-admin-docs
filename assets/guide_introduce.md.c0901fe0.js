import{E as o,o as t,c as r,F as i,G as n,U as s,J as h}from"./chunks/framework.76b79cb5.js";const c=s('<h1 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p><a href="https://github.com/ChengJin-web/Spacebar" target="_blank" rel="noreferrer">Spacebar</a> 一款基于 Vue3.3、TypeScript、Vite4、Pinia、Element-Plus 开源的后台管理框架，使用目前最新技术栈开发。本项目封装了一些常用组件、hooks、指令、动态路由、按钮级别权限控制等功能。</p><h2 id="需要掌握的基础知识" tabindex="-1">需要掌握的基础知识 <a class="header-anchor" href="#需要掌握的基础知识" aria-label="Permalink to &quot;需要掌握的基础知识&quot;">​</a></h2><ul><li><p>本项目基于 Vue3.3、Vite4、TS、Pinia、Element-Plus 开发，并全部采用了的单文件组件 <code>&lt;script setup&gt;</code> 写法。</p></li><li><p>建议您在开发前先学习以下内容，提前了解和学习这些知识，会对项目理解非常有帮助：</p><ul><li><a href="https://cn.vuejs.org/guide/introduction.html" target="_blank" rel="noreferrer">Vue3 文档</a></li><li><a href="https://router.vuejs.org/zh/guide/" target="_blank" rel="noreferrer">Vue-Router 文档</a></li><li><a href="https://cn.vitejs.dev/guide/" target="_blank" rel="noreferrer">Vite 文档</a></li><li><a href="https://www.typescriptlang.org/zh/docs/" target="_blank" rel="noreferrer">TypeScript 文档</a></li><li><a href="https://pinia.web3doc.top/introduction.html" target="_blank" rel="noreferrer">Pinia 文档</a></li><li><a href="https://element-plus.org/zh-CN/component/button.html" target="_blank" rel="noreferrer">Element-Plus 文档</a></li><li><a href="https://es6.ruanyifeng.com/" target="_blank" rel="noreferrer">ES6 教程</a></li></ul></li></ul><h2 id="关于版本更新" tabindex="-1">关于版本更新 <a class="header-anchor" href="#关于版本更新" aria-label="Permalink to &quot;关于版本更新&quot;">​</a></h2><ul><li>本项目后期将会经历不断的更新迭代，后期尽量不进行破坏性更新。对于大多数前端开源管理系统，它们无法像 npm 包那样平滑的升级版本，因此我们为此给出一些升级的建议。</li><li>在编写代码时，应尽量避免修改核心部分。如果业务需要对框架核心内容进行修改，请记录下修改内容，以免在之后的升级过程中被覆盖掉。</li></ul><h2 id="浏览器支持" tabindex="-1">浏览器支持 <a class="header-anchor" href="#浏览器支持" aria-label="Permalink to &quot;浏览器支持&quot;">​</a></h2><ul><li><p>本地开发推荐使用 Chrome 最新版浏览器 <a href="https://www.google.com/intl/zh-CN/chrome/" target="_blank" rel="noreferrer">Download</a>。</p></li><li><p>生产环境支持现代浏览器，不在支持 IE 浏览器，更多浏览器可以查看 <a href="https://caniuse.com/?search=ESModule" target="_blank" rel="noreferrer">Can I Use Es Module</a>。</p><table><thead><tr><th style="text-align:center;"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px"></a>IE</th><th style="text-align:center;"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px"></a>Edge</th><th style="text-align:center;"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px"></a>Firefox</th><th style="text-align:center;"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px"></a>Chrome</th><th style="text-align:center;"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px"></a>Safari</th></tr></thead><tbody><tr><td style="text-align:center;">not support</td><td style="text-align:center;">last 2 versions</td><td style="text-align:center;">last 2 versions</td><td style="text-align:center;">last 2 versions</td><td style="text-align:center;">last 2 versions</td></tr></tbody></table></li></ul><h2 id="主要维护者" tabindex="-1">主要维护者 <a class="header-anchor" href="#主要维护者" aria-label="Permalink to &quot;主要维护者&quot;">​</a></h2>',10),m=JSON.parse('{"title":"介绍","description":"","frontmatter":{},"headers":[],"relativePath":"guide/introduce.md","filePath":"guide/introduce.md","lastUpdated":1688456858000}'),g={name:"guide/introduce.md"},f=Object.assign(g,{setup(p){const a=[{src:"https://avatars.githubusercontent.com/u/110580672?v=4",link:"https://github.com/ChengJin-web",title:"JinCheng"}];return(d,u)=>{const l=o("Avatar");return t(),r("div",null,[c,(t(),r(i,null,n(a,e=>h(l,{title:e.title,src:e.src,link:e.link},null,8,["title","src","link"])),64))])}}});export{m as __pageData,f as default};
