(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6613e984"],{"00d8":function(t,e){(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&n.rotl(t,8)|4278255360&n.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=n.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],n=0,r=0;n<t.length;n++,r+=8)e[r>>>5]|=t[n]<<24-r%32;return e},wordsToBytes:function(t){for(var e=[],n=0;n<32*t.length;n+=8)e.push(t[n>>>5]>>>24-n%32&255);return e},bytesToHex:function(t){for(var e=[],n=0;n<t.length;n++)e.push((t[n]>>>4).toString(16)),e.push((15&t[n]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],n=0;n<t.length;n+=2)e.push(parseInt(t.substr(n,2),16));return e},bytesToBase64:function(t){for(var n=[],r=0;r<t.length;r+=3)for(var a=t[r]<<16|t[r+1]<<8|t[r+2],o=0;o<4;o++)8*r+6*o<=8*t.length?n.push(e.charAt(a>>>6*(3-o)&63)):n.push("=");return n.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var n=[],r=0,a=0;r<t.length;a=++r%4)0!=a&&n.push((e.indexOf(t.charAt(r-1))&Math.pow(2,-2*a+8)-1)<<2*a|e.indexOf(t.charAt(r))>>>6-2*a);return n}};t.exports=n})()},"044b":function(t,e){function n(t){return!!t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function r(t){return"function"===typeof t.readFloatLE&&"function"===typeof t.slice&&n(t.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||r(t)||!!t._isBuffer)}},"14b5":function(t,e,n){"use strict";var r=n("506f"),a=n.n(r);a.a},"506f":function(t,e,n){},6821:function(t,e,n){(function(){var e=n("00d8"),r=n("9a634").utf8,a=n("044b"),o=n("9a634").bin,i=function(t,n){t.constructor==String?t=n&&"binary"===n.encoding?o.stringToBytes(t):r.stringToBytes(t):a(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());for(var s=e.bytesToWords(t),l=8*t.length,u=1732584193,c=-271733879,f=-1732584194,d=271733878,h=0;h<s.length;h++)s[h]=16711935&(s[h]<<8|s[h]>>>24)|4278255360&(s[h]<<24|s[h]>>>8);s[l>>>5]|=128<<l%32,s[14+(l+64>>>9<<4)]=l;var g=i._ff,p=i._gg,y=i._hh,m=i._ii;for(h=0;h<s.length;h+=16){var v=u,b=c,w=f,S=d;u=g(u,c,f,d,s[h+0],7,-680876936),d=g(d,u,c,f,s[h+1],12,-389564586),f=g(f,d,u,c,s[h+2],17,606105819),c=g(c,f,d,u,s[h+3],22,-1044525330),u=g(u,c,f,d,s[h+4],7,-176418897),d=g(d,u,c,f,s[h+5],12,1200080426),f=g(f,d,u,c,s[h+6],17,-1473231341),c=g(c,f,d,u,s[h+7],22,-45705983),u=g(u,c,f,d,s[h+8],7,1770035416),d=g(d,u,c,f,s[h+9],12,-1958414417),f=g(f,d,u,c,s[h+10],17,-42063),c=g(c,f,d,u,s[h+11],22,-1990404162),u=g(u,c,f,d,s[h+12],7,1804603682),d=g(d,u,c,f,s[h+13],12,-40341101),f=g(f,d,u,c,s[h+14],17,-1502002290),c=g(c,f,d,u,s[h+15],22,1236535329),u=p(u,c,f,d,s[h+1],5,-165796510),d=p(d,u,c,f,s[h+6],9,-1069501632),f=p(f,d,u,c,s[h+11],14,643717713),c=p(c,f,d,u,s[h+0],20,-373897302),u=p(u,c,f,d,s[h+5],5,-701558691),d=p(d,u,c,f,s[h+10],9,38016083),f=p(f,d,u,c,s[h+15],14,-660478335),c=p(c,f,d,u,s[h+4],20,-405537848),u=p(u,c,f,d,s[h+9],5,568446438),d=p(d,u,c,f,s[h+14],9,-1019803690),f=p(f,d,u,c,s[h+3],14,-187363961),c=p(c,f,d,u,s[h+8],20,1163531501),u=p(u,c,f,d,s[h+13],5,-1444681467),d=p(d,u,c,f,s[h+2],9,-51403784),f=p(f,d,u,c,s[h+7],14,1735328473),c=p(c,f,d,u,s[h+12],20,-1926607734),u=y(u,c,f,d,s[h+5],4,-378558),d=y(d,u,c,f,s[h+8],11,-2022574463),f=y(f,d,u,c,s[h+11],16,1839030562),c=y(c,f,d,u,s[h+14],23,-35309556),u=y(u,c,f,d,s[h+1],4,-1530992060),d=y(d,u,c,f,s[h+4],11,1272893353),f=y(f,d,u,c,s[h+7],16,-155497632),c=y(c,f,d,u,s[h+10],23,-1094730640),u=y(u,c,f,d,s[h+13],4,681279174),d=y(d,u,c,f,s[h+0],11,-358537222),f=y(f,d,u,c,s[h+3],16,-722521979),c=y(c,f,d,u,s[h+6],23,76029189),u=y(u,c,f,d,s[h+9],4,-640364487),d=y(d,u,c,f,s[h+12],11,-421815835),f=y(f,d,u,c,s[h+15],16,530742520),c=y(c,f,d,u,s[h+2],23,-995338651),u=m(u,c,f,d,s[h+0],6,-198630844),d=m(d,u,c,f,s[h+7],10,1126891415),f=m(f,d,u,c,s[h+14],15,-1416354905),c=m(c,f,d,u,s[h+5],21,-57434055),u=m(u,c,f,d,s[h+12],6,1700485571),d=m(d,u,c,f,s[h+3],10,-1894986606),f=m(f,d,u,c,s[h+10],15,-1051523),c=m(c,f,d,u,s[h+1],21,-2054922799),u=m(u,c,f,d,s[h+8],6,1873313359),d=m(d,u,c,f,s[h+15],10,-30611744),f=m(f,d,u,c,s[h+6],15,-1560198380),c=m(c,f,d,u,s[h+13],21,1309151649),u=m(u,c,f,d,s[h+4],6,-145523070),d=m(d,u,c,f,s[h+11],10,-1120210379),f=m(f,d,u,c,s[h+2],15,718787259),c=m(c,f,d,u,s[h+9],21,-343485551),u=u+v>>>0,c=c+b>>>0,f=f+w>>>0,d=d+S>>>0}return e.endian([u,c,f,d])};i._ff=function(t,e,n,r,a,o,i){var s=t+(e&n|~e&r)+(a>>>0)+i;return(s<<o|s>>>32-o)+e},i._gg=function(t,e,n,r,a,o,i){var s=t+(e&r|n&~r)+(a>>>0)+i;return(s<<o|s>>>32-o)+e},i._hh=function(t,e,n,r,a,o,i){var s=t+(e^n^r)+(a>>>0)+i;return(s<<o|s>>>32-o)+e},i._ii=function(t,e,n,r,a,o,i){var s=t+(n^(e|~r))+(a>>>0)+i;return(s<<o|s>>>32-o)+e},i._blocksize=16,i._digestsize=16,t.exports=function(t,n){if(void 0===t||null===t)throw new Error("Illegal argument "+t);var r=e.wordsToBytes(i(t,n));return n&&n.asBytes?r:n&&n.asString?o.bytesToString(r):e.bytesToHex(r)}})()},"88bc":function(t,e,n){(function(e){var n=1/0,r=9007199254740991,a="[object Arguments]",o="[object Function]",i="[object GeneratorFunction]",s="[object Symbol]",l="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=l||u||Function("return this")();function f(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function d(t,e){var n=-1,r=t?t.length:0,a=Array(r);while(++n<r)a[n]=e(t[n],n,t);return a}function h(t,e){var n=-1,r=e.length,a=t.length;while(++n<r)t[a+n]=e[n];return t}var g=Object.prototype,p=g.hasOwnProperty,y=g.toString,m=c.Symbol,v=g.propertyIsEnumerable,b=m?m.isConcatSpreadable:void 0,w=Math.max;function S(t,e,n,r,a){var o=-1,i=t.length;n||(n=x),a||(a=[]);while(++o<i){var s=t[o];e>0&&n(s)?e>1?S(s,e-1,n,r,a):h(a,s):r||(a[a.length]=s)}return a}function _(t,e){return t=Object(t),T(t,e,(function(e,n){return n in t}))}function T(t,e,n){var r=-1,a=e.length,o={};while(++r<a){var i=e[r],s=t[i];n(s,i)&&(o[i]=s)}return o}function k(t,e){return e=w(void 0===e?t.length-1:e,0),function(){var n=arguments,r=-1,a=w(n.length-e,0),o=Array(a);while(++r<a)o[r]=n[e+r];r=-1;var i=Array(e+1);while(++r<e)i[r]=n[r];return i[e]=o,f(t,this,i)}}function x(t){return j(t)||O(t)||!!(b&&t&&t[b])}function M(t){if("string"==typeof t||$(t))return t;var e=t+"";return"0"==e&&1/t==-n?"-0":e}function O(t){return B(t)&&p.call(t,"callee")&&(!v.call(t,"callee")||y.call(t)==a)}var j=Array.isArray;function C(t){return null!=t&&F(t.length)&&!A(t)}function B(t){return U(t)&&C(t)}function A(t){var e=L(t)?y.call(t):"";return e==o||e==i}function F(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}function L(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function U(t){return!!t&&"object"==typeof t}function $(t){return"symbol"==typeof t||U(t)&&y.call(t)==s}var q=k((function(t,e){return null==t?{}:_(t,d(S(e,1),M))}));t.exports=q}).call(this,n("c8ba"))},"8b2f":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("standard-form-row",{staticStyle:{"padding-bottom":"11px"},attrs:{title:"",block:""}},[n("a-radio-group",{staticStyle:{"margin-left":"16px"},on:{change:function(e){return t.handleChangeType(t.category)}},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}},[n("a-radio-button",{attrs:{value:"1"}},[t._v("普通")]),n("a-radio-button",{attrs:{value:"2"}},[t._v("隐私")])],1),"2"!==t.category||t.unlockFlag?"2"===t.category&&t.unlockFlag?n("span",[n("a-button",{staticStyle:{"margin-left":"16px"},on:{click:t.handleLock}},[t._v(" 立即上锁 ")])],1):t._e():n("a-input-search",{staticStyle:{"margin-left":"16px",width:"200px"},attrs:{type:"password",placeholder:"请输入密码"},on:{search:t.handleUnlock}},[n("a-button",{attrs:{slot:"enterButton"},slot:"enterButton"},[t._v(" 解锁 ")])],1),n("a-radio-group",{staticStyle:{"margin-left":"16px"},on:{change:function(e){return t.handleSort(t.sort)}},model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}},[n("a-radio-button",{attrs:{value:"uwsid"}},[t._v("时间")]),n("a-radio-button",{attrs:{value:"name"}},[t._v("名称")])],1),n("span",{staticStyle:{"margin-left":"16px"}},[n("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type2"],expression:"['type2']"}],staticStyle:{width:"100px"},attrs:{placeholder:"类型"},on:{change:t.handleType2}},[n("a-select-option",{attrs:{value:"0"}},[t._v("全部")]),t._l(t.myTypes,(function(e,r){return n("a-select-option",{key:r,attrs:{value:e.uwtid}},[t._v(t._s(e.name))])}))],2)],1)],1),t.isShowData?n("a-card",{staticStyle:{"margin-top":"0px"},attrs:{bordered:!0,title:""}},[n("div",{staticClass:"operate"},[n("a-button",{staticStyle:{width:"100%"},attrs:{type:"dashed",icon:"plus"},on:{click:t.handleAdd}},[t._v("添加")])],1),n("a-list",{attrs:{loading:t.loading,size:"large"}},[t._l(t.webList,(function(e,r){return n("a-list-item",{key:r,staticStyle:{"padding-top":"10px","padding-bottom":"10px"}},[n("a-list-item-meta",{attrs:{description:e.url}},[e.img?n("a-avatar",{attrs:{slot:"avatar",size:"default",shape:"square",src:e.img},slot:"avatar"}):n("a-avatar",{style:e.style||"color: #fff;backgroundColor:#2BA245;",attrs:{slot:"avatar",size:"default",shape:"square",src:e.img},slot:"avatar"},[t._v(" "+t._s(e.name.substr(0,1))+" ")]),n("a",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.name))])],1),n("div",{staticClass:"list-number"},[n("span",[t._v(t._s(e.type_name))])]),n("div",{staticClass:"list-number"},[n("a-tooltip",[n("template",{slot:"title"},[t._v(" 数字大的在前 ")]),n("span",[t._v("排序："+t._s(e.sort))])],2)],1),n("div",{staticClass:"list-view"},[n("a",{attrs:{href:e.url,target:"_blank"}},[t._v("查看")]),n("a-divider",{attrs:{type:"vertical"}}),n("a",{on:{click:function(n){return t.handleEdit(e)}}},[t._v("编辑")]),n("a-divider",{attrs:{type:"vertical"}}),n("a-popconfirm",{attrs:{title:"确定删除么？"},on:{confirm:function(n){return t.delConfirm(e.uwsid)}}},[n("a-icon",{staticStyle:{color:"red"},attrs:{slot:"icon",type:"question-circle-o"},slot:"icon"}),n("a",{attrs:{href:"#"}},[t._v("删除")])],1)],1)],1)})),n("span"),t.pageInfo.next_page_url?n("div",{staticStyle:{"text-align":"center","margin-top":"1px"},attrs:{slot:"footer"},slot:"footer"},[n("a-button",{attrs:{loading:t.loadingMore},on:{click:t.loadMore}},[t._v("加载更多")])],1):t._e()],2),n("user-web-form",{ref:"webSaveModal",attrs:{visible:t.visible,loading:t.confirmLoading,model:t.mdl,category:t.category,pMyTypes:t.myTypes},on:{cancel:t.handleCancel,ok:t.handleOk}})],1):t._e()],1)},a=[],o=(n("99af"),n("b0c0"),n("a9e3"),n("d3b7"),n("6821")),i=n.n(o),s=n("8ded"),l=n.n(s),u=n("9fb0"),c=n("d0eb"),f=n("a358"),d=n("2af9"),h={name:"WebSiteManage",components:{UserWebForm:c["a"],StandardFormRow:d["b"]},data:function(){return{token:null,webList:[],pageInfo:{},myTypes:[],loading:!1,loadingMore:!1,page:1,sort:"uwsid",visible:!1,confirmLoading:!1,type2:0,mdl:null,category:this.$route.params.category||"1",isShowData:!0}},mounted:function(){this.getToken(),this.getUnlockFlag(),this.getMyTypes(),this.getManageUserSite()},methods:{getToken:function(){this.token=l.a.get(u["a"])},handleUnlock:function(t){var e=l.a.get(u["d"]);e!==i()(t)&&this.$message.info("密码错误");var n=(new Date).getTime()+3e5;l.a.set(u["p"],n),this.unlockFlag=1,this.isShowData=!0,this.getMyTypes(),this.getManageUserSite()},handleLock:function(){l.a.remove(u["p"]),this.unlockFlag=0,this.handleChangeType("1")},getUnlockFlag:function(){var t=Number(l.a.get(u["p"])),e=(new Date).getTime();this.unlockFlag=e<t?1:0},handleSearch:function(t){this.sort="uwsid",this.page=1,this.getManageUserSite()},handleChangeType:function(t){this.category=t,this.sort="uwsid",this.page=1,this.webList=[],this.getMyTypes(),this.getManageUserSite()},handleSort:function(t){this.sort=t,this.page=1,this.webList=[],this.getManageUserSite()},handleType2:function(t){this.type2=t,this.page=1,this.webList=[],this.getManageUserSite()},handleAdd:function(){if(!this.token)return this.$message.error("请登录"),!1;this.mdl={id:0,name:"",url:"",sort:0},this.visible=!0},delConfirm:function(t){var e=this;this.loading=!0;var n={out_url:"delMySite",method:"POST",data:{uwsid:t,category:this.category}};Object(f["a"])(n).then((function(t){0===t.code&&(e.handleChangeType(e.category),e.$message.info("删除成功"))})).catch((function(t){})).finally((function(){}))},handleEdit:function(t){if(!this.token)return this.$message.error("请登录"),!1;this.mdl={id:t.uwsid,name:t.name,url:t.url,sort:t.sort},this.visible=!0},getManageUserSite:function(){var t=this;if(!this.token)return this.isShowData=!1,!1;if("2"===this.category&&!this.unlockFlag)return this.isShowData=!1,!1;this.isShowData=!0,this.loading=!0;var e={out_url:"manageUserSite",method:"POST",data:{page:this.page,sort:this.sort,type2:this.type2,category:this.category}};Object(f["a"])(e).then((function(e){0===e.code&&(t.pageInfo=e.data.list,t.webList=t.webList.concat(t.pageInfo.data))})).catch((function(t){})).finally((function(){t.loading=!1,t.loadingMore=!1}))},loadMore:function(){this.loadingMore=!0,this.page+=1,this.getManageUserSite()},getMyTypes:function(){var t=this;if(!this.token)return!1;if("2"===this.category&&!this.unlockFlag)return!1;var e={out_url:"myTypes",method:"POST",data:{category:this.category}};Object(f["a"])(e).then((function(e){if(0!==e.code)return!1;t.myTypes=e.data})).catch((function(t){}))},handleCancel:function(){this.visible=!1,this.confirmLoading=!1;this.$refs.webSaveModal.form},handleOk:function(){var t=this,e=this.$refs.webSaveModal.form;this.confirmLoading=!0,e.validateFields((function(e,n){var r="网络异常";if(e)t.confirmLoading=!1;else{var a={out_url:"saveMySite",method:"POST",data:{uwsid:n.id,category:t.category,type:n.type,name:n.name,url:n.url,sort:n.sort}};Object(f["a"])(a).then((function(e){if(0!==e.code)return t.$message.info(r+"["+e.code+"]"),!1;t.handleChangeType(t.category)})).catch((function(t){})).finally((function(){t.visible=!1,t.confirmLoading=!1}))}}))}}},g=h,p=(n("14b5"),n("2877")),y=Object(p["a"])(g,r,a,!1,null,"4600adf7",null);e["default"]=y.exports},"9a634":function(t,e){var n={utf8:{stringToBytes:function(t){return n.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(n.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n));return e},bytesToString:function(t){for(var e=[],n=0;n<t.length;n++)e.push(String.fromCharCode(t[n]));return e.join("")}}};t.exports=n},d0eb:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-modal",{attrs:{title:"编辑",width:640,visible:t.visible,confirmLoading:t.loading},on:{ok:function(){t.$emit("ok")},cancel:function(){t.$emit("cancel")}}},[n("a-spin",{attrs:{spinning:t.loading}},[n("a-form",t._b({attrs:{form:t.form}},"a-form",t.formLayout,!1),[n("a-form-item",[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id",{initialValue:0}],expression:"['id', { initialValue: 0 }]"}],attrs:{type:"hidden"}})],1),n("a-form-item",{attrs:{label:"类型"}},[n("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{initialValue:t.firstOption}],expression:"['type', { initialValue: firstOption }]"}]},t._l(t.myTypes,(function(e,r){return n("a-select-option",{key:r,attrs:{value:e.uwtid}},[t._v(t._s(e.name))])})),1)],1),n("a-form-item",{attrs:{label:"名称"}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请填写名称"}]}],expression:"['name', {rules:[{required: true, message: '请填写名称'}]}]"}]})],1),n("a-form-item",{attrs:{label:"地址"}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{rules:[{required:!0,message:"请正确填写地址"}]}],expression:"['url', {rules:[{required: true, message: '请正确填写地址'}]}]"}],attrs:{placeholder:"如：http://wwwbaidu.com/"}})],1),n("a-form-item",{attrs:{label:"排序"}},[n("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:0,rules:[{required:!1,message:"请填写数字"}]}],expression:"['sort', {initialValue: 0, rules:[{required: false, message: '请填写数字'}]}]"}]})],1)],1)],1)],1)},a=[],o=(n("4160"),n("8ded"),n("9fb0"),n("88bc")),i=n.n(o),s=(n("a358"),["id","type","name","url","sort"]),l={props:{visible:{type:Boolean,required:!0},loading:{type:Boolean,default:function(){return!1}},model:{type:Object,default:function(){return null}},category:{type:String,required:!0},pMyTypes:{type:Array,required:!0,default:function(){return[]}}},data:function(){return this.formLayout={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}}},{token:null,form:this.$form.createForm(this),myTypes:[],firstOption:0}},created:function(){var t=this;s.forEach((function(e){return t.form.getFieldDecorator(e)})),this.$watch("model",(function(){t.model&&t.form.setFieldsValue(i()(t.model,s)),t.myTypes=t.pMyTypes,t.myTypes.length>0&&(t.firstOption=t.myTypes[0].uwtid)}))},mounted:function(){},methods:{}},u=l,c=n("2877"),f=Object(c["a"])(u,r,a,!1,null,null,null);e["a"]=f.exports}}]);