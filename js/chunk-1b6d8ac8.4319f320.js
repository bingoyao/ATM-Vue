(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b6d8ac8"],{"0d03":function(t,e,n){var r=n("6eeb"),a=Date.prototype,i="Invalid Date",o="toString",c=a[o],s=a.getTime;new Date(NaN)+""!=i&&r(a,o,(function(){var t=s.call(this);return t===t?c.call(this):i}))},1148:function(t,e,n){"use strict";var r=n("a691"),a=n("1d80");t.exports="".repeat||function(t){var e=String(a(this)),n="",i=r(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},"159b":function(t,e,n){var r=n("da84"),a=n("fdbc"),i=n("17c2"),o=n("9112");for(var c in a){var s=r[c],l=s&&s.prototype;if(l&&l.forEach!==i)try{o(l,"forEach",i)}catch(u){l.forEach=i}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,a=n("b301");t.exports=a("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},"1b8c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticStyle:{width:"100%",height:"100%",display:"flex","justify-content":"center","align-items":"center"}},[t.hasLoan?n("el-card",{staticStyle:{"max-width":"80%","min-width":"700px",height:"550px"}}):0===t.step?n("el-card",{staticStyle:{"max-width":"80%","min-width":"700px",height:"550px","text-align":"center"}},[n("div",{attrs:{slot:"header"},slot:"header"},[t._v("贷款申请单")]),n("div",{staticStyle:{padding:"20px"}},[t._v("你的信用"+t._s(t.creditsDescript))]),n("div",{staticStyle:{padding:"20px"}},[n("el-row",{attrs:{gutter:5}},[n("el-col",{attrs:{span:8}},[n("div",{staticStyle:{width:"200px","text-align":"right","line-height":"40px"}},[t._v("选择贷款类型：")])]),n("el-col",{attrs:{span:16}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.loanType,callback:function(e){t.loanType=e},expression:"loanType"}},t._l(t.loanTypeOptions,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)],1),n("div",{staticStyle:{padding:"20px"}},[n("el-row",{attrs:{gutter:5}},[n("el-col",{attrs:{span:8}},[n("div",{staticStyle:{width:"200px","text-align":"right","line-height":"40px"}},[t._v("选择贷款金额：")])]),n("el-col",{attrs:{span:16}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.loanAmount,callback:function(e){t.loanAmount=e},expression:"loanAmount"}},t._l(t.loanAmountOptions,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)],1),n("div",{staticStyle:{width:"400px",margin:"0 auto",display:"flex","justify-content":"space-between","margin-top":"20px"}},[n("el-button",{attrs:{type:"danger"},nativeOn:{click:function(e){return t.goBack(e)}}},[t._v("取消")]),n("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){return t.performTransaction(e)}}},[t._v("确定")])],1)]):1===t.step?n("el-card",{staticStyle:{"max-width":"80%","min-width":"700px",height:"550px"}},[n("div",{staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[t._v("交易成功")]),n("receipt",{attrs:{receiptInfo:t.receipt}}),n("div",{staticStyle:{display:"flex",padding:"20px","justify-content":"space-between"}},[n("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){return t.goBack(e)}}},[t._v("返回")]),n("el-button",{attrs:{type:"danger"},nativeOn:{click:function(e){return t.ejectCard(e)}}},[t._v("退卡")])],1)],1):t._e()],1)},a=[],i=(n("4160"),n("fb6a"),n("ac1f"),n("38cf"),n("5319"),n("159b"),n("8251")),o=n("f336"),c={data:function(){return{hasLoan:!1,step:0,loanType:"",loanAmount:"",amount:"",receipt:[],loanTypeOptions:[{value:"SHORT TERM LOAN-12",label:"短期贷款-12个月"},{value:"SHORT TERM LOAN-6",label:"短期贷款-6个月"}],loanAmountOptions:[{value:"2000",label:"2,000"},{value:"5000",label:"5,000"},{value:"10000",label:"10,000"},{value:"20000",label:"20,000"}]}},computed:{creditsDescript:function(){var t=this.$store.state.account.credits;return t>=90?"优秀":t>=80?"良好":t>=65?"一般":"不合格"}},components:{Receipt:i["a"]},methods:{goBack:function(){this.$router.replace({name:"transaction-select"})},performTransaction:function(){var t=this;this.receipt=[];var e=new String(this.$store.state.account.number);this.$store.commit("loan",{loanAmount:new String(this.loanAmount),loanTimeStr:o["a"].timeStr()});var n=[{name:"账号",value:e.slice(0,10)+"*".repeat(6)+e.slice(16)},{name:"交易类型",value:"贷款"},{name:"金额",value:this.loanAmount},{name:"余额",value:this.$store.state.account.balances},{name:"交易时间",value:o["a"].timeStr()},{name:"终端编号",value:new String(this.$store.state.atm.number)}];n.forEach((function(e){t.receipt.push(e)})),this.$store.commit("pushSystemLog",{time:n[4].value,accountNumber:e,transactionType:"LOAN",amount:this.amount,transTo:"-"}),this.step=1},ejectCard:function(){this.$store.dispatch("ejectCard"),this.$message.info("退出成功"),this.$router.replace({name:"idle"})}}},s=c,l=n("2877"),u=Object(l["a"])(s,r,a,!1,null,"578f5b41",null);e["default"]=u.exports},"1dde":function(t,e,n){var r=n("d039"),a=n("b622"),i=n("60ae"),o=a("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"38cf":function(t,e,n){var r=n("23e7"),a=n("1148");r({target:"String",proto:!0},{repeat:a})},4160:function(t,e,n){"use strict";var r=n("23e7"),a=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"65f0":function(t,e,n){var r=n("861d"),a=n("e8b5"),i=n("b622"),o=i("species");t.exports=function(t,e){var n;return a(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?r(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},8251:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{attrs:{direction:"vertical"}},[n("el-card",{attrs:{shadow:"hover"}},[n("div",{attrs:{slot:"header"},slot:"header"},[t._v("客户回执单")]),n("el-row",{staticStyle:{width:"100%","font-family":"consolas"}},[n("el-col",{attrs:{span:24}},t._l(t.receiptInfo,(function(e){return n("el-row",{key:e.name},[n("el-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[t._v(t._s(e.name)+":")]),n("el-col",{staticStyle:{"text-align":"left"},attrs:{span:16}},[t._v(t._s(e.value))])],1)})),1)],1)],1)],1)},a=[],i={props:["receiptInfo"],methods:{}},o=i,c=n("2877"),s=Object(c["a"])(o,r,a,!1,null,null,null);e["a"]=s.exports},8418:function(t,e,n){"use strict";var r=n("c04e"),a=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var o=r(e);o in t?a.f(t,o,i(0,n)):t[o]=n}},"99af":function(t,e,n){"use strict";var r=n("23e7"),a=n("d039"),i=n("e8b5"),o=n("861d"),c=n("7b0b"),s=n("50c4"),l=n("8418"),u=n("65f0"),f=n("1dde"),p=n("b622"),d=n("60ae"),v=p("isConcatSpreadable"),h=9007199254740991,m="Maximum allowed index exceeded",y=d>=51||!a((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),g=f("concat"),b=function(t){if(!o(t))return!1;var e=t[v];return void 0!==e?!!e:i(t)},S=!y||!g;r({target:"Array",proto:!0,forced:S},{concat:function(t){var e,n,r,a,i,o=c(this),f=u(o,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?o:arguments[e],b(i)){if(a=s(i.length),p+a>h)throw TypeError(m);for(n=0;n<a;n++,p++)n in i&&l(f,p,i[n])}else{if(p>=h)throw TypeError(m);l(f,p++,i)}return f.length=p,f}})},b301:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!n||!r((function(){n.call(null,e||function(){throw 1},1)}))}},b727:function(t,e,n){var r=n("f8c2"),a=n("44ad"),i=n("7b0b"),o=n("50c4"),c=n("65f0"),s=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,u=4==t,f=6==t,p=5==t||f;return function(d,v,h,m){for(var y,g,b=i(d),S=a(b),x=r(v,h,3),w=o(S.length),L=0,T=m||c,A=e?T(d,w):n?T(d,0):void 0;w>L;L++)if((p||L in S)&&(y=S[L],g=x(y,L,b),t))if(e)A[L]=g;else if(g)switch(t){case 3:return!0;case 5:return y;case 6:return L;case 2:s.call(A,y)}else if(u)return!1;return f?-1:l||u?u:A}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},f336:function(t,e,n){"use strict";n("99af"),n("0d03");e["a"]={timeStr:function(t){var e=t?new Date(t):new Date;return"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate()," ").concat(e.getHours(),":").concat(e.getMinutes(),":").concat(e.getSeconds())}}},fb6a:function(t,e,n){"use strict";var r=n("23e7"),a=n("861d"),i=n("e8b5"),o=n("23cb"),c=n("50c4"),s=n("fc6a"),l=n("8418"),u=n("1dde"),f=n("b622"),p=f("species"),d=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!u("slice")},{slice:function(t,e){var n,r,u,f=s(this),h=c(f.length),m=o(t,h),y=o(void 0===e?h:e,h);if(i(f)&&(n=f.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?a(n)&&(n=n[p],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return d.call(f,m,y);for(r=new(void 0===n?Array:n)(v(y-m,0)),u=0;m<y;m++,u++)m in f&&l(r,u,f[m]);return r.length=u,r}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-1b6d8ac8.4319f320.js.map