if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,c,i)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const f={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return a;case"module":return f;default:return e(s)}})).then(e=>{const s=i(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-69b5a3b7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/404.html",revision:"601e2c86353ae5e45e982439c387f9f2"},{url:"/404/index.html",revision:"601e2c86353ae5e45e982439c387f9f2"},{url:"/assets/css/0.styles.83b4493f.css",revision:"ac62cfb3f8308100a07e605be0dde30c"},{url:"/assets/data/404/index.json",revision:"393fc60ee88c10f617ee9fba0ca99c41"},{url:"/assets/data/cv/index.json",revision:"361dc443b5f2634f8a04598aadc4c0fa"},{url:"/assets/data/index.json",revision:"b90e6b1a654311332dfbc0d1620cb115"},{url:"/assets/img/code-icons.76c5fd8b.svg",revision:"76c5fd8b3b2fe0070b430399c73aa224"},{url:"/assets/js/app.257106dc.js",revision:"8323b337452539d12e7cbf61b9f914d7"},{url:"/assets/js/page--node-modules--gridsome--app--pages--404-vue.6a62518b.js",revision:"3e055cbf6ae1330c4c03f4869b107b02"},{url:"/assets/js/page--src--pages--cv-vue.d63b426b.js",revision:"37565b3394308c524cc3a7b62030b1e0"},{url:"/assets/js/page--src--pages--index-vue.d0a3f9cd.js",revision:"e79bec6ed849725ea1dc804cc5bce281"},{url:"/assets/static/coop-icon.6e7923b.4a0336a2d145f1d5a6d6c6e85af41461.svg",revision:"4a0336a2d145f1d5a6d6c6e85af41461"},{url:"/assets/static/department-for-education.6e7923b.3af8d86743e1269565ef150725ca9910.svg",revision:"3af8d86743e1269565ef150725ca9910"},{url:"/assets/static/freeagent-icon.6e7923b.6375786be2da601aa73158b58e99ee3a.svg",revision:"6375786be2da601aa73158b58e99ee3a"},{url:"/assets/static/github-brands.6e7923b.80c42a1af9d0339672a4cd2bd19ac909.svg",revision:"80c42a1af9d0339672a4cd2bd19ac909"},{url:"/assets/static/icon-120x120.png",revision:"b69e8efca3fad0f47c7190f6bf7ece89"},{url:"/assets/static/icon-128x128.png",revision:"f400d86661d072364dbe5fe223502a2a"},{url:"/assets/static/icon-144x144.png",revision:"30621dae358f5ab8559cd4765ce861df"},{url:"/assets/static/icon-152x152.png",revision:"35977e632d1a845c08529ee4269636d4"},{url:"/assets/static/icon-16x16.png",revision:"0466dd3c1dd9c2cee631dca942d5581b"},{url:"/assets/static/icon-180x180.png",revision:"e217f4e7eda20dfae984cdf63bd620bb"},{url:"/assets/static/icon-192x192.png",revision:"f9c20efa5197d6422fe5cff8d52ea65c"},{url:"/assets/static/icon-384x384.png",revision:"a25a09a8085332d683102490b3f2db94"},{url:"/assets/static/icon-48x48.png",revision:"281f073fe5830caab5f2cd86f9f07ee6"},{url:"/assets/static/icon-512x512.png",revision:"ea81b33aef3e4a406a1f04ee7dd26795"},{url:"/assets/static/icon-72x72.png",revision:"f7b113dfdf7a024be196e1265024aa00"},{url:"/assets/static/icon-96x96.png",revision:"705b0556d3dcb5150448fb50bfa3e0e8"},{url:"/assets/static/icon.1539b60.a6dde9af2bf01e70f2779a25fd1816f7.png",revision:"734b4e302b38ed378ce3b564d6facdd8"},{url:"/assets/static/icon.62d22cb.a6dde9af2bf01e70f2779a25fd1816f7.png",revision:"4ce29210171fbde1aaa636547350e784"},{url:"/assets/static/icon.7b22250.a6dde9af2bf01e70f2779a25fd1816f7.png",revision:"d9726a94f9a5e6dbfb9aa73523959ebb"},{url:"/assets/static/icon.ac8d93a.a6dde9af2bf01e70f2779a25fd1816f7.png",revision:"0d2c1ed7c92d4dd4aa68937c49cacad0"},{url:"/assets/static/icon.b9532cc.a6dde9af2bf01e70f2779a25fd1816f7.png",revision:"326344d257fb13b587678317b83b54ea"},{url:"/assets/static/icon.ce0531f.a6dde9af2bf01e70f2779a25fd1816f7.png",revision:"2a363c09811ea81fc82b805c302570ef"},{url:"/assets/static/icon.dc0cdc5.a6dde9af2bf01e70f2779a25fd1816f7.png",revision:"eb641772b1f37a7b1d5aac0e408fbe8d"},{url:"/assets/static/icon.f22e9f3.a6dde9af2bf01e70f2779a25fd1816f7.png",revision:"8d69ab066dd56bab6e684f52836dac20"},{url:"/assets/static/kyle-welsby-portrait-halo-removebg.1678e0a.be8676278cf5dd1307b8b826bdd5bb49.png",revision:"6a14af1709688bcc53e46ee6e4e22113"},{url:"/assets/static/kyle-welsby-portrait-halo-removebg.21501f2.be8676278cf5dd1307b8b826bdd5bb49.png",revision:"c076fb46e4f01e7bec9f6186ecc556a0"},{url:"/assets/static/linkedin-brands.6e7923b.b86284e6e357ab4779a45c080900a0df.svg",revision:"b86284e6e357ab4779a45c080900a0df"},{url:"/assets/static/mago-icon.6e7923b.46564a2cee3502e047e71f55ed1d0a22.svg",revision:"46564a2cee3502e047e71f55ed1d0a22"},{url:"/assets/static/paper-plane-light.6e7923b.25b7dcde5c802579c5c0784801ce7759.svg",revision:"25b7dcde5c802579c5c0784801ce7759"},{url:"/assets/static/phone-alt-light.6e7923b.6937e8471470933a89a83548ec800aeb.svg",revision:"6937e8471470933a89a83548ec800aeb"},{url:"/assets/static/soulection-white-icon.198d85a.840c094562cf84b91ef2a07d50998daa.svg",revision:"840c094562cf84b91ef2a07d50998daa"},{url:"/assets/static/soulection-white-icon.1b91758.840c094562cf84b91ef2a07d50998daa.svg",revision:"840c094562cf84b91ef2a07d50998daa"},{url:"/assets/static/soulection-white-icon.3df3210.840c094562cf84b91ef2a07d50998daa.svg",revision:"840c094562cf84b91ef2a07d50998daa"},{url:"/assets/static/sounddrain-icon.0d7bb5f.36e0760e16ee7e45c90343463617fe85.png",revision:"a45dec74a7aafb7f4cf86d9a9af2998f"},{url:"/assets/static/stack-overflow-brands.6e7923b.f6073f6e48c3d4f14935fae784cc7926.svg",revision:"f6073f6e48c3d4f14935fae784cc7926"},{url:"/assets/static/twitter-brands.6e7923b.f85901f59595b31d2c258d250f806fc1.svg",revision:"f85901f59595b31d2c258d250f806fc1"},{url:"/assets/static/xing-icon.6e7923b.cbd39ef5c4e7f7a46f4bc4e2abe5b8d0.svg",revision:"cbd39ef5c4e7f7a46f4bc4e2abe5b8d0"},{url:"/cv/index.html",revision:"6c800a93045616408ec3f444f1a1f148"},{url:"/index.html",revision:"42d10f980eb88436b6b213e51f19d482"},{url:"/manifest.json",revision:"af806b4ea94c313b83d6ea27f7ca180d"},{url:"/404",revision:"28f25f53f5ce5d7c39f9df9ad1964986"},{url:"/cv",revision:"143fee3f3b3a8fa64d1808e4eebfb86e"}],{})}));
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