if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let d={};const r=e=>a(e,f),b={module:{uri:f},exports:d,require:r};s[f]=Promise.all(i.map((e=>b[e]||r(e)))).then((e=>(c(...e),d)))}}define(["./workbox-8f0eebf3"],(function(e){"use strict";e.setCacheNameDetails({prefix:"fquant-quasar"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/axios.25246185.js",revision:"edd4bb173137bc84d63dc98d158e4833"},{url:"assets/axios.49e4da64.js",revision:"9dc76e3518fb47fcb8867d3c2f1f1dea"},{url:"assets/BaseView.12b2a18d.css",revision:"b2e9b09e4619f952fa36aaf2f01a74fd"},{url:"assets/BaseView.b7848ddc.js",revision:"4322bc5078d3cb627e9e3c1a43269f78"},{url:"assets/Bond2StocklistsView.ada3282a.js",revision:"933fe22c55c8a2dcefe8aeaf098a80c2"},{url:"assets/ConceptView.f29c01ff.js",revision:"a36620b694710a6f2eeb37375a7dffa6"},{url:"assets/dataFilter.5408e6c9.js",revision:"0f7f62d7d1db67e88eb994eff0201592"},{url:"assets/DetailView.1c0c279f.css",revision:"9f57b1ad0b886f49a71a395f98580b00"},{url:"assets/DetailView.2da594f0.js",revision:"5d80edc1599c08fe77c9c443818f777e"},{url:"assets/EmotionView.0452b0df.css",revision:"e32d87546e6d1d0d6dc70ca1a97533fa"},{url:"assets/EmotionView.ec26131a.js",revision:"b23b10c95c35852258876b73aa281c83"},{url:"assets/enableAriaDecalForTree.d076ad27.js",revision:"e446d11a281e837513190d1836006413"},{url:"assets/EndDataView.9b504d2c.js",revision:"d374743c1fa170b1c3165fd11f25818b"},{url:"assets/ExitlistsView.c97cf2e4.js",revision:"1457d78d69f9e6c4bb61080c97b471f8"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/format.7f10731a.js",revision:"f2d484e0dab9e3c0f23865d3e38efc46"},{url:"assets/FundOwner01View.48d73743.js",revision:"0fc1e7f147170db27502d31ea65fd1a4"},{url:"assets/FundOwner04View.54df47d6.js",revision:"2d1eda418e23081c421fed74455d90cb"},{url:"assets/FundOwnerAllView.4f18c4f9.css",revision:"419d4f072119db1beaef2099abdf6411"},{url:"assets/FundOwnerAllView.68cf1b11.js",revision:"d2c5a533a440cf27aac0c9acefded9ab"},{url:"assets/FundOwnerView.23852a54.css",revision:"2ba10487b47767e4acfc5480da212cf3"},{url:"assets/FundOwnerView.748b984d.js",revision:"5159de092e18df2205cf20d8f0abc74c"},{url:"assets/http.60c2be38.js",revision:"f13277803f73a8241160622238a3eba5"},{url:"assets/index.4e76e19b.css",revision:"1b42cb9fd3cd29c7c8f1f328c90f9f07"},{url:"assets/index.e65073f8.js",revision:"0d406b4ad52294e9b33be6d2995fe055"},{url:"assets/index.esm.min.5835493e.js",revision:"f7ddbd9ef0a56228c5d2bf2fcfa4dc7c"},{url:"assets/IndexScatterView.44348b91.js",revision:"69bf2bfe77195db0caaff2a5888721fa"},{url:"assets/IndustrylistsView.08711421.css",revision:"010bb9ff30ae15cf913f6eebd2b62cf1"},{url:"assets/IndustrylistsView.f4dbd046.js",revision:"97227afe442a3673aa842bc405752258"},{url:"assets/IndustryView.cd1d1d07.js",revision:"1a46a9c7f5114fbb3386c7a45e451aca"},{url:"assets/install.0d42ce18.js",revision:"9536602b02b7409d07afa702bda1de72"},{url:"assets/install.4fc5ae30.js",revision:"e5fddafbdbfec91bc9fb28a1bdd83b8e"},{url:"assets/install.5b678947.js",revision:"ccb2369016eb87bea0388fdb0dfc6f5a"},{url:"assets/install.c38571e1.js",revision:"1fa6fddc3b1be906a9f9724dedbe68c6"},{url:"assets/install.e198c68a.js",revision:"de0215ec122d8b3b9e8745e57741b555"},{url:"assets/install.e2bbf8ab.js",revision:"a5a9b3449fd9e74dea5441f72979feb2"},{url:"assets/install.fd431b1b.js",revision:"60e9703910221aa68e2b82156a0636d9"},{url:"assets/installMarkArea.cab71bf4.js",revision:"0f4376ad7eb1c3e84b134f501424fc61"},{url:"assets/installMarkLine.52ac704c.js",revision:"42ba7e9c228cc0caec1937e953e1a32c"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/LeftBaseView.90db76a3.js",revision:"58194b638213d7cfea9cbc9efbbfe35d"},{url:"assets/LeftFundOwnerView.7ebaa35a.js",revision:"fe2f3d5cc4a99315a7e17b2d76cf8580"},{url:"assets/LeftMarketView.10b13aec.js",revision:"f5279a0b0c0eef09ab51b4cf4007fdb4"},{url:"assets/LeftMarketView.2316a0b7.css",revision:"5c9c8ba8162bff41fa2f21b747b9585e"},{url:"assets/LeftMstatusView.729cdfbe.js",revision:"e7b2587f7ec7eecefa160ce4e1accd1d"},{url:"assets/LeftPredataView.60ae8e87.js",revision:"ef00d80593744f55984d1d62ff95409d"},{url:"assets/LeftWidthindexView.008e141f.js",revision:"30479c0edf76fb2cefd9697e3c0dfdb3"},{url:"assets/MainLayout.caa76d16.js",revision:"a07179da1d7c0e2396368a3633b6fbc1"},{url:"assets/MarkerView.695cf5c3.js",revision:"99c666989e76495cc8b07b90aa529632"},{url:"assets/MarketStatusView.01c0e055.js",revision:"5296612f07577ab9c051584f0f1eae96"},{url:"assets/MarketStyleView.08a19a53.js",revision:"d0b2b3ed6a820f3fba6eeab0f0150e4d"},{url:"assets/MarketStyleView.a1721b47.css",revision:"12bada8d47d33c04984a77b0c7315f63"},{url:"assets/MarketView.32f36260.css",revision:"2981498eb8426136cd43080794f0ad7e"},{url:"assets/MarketView.67c5c139.js",revision:"ca3d00dddc3a6f883923b8ddae75f9e5"},{url:"assets/MoneryView.05f9abf8.css",revision:"d9248654efa80c8717b0d97e0e68bcf8"},{url:"assets/MoneryView.fd96a2ae.js",revision:"30374a3c9b2cf671f5c63d7252002d8e"},{url:"assets/OuterView.1e68572e.js",revision:"e1d204376885f27aecc95ac966e94d1e"},{url:"assets/OuterView.8354975a.css",revision:"6adef9742b21b9d6ad14b10ef1d1c80c"},{url:"assets/PreDataIndView.ae9a26fe.js",revision:"544492746682809ec96319cf4d6d1d35"},{url:"assets/PreDataView.8000a750.css",revision:"b249fcf5f7f1fb46e0ecc31890415684"},{url:"assets/PreDataView.df193c1c.js",revision:"43a47cb43b6b47182040012e5d43d7c1"},{url:"assets/PreStockDataView.735ba553.css",revision:"01fae1462c1f2248f1f8e0ce463d982c"},{url:"assets/PreStockDataView.c8f8d9b9.js",revision:"8bdb4299edb6511ca81fc43bb8929064"},{url:"assets/QCard.3404f382.js",revision:"572043dbba39c30a1f9cc73d984b6cd0"},{url:"assets/QCardSection.308415de.js",revision:"b1e54f25a36a447968c7a503df169669"},{url:"assets/QItem.9a010a7a.js",revision:"d7115b35ae6159817307e5a8cd75a149"},{url:"assets/QItemLabel.a7e9fe32.js",revision:"5504cab2eecee1f6c5d6874093cc742f"},{url:"assets/QPage.d3d83aab.js",revision:"abe15b8eccb15fee9c8dc65e421266d5"},{url:"assets/QSeparator.3c368522.js",revision:"5ff753b5c24f15805088bde8b1d80f48"},{url:"assets/QTable.701dc0b1.js",revision:"0951b7b96f43f6fd98539cf1d7903689"},{url:"assets/QTabPanels.5e323beb.js",revision:"0598f1508b87707ab81945d488e2737d"},{url:"assets/QTd.d08ed439.js",revision:"6f5a5fbe21c511977b0f1f3217c47d12"},{url:"assets/QToolbar.feaceb3e.js",revision:"4c6a886331fb1204fdf9cf20297eccaf"},{url:"assets/sectorHelper.89485e52.js",revision:"9e228796fed8767f8e373c722a17c97c"},{url:"assets/StockView.bc5156c3.js",revision:"136b3401422f7c1ee35832486bd3d5f3"},{url:"assets/StrategyDataView.5f06f3d8.css",revision:"41d1a3aea66a54e7c5d9d6b947af9c55"},{url:"assets/StrategyDataView.85a9d2a0.js",revision:"dcf687838c001f400cf19416a09ea884"},{url:"assets/touch.e0d76081.js",revision:"b79b90eaa05e91ccd69b4ccc29693c23"},{url:"assets/TrendView.9054b2e7.js",revision:"dd10a3fdef1e46447d9d706aebf6946e"},{url:"assets/use-quasar.ab370c24.js",revision:"f405460801299e45c89c346a803b0c5b"},{url:"assets/WidthindexView.9d95bc91.css",revision:"edd8b33cea1405c9213ea1ea4365701f"},{url:"assets/WidthindexView.e168709b.js",revision:"8f0a2d8bc53805f03641600e12f34063"},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"a9d9a47c80f3b1470583850bf73435e9"},{url:"manifest.json",revision:"17369b92ec96fb6b45b6d38e0ac52f92"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
