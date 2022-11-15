import{Q as l}from"./QItemLabel.310c7402.js";import{Q as s}from"./QSeparator.c52c5385.js";import{Q as c,a as d}from"./QItem.876bb951.js";import{_ as p,r as v,P as o,ai as y,Q as r,R as e,aj as x,S as t,D as u,ar as b,V as a,X as Q,U as g,ac as f}from"./index.5790f3c8.js";import{u as V}from"./use-quasar.d75cbf5f.js";import{api as C}from"./axios.e074da54.js";import"./index.2cf0d985.js";const w={mounted:function(){this.loadData()},setup(){const k=V(),n=v(null);function _(){C.get("/h5/data/webbaseinfo.json").then(i=>{n.value=i.data}).catch(()=>{k.notify({color:"negative",position:"top",message:"Loading failed",icon:"report_problem"})})}return{link:v("market"),data:n,loadData:_}}},D=g("br",null,null,-1);function B(k,n,_,i,L,N){return o(),y(b,null,[i.data?(o(),r(l,{key:0,header:""},{default:e(()=>[a("\u76D8\u4E2D\u5B9E\u65F6 ("+Q(i.data.date)+")",1)]),_:1})):x("",!0),t(s,{spaced:""}),u((o(),r(c,{clickable:"",active:i.link==="prestock",onClick:n[0]||(n[0]=m=>i.link="prestock"),"active-class":"my-menu-link",to:"/prestock",exact:""},{default:e(()=>[t(d,null,{default:e(()=>[t(l,null,{default:e(()=>[a("\u96C6\u5408\u7ADE\u4EF7")]),_:1}),t(l,{overline:""},{default:e(()=>[a("9:15 - 9:30")]),_:1}),t(l,{caption:""},{default:e(()=>[a("- \u6C47\u603B\u96C6\u5408\u7ADE\u4EF7\u671F\u95F4\u66FE\u7ECF\u6DA8\u505C\u4EE5\u53CA\u6628\u65E5\u6DA8\u505C\u548C\u6628\u65E5\u4E0A\u699C\u6807\u7684\u7684\u96C6\u5408\u7ADE\u4EF7\u60C5\u51B5\u3002"),D,a(" - \u6309\u884C\u4E1A\u7EDF\u8BA1\u96C6\u5408\u7ADE\u4EF7\u7684\u60C5\u51B5\uFF0C\u7528\u4E8E\u521D\u671F\u5224\u65AD\u884C\u4E1A\u7684\u5F3A\u5F31\u3002 ")]),_:1})]),_:1})]),_:1},8,["active"])),[[f]]),t(s,{spaced:""}),u((o(),r(c,{clickable:"",active:i.link==="market",onClick:n[1]||(n[1]=m=>i.link="market"),"active-class":"my-menu-link",to:"/market",exact:""},{default:e(()=>[t(d,null,{default:e(()=>[t(l,null,{default:e(()=>[a("\u5B9E\u65F6\u5E02\u573A")]),_:1}),t(l,{overline:""},{default:e(()=>[a("9:30 - 15:00")]),_:1}),t(l,{caption:""},{default:e(()=>[a("- \u5B9E\u65F6\u7EDF\u8BA1\u5E02\u573A\u72B6\u51B5\uFF0C\u6307\u6570\u7C7B\u6BCF\u5206\u949F\u66F4\u65B0\uFF0C\u5176\u4F59\u7EDF\u8BA1\u6839\u636E\u60C5\u51B5\u6BCF5\u5206\u949F\u3001\u6BCF15\u5206\u949F\u6216\u6BCF30\u5206\u949F\u66F4\u65B0")]),_:1})]),_:1})]),_:1},8,["active"])),[[f]]),t(s,{spaced:""}),u((o(),r(c,{clickable:"",active:i.link==="emotion",onClick:n[2]||(n[2]=m=>i.link="emotion"),"active-class":"my-menu-link",to:"/emotion",exact:""},{default:e(()=>[t(d,null,{default:e(()=>[t(l,null,{default:e(()=>[a("\u60C5\u7EEA")]),_:1}),t(l,{overline:""},{default:e(()=>[a("9:30 - 15:00")]),_:1}),t(l,{caption:""},{default:e(()=>[a("- \u7EDF\u8BA1\u9AD8\u6807\u3001\u6DA8\u8DCC\u505C\u60C5\u51B5\uFF0C\u53CD\u5E94\u5F53\u5929\u5E02\u573A\u60C5\u7EEA\uFF0C\u6BCF\u5206\u949F\u66F4\u65B0")]),_:1})]),_:1})]),_:1},8,["active"])),[[f]]),t(s,{spaced:""}),u((o(),r(c,{clickable:"",active:i.link==="industrylists",onClick:n[3]||(n[3]=m=>i.link="industrylists"),"active-class":"my-menu-link",to:"/industrylists",exact:""},{default:e(()=>[t(d,null,{default:e(()=>[t(l,null,{default:e(()=>[a("\u677F\u5757")]),_:1}),t(l,{overline:""},{default:e(()=>[a("9:30 - 15:00")]),_:1}),t(l,{caption:""},{default:e(()=>[a("- \u7EDF\u8BA1\u5BBD\u6307\u3001\u884C\u4E1A\uFF0C\u6BCF\u5206\u949F\u66F4\u65B0")]),_:1})]),_:1})]),_:1},8,["active"])),[[f]])],64)}var E=p(w,[["render",B]]);export{E as default};
