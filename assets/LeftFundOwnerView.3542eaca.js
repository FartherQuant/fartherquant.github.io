import{Q as l}from"./QItemLabel.f7f1ad01.js";import{Q as d}from"./QSeparator.5c6c7aa2.js";import{Q as u,a as f}from"./QItem.b83cace9.js";import{_ as v,r as m,P as i,ai as w,Q as r,R as e,aj as Q,S as a,D as _,aq as x,V as n,X as b,U as g,ac as p}from"./index.6c6a0d04.js";import{u as y}from"./use-quasar.de35c5f3.js";import{api as V}from"./axios.59c1fb8a.js";import"./index.2cf0d985.js";const h={mounted:function(){this.loadData()},setup(){const s=y(),o=m(null);function c(){V.get("/h5/data/webbaseinfo.json").then(t=>{o.value=t.data}).catch(()=>{s.notify({color:"negative",position:"top",message:"Loading failed",icon:"report_problem"})})}return{link:m("fundowner"),data:o,loadData:c}}},D=g("br",null,null,-1);function B(s,o,c,t,C,L){return i(),w(x,null,[t.data?(i(),r(l,{key:0,header:""},{default:e(()=>[n("\u7EC4\u5408\u7814\u7A76 ("+b(t.data.date)+")",1)]),_:1})):Q("",!0),a(d,{spaced:""}),_((i(),r(u,{clickable:"",active:t.link==="fundowner",onClick:o[0]||(o[0]=k=>t.link="fundowner"),"active-class":"my-menu-link",to:"/fundowner",exact:""},{default:e(()=>[a(f,null,{default:e(()=>[a(l,null,{default:e(()=>[n("\u7EC4\u5408")]),_:1}),a(l,{overline:""},{default:e(()=>[n("\u6BCF\u65E518:00\u66F4\u65B0")]),_:1}),a(l,{caption:""},{default:e(()=>[n("\u5BF9\u6BD4\u7EDF\u8BA1\u5F53\u524D\u7B56\u7565\u7684\u6267\u884C\u60C5\u51B5\u3002"),D,n(" \u5C55\u793A\u5F53\u524D\u7B56\u7565\u7684\u6301\u4ED3\u60C5\u51B5\u3002 ")]),_:1})]),_:1})]),_:1},8,["active"])),[[p]]),a(d,{spaced:""}),_((i(),r(u,{clickable:"",active:t.link==="stock",onClick:o[1]||(o[1]=k=>t.link="stock"),"active-class":"my-menu-link",to:"/stock",exact:""},{default:e(()=>[a(f,null,{default:e(()=>[a(l,null,{default:e(()=>[n("\u7B56\u7565")]),_:1}),a(l,{overline:""},{default:e(()=>[n("\u6BCF\u65E519:00\u66F4\u65B0")]),_:1}),a(l,{caption:""},{default:e(()=>[n("\u6BCF\u65E5\u7B56\u7565\u6C60")]),_:1})]),_:1})]),_:1},8,["active"])),[[p]])],64)}var R=v(h,[["render",B]]);export{R as default};
