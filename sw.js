if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,c,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const d={uri:location.origin+a.slice(1)};return Promise.all(c.map(a=>{switch(a){case"exports":return s;case"module":return d;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./sw.js",["./workbox-69b5a3b7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/2021.mekyle.com/404.html",revision:"f394c07e4ba1b019e50348b10845fa50"},{url:"/2021.mekyle.com/404/index.html",revision:"f394c07e4ba1b019e50348b10845fa50"},{url:"/2021.mekyle.com/about/index.html",revision:"ae8f2454d11692eacddcbe513b9fbc3a"},{url:"/2021.mekyle.com/assets/css/0.styles.2c24cda9.css",revision:"f8fe19884f9a774620373bcd867fca1c"},{url:"/2021.mekyle.com/assets/data/404/index.json",revision:"b937dda17486c13ad688cde0a4029829"},{url:"/2021.mekyle.com/assets/data/about/index.json",revision:"353c81d045129785c0577b6768691333"},{url:"/2021.mekyle.com/assets/data/index.json",revision:"17449d11960d4a7faf632d291dd4327d"},{url:"/2021.mekyle.com/assets/img/code-icons.76c5fd8b.svg",revision:"76c5fd8b3b2fe0070b430399c73aa224"},{url:"/2021.mekyle.com/assets/js/app.184ae047.js",revision:"a868f9d24a833c1fd5a669528b7613c4"},{url:"/2021.mekyle.com/assets/js/page--node-modules--gridsome--app--pages--404-vue.6a62518b.js",revision:"3e055cbf6ae1330c4c03f4869b107b02"},{url:"/2021.mekyle.com/assets/js/page--src--pages--about-vue.fe9120a7.js",revision:"1e9f97a62946d6e975c0208386a32ddc"},{url:"/2021.mekyle.com/assets/js/page--src--pages--index-vue.2ef90acd.js",revision:"784b21ec02c82f71c47a637c211b4729"},{url:"/2021.mekyle.com/assets/static/coop-icon.6e7923b.4a0336a2d145f1d5a6d6c6e85af41461.svg",revision:"4a0336a2d145f1d5a6d6c6e85af41461"},{url:"/2021.mekyle.com/assets/static/department-for-education.6e7923b.3af8d86743e1269565ef150725ca9910.svg",revision:"3af8d86743e1269565ef150725ca9910"},{url:"/2021.mekyle.com/assets/static/freeagent-icon.6e7923b.6375786be2da601aa73158b58e99ee3a.svg",revision:"6375786be2da601aa73158b58e99ee3a"},{url:"/2021.mekyle.com/assets/static/icon-120x120.png",revision:"b69e8efca3fad0f47c7190f6bf7ece89"},{url:"/2021.mekyle.com/assets/static/icon-128x128.png",revision:"f400d86661d072364dbe5fe223502a2a"},{url:"/2021.mekyle.com/assets/static/icon-144x144.png",revision:"30621dae358f5ab8559cd4765ce861df"},{url:"/2021.mekyle.com/assets/static/icon-152x152.png",revision:"35977e632d1a845c08529ee4269636d4"},{url:"/2021.mekyle.com/assets/static/icon-16x16.png",revision:"0466dd3c1dd9c2cee631dca942d5581b"},{url:"/2021.mekyle.com/assets/static/icon-180x180.png",revision:"e217f4e7eda20dfae984cdf63bd620bb"},{url:"/2021.mekyle.com/assets/static/icon-192x192.png",revision:"f9c20efa5197d6422fe5cff8d52ea65c"},{url:"/2021.mekyle.com/assets/static/icon-384x384.png",revision:"a25a09a8085332d683102490b3f2db94"},{url:"/2021.mekyle.com/assets/static/icon-48x48.png",revision:"281f073fe5830caab5f2cd86f9f07ee6"},{url:"/2021.mekyle.com/assets/static/icon-512x512.png",revision:"ea81b33aef3e4a406a1f04ee7dd26795"},{url:"/2021.mekyle.com/assets/static/icon-72x72.png",revision:"f7b113dfdf7a024be196e1265024aa00"},{url:"/2021.mekyle.com/assets/static/icon-96x96.png",revision:"705b0556d3dcb5150448fb50bfa3e0e8"},{url:"/2021.mekyle.com/assets/static/icon.1539b60.a6dde9af2bf01e70f2779a25fd1816f7.png",revision:"734b4e302b38ed378ce3b564d6facdd8"},{url:"/2021.mekyle.com/assets/static/icon.62d22cb.a6dde9af2bf01e70f2779a25fd1816f7.png",revision:"4ce29210171fbde1aaa636547350e784"},{url:"/2021.mekyle.com/assets/static/icon.7b22250.a6dde9af2bf01e70f2779a25fd1816f7.png",revision:"d9726a94f9a5e6dbfb9aa73523959ebb"},{url:"/2021.mekyle.com/assets/static/icon.ac8d93a.a6dde9af2bf01e70f2779a25fd1816f7.png",revision:"0d2c1ed7c92d4dd4aa68937c49cacad0"},{url:"/2021.mekyle.com/assets/static/icon.b9532cc.a6dde9af2bf01e70f2779a25fd1816f7.png",revision:"326344d257fb13b587678317b83b54ea"},{url:"/2021.mekyle.com/assets/static/icon.ce0531f.a6dde9af2bf01e70f2779a25fd1816f7.png",revision:"2a363c09811ea81fc82b805c302570ef"},{url:"/2021.mekyle.com/assets/static/icon.dc0cdc5.a6dde9af2bf01e70f2779a25fd1816f7.png",revision:"eb641772b1f37a7b1d5aac0e408fbe8d"},{url:"/2021.mekyle.com/assets/static/icon.f22e9f3.a6dde9af2bf01e70f2779a25fd1816f7.png",revision:"8d69ab066dd56bab6e684f52836dac20"},{url:"/2021.mekyle.com/assets/static/kyle-welsby-portrait-removebg.9cb5863.2af8505835d32c685302dd716d258b60.png",revision:"9c1b887eaa6b995a0deb0a6fe5c9a35c"},{url:"/2021.mekyle.com/assets/static/kyle-welsby-portrait-removebg.ed30b76.2af8505835d32c685302dd716d258b60.png",revision:"ad8a98253f4a3a8f9921572a37761c2d"},{url:"/2021.mekyle.com/assets/static/mago-icon.6e7923b.46564a2cee3502e047e71f55ed1d0a22.svg",revision:"46564a2cee3502e047e71f55ed1d0a22"},{url:"/2021.mekyle.com/assets/static/soulection-white-icon.198d85a.840c094562cf84b91ef2a07d50998daa.svg",revision:"840c094562cf84b91ef2a07d50998daa"},{url:"/2021.mekyle.com/assets/static/soulection-white-icon.1b91758.840c094562cf84b91ef2a07d50998daa.svg",revision:"840c094562cf84b91ef2a07d50998daa"},{url:"/2021.mekyle.com/assets/static/soulection-white-icon.3df3210.840c094562cf84b91ef2a07d50998daa.svg",revision:"840c094562cf84b91ef2a07d50998daa"},{url:"/2021.mekyle.com/assets/static/xing-icon.6e7923b.cbd39ef5c4e7f7a46f4bc4e2abe5b8d0.svg",revision:"cbd39ef5c4e7f7a46f4bc4e2abe5b8d0"},{url:"/2021.mekyle.com/index.html",revision:"4008b6cb294574e993724a945d3c465a"},{url:"/2021.mekyle.com/manifest.json",revision:"473247a379153d60d5c2800243a05199"},{url:"/2021.mekyle.com/404",revision:"28f25f53f5ce5d7c39f9df9ad1964986"},{url:"/2021.mekyle.com/about",revision:"a7224db13f3a49096aa27c1876d1a947"}],{})}));
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
