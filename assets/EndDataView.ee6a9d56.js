import{Q as c}from"./QTd.9d16a0db.js";import{Q as u}from"./QTable.be93b005.js";import{Q as n}from"./QSeparator.457f42de.js";import{b as i,a as p,Q as d}from"./QTabPanels.8fc34f85.js";import{c as b}from"./touch.1579868c.js";import{Q as f}from"./QToolbar.7eaaa089.js";import{Q as g,a as _}from"./QPage.449631d0.js";import{h}from"./http.60c2be38.js";import{O as w,r as o,_ as y,P as m,Q,R as s,S as e,aj as P,U as r,al as V,V as k,X as v,ak as E}from"./index.dae6810d.js";import"./format.4b102375.js";import"./QItem.a4a8e8dd.js";import"./QItemLabel.acf3da05.js";import"./axios.49e4da64.js";var T=w({name:"GridPreDataView",mounted:function(){this.getServerMarketData()},methods:{getServerMarketData:async function(){let a={};const l=await h.get("https://stock.anno189.com/h5/data/endprice.json",a);this.rowsEndPrice=l.data.data.data,console.log(this.rowsEndPrice)}},setup(){const a=o(null);return{columnsEndPrice:o([{name:"\u4EE3\u7801",align:"left",label:"\u4EE3\u7801",field:"code",sortable:!0},{name:"\u540D\u79F0",align:"left",label:"\u540D\u79F0",field:"name",sortable:!0},{name:"\u884C\u4E1A",align:"left",label:"\u884C\u4E1A",field:"industry",sortable:!0},{name:"\u6307\u6570",align:"left",label:"\u6307\u6570",field:"index_",sortable:!0},{name:"\u6DA8\u5E45",align:"right",label:"\u7ADE\u4EF7\u6DA8\u8DCC",field:"close",sortable:!0},{name:"\u91D1\u989D",align:"right",label:"\u7ADE\u4EF7\u6210\u4EA4",field:"last_amount",sortable:!0},{name:"\u6362\u624B",align:"right",label:"\u6362\u624B",field:"hsl",sortable:!0},{name:"\u7EFC\u5408",align:"right",label:"\u7EFC\u5408",field:"all",sortable:!0}]),rowsEndPrice:a,tab:o("detail")}}});const x={key:0,class:"col-12"},D=r("div",{class:"text-h6 q-pa-sm"},"\u6536\u76D8\u7ADE\u4EF7",-1),S=r("div",{class:"text-sm =q-pa-sm"},"\u65E5\u5185\u6210\u4EA4\u5927\u4E8E1\u4EBF\uFF0C\u6536\u76D8\u7ADE\u4EF7\u6210\u4EA4\u5927\u4E8E100\u4E07",-1),B={class:"q-pa-sm"};function C(a,l){return m(),Q(g,{style:{"padding-top":"46px"},class:"bg-grey-1"},{default:s(()=>[e(p,{modelValue:a.tab,"onUpdate:modelValue":l[0]||(l[0]=t=>a.tab=t),animated:""},{default:s(()=>[e(i,{name:"detail",class:"bg-grey-1"},{default:s(()=>[this.rowsEndPrice?(m(),P("div",x,[D,S,r("div",B,[e(u,{class:"my-sticky-column-table",dense:"",bordered:"",rows:a.rowsEndPrice,columns:a.columnsEndPrice,"rows-per-page-options":[1e4],"row-key":"name"},{"body-cell":s(t=>[e(c,{props:t,class:V(t.row.close>0?"bg-red-1":t.row.close<0?"bg-green-1":"")},{default:s(()=>[k(v(t.value),1)]),_:2},1032,["props","class"])]),_:1},8,["rows","columns"])]),e(n,{spaced:""})])):E("",!0)]),_:1}),e(i,{name:"stocks",class:"bg-grey-1"})]),_:1},8,["modelValue"]),e(_,{expand:"",position:"top",class:"top-title"},{default:s(()=>[e(f,{class:"bg-red-3 text-white"},{default:s(()=>[e(b,{modelValue:a.tab,"onUpdate:modelValue":l[1]||(l[1]=t=>a.tab=t),dense:"",class:"text-white","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:s(()=>[e(d,{name:"detail",label:"\u7ADE\u4EF7\u5217\u8868"}),e(d,{name:"stocks",label:"\u7ADE\u4EF7\u7EDF\u8BA1"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(n)]),_:1})}var I=y(T,[["render",C]]);export{I as default};
