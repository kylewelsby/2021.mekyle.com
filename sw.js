if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,c,i)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const o={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return a;case"module":return o;default:return e(s)}})).then(e=>{const s=i(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-69b5a3b7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/2021.mekyle.com/404.html",revision:"975c198a1b1847e9c35f8abbc593a5fc"},{url:"/2021.mekyle.com/404/index.html",revision:"975c198a1b1847e9c35f8abbc593a5fc"},{url:"/2021.mekyle.com/about/index.html",revision:"53fc6898859e8d8a3f579a0e189c32f7"},{url:"/2021.mekyle.com/assets/css/0.styles.fbf7b922.css",revision:"80cf3fc43b84a0e2260870df7d8e493e"},{url:"/2021.mekyle.com/assets/data/404/index.json",revision:"d2792ffc6e5f58af7258e9434b4d0357"},{url:"/2021.mekyle.com/assets/data/about/index.json",revision:"b69035aaf326b3936790d2767a3f0b3c"},{url:"/2021.mekyle.com/assets/data/index.json",revision:"e8d61a7f242b46034724b814ce863297"},{url:"/2021.mekyle.com/assets/img/code-icons.76c5fd8b.svg",revision:"76c5fd8b3b2fe0070b430399c73aa224"},{url:"/2021.mekyle.com/assets/js/app.18e75ea7.js",revision:"6bc088680a5d7e9e7a2fa6966928fb47"},{url:"/2021.mekyle.com/assets/js/page--node-modules--gridsome--app--pages--404-vue.6a62518b.js",revision:"3e055cbf6ae1330c4c03f4869b107b02"},{url:"/2021.mekyle.com/assets/js/page--src--pages--about-vue.fe9120a7.js",revision:"1e9f97a62946d6e975c0208386a32ddc"},{url:"/2021.mekyle.com/assets/js/page--src--pages--index-vue.99d7252d.js",revision:"710be40da6068042e1b3df9608b4f92e"},{url:"/2021.mekyle.com/assets/static/icon-120x120.png",revision:"b69e8efca3fad0f47c7190f6bf7ece89"},{url:"/2021.mekyle.com/assets/static/icon-128x128.png",revision:"f400d86661d072364dbe5fe223502a2a"},{url:"/2021.mekyle.com/assets/static/icon-144x144.png",revision:"30621dae358f5ab8559cd4765ce861df"},{url:"/2021.mekyle.com/assets/static/icon-152x152.png",revision:"35977e632d1a845c08529ee4269636d4"},{url:"/2021.mekyle.com/assets/static/icon-16x16.png",revision:"0466dd3c1dd9c2cee631dca942d5581b"},{url:"/2021.mekyle.com/assets/static/icon-180x180.png",revision:"e217f4e7eda20dfae984cdf63bd620bb"},{url:"/2021.mekyle.com/assets/static/icon-192x192.png",revision:"f9c20efa5197d6422fe5cff8d52ea65c"},{url:"/2021.mekyle.com/assets/static/icon-384x384.png",revision:"a25a09a8085332d683102490b3f2db94"},{url:"/2021.mekyle.com/assets/static/icon-48x48.png",revision:"281f073fe5830caab5f2cd86f9f07ee6"},{url:"/2021.mekyle.com/assets/static/icon-512x512.png",revision:"ea81b33aef3e4a406a1f04ee7dd26795"},{url:"/2021.mekyle.com/assets/static/icon-72x72.png",revision:"f7b113dfdf7a024be196e1265024aa00"},{url:"/2021.mekyle.com/assets/static/icon-96x96.png",revision:"705b0556d3dcb5150448fb50bfa3e0e8"},{url:"/2021.mekyle.com/assets/static/icon.1539b60.a6dde9af2bf01e70f2779a25fd1816f7.png",revision:"734b4e302b38ed378ce3b564d6facdd8"},{url:"/2021.mekyle.com/assets/static/icon.62d22cb.a6dde9af2bf01e70f2779a25fd1816f7.png",revision:"4ce29210171fbde1aaa636547350e784"},{url:"/2021.mekyle.com/assets/static/icon.7b22250.a6dde9af2bf01e70f2779a25fd1816f7.png",revision:"d9726a94f9a5e6dbfb9aa73523959ebb"},{url:"/2021.mekyle.com/assets/static/icon.ac8d93a.a6dde9af2bf01e70f2779a25fd1816f7.png",revision:"0d2c1ed7c92d4dd4aa68937c49cacad0"},{url:"/2021.mekyle.com/assets/static/icon.b9532cc.a6dde9af2bf01e70f2779a25fd1816f7.png",revision:"326344d257fb13b587678317b83b54ea"},{url:"/2021.mekyle.com/assets/static/icon.ce0531f.a6dde9af2bf01e70f2779a25fd1816f7.png",revision:"2a363c09811ea81fc82b805c302570ef"},{url:"/2021.mekyle.com/assets/static/icon.dc0cdc5.a6dde9af2bf01e70f2779a25fd1816f7.png",revision:"eb641772b1f37a7b1d5aac0e408fbe8d"},{url:"/2021.mekyle.com/assets/static/icon.f22e9f3.a6dde9af2bf01e70f2779a25fd1816f7.png",revision:"8d69ab066dd56bab6e684f52836dac20"},{url:"/2021.mekyle.com/assets/static/kyle-welsby-portrait-removebg.9cb5863.2af8505835d32c685302dd716d258b60.png",revision:"9c1b887eaa6b995a0deb0a6fe5c9a35c"},{url:"/2021.mekyle.com/assets/static/kyle-welsby-portrait-removebg.ed30b76.2af8505835d32c685302dd716d258b60.png",revision:"ad8a98253f4a3a8f9921572a37761c2d"},{url:"/2021.mekyle.com/assets/static/soulection-white-icon.198d85a.840c094562cf84b91ef2a07d50998daa.svg",revision:"840c094562cf84b91ef2a07d50998daa"},{url:"/2021.mekyle.com/assets/static/soulection-white-icon.1b91758.840c094562cf84b91ef2a07d50998daa.svg",revision:"840c094562cf84b91ef2a07d50998daa"},{url:"/2021.mekyle.com/assets/static/soulection-white-icon.3df3210.840c094562cf84b91ef2a07d50998daa.svg",revision:"840c094562cf84b91ef2a07d50998daa"},{url:"/2021.mekyle.com/index.html",revision:"9f9a61b8004e3c0303ffc5346caea571"},{url:"/2021.mekyle.com/manifest.json",revision:"473247a379153d60d5c2800243a05199"},{url:"/2021.mekyle.com/404",revision:"28f25f53f5ce5d7c39f9df9ad1964986"},{url:"/2021.mekyle.com/about",revision:"a7224db13f3a49096aa27c1876d1a947"}],{})}));
//# sourceMappingURL=sw.js.map

addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'SKIP_WAITING') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
