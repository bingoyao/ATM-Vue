(function(e){function n(n){for(var a,c,r=n[0],i=n[1],l=n[2],s=0,d=[];s<r.length;s++)c=r[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(n);while(d.length)d.shift()();return u.push.apply(u,l||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],a=!0,c=1;c<t.length;c++){var r=t[c];0!==o[r]&&(a=!1)}a&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},c={app:0},o={app:0},u=[];function r(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-040b6ef8":"766eb9f3","chunk-1b6d8ac8":"4319f320","chunk-1cf4be60":"93894413","chunk-21820b58":"560c4636","chunk-2d0b8ee2":"5161bd57","chunk-2d0c1416":"e290e983","chunk-2d0c4647":"1d428b51","chunk-2d0e8802":"a1951c6c","chunk-4e9e4466":"ebd7cd27","chunk-54854e68":"0a0eda96","chunk-655ec148":"e727685d","chunk-7133525d":"4c83b5fb","chunk-9625f0d2":"e0962b43"}[e]+".js"}function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-21820b58":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-040b6ef8":"31d6cfe0","chunk-1b6d8ac8":"31d6cfe0","chunk-1cf4be60":"31d6cfe0","chunk-21820b58":"7b5d9c02","chunk-2d0b8ee2":"31d6cfe0","chunk-2d0c1416":"31d6cfe0","chunk-2d0c4647":"31d6cfe0","chunk-2d0e8802":"31d6cfe0","chunk-4e9e4466":"31d6cfe0","chunk-54854e68":"31d6cfe0","chunk-655ec148":"31d6cfe0","chunk-7133525d":"31d6cfe0","chunk-9625f0d2":"31d6cfe0"}[e]+".css",o=i.p+a,u=document.getElementsByTagName("link"),r=0;r<u.length;r++){var l=u[r],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===a||s===o))return n()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){l=d[r],s=l.getAttribute("data-href");if(s===a||s===o)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var a=n&&n.target&&n.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete c[e],f.parentNode.removeChild(f),t(u)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){c[e]=0})));var a=o[e];if(0!==a)if(a)n.push(a[2]);else{var u=new Promise((function(n,t){a=o[e]=[n,t]}));n.push(a[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=r(e);var d=new Error;l=function(n){s.onerror=s.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",d.name="ChunkLoadError",d.type=a,d.request=c,t[1](d)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/ATM-Vue/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var f=s;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var a=t("85ec"),c=t.n(a);c.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("el-container",{attrs:{id:"app"}},[t("el-card",{directives:[{name:"show",rawName:"v-show",value:e.allowOperate,expression:"allowOperate"}],staticStyle:{position:"fixed",top:"20px",right:"20px"},attrs:{shadow:"hover","body-style":"padding:5px;"}},[t("el-tooltip",{attrs:{placement:"bottom"}},[t("div",{attrs:{slot:"content"},slot:"content"},[e._v(e._s(e.tip))]),t("el-button",{staticStyle:{padding:"10px"},attrs:{circle:""},on:{click:function(n){return e.switchState(e.loading)}}},[t("i",{staticClass:"el-icon-s-tools",staticStyle:{"font-size":"18px"}})])],1),t("el-tooltip",{attrs:{placement:"bottom"}},[t("div",{attrs:{slot:"content"},slot:"content"},[e._v("点击查看系统日志")]),t("el-button",{staticStyle:{padding:"10px"},attrs:{circle:""},on:{click:function(n){e.showingLog=!e.showingLog}}},[t("i",{staticClass:"el-icon-document",staticStyle:{"font-size":"18px"}})])],1)],1),t("el-dialog",{attrs:{title:"系统日志",center:"",modal:!1,visible:e.showingLog,width:"90%"},on:{"update:visible":function(n){e.showingLog=n}}},[t("el-table",{staticStyle:{width:"900px"},attrs:{data:e.systemLog}},[t("el-table-column",{attrs:{property:"time",label:"时间",width:"150"}}),t("el-table-column",{attrs:{property:"accountNumber",label:"账户",width:"170"}}),t("el-table-column",{attrs:{property:"transactionType",label:"事务",width:"150"}}),t("el-table-column",{attrs:{property:"amount",label:"金额",width:"100"}}),t("el-table-column",{attrs:{property:"transTo",label:"收款人",width:"170"}})],1)],1),t("el-main",{staticStyle:{display:"flex","justify-content":"center","align-items":"center",padding:"0"}},[t("router-view")],1)],1)},o=[],u=(t("caad"),t("ac1f"),t("5319"),{name:"app",components:{},data:function(){return{showingLog:!1,loading:!1}},computed:{allowOperate:function(){return["","/","/idle"].includes(this.$route.path)},systemLog:function(){return this.$store.state.systemLog},tip:function(){return"/idle"==this.$route.path?"点击关闭ATM":"点击开启ATM"}},methods:{switchState:function(){var e=this,n=this.$loading.service({lock:!0,spinner:"el-icon-loading",background:"rgba(255, 255, 255, 0.5)"});setTimeout((function(){n.close(),"/idle"==e.$route.path?e.$router.replace({name:"unavailable"}):e.$router.replace({name:"configure"})}),1e3)}}}),r=u,i=(t("034f"),t("2877")),l=Object(i["a"])(r,c,o,!1,null,null,null),s=l.exports,d=(t("d3b7"),t("8c4f"));a["default"].use(d["a"]);var f=new d["a"]({mode:"hash",routes:[{name:"unavailable",path:"/",component:function(){return t.e("chunk-2d0c4647").then(t.bind(null,"3b46"))}},{name:"idle",path:"/idle",component:function(){return t.e("chunk-2d0b8ee2").then(t.bind(null,"317e"))}},{name:"auth",path:"/auth",component:function(){return t.e("chunk-040b6ef8").then(t.bind(null,"9cfb"))}},{name:"configure",path:"/configure",component:function(){return t.e("chunk-54854e68").then(t.bind(null,"717b"))}},{name:"transaction",path:"/transaction",component:function(){return t.e("chunk-2d0e8802").then(t.bind(null,"8a14"))},children:[{path:"",redirect:"select"},{name:"transaction-select",path:"select",component:function(){return t.e("chunk-21820b58").then(t.bind(null,"e787"))}},{name:"withdrawal",path:"withdrawal",component:function(){return t.e("chunk-655ec148").then(t.bind(null,"3820"))}},{name:"deposit",path:"deposit",component:function(){return t.e("chunk-9625f0d2").then(t.bind(null,"e396"))}},{name:"transfer",path:"transfer",component:function(){return t.e("chunk-4e9e4466").then(t.bind(null,"b7e4"))}},{name:"loan",path:"loan",component:function(){return t.e("chunk-1b6d8ac8").then(t.bind(null,"1b8c"))}},{name:"payback",path:"payback",component:function(){return t.e("chunk-7133525d").then(t.bind(null,"45f6"))}},{name:"inquiry",path:"inquiry",component:function(){return t.e("chunk-2d0c1416").then(t.bind(null,"44ee"))}},{name:"change-pin",path:"pin",component:function(){return t.e("chunk-1cf4be60").then(t.bind(null,"6903"))}}]}]}),p=(t("b0c0"),t("e25e"),t("2f62"));a["default"].use(p["a"]);var h=new p["a"].Store({state:{account:{pin:"",number:"",name:"",balances:0,telephone:"",credits:0,loan:0,loanTime:""},systemLog:[{time:"2019-11-27 11:11",accountNumber:"9090909090909090909",transactionType:"SHORT TERM-12",amount:"5000",transTo:"8080808080808080808"}],atm:{number:"T800",bankName:"",cash:0,invalidAccount:[]}},mutations:{pushPin:function(e,n){e.account.pin.length<6&&(e.account.pin+=n)},popPin:function(e){if(e.account.pin.length>0){var n=new String(e.account.pin);e.account.pin=n.substring(0,n.length-1)}},setPin:function(e,n){e.account.pin=n},clearPin:function(e){e.account.pin=""},setAccountNo:function(e,n){e.account.number=n},clearAccountNo:function(e){e.account.number=""},setAccount:function(e,n){e.account.balances=n.balances,e.account.name=n.name,e.account.telephone=n.telephone,e.account.number=n.number,e.account.credits=n.credits,e.account.pin=n.pin,e.account.bank=n.bank,e.account.loan=n.loan,e.account.loanTime=n.loanTime,e.account.createTime=n.createTime,e.account.wallet=n.wallet},clearAccount:function(e){e.account={pin:"",number:"",name:"",balances:0,telephone:"",credits:0}},pushSystemLog:function(e,n){e.systemLog.push(n)},reduceBalances:function(e,n){var t=parseInt(n),a=parseInt(e.account.balances);e.account.balances=a-t},increaseBalances:function(e,n){var t=parseInt(n),a=parseInt(e.account.balances);e.account.balances=a+t},pushInvalidAccount:function(e,n){e.atm.invalidAccount.push(n)},initATMCash:function(e,n){e.atm.cash=n},reduceCash:function(e,n){e.atm.cash>=n&&(e.atm.cash-=parseInt(n))},increaseCash:function(e,n){e.atm.cash+=parseInt(n)},loan:function(e,n){var t=n.loanAmount,a=n.loanTimeStr;e.account.balances+=parseInt(t),e.account.loan=parseInt(t),e.account.loanTime=a},payback:function(e,n){e.account.loan-=parseInt(n),e.account.balances-=parseInt(n)}},actions:{ejectCard:function(e){var n=e.commit;n("clearAccount")}}}),b=(t("be4f"),t("450d"),t("896a")),m=t.n(b),g=(t("0fb7"),t("f529")),v=t.n(g),y=(t("6611"),t("e772")),k=t.n(y),w=(t("1f1a"),t("4e4b")),T=t.n(w),S=(t("2f02"),t("fe11")),x=t.n(S),A=(t("ed7b"),t("e1a5")),O=t.n(A),L=(t("cbb5"),t("8bbc")),j=t.n(L),P=(t("fd71"),t("a447")),_=t.n(P),C=(t("f225"),t("89a9")),I=t.n(C),E=(t("5466"),t("ecdf")),N=t.n(E),$=(t("38a0"),t("ad41")),M=t.n($),B=(t("a7cc"),t("df33")),q=t.n(B),z=(t("7a0f"),t("0f6c")),D=t.n(z),H=(t("f4f9"),t("c2cc")),J=t.n(H),R=(t("e3ea"),t("7bc3")),F=t.n(R),K=(t("186a"),t("301f")),U=t.n(K),V=(t("96dc"),t("9cea")),G=t.n(V),Q=(t("acb6"),t("c673")),W=t.n(Q),X=(t("de31"),t("c69e")),Y=t.n(X),Z=(t("a673"),t("7b31")),ee=t.n(Z),ne=(t("adec"),t("3d2d")),te=t.n(ne),ae=(t("0c67"),t("299c")),ce=t.n(ae),oe=(t("aaa5"),t("a578")),ue=t.n(oe),re=(t("10cb"),t("f3ad")),ie=t.n(re),le=(t("b8e0"),t("a4c4")),se=t.n(le),de=(t("1951"),t("eedf")),fe=t.n(de);t("0fae");a["default"].use(fe.a),a["default"].use(se.a),a["default"].use(ie.a),a["default"].use(ue.a),a["default"].use(ce.a),a["default"].use(te.a),a["default"].use(ee.a),a["default"].use(Y.a),a["default"].use(W.a),a["default"].use(G.a),a["default"].use(U.a),a["default"].use(F.a),a["default"].use(J.a),a["default"].use(D.a),a["default"].use(q.a),a["default"].use(M.a),a["default"].use(N.a),a["default"].use(I.a),a["default"].use(_.a),a["default"].use(j.a),a["default"].use(O.a),a["default"].use(x.a),a["default"].use(T.a),a["default"].use(k.a),a["default"].prototype.$message=v.a,a["default"].prototype.$loading=m.a,a["default"].config.productionTip=!1,new a["default"]({router:f,store:h,render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.f09e3e47.js.map