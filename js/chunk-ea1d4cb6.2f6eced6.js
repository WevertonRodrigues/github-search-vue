(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ea1d4cb6"],{"17b3":function(t,e,i){},2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var a=i("6b75");function n(t){if(Array.isArray(t))return Object(a["a"])(t)}i("a4d3"),i("e01a"),i("d28b"),i("a630"),i("d3b7"),i("3ca3"),i("ddb0");function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var r=i("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return n(t)||s(t)||Object(r["a"])(t)||o()}},dc22:function(t,e,i){"use strict";function a(t,e){var i=e.value,a=e.options||{passive:!0};window.addEventListener("resize",i,a),t._onResize={callback:i,options:a},e.modifiers&&e.modifiers.quiet||i()}function n(t){if(t._onResize){var e=t._onResize,i=e.callback,a=e.options;window.removeEventListener("resize",i,a),delete t._onResize}}var s={inserted:a,unbind:n};e["a"]=s},dff9:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.repos.length>0?i("div",[t._l(t.sliceRepos,(function(e){return i("div",{key:e.name},[i("h2",{staticClass:"font-weight-regular",staticStyle:{"font-family":"monospace"}},[t._v(t._s(e.name))]),i("div",{staticClass:"subtitle grey--text"},[t._v(t._s(e.description))]),i("div",{staticClass:"d-flex align-stretch"},[i("v-icon",{attrs:{color:"black"}},[t._v("mdi-star-outline")]),i("span",{staticClass:"grey--text ml-2 mt-1 align-end"},[t._v(t._s(e.stargazers_count))])],1),i("br")])})),t.pageLength>1?i("div",{staticClass:"text-center"},[i("v-container",[i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"8"}},[i("v-container",{staticClass:"max-width"},[i("v-pagination",{staticClass:"my-4",attrs:{color:"black",length:t.pageLength},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)],1)],1)],1):t._e()],2):i("ErrorMessage",{staticClass:"text-center mt-n2",attrs:{msg:"Have no repositories!"}})],1)},n=[],s=(i("fb6a"),i("8e27")),r={name:"Repos",props:["repos"],components:{ErrorMessage:s["a"]},data:function(){return{page:1}},computed:{sliceRepos:function(){var t=10*this.page-10,e=10*this.page;return this.repos.slice(t,e)},pageLength:function(){return Math.ceil(this.repos.length/10)}}},o=r,l=i("2877"),u=i("6544"),c=i.n(u),h=i("62ad"),v=i("a523"),p=i("132d"),g=(i("99af"),i("d81d"),i("a9e3"),i("d3b7"),i("25f0"),i("2909")),f=i("5530"),d=(i("17b3"),i("9d26")),b=i("dc22"),m=i("a9ad"),y=i("de2c"),_=i("7560"),x=i("58df"),$=Object(x["a"])(m["a"],Object(y["a"])({onVisible:["init"]}),_["a"]).extend({name:"v-pagination",directives:{Resize:b["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(f["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10),e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var i=e%2===0?1:0,a=Math.floor(e/2),n=this.length-a+1+i;if(this.value>a&&this.value<n){var s=this.value-a+2,r=this.value+a-2-i;return[1,"..."].concat(Object(g["a"])(this.range(s,r)),["...",this.length])}if(this.value===a){var o=this.value+a-1-i;return[].concat(Object(g["a"])(this.range(1,o)),["...",this.length])}if(this.value===n){var l=this.value-a+1;return[1,"..."].concat(Object(g["a"])(this.range(l,this.length)))}return[].concat(Object(g["a"])(this.range(1,a)),["..."],Object(g["a"])(this.range(n,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var i=[];t=t>0?t:1;for(var a=t;a<=e;a++)i.push(a);return i},genIcon:function(t,e,i,a,n){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{type:"button","aria-label":n},on:i?{}:{click:a}},[t(d["a"],[e])])])},genItem:function(t,e){var i=this,a=e===this.value&&(this.color||"primary"),n=e===this.value,s=n?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(a,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":n,"aria-label":this.$vuetify.lang.t(s,e)},on:{click:function(){return i.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,a){return t("li",{key:a},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}}),w=i("0fd9"),L=Object(l["a"])(o,a,n,!1,null,null,null);e["default"]=L.exports;c()(L,{VCol:h["a"],VContainer:v["a"],VIcon:p["a"],VPagination:$,VRow:w["a"]})}}]);
//# sourceMappingURL=chunk-ea1d4cb6.2f6eced6.js.map