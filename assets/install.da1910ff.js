import{h as w,aL as $t,q as b,aM as Ut,av as R,a as d,i as I,y as Ct,aN as X,aO as Y,aP as C,m as ot,aQ as Kt,aS as Zt,aT as q,aU as Wt,aV as Xt,aW as Yt,_ as T,aX as qt,z as Jt,x as pt,D as Dt,aY as Ht,a0 as Pt,aZ as Qt,a7 as kt,a_ as jt,J as At,a$ as te,aF as A,b0 as F,G as $,b1 as ht,o as it,b2 as at,b3 as ee,Z as ie,e as ae,aH as re,b4 as J,b5 as Q,b6 as ne,b7 as oe,a6 as se,b8 as le,P as ue,b9 as ce,ba as vt,bb as pe,bc as he,T as ft,bd as ve,be as dt,bf as fe}from"./index.esm.min.0819b090.js";var E=d,de=R,U=-1,st=function(){function n(i){var t=i.mappingMethod,e=i.type,a=this.option=w(i);this.type=e,this.mappingMethod=t,this._normalizeData=me[t];var r=n.visualHandlers[e];this.applyVisual=r.applyVisual,this.getColorMapper=r.getColorMapper,this._normalizedToVisual=r._normalizedToVisual[t],t==="piecewise"?(j(a),ge(a)):t==="category"?a.categories?ye(a):j(a,!0):($t(t!=="linear"||a.dataExtent),j(a))}return n.prototype.mapValueToVisual=function(i){var t=this._normalizeData(i);return this._normalizedToVisual(t,i)},n.prototype.getNormalizer=function(){return b(this._normalizeData,this)},n.listVisualTypes=function(){return Ut(n.visualHandlers)},n.isValidType=function(i){return n.visualHandlers.hasOwnProperty(i)},n.eachVisual=function(i,t,e){R(i)?d(i,t,e):t.call(e,i)},n.mapVisual=function(i,t,e){var a,r=I(i)?[]:R(i)?{}:(a=!0,null);return n.eachVisual(i,function(o,s){var l=t.call(e,o,s);a?r=l:r[s]=l}),r},n.retrieveVisuals=function(i){var t={},e;return i&&E(n.visualHandlers,function(a,r){i.hasOwnProperty(r)&&(t[r]=i[r],e=!0)}),e?t:null},n.prepareVisualTypes=function(i){if(I(i))i=i.slice();else if(de(i)){var t=[];E(i,function(e,a){t.push(a)}),i=t}else return[];return i.sort(function(e,a){return a==="color"&&e!=="color"&&e.indexOf("color")===0?1:-1}),i},n.dependsOn=function(i,t){return t==="color"?!!(i&&i.indexOf(t)===0):i===t},n.findPieceIndex=function(i,t,e){for(var a,r=1/0,o=0,s=t.length;o<s;o++){var l=t[o].value;if(l!=null){if(l===i||Ct(l)&&l===i+"")return o;e&&h(l,o)}}for(var o=0,s=t.length;o<s;o++){var p=t[o],c=p.interval,u=p.close;if(c){if(c[0]===-1/0){if(B(u[1],i,c[1]))return o}else if(c[1]===1/0){if(B(u[0],c[0],i))return o}else if(B(u[0],c[0],i)&&B(u[1],i,c[1]))return o;e&&h(c[0],o),e&&h(c[1],o)}}if(e)return i===1/0?t.length-1:i===-1/0?0:a;function h(v,f){var g=Math.abs(v-i);g<r&&(r=g,a=f)}},n.visualHandlers={color:{applyVisual:P("color"),getColorMapper:function(){var i=this.option;return b(i.mappingMethod==="category"?function(t,e){return!e&&(t=this._normalizeData(t)),k.call(this,t)}:function(t,e,a){var r=!!a;return!e&&(t=this._normalizeData(t)),a=X(t,i.parsedVisual,a),r?a:Y(a,"rgba")},this)},_normalizedToVisual:{linear:function(i){return Y(X(i,this.option.parsedVisual),"rgba")},category:k,piecewise:function(i,t){var e=nt.call(this,t);return e==null&&(e=Y(X(i,this.option.parsedVisual),"rgba")),e},fixed:O}},colorHue:G(function(i,t){return q(i,t)}),colorSaturation:G(function(i,t){return q(i,null,t)}),colorLightness:G(function(i,t){return q(i,null,null,t)}),colorAlpha:G(function(i,t){return Wt(i,t)}),decal:{applyVisual:P("decal"),_normalizedToVisual:{linear:null,category:k,piecewise:null,fixed:null}},opacity:{applyVisual:P("opacity"),_normalizedToVisual:rt([0,1])},liftZ:{applyVisual:P("liftZ"),_normalizedToVisual:{linear:O,category:O,piecewise:O,fixed:O}},symbol:{applyVisual:function(i,t,e){var a=this.mapValueToVisual(i);e("symbol",a)},_normalizedToVisual:{linear:gt,category:k,piecewise:function(i,t){var e=nt.call(this,t);return e==null&&(e=gt.call(this,i)),e},fixed:O}},symbolSize:{applyVisual:P("symbolSize"),_normalizedToVisual:rt([0,1])}},n}();function ge(n){var i=n.pieceList;n.hasSpecialVisual=!1,d(i,function(t,e){t.originIndex=e,t.visual!=null&&(n.hasSpecialVisual=!0)})}function ye(n){var i=n.categories,t=n.categoryMap={},e=n.visual;if(E(i,function(o,s){t[o]=s}),!I(e)){var a=[];R(e)?E(e,function(o,s){var l=t[s];a[l!=null?l:U]=o}):a[U]=e,e=Et(n,a)}for(var r=i.length-1;r>=0;r--)e[r]==null&&(delete t[i[r]],i.pop())}function j(n,i){var t=n.visual,e=[];R(t)?E(t,function(r){e.push(r)}):t!=null&&e.push(t);var a={color:1,symbol:1};!i&&e.length===1&&!a.hasOwnProperty(n.type)&&(e[1]=e[0]),Et(n,e)}function G(n){return{applyVisual:function(i,t,e){var a=this.mapValueToVisual(i);e("color",n(t("color"),a))},_normalizedToVisual:rt([0,1])}}function gt(n){var i=this.option.visual;return i[Math.round(C(n,[0,1],[0,i.length-1],!0))]||{}}function P(n){return function(i,t,e){e(n,this.mapValueToVisual(i))}}function k(n){var i=this.option.visual;return i[this.option.loop&&n!==U?n%i.length:n]}function O(){return this.option.visual[0]}function rt(n){return{linear:function(i){return C(i,n,this.option.visual,!0)},category:k,piecewise:function(i,t){var e=nt.call(this,t);return e==null&&(e=C(i,n,this.option.visual,!0)),e},fixed:O}}function nt(n){var i=this.option,t=i.pieceList;if(i.hasSpecialVisual){var e=st.findPieceIndex(n,t),a=t[e];if(a&&a.visual)return a.visual[this.type]}}function Et(n,i){return n.visual=i,n.type==="color"&&(n.parsedVisual=ot(i,function(t){var e=Kt(t);return e||[0,0,0,1]})),i}var me={linear:function(n){return C(n,this.option.dataExtent,[0,1],!0)},piecewise:function(n){var i=this.option.pieceList,t=st.findPieceIndex(n,i,!0);if(t!=null)return C(t,[0,i.length-1],[0,1],!0)},category:function(n){var i=this.option.categories?this.option.categoryMap[n]:n;return i==null?U:i},fixed:Zt};function B(n,i,t){return n?i<=t:i<t}var S=st;function Me(n,i,t,e,a,r){n=n||0;var o=t[1]-t[0];if(a!=null&&(a=D(a,[0,o])),r!=null&&(r=Math.max(r,a!=null?a:0)),e==="all"){var s=Math.abs(i[1]-i[0]);s=D(s,[0,o]),a=r=D(s,[a,r]),e=0}i[0]=D(i[0],t),i[1]=D(i[1],t);var l=tt(i,e);i[e]+=n;var p=a||0,c=t.slice();l.sign<0?c[0]+=p:c[1]-=p,i[e]=D(i[e],c);var u;return u=tt(i,e),a!=null&&(u.sign!==l.sign||u.span<a)&&(i[1-e]=i[e]+l.sign*a),u=tt(i,e),r!=null&&u.span>r&&(i[1-e]=i[e]+u.sign*r),i}function tt(n,i){var t=n[i]-n[1-i];return{span:Math.abs(t),sign:t>0?-1:t<0?1:i?-1:1}}function D(n,i){return Math.min(i[1]!=null?i[1]:1/0,Math.max(i[0]!=null?i[0]:-1/0,n))}var yt=d;function mt(n){if(n){for(var i in n)if(n.hasOwnProperty(i))return!0}}function Mt(n,i,t){var e={};return yt(i,function(r){var o=e[r]=a();yt(n[r],function(s,l){if(!!S.isValidType(l)){var p={type:l,visual:s};t&&t(p,r),o[l]=new S(p),l==="opacity"&&(p=w(p),p.type="colorAlpha",o.__hidden.__alphaForOpacity=new S(p))}})}),e;function a(){var r=function(){};r.prototype.__hidden=r.prototype;var o=new r;return o}}function _e(n,i,t){var e;d(t,function(a){i.hasOwnProperty(a)&&mt(i[a])&&(e=!0)}),e&&d(t,function(a){i.hasOwnProperty(a)&&mt(i[a])?n[a]=w(i[a]):delete n[a]})}function Se(n,i,t,e){var a={};return d(n,function(r){var o=S.prepareVisualTypes(i[r]);a[r]=o}),{progress:function(o,s){var l;e!=null&&(l=s.getDimensionIndex(e));function p(z){return Xt(s,u,z)}function c(z,V){Yt(s,u,z,V)}for(var u,h=s.getStore();(u=o.next())!=null;){var v=s.getRawDataItem(u);if(!(v&&v.visualMap===!1))for(var f=e!=null?h.get(l,u):u,g=t(f),m=i[g],y=a[g],_=0,M=y.length;_<M;_++){var L=y[_];m[L]&&m[L].applyVisual(f,p,c)}}}}}var Ve={get:function(n,i,t){var e=w((xe[n]||{})[i]);return t&&I(e)?e[e.length-1]:e}},xe={color:{active:["#006edd","#e0ffff"],inactive:["rgba(0,0,0,0)"]},colorHue:{active:[0,360],inactive:[0,0]},colorSaturation:{active:[.3,1],inactive:[0,0]},colorLightness:{active:[.9,.5],inactive:[0,0]},colorAlpha:{active:[.3,1],inactive:[0,0]},opacity:{active:[.3,1],inactive:[0,0]},symbol:{active:["circle","roundRect","diamond"],inactive:["none"]},symbolSize:{active:[10,50],inactive:[0,0]}},Gt=Ve,_t=S.mapVisual,be=S.eachVisual,we=I,St=d,Ie=Ht,Le=C,ze=function(n){T(i,n);function i(){var t=n!==null&&n.apply(this,arguments)||this;return t.type=i.type,t.stateList=["inRange","outOfRange"],t.replacableOptionKeys=["inRange","outOfRange","target","controller","color"],t.layoutMode={type:"box",ignoreSize:!0},t.dataBound=[-1/0,1/0],t.targetVisuals={},t.controllerVisuals={},t}return i.prototype.init=function(t,e,a){this.mergeDefaultAndTheme(t,a)},i.prototype.optionUpdated=function(t,e){var a=this.option;!e&&_e(a,t,this.replacableOptionKeys),this.textStyleModel=this.getModel("textStyle"),this.resetItemSize(),this.completeVisualOption()},i.prototype.resetVisual=function(t){var e=this.stateList;t=b(t,this),this.controllerVisuals=Mt(this.option.controller,e,t),this.targetVisuals=Mt(this.option.target,e,t)},i.prototype.getItemSymbol=function(){return null},i.prototype.getTargetSeriesIndices=function(){var t=this.option.seriesIndex,e=[];return t==null||t==="all"?this.ecModel.eachSeries(function(a,r){e.push(r)}):e=qt(t),e},i.prototype.eachTargetSeries=function(t,e){d(this.getTargetSeriesIndices(),function(a){var r=this.ecModel.getSeriesByIndex(a);r&&t.call(e,r)},this)},i.prototype.isTargetSeries=function(t){var e=!1;return this.eachTargetSeries(function(a){a===t&&(e=!0)}),e},i.prototype.formatValueText=function(t,e,a){var r=this.option,o=r.precision,s=this.dataBound,l=r.formatter,p;a=a||["<",">"],I(t)&&(t=t.slice(),p=!0);var c=e?t:p?[u(t[0]),u(t[1])]:u(t);if(Ct(l))return l.replace("{value}",p?c[0]:c).replace("{value2}",p?c[1]:c);if(Jt(l))return p?l(t[0],t[1]):l(t);if(p)return t[0]===s[0]?a[0]+" "+c[1]:t[1]===s[1]?a[1]+" "+c[0]:c[0]+" - "+c[1];return c;function u(h){return h===s[0]?"min":h===s[1]?"max":(+h).toFixed(Math.min(o,20))}},i.prototype.resetExtent=function(){var t=this.option,e=Ie([t.min,t.max]);this._dataExtent=e},i.prototype.getDataDimensionIndex=function(t){var e=this.option.dimension;if(e!=null)return t.getDimensionIndex(e);for(var a=t.dimensions,r=a.length-1;r>=0;r--){var o=a[r],s=t.getDimensionInfo(o);if(!s.isCalculationCoord)return s.storeDimIndex}},i.prototype.getExtent=function(){return this._dataExtent.slice()},i.prototype.completeVisualOption=function(){var t=this.ecModel,e=this.option,a={inRange:e.inRange,outOfRange:e.outOfRange},r=e.target||(e.target={}),o=e.controller||(e.controller={});pt(r,a),pt(o,a);var s=this.isCategory();l.call(this,r),l.call(this,o),p.call(this,r,"inRange","outOfRange"),c.call(this,o);function l(u){we(e.color)&&!u.inRange&&(u.inRange={color:e.color.slice().reverse()}),u.inRange=u.inRange||{color:t.get("gradientColor")}}function p(u,h,v){var f=u[h],g=u[v];f&&!g&&(g=u[v]={},St(f,function(m,y){if(!!S.isValidType(y)){var _=Gt.get(y,"inactive",s);_!=null&&(g[y]=_,y==="color"&&!g.hasOwnProperty("opacity")&&!g.hasOwnProperty("colorAlpha")&&(g.opacity=[0,0]))}}))}function c(u){var h=(u.inRange||{}).symbol||(u.outOfRange||{}).symbol,v=(u.inRange||{}).symbolSize||(u.outOfRange||{}).symbolSize,f=this.get("inactiveColor"),g=this.getItemSymbol(),m=g||"roundRect";St(this.stateList,function(y){var _=this.itemSize,M=u[y];M||(M=u[y]={color:s?f:[f]}),M.symbol==null&&(M.symbol=h&&w(h)||(s?m:[m])),M.symbolSize==null&&(M.symbolSize=v&&w(v)||(s?_[0]:[_[0],_[0]])),M.symbol=_t(M.symbol,function(V){return V==="none"?m:V});var L=M.symbolSize;if(L!=null){var z=-1/0;be(L,function(V){V>z&&(z=V)}),M.symbolSize=_t(L,function(V){return Le(V,[0,z],[0,_[0]],!0)})}},this)}},i.prototype.resetItemSize=function(){this.itemSize=[parseFloat(this.get("itemWidth")),parseFloat(this.get("itemHeight"))]},i.prototype.isCategory=function(){return!!this.option.categories},i.prototype.setSelected=function(t){},i.prototype.getSelected=function(){return null},i.prototype.getValueState=function(t){return null},i.prototype.getVisualMeta=function(t){return null},i.type="visualMap",i.dependencies=["series"],i.defaultOption={show:!0,z:4,seriesIndex:"all",min:0,max:200,left:0,right:null,top:null,bottom:0,itemWidth:null,itemHeight:null,inverse:!1,orient:"vertical",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",contentColor:"#5793f3",inactiveColor:"#aaa",borderWidth:0,padding:5,textGap:10,precision:0,textStyle:{color:"#333"}},i}(Dt),K=ze,Vt=[20,140],Te=function(n){T(i,n);function i(){var t=n!==null&&n.apply(this,arguments)||this;return t.type=i.type,t}return i.prototype.optionUpdated=function(t,e){n.prototype.optionUpdated.apply(this,arguments),this.resetExtent(),this.resetVisual(function(a){a.mappingMethod="linear",a.dataExtent=this.getExtent()}),this._resetRange()},i.prototype.resetItemSize=function(){n.prototype.resetItemSize.apply(this,arguments);var t=this.itemSize;(t[0]==null||isNaN(t[0]))&&(t[0]=Vt[0]),(t[1]==null||isNaN(t[1]))&&(t[1]=Vt[1])},i.prototype._resetRange=function(){var t=this.getExtent(),e=this.option.range;!e||e.auto?(t.auto=1,this.option.range=t):I(e)&&(e[0]>e[1]&&e.reverse(),e[0]=Math.max(e[0],t[0]),e[1]=Math.min(e[1],t[1]))},i.prototype.completeVisualOption=function(){n.prototype.completeVisualOption.apply(this,arguments),d(this.stateList,function(t){var e=this.option.controller[t].symbolSize;e&&e[0]!==e[1]&&(e[0]=e[1]/3)},this)},i.prototype.setSelected=function(t){this.option.range=t.slice(),this._resetRange()},i.prototype.getSelected=function(){var t=this.getExtent(),e=Ht((this.get("range")||[]).slice());return e[0]>t[1]&&(e[0]=t[1]),e[1]>t[1]&&(e[1]=t[1]),e[0]<t[0]&&(e[0]=t[0]),e[1]<t[0]&&(e[1]=t[0]),e},i.prototype.getValueState=function(t){var e=this.option.range,a=this.getExtent();return(e[0]<=a[0]||e[0]<=t)&&(e[1]>=a[1]||t<=e[1])?"inRange":"outOfRange"},i.prototype.findTargetDataIndices=function(t){var e=[];return this.eachTargetSeries(function(a){var r=[],o=a.getData();o.each(this.getDataDimensionIndex(o),function(s,l){t[0]<=s&&s<=t[1]&&r.push(l)},this),e.push({seriesId:a.id,dataIndex:r})},this),e},i.prototype.getVisualMeta=function(t){var e=xt(this,"outOfRange",this.getExtent()),a=xt(this,"inRange",this.option.range.slice()),r=[];function o(v,f){r.push({value:v,color:t(v,f)})}for(var s=0,l=0,p=a.length,c=e.length;l<c&&(!a.length||e[l]<=a[0]);l++)e[l]<a[s]&&o(e[l],"outOfRange");for(var u=1;s<p;s++,u=0)u&&r.length&&o(a[s],"outOfRange"),o(a[s],"inRange");for(var u=1;l<c;l++)(!a.length||a[a.length-1]<e[l])&&(u&&(r.length&&o(r[r.length-1].value,"outOfRange"),u=0),o(e[l],"outOfRange"));var h=r.length;return{stops:r,outerColors:[h?r[0].color:"transparent",h?r[h-1].color:"transparent"]}},i.type="visualMap.continuous",i.defaultOption=Pt(K.defaultOption,{align:"auto",calculable:!1,hoverLink:!0,realtime:!0,handleIcon:"path://M-11.39,9.77h0a3.5,3.5,0,0,1-3.5,3.5h-22a3.5,3.5,0,0,1-3.5-3.5h0a3.5,3.5,0,0,1,3.5-3.5h22A3.5,3.5,0,0,1-11.39,9.77Z",handleSize:"120%",handleStyle:{borderColor:"#fff",borderWidth:1},indicatorIcon:"circle",indicatorSize:"50%",indicatorStyle:{borderColor:"#fff",borderWidth:2,shadowBlur:2,shadowOffsetX:1,shadowOffsetY:1,shadowColor:"rgba(0,0,0,0.2)"}}),i}(K);function xt(n,i,t){if(t[0]===t[1])return t.slice();for(var e=200,a=(t[1]-t[0])/e,r=t[0],o=[],s=0;s<=e&&r<t[1];s++)o.push(r),r+=a;return o.push(t[1]),o}var Oe=Te,Re=function(n){T(i,n);function i(){var t=n!==null&&n.apply(this,arguments)||this;return t.type=i.type,t.autoPositionValues={left:1,right:1,top:1,bottom:1},t}return i.prototype.init=function(t,e){this.ecModel=t,this.api=e},i.prototype.render=function(t,e,a,r){if(this.visualMapModel=t,t.get("show")===!1){this.group.removeAll();return}this.doRender(t,e,a,r)},i.prototype.renderBackground=function(t){var e=this.visualMapModel,a=Qt(e.get("padding")||0),r=t.getBoundingRect();t.add(new kt({z2:-1,silent:!0,shape:{x:r.x-a[3],y:r.y-a[0],width:r.width+a[3]+a[1],height:r.height+a[0]+a[2]},style:{fill:e.get("backgroundColor"),stroke:e.get("borderColor"),lineWidth:e.get("borderWidth")}}))},i.prototype.getControllerVisual=function(t,e,a){a=a||{};var r=a.forceState,o=this.visualMapModel,s={};if(e==="color"){var l=o.get("contentColor");s.color=l}function p(v){return s[v]}function c(v,f){s[v]=f}var u=o.controllerVisuals[r||o.getValueState(t)],h=S.prepareVisualTypes(u);return d(h,function(v){var f=u[v];a.convertOpacityToAlpha&&v==="opacity"&&(v="colorAlpha",f=u.__alphaForOpacity),S.dependsOn(v,e)&&f&&f.applyVisual(t,p,c)}),s[e]},i.prototype.positionGroup=function(t){var e=this.visualMapModel,a=this.api;jt(t,e.getBoxLayoutParams(),{width:a.getWidth(),height:a.getHeight()})},i.prototype.doRender=function(t,e,a,r){},i.type="visualMap",i}(At),Bt=Re,bt=[["left","right","width"],["top","bottom","height"]];function Ft(n,i,t){var e=n.option,a=e.align;if(a!=null&&a!=="auto")return a;for(var r={width:i.getWidth(),height:i.getHeight()},o=e.orient==="horizontal"?1:0,s=bt[o],l=[0,null,10],p={},c=0;c<3;c++)p[bt[1-o][c]]=l[c],p[s[c]]=c===2?t[0]:e[s[c]];var u=[["x","width",3],["y","height",0]][o],h=te(p,r,e.padding);return s[(h.margin[u[2]]||0)+h[u[0]]+h[u[1]]*.5<r[u[1]]*.5?0:1]}function N(n,i){return d(n||[],function(t){t.dataIndex!=null&&(t.dataIndexInside=t.dataIndex,t.dataIndex=null),t.highlightKey="visualMap"+(i?i.componentIndex:"")}),n}var x=C,Ce=d,wt=Math.min,et=Math.max,De=12,He=6,Pe=function(n){T(i,n);function i(){var t=n!==null&&n.apply(this,arguments)||this;return t.type=i.type,t._shapes={},t._dataInterval=[],t._handleEnds=[],t._hoverLinkDataIndices=[],t}return i.prototype.doRender=function(t,e,a,r){this._api=a,(!r||r.type!=="selectDataRange"||r.from!==this.uid)&&this._buildView()},i.prototype._buildView=function(){this.group.removeAll();var t=this.visualMapModel,e=this.group;this._orient=t.get("orient"),this._useHandle=t.get("calculable"),this._resetInterval(),this._renderBar(e);var a=t.get("text");this._renderEndsText(e,a,0),this._renderEndsText(e,a,1),this._updateView(!0),this.renderBackground(e),this._updateView(),this._enableHoverLinkToSeries(),this._enableHoverLinkFromSeries(),this.positionGroup(e)},i.prototype._renderEndsText=function(t,e,a){if(!!e){var r=e[1-a];r=r!=null?r+"":"";var o=this.visualMapModel,s=o.get("textGap"),l=o.itemSize,p=this._shapes.mainGroup,c=this._applyTransform([l[0]/2,a===0?-s:l[1]+s],p),u=this._applyTransform(a===0?"bottom":"top",p),h=this._orient,v=this.visualMapModel.textStyleModel;this.group.add(new A({style:F(v,{x:c[0],y:c[1],verticalAlign:h==="horizontal"?"middle":u,align:h==="horizontal"?u:"center",text:r})}))}},i.prototype._renderBar=function(t){var e=this.visualMapModel,a=this._shapes,r=e.itemSize,o=this._orient,s=this._useHandle,l=Ft(e,this.api,r),p=a.mainGroup=this._createBarGroup(l),c=new $;p.add(c),c.add(a.outOfRange=It()),c.add(a.inRange=It(null,s?zt(this._orient):null,b(this._dragHandle,this,"all",!1),b(this._dragHandle,this,"all",!0))),c.setClipPath(new kt({shape:{x:0,y:0,width:r[0],height:r[1],r:3}}));var u=e.textStyleModel.getTextRect("\u56FD"),h=et(u.width,u.height);s&&(a.handleThumbs=[],a.handleLabels=[],a.handleLabelPoints=[],this._createHandle(e,p,0,r,h,o),this._createHandle(e,p,1,r,h,o)),this._createIndicator(e,p,r,h,o),t.add(p)},i.prototype._createHandle=function(t,e,a,r,o,s){var l=b(this._dragHandle,this,a,!1),p=b(this._dragHandle,this,a,!0),c=ht(t.get("handleSize"),r[0]),u=it(t.get("handleIcon"),-c/2,-c/2,c,c,null,!0),h=zt(this._orient);u.attr({cursor:h,draggable:!0,drift:l,ondragend:p,onmousemove:function(y){at(y.event)}}),u.x=r[0]/2,u.useStyle(t.getModel("handleStyle").getItemStyle()),u.setStyle({strokeNoScale:!0,strokeFirst:!0}),u.style.lineWidth*=2,u.ensureState("emphasis").style=t.getModel(["emphasis","handleStyle"]).getItemStyle(),ee(u,!0),e.add(u);var v=this.visualMapModel.textStyleModel,f=new A({cursor:h,draggable:!0,drift:l,onmousemove:function(y){at(y.event)},ondragend:p,style:F(v,{x:0,y:0,text:""})});f.ensureState("blur").style={opacity:.1},f.stateTransition={duration:200},this.group.add(f);var g=[c,0],m=this._shapes;m.handleThumbs[a]=u,m.handleLabelPoints[a]=g,m.handleLabels[a]=f},i.prototype._createIndicator=function(t,e,a,r,o){var s=ht(t.get("indicatorSize"),a[0]),l=it(t.get("indicatorIcon"),-s/2,-s/2,s,s,null,!0);l.attr({cursor:"move",invisible:!0,silent:!0,x:a[0]/2});var p=t.getModel("indicatorStyle").getItemStyle();if(l instanceof ie){var c=l.style;l.useStyle(ae({image:c.image,x:c.x,y:c.y,width:c.width,height:c.height},p))}else l.useStyle(p);e.add(l);var u=this.visualMapModel.textStyleModel,h=new A({silent:!0,invisible:!0,style:F(u,{x:0,y:0,text:""})});this.group.add(h);var v=[(o==="horizontal"?r/2:He)+a[0]/2,0],f=this._shapes;f.indicator=l,f.indicatorLabel=h,f.indicatorLabelPoint=v,this._firstShowIndicator=!0},i.prototype._dragHandle=function(t,e,a,r){if(!!this._useHandle){if(this._dragging=!e,!e){var o=this._applyTransform([a,r],this._shapes.mainGroup,!0);this._updateInterval(t,o[1]),this._hideIndicator(),this._updateView()}e===!this.visualMapModel.get("realtime")&&this.api.dispatchAction({type:"selectDataRange",from:this.uid,visualMapId:this.visualMapModel.id,selected:this._dataInterval.slice()}),e?!this._hovering&&this._clearHoverLinkToSeries():Lt(this.visualMapModel)&&this._doHoverLinkToSeries(this._handleEnds[t],!1)}},i.prototype._resetInterval=function(){var t=this.visualMapModel,e=this._dataInterval=t.getSelected(),a=t.getExtent(),r=[0,t.itemSize[1]];this._handleEnds=[x(e[0],a,r,!0),x(e[1],a,r,!0)]},i.prototype._updateInterval=function(t,e){e=e||0;var a=this.visualMapModel,r=this._handleEnds,o=[0,a.itemSize[1]];Me(e,r,o,t,0);var s=a.getExtent();this._dataInterval=[x(r[0],o,s,!0),x(r[1],o,s,!0)]},i.prototype._updateView=function(t){var e=this.visualMapModel,a=e.getExtent(),r=this._shapes,o=[0,e.itemSize[1]],s=t?o:this._handleEnds,l=this._createBarVisual(this._dataInterval,a,s,"inRange"),p=this._createBarVisual(a,a,o,"outOfRange");r.inRange.setStyle({fill:l.barColor}).setShape("points",l.barPoints),r.outOfRange.setStyle({fill:p.barColor}).setShape("points",p.barPoints),this._updateHandle(s,l)},i.prototype._createBarVisual=function(t,e,a,r){var o={forceState:r,convertOpacityToAlpha:!0},s=this._makeColorGradient(t,o),l=[this.getControllerVisual(t[0],"symbolSize",o),this.getControllerVisual(t[1],"symbolSize",o)],p=this._createBarPoints(a,l);return{barColor:new re(0,0,0,1,s),barPoints:p,handlesColor:[s[0].color,s[s.length-1].color]}},i.prototype._makeColorGradient=function(t,e){var a=100,r=[],o=(t[1]-t[0])/a;r.push({color:this.getControllerVisual(t[0],"color",e),offset:0});for(var s=1;s<a;s++){var l=t[0]+o*s;if(l>t[1])break;r.push({color:this.getControllerVisual(l,"color",e),offset:s/a})}return r.push({color:this.getControllerVisual(t[1],"color",e),offset:1}),r},i.prototype._createBarPoints=function(t,e){var a=this.visualMapModel.itemSize;return[[a[0]-e[0],t[0]],[a[0],t[0]],[a[0],t[1]],[a[0]-e[1],t[1]]]},i.prototype._createBarGroup=function(t){var e=this._orient,a=this.visualMapModel.get("inverse");return new $(e==="horizontal"&&!a?{scaleX:t==="bottom"?1:-1,rotation:Math.PI/2}:e==="horizontal"&&a?{scaleX:t==="bottom"?-1:1,rotation:-Math.PI/2}:e==="vertical"&&!a?{scaleX:t==="left"?1:-1,scaleY:-1}:{scaleX:t==="left"?1:-1})},i.prototype._updateHandle=function(t,e){if(!!this._useHandle){var a=this._shapes,r=this.visualMapModel,o=a.handleThumbs,s=a.handleLabels,l=r.itemSize,p=r.getExtent();Ce([0,1],function(c){var u=o[c];u.setStyle("fill",e.handlesColor[c]),u.y=t[c];var h=x(t[c],[0,l[1]],p,!0),v=this.getControllerVisual(h,"symbolSize");u.scaleX=u.scaleY=v/l[0],u.x=l[0]-v/2;var f=J(a.handleLabelPoints[c],Q(u,this.group));s[c].setStyle({x:f[0],y:f[1],text:r.formatValueText(this._dataInterval[c]),verticalAlign:"middle",align:this._orient==="vertical"?this._applyTransform("left",a.mainGroup):"center"})},this)}},i.prototype._showIndicator=function(t,e,a,r){var o=this.visualMapModel,s=o.getExtent(),l=o.itemSize,p=[0,l[1]],c=this._shapes,u=c.indicator;if(!!u){u.attr("invisible",!1);var h={convertOpacityToAlpha:!0},v=this.getControllerVisual(t,"color",h),f=this.getControllerVisual(t,"symbolSize"),g=x(t,s,p,!0),m=l[0]-f/2,y={x:u.x,y:u.y};u.y=g,u.x=m;var _=J(c.indicatorLabelPoint,Q(u,this.group)),M=c.indicatorLabel;M.attr("invisible",!1);var L=this._applyTransform("left",c.mainGroup),z=this._orient,V=z==="horizontal";M.setStyle({text:(a||"")+o.formatValueText(e),verticalAlign:V?L:"middle",align:V?"center":L});var lt={x:m,y:g,style:{fill:v}},ut={style:{x:_[0],y:_[1]}};if(o.ecModel.isAnimationEnabled()&&!this._firstShowIndicator){var ct={duration:100,easing:"cubicInOut",additive:!0};u.x=y.x,u.y=y.y,u.animateTo(lt,ct),M.animateTo(ut,ct)}else u.attr(lt),M.attr(ut);this._firstShowIndicator=!1;var Z=this._shapes.handleLabels;if(Z)for(var W=0;W<Z.length;W++)this._api.enterBlur(Z[W])}},i.prototype._enableHoverLinkToSeries=function(){var t=this;this._shapes.mainGroup.on("mousemove",function(e){if(t._hovering=!0,!t._dragging){var a=t.visualMapModel.itemSize,r=t._applyTransform([e.offsetX,e.offsetY],t._shapes.mainGroup,!0,!0);r[1]=wt(et(0,r[1]),a[1]),t._doHoverLinkToSeries(r[1],0<=r[0]&&r[0]<=a[0])}}).on("mouseout",function(){t._hovering=!1,!t._dragging&&t._clearHoverLinkToSeries()})},i.prototype._enableHoverLinkFromSeries=function(){var t=this.api.getZr();this.visualMapModel.option.hoverLink?(t.on("mouseover",this._hoverLinkFromSeriesMouseOver,this),t.on("mouseout",this._hideIndicator,this)):this._clearHoverLinkFromSeries()},i.prototype._doHoverLinkToSeries=function(t,e){var a=this.visualMapModel,r=a.itemSize;if(!!a.option.hoverLink){var o=[0,r[1]],s=a.getExtent();t=wt(et(o[0],t),o[1]);var l=ke(a,s,o),p=[t-l,t+l],c=x(t,o,s,!0),u=[x(p[0],o,s,!0),x(p[1],o,s,!0)];p[0]<o[0]&&(u[0]=-1/0),p[1]>o[1]&&(u[1]=1/0),e&&(u[0]===-1/0?this._showIndicator(c,u[1],"< ",l):u[1]===1/0?this._showIndicator(c,u[0],"> ",l):this._showIndicator(c,c,"\u2248 ",l));var h=this._hoverLinkDataIndices,v=[];(e||Lt(a))&&(v=this._hoverLinkDataIndices=a.findTargetDataIndices(u));var f=ne(h,v);this._dispatchHighDown("downplay",N(f[0],a)),this._dispatchHighDown("highlight",N(f[1],a))}},i.prototype._hoverLinkFromSeriesMouseOver=function(t){var e;if(oe(t.target,function(l){var p=se(l);if(p.dataIndex!=null)return e=p,!0},!0),!!e){var a=this.ecModel.getSeriesByIndex(e.seriesIndex),r=this.visualMapModel;if(!!r.isTargetSeries(a)){var o=a.getData(e.dataType),s=o.getStore().get(r.getDataDimensionIndex(o),e.dataIndex);isNaN(s)||this._showIndicator(s,s)}}},i.prototype._hideIndicator=function(){var t=this._shapes;t.indicator&&t.indicator.attr("invisible",!0),t.indicatorLabel&&t.indicatorLabel.attr("invisible",!0);var e=this._shapes.handleLabels;if(e)for(var a=0;a<e.length;a++)this._api.leaveBlur(e[a])},i.prototype._clearHoverLinkToSeries=function(){this._hideIndicator();var t=this._hoverLinkDataIndices;this._dispatchHighDown("downplay",N(t,this.visualMapModel)),t.length=0},i.prototype._clearHoverLinkFromSeries=function(){this._hideIndicator();var t=this.api.getZr();t.off("mouseover",this._hoverLinkFromSeriesMouseOver),t.off("mouseout",this._hideIndicator)},i.prototype._applyTransform=function(t,e,a,r){var o=Q(e,r?null:this.group);return I(t)?J(t,o,a):le(t,o,a)},i.prototype._dispatchHighDown=function(t,e){e&&e.length&&this.api.dispatchAction({type:t,batch:e})},i.prototype.dispose=function(){this._clearHoverLinkFromSeries(),this._clearHoverLinkToSeries()},i.prototype.remove=function(){this._clearHoverLinkFromSeries(),this._clearHoverLinkToSeries()},i.type="visualMap.continuous",i}(Bt);function It(n,i,t,e){return new ue({shape:{points:n},draggable:!!t,cursor:i,drift:t,onmousemove:function(a){at(a.event)},ondragend:e})}function ke(n,i,t){var e=De/2,a=n.get("hoverLinkDataSize");return a&&(e=x(a,i,t,!0)/2),e}function Lt(n){var i=n.get("hoverLinkOnHandle");return!!(i==null?n.get("realtime"):i)}function zt(n){return n==="vertical"?"ns-resize":"ew-resize"}var Ae=Pe,Ee={type:"selectDataRange",event:"dataRangeSelected",update:"update"},Ge=function(n,i){i.eachComponent({mainType:"visualMap",query:n},function(t){t.setSelected(n.selected)})},Be=[{createOnAllSeries:!0,reset:function(n,i){var t=[];return i.eachComponent("visualMap",function(e){var a=n.pipelineContext;!e.isTargetSeries(n)||a&&a.large||t.push(Se(e.stateList,e.targetVisuals,b(e.getValueState,e),e.getDataDimensionIndex(n.getData())))}),t}},{createOnAllSeries:!0,reset:function(n,i){var t=n.getData(),e=[];i.eachComponent("visualMap",function(a){if(a.isTargetSeries(n)){var r=a.getVisualMeta(b(Fe,null,n,a))||{stops:[],outerColors:[]},o=a.getDataDimensionIndex(t);o>=0&&(r.dimension=o,e.push(r))}}),n.getData().setVisual("visualMeta",e)}}];function Fe(n,i,t,e){for(var a=i.targetVisuals[e],r=S.prepareVisualTypes(a),o={color:ce(n.getData(),"color")},s=0,l=r.length;s<l;s++){var p=r[s],c=a[p==="opacity"?"__alphaForOpacity":p];c&&c.applyVisual(t,u,h)}return o.color;function u(v){return o[v]}function h(v,f){o[v]=f}}var Tt=d;function Ne(n){var i=n&&n.visualMap;I(i)||(i=i?[i]:[]),Tt(i,function(t){if(!!t){H(t,"splitList")&&!H(t,"pieces")&&(t.pieces=t.splitList,delete t.splitList);var e=t.pieces;e&&I(e)&&Tt(e,function(a){R(a)&&(H(a,"start")&&!H(a,"min")&&(a.min=a.start),H(a,"end")&&!H(a,"max")&&(a.max=a.end))})}})}function H(n,i){return n&&n.hasOwnProperty&&n.hasOwnProperty(i)}var Ot=!1;function Nt(n){Ot||(Ot=!0,n.registerSubTypeDefaulter("visualMap",function(i){return!i.categories&&(!(i.pieces?i.pieces.length>0:i.splitNumber>0)||i.calculable)?"continuous":"piecewise"}),n.registerAction(Ee,Ge),d(Be,function(i){n.registerVisual(n.PRIORITY.VISUAL.COMPONENT,i)}),n.registerPreprocessor(Ne))}function $e(n){n.registerComponentModel(Oe),n.registerComponentView(Ae),Nt(n)}var Ue=function(n){T(i,n);function i(){var t=n!==null&&n.apply(this,arguments)||this;return t.type=i.type,t._pieceList=[],t}return i.prototype.optionUpdated=function(t,e){n.prototype.optionUpdated.apply(this,arguments),this.resetExtent();var a=this._mode=this._determineMode();this._pieceList=[],Ke[this._mode].call(this,this._pieceList),this._resetSelected(t,e);var r=this.option.categories;this.resetVisual(function(o,s){a==="categories"?(o.mappingMethod="category",o.categories=w(r)):(o.dataExtent=this.getExtent(),o.mappingMethod="piecewise",o.pieceList=ot(this._pieceList,function(l){return l=w(l),s!=="inRange"&&(l.visual=null),l}))})},i.prototype.completeVisualOption=function(){var t=this.option,e={},a=S.listVisualTypes(),r=this.isCategory();d(t.pieces,function(s){d(a,function(l){s.hasOwnProperty(l)&&(e[l]=1)})}),d(e,function(s,l){var p=!1;d(this.stateList,function(c){p=p||o(t,c,l)||o(t.target,c,l)},this),!p&&d(this.stateList,function(c){(t[c]||(t[c]={}))[l]=Gt.get(l,c==="inRange"?"active":"inactive",r)})},this);function o(s,l,p){return s&&s[l]&&s[l].hasOwnProperty(p)}n.prototype.completeVisualOption.apply(this,arguments)},i.prototype._resetSelected=function(t,e){var a=this.option,r=this._pieceList,o=(e?a:t).selected||{};if(a.selected=o,d(r,function(l,p){var c=this.getSelectedMapKey(l);o.hasOwnProperty(c)||(o[c]=!0)},this),a.selectedMode==="single"){var s=!1;d(r,function(l,p){var c=this.getSelectedMapKey(l);o[c]&&(s?o[c]=!1:s=!0)},this)}},i.prototype.getItemSymbol=function(){return this.get("itemSymbol")},i.prototype.getSelectedMapKey=function(t){return this._mode==="categories"?t.value+"":t.index+""},i.prototype.getPieceList=function(){return this._pieceList},i.prototype._determineMode=function(){var t=this.option;return t.pieces&&t.pieces.length>0?"pieces":this.option.categories?"categories":"splitNumber"},i.prototype.setSelected=function(t){this.option.selected=w(t)},i.prototype.getValueState=function(t){var e=S.findPieceIndex(t,this._pieceList);return e!=null&&this.option.selected[this.getSelectedMapKey(this._pieceList[e])]?"inRange":"outOfRange"},i.prototype.findTargetDataIndices=function(t){var e=[],a=this._pieceList;return this.eachTargetSeries(function(r){var o=[],s=r.getData();s.each(this.getDataDimensionIndex(s),function(l,p){var c=S.findPieceIndex(l,a);c===t&&o.push(p)},this),e.push({seriesId:r.id,dataIndex:o})},this),e},i.prototype.getRepresentValue=function(t){var e;if(this.isCategory())e=t.value;else if(t.value!=null)e=t.value;else{var a=t.interval||[];e=a[0]===-1/0&&a[1]===1/0?0:(a[0]+a[1])/2}return e},i.prototype.getVisualMeta=function(t){if(this.isCategory())return;var e=[],a=["",""],r=this;function o(c,u){var h=r.getRepresentValue({interval:c});u||(u=r.getValueState(h));var v=t(h,u);c[0]===-1/0?a[0]=v:c[1]===1/0?a[1]=v:e.push({value:c[0],color:v},{value:c[1],color:v})}var s=this._pieceList.slice();if(!s.length)s.push({interval:[-1/0,1/0]});else{var l=s[0].interval[0];l!==-1/0&&s.unshift({interval:[-1/0,l]}),l=s[s.length-1].interval[1],l!==1/0&&s.push({interval:[l,1/0]})}var p=-1/0;return d(s,function(c){var u=c.interval;u&&(u[0]>p&&o([p,u[0]],"outOfRange"),o(u.slice()),p=u[1])},this),{stops:e,outerColors:a}},i.type="visualMap.piecewise",i.defaultOption=Pt(K.defaultOption,{selected:null,minOpen:!1,maxOpen:!1,align:"auto",itemWidth:20,itemHeight:14,itemSymbol:"roundRect",pieces:null,categories:null,splitNumber:5,selectedMode:"multiple",itemGap:10,hoverLink:!0}),i}(K),Ke={splitNumber:function(n){var i=this.option,t=Math.min(i.precision,20),e=this.getExtent(),a=i.splitNumber;a=Math.max(parseInt(a,10),1),i.splitNumber=a;for(var r=(e[1]-e[0])/a;+r.toFixed(t)!==r&&t<5;)t++;i.precision=t,r=+r.toFixed(t),i.minOpen&&n.push({interval:[-1/0,e[0]],close:[0,0]});for(var o=0,s=e[0];o<a;s+=r,o++){var l=o===a-1?e[1]:s+r;n.push({interval:[s,l],close:[1,1]})}i.maxOpen&&n.push({interval:[e[1],1/0],close:[0,0]}),vt(n),d(n,function(p,c){p.index=c,p.text=this.formatValueText(p.interval)},this)},categories:function(n){var i=this.option;d(i.categories,function(t){n.push({text:this.formatValueText(t,!0),value:t})},this),Rt(i,n)},pieces:function(n){var i=this.option;d(i.pieces,function(t,e){R(t)||(t={value:t});var a={text:"",index:e};if(t.label!=null&&(a.text=t.label),t.hasOwnProperty("value")){var r=a.value=t.value;a.interval=[r,r],a.close=[1,1]}else{for(var o=a.interval=[],s=a.close=[0,0],l=[1,0,1],p=[-1/0,1/0],c=[],u=0;u<2;u++){for(var h=[["gte","gt","min"],["lte","lt","max"]][u],v=0;v<3&&o[u]==null;v++)o[u]=t[h[v]],s[u]=l[v],c[u]=v===2;o[u]==null&&(o[u]=p[u])}c[0]&&o[1]===1/0&&(s[0]=0),c[1]&&o[0]===-1/0&&(s[1]=0),o[0]===o[1]&&s[0]&&s[1]&&(a.value=o[0])}a.visual=S.retrieveVisuals(t),n.push(a)},this),Rt(i,n),vt(n),d(n,function(t){var e=t.close,a=[["<","\u2264"][e[1]],[">","\u2265"][e[0]]];t.text=t.text||this.formatValueText(t.value!=null?t.value:t.interval,!1,a)},this)}};function Rt(n,i){var t=n.inverse;(n.orient==="vertical"?!t:t)&&i.reverse()}var Ze=Ue,We=function(n){T(i,n);function i(){var t=n!==null&&n.apply(this,arguments)||this;return t.type=i.type,t}return i.prototype.doRender=function(){var t=this.group;t.removeAll();var e=this.visualMapModel,a=e.get("textGap"),r=e.textStyleModel,o=r.getFont(),s=r.getTextColor(),l=this._getItemAlign(),p=e.itemSize,c=this._getViewData(),u=c.endsText,h=pe(e.get("showLabel",!0),!u);u&&this._renderEndsText(t,u[0],p,h,l),d(c.viewPieceList,function(v){var f=v.piece,g=new $;g.onclick=b(this._onItemClick,this,f),this._enableHoverLink(g,v.indexInModelPieceList);var m=e.getRepresentValue(f);if(this._createItemSymbol(g,m,[0,0,p[0],p[1]]),h){var y=this.visualMapModel.getValueState(m);g.add(new A({style:{x:l==="right"?-a:p[0]+a,y:p[1]/2,text:f.text,verticalAlign:"middle",align:l,font:o,fill:s,opacity:y==="outOfRange"?.5:1}}))}t.add(g)},this),u&&this._renderEndsText(t,u[1],p,h,l),he(e.get("orient"),t,e.get("itemGap")),this.renderBackground(t),this.positionGroup(t)},i.prototype._enableHoverLink=function(t,e){var a=this;t.on("mouseover",function(){return r("highlight")}).on("mouseout",function(){return r("downplay")});var r=function(o){var s=a.visualMapModel;s.option.hoverLink&&a.api.dispatchAction({type:o,batch:N(s.findTargetDataIndices(e),s)})}},i.prototype._getItemAlign=function(){var t=this.visualMapModel,e=t.option;if(e.orient==="vertical")return Ft(t,this.api,t.itemSize);var a=e.align;return(!a||a==="auto")&&(a="left"),a},i.prototype._renderEndsText=function(t,e,a,r,o){if(!!e){var s=new $,l=this.visualMapModel.textStyleModel;s.add(new A({style:F(l,{x:r?o==="right"?a[0]:0:a[0]/2,y:a[1]/2,verticalAlign:"middle",align:r?o:"center",text:e})})),t.add(s)}},i.prototype._getViewData=function(){var t=this.visualMapModel,e=ot(t.getPieceList(),function(s,l){return{piece:s,indexInModelPieceList:l}}),a=t.get("text"),r=t.get("orient"),o=t.get("inverse");return(r==="horizontal"?o:!o)?e.reverse():a&&(a=a.slice().reverse()),{viewPieceList:e,endsText:a}},i.prototype._createItemSymbol=function(t,e,a){t.add(it(this.getControllerVisual(e,"symbol"),a[0],a[1],a[2],a[3],this.getControllerVisual(e,"color")))},i.prototype._onItemClick=function(t){var e=this.visualMapModel,a=e.option,r=a.selectedMode;if(!!r){var o=w(a.selected),s=e.getSelectedMapKey(t);r==="single"||r===!0?(o[s]=!0,d(o,function(l,p){o[p]=p===s})):o[s]=!o[s],this.api.dispatchAction({type:"selectDataRange",from:this.uid,visualMapId:this.visualMapModel.id,selected:o})}},i.type="visualMap.piecewise",i}(Bt),Xe=We;function Ye(n){n.registerComponentModel(Ze),n.registerComponentView(Xe),Nt(n)}function ti(n){ft($e),ft(Ye)}var qe=function(n){T(i,n);function i(){var t=n!==null&&n.apply(this,arguments)||this;return t.type="dataset",t}return i.prototype.init=function(t,e,a){n.prototype.init.call(this,t,e,a),this._sourceManager=new ve(this),dt(this)},i.prototype.mergeOption=function(t,e){n.prototype.mergeOption.call(this,t,e),dt(this)},i.prototype.optionUpdated=function(){this._sourceManager.dirty()},i.prototype.getSourceManager=function(){return this._sourceManager},i.type="dataset",i.defaultOption={seriesLayoutBy:fe},i}(Dt),Je=function(n){T(i,n);function i(){var t=n!==null&&n.apply(this,arguments)||this;return t.type="dataset",t}return i.type="dataset",i}(At);function ei(n){n.registerComponentModel(qe),n.registerComponentView(Je)}export{S as V,ei as a,ti as i};
