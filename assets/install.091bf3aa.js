import{_ as k,a as ne,w as ie,a0 as me,a1 as se,a2 as z,Q as Ae,i as be,a3 as ye,c as B,u as O,s as Se,a4 as _e,a5 as j,G as xe,m as we,a6 as X,C as De,a7 as oe,e as he,k as Ie,j as Pe,a8 as Le,t as Ce,g as Me,a9 as Oe,aa as le,ab as ue,ac as ke,ad as Te,ae as Re}from"./index.esm.min.0819b090.js";import{c as ce,a as Ve,g as Be,b as Ee,d as Ne}from"./install.c30c6a0d.js";import{g as Ge}from"./sectorHelper.2284e66a.js";var ge=function(n){k(t,n);function t(){var e=n!==null&&n.apply(this,arguments)||this;return e.type=t.type,e}return t.prototype.getInitialData=function(e,r){return ce(null,this,{useEncodeDefaulter:!0})},t.prototype.getMarkerPosition=function(e,r,a){var i=this.coordinateSystem;if(i&&i.clampData){var s=i.clampData(e),o=i.dataToPoint(s);if(a)ne(i.getAxes(),function(g,d){if(g.type==="category"&&r!=null){var v=g.getTicksCoords(),m=s[d],y=r[d]==="x1"||r[d]==="y1";if(y&&(m+=1),v.length<2)return;if(v.length===2){o[d]=g.toGlobalCoord(g.getExtent()[y?1:0]);return}for(var A=void 0,f=void 0,S=1,b=0;b<v.length;b++){var x=v[b].coord,_=b===v.length-1?v[b-1].tickValue+S:v[b].tickValue;if(_===m){f=x;break}else if(_<m)A=x;else if(A!=null&&_>m){f=(x+A)/2;break}b===1&&(S=_-v[0].tickValue)}f==null&&(A?A&&(f=v[v.length-1].coord):f=v[0].coord),o[d]=g.toGlobalCoord(f)}});else{var h=this.getData(),u=h.getLayout("offset"),l=h.getLayout("size"),c=i.getBaseAxis().isHorizontal()?0:1;o[c]+=u+l/2}return o}return[NaN,NaN]},t.type="series.__base_bar__",t.defaultOption={z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,barMinHeight:0,barMinAngle:0,large:!1,largeThreshold:400,progressive:3e3,progressiveChunkMode:"mod"},t}(ie);ie.registerClass(ge);var Z=ge,We=function(n){k(t,n);function t(){var e=n!==null&&n.apply(this,arguments)||this;return e.type=t.type,e}return t.prototype.getInitialData=function(){return ce(null,this,{useEncodeDefaulter:!0,createInvertedIndices:!!this.get("realtimeSort",!0)||null})},t.prototype.getProgressive=function(){return this.get("large")?this.get("progressive"):!1},t.prototype.getProgressiveThreshold=function(){var e=this.get("progressiveThreshold"),r=this.get("largeThreshold");return r>e&&(e=r),e},t.prototype.brushSelector=function(e,r,a){return a.rect(r.getItemLayout(e))},t.type="series.bar",t.dependencies=["grid","polar"],t.defaultOption=me(Z.defaultOption,{clip:!0,roundCap:!1,showBackground:!1,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)",borderColor:null,borderWidth:0,borderType:"solid",borderRadius:0,shadowBlur:0,shadowColor:null,shadowOffsetX:0,shadowOffsetY:0,opacity:1},select:{itemStyle:{borderColor:"#212121"}},realtimeSort:!1}),t}(Z),Fe=We,Ye=function(){function n(){this.cx=0,this.cy=0,this.r0=0,this.r=0,this.startAngle=0,this.endAngle=Math.PI*2,this.clockwise=!0}return n}(),Xe=function(n){k(t,n);function t(e){var r=n.call(this,e)||this;return r.type="sausage",r}return t.prototype.getDefaultShape=function(){return new Ye},t.prototype.buildPath=function(e,r){var a=r.cx,i=r.cy,s=Math.max(r.r0||0,0),o=Math.max(r.r,0),h=(o-s)*.5,u=s+h,l=r.startAngle,c=r.endAngle,g=r.clockwise,d=Math.PI*2,v=g?c-l<d:l-c<d;v||(l=c-(g?d:-d));var m=Math.cos(l),y=Math.sin(l),A=Math.cos(c),f=Math.sin(c);v?(e.moveTo(m*s+a,y*s+i),e.arc(m*u+a,y*u+i,h,-Math.PI+l,l,!g)):e.moveTo(m*o+a,y*o+i),e.arc(a,i,o,l,c,!g),e.arc(A*u+a,f*u+i,h,c-Math.PI*2,c-Math.PI,!g),s!==0&&e.arc(a,i,s,c,l,g)},t}(se),$=Xe;function Ue(n,t){t=t||{};var e=t.isRoundCap;return function(r,a,i){var s=a.position;if(!s||s instanceof Array)return z(r,a,i);var o=n(s),h=a.distance!=null?a.distance:5,u=this.shape,l=u.cx,c=u.cy,g=u.r,d=u.r0,v=(g+d)/2,m=u.startAngle,y=u.endAngle,A=(m+y)/2,f=e?Math.abs(g-d)/2:0,S=Math.cos,b=Math.sin,x=l+g*S(m),_=c+g*b(m),P="left",L="top";switch(o){case"startArc":x=l+(d-h)*S(A),_=c+(d-h)*b(A),P="center",L="top";break;case"insideStartArc":x=l+(d+h)*S(A),_=c+(d+h)*b(A),P="center",L="bottom";break;case"startAngle":x=l+v*S(m)+T(m,h+f,!1),_=c+v*b(m)+R(m,h+f,!1),P="right",L="middle";break;case"insideStartAngle":x=l+v*S(m)+T(m,-h+f,!1),_=c+v*b(m)+R(m,-h+f,!1),P="left",L="middle";break;case"middle":x=l+v*S(A),_=c+v*b(A),P="center",L="middle";break;case"endArc":x=l+(g+h)*S(A),_=c+(g+h)*b(A),P="center",L="bottom";break;case"insideEndArc":x=l+(g-h)*S(A),_=c+(g-h)*b(A),P="center",L="top";break;case"endAngle":x=l+v*S(y)+T(y,h+f,!0),_=c+v*b(y)+R(y,h+f,!0),P="left",L="middle";break;case"insideEndAngle":x=l+v*S(y)+T(y,-h+f,!0),_=c+v*b(y)+R(y,-h+f,!0),P="right",L="middle";break;default:return z(r,a,i)}return r=r||{},r.x=x,r.y=_,r.align=P,r.verticalAlign=L,r}}function ze(n,t,e,r){if(Ae(r)){n.setTextConfig({rotation:r});return}else if(be(t)){n.setTextConfig({rotation:0});return}var a=n.shape,i=a.clockwise?a.startAngle:a.endAngle,s=a.clockwise?a.endAngle:a.startAngle,o=(i+s)/2,h,u=e(t);switch(u){case"startArc":case"insideStartArc":case"middle":case"insideEndArc":case"endArc":h=o;break;case"startAngle":case"insideStartAngle":h=i;break;case"endAngle":case"insideEndAngle":h=s;break;default:n.setTextConfig({rotation:0});return}var l=Math.PI*1.5-h;u==="middle"&&l>Math.PI/2&&l<Math.PI*1.5&&(l-=Math.PI),n.setTextConfig({rotation:l})}function T(n,t,e){return t*Math.sin(n)*(e?-1:1)}function R(n,t,e){return t*Math.cos(n)*(e?1:-1)}var F=Math.max,Y=Math.min;function je(n,t){var e=n.getArea&&n.getArea();if(le(n,"cartesian2d")){var r=n.getBaseAxis();if(r.type!=="category"||!r.onBand){var a=t.getLayout("bandWidth");r.isHorizontal()?(e.x-=a,e.width+=a*2):(e.y-=a,e.height+=a*2)}}return e}var Ze=function(n){k(t,n);function t(){var e=n.call(this)||this;return e.type=t.type,e._isFirstFrame=!0,e}return t.prototype.render=function(e,r,a,i){this._model=e,this._removeOnRenderedListener(a),this._updateDrawMode(e);var s=e.get("coordinateSystem");(s==="cartesian2d"||s==="polar")&&(this._progressiveEls=null,this._isLargeDraw?this._renderLarge(e,r,a):this._renderNormal(e,r,a,i))},t.prototype.incrementalPrepareRender=function(e){this._clear(),this._updateDrawMode(e),this._updateLargeClip(e)},t.prototype.incrementalRender=function(e,r){this._progressiveEls=[],this._incrementalRenderLarge(e,r)},t.prototype.eachRendered=function(e){ye(this._progressiveEls||this.group,e)},t.prototype._updateDrawMode=function(e){var r=e.pipelineContext.large;(this._isLargeDraw==null||r!==this._isLargeDraw)&&(this._isLargeDraw=r,this._clear())},t.prototype._renderNormal=function(e,r,a,i){var s=this.group,o=e.getData(),h=this._data,u=e.coordinateSystem,l=u.getBaseAxis(),c;u.type==="cartesian2d"?c=l.isHorizontal():u.type==="polar"&&(c=l.dim==="angle");var g=e.isAnimationEnabled()?e:null,d=$e(e,u);d&&this._enableRealtimeSort(d,o,a);var v=e.get("clip",!0)||d,m=je(u,o);s.removeClipPath();var y=e.get("roundCap",!0),A=e.get("showBackground",!0),f=e.getModel("backgroundStyle"),S=f.get("borderRadius")||0,b=[],x=this._backgroundEls,_=i&&i.isInitSort,P=i&&i.type==="changeAxisOrder";function L(p){var C=V[u.type](o,p),w=tt(u,c,C);return w.useStyle(f.getItemStyle()),u.type==="cartesian2d"?w.setShape("r",S):w.setShape("cornerRadius",S),b[p]=w,w}o.diff(h).add(function(p){var C=o.getItemModel(p),w=V[u.type](o,p,C);if(A&&L(p),!(!o.hasValue(p)||!K[u.type](w))){var M=!1;v&&(M=q[u.type](m,w));var D=H[u.type](e,o,p,w,c,g,l.model,!1,y);d&&(D.forceLabelAnimation=!0),ee(D,o,p,C,w,e,c,u.type==="polar"),_?D.attr({shape:w}):d?Q(d,g,D,w,p,c,!1,!1):B(D,{shape:w},e,p),o.setItemGraphicEl(p,D),s.add(D),D.ignore=M}}).update(function(p,C){var w=o.getItemModel(p),M=V[u.type](o,p,w);if(A){var D=void 0;x.length===0?D=L(C):(D=x[C],D.useStyle(f.getItemStyle()),u.type==="cartesian2d"?D.setShape("r",S):D.setShape("cornerRadius",S),b[p]=D);var fe=V[u.type](o,p),pe=ve(c,fe,u);O(D,{shape:pe},g,p)}var I=h.getItemGraphicEl(C);if(!o.hasValue(p)||!K[u.type](M)){s.remove(I);return}var G=!1;if(v&&(G=q[u.type](m,M),G&&s.remove(I)),I?Se(I):I=H[u.type](e,o,p,M,c,g,l.model,!!I,y),d&&(I.forceLabelAnimation=!0),P){var U=I.getTextContent();if(U){var W=_e(U);W.prevValue!=null&&(W.prevValue=W.value)}}else ee(I,o,p,w,M,e,c,u.type==="polar");_?I.attr({shape:M}):d?Q(d,g,I,M,p,c,!0,P):O(I,{shape:M},e,p,null),o.setItemGraphicEl(p,I),I.ignore=G,s.add(I)}).remove(function(p){var C=h.getItemGraphicEl(p);C&&j(C,e,p)}).execute();var E=this._backgroundGroup||(this._backgroundGroup=new xe);E.removeAll();for(var N=0;N<b.length;++N)E.add(b[N]);s.add(E),this._backgroundEls=b,this._data=o},t.prototype._renderLarge=function(e,r,a){this._clear(),re(e,this.group),this._updateLargeClip(e)},t.prototype._incrementalRenderLarge=function(e,r){this._removeBackground(),re(r,this.group,this._progressiveEls,!0)},t.prototype._updateLargeClip=function(e){var r=e.get("clip",!0)&&Ve(e.coordinateSystem,!1,e),a=this.group;r?a.setClipPath(r):a.removeClipPath()},t.prototype._enableRealtimeSort=function(e,r,a){var i=this;if(!!r.count()){var s=e.baseAxis;if(this._isFirstFrame)this._dispatchInitSort(r,e,a),this._isFirstFrame=!1;else{var o=function(h){var u=r.getItemGraphicEl(h),l=u&&u.shape;return l&&Math.abs(s.isHorizontal()?l.height:l.width)||0};this._onRendered=function(){i._updateSortWithinSameData(r,o,s,a)},a.getZr().on("rendered",this._onRendered)}}},t.prototype._dataSort=function(e,r,a){var i=[];return e.each(e.mapDimension(r.dim),function(s,o){var h=a(o);h=h==null?NaN:h,i.push({dataIndex:o,mappedValue:h,ordinalNumber:s})}),i.sort(function(s,o){return o.mappedValue-s.mappedValue}),{ordinalNumbers:we(i,function(s){return s.ordinalNumber})}},t.prototype._isOrderChangedWithinSameData=function(e,r,a){for(var i=a.scale,s=e.mapDimension(a.dim),o=Number.MAX_VALUE,h=0,u=i.getOrdinalMeta().categories.length;h<u;++h){var l=e.rawIndexOf(s,i.getRawOrdinalNumber(h)),c=l<0?Number.MIN_VALUE:r(e.indexOfRawIndex(l));if(c>o)return!0;o=c}return!1},t.prototype._isOrderDifferentInView=function(e,r){for(var a=r.scale,i=a.getExtent(),s=Math.max(0,i[0]),o=Math.min(i[1],a.getOrdinalMeta().categories.length-1);s<=o;++s)if(e.ordinalNumbers[s]!==a.getRawOrdinalNumber(s))return!0},t.prototype._updateSortWithinSameData=function(e,r,a,i){if(!!this._isOrderChangedWithinSameData(e,r,a)){var s=this._dataSort(e,a,r);this._isOrderDifferentInView(s,a)&&(this._removeOnRenderedListener(i),i.dispatchAction({type:"changeAxisOrder",componentType:a.dim+"Axis",axisId:a.index,sortInfo:s}))}},t.prototype._dispatchInitSort=function(e,r,a){var i=r.baseAxis,s=this._dataSort(e,i,function(o){return e.get(e.mapDimension(r.otherAxis.dim),o)});a.dispatchAction({type:"changeAxisOrder",componentType:i.dim+"Axis",isInitSort:!0,axisId:i.index,sortInfo:s})},t.prototype.remove=function(e,r){this._clear(this._model),this._removeOnRenderedListener(r)},t.prototype.dispose=function(e,r){this._removeOnRenderedListener(r)},t.prototype._removeOnRenderedListener=function(e){this._onRendered&&(e.getZr().off("rendered",this._onRendered),this._onRendered=null)},t.prototype._clear=function(e){var r=this.group,a=this._data;e&&e.isAnimationEnabled()&&a&&!this._isLargeDraw?(this._removeBackground(),this._backgroundEls=[],a.eachItemGraphicEl(function(i){j(i,e,X(i).dataIndex)})):r.removeAll(),this._data=null,this._isFirstFrame=!0},t.prototype._removeBackground=function(){this.group.remove(this._backgroundGroup),this._backgroundGroup=null},t.type="bar",t}(De),q={cartesian2d:function(n,t){var e=t.width<0?-1:1,r=t.height<0?-1:1;e<0&&(t.x+=t.width,t.width=-t.width),r<0&&(t.y+=t.height,t.height=-t.height);var a=n.x+n.width,i=n.y+n.height,s=F(t.x,n.x),o=Y(t.x+t.width,a),h=F(t.y,n.y),u=Y(t.y+t.height,i),l=o<s,c=u<h;return t.x=l&&s>a?o:s,t.y=c&&h>i?u:h,t.width=l?0:o-s,t.height=c?0:u-h,e<0&&(t.x+=t.width,t.width=-t.width),r<0&&(t.y+=t.height,t.height=-t.height),l||c},polar:function(n,t){var e=t.r0<=t.r?1:-1;if(e<0){var r=t.r;t.r=t.r0,t.r0=r}var a=Y(t.r,n.r),i=F(t.r0,n.r0);t.r=a,t.r0=i;var s=a-i<0;if(e<0){var r=t.r;t.r=t.r0,t.r0=r}return s}},H={cartesian2d:function(n,t,e,r,a,i,s,o,h){var u=new oe({shape:he({},r),z2:1});if(u.__dataIndex=e,u.name="item",i){var l=u.shape,c=a?"height":"width";l[c]=0}return u},polar:function(n,t,e,r,a,i,s,o,h){var u=!a&&h?$:ue,l=new u({shape:r,z2:1});l.name="item";var c=de(a);if(l.calculateTextPosition=Ue(c,{isRoundCap:u===$}),i){var g=l.shape,d=a?"r":"endAngle",v={};g[d]=a?r.r0:r.startAngle,v[d]=r[d],(o?O:B)(l,{shape:v},i)}return l}};function $e(n,t){var e=n.get("realtimeSort",!0),r=t.getBaseAxis();if(e&&r.type==="category"&&t.type==="cartesian2d")return{baseAxis:r,otherAxis:t.getOtherAxis(r)}}function Q(n,t,e,r,a,i,s,o){var h,u;i?(u={x:r.x,width:r.width},h={y:r.y,height:r.height}):(u={y:r.y,height:r.height},h={x:r.x,width:r.width}),o||(s?O:B)(e,{shape:h},t,a,null);var l=t?n.baseAxis.model:null;(s?O:B)(e,{shape:u},l,a)}function J(n,t){for(var e=0;e<t.length;e++)if(!isFinite(n[t[e]]))return!0;return!1}var qe=["x","y","width","height"],He=["cx","cy","r","startAngle","endAngle"],K={cartesian2d:function(n){return!J(n,qe)},polar:function(n){return!J(n,He)}},V={cartesian2d:function(n,t,e){var r=n.getItemLayout(t),a=e?Je(e,r):0,i=r.width>0?1:-1,s=r.height>0?1:-1;return{x:r.x+i*a/2,y:r.y+s*a/2,width:r.width-i*a,height:r.height-s*a}},polar:function(n,t,e){var r=n.getItemLayout(t);return{cx:r.cx,cy:r.cy,r0:r.r0,r:r.r,startAngle:r.startAngle,endAngle:r.endAngle,clockwise:r.clockwise}}};function Qe(n){return n.startAngle!=null&&n.endAngle!=null&&n.startAngle===n.endAngle}function de(n){return function(t){var e=t?"Arc":"Angle";return function(r){switch(r){case"start":case"insideStart":case"end":case"insideEnd":return r+e;default:return r}}}(n)}function ee(n,t,e,r,a,i,s,o){var h=t.getItemVisual(e,"style");if(o){if(!i.get("roundCap")){var l=n.shape,c=Ge(r.getModel("itemStyle"),l,!0);he(l,c),n.setShape(l)}}else{var u=r.get(["itemStyle","borderRadius"])||0;n.setShape("r",u)}n.useStyle(h);var g=r.getShallow("cursor");g&&n.attr("cursor",g);var d=o?s?a.r>=a.r0?"endArc":"startArc":a.endAngle>=a.startAngle?"endAngle":"startAngle":s?a.height>=0?"bottom":"top":a.width>=0?"right":"left",v=Ie(r);Pe(n,v,{labelFetcher:i,labelDataIndex:e,defaultText:Be(i.getData(),e),inheritColor:h.fill,defaultOpacity:h.opacity,defaultOutsidePosition:d});var m=n.getTextContent();if(o&&m){var y=r.get(["label","position"]);n.textConfig.inside=y==="middle"?!0:null,ze(n,y==="outside"?d:y,de(s),r.get(["label","rotate"]))}Le(m,v,i.getRawValue(e),function(f){return Ee(t,f)});var A=r.getModel(["emphasis"]);Ce(n,A.get("focus"),A.get("blurScope"),A.get("disabled")),Me(n,r),Qe(a)&&(n.style.fill="none",n.style.stroke="none",ne(n.states,function(f){f.style&&(f.style.fill=f.style.stroke="none")}))}function Je(n,t){var e=n.get(["itemStyle","borderColor"]);if(!e||e==="none")return 0;var r=n.get(["itemStyle","borderWidth"])||0,a=isNaN(t.width)?Number.MAX_VALUE:Math.abs(t.width),i=isNaN(t.height)?Number.MAX_VALUE:Math.abs(t.height);return Math.min(r,a,i)}var Ke=function(){function n(){}return n}(),te=function(n){k(t,n);function t(e){var r=n.call(this,e)||this;return r.type="largeBar",r}return t.prototype.getDefaultShape=function(){return new Ke},t.prototype.buildPath=function(e,r){for(var a=r.points,i=this.baseDimIdx,s=1-this.baseDimIdx,o=[],h=[],u=this.barWidth,l=0;l<a.length;l+=3)h[i]=u,h[s]=a[l+2],o[i]=a[l+i],o[s]=a[l+s],e.rect(o[0],o[1],h[0],h[1])},t}(se);function re(n,t,e,r){var a=n.getData(),i=a.getLayout("valueAxisHorizontal")?1:0,s=a.getLayout("largeDataIndices"),o=a.getLayout("size"),h=n.getModel("backgroundStyle"),u=a.getLayout("largeBackgroundPoints");if(u){var l=new te({shape:{points:u},incremental:!!r,silent:!0,z2:0});l.baseDimIdx=i,l.largeDataIndices=s,l.barWidth=o,l.useStyle(h.getItemStyle()),t.add(l),e&&e.push(l)}var c=new te({shape:{points:a.getLayout("largePoints")},incremental:!!r,ignoreCoarsePointer:!0,z2:1});c.baseDimIdx=i,c.largeDataIndices=s,c.barWidth=o,t.add(c),c.useStyle(a.getVisual("style")),X(c).seriesIndex=n.seriesIndex,n.get("silent")||(c.on("mousedown",ae),c.on("mousemove",ae)),e&&e.push(c)}var ae=Oe(function(n){var t=this,e=et(t,n.offsetX,n.offsetY);X(t).dataIndex=e>=0?e:null},30,!1);function et(n,t,e){for(var r=n.baseDimIdx,a=1-r,i=n.shape.points,s=n.largeDataIndices,o=[],h=[],u=n.barWidth,l=0,c=i.length/3;l<c;l++){var g=l*3;if(h[r]=u,h[a]=i[g+2],o[r]=i[g+r],o[a]=i[g+a],h[a]<0&&(o[a]+=h[a],h[a]=-h[a]),t>=o[0]&&t<=o[0]+h[0]&&e>=o[1]&&e<=o[1]+h[1])return s[l]}return-1}function ve(n,t,e){if(le(e,"cartesian2d")){var r=t,a=e.getArea();return{x:n?r.x:a.x,y:n?a.y:r.y,width:n?r.width:a.width,height:n?a.height:r.height}}else{var a=e.getArea(),i=t;return{cx:a.cx,cy:a.cy,r0:n?a.r0:i.r0,r:n?a.r:i.r,startAngle:n?i.startAngle:0,endAngle:n?i.endAngle:Math.PI*2}}}function tt(n,t,e){var r=n.type==="polar"?ue:oe;return new r({shape:ve(t,e,n),silent:!0,z2:0})}var rt=Ze;function st(n){n.registerChartView(rt),n.registerSeriesModel(Fe),n.registerLayout(n.PRIORITY.VISUAL.LAYOUT,ke(Re,"bar")),n.registerLayout(n.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT,Te("bar")),n.registerProcessor(n.PRIORITY.PROCESSOR.STATISTIC,Ne("bar")),n.registerAction({type:"changeAxisOrder",event:"changeAxisOrder",update:"update"},function(t,e){var r=t.componentType||"series";e.eachComponent({mainType:r,query:t},function(a){t.sortInfo&&a.axis.setCategorySortInfo(t.sortInfo)})})}export{st as i};
