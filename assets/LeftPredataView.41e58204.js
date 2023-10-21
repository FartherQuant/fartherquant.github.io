import{Q as l}from"./QItemLabel.acf3da05.js";import{Q as r}from"./QSeparator.457f42de.js";import{Q as c,a as s}from"./QItem.a4a8e8dd.js";import{_ as v,r as k,P as o,aj as x,Q as d,R as a,ak as b,S as e,D as u,aH as y,V as t,X as Q,U as g,ad as f}from"./index.dae6810d.js";import{u as V}from"./use-quasar.bff0c3c3.js";import{api as C}from"./axios.e87f7e07.js";import"./axios.49e4da64.js";const w={mounted:function(){this.loadData()},setup(){const m=V(),i=k(null);function _(){C.get("https://stock.anno189.com/h5/data/webbaseinfo.json").then(n=>{i.value=n.data}).catch(()=>{m.notify({color:"negative",position:"top",message:"Loading failed",icon:"report_problem"})})}return{link:k("prestock"),data:i,loadData:_}}},D=g("br",null,null,-1);function B(m,i,_,n,L,N){return o(),x(y,null,[n.data?(o(),d(l,{key:0,header:""},{default:a(()=>[t("\u7ADE\u4EF7 ("+Q(n.data.date)+")",1)]),_:1})):b("",!0),e(r,{spaced:""}),u((o(),d(c,{clickable:"",active:n.link==="prestock",onClick:i[0]||(i[0]=p=>n.link="prestock"),"active-class":"my-menu-link",to:"/prestock",exact:""},{default:a(()=>[e(s,null,{default:a(()=>[e(l,null,{default:a(()=>[t("\u96C6\u5408\u7ADE\u4EF7")]),_:1}),e(l,{overline:""},{default:a(()=>[t("9:15 - 9:25")]),_:1}),e(l,{caption:""},{default:a(()=>[t("- \u6C47\u603B\u96C6\u5408\u7ADE\u4EF7\u671F\u95F4\u66FE\u7ECF\u6DA8\u505C\u4EE5\u53CA\u6628\u65E5\u6DA8\u505C\u548C\u6628\u65E5\u4E0A\u699C\u6807\u7684\u7684\u96C6\u5408\u7ADE\u4EF7\u60C5\u51B5\u3002"),D,t(" - \u6309\u884C\u4E1A\u7EDF\u8BA1\u96C6\u5408\u7ADE\u4EF7\u7684\u60C5\u51B5\uFF0C\u7528\u4E8E\u521D\u671F\u5224\u65AD\u884C\u4E1A\u7684\u5F3A\u5F31\u3002 ")]),_:1})]),_:1})]),_:1},8,["active"])),[[f]]),e(r,{spaced:""}),u((o(),d(c,{clickable:"",active:n.link==="predata",onClick:i[1]||(i[1]=p=>n.link="predata"),"active-class":"my-menu-link",to:"/predata",exact:""},{default:a(()=>[e(s,null,{default:a(()=>[e(l,null,{default:a(()=>[t("\u7ADE\u4EF7\u7ED3\u679C")]),_:1}),e(l,{overline:""},{default:a(()=>[t("9:26")]),_:1}),e(l,{caption:""},{default:a(()=>[t("- \u5F00\u76D8\u7ADE\u4EF7\u7ED3\u675F\u540E\u7EDF\u8BA1\u7ED3\u679C")]),_:1})]),_:1})]),_:1},8,["active"])),[[f]]),e(r,{spaced:""}),u((o(),d(c,{clickable:"",active:n.link==="predataind",onClick:i[2]||(i[2]=p=>n.link="predataind"),"active-class":"my-menu-link",to:"/predataind",exact:""},{default:a(()=>[e(s,null,{default:a(()=>[e(l,null,{default:a(()=>[t("\u7ADE\u4EF7\u884C\u4E1A")]),_:1}),e(l,{overline:""},{default:a(()=>[t("9:26")]),_:1}),e(l,{caption:""},{default:a(()=>[t("- \u5F00\u76D8\u7ADE\u4EF7\u7ED3\u675F\u540E\u7EDF\u8BA1\u7ED3\u679C")]),_:1})]),_:1})]),_:1},8,["active"])),[[f]]),e(r,{spaced:""}),u((o(),d(c,{clickable:"",active:n.link==="enddata",onClick:i[3]||(i[3]=p=>n.link="enddata"),"active-class":"my-menu-link",to:"/enddata",exact:""},{default:a(()=>[e(s,null,{default:a(()=>[e(l,null,{default:a(()=>[t("\u6536\u76D8\u7ADE\u4EF7")]),_:1}),e(l,{overline:""},{default:a(()=>[t("15:01")]),_:1}),e(l,{caption:""},{default:a(()=>[t("- \u6536\u76D8\u7ADE\u4EF7\u7ED3\u675F\u540E\u7EDF\u8BA1\u7ED3\u679C")]),_:1})]),_:1})]),_:1},8,["active"])),[[f]])],64)}var E=v(w,[["render",B]]);export{E as default};
