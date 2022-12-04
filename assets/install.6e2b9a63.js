import{_ as z,a1 as W,w as M,aV as k,a3 as K,G as q,o as J,a9 as Q,aW as E,aX as X,C as F,T as Y,aY as tt,aZ as G,a5 as et,ae as at,k as $,aa as U,j as rt,t as nt,Z as it,m as ot,a_ as st}from"./index.esm.min.7c60a7bc.js";var pt=function(o){z(e,o);function e(){var t=o!==null&&o.apply(this,arguments)||this;return t.type=e.type,t.hasSymbolVisual=!0,t}return e.prototype.getInitialData=function(t,a){return W(null,this,{useEncodeDefaulter:!0})},e.prototype.getProgressive=function(){var t=this.option.progressive;return t==null?this.option.large?5e3:this.get("progressive"):t},e.prototype.getProgressiveThreshold=function(){var t=this.option.progressiveThreshold;return t==null?this.option.large?1e4:this.get("progressiveThreshold"):t},e.prototype.brushSelector=function(t,a,r){return r.point(a.getItemLayout(t))},e.prototype.getZLevelKey=function(){return this.getData().count()>this.getProgressiveThreshold()?this.id:""},e.type="series.scatter",e.dependencies=["grid","polar","geo","singleAxis","calendar"],e.defaultOption={coordinateSystem:"cartesian2d",z:2,legendHoverLink:!0,symbolSize:10,large:!1,largeThreshold:2e3,itemStyle:{opacity:.8},emphasis:{scale:!0},clip:!0,select:{itemStyle:{borderColor:"#212121"}},universalTransition:{divideShape:"clone"}},e}(M),ht=pt,j=4,lt=function(){function o(){}return o}(),ut=function(o){z(e,o);function e(t){var a=o.call(this,t)||this;return a._off=0,a.hoverDataIdx=-1,a}return e.prototype.getDefaultShape=function(){return new lt},e.prototype.reset=function(){this.notClear=!1,this._off=0},e.prototype.buildPath=function(t,a){var r=a.points,n=a.size,i=this.symbolProxy,s=i.shape,p=t.getContext?t.getContext():t,h=p&&n[0]<j,u=this.softClipShape,l;if(h){this._ctx=p;return}for(this._ctx=null,l=this._off;l<r.length;){var v=r[l++],f=r[l++];isNaN(v)||isNaN(f)||u&&!u.contain(v,f)||(s.x=v-n[0]/2,s.y=f-n[1]/2,s.width=n[0],s.height=n[1],i.buildPath(t,s,!0))}this.incremental&&(this._off=l,this.notClear=!0)},e.prototype.afterBrush=function(){var t=this.shape,a=t.points,r=t.size,n=this._ctx,i=this.softClipShape,s;if(!!n){for(s=this._off;s<a.length;){var p=a[s++],h=a[s++];isNaN(p)||isNaN(h)||i&&!i.contain(p,h)||n.fillRect(p-r[0]/2,h-r[1]/2,r[0],r[1])}this.incremental&&(this._off=s,this.notClear=!0)}},e.prototype.findDataIndex=function(t,a){for(var r=this.shape,n=r.points,i=r.size,s=Math.max(i[0],4),p=Math.max(i[1],4),h=n.length/2-1;h>=0;h--){var u=h*2,l=n[u]-s/2,v=n[u+1]-p/2;if(t>=l&&a>=v&&t<=l+s&&a<=v+p)return h}return-1},e.prototype.contain=function(t,a){var r=this.transformCoordToLocal(t,a),n=this.getBoundingRect();if(t=r[0],a=r[1],n.contain(t,a)){var i=this.hoverDataIdx=this.findDataIndex(t,a);return i>=0}return this.hoverDataIdx=-1,!1},e.prototype.getBoundingRect=function(){var t=this._rect;if(!t){for(var a=this.shape,r=a.points,n=a.size,i=n[0],s=n[1],p=1/0,h=1/0,u=-1/0,l=-1/0,v=0;v<r.length;){var f=r[v++],_=r[v++];p=Math.min(f,p),u=Math.max(f,u),h=Math.min(_,h),l=Math.max(_,l)}t=this._rect=new k(p-i/2,h-s/2,u-p+i,l-h+s)}return t},e}(K),vt=function(){function o(){this.group=new q}return o.prototype.updateData=function(e,t){this._clear();var a=this._create();a.setShape({points:e.getLayout("points")}),this._setCommon(a,e,t)},o.prototype.updateLayout=function(e){var t=e.getLayout("points");this.group.eachChild(function(a){if(a.startIndex!=null){var r=(a.endIndex-a.startIndex)*2,n=a.startIndex*4*2;t=new Float32Array(t.buffer,n,r)}a.setShape("points",t),a.reset()})},o.prototype.incrementalPrepareUpdate=function(e){this._clear()},o.prototype.incrementalUpdate=function(e,t,a){var r=this._newAdded[0],n=t.getLayout("points"),i=r&&r.shape.points;if(i&&i.length<2e4){var s=i.length,p=new Float32Array(s+n.length);p.set(i),p.set(n,s),r.endIndex=e.end,r.setShape({points:p})}else{this._newAdded=[];var h=this._create();h.startIndex=e.start,h.endIndex=e.end,h.incremental=!0,h.setShape({points:n}),this._setCommon(h,t,a)}},o.prototype.eachRendered=function(e){this._newAdded[0]&&e(this._newAdded[0])},o.prototype._create=function(){var e=new ut({cursor:"default"});return e.ignoreCoarsePointer=!0,this.group.add(e),this._newAdded.push(e),e},o.prototype._setCommon=function(e,t,a){var r=t.hostModel;a=a||{};var n=t.getVisual("symbolSize");e.setShape("size",n instanceof Array?n:[n,n]),e.softClipShape=a.clipShape||null,e.symbolProxy=J(t.getVisual("symbol"),0,0,0,0),e.setColor=e.symbolProxy.setColor;var i=e.shape.size[0]<j;e.useStyle(r.getModel("itemStyle").getItemStyle(i?["color","shadowBlur","shadowColor"]:["color"]));var s=t.getVisual("style"),p=s&&s.fill;p&&e.setColor(p);var h=Q(e);h.seriesIndex=r.seriesIndex,e.on("mousemove",function(u){h.dataIndex=null;var l=e.hoverDataIdx;l>=0&&(h.dataIndex=l+(e.startIndex||0))})},o.prototype.remove=function(){this._clear()},o.prototype._clear=function(){this._newAdded=[],this.group.removeAll()},o}(),ct=vt,gt=function(o){z(e,o);function e(){var t=o!==null&&o.apply(this,arguments)||this;return t.type=e.type,t}return e.prototype.render=function(t,a,r){var n=t.getData(),i=this._updateSymbolDraw(n,t);i.updateData(n,{clipShape:this._getClipShape(t)}),this._finished=!0},e.prototype.incrementalPrepareRender=function(t,a,r){var n=t.getData(),i=this._updateSymbolDraw(n,t);i.incrementalPrepareUpdate(n),this._finished=!1},e.prototype.incrementalRender=function(t,a,r){this._symbolDraw.incrementalUpdate(t,a.getData(),{clipShape:this._getClipShape(a)}),this._finished=t.end===a.getData().count()},e.prototype.updateTransform=function(t,a,r){var n=t.getData();if(this.group.dirty(),!this._finished||n.count()>1e4)return{update:!0};var i=E("").reset(t,a,r);i.progress&&i.progress({start:0,end:n.count(),count:n.count()},n),this._symbolDraw.updateLayout(n)},e.prototype.eachRendered=function(t){this._symbolDraw&&this._symbolDraw.eachRendered(t)},e.prototype._getClipShape=function(t){var a=t.coordinateSystem,r=a&&a.getArea&&a.getArea();return t.get("clip",!0)?r:null},e.prototype._updateSymbolDraw=function(t,a){var r=this._symbolDraw,n=a.pipelineContext,i=n.large;return(!r||i!==this._isLargeDraw)&&(r&&r.remove(),r=this._symbolDraw=i?new ct:new X,this._isLargeDraw=i,this.group.removeAll()),this.group.add(r.group),r},e.prototype.remove=function(t,a){this._symbolDraw&&this._symbolDraw.remove(!0),this._symbolDraw=null},e.prototype.dispose=function(){},e.type="scatter",e}(F),dt=gt;function xt(o){Y(tt),o.registerSeriesModel(ht),o.registerChartView(dt),o.registerLayout(E("scatter"))}var ft=256,yt=function(){function o(){this.blurSize=30,this.pointSize=20,this.maxOpacity=1,this.minOpacity=0,this._gradientPixels={inRange:null,outOfRange:null};var e=G.createCanvas();this.canvas=e}return o.prototype.update=function(e,t,a,r,n,i){var s=this._getBrush(),p=this._getGradient(n,"inRange"),h=this._getGradient(n,"outOfRange"),u=this.pointSize+this.blurSize,l=this.canvas,v=l.getContext("2d"),f=e.length;l.width=t,l.height=a;for(var _=0;_<f;++_){var C=e[_],c=C[0],D=C[1],x=C[2],y=r(x);v.globalAlpha=y,v.drawImage(s,c-u,D-u)}if(!l.width||!l.height)return l;for(var b=v.getImageData(0,0,l.width,l.height),w=b.data,m=0,R=w.length,I=this.minOpacity,O=this.maxOpacity,S=O-I;m<R;){var y=w[m+3]/256,d=Math.floor(y*(ft-1))*4;if(y>0){var g=i(y)?p:h;y>0&&(y=y*S+I),w[m++]=g[d],w[m++]=g[d+1],w[m++]=g[d+2],w[m++]=g[d+3]*y*256}else m+=4}return v.putImageData(b,0,0),l},o.prototype._getBrush=function(){var e=this._brushCanvas||(this._brushCanvas=G.createCanvas()),t=this.pointSize+this.blurSize,a=t*2;e.width=a,e.height=a;var r=e.getContext("2d");return r.clearRect(0,0,a,a),r.shadowOffsetX=a,r.shadowBlur=this.blurSize,r.shadowColor="#000",r.beginPath(),r.arc(-t,t,this.pointSize,0,Math.PI*2,!0),r.closePath(),r.fill(),e},o.prototype._getGradient=function(e,t){for(var a=this._gradientPixels,r=a[t]||(a[t]=new Uint8ClampedArray(256*4)),n=[0,0,0,0],i=0,s=0;s<256;s++)e[t](s/255,!0,n),r[i++]=n[0],r[i++]=n[1],r[i++]=n[2],r[i++]=n[3];return r},o}(),mt=yt;function St(o,e,t){var a=o[1]-o[0];e=ot(e,function(i){return{interval:[(i.interval[0]-o[0])/a,(i.interval[1]-o[0])/a]}});var r=e.length,n=0;return function(i){var s;for(s=n;s<r;s++){var p=e[s].interval;if(p[0]<=i&&i<=p[1]){n=s;break}}if(s===r)for(s=n-1;s>=0;s--){var p=e[s].interval;if(p[0]<=i&&i<=p[1]){n=s;break}}return s>=0&&s<r&&t[s]}}function _t(o,e){var t=o[1]-o[0];return e=[(e[0]-o[0])/t,(e[1]-o[0])/t],function(a){return a>=e[0]&&a<=e[1]}}function Z(o){var e=o.dimensions;return e[0]==="lng"&&e[1]==="lat"}var wt=function(o){z(e,o);function e(){var t=o!==null&&o.apply(this,arguments)||this;return t.type=e.type,t}return e.prototype.render=function(t,a,r){var n;a.eachComponent("visualMap",function(s){s.eachTargetSeries(function(p){p===t&&(n=s)})}),this._progressiveEls=null,this.group.removeAll();var i=t.coordinateSystem;i.type==="cartesian2d"||i.type==="calendar"?this._renderOnCartesianAndCalendar(t,r,0,t.getData().count()):Z(i)&&this._renderOnGeo(i,t,n,r)},e.prototype.incrementalPrepareRender=function(t,a,r){this.group.removeAll()},e.prototype.incrementalRender=function(t,a,r,n){var i=a.coordinateSystem;i&&(Z(i)?this.render(a,r,n):(this._progressiveEls=[],this._renderOnCartesianAndCalendar(a,n,t.start,t.end,!0)))},e.prototype.eachRendered=function(t){et(this._progressiveEls||this.group,t)},e.prototype._renderOnCartesianAndCalendar=function(t,a,r,n,i){var s=t.coordinateSystem,p=at(s,"cartesian2d"),h,u,l,v;if(p){var f=s.getAxis("x"),_=s.getAxis("y");h=f.getBandWidth()+.5,u=_.getBandWidth()+.5,l=f.scale.getExtent(),v=_.scale.getExtent()}for(var C=this.group,c=t.getData(),D=t.getModel(["emphasis","itemStyle"]).getItemStyle(),x=t.getModel(["blur","itemStyle"]).getItemStyle(),y=t.getModel(["select","itemStyle"]).getItemStyle(),b=t.get(["itemStyle","borderRadius"]),w=$(t),m=t.getModel("emphasis"),R=m.get("focus"),I=m.get("blurScope"),O=m.get("disabled"),S=p?[c.mapDimension("x"),c.mapDimension("y"),c.mapDimension("value")]:[c.mapDimension("time"),c.mapDimension("value")],d=r;d<n;d++){var g=void 0,P=c.getItemVisual(d,"style");if(p){var T=c.get(S[0],d),V=c.get(S[1],d);if(isNaN(c.get(S[2],d))||T<l[0]||T>l[1]||V<v[0]||V>v[1])continue;var N=s.dataToPoint([T,V]);g=new U({shape:{x:N[0]-h/2,y:N[1]-u/2,width:h,height:u},style:P})}else{if(isNaN(c.get(S[1],d)))continue;g=new U({z2:1,shape:s.dataToRect([c.get(S[0],d)]).contentShape,style:P})}if(c.hasItemOption){var L=c.getItemModel(d),A=L.getModel("emphasis");D=A.getModel("itemStyle").getItemStyle(),x=L.getModel(["blur","itemStyle"]).getItemStyle(),y=L.getModel(["select","itemStyle"]).getItemStyle(),b=L.get(["itemStyle","borderRadius"]),R=A.get("focus"),I=A.get("blurScope"),O=A.get("disabled"),w=$(L)}g.shape.r=b;var H=t.getRawValue(d),B="-";H&&H[2]!=null&&(B=H[2]+""),rt(g,w,{labelFetcher:t,labelDataIndex:d,defaultOpacity:P.opacity,defaultText:B}),g.ensureState("emphasis").style=D,g.ensureState("blur").style=x,g.ensureState("select").style=y,nt(g,R,I,O),g.incremental=i,i&&(g.states.emphasis.hoverLayer=!0),C.add(g),c.setItemGraphicEl(d,g),this._progressiveEls&&this._progressiveEls.push(g)}},e.prototype._renderOnGeo=function(t,a,r,n){var i=r.targetVisuals.inRange,s=r.targetVisuals.outOfRange,p=a.getData(),h=this._hmLayer||this._hmLayer||new mt;h.blurSize=a.get("blurSize"),h.pointSize=a.get("pointSize"),h.minOpacity=a.get("minOpacity"),h.maxOpacity=a.get("maxOpacity");var u=t.getViewRect().clone(),l=t.getRoamTransform();u.applyTransform(l);var v=Math.max(u.x,0),f=Math.max(u.y,0),_=Math.min(u.width+u.x,n.getWidth()),C=Math.min(u.height+u.y,n.getHeight()),c=_-v,D=C-f,x=[p.mapDimension("lng"),p.mapDimension("lat"),p.mapDimension("value")],y=p.mapArray(x,function(R,I,O){var S=t.dataToPoint([R,I]);return S[0]-=v,S[1]-=f,S.push(O),S}),b=r.getExtent(),w=r.type==="visualMap.continuous"?_t(b,r.option.range):St(b,r.getPieceList(),r.option.selected);h.update(y,c,D,i.color.getNormalizer(),{inRange:i.color.getColorMapper(),outOfRange:s.color.getColorMapper()},w);var m=new it({style:{width:c,height:D,x:v,y:f,image:h.canvas},silent:!0});this.group.add(m)},e.type="heatmap",e}(F),bt=wt,Ct=function(o){z(e,o);function e(){var t=o!==null&&o.apply(this,arguments)||this;return t.type=e.type,t}return e.prototype.getInitialData=function(t,a){return W(null,this,{generateCoord:"value"})},e.prototype.preventIncremental=function(){var t=st.get(this.get("coordinateSystem"));if(t&&t.dimensions)return t.dimensions[0]==="lng"&&t.dimensions[1]==="lat"},e.type="series.heatmap",e.dependencies=["grid","geo","calendar"],e.defaultOption={coordinateSystem:"cartesian2d",z:2,geoIndex:0,blurSize:30,pointSize:20,maxOpacity:1,minOpacity:0,select:{itemStyle:{borderColor:"#212121"}}},e}(M),Dt=Ct;function Rt(o){o.registerChartView(bt),o.registerSeriesModel(Dt)}export{xt as a,Rt as i};
