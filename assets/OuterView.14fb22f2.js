import{Q as i}from"./QSeparator.b8b0aced.js";import{h as o}from"./http.9758f133.js";import{Q as c,O as p,T as l,U as m,V as u,W as _,X as d,Y as h}from"./index.esm.min.a9a23be9.js";import{i as f}from"./installMarkArea.4a137424.js";import{O as v,r as n,_ as y,P as O,ai as $,U as r,S as e,aq as C,W as V}from"./index.bbadb497.js";import{i as g,a as k}from"./install.4a253822.js";import"./index.2cf0d985.js";import"./MarkerView.e2025d98.js";p([l,m,f,u,_,d,h,g,k]);var b=v({name:"ChartsOuterView",components:{VChart:c},mounted:function(){this.getServerMarketData()},methods:{getServerMarketData:async function(){let t={};const a=await o.get("https://stock.anno189.com/h5/data/cnty-aty-300.json",t);this.cntyatyOption=a.data;const s=await o.get("https://stock.anno189.com/h5/data/rmbus.json",t);this.rmbusOption=s.data}},setup(){const t=n({}),a=n({});return{cntyatyOption:t,rmbusOption:a}}});const w={class:"q-pa-sm"},S={class:"q-pa-sm"};function q(t,a){const s=V("v-chart");return O(),$(C,null,[r("div",w,[e(s,{class:"chart",option:t.cntyatyOption,autoresize:"",ref:"cntyatyChart"},null,8,["option"])]),e(i,{inset:"",spaced:""}),r("div",S,[e(s,{class:"chart",option:t.rmbusOption,autoresize:"",ref:"rmbusChart"},null,8,["option"])])],64)}var U=y(b,[["render",q],["__scopeId","data-v-2c26630d"]]);export{U as default};
