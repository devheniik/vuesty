(function(n,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(n=typeof globalThis<"u"?globalThis:n||self,e(n.CLib={},n.Vue))})(this,function(n,e){"use strict";const l=["disabled"],s=e.defineComponent({__name:"CLButton",props:{leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},icon:{type:String,default:""},disabled:{type:Boolean,default:!1}},setup(t){return(o,c)=>(e.openBlock(),e.createElementBlock("button",{disabled:t.disabled,class:e.normalizeClass(["flex btn",{"btn-disabled":t.disabled}])},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.leftIcon),{class:"w-5 mr-2"})),e.renderSlot(o.$slots,"default"),(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.rightIcon),{class:"w-5 ml-2"})),(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.icon),{class:"h-9 w-5"}))],10,l))}}),a=(t,o)=>{const c=t.__vccOpts||t;for(const[f,m]of o)c[f]=m;return c},i={};function r(t,o){return e.openBlock(),e.createElementBlock("div",null,[e.renderSlot(t.$slots,"default")])}const d=a(i,[["render",r]]);n.CLAvatar=d,n.CLButton=s,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});
