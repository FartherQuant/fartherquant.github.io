if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let d={};const r=e=>a(e,f),b={module:{uri:f},exports:d,require:r};s[f]=Promise.all(i.map((e=>b[e]||r(e)))).then((e=>(c(...e),d)))}}define(["./workbox-17c5f633"],(function(e){"use strict";e.setCacheNameDetails({prefix:"fquant-quasar"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/axios.a50ea254.js",revision:"f6dc68f57e9c639816f967c85c504def"},{url:"assets/ConceptView.a874bd2d.js",revision:"4da9d71cb48d893a8ca515bbb33dec7a"},{url:"assets/ConceptView.f8eda584.css",revision:"61adc891e016da996712044ba9544d4d"},{url:"assets/dataFilter.40908f6c.js",revision:"0f7f62d7d1db67e88eb994eff0201592"},{url:"assets/DetailView.4ed46614.css",revision:"e2e025e5ea360e4853b14248ad40f599"},{url:"assets/DetailView.6d8a24d8.js",revision:"db9fd5099997df91b811d80e82d3308c"},{url:"assets/EmotionView.3845059e.js",revision:"a54f8ab60c326c11be63d6423e20df3d"},{url:"assets/EmotionView.ad971c13.css",revision:"010bb9ff30ae15cf913f6eebd2b62cf1"},{url:"assets/fastclick.8a4a8267.js",revision:"40efabedb876d409f1732920a78f9ae0"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.83be7b2f.woff2",revision:"393b5d8b3fd798486652801f3ee8c6ea"},{url:"assets/format.44546f44.js",revision:"b8553750d3b3f27e22ca3ebbb6d0d132"},{url:"assets/FundOwnerView.23852a54.css",revision:"2ba10487b47767e4acfc5480da212cf3"},{url:"assets/FundOwnerView.3839ad3d.js",revision:"281c1834bc1df0ca20adce14de81fc5b"},{url:"assets/http.9758f133.js",revision:"b76c584863bc8dc797c6b237721b71bc"},{url:"assets/index.2cf0d985.js",revision:"4c5ad768d0f77191ab0e5be5f3090a80"},{url:"assets/index.b963a787.js",revision:"aa6eff7d82e98866e69b5f3321a23b91"},{url:"assets/index.e6593567.css",revision:"46bfc5403edd54b2273df3a162724215"},{url:"assets/index.esm.min.52064240.js",revision:"41337a0e9b1078521b966e68404c3c47"},{url:"assets/IndustryView.438196e0.js",revision:"f3181f1ce92093863853bf9c1c5783e6"},{url:"assets/IndustryView.dbe39a07.css",revision:"0fbdfac08d879e6bc8b2e4540979b313"},{url:"assets/install.0b9cf979.js",revision:"30d65277e9e743fe340c44dc3f6d4cdc"},{url:"assets/install.bc356b72.js",revision:"b2581408ae65d6bf088fd18acb29fd55"},{url:"assets/install.d8382413.js",revision:"524984eaec69800db74331d800d49d6c"},{url:"assets/install.fb778ed9.js",revision:"1d3c6a1373ef29723d35485ba277bee0"},{url:"assets/installMarkArea.f975c160.js",revision:"8b0915e010d7bce5e4023eddf4aa8634"},{url:"assets/installMarkLine.3ef74615.js",revision:"b950d81540f2471fcf2f38d55b42e434"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/LeftFundOwnerView.5902aaf3.js",revision:"47b44a67c601eb30d96ac95b3ef7e31e"},{url:"assets/LeftMarketView.2316a0b7.css",revision:"5c9c8ba8162bff41fa2f21b747b9585e"},{url:"assets/LeftMarketView.759613e3.js",revision:"3bed61b33329837a79f6cc93c871094c"},{url:"assets/LeftWidthindexView.ae311d67.js",revision:"832e711cc7d125af3249044f588d3229"},{url:"assets/MainLayout.0e4e49e7.js",revision:"a1d902d62a337fe562d710ce70f707fa"},{url:"assets/MarkerView.60fba4f8.js",revision:"ab8674a3870a448783a006e4efaa78a9"},{url:"assets/MarketView.bc3aec2b.js",revision:"60c50959beada8dad537d7d0b1f18ba7"},{url:"assets/MarketView.dbfae707.css",revision:"183554f699af020b7f201ccaaacff96a"},{url:"assets/OuterView.8354975a.css",revision:"6adef9742b21b9d6ad14b10ef1d1c80c"},{url:"assets/OuterView.c8b7b6af.js",revision:"023434df04c4c09851521adfdbb0ef33"},{url:"assets/PreStockDataView.4a2f57f0.js",revision:"47fa848ad3b0045a24c4cf6a535810ea"},{url:"assets/PreStockDataView.735ba553.css",revision:"01fae1462c1f2248f1f8e0ce463d982c"},{url:"assets/QItem.229c6098.js",revision:"af715d6d4974820dfdd2a8db0173d533"},{url:"assets/QItemLabel.252bf211.js",revision:"c948abc14d005de6323117091ba1ddcc"},{url:"assets/QPage.b0044d29.js",revision:"493524b253648e5d5ec8129ba0f8ade5"},{url:"assets/QSeparator.70bbda7d.js",revision:"b05f7b4096f4034ed560020f44d35200"},{url:"assets/StockView.4cc34508.js",revision:"75d2cb01ec8f29bd9b60a7e5ec59a59b"},{url:"assets/StockView.c2d8cfd8.css",revision:"015cff9707fd6063b2a14a06522b347a"},{url:"assets/use-quasar.4e118b7b.js",revision:"c722ded89279358e94f8ca003a07d341"},{url:"assets/WidthindexView.08a20faa.css",revision:"33cd940f63ea4a1c2304d7f589af86ee"},{url:"assets/WidthindexView.d7487480.js",revision:"a005f67c7034b3e8ae5a44175ccabf95"},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"1916b79c648e3bcb2788f9d27646000c"},{url:"manifest.json",revision:"fc24e12bb2f20dad9e233a02912b1c3b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
