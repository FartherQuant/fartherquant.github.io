import{M as rt,a as ut,g as ft,n as pt,d as j,b as F,c as ct,e as yt}from"./MarkerView.c2cc3587.js";import{b9 as vt,ba as mt,_ as V,bb as nt,a3 as ht,c as gt,a as G,u as bt,k as ot,b4 as X,j as dt,bc as Lt,i as E,t as St,bd as It,be as _t,bf as kt,G as st,n as Mt,bg as Nt,o as At,a5 as Et,a9 as Q,aO as Pt,bh as D,m as w,e as Y,S as T,ah as W,bi as Ot,a$ as wt,aQ as Vt,bj as Dt,h as zt,Q as Rt,x as q,L as J,ae as Gt}from"./index.esm.min.7c60a7bc.js";var Z=vt.prototype,C=mt.prototype,lt=function(){function a(){this.x1=0,this.y1=0,this.x2=0,this.y2=0,this.percent=1}return a}();(function(a){V(t,a);function t(){return a!==null&&a.apply(this,arguments)||this}return t})(lt);function K(a){return isNaN(+a.cpx1)||isNaN(+a.cpy1)}var Tt=function(a){V(t,a);function t(i){var e=a.call(this,i)||this;return e.type="ec-line",e}return t.prototype.getDefaultStyle=function(){return{stroke:"#000",fill:null}},t.prototype.getDefaultShape=function(){return new lt},t.prototype.buildPath=function(i,e){K(e)?Z.buildPath.call(this,i,e):C.buildPath.call(this,i,e)},t.prototype.pointAt=function(i){return K(this.shape)?Z.pointAt.call(this,i):C.pointAt.call(this,i)},t.prototype.tangentAt=function(i){var e=this.shape,n=K(e)?[e.x2-e.x1,e.y2-e.y1]:C.tangentAt.call(this,i);return nt(n,n)},t}(ht),Ct=Tt,B=["fromSymbol","toSymbol"];function x(a){return"_"+a+"Type"}function tt(a,t,i){var e=t.getItemVisual(i,a);if(!(!e||e==="none")){var n=t.getItemVisual(i,a+"Size"),r=t.getItemVisual(i,a+"Rotate"),o=t.getItemVisual(i,a+"Offset"),s=t.getItemVisual(i,a+"KeepAspect"),l=Mt(n),u=Nt(o||0,l),f=At(e,-l[0]/2+u[0],-l[1]/2+u[1],l[0],l[1],null,s);return f.__specifiedRotation=r==null||isNaN(r)?void 0:+r*Math.PI/180||0,f.name=a,f}}function Kt(a){var t=new Ct({name:"line",subPixelOptimize:!0});return H(t.shape,a),t}function H(a,t){a.x1=t[0][0],a.y1=t[0][1],a.x2=t[1][0],a.y2=t[1][1],a.percent=1;var i=t[2];i?(a.cpx1=i[0],a.cpy1=i[1]):(a.cpx1=NaN,a.cpy1=NaN)}var Bt=function(a){V(t,a);function t(i,e,n){var r=a.call(this)||this;return r._createLine(i,e,n),r}return t.prototype._createLine=function(i,e,n){var r=i.hostModel,o=i.getItemLayout(e),s=Kt(o);s.shape.percent=0,gt(s,{shape:{percent:1}},r,e),this.add(s),G(B,function(l){var u=tt(l,i,e);this.add(u),this[x(l)]=i.getItemVisual(e,l)},this),this._updateCommonStl(i,e,n)},t.prototype.updateData=function(i,e,n){var r=i.hostModel,o=this.childOfName("line"),s=i.getItemLayout(e),l={shape:{}};H(l.shape,s),bt(o,l,r,e),G(B,function(u){var f=i.getItemVisual(e,u),y=x(u);if(this[y]!==f){this.remove(this.childOfName(u));var c=tt(u,i,e);this.add(c)}this[y]=f},this),this._updateCommonStl(i,e,n)},t.prototype.getLinePath=function(){return this.childAt(0)},t.prototype._updateCommonStl=function(i,e,n){var r=i.hostModel,o=this.childOfName("line"),s=n&&n.emphasisLineStyle,l=n&&n.blurLineStyle,u=n&&n.selectLineStyle,f=n&&n.labelStatesModels,y=n&&n.emphasisDisabled,c=n&&n.focus,m=n&&n.blurScope;if(!n||i.hasItemOption){var v=i.getItemModel(e),b=v.getModel("emphasis");s=b.getModel("lineStyle").getLineStyle(),l=v.getModel(["blur","lineStyle"]).getLineStyle(),u=v.getModel(["select","lineStyle"]).getLineStyle(),y=b.get("disabled"),c=b.get("focus"),m=b.get("blurScope"),f=ot(v)}var h=i.getItemVisual(e,"style"),L=h.stroke;o.useStyle(h),o.style.fill=null,o.style.strokeNoScale=!0,o.ensureState("emphasis").style=s,o.ensureState("blur").style=l,o.ensureState("select").style=u,G(B,function(_){var d=this.childOfName(_);if(d){d.setColor(L),d.style.opacity=h.opacity;for(var M=0;M<X.length;M++){var k=X[M],A=o.getState(k);if(A){var N=A.style||{},P=d.ensureState(k),O=P.style||(P.style={});N.stroke!=null&&(O[d.__isEmptyBrush?"stroke":"fill"]=N.stroke),N.opacity!=null&&(O.opacity=N.opacity)}}d.markRedraw()}},this);var S=r.getRawValue(e);dt(this,f,{labelDataIndex:e,labelFetcher:{getFormattedLabel:function(_,d){return r.getFormattedLabel(_,d,i.dataType)}},inheritColor:L||"#000",defaultOpacity:h.opacity,defaultText:(S==null?i.getName(e):isFinite(S)?Lt(S):S)+""});var I=this.getTextContent();if(I){var p=f.normal;I.__align=I.style.align,I.__verticalAlign=I.style.verticalAlign,I.__position=p.get("position")||"middle";var g=p.get("distance");E(g)||(g=[g,g]),I.__labelDistance=g}this.setTextConfig({position:null,local:!0,inside:!1}),St(this,c,m,y)},t.prototype.highlight=function(){It(this)},t.prototype.downplay=function(){_t(this)},t.prototype.updateLayout=function(i,e){this.setLinePoints(i.getItemLayout(e))},t.prototype.setLinePoints=function(i){var e=this.childOfName("line");H(e.shape,i),e.dirty()},t.prototype.beforeUpdate=function(){var i=this,e=i.childOfName("fromSymbol"),n=i.childOfName("toSymbol"),r=i.getTextContent();if(!e&&!n&&(!r||r.ignore))return;for(var o=1,s=this.parent;s;)s.scaleX&&(o/=s.scaleX),s=s.parent;var l=i.childOfName("line");if(!this.__dirty&&!l.__dirty)return;var u=l.shape.percent,f=l.pointAt(0),y=l.pointAt(u),c=kt([],y,f);nt(c,c);function m(A,N){var P=A.__specifiedRotation;if(P==null){var O=l.tangentAt(N);A.attr("rotation",(N===1?-1:1)*Math.PI/2-Math.atan2(O[1],O[0]))}else A.attr("rotation",P)}if(e&&(e.setPosition(f),m(e,0),e.scaleX=e.scaleY=o*u,e.markRedraw()),n&&(n.setPosition(y),m(n,1),n.scaleX=n.scaleY=o*u,n.markRedraw()),r&&!r.ignore){r.x=r.y=0,r.originX=r.originY=0;var v=void 0,b=void 0,h=r.__labelDistance,L=h[0]*o,S=h[1]*o,I=u/2,p=l.tangentAt(I),g=[p[1],-p[0]],_=l.pointAt(I);g[1]>0&&(g[0]=-g[0],g[1]=-g[1]);var d=p[0]<0?-1:1;if(r.__position!=="start"&&r.__position!=="end"){var M=-Math.atan2(p[1],p[0]);y[0]<f[0]&&(M=Math.PI+M),r.rotation=M}var k=void 0;switch(r.__position){case"insideStartTop":case"insideMiddleTop":case"insideEndTop":case"middle":k=-S,b="bottom";break;case"insideStartBottom":case"insideMiddleBottom":case"insideEndBottom":k=S,b="top";break;default:k=0,b="middle"}switch(r.__position){case"end":r.x=c[0]*L+y[0],r.y=c[1]*S+y[1],v=c[0]>.8?"left":c[0]<-.8?"right":"center",b=c[1]>.8?"top":c[1]<-.8?"bottom":"middle";break;case"start":r.x=-c[0]*L+f[0],r.y=-c[1]*S+f[1],v=c[0]>.8?"right":c[0]<-.8?"left":"center",b=c[1]>.8?"bottom":c[1]<-.8?"top":"middle";break;case"insideStartTop":case"insideStart":case"insideStartBottom":r.x=L*d+f[0],r.y=f[1]+k,v=p[0]<0?"right":"left",r.originX=-L*d,r.originY=-k;break;case"insideMiddleTop":case"insideMiddle":case"insideMiddleBottom":case"middle":r.x=_[0],r.y=_[1]+k,v="center",r.originY=-k;break;case"insideEndTop":case"insideEnd":case"insideEndBottom":r.x=-L*d+y[0],r.y=y[1]+k,v=p[0]>=0?"right":"left",r.originX=L*d,r.originY=-k;break}r.scaleX=r.scaleY=o,r.setStyle({verticalAlign:r.__verticalAlign||b,align:r.__align||v})}},t}(st),$t=Bt,Ut=function(){function a(t){this.group=new st,this._LineCtor=t||$t}return a.prototype.updateData=function(t){var i=this;this._progressiveEls=null;var e=this,n=e.group,r=e._lineData;e._lineData=t,r||n.removeAll();var o=et(t);t.diff(r).add(function(s){i._doAdd(t,s,o)}).update(function(s,l){i._doUpdate(r,t,l,s,o)}).remove(function(s){n.remove(r.getItemGraphicEl(s))}).execute()},a.prototype.updateLayout=function(){var t=this._lineData;!t||t.eachItemGraphicEl(function(i,e){i.updateLayout(t,e)},this)},a.prototype.incrementalPrepareUpdate=function(t){this._seriesScope=et(t),this._lineData=null,this.group.removeAll()},a.prototype.incrementalUpdate=function(t,i){this._progressiveEls=[];function e(s){!s.isGroup&&!Yt(s)&&(s.incremental=!0,s.ensureState("emphasis").hoverLayer=!0)}for(var n=t.start;n<t.end;n++){var r=i.getItemLayout(n);if($(r)){var o=new this._LineCtor(i,n,this._seriesScope);o.traverse(e),this.group.add(o),i.setItemGraphicEl(n,o),this._progressiveEls.push(o)}}},a.prototype.remove=function(){this.group.removeAll()},a.prototype.eachRendered=function(t){Et(this._progressiveEls||this.group,t)},a.prototype._doAdd=function(t,i,e){var n=t.getItemLayout(i);if(!!$(n)){var r=new this._LineCtor(t,i,e);t.setItemGraphicEl(i,r),this.group.add(r)}},a.prototype._doUpdate=function(t,i,e,n,r){var o=t.getItemGraphicEl(e);if(!$(i.getItemLayout(n))){this.group.remove(o);return}o?o.updateData(i,n,r):o=new this._LineCtor(i,n,r),i.setItemGraphicEl(n,o),this.group.add(o)},a}();function Yt(a){return a.animators&&a.animators.length>0}function et(a){var t=a.hostModel,i=t.getModel("emphasis");return{lineStyle:t.getModel("lineStyle").getLineStyle(),emphasisLineStyle:i.getModel(["lineStyle"]).getLineStyle(),blurLineStyle:t.getModel(["blur","lineStyle"]).getLineStyle(),selectLineStyle:t.getModel(["select","lineStyle"]).getLineStyle(),emphasisDisabled:i.get("disabled"),blurScope:i.get("blurScope"),focus:i.get("focus"),labelStatesModels:ot(t)}}function at(a){return isNaN(a[0])||isNaN(a[1])}function $(a){return a&&!at(a[0])&&!at(a[1])}var Ht=Ut,jt=function(a){V(t,a);function t(){var i=a!==null&&a.apply(this,arguments)||this;return i.type=t.type,i}return t.prototype.createMarkerModelFromSeries=function(i,e,n){return new t(i,e,n)},t.type="markLine",t.defaultOption={z:5,symbol:["circle","arrow"],symbolSize:[8,16],symbolOffset:0,precision:2,tooltip:{trigger:"item"},label:{show:!0,position:"end",distance:5},lineStyle:{type:"dashed"},emphasis:{label:{show:!0},lineStyle:{width:3}},animationEasing:"linear"},t}(rt),Ft=jt,z=wt(),Xt=function(a,t,i,e){var n=a.getData(),r;if(E(e))r=e;else{var o=e.type;if(o==="min"||o==="max"||o==="average"||o==="median"||e.xAxis!=null||e.yAxis!=null){var s=void 0,l=void 0;if(e.yAxis!=null||e.xAxis!=null)s=t.getAxis(e.yAxis!=null?"y":"x"),l=Vt(e.yAxis,e.xAxis);else{var u=ft(e,n,t,a);s=u.valueAxis;var f=Dt(n,u.valueDataDim);l=pt(n,f,o)}var y=s.dim==="x"?0:1,c=1-y,m=zt(e),v={coord:[]};m.type=null,m.coord=[],m.coord[c]=-1/0,v.coord[c]=1/0;var b=i.get("precision");b>=0&&Rt(l)&&(l=+l.toFixed(Math.min(b,20))),m.coord[y]=v.coord[y]=l,r=[m,v,{type:o,valueIndex:e.valueIndex,value:l}]}else r=[]}var h=[j(a,r[0]),j(a,r[1]),Y({},r[2])];return h[2].type=h[2].type||null,q(h[2],h[0]),q(h[2],h[1]),h};function R(a){return!isNaN(a)&&!isFinite(a)}function it(a,t,i,e){var n=1-a,r=e.dimensions[a];return R(t[n])&&R(i[n])&&t[a]===i[a]&&e.getAxis(r).containData(t[a])}function Qt(a,t){if(a.type==="cartesian2d"){var i=t[0].coord,e=t[1].coord;if(i&&e&&(it(1,i,e,a)||it(0,i,e,a)))return!0}return F(a,t[0])&&F(a,t[1])}function U(a,t,i,e,n){var r=e.coordinateSystem,o=a.getItemModel(t),s,l=J(o.get("x"),n.getWidth()),u=J(o.get("y"),n.getHeight());if(!isNaN(l)&&!isNaN(u))s=[l,u];else{if(e.getMarkerPosition)s=e.getMarkerPosition(a.getValues(a.dimensions,t));else{var f=r.dimensions,y=a.get(f[0],t),c=a.get(f[1],t);s=r.dataToPoint([y,c])}if(Gt(r,"cartesian2d")){var m=r.getAxis("x"),v=r.getAxis("y"),f=r.dimensions;R(a.get(f[0],t))?s[0]=m.toGlobalCoord(m.getExtent()[i?0:1]):R(a.get(f[1],t))&&(s[1]=v.toGlobalCoord(v.getExtent()[i?0:1]))}isNaN(l)||(s[0]=l),isNaN(u)||(s[1]=u)}a.setItemLayout(t,s)}var Wt=function(a){V(t,a);function t(){var i=a!==null&&a.apply(this,arguments)||this;return i.type=t.type,i}return t.prototype.updateTransform=function(i,e,n){e.eachSeries(function(r){var o=rt.getMarkerModelFromSeries(r,"markLine");if(o){var s=o.getData(),l=z(o).from,u=z(o).to;l.each(function(f){U(l,f,!0,r,n),U(u,f,!1,r,n)}),s.each(function(f){s.setItemLayout(f,[l.getItemLayout(f),u.getItemLayout(f)])}),this.markerGroupMap.get(r.id).updateLayout()}},this)},t.prototype.renderSeries=function(i,e,n,r){var o=i.coordinateSystem,s=i.id,l=i.getData(),u=this.markerGroupMap,f=u.get(s)||u.set(s,new Ht);this.group.add(f.group);var y=qt(o,i,e),c=y.from,m=y.to,v=y.line;z(e).from=c,z(e).to=m,e.setData(v);var b=e.get("symbol"),h=e.get("symbolSize"),L=e.get("symbolRotate"),S=e.get("symbolOffset");E(b)||(b=[b,b]),E(h)||(h=[h,h]),E(L)||(L=[L,L]),E(S)||(S=[S,S]),y.from.each(function(p){I(c,p,!0),I(m,p,!1)}),v.each(function(p){var g=v.getItemModel(p).getModel("lineStyle").getLineStyle();v.setItemLayout(p,[c.getItemLayout(p),m.getItemLayout(p)]),g.stroke==null&&(g.stroke=c.getItemVisual(p,"style").fill),v.setItemVisual(p,{fromSymbolKeepAspect:c.getItemVisual(p,"symbolKeepAspect"),fromSymbolOffset:c.getItemVisual(p,"symbolOffset"),fromSymbolRotate:c.getItemVisual(p,"symbolRotate"),fromSymbolSize:c.getItemVisual(p,"symbolSize"),fromSymbol:c.getItemVisual(p,"symbol"),toSymbolKeepAspect:m.getItemVisual(p,"symbolKeepAspect"),toSymbolOffset:m.getItemVisual(p,"symbolOffset"),toSymbolRotate:m.getItemVisual(p,"symbolRotate"),toSymbolSize:m.getItemVisual(p,"symbolSize"),toSymbol:m.getItemVisual(p,"symbol"),style:g})}),f.updateData(v),y.line.eachItemGraphicEl(function(p){Q(p).dataModel=e,p.traverse(function(g){Q(g).dataModel=e})});function I(p,g,_){var d=p.getItemModel(g);U(p,g,_,i,r);var M=d.getModel("itemStyle").getItemStyle();M.fill==null&&(M.fill=Pt(l,"color")),p.setItemVisual(g,{symbolKeepAspect:d.get("symbolKeepAspect"),symbolOffset:D(d.get("symbolOffset",!0),S[_?0:1]),symbolRotate:D(d.get("symbolRotate",!0),L[_?0:1]),symbolSize:D(d.get("symbolSize"),h[_?0:1]),symbol:D(d.get("symbol",!0),b[_?0:1]),style:M})}this.markKeep(f),f.group.silent=e.get("silent")||i.get("silent")},t.type="markLine",t}(ut);function qt(a,t,i){var e;a?e=w(a&&a.dimensions,function(u){var f=t.getData().getDimensionInfo(t.getData().mapDimension(u))||{};return Y(Y({},f),{name:u,ordinalMeta:null})}):e=[{name:"value",type:"float"}];var n=new T(e,i),r=new T(e,i),o=new T([],i),s=w(i.get("data"),W(Xt,t,a,i));a&&(s=Ot(s,W(Qt,a)));var l=ct(!!a,e);return n.initData(w(s,function(u){return u[0]}),null,l),r.initData(w(s,function(u){return u[1]}),null,l),o.initData(w(s,function(u){return u[2]})),o.hasItemOption=!0,{from:n,to:r,line:o}}var Jt=Wt;function te(a){a.registerComponentModel(Ft),a.registerComponentView(Jt),a.registerPreprocessor(function(t){yt(t.series,"markLine")&&(t.markLine=t.markLine||{})})}export{te as i};
