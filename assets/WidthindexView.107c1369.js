import{Q as c}from"./QSeparator.b8b0aced.js";import{h as o}from"./http.9758f133.js";import{Q as d,O as p,T as h,U as m,V as _,W as u,X as f,Y as x}from"./index.esm.min.a9a23be9.js";import{i as v,a as g}from"./install.a37448d1.js";import{i as w}from"./install.fce79189.js";import{O as $,r as n,_ as k,P as V,ai as C,U as i,S as s,aq as W,W as q}from"./index.bbadb497.js";import{i as S,a as j}from"./install.4a253822.js";import"./index.2cf0d985.js";import"./dataFilter.40908f6c.js";p([h,v,w,g,m,_,u,f,x,S,j]);var y=$({name:"ChartsWidthindexView",components:{VChart:d},mounted:function(){this.getServerMarketData()},methods:{getServerMarketData:async function(){let t={};const e=await o.get("https://stock.anno189.com/h5/data/indexweight_month.json",t);this.indexweight_month=e.data;const a=await o.get("https://stock.anno189.com/h5/data/indexweight_spcorr.json",t);this.indexweight_spcorr=a.data;const l=await o.get("https://stock.anno189.com/h5/data/indexcorr015.json",t);this.indexcorr015=l.data,this.indexcorr015.tooltip.formatter=function(r){return r.value[3]+"("+r.value[2]+")"}}},setup(){const t=n({}),e=n({}),a=n({});return{indexweight_month:t,indexweight_spcorr:e,indexcorr015:a}}});const z={class:"q-pa-sm"},B={class:"q-pa-sm"},Q={class:"q-pa-sm"};function D(t,e){const a=q("v-chart");return V(),C(W,null,[i("div",z,[s(a,{class:"chart",option:t.indexweight_spcorr,autoresize:""},null,8,["option"])]),s(c,{inset:"",spaced:""}),i("div",B,[s(a,{class:"chart",option:t.indexweight_month,autoresize:""},null,8,["option"])]),s(c,{inset:"",spaced:""}),i("div",Q,[s(a,{class:"chart",option:t.indexcorr015,autoresize:""},null,8,["option"])])],64)}var T=k(y,[["render",D],["__scopeId","data-v-373b4f55"]]);export{T as default};
