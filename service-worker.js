if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-282d8a9c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.924122d4.css",revision:"e013739a8c43e82bc501eed91a35cd74"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/github.a1e39198.svg",revision:"a1e391981e5e43f8875a34775dcfea10"},{url:"assets/img/gitlab.342b15ab.svg",revision:"342b15ab62a5275f03261b5c8924b20f"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/jenkins.a7fef8b7.svg",revision:"a7fef8b704892718286a3502f6e271a1"},{url:"assets/img/mcbbslink.cad2c3f5.svg",revision:"cad2c3f514e8abb90c43e657be559056"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/spigotmclink.f1a3e211.svg",revision:"f1a3e2112dd520dedb690b2befcf7817"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/30.c63fdf73.js",revision:"0a0bee472c7689602841021721014583"},{url:"assets/js/31.16ad01ca.js",revision:"beb4caefd98533378a3b67ba4f857bdf"},{url:"assets/js/32.41be3ee0.js",revision:"2ee5aadc567af01cc43555eea57590c7"},{url:"assets/js/33.c458040e.js",revision:"19cba8e739d8b1086be5b844cb549369"},{url:"assets/js/34.a7755685.js",revision:"334c000fd7db463560a12e680b9139c9"},{url:"assets/js/35.36945afe.js",revision:"d61c6dd68f4c56e7ee1ae988dae18f46"},{url:"assets/js/app.a86e8e38.js",revision:"03cf490ff749e6c12e71487a82e3f8fe"},{url:"assets/js/layout-Blog.01806e73.js",revision:"f6623ef252344fb4d279f6ef796f4b4c"},{url:"assets/js/layout-Layout.9e26acae.js",revision:"affe4f6f4a9e0118ee856ad58209e00d"},{url:"assets/js/layout-NotFound.bc0a41d8.js",revision:"158c91b45288be823fe093fcc886a58d"},{url:"assets/js/layout-Slide.5a5f5120.js",revision:"a302ac3b949cf1a565dda878732ff812"},{url:"assets/js/mermaid.08aafb36.js",revision:"ca2c029615676b2619e33a4ca5c9dcc3"},{url:"assets/js/page-①GriefDefender.96569da8.js",revision:"2e7a82d70e0728b0061320642718e480"},{url:"assets/js/page-①RoseStacker.37a940df.js",revision:"a64c2fe580391a131e402651d8c437dd"},{url:"assets/js/page-②Chunky.d160e070.js",revision:"057be9e6cc46b4e2579be3d989f2d0b0"},{url:"assets/js/page-②FastAsyncWorldEdit.d824d397.js",revision:"fc286ad03630ca4d2e6c6377199575b3"},{url:"assets/js/page-③LibertyBans.dded634c.js",revision:"53c0ffa4f5a25ede57a2dd96bade86cf"},{url:"assets/js/page-④ServerUtils.1557be1d.js",revision:"b1e89efd0c88e0c4708cfba265f1832f"},{url:"assets/js/page-⑤UltimateChat.300f39e0.js",revision:"5e4a6df9b2ec2cfd7ec118e0a67f031b"},{url:"assets/js/page-⑥ajQueue.cdfbe2fc.js",revision:"d9666849cff29cd8947d6a47b0897613"},{url:"assets/js/page-⑦Prism.d3993c58.js",revision:"9661ada807ec571bbc66b1fecabf643c"},{url:"assets/js/page-IntroPage.68e76916.js",revision:"618b9a6881ffa3cae9e898e71313ab60"},{url:"assets/js/page-MC插件推荐.6216ad53.js",revision:"a9c73cacadf6b4a8738b8cd4c9318c68"},{url:"assets/js/page-Slidepage.435c5a34.js",revision:"43d35f4486c8042d9a2f09cbce7ddd5f"},{url:"assets/js/page-导言.609f7980.js",revision:"58ad7da09374b708c164f4565bf0169e"},{url:"assets/js/page-投稿指北.02fcfb04.js",revision:"a8472f99b1af64c2fb169667e0975661"},{url:"assets/js/page-目录.1cdb1b2d.js",revision:"96b84fde713ea68815837c9ec3e45c0a"},{url:"assets/js/page-项目介绍.ac719e70.js",revision:"3df8d28284e432248ac691239e2734e3"},{url:"assets/js/vendors~flowchart.8182d1a6.js",revision:"b1a17559d2649c2eee1be2c8ad719bf8"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.f81813cf.js",revision:"4713630c5c705717aff7456ab7540e22"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.4d691b35.js",revision:"b8dcfb2968c30ffb5159626b977b8177"},{url:"assets/js/vendors~layout-Layout.c0e9c4b7.js",revision:"30e3fc3e4af490624b6861cc56c9fc67"},{url:"assets/js/vendors~mermaid.f860b0ed.js",revision:"61e76f08cd02ba8611dfbf2a36774662"},{url:"assets/js/vendors~photo-swipe.01fba4f3.js",revision:"97664348450a1abdd63e8054937ce916"},{url:"assets/js/vendors~reveal.8ceae479.js",revision:"7c3597caf497d677ff7271fb3b1932b1"},{url:"assets/fonts/KaTeX_AMS-Regular.3e94a45c.ttf",revision:"3e94a45ca214f93c9774291237bb393e"},{url:"assets/fonts/KaTeX_AMS-Regular.7bc59ee9.woff",revision:"7bc59ee9f9ad43040a2ff34a912bec13"},{url:"assets/fonts/KaTeX_AMS-Regular.92297720.woff2",revision:"92297720a8aaa0d239940bf10509fa1f"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4c370560.ttf",revision:"4c37056017b7f742eeb8851510f4971a"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.096ac2cc.ttf",revision:"096ac2cc25065eeca89ca560d0a51b1a"},{url:"assets/fonts/KaTeX_Fraktur-Bold.06e6c3f3.ttf",revision:"06e6c3f3900bf855fe69c6adbf2b59ac"},{url:"assets/fonts/KaTeX_Fraktur-Bold.5ec2d705.woff2",revision:"5ec2d70532268860be506b06c8c82615"},{url:"assets/fonts/KaTeX_Fraktur-Bold.8518f4fe.woff",revision:"8518f4fec3f73b37b3693f3625bc146b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.56d671ca.woff2",revision:"56d671ca5dc88ca20911bddc5a84c9fb"},{url:"assets/fonts/KaTeX_Fraktur-Regular.c5953fef.woff",revision:"c5953fefe37f48064e17b75ff607fc0d"},{url:"assets/fonts/KaTeX_Fraktur-Regular.e78f1f02.ttf",revision:"e78f1f025d28668ddcaa2791fc818436"},{url:"assets/fonts/KaTeX_Main-Bold.36af3e91.woff",revision:"36af3e91a84645afe0e40be8046fba86"},{url:"assets/fonts/KaTeX_Main-Bold.5c603567.ttf",revision:"5c6035670847d3c6f8af38393b04eee9"},{url:"assets/fonts/KaTeX_Main-Bold.d94e53ed.woff2",revision:"d94e53ed77ae219e76e90cf02e7d627d"},{url:"assets/fonts/KaTeX_Main-BoldItalic.addf8657.woff2",revision:"addf865739892218570c00053c6c02dc"},{url:"assets/fonts/KaTeX_Main-BoldItalic.ceb7b930.woff",revision:"ceb7b93007c7e338f635833a4259a14b"},{url:"assets/fonts/KaTeX_Main-BoldItalic.dde48012.ttf",revision:"dde48012334937d446600e982f5d8522"},{url:"assets/fonts/KaTeX_Main-Italic.2bc9206b.woff",revision:"2bc9206b7e2d0c75941d4930b1990e49"},{url:"assets/fonts/KaTeX_Main-Italic.890a6b3f.ttf",revision:"890a6b3ff7159ac41c71ccd2c4e76323"},{url:"assets/fonts/KaTeX_Main-Italic.c24bf2da.woff2",revision:"c24bf2da2b956b13ba8101dda48a2d77"},{url:"assets/fonts/KaTeX_Main-Regular.16df5fa9.woff",revision:"16df5fa99e77eff4b91a4f3423b761d4"},{url:"assets/fonts/KaTeX_Main-Regular.46b1ffa6.woff2",revision:"46b1ffa6b7af252c4f89e7c8d757a39f"},{url:"assets/fonts/KaTeX_Main-Regular.d866ab9b.ttf",revision:"d866ab9ba6d5654e524ec6bd5e1d5a14"},{url:"assets/fonts/KaTeX_Math-BoldItalic.a562e8c1.woff",revision:"a562e8c1abe0de60ffc1f77ed9412327"},{url:"assets/fonts/KaTeX_Math-BoldItalic.bb40192b.woff2",revision:"bb40192b2e03ed2f0fa8ee17ff587fd3"},{url:"assets/fonts/KaTeX_Math-BoldItalic.cbf87238.ttf",revision:"cbf872382693c0b1c71f5df380206d7a"},{url:"assets/fonts/KaTeX_Math-Italic.92281c86.woff",revision:"92281c86717a2642f166728a8973f3f9"},{url:"assets/fonts/KaTeX_Math-Italic.96c61839.ttf",revision:"96c61839461dd0264a18a65a39212a62"},{url:"assets/fonts/KaTeX_Math-Italic.c359b8d5.woff2",revision:"c359b8d5e269eaf907baa338587ca80e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.26f259e4.woff",revision:"26f259e4e6c41f013a51f790e3a7dd0c"},{url:"assets/fonts/KaTeX_SansSerif-Bold.95392fb8.woff2",revision:"95392fb82420439d0c3bb9f2d414f83c"},{url:"assets/fonts/KaTeX_SansSerif-Bold.cb7f745a.ttf",revision:"cb7f745a9094fa659195d2d6f13711eb"},{url:"assets/fonts/KaTeX_SansSerif-Italic.7de8e4ae.woff2",revision:"7de8e4ae08eaaeb10a5112ce7f09ba80"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9c330d9e.ttf",revision:"9c330d9e5674fd3e79c644e451240331"},{url:"assets/fonts/KaTeX_SansSerif-Italic.a8f101e8.woff",revision:"a8f101e81769f08428b1e01d4b04c033"},{url:"assets/fonts/KaTeX_SansSerif-Regular.3ad86448.woff2",revision:"3ad86448e4a27c0e4a9b4e333aebeaa7"},{url:"assets/fonts/KaTeX_SansSerif-Regular.63e176e6.ttf",revision:"63e176e62748655e2076a07a12cc9355"},{url:"assets/fonts/KaTeX_SansSerif-Regular.df1117b1.woff",revision:"df1117b1c61ba086c7c286b4132350d3"},{url:"assets/fonts/KaTeX_Script-Regular.1e0cfc32.woff",revision:"1e0cfc3296ecafedbd818c2dd8e42d44"},{url:"assets/fonts/KaTeX_Script-Regular.52316064.ttf",revision:"52316064070cd6860d779f6a1185633e"},{url:"assets/fonts/KaTeX_Size1-Regular.f8369ce8.ttf",revision:"f8369ce8f0adc37a0654c8e989499e7c"},{url:"assets/fonts/KaTeX_Size2-Regular.90b50b45.ttf",revision:"90b50b453237cd955bbe7b979bb7345a"},{url:"assets/fonts/KaTeX_Size4-Regular.70d01e49.ttf",revision:"70d01e490e97425d479807ea319ceed5"},{url:"assets/fonts/KaTeX_Typewriter-Regular.099e00d5.woff2",revision:"099e00d5873cd2d4ef3ca5d23c23c313"},{url:"assets/fonts/KaTeX_Typewriter-Regular.2f005719.ttf",revision:"2f0057192d241cb99d64bba848b0164a"},{url:"assets/fonts/KaTeX_Typewriter-Regular.2f78c7d7.woff",revision:"2f78c7d76fe78153d0ca675b3923507d"},{url:"404.html",revision:"9d4434ebb1affc0815cf9bd3fb48443e"},{url:"Bukkit/FastAsyncWorldEdit/index.html",revision:"53fcc471c904f92e0067e240788e6509"},{url:"Bukkit/RoseStacker/index.html",revision:"6a2c29dc1d85ff52a5640cd8e226a6c3"},{url:"contribution/index.html",revision:"f418beb015d6efdec5179a861fdfc29d"},{url:"home/index.html",revision:"33f828cdc7ece0f316807a670eb71664"},{url:"index.html",revision:"bc50285ac06fd0d2c0b19a2d565ef423"},{url:"intro/index.html",revision:"57226dfee51eefbe54891c1b63bb2fda"},{url:"introduction/index.html",revision:"e6079e519a74d29e29a945c6d2ce0aa4"},{url:"slides/index.html",revision:"20e22f949534e2d8c5e02d7af61603fd"},{url:"多平台/ajQueue/index.html",revision:"4f3f6b374e7514202958126c9e5eee1f"},{url:"多平台/Chunky/index.html",revision:"68e2bc4749d85ebec218655d1f159747"},{url:"多平台/GriefDefender/index.html",revision:"f65bc85977361955a99b92ddc0662159"},{url:"多平台/LibertyBans/index.html",revision:"c0f0bec76d802a2ece3f436aafd3f027"},{url:"多平台/Prism/index.html",revision:"29f6c7d8eea5edddb88357d1e37bd6e9"},{url:"多平台/ServerUtils/index.html",revision:"0007b54a1483dc16ebac2c1594b6926b"},{url:"多平台/UltimateChat/index.html",revision:"ab95b61f569c7b6ce753021c083f4755"},{url:"项目简介/index.html",revision:"e18639943a2a2dbb040e61cd031a6607"},{url:"logo.png",revision:"87cab4b2f76c31969ea808eda64f49d4"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
