import{p as b,aj as Kt,ak as C,e as d,i as I,w as Dt,al as X,am as Y,an as D,h as w,ao as Zt,ap as q,aq as Wt,m as ot,ar as Xt,at as Yt,au as Ot,av as Ht,_ as T,aw as qt,x as Jt,v as ct,z as Pt,ax as kt,a0 as At,ay as Qt,a8 as Et,az as jt,H as Gt,aA as te,aB as A,aC as F,G as $,aD as ht,o as it,aE as at,aF as ee,Z as ie,g as ae,aG as re,aH as J,aI as Q,aJ as ne,aK as oe,a7 as se,aL as le,P as ue,aM as pe,aN as vt,aO as ce,aP as he,O as ft,aQ as ve,aR as dt,aS as fe}from"./index.esm.min.143e7a13.js";var E=d,de=C,U=-1,st=function(){function n(i){var t=i.mappingMethod,e=i.type,a=this.option=w(i);this.type=e,this.mappingMethod=t,this._normalizeData=me[t];var r=n.visualHandlers[e];this.applyVisual=r.applyVisual,this.getColorMapper=r.getColorMapper,this._normalizedToVisual=r._normalizedToVisual[t],t==="piecewise"?(j(a),ge(a)):t==="category"?a.categories?ye(a):j(a,!0):(Zt(t!=="linear"||a.dataExtent),j(a))}return n.prototype.mapValueToVisual=function(i){var t=this._normalizeData(i);return this._normalizedToVisual(t,i)},n.prototype.getNormalizer=function(){return b(this._normalizeData,this)},n.listVisualTypes=function(){return Kt(n.visualHandlers)},n.isValidType=function(i){return n.visualHandlers.hasOwnProperty(i)},n.eachVisual=function(i,t,e){C(i)?d(i,t,e):t.call(e,i)},n.mapVisual=function(i,t,e){var a,r=I(i)?[]:C(i)?{}:(a=!0,null);return n.eachVisual(i,function(o,s){var u=t.call(e,o,s);a?r=u:r[s]=u}),r},n.retrieveVisuals=function(i){var t={},e;return i&&E(n.visualHandlers,function(a,r){i.hasOwnProperty(r)&&(t[r]=i[r],e=!0)}),e?t:null},n.prepareVisualTypes=function(i){if(I(i))i=i.slice();else if(de(i)){var t=[];E(i,function(e,a){t.push(a)}),i=t}else return[];return i.sort(function(e,a){return a==="color"&&e!=="color"&&e.indexOf("color")===0?1:-1}),i},n.dependsOn=function(i,t){return t==="color"?!!(i&&i.indexOf(t)===0):i===t},n.findPieceIndex=function(i,t,e){for(var a,r=1/0,o=0,s=t.length;o<s;o++){var u=t[o].value;if(u!=null){if(u===i||Dt(u)&&u===i+"")return o;e&&h(u,o)}}for(var o=0,s=t.length;o<s;o++){var c=t[o],p=c.interval,l=c.close;if(p){if(p[0]===-1/0){if(B(l[1],i,p[1]))return o}else if(p[1]===1/0){if(B(l[0],p[0],i))return o}else if(B(l[0],p[0],i)&&B(l[1],i,p[1]))return o;e&&h(p[0],o),e&&h(p[1],o)}}if(e)return i===1/0?t.length-1:i===-1/0?0:a;function h(v,f){var g=Math.abs(v-i);g<r&&(r=g,a=f)}},n.visualHandlers={color:{applyVisual:P("color"),getColorMapper:function(){var i=this.option;return b(i.mappingMethod==="category"?function(t,e){return!e&&(t=this._normalizeData(t)),k.call(this,t)}:function(t,e,a){var r=!!a;return!e&&(t=this._normalizeData(t)),a=X(t,i.parsedVisual,a),r?a:Y(a,"rgba")},this)},_normalizedToVisual:{linear:function(i){return Y(X(i,this.option.parsedVisual),"rgba")},category:k,piecewise:function(i,t){var e=nt.call(this,t);return e==null&&(e=Y(X(i,this.option.parsedVisual),"rgba")),e},fixed:R}},colorHue:G(function(i,t){return q(i,t)}),colorSaturation:G(function(i,t){return q(i,null,t)}),colorLightness:G(function(i,t){return q(i,null,null,t)}),colorAlpha:G(function(i,t){return Wt(i,t)}),decal:{applyVisual:P("decal"),_normalizedToVisual:{linear:null,category:k,piecewise:null,fixed:null}},opacity:{applyVisual:P("opacity"),_normalizedToVisual:rt([0,1])},liftZ:{applyVisual:P("liftZ"),_normalizedToVisual:{linear:R,category:R,piecewise:R,fixed:R}},symbol:{applyVisual:function(i,t,e){var a=this.mapValueToVisual(i);e("symbol",a)},_normalizedToVisual:{linear:gt,category:k,piecewise:function(i,t){var e=nt.call(this,t);return e==null&&(e=gt.call(this,i)),e},fixed:R}},symbolSize:{applyVisual:P("symbolSize"),_normalizedToVisual:rt([0,1])}},n}();function ge(n){var i=n.pieceList;n.hasSpecialVisual=!1,d(i,function(t,e){t.originIndex=e,t.visual!=null&&(n.hasSpecialVisual=!0)})}function ye(n){var i=n.categories,t=n.categoryMap={},e=n.visual;if(E(i,function(o,s){t[o]=s}),!I(e)){var a=[];C(e)?E(e,function(o,s){var u=t[s];a[u!=null?u:U]=o}):a[U]=e,e=Bt(n,a)}for(var r=i.length-1;r>=0;r--)e[r]==null&&(delete t[i[r]],i.pop())}function j(n,i){var t=n.visual,e=[];C(t)?E(t,function(r){e.push(r)}):t!=null&&e.push(t);var a={color:1,symbol:1};!i&&e.length===1&&!a.hasOwnProperty(n.type)&&(e[1]=e[0]),Bt(n,e)}function G(n){return{applyVisual:function(i,t,e){var a=this.mapValueToVisual(i);e("color",n(t("color"),a))},_normalizedToVisual:rt([0,1])}}function gt(n){var i=this.option.visual;return i[Math.round(D(n,[0,1],[0,i.length-1],!0))]||{}}function P(n){return function(i,t,e){e(n,this.mapValueToVisual(i))}}function k(n){var i=this.option.visual;return i[this.option.loop&&n!==U?n%i.length:n]}function R(){return this.option.visual[0]}function rt(n){return{linear:function(i){return D(i,n,this.option.visual,!0)},category:k,piecewise:function(i,t){var e=nt.call(this,t);return e==null&&(e=D(i,n,this.option.visual,!0)),e},fixed:R}}function nt(n){var i=this.option,t=i.pieceList;if(i.hasSpecialVisual){var e=st.findPieceIndex(n,t),a=t[e];if(a&&a.visual)return a.visual[this.type]}}function Bt(n,i){return n.visual=i,n.type==="color"&&(n.parsedVisual=ot(i,function(t){var e=Xt(t);return e||[0,0,0,1]})),i}var me={linear:function(n){return D(n,this.option.dataExtent,[0,1],!0)},piecewise:function(n){var i=this.option.pieceList,t=st.findPieceIndex(n,i,!0);if(t!=null)return D(t,[0,i.length-1],[0,1],!0)},category:function(n){var i=this.option.categories?this.option.categoryMap[n]:n;return i==null?U:i},fixed:Yt};function B(n,i,t){return n?i<=t:i<t}var S=st;function Me(n,i,t,e,a,r){n=n||0;var o=t[1]-t[0];if(a!=null&&(a=O(a,[0,o])),r!=null&&(r=Math.max(r,a!=null?a:0)),e==="all"){var s=Math.abs(i[1]-i[0]);s=O(s,[0,o]),a=r=O(s,[a,r]),e=0}i[0]=O(i[0],t),i[1]=O(i[1],t);var u=tt(i,e);i[e]+=n;var c=a||0,p=t.slice();u.sign<0?p[0]+=c:p[1]-=c,i[e]=O(i[e],p);var l;return l=tt(i,e),a!=null&&(l.sign!==u.sign||l.span<a)&&(i[1-e]=i[e]+u.sign*a),l=tt(i,e),r!=null&&l.span>r&&(i[1-e]=i[e]+l.sign*r),i}function tt(n,i){var t=n[i]-n[1-i];return{span:Math.abs(t),sign:t>0?-1:t<0?1:i?-1:1}}function O(n,i){return Math.min(i[1]!=null?i[1]:1/0,Math.max(i[0]!=null?i[0]:-1/0,n))}var yt=d;function mt(n){if(n){for(var i in n)if(n.hasOwnProperty(i))return!0}}function Mt(n,i,t){var e={};return yt(i,function(r){var o=e[r]=a();yt(n[r],function(s,u){if(!!S.isValidType(u)){var c={type:u,visual:s};t&&t(c,r),o[u]=new S(c),u==="opacity"&&(c=w(c),c.type="colorAlpha",o.__hidden.__alphaForOpacity=new S(c))}})}),e;function a(){var r=function(){};r.prototype.__hidden=r.prototype;var o=new r;return o}}function _e(n,i,t){var e;d(t,function(a){i.hasOwnProperty(a)&&mt(i[a])&&(e=!0)}),e&&d(t,function(a){i.hasOwnProperty(a)&&mt(i[a])?n[a]=w(i[a]):delete n[a]})}function ti(n,i,t,e,a,r){var o={};d(n,function(l){var h=S.prepareVisualTypes(i[l]);o[l]=h});var s;function u(l){return Ot(t,s,l)}function c(l,h){Ht(t,s,l,h)}r==null?t.each(p):t.each([r],p);function p(l,h){s=r==null?l:h;var v=t.getRawDataItem(s);if(!(v&&v.visualMap===!1))for(var f=e.call(a,l),g=i[f],m=o[f],y=0,_=m.length;y<_;y++){var M=m[y];g[M]&&g[M].applyVisual(l,u,c)}}}function Se(n,i,t,e){var a={};return d(n,function(r){var o=S.prepareVisualTypes(i[r]);a[r]=o}),{progress:function(o,s){var u;e!=null&&(u=s.getDimensionIndex(e));function c(z){return Ot(s,l,z)}function p(z,V){Ht(s,l,z,V)}for(var l,h=s.getStore();(l=o.next())!=null;){var v=s.getRawDataItem(l);if(!(v&&v.visualMap===!1))for(var f=e!=null?h.get(u,l):l,g=t(f),m=i[g],y=a[g],_=0,M=y.length;_<M;_++){var L=y[_];m[L]&&m[L].applyVisual(f,c,p)}}}}}var Ve={get:function(n,i,t){var e=w((xe[n]||{})[i]);return t&&I(e)?e[e.length-1]:e}},xe={color:{active:["#006edd","#e0ffff"],inactive:["rgba(0,0,0,0)"]},colorHue:{active:[0,360],inactive:[0,0]},colorSaturation:{active:[.3,1],inactive:[0,0]},colorLightness:{active:[.9,.5],inactive:[0,0]},colorAlpha:{active:[.3,1],inactive:[0,0]},opacity:{active:[.3,1],inactive:[0,0]},symbol:{active:["circle","roundRect","diamond"],inactive:["none"]},symbolSize:{active:[10,50],inactive:[0,0]}},Ft=Ve,_t=S.mapVisual,be=S.eachVisual,we=I,St=d,Ie=kt,Le=D,ze=function(n){T(i,n);function i(){var t=n!==null&&n.apply(this,arguments)||this;return t.type=i.type,t.stateList=["inRange","outOfRange"],t.replacableOptionKeys=["inRange","outOfRange","target","controller","color"],t.layoutMode={type:"box",ignoreSize:!0},t.dataBound=[-1/0,1/0],t.targetVisuals={},t.controllerVisuals={},t}return i.prototype.init=function(t,e,a){this.mergeDefaultAndTheme(t,a)},i.prototype.optionUpdated=function(t,e){var a=this.option;!e&&_e(a,t,this.replacableOptionKeys),this.textStyleModel=this.getModel("textStyle"),this.resetItemSize(),this.completeVisualOption()},i.prototype.resetVisual=function(t){var e=this.stateList;t=b(t,this),this.controllerVisuals=Mt(this.option.controller,e,t),this.targetVisuals=Mt(this.option.target,e,t)},i.prototype.getItemSymbol=function(){return null},i.prototype.getTargetSeriesIndices=function(){var t=this.option.seriesIndex,e=[];return t==null||t==="all"?this.ecModel.eachSeries(function(a,r){e.push(r)}):e=qt(t),e},i.prototype.eachTargetSeries=function(t,e){d(this.getTargetSeriesIndices(),function(a){var r=this.ecModel.getSeriesByIndex(a);r&&t.call(e,r)},this)},i.prototype.isTargetSeries=function(t){var e=!1;return this.eachTargetSeries(function(a){a===t&&(e=!0)}),e},i.prototype.formatValueText=function(t,e,a){var r=this.option,o=r.precision,s=this.dataBound,u=r.formatter,c;a=a||["<",">"],I(t)&&(t=t.slice(),c=!0);var p=e?t:c?[l(t[0]),l(t[1])]:l(t);if(Dt(u))return u.replace("{value}",c?p[0]:p).replace("{value2}",c?p[1]:p);if(Jt(u))return c?u(t[0],t[1]):u(t);if(c)return t[0]===s[0]?a[0]+" "+p[1]:t[1]===s[1]?a[1]+" "+p[0]:p[0]+" - "+p[1];return p;function l(h){return h===s[0]?"min":h===s[1]?"max":(+h).toFixed(Math.min(o,20))}},i.prototype.resetExtent=function(){var t=this.option,e=Ie([t.min,t.max]);this._dataExtent=e},i.prototype.getDataDimensionIndex=function(t){var e=this.option.dimension;if(e!=null)return t.getDimensionIndex(e);for(var a=t.dimensions,r=a.length-1;r>=0;r--){var o=a[r],s=t.getDimensionInfo(o);if(!s.isCalculationCoord)return s.storeDimIndex}},i.prototype.getExtent=function(){return this._dataExtent.slice()},i.prototype.completeVisualOption=function(){var t=this.ecModel,e=this.option,a={inRange:e.inRange,outOfRange:e.outOfRange},r=e.target||(e.target={}),o=e.controller||(e.controller={});ct(r,a),ct(o,a);var s=this.isCategory();u.call(this,r),u.call(this,o),c.call(this,r,"inRange","outOfRange"),p.call(this,o);function u(l){we(e.color)&&!l.inRange&&(l.inRange={color:e.color.slice().reverse()}),l.inRange=l.inRange||{color:t.get("gradientColor")}}function c(l,h,v){var f=l[h],g=l[v];f&&!g&&(g=l[v]={},St(f,function(m,y){if(!!S.isValidType(y)){var _=Ft.get(y,"inactive",s);_!=null&&(g[y]=_,y==="color"&&!g.hasOwnProperty("opacity")&&!g.hasOwnProperty("colorAlpha")&&(g.opacity=[0,0]))}}))}function p(l){var h=(l.inRange||{}).symbol||(l.outOfRange||{}).symbol,v=(l.inRange||{}).symbolSize||(l.outOfRange||{}).symbolSize,f=this.get("inactiveColor"),g=this.getItemSymbol(),m=g||"roundRect";St(this.stateList,function(y){var _=this.itemSize,M=l[y];M||(M=l[y]={color:s?f:[f]}),M.symbol==null&&(M.symbol=h&&w(h)||(s?m:[m])),M.symbolSize==null&&(M.symbolSize=v&&w(v)||(s?_[0]:[_[0],_[0]])),M.symbol=_t(M.symbol,function(V){return V==="none"?m:V});var L=M.symbolSize;if(L!=null){var z=-1/0;be(L,function(V){V>z&&(z=V)}),M.symbolSize=_t(L,function(V){return Le(V,[0,z],[0,_[0]],!0)})}},this)}},i.prototype.resetItemSize=function(){this.itemSize=[parseFloat(this.get("itemWidth")),parseFloat(this.get("itemHeight"))]},i.prototype.isCategory=function(){return!!this.option.categories},i.prototype.setSelected=function(t){},i.prototype.getSelected=function(){return null},i.prototype.getValueState=function(t){return null},i.prototype.getVisualMeta=function(t){return null},i.type="visualMap",i.dependencies=["series"],i.defaultOption={show:!0,z:4,seriesIndex:"all",min:0,max:200,left:0,right:null,top:null,bottom:0,itemWidth:null,itemHeight:null,inverse:!1,orient:"vertical",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",contentColor:"#5793f3",inactiveColor:"#aaa",borderWidth:0,padding:5,textGap:10,precision:0,textStyle:{color:"#333"}},i}(Pt),K=ze,Vt=[20,140],Te=function(n){T(i,n);function i(){var t=n!==null&&n.apply(this,arguments)||this;return t.type=i.type,t}return i.prototype.optionUpdated=function(t,e){n.prototype.optionUpdated.apply(this,arguments),this.resetExtent(),this.resetVisual(function(a){a.mappingMethod="linear",a.dataExtent=this.getExtent()}),this._resetRange()},i.prototype.resetItemSize=function(){n.prototype.resetItemSize.apply(this,arguments);var t=this.itemSize;(t[0]==null||isNaN(t[0]))&&(t[0]=Vt[0]),(t[1]==null||isNaN(t[1]))&&(t[1]=Vt[1])},i.prototype._resetRange=function(){var t=this.getExtent(),e=this.option.range;!e||e.auto?(t.auto=1,this.option.range=t):I(e)&&(e[0]>e[1]&&e.reverse(),e[0]=Math.max(e[0],t[0]),e[1]=Math.min(e[1],t[1]))},i.prototype.completeVisualOption=function(){n.prototype.completeVisualOption.apply(this,arguments),d(this.stateList,function(t){var e=this.option.controller[t].symbolSize;e&&e[0]!==e[1]&&(e[0]=e[1]/3)},this)},i.prototype.setSelected=function(t){this.option.range=t.slice(),this._resetRange()},i.prototype.getSelected=function(){var t=this.getExtent(),e=kt((this.get("range")||[]).slice());return e[0]>t[1]&&(e[0]=t[1]),e[1]>t[1]&&(e[1]=t[1]),e[0]<t[0]&&(e[0]=t[0]),e[1]<t[0]&&(e[1]=t[0]),e},i.prototype.getValueState=function(t){var e=this.option.range,a=this.getExtent();return(e[0]<=a[0]||e[0]<=t)&&(e[1]>=a[1]||t<=e[1])?"inRange":"outOfRange"},i.prototype.findTargetDataIndices=function(t){var e=[];return this.eachTargetSeries(function(a){var r=[],o=a.getData();o.each(this.getDataDimensionIndex(o),function(s,u){t[0]<=s&&s<=t[1]&&r.push(u)},this),e.push({seriesId:a.id,dataIndex:r})},this),e},i.prototype.getVisualMeta=function(t){var e=xt(this,"outOfRange",this.getExtent()),a=xt(this,"inRange",this.option.range.slice()),r=[];function o(v,f){r.push({value:v,color:t(v,f)})}for(var s=0,u=0,c=a.length,p=e.length;u<p&&(!a.length||e[u]<=a[0]);u++)e[u]<a[s]&&o(e[u],"outOfRange");for(var l=1;s<c;s++,l=0)l&&r.length&&o(a[s],"outOfRange"),o(a[s],"inRange");for(var l=1;u<p;u++)(!a.length||a[a.length-1]<e[u])&&(l&&(r.length&&o(r[r.length-1].value,"outOfRange"),l=0),o(e[u],"outOfRange"));var h=r.length;return{stops:r,outerColors:[h?r[0].color:"transparent",h?r[h-1].color:"transparent"]}},i.type="visualMap.continuous",i.defaultOption=At(K.defaultOption,{align:"auto",calculable:!1,hoverLink:!0,realtime:!0,handleIcon:"path://M-11.39,9.77h0a3.5,3.5,0,0,1-3.5,3.5h-22a3.5,3.5,0,0,1-3.5-3.5h0a3.5,3.5,0,0,1,3.5-3.5h22A3.5,3.5,0,0,1-11.39,9.77Z",handleSize:"120%",handleStyle:{borderColor:"#fff",borderWidth:1},indicatorIcon:"circle",indicatorSize:"50%",indicatorStyle:{borderColor:"#fff",borderWidth:2,shadowBlur:2,shadowOffsetX:1,shadowOffsetY:1,shadowColor:"rgba(0,0,0,0.2)"}}),i}(K);function xt(n,i,t){if(t[0]===t[1])return t.slice();for(var e=200,a=(t[1]-t[0])/e,r=t[0],o=[],s=0;s<=e&&r<t[1];s++)o.push(r),r+=a;return o.push(t[1]),o}var Re=Te,Ce=function(n){T(i,n);function i(){var t=n!==null&&n.apply(this,arguments)||this;return t.type=i.type,t.autoPositionValues={left:1,right:1,top:1,bottom:1},t}return i.prototype.init=function(t,e){this.ecModel=t,this.api=e},i.prototype.render=function(t,e,a,r){if(this.visualMapModel=t,t.get("show")===!1){this.group.removeAll();return}this.doRender(t,e,a,r)},i.prototype.renderBackground=function(t){var e=this.visualMapModel,a=Qt(e.get("padding")||0),r=t.getBoundingRect();t.add(new Et({z2:-1,silent:!0,shape:{x:r.x-a[3],y:r.y-a[0],width:r.width+a[3]+a[1],height:r.height+a[0]+a[2]},style:{fill:e.get("backgroundColor"),stroke:e.get("borderColor"),lineWidth:e.get("borderWidth")}}))},i.prototype.getControllerVisual=function(t,e,a){a=a||{};var r=a.forceState,o=this.visualMapModel,s={};if(e==="color"){var u=o.get("contentColor");s.color=u}function c(v){return s[v]}function p(v,f){s[v]=f}var l=o.controllerVisuals[r||o.getValueState(t)],h=S.prepareVisualTypes(l);return d(h,function(v){var f=l[v];a.convertOpacityToAlpha&&v==="opacity"&&(v="colorAlpha",f=l.__alphaForOpacity),S.dependsOn(v,e)&&f&&f.applyVisual(t,c,p)}),s[e]},i.prototype.positionGroup=function(t){var e=this.visualMapModel,a=this.api;jt(t,e.getBoxLayoutParams(),{width:a.getWidth(),height:a.getHeight()})},i.prototype.doRender=function(t,e,a,r){},i.type="visualMap",i}(Gt),Nt=Ce,bt=[["left","right","width"],["top","bottom","height"]];function $t(n,i,t){var e=n.option,a=e.align;if(a!=null&&a!=="auto")return a;for(var r={width:i.getWidth(),height:i.getHeight()},o=e.orient==="horizontal"?1:0,s=bt[o],u=[0,null,10],c={},p=0;p<3;p++)c[bt[1-o][p]]=u[p],c[s[p]]=p===2?t[0]:e[s[p]];var l=[["x","width",3],["y","height",0]][o],h=te(c,r,e.padding);return s[(h.margin[l[2]]||0)+h[l[0]]+h[l[1]]*.5<r[l[1]]*.5?0:1]}function N(n,i){return d(n||[],function(t){t.dataIndex!=null&&(t.dataIndexInside=t.dataIndex,t.dataIndex=null),t.highlightKey="visualMap"+(i?i.componentIndex:"")}),n}var x=D,De=d,wt=Math.min,et=Math.max,Oe=12,He=6,Pe=function(n){T(i,n);function i(){var t=n!==null&&n.apply(this,arguments)||this;return t.type=i.type,t._shapes={},t._dataInterval=[],t._handleEnds=[],t._hoverLinkDataIndices=[],t}return i.prototype.doRender=function(t,e,a,r){this._api=a,(!r||r.type!=="selectDataRange"||r.from!==this.uid)&&this._buildView()},i.prototype._buildView=function(){this.group.removeAll();var t=this.visualMapModel,e=this.group;this._orient=t.get("orient"),this._useHandle=t.get("calculable"),this._resetInterval(),this._renderBar(e);var a=t.get("text");this._renderEndsText(e,a,0),this._renderEndsText(e,a,1),this._updateView(!0),this.renderBackground(e),this._updateView(),this._enableHoverLinkToSeries(),this._enableHoverLinkFromSeries(),this.positionGroup(e)},i.prototype._renderEndsText=function(t,e,a){if(!!e){var r=e[1-a];r=r!=null?r+"":"";var o=this.visualMapModel,s=o.get("textGap"),u=o.itemSize,c=this._shapes.mainGroup,p=this._applyTransform([u[0]/2,a===0?-s:u[1]+s],c),l=this._applyTransform(a===0?"bottom":"top",c),h=this._orient,v=this.visualMapModel.textStyleModel;this.group.add(new A({style:F(v,{x:p[0],y:p[1],verticalAlign:h==="horizontal"?"middle":l,align:h==="horizontal"?l:"center",text:r})}))}},i.prototype._renderBar=function(t){var e=this.visualMapModel,a=this._shapes,r=e.itemSize,o=this._orient,s=this._useHandle,u=$t(e,this.api,r),c=a.mainGroup=this._createBarGroup(u),p=new $;c.add(p),p.add(a.outOfRange=It()),p.add(a.inRange=It(null,s?zt(this._orient):null,b(this._dragHandle,this,"all",!1),b(this._dragHandle,this,"all",!0))),p.setClipPath(new Et({shape:{x:0,y:0,width:r[0],height:r[1],r:3}}));var l=e.textStyleModel.getTextRect("\u56FD"),h=et(l.width,l.height);s&&(a.handleThumbs=[],a.handleLabels=[],a.handleLabelPoints=[],this._createHandle(e,c,0,r,h,o),this._createHandle(e,c,1,r,h,o)),this._createIndicator(e,c,r,h,o),t.add(c)},i.prototype._createHandle=function(t,e,a,r,o,s){var u=b(this._dragHandle,this,a,!1),c=b(this._dragHandle,this,a,!0),p=ht(t.get("handleSize"),r[0]),l=it(t.get("handleIcon"),-p/2,-p/2,p,p,null,!0),h=zt(this._orient);l.attr({cursor:h,draggable:!0,drift:u,ondragend:c,onmousemove:function(y){at(y.event)}}),l.x=r[0]/2,l.useStyle(t.getModel("handleStyle").getItemStyle()),l.setStyle({strokeNoScale:!0,strokeFirst:!0}),l.style.lineWidth*=2,l.ensureState("emphasis").style=t.getModel(["emphasis","handleStyle"]).getItemStyle(),ee(l,!0),e.add(l);var v=this.visualMapModel.textStyleModel,f=new A({cursor:h,draggable:!0,drift:u,onmousemove:function(y){at(y.event)},ondragend:c,style:F(v,{x:0,y:0,text:""})});f.ensureState("blur").style={opacity:.1},f.stateTransition={duration:200},this.group.add(f);var g=[p,0],m=this._shapes;m.handleThumbs[a]=l,m.handleLabelPoints[a]=g,m.handleLabels[a]=f},i.prototype._createIndicator=function(t,e,a,r,o){var s=ht(t.get("indicatorSize"),a[0]),u=it(t.get("indicatorIcon"),-s/2,-s/2,s,s,null,!0);u.attr({cursor:"move",invisible:!0,silent:!0,x:a[0]/2});var c=t.getModel("indicatorStyle").getItemStyle();if(u instanceof ie){var p=u.style;u.useStyle(ae({image:p.image,x:p.x,y:p.y,width:p.width,height:p.height},c))}else u.useStyle(c);e.add(u);var l=this.visualMapModel.textStyleModel,h=new A({silent:!0,invisible:!0,style:F(l,{x:0,y:0,text:""})});this.group.add(h);var v=[(o==="horizontal"?r/2:He)+a[0]/2,0],f=this._shapes;f.indicator=u,f.indicatorLabel=h,f.indicatorLabelPoint=v,this._firstShowIndicator=!0},i.prototype._dragHandle=function(t,e,a,r){if(!!this._useHandle){if(this._dragging=!e,!e){var o=this._applyTransform([a,r],this._shapes.mainGroup,!0);this._updateInterval(t,o[1]),this._hideIndicator(),this._updateView()}e===!this.visualMapModel.get("realtime")&&this.api.dispatchAction({type:"selectDataRange",from:this.uid,visualMapId:this.visualMapModel.id,selected:this._dataInterval.slice()}),e?!this._hovering&&this._clearHoverLinkToSeries():Lt(this.visualMapModel)&&this._doHoverLinkToSeries(this._handleEnds[t],!1)}},i.prototype._resetInterval=function(){var t=this.visualMapModel,e=this._dataInterval=t.getSelected(),a=t.getExtent(),r=[0,t.itemSize[1]];this._handleEnds=[x(e[0],a,r,!0),x(e[1],a,r,!0)]},i.prototype._updateInterval=function(t,e){e=e||0;var a=this.visualMapModel,r=this._handleEnds,o=[0,a.itemSize[1]];Me(e,r,o,t,0);var s=a.getExtent();this._dataInterval=[x(r[0],o,s,!0),x(r[1],o,s,!0)]},i.prototype._updateView=function(t){var e=this.visualMapModel,a=e.getExtent(),r=this._shapes,o=[0,e.itemSize[1]],s=t?o:this._handleEnds,u=this._createBarVisual(this._dataInterval,a,s,"inRange"),c=this._createBarVisual(a,a,o,"outOfRange");r.inRange.setStyle({fill:u.barColor}).setShape("points",u.barPoints),r.outOfRange.setStyle({fill:c.barColor}).setShape("points",c.barPoints),this._updateHandle(s,u)},i.prototype._createBarVisual=function(t,e,a,r){var o={forceState:r,convertOpacityToAlpha:!0},s=this._makeColorGradient(t,o),u=[this.getControllerVisual(t[0],"symbolSize",o),this.getControllerVisual(t[1],"symbolSize",o)],c=this._createBarPoints(a,u);return{barColor:new re(0,0,0,1,s),barPoints:c,handlesColor:[s[0].color,s[s.length-1].color]}},i.prototype._makeColorGradient=function(t,e){var a=100,r=[],o=(t[1]-t[0])/a;r.push({color:this.getControllerVisual(t[0],"color",e),offset:0});for(var s=1;s<a;s++){var u=t[0]+o*s;if(u>t[1])break;r.push({color:this.getControllerVisual(u,"color",e),offset:s/a})}return r.push({color:this.getControllerVisual(t[1],"color",e),offset:1}),r},i.prototype._createBarPoints=function(t,e){var a=this.visualMapModel.itemSize;return[[a[0]-e[0],t[0]],[a[0],t[0]],[a[0],t[1]],[a[0]-e[1],t[1]]]},i.prototype._createBarGroup=function(t){var e=this._orient,a=this.visualMapModel.get("inverse");return new $(e==="horizontal"&&!a?{scaleX:t==="bottom"?1:-1,rotation:Math.PI/2}:e==="horizontal"&&a?{scaleX:t==="bottom"?-1:1,rotation:-Math.PI/2}:e==="vertical"&&!a?{scaleX:t==="left"?1:-1,scaleY:-1}:{scaleX:t==="left"?1:-1})},i.prototype._updateHandle=function(t,e){if(!!this._useHandle){var a=this._shapes,r=this.visualMapModel,o=a.handleThumbs,s=a.handleLabels,u=r.itemSize,c=r.getExtent();De([0,1],function(p){var l=o[p];l.setStyle("fill",e.handlesColor[p]),l.y=t[p];var h=x(t[p],[0,u[1]],c,!0),v=this.getControllerVisual(h,"symbolSize");l.scaleX=l.scaleY=v/u[0],l.x=u[0]-v/2;var f=J(a.handleLabelPoints[p],Q(l,this.group));s[p].setStyle({x:f[0],y:f[1],text:r.formatValueText(this._dataInterval[p]),verticalAlign:"middle",align:this._orient==="vertical"?this._applyTransform("left",a.mainGroup):"center"})},this)}},i.prototype._showIndicator=function(t,e,a,r){var o=this.visualMapModel,s=o.getExtent(),u=o.itemSize,c=[0,u[1]],p=this._shapes,l=p.indicator;if(!!l){l.attr("invisible",!1);var h={convertOpacityToAlpha:!0},v=this.getControllerVisual(t,"color",h),f=this.getControllerVisual(t,"symbolSize"),g=x(t,s,c,!0),m=u[0]-f/2,y={x:l.x,y:l.y};l.y=g,l.x=m;var _=J(p.indicatorLabelPoint,Q(l,this.group)),M=p.indicatorLabel;M.attr("invisible",!1);var L=this._applyTransform("left",p.mainGroup),z=this._orient,V=z==="horizontal";M.setStyle({text:(a||"")+o.formatValueText(e),verticalAlign:V?L:"middle",align:V?"center":L});var lt={x:m,y:g,style:{fill:v}},ut={style:{x:_[0],y:_[1]}};if(o.ecModel.isAnimationEnabled()&&!this._firstShowIndicator){var pt={duration:100,easing:"cubicInOut",additive:!0};l.x=y.x,l.y=y.y,l.animateTo(lt,pt),M.animateTo(ut,pt)}else l.attr(lt),M.attr(ut);this._firstShowIndicator=!1;var Z=this._shapes.handleLabels;if(Z)for(var W=0;W<Z.length;W++)this._api.enterBlur(Z[W])}},i.prototype._enableHoverLinkToSeries=function(){var t=this;this._shapes.mainGroup.on("mousemove",function(e){if(t._hovering=!0,!t._dragging){var a=t.visualMapModel.itemSize,r=t._applyTransform([e.offsetX,e.offsetY],t._shapes.mainGroup,!0,!0);r[1]=wt(et(0,r[1]),a[1]),t._doHoverLinkToSeries(r[1],0<=r[0]&&r[0]<=a[0])}}).on("mouseout",function(){t._hovering=!1,!t._dragging&&t._clearHoverLinkToSeries()})},i.prototype._enableHoverLinkFromSeries=function(){var t=this.api.getZr();this.visualMapModel.option.hoverLink?(t.on("mouseover",this._hoverLinkFromSeriesMouseOver,this),t.on("mouseout",this._hideIndicator,this)):this._clearHoverLinkFromSeries()},i.prototype._doHoverLinkToSeries=function(t,e){var a=this.visualMapModel,r=a.itemSize;if(!!a.option.hoverLink){var o=[0,r[1]],s=a.getExtent();t=wt(et(o[0],t),o[1]);var u=ke(a,s,o),c=[t-u,t+u],p=x(t,o,s,!0),l=[x(c[0],o,s,!0),x(c[1],o,s,!0)];c[0]<o[0]&&(l[0]=-1/0),c[1]>o[1]&&(l[1]=1/0),e&&(l[0]===-1/0?this._showIndicator(p,l[1],"< ",u):l[1]===1/0?this._showIndicator(p,l[0],"> ",u):this._showIndicator(p,p,"\u2248 ",u));var h=this._hoverLinkDataIndices,v=[];(e||Lt(a))&&(v=this._hoverLinkDataIndices=a.findTargetDataIndices(l));var f=ne(h,v);this._dispatchHighDown("downplay",N(f[0],a)),this._dispatchHighDown("highlight",N(f[1],a))}},i.prototype._hoverLinkFromSeriesMouseOver=function(t){var e;if(oe(t.target,function(u){var c=se(u);if(c.dataIndex!=null)return e=c,!0},!0),!!e){var a=this.ecModel.getSeriesByIndex(e.seriesIndex),r=this.visualMapModel;if(!!r.isTargetSeries(a)){var o=a.getData(e.dataType),s=o.getStore().get(r.getDataDimensionIndex(o),e.dataIndex);isNaN(s)||this._showIndicator(s,s)}}},i.prototype._hideIndicator=function(){var t=this._shapes;t.indicator&&t.indicator.attr("invisible",!0),t.indicatorLabel&&t.indicatorLabel.attr("invisible",!0);var e=this._shapes.handleLabels;if(e)for(var a=0;a<e.length;a++)this._api.leaveBlur(e[a])},i.prototype._clearHoverLinkToSeries=function(){this._hideIndicator();var t=this._hoverLinkDataIndices;this._dispatchHighDown("downplay",N(t,this.visualMapModel)),t.length=0},i.prototype._clearHoverLinkFromSeries=function(){this._hideIndicator();var t=this.api.getZr();t.off("mouseover",this._hoverLinkFromSeriesMouseOver),t.off("mouseout",this._hideIndicator)},i.prototype._applyTransform=function(t,e,a,r){var o=Q(e,r?null:this.group);return I(t)?J(t,o,a):le(t,o,a)},i.prototype._dispatchHighDown=function(t,e){e&&e.length&&this.api.dispatchAction({type:t,batch:e})},i.prototype.dispose=function(){this._clearHoverLinkFromSeries(),this._clearHoverLinkToSeries()},i.prototype.remove=function(){this._clearHoverLinkFromSeries(),this._clearHoverLinkToSeries()},i.type="visualMap.continuous",i}(Nt);function It(n,i,t,e){return new ue({shape:{points:n},draggable:!!t,cursor:i,drift:t,onmousemove:function(a){at(a.event)},ondragend:e})}function ke(n,i,t){var e=Oe/2,a=n.get("hoverLinkDataSize");return a&&(e=x(a,i,t,!0)/2),e}function Lt(n){var i=n.get("hoverLinkOnHandle");return!!(i==null?n.get("realtime"):i)}function zt(n){return n==="vertical"?"ns-resize":"ew-resize"}var Ae=Pe,Ee={type:"selectDataRange",event:"dataRangeSelected",update:"update"},Ge=function(n,i){i.eachComponent({mainType:"visualMap",query:n},function(t){t.setSelected(n.selected)})},Be=[{createOnAllSeries:!0,reset:function(n,i){var t=[];return i.eachComponent("visualMap",function(e){var a=n.pipelineContext;!e.isTargetSeries(n)||a&&a.large||t.push(Se(e.stateList,e.targetVisuals,b(e.getValueState,e),e.getDataDimensionIndex(n.getData())))}),t}},{createOnAllSeries:!0,reset:function(n,i){var t=n.getData(),e=[];i.eachComponent("visualMap",function(a){if(a.isTargetSeries(n)){var r=a.getVisualMeta(b(Fe,null,n,a))||{stops:[],outerColors:[]},o=a.getDataDimensionIndex(t);o>=0&&(r.dimension=o,e.push(r))}}),n.getData().setVisual("visualMeta",e)}}];function Fe(n,i,t,e){for(var a=i.targetVisuals[e],r=S.prepareVisualTypes(a),o={color:pe(n.getData(),"color")},s=0,u=r.length;s<u;s++){var c=r[s],p=a[c==="opacity"?"__alphaForOpacity":c];p&&p.applyVisual(t,l,h)}return o.color;function l(v){return o[v]}function h(v,f){o[v]=f}}var Tt=d;function Ne(n){var i=n&&n.visualMap;I(i)||(i=i?[i]:[]),Tt(i,function(t){if(!!t){H(t,"splitList")&&!H(t,"pieces")&&(t.pieces=t.splitList,delete t.splitList);var e=t.pieces;e&&I(e)&&Tt(e,function(a){C(a)&&(H(a,"start")&&!H(a,"min")&&(a.min=a.start),H(a,"end")&&!H(a,"max")&&(a.max=a.end))})}})}function H(n,i){return n&&n.hasOwnProperty&&n.hasOwnProperty(i)}var Rt=!1;function Ut(n){Rt||(Rt=!0,n.registerSubTypeDefaulter("visualMap",function(i){return!i.categories&&(!(i.pieces?i.pieces.length>0:i.splitNumber>0)||i.calculable)?"continuous":"piecewise"}),n.registerAction(Ee,Ge),d(Be,function(i){n.registerVisual(n.PRIORITY.VISUAL.COMPONENT,i)}),n.registerPreprocessor(Ne))}function $e(n){n.registerComponentModel(Re),n.registerComponentView(Ae),Ut(n)}var Ue=function(n){T(i,n);function i(){var t=n!==null&&n.apply(this,arguments)||this;return t.type=i.type,t._pieceList=[],t}return i.prototype.optionUpdated=function(t,e){n.prototype.optionUpdated.apply(this,arguments),this.resetExtent();var a=this._mode=this._determineMode();this._pieceList=[],Ke[this._mode].call(this,this._pieceList),this._resetSelected(t,e);var r=this.option.categories;this.resetVisual(function(o,s){a==="categories"?(o.mappingMethod="category",o.categories=w(r)):(o.dataExtent=this.getExtent(),o.mappingMethod="piecewise",o.pieceList=ot(this._pieceList,function(u){return u=w(u),s!=="inRange"&&(u.visual=null),u}))})},i.prototype.completeVisualOption=function(){var t=this.option,e={},a=S.listVisualTypes(),r=this.isCategory();d(t.pieces,function(s){d(a,function(u){s.hasOwnProperty(u)&&(e[u]=1)})}),d(e,function(s,u){var c=!1;d(this.stateList,function(p){c=c||o(t,p,u)||o(t.target,p,u)},this),!c&&d(this.stateList,function(p){(t[p]||(t[p]={}))[u]=Ft.get(u,p==="inRange"?"active":"inactive",r)})},this);function o(s,u,c){return s&&s[u]&&s[u].hasOwnProperty(c)}n.prototype.completeVisualOption.apply(this,arguments)},i.prototype._resetSelected=function(t,e){var a=this.option,r=this._pieceList,o=(e?a:t).selected||{};if(a.selected=o,d(r,function(u,c){var p=this.getSelectedMapKey(u);o.hasOwnProperty(p)||(o[p]=!0)},this),a.selectedMode==="single"){var s=!1;d(r,function(u,c){var p=this.getSelectedMapKey(u);o[p]&&(s?o[p]=!1:s=!0)},this)}},i.prototype.getItemSymbol=function(){return this.get("itemSymbol")},i.prototype.getSelectedMapKey=function(t){return this._mode==="categories"?t.value+"":t.index+""},i.prototype.getPieceList=function(){return this._pieceList},i.prototype._determineMode=function(){var t=this.option;return t.pieces&&t.pieces.length>0?"pieces":this.option.categories?"categories":"splitNumber"},i.prototype.setSelected=function(t){this.option.selected=w(t)},i.prototype.getValueState=function(t){var e=S.findPieceIndex(t,this._pieceList);return e!=null&&this.option.selected[this.getSelectedMapKey(this._pieceList[e])]?"inRange":"outOfRange"},i.prototype.findTargetDataIndices=function(t){var e=[],a=this._pieceList;return this.eachTargetSeries(function(r){var o=[],s=r.getData();s.each(this.getDataDimensionIndex(s),function(u,c){var p=S.findPieceIndex(u,a);p===t&&o.push(c)},this),e.push({seriesId:r.id,dataIndex:o})},this),e},i.prototype.getRepresentValue=function(t){var e;if(this.isCategory())e=t.value;else if(t.value!=null)e=t.value;else{var a=t.interval||[];e=a[0]===-1/0&&a[1]===1/0?0:(a[0]+a[1])/2}return e},i.prototype.getVisualMeta=function(t){if(this.isCategory())return;var e=[],a=["",""],r=this;function o(p,l){var h=r.getRepresentValue({interval:p});l||(l=r.getValueState(h));var v=t(h,l);p[0]===-1/0?a[0]=v:p[1]===1/0?a[1]=v:e.push({value:p[0],color:v},{value:p[1],color:v})}var s=this._pieceList.slice();if(!s.length)s.push({interval:[-1/0,1/0]});else{var u=s[0].interval[0];u!==-1/0&&s.unshift({interval:[-1/0,u]}),u=s[s.length-1].interval[1],u!==1/0&&s.push({interval:[u,1/0]})}var c=-1/0;return d(s,function(p){var l=p.interval;l&&(l[0]>c&&o([c,l[0]],"outOfRange"),o(l.slice()),c=l[1])},this),{stops:e,outerColors:a}},i.type="visualMap.piecewise",i.defaultOption=At(K.defaultOption,{selected:null,minOpen:!1,maxOpen:!1,align:"auto",itemWidth:20,itemHeight:14,itemSymbol:"roundRect",pieces:null,categories:null,splitNumber:5,selectedMode:"multiple",itemGap:10,hoverLink:!0}),i}(K),Ke={splitNumber:function(n){var i=this.option,t=Math.min(i.precision,20),e=this.getExtent(),a=i.splitNumber;a=Math.max(parseInt(a,10),1),i.splitNumber=a;for(var r=(e[1]-e[0])/a;+r.toFixed(t)!==r&&t<5;)t++;i.precision=t,r=+r.toFixed(t),i.minOpen&&n.push({interval:[-1/0,e[0]],close:[0,0]});for(var o=0,s=e[0];o<a;s+=r,o++){var u=o===a-1?e[1]:s+r;n.push({interval:[s,u],close:[1,1]})}i.maxOpen&&n.push({interval:[e[1],1/0],close:[0,0]}),vt(n),d(n,function(c,p){c.index=p,c.text=this.formatValueText(c.interval)},this)},categories:function(n){var i=this.option;d(i.categories,function(t){n.push({text:this.formatValueText(t,!0),value:t})},this),Ct(i,n)},pieces:function(n){var i=this.option;d(i.pieces,function(t,e){C(t)||(t={value:t});var a={text:"",index:e};if(t.label!=null&&(a.text=t.label),t.hasOwnProperty("value")){var r=a.value=t.value;a.interval=[r,r],a.close=[1,1]}else{for(var o=a.interval=[],s=a.close=[0,0],u=[1,0,1],c=[-1/0,1/0],p=[],l=0;l<2;l++){for(var h=[["gte","gt","min"],["lte","lt","max"]][l],v=0;v<3&&o[l]==null;v++)o[l]=t[h[v]],s[l]=u[v],p[l]=v===2;o[l]==null&&(o[l]=c[l])}p[0]&&o[1]===1/0&&(s[0]=0),p[1]&&o[0]===-1/0&&(s[1]=0),o[0]===o[1]&&s[0]&&s[1]&&(a.value=o[0])}a.visual=S.retrieveVisuals(t),n.push(a)},this),Ct(i,n),vt(n),d(n,function(t){var e=t.close,a=[["<","\u2264"][e[1]],[">","\u2265"][e[0]]];t.text=t.text||this.formatValueText(t.value!=null?t.value:t.interval,!1,a)},this)}};function Ct(n,i){var t=n.inverse;(n.orient==="vertical"?!t:t)&&i.reverse()}var Ze=Ue,We=function(n){T(i,n);function i(){var t=n!==null&&n.apply(this,arguments)||this;return t.type=i.type,t}return i.prototype.doRender=function(){var t=this.group;t.removeAll();var e=this.visualMapModel,a=e.get("textGap"),r=e.textStyleModel,o=r.getFont(),s=r.getTextColor(),u=this._getItemAlign(),c=e.itemSize,p=this._getViewData(),l=p.endsText,h=ce(e.get("showLabel",!0),!l);l&&this._renderEndsText(t,l[0],c,h,u),d(p.viewPieceList,function(v){var f=v.piece,g=new $;g.onclick=b(this._onItemClick,this,f),this._enableHoverLink(g,v.indexInModelPieceList);var m=e.getRepresentValue(f);if(this._createItemSymbol(g,m,[0,0,c[0],c[1]]),h){var y=this.visualMapModel.getValueState(m);g.add(new A({style:{x:u==="right"?-a:c[0]+a,y:c[1]/2,text:f.text,verticalAlign:"middle",align:u,font:o,fill:s,opacity:y==="outOfRange"?.5:1}}))}t.add(g)},this),l&&this._renderEndsText(t,l[1],c,h,u),he(e.get("orient"),t,e.get("itemGap")),this.renderBackground(t),this.positionGroup(t)},i.prototype._enableHoverLink=function(t,e){var a=this;t.on("mouseover",function(){return r("highlight")}).on("mouseout",function(){return r("downplay")});var r=function(o){var s=a.visualMapModel;s.option.hoverLink&&a.api.dispatchAction({type:o,batch:N(s.findTargetDataIndices(e),s)})}},i.prototype._getItemAlign=function(){var t=this.visualMapModel,e=t.option;if(e.orient==="vertical")return $t(t,this.api,t.itemSize);var a=e.align;return(!a||a==="auto")&&(a="left"),a},i.prototype._renderEndsText=function(t,e,a,r,o){if(!!e){var s=new $,u=this.visualMapModel.textStyleModel;s.add(new A({style:F(u,{x:r?o==="right"?a[0]:0:a[0]/2,y:a[1]/2,verticalAlign:"middle",align:r?o:"center",text:e})})),t.add(s)}},i.prototype._getViewData=function(){var t=this.visualMapModel,e=ot(t.getPieceList(),function(s,u){return{piece:s,indexInModelPieceList:u}}),a=t.get("text"),r=t.get("orient"),o=t.get("inverse");return(r==="horizontal"?o:!o)?e.reverse():a&&(a=a.slice().reverse()),{viewPieceList:e,endsText:a}},i.prototype._createItemSymbol=function(t,e,a){t.add(it(this.getControllerVisual(e,"symbol"),a[0],a[1],a[2],a[3],this.getControllerVisual(e,"color")))},i.prototype._onItemClick=function(t){var e=this.visualMapModel,a=e.option,r=a.selectedMode;if(!!r){var o=w(a.selected),s=e.getSelectedMapKey(t);r==="single"||r===!0?(o[s]=!0,d(o,function(u,c){o[c]=c===s})):o[s]=!o[s],this.api.dispatchAction({type:"selectDataRange",from:this.uid,visualMapId:this.visualMapModel.id,selected:o})}},i.type="visualMap.piecewise",i}(Nt),Xe=We;function Ye(n){n.registerComponentModel(Ze),n.registerComponentView(Xe),Ut(n)}function ei(n){ft($e),ft(Ye)}var qe=function(n){T(i,n);function i(){var t=n!==null&&n.apply(this,arguments)||this;return t.type="dataset",t}return i.prototype.init=function(t,e,a){n.prototype.init.call(this,t,e,a),this._sourceManager=new ve(this),dt(this)},i.prototype.mergeOption=function(t,e){n.prototype.mergeOption.call(this,t,e),dt(this)},i.prototype.optionUpdated=function(){this._sourceManager.dirty()},i.prototype.getSourceManager=function(){return this._sourceManager},i.type="dataset",i.defaultOption={seriesLayoutBy:fe},i}(Pt),Je=function(n){T(i,n);function i(){var t=n!==null&&n.apply(this,arguments)||this;return t.type="dataset",t}return i.type="dataset",i}(Gt);function ii(n){n.registerComponentModel(qe),n.registerComponentView(Je)}export{ii as a,ti as b,Mt as c,ei as i,_e as r,Me as s};
