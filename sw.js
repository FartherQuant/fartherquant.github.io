if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let d={};const r=e=>a(e,f),b={module:{uri:f},exports:d,require:r};s[f]=Promise.all(i.map((e=>b[e]||r(e)))).then((e=>(c(...e),d)))}}define(["./workbox-17c5f633"],(function(e){"use strict";e.setCacheNameDetails({prefix:"fquant-quasar"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/axios.b7bbf4c7.js",revision:"edb0c8058c4852eb8ec22f4fd860656d"},{url:"assets/ConceptView.77fe6002.js",revision:"5d73ec7b12a06977c3799b9a28451c14"},{url:"assets/ConceptView.f8eda584.css",revision:"61adc891e016da996712044ba9544d4d"},{url:"assets/createSeriesDataSimply.3bc9c3b0.js",revision:"7b743562d8cf864231df26b352a14b48"},{url:"assets/dataFilter.40908f6c.js",revision:"0f7f62d7d1db67e88eb994eff0201592"},{url:"assets/DetailView.4ed46614.css",revision:"e2e025e5ea360e4853b14248ad40f599"},{url:"assets/DetailView.b0513e19.js",revision:"677a023733d725dc86b731ef276dbacf"},{url:"assets/EmotionView.8d1d229b.js",revision:"0426aba95ca5d52400f1cc561d234d7c"},{url:"assets/EmotionView.ad971c13.css",revision:"010bb9ff30ae15cf913f6eebd2b62cf1"},{url:"assets/fastclick.8a4a8267.js",revision:"40efabedb876d409f1732920a78f9ae0"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.83be7b2f.woff2",revision:"393b5d8b3fd798486652801f3ee8c6ea"},{url:"assets/format.3b3f78f5.js",revision:"435a2acd7f61444c7be950ad4c109290"},{url:"assets/FundOwnerView.23bd4ddf.css",revision:"f36eb07acb993ae1d99aed39093e2472"},{url:"assets/FundOwnerView.375e0984.js",revision:"c2f9c4afd1e0f31ecb92abd1a6cf1efb"},{url:"assets/http.9758f133.js",revision:"b76c584863bc8dc797c6b237721b71bc"},{url:"assets/index.15432856.js",revision:"0148fe76700bb8e5d021589ca27e283b"},{url:"assets/index.2cf0d985.js",revision:"4c5ad768d0f77191ab0e5be5f3090a80"},{url:"assets/index.e6593567.css",revision:"46bfc5403edd54b2273df3a162724215"},{url:"assets/index.esm.min.c41b8ffa.js",revision:"9c18dcb6f164c8bc5bf45c2942624e7e"},{url:"assets/IndustryView.166c7931.js",revision:"3f8c58f9946b01bceed76595520e9bb5"},{url:"assets/IndustryView.dbe39a07.css",revision:"0fbdfac08d879e6bc8b2e4540979b313"},{url:"assets/install.4fb16b01.js",revision:"85a1e16bb17a3e35130d1f6434105b05"},{url:"assets/install.dbf96a44.js",revision:"7f69304cffe29366e2d013465b14fc34"},{url:"assets/install.e5a3a736.js",revision:"c07b94cf816446a5327de879b92f6772"},{url:"assets/install.fde49a9f.js",revision:"198936bc683f251ac7b835b6b28a7b46"},{url:"assets/installMarkArea.2f047437.js",revision:"adb4a713cc1fc8158bd9d9146d3a3d9b"},{url:"assets/installMarkLine.a1ee2d32.js",revision:"86c879d0c68c039d6956a34fe3f74f2b"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/LeftFundOwnerView.eecac0c6.js",revision:"50c509975019739a877bfd2bd26b44c7"},{url:"assets/LeftMarketView.2316a0b7.css",revision:"5c9c8ba8162bff41fa2f21b747b9585e"},{url:"assets/LeftMarketView.2985aa2d.js",revision:"a6aba9d8f3b8e6319acafed2fa7f648f"},{url:"assets/LeftWidthindexView.5c821c4a.js",revision:"84084d16013ac2570505c1431e0bec3f"},{url:"assets/MainLayout.b0c8583c.js",revision:"f42b90234fde86940d5dc0ba75d6140e"},{url:"assets/MarkerView.a435cabd.js",revision:"b7a4e5bc69b02e638defa57a164c2c3d"},{url:"assets/MarketView.a8579ac5.js",revision:"c0dbcb254382d2206a1a82013d2a35a2"},{url:"assets/MarketView.dbfae707.css",revision:"183554f699af020b7f201ccaaacff96a"},{url:"assets/OuterView.80125b03.js",revision:"a65de939c34e0f6a100ee56accf3f578"},{url:"assets/OuterView.8354975a.css",revision:"6adef9742b21b9d6ad14b10ef1d1c80c"},{url:"assets/PreStockDataView.3bb780ef.js",revision:"6c9c310abad1f7a45b52b792e6357593"},{url:"assets/PreStockDataView.735ba553.css",revision:"01fae1462c1f2248f1f8e0ce463d982c"},{url:"assets/QItem.5189b7c1.js",revision:"1874d3537517dffff273888af7c58268"},{url:"assets/QItemLabel.651d27d3.js",revision:"5081197067c23d377c4dff7e18f406d6"},{url:"assets/QPage.19877d30.js",revision:"f9670c75b6dd9f31bf668a6abddf6b31"},{url:"assets/QSeparator.3e5bdfc5.js",revision:"5d2a239bf7634bfd306fa4cd47c5af93"},{url:"assets/StockView.8bfd3079.js",revision:"11b5505361d7662975c7a8f12d2092f0"},{url:"assets/StockView.ed50c9d0.css",revision:"515680809ca287d61f6e20b3b8b1d094"},{url:"assets/use-quasar.0403d623.js",revision:"9ba5ef60f62452dc0dd3f008de6a2243"},{url:"assets/WidthindexView.08a20faa.css",revision:"33cd940f63ea4a1c2304d7f589af86ee"},{url:"assets/WidthindexView.7cef874c.js",revision:"8c5b1bbb743aeef07678ff464b95091e"},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"fa6dc5ee4c9db274700d59099ef0c971"},{url:"manifest.json",revision:"17369b92ec96fb6b45b6d38e0ac52f92"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
