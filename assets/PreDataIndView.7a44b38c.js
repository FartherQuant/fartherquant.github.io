import{Q as o}from"./QTable.be93b005.js";import{Q as i}from"./QSeparator.457f42de.js";import{h as d}from"./http.60c2be38.js";import{O as m,r as a,_ as u,P as t,aj as r,U as s,S as l,ak as c,aH as g}from"./index.dae6810d.js";import"./format.4b102375.js";import"./QItem.a4a8e8dd.js";import"./QItemLabel.acf3da05.js";import"./axios.49e4da64.js";var b=m({name:"GridPreDataView",mounted:function(){this.getServerMarketData()},methods:{getServerMarketData:async function(){const e=await d.get("https://stock.anno189.com/h5/data/predataindustry.json",{});console.log(e.data),this.rowsIndustry=e.data.data.industry}},setup(){const e=a(null);return{columnsIndustry:a([{name:"\u4EE3\u7801",align:"center",label:"\u4EE3\u7801",field:"code",sortable:!0},{name:"\u884C\u4E1A",align:"center",label:"\u884C\u4E1A",field:"name",sortable:!0},{name:"\u6700\u5927\u91D1\u989D",align:"right",label:"\u6700\u5927\u91D1\u989D",field:"MAmount",sortable:!0},{name:"\u6210\u4EA4\u91D1\u989D",align:"right",label:"\u6210\u4EA4\u91D1\u989D",field:"amount",sortable:!0},{name:"\u6700\u5927\u91CF\u6BD4",align:"right",label:"\u6700\u5927\u91CF\u6BD4",field:"Mrate",sortable:!0},{name:"\u7ADE\u4EF7\u91CF\u6BD4",align:"right",label:"\u7ADE\u4EF7\u91CF\u6BD4",field:"Arate",sortable:!0},{name:"\u6DA81",align:"right",label:"\u6DA81",field:"s1",sortable:!0},{name:"\u6DA8\u5E45",align:"right",label:"\u6DA8\u5E45",field:"r1",sortable:!0},{name:"\u6DA82",align:"right",label:"\u6DA82",field:"s2",sortable:!0},{name:"\u6DA8\u5E45",align:"right",label:"\u6DA8\u5E45",field:"r2",sortable:!0},{name:"\u6DA83",align:"right",label:"\u6DA83",field:"s3",sortable:!0},{name:"\u6DA8\u5E45",align:"right",label:"\u6DA8\u5E45",field:"r3",sortable:!0}]),rowsIndustry:e}}});const f={key:0,class:"col-12"},p=s("div",{class:"text-h6 q-pa-sm"},"\u884C\u4E1A\u7EDF\u8BA1",-1),h={class:"q-pa-sm"};function _(e,n){return t(),r(g,null,[e.rowsIndustry?(t(),r("div",f,[p,s("div",h,[l(o,{class:"my-sticky-column-table",dense:"",bordered:"",rows:e.rowsIndustry,columns:e.columnsIndustry,"rows-per-page-options":[1e4],"row-key":"name"},null,8,["rows","columns"])])])):c("",!0),l(i)],64)}var P=u(b,[["render",_]]);export{P as default};
