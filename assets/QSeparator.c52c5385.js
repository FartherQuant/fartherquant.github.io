import{a as t,c as v,h as g,j as $}from"./index.5790f3c8.js";const h={dark:{type:Boolean,default:null}};function f(e,n){return t(()=>e.dark===null?n.dark.isActive:e.dark)}const k={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},i={xs:2,sm:4,md:8,lg:16,xl:24};var S=v({name:"QSeparator",props:{...h,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const n=$(),l=f(e,n.proxy.$q),s=t(()=>e.vertical===!0?"vertical":"horizontal"),r=t(()=>` q-separator--${s.value}`),c=t(()=>e.inset!==!1?`${r.value}-${k[e.inset]}`:""),u=t(()=>`q-separator${r.value}${c.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(l.value===!0?" q-separator--dark":"")),d=t(()=>{const a={};if(e.size!==void 0&&(a[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const m=e.spaced===!0?`${i.md}px`:e.spaced in i?`${i[e.spaced]}px`:e.spaced,o=e.vertical===!0?["Left","Right"]:["Top","Bottom"];a[`margin${o[0]}`]=a[`margin${o[1]}`]=m}return a});return()=>g("hr",{class:u.value,style:d.value,"aria-orientation":s.value})}});export{S as Q,f as a,h as u};
