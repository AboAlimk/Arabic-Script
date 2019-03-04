/*!
 *
 *		مكتبة السكربت العربي 1.19.3
 *		التاريخ: 04-03-2019
 * 		الناشر : عبدالستار الخلف
 *		AboAlimk@gmail.com
 *		https://github.com/AboAlimk/Arabic-Script
 *		
 *		تحوي Sizzle.js
 *		https://sizzlejs.com/
 *		
 *		Easing Plugin تحوي 
 *		http://gsgd.co.uk/sandbox/jquery/easing/
 *		
**/
var مدة_المؤثر_الأساسية = 500
,الوحدات
,قيمة_الأشكال_و_الأحجام_العربية
,أسماء_الأشكال_و_الأحجام_العربية
,الخصائص_العربية
,الأحداث_العربية
,الأشكال_الرقمية
,الأشكال_اللونية
,النافذة = window //! تستخدم مكان window في أي مكان
,المستند = النافذة.document //! تستخدم مكان document في أي مكان
,صحيح = true //! تستخدم مكان true في أي مكان
,خاطئ = false //! تستخدم مكان  false في أي مكان
,غير_رقمي = NaN //! تستخدم مكان  NaN في أي مكان
,لا_نهائي = Infinity //! تستخدم مكان  Infinity في أي مكان
,غير_معرف = undefined //! تستخدم مكان  undefined في أي مكان
,بدون_قيمة = null //! تستخدم مكان null في أي مكان
,متغيرات_الطلب
,متغيرات_السكربت_1
,متغيرات_السكربت_2;

( function() {

/*! Sizzle v2.3.4-pre | (c) JS Foundation and other contributors | js.foundation */
!function(e){var t,n,r,i,o,u,l,a,c,s,f,d,p,h,g,m,y,w,v,b="sizzle"+1*new Date,N=e.document,x=0,C=0,E=ae(),D=ae(),S=ae(),A=ae(),T=function(e,t){return e===t&&(f=!0),0},L={}.hasOwnProperty,I=[],q=I.pop,B=I.push,R=I.push,$=I.slice,k=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},H="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",P="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",z="\\["+M+"*("+P+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+P+"))|)"+M+"*\\]",F=":("+P+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+z+")*)|.*)\\)|)",O=new RegExp(M+"+","g"),j=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),G=new RegExp("^"+M+"*,"+M+"*"),U=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),V=new RegExp(M+"|>"),X=new RegExp(F),J=new RegExp("^"+P+"$"),K={ID:new RegExp("^#("+P+")"),CLASS:new RegExp("^\\.("+P+")"),TAG:new RegExp("^("+P+"|[*])"),ATTR:new RegExp("^"+z),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+H+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/HTML$/i,W=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){d()},ue=we(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{R.apply(I=$.call(N.childNodes),N.childNodes),I[N.childNodes.length].nodeType}catch(e){R={apply:I.length?function(e,t){B.apply(e,$.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function le(e,t,r,i){var o,l,c,s,f,h,y,w=t&&t.ownerDocument,x=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==x&&9!==x&&11!==x)return r;if(!i&&((t?t.ownerDocument||t:N)!==p&&d(t),t=t||p,g)){if(11!==x&&(f=_.exec(e)))if(o=f[1]){if(9===x){if(!(c=t.getElementById(o)))return r;if(c.id===o)return r.push(c),r}else if(w&&(c=w.getElementById(o))&&v(t,c)&&c.id===o)return r.push(c),r}else{if(f[2])return R.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return R.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!A[e+" "]&&(!m||!m.test(e))&&(1!==x||"object"!==t.nodeName.toLowerCase())){if(y=e,w=t,1===x&&V.test(e)){(s=t.getAttribute("id"))?s=s.replace(re,ie):t.setAttribute("id",s=b),l=(h=u(e)).length;while(l--)h[l]="#"+s+" "+ye(h[l]);y=h.join(","),w=ee.test(e)&&ge(t.parentNode)||t}try{return R.apply(r,w.querySelectorAll(y)),r}catch(t){A(e,!0)}finally{s===b&&t.removeAttribute("id")}}}return a(e.replace(j,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function ce(e){return e[b]=!0,e}function se(e){var t=p.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function de(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pe(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ue(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return ce(function(t){return t=+t,ce(function(n,r){var i,o=e([],n.length,t),u=o.length;while(u--)n[i=o[u]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&void 0!==e.getElementsByTagName&&e}n=le.support={},o=le.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Q.test(t||n&&n.nodeName||"HTML")},d=le.setDocument=function(e){var t,i,u=e?e.ownerDocument||e:N;return u!==p&&9===u.nodeType&&u.documentElement?(p=u,h=p.documentElement,g=!o(p),N!==p&&(i=p.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",oe,!1):i.attachEvent&&i.attachEvent("onunload",oe)),n.attributes=se(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=se(function(e){return e.appendChild(p.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Z.test(p.getElementsByClassName),n.getById=se(function(e){return h.appendChild(e).id=b,!p.getElementsByName||!p.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&g)return t.getElementsByClassName(e)},y=[],m=[],(n.qsa=Z.test(p.querySelectorAll))&&(se(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||m.push("\\["+M+"*(?:value|"+H+")"),e.querySelectorAll("[id~="+b+"-]").length||m.push("~="),e.querySelectorAll(":checked").length||m.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||m.push(".#.+[+~]")}),se(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=p.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")})),(n.matchesSelector=Z.test(w=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&se(function(e){n.disconnectedMatch=w.call(e,"*"),w.call(e,"[s!='']:x"),y.push("!=",F)}),m=m.length&&new RegExp(m.join("|")),y=y.length&&new RegExp(y.join("|")),t=Z.test(h.compareDocumentPosition),v=t||Z.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},T=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===p||e.ownerDocument===N&&v(N,e)?-1:t===p||t.ownerDocument===N&&v(N,t)?1:s?k(s,e)-k(s,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,u=[e],l=[t];if(!i||!o)return e===p?-1:t===p?1:i?-1:o?1:s?k(s,e)-k(s,t):0;if(i===o)return de(e,t);n=e;while(n=n.parentNode)u.unshift(n);n=t;while(n=n.parentNode)l.unshift(n);while(u[r]===l[r])r++;return r?de(u[r],l[r]):u[r]===N?-1:l[r]===N?1:0},p):p},le.matches=function(e,t){return le(e,null,null,t)},le.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&d(e),n.matchesSelector&&g&&!A[t+" "]&&(!y||!y.test(t))&&(!m||!m.test(t)))try{var r=w.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){A(t,!0)}return le(t,p,null,[e]).length>0},le.contains=function(e,t){return(e.ownerDocument||e)!==p&&d(e),v(e,t)},le.attr=function(e,t){(e.ownerDocument||e)!==p&&d(e);var i=r.attrHandle[t.toLowerCase()],o=i&&L.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},le.escape=function(e){return(e+"").replace(re,ie)},le.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},le.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,s=!n.sortStable&&e.slice(0),e.sort(T),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return s=null,e},i=le.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=le.selectors={cacheLength:50,createPseudo:ce,match:K,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||le.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&le.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return K.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=u(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=le.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(O," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),u="last"!==e.slice(-4),l="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,a){var c,s,f,d,p,h,g=o!==u?"nextSibling":"previousSibling",m=t.parentNode,y=l&&t.nodeName.toLowerCase(),w=!a&&!l,v=!1;if(m){if(o){while(g){d=t;while(d=d[g])if(l?d.nodeName.toLowerCase()===y:1===d.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[u?m.firstChild:m.lastChild],u&&w){v=(p=(c=(s=(f=(d=m)[b]||(d[b]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]||[])[0]===x&&c[1])&&c[2],d=p&&m.childNodes[p];while(d=++p&&d&&d[g]||(v=p=0)||h.pop())if(1===d.nodeType&&++v&&d===t){s[e]=[x,p,v];break}}else if(w&&(v=p=(c=(s=(f=(d=t)[b]||(d[b]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]||[])[0]===x&&c[1]),!1===v)while(d=++p&&d&&d[g]||(v=p=0)||h.pop())if((l?d.nodeName.toLowerCase()===y:1===d.nodeType)&&++v&&(w&&((s=(f=d[b]||(d[b]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]=[x,v]),d===t))break;return(v-=i)===r||v%r==0&&v/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||le.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?ce(function(e,n){var r,o=i(e,t),u=o.length;while(u--)e[r=k(e,o[u])]=!(n[r]=o[u])}):function(e){return i(e,0,n)}):i}},pseudos:{not:ce(function(e){var t=[],n=[],r=l(e.replace(j,"$1"));return r[b]?ce(function(e,t,n,i){var o,u=r(e,null,i,[]),l=e.length;while(l--)(o=u[l])&&(e[l]=!(t[l]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:ce(function(e){return function(t){return le(e,t).length>0}}),contains:ce(function(e){return e=e.replace(te,ne),function(t){return(t.textContent||i(t)).indexOf(e)>-1}}),lang:ce(function(e){return J.test(e||"")||le.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:pe(!1),disabled:pe(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return W.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n>t?t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=function(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}(t);function me(){}me.prototype=r.filters=r.pseudos,r.setFilters=new me,u=le.tokenize=function(e,t){var n,i,o,u,l,a,c,s=D[e+" "];if(s)return t?0:s.slice(0);l=e,a=[],c=r.preFilter;while(l){n&&!(i=G.exec(l))||(i&&(l=l.slice(i[0].length)||l),a.push(o=[])),n=!1,(i=U.exec(l))&&(n=i.shift(),o.push({value:n,type:i[0].replace(j," ")}),l=l.slice(n.length));for(u in r.filter)!(i=K[u].exec(l))||c[u]&&!(i=c[u](i))||(n=i.shift(),o.push({value:n,type:u,matches:i}),l=l.slice(n.length));if(!n)break}return t?l.length:l?le.error(e):D(e,a).slice(0)};function ye(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function we(e,t,n){var r=t.dir,i=t.next,o=i||r,u=n&&"parentNode"===o,l=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||u)return e(t,n,i);return!1}:function(t,n,a){var c,s,f,d=[x,l];if(a){while(t=t[r])if((1===t.nodeType||u)&&e(t,n,a))return!0}else while(t=t[r])if(1===t.nodeType||u)if(f=t[b]||(t[b]={}),s=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((c=s[o])&&c[0]===x&&c[1]===l)return d[2]=c[2];if(s[o]=d,d[2]=e(t,n,a))return!0}return!1}}function ve(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)le(e,t[r],n);return n}function Ne(e,t,n,r,i){for(var o,u=[],l=0,a=e.length,c=null!=t;l<a;l++)(o=e[l])&&(n&&!n(o,r,i)||(u.push(o),c&&t.push(l)));return u}function xe(e,t,n,r,i,o){return r&&!r[b]&&(r=xe(r)),i&&!i[b]&&(i=xe(i,o)),ce(function(o,u,l,a){var c,s,f,d=[],p=[],h=u.length,g=o||be(t||"*",l.nodeType?[l]:l,[]),m=!e||!o&&t?g:Ne(g,d,e,l,a),y=n?i||(o?e:h||r)?[]:u:m;if(n&&n(m,y,l,a),r){c=Ne(y,p),r(c,[],l,a),s=c.length;while(s--)(f=c[s])&&(y[p[s]]=!(m[p[s]]=f))}if(o){if(i||e){if(i){c=[],s=y.length;while(s--)(f=y[s])&&c.push(m[s]=f);i(null,y=[],c,a)}s=y.length;while(s--)(f=y[s])&&(c=i?k(o,f):d[s])>-1&&(o[c]=!(u[c]=f))}}else y=Ne(y===u?y.splice(h,y.length):y),i?i(null,u,y,a):R.apply(u,y)})}function Ce(e){for(var t,n,i,o=e.length,u=r.relative[e[0].type],l=u||r.relative[" "],a=u?1:0,s=we(function(e){return e===t},l,!0),f=we(function(e){return k(t,e)>-1},l,!0),d=[function(e,n,r){var i=!u&&(r||n!==c)||((t=n).nodeType?s(e,n,r):f(e,n,r));return t=null,i}];a<o;a++)if(n=r.relative[e[a].type])d=[we(ve(d),n)];else{if((n=r.filter[e[a].type].apply(null,e[a].matches))[b]){for(i=++a;i<o;i++)if(r.relative[e[i].type])break;return xe(a>1&&ve(d),a>1&&ye(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(j,"$1"),n,a<i&&Ce(e.slice(a,i)),i<o&&Ce(e=e.slice(i)),i<o&&ye(e))}d.push(n)}return ve(d)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,u,l,a,s){var f,h,m,y=0,w="0",v=o&&[],b=[],N=c,C=o||i&&r.find.TAG("*",s),E=x+=null==N?1:Math.random()||.1,D=C.length;for(s&&(c=u===p||u||s);w!==D&&null!=(f=C[w]);w++){if(i&&f){h=0,u||f.ownerDocument===p||(d(f),l=!g);while(m=e[h++])if(m(f,u||p,l)){a.push(f);break}s&&(x=E)}n&&((f=!m&&f)&&y--,o&&v.push(f))}if(y+=w,n&&w!==y){h=0;while(m=t[h++])m(v,b,u,l);if(o){if(y>0)while(w--)v[w]||b[w]||(b[w]=q.call(a));b=Ne(b)}R.apply(a,b),s&&!o&&b.length>0&&y+t.length>1&&le.uniqueSort(a)}return s&&(x=E,c=N),v};return n?ce(o):o}l=le.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=u(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},a=le.select=function(e,t,n,i){var o,a,c,s,f,d="function"==typeof e&&e,p=!i&&u(e=d.selector||e);if(n=n||[],1===p.length){if((a=p[0]=p[0].slice(0)).length>2&&"ID"===(c=a[0]).type&&9===t.nodeType&&g&&r.relative[a[1].type]){if(!(t=(r.find.ID(c.matches[0].replace(te,ne),t)||[])[0]))return n;d&&(t=t.parentNode),e=e.slice(a.shift().value.length)}o=K.needsContext.test(e)?0:a.length;while(o--){if(c=a[o],r.relative[s=c.type])break;if((f=r.find[s])&&(i=f(c.matches[0].replace(te,ne),ee.test(a[0].type)&&ge(t.parentNode)||t))){if(a.splice(o,1),!(e=i.length&&ye(a)))return R.apply(n,i),n;break}}}return(d||l(e,p))(i,t,!g,n,!t||ee.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(T).join("")===b,n.detectDuplicates=!!f,d(),n.sortDetached=se(function(e){return 1&e.compareDocumentPosition(p.createElement("fieldset"))}),se(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&se(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),se(function(e){return null==e.getAttribute("disabled")})||fe(H,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null});var De=e.Sizzle;le.noConflict=function(){return e.Sizzle===le&&(e.Sizzle=De),le},"function"==typeof define&&define.amd?define(function(){return le}):"undefined"!=typeof module&&module.exports?module.exports=le:e.Sizzle=le}(window);

//! الوحدات المدعومة
الوحدات = [
	"cm"
	, "mm"
	, "in"
	, "px"
	, "pt"
	, "pc"
	, "em"
	, "ex"
	, "%"
];

//! القيم المدعومة
قيمة_الأشكال_و_الأحجام_العربية = {
	بكسل : "px"
	,سم : "cm"
	,مم : "mm"
	,انش : "in"
	,نقطة : "pt"
	,بيكاس : "pc"
	,اي_ام : "em"
	,اي_اكس : "ex"
	,أصفر : "Yellow"
	,أبيض : "White"
	,فضي : "Silver"
	,أحمر : "Red"
	,أرجواني : "Purple"
	,زهري : "Pink"
	,برتقالي : "Orange"
	,زيتوني : "Olive"
	,أخضر : "Green"
	,رمادي : "Grey"
	,ذهبي : "Gold"
	,بني : "Brown"
	,أزرق : "Blue"
	,أسود : "Black"
};

//! أسماء الستايل المدعومة
أسماء_الأشكال_و_الأحجام_العربية = {
	لون_الخلفية : "background-color"
	,صورة_الخلفية : "background-image"
	,اللون : "color"
	,الاتجاه : "direction"
	,حجم_الخط : "font-size"
	,الإرتفاع : "height"
	,العرض : "width"
	,الشفافية : "opacity"
	,تموضع_الخلفية : "background-position"
	,الحد : "border"
	,يمين : "right"
	,يسار : "left"
	,أعلى : "top"
	,أسفل : "bottom"
	,المؤشر : "cursor"
	,طريقة_العرض : "display"
	,سماكة_الخط : "font-weight"
	,إرتفاع_السطر : "line-height"
	,الهامش : "margin"
	,التباعد : "padding"
	,أشرطة_التمرير : "overflow"
	,التموضع : "position"
	,تموضع_النص : "text-align"
};

//! خصائص العنصر
الخصائص_العربية = {
	معطل : "disabled"
	,العنوان : "title"
	,الأنماط : "class"
	,الشكل : "style"
	,مطلوب : "required"
	,للقراءة : "readonly"
};

//! أحداث العناصر
الأحداث_العربية = {
	إرسال : "submit"
	,فأرة_أسفل : "mousedown"
	,فأرة_دخول : "mouseenter"
	,فأرة_مغادرة : "mouseleave"
	,فأرة_تحريك : "mousemove"
	,فأرة_خارج : "mouseout"
	,فأرة_فوق : "mouseover"
	,فأرة_أعلى : "mouseup"
	,مفتاح_أسفل : "keydown"
	,مفتاح_ضفط : "keypress"
	,مفتاح_أعلى : "keyup"
	,تركيز : "focus"
	,نقرة : "click"
	,تغيير : "change"
	,فقدان_التركيز : "blur"
	,نقرة_يمين : "contextmenu"
	,نقرة_مزدوجة : "dblclick"
	,تمرير : "scroll"
	,تغيير_الحجم : "resize"
	,أجاكس_قبل_الإرسال : "أجاكس_قبل_الإرسال"
	,أجاكس_نجاح : "أجاكس_نجاح"
	,أجاكس_خطأ : "أجاكس_خطأ"
	,أجاكس_إكتمال : "أجاكس_إكتمال"
	,أجاكس_إنتهاء_المهلة : "أجاكس_إنتهاء_المهلة"
};

//! أنواع الستايل التي تكون قيمتها رقم
الأشكال_الرقمية = [
	"width"
	,"height"
	,"padding"
	,"padding-right"
	,"padding-left"
	,"padding-top"
	,"padding-bottom"
	,"margin"
	,"margin-right"
	,"margin-left"
	,"margin-top"
	,"margin-bottom"
	,"border-width"
	,"border-right-width"
	,"border-left-width"
	,"border-top-width"
	,"border-bottom-width"
	,"font-size"
	,"line-height"
	,"right"
	,"left"
	,"top"
	,"bottom"
	,"opacity"
];

//! أنواع الستايل التي تكون لون
الأشكال_اللونية = [
	"background-color"
	,"color"
	,"border-color"
	,"border-right-color"
	,"border-left-color"
	,"border-top-color"
	,"border-bottom-color"
	,"outline-color"
];

//! العملية الأساسية للسكربت العربي
function ع( الطلب ){
	if (النافذة === this) {
		return new ع( الطلب );
	}
	var العناصر = []
	, حول = {
		الإصدار : "1.19.3"
		,الاسم : "السكربت العربي"
		,الناشر : "عبدالستار الخلف"
		,التاريخ : "04-03-2019"
	}
	,مصفوفة_العناصر;
	this.حول = حول;
	if ( ع.هل_المتغير_نافذة( الطلب ) || ع.هل_المتغير_مستند( الطلب ) || ع.هل_المتغير_عنصر( الطلب ) ) {
		العناصر.push( الطلب );
	} else {
		مصفوفة_العناصر = جلب_العناصر(الطلب);
		العناصر = مصفوفة_العناصر;
	}
	this.العناصر = العناصر;
	return this;
};

//! مطابقة العناصر المطلوبة بواسطة Sizzle
function جلب_العناصر( الطلب , العنصر ) {
	if ( ع.هل_المتغير_نص( الطلب ) ) {
		الطلب = ع.استبدال_الكل( الطلب , "،" , "," );
		ع.كل( متغيرات_الطلب , function( الكلمة , المتغيرات ) {
			الطلب = استبدال_الطلب( الطلب , الكلمة , ":" , المتغيرات[ "الحرف_بعد" ] , المتغيرات[ "الكلمة_الأساسية" ] )
		} );
	}
	return Sizzle( الطلب , العنصر );
}

function ايجاد_الحرف_السابق( النص , الموضع_الأساسي ){
	var الأحرف_الغير_مقبولة = [ " " , "\t" , "\n" , "\r" ]
	,الموضع = الموضع_الأساسي
	,الحرف = null;
	while( الأحرف_الغير_مقبولة.indexOf( النص [ الموضع - 1 ] ) !== -1 && الموضع >= 1 ){
		الموضع--;
	}
	الحرف = النص[الموضع-1] || " ";
	return الحرف;
}

function ايجاد_الحرف_التالي( النص , الموضع_الأساسي ){
	var الأحرف_الغير_مقبولة = [ " " , "\t" , "\n" , "\r" ]
	,الموضع = الموضع_الأساسي
	,الحرف = null;
	while( الأحرف_الغير_مقبولة.indexOf( النص [ الموضع ] ) !== -1 && الموضع <= النص.length - 1 ){
		الموضع++;
	}
	الحرف = النص[الموضع] || " ";
	return الحرف;
}

متغيرات_الطلب = {
	يحوي : {
		الكلمة_الأساسية : "contains"
		,الحرف_بعد : [ ")" , "(" , " " , "\t" , "," , "\n" , "\r" ]
	}
	, ليس : {
		الكلمة_الأساسية : "not"
		,الحرف_بعد : [ ")" , "(" , " " , "\t" , "," , "\n" , "\r" ]
	}
	, يملك : {
		الكلمة_الأساسية : "has"
		,الحرف_بعد : [ ")" , "(" , " " , "\t" , "," , "\n" , "\r" ]
	}
	, الأول : {
		الكلمة_الأساسية : "first"
		,الحرف_بعد : [ " " , "\t" , "," , "\n" , "\r" ]
	}
	, الأخير : {
		الكلمة_الأساسية : "last"
		,الحرف_بعد : [ " " , "\t" , "," , "\n" , "\r" ]
	}
	, زوجي : {
		الكلمة_الأساسية : "even"
		,الحرف_بعد : [ " " , "\t" , "," , "\n" , "\r" ]
	}
	, فردي : {
		الكلمة_الأساسية : "odd"
		,الحرف_بعد : [ " " , "\t" , "," , "\n" , "\r" ]
	}
	, مدخلات : {
		الكلمة_الأساسية : "input"
		,الحرف_بعد : [ " " , "\t" , "," , "\n" , "\r" ]
	}
	, نص : {
		الكلمة_الأساسية : "text"
		,الحرف_بعد : [ " " , "\t" , "," , "\n" , "\r" ]
	}
	, إختيار : {
		الكلمة_الأساسية : "checkbox"
		,الحرف_بعد : [ " " , "\t" , "," , "\n" , "\r" ]
	}
	, ملف : {
		الكلمة_الأساسية : "file"
		,الحرف_بعد : [ " " , "\t" , "," , "\n" , "\r" ]
	}
	, كلمة_مرور : {
		الكلمة_الأساسية : "password"
		,الحرف_بعد : [ " " , "\t" , "," , "\n" , "\r" ]
	}
	, إرسال : {
		الكلمة_الأساسية : "submit"
		,الحرف_بعد : [ " " , "\t" , "," , "\n" , "\r" ]
	}
	, صورة : {
		الكلمة_الأساسية : "image"
		,الحرف_بعد : [ " " , "\t" , "," , "\n" , "\r" ]
	}
	, إعادة_تعيين : {
		الكلمة_الأساسية : "reset"
		,الحرف_بعد : [ " " , "\t" , "," , "\n" , "\r" ]
	}
	, زر : {
		الكلمة_الأساسية : "button"
		,الحرف_بعد : [ " " , "\t" , "," , "\n" , "\r" ]
	}
	, ترويسة : {
		الكلمة_الأساسية : "header"
		,الحرف_بعد : [ " " , "\t" , "," , "\n" , "\r" ]
	}
};

function استبدال_الطلب( الكود , الكلمة , الحرف_قبل , الحرف_بعد , الكلمة_الأساسية ) {
	var النص = الكود;
	while(
		النص.indexOf( الكلمة ) !== -1
		&&
		الحرف_قبل.indexOf( ايجاد_الحرف_السابق( النص , النص.indexOf( الكلمة ) ) ) !== -1
		&&
		الحرف_بعد.indexOf( ايجاد_الحرف_التالي( النص , النص.indexOf( الكلمة ) + الكلمة.length )) !== -1
	) {
		النص = النص.replace( الكلمة , الكلمة_الأساسية );
	}
	return النص;
}

//! تستخدم لتنفيذ العمليات على
//! array , object
ع.كل = function( العنصر , العملية ) {
	var ن = 0
	,العدد;
	if( typeof العملية === "function" && typeof العملية.nodeType !== "number" ){
		if ( Array.isArray( العنصر ) || العنصر.length ) {
			العدد = العنصر.length;
			for ( ; ن < العدد ; ن++ ) {
				if ( العملية.call( العنصر[ ن ], ن, العنصر[ ن ] ) === خاطئ ) {
					break;
				}
			}
		} else {
			for ( ن in العنصر ) {
				if ( العملية.call( العنصر[ ن ], ن, العنصر[ ن ] ) === خاطئ ) {
					break;
				}
			}
		}
	}
	return العنصر;
};

ع.كل({
	
	//! إذا كان المتغير array
	هل_المتغير_مصفوفة : function( العنصر ) {
		return Array.isArray( العنصر );
	},
	
	//! إذا كان المتغير object
	هل_المتغير_مصفوفة_موضوعية : function( العنصر ) {
		return typeof العنصر === "object" && العنصر != null;
	},
	
	//! إذا كان المتغير function
	هل_المتغير_عملية : function( العنصر ) {
		return typeof العنصر === "function" && typeof العنصر.nodeType !== "number";
	},
	
	//! إذا كان المتغير رقم
	هل_المتغير_رقم : function( العنصر ) {
		return !isNaN( parseFloat( العنصر ) ) && isFinite( العنصر );
	},
	
	//! إستخراج الرقم من النصوص
	جلب_الرقم : function( العنصر ) {
		return parseInt( العنصر ) || 0;
	},
	
	//! إستخراج الرقم مع الفواصل العشرية من النصوص
	جلب_الرقم_مع_فواصل : function( العنصر ) {
		return parseFloat( العنصر );
	},
	
	//! توليد نص عشوائي
	توليد_نص : function( الحجم = 25 ) {
		var النص = ""
		,النص_المتاح = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
		,ن = 0;
		for ( ; ن < الحجم; ن++){
			النص += النص_المتاح.charAt(Math.floor(Math.random() * النص_المتاح.length));
		}
		return النص;
	},
	
	//! توليد رقم عشوائي
	توليد_رقم : function( الحجم = 25 ) {
		var النص = ""
		,النص_المتاح = "0123456789"
		,ن = 0;
		for ( ; ن < الحجم; ن++){
			النص += النص_المتاح.charAt(Math.floor(Math.random() * النص_المتاح.length));
		}
		return ع.جلب_الرقم( النص );
	},
	
	//! استبدال كل المطابقات في النصوص
	استبدال_الكل : function ( النص , البحث , الإستبدال ) {
		return النص.replace( new RegExp( البحث , 'g' ), الإستبدال );
	},
	
	//! إذا كان المتغير window
	هل_المتغير_نافذة : function ( العنصر ) {
		return العنصر != null && العنصر === العنصر.النافذة;
	},
	
	//! إذا كان المتغير document
	هل_المتغير_مستند : function ( العنصر ) {
		return العنصر != null && العنصر instanceof HTMLDocument;
	},
	
	//! إذا كان المتغير عنصر HTML
	هل_المتغير_عنصر : function ( العنصر ) {
		return العنصر != null && العنصر instanceof HTMLElement && العنصر.nodeType === 1;
	},
	
	//! إذا كان المتغير نص
	هل_المتغير_نص : function ( العنصر ) {
		return العنصر != null && typeof العنصر === "string";
	},
	
	//! إذا كان المتغير لون
	//! #000 , #000000 , rgb(0,0,0)
	هل_المتغير_لون : function ( المتغير ) {
		var إختبار_1 = /^(#[0-9A-F]{3})|(#[0-9A-F]{6})$/i
		,إختبار_2 = /^rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)$/
		,قيم_اللون
		,اللون;
		if ( إختبار_1.test( المتغير ) ) {
			return صحيح;
		} else if ( إختبار_2.test( المتغير ) ) {
			قيم_اللون =  المتغير.replace( /(\s)|(rgb\()|(\))/g , '' ).split( "," ).map( Number );
			اللون;
			for ( اللون of قيم_اللون ) {
				if ( اللون < 0 || اللون > 255 ) {
					return خاطئ;
				}
			}
			return صحيح;
		}
		return خاطئ;
	},
	
	//! إحضار قيم rgb للون
	//! [255,255,255]
	إحضار_قيم_اللون : function ( اللون ) {
		var قيم_اللون = [];
		اللون = "" + اللون;
		اللون = اللون.toLowerCase();
		if ( !ع.هل_المتغير_لون( اللون ) || اللون.substring( 0 , 4 ) === "rgba(" && اللون.substring( اللون.length - 1 ) === ")" ) {
			return خاطئ;
		}
		
		//! إذا كان اللون hex
		if ( اللون.substring( 0 , 1 ) === "#" && ( اللون.length ===4 || اللون.length ===7 ) ) {
			
			//! حذف أول خانة من اللون
			//! #000		=>		000
			//! #000000	=>		000000
			اللون = اللون.slice(1);
			if ( اللون.length === 3 ) {
				ع.كل( اللون.split("") ,function ( الرقم , الخانة ) {
					قيم_اللون.push( parseInt( الخانة + الخانة , 16) );
				} );
			} else {
				ع.كل( اللون.split("") ,function ( الرقم ) {
					if ( الرقم % 2 === 0 ) {
						قيم_اللون.push( parseInt( اللون[ الرقم ] + اللون[ الرقم + 1 ] , 16 ) );
					}
				} );
			}
			
		//! إذا كان اللون rgb
		} else if ( اللون.substring( 0 , 4 ) === "rgb(" && اللون.substring( اللون.length - 1 ) === ")" ) {
			قيم_اللون = اللون.replace( "rgb(" , "" ).replace( ")" , "" ).split( " " ).join( "" ).split( "," ).map( function ( الرقم ) { return parseInt( الرقم ); } );
		}
		return قيم_اللون;
	},
	
	//! البحث عن لون الخاصية الأساسي للنعصر
	//! يتم البحث في الأصل ما لم يتم ايجاد اللون حتى الوصول إلى body
	إحضار_قيم_اللون_للأصل : function ( العنصر , الخاصية ) {
		var قيم_اللون_الأساسي = ع.إحضار_قيم_اللون(ع(العنصر).الشكل( الخاصية ));
		while( قيم_اللون_الأساسي === خاطئ && العنصر !== null ){
			العنصر = ع(العنصر).الأصل().جلب(0);
			قيم_اللون_الأساسي = ع.إحضار_قيم_اللون(ع(العنصر).الشكل( الخاصية ));
		}
		return !قيم_اللون_الأساسي ? [ 0 , 0 , 0 ] : قيم_اللون_الأساسي;
	},
	
	//! إذا كان العنصر يحوي عنصر آخر
	هل_يحوي_العنصر : function ( الأصل , العنصر ) {
		return Sizzle.contains( الأصل, العنصر );
	},
	//! تحويل المصفوفة بنوعيها إلى نص متسلسل
	تسلسل : function ( المصفوفة ) {
		var النص = المصفوفة;
		if ( ع.هل_المتغير_مصفوفة( المصفوفة ) || ع.هل_المتغير_مصفوفة_موضوعية( المصفوفة ) ) {
			النص = "";
			ع.كل( المصفوفة , function ( الموضع , القيمة ) {
				if ( النص ) {
					النص += "&";
				}
				النص += الموضع + "=" + القيمة;
			} );
		}
		return النص;
	},
	
	//! إذا كان المتغير json
	هل_المتغير_جي_سون : function ( النص ) {
		if ( !النص || !ع.هل_المتغير_نص( النص ) ) {
			return خاطئ;
		}
		try {
			JSON.parse( النص );
		} catch (e) {
			return خاطئ;
		}
		return صحيح;
	},
	
	//! تحويل النص إلى json
	تحويل_إلى_جي_سون : function ( النص ) {
		if ( !النص || !ع.هل_المتغير_نص( النص ) ) {
			return خاطئ;
		}
		try {
			return JSON.parse( النص );
		} catch (e) {
			return خاطئ;
		}
		return "";
	},
	
	//! تحويل النص إلى xml
	تحويل_إلى_اكس_ام_ال : function ( النص ) {
		if ( !النص || !ع.هل_المتغير_نص( النص ) ) {
			return خاطئ;
		}
		try {
			return ( new النافذة.DOMParser() ).parseFromString( النص, "text/xml" );
		} catch ( e ) {
			return خاطئ;
		}
		return "";
	},
	
	//! عملية الوقت للاستغناء عن Date
	الوقت : function ( المطلوب ) {
		var الوقت = new Date()
		
		//! وضع كل القيم المطلوبة في مصفوفة
		,مصفوفة_الوقت = {
			الثانية : الوقت.getSeconds()
			,الدقيقة : الوقت.getMinutes()
			,الساعة : الوقت.getHours()
			,رقم_اليوم : الوقت.getDate()
			,اسم_اليوم : جلب_اسم_اليوم( الوقت.getDay() )
			,رقم_الشهر : الوقت.getMonth() + 1
			,اسم_الشهر : جلب_اسم_الشهر( الوقت.getDay() )
			,السنة : الوقت.getFullYear()
			,الزمن_ميللي : الوقت.getTime()
			,الزمن_ثانية : ع.جلب_الرقم(الوقت.getTime() / 1000)
			,الوقت : الوقت
		}
		,مصفوفة_الإرجاع;
		if ( ع.هل_المتغير_نص( المطلوب ) ) {
			
			//! إذا كان المطلوب عنصر واحد يتم إرجاع قيمته
			return مصفوفة_الوقت[ المطلوب ] || "";
		} else if ( ع.هل_المتغير_مصفوفة( المطلوب ) ) {
			
			//! إذا كان المطلوب مصفوفة يتم إرجاع كل القيم المطلوية
			مصفوفة_الإرجاع = {};
			ع.كل( المطلوب , function ( الرقم , العنصر ) {
				مصفوفة_الإرجاع[ العنصر ] = مصفوفة_الوقت[ العنصر ];
			} );
			return مصفوفة_الإرجاع;
		}
		
		//! إذا كان المطلوب فارغ يتم إرجاع الوقت الكامل
		return الوقت;
	},
	
	//! جافا سكربت alert
	تنبيه : function ( النص ) {
		return alert( النص );
	},
	
	//! جافا سكربت confirm
	تأكيد : function ( النص ) {
		return confirm( النص );
	},
	
	//! جافا سكربت prompt
	تنبيه_نص : function ( النص , القيمة ) {
		return prompt( النص , القيمة );
	},
	
	//! جافا سكربت console.log
	طباعة : function ( النص ) {
		return console.log( النص );
	},
	
	//! جافا سكربت location.hash
	الهاش : function ( النص ) {
		if ( النص ) {
			location.hash = النص;
		} else {
			return location.hash;
		}
	},
	
	//! جافا سكربت location.href
	الرابط : function ( النص ) {
		if ( النص ) {
			location.href = النص;
		} else {
			return location.href;
		}
	},
	
	//! لمعرفة إذا كان التصفح من هاتف
	هل_التصفح_من_هاتف : function () {
		var كود_المتصفح = navigator.userAgent.toLowerCase();
		if ( كود_المتصفح.indexOf( "mobi" ) !== -1 ) {
			return صحيح;
		}
		return خاطئ;
	},
	//! إضافة الأحداث المخصصة
	إضافة_حدث_مخصص : function ( الاسم , العملية ) {
		ع.الأحداث_المخصصة[ الاسم ] = العملية;
		ع.prototype[ الاسم ] = function ( العملية_المطلوبة ) {
			ع.كل( this.العناصر , function( الرقم , العنصر ) {
				إضافة_حدث( العنصر , {
					الحدث : الاسم
					,العملية : العملية_المطلوبة
				} );
				ع.الأحداث_المخصصة[ الاسم ]( العنصر );
			} );
			return this;
		}
	},
	
	//! تشغيل الأحداث المخصصة
	محاكاة_حدث_مخصص : function ( العنصر , الحدث , البيانات ) {
		محاكاة_حدث_مخصص( العنصر , الحدث , البيانات );
	}
	
}, function ( الاسم , العملية ) {
	ع[ الاسم ] = العملية;
} );

//! جلب اسم اليوم باللغة العربية
function جلب_اسم_اليوم( الرقم ) {
	return [ "الأحد" , "الإثنين" , "الثلاثاء" , "الأربعاء" , "الخميس" , "الجمعة" , "السبت" ][ الرقم ];
}

//! جلب اسم الشهر باللغة العربية
function جلب_اسم_الشهر( الرقم ) {
	return [ "كانون الثاني" , "شباط" , "آذار" , "نيسان" , "أيار" , "حزيران" , "تموز" , "آب" , "أيلول" , "تشرين الأول" , "تشرين الثاني" , "كانون الأول" ][ الرقم ];
}

//! صيغ المؤثرات المستخدمة في ع().مؤثرات() لتغيير ستايل العنصر
//! http://gsgd.co.uk/sandbox/jquery/easing/
ع.صيغة_المؤثرات = {
	easeInQuad: function (t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (t, b, c, d) {
		return c - ع.صيغة_المؤثرات.easeOutBounce (d-t, 0, c, d) + b;
	},
	easeOutBounce: function (t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (t, b, c, d) {
		if (t < d/2) return ع.صيغة_المؤثرات.easeInBounce (t*2, 0, c, d) * .5 + b;
		return ع.صيغة_المؤثرات.easeOutBounce (t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
}

//! الأحداث المخصصة تكون أحداث غير أساسية تحتاج لعدة خطوات للتشغيل
ع.الأحداث_المخصصة = {
	
	//! حدث نقرة_مطولة يحاكي النقر مع متابعة الضغط لمدة 400 ميللي ثانية
	//! لتشغيل الحدث
	نقرة_مطولة : function ( العنصر ) {
		var المدة = 400
		,تم_النقر = خاطئ
		,مؤقت_العملية
		,نوع_الحدث = "نقرة_مطولة";
		
		//! الأحداث المخصصة دوما تستخدم ربط_حدث لمنع ظهور الحدث في قائمة أحداث العنصر
		ع(العنصر).ربط_حدث("فأرة_أسفل",function( الحدث ){
			
			//! تشغيل حدث mousedown للبدء من عملية التححق من اكتمال الحدث المخصص
			//! وانتظار الحدث mousedown
			clearTimeout(مؤقت_العملية);
			تم_النقر = صحيح;
			
			//! تشغل مؤقت للتأكد من الإكتمال بعد 400 ميللي ثانية
			مؤقت_العملية=setTimeout(function(){
				
				//! إلغاء المؤقت
				clearTimeout(مؤقت_العملية);
				if ( تم_النقر ) {
					
					//! إذا تم تشغيل الحدث mousedown والاستمرار بالضغط يتم تشغل الحدث المخصص
					محاكاة_حدث_مخصص( العنصر , نوع_الحدث , جلب_معلومات_الحدث( الحدث.الحدث_الأساسي ) );
				}
				تم_النقر = خاطئ;
			},المدة);
		});
		ع(العنصر).ربط_حدث("فأرة_مغادرة فأرة_تحريك فأرة_خارج فأرة_أعلى",function(){
			
			//! إلغاء المؤقت في حال عدم استمرار الضغط أو التحريك
			تم_النقر = خاطئ;
			clearTimeout(مؤقت_العملية);
		});
	},
	
	//! حدث مرور_مطول بحاكي المرور بالفأرة والثبات لمدة 400 ميللي ثانية 
	//! لتشغيل الحدث
	مرور_مطول : function ( العنصر ) {
		var المدة = 400
		,تم_المرور = خاطئ
		,مؤقت_العملية
		,نوع_الحدث = "مرور_مطول";
		ع(العنصر).ربط_حدث("فأرة_دخول",function( الحدث ){
			
			//! تشغيل حدث mouseenter للبدء من عملية التححق من اكتمال الحدث المخصص
			//! وانتظار الحدث mouseenter 
			clearTimeout(مؤقت_العملية);
			تم_المرور = صحيح;
			
			//! تشغل مؤقت للتأكد من الإكتمال بعد 400 ميللي ثانية
			مؤقت_العملية=setTimeout(function(){
				
				//! إلغاء المؤقت
				clearTimeout(مؤقت_العملية);
				if ( تم_المرور ) {
					
					//! إذا تم تشغيل الحدث mouseenter وعدم التحريك يتم تشغل الحدث المخصص
					محاكاة_حدث_مخصص( العنصر , نوع_الحدث , جلب_معلومات_الحدث( الحدث.الحدث_الأساسي ) );
				}
				تم_المرور = خاطئ;
			},المدة);
		});
		ع(العنصر).ربط_حدث("فأرة_أسفل فأرة_مغادرة فأرة_خارج فأرة_أعلى",function(){
			
			//! إلغاء المؤقت في حال تحريك الماوس أو الضغط
			تم_المرور = خاطئ;
			clearTimeout(مؤقت_العملية);
		});
	},
	
	//! حدث نقرة_وسط هو النقر بزر الفأرة الأوسط
	نقرة_وسط : function ( العنصر ) {
		var تم_النقر = خاطئ
		,نوع_الحدث = "نقرة_وسط"
		,الحدث_الأساسي;
		ع(العنصر).ربط_حدث("فأرة_أسفل",function( الحدث ){
			
			//! انتظار النقر بالفأرة لمعرفة رقم الزر المضغوط
			//! 2 للزر الأوسط
			if (  الحدث.الحدث_الأساسي.which === 2 ) {
				تم_النقر = صحيح;
			}
		});
		ع(العنصر).ربط_حدث("فأرة_مغادرة فأرة_تحريك فأرة_خارج",function(){
			
			//! إلغاء الحدث في حال التحريك خارج العنصر أو رفع زر الماوس
			تم_النقر = خاطئ;
		});
		ع(العنصر).ربط_حدث("فأرة_أعلى",function( الحدث ){
			
			//! إصلاق الخدث بعد رفع زر الماوس الأوسط
			الحدث_الأساسي = الحدث.الحدث_الأساسي;
			if ( تم_النقر && الحدث_الأساسي.which === 2 ) {
					محاكاة_حدث_مخصص( العنصر , نوع_الحدث , جلب_معلومات_الحدث( الحدث.الحدث_الأساسي ) );
			}
			تم_النقر = خاطئ;
		});
	},
}

ع.prototype = {
	
	استعداد : function( العملية ) {
		if ( ع.هل_المتغير_مستند(this.العناصر[ 0 ]) && ع.هل_المتغير_عملية( العملية )) {
			var العملية_المؤقتة,بيانات_الحدث;
			العملية_المؤقتة = function(){
					بيانات_الحدث = جلب_معلومات_الحدث( arguments[0] );
					بيانات_الحدث = معلومات_الحدث( بيانات_الحدث , "استعداد" );
					بيانات_الحدث.نوع_الحدث = "استعداد";
					بيانات_الحدث.الحدث_الأساسي = arguments[0];
					delete بيانات_الحدث.س;
					delete بيانات_الحدث.ع;
					delete بيانات_الحدث.المفتاح;
					delete بيانات_الحدث.الصفحة_ع;
					delete بيانات_الحدث.الصفحة_س;
					delete بيانات_الحدث.الشاشة_ع;
					delete بيانات_الحدث.الشاشة_س;
					العملية.call( المستند , بيانات_الحدث );
			};
			if (المستند.addEventListener) {
				المستند.removeEventListener( "DOMContentLoaded" , العملية_المؤقتة , صحيح );
				المستند.addEventListener( "DOMContentLoaded" , العملية_المؤقتة , صحيح );
			} else {
				المستند.detachEvent( "onreadystatechange" , العملية_المؤقتة , صحيح );
				المستند.attachEvent( "onreadystatechange" , العملية_المؤقتة , صحيح );
			}
		}
		return this;
	},
	
	إخفاء : function() {
		return إظهار_إخفاء ( this );
	},

	إظهار : function() {
		return إظهار_إخفاء ( this , صحيح );
	},

	تبديل : function() {
		return تبديل_العرض ( this );
	},

	الشكل : function( الخاصية , القيمة ) {
		return تعديل_جلب_خصائص_الشكل( this , الخاصية , القيمة );
	},

	العرض : function( القيمة ) {
		return تعديل_جلب_خصائص_الشكل( this , "العرض" , القيمة );
	},

	الإرتفاع : function( القيمة ) {
		return تعديل_جلب_خصائص_الشكل( this , "الإرتفاع" , القيمة );
	},

	العرض_الداخلي : function() {
		return جلب_القياسات( this , [ "العرض" , "padding-left" , "padding-right" ] );
	},

	العرض_الخارجي : function() {
		return جلب_القياسات( this , [ "العرض" , "padding-left" , "padding-right" , "border-left-width" , "border-right-width" ] );
	},

	الإرتفاع_الداخلي : function() {
		return جلب_القياسات( this , [ "الإرتفاع" , "padding-top" , "padding-bottom" ] );
	},

	الإرتفاع_الخارجي : function() {
		return جلب_القياسات( this , [ "الإرتفاع" , "padding-top" , "padding-bottom" , "border-top-width" , "border-bottom-width" ] );
	},

	مؤثرات : function( القيم , الوقت , صيغة_التأثير , العملية ) {
		return عمل_مؤثرات( this , القيم , الوقت , صيغة_التأثير , العملية );
	},

	تلاشي_إخفاء : function( الوقت ) {
		return مؤثرات_خاصة( this , الوقت , 1 );
	},

	تلاشي_إظهار : function( الوقت ) {
		return مؤثرات_خاصة( this , الوقت , 2 );
	},

	تبديل_تلاشي : function( الوقت ) {
		return تبديل_المؤثرات_الخاصة( this , الوقت , 1 );
	},

	إنزلاق_للأعلى : function( الوقت ) {
		return مؤثرات_خاصة( this , الوقت , 3 );
	},

	إنزلاق_للأسفل : function( الوقت ) {
		return مؤثرات_خاصة( this , الوقت , 4 );
	},

	تبديل_الإنزلاق : function( الوقت ) {
		return تبديل_المؤثرات_الخاصة( this , الوقت , 2 );
	},

	إضافة_نمط : function( الأنماط ) {
		return إضافة_أنماط( this , الأنماط );
	},

	حذف_نمط : function( الأنماط ) {
		return حذف_أنماط( this , الأنماط );
	},

	تبديل_نمط : function( الأنماط ) {
		return تبديل_الأنماط( this , الأنماط );
	},

	يملك_نمط : function ( النمط ) {
		return هل_يملك_نمط( this , النمط ); 
	},

	الإحداثيات : function() {
		return جلب_الإحداثيات( this );
	},

	خصائص : function( الخاصية , القيمة , أساسي ) {
		return تعديل_جلب_الخصائص( this , الخاصية , القيمة , أساسي );
	},

	حذف_خاصية : function( الخاصية ) {
		return حذف_خاصية( this , الخاصية );
	},

	القيمة : function( القيمة ) {
		return تعديل_جلب_القيمة( this , القيمة );
	},

	النص : function( القيمة ) {
		return تعديل_جلب_النص( this , القيمة );
	},

	الكود : function( القيمة ) {
		return تعديل_جلب_الكود( this , القيمة );
	},

	العدد : function() {
		return this.العناصر.length;
	},

	جلب : function( الرقم ) {
		الرقم = ع.جلب_الرقم( الرقم );
		return this.العناصر.length > الرقم ? this.العناصر[ الرقم ] : null;
	},

	إفراغ : function () {
		return إفراغ_العناصر( this );
	},

	إزالة : function ( المطابقة ) {
		return حذف_العناصر( this , المطابقة );
	},

	السابق : function ( المطابقة ) {
		return جلب_العناصر_السابقة_التالية( this , المطابقة , "previousSibling" );
	},

	التالي : function ( المطابقة ) {
		return جلب_العناصر_السابقة_التالية( this , المطابقة , "nextSibling" );
	},

	استبعاد : function ( المطابقة ) {
		return استبعاد_العناصر( this , المطابقة );
	},

	ايجاد : function ( المطابقة ) {
		return ايجاد_العناصر( this , المطابقة );
	},

	الأصل : function ( المطابقة ) {
		return ايجاد_الأصل( this , المطابقة );
	},

	الفروع : function ( المطابقة ) {
		return ايجاد_الفروع( this , المطابقة );
	},

	إضافة_فرع_بداية : function ( الفرع ) {
		return إضافة_فروع( this , الفرع , 1 );
	},

	إضافة_فرع_نهاية : function ( الفرع ) {
		return إضافة_فروع( this , الفرع , 0 );
	},

	إستبدال : function ( العنصر ) {
		return إستبدال_العناصر( this , العنصر );
	},

	إدخال_قبل : function ( العنصر ) {
		return إدخال_العناصر( this , العنصر , 1 );
	},

	إدخال_بعد : function ( العنصر ) {
		return إدخال_العناصر( this , العنصر , 0 );
	},

	نسخ : function () {
		return نسخ_العناصر( this );
	},

	إضافة_إلى_البداية : function ( المطابقة ) {
		return إضافة_فروع_إلى_العناصر( this , المطابقة , 1 );
	},

	إضافة_إلى_النهاية : function ( المطابقة ) {
		return إضافة_فروع_إلى_العناصر( this , المطابقة , 0 );
	},

	عند : function( الأحداث , العملية ) {
		var العناصر = this;
		ع.كل( الأحداث.split(" ") , function( الرقم, الحدث_الأساسي ) {
			var الحدث = الأحداث_العربية[ الحدث_الأساسي ] || الحدث_الأساسي;
			if ( الحدث.length ) {
				ع.كل( العناصر.العناصر , function( الرقم , العنصر ) {
					إضافة_حدث( العنصر , {
						الحدث : الحدث
						,الحدث_العربي: الحدث_الأساسي
						,العملية : العملية
					} );
				} );
			}
		} );
		return this;
	},

	تعطيل_الأحداث : function( الأحداث ) {
		ع.كل( this.العناصر , function( الرقم , العنصر ) {
			if ( الأحداث ) {
				تعطيل_أحداث_العنصر( العنصر , الأحداث );
			} else {
				تعديل_بيانات_العنصر_الأساسية( العنصر , "العنصر_يعمل" , خاطئ );
			}
		} );
		return this ;
	},

	تفعيل_الأحداث : function( الأحداث ) {
		ع.كل( this.العناصر , function( الرقم , العنصر ) {
			if ( الأحداث ) {
				تفعيل_أحداث_العنصر( العنصر , الأحداث );
			} else {
				تعديل_بيانات_العنصر_الأساسية( العنصر , "العنصر_يعمل" , صحيح );
				ع.كل( جلب_بيانات_العنصر_الأساسية( العنصر , "الأحداث" ) , function( الرقم , الحدث ) {
					تفعيل_أحداث_العنصر( العنصر , الحدث );
				} );
			}
		} );
		return this ;
	},

	محاكاة_حدث : function ( الحدث , البيانات ) {
		ع.كل( this.العناصر , function( الرقم , العنصر ) {
			محاكاة_حدث( العنصر , الحدث , البيانات  );
		} );
		return this ;
	},

	حدث_قادم : function ( الأحداث , المطابقة , العملية ) {
		var العناصر = this;
		ع.كل( الأحداث.split(" ") , function( الرقم, الحدث_الأساسي ) {
			var الحدث = الأحداث_العربية[ الحدث_الأساسي ] || الحدث_الأساسي;
			if ( الحدث.length ) {
				ع.كل( العناصر.العناصر , function( الرقم , العنصر ) {
					
					حدث_قادم( العنصر , الحدث , الحدث_الأساسي , المطابقة , العملية );
				} );
			}
		} );
		return this ;
	},

	ربط_حدث : function( الأحداث , العملية ) {
		var العناصر = this;
		ع.كل( الأحداث.split(" ") , function( الرقم, الحدث_الأساسي ) {
			var الحدث = الأحداث_العربية[ الحدث_الأساسي ] || الحدث_الأساسي;
			if ( الحدث.length ) {
				ع.كل( العناصر.العناصر , function( الرقم , العنصر ) {
					ربط_حدث( العنصر , {
						الحدث : الحدث
						,الحدث_العربي: الحدث_الأساسي
						,العملية : العملية
					} );
				} );
			}
		} );
		return this;
	},

	الأول : function () {
		return جلب_العناصر_الأول_الأخير( this , 1 );
	},

	الأخير : function () {
		return جلب_العناصر_الأول_الأخير( this , 0 );
	},

	التمرير_العلوي : function ( القيمة ) {
		return جلب_تعديل_قيمة_التمرير( this , القيمة , [ "scrollTop" , "pageYOffset" ] );
	},

	التمرير_الجانبي : function ( القيمة ) {
		return جلب_تعديل_قيمة_التمرير( this , القيمة , [ "scrollLeft" , "pageXOffset" ] );
	},

	مؤثرات_التمرير : function ( النوع , الوقت , العملية ) {
		return عمل_مؤثرات_التمرير( this , النوع , الوقت , العملية );
	},

	البيانات : function( الموضع , القيمة ) {
		return بيانات_العناصر( this , الموضع , القيمة );
	},

	كل : function( العملية ){
		ع.كل( this.العناصر , العملية );
		return this;
	},

};

//! تستخدم لإظهار أو إخفاء العناصر
function إظهار_إخفاء( العناصر , إظهار ) {
	var مصفوفة_العرض = [];
	ع.كل( العناصر.العناصر , function( الرقم , العنصر ) {
		if ( ع.هل_المتغير_عنصر( العنصر )  ) {
			var العرض = ع( العنصر ).الشكل( "طريقة_العرض" );
			
			//! معرفة طريقة العرض الجديدة
			if ( إظهار ) {
				if ( العرض === "none" ){
					العرض = "";
					مصفوفة_العرض[ الرقم ] = "";
				}
				if ( العرض === "" ) {
					
					//! جلب طريقة العرض الأساسية للعنصر من بيانات العنصر
					مصفوفة_العرض[ الرقم ] = جلب_بيانات_العنصر_الأساسية( العنصر , "طريقة_العرض" ) || null;
					if( !مصفوفة_العرض[ الرقم ] ){
						
						//! إذا لم يتم تخزين بيانات العرض يتم توليدها
						مصفوفة_العرض[ الرقم ] = جلب_العرض_الأساسي( العنصر );
					}
				}
			}else{
				if ( العرض !== "none" ) {
					مصفوفة_العرض[ الرقم ] = "none";
					
					//! تخزين طريقة العرض في بيانات العنصر
					تعديل_بيانات_العنصر_الأساسية( العنصر , "طريقة_العرض"  , العرض );
				}
			}
		}
	} );
	
	//! تطبيق طرق العرض الجديدة على كافة العناصر
	ع.كل( العناصر.العناصر , function( الرقم , العنصر ) {
		if ( ع.هل_المتغير_عنصر( العنصر ) ) {
			ع( العنصر ).الشكل( "طريقة_العرض" , مصفوفة_العرض[ الرقم ] );
		}
	} );
	return العناصر;
}

//! تستخدم العملية لإظهار عنصر مخفي
//! يتم إدراج عنصر جديد من نفس نوع العنصر
//! يتم معرفة نوع العرض الأساسي للعنصر
function جلب_العرض_الأساسي( العنصر ){
	var العرض = ""
	,المستند = العنصر.ownerDocument
	,عنصر_مؤقت = المستند.body.appendChild( المستند.createElement( العنصر.nodeName ) )
	,الشكل_الأساسي = جلب_الشكل_الأساسي( عنصر_مؤقت );
	العرض =  الشكل_الأساسي["display"];
	عنصر_مؤقت.parentNode.removeChild( عنصر_مؤقت );
	return العرض;
}

//! معرفة إذا كان العنصر مخفي من الستايل css أو الأنماط class
function هل_العنصر_مخفي( العنصر ) {
	var الشكل_الأساسي = جلب_الشكل_الأساسي( العنصر )
	,العرض = ع( العنصر ).الشكل( "طريقة_العرض" );
	return العرض === "none" || ( العرض === "" && الشكل_الأساسي[ "display" ] === "none" );
}

//! يتم التبديل بين طرق العرض للعنصر إظهار أو إخفاء
function تبديل_العرض( العناصر ) {
	ع.كل( العناصر.العناصر , function( الرقم , العنصر ) {
		if ( ع.هل_المتغير_عنصر( العنصر ) ) {
			if ( هل_العنصر_مخفي( العنصر ) ) {
				ع( العنصر ).إظهار();
			}else{
				ع( العنصر ).إخفاء();
			}
		}
	} );
	return العناصر;
}

//! تعديل أو جلب خصائص css للعنصر
function تعديل_جلب_خصائص_الشكل( العناصر , الخاصية , القيمة ) {
	var ن = 0
	,العدد = العناصر.العناصر.length
	
	//! عرض نافدة المتصفح
	,عرض_النافذة = Math.max(المستند.body.scrollWidth, المستند.body.offsetWidth, المستند.documentElement.clientWidth, المستند.documentElement.scrollWidth, المستند.documentElement.offsetWidth)
	
	//! إرتفاع نافذة المتصفح
	,إرتفاع_النافذة = النافذة.innerHeight
	,إرتفاع_المستند = Math.max(المستند.body.scrollHeight, المستند.body.offsetHeight, المستند.documentElement.clientHeight, المستند.documentElement.scrollHeight, المستند.documentElement.offsetHeight);;
	for ( ; ن < العدد ; ن++ ){
		var العنصر = العناصر.العناصر[ ن ]
		,الشكل_الأساسي
		,قيمة_الخاصية;
		
		//! إذا كان المتغير window
		if ( ع.هل_المتغير_نافذة( العنصر ) ) {
			
			
			//! إذا تم طلب قيمة الخاصية يتم إرجاعها
			if ( !القيمة && ع.هل_المتغير_نص( الخاصية ) ) {
				if ( الخاصية === "العرض" || الخاصية === "width" ) {
					return عرض_النافذة;
				} else if ( الخاصية === "الإرتفاع" || الخاصية === "height" ) {
					return إرتفاع_النافذة;
				} else {
					return null;
				}
				
			//! إذا تم طلب تغيير قيمة الخاصية يتم تجاهل الطلب
			} else {
				return null;
			}
			
		//! إذا كان المتغير document
		} else if ( ع.هل_المتغير_مستند( العنصر ) ) {
			
			//! إذا تم طلب قيمة الخاصية يتم إرجاعها
			if ( !القيمة && ع.هل_المتغير_نص( الخاصية ) ) {
				if ( الخاصية === "العرض" || الخاصية === "width" ) {
					return عرض_النافذة;
				} else if ( الخاصية === "الإرتفاع" || الخاصية === "height" ) {
					return Math.max(المستند.body.scrollHeight, المستند.body.offsetHeight, المستند.documentElement.clientHeight, المستند.documentElement.scrollHeight, المستند.documentElement.offsetHeight);
				} else {
					return null;
				}
				
			//! إذا تم طلب تغيير قيمة الخاصية يتم تجاهل الطلب
			} else {
				return null;
			}
			
		//! إذا كان المتغير عنصر HTML
		} else {
			
			//! جلب بيانات css الأساسية للعنصر
			الشكل_الأساسي = جلب_الشكل_الأساسي( العنصر );
			
			//! إذا كانت الخاصية مصفوفة
			//! يتم تغيير كل القيم
			if ( ع.هل_المتغير_مصفوفة_موضوعية( الخاصية ) && !القيمة ) {
				ع.كل( الخاصية , function( الخاصية_المؤقتة , القيمة_المؤقتة ) {
					تخصيص_شكل_العنصر( العنصر , الشكل_الأساسي , الخاصية_المؤقتة , القيمة_المؤقتة );
				} );
				
			//! إذا كانت الخاصية نص والقيمة غير موجود
			//! يتم إرجاع قيمة الخاصية
			} else if ( !ع.هل_المتغير_مصفوفة_موضوعية( الخاصية ) && !القيمة ) {
				الخاصية = جلب_الاسم_الأساسي_للخاصية( الخاصية );
				الخاصية = الخاصية.toLowerCase();
				الخاصية = أسماء_الأشكال_و_الأحجام_العربية[ الخاصية ] || الخاصية;
				قيمة_الخاصية = الشكل_الأساسي[ الخاصية ];
				if( الأشكال_الرقمية.indexOf( الخاصية ) !== -1 ){
					قيمة_الخاصية = ع.جلب_الرقم_مع_فواصل( قيمة_الخاصية ) || 0;
				}
				return قيمة_الخاصية;
				
			//! إذا كانت الخاصية نص يتم تغيير قيمتعا وفقا للقيمة
			} else {
				تخصيص_شكل_العنصر( العنصر , الشكل_الأساسي , الخاصية , القيمة );
			}
		}
	}
	return العناصر;
}

//! العملية لمعرفة اسم الخاصية الأساسي
//! backgroundColor	=> background-color
function جلب_الاسم_الأساسي_للخاصية( اسم_الخاصية ) {
	var النص = ""
	,الحروف = "abcdefghijklmnopqrstuvwxyz";
	اسم_الخاصية = اسم_الخاصية.substring( 0 , 1 ).toLowerCase() + اسم_الخاصية.substring( 1 );
	ع.كل( اسم_الخاصية.split("") , function( الرقم , الحرف){
		if( الحروف.indexOf( الحرف.toLowerCase() ) !== -1 && الحرف === الحرف.toUpperCase() ){
			النص += "-" + الحرف.toLowerCase();
		} else {
			النص += الحرف;
		}
	} );
	return النص;
}

function تخصيص_شكل_العنصر( العنصر , الشكل_الأساسي , الخاصية , القيمة ) {
	var قيمة_الخاصية
	,القياسات_الجديدة
	,القياس_الجديد
	,الوحدة_الجديدة;
	الخاصية = جلب_الاسم_الأساسي_للخاصية( الخاصية );
	الخاصية = الخاصية.toLowerCase();
	الخاصية = أسماء_الأشكال_و_الأحجام_العربية[ الخاصية ] || الخاصية;
	القيمة += "";
	القيمة = القيمة.toLowerCase();
	قيمة_الخاصية = القيمة;
	
	//! إذا كانت الخاصية قيمتها رقم
	if( الأشكال_الرقمية.indexOf( الخاصية ) !== -1 ){
		ع.كل( قيمة_الأشكال_و_الأحجام_العربية , function ( الاسم , القيمة_ ) {
			قيمة_الخاصية = قيمة_الخاصية.replace( الاسم , القيمة_ );
		} );
		
		//! معرفة القياس الجديد والوحدة الجديدة المستخدمة
		القياسات_الجديدة = حساب_القياس( العنصر , الشكل_الأساسي , الخاصية , قيمة_الخاصية );
		القياس_الجديد = القياسات_الجديدة[ 1 ];
		الوحدة_الجديدة = القياسات_الجديدة[ 2 ];
		العنصر.style[ الخاصية ] = القياس_الجديد+الوحدة_الجديدة;
	}else{
		العنصر.style[ الخاصية ] = القيمة;
	}
}

function حساب_القياس( العنصر , الشكل_الأساسي , الخاصية , قيمة_الخاصية ) {
	
	//! معرفة إذا كانت الخاصية تتطلب تغيير القيمة بأحد الطرق
	//! += , -= , /= , *=
	var تغيير = قيمة_الخاصية.substring( 0 , 2 )
	,النص_الأساسي = جلب_وحدة_القياس_و_القياس( الشكل_الأساسي[ الخاصية ] )
	,القياس_الأساسي = النص_الأساسي[ 0 ]
	,الوحدة_الأساسية = النص_الأساسي[ 1 ]
	,النص_الجديد = ""
	,القياس_الجديد = 0
	,الوحدة_الجديدة = ""
	,القياس = 0
	,القياسات_الجديدة;
	if ( تغيير === "+=" || تغيير === "-=" || تغيير === "*=" || تغيير === "/=" ) {
		قيمة_الخاصية = قيمة_الخاصية.replace( تغيير, "" );
		النص_الجديد = جلب_وحدة_القياس_و_القياس( قيمة_الخاصية );
		القياس_الجديد = النص_الجديد[ 0 ];
		الوحدة_الجديدة = النص_الجديد[ 1 ];
		القياس = القياس_الأساسي;
		
		//! إذا كانت الوحدة الجديدة والقديمة متشابهة
		//! أو الوحدةة الجديدة غير موجود يتم استخدام الوحدة الجديدة
		if ( !الوحدة_الجديدة || الوحدة_الأساسية === الوحدة_الجديدة ) {
			if ( تغيير === "+=" ) {
				القياس += القياس_الجديد;
			}
			if ( تغيير === "-=" ) {
				القياس -= القياس_الجديد;
			}
			if ( تغيير === "*=" ) {
				القياس *= القياس_الجديد;
			}
			if ( تغيير === "/=" ) {
				القياس /= القياس_الجديد;
			}
			if ( القياس < 0 ) {
				القياس = 0;
			}
			return [ القياس_الأساسي , القياس , الوحدة_الأساسية ];
		} else {
			القياسات_الجديدة = جلب_القياس_الجديد( العنصر , الخاصية , القياس_الأساسي , الوحدة_الأساسية , القياس_الجديد , الوحدة_الجديدة );
			القياس_الأساسي = القياسات_الجديدة[ 0 ];
			القياس_الجديد = القياسات_الجديدة[ 1 ];
			الوحدة_الجديدة = القياسات_الجديدة[ 2 ];
			القياس = القياس_الأساسي;
			if ( تغيير === "+=" ) {
				القياس += القياس_الجديد;
			}
			if ( تغيير === "-=" ) {
				القياس -= القياس_الجديد;
			}
			if ( تغيير === "*=" ) {
				القياس *= القياس_الجديد;
			}
			if ( تغيير === "/=" ) {
				القياس /= القياس_الجديد;
			}
			if ( القياس < 0 ) {
				القياس = 0;
			}
			return [ القياس_الأساسي , القياس , الوحدة_الجديدة ];
		}
	} else {
		النص_الجديد = جلب_وحدة_القياس_و_القياس( قيمة_الخاصية );
		القياس_الجديد = النص_الجديد[ 0 ];
		الوحدة_الجديدة = النص_الجديد[ 1 ];
		القياس = القياس_الجديد;
		if ( !الوحدة_الجديدة || الوحدة_الأساسية === الوحدة_الجديدة ) {
			return [ القياس_الأساسي , القياس , الوحدة_الأساسية ];
		} else {
			return جلب_القياس_الجديد( العنصر , الخاصية , القياس_الأساسي , الوحدة_الأساسية , القياس_الجديد , الوحدة_الجديدة );
		}
	}
}

//! جلب بيانات css الأساسية للعنصر
function جلب_الشكل_الأساسي( العنصر ) {
	var العنصر_الأساسي = العنصر.ownerDocument.defaultView;
	if ( !العنصر_الأساسي || !العنصر_الأساسي.opener ) {
		العنصر_الأساسي = النافذة;
	}
	return العنصر_الأساسي.getComputedStyle( العنصر );
}

//! جلب القياس ووحدة القياس من النص
function جلب_وحدة_القياس_و_القياس( النص ) {
	var ن = 0;
	for( ; ن < الوحدات.length ; ن++ ){
		var الوحدة = الوحدات[ ن ];
		if ( النص.indexOf( الوحدة ) !== -1 ) {
			return [ ع.جلب_الرقم_مع_فواصل( النص.replace( الوحدة , "" ) ) , الوحدة ];
			break;
		}
	}
	return [ع.جلب_الرقم_مع_فواصل( النص ),""];
}

//! جلب القياس الجديد إذا كان التغيير بالزيادة أو النقصان
function جلب_القياس_الجديد( العنصر , الخاصية , القياس_الأساسي , الوحدة_الأساسية , القياس_الجديد , الوحدة_الجديدة ) {
	
	//! يتم إدراج عنصر جديد بجوار العنصر المطلوب
	//! يتم إعطاء العنصر الجديد القياسات الجديدة
	//! يتم حساب النسبة بين الوحدة الأساسية و الوحدة الجديدة
	var العنصر_الأصل = العنصر.parentNode
	,عنصر_مؤقت_أصل = العنصر_الأصل.appendChild( المستند.createElement( "div" ) )
	,عنصر_مؤقت = عنصر_مؤقت_أصل.appendChild( المستند.createElement( "div" ) )
	,القياس_1
	,القياس_2;
	عنصر_مؤقت_أصل.style[ "position" ] = "relative";
	عنصر_مؤقت.style[ "position" ] = "absolute";
	عنصر_مؤقت.style[ الخاصية ] = 1+الوحدة_الأساسية;
	القياس_1 = ع(عنصر_مؤقت).الشكل(الخاصية);
	عنصر_مؤقت.style[ الخاصية ] = 1+الوحدة_الجديدة;
	القياس_2 = ع(عنصر_مؤقت).الشكل(الخاصية) || القياس_الأساسي;
	العنصر_الأصل.removeChild(عنصر_مؤقت_أصل);
	return [ (القياس_الأساسي/القياس_2) , القياس_الجديد , الوحدة_الجديدة];
}

//! تستخدم العملية لجلب مجموعة قياسات رقمية معالجة_البيانات
//! border-width + height + padding
function جلب_القياسات( العناصر , القيم ) {
	var القيمة = 0;
	ع.كل( القيم , function ( الرقم , الاسم ) {
		القيمة += تعديل_جلب_خصائص_الشكل( العناصر , الاسم );
	} );
	return القيمة;
}

//!  عمل مئثرات لتغيير ستايل العنصر
function عمل_مؤثرات( العناصر , القيم , الوقت , صيغة_التأثير , العملية ) {
	
	//! وقت العملية أو استدام الوقت الأساسي
	var _الوقت = ع.هل_المتغير_رقم( الوقت ) && ع.جلب_الرقم( الوقت ) > 0 ? ع.جلب_الرقم( الوقت ) : مدة_المؤثر_الأساسية
	
	//! صبغة التأثير أو استخدام القيمة الأساسية easeInQuad
	,صيغة_التأثير_ = ع.هل_المتغير_نص( صيغة_التأثير ) ? صيغة_التأثير : "easeInQuad",
	
	//! العملية بعد انتهاء عمل المؤثرات
	_العملية = ع.هل_المتغير_عملية( الوقت ) ? الوقت : ع.هل_المتغير_عملية( صيغة_التأثير ) ? صيغة_التأثير : ع.هل_المتغير_عملية( العملية ) ? العملية : خاطئ;
	ع.كل( العناصر.العناصر , function( الرقم , العنصر ) {
		if ( ع.هل_المتغير_عنصر( العنصر ) && ع.هل_المتغير_مصفوفة_موضوعية( القيم ) ) {
			if ( !جلب_بيانات_العنصر_الأساسية( العنصر , "المؤثر_يعمل" ) ) {
				
				//! تعديل بيانات العنصر وتغيير المؤثر_يعمل true
				//! لمنع تشغيل المؤثر عدة مرات بنفس الوقت
				تعديل_بيانات_العنصر_الأساسية( العنصر , "المؤثر_يعمل" , صحيح )
				var الشكل_الأساسي = جلب_الشكل_الأساسي( العنصر )
				,قيمة_الخاصية
				,القياسات_الجديدة
				,القياس_الأساسي
				,القياس_الجديد
				,الوحدة_الجديدة
				,اللون_الأساسي
				,اللون_الجديد
				,قيم_اللون_الأساسي
				,قيم_اللون_الجديد;
				ع.كل( القيم , function( الخاصية , القيمة ) {
					الخاصية = أسماء_الأشكال_و_الأحجام_العربية[ الخاصية ] || الخاصية;
					الخاصية = جلب_الاسم_الأساسي_للخاصية( الخاصية );
					الخاصية = الخاصية.toLowerCase();
					القيمة += "";
					القيمة = القيمة.toLowerCase();
					قيمة_الخاصية = القيمة;
					ع.كل( قيمة_الأشكال_و_الأحجام_العربية , function ( الاسم , القيمة_ ) {
						قيمة_الخاصية = قيمة_الخاصية.replace( الاسم , القيمة_ );
					} );
					
					//! إذا كانت قيمة الخاصية رقم
					if( الأشكال_الرقمية.indexOf( الخاصية ) !== -1 ){
						القياسات_الجديدة = حساب_القياس( العنصر , الشكل_الأساسي , الخاصية , قيمة_الخاصية );
						القياس_الأساسي = القياسات_الجديدة[ 0 ];
						القياس_الجديد = القياسات_الجديدة[ 1 ];
						الوحدة_الجديدة = القياسات_الجديدة[ 2 ];
						تطبيق_المؤثرات( العنصر , الخاصية , القياس_الأساسي , القياس_الجديد , الوحدة_الجديدة , _الوقت , صيغة_التأثير_ );
					
					//! إذا كانت قيمة الخاصية لون
					} else if ( الأشكال_اللونية.indexOf( الخاصية ) !== -1 ) {
						اللون_الأساسي = ع(العنصر).الشكل(الخاصية);
						ع(العنصر).الشكل(الخاصية,قيمة_الخاصية);
						اللون_الجديد = ع(العنصر).الشكل(الخاصية);
						ع(العنصر).الشكل(الخاصية,اللون_الأساسي);
						قيم_اللون_الأساسي = ع.إحضار_قيم_اللون(ع(العنصر).الشكل(الخاصية)) || ع.إحضار_قيم_اللون_للأصل( العنصر , الخاصية );
						قيم_اللون_الجديد = ع.إحضار_قيم_اللون(اللون_الجديد);
						if ( قيم_اللون_الأساسي[ 0 ] !== قيم_اللون_الجديد[ 0 ] || قيم_اللون_الأساسي[ 1 ] !== قيم_اللون_الجديد[ 1 ] || قيم_اللون_الأساسي[ 2 ] !== قيم_اللون_الجديد[ 2 ]  ) {
							تطبيق_المؤثرات_اللونية( العنصر , الخاصية , قيم_اللون_الأساسي , قيم_اللون_الجديد , _الوقت , صيغة_التأثير_ );
						}
					
					//! إي قيمة أخرى سيتم تطبيقها فورا بدون مؤثرات
					}else{
						ع(العنصر).الشكل(الخاصية,قيمة_الخاصية);
					}
				} );
				
				//! عمل مؤقت لتنفيذ العملية المطلوبة بعد انتهاء المؤثرات
				setTimeout( function(){
					
					//! تعديل بيانات العنصر وتغيير المؤثر_يعمل false
					//! للسماح بتطبيق مؤثرات جديدة
					تعديل_بيانات_العنصر_الأساسية( العنصر , "المؤثر_يعمل" , خاطئ );
					if ( _العملية ) {
						_العملية.call( العنصر );
					}
				} ,الوقت);
			}
		}		
	} );
	return العناصر;
}

function تطبيق_المؤثرات( العنصر , الخاصية , القياس_الأساسي , القياس_الجديد , الوحدة_الجديدة , الوقت , صيغة_التأثير ) {
	var المؤقت = 0
	,وقت_المؤقت = 10
	,عملية_المؤثرات
	
	//! الفرق بين القياس الجديد و الأساسي
	,الفرق = القياس_الجديد - القياس_الأساسي
	,القياس_المؤقت
	,القياس_المؤقت_مع_الوحدة;
	
	//! تشغيل مؤقت كل 10 ميللي ثانية
	//! لتطبيق القياس الجديد
	عملية_المؤثرات=setInterval( function() {
		if( المؤقت >= الوقت ){
			
			//! إلغاء المؤقت عند انتهاء المدة الكاملة
			//! تغيير ستايل العنصر للقياس الجديد
			//! في حال حدوث تغير بسيط في الرقم
			clearInterval(عملية_المؤثرات);
			ع(العنصر).الشكل(الخاصية,القياس_الجديد+الوحدة_الجديدة);
			return;
		}
		
		//! تطبيق صيغة التأثير على القياس الجديد
		القياس_المؤقت = ع.صيغة_المؤثرات[ صيغة_التأثير ]( المؤقت , القياس_الأساسي , الفرق , الوقت );
		القياس_المؤقت_مع_الوحدة = القياس_المؤقت + الوحدة_الجديدة;
		ع(العنصر).الشكل(الخاصية,القياس_المؤقت_مع_الوحدة);
		المؤقت += وقت_المؤقت;
	} , وقت_المؤقت);
}

function تطبيق_المؤثرات_اللونية( العنصر , الخاصية , اللون_الأساسي , اللون_الجديد , الوقت , صيغة_التأثير ) {
	var المؤقت = 0
	,وقت_المؤقت = 10
	,عملية_المؤثرات
	
	//! الفرق بين قيم اللون الجديد و الأساسي
	,الفرق = [ اللون_الجديد[ 0 ] - اللون_الأساسي[ 0 ] , اللون_الجديد[ 1 ] - اللون_الأساسي[ 1 ] , اللون_الجديد[ 2 ] - اللون_الأساسي[ 2 ] ]
	,اللون_الحالي = [];
	
	//! تشغيل مؤقت كل 10 ميللي ثانية
	//! لتطبيق اللون الجديد
	عملية_المؤثرات=setInterval( function() {
		if( المؤقت >= الوقت ){
			
			//! إلغاء المؤقت عند انتهاء المدة الكاملة
			//! تغيير ستايل العنصر للون الجديد
			//! في حال حدوث تغير بسيط في قيم اللون
			clearInterval( عملية_المؤثرات );
			ع( العنصر ).الشكل( الخاصية , "rgb(" + اللون_الجديد[ 0 ] + "," + اللون_الجديد[ 1 ] + "," + اللون_الجديد[ 2 ] + ")" );
			return;
		}
		
		//! تطبيق صيغة التأثير على قيم اللون الجديد
		اللون_الحالي[ 0 ] = ع.جلب_الرقم(ع.صيغة_المؤثرات[ صيغة_التأثير ]( المؤقت , اللون_الأساسي[ 0 ] , الفرق[ 0 ] , الوقت ));
		اللون_الحالي[ 1 ] = ع.جلب_الرقم(ع.صيغة_المؤثرات[ صيغة_التأثير ]( المؤقت , اللون_الأساسي[ 1 ] , الفرق[ 1 ] , الوقت ));
		اللون_الحالي[ 2 ] = ع.جلب_الرقم(ع.صيغة_المؤثرات[ صيغة_التأثير ]( المؤقت , اللون_الأساسي[ 2 ] , الفرق[ 2 ] , الوقت ));
		ع( العنصر ).الشكل( الخاصية , "rgb(" + اللون_الحالي[ 0 ] + "," + اللون_الحالي[ 1 ] + "," + اللون_الحالي[ 2 ] + ")" );
		المؤقت += وقت_المؤقت;
	} , وقت_المؤقت);
}

//! تبديل التلاشي
//! تبديل الإنزلاق
function تبديل_المؤثرات_الخاصة( العناصر , الوقت , النوع ) {
	الوقت = الوقت && ع.جلب_الرقم( الوقت ) && ع.جلب_الرقم( الوقت ) > 0 ? ع.جلب_الرقم( الوقت ) : مدة_المؤثر_الأساسية;
	ع.كل( العناصر.العناصر , function( الرقم , العنصر ) {
		if ( ع.هل_المتغير_عنصر( العنصر ) ) {
			var المؤثر = 0;
			if ( النوع === 1 ) {
				المؤثر = 1;
				if ( هل_العنصر_مخفي( العنصر ) ) {
					المؤثر = 2;
				}
			} else if ( النوع === 2 ) {
				المؤثر = 3;
				if ( هل_العنصر_مخفي( العنصر ) ) {
					المؤثر = 4;
				}
			}
			تطبيق_المؤثرات_الخاصة( العنصر , الوقت , المؤثر );
		}
	} );
	return العناصر;
}

function مؤثرات_خاصة( العناصر , الوقت , المؤثر ) {
	الوقت = الوقت && ع.جلب_الرقم( الوقت ) && ع.جلب_الرقم( الوقت ) > 0 ? ع.جلب_الرقم( الوقت ) : مدة_المؤثر_الأساسية;
	ع.كل( العناصر.العناصر , function( الرقم , العنصر ) {
		if ( ع.هل_المتغير_عنصر( العنصر ) ) {
			تطبيق_المؤثرات_الخاصة( العنصر , الوقت , المؤثر );
		}
	} );
	return العناصر;
}

function تطبيق_المؤثرات_الخاصة( العنصر , الوقت , المؤثر ) {
	var الشكل = ع( العنصر ).خصائص("style")
	,الخلفية_الأساسية
	,م_1
	,م_2
	,م_3
	,م_4
	,م_5
	,م_6
	,م_7;
	if ( المؤثر === 1 ) {
		
		//! تلاشي_إخفاء
		ع( العنصر ).مؤثرات({"opacity":"0"},الوقت,function(){
			setTimeout( function() {
				
				//! حذف الستايل المؤقت وإخفاء العنصر
				if ( الشكل ) {
					ع( العنصر ).خصائص("style",الشكل);
				}else{
					ع( العنصر ).حذف_خاصية("style");
				}
				ع( العنصر ).إخفاء();	
			} , 10 );
		});
	} else if ( المؤثر === 2 ) {
		
		//! تلاشي_إظهار
		ع( العنصر ).الشكل("opacity","0").إظهار().مؤثرات({"opacity":"1"},الوقت,function(){
			setTimeout( function() {
				
				//! حذف الستايل المؤقت وإظهار العنصر
				if ( الشكل ) {
					ع( العنصر ).خصائص("style",الشكل);
				}else{
					ع( العنصر ).حذف_خاصية("style");
				}
				ع( العنصر ).إظهار();	
			} , 10 );
		});
	} else if ( المؤثر === 3 ) {
		
		//! إنزلاق_للأعلى - إخفاء
		الخلفية_الأساسية = ع( العنصر ).الشكل("background");
		ع( العنصر ).الشكل({"overflow":"hidden","background":الخلفية_الأساسية}).مؤثرات({"height":"0","padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0"},الوقت,function(){
			setTimeout( function() {
				if ( الشكل ) {
					ع( العنصر ).خصائص("style",الشكل);
				}else{
					ع( العنصر ).حذف_خاصية("style");
				}
				ع( العنصر ).إخفاء();	
			} , 10 );
		});
	} else if ( المؤثر === 4 ) {
		
		//! إنزلاق_للأسفل - إظهار
		//! حساب القيم المهمة للإرتفاع
		//! height , padding-top , padding-bottom , margin-top
		//! margin-bottom , border-top-width , border-bottom-width
		الخلفية_الأساسية = ع( العنصر ).الشكل("background");
		ع( العنصر ).الشكل("opacity","0").إظهار();
		م_1 = ع( العنصر ).الشكل("height");
		م_2 = ع( العنصر ).الشكل("padding-top");
		م_3 = ع( العنصر ).الشكل("padding-bottom");
		م_4 = ع( العنصر ).الشكل("margin-top");
		م_5 = ع( العنصر ).الشكل("margin-bottom");
		م_6 = ع( العنصر ).الشكل("border-top-width");
		م_7 = ع( العنصر ).الشكل("border-bottom-width");
		ع( العنصر ).خصائص("style",الشكل);
		ع( العنصر ).الشكل({"height":"0","padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0"}).إظهار();
		ع( العنصر ).الشكل({"overflow":"hidden","background":الخلفية_الأساسية}).مؤثرات({"height":م_1,"padding-top":م_2,"padding-bottom":م_3,"margin-top":م_4,"margin-bottom":م_5,"border-top-width":م_6,"border-bottom-width":م_7},الوقت,function(){
			setTimeout( function() {
				if ( الشكل ) {
					ع( العنصر ).خصائص("style",الشكل);
				}else{
					ع( العنصر ).حذف_خاصية("style");
				}
				ع( العنصر ).إظهار();
			} , 10 );			
		});
	}	
}

function إضافة_أنماط( العناصر , الأنماط ) {
	if ( الأنماط ) {
		ع.كل( العناصر.العناصر , function( الرقم , العنصر ) {
			if ( ع.هل_المتغير_عنصر( العنصر ) ) {
				if ( ع.هل_المتغير_عملية( الأنماط ) ) {
					
					//! إذا كانت الأنماط عملية
					//! القيمة العائدة من العملية تكون النمط الحالي
					var الأنماط_المؤقتة = الأنماط.call( العنصر, الرقم , العنصر.getAttribute && العنصر.getAttribute( "class" ) || "" );
					ع.كل( الأنماط_المؤقتة.split(" ") , function( الرقم ,  النمط ) {
						إضافة_نمط( العنصر , النمط )
					} );
				} else {
					
					//! إذا كانت الأنماط نص
					//! في حال إضافة أكثر من نمط مفصول بمسافة
					//! يتم إضافة كل الأنماط
					ع.كل( الأنماط.split(" ") , function( الرقم ,  النمط ) {
						إضافة_نمط( العنصر , النمط )
					} );
				}
			}
		} );
	}
	return العناصر;
}

//! إضافة نمط إلى العنصر class
function إضافة_نمط( العنصر , النمط ) {
	if ( !العنصر.classList.contains( النمط ) ) {
		العنصر.classList.add( النمط );
	}
}

function حذف_أنماط( العناصر , الأنماط ) {
	if ( الأنماط ) {
		ع.كل( العناصر.العناصر , function( الرقم , العنصر ) {
			if ( ع.هل_المتغير_عنصر( العنصر ) ) {
				if ( ع.هل_المتغير_عملية( الأنماط ) ) {
					
					//! إذا كانت الأنماط عملية
					//! القيمة العائدة من العملية تكون النمط الحالي
					var الأنماط_المؤقتة = الأنماط.call( العنصر, الرقم, العنصر.getAttribute && العنصر.getAttribute( "class" ) || "" );
					ع.كل( الأنماط_المؤقتة.split(" ") , function( الرقم ,  النمط ) {
						حذف_نمط( العنصر , النمط )
					} );
				} else {
					
					//! إذا كانت الأنماط نص
					//! في حال حذف أكثر من نمط مفصول بمسافة
					//! يتم حذف كل الأنماط
					ع.كل( الأنماط.split(" ") , function( الرقم ,  النمط ) {
						حذف_نمط( العنصر , النمط )
					} );
				}
			}
		} );
	}
	return العناصر;
}

//! حذف نمط من العنصر class
function حذف_نمط( العنصر , النمط ) {
	if ( العنصر.classList.contains( النمط ) ) {
		العنصر.classList.remove( النمط );
	}
}

function تبديل_الأنماط( العناصر , الأنماط ) {
	ع.كل( العناصر.العناصر , function( الرقم , العنصر ) {
		if ( ع.هل_المتغير_عنصر( العنصر ) ) {
			if ( ع.هل_المتغير_عملية( الأنماط ) ) {
				
				//! إذا كانت الأنماط عملية
				//! القيمة العائدة من العملية تكون النمط الحالي
				var الأنماط_المؤقتة = الأنماط.call( العنصر, العنصر, العنصر.getAttribute && العنصر.getAttribute( "class" ) || "" );
				ع.كل( الأنماط_المؤقتة.split(" ") , function( الرقم ,  النمط ) {
					تبديل_نمط( العنصر , النمط )
				} );
			} else {
				
				//! إذا كانت الأنماط نص
				//! في حال طلب أكثر من نمط مفصول بمسافة
				//! يتم فحص كل الأنماط
				ع.كل( الأنماط.split(" ") , function( الرقم ,  النمط ) {
					تبديل_نمط( العنصر , النمط )
				} );
			}
		}
	} );
	return العناصر;
}

//! تبديل نمط معين من العنصر class
function تبديل_نمط( العنصر , النمط ) {
	if ( العنصر.classList.contains( النمط ) ) {
		العنصر.classList.remove( النمط , صحيح );
	}else{
		العنصر.classList.add( النمط );
	}
}

//! إذا كان العنصر يملك نمط معين class
function هل_يملك_نمط( العناصر , النمط ) {
	var ن = 0
	,العدد = العناصر.العناصر.length;
	for ( ; ن < العدد ; ن++ ) {
		var العنصر = العناصر.العناصر[ ن ]
		,النتيجة = خاطئ;
		if ( ع.هل_المتغير_عنصر( العنصر ) ) {
			ع.كل( النمط.split( " " ) , function( الرقم , الاسم ) {
				if ( العنصر.classList.contains( الاسم ) ) {
					النتيجة =  صحيح;
				}else{
					النتيجة =  خاطئ;
				}
			} );
		}
	}
	return النتيجة;
}

//! جلب موضع العنصر الحالي بالنسبة للصفحة
//! أعلى , يسار , أسفل , يمين
function جلب_الإحداثيات( العناصر ) {
	if( العناصر.العناصر.length > 0 ){
		var العنصر = العناصر.العناصر[ 0 ]
		,أعلى = 0
		,يسار = 0
		,أسفل = 0
		,يمين = 0;
		if ( ع.هل_المتغير_عنصر( العنصر ) ) {
			أعلى = العنصر.offsetTop;
			يسار = العنصر.offsetLeft;
			أسفل = أعلى + العنصر.offsetHeight;
			يمين = يسار + العنصر.offsetWidth;
		}
	}
	return {أعلى:أعلى,يسار:يسار,أسفل:أسفل,يمين:يمين};
}

//! تعديل أو جلب خصائص العنصر
//! إذا كانت خاصية أساسية مثل disabled , readonly , required
//! يتم وضع قيمة أساسي true
//! إذا كانت خاصية ليست أساسية بتم إهمال قيمة أساسي
//! تستخدم أيضا لإبطال الخاصية الأساسية
//! لتفعيل عنصر معطل disabled يتم وضع القيمة false للمتغير أساسي
function تعديل_جلب_الخصائص( العناصر , الخاصية , القيمة , أساسي ) {
	var ن = 0
	,العدد = العناصر.العناصر.length;
	الخاصية = الخصائص_العربية[ الخاصية ] || الخاصية;
	for ( ; ن < العدد ; ن++ ){
		var العنصر = العناصر.العناصر[ ن ];
		if ( ع.هل_المتغير_عنصر( العنصر ) ) {
			if ( !القيمة || القيمة === "" ) {
				return أساسي ? العنصر[ الخاصية ] || "" : العنصر.getAttribute( الخاصية ) || "" ;
			} else {
				if ( أساسي ) {
					العنصر[ الخاصية ] = القيمة;
				} else {
					العنصر.setAttribute( الخاصية , القيمة );
				}
			}
		}
	}
	return العناصر;
}

//! حذف خاصية غير أساسية للعنصر
function حذف_خاصية( العناصر , الخاصية ) {
	ع.كل( الخصائص_العربية , function ( الاسم , القيمة ) {
		الخاصية = الخاصية.replace( الاسم, القيمة );
	} );
	ع.كل( العناصر.العناصر , function( الرقم , العنصر ) {
		if ( ع.هل_المتغير_عنصر( العنصر ) ) {
			العنصر.removeAttribute( الخاصية );
		}
	} );
	return العناصر;
}

//! تعديل أو جلب قيمة العنصر value
function تعديل_جلب_القيمة( العناصر , القيمة ) {
	var ن = 0
	,العدد = العناصر.العناصر.length;
	for ( ; ن < العدد ; ن++ ){
		var العنصر = العناصر.العناصر[ ن ]
		,القيمة_المؤقتة;
		if (  ع.هل_المتغير_عنصر( العنصر ) ) {
			if ( !القيمة ) {
				
				//! إذا لم يتم تعيين القيمة يتم إرجاع قيمة العنصر
				return العنصر.value;
			}else{
				if ( ع.هل_المتغير_عملية( القيمة ) ) {
					
					//! إذا كانت القيمة عملية
					//! يتم إرجاع القيمة الحالية للعنصر ضمن العملية
					القيمة_المؤقتة = القيمة.call( العنصر, ن, العنصر.value && العنصر.value !== undefined ? العنصر.value : "" ) || "";
					العنصر.value = القيمة_المؤقتة;
				} else {
					
					//! إذا كانت القيمة نص يتم تغيير قيمة العنصر
					العنصر.value = القيمة;
				}
			}
		}
	}
	return العناصر;
}

//! تستخدم لتعديل أو جلب نص العنصر textContent
function تعديل_جلب_النص( العناصر , النص ) {
	var ن = 0
	,العدد = العناصر.العناصر.length;
	for ( ; ن < العدد ; ن++ ){
		var العنصر = العناصر.العناصر[ ن ]
		,القيمة_المؤقتة;
		if ( العنصر.nodeType === 1 || العنصر.nodeType === 11 || العنصر.nodeType === 9 ) {
			if ( !النص ) {
				
				//! إذا لم يتم تعيين النص يتم إرجاع نص العنصر
				return العنصر.textContent;
			}else{
				if ( ع.هل_المتغير_عملية( النص ) ) {
					
					//! إذا كان النص عملية
					//! يتم إرجاع النص الحالي للعنصر ضمن العملية
					القيمة_المؤقتة = النص.call( العنصر, ن, العنصر.textContent && العنصر.textContent !== undefined ? العنصر.textContent : "" ) || "";
					العنصر.textContent = القيمة_المؤقتة;
				} else {
					
					//! إذا كان النص نص يتم تغيير نص العنصر
					العنصر.textContent = النص;
				}
			}
		}
	}
	return العناصر;
}

//! تستخدم لتعديل أو جلب كود العنصر HTML
function تعديل_جلب_الكود( العناصر , الكود ) {
	var ن = 0
	,العدد = العناصر.العناصر.length;
	for ( ; ن < العدد ; ن++ ){
		var العنصر = العناصر.العناصر[ ن ]
		,القيمة_المؤقتة;
		if ( ع.هل_المتغير_عنصر( العنصر ) ) {
			if ( !الكود ) {
				
				//! إذا لم يتم تعيين الكود يتم إرجاع كود العنصر
				return العنصر.innerHTML;
			}else{
				if ( ع.هل_المتغير_عملية( الكود ) ) {
					
					//! إذا كان الكود عملية
					//! يتم إرجاع الكود الحالي للعنصر ضمن العملية
					القيمة_المؤقتة = الكود.call( العنصر, ن, العنصر.الكود && العنصر.الكود !== undefined ? العنصر.الكود : "" ) || "";
					العنصر.innerHTML = القيمة_المؤقتة;
				} else {
					
					//! إذا كان الكود نص يتم تغيير كود العنصر
					العنصر.innerHTML = الكود;
				}
			}
		}
	}
	return العناصر;
}

//! تستخدم لحذف كافة محتويات العنصر
function إفراغ_العناصر( العناصر ) {
	ع.كل( العناصر.العناصر , function( الرقم , العنصر ) {
		if ( ع.هل_المتغير_عنصر( العنصر ) ) {
			العنصر.textContent = "";
		}
	} );
	return العناصر;
}

//! تستخدم لحذف عناصر محددة
function حذف_العناصر( العناصر , المطابقة ) {
	var ن = 0
	,العدد = العناصر.العناصر.length
	,العناصر_المطلوب_حذفها;
	if ( المطابقة ) {
		
		//! إذا تم تعيين قيمة المطابقة
		//! يتم تقليص عدد العناصر المطلوب حذفها
		العناصر_المطلوب_حذفها = جلب_العناصر( المطابقة );
		العدد = العناصر_المطلوب_حذفها.length;
		for ( ; ن < العدد ; ن++ ){
			var العنصر = العناصر_المطلوب_حذفها[ ن ];
			if ( ع.هل_المتغير_عنصر( العنصر ) && العناصر.العناصر.indexOf( العنصر ) !== -1 ) {
				العنصر.parentNode.removeChild( العنصر );
				العناصر.العناصر.splice( العناصر.العناصر.indexOf( العنصر ) , 1 );
			}
		}
	} else {
		
		//! إذا لم يتم تعيين قيمة المطابقة
		//! يتم حذف كافة العناصر
		for ( ; ن < العدد ; ن++ ){
			var العنصر = العناصر.العناصر[ ن ];
			if ( ع.هل_المتغير_عنصر( العنصر ) ) {
				العنصر.parentNode.removeChild( العنصر );
			}
		}
		العناصر.العناصر = [];
	}
	return العناصر;
}

//! تستخد لجلب العنصر السابق أو التالي
function جلب_العناصر_السابقة_التالية( العناصر , المطابقة , الموضع ) {
	var ن = 0
	,العدد = العناصر.العناصر.length
	,العناصر_الجديدة = []
	,العناصر_المطابقة;
	if ( المطابقة ) {
		
		//! يمكن تعيين قيمة المطابقة لجلب عناصر مطابقة
		//! ولا يتم إحضار عاصر خارج المطابقة
		العناصر_المطابقة = جلب_العناصر( المطابقة );
		for ( ; ن < العدد ; ن++ ){
			var العنصر = العناصر.العناصر[ ن ]
			,العنصر_الجديد = جلب_العنصر_السابق_التالي( العنصر , الموضع );
			if ( العنصر_الجديد && العناصر_المطابقة.indexOf( العنصر_الجديد ) !== -1 ) {
				العناصر_الجديدة.push( العنصر_الجديد );
			}
		}
		العناصر.العناصر = العناصر_الجديدة;
	} else {
		
		//! إذا لم يتم تعيين قيمة المطابقة
		//! يتم إحضار العنصر السابق أو التالي فورا
		for ( ; ن < العدد ; ن++ ){
			var العنصر = العناصر.العناصر[ ن ]
			,العنصر_الجديد = جلب_العنصر_السابق_التالي( العنصر , الموضع );
			if ( العنصر_الجديد ) {
				العناصر_الجديدة.push( العنصر_الجديد );
			}
		}
		العناصر.العناصر = العناصر_الجديدة;
	}
	return العناصر;
}

function جلب_العنصر_السابق_التالي( العنصر , الموضع ) {
	while ( ( العنصر = العنصر[ الموضع ] ) && !ع.هل_المتغير_عنصر( العنصر ) ) {}
	return العنصر;
}

//! تستخدم لحذف عناصر من مجموعة العناصر المطابقة
function استبعاد_العناصر( العناصر , المطابقة ) {
	var ن = 0
	,العدد = العناصر.العناصر.length
	,العناصر_المطابقة;
	if ( ع.هل_المتغير_عنصر( المطابقة ) ) {
		
		//! إذا كانت قيمة المطابقة عنصر
		//! يتم حذفه من مجموعة العناصر
		العناصر.العناصر.splice( العناصر.العناصر.indexOf( المطابقة ) , 1 );
	} else {
		
		//! إذا كانت قيمة المطابقة نص
		//! يتم حذف كل العناصر المطابقة
		العناصر_المطابقة = جلب_العناصر( المطابقة );
		العدد = العناصر_المطابقة.length;
		for ( ; ن < العدد ; ن++ ){
			var العنصر = العناصر_المطابقة[ ن ];
			if ( العناصر.العناصر.indexOf( العنصر ) !== -1 ) {
				العناصر.العناصر.splice( العناصر.العناصر.indexOf( العنصر ) , 1 );
			}
		}
	}
	return العناصر;
}

//! تستخدم لتقليل عدد العناصر المطابقة
function ايجاد_العناصر( العناصر , المطابقة ) {
	var ن = 0
	,العدد = العناصر.العناصر.length
	,العناصر_الجديدة = [];
	if ( ع.هل_المتغير_نص( المطابقة ) ) {
		
		//! إذا كانت القيمة نص
		//! يتم جلب العناصر المطابقة الجديدة
		for ( ; ن < العدد ; ن++ ){
			var العنصر = العناصر.العناصر[ ن ];
			العناصر_الجديدة = العناصر_الجديدة.concat(جلب_العناصر( المطابقة , العنصر ));
		}
		العناصر.العناصر = العناصر_الجديدة;
	} else {
		
		//! إذا كانت القيمة عنصر
		//! يتم إرجاع العنصر فقط
		for ( ; ن < العدد ; ن++ ){
			var العنصر = العناصر.العناصر[ ن ];
			if ( العناصر_الجديدة.indexOf( العنصر ) === -1 ) {
				if ( ع.هل_المتغير_عنصر( المطابقة ) ) {
					if ( ع.هل_يحوي_العنصر( العنصر , المطابقة ) && العناصر_الجديدة.indexOf( المطابقة ) === -1 ) {
						العناصر_الجديدة.push( المطابقة );
					}
				} else {
					ع.كل( المطابقة , function ( الرقم , العنصر_المطابق ) {
						if ( ع.هل_يحوي_العنصر( العنصر , العنصر_المطابق ) && العناصر_الجديدة.indexOf( العنصر_المطابق ) === -1 ) {
							العناصر_الجديدة.push( العنصر_المطابق );
						}
					} );
				}
				
			}
		}
		العناصر.العناصر = العناصر_الجديدة;
	}
	return العناصر;
}

//! تستخدم لجلب العناصر الأصل للعناصر الحالية
function ايجاد_الأصل( العناصر , المطابقة ) {
	var ن = 0
	,العدد = العناصر.العناصر.length
	,العناصر_الجديدة = []
	,العناصر_المطابقة;
	if ( ع.هل_المتغير_نص( المطابقة ) ) {
		
		//! إذا كانت المطابقة نص
		//! يتم جلب العناصر الأصل للعناصر المطابقة فقط
		العناصر_المطابقة = جلب_العناصر( المطابقة );
		for ( ; ن < العدد ; ن++ ){
			var العنصر = العناصر.العناصر[ ن ]
			,الأصل = العنصر.parentNode;
			if ( الأصل && ع.هل_المتغير_عنصر( الأصل ) && العناصر_الجديدة.indexOf( الأصل ) === -1 && العناصر_المطابقة.indexOf( الأصل ) !== -1 ) {
				العناصر_الجديدة.push( الأصل );
			}
		}
		العناصر.العناصر = العناصر_الجديدة;
	} else {
		
		//! إذا لم يتم تعيين قيمة المطابقة
		//! يتم إرجاع كافة العناصر الأصل لكل العناصر
		for ( ; ن < العدد ; ن++ ){
			var العنصر = العناصر.العناصر[ ن ]
			,الأصل = العنصر.parentNode;
			if ( الأصل && ع.هل_المتغير_عنصر( الأصل ) && العناصر_الجديدة.indexOf( الأصل ) === -1 ) {
				العناصر_الجديدة.push( الأصل );
			}
		}
		العناصر.العناصر = العناصر_الجديدة;
	}
	return العناصر;
}

//! تستخدم لجلب الفروع للعناصر الحالية
function ايجاد_الفروع( العناصر , المطابقة ) {
	var ن = 0
	,العدد = العناصر.العناصر.length
	,العناصر_الجديدة = []
	,العناصر_المطابقة;
	if ( ع.هل_المتغير_نص( المطابقة ) ) {
		
		//! إذا كانت المطابقة نص
		//! يتم جلب العناصر الفروع للعناصر المطابقة فقط
		 العناصر_المطابقة = جلب_العناصر( المطابقة );
		for ( ; ن < العدد ; ن++ ){
			var العنصر = العناصر.العناصر[ ن ];
			if ( ع.هل_المتغير_عنصر( العنصر ) ) {
				var الفروع = العنصر.childNodes;
				ع.كل( الفروع , function( الرقم , العنصر_الفرع ) {
					if ( العنصر_الفرع && العنصر_الفرع.nodeType === 1 && العناصر_المطابقة.indexOf( العنصر_الفرع ) !== -1 && العناصر_الجديدة.indexOf( العنصر_الفرع ) === -1 ) {
						العناصر_الجديدة.push( العنصر_الفرع );
					}
				} );
			}
		}
		العناصر.العناصر = العناصر_الجديدة;
	} else {
		
		//! إذا لم يتم تعيين قيمة المطابقة
		//! يتم إرجاع كافة العناصر الفروع لكل العناصر
		for ( ; ن < العدد ; ن++ ){
			var العنصر = العناصر.العناصر[ ن ];
			if ( ع.هل_المتغير_عنصر( العنصر ) ) {
				var الفروع = العنصر.childNodes;
				ع.كل( الفروع , function( الرقم , العنصر_الفرع ) {
					if ( العنصر_الفرع && العنصر_الفرع.nodeType === 1 && العناصر_الجديدة.indexOf( العنصر_الفرع ) === -1 ) {
						العناصر_الجديدة.push( العنصر_الفرع );
					}
				} );
			}
		}
		العناصر.العناصر = العناصر_الجديدة;
	}
	return العناصر;
}

//! تستخدم لإضافة فروع للعناصر
function إضافة_فروع( العناصر , الفرع ,  الموضع ) {
	ع.كل( العناصر.العناصر , function( الرقم , العنصر ) {
		if ( ع.هل_المتغير_عنصر( العنصر ) ) {
			if ( ع.هل_المتغير_عنصر( الفرع ) ) {
				
				//! إذا كان المتغير عنصر
				if ( الموضع === 0 ) {
					
					//! إضافة إلى نهاية العنصر المطابق
					العنصر.appendChild( الفرع );
				} else if ( الموضع === 1 ) {
					
					//! إضافة إلى بداية العنصر المطابق
					العنصر.insertBefore( الفرع , العنصر.firstChild );
				}
			} else {
				
				//! إذا كان المتغير نص
				if ( الموضع === 0 ) {
					العنصر.innerHTML += الفرع;
				} else if ( الموضع === 1 ) {
					العنصر.innerHTML = الفرع + العنصر.innerHTML;
				}
			}
		}
	} );
	return العناصر;
}

//! تستخدم لاستبدال عنصر بآخر
function إستبدال_العناصر( العناصر , العنصر_الجديد ) {
	ع.كل( العناصر.العناصر , function( الرقم , العنصر ) {
		if ( ع.هل_المتغير_نص( العنصر_الجديد ) ) {
			
			//! إذا كان العنصر الجديد نص
			//! يتم إضافة عنصر جديد
			//! إضافة نص المتغير إلى العنصر الجديد
			//! يتم إدراج محتويات العنصر الجديد كعناصر 
			//! قبل العنصر المطلوب استبداله
			//! يتم حذف العنصر الأساسي
			var العنصر_المؤقت = المستند.createElement('SPAN')
			,ن = 0
			,العنصر_الفرع;
			العنصر.parentNode.insertBefore( العنصر_المؤقت , العنصر );
			ع( العنصر_المؤقت ).الكود( العنصر_الجديد );
			for ( ; ن < العنصر_المؤقت.childNodes.length ; ن++ ) {
				العنصر_الفرع = العنصر_المؤقت.childNodes[ ن ].cloneNode(صحيح);
				if ( العنصر_الفرع !== null && العنصر_الفرع ) {
					العنصر_المؤقت.parentNode.insertBefore( العنصر_الفرع , العنصر_المؤقت );
				}
			}
			ع( العنصر_المؤقت ).إزالة();
			ع( العنصر ).إزالة();
		} else if ( ع.هل_المتغير_عنصر( العنصر_الجديد ) ) {
			
			//! إذا كان العنصر_الجديد عنصر
			//! يتم الاستبدال فورا
			العنصر.parentNode.replaceChild( العنصر_الجديد , العنصر );
		}
	} );
	return العناصر;
}

//! تستخدم لإدراج عنصر قيل أبعد العناصر المحددة
function إدخال_العناصر( العناصر , العنصر_الجديد , الموضع ) {
	ع.كل( العناصر.العناصر , function( الرقم , العنصر ) {
		if ( ع.هل_المتغير_نص( العنصر_الجديد ) ) {
			var العنصر_المؤقت = المستند.createElement('SPAN');
			if ( الموضع === 1 ) {
				العنصر.parentNode.insertBefore( العنصر_المؤقت , العنصر );
				ع( العنصر_المؤقت ).إستبدال( العنصر_الجديد );
			} else {
				العنصر.parentNode.insertBefore( العنصر_المؤقت , العنصر.nextSibling );
				ع( العنصر_المؤقت ).إستبدال( العنصر_الجديد );
			}
		} else if ( ع.هل_المتغير_عنصر( العنصر_الجديد ) ) {
			if ( الموضع === 1 ) {
				العنصر.parentNode.insertBefore( العنصر_الجديد , العنصر );
			} else {
				العنصر.parentNode.insertBefore( العنصر_الجديد , العنصر.nextSibling );
			}
		}
	} );
	return العناصر;
}

//! تستخدم لنسخ العناصر المحددة
//! مضاعفة العناصر
function نسخ_العناصر( العناصر ) {
	var ن = 0
	,العدد = العناصر.العناصر.length
	,العناصر_الجديدة = [];
	for ( ; ن < العدد ; ن++ ){
		var العنصر = العناصر.العناصر[ ن ];
		if ( ع.هل_المتغير_عنصر( العنصر ) ) {
			var العنصر_الجديد = العنصر.cloneNode( صحيح );
			if ( العناصر_الجديدة.indexOf( العنصر_الجديد ) === -1 ) {
				العناصر_الجديدة.push( العنصر_الجديد );
			}
		}
	}
	العناصر.العناصر = العناصر_الجديدة;
	return العناصر;
}

//! تستخدم لإدراج العناصر المحددة إلى عناصر أخرى
function إضافة_فروع_إلى_العناصر( العناصر , المطابقة , الموضع ) {
	var ن = 0
	,العدد = العناصر.العناصر.length
	,العناصر_المطابقة;
	if ( ع.هل_المتغير_نص( المطابقة ) ) {
		العناصر_المطابقة = ع( المطابقة );
		for ( ; ن < العدد ; ن++ ){
			var العنصر = العناصر.العناصر[ ن ];
			إضافة_فروع( العناصر_المطابقة , العنصر , الموضع );
		}
	} else {
		for ( ; ن < العدد ; ن++ ){
			var العنصر = العناصر.العناصر[ ن ];
			إضافة_فروع( ع( المطابقة ) , العنصر , الموضع );
		}
	}
	return العناصر;
}

//! تفعيل جميع الأحداث العربية
ع.كل( الأحداث_العربية , function( الحدث_العربي , الحدث ) {
	ع.prototype[ الحدث_العربي ] = function ( العملية ) {
		ع.كل( this.العناصر , function( الرقم , العنصر ) {
			إضافة_حدث( العنصر , {
				الحدث : الحدث
				,الحدث_العربي : الحدث_العربي
				,العملية : العملية
			} );
		} );
		return this;
	}
} );

//! تفعيل جميع الأحداث المخصصة
ع.كل( ع.الأحداث_المخصصة , function( الاسم , الحدث ) {
	ع.prototype[ الاسم ] = function ( العملية  ) {
		ع.كل( this.العناصر , function( الرقم , العنصر ) {
			إضافة_حدث( العنصر , {
				الحدث : الاسم
				,العملية : العملية
			} );
			ع.الأحداث_المخصصة[ الاسم ]( العنصر );
		} );
		return this;
	}
} );

//! تستخدم لجلب مصفوفة أحداث العنصر
//! المصفوفة تحوي جميع الأحداث المرتبطة بالعنصر
//! وعدد مرات تشغيل كل حدث
//! وهل الحدث يعمل أو لا
function جلب_مصفوفة_أحداث_العنصر( العنصر , الحدث ){
	var أحداث_العنصر = جلب_بيانات_العنصر_الأساسية( العنصر , "الأحداث" );
	أحداث_العنصر = أحداث_العنصر === "" ? {} : أحداث_العنصر;
	أحداث_العنصر[ الحدث ] = أحداث_العنصر[ الحدث ] === undefined ? [] : أحداث_العنصر[ الحدث ];
	أحداث_العنصر[ الحدث ][ "العمليات" ] = أحداث_العنصر[ الحدث ][ "العمليات" ] === undefined ? [] : أحداث_العنصر[ الحدث ][ "العمليات" ];
	أحداث_العنصر[ الحدث ][ "عدد_مرات_التشغيل" ] = أحداث_العنصر[ الحدث ][ "عدد_مرات_التشغيل" ] === undefined ? 0 : أحداث_العنصر[ الحدث ][ "عدد_مرات_التشغيل" ];
	أحداث_العنصر[ الحدث ][ "الحدث_يعمل" ] = أحداث_العنصر[ الحدث ][ "الحدث_يعمل" ] === undefined ? صحيح : أحداث_العنصر[ الحدث ][ "الحدث_يعمل" ];
	return أحداث_العنصر;
}

//! الأحداث المخصصة دوما تستخدم ربط_حدث لمنع ظهور الحدث في قائمة أحداث العنصر
function ربط_حدث( العنصر , البيانات ) {
	var أحداث_العنصر
	,الحدث = البيانات.الحدث
	,الحدث_العربي = البيانات.الحدث_العربي || الحدث
	,العملية = البيانات.العملية
	//! البيانات يمكن أن تقبل القيم
	//! الحدث: اسم الحدث باللغة الإنكليزية إذا كان حدث أساسي
	//! الحدث العربي: اسم الحدث باللغة العربية
	//! العملية المطلوب تشغيلها عند تشغيل الحدث
	,العملية_المؤقتة = function(){
			var بيانات_الحدث = جلب_معلومات_الحدث( arguments[0] );
			بيانات_الحدث = معلومات_الحدث( بيانات_الحدث , الحدث_العربي );
			بيانات_الحدث.نوع_الحدث = الحدث_العربي;
			بيانات_الحدث.الحدث_الأساسي = arguments[0];
			if ( typeof بيانات_الحدث.الحدث_الأساسي !== undefined ) {
				بيانات_الحدث.منع_المتابعة = function () {
					بيانات_الحدث.الحدث_الأساسي.preventDefault();
				};
			} else {
				بيانات_الحدث.منع_المتابعة = function () {};
			}
			بيانات_الحدث.محاكاة = خاطئ;
			بيانات_الحدث.البيانات = {};
			العملية.call( العنصر , بيانات_الحدث );
	};
	if (المستند.addEventListener) {
		العنصر.addEventListener( الحدث , العملية_المؤقتة , صحيح );
	} else {
		العنصر.attachEvent( "on" + الحدث , العملية_المؤقتة , صحيح );
	}
}

//! تستخدم لإضافة حدث إلى العنصر
//! يتم تخزين كافة الأحداث ضمن بيانات العنصر
function إضافة_حدث( العنصر , البيانات ) {
	var أحداث_العنصر
	,الحدث = البيانات.الحدث
	,الحدث_العربي = البيانات.الحدث_العربي || الحدث
	,العملية = البيانات.العملية
	,معرف_العملية = ع.توليد_نص(25)
	,العنصر_يعمل
	,الحدث_يعمل
	,عدد_مرات_التشغيل = 0
	,العملية_المؤقتة;
	
	//! البيانات يمكن أن تقبل القيم
	//! الحدث: اسم الحدث باللغة الإنكليزية إذا كان حدث أساسي
	//! الحدث العربي: اسم الحدث باللغة العربية
	//! العملية المطلوب تشغيلها عند تشغيل الحدث
	
	//! لمعرفة إذا كان العنصر تم تعطيله أو لا
	العنصر_يعمل = جلب_بيانات_العنصر_الأساسية( العنصر , "العنصر_يعمل" ) === خاطئ ? خاطئ : صحيح;
	تعديل_بيانات_العنصر_الأساسية( العنصر , "العنصر_يعمل" , العنصر_يعمل );
	تفعيل_أحداث_العنصر( العنصر , الحدث_العربي );
	أحداث_العنصر = جلب_مصفوفة_أحداث_العنصر( العنصر , الحدث_العربي );
	أحداث_العنصر[ الحدث_العربي ][ "العمليات" ].push( {
		العملية : العملية
		, الوقت : (new Date()).getTime()
		, المعرف : معرف_العملية
		, الحدث : الحدث_العربي
	} )
	تعديل_بيانات_العنصر_الأساسية( العنصر , "الأحداث" , أحداث_العنصر );
	العملية_المؤقتة = function(){
		
		//! تستخدم لمعرفة إذا كان الحدث يعمل أو لا
		الحدث_يعمل = أحداث_العنصر[ الحدث_العربي ][ "الحدث_يعمل" ];
		العنصر_يعمل = جلب_بيانات_العنصر_الأساسية( العنصر , "العنصر_يعمل" ) === خاطئ ? خاطئ : صحيح;
		if ( الحدث_يعمل && العنصر_يعمل ) {
			عدد_مرات_التشغيل++;
			أحداث_العنصر[ الحدث_العربي ][ "عدد_مرات_التشغيل" ] = عدد_مرات_التشغيل;
			تعديل_بيانات_العنصر_الأساسية( العنصر , "الأحداث" , أحداث_العنصر );
			var بيانات_الحدث = جلب_معلومات_الحدث( arguments[0] );
			بيانات_الحدث = معلومات_الحدث( بيانات_الحدث , الحدث_العربي );
			بيانات_الحدث.عدد_مرات_التشغيل = عدد_مرات_التشغيل || 0;
			بيانات_الحدث.نوع_الحدث = الحدث_العربي;
			بيانات_الحدث.الحدث_الأساسي = arguments[0];
			if ( typeof بيانات_الحدث.الحدث_الأساسي !== undefined ) {
				بيانات_الحدث.منع_المتابعة = function () {
					بيانات_الحدث.الحدث_الأساسي.preventDefault();
				};
			} else {
				بيانات_الحدث.منع_المتابعة = function () {};
			}
			بيانات_الحدث.محاكاة = خاطئ;
			بيانات_الحدث.البيانات = {};
			العملية.call( العنصر , بيانات_الحدث );
		}
	};
	if (المستند.addEventListener) {
		العنصر.addEventListener( الحدث , العملية_المؤقتة , صحيح );
	} else {
		العنصر.attachEvent( "on" + الحدث , العملية_المؤقتة , صحيح );
	}
}

function معلومات_الحدث( بيانات_الحدث , الحدث ) {
	if( this === النافذة ){
		return new معلومات_الحدث( بيانات_الحدث , الحدث );
	}
	var الحدث=this;
	ع.كل( بيانات_الحدث , function ( الاسم , القيمة ) {
		الحدث[ الاسم ] = القيمة;
	} );
	return الحدث;
}

function جلب_معلومات_الحدث( بيانات_الحدث ) {
	var الحدث = {}
	, البيانات_المطلوبة = {
		س : "offsetX"
		,ع : "offsetY"
		,الصفحة_س : "pageX"
		,الصفحة_ع : "pageY"
		,الشاشة_س : "screenX"
		,الشاشة_ع : "screenY"
		,العنصر : "srcElement"
		,الهدف : "target"
		,الوقت : "timeStamp"
		,المفتاح : "which"
	}
	ع.كل( البيانات_المطلوبة , function ( الاسم , القيمة ) {
		الحدث[ الاسم ] = بيانات_الحدث[ القيمة ] || null;
	} );
	return الحدث;
}

//! تستخدم لتتشغيل الأحداث المخصصة
function محاكاة_حدث_مخصص( العنصر , الحدث , البيانات ) {
	var أحداث_العنصر = جلب_مصفوفة_أحداث_العنصر( العنصر , الحدث )
	,عدد_مرات_التشغيل = أحداث_العنصر[ الحدث ][ "عدد_مرات_التشغيل" ] || 0
	,العنصر_يعمل
	,الحدث_يعمل;
	
	//! بيانات الحدث المخصص
	//! مثل الإحداثيات أو معلومات عن الحدث
	
	//! يتم البحث عن الحدث المطابق ضمن بيانات أحداث العنصر
	//! وتشغيل الأحداث المطابقة
	ع.كل( أحداث_العنصر[ الحدث ][ "العمليات" ] , function( الرقم , العملية ) {
		الحدث_يعمل = أحداث_العنصر[ الحدث ][ "الحدث_يعمل" ];
		العنصر_يعمل = جلب_بيانات_العنصر_الأساسية( العنصر , "العنصر_يعمل" ) === خاطئ ? خاطئ : صحيح;
		if ( الحدث_يعمل && العنصر_يعمل ) {
			عدد_مرات_التشغيل++;
			أحداث_العنصر[ الحدث ][ "عدد_مرات_التشغيل" ] = عدد_مرات_التشغيل;
			تعديل_بيانات_العنصر_الأساسية( العنصر , "الأحداث" , أحداث_العنصر );
			var بيانات_الحدث = معلومات_الحدث( البيانات , الحدث );
			بيانات_الحدث.عدد_مرات_التشغيل = عدد_مرات_التشغيل || 0;
			بيانات_الحدث.نوع_الحدث = الحدث;
			بيانات_الحدث.الحدث_الأساسي = "لا يوجد";
			بيانات_الحدث.محاكاة = خاطئ;
			بيانات_الحدث.البيانات = {};
			العملية.العملية.call( العنصر , بيانات_الحدث );
		}
	} );
}

//! تستخدم لتشغيل حدث معين على عنصر
//! دون الحاجة للتفاعل مع العنصر مباشرة
function محاكاة_حدث( العنصر , الحدث , البيانات , حدث_أساسي ) {
	var أحداث_العنصر = جلب_مصفوفة_أحداث_العنصر( العنصر , الحدث )
	,عدد_مرات_التشغيل = أحداث_العنصر[ الحدث ][ "عدد_مرات_التشغيل" ] || 0
	,العنصر_يعمل
	,الحدث_يعمل
	,بيانات_الحدث;
	
	//! البيانات هي إختيارية
	//! يتم إدراجها ضمن معلومات الحدث
	
	ع.كل( أحداث_العنصر[ الحدث ][ "العمليات" ] , function( الرقم , العملية ) {
		الحدث_يعمل = أحداث_العنصر[ الحدث ][ "الحدث_يعمل" ];
		العنصر_يعمل = جلب_بيانات_العنصر_الأساسية( العنصر , "العنصر_يعمل" ) === خاطئ ? خاطئ : صحيح;
		if ( الحدث_يعمل && العنصر_يعمل ) {
			عدد_مرات_التشغيل++;
			أحداث_العنصر[ الحدث ][ "عدد_مرات_التشغيل" ] = عدد_مرات_التشغيل;
			تعديل_بيانات_العنصر_الأساسية( العنصر , "الأحداث" , أحداث_العنصر );
			بيانات_الحدث = جلب_معلومات_الحدث( {} );
			بيانات_الحدث = معلومات_الحدث( بيانات_الحدث , الحدث );
			بيانات_الحدث.عدد_مرات_التشغيل = عدد_مرات_التشغيل || 0;
			بيانات_الحدث.نوع_الحدث = الحدث;
			بيانات_الحدث.الحدث_الأساسي = "لا يوجد";
			بيانات_الحدث.محاكاة = صحيح;
			بيانات_الحدث.البيانات = البيانات || {};
			if ( حدث_أساسي ) {
				
				//! إذا أردت تغيير معلومات الحدث الأساسية وإظهار فقط البيانات
				//! يتم وضع قيمة true لـ حدث_أساسي
				بيانات_الحدث = البيانات;
			}
			العملية.العملية.call( العنصر , بيانات_الحدث );
		}
	} );
}

//! تستخدم لتعطيل أحداث معينة لعنصر
function تعطيل_أحداث_العنصر( العنصر , الأحداث ) {
	ع.كل( الأحداث.split( " " ) , function ( الرقم , الحدث ) {
		var أحداث_العنصر = جلب_مصفوفة_أحداث_العنصر( العنصر , الحدث );
		أحداث_العنصر[ الحدث ][ "الحدث_يعمل" ] = خاطئ;
		تعديل_بيانات_العنصر_الأساسية( العنصر , "الأحداث" , أحداث_العنصر );
	} );
}

//! تستخدم لتفعيل أحداث معينة لعنصر
function تفعيل_أحداث_العنصر( العنصر , الأحداث ) {
	ع.كل( الأحداث.split( " " ) , function ( الرقم , الحدث ) {
		var أحداث_العنصر = جلب_مصفوفة_أحداث_العنصر( العنصر , الحدث );
		أحداث_العنصر[ الحدث ][ "الحدث_يعمل" ] = صحيح;
		تعديل_بيانات_العنصر_الأساسية( العنصر , "الأحداث" , أحداث_العنصر );
	} );
}

//! تستخدم لجلب أو تعديل بيانات العنصر
function بيانات_العناصر( العناصر , الاسم , القيمة ) {
	var ن = 0
	,العدد = العناصر.العناصر.length;
	if ( الاسم ) {
		الاسم = ع.استبدال_الكل( الاسم , " " , "_" );
	}
	for ( ; ن < العدد ; ن++ ){
		var العنصر = العناصر.العناصر[ ن ];
		التأكد_من_وجود_عنصر_بيانات( العنصر );
		if ( الاسم && !القيمة ) {
			if ( typeof القيمة === "boolean" ) {
				تعديل_بيانات_العنصر( العنصر , الاسم , القيمة );
			} else {
				return جلب_بيانات_العنصر( العنصر , الاسم );
			}
		} else if ( !الاسم && !القيمة ) {
			return جلب_كافة_بيانات_العنصر( العنصر );
		} else if ( الاسم && القيمة ) {
			تعديل_بيانات_العنصر( العنصر , الاسم , القيمة );
		}
	}
	return العناصر;
}

function التأكد_من_وجود_عنصر_بيانات( العنصر ) {
	if ( !العنصر["البيانات"] ) {
		العنصر[ "البيانات" ] = { بيانات_المستخدم : {} , البيانات_الأساسية : {} };
	}
}

function جلب_بيانات_العنصر( العنصر , الاسم ) {
	التأكد_من_وجود_عنصر_بيانات( العنصر );
	var القيمة = العنصر[ "البيانات" ][ "بيانات_المستخدم" ][ الاسم ];
	return القيمة === undefined ? "" : القيمة;
}

function تعديل_بيانات_العنصر( العنصر , الاسم , القيمة ) {
	التأكد_من_وجود_عنصر_بيانات( العنصر );
	العنصر[ "البيانات" ][ "بيانات_المستخدم" ][ الاسم ] = القيمة;
}

function جلب_كافة_بيانات_العنصر( العنصر ) {
	التأكد_من_وجود_عنصر_بيانات( العنصر );
	var القيمة = العنصر[ "البيانات" ][ "بيانات_المستخدم" ];
	return القيمة === undefined ? {} : القيمة;
}

function جلب_بيانات_العنصر_الأساسية( العنصر , الاسم ) {
	التأكد_من_وجود_عنصر_بيانات( العنصر );
	var القيمة = العنصر[ "البيانات" ][ "البيانات_الأساسية" ][ الاسم ];
	return القيمة === undefined ? "" : القيمة;
}

function تعديل_بيانات_العنصر_الأساسية( العنصر , الاسم , القيمة ) {
	التأكد_من_وجود_عنصر_بيانات( العنصر );
	العنصر[ "البيانات" ][ "البيانات_الأساسية" ][ الاسم ] = القيمة;
}

//! تستخدم للأحداث المستقبلية
//! في حال لم يتم إدراج العنصر بعد
//! العنصر الأساسي في الغالب document
function حدث_قادم( العنصر , الحدث , الحدث_العربي , المطابقة , العملية ) {
	var العناصر_المطابقة = جلب_العناصر( المطابقة )
	,العملية_المؤقتة
	,العنصر_المؤقت
	,أحداث_العنصر
	,العنصر_يعمل
	,الحدث_يعمل
	,عدد_مرات_التشغيل = 0;
	العملية_المؤقتة = function ( المعلومات ) {
		العنصر_المؤقت = المعلومات.target;
		if ( العناصر_المطابقة.indexOf( العنصر_المؤقت ) !== -1 ) {
			أحداث_العنصر = جلب_مصفوفة_أحداث_العنصر( العنصر_المؤقت , الحدث_العربي );
			عدد_مرات_التشغيل = أحداث_العنصر[ الحدث_العربي ][ "عدد_مرات_التشغيل" ] || 0
			الحدث_يعمل = أحداث_العنصر[ الحدث_العربي ][ "الحدث_يعمل" ];
			العنصر_يعمل = جلب_بيانات_العنصر_الأساسية( العنصر_المؤقت , "العنصر_يعمل" ) === خاطئ ? خاطئ : صحيح;
			if ( الحدث_يعمل && العنصر_يعمل ) {
				عدد_مرات_التشغيل++;
				أحداث_العنصر[ الحدث_العربي ][ "عدد_مرات_التشغيل" ] = عدد_مرات_التشغيل;
				تعديل_بيانات_العنصر_الأساسية( العنصر_المؤقت , "الأحداث" , أحداث_العنصر );
				var بيانات_الحدث = جلب_معلومات_الحدث( المعلومات );
				بيانات_الحدث = معلومات_الحدث( بيانات_الحدث , الحدث_العربي );
				بيانات_الحدث.عدد_مرات_التشغيل = عدد_مرات_التشغيل || 0;
				بيانات_الحدث.نوع_الحدث = الحدث_العربي;
				بيانات_الحدث.الحدث_الأساسي = المعلومات;
				بيانات_الحدث.محاكاة = خاطئ;
				بيانات_الحدث.البيانات = {};
				العملية.call( العنصر_المؤقت , بيانات_الحدث );
			}
		}
	};
	if (المستند.addEventListener) {
		العنصر.addEventListener( الحدث , العملية_المؤقتة , صحيح );
	} else {
		العنصر.attachEvent( "on" + الحدث , العملية_المؤقتة , صحيح );
	}
}

//! جلب العنصر الأول أو الأخير من مجموعة العناصر المطابقة
function جلب_العناصر_الأول_الأخير( العناصر , الرقم ) {
	var العناصر_الجديدة = [];
	if ( الرقم === 1 ) {
		العناصر_الجديدة.push( العناصر.العناصر[ 0 ] );
	} else {
		العناصر_الجديدة.push( العناصر.العناصر[ العناصر.العناصر.length - 1 ] );
	}
	العناصر.العناصر = العناصر_الجديدة;
	return العناصر;
}

//! تستخدم لجلب أو تعديل قيمة التمرير للعنصر
//! scrollTop , scrollLeft للعناصر العادية
//! pageYOffset , pageXOffset للنافذة والمستند
function جلب_تعديل_قيمة_التمرير( العناصر , القيمة , النوع ) {
	var ن = 0
	,العدد = العناصر.العناصر.length;
	for ( ; ن < العدد ; ن++ ){
		var الأعلى = النوع[ 1 ] === "pageYOffset",
		العنصر_المطلوب
		,العنصر = العناصر.العناصر[ ن ];
		if ( ع.هل_المتغير_نافذة( العنصر ) ) {
			العنصر_المطلوب = العنصر;
		} else if ( ع.هل_المتغير_مستند( العنصر ) ) {
			العنصر_المطلوب = العنصر.defaultView;
		}
		if ( !القيمة && القيمة !== 0 ) {
			return العنصر_المطلوب ? العنصر_المطلوب[ النوع[ 1 ] ] : العنصر[ النوع[ 0 ] ];
		} else {
			if ( العنصر_المطلوب ) {
				العنصر_المطلوب.scrollTo( !الأعلى ? القيمة : العنصر_المطلوب.pageXOffset, الأعلى ? القيمة : العنصر_المطلوب.pageYOffset );
			} else {
				العنصر[ النوع[ 0 ] ] = القيمة;
			}
		}
	}
	return العناصر;
}

//! تستخدم لتعديل قيمة التمرير العلوي أو الجانبي للعنصر مع المؤثرات
function عمل_مؤثرات_التمرير( العناصر , القيم , الوقت , العملية ) {
	var _الوقت = ع.هل_المتغير_رقم( الوقت ) && ع.جلب_الرقم( الوقت ) > 0 ? ع.جلب_الرقم( الوقت ) : مدة_المؤثر_الأساسية
	,_العملية = ع.هل_المتغير_عملية( الوقت ) ? الوقت : ع.هل_المتغير_عملية( العملية ) ? العملية : خاطئ;
	ع.كل( العناصر.العناصر , function( الرقم , العنصر ) {
		تعديل_بيانات_العنصر_الأساسية( العنصر , "المؤثر_يعمل" , صحيح );
		ع.كل( القيم , function( الخاصية , القيمة ) {
			var نوع_التمرير = الخاصية === "علوي" ? [ "scrollTop" , "pageYOffset" ] : [ "scrollLeft" , "pageXOffset" ]
			,القيمة_الأساسية = الخاصية === "علوي" ? ع( العنصر ).التمرير_العلوي() : ع( العنصر ).التمرير_الجانبي()
			,القيمة_الجديدة = القيمة;
			تطبيق_مؤثرات_التمرير( العنصر , الخاصية , القيمة_الأساسية , القيمة_الجديدة , _الوقت );
		} );
		setTimeout( function(){
			تعديل_بيانات_العنصر_الأساسية( العنصر , "المؤثر_يعمل" , خاطئ );
			if ( _العملية ) {
				_العملية.call( العنصر );
			}
		} ,الوقت);
	} );
	return العناصر;
}

function تطبيق_مؤثرات_التمرير( العنصر , الخاصية , القيمة_الأساسية , القيمة_الجديدة , الوقت ) {
	var المؤقت = 0
	,وقت_المؤقت = 10
	,عملية_المؤثرات
	,الفرق = القيمة_الجديدة - القيمة_الأساسية
	,التغيير = الفرق / ( الوقت / وقت_المؤقت )
	,القياس_المؤقت = القيمة_الأساسية;
	عملية_المؤثرات=setInterval( function() {
		if( المؤقت >= الوقت ){
			clearInterval(عملية_المؤثرات);
			if ( الخاصية === "علوي" ) {
				ع( العنصر ).التمرير_العلوي( القيمة_الجديدة );
			} else {
				ع( العنصر ).التمرير_الجانبي( القيمة_الجديدة );
			}
			return;
		}
		if ( الخاصية === "علوي" ) {
			ع( العنصر ).التمرير_العلوي( القياس_المؤقت );
		} else {
			ع( العنصر ).التمرير_الجانبي( القياس_المؤقت );
		}
		القياس_المؤقت += التغيير;
		المؤقت += وقت_المؤقت;
	} , وقت_المؤقت);
}

//! تستخدم لتنفيذ طلبات xhr
ع.أجاكس = function ( الإعدادات ){
	if ( this === ع ) {
		return new ع.أجاكس( الإعدادات );
	}
	الإعدادات = الإعدادات || {};
	var معلومات_الطلب
	,الرابط = الإعدادات.الرابط || ""	//! مطلوب
	,نوع_الإرسال = الإعدادات.نوع_الإرسال || "GET"	//! إختياري - get
	
	//! async
	,المزامنة = الإعدادات.المزامنة || صحيح //! إختياري - true
	,اسم_المستخدم = الإعدادات.اسم_المستخدم || ""	//! إختياري
	,كلمة_المرور = الإعدادات.كلمة_المرور || "" //!  إختياري
	
	//! تحويل البيانات المرسلة إلى نص
	,معالجة_البيانات = الإعدادات.معالجة_البيانات || صحيح //! إختياري - true
	,نوع_المدخلات = الإعدادات.نوع_المدخلات || "application/x-www-form-urlencoded; charset=UTF-8" //! إختياري - "application/x-www-form-urlencoded; charset=UTF-8"
	
	//! القيم المراد إرسالها مع الطلب
	,البيانات = الإعدادات.البيانات || {} //! إختياري - {}
	
	//! نوع البيانات المخرجة ليتم قبولها
	,نوع_النتيجة = الإعدادات.نوع_النتيجة || "" //! إختياري - تحليل نوع البيانات المخرجة
	
	//! تستخدم للإعلان عن نتائج الطلب
	//! أجاكس_قبل_الإرسال , أجاكس_نجاح , أجاكس_خطأ
	//! أجاكس_إكتمال , أجاكس_إنتهاء_المهلة
	,إعلان_الأحداث = الإعدادات.إعلان_الأحداث || صحيح //! إختياري - true
	
	//! header
	,الترويسة = الإعدادات.الترويسة || {} //! إختياري - {}
	
	//! مهلة الطلب ميللي ثانية
	,المهلة = ع.جلب_الرقم( الإعدادات.المهلة ) || 0 //! إختياري - 
	
	//! يتم تشغيلها قبل إرسال الطلب
	,قبل_الإرسال = الإعدادات.قبل_الإرسال || function(){}
	
	//! يتم تشغيلها بعد نجاح الطلب
	,نجاح = الإعدادات.نجاح || function(){}
	
	//! يتم تشغيلها بعد فشل الطلب
	,خطأ = الإعدادات.خطأ || function(){}
	
	//! يتم تشغيلها بعد إكتال الطلب بالفشل أو النجاح
	,إكتمال = الإعدادات.إكتمال || function(){}
	
	//! يتم تشغيلها بعد إنتهاء مهلة الطلب
	,إنتهاء_المهلة = الإعدادات.إنتهاء_المهلة || function(){}
	,الطلب
	,بيانات_الإرسال
	,عملية_المهلة
	,نوع_الرد
	,بيانات_الطلب
	,الرد = ""
	,العمليات = {};
	معلومات_الطلب = this
	معلومات_الطلب.الرابط = الرابط;
	معلومات_الطلب.نوع_الإرسال = "";
	معلومات_الطلب.المزامنة = "";
	معلومات_الطلب.اسم_المستخدم = "";
	معلومات_الطلب.كلمة_المرور = "";
	معلومات_الطلب.معالجة_البيانات = "";
	معلومات_الطلب.البيانات = "";
	معلومات_الطلب.نوع_النتيجة = "";
	معلومات_الطلب.إعلان_الأحداث = "";
	معلومات_الطلب.الترويسة = "";
	معلومات_الطلب.المهلة = "";
	معلومات_الطلب.نوع_الإرسال = "";
	معلومات_الطلب.الرد_الأساسي = "";
	معلومات_الطلب.الرد = "";
	معلومات_الطلب.النتيجة_نجاح = خاطئ;
	معلومات_الطلب.النتيجة_إكتمال = خاطئ;
	معلومات_الطلب.النتيجة_إنتهاء_المهلة = خاطئ;
	معلومات_الطلب.النتيجة_خطأ = خاطئ;
	معلومات_الطلب.نوع_الرد = "";
	معلومات_الطلب.نص_الخطأ = "";
	معلومات_الطلب.رمز_الخطأ = 0;
	معلومات_الطلب.المعرف = ع.توليد_نص( 50 );
	ع.كل( [ "قبل_الإرسال" , "نجاح" , "إكتمال" , "خطأ" , "إنتهاء_المهلة" ] , function( الرقم , الاسم ) {
		العمليات[ الاسم ] = الاسم;
		معلومات_الطلب[ الاسم ] = function( العملية ){
			العمليات[ الاسم ] = العملية;
			return this;
		};
	} );
	setTimeout( function() {
		if ( ع.هل_المتغير_عملية( العمليات[ "قبل_الإرسال" ] ) ) {
			العمليات[ "قبل_الإرسال" ].call(صحيح);
		}
		قبل_الإرسال.call( معلومات_الطلب );
		if ( إعلان_الأحداث ) {
			محاكاة_حدث( المستند , "أجاكس_قبل_الإرسال" , معلومات_الطلب , صحيح  );
		}
		if ( !الرابط ) {
			معلومات_الطلب.النتيجة_خطأ = صحيح;
			معلومات_الطلب.نص_الخطأ = "لم يتم إدخال الرابط";
			معلومات_الطلب.رمز_الخطأ = 1;
			if ( ع.هل_المتغير_عملية( العمليات[ "خطأ" ] ) ) {
				العمليات[ "خطأ" ].call( معلومات_الطلب , "" , "خطأ، لم يتم إدخال الرابط" , 1 );
			}
			خطأ.call( معلومات_الطلب , "" , "خطأ، لم يتم إدخال الرابط" , 1 );
			if ( إعلان_الأحداث ) {
				محاكاة_حدث( المستند , "أجاكس_خطأ" , معلومات_الطلب , صحيح  );
			}
		} else {
			
			//! تجهيز الطلب
			الطلب = new XMLHttpRequest()
			نوع_الإرسال = "" + نوع_الإرسال;
			نوع_الإرسال = نوع_الإرسال.toUpperCase();
			if ( [ "POST" , "GET" ].indexOf( نوع_الإرسال ) ) { نوع_الإرسال = "GET"; }
			if ( نوع_الإرسال === "POST" ) {
				if ( معالجة_البيانات ) {
					بيانات_الإرسال = ع.تسلسل( البيانات );
				} else {
					بيانات_الإرسال = البيانات;
				}
			} else {
				بيانات_الإرسال = null
				الرابط += "?" + ع.تسلسل( البيانات );
			}
			المزامنة = المزامنة === خاطئ ? خاطئ : صحيح;
			if ( !اسم_المستخدم && !كلمة_المرور ) {
				الطلب.open( نوع_الإرسال , الرابط , المزامنة );
			} else {
				الطلب.open( نوع_الإرسال , الرابط , المزامنة , اسم_المستخدم , كلمة_المرور );
			}
			الطلب.setRequestHeader("Content-Type", نوع_المدخلات);
			نوع_النتيجة = "" + نوع_النتيجة;
			نوع_النتيجة = نوع_النتيجة.toUpperCase();
			if ( [ "XML" , "HTML" , "JSON" , "TEXT" ].indexOf( نوع_النتيجة ) ) { نوع_النتيجة = ""; }
			إعلان_الأحداث = إعلان_الأحداث === صحيح ? صحيح : خاطئ;
			ع.كل( الترويسة , function( الاسم , القيمة ) {
				الطلب.setRequestHeader( الاسم , القيمة );
			} );
			معلومات_الطلب.نوع_الإرسال = نوع_الإرسال;
			معلومات_الطلب.المزامنة = المزامنة;
			معلومات_الطلب.اسم_المستخدم = اسم_المستخدم;
			معلومات_الطلب.كلمة_المرور = كلمة_المرور;
			معلومات_الطلب.معالجة_البيانات = معالجة_البيانات;
			معلومات_الطلب.البيانات = البيانات;
			معلومات_الطلب.نوع_النتيجة = نوع_النتيجة;
			معلومات_الطلب.إعلان_الأحداث = إعلان_الأحداث;
			معلومات_الطلب.الترويسة = الترويسة;
			معلومات_الطلب.المهلة = المهلة;
			معلومات_الطلب.نوع_الإرسال = نوع_الإرسال;
			الطلب.onreadystatechange=function(){
				if ( الطلب.readyState == 4 ) {
					if ( المهلة ) {
						
						//! في حال تعيين مهلة للطلب
						//! إذا تم الرد على الطلب قبل وقت المهلة يتم إلغاء المؤقت
						clearTimeout( عملية_المهلة );
					}
					if ( الطلب.status === 200 ) {
						
						//! معرفة نوع المخرجات للطلب
						نوع_الرد = معرفة_نوع_المخرجات( الطلب.getResponseHeader("Content-Type") );
						if ( نوع_الرد === "JSON" ) {
							
							//! تحويل النص إلى json إذا كان النوع json
							الرد = ع.تحويل_إلى_جي_سون( الطلب.responseText );
						} else if ( نوع_الرد === "XML" ){
							
							//! تحويل النص إلى xml إذا كان النوع xml
							الرد = ع.تحويل_إلى_اكس_ام_ال( الطلب.responseText );
						} else {
							الرد = الطلب.responseText
						}
						معلومات_الطلب.نوع_الرد = نوع_الرد;
						معلومات_الطلب.الرد_الأساسي = الطلب.responseText;
						معلومات_الطلب.الرد = الرد;
						if ( !نوع_الرد ) {
							
							//! إذا كان نوع المخرجات غير مدعوم
							//! يتم إطلاق الحدث خطأ
							معلومات_الطلب.النتيجة_خطأ = صحيح;
							معلومات_الطلب.نص_الخطأ = "نوع البيانات غير مدعوم";
							معلومات_الطلب.رمز_الخطأ = 3;
							if ( ع.هل_المتغير_عملية( العمليات[ "خطأ" ] ) ) {
								العمليات[ "خطأ" ].call( معلومات_الطلب , الطلب.responseText , "خطأ، نوع البيانات غير مدعوم" , 3 );
							}
							خطأ.call( معلومات_الطلب , الطلب.responseText , "خطأ، نوع البيانات غير مدعوم" , 3 );
							if ( إعلان_الأحداث ) {
								محاكاة_حدث( المستند , "أجاكس_خطأ" , معلومات_الطلب , صحيح  );
							}
						} else if ( !نوع_النتيجة || نوع_النتيجة === نوع_الرد ) {
							
							//! إذا كان نوع المخرجات مطابق للإعدادات أو لم يتم تعيين النوع المطلوب
							//! يتم إطلاق الحدث نجاح
							معلومات_الطلب.النتيجة_نجاح = صحيح;
							if ( ع.هل_المتغير_عملية( العمليات[ "نجاح" ] ) ) {
								العمليات[ "نجاح" ].call( معلومات_الطلب , الرد );
							}
							نجاح.call( معلومات_الطلب , الرد );
							if ( إعلان_الأحداث ) {
								محاكاة_حدث( المستند , "أجاكس_نجاح" , معلومات_الطلب , صحيح  );
							}
						} else if ( نوع_النتيجة !== نوع_الرد ) {
							
							//! إذا كان نوع المخرجات غير مطابق للإعدادات
							//! يتم إطلاق الحدث خطأ
							معلومات_الطلب.النتيجة_خطأ = صحيح;
							معلومات_الطلب.نص_الخطأ = "نوع البيانات مختلف";
							معلومات_الطلب.رمز_الخطأ = 4;
							if ( ع.هل_المتغير_عملية( العمليات[ "خطأ" ] ) ) {
								العمليات[ "خطأ" ].call( معلومات_الطلب , الطلب.responseText , "خطأ، نوع البيانات مختلف" , 4 );
							}
							خطأ.call( معلومات_الطلب , الطلب.responseText , "خطأ، نوع البيانات مختلف" , 4 );
							if ( إعلان_الأحداث ) {
								محاكاة_حدث( المستند , "أجاكس_خطأ" , معلومات_الطلب , صحيح  );
							}
						}
						
						//! يتم إطلاق الحدث إكتمال
						معلومات_الطلب.النتيجة_إكتمال = صحيح;
						if ( ع.هل_المتغير_عملية( العمليات[ "إكتمال" ] ) ) {
							العمليات[ "إكتمال" ].call( معلومات_الطلب , الرد );
						}
						إكتمال.call( معلومات_الطلب , الرد );
						if ( إعلان_الأحداث ) {
							محاكاة_حدث( المستند , "أجاكس_إكتمال" , معلومات_الطلب , صحيح  );
						}
					} else if ( الطلب.status === 404 ) {
						معلومات_الطلب.النتيجة_خطأ = صحيح;
						معلومات_الطلب.نص_الخطأ = "الرابط غير موجود";
						معلومات_الطلب.رمز_الخطأ = 2;
						معلومات_الطلب.الرد_الأساسي = الطلب.responseText;
						معلومات_الطلب.الرد = الطلب.responseText;
						if ( ع.هل_المتغير_عملية( العمليات[ "خطأ" ] ) ) {
							العمليات[ "خطأ" ].call( معلومات_الطلب , الطلب.responseText , "خطأ، الرابط غير موجود" , 2 );
						}
						خطأ.call( معلومات_الطلب , الطلب.responseText , "خطأ، الرابط غير موجود" , 2 );
						if ( إعلان_الأحداث ) {
							محاكاة_حدث( المستند , "أجاكس_خطأ" , معلومات_الطلب , صحيح  );
						}
					}
				}
			}
			
			//! إرسال الطلب
			الطلب.send(بيانات_الإرسال);
			if ( المهلة ) {
				
				//! إذا تم تعيين مهلة يتم حساب الوقت
				//! ومن ثم يتم مقاطعة الطلب إذا تم تجاوز الوقت المسموح
				//! ويطلق الحدث إنتهاء_المهلة و خطأ
				عملية_المهلة = setTimeout( function () {
					الطلب.abort();
					معلومات_الطلب.النتيجة_خطأ = صحيح;
					معلومات_الطلب.النتيجة_إنتهاء_المهلة = صحيح;
					معلومات_الطلب.نص_الخطأ = "انتهاء مهلة الإتصال";
					معلومات_الطلب.رمز_الخطأ = 5;
					if ( ع.هل_المتغير_عملية( العمليات[ "خطأ" ] ) ) {
						العمليات[ "خطأ" ].call( معلومات_الطلب , "" , "خطأ، انتهاء مهلة الإتصال" , 5 );
					}
					خطأ.call( معلومات_الطلب , "" , "خطأ، انتهاء مهلة الإتصال" , 5 );
					if ( ع.هل_المتغير_عملية( العمليات[ "إنتهاء_المهلة" ] ) ) {
						العمليات[ "إنتهاء_المهلة" ].call( معلومات_الطلب , معلومات_الطلب );
					}
					إنتهاء_المهلة.call( معلومات_الطلب , معلومات_الطلب );
					if ( إعلان_الأحداث ) {
						محاكاة_حدث( المستند , "أجاكس_خطأ" , معلومات_الطلب , صحيح );
						محاكاة_حدث( المستند , "أجاكس_إنتهاء_المهلة" , معلومات_الطلب , صحيح  );
					}
				} , المهلة );
			}
		}
	},1);
}

function معرفة_نوع_المخرجات( الترويسة ) {
	الترويسة = الترويسة.toLowerCase();
	if ( الترويسة.indexOf( "text/xml" ) !== -1 ) {
		return "XML";
	} else if ( الترويسة.indexOf( "application/json" ) !== -1 ) {
		return "JSON";
	} else if ( الترويسة.indexOf( "text/html" ) !== -1 ) {
		return "HTML";
	} else if ( الترويسة.indexOf( "text/plain" ) !== -1 ) {
		return "TEXT";
	} else {
		return خاطئ;
	}
}

//! تستخدم لإرسال طلب أجاكس نوع post
//! المطلوب الأساسي هو الرابط
//! ويتم تحليل نوع المخرجات تلقائيا
ع.بوست = function( الرابط , البيانات , عملية_النجاح ) {
	var البيانات_المؤقتة = ع.هل_المتغير_مصفوفة_موضوعية( البيانات ) ? البيانات : {}
	,العملية_المؤقتة = ع.هل_المتغير_عملية( البيانات ) ? البيانات : ع.هل_المتغير_عملية( عملية_النجاح ) ? عملية_النجاح: function(){};
	return new ع.أجاكس({
		الرابط:الرابط
		,النوع:"post"
		,البيانات:البيانات_المؤقتة
		,نجاح:العملية_المؤقتة
	});
}

//! تستخدم لإرسال طلب أجاكس نوع get
//! المطلوب الأساسي هو الرابط
//! ويتم تحليل نوع المخرجات تلقائيا
ع.جيت = function( الرابط , البيانات , عملية_النجاح ) {
	var البيانات_المؤقتة = ع.هل_المتغير_مصفوفة_موضوعية( البيانات ) ? البيانات : {}
	,العملية_المؤقتة = ع.هل_المتغير_عملية( البيانات ) ? البيانات : ع.هل_المتغير_عملية( عملية_النجاح ) ? عملية_النجاح: function(){};
	return new ع.أجاكس({
		الرابط:الرابط
		,النوع:"GET"
		,البيانات:البيانات_المؤقتة
		,نجاح:العملية_المؤقتة
	});
}






/*!
 *
 *		السكربت العربي يخول المطور كتابة الجافا سكربت باللغة العربية
 *		ويتم تغيير جميع القيم إلى اللغة الإنكليزية ليتم تشغيلها على الصفحة
 *		
*/







ع(المستند).استعداد(function(){
	معالجة_السكربت_العربي();
});

function معالجة_السكربت_العربي(){
	ع("arabicScript").إخفاء();
	ع("arabicScript").كل( function () {
		استبدال_السكربت_العربي( this , تحويل_الكود_العربي( ع(this).النص() ) );
	} );
}

متغيرات_السكربت_1 = {
	عملية : {
		الكلمة_الأساسية : "function"
		,الحرف_قبل : [ "(" ,")" , "}", "{" , " " , "\t" , "\n" , "\r" , ";" , "؛" , "،" , "," , "!" ]
		,الحرف_بعد : [ "(" ,")" , " " , "\t" , "\n" , "\r" ]
	}
	, متغير : {
		الكلمة_الأساسية : "var"
		,الحرف_قبل : [ ")" , "(" , "}" , "{" , " " , "\t" , "\n" , "\r" , ";" , "؛" , "،" , "," ]
		,الحرف_بعد : [ " " , "\t" , "\n" , "\r" , ";" , "؛" , "،" , "," ]
	}
	, ثابت : {
		الكلمة_الأساسية : "const"
		,الحرف_قبل : [ ")" , "(" , "}" , "{" , " " , "\t" , "\n" , "\r" , ";" , "؛" , "،" , "," ]
		,الحرف_بعد : [ " " , "\t" , "\n" , "\r" , ";" , "؛" , "،" , "," ]
	}
	, إرجاع : {
		الكلمة_الأساسية : "return"
		,الحرف_قبل : [ "}" , "{" , " " , "\t" , "\n" , "\r" , ";" , "؛" ]
		,الحرف_بعد : [ "}" , "{" , " " , "\t" , "\n" , "\r" , ";" , "؛" , "!" ]
	}
	, من_أجل : {
		الكلمة_الأساسية : "for"
		,الحرف_قبل : [ "}" , "{" , " " , "\t" , "\n" , "\r" , ";" , "؛" ]
		,الحرف_بعد : [ ")" , "(" , " " , "\t" , "\n" , "\r" ]
	}
	, مقاطعة : {
		الكلمة_الأساسية : "break"
		,الحرف_قبل : [ "}" , "{" , " " , "\t" , "\n" , "\r" , ";" , "؛" ]
		,الحرف_بعد : [ "}" , "{" , " " , "\t" , "\n" , "\r" , ";" , "؛" ]
	}
	, متابعة : {
		الكلمة_الأساسية : "continue"
		,الحرف_قبل : [ "}" , "{" , " " , "\t" , "\n" , "\r" , ";" , "؛" ]
		,الحرف_بعد : [ "}" , "{" , " " , "\t" , "\n" , "\r" , ";" , "؛" ]
	}
	, بينما : {
		الكلمة_الأساسية : "while"
		,الحرف_قبل : [ "}" , "{" , " " , "\t" , "\n" , "\r" , ";" , "؛" ]
		,الحرف_بعد : [ ")" , "(" , " " , "\t" , "\n" , "\r" , ";" , "؛" ]
	}
	, سويتش : {
		الكلمة_الأساسية : "switch"
		,الحرف_قبل : [ "}" , "{" , " " , "\t" , "\n" , "\r" , ";" , "؛" ]
		,الحرف_بعد : [ ")" , "(" , " " , "\t" , "\n" , "\r" , ";" , "؛" ]
	}
	, الحالة : {
		الكلمة_الأساسية : "case"
		,الحرف_قبل : [ "}" , "{" , " " , "\t" , "\n" , "\r" , ";" , "؛" ]
		,الحرف_بعد : [ ")" , "(" , " " , "\t" , "\n" , "\r" , ";" , "؛" ]
	}
	, إفتراضي : {
		الكلمة_الأساسية : "default"
		,الحرف_قبل : [ "}" , "{" , " " , "\t" , "\n" , "\r" , ";" , "؛" ]
		,الحرف_بعد : [ ")" , "(" , " " , "\t" , "\n" , "\r" , ";" , "؛" , ":" ]
	}
	, جديد : {
		الكلمة_الأساسية : "new"
		,الحرف_قبل : [ ")" , "(" , "}" , "{" , " " , "\t" , "\n" , "\r" , ";" , "؛", "=" ]
		,الحرف_بعد : [ ")" , "(" , " " , "\t" , "\n" , "\r" , ";" , "؛" , ":" ]
	}
	, نوع : {
		الكلمة_الأساسية : "typeof"
		,الحرف_قبل : [ ")" , "(" , "}" , "{" , " " , "\t" , "\n" , "\r" , ";" , "؛" , "=" , "!" ]
		,الحرف_بعد : [ ")" , "(" , " " , "\t" , "\n" , "\r" , ";" , "؛" , ":" , "=" , "!" ]
	}
	, حذف : {
		الكلمة_الأساسية : "delete"
		,الحرف_قبل : [ "}" , "{" , " " , "\t" , "\n" , "\r" , ";" , "؛" ]
		,الحرف_بعد : [ " " , "\t" , "\n" , "\r" , ";" , "؛" , ":" ]
	}
	, هذا : {
		الكلمة_الأساسية : "this"
		,الحرف_قبل : [ ")" , "(" , "}" , "{" , " " , "\t" , "\n" , "\r" , ";" , "؛" , "=" , "!" ]
		,الحرف_بعد : [ ")" , "(" , " " , "\t" , "\n" , "\r" , ";" , "؛" , ":", "=" , "!" ]
	}
};

متغيرات_السكربت_2 = {
	إذا_كان : {
		الكلمة_الأساسية : "if"
		,الحرف_قبل : [ "}" , "{" , " " , "\t" , "\n" , "\r" , ";" , "؛" ]
		,الحرف_بعد : [ ")" , "(" , " " , "\t" , "\n" , "\r" ]
	}
	, أو_إذا : {
		الكلمة_الأساسية : "else if"
		,الحرف_قبل : [ "}" , "{" , " " , "\t" , "\n" , "\r" ]
		,الحرف_بعد : [ ")" , "(" , " " , "\t" , "\n" , "\r" ]
	}
	, آخر : {
		الكلمة_الأساسية : "else"
		,الحرف_قبل : [ "}" , "{" , " " , "\t" , "\n" , "\r" ]
		,الحرف_بعد : [ "}" , "{" , " " , "\t" , "\n" , "\r" ]
	}
};

function تحويل_الكود_العربي( الكود ){
	var النص = الكود
	,البحث = /'((?:\\.|[^'])*)'|"((?:\\.|[^"])*)"/igm
	,نص = ع.توليد_نص(25)+"_"
	,الترقيم = 0
	,الكود_الجديد = الكود
	,النصوص = {};
	while (التطابق = البحث.exec(الكود)) {
		var النص_المؤقت = نص + الترقيم
		,المطابقة = التطابق[0];
		الكود_الجديد = الكود_الجديد.replace(المطابقة,النص_المؤقت);
		النصوص[ النص_المؤقت ] = المطابقة;
		الترقيم++;
	}
	الكود_الجديد = الكود_الجديد.replace(new RegExp("؛", 'g'), ";");
	الكود_الجديد = الكود_الجديد.replace(new RegExp("،", 'g'), ",");
	ع.كل( متغيرات_السكربت_1 , function( الكلمة , المتغيرات ) {
		الكود_الجديد = استبدال_السكربت_1( الكود_الجديد , الكلمة , المتغيرات[ "الحرف_قبل" ] , المتغيرات[ "الحرف_بعد" ] , المتغيرات[ "الكلمة_الأساسية" ] )
	} );
	ع.كل( متغيرات_السكربت_2 , function( الكلمة , المتغيرات ) {
		الكود_الجديد = استبدال_السكربت_2( الكود_الجديد , الكلمة , المتغيرات[ "الحرف_قبل" ] , المتغيرات[ "الحرف_بعد" ] , المتغيرات[ "الكلمة_الأساسية" ] )
	} );

	ع.كل( النصوص , function( النص_المؤقت , النص ) {
		الكود_الجديد = الكود_الجديد.replace( النص_المؤقت , النص );
	} );
	return الكود_الجديد;
}

function استبدال_السكربت_1( الكود , الكلمة , الحرف_قبل , الحرف_بعد , الكلمة_الأساسية ) {
	var النص = الكود;
	while(
		النص.indexOf( الكلمة ) !== -1
		&&
		الحرف_قبل.indexOf(النص[النص.indexOf( الكلمة ) - 1]) !== -1
		&&
		الحرف_بعد.indexOf(النص[النص.indexOf( الكلمة ) + الكلمة.length ]) !== -1
	) {
		النص = النص.replace( الكلمة , الكلمة_الأساسية );
	}
	return النص;
}

function استبدال_السكربت_2( الكود , الكلمة , الحرف_قبل , الحرف_بعد , الكلمة_الأساسية ) {
	var النص = الكود;
	while(
		النص.indexOf( الكلمة ) !== -1
		&&
		الحرف_قبل.indexOf( ايجاد_الحرف_السابق( النص , النص.indexOf( الكلمة ) ) ) !== -1
		&&
		الحرف_بعد.indexOf( ايجاد_الحرف_التالي( النص , النص.indexOf( الكلمة ) + الكلمة.length )) !== -1
	) {
		النص = النص.replace( الكلمة , الكلمة_الأساسية );
	}
	return النص;
}


function استبدال_السكربت_العربي( السكربت_العربي , النص ){
	var السكربت = المستند.createElement("script");
	السكربت.textContent = النص;
	ع( السكربت_العربي ).إستبدال( السكربت );
}


النافذة.ع = ع;

} ) ();