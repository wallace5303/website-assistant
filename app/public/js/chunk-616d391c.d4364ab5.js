(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-616d391c"],{"98c3":function(e,t,n){},"9c88":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-header-index-wide"},[n("a-card",{style:{height:"100%"},attrs:{bordered:!1,bodyStyle:{padding:"16px 0",height:"100%"}}},[n("div",{staticClass:"account-settings-info-main",class:{mobile:e.isMobile}},[n("div",{staticClass:"account-settings-info-left"},[n("a-menu",{style:{border:"0",width:e.isMobile?"560px":"auto"},attrs:{mode:e.isMobile?"horizontal":"inline",selectedKeys:e.selectedKeys,type:"inner"},on:{openChange:e.onOpenChange}},[n("a-menu-item",{key:"/settings/security"},[n("router-link",{attrs:{to:{name:"SecuritySettings"}}},[e._v(" 安全设置 ")])],1)],1)],1),n("div",{staticClass:"account-settings-info-right"},[n("div",{staticClass:"account-settings-info-title"},[n("span",[e._v(e._s(e.$route.meta.title))])]),n("route-view")],1)])])],1)},o=[],a=(n("99af"),n("8ded")),u=n.n(a),s=n("9fb0"),r=n("680a"),c=n("5530"),p=n("5880"),d={computed:Object(c["a"])(Object(c["a"])({},Object(p["mapState"])({layout:function(e){return e.app.layout},navTheme:function(e){return e.app.theme},primaryColor:function(e){return e.app.color},colorWeak:function(e){return e.app.weak},fixedHeader:function(e){return e.app.fixedHeader},fixedSidebar:function(e){return e.app.fixedSidebar},contentWidth:function(e){return e.app.contentWidth},autoHideHeader:function(e){return e.app.autoHideHeader},isMobile:function(e){return e.app.isMobile},sideCollapsed:function(e){return e.app.sideCollapsed},multiTab:function(e){return e.app.multiTab}})),{},{isTopMenu:function(){return"topmenu"===this.layout}}),methods:{isSideMenu:function(){return!this.isTopMenu}}},l={components:{RouteView:r["b"]},mixins:[d],data:function(){return{token:null,mode:"inline",openKeys:[],selectedKeys:[],preview:{},option:{img:"/avatar.jpg",info:!0,size:1,outputType:"jpeg",canScale:!1,autoCrop:!0,autoCropWidth:180,autoCropHeight:180,fixedBox:!0,fixed:!0,fixedNumber:[1,1]},pageTitle:""}},mounted:function(){this.getToken(),this.updateMenu()},methods:{getToken:function(){this.token=u.a.get(s["a"])},onOpenChange:function(e){this.openKeys=e},updateMenu:function(){var e=this.$route.matched.concat();this.selectedKeys=[e.pop().path]}},watch:{$route:function(e){this.updateMenu()}}},f=l,h=(n("fba7"),n("2877")),m=Object(h["a"])(f,i,o,!1,null,"13a7fee7",null);t["default"]=m.exports},fba7:function(e,t,n){"use strict";var i=n("98c3"),o=n.n(i);o.a}}]);