(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e61fb97"],{"24cc":function(t,e,a){},"656a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("standard-form-row",{staticStyle:{"padding-bottom":"11px"},attrs:{title:"",block:""}},[a("a-radio-group",{on:{change:function(e){return t.handleChangeType(t.module)}},model:{value:t.module,callback:function(e){t.module=e},expression:"module"}},[a("a-radio-button",{attrs:{value:"new"}},[t._v("最新")]),a("a-radio-button",{attrs:{value:"collection"}},[t._v("收藏最多")]),a("a-radio-button",{attrs:{value:"recommend"}},[t._v("推荐")])],1),a("a-input-search",{staticStyle:{"margin-left":"16px",width:"272px"},on:{search:t.handleSearch}})],1),a("a-card",{staticStyle:{"margin-top":"0px"},attrs:{bordered:!0,title:""}},[a("div",{staticClass:"operate"},[a("a-button",{staticStyle:{width:"100%"},attrs:{type:"dashed"}},[t._v("添加后 - 在“我的”查看")])],1),a("a-list",{attrs:{loading:t.loading,size:"large",pagination:t.paginationOpt}},[t._l(t.webList,(function(e,n){return a("a-list-item",{key:n,staticStyle:{"padding-top":"10px","padding-bottom":"10px"}},[a("a-list-item-meta",{attrs:{description:e.desc}},[e.img?a("a-avatar",{attrs:{slot:"avatar",size:"default",shape:"square",src:e.img},slot:"avatar"}):a("a-avatar",{style:e.style||"color: #fff;backgroundColor:#2BA245;",attrs:{slot:"avatar",size:"default",shape:"square",src:e.img},slot:"avatar"},[t._v(" "+t._s(e.name.substr(0,1))+" ")]),a("a",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.name))])],1),a("div",{staticClass:"list-times"},[a("div",{staticClass:"list-content-item"},[a("a-icon",{staticStyle:{"margin-right":"8px"},attrs:{type:"star-o"}}),a("span",[t._v(t._s(e.col_times))])],1)]),a("div",{staticClass:"list-view"},[a("div",{staticClass:"list-content-item"},[a("a",{attrs:{href:e.url,target:"_blank"}},[t._v("查看")])])]),a("div",{staticClass:"list-view"},[a("a",{on:{click:function(a){return t.handleEdit(e)}}},[t._v("添加")])])],1)})),a("span")],2),a("web-form",{ref:"webSaveModal",attrs:{visible:t.visible,loading:t.confirmLoading,model:t.mdl},on:{cancel:t.handleCancel,ok:t.handleOk}})],1)],1)},i=[],r=(a("b0c0"),a("8ded")),o=a.n(r),l=a("9fb0"),s=a("f6db"),c=a("a358"),u=a("2af9"),d={name:"StandardList",components:{WebForm:s["a"],StandardFormRow:u["b"]},data:function(){var t=this;return{token:null,webList:{},webPageList:{},paginationOpt:{current:1,total:0,pageSize:10,"show-quick-jumper":!0,onChange:function(e){t.paginationOpt.current=e,t.page=e,t.getAllWebs()}},loading:!0,page:1,type2:0,module:"recommend",desc:"",visible:!1,confirmLoading:!1,mdl:null}},mounted:function(){this.getAllWebs(),this.getToken()},methods:{getToken:function(){this.token=o.a.get(l["a"])},handleSearch:function(t){this.page=1,this.desc=t,this.getAllWebs()},handleChangeType:function(t){this.module=t,this.page=1,this.desc="",this.paginationOpt.current=1,this.getAllWebs()},handleEdit:function(t){if(!this.token)return this.$message.error("请登录"),!1;this.visible=!0,this.mdl={id:t.wsid,name:t.name,url:t.url}},getAllWebs:function(){var t=this,e={out_url:"allWebSites",method:"POST",data:{module:this.module,desc:this.desc,page:this.page,type2:this.type2}};Object(c["a"])(e).then((function(e){t.loading=!1,0===e.code&&(t.webPageList=e.data&&e.data.list,t.webList=t.webPageList.data,t.paginationOpt.total=t.webPageList.total,t.paginationOpt.pageSize=t.webPageList.per_page)})).catch((function(t){}))},handleCancel:function(){this.visible=!1,this.confirmLoading=!1;this.$refs.webSaveModal.form},handleOk:function(){var t=this,e=this.$refs.webSaveModal.form;this.confirmLoading=!0,e.validateFields((function(e,a){if(e)t.confirmLoading=!1;else{var n={out_url:"saveMySite",method:"POST",data:{wsid:a.wsid,type:a.type,name:a.name,url:a.url,sort:0}};Object(c["a"])(n).then((function(e){t.confirmLoading=!1,0===e.code?(t.visible=!1,t.$message.info("添加成功")):t.$message.info("添加失败")})).catch((function(t){}))}}))}}},f=d,m=(a("cf0d"),a("2877")),p=Object(m["a"])(f,n,i,!1,null,"5b49fae0",null);e["default"]=p.exports},"88bc":function(t,e,a){(function(e){var a=1/0,n=9007199254740991,i="[object Arguments]",r="[object Function]",o="[object GeneratorFunction]",l="[object Symbol]",s="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,u=s||c||Function("return this")();function d(t,e,a){switch(a.length){case 0:return t.call(e);case 1:return t.call(e,a[0]);case 2:return t.call(e,a[0],a[1]);case 3:return t.call(e,a[0],a[1],a[2])}return t.apply(e,a)}function f(t,e){var a=-1,n=t?t.length:0,i=Array(n);while(++a<n)i[a]=e(t[a],a,t);return i}function m(t,e){var a=-1,n=e.length,i=t.length;while(++a<n)t[i+a]=e[a];return t}var p=Object.prototype,h=p.hasOwnProperty,v=p.toString,g=u.Symbol,b=p.propertyIsEnumerable,w=g?g.isConcatSpreadable:void 0,y=Math.max;function _(t,e,a,n,i){var r=-1,o=t.length;a||(a=k),i||(i=[]);while(++r<o){var l=t[r];e>0&&a(l)?e>1?_(l,e-1,a,n,i):m(i,l):n||(i[i.length]=l)}return i}function S(t,e){return t=Object(t),O(t,e,(function(e,a){return a in t}))}function O(t,e,a){var n=-1,i=e.length,r={};while(++n<i){var o=e[n],l=t[o];a(l,o)&&(r[o]=l)}return r}function j(t,e){return e=y(void 0===e?t.length-1:e,0),function(){var a=arguments,n=-1,i=y(a.length-e,0),r=Array(i);while(++n<i)r[n]=a[e+n];n=-1;var o=Array(e+1);while(++n<e)o[n]=a[n];return o[e]=r,d(t,this,o)}}function k(t){return C(t)||L(t)||!!(w&&t&&t[w])}function x(t){if("string"==typeof t||E(t))return t;var e=t+"";return"0"==e&&1/t==-a?"-0":e}function L(t){return $(t)&&h.call(t,"callee")&&(!b.call(t,"callee")||v.call(t)==i)}var C=Array.isArray;function A(t){return null!=t&&q(t.length)&&!F(t)}function $(t){return W(t)&&A(t)}function F(t){var e=P(t)?v.call(t):"";return e==r||e==o}function q(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}function P(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function W(t){return!!t&&"object"==typeof t}function E(t){return"symbol"==typeof t||W(t)&&v.call(t)==l}var T=j((function(t,e){return null==t?{}:S(t,f(_(e,1),x))}));t.exports=T}).call(this,a("c8ba"))},cf0d:function(t,e,a){"use strict";var n=a("24cc"),i=a.n(n);i.a},f6db:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:"添加",width:640,visible:t.visible,confirmLoading:t.loading},on:{ok:function(){t.$emit("ok")},cancel:function(){t.$emit("cancel")}}},[a("a-spin",{attrs:{spinning:t.loading}},[a("a-form",t._b({attrs:{form:t.form}},"a-form",t.formLayout,!1),[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id",{initialValue:0}],expression:"['id', { initialValue: 0 }]"}],attrs:{type:"hidden"}})],1),a("a-form-item",{attrs:{label:"类型"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{initialValue:1}],expression:"['type', {initialValue:1}]"}]},[a("a-select-option",{attrs:{value:1}},[t._v("常用")]),a("a-select-option",{attrs:{value:2}},[t._v("专业")]),a("a-select-option",{attrs:{value:3}},[t._v("娱乐")]),a("a-select-option",{attrs:{value:4}},[t._v("游戏")]),a("a-select-option",{attrs:{value:5}},[t._v("阅读")]),a("a-select-option",{attrs:{value:6}},[t._v("旅行")]),a("a-select-option",{attrs:{value:7}},[t._v("交友")]),a("a-select-option",{attrs:{value:8}},[t._v("其它")])],1)],1),a("a-form-item",{attrs:{label:"名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请填写名称"}]}],expression:"['name', {rules:[{required: true, message: '请填写名称'}]}]"}]})],1),a("a-form-item",{attrs:{label:"地址"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{rules:[{required:!0,message:"请正确填写地址"}]}],expression:"['url', {rules:[{required: true, message: '请正确填写地址'}]}]"}],attrs:{placeholder:"如：http://wwwbaidu.com/"}})],1)],1)],1)],1)},i=[],r=(a("4160"),a("88bc")),o=a.n(r),l=["id","type","name","url"],s={props:{visible:{type:Boolean,required:!0},loading:{type:Boolean,default:function(){return!1}},model:{type:Object,default:function(){return null}}},data:function(){return this.formLayout={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}}},{form:this.$form.createForm(this)}},created:function(){var t=this;l.forEach((function(e){return t.form.getFieldDecorator(e)})),this.$watch("model",(function(){t.model&&t.form.setFieldsValue(o()(t.model,l))}))}},c=s,u=a("2877"),d=Object(u["a"])(c,n,i,!1,null,null,null);e["a"]=d.exports}}]);