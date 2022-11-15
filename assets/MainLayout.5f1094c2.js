import{c as z,a as c,h as F,d as He,e as N,f as P,r as q,w as _,o as we,g as st,i as Be,j as I,l as ne,u as dt,k as ct,m as Re,n as X,p as We,q as ft,s as G,t as ve,v as Ae,x as he,y as ye,z as me,A as vt,B as Ne,C as Se,D as oe,E as ke,F as Ie,G as ht,H as mt,I as gt,J,K as bt,L as pt,M as yt,N as Ct,O as Et,_ as Ue,P as te,Q as ue,R as x,S as y,T as ae,U as d,V as E,W as $e,X as _t}from"./index.5790f3c8.js";import{Q as Te,a as Le}from"./QItem.876bb951.js";import{u as Ke,a as Xe,Q as Ce}from"./QSeparator.c52c5385.js";import{Q as Ee,u as wt,a as Bt,b as xt,g as ze,s as Qe,c as Ft,d as Dt,e as qt,f as At,h as St,i as kt,j as Z,k as $t,l as Tt,m as Lt,n as zt,o as ge,p as Qt,q as Pt,r as Mt,t as Ot,v as Vt,w as Ht,x as Rt}from"./format.737081de.js";const Wt=["top","middle","bottom"];var Nt=z({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>Wt.includes(e)}},setup(e,{slots:n}){const a=c(()=>e.align!==void 0?{verticalAlign:e.align}:null),l=c(()=>{const t=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(t!==void 0?` text-${t}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>F("div",{class:l.value,style:a.value,role:"status","aria-label":e.label},He(n.default,e.label!==void 0?[e.label]:[]))}}),It=z({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:n}){const a=c(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>F("div",{class:a.value},N(n.default))}}),Ut=z({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:n,emit:a}){const{proxy:{$q:l}}=I(),t=Be(ne,P);if(t===P)return console.error("QHeader needs to be child of QLayout"),P;const u=q(parseInt(e.heightHint,10)),i=q(!0),g=c(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||l.platform.is.ios&&t.isContainer.value===!0),v=c(()=>{if(e.modelValue!==!0)return 0;if(g.value===!0)return i.value===!0?u.value:0;const f=u.value-t.scroll.value.position;return f>0?f:0}),s=c(()=>e.modelValue!==!0||g.value===!0&&i.value!==!0),r=c(()=>e.modelValue===!0&&s.value===!0&&e.reveal===!0),w=c(()=>"q-header q-layout__section--marginal "+(g.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),B=c(()=>{const f=t.rows.value.top,S={};return f[0]==="l"&&t.left.space===!0&&(S[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),f[2]==="r"&&t.right.space===!0&&(S[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),S});function h(f,S){t.update("header",f,S)}function m(f,S){f.value!==S&&(f.value=S)}function T({height:f}){m(u,f),h("size",f)}function A(f){r.value===!0&&m(i,!0),a("focusin",f)}_(()=>e.modelValue,f=>{h("space",f),m(i,!0),t.animate()}),_(v,f=>{h("offset",f)}),_(()=>e.reveal,f=>{f===!1&&m(i,e.modelValue)}),_(i,f=>{t.animate(),a("reveal",f)}),_(t.scroll,f=>{e.reveal===!0&&m(i,f.direction==="up"||f.position<=e.revealOffset||f.position-f.inflectionPoint<100)});const C={};return t.instances.header=C,e.modelValue===!0&&h("size",u.value),h("space",e.modelValue),h("offset",v.value),we(()=>{t.instances.header===C&&(t.instances.header=void 0,h("size",0),h("offset",0),h("space",!1))}),()=>{const f=st(n.default,[]);return e.elevated===!0&&f.push(F("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),f.push(F(Ee,{debounce:0,onResize:T})),F("header",{class:w.value,style:B.value,onFocusin:A},f)}}}),ee=z({name:"QRouteTab",props:{...dt,...wt},emits:Bt,setup(e,{slots:n,emit:a}){const l=ct({useDisableForRouterLinkProps:!1}),{renderTab:t,$tabs:u}=xt(e,n,a,{exact:c(()=>e.exact),...l});return _(()=>`${e.name} | ${e.exact} | ${(l.resolvedLink.value||{}).href}`,()=>{u.verifyRouteModel()}),()=>t(l.linkTag.value,l.linkAttrs.value)}});function be(e,n,a){const l=ye(e);let t,u=l.left-n.event.x,i=l.top-n.event.y,g=Math.abs(u),v=Math.abs(i);const s=n.direction;s.horizontal===!0&&s.vertical!==!0?t=u<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?t=i<0?"up":"down":s.up===!0&&i<0?(t="up",g>v&&(s.left===!0&&u<0?t="left":s.right===!0&&u>0&&(t="right"))):s.down===!0&&i>0?(t="down",g>v&&(s.left===!0&&u<0?t="left":s.right===!0&&u>0&&(t="right"))):s.left===!0&&u<0?(t="left",g<v&&(s.up===!0&&i<0?t="up":s.down===!0&&i>0&&(t="down"))):s.right===!0&&u>0&&(t="right",g<v&&(s.up===!0&&i<0?t="up":s.down===!0&&i>0&&(t="down")));let r=!1;if(t===void 0&&a===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};t=n.event.lastDir,r=!0,t==="left"||t==="right"?(l.left-=u,g=0,u=0):(l.top-=i,v=0,i=0)}return{synthetic:r,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:l,direction:t,isFirst:n.event.isFirst,isFinal:a===!0,duration:Date.now()-n.event.time,distance:{x:g,y:v},offset:{x:u,y:i},delta:{x:l.left-n.event.lastX,y:l.top-n.event.lastY}}}}let Kt=0;var pe=Re({name:"touch-pan",beforeMount(e,{value:n,modifiers:a}){if(a.mouse!==!0&&X.has.touch!==!0)return;function l(u,i){a.mouse===!0&&i===!0?vt(u):(a.stop===!0&&he(u),a.prevent===!0&&Ae(u))}const t={uid:"qvtp_"+Kt++,handler:n,modifiers:a,direction:ze(a),noop:We,mouseStart(u){Qe(u,t)&&ft(u)&&(G(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(u,!0))},touchStart(u){if(Qe(u,t)){const i=u.target;G(t,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),t.start(u)}},start(u,i){if(X.is.firefox===!0&&ve(e,!0),t.lastEvt=u,i===!0||a.stop===!0){if(t.direction.all!==!0&&(i!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const s=u.type.indexOf("mouse")>-1?new MouseEvent(u.type,u):new TouchEvent(u.type,u);u.defaultPrevented===!0&&Ae(s),u.cancelBubble===!0&&he(s),Object.assign(s,{qKeyEvent:u.qKeyEvent,qClickOutside:u.qClickOutside,qAnchorHandled:u.qAnchorHandled,qClonedBy:u.qClonedBy===void 0?[t.uid]:u.qClonedBy.concat(t.uid)}),t.initialEvent={target:u.target,event:s}}he(u)}const{left:g,top:v}=ye(u);t.event={x:g,y:v,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:g,lastY:v}},move(u){if(t.event===void 0)return;const i=ye(u),g=i.left-t.event.x,v=i.top-t.event.y;if(g===0&&v===0)return;t.lastEvt=u;const s=t.event.mouse===!0,r=()=>{l(u,s);let h;a.preserveCursor!==!0&&a.preservecursor!==!0&&(h=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ft(),t.styleCleanup=m=>{if(t.styleCleanup=void 0,h!==void 0&&(document.documentElement.style.cursor=h),document.body.classList.remove("non-selectable"),s===!0){const T=()=>{document.body.classList.remove("no-pointer-events--children")};m!==void 0?setTimeout(()=>{T(),m()},50):T()}else m!==void 0&&m()}};if(t.event.detected===!0){t.event.isFirst!==!0&&l(u,t.event.mouse);const{payload:h,synthetic:m}=be(u,t,!1);h!==void 0&&(t.handler(h)===!1?t.end(u):(t.styleCleanup===void 0&&t.event.isFirst===!0&&r(),t.event.lastX=h.position.left,t.event.lastY=h.position.top,t.event.lastDir=m===!0?void 0:h.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||s===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){r(),t.event.detected=!0,t.move(u);return}const w=Math.abs(g),B=Math.abs(v);w!==B&&(t.direction.horizontal===!0&&w>B||t.direction.vertical===!0&&w<B||t.direction.up===!0&&w<B&&v<0||t.direction.down===!0&&w<B&&v>0||t.direction.left===!0&&w>B&&g<0||t.direction.right===!0&&w>B&&g>0?(t.event.detected=!0,t.move(u)):t.end(u,!0))},end(u,i){if(t.event!==void 0){if(me(t,"temp"),X.is.firefox===!0&&ve(e,!1),i===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(be(u===void 0?t.lastEvt:u,t).payload);const{payload:g}=be(u===void 0?t.lastEvt:u,t,!0),v=()=>{t.handler(g)};t.styleCleanup!==void 0?t.styleCleanup(v):v()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,a.mouse===!0){const u=a.mouseCapture===!0||a.mousecapture===!0?"Capture":"";G(t,"main",[[e,"mousedown","mouseStart",`passive${u}`]])}X.has.touch===!0&&G(t,"main",[[e,"touchstart","touchStart",`passive${a.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const a=e.__qtouchpan;a!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&a.end(),a.handler=n.value),a.direction=ze(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),me(n,"main"),me(n,"temp"),X.is.firefox===!0&&ve(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}});const Pe=150;var Xt=z({name:"QDrawer",inheritAttrs:!1,props:{...Dt,...Ke,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...qt,"onLayout","miniState"],setup(e,{slots:n,emit:a,attrs:l}){const t=I(),{proxy:{$q:u}}=t,i=Xe(e,u),{preventBodyScroll:g}=$t(),{registerTimeout:v,removeTimeout:s}=At(),r=Be(ne,P);if(r===P)return console.error("QDrawer needs to be child of QLayout"),P;let w,B,h;const m=q(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),T=c(()=>e.mini===!0&&m.value!==!0),A=c(()=>T.value===!0?e.miniWidth:e.width),C=q(e.showIfAbove===!0&&m.value===!1?!0:e.modelValue===!0),f=c(()=>e.persistent!==!0&&(m.value===!0||je.value===!0));function S(o,b){if(V(),o!==!1&&r.animate(),L(0),m.value===!0){const k=r.instances[j.value];k!==void 0&&k.belowBreakpoint===!0&&k.hide(!1),M(1),r.isContainer.value!==!0&&g(!0)}else M(0),o!==!1&&de(!1);v(()=>{o!==!1&&de(!0),b!==!0&&a("show",o)},Pe)}function p(o,b){U(),o!==!1&&r.animate(),M(0),L(R.value*A.value),ce(),b!==!0?v(()=>{a("hide",o)},Pe):s()}const{show:D,hide:$}=St({showing:C,hideOnRouteChange:f,handleShow:S,handleHide:p}),{addToHistory:V,removeFromHistory:U}=kt(C,$,f),H={belowBreakpoint:m,hide:$},Q=c(()=>e.side==="right"),R=c(()=>(u.lang.rtl===!0?-1:1)*(Q.value===!0?1:-1)),xe=q(0),W=q(!1),le=q(!1),Fe=q(A.value*R.value),j=c(()=>Q.value===!0?"left":"right"),re=c(()=>C.value===!0&&m.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:A.value:0),ie=c(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(Q.value?"R":"L")>-1||u.platform.is.ios===!0&&r.isContainer.value===!0),K=c(()=>e.overlay===!1&&C.value===!0&&m.value===!1),je=c(()=>e.overlay===!0&&C.value===!0&&m.value===!1),Ye=c(()=>"fullscreen q-drawer__backdrop"+(C.value===!1&&W.value===!1?" hidden":"")),Ge=c(()=>({backgroundColor:`rgba(0,0,0,${xe.value*.4})`})),De=c(()=>Q.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),Je=c(()=>Q.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),Ze=c(()=>{const o={};return r.header.space===!0&&De.value===!1&&(ie.value===!0?o.top=`${r.header.offset}px`:r.header.space===!0&&(o.top=`${r.header.size}px`)),r.footer.space===!0&&Je.value===!1&&(ie.value===!0?o.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(o.bottom=`${r.footer.size}px`)),o}),et=c(()=>{const o={width:`${A.value}px`,transform:`translateX(${Fe.value}px)`};return m.value===!0?o:Object.assign(o,Ze.value)}),tt=c(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),ut=c(()=>`q-drawer q-drawer--${e.side}`+(le.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(i.value===!0?" q-drawer--dark q-dark":"")+(W.value===!0?" no-transition":C.value===!0?"":" q-layout--prevent-focus")+(m.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${T.value===!0?"mini":"standard"}`+(ie.value===!0||K.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(De.value===!0?" q-drawer--top-padding":""))),at=c(()=>{const o=u.lang.rtl===!0?e.side:j.value;return[[pe,rt,void 0,{[o]:!0,mouse:!0}]]}),ot=c(()=>{const o=u.lang.rtl===!0?j.value:e.side;return[[pe,qe,void 0,{[o]:!0,mouse:!0}]]}),nt=c(()=>{const o=u.lang.rtl===!0?j.value:e.side;return[[pe,qe,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function se(){it(m,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}_(m,o=>{o===!0?(w=C.value,C.value===!0&&$(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(C.value===!0?(L(0),M(0),ce()):D(!1))}),_(()=>e.side,(o,b)=>{r.instances[b]===H&&(r.instances[b]=void 0,r[b].space=!1,r[b].offset=0),r.instances[o]=H,r[o].size=A.value,r[o].space=K.value,r[o].offset=re.value}),_(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&se()}),_(()=>e.behavior+e.breakpoint,se),_(r.isContainer,o=>{C.value===!0&&g(o!==!0),o===!0&&se()}),_(r.scrollbarWidth,()=>{L(C.value===!0?0:void 0)}),_(re,o=>{O("offset",o)}),_(K,o=>{a("onLayout",o),O("space",o)}),_(Q,()=>{L()}),_(A,o=>{L(),fe(e.miniToOverlay,o)}),_(()=>e.miniToOverlay,o=>{fe(o,A.value)}),_(()=>u.lang.rtl,()=>{L()}),_(()=>e.mini,()=>{e.modelValue===!0&&(lt(),r.animate())}),_(T,o=>{a("miniState",o)});function L(o){o===void 0?Se(()=>{o=C.value===!0?0:A.value,L(R.value*o)}):(r.isContainer.value===!0&&Q.value===!0&&(m.value===!0||Math.abs(o)===A.value)&&(o+=R.value*r.scrollbarWidth.value),Fe.value=o)}function M(o){xe.value=o}function de(o){const b=o===!0?"remove":r.isContainer.value!==!0?"add":"";b!==""&&document.body.classList[b]("q-body--drawer-toggle")}function lt(){clearTimeout(B),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),le.value=!0,B=setTimeout(()=>{le.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function rt(o){if(C.value!==!1)return;const b=A.value,k=Z(o.distance.x,0,b);if(o.isFinal===!0){k>=Math.min(75,b)===!0?D():(r.animate(),M(0),L(R.value*b)),W.value=!1;return}L((u.lang.rtl===!0?Q.value!==!0:Q.value)?Math.max(b-k,0):Math.min(0,k-b)),M(Z(k/b,0,1)),o.isFirst===!0&&(W.value=!0)}function qe(o){if(C.value!==!0)return;const b=A.value,k=o.direction===e.side,Y=(u.lang.rtl===!0?k!==!0:k)?Z(o.distance.x,0,b):0;if(o.isFinal===!0){Math.abs(Y)<Math.min(75,b)===!0?(r.animate(),M(1),L(0)):$(),W.value=!1;return}L(R.value*Y),M(Z(1-Y/b,0,1)),o.isFirst===!0&&(W.value=!0)}function ce(){g(!1),de(!0)}function O(o,b){r.update(e.side,o,b)}function it(o,b){o.value!==b&&(o.value=b)}function fe(o,b){O("size",o===!0?e.miniWidth:b)}return r.instances[e.side]=H,fe(e.miniToOverlay,A.value),O("space",K.value),O("offset",re.value),e.showIfAbove===!0&&e.modelValue!==!0&&C.value===!0&&e["onUpdate:modelValue"]!==void 0&&a("update:modelValue",!0),Ne(()=>{a("onLayout",K.value),a("miniState",T.value),w=e.showIfAbove===!0;const o=()=>{(C.value===!0?S:p)(!1,!0)};if(r.totalWidth.value!==0){Se(o);return}h=_(r.totalWidth,()=>{h(),h=void 0,C.value===!1&&e.showIfAbove===!0&&m.value===!1?D(!1):o()})}),we(()=>{h!==void 0&&h(),clearTimeout(B),C.value===!0&&ce(),r.instances[e.side]===H&&(r.instances[e.side]=void 0,O("size",0),O("offset",0),O("space",!1))}),()=>{const o=[];m.value===!0&&(e.noSwipeOpen===!1&&o.push(oe(F("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),at.value)),o.push(ke("div",{ref:"backdrop",class:Ye.value,style:Ge.value,"aria-hidden":"true",onClick:$},void 0,"backdrop",e.noSwipeBackdrop!==!0&&C.value===!0,()=>nt.value)));const b=T.value===!0&&n.mini!==void 0,k=[F("div",{...l,key:""+b,class:[tt.value,l.class]},b===!0?n.mini():N(n.default))];return e.elevated===!0&&C.value===!0&&k.push(F("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(ke("aside",{ref:"content",class:ut.value,style:et.value},k,"contentclose",e.noSwipeClose!==!0&&m.value===!0,()=>ot.value)),F("div",{class:"q-drawer-container"},o)}}}),jt=z({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:a}}=I(),l=Be(ne,P);if(l===P)return console.error("QPageContainer needs to be child of QLayout"),P;Ie(ht,!0);const t=c(()=>{const u={};return l.header.space===!0&&(u.paddingTop=`${l.header.size}px`),l.right.space===!0&&(u[`padding${a.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(u.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(u[`padding${a.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),u});return()=>F("div",{class:"q-page-container",style:t.value},N(n.default))}});const{passive:Me}=mt,Yt=["both","horizontal","vertical"];var Gt=z({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Yt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:n}){const a={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,u;_(()=>e.scrollTarget,()=>{v(),g()});function i(){l!==null&&l();const w=Math.max(0,Lt(t)),B=zt(t),h={top:w-a.position.top,left:B-a.position.left};if(e.axis==="vertical"&&h.top===0||e.axis==="horizontal"&&h.left===0)return;const m=Math.abs(h.top)>=Math.abs(h.left)?h.top<0?"up":"down":h.left<0?"left":"right";a.position={top:w,left:B},a.directionChanged=a.direction!==m,a.delta=h,a.directionChanged===!0&&(a.direction=m,a.inflectionPoint=a.position),n("scroll",{...a})}function g(){t=Tt(u,e.scrollTarget),t.addEventListener("scroll",s,Me),s(!0)}function v(){t!==void 0&&(t.removeEventListener("scroll",s,Me),t=void 0)}function s(w){if(w===!0||e.debounce===0||e.debounce==="0")i();else if(l===null){const[B,h]=e.debounce?[setTimeout(i,e.debounce),clearTimeout]:[requestAnimationFrame(i),cancelAnimationFrame];l=()=>{h(B),l=null}}}const{proxy:r}=I();return _(()=>r.$q.lang.rtl,i),Ne(()=>{u=r.$el.parentNode,g()}),we(()=>{l!==null&&l(),v()}),Object.assign(r,{trigger:s,getPosition:()=>a}),We}}),Jt=z({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:n,emit:a}){const{proxy:{$q:l}}=I(),t=q(null),u=q(l.screen.height),i=q(e.container===!0?0:l.screen.width),g=q({position:0,direction:"down",inflectionPoint:0}),v=q(0),s=q(gt.value===!0?0:ge()),r=c(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=c(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),B=c(()=>s.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${s.value}px`}:null),h=c(()=>s.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${s.value}px`,width:`calc(100% + ${s.value}px)`}:null);function m(p){if(e.container===!0||document.qScrollPrevented!==!0){const D={position:p.position.top,direction:p.direction,directionChanged:p.directionChanged,inflectionPoint:p.inflectionPoint.top,delta:p.delta.top};g.value=D,e.onScroll!==void 0&&a("scroll",D)}}function T(p){const{height:D,width:$}=p;let V=!1;u.value!==D&&(V=!0,u.value=D,e.onScrollHeight!==void 0&&a("scrollHeight",D),C()),i.value!==$&&(V=!0,i.value=$),V===!0&&e.onResize!==void 0&&a("resize",p)}function A({height:p}){v.value!==p&&(v.value=p,C())}function C(){if(e.container===!0){const p=u.value>v.value?ge():0;s.value!==p&&(s.value=p)}}let f;const S={instances:{},view:c(()=>e.view),isContainer:c(()=>e.container),rootRef:t,height:u,containerHeight:v,scrollbarWidth:s,totalWidth:c(()=>i.value+s.value),rows:c(()=>{const p=e.view.toLowerCase().split(" ");return{top:p[0].split(""),middle:p[1].split(""),bottom:p[2].split("")}}),header:J({size:0,offset:0,space:!1}),right:J({size:300,offset:0,space:!1}),footer:J({size:0,offset:0,space:!1}),left:J({size:300,offset:0,space:!1}),scroll:g,animate(){f!==void 0?clearTimeout(f):document.body.classList.add("q-body--layout-animate"),f=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),f=void 0},155)},update(p,D,$){S[p][D]=$}};if(Ie(ne,S),ge()>0){let $=function(){p=null,D.classList.remove("hide-scrollbar")},V=function(){if(p===null){if(D.scrollHeight>l.screen.height)return;D.classList.add("hide-scrollbar")}else clearTimeout(p);p=setTimeout($,300)},U=function(H){p!==null&&H==="remove"&&(clearTimeout(p),$()),window[`${H}EventListener`]("resize",V)},p=null;const D=document.body;_(()=>e.container!==!0?"add":"remove",U),e.container!==!0&&U("add"),bt(()=>{U("remove")})}return()=>{const p=He(n.default,[F(Gt,{onScroll:m}),F(Ee,{onResize:T})]),D=F("div",{class:r.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},p);return e.container===!0?F("div",{class:"q-layout-container overflow-hidden",ref:t},[F(Ee,{onResize:A}),F("div",{class:"absolute-full",style:B.value},[F("div",{class:"scroll",style:h.value},[D])])]):D}}});function Oe(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const n=parseInt(e,10);return isNaN(n)?0:n}var _e=Re({name:"close-popup",beforeMount(e,{value:n}){const a={depth:Oe(n),handler(l){a.depth!==0&&setTimeout(()=>{const t=Qt(e);t!==void 0&&Pt(t,l,a.depth)})},handlerKey(l){pt(l,13)===!0&&a.handler(l)}};e.__qclosepopup=a,e.addEventListener("click",a.handler),e.addEventListener("keyup",a.handlerKey)},updated(e,{value:n,oldValue:a}){n!==a&&(e.__qclosepopup.depth=Oe(n))},beforeUnmount(e){const n=e.__qclosepopup;e.removeEventListener("click",n.handler),e.removeEventListener("keyup",n.handlerKey),delete e.__qclosepopup}}),Ve=z({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:n}){const a=c(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>F(e.tag,{class:a.value},N(n.default))}}),Zt=z({name:"QCardActions",props:{...yt,vertical:Boolean},setup(e,{slots:n}){const a=Ct(e),l=c(()=>`q-card__actions ${a.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>F("div",{class:l.value},N(n.default))}}),eu=z({name:"QCard",props:{...Ke,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:n}){const{proxy:{$q:a}}=I(),l=Xe(e,a),t=c(()=>"q-card"+(l.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>F(e.tag,{class:t.value},N(n.default))}});const tu=Et({name:"ReleaseNotes"}),uu=d("div",{class:"text-h6"},"\u66F4\u65B0\u65E5\u5FD7",-1),au=d("p",{class:"text-weight-bold"},"v 1.5.0",-1),ou=d("p",null,[E("- \u65B0\u589E\u884C\u4E1A\u5728\u5E02\u573A\u4E2D\u7EDF\u8BA1\u3002"),d("br"),E(" - \u8C03\u6574\u7248\u9762\u683C\u5F0F\u3002"),d("br")],-1),nu=d("p",{class:"text-weight-bold"},"v 1.4.1",-1),lu=d("p",null,[E("- \u8C03\u6574\u7248\u9762\u683C\u5F0F\u3002"),d("br")],-1),ru=d("p",{class:"text-weight-bold"},"v 1.4.0",-1),iu=d("p",null,[E("- \u65B0\u589E\u5BBD\u6307\u3001\u884C\u4E1A\u5217\u8868\u3002"),d("br")],-1),su=d("p",{class:"text-weight-bold"},"v 1.3.4",-1),du=d("p",null,[E("- \u65B0\u589E\u7ADE\u4EF7\u6982\u51B5\u3002"),d("br")],-1),cu=d("p",{class:"text-weight-bold"},"v 1.3.3",-1),fu=d("p",null,[E("- \u4FEE\u8BA2\u6D6E\u70B9\u56FE\u63D0\u793A\u7684\u663E\u793A\u95EE\u9898\u3002"),d("br"),E(" - \u4FEE\u8BA2\u7ADE\u4EF7\u90E8\u5206\u8FD0\u7B97\u7684\u53D6\u6570\u9519\u8BEF\u3002"),d("br"),E(" - \u6574\u7406\u56FE\u8868\u8F93\u51FA\u6570\u636E\u7684\u5C0F\u6570\u4F4D\u3002"),d("br")],-1),vu=d("p",{class:"text-weight-bold"},"v 1.3.2",-1),hu=d("p",null,[E("- \u65B0\u589E\u96C6\u5408\u7ADE\u4EF7\u884C\u4E1A\u6C47\u603B"),d("br"),E(" - \u589E\u52A0\u4EA4\u6613\u65E5\u671F\u53CA\u65F6\u95F4\u663E\u793A"),d("br"),E(" - \u8C03\u6574\u96C6\u5408\u7ADE\u4EF7\u3001\u60C5\u7EEA\u3001\u66F4\u65B0\u65E5\u5FD7\u7684\u663E\u793A\u65B9\u5F0F"),d("br"),E(" - \u589E\u52A0\u76D8\u4E2D\u5BBD\u6307\u6210\u4EA4\u91CF\u7EBF\u56FE"),d("br"),E(" - \u589E\u52A0\u76D8\u4E2D\u6DA8\u8DCC\u56FE\u4E0A\u6DA8\u7EBF"),d("br"),E(" - \u4FEE\u8BA2\u6307\u6570\u3001\u884C\u4E1A\u3001\u8D44\u91D1\u6563\u70B9\u56FE\u63D0\u793A\u7684\u663E\u793A\u683C\u5F0F")],-1),mu=d("p",{class:"text-weight-bold"},"v 1.3.1",-1),gu=d("p",null,"- \u66F4\u65B0\u5DE6\u8FB9\u680F\u83DC\u5355\u9879\u53CA\u5C55\u793A\u65B9\u5F0F",-1),bu=d("p",{class:"text-weight-bold"},"v 1.3.0",-1),pu=d("p",null,[E("- \u65B0\u589E\u96C6\u5408\u7ADE\u4EF7\u6A21\u5757"),d("br"),E(" - \u8C03\u6574\u8868\u683C\u7684\u663E\u793A\u65B9\u5F0F\uFF0C\u8868\u683C\u540D\u79F0\u5217\u56FA\u5B9A"),d("br"),E(" - \u66F4\u65B0\u90E8\u5206\u53D6\u6570 ajax \u65B9\u5F0F\u3002 ")],-1),yu=d("p",{class:"text-weight-bold"},"v 1.2.2",-1),Cu=d("p",null,[E("- \u65B0\u589E\u7CFB\u7EDF\u66F4\u65B0\u65E5\u5FD7\u3002"),d("br"),E(" - \u8C03\u6574\u5DE5\u5177\u680F\u7684\u677F\u9762\u3002 ")],-1),Eu=d("p",{class:"text-weight-bold"},"v 1.2.1",-1),_u=d("p",null,"- \u65B0\u589E\u201C\u7EC4\u5408\u201D\u9875\u9762\u3002\u7528\u6765\u663E\u793A\u7EC4\u5408\u7684\u60C5\u51B5\uFF0C\u7528\u6765\u76D1\u63A7\u201D\u83DC\u7BEE\u5B50\u201C\u7EC4\u5408\u7684\u8FD0\u884C\u60C5\u51B5\uFF0C\u5305\u62EC\u591A\u8FC7\u6EE4\u5BF9\u7167\u3001\u4E0D\u540C\u7EC4\u5408\u7B56\u7565\u7684\u6301\u4ED3\u6BD4\u4F8B\u548C\u884C\u4E1A\u5360\u6BD4\u3002",-1),wu=d("p",{class:"text-weight-bold"},"v 1.1.0",-1),Bu=d("p",null,[E("- \u65B0\u589E\u201C\u60C5\u7EEA\u201D\u9875\u9762\u3002\u7528\u6765\u663E\u793A\u7EC4\u5408\u7684\u60C5\u51B5\u3002\u7528\u6765\u76D1\u63A7\u76D8\u4E2D\u7684\u8D44\u91D1\u60C5\u7EEA\uFF0C\u5305\u62EC\u65E5\u5185\u6DA8\u8DCC\u505C\u60C5\u51B5\u3001\u6628\u65E5\u9AD8\u6807\u548C\u4E0A\u5E02\u65B0\u80A1\u3002"),d("br"),E(" - \u65B0\u589E pwa \u6A21\u5F0F")],-1),xu=d("p",{class:"text-weight-bold"},"v 1.0.0",-1),Fu=d("p",null,"- \u4F7F\u7528quasur \u91CD\u65B0\u521B\u5EFA\u7CFB\u7EDF",-1);function Du(e,n,a,l,t,u){return te(),ue(eu,null,{default:x(()=>[y(Ve,null,{default:x(()=>[uu]),_:1}),y(Ce),y(Ve,{style:{"max-height":"50vh"},class:"scroll"},{default:x(()=>[au,ou,nu,lu,ru,iu,su,du,cu,fu,vu,hu,mu,gu,bu,pu,yu,Cu,Eu,_u,wu,Bu,xu,Fu]),_:1}),y(Ce),y(Zt,{align:"center"},{default:x(()=>[oe(y(ae,{flat:"",label:"\u786E\u5B9A",color:"primary"},null,512),[[_e]])]),_:1})]),_:1})}var qu=Ue(tu,[["render",Du]]);const Au={name:"MainLayout",components:{ReleaseNotes:qu},mounted:function(){setInterval(()=>{this.time=this.getToday()},1e3)},setup(){const e=q(!1);function n(){var a=new Date,l=":",t=a.getHours(),u=a.getMinutes(),i=a.getSeconds();return t>=0&&t<=9&&(t="0"+t),u>=0&&u<=9&&(u="0"+u),i>=0&&i<=9&&(i="0"+i),t+l+u+l+i}return{tab:q("market"),fixed:q(!1),time:q(null),getToday:n,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}},Su={class:"text-bold",flat:""},ku={class:"row"},$u={class:"col-2"},Tu={class:"col"};function Lu(e,n,a,l,t,u){const i=$e("release-notes"),g=$e("router-view");return te(),ue(Jt,{view:"lHh Lpr lFf"},{default:x(()=>[y(Ut,{elevated:"",class:"bg-red-4"},{default:x(()=>[y(Mt,null,{default:x(()=>[y(ae,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:l.toggleLeftDrawer},null,8,["onClick"]),y(It,null,{default:x(()=>[E(" FQuant Web Application "),y(Nt,{align:"top"},{default:x(()=>[E("v1.4.0")]),_:1})]),_:1}),d("div",Su,_t(l.time),1),y(ae,{flat:"",round:"",onClick:n[0]||(n[0]=v=>{this.$router.go(0)}),icon:"refresh"}),y(ae,{flat:"",round:"",icon:"airplay"},{default:x(()=>[y(Ot,null,{default:x(()=>[y(Vt,{style:{"min-width":"100px"}},{default:x(()=>[oe((te(),ue(Te,{clickable:""},{default:x(()=>[y(Le,{onClick:n[1]||(n[1]=v=>l.fixed=!0)},{default:x(()=>[E("\u66F4\u65B0\u65E5\u5FD7")]),_:1})]),_:1})),[[_e]]),y(Ce),oe((te(),ue(Te,{clickable:""},{default:x(()=>[y(Le,null,{default:x(()=>[E("\u5173\u4E8E...")]),_:1})]),_:1})),[[_e]])]),_:1})]),_:1})]),_:1}),y(Ht,{modelValue:l.fixed,"onUpdate:modelValue":n[2]||(n[2]=v=>l.fixed=v)},{default:x(()=>[y(i)]),_:1},8,["modelValue"])]),_:1})]),_:1}),y(Xt,{modelValue:l.leftDrawerOpen,"onUpdate:modelValue":n[4]||(n[4]=v=>l.leftDrawerOpen=v),"show-if-above":"",bordered:"",class:"bg-grey-1 text-black",width:"250"},{default:x(()=>[d("div",ku,[d("div",$u,[y(Rt,{modelValue:l.tab,"onUpdate:modelValue":n[3]||(n[3]=v=>l.tab=v),vertical:"",class:"text-red-9 text-weight-bold"},{default:x(()=>[y(ee,{name:"base",to:"/marketindustry",label:"\u57FA\u672C",exact:""}),y(ee,{name:"market",to:"/market",label:"\u76D8\u4E2D",exact:""}),y(ee,{name:"widthindex",to:"/widthindex",label:"\u76D8\u540E",exact:""}),y(ee,{name:"fundowner",to:"/fundowner",label:"\u7EC4\u5408",exact:""})]),_:1},8,["modelValue"])]),d("div",Tu,[y(g,{name:"LeftSidebar"})])])]),_:1},8,["modelValue"]),y(jt,null,{default:x(()=>[y(g,{name:"Main"})]),_:1})]),_:1})}var Vu=Ue(Au,[["render",Lu]]);export{Vu as default};
