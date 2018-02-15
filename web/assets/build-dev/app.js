/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'ev-emitter/ev-emitter',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {



function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));

/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
      'ev-emitter/ev-emitter'
    ], function( EvEmitter ) {
      return factory( window, EvEmitter );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter')
    );
  } else {
    // browser global
    window.imagesLoaded = factory(
      window,
      window.EvEmitter
    );
  }

})( typeof window !== 'undefined' ? window : this,

// --------------------------  factory -------------------------- //

function factory( window, EvEmitter ) {



var $ = window.jQuery;
var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
function makeArray( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
}

// -------------------------- imagesLoaded -------------------------- //

/**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */
function ImagesLoaded( elem, options, onAlways ) {
  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
  if ( !( this instanceof ImagesLoaded ) ) {
    return new ImagesLoaded( elem, options, onAlways );
  }
  // use elem as selector string
  var queryElem = elem;
  if ( typeof elem == 'string' ) {
    queryElem = document.querySelectorAll( elem );
  }
  // bail if bad element
  if ( !queryElem ) {
    console.error( 'Bad element for imagesLoaded ' + ( queryElem || elem ) );
    return;
  }

  this.elements = makeArray( queryElem );
  this.options = extend( {}, this.options );
  // shift arguments if no options set
  if ( typeof options == 'function' ) {
    onAlways = options;
  } else {
    extend( this.options, options );
  }

  if ( onAlways ) {
    this.on( 'always', onAlways );
  }

  this.getImages();

  if ( $ ) {
    // add jQuery Deferred object
    this.jqDeferred = new $.Deferred();
  }

  // HACK check async to allow time to bind listeners
  setTimeout( this.check.bind( this ) );
}

ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

ImagesLoaded.prototype.options = {};

ImagesLoaded.prototype.getImages = function() {
  this.images = [];

  // filter & find items if we have an item selector
  this.elements.forEach( this.addElementImages, this );
};

/**
 * @param {Node} element
 */
ImagesLoaded.prototype.addElementImages = function( elem ) {
  // filter siblings
  if ( elem.nodeName == 'IMG' ) {
    this.addImage( elem );
  }
  // get background image on element
  if ( this.options.background === true ) {
    this.addElementBackgroundImages( elem );
  }

  // find children
  // no non-element nodes, #143
  var nodeType = elem.nodeType;
  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
    return;
  }
  var childImgs = elem.querySelectorAll('img');
  // concat childElems to filterFound array
  for ( var i=0; i < childImgs.length; i++ ) {
    var img = childImgs[i];
    this.addImage( img );
  }

  // get child background images
  if ( typeof this.options.background == 'string' ) {
    var children = elem.querySelectorAll( this.options.background );
    for ( i=0; i < children.length; i++ ) {
      var child = children[i];
      this.addElementBackgroundImages( child );
    }
  }
};

var elementNodeTypes = {
  1: true,
  9: true,
  11: true
};

ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
    return;
  }
  // get url inside url("...")
  var reURL = /url\((['"])?(.*?)\1\)/gi;
  var matches = reURL.exec( style.backgroundImage );
  while ( matches !== null ) {
    var url = matches && matches[2];
    if ( url ) {
      this.addBackground( url, elem );
    }
    matches = reURL.exec( style.backgroundImage );
  }
};

/**
 * @param {Image} img
 */
ImagesLoaded.prototype.addImage = function( img ) {
  var loadingImage = new LoadingImage( img );
  this.images.push( loadingImage );
};

ImagesLoaded.prototype.addBackground = function( url, elem ) {
  var background = new Background( url, elem );
  this.images.push( background );
};

ImagesLoaded.prototype.check = function() {
  var _this = this;
  this.progressedCount = 0;
  this.hasAnyBroken = false;
  // complete if no images
  if ( !this.images.length ) {
    this.complete();
    return;
  }

  function onProgress( image, elem, message ) {
    // HACK - Chrome triggers event before object properties have changed. #83
    setTimeout( function() {
      _this.progress( image, elem, message );
    });
  }

  this.images.forEach( function( loadingImage ) {
    loadingImage.once( 'progress', onProgress );
    loadingImage.check();
  });
};

ImagesLoaded.prototype.progress = function( image, elem, message ) {
  this.progressedCount++;
  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
  // progress event
  this.emitEvent( 'progress', [ this, image, elem ] );
  if ( this.jqDeferred && this.jqDeferred.notify ) {
    this.jqDeferred.notify( this, image );
  }
  // check if completed
  if ( this.progressedCount == this.images.length ) {
    this.complete();
  }

  if ( this.options.debug && console ) {
    console.log( 'progress: ' + message, image, elem );
  }
};

ImagesLoaded.prototype.complete = function() {
  var eventName = this.hasAnyBroken ? 'fail' : 'done';
  this.isComplete = true;
  this.emitEvent( eventName, [ this ] );
  this.emitEvent( 'always', [ this ] );
  if ( this.jqDeferred ) {
    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
    this.jqDeferred[ jqMethod ]( this );
  }
};

// --------------------------  -------------------------- //

function LoadingImage( img ) {
  this.img = img;
}

LoadingImage.prototype = Object.create( EvEmitter.prototype );

LoadingImage.prototype.check = function() {
  // If complete is true and browser supports natural sizes,
  // try to check for image status manually.
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    // report based on naturalWidth
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    return;
  }

  // If none of the checks above matched, simulate loading on detached element.
  this.proxyImage = new Image();
  this.proxyImage.addEventListener( 'load', this );
  this.proxyImage.addEventListener( 'error', this );
  // bind to image as well for Firefox. #191
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.proxyImage.src = this.img.src;
};

LoadingImage.prototype.getIsImageComplete = function() {
  // check for non-zero, non-undefined naturalWidth
  // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
  return this.img.complete && this.img.naturalWidth;
};

LoadingImage.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.img, message ] );
};

// ----- events ----- //

// trigger specified handler for event type
LoadingImage.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

LoadingImage.prototype.onload = function() {
  this.confirm( true, 'onload' );
  this.unbindEvents();
};

LoadingImage.prototype.onerror = function() {
  this.confirm( false, 'onerror' );
  this.unbindEvents();
};

LoadingImage.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener( 'load', this );
  this.proxyImage.removeEventListener( 'error', this );
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

// -------------------------- Background -------------------------- //

function Background( url, element ) {
  this.url = url;
  this.element = element;
  this.img = new Image();
}

// inherit LoadingImage prototype
Background.prototype = Object.create( LoadingImage.prototype );

Background.prototype.check = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.img.src = this.url;
  // check if image is already complete
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    this.unbindEvents();
  }
};

Background.prototype.unbindEvents = function() {
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

Background.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.element, message ] );
};

// -------------------------- jQuery -------------------------- //

ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
  jQuery = jQuery || window.jQuery;
  if ( !jQuery ) {
    return;
  }
  // set local variable
  $ = jQuery;
  // $().imagesLoaded()
  $.fn.imagesLoaded = function( options, callback ) {
    var instance = new ImagesLoaded( this, options, callback );
    return instance.jqDeferred.promise( $(this) );
  };
};
// try making plugin
ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

return ImagesLoaded;

});


/**
 * bxSlider v4.2.12
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */

;(function($) {

  var defaults = {

    // GENERAL
    mode: 'horizontal',
    slideSelector: '',
    infiniteLoop: true,
    hideControlOnEnd: false,
    speed: 500,
    easing: null,
    slideMargin: 0,
    startSlide: 0,
    randomStart: false,
    captions: false,
    ticker: false,
    tickerHover: false,
    adaptiveHeight: false,
    adaptiveHeightSpeed: 500,
    video: false,
    useCSS: true,
    preloadImages: 'visible',
    responsive: true,
    slideZIndex: 50,
    wrapperClass: 'bx-wrapper',

    // TOUCH
    touchEnabled: true,
    swipeThreshold: 50,
    oneToOneTouch: true,
    preventDefaultSwipeX: true,
    preventDefaultSwipeY: false,

    // ACCESSIBILITY
    ariaLive: true,
    ariaHidden: true,

    // KEYBOARD
    keyboardEnabled: false,

    // PAGER
    pager: true,
    pagerType: 'full',
    pagerShortSeparator: ' / ',
    pagerSelector: null,
    buildPager: null,
    pagerCustom: null,

    // CONTROLS
    controls: true,
    nextText: 'Next',
    prevText: 'Prev',
    nextSelector: null,
    prevSelector: null,
    autoControls: false,
    startText: 'Start',
    stopText: 'Stop',
    autoControlsCombine: false,
    autoControlsSelector: null,

    // AUTO
    auto: false,
    pause: 4000,
    autoStart: true,
    autoDirection: 'next',
    stopAutoOnClick: false,
    autoHover: false,
    autoDelay: 0,
    autoSlideForOnePage: false,

    // CAROUSEL
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 0,
    slideWidth: 0,
    shrinkItems: false,

    // CALLBACKS
    onSliderLoad: function() { return true; },
    onSlideBefore: function() { return true; },
    onSlideAfter: function() { return true; },
    onSlideNext: function() { return true; },
    onSlidePrev: function() { return true; },
    onSliderResize: function() { return true; },
	onAutoChange: function() { return true; } //calls when auto slides starts and stops
  };

  $.fn.bxSlider = function(options) {

    if (this.length === 0) {
      return this;
    }

    // support multiple elements
    if (this.length > 1) {
      this.each(function() {
        $(this).bxSlider(options);
      });
      return this;
    }

    // create a namespace to be used throughout the plugin
    var slider = {},
    // set a reference to our slider element
    el = this,
    // get the original window dimens (thanks a lot IE)
    windowWidth = $(window).width(),
    windowHeight = $(window).height();

    // Return if slider is already initialized
    if ($(el).data('bxSlider')) { return; }

    /**
     * ===================================================================================
     * = PRIVATE FUNCTIONS
     * ===================================================================================
     */

    /**
     * Initializes namespace settings to be used throughout plugin
     */
    var init = function() {
      // Return if slider is already initialized
      if ($(el).data('bxSlider')) { return; }
      // merge user-supplied options with the defaults
      slider.settings = $.extend({}, defaults, options);
      // parse slideWidth setting
      slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
      // store the original children
      slider.children = el.children(slider.settings.slideSelector);
      // check if actual number of slides is less than minSlides / maxSlides
      if (slider.children.length < slider.settings.minSlides) { slider.settings.minSlides = slider.children.length; }
      if (slider.children.length < slider.settings.maxSlides) { slider.settings.maxSlides = slider.children.length; }
      // if random start, set the startSlide setting to random number
      if (slider.settings.randomStart) { slider.settings.startSlide = Math.floor(Math.random() * slider.children.length); }
      // store active slide information
      slider.active = { index: slider.settings.startSlide };
      // store if the slider is in carousel mode (displaying / moving multiple slides)
      slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1 ? true : false;
      // if carousel, force preloadImages = 'all'
      if (slider.carousel) { slider.settings.preloadImages = 'all'; }
      // calculate the min / max width thresholds based on min / max number of slides
      // used to setup and update carousel slides dimensions
      slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
      slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
      // store the current state of the slider (if currently animating, working is true)
      slider.working = false;
      // initialize the controls object
      slider.controls = {};
      // initialize an auto interval
      slider.interval = null;
      // determine which property to use for transitions
      slider.animProp = slider.settings.mode === 'vertical' ? 'top' : 'left';
      // determine if hardware acceleration can be used
      slider.usingCSS = slider.settings.useCSS && slider.settings.mode !== 'fade' && (function() {
        // create our test div element
        var div = document.createElement('div'),
        // css transition properties
        props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
        // test for each property
        for (var i = 0; i < props.length; i++) {
          if (div.style[props[i]] !== undefined) {
            slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
            slider.animProp = '-' + slider.cssPrefix + '-transform';
            return true;
          }
        }
        return false;
      }());
      // if vertical mode always make maxSlides and minSlides equal
      if (slider.settings.mode === 'vertical') { slider.settings.maxSlides = slider.settings.minSlides; }
      // save original style data
      el.data('origStyle', el.attr('style'));
      el.children(slider.settings.slideSelector).each(function() {
        $(this).data('origStyle', $(this).attr('style'));
      });

      // perform all DOM / CSS modifications
      setup();
    };

    /**
     * Performs all DOM and CSS modifications
     */
    var setup = function() {
      var preloadSelector = slider.children.eq(slider.settings.startSlide); // set the default preload selector (visible)

      // wrap el in a wrapper
      el.wrap('<div class="' + slider.settings.wrapperClass + '"><div class="bx-viewport"></div></div>');
      // store a namespace reference to .bx-viewport
      slider.viewport = el.parent();

      // add aria-live if the setting is enabled and ticker mode is disabled
      if (slider.settings.ariaLive && !slider.settings.ticker) {
        slider.viewport.attr('aria-live', 'polite');
      }
      // add a loading div to display while images are loading
      slider.loader = $('<div class="bx-loading" />');
      slider.viewport.prepend(slider.loader);
      // set el to a massive width, to hold any needed slides
      // also strip any margin and padding from el
      el.css({
        width: slider.settings.mode === 'horizontal' ? (slider.children.length * 1000 + 215) + '%' : 'auto',
        position: 'relative'
      });
      // if using CSS, add the easing property
      if (slider.usingCSS && slider.settings.easing) {
        el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
      // if not using CSS and no easing value was supplied, use the default JS animation easing (swing)
      } else if (!slider.settings.easing) {
        slider.settings.easing = 'swing';
      }
      // make modifications to the viewport (.bx-viewport)
      slider.viewport.css({
        width: '100%',
        overflow: 'hidden',
        position: 'relative'
      });
      slider.viewport.parent().css({
        maxWidth: getViewportMaxWidth()
      });
      // apply css to all slider children
      slider.children.css({
        // the float attribute is a reserved word in compressors like YUI compressor and need to be quoted #48
        'float': slider.settings.mode === 'horizontal' ? 'left' : 'none',
        listStyle: 'none',
        position: 'relative'
      });
      // apply the calculated width after the float is applied to prevent scrollbar interference
      slider.children.css('width', getSlideWidth());
      // if slideMargin is supplied, add the css
      if (slider.settings.mode === 'horizontal' && slider.settings.slideMargin > 0) { slider.children.css('marginRight', slider.settings.slideMargin); }
      if (slider.settings.mode === 'vertical' && slider.settings.slideMargin > 0) { slider.children.css('marginBottom', slider.settings.slideMargin); }
      // if "fade" mode, add positioning and z-index CSS
      if (slider.settings.mode === 'fade') {
        slider.children.css({
          position: 'absolute',
          zIndex: 0,
          display: 'none'
        });
        // prepare the z-index on the showing element
        slider.children.eq(slider.settings.startSlide).css({zIndex: slider.settings.slideZIndex, display: 'block'});
      }
      // create an element to contain all slider controls (pager, start / stop, etc)
      slider.controls.el = $('<div class="bx-controls" />');
      // if captions are requested, add them
      if (slider.settings.captions) { appendCaptions(); }
      // check if startSlide is last slide
      slider.active.last = slider.settings.startSlide === getPagerQty() - 1;
      // if video is true, set up the fitVids plugin
      if (slider.settings.video) { el.fitVids(); }
      if (slider.settings.preloadImages === 'all' || slider.settings.ticker) { preloadSelector = slider.children; }
      // only check for control addition if not in "ticker" mode
      if (!slider.settings.ticker) {
        // if controls are requested, add them
        if (slider.settings.controls) { appendControls(); }
        // if auto is true, and auto controls are requested, add them
        if (slider.settings.auto && slider.settings.autoControls) { appendControlsAuto(); }
        // if pager is requested, add it
        if (slider.settings.pager) { appendPager(); }
        // if any control option is requested, add the controls wrapper
        if (slider.settings.controls || slider.settings.autoControls || slider.settings.pager) { slider.viewport.after(slider.controls.el); }
      // if ticker mode, do not allow a pager
      } else {
        slider.settings.pager = false;
      }
      loadElements(preloadSelector, start);
    };

    var loadElements = function(selector, callback) {
      var total = selector.find('img:not([src=""]), iframe').length,
      count = 0;
      if (total === 0) {
        callback();
        return;
      }
      selector.find('img:not([src=""]), iframe').each(function() {
        $(this).one('load error', function() {
          if (++count === total) { callback(); }
        }).each(function() {
          if (this.complete || this.src == '') { $(this).trigger('load'); }
        });
      });
    };

    /**
     * Start the slider
     */
    var start = function() {
      // if infinite loop, prepare additional slides
      if (slider.settings.infiniteLoop && slider.settings.mode !== 'fade' && !slider.settings.ticker) {
        var slice    = slider.settings.mode === 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides,
        sliceAppend  = slider.children.slice(0, slice).clone(true).addClass('bx-clone'),
        slicePrepend = slider.children.slice(-slice).clone(true).addClass('bx-clone');
        if (slider.settings.ariaHidden) {
          sliceAppend.attr('aria-hidden', true);
          slicePrepend.attr('aria-hidden', true);
        }
        el.append(sliceAppend).prepend(slicePrepend);
      }
      // remove the loading DOM element
      slider.loader.remove();
      // set the left / top position of "el"
      setSlidePosition();
      // if "vertical" mode, always use adaptiveHeight to prevent odd behavior
      if (slider.settings.mode === 'vertical') { slider.settings.adaptiveHeight = true; }
      // set the viewport height
      slider.viewport.height(getViewportHeight());
      // make sure everything is positioned just right (same as a window resize)
      el.redrawSlider();
      // onSliderLoad callback
      slider.settings.onSliderLoad.call(el, slider.active.index);
      // slider has been fully initialized
      slider.initialized = true;
      // bind the resize call to the window
      if (slider.settings.responsive) { $(window).bind('resize', resizeWindow); }
      // if auto is true and has more than 1 page, start the show
      if (slider.settings.auto && slider.settings.autoStart && (getPagerQty() > 1 || slider.settings.autoSlideForOnePage)) { initAuto(); }
      // if ticker is true, start the ticker
      if (slider.settings.ticker) { initTicker(); }
      // if pager is requested, make the appropriate pager link active
      if (slider.settings.pager) { updatePagerActive(slider.settings.startSlide); }
      // check for any updates to the controls (like hideControlOnEnd updates)
      if (slider.settings.controls) { updateDirectionControls(); }
      // if touchEnabled is true, setup the touch events
      if (slider.settings.touchEnabled && !slider.settings.ticker) { initTouch(); }
      // if keyboardEnabled is true, setup the keyboard events
      if (slider.settings.keyboardEnabled && !slider.settings.ticker) {
        $(document).keydown(keyPress);
      }
    };

    /**
     * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
     */
    var getViewportHeight = function() {
      var height = 0;
      // first determine which children (slides) should be used in our height calculation
      var children = $();
      // if mode is not "vertical" and adaptiveHeight is false, include all children
      if (slider.settings.mode !== 'vertical' && !slider.settings.adaptiveHeight) {
        children = slider.children;
      } else {
        // if not carousel, return the single active child
        if (!slider.carousel) {
          children = slider.children.eq(slider.active.index);
        // if carousel, return a slice of children
        } else {
          // get the individual slide index
          var currentIndex = slider.settings.moveSlides === 1 ? slider.active.index : slider.active.index * getMoveBy();
          // add the current slide to the children
          children = slider.children.eq(currentIndex);
          // cycle through the remaining "showing" slides
          for (i = 1; i <= slider.settings.maxSlides - 1; i++) {
            // if looped back to the start
            if (currentIndex + i >= slider.children.length) {
              children = children.add(slider.children.eq(i - 1));
            } else {
              children = children.add(slider.children.eq(currentIndex + i));
            }
          }
        }
      }
      // if "vertical" mode, calculate the sum of the heights of the children
      if (slider.settings.mode === 'vertical') {
        children.each(function(index) {
          height += $(this).outerHeight();
        });
        // add user-supplied margins
        if (slider.settings.slideMargin > 0) {
          height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
        }
      // if not "vertical" mode, calculate the max height of the children
      } else {
        height = Math.max.apply(Math, children.map(function() {
          return $(this).outerHeight(false);
        }).get());
      }

      if (slider.viewport.css('box-sizing') === 'border-box') {
        height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom')) +
              parseFloat(slider.viewport.css('border-top-width')) + parseFloat(slider.viewport.css('border-bottom-width'));
      } else if (slider.viewport.css('box-sizing') === 'padding-box') {
        height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom'));
      }

      return height;
    };

    /**
     * Returns the calculated width to be used for the outer wrapper / viewport
     */
    var getViewportMaxWidth = function() {
      var width = '100%';
      if (slider.settings.slideWidth > 0) {
        if (slider.settings.mode === 'horizontal') {
          width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
        } else {
          width = slider.settings.slideWidth;
        }
      }
      return width;
    };

    /**
     * Returns the calculated width to be applied to each slide
     */
    var getSlideWidth = function() {
      var newElWidth = slider.settings.slideWidth, // start with any user-supplied slide width
      wrapWidth      = slider.viewport.width();    // get the current viewport width
      // if slide width was not supplied, or is larger than the viewport use the viewport width
      if (slider.settings.slideWidth === 0 ||
        (slider.settings.slideWidth > wrapWidth && !slider.carousel) ||
        slider.settings.mode === 'vertical') {
        newElWidth = wrapWidth;
      // if carousel, use the thresholds to determine the width
      } else if (slider.settings.maxSlides > 1 && slider.settings.mode === 'horizontal') {
        if (wrapWidth > slider.maxThreshold) {
          return newElWidth;
        } else if (wrapWidth < slider.minThreshold) {
          newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
        } else if (slider.settings.shrinkItems) {
          newElWidth = Math.floor((wrapWidth + slider.settings.slideMargin) / (Math.ceil((wrapWidth + slider.settings.slideMargin) / (newElWidth + slider.settings.slideMargin))) - slider.settings.slideMargin);
        }
      }
      return newElWidth;
    };

    /**
     * Returns the number of slides currently visible in the viewport (includes partially visible slides)
     */
    var getNumberSlidesShowing = function() {
      var slidesShowing = 1,
      childWidth = null;
      if (slider.settings.mode === 'horizontal' && slider.settings.slideWidth > 0) {
        // if viewport is smaller than minThreshold, return minSlides
        if (slider.viewport.width() < slider.minThreshold) {
          slidesShowing = slider.settings.minSlides;
        // if viewport is larger than maxThreshold, return maxSlides
        } else if (slider.viewport.width() > slider.maxThreshold) {
          slidesShowing = slider.settings.maxSlides;
        // if viewport is between min / max thresholds, divide viewport width by first child width
        } else {
          childWidth = slider.children.first().width() + slider.settings.slideMargin;
          slidesShowing = Math.floor((slider.viewport.width() +
            slider.settings.slideMargin) / childWidth) || 1;
        }
      // if "vertical" mode, slides showing will always be minSlides
      } else if (slider.settings.mode === 'vertical') {
        slidesShowing = slider.settings.minSlides;
      }
      return slidesShowing;
    };

    /**
     * Returns the number of pages (one full viewport of slides is one "page")
     */
    var getPagerQty = function() {
      var pagerQty = 0,
      breakPoint = 0,
      counter = 0;
      // if moveSlides is specified by the user
      if (slider.settings.moveSlides > 0) {
        if (slider.settings.infiniteLoop) {
          pagerQty = Math.ceil(slider.children.length / getMoveBy());
        } else {
          // when breakpoint goes above children length, counter is the number of pages
          while (breakPoint < slider.children.length) {
            ++pagerQty;
            breakPoint = counter + getNumberSlidesShowing();
            counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
          }
		  return counter;
        }
      // if moveSlides is 0 (auto) divide children length by sides showing, then round up
      } else {
        pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
      }
      return pagerQty;
    };

    /**
     * Returns the number of individual slides by which to shift the slider
     */
    var getMoveBy = function() {
      // if moveSlides was set by the user and moveSlides is less than number of slides showing
      if (slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()) {
        return slider.settings.moveSlides;
      }
      // if moveSlides is 0 (auto)
      return getNumberSlidesShowing();
    };

    /**
     * Sets the slider's (el) left or top position
     */
    var setSlidePosition = function() {
      var position, lastChild, lastShowingIndex;
      // if last slide, not infinite loop, and number of children is larger than specified maxSlides
      if (slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop) {
        if (slider.settings.mode === 'horizontal') {
          // get the last child's position
          lastChild = slider.children.last();
          position = lastChild.position();
          // set the left position
          setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.outerWidth())), 'reset', 0);
        } else if (slider.settings.mode === 'vertical') {
          // get the last showing index's position
          lastShowingIndex = slider.children.length - slider.settings.minSlides;
          position = slider.children.eq(lastShowingIndex).position();
          // set the top position
          setPositionProperty(-position.top, 'reset', 0);
        }
      // if not last slide
      } else {
        // get the position of the first showing slide
        position = slider.children.eq(slider.active.index * getMoveBy()).position();
        // check for last slide
        if (slider.active.index === getPagerQty() - 1) { slider.active.last = true; }
        // set the respective position
        if (position !== undefined) {
          if (slider.settings.mode === 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
          else if (slider.settings.mode === 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
        }
      }
    };

    /**
     * Sets the el's animating property position (which in turn will sometimes animate el).
     * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
     *
     * @param value (int)
     *  - the animating property's value
     *
     * @param type (string) 'slide', 'reset', 'ticker'
     *  - the type of instance for which the function is being
     *
     * @param duration (int)
     *  - the amount of time (in ms) the transition should occupy
     *
     * @param params (array) optional
     *  - an optional parameter containing any variables that need to be passed in
     */
    var setPositionProperty = function(value, type, duration, params) {
      var animateObj, propValue;
      // use CSS transform
      if (slider.usingCSS) {
        // determine the translate3d value
        propValue = slider.settings.mode === 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
        // add the CSS transition-duration
        el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
        if (type === 'slide') {
          // set the property value
          el.css(slider.animProp, propValue);
          if (duration !== 0) {
            // bind a callback method - executes when CSS transition completes
            el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
              //make sure it's the correct one
              if (!$(e.target).is(el)) { return; }
              // unbind the callback
              el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
              updateAfterSlideTransition();
            });
          } else { //duration = 0
            updateAfterSlideTransition();
          }
        } else if (type === 'reset') {
          el.css(slider.animProp, propValue);
        } else if (type === 'ticker') {
          // make the transition use 'linear'
          el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
          el.css(slider.animProp, propValue);
          if (duration !== 0) {
            el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
              //make sure it's the correct one
              if (!$(e.target).is(el)) { return; }
              // unbind the callback
              el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
              // reset the position
              setPositionProperty(params.resetValue, 'reset', 0);
              // start the loop again
              tickerLoop();
            });
          } else { //duration = 0
            setPositionProperty(params.resetValue, 'reset', 0);
            tickerLoop();
          }
        }
      // use JS animate
      } else {
        animateObj = {};
        animateObj[slider.animProp] = value;
        if (type === 'slide') {
          el.animate(animateObj, duration, slider.settings.easing, function() {
            updateAfterSlideTransition();
          });
        } else if (type === 'reset') {
          el.css(slider.animProp, value);
        } else if (type === 'ticker') {
          el.animate(animateObj, duration, 'linear', function() {
            setPositionProperty(params.resetValue, 'reset', 0);
            // run the recursive loop after animation
            tickerLoop();
          });
        }
      }
    };

    /**
     * Populates the pager with proper amount of pages
     */
    var populatePager = function() {
      var pagerHtml = '',
      linkContent = '',
      pagerQty = getPagerQty();
      // loop through each pager item
      for (var i = 0; i < pagerQty; i++) {
        linkContent = '';
        // if a buildPager function is supplied, use it to get pager link value, else use index + 1
        if (slider.settings.buildPager && $.isFunction(slider.settings.buildPager) || slider.settings.pagerCustom) {
          linkContent = slider.settings.buildPager(i);
          slider.pagerEl.addClass('bx-custom-pager');
        } else {
          linkContent = i + 1;
          slider.pagerEl.addClass('bx-default-pager');
        }
        // var linkContent = slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? slider.settings.buildPager(i) : i + 1;
        // add the markup to the string
        pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
      }
      // populate the pager element with pager links
      slider.pagerEl.html(pagerHtml);
    };

    /**
     * Appends the pager to the controls element
     */
    var appendPager = function() {
      if (!slider.settings.pagerCustom) {
        // create the pager DOM element
        slider.pagerEl = $('<div class="bx-pager" />');
        // if a pager selector was supplied, populate it with the pager
        if (slider.settings.pagerSelector) {
          $(slider.settings.pagerSelector).html(slider.pagerEl);
        // if no pager selector was supplied, add it after the wrapper
        } else {
          slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
        }
        // populate the pager
        populatePager();
      } else {
        slider.pagerEl = $(slider.settings.pagerCustom);
      }
      // assign the pager click binding
      slider.pagerEl.on('click touchend', 'a', clickPagerBind);
    };

    /**
     * Appends prev / next controls to the controls element
     */
    var appendControls = function() {
      slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
      slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
      // bind click actions to the controls
      slider.controls.next.bind('click touchend', clickNextBind);
      slider.controls.prev.bind('click touchend', clickPrevBind);
      // if nextSelector was supplied, populate it
      if (slider.settings.nextSelector) {
        $(slider.settings.nextSelector).append(slider.controls.next);
      }
      // if prevSelector was supplied, populate it
      if (slider.settings.prevSelector) {
        $(slider.settings.prevSelector).append(slider.controls.prev);
      }
      // if no custom selectors were supplied
      if (!slider.settings.nextSelector && !slider.settings.prevSelector) {
        // add the controls to the DOM
        slider.controls.directionEl = $('<div class="bx-controls-direction" />');
        // add the control elements to the directionEl
        slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
        // slider.viewport.append(slider.controls.directionEl);
        slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
      }
    };

    /**
     * Appends start / stop auto controls to the controls element
     */
    var appendControlsAuto = function() {
      slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
      slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
      // add the controls to the DOM
      slider.controls.autoEl = $('<div class="bx-controls-auto" />');
      // bind click actions to the controls
      slider.controls.autoEl.on('click', '.bx-start', clickStartBind);
      slider.controls.autoEl.on('click', '.bx-stop', clickStopBind);
      // if autoControlsCombine, insert only the "start" control
      if (slider.settings.autoControlsCombine) {
        slider.controls.autoEl.append(slider.controls.start);
      // if autoControlsCombine is false, insert both controls
      } else {
        slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
      }
      // if auto controls selector was supplied, populate it with the controls
      if (slider.settings.autoControlsSelector) {
        $(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
      // if auto controls selector was not supplied, add it after the wrapper
      } else {
        slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
      }
      // update the auto controls
      updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
    };

    /**
     * Appends image captions to the DOM
     */
    var appendCaptions = function() {
      // cycle through each child
      slider.children.each(function(index) {
        // get the image title attribute
        var title = $(this).find('img:first').attr('title');
        // append the caption
        if (title !== undefined && ('' + title).length) {
          $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
        }
      });
    };

    /**
     * Click next binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickNextBind = function(e) {
      e.preventDefault();
      if (slider.controls.el.hasClass('disabled')) { return; }
      // if auto show is running, stop it
      if (slider.settings.auto && slider.settings.stopAutoOnClick) { el.stopAuto(); }
      el.goToNextSlide();
    };

    /**
     * Click prev binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickPrevBind = function(e) {
      e.preventDefault();
      if (slider.controls.el.hasClass('disabled')) { return; }
      // if auto show is running, stop it
      if (slider.settings.auto && slider.settings.stopAutoOnClick) { el.stopAuto(); }
      el.goToPrevSlide();
    };

    /**
     * Click start binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickStartBind = function(e) {
      el.startAuto();
      e.preventDefault();
    };

    /**
     * Click stop binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickStopBind = function(e) {
      el.stopAuto();
      e.preventDefault();
    };

    /**
     * Click pager binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickPagerBind = function(e) {
      var pagerLink, pagerIndex;
      e.preventDefault();
      if (slider.controls.el.hasClass('disabled')) {
        return;
      }
      // if auto show is running, stop it
      if (slider.settings.auto  && slider.settings.stopAutoOnClick) { el.stopAuto(); }
      pagerLink = $(e.currentTarget);
      if (pagerLink.attr('data-slide-index') !== undefined) {
        pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
        // if clicked pager link is not active, continue with the goToSlide call
        if (pagerIndex !== slider.active.index) { el.goToSlide(pagerIndex); }
      }
    };

    /**
     * Updates the pager links with an active class
     *
     * @param slideIndex (int)
     *  - index of slide to make active
     */
    var updatePagerActive = function(slideIndex) {
      // if "short" pager type
      var len = slider.children.length; // nb of children
      if (slider.settings.pagerType === 'short') {
        if (slider.settings.maxSlides > 1) {
          len = Math.ceil(slider.children.length / slider.settings.maxSlides);
        }
        slider.pagerEl.html((slideIndex + 1) + slider.settings.pagerShortSeparator + len);
        return;
      }
      // remove all pager active classes
      slider.pagerEl.find('a').removeClass('active');
      // apply the active class for all pagers
      slider.pagerEl.each(function(i, el) { $(el).find('a').eq(slideIndex).addClass('active'); });
    };

    /**
     * Performs needed actions after a slide transition
     */
    var updateAfterSlideTransition = function() {
      // if infinite loop is true
      if (slider.settings.infiniteLoop) {
        var position = '';
        // first slide
        if (slider.active.index === 0) {
          // set the new position
          position = slider.children.eq(0).position();
        // carousel, last slide
        } else if (slider.active.index === getPagerQty() - 1 && slider.carousel) {
          position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
        // last slide
        } else if (slider.active.index === slider.children.length - 1) {
          position = slider.children.eq(slider.children.length - 1).position();
        }
        if (position) {
          if (slider.settings.mode === 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
          else if (slider.settings.mode === 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
        }
      }
      // declare that the transition is complete
      slider.working = false;
      // onSlideAfter callback
      slider.settings.onSlideAfter.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
    };

    /**
     * Updates the auto controls state (either active, or combined switch)
     *
     * @param state (string) "start", "stop"
     *  - the new state of the auto show
     */
    var updateAutoControls = function(state) {
      // if autoControlsCombine is true, replace the current control with the new state
      if (slider.settings.autoControlsCombine) {
        slider.controls.autoEl.html(slider.controls[state]);
      // if autoControlsCombine is false, apply the "active" class to the appropriate control
      } else {
        slider.controls.autoEl.find('a').removeClass('active');
        slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
      }
    };

    /**
     * Updates the direction controls (checks if either should be hidden)
     */
    var updateDirectionControls = function() {
      if (getPagerQty() === 1) {
        slider.controls.prev.addClass('disabled');
        slider.controls.next.addClass('disabled');
      } else if (!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd) {
        // if first slide
        if (slider.active.index === 0) {
          slider.controls.prev.addClass('disabled');
          slider.controls.next.removeClass('disabled');
        // if last slide
        } else if (slider.active.index === getPagerQty() - 1) {
          slider.controls.next.addClass('disabled');
          slider.controls.prev.removeClass('disabled');
        // if any slide in the middle
        } else {
          slider.controls.prev.removeClass('disabled');
          slider.controls.next.removeClass('disabled');
        }
      }
    };
	/* auto start and stop functions */
	var windowFocusHandler = function() { el.startAuto(); };
	var windowBlurHandler = function() { el.stopAuto(); };
    /**
     * Initializes the auto process
     */
    var initAuto = function() {
      // if autoDelay was supplied, launch the auto show using a setTimeout() call
      if (slider.settings.autoDelay > 0) {
        var timeout = setTimeout(el.startAuto, slider.settings.autoDelay);
      // if autoDelay was not supplied, start the auto show normally
      } else {
        el.startAuto();

        //add focus and blur events to ensure its running if timeout gets paused
        $(window).focus(windowFocusHandler).blur(windowBlurHandler);
      }
      // if autoHover is requested
      if (slider.settings.autoHover) {
        // on el hover
        el.hover(function() {
          // if the auto show is currently playing (has an active interval)
          if (slider.interval) {
            // stop the auto show and pass true argument which will prevent control update
            el.stopAuto(true);
            // create a new autoPaused value which will be used by the relative "mouseout" event
            slider.autoPaused = true;
          }
        }, function() {
          // if the autoPaused value was created be the prior "mouseover" event
          if (slider.autoPaused) {
            // start the auto show and pass true argument which will prevent control update
            el.startAuto(true);
            // reset the autoPaused value
            slider.autoPaused = null;
          }
        });
      }
    };

    /**
     * Initializes the ticker process
     */
    var initTicker = function() {
      var startPosition = 0,
      position, transform, value, idx, ratio, property, newSpeed, totalDimens;
      // if autoDirection is "next", append a clone of the entire slider
      if (slider.settings.autoDirection === 'next') {
        el.append(slider.children.clone().addClass('bx-clone'));
      // if autoDirection is "prev", prepend a clone of the entire slider, and set the left position
      } else {
        el.prepend(slider.children.clone().addClass('bx-clone'));
        position = slider.children.first().position();
        startPosition = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
      }
      setPositionProperty(startPosition, 'reset', 0);
      // do not allow controls in ticker mode
      slider.settings.pager = false;
      slider.settings.controls = false;
      slider.settings.autoControls = false;
      // if autoHover is requested
      if (slider.settings.tickerHover) {
        if (slider.usingCSS) {
          idx = slider.settings.mode === 'horizontal' ? 4 : 5;
          slider.viewport.hover(function() {
            transform = el.css('-' + slider.cssPrefix + '-transform');
            value = parseFloat(transform.split(',')[idx]);
            setPositionProperty(value, 'reset', 0);
          }, function() {
            totalDimens = 0;
            slider.children.each(function(index) {
              totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
            });
            // calculate the speed ratio (used to determine the new speed to finish the paused animation)
            ratio = slider.settings.speed / totalDimens;
            // determine which property to use
            property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
            // calculate the new speed
            newSpeed = ratio * (totalDimens - (Math.abs(parseInt(value))));
            tickerLoop(newSpeed);
          });
        } else {
          // on el hover
          slider.viewport.hover(function() {
            el.stop();
          }, function() {
            // calculate the total width of children (used to calculate the speed ratio)
            totalDimens = 0;
            slider.children.each(function(index) {
              totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
            });
            // calculate the speed ratio (used to determine the new speed to finish the paused animation)
            ratio = slider.settings.speed / totalDimens;
            // determine which property to use
            property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
            // calculate the new speed
            newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
            tickerLoop(newSpeed);
          });
        }
      }
      // start the ticker loop
      tickerLoop();
    };

    /**
     * Runs a continuous loop, news ticker-style
     */
    var tickerLoop = function(resumeSpeed) {
      var speed = resumeSpeed ? resumeSpeed : slider.settings.speed,
      position = {left: 0, top: 0},
      reset = {left: 0, top: 0},
      animateProperty, resetValue, params;

      // if "next" animate left position to last child, then reset left to 0
      if (slider.settings.autoDirection === 'next') {
        position = el.find('.bx-clone').first().position();
      // if "prev" animate left position to 0, then reset left to first non-clone child
      } else {
        reset = slider.children.first().position();
      }
      animateProperty = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
      resetValue = slider.settings.mode === 'horizontal' ? -reset.left : -reset.top;
      params = {resetValue: resetValue};
      setPositionProperty(animateProperty, 'ticker', speed, params);
    };

    /**
     * Check if el is on screen
     */
    var isOnScreen = function(el) {
      var win = $(window),
      viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
      },
      bounds = el.offset();

      viewport.right = viewport.left + win.width();
      viewport.bottom = viewport.top + win.height();
      bounds.right = bounds.left + el.outerWidth();
      bounds.bottom = bounds.top + el.outerHeight();

      return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    };

    /**
     * Initializes keyboard events
     */
    var keyPress = function(e) {
      var activeElementTag = document.activeElement.tagName.toLowerCase(),
      tagFilters = 'input|textarea',
      p = new RegExp(activeElementTag,['i']),
      result = p.exec(tagFilters);

      if (result == null && isOnScreen(el)) {
        if (e.keyCode === 39) {
          clickNextBind(e);
          return false;
        } else if (e.keyCode === 37) {
          clickPrevBind(e);
          return false;
        }
      }
    };

    /**
     * Initializes touch events
     */
    var initTouch = function() {
      // initialize object to contain all touch values
      slider.touch = {
        start: {x: 0, y: 0},
        end: {x: 0, y: 0}
      };
      slider.viewport.bind('touchstart MSPointerDown pointerdown', onTouchStart);

      //for browsers that have implemented pointer events and fire a click after
      //every pointerup regardless of whether pointerup is on same screen location as pointerdown or not
      slider.viewport.on('click', '.bxslider a', function(e) {
        if (slider.viewport.hasClass('click-disabled')) {
          e.preventDefault();
          slider.viewport.removeClass('click-disabled');
        }
      });
    };

    /**
     * Event handler for "touchstart"
     *
     * @param e (event)
     *  - DOM event object
     */
    var onTouchStart = function(e) {
      //disable slider controls while user is interacting with slides to avoid slider freeze that happens on touch devices when a slide swipe happens immediately after interacting with slider controls
      slider.controls.el.addClass('disabled');

      if (slider.working) {
        e.preventDefault();
        slider.controls.el.removeClass('disabled');
      } else {
        // record the original position when touch starts
        slider.touch.originalPos = el.position();
        var orig = e.originalEvent,
        touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig];
        // record the starting touch x, y coordinates
        slider.touch.start.x = touchPoints[0].pageX;
        slider.touch.start.y = touchPoints[0].pageY;

        if (slider.viewport.get(0).setPointerCapture) {
          slider.pointerId = orig.pointerId;
          slider.viewport.get(0).setPointerCapture(slider.pointerId);
        }
        // bind a "touchmove" event to the viewport
        slider.viewport.bind('touchmove MSPointerMove pointermove', onTouchMove);
        // bind a "touchend" event to the viewport
        slider.viewport.bind('touchend MSPointerUp pointerup', onTouchEnd);
        slider.viewport.bind('MSPointerCancel pointercancel', onPointerCancel);
      }
    };

    /**
     * Cancel Pointer for Windows Phone
     *
     * @param e (event)
     *  - DOM event object
     */
    var onPointerCancel = function(e) {
      /* onPointerCancel handler is needed to deal with situations when a touchend
      doesn't fire after a touchstart (this happens on windows phones only) */
      setPositionProperty(slider.touch.originalPos.left, 'reset', 0);

      //remove handlers
      slider.controls.el.removeClass('disabled');
      slider.viewport.unbind('MSPointerCancel pointercancel', onPointerCancel);
      slider.viewport.unbind('touchmove MSPointerMove pointermove', onTouchMove);
      slider.viewport.unbind('touchend MSPointerUp pointerup', onTouchEnd);
      if (slider.viewport.get(0).releasePointerCapture) {
        slider.viewport.get(0).releasePointerCapture(slider.pointerId);
      }
    };

    /**
     * Event handler for "touchmove"
     *
     * @param e (event)
     *  - DOM event object
     */
    var onTouchMove = function(e) {
      var orig = e.originalEvent,
      touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig],
      // if scrolling on y axis, do not prevent default
      xMovement = Math.abs(touchPoints[0].pageX - slider.touch.start.x),
      yMovement = Math.abs(touchPoints[0].pageY - slider.touch.start.y),
      value = 0,
      change = 0;

      // x axis swipe
      if ((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX) {
        e.preventDefault();
      // y axis swipe
      } else if ((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY) {
        e.preventDefault();
      }
      if (slider.settings.mode !== 'fade' && slider.settings.oneToOneTouch) {
        // if horizontal, drag along x axis
        if (slider.settings.mode === 'horizontal') {
          change = touchPoints[0].pageX - slider.touch.start.x;
          value = slider.touch.originalPos.left + change;
        // if vertical, drag along y axis
        } else {
          change = touchPoints[0].pageY - slider.touch.start.y;
          value = slider.touch.originalPos.top + change;
        }
        setPositionProperty(value, 'reset', 0);
      }
    };

    /**
     * Event handler for "touchend"
     *
     * @param e (event)
     *  - DOM event object
     */
    var onTouchEnd = function(e) {
      slider.viewport.unbind('touchmove MSPointerMove pointermove', onTouchMove);
      //enable slider controls as soon as user stops interacing with slides
      slider.controls.el.removeClass('disabled');
      var orig    = e.originalEvent,
      touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig],
      value       = 0,
      distance    = 0;
      // record end x, y positions
      slider.touch.end.x = touchPoints[0].pageX;
      slider.touch.end.y = touchPoints[0].pageY;
      // if fade mode, check if absolute x distance clears the threshold
      if (slider.settings.mode === 'fade') {
        distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
        if (distance >= slider.settings.swipeThreshold) {
          if (slider.touch.start.x > slider.touch.end.x) {
            el.goToNextSlide();
          } else {
            el.goToPrevSlide();
          }
          el.stopAuto();
        }
      // not fade mode
      } else {
        // calculate distance and el's animate property
        if (slider.settings.mode === 'horizontal') {
          distance = slider.touch.end.x - slider.touch.start.x;
          value = slider.touch.originalPos.left;
        } else {
          distance = slider.touch.end.y - slider.touch.start.y;
          value = slider.touch.originalPos.top;
        }
        // if not infinite loop and first / last slide, do not attempt a slide transition
        if (!slider.settings.infiniteLoop && ((slider.active.index === 0 && distance > 0) || (slider.active.last && distance < 0))) {
          setPositionProperty(value, 'reset', 200);
        } else {
          // check if distance clears threshold
          if (Math.abs(distance) >= slider.settings.swipeThreshold) {
            if (distance < 0) {
              el.goToNextSlide();
            } else {
              el.goToPrevSlide();
            }
            el.stopAuto();
          } else {
            // el.animate(property, 200);
            setPositionProperty(value, 'reset', 200);
          }
        }
      }
      slider.viewport.unbind('touchend MSPointerUp pointerup', onTouchEnd);
      if (slider.viewport.get(0).releasePointerCapture) {
        slider.viewport.get(0).releasePointerCapture(slider.pointerId);
      }
    };

    /**
     * Window resize event callback
     */
    var resizeWindow = function(e) {
      // don't do anything if slider isn't initialized.
      if (!slider.initialized) { return; }
      // Delay if slider working.
      if (slider.working) {
        window.setTimeout(resizeWindow, 10);
      } else {
        // get the new window dimens (again, thank you IE)
        var windowWidthNew = $(window).width(),
        windowHeightNew = $(window).height();
        // make sure that it is a true window resize
        // *we must check this because our dinosaur friend IE fires a window resize event when certain DOM elements
        // are resized. Can you just die already?*
        if (windowWidth !== windowWidthNew || windowHeight !== windowHeightNew) {
          // set the new window dimens
          windowWidth = windowWidthNew;
          windowHeight = windowHeightNew;
          // update all dynamic elements
          el.redrawSlider();
          // Call user resize handler
          slider.settings.onSliderResize.call(el, slider.active.index);
        }
      }
    };

    /**
     * Adds an aria-hidden=true attribute to each element
     *
     * @param startVisibleIndex (int)
     *  - the first visible element's index
     */
    var applyAriaHiddenAttributes = function(startVisibleIndex) {
      var numberOfSlidesShowing = getNumberSlidesShowing();
      // only apply attributes if the setting is enabled and not in ticker mode
      if (slider.settings.ariaHidden && !slider.settings.ticker) {
        // add aria-hidden=true to all elements
        slider.children.attr('aria-hidden', 'true');
        // get the visible elements and change to aria-hidden=false
        slider.children.slice(startVisibleIndex, startVisibleIndex + numberOfSlidesShowing).attr('aria-hidden', 'false');
      }
    };

    /**
     * Returns index according to present page range
     *
     * @param slideOndex (int)
     *  - the desired slide index
     */
    var setSlideIndex = function(slideIndex) {
      if (slideIndex < 0) {
        if (slider.settings.infiniteLoop) {
          return getPagerQty() - 1;
        }else {
          //we don't go to undefined slides
          return slider.active.index;
        }
      // if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
      } else if (slideIndex >= getPagerQty()) {
        if (slider.settings.infiniteLoop) {
          return 0;
        } else {
          //we don't move to undefined pages
          return slider.active.index;
        }
      // set active index to requested slide
      } else {
        return slideIndex;
      }
    };

    /**
     * ===================================================================================
     * = PUBLIC FUNCTIONS
     * ===================================================================================
     */

    /**
     * Performs slide transition to the specified slide
     *
     * @param slideIndex (int)
     *  - the destination slide's index (zero-based)
     *
     * @param direction (string)
     *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
     */
    el.goToSlide = function(slideIndex, direction) {
      // onSlideBefore, onSlideNext, onSlidePrev callbacks
      // Allow transition canceling based on returned value
      var performTransition = true,
      moveBy = 0,
      position = {left: 0, top: 0},
      lastChild = null,
      lastShowingIndex, eq, value, requestEl;
      // store the old index
      slider.oldIndex = slider.active.index;
      //set new index
      slider.active.index = setSlideIndex(slideIndex);

      // if plugin is currently in motion, ignore request
      if (slider.working || slider.active.index === slider.oldIndex) { return; }
      // declare that plugin is in motion
      slider.working = true;

      performTransition = slider.settings.onSlideBefore.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);

      // If transitions canceled, reset and return
      if (typeof (performTransition) !== 'undefined' && !performTransition) {
        slider.active.index = slider.oldIndex; // restore old index
        slider.working = false; // is not in motion
        return;
      }

      if (direction === 'next') {
        // Prevent canceling in future functions or lack there-of from negating previous commands to cancel
        if (!slider.settings.onSlideNext.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
          performTransition = false;
        }
      } else if (direction === 'prev') {
        // Prevent canceling in future functions or lack there-of from negating previous commands to cancel
        if (!slider.settings.onSlidePrev.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
          performTransition = false;
        }
      }

      // check if last slide
      slider.active.last = slider.active.index >= getPagerQty() - 1;
      // update the pager with active class
      if (slider.settings.pager || slider.settings.pagerCustom) { updatePagerActive(slider.active.index); }
      // // check for direction control update
      if (slider.settings.controls) { updateDirectionControls(); }
      // if slider is set to mode: "fade"
      if (slider.settings.mode === 'fade') {
        // if adaptiveHeight is true and next height is different from current height, animate to the new height
        if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
          slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
        }
        // fade out the visible child and reset its z-index value
        slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
        // fade in the newly requested slide
        slider.children.eq(slider.active.index).css('zIndex', slider.settings.slideZIndex + 1).fadeIn(slider.settings.speed, function() {
          $(this).css('zIndex', slider.settings.slideZIndex);
          updateAfterSlideTransition();
        });
      // slider mode is not "fade"
      } else {
        // if adaptiveHeight is true and next height is different from current height, animate to the new height
        if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
          slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
        }
        // if carousel and not infinite loop
        if (!slider.settings.infiniteLoop && slider.carousel && slider.active.last) {
          if (slider.settings.mode === 'horizontal') {
            // get the last child position
            lastChild = slider.children.eq(slider.children.length - 1);
            position = lastChild.position();
            // calculate the position of the last slide
            moveBy = slider.viewport.width() - lastChild.outerWidth();
          } else {
            // get last showing index position
            lastShowingIndex = slider.children.length - slider.settings.minSlides;
            position = slider.children.eq(lastShowingIndex).position();
          }
          // horizontal carousel, going previous while on first slide (infiniteLoop mode)
        } else if (slider.carousel && slider.active.last && direction === 'prev') {
          // get the last child position
          eq = slider.settings.moveSlides === 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
          lastChild = el.children('.bx-clone').eq(eq);
          position = lastChild.position();
        // if infinite loop and "Next" is clicked on the last slide
        } else if (direction === 'next' && slider.active.index === 0) {
          // get the last clone position
          position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
          slider.active.last = false;
        // normal non-zero requests
        } else if (slideIndex >= 0) {
          //parseInt is applied to allow floats for slides/page
          requestEl = slideIndex * parseInt(getMoveBy());
          position = slider.children.eq(requestEl).position();
        }

        /* If the position doesn't exist
         * (e.g. if you destroy the slider on a next click),
         * it doesn't throw an error.
         */
        if (typeof (position) !== 'undefined') {
          value = slider.settings.mode === 'horizontal' ? -(position.left - moveBy) : -position.top;
          // plugin values to be animated
          setPositionProperty(value, 'slide', slider.settings.speed);
        }
        slider.working = false;
      }
      if (slider.settings.ariaHidden) { applyAriaHiddenAttributes(slider.active.index * getMoveBy()); }
    };

    /**
     * Transitions to the next slide in the show
     */
    el.goToNextSlide = function() {
      // if infiniteLoop is false and last page is showing, disregard call
      if (!slider.settings.infiniteLoop && slider.active.last) { return; }
	  if (slider.working == true){ return ;}
      var pagerIndex = parseInt(slider.active.index) + 1;
      el.goToSlide(pagerIndex, 'next');
    };

    /**
     * Transitions to the prev slide in the show
     */
    el.goToPrevSlide = function() {
      // if infiniteLoop is false and last page is showing, disregard call
      if (!slider.settings.infiniteLoop && slider.active.index === 0) { return; }
	  if (slider.working == true){ return ;}
      var pagerIndex = parseInt(slider.active.index) - 1;
      el.goToSlide(pagerIndex, 'prev');
    };

    /**
     * Starts the auto show
     *
     * @param preventControlUpdate (boolean)
     *  - if true, auto controls state will not be updated
     */
    el.startAuto = function(preventControlUpdate) {
      // if an interval already exists, disregard call
      if (slider.interval) { return; }
      // create an interval
      slider.interval = setInterval(function() {
        if (slider.settings.autoDirection === 'next') {
          el.goToNextSlide();
        } else {
          el.goToPrevSlide();
        }
      }, slider.settings.pause);
	  //allback for when the auto rotate status changes
	  slider.settings.onAutoChange.call(el, true);
      // if auto controls are displayed and preventControlUpdate is not true
      if (slider.settings.autoControls && preventControlUpdate !== true) { updateAutoControls('stop'); }
    };

    /**
     * Stops the auto show
     *
     * @param preventControlUpdate (boolean)
     *  - if true, auto controls state will not be updated
     */
    el.stopAuto = function(preventControlUpdate) {
      // if no interval exists, disregard call
      if (!slider.interval) { return; }
      // clear the interval
      clearInterval(slider.interval);
      slider.interval = null;
	  //allback for when the auto rotate status changes
	  slider.settings.onAutoChange.call(el, false);
      // if auto controls are displayed and preventControlUpdate is not true
      if (slider.settings.autoControls && preventControlUpdate !== true) { updateAutoControls('start'); }
    };

    /**
     * Returns current slide index (zero-based)
     */
    el.getCurrentSlide = function() {
      return slider.active.index;
    };

    /**
     * Returns current slide element
     */
    el.getCurrentSlideElement = function() {
      return slider.children.eq(slider.active.index);
    };

    /**
     * Returns a slide element
     * @param index (int)
     *  - The index (zero-based) of the element you want returned.
     */
    el.getSlideElement = function(index) {
      return slider.children.eq(index);
    };

    /**
     * Returns number of slides in show
     */
    el.getSlideCount = function() {
      return slider.children.length;
    };

    /**
     * Return slider.working variable
     */
    el.isWorking = function() {
      return slider.working;
    };

    /**
     * Update all dynamic slider elements
     */
    el.redrawSlider = function() {
      // resize all children in ratio to new screen size
      slider.children.add(el.find('.bx-clone')).outerWidth(getSlideWidth());
      // adjust the height
      slider.viewport.css('height', getViewportHeight());
      // update the slide position
      if (!slider.settings.ticker) { setSlidePosition(); }
      // if active.last was true before the screen resize, we want
      // to keep it last no matter what screen size we end on
      if (slider.active.last) { slider.active.index = getPagerQty() - 1; }
      // if the active index (page) no longer exists due to the resize, simply set the index as last
      if (slider.active.index >= getPagerQty()) { slider.active.last = true; }
      // if a pager is being displayed and a custom pager is not being used, update it
      if (slider.settings.pager && !slider.settings.pagerCustom) {
        populatePager();
        updatePagerActive(slider.active.index);
      }
      if (slider.settings.ariaHidden) { applyAriaHiddenAttributes(slider.active.index * getMoveBy()); }
    };

    /**
     * Destroy the current instance of the slider (revert everything back to original state)
     */
    el.destroySlider = function() {
      // don't do anything if slider has already been destroyed
      if (!slider.initialized) { return; }
      slider.initialized = false;
      $('.bx-clone', this).remove();
      slider.children.each(function() {
        if ($(this).data('origStyle') !== undefined) {
          $(this).attr('style', $(this).data('origStyle'));
        } else {
          $(this).removeAttr('style');
        }
      });
      if ($(this).data('origStyle') !== undefined) {
        this.attr('style', $(this).data('origStyle'));
      } else {
        $(this).removeAttr('style');
      }
      $(this).unwrap().unwrap();
      if (slider.controls.el) { slider.controls.el.remove(); }
      if (slider.controls.next) { slider.controls.next.remove(); }
      if (slider.controls.prev) { slider.controls.prev.remove(); }
      if (slider.pagerEl && slider.settings.controls && !slider.settings.pagerCustom) { slider.pagerEl.remove(); }
      $('.bx-caption', this).remove();
      if (slider.controls.autoEl) { slider.controls.autoEl.remove(); }
      clearInterval(slider.interval);
      if (slider.settings.responsive) { $(window).unbind('resize', resizeWindow); }
      if (slider.settings.keyboardEnabled) { $(document).unbind('keydown', keyPress); }
      //remove self reference in data
      $(this).removeData('bxSlider');
	  // remove global window handlers
	  $(window).off('blur', windowBlurHandler).off('focus', windowFocusHandler);
    };

    /**
     * Reload the slider (revert all DOM changes, and re-initialize)
     */
    el.reloadSlider = function(settings) {
      if (settings !== undefined) { options = settings; }
      el.destroySlider();
      init();
      //store reference to self in order to access public functions later
      $(el).data('bxSlider', this);
    };

    init();

    $(el).data('bxSlider', this);

    // returns the current jQuery object
    return this;
  };

})(jQuery);

/**
 * Owl Carousel v2.2.0
 * Copyright 2013-2016 David Deutsch
 * Licensed under MIT (https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE)
 */
/**
 * Owl carousel
 * @version 2.1.6
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from beeing retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
			}
		};

		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		filter: [ 'width', 'settings' ],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat--) {
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: [ 'items' ],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			if (this.settings.center) {
				this.$stage.children('.center').removeClass('center');
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>')
			.wrap('<div class="' + this.settings.stageOuterClass + '"/>');

		// append stage
		this.$element.append(this.$stage.parent());

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.$element.is(':visible')) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.$element.is(':visible')) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
		}

		if (this.settings.touchDrag){
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() { return false; });
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				// on a right pull, check on previous index
				// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's'
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			reciprocalItemsWidth = this._items[--iterator].width();
			elementWidth = this.$element.width();
			while (iterator--) {
				reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
				if (reciprocalItemsWidth > elementWidth) {
					break;
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.$element.is(':visible')) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			throw 'Can not detect viewport width.';
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();

		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([ event ]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([ event ]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function() {
		if (this._interval) {
			return;
		}

		this._visible = this._core.$element.is(':visible');
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function() {
		if (this._core.$element.is(':visible') === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};

	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false
	};

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
				url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url(' + url + ')',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		$.each(visible, function(index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {
			var type = (function() {
					if (target.attr('data-vimeo-id')) {
						return 'vimeo';
					} else if (target.attr('data-vzaar-id')) {
						return 'vzaar'
					} else {
						return 'youtube';
					}
				})(),
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');

		if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
				} else {
					tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		if (video.type === 'youtube') {
			html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' +
				video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
		} else if (video.type === 'vimeo') {
			html = '<iframe src="//player.vimeo.com/video/' + video.id +
				'?autoplay=1" width="' + width + '" height="' + height +
				'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		} else if (video.type === 'vzaar') {
			html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width +
				'" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' +
				'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
		}

		$('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
				document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay timeout.
		 * @type {Timeout}
		 */
		this._timeout = null;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = false;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position') {
					//console.log('play?', e);
					if (this._core.settings.autoplay) {
						this._setAutoPlayInterval();
					}
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function(e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		this._paused = false;

		if (this._core.is('rotating')) {
			return;
		}

		this._core.enter('rotating');

		this._setAutoPlayInterval();
	};

	/**
	 * Gets a new timeout
	 * @private
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 * @return {Timeout}
	 */
	Autoplay.prototype._getNextTimeout = function(timeout, speed) {
		if ( this._timeout ) {
			window.clearTimeout(this._timeout);
		}
		return window.setTimeout($.proxy(function() {
			if (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {
				return;
			}
			this._core.next(speed || this._core.settings.autoplaySpeed);
		}, this), timeout || this._core.settings.autoplayTimeout);
	};

	/**
	 * Sets autoplay in motion.
	 * @private
	 */
	Autoplay.prototype._setAutoPlayInterval = function() {
		this._timeout = this._getNextTimeout();
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		if (!this._core.is('rotating')) {
			return;
		}

		window.clearTimeout(this._timeout);
		this._core.leave('rotating');
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		if (!this._core.is('rotating')) {
			return;
		}

		this._paused = true;
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [ 'prev', 'next' ],
		navSpeed: false,
		navElement: 'div',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [ 'owl-prev', 'owl-next' ],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var override,
			settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.next(settings.navSpeed);
			}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [ $('<div>')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'div', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$absolute)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			this._controls[control].remove();
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function(page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function(item, hash) {
							return item === current ? hash : null;
						}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.1.0
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	var style = $('<support>').get(0).style,
		prefixes = 'Webkit Moz O ms'.split(' '),
		events = {
			transition: {
				end: {
					WebkitTransition: 'webkitTransitionEnd',
					MozTransition: 'transitionend',
					OTransition: 'oTransitionEnd',
					transition: 'transitionend'
				}
			},
			animation: {
				end: {
					WebkitAnimation: 'webkitAnimationEnd',
					MozAnimation: 'animationend',
					OAnimation: 'oAnimationEnd',
					animation: 'animationend'
				}
			}
		},
		tests = {
			csstransforms: function() {
				return !!test('transform');
			},
			csstransforms3d: function() {
				return !!test('perspective');
			},
			csstransitions: function() {
				return !!test('transition');
			},
			cssanimations: function() {
				return !!test('animation');
			}
		};

	function test(property, prefixed) {
		var result = false,
			upper = property.charAt(0).toUpperCase() + property.slice(1);

		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
			if (style[property] !== undefined) {
				result = prefixed ? property : true;
				return false;
			}
		});

		return result;
	}

	function prefixed(property) {
		return test(property, true);
	}

	if (tests.csstransitions()) {
		/* jshint -W053 */
		$.support.transition = new String(prefixed('transition'))
		$.support.transition.end = events.transition.end[ $.support.transition ];
	}

	if (tests.cssanimations()) {
		/* jshint -W053 */
		$.support.animation = new String(prefixed('animation'))
		$.support.animation.end = events.animation.end[ $.support.animation ];
	}

	if (tests.csstransforms()) {
		/* jshint -W053 */
		$.support.transform = new String(prefixed('transform'));
		$.support.transform3d = tests.csstransforms3d();
	}

})(window.Zepto || window.jQuery, window, document);

/*!
 * Vue.js v2.5.13
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Vue=e()}(this,function(){"use strict";function t(t){return void 0===t||null===t}function e(t){return void 0!==t&&null!==t}function n(t){return!0===t}function r(t){return"string"==typeof t||"number"==typeof t||"symbol"==typeof t||"boolean"==typeof t}function i(t){return null!==t&&"object"==typeof t}function o(t){return"[object Object]"===Nn.call(t)}function a(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function s(t){return null==t?"":"object"==typeof t?JSON.stringify(t,null,2):String(t)}function c(t){var e=parseFloat(t);return isNaN(e)?t:e}function u(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}function l(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}function f(t,e){return Mn.call(t,e)}function p(t){var e=Object.create(null);return function(n){return e[n]||(e[n]=t(n))}}function d(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function v(t,e){e=e||0;for(var n=t.length-e,r=new Array(n);n--;)r[n]=t[n+e];return r}function h(t,e){for(var n in e)t[n]=e[n];return t}function m(t){for(var e={},n=0;n<t.length;n++)t[n]&&h(e,t[n]);return e}function y(t,e,n){}function g(t,e){if(t===e)return!0;var n=i(t),r=i(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var o=Array.isArray(t),a=Array.isArray(e);if(o&&a)return t.length===e.length&&t.every(function(t,n){return g(t,e[n])});if(o||a)return!1;var s=Object.keys(t),c=Object.keys(e);return s.length===c.length&&s.every(function(n){return g(t[n],e[n])})}catch(t){return!1}}function _(t,e){for(var n=0;n<t.length;n++)if(g(t[n],e))return n;return-1}function b(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function $(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function C(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function w(t){return"function"==typeof t&&/native code/.test(t.toString())}function x(t){return new mr(void 0,void 0,void 0,String(t))}function k(t,e){var n=t.componentOptions,r=new mr(t.tag,t.data,t.children,t.text,t.elm,t.context,n,t.asyncFactory);return r.ns=t.ns,r.isStatic=t.isStatic,r.key=t.key,r.isComment=t.isComment,r.fnContext=t.fnContext,r.fnOptions=t.fnOptions,r.fnScopeId=t.fnScopeId,r.isCloned=!0,e&&(t.children&&(r.children=A(t.children,!0)),n&&n.children&&(n.children=A(n.children,!0))),r}function A(t,e){for(var n=t.length,r=new Array(n),i=0;i<n;i++)r[i]=k(t[i],e);return r}function O(t,e,n){t.__proto__=e}function S(t,e,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];C(t,o,e[o])}}function T(t,e){if(i(t)&&!(t instanceof mr)){var n;return f(t,"__ob__")&&t.__ob__ instanceof wr?n=t.__ob__:Cr.shouldConvert&&!ur()&&(Array.isArray(t)||o(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new wr(t)),e&&n&&n.vmCount++,n}}function E(t,e,n,r,i){var o=new vr,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set,u=!i&&T(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return vr.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(e)&&I(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!=e&&r!=r||(c?c.call(t,e):n=e,u=!i&&T(e),o.notify())}})}}function j(t,e,n){if(Array.isArray(t)&&a(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(E(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function N(t,e){if(Array.isArray(t)&&a(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||f(t,e)&&(delete t[e],n&&n.dep.notify())}}function I(t){for(var e=void 0,n=0,r=t.length;n<r;n++)(e=t[n])&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&I(e)}function L(t,e){if(!e)return t;for(var n,r,i,a=Object.keys(e),s=0;s<a.length;s++)r=t[n=a[s]],i=e[n],f(t,n)?o(r)&&o(i)&&L(r,i):j(t,n,i);return t}function M(t,e,n){return n?function(){var r="function"==typeof e?e.call(n,n):e,i="function"==typeof t?t.call(n,n):t;return r?L(r,i):i}:e?t?function(){return L("function"==typeof e?e.call(this,this):e,"function"==typeof t?t.call(this,this):t)}:e:t}function D(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function P(t,e,n,r){var i=Object.create(t||null);return e?h(i,e):i}function F(t,e,n){function r(r){var i=xr[r]||Or;u[r]=i(t[r],e[r],n,r)}"function"==typeof e&&(e=e.options),function(t,e){var n=t.props;if(n){var r,i,a={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(i=n[r])&&(a[Pn(i)]={type:null});else if(o(n))for(var s in n)i=n[s],a[Pn(s)]=o(i)?i:{type:i};t.props=a}}(e),function(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(o(n))for(var a in n){var s=n[a];r[a]=o(s)?h({from:a},s):{from:s}}}}(e),function(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"==typeof r&&(e[n]={bind:r,update:r})}}(e);var i=e.extends;if(i&&(t=F(t,i,n)),e.mixins)for(var a=0,s=e.mixins.length;a<s;a++)t=F(t,e.mixins[a],n);var c,u={};for(c in t)r(c);for(c in e)f(t,c)||r(c);return u}function R(t,e,n,r){if("string"==typeof n){var i=t[e];if(f(i,n))return i[n];var o=Pn(n);if(f(i,o))return i[o];var a=Fn(o);if(f(i,a))return i[a];return i[n]||i[o]||i[a]}}function H(t,e,n,r){var i=e[t],o=!f(n,t),a=n[t];if(U(Boolean,i.type)&&(o&&!f(i,"default")?a=!1:U(String,i.type)||""!==a&&a!==Hn(t)||(a=!0)),void 0===a){a=function(t,e,n){if(!f(e,"default"))return;var r=e.default;if(t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n])return t._props[n];return"function"==typeof r&&"Function"!==B(e.type)?r.call(t):r}(r,i,t);var s=Cr.shouldConvert;Cr.shouldConvert=!0,T(a),Cr.shouldConvert=s}return a}function B(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function U(t,e){if(!Array.isArray(e))return B(e)===B(t);for(var n=0,r=e.length;n<r;n++)if(B(e[n])===B(t))return!0;return!1}function V(t,e,n){if(e)for(var r=e;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{if(!1===i[o].call(r,t,e,n))return}catch(t){z(t,r,"errorCaptured hook")}}z(t,e,n)}function z(t,e,n){if(Jn.errorHandler)try{return Jn.errorHandler.call(null,t,e,n)}catch(t){K(t,null,"config.errorHandler")}K(t,e,n)}function K(t,e,n){if(!Gn&&!Zn||"undefined"==typeof console)throw t;console.error(t)}function J(){Tr=!1;var t=Sr.slice(0);Sr.length=0;for(var e=0;e<t.length;e++)t[e]()}function q(t,e){var n;if(Sr.push(function(){if(t)try{t.call(e)}catch(t){V(t,e,"nextTick")}else n&&n(e)}),Tr||(Tr=!0,Er?Ar():kr()),!t&&"undefined"!=typeof Promise)return new Promise(function(t){n=t})}function W(t){G(t,Mr),Mr.clear()}function G(t,e){var n,r,o=Array.isArray(t);if((o||i(t))&&!Object.isFrozen(t)){if(t.__ob__){var a=t.__ob__.dep.id;if(e.has(a))return;e.add(a)}if(o)for(n=t.length;n--;)G(t[n],e);else for(n=(r=Object.keys(t)).length;n--;)G(t[r[n]],e)}}function Z(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),i=0;i<r.length;i++)r[i].apply(null,t)}return e.fns=t,e}function X(e,n,r,i,o){var a,s,c,u;for(a in e)s=e[a],c=n[a],u=Dr(a),t(s)||(t(c)?(t(s.fns)&&(s=e[a]=Z(s)),r(u.name,s,u.once,u.capture,u.passive,u.params)):s!==c&&(c.fns=s,e[a]=c));for(a in n)t(e[a])&&i((u=Dr(a)).name,n[a],u.capture)}function Y(r,i,o){function a(){o.apply(this,arguments),l(s.fns,a)}r instanceof mr&&(r=r.data.hook||(r.data.hook={}));var s,c=r[i];t(c)?s=Z([a]):e(c.fns)&&n(c.merged)?(s=c).fns.push(a):s=Z([c,a]),s.merged=!0,r[i]=s}function Q(t,n,r,i,o){if(e(n)){if(f(n,r))return t[r]=n[r],o||delete n[r],!0;if(f(n,i))return t[r]=n[i],o||delete n[i],!0}return!1}function tt(t){return e(t)&&e(t.text)&&function(t){return!1===t}(t.isComment)}function et(i,o){var a,s,c,u,l=[];for(a=0;a<i.length;a++)t(s=i[a])||"boolean"==typeof s||(u=l[c=l.length-1],Array.isArray(s)?s.length>0&&(tt((s=et(s,(o||"")+"_"+a))[0])&&tt(u)&&(l[c]=x(u.text+s[0].text),s.shift()),l.push.apply(l,s)):r(s)?tt(u)?l[c]=x(u.text+s):""!==s&&l.push(x(s)):tt(s)&&tt(u)?l[c]=x(u.text+s.text):(n(i._isVList)&&e(s.tag)&&t(s.key)&&e(o)&&(s.key="__vlist"+o+"_"+a+"__"),l.push(s)));return l}function nt(t,e){return(t.__esModule||fr&&"Module"===t[Symbol.toStringTag])&&(t=t.default),i(t)?e.extend(t):t}function rt(t){return t.isComment&&t.asyncFactory}function it(t){if(Array.isArray(t))for(var n=0;n<t.length;n++){var r=t[n];if(e(r)&&(e(r.componentOptions)||rt(r)))return r}}function ot(t,e,n){n?Lr.$once(t,e):Lr.$on(t,e)}function at(t,e){Lr.$off(t,e)}function st(t,e,n){Lr=t,X(e,n||{},ot,at),Lr=void 0}function ct(t,e){var n={};if(!t)return n;for(var r=0,i=t.length;r<i;r++){var o=t[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==e&&o.fnContext!==e||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=a.slot,c=n[s]||(n[s]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(ut)&&delete n[u];return n}function ut(t){return t.isComment&&!t.asyncFactory||" "===t.text}function lt(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?lt(t[n],e):e[t[n].key]=t[n].fn;return e}function ft(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function pt(t,e){if(e){if(t._directInactive=!1,ft(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)pt(t.$children[n]);vt(t,"activated")}}function dt(t,e){if(!(e&&(t._directInactive=!0,ft(t))||t._inactive)){t._inactive=!0;for(var n=0;n<t.$children.length;n++)dt(t.$children[n]);vt(t,"deactivated")}}function vt(t,e){var n=t.$options[e];if(n)for(var r=0,i=n.length;r<i;r++)try{n[r].call(t)}catch(n){V(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}function ht(){Ur=!0;var t,e;for(Fr.sort(function(t,e){return t.id-e.id}),Vr=0;Vr<Fr.length;Vr++)e=(t=Fr[Vr]).id,Hr[e]=null,t.run();var n=Rr.slice(),r=Fr.slice();Vr=Fr.length=Rr.length=0,Hr={},Br=Ur=!1,function(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,pt(t[e],!0)}(n),function(t){var e=t.length;for(;e--;){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&vt(r,"updated")}}(r),lr&&Jn.devtools&&lr.emit("flush")}function mt(t,e,n){Jr.get=function(){return this[e][n]},Jr.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Jr)}function yt(t){t._watchers=[];var e=t.$options;e.props&&function(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;Cr.shouldConvert=o;var a=function(o){i.push(o);var a=H(o,e,n,t);E(r,o,a),o in t||mt(t,"_props",o)};for(var s in e)a(s);Cr.shouldConvert=!0}(t,e.props),e.methods&&function(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?y:d(e[n],t)}(t,e.methods),e.data?function(t){var e=t.$options.data;e=t._data="function"==typeof e?function(t,e){try{return t.call(e,e)}catch(t){return V(t,e,"data()"),{}}}(e,t):e||{},o(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);for(;i--;){var a=n[i];r&&f(r,a)||$(a)||mt(t,"_data",a)}T(e,!0)}(t):T(t._data={},!0),e.computed&&function(t,e){var n=t._computedWatchers=Object.create(null),r=ur();for(var i in e){var o=e[i],a="function"==typeof o?o:o.get;r||(n[i]=new Kr(t,a||y,y,qr)),i in t||gt(t,i,o)}}(t,e.computed),e.watch&&e.watch!==ir&&function(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)bt(t,n,r[i]);else bt(t,n,r)}}(t,e.watch)}function gt(t,e,n){var r=!ur();"function"==typeof n?(Jr.get=r?_t(e):n,Jr.set=y):(Jr.get=n.get?r&&!1!==n.cache?_t(e):n.get:y,Jr.set=n.set?n.set:y),Object.defineProperty(t,e,Jr)}function _t(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),vr.target&&e.depend(),e.value}}function bt(t,e,n,r){return o(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=t[n]),t.$watch(e,n,r)}function $t(t,e){if(t){for(var n=Object.create(null),r=fr?Reflect.ownKeys(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}):Object.keys(t),i=0;i<r.length;i++){for(var o=r[i],a=t[o].from,s=e;s;){if(s._provided&&a in s._provided){n[o]=s._provided[a];break}s=s.$parent}if(!s&&"default"in t[o]){var c=t[o].default;n[o]="function"==typeof c?c.call(e):c}}return n}}function Ct(t,n){var r,o,a,s,c;if(Array.isArray(t)||"string"==typeof t)for(r=new Array(t.length),o=0,a=t.length;o<a;o++)r[o]=n(t[o],o);else if("number"==typeof t)for(r=new Array(t),o=0;o<t;o++)r[o]=n(o+1,o);else if(i(t))for(s=Object.keys(t),r=new Array(s.length),o=0,a=s.length;o<a;o++)c=s[o],r[o]=n(t[c],c,o);return e(r)&&(r._isVList=!0),r}function wt(t,e,n,r){var i,o=this.$scopedSlots[t];if(o)n=n||{},r&&(n=h(h({},r),n)),i=o(n)||e;else{var a=this.$slots[t];a&&(a._rendered=!0),i=a||e}var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function xt(t){return R(this.$options,"filters",t)||Un}function kt(t,e,n,r){var i=Jn.keyCodes[e]||n;return i?Array.isArray(i)?-1===i.indexOf(t):i!==t:r?Hn(r)!==e:void 0}function At(t,e,n,r,o){if(n)if(i(n)){Array.isArray(n)&&(n=m(n));var a,s=function(i){if("class"===i||"style"===i||Ln(i))a=t;else{var s=t.attrs&&t.attrs.type;a=r||Jn.mustUseProp(e,s,i)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}if(!(i in a)&&(a[i]=n[i],o)){(t.on||(t.on={}))["update:"+i]=function(t){n[i]=t}}};for(var c in n)s(c)}else;return t}function Ot(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?Array.isArray(r)?A(r):k(r):(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Tt(r,"__static__"+t,!1),r)}function St(t,e,n){return Tt(t,"__once__"+e+(n?"_"+n:""),!0),t}function Tt(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!=typeof t[r]&&Et(t[r],e+"_"+r,n);else Et(t,e,n)}function Et(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function jt(t,e){if(e)if(o(e)){var n=t.on=t.on?h({},t.on):{};for(var r in e){var i=n[r],a=e[r];n[r]=i?[].concat(i,a):a}}else;return t}function Nt(t){t._o=St,t._n=c,t._s=s,t._l=Ct,t._t=wt,t._q=g,t._i=_,t._m=Ot,t._f=xt,t._k=kt,t._b=At,t._v=x,t._e=gr,t._u=lt,t._g=jt}function It(t,e,r,i,o){var a=o.options;this.data=t,this.props=e,this.children=r,this.parent=i,this.listeners=t.on||jn,this.injections=$t(a.inject,i),this.slots=function(){return ct(r,i)};var s=Object.create(i),c=n(a._compiled),u=!c;c&&(this.$options=a,this.$slots=this.slots(),this.$scopedSlots=t.scopedSlots||jn),a._scopeId?this._c=function(t,e,n,r){var o=Dt(s,t,e,n,r,u);return o&&(o.fnScopeId=a._scopeId,o.fnContext=i),o}:this._c=function(t,e,n,r){return Dt(s,t,e,n,r,u)}}function Lt(t,e){for(var n in e)t[Pn(n)]=e[n]}function Mt(r,o,a,s,c){if(!t(r)){var u=a.$options._base;if(i(r)&&(r=u.extend(r)),"function"==typeof r){var l;if(t(r.cid)&&(l=r,void 0===(r=function(r,o,a){if(n(r.error)&&e(r.errorComp))return r.errorComp;if(e(r.resolved))return r.resolved;if(n(r.loading)&&e(r.loadingComp))return r.loadingComp;if(!e(r.contexts)){var s=r.contexts=[a],c=!0,u=function(){for(var t=0,e=s.length;t<e;t++)s[t].$forceUpdate()},l=b(function(t){r.resolved=nt(t,o),c||u()}),f=b(function(t){e(r.errorComp)&&(r.error=!0,u())}),p=r(l,f);return i(p)&&("function"==typeof p.then?t(r.resolved)&&p.then(l,f):e(p.component)&&"function"==typeof p.component.then&&(p.component.then(l,f),e(p.error)&&(r.errorComp=nt(p.error,o)),e(p.loading)&&(r.loadingComp=nt(p.loading,o),0===p.delay?r.loading=!0:setTimeout(function(){t(r.resolved)&&t(r.error)&&(r.loading=!0,u())},p.delay||200)),e(p.timeout)&&setTimeout(function(){t(r.resolved)&&f(null)},p.timeout))),c=!1,r.loading?r.loadingComp:r.resolved}r.contexts.push(a)}(l,u,a))))return function(t,e,n,r,i){var o=gr();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}(l,o,a,s,c);o=o||{},Ft(r),e(o.model)&&function(t,n){var r=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(n.props||(n.props={}))[r]=n.model.value;var o=n.on||(n.on={});e(o[i])?o[i]=[n.model.callback].concat(o[i]):o[i]=n.model.callback}(r.options,o);var f=function(n,r,i){var o=r.options.props;if(!t(o)){var a={},s=n.attrs,c=n.props;if(e(s)||e(c))for(var u in o){var l=Hn(u);Q(a,c,u,l,!0)||Q(a,s,u,l,!1)}return a}}(o,r);if(n(r.options.functional))return function(t,n,r,i,o){var a=t.options,s={},c=a.props;if(e(c))for(var u in c)s[u]=H(u,c,n||jn);else e(r.attrs)&&Lt(s,r.attrs),e(r.props)&&Lt(s,r.props);var l=new It(r,s,o,i,t),f=a.render.call(null,l._c,l);return f instanceof mr&&(f.fnContext=i,f.fnOptions=a,r.slot&&((f.data||(f.data={})).slot=r.slot)),f}(r,f,o,a,s);var p=o.on;if(o.on=o.nativeOn,n(r.options.abstract)){var d=o.slot;o={},d&&(o.slot=d)}!function(t){t.hook||(t.hook={});for(var e=0;e<Gr.length;e++){var n=Gr[e],r=t.hook[n],i=Wr[n];t.hook[n]=r?function(t,e){return function(n,r,i,o){t(n,r,i,o),e(n,r,i,o)}}(i,r):i}}(o);var v=r.options.name||c;return new mr("vue-component-"+r.cid+(v?"-"+v:""),o,void 0,void 0,void 0,a,{Ctor:r,propsData:f,listeners:p,tag:c,children:s},l)}}}function Dt(t,i,o,a,s,c){return(Array.isArray(o)||r(o))&&(s=a,a=o,o=void 0),n(c)&&(s=Xr),function(t,n,i,o,a){if(e(i)&&e(i.__ob__))return gr();e(i)&&e(i.is)&&(n=i.is);if(!n)return gr();Array.isArray(o)&&"function"==typeof o[0]&&((i=i||{}).scopedSlots={default:o[0]},o.length=0);a===Xr?o=function(t){return r(t)?[x(t)]:Array.isArray(t)?et(t):void 0}(o):a===Zr&&(o=function(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}(o));var s,c;if("string"==typeof n){var u;c=t.$vnode&&t.$vnode.ns||Jn.getTagNamespace(n),s=Jn.isReservedTag(n)?new mr(Jn.parsePlatformTagName(n),i,o,void 0,void 0,t):e(u=R(t.$options,"components",n))?Mt(u,i,t,o,n):new mr(n,i,o,void 0,void 0,t)}else s=Mt(n,i,t,o);return e(s)?(c&&Pt(s,c),s):gr()}(t,i,o,a,s)}function Pt(r,i,o){if(r.ns=i,"foreignObject"===r.tag&&(i=void 0,o=!0),e(r.children))for(var a=0,s=r.children.length;a<s;a++){var c=r.children[a];e(c.tag)&&(t(c.ns)||n(o))&&Pt(c,i,o)}}function Ft(t){var e=t.options;if(t.super){var n=Ft(t.super);if(n!==t.superOptions){t.superOptions=n;var r=function(t){var e,n=t.options,r=t.extendOptions,i=t.sealedOptions;for(var o in n)n[o]!==i[o]&&(e||(e={}),e[o]=function(t,e,n){{if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var i=0;i<t.length;i++)(e.indexOf(t[i])>=0||n.indexOf(t[i])<0)&&r.push(t[i]);return r}return t}}(n[o],r[o],i[o]));return e}(t);r&&h(t.extendOptions,r),(e=t.options=F(n,t.extendOptions)).name&&(e.components[e.name]=t)}}return e}function Rt(t){this._init(t)}function Ht(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=t.name||n.options.name,a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=F(n.options,t),a.super=n,a.options.props&&function(t){var e=t.options.props;for(var n in e)mt(t.prototype,"_props",n)}(a),a.options.computed&&function(t){var e=t.options.computed;for(var n in e)gt(t.prototype,n,e[n])}(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,zn.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=h({},a.options),i[r]=a,a}}function Bt(t){return t&&(t.Ctor.options.name||t.tag)}function Ut(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"==typeof t?t.split(",").indexOf(e)>-1:!!function(t){return"[object RegExp]"===Nn.call(t)}(t)&&t.test(e)}function Vt(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var a=n[o];if(a){var s=Bt(a.componentOptions);s&&!e(s)&&zt(n,o,r,i)}}}function zt(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,l(n,e)}function Kt(t){for(var n=t.data,r=t,i=t;e(i.componentInstance);)(i=i.componentInstance._vnode)&&i.data&&(n=Jt(i.data,n));for(;e(r=r.parent);)r&&r.data&&(n=Jt(n,r.data));return function(t,n){if(e(t)||e(n))return qt(t,Wt(n));return""}(n.staticClass,n.class)}function Jt(t,n){return{staticClass:qt(t.staticClass,n.staticClass),class:e(t.class)?[t.class,n.class]:n.class}}function qt(t,e){return t?e?t+" "+e:t:e||""}function Wt(t){return Array.isArray(t)?function(t){for(var n,r="",i=0,o=t.length;i<o;i++)e(n=Wt(t[i]))&&""!==n&&(r&&(r+=" "),r+=n);return r}(t):i(t)?function(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}(t):"string"==typeof t?t:""}function Gt(t){return bi(t)?"svg":"math"===t?"math":void 0}function Zt(t){if("string"==typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function Xt(t,e){var n=t.data.ref;if(n){var r=t.context,i=t.componentInstance||t.elm,o=r.$refs;e?Array.isArray(o[n])?l(o[n],i):o[n]===i&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])?o[n].indexOf(i)<0&&o[n].push(i):o[n]=[i]:o[n]=i}}function Yt(r,i){return r.key===i.key&&(r.tag===i.tag&&r.isComment===i.isComment&&e(r.data)===e(i.data)&&function(t,n){if("input"!==t.tag)return!0;var r,i=e(r=t.data)&&e(r=r.attrs)&&r.type,o=e(r=n.data)&&e(r=r.attrs)&&r.type;return i===o||wi(i)&&wi(o)}(r,i)||n(r.isAsyncPlaceholder)&&r.asyncFactory===i.asyncFactory&&t(i.asyncFactory.error))}function Qt(t,n,r){var i,o,a={};for(i=n;i<=r;++i)e(o=t[i].key)&&(a[o]=i);return a}function te(t,e){(t.data.directives||e.data.directives)&&function(t,e){var n,r,i,o=t===Ai,a=e===Ai,s=ee(t.data.directives,t.context),c=ee(e.data.directives,e.context),u=[],l=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,ne(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(ne(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var f=function(){for(var n=0;n<u.length;n++)ne(u[n],"inserted",e,t)};o?Y(e,"insert",f):f()}l.length&&Y(e,"postpatch",function(){for(var n=0;n<l.length;n++)ne(l[n],"componentUpdated",e,t)});if(!o)for(n in s)c[n]||ne(s[n],"unbind",t,t,a)}(t,e)}function ee(t,e){var n=Object.create(null);if(!t)return n;var r,i;for(r=0;r<t.length;r++)(i=t[r]).modifiers||(i.modifiers=Ti),n[function(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}(i)]=i,i.def=R(e.$options,"directives",i.name);return n}function ne(t,e,n,r,i){var o=t.def&&t.def[e];if(o)try{o(n.elm,t,n,r,i)}catch(r){V(r,n.context,"directive "+t.name+" "+e+" hook")}}function re(n,r){var i=r.componentOptions;if(!(e(i)&&!1===i.Ctor.options.inheritAttrs||t(n.data.attrs)&&t(r.data.attrs))){var o,a,s=r.elm,c=n.data.attrs||{},u=r.data.attrs||{};e(u.__ob__)&&(u=r.data.attrs=h({},u));for(o in u)a=u[o],c[o]!==a&&ie(s,o,a);(Qn||er)&&u.value!==c.value&&ie(s,"value",u.value);for(o in c)t(u[o])&&(hi(o)?s.removeAttributeNS(vi,mi(o)):pi(o)||s.removeAttribute(o))}}function ie(t,e,n){if(di(e))yi(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n));else if(pi(e))t.setAttribute(e,yi(n)||"false"===n?"false":"true");else if(hi(e))yi(n)?t.removeAttributeNS(vi,mi(e)):t.setAttributeNS(vi,e,n);else if(yi(n))t.removeAttribute(e);else{if(Qn&&!tr&&"TEXTAREA"===t.tagName&&"placeholder"===e&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}function oe(n,r){var i=r.elm,o=r.data,a=n.data;if(!(t(o.staticClass)&&t(o.class)&&(t(a)||t(a.staticClass)&&t(a.class)))){var s=Kt(r),c=i._transitionClasses;e(c)&&(s=qt(s,Wt(c))),s!==i._prevClass&&(i.setAttribute("class",s),i._prevClass=s)}}function ae(t){function e(){(a||(a=[])).push(t.slice(v,i).trim()),v=i+1}var n,r,i,o,a,s=!1,c=!1,u=!1,l=!1,f=0,p=0,d=0,v=0;for(i=0;i<t.length;i++)if(r=n,n=t.charCodeAt(i),s)39===n&&92!==r&&(s=!1);else if(c)34===n&&92!==r&&(c=!1);else if(u)96===n&&92!==r&&(u=!1);else if(l)47===n&&92!==r&&(l=!1);else if(124!==n||124===t.charCodeAt(i+1)||124===t.charCodeAt(i-1)||f||p||d){switch(n){case 34:c=!0;break;case 39:s=!0;break;case 96:u=!0;break;case 40:d++;break;case 41:d--;break;case 91:p++;break;case 93:p--;break;case 123:f++;break;case 125:f--}if(47===n){for(var h=i-1,m=void 0;h>=0&&" "===(m=t.charAt(h));h--);m&&Ii.test(m)||(l=!0)}}else void 0===o?(v=i+1,o=t.slice(0,i).trim()):e();if(void 0===o?o=t.slice(0,i).trim():0!==v&&e(),a)for(i=0;i<a.length;i++)o=function(t,e){var n=e.indexOf("(");{if(n<0)return'_f("'+e+'")('+t+")";var r=e.slice(0,n),i=e.slice(n+1);return'_f("'+r+'")('+t+","+i}}(o,a[i]);return o}function se(t){console.error("[Vue compiler]: "+t)}function ce(t,e){return t?t.map(function(t){return t[e]}).filter(function(t){return t}):[]}function ue(t,e,n){(t.props||(t.props=[])).push({name:e,value:n}),t.plain=!1}function le(t,e,n){(t.attrs||(t.attrs=[])).push({name:e,value:n}),t.plain=!1}function fe(t,e,n){t.attrsMap[e]=n,t.attrsList.push({name:e,value:n})}function pe(t,e,n,r,i,o){(t.directives||(t.directives=[])).push({name:e,rawName:n,value:r,arg:i,modifiers:o}),t.plain=!1}function de(t,e,n,r,i,o){(r=r||jn).capture&&(delete r.capture,e="!"+e),r.once&&(delete r.once,e="~"+e),r.passive&&(delete r.passive,e="&"+e),"click"===e&&(r.right?(e="contextmenu",delete r.right):r.middle&&(e="mouseup"));var a;r.native?(delete r.native,a=t.nativeEvents||(t.nativeEvents={})):a=t.events||(t.events={});var s={value:n};r!==jn&&(s.modifiers=r);var c=a[e];Array.isArray(c)?i?c.unshift(s):c.push(s):a[e]=c?i?[s,c]:[c,s]:s,t.plain=!1}function ve(t,e,n){var r=he(t,":"+e)||he(t,"v-bind:"+e);if(null!=r)return ae(r);if(!1!==n){var i=he(t,e);if(null!=i)return JSON.stringify(i)}}function he(t,e,n){var r;if(null!=(r=t.attrsMap[e]))for(var i=t.attrsList,o=0,a=i.length;o<a;o++)if(i[o].name===e){i.splice(o,1);break}return n&&delete t.attrsMap[e],r}function me(t,e,n){var r=n||{},i="$$v";r.trim&&(i="(typeof $$v === 'string'? $$v.trim(): $$v)"),r.number&&(i="_n("+i+")");var o=ye(e,i);t.model={value:"("+e+")",expression:'"'+e+'"',callback:"function ($$v) {"+o+"}"}}function ye(t,e){var n=function(t){if(ei=t.length,t.indexOf("[")<0||t.lastIndexOf("]")<ei-1)return(ii=t.lastIndexOf("."))>-1?{exp:t.slice(0,ii),key:'"'+t.slice(ii+1)+'"'}:{exp:t,key:null};ni=t,ii=oi=ai=0;for(;!_e();)be(ri=ge())?$e(ri):91===ri&&function(t){var e=1;oi=ii;for(;!_e();)if(t=ge(),be(t))$e(t);else if(91===t&&e++,93===t&&e--,0===e){ai=ii;break}}(ri);return{exp:t.slice(0,oi),key:t.slice(oi+1,ai)}}(t);return null===n.key?t+"="+e:"$set("+n.exp+", "+n.key+", "+e+")"}function ge(){return ni.charCodeAt(++ii)}function _e(){return ii>=ei}function be(t){return 34===t||39===t}function $e(t){for(var e=t;!_e()&&(t=ge())!==e;);}function Ce(t,e,n,r,i){e=function(t){return t._withTask||(t._withTask=function(){Er=!0;var e=t.apply(null,arguments);return Er=!1,e})}(e),n&&(e=function(t,e,n){var r=si;return function i(){null!==t.apply(null,arguments)&&we(e,i,n,r)}}(e,t,r)),si.addEventListener(t,e,or?{capture:r,passive:i}:r)}function we(t,e,n,r){(r||si).removeEventListener(t,e._withTask||e,n)}function xe(n,r){if(!t(n.data.on)||!t(r.data.on)){var i=r.data.on||{},o=n.data.on||{};si=r.elm,function(t){if(e(t[Li])){var n=Qn?"change":"input";t[n]=[].concat(t[Li],t[n]||[]),delete t[Li]}e(t[Mi])&&(t.change=[].concat(t[Mi],t.change||[]),delete t[Mi])}(i),X(i,o,Ce,we,r.context),si=void 0}}function ke(n,r){if(!t(n.data.domProps)||!t(r.data.domProps)){var i,o,a=r.elm,s=n.data.domProps||{},u=r.data.domProps||{};e(u.__ob__)&&(u=r.data.domProps=h({},u));for(i in s)t(u[i])&&(a[i]="");for(i in u){if(o=u[i],"textContent"===i||"innerHTML"===i){if(r.children&&(r.children.length=0),o===s[i])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===i){a._value=o;var l=t(o)?"":String(o);(function(t,n){return!t.composing&&("OPTION"===t.tagName||function(t,e){var n=!0;try{n=document.activeElement!==t}catch(t){}return n&&t.value!==e}(t,n)||function(t,n){var r=t.value,i=t._vModifiers;if(e(i)){if(i.lazy)return!1;if(i.number)return c(r)!==c(n);if(i.trim)return r.trim()!==n.trim()}return r!==n}(t,n))})(a,l)&&(a.value=l)}else a[i]=o}}}function Ae(t){var e=Oe(t.style);return t.staticStyle?h(t.staticStyle,e):e}function Oe(t){return Array.isArray(t)?m(t):"string"==typeof t?Fi(t):t}function Se(n,r){var i=r.data,o=n.data;if(!(t(i.staticStyle)&&t(i.style)&&t(o.staticStyle)&&t(o.style))){var a,s,c=r.elm,u=o.staticStyle,l=o.normalizedStyle||o.style||{},f=u||l,p=Oe(r.data.style)||{};r.data.normalizedStyle=e(p.__ob__)?h({},p):p;var d=function(t,e){var n,r={};if(e)for(var i=t;i.componentInstance;)(i=i.componentInstance._vnode)&&i.data&&(n=Ae(i.data))&&h(r,n);(n=Ae(t.data))&&h(r,n);for(var o=t;o=o.parent;)o.data&&(n=Ae(o.data))&&h(r,n);return r}(r,!0);for(s in f)t(d[s])&&Bi(c,s,"");for(s in d)(a=d[s])!==f[s]&&Bi(c,s,null==a?"":a)}}function Te(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(/\s+/).forEach(function(e){return t.classList.add(e)}):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Ee(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(/\s+/).forEach(function(e){return t.classList.remove(e)}):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{for(var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?t.setAttribute("class",n):t.removeAttribute("class")}}function je(t){if(t){if("object"==typeof t){var e={};return!1!==t.css&&h(e,Ki(t.name||"v")),h(e,t),e}return"string"==typeof t?Ki(t):void 0}}function Ne(t){Qi(function(){Qi(t)})}function Ie(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Te(t,e))}function Le(t,e){t._transitionClasses&&l(t._transitionClasses,e),Ee(t,e)}function Me(t,e,n){var r=De(t,e),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===qi?Zi:Yi,c=0,u=function(){t.removeEventListener(s,l),n()},l=function(e){e.target===t&&++c>=a&&u()};setTimeout(function(){c<a&&u()},o+1),t.addEventListener(s,l)}function De(t,e){var n,r=window.getComputedStyle(t),i=r[Gi+"Delay"].split(", "),o=r[Gi+"Duration"].split(", "),a=Pe(i,o),s=r[Xi+"Delay"].split(", "),c=r[Xi+"Duration"].split(", "),u=Pe(s,c),l=0,f=0;e===qi?a>0&&(n=qi,l=a,f=o.length):e===Wi?u>0&&(n=Wi,l=u,f=c.length):f=(n=(l=Math.max(a,u))>0?a>u?qi:Wi:null)?n===qi?o.length:c.length:0;return{type:n,timeout:l,propCount:f,hasTransform:n===qi&&to.test(r[Gi+"Property"])}}function Pe(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max.apply(null,e.map(function(e,n){return Fe(e)+Fe(t[n])}))}function Fe(t){return 1e3*Number(t.slice(0,-1))}function Re(n,r){var o=n.elm;e(o._leaveCb)&&(o._leaveCb.cancelled=!0,o._leaveCb());var a=je(n.data.transition);if(!t(a)&&!e(o._enterCb)&&1===o.nodeType){for(var s=a.css,u=a.type,l=a.enterClass,f=a.enterToClass,p=a.enterActiveClass,d=a.appearClass,v=a.appearToClass,h=a.appearActiveClass,m=a.beforeEnter,y=a.enter,g=a.afterEnter,_=a.enterCancelled,$=a.beforeAppear,C=a.appear,w=a.afterAppear,x=a.appearCancelled,k=a.duration,A=Pr,O=Pr.$vnode;O&&O.parent;)A=(O=O.parent).context;var S=!A._isMounted||!n.isRootInsert;if(!S||C||""===C){var T=S&&d?d:l,E=S&&h?h:p,j=S&&v?v:f,N=S?$||m:m,I=S&&"function"==typeof C?C:y,L=S?w||g:g,M=S?x||_:_,D=c(i(k)?k.enter:k),P=!1!==s&&!tr,F=Ue(I),R=o._enterCb=b(function(){P&&(Le(o,j),Le(o,E)),R.cancelled?(P&&Le(o,T),M&&M(o)):L&&L(o),o._enterCb=null});n.data.show||Y(n,"insert",function(){var t=o.parentNode,e=t&&t._pending&&t._pending[n.key];e&&e.tag===n.tag&&e.elm._leaveCb&&e.elm._leaveCb(),I&&I(o,R)}),N&&N(o),P&&(Ie(o,T),Ie(o,E),Ne(function(){Ie(o,j),Le(o,T),R.cancelled||F||(Be(D)?setTimeout(R,D):Me(o,u,R))})),n.data.show&&(r&&r(),I&&I(o,R)),P||F||R()}}}function He(n,r){function o(){x.cancelled||(n.data.show||((a.parentNode._pending||(a.parentNode._pending={}))[n.key]=n),v&&v(a),$&&(Ie(a,f),Ie(a,d),Ne(function(){Ie(a,p),Le(a,f),x.cancelled||C||(Be(w)?setTimeout(x,w):Me(a,l,x))})),h&&h(a,x),$||C||x())}var a=n.elm;e(a._enterCb)&&(a._enterCb.cancelled=!0,a._enterCb());var s=je(n.data.transition);if(t(s)||1!==a.nodeType)return r();if(!e(a._leaveCb)){var u=s.css,l=s.type,f=s.leaveClass,p=s.leaveToClass,d=s.leaveActiveClass,v=s.beforeLeave,h=s.leave,m=s.afterLeave,y=s.leaveCancelled,g=s.delayLeave,_=s.duration,$=!1!==u&&!tr,C=Ue(h),w=c(i(_)?_.leave:_),x=a._leaveCb=b(function(){a.parentNode&&a.parentNode._pending&&(a.parentNode._pending[n.key]=null),$&&(Le(a,p),Le(a,d)),x.cancelled?($&&Le(a,f),y&&y(a)):(r(),m&&m(a)),a._leaveCb=null});g?g(o):o()}}function Be(t){return"number"==typeof t&&!isNaN(t)}function Ue(n){if(t(n))return!1;var r=n.fns;return e(r)?Ue(Array.isArray(r)?r[0]:r):(n._length||n.length)>1}function Ve(t,e){!0!==e.data.show&&Re(e)}function ze(t,e,n){Ke(t,e,n),(Qn||er)&&setTimeout(function(){Ke(t,e,n)},0)}function Ke(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=t.options.length;s<c;s++)if(a=t.options[s],i)o=_(r,qe(a))>-1,a.selected!==o&&(a.selected=o);else if(g(qe(a),r))return void(t.selectedIndex!==s&&(t.selectedIndex=s));i||(t.selectedIndex=-1)}}function Je(t,e){return e.every(function(e){return!g(e,t)})}function qe(t){return"_value"in t?t._value:t.value}function We(t){t.target.composing=!0}function Ge(t){t.target.composing&&(t.target.composing=!1,Ze(t.target,"input"))}function Ze(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function Xe(t){return!t.componentInstance||t.data&&t.data.transition?t:Xe(t.componentInstance._vnode)}function Ye(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?Ye(it(e.children)):t}function Qe(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var o in i)e[Pn(o)]=i[o];return e}function tn(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function en(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function nn(t){t.data.newPos=t.elm.getBoundingClientRect()}function rn(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}function on(t,e){var n=e?zo:Vo;return t.replace(n,function(t){return Uo[t]})}function an(t,e,n){return{type:1,tag:t,attrsList:e,attrsMap:function(t){for(var e={},n=0,r=t.length;n<r;n++)e[t[n].name]=t[n].value;return e}(e),parent:n,children:[]}}function sn(t,e){function n(t){t.pre&&(s=!1),Lo(t.tag)&&(c=!1);for(var n=0;n<Io.length;n++)Io[n](t,e)}To=e.warn||se,Lo=e.isPreTag||Bn,Mo=e.mustUseProp||Bn,Do=e.getTagNamespace||Bn,jo=ce(e.modules,"transformNode"),No=ce(e.modules,"preTransformNode"),Io=ce(e.modules,"postTransformNode"),Eo=e.delimiters;var r,i,o=[],a=!1!==e.preserveWhitespace,s=!1,c=!1;return function(t,e){function n(e){l+=e,t=t.substring(e)}function r(t,n,r){var i,s;if(null==n&&(n=l),null==r&&(r=l),t&&(s=t.toLowerCase()),t)for(i=a.length-1;i>=0&&a[i].lowerCasedTag!==s;i--);else i=0;if(i>=0){for(var c=a.length-1;c>=i;c--)e.end&&e.end(a[c].tag,n,r);a.length=i,o=i&&a[i-1].tag}else"br"===s?e.start&&e.start(t,[],!0,n,r):"p"===s&&(e.start&&e.start(t,[],!1,n,r),e.end&&e.end(t,n,r))}for(var i,o,a=[],s=e.expectHTML,c=e.isUnaryTag||Bn,u=e.canBeLeftOpenTag||Bn,l=0;t;){if(i=t,o&&Ho(o)){var f=0,p=o.toLowerCase(),d=Bo[p]||(Bo[p]=new RegExp("([\\s\\S]*?)(</"+p+"[^>]*>)","i")),v=t.replace(d,function(t,n,r){return f=r.length,Ho(p)||"noscript"===p||(n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),Jo(p,n)&&(n=n.slice(1)),e.chars&&e.chars(n),""});l+=t.length-v.length,t=v,r(p,l-f,l)}else{var h=t.indexOf("<");if(0===h){if(Ao.test(t)){var m=t.indexOf("--\x3e");if(m>=0){e.shouldKeepComment&&e.comment(t.substring(4,m)),n(m+3);continue}}if(Oo.test(t)){var y=t.indexOf("]>");if(y>=0){n(y+2);continue}}var g=t.match(ko);if(g){n(g[0].length);continue}var _=t.match(xo);if(_){var b=l;n(_[0].length),r(_[1],b,l);continue}var $=function(){var e=t.match(Co);if(e){var r={tagName:e[1],attrs:[],start:l};n(e[0].length);for(var i,o;!(i=t.match(wo))&&(o=t.match(_o));)n(o[0].length),r.attrs.push(o);if(i)return r.unarySlash=i[1],n(i[0].length),r.end=l,r}}();if($){!function(t){var n=t.tagName,i=t.unarySlash;s&&("p"===o&&go(n)&&r(o),u(n)&&o===n&&r(n));for(var l=c(n)||!!i,f=t.attrs.length,p=new Array(f),d=0;d<f;d++){var v=t.attrs[d];So&&-1===v[0].indexOf('""')&&(""===v[3]&&delete v[3],""===v[4]&&delete v[4],""===v[5]&&delete v[5]);var h=v[3]||v[4]||v[5]||"",m="a"===n&&"href"===v[1]?e.shouldDecodeNewlinesForHref:e.shouldDecodeNewlines;p[d]={name:v[1],value:on(h,m)}}l||(a.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:p}),o=n),e.start&&e.start(n,p,l,t.start,t.end)}($),Jo(o,t)&&n(1);continue}}var C=void 0,w=void 0,x=void 0;if(h>=0){for(w=t.slice(h);!(xo.test(w)||Co.test(w)||Ao.test(w)||Oo.test(w)||(x=w.indexOf("<",1))<0);)h+=x,w=t.slice(h);C=t.substring(0,h),n(h)}h<0&&(C=t,t=""),e.chars&&C&&e.chars(C)}if(t===i){e.chars&&e.chars(t);break}}r()}(t,{warn:To,expectHTML:e.expectHTML,isUnaryTag:e.isUnaryTag,canBeLeftOpenTag:e.canBeLeftOpenTag,shouldDecodeNewlines:e.shouldDecodeNewlines,shouldDecodeNewlinesForHref:e.shouldDecodeNewlinesForHref,shouldKeepComment:e.comments,start:function(t,a,u){var l=i&&i.ns||Do(t);Qn&&"svg"===l&&(a=function(t){for(var e=[],n=0;n<t.length;n++){var r=t[n];na.test(r.name)||(r.name=r.name.replace(ra,""),e.push(r))}return e}(a));var f=an(t,a,i);l&&(f.ns=l),function(t){return"style"===t.tag||"script"===t.tag&&(!t.attrsMap.type||"text/javascript"===t.attrsMap.type)}(f)&&!ur()&&(f.forbidden=!0);for(var p=0;p<No.length;p++)f=No[p](f,e)||f;if(s||(!function(t){null!=he(t,"v-pre")&&(t.pre=!0)}(f),f.pre&&(s=!0)),Lo(f.tag)&&(c=!0),s?function(t){var e=t.attrsList.length;if(e)for(var n=t.attrs=new Array(e),r=0;r<e;r++)n[r]={name:t.attrsList[r].name,value:JSON.stringify(t.attrsList[r].value)};else t.pre||(t.plain=!0)}(f):f.processed||(un(f),function(t){var e=he(t,"v-if");if(e)t.if=e,ln(t,{exp:e,block:t});else{null!=he(t,"v-else")&&(t.else=!0);var n=he(t,"v-else-if");n&&(t.elseif=n)}}(f),function(t){null!=he(t,"v-once")&&(t.once=!0)}(f),cn(f,e)),r?o.length||r.if&&(f.elseif||f.else)&&ln(r,{exp:f.elseif,block:f}):r=f,i&&!f.forbidden)if(f.elseif||f.else)!function(t,e){var n=function(t){var e=t.length;for(;e--;){if(1===t[e].type)return t[e];t.pop()}}(e.children);n&&n.if&&ln(n,{exp:t.elseif,block:t})}(f,i);else if(f.slotScope){i.plain=!1;var d=f.slotTarget||'"default"';(i.scopedSlots||(i.scopedSlots={}))[d]=f}else i.children.push(f),f.parent=i;u?n(f):(i=f,o.push(f))},end:function(){var t=o[o.length-1],e=t.children[t.children.length-1];e&&3===e.type&&" "===e.text&&!c&&t.children.pop(),o.length-=1,i=o[o.length-1],n(t)},chars:function(t){if(i&&(!Qn||"textarea"!==i.tag||i.attrsMap.placeholder!==t)){var e=i.children;if(t=c||t.trim()?function(t){return"script"===t.tag||"style"===t.tag}(i)?t:ea(t):a&&e.length?" ":""){var n;!s&&" "!==t&&(n=function(t,e){var n=e?fo(e):uo;if(n.test(t)){for(var r,i,o,a=[],s=[],c=n.lastIndex=0;r=n.exec(t);){(i=r.index)>c&&(s.push(o=t.slice(c,i)),a.push(JSON.stringify(o)));var u=ae(r[1].trim());a.push("_s("+u+")"),s.push({"@binding":u}),c=i+r[0].length}return c<t.length&&(s.push(o=t.slice(c)),a.push(JSON.stringify(o))),{expression:a.join("+"),tokens:s}}}(t,Eo))?e.push({type:2,expression:n.expression,tokens:n.tokens,text:t}):" "===t&&e.length&&" "===e[e.length-1].text||e.push({type:3,text:t})}}},comment:function(t){i.children.push({type:3,text:t,isComment:!0})}}),r}function cn(t,e){!function(t){var e=ve(t,"key");e&&(t.key=e)}(t),t.plain=!t.key&&!t.attrsList.length,function(t){var e=ve(t,"ref");e&&(t.ref=e,t.refInFor=function(t){var e=t;for(;e;){if(void 0!==e.for)return!0;e=e.parent}return!1}(t))}(t),function(t){if("slot"===t.tag)t.slotName=ve(t,"name");else{var e;"template"===t.tag?(e=he(t,"scope"),t.slotScope=e||he(t,"slot-scope")):(e=he(t,"slot-scope"))&&(t.slotScope=e);var n=ve(t,"slot");n&&(t.slotTarget='""'===n?'"default"':n,"template"===t.tag||t.slotScope||le(t,"slot",n))}}(t),function(t){var e;(e=ve(t,"is"))&&(t.component=e);null!=he(t,"inline-template")&&(t.inlineTemplate=!0)}(t);for(var n=0;n<jo.length;n++)t=jo[n](t,e)||t;!function(t){var e,n,r,i,o,a,s,c=t.attrsList;for(e=0,n=c.length;e<n;e++)if(r=i=c[e].name,o=c[e].value,Wo.test(r))if(t.hasBindings=!0,(a=function(t){var e=t.match(ta);if(e){var n={};return e.forEach(function(t){n[t.slice(1)]=!0}),n}}(r))&&(r=r.replace(ta,"")),Qo.test(r))r=r.replace(Qo,""),o=ae(o),s=!1,a&&(a.prop&&(s=!0,"innerHtml"===(r=Pn(r))&&(r="innerHTML")),a.camel&&(r=Pn(r)),a.sync&&de(t,"update:"+Pn(r),ye(o,"$event"))),s||!t.component&&Mo(t.tag,t.attrsMap.type,r)?ue(t,r,o):le(t,r,o);else if(qo.test(r))r=r.replace(qo,""),de(t,r,o,a,!1);else{var u=(r=r.replace(Wo,"")).match(Yo),l=u&&u[1];l&&(r=r.slice(0,-(l.length+1))),pe(t,r,i,o,l,a)}else le(t,r,JSON.stringify(o)),!t.component&&"muted"===r&&Mo(t.tag,t.attrsMap.type,r)&&ue(t,r,"true")}(t)}function un(t){var e;if(e=he(t,"v-for")){var n=function(t){var e=t.match(Go);if(!e)return;var n={};n.for=e[2].trim();var r=e[1].trim().replace(Xo,""),i=r.match(Zo);i?(n.alias=r.replace(Zo,""),n.iterator1=i[1].trim(),i[2]&&(n.iterator2=i[2].trim())):n.alias=r;return n}(e);n&&h(t,n)}}function ln(t,e){t.ifConditions||(t.ifConditions=[]),t.ifConditions.push(e)}function fn(t){return an(t.tag,t.attrsList.slice(),t.parent)}function pn(t){if(t.static=function(t){if(2===t.type)return!1;if(3===t.type)return!0;return!(!t.pre&&(t.hasBindings||t.if||t.for||In(t.tag)||!Fo(t.tag)||function(t){for(;t.parent;){if("template"!==(t=t.parent).tag)return!1;if(t.for)return!0}return!1}(t)||!Object.keys(t).every(Po)))}(t),1===t.type){if(!Fo(t.tag)&&"slot"!==t.tag&&null==t.attrsMap["inline-template"])return;for(var e=0,n=t.children.length;e<n;e++){var r=t.children[e];pn(r),r.static||(t.static=!1)}if(t.ifConditions)for(var i=1,o=t.ifConditions.length;i<o;i++){var a=t.ifConditions[i].block;pn(a),a.static||(t.static=!1)}}}function dn(t,e){if(1===t.type){if((t.static||t.once)&&(t.staticInFor=e),t.static&&t.children.length&&(1!==t.children.length||3!==t.children[0].type))return void(t.staticRoot=!0);if(t.staticRoot=!1,t.children)for(var n=0,r=t.children.length;n<r;n++)dn(t.children[n],e||!!t.for);if(t.ifConditions)for(var i=1,o=t.ifConditions.length;i<o;i++)dn(t.ifConditions[i].block,e)}}function vn(t,e,n){var r=e?"nativeOn:{":"on:{";for(var i in t)r+='"'+i+'":'+hn(i,t[i])+",";return r.slice(0,-1)+"}"}function hn(t,e){if(!e)return"function(){}";if(Array.isArray(e))return"["+e.map(function(e){return hn(t,e)}).join(",")+"]";var n=ca.test(e.value),r=sa.test(e.value);if(e.modifiers){var i="",o="",a=[];for(var s in e.modifiers)if(fa[s])o+=fa[s],ua[s]&&a.push(s);else if("exact"===s){var c=e.modifiers;o+=la(["ctrl","shift","alt","meta"].filter(function(t){return!c[t]}).map(function(t){return"$event."+t+"Key"}).join("||"))}else a.push(s);a.length&&(i+=function(t){return"if(!('button' in $event)&&"+t.map(mn).join("&&")+")return null;"}(a)),o&&(i+=o);return"function($event){"+i+(n?e.value+"($event)":r?"("+e.value+")($event)":e.value)+"}"}return n||r?e.value:"function($event){"+e.value+"}"}function mn(t){var e=parseInt(t,10);if(e)return"$event.keyCode!=="+e;var n=ua[t];return"_k($event.keyCode,"+JSON.stringify(t)+","+JSON.stringify(n)+",$event.key)"}function yn(t,e){var n=new da(e);return{render:"with(this){return "+(t?gn(t,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function gn(t,e){if(t.staticRoot&&!t.staticProcessed)return _n(t,e);if(t.once&&!t.onceProcessed)return bn(t,e);if(t.for&&!t.forProcessed)return function(t,e,n,r){var i=t.for,o=t.alias,a=t.iterator1?","+t.iterator1:"",s=t.iterator2?","+t.iterator2:"";return t.forProcessed=!0,(r||"_l")+"(("+i+"),function("+o+a+s+"){return "+(n||gn)(t,e)+"})"}(t,e);if(t.if&&!t.ifProcessed)return $n(t,e);if("template"!==t.tag||t.slotTarget){if("slot"===t.tag)return function(t,e){var n=t.slotName||'"default"',r=kn(t,e),i="_t("+n+(r?","+r:""),o=t.attrs&&"{"+t.attrs.map(function(t){return Pn(t.name)+":"+t.value}).join(",")+"}",a=t.attrsMap["v-bind"];!o&&!a||r||(i+=",null");o&&(i+=","+o);a&&(i+=(o?"":",null")+","+a);return i+")"}(t,e);var n;if(t.component)n=function(t,e,n){var r=e.inlineTemplate?null:kn(e,n,!0);return"_c("+t+","+wn(e,n)+(r?","+r:"")+")"}(t.component,t,e);else{var r=t.plain?void 0:wn(t,e),i=t.inlineTemplate?null:kn(t,e,!0);n="_c('"+t.tag+"'"+(r?","+r:"")+(i?","+i:"")+")"}for(var o=0;o<e.transforms.length;o++)n=e.transforms[o](t,n);return n}return kn(t,e)||"void 0"}function _n(t,e){return t.staticProcessed=!0,e.staticRenderFns.push("with(this){return "+gn(t,e)+"}"),"_m("+(e.staticRenderFns.length-1)+(t.staticInFor?",true":"")+")"}function bn(t,e){if(t.onceProcessed=!0,t.if&&!t.ifProcessed)return $n(t,e);if(t.staticInFor){for(var n="",r=t.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+gn(t,e)+","+e.onceId+++","+n+")":gn(t,e)}return _n(t,e)}function $n(t,e,n,r){return t.ifProcessed=!0,Cn(t.ifConditions.slice(),e,n,r)}function Cn(t,e,n,r){function i(t){return n?n(t,e):t.once?bn(t,e):gn(t,e)}if(!t.length)return r||"_e()";var o=t.shift();return o.exp?"("+o.exp+")?"+i(o.block)+":"+Cn(t,e,n,r):""+i(o.block)}function wn(t,e){var n="{",r=function(t,e){var n=t.directives;if(!n)return;var r,i,o,a,s="directives:[",c=!1;for(r=0,i=n.length;r<i;r++){o=n[r],a=!0;var u=e.directives[o.name];u&&(a=!!u(t,o,e.warn)),a&&(c=!0,s+='{name:"'+o.name+'",rawName:"'+o.rawName+'"'+(o.value?",value:("+o.value+"),expression:"+JSON.stringify(o.value):"")+(o.arg?',arg:"'+o.arg+'"':"")+(o.modifiers?",modifiers:"+JSON.stringify(o.modifiers):"")+"},")}if(c)return s.slice(0,-1)+"]"}(t,e);r&&(n+=r+","),t.key&&(n+="key:"+t.key+","),t.ref&&(n+="ref:"+t.ref+","),t.refInFor&&(n+="refInFor:true,"),t.pre&&(n+="pre:true,"),t.component&&(n+='tag:"'+t.tag+'",');for(var i=0;i<e.dataGenFns.length;i++)n+=e.dataGenFns[i](t);if(t.attrs&&(n+="attrs:{"+On(t.attrs)+"},"),t.props&&(n+="domProps:{"+On(t.props)+"},"),t.events&&(n+=vn(t.events,!1,e.warn)+","),t.nativeEvents&&(n+=vn(t.nativeEvents,!0,e.warn)+","),t.slotTarget&&!t.slotScope&&(n+="slot:"+t.slotTarget+","),t.scopedSlots&&(n+=function(t,e){return"scopedSlots:_u(["+Object.keys(t).map(function(n){return xn(n,t[n],e)}).join(",")+"])"}(t.scopedSlots,e)+","),t.model&&(n+="model:{value:"+t.model.value+",callback:"+t.model.callback+",expression:"+t.model.expression+"},"),t.inlineTemplate){var o=function(t,e){var n=t.children[0];if(1===n.type){var r=yn(n,e.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(t){return"function(){"+t+"}"}).join(",")+"]}"}}(t,e);o&&(n+=o+",")}return n=n.replace(/,$/,"")+"}",t.wrapData&&(n=t.wrapData(n)),t.wrapListeners&&(n=t.wrapListeners(n)),n}function xn(t,e,n){if(e.for&&!e.forProcessed)return function(t,e,n){var r=e.for,i=e.alias,o=e.iterator1?","+e.iterator1:"",a=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,"_l(("+r+"),function("+i+o+a+"){return "+xn(t,e,n)+"})"}(t,e,n);return"{key:"+t+",fn:"+("function("+String(e.slotScope)+"){return "+("template"===e.tag?e.if?e.if+"?"+(kn(e,n)||"undefined")+":undefined":kn(e,n)||"undefined":gn(e,n))+"}")+"}"}function kn(t,e,n,r,i){var o=t.children;if(o.length){var a=o[0];if(1===o.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag)return(r||gn)(a,e);var s=n?function(t,e){for(var n=0,r=0;r<t.length;r++){var i=t[r];if(1===i.type){if(An(i)||i.ifConditions&&i.ifConditions.some(function(t){return An(t.block)})){n=2;break}(e(i)||i.ifConditions&&i.ifConditions.some(function(t){return e(t.block)}))&&(n=1)}}return n}(o,e.maybeComponent):0,c=i||function(t,e){if(1===t.type)return gn(t,e);return 3===t.type&&t.isComment?function(t){return"_e("+JSON.stringify(t.text)+")"}(t):function(t){return"_v("+(2===t.type?t.expression:Sn(JSON.stringify(t.text)))+")"}(t)};return"["+o.map(function(t){return c(t,e)}).join(",")+"]"+(s?","+s:"")}}function An(t){return void 0!==t.for||"template"===t.tag||"slot"===t.tag}function On(t){for(var e="",n=0;n<t.length;n++){var r=t[n];e+='"'+r.name+'":'+Sn(r.value)+","}return e.slice(0,-1)}function Sn(t){return t.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function Tn(t,e){try{return new Function(t)}catch(n){return e.push({err:n,code:t}),y}}function En(t){return Ro=Ro||document.createElement("div"),Ro.innerHTML=t?'<a href="\n"/>':'<div a="\n"/>',Ro.innerHTML.indexOf("&#10;")>0}var jn=Object.freeze({}),Nn=Object.prototype.toString,In=u("slot,component",!0),Ln=u("key,ref,slot,slot-scope,is"),Mn=Object.prototype.hasOwnProperty,Dn=/-(\w)/g,Pn=p(function(t){return t.replace(Dn,function(t,e){return e?e.toUpperCase():""})}),Fn=p(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),Rn=/\B([A-Z])/g,Hn=p(function(t){return t.replace(Rn,"-$1").toLowerCase()}),Bn=function(t,e,n){return!1},Un=function(t){return t},Vn="data-server-rendered",zn=["component","directive","filter"],Kn=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured"],Jn={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:Bn,isReservedAttr:Bn,isUnknownElement:Bn,getTagNamespace:y,parsePlatformTagName:Un,mustUseProp:Bn,_lifecycleHooks:Kn},qn=/[^\w.$]/,Wn="__proto__"in{},Gn="undefined"!=typeof window,Zn="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,Xn=Zn&&WXEnvironment.platform.toLowerCase(),Yn=Gn&&window.navigator.userAgent.toLowerCase(),Qn=Yn&&/msie|trident/.test(Yn),tr=Yn&&Yn.indexOf("msie 9.0")>0,er=Yn&&Yn.indexOf("edge/")>0,nr=Yn&&Yn.indexOf("android")>0||"android"===Xn,rr=Yn&&/iphone|ipad|ipod|ios/.test(Yn)||"ios"===Xn,ir=(Yn&&/chrome\/\d+/.test(Yn),{}.watch),or=!1;if(Gn)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){or=!0}}),window.addEventListener("test-passive",null,ar)}catch(t){}var sr,cr,ur=function(){return void 0===sr&&(sr=!Gn&&"undefined"!=typeof global&&"server"===global.process.env.VUE_ENV),sr},lr=Gn&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,fr="undefined"!=typeof Symbol&&w(Symbol)&&"undefined"!=typeof Reflect&&w(Reflect.ownKeys);cr="undefined"!=typeof Set&&w(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var pr=y,dr=0,vr=function(){this.id=dr++,this.subs=[]};vr.prototype.addSub=function(t){this.subs.push(t)},vr.prototype.removeSub=function(t){l(this.subs,t)},vr.prototype.depend=function(){vr.target&&vr.target.addDep(this)},vr.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},vr.target=null;var hr=[],mr=function(t,e,n,r,i,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},yr={child:{configurable:!0}};yr.child.get=function(){return this.componentInstance},Object.defineProperties(mr.prototype,yr);var gr=function(t){void 0===t&&(t="");var e=new mr;return e.text=t,e.isComment=!0,e},_r=Array.prototype,br=Object.create(_r);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=_r[t];C(br,t,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var i,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&a.observeArray(i),a.dep.notify(),o})});var $r=Object.getOwnPropertyNames(br),Cr={shouldConvert:!0},wr=function(t){if(this.value=t,this.dep=new vr,this.vmCount=0,C(t,"__ob__",this),Array.isArray(t)){(Wn?O:S)(t,br,$r),this.observeArray(t)}else this.walk(t)};wr.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)E(t,e[n],t[e[n]])},wr.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)T(t[e])};var xr=Jn.optionMergeStrategies;xr.data=function(t,e,n){return n?M(t,e,n):e&&"function"!=typeof e?t:M(t,e)},Kn.forEach(function(t){xr[t]=D}),zn.forEach(function(t){xr[t+"s"]=P}),xr.watch=function(t,e,n,r){if(t===ir&&(t=void 0),e===ir&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};h(i,t);for(var o in e){var a=i[o],s=e[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},xr.props=xr.methods=xr.inject=xr.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return h(i,t),e&&h(i,e),i},xr.provide=M;var kr,Ar,Or=function(t,e){return void 0===e?t:e},Sr=[],Tr=!1,Er=!1;if("undefined"!=typeof setImmediate&&w(setImmediate))Ar=function(){setImmediate(J)};else if("undefined"==typeof MessageChannel||!w(MessageChannel)&&"[object MessageChannelConstructor]"!==MessageChannel.toString())Ar=function(){setTimeout(J,0)};else{var jr=new MessageChannel,Nr=jr.port2;jr.port1.onmessage=J,Ar=function(){Nr.postMessage(1)}}if("undefined"!=typeof Promise&&w(Promise)){var Ir=Promise.resolve();kr=function(){Ir.then(J),rr&&setTimeout(y)}}else kr=Ar;var Lr,Mr=new cr,Dr=p(function(t){var e="&"===t.charAt(0),n="~"===(t=e?t.slice(1):t).charAt(0),r="!"===(t=n?t.slice(1):t).charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}),Pr=null,Fr=[],Rr=[],Hr={},Br=!1,Ur=!1,Vr=0,zr=0,Kr=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++zr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new cr,this.newDepIds=new cr,this.expression="","function"==typeof e?this.getter=e:(this.getter=function(t){if(!qn.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Kr.prototype.get=function(){!function(t){vr.target&&hr.push(vr.target),vr.target=t}(this);var t,e=this.vm;try{t=this.getter.call(e,e)}catch(t){if(!this.user)throw t;V(t,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&W(t),vr.target=hr.pop(),this.cleanupDeps()}return t},Kr.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Kr.prototype.cleanupDeps=function(){for(var t=this.deps.length;t--;){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Kr.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(t){var e=t.id;if(null==Hr[e]){if(Hr[e]=!0,Ur){for(var n=Fr.length-1;n>Vr&&Fr[n].id>t.id;)n--;Fr.splice(n+1,0,t)}else Fr.push(t);Br||(Br=!0,q(ht))}}(this)},Kr.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||i(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(t){V(t,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Kr.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Kr.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},Kr.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||l(this.vm._watchers,this);for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1}};var Jr={enumerable:!0,configurable:!0,get:y,set:y},qr={lazy:!0};Nt(It.prototype);var Wr={init:function(t,n,r,i){if(!t.componentInstance||t.componentInstance._isDestroyed){(t.componentInstance=function(t,n,r,i){var o={_isComponent:!0,parent:n,_parentVnode:t,_parentElm:r||null,_refElm:i||null},a=t.data.inlineTemplate;return e(a)&&(o.render=a.render,o.staticRenderFns=a.staticRenderFns),new t.componentOptions.Ctor(o)}(t,Pr,r,i)).$mount(n?t.elm:void 0,n)}else if(t.data.keepAlive){var o=t;Wr.prepatch(o,o)}},prepatch:function(t,e){var n=e.componentOptions;!function(t,e,n,r,i){var o=!!(i||t.$options._renderChildren||r.data.scopedSlots||t.$scopedSlots!==jn);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=i,t.$attrs=r.data&&r.data.attrs||jn,t.$listeners=n||jn,e&&t.$options.props){Cr.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=H(u,t.$options.props,e,t)}Cr.shouldConvert=!0,t.$options.propsData=e}if(n){var l=t.$options._parentListeners;t.$options._parentListeners=n,st(t,n,l)}o&&(t.$slots=ct(i,r.context),t.$forceUpdate())}(e.componentInstance=t.componentInstance,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,vt(n,"mounted")),t.data.keepAlive&&(e._isMounted?function(t){t._inactive=!1,Rr.push(t)}(n):pt(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?dt(e,!0):e.$destroy())}},Gr=Object.keys(Wr),Zr=1,Xr=2,Yr=0;!function(t){t.prototype._init=function(t){this._uid=Yr++,this._isVue=!0,t&&t._isComponent?function(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r,n._parentElm=e._parentElm,n._refElm=e._refElm;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}(this,t):this.$options=F(Ft(this.constructor),t||{},this),this._renderProxy=this,this._self=this,function(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}(this),function(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&st(t,e)}(this),function(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,r=n&&n.context;t.$slots=ct(e._renderChildren,r),t.$scopedSlots=jn,t._c=function(e,n,r,i){return Dt(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return Dt(t,e,n,r,i,!0)};var i=n&&n.data;E(t,"$attrs",i&&i.attrs||jn,0,!0),E(t,"$listeners",e._parentListeners||jn,0,!0)}(this),vt(this,"beforeCreate"),function(t){var e=$t(t.$options.inject,t);e&&(Cr.shouldConvert=!1,Object.keys(e).forEach(function(n){E(t,n,e[n])}),Cr.shouldConvert=!0)}(this),yt(this),function(t){var e=t.$options.provide;e&&(t._provided="function"==typeof e?e.call(t):e)}(this),vt(this,"created"),this.$options.el&&this.$mount(this.$options.el)}}(Rt),function(t){var e={};e.get=function(){return this._data};var n={};n.get=function(){return this._props},Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=j,t.prototype.$delete=N,t.prototype.$watch=function(t,e,n){if(o(e))return bt(this,t,e,n);(n=n||{}).user=!0;var r=new Kr(this,t,e,n);return n.immediate&&e.call(this,r.value),function(){r.teardown()}}}(Rt),function(t){var e=/^hook:/;t.prototype.$on=function(t,n){if(Array.isArray(t))for(var r=0,i=t.length;r<i;r++)this.$on(t[r],n);else(this._events[t]||(this._events[t]=[])).push(n),e.test(t)&&(this._hasHookEvent=!0);return this},t.prototype.$once=function(t,e){function n(){r.$off(t,n),e.apply(r,arguments)}var r=this;return n.fn=e,r.$on(t,n),r},t.prototype.$off=function(t,e){if(!arguments.length)return this._events=Object.create(null),this;if(Array.isArray(t)){for(var n=0,r=t.length;n<r;n++)this.$off(t[n],e);return this}var i=this._events[t];if(!i)return this;if(!e)return this._events[t]=null,this;if(e)for(var o,a=i.length;a--;)if((o=i[a])===e||o.fn===e){i.splice(a,1);break}return this},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?v(n):n;for(var r=v(arguments,1),i=0,o=n.length;i<o;i++)try{n[i].apply(e,r)}catch(n){V(n,e,'event handler for "'+t+'"')}}return e}}(Rt),function(t){t.prototype._update=function(t,e){this._isMounted&&vt(this,"beforeUpdate");var n=this.$el,r=this._vnode,i=Pr;Pr=this,this._vnode=t,r?this.$el=this.__patch__(r,t):(this.$el=this.__patch__(this.$el,t,e,!1,this.$options._parentElm,this.$options._refElm),this.$options._parentElm=this.$options._refElm=null),Pr=i,n&&(n.__vue__=null),this.$el&&(this.$el.__vue__=this),this.$vnode&&this.$parent&&this.$vnode===this.$parent._vnode&&(this.$parent.$el=this.$el)},t.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},t.prototype.$destroy=function(){if(!this._isBeingDestroyed){vt(this,"beforeDestroy"),this._isBeingDestroyed=!0;var t=this.$parent;!t||t._isBeingDestroyed||this.$options.abstract||l(t.$children,this),this._watcher&&this._watcher.teardown();for(var e=this._watchers.length;e--;)this._watchers[e].teardown();this._data.__ob__&&this._data.__ob__.vmCount--,this._isDestroyed=!0,this.__patch__(this._vnode,null),vt(this,"destroyed"),this.$off(),this.$el&&(this.$el.__vue__=null),this.$vnode&&(this.$vnode.parent=null)}}}(Rt),function(t){Nt(t.prototype),t.prototype.$nextTick=function(t){return q(t,this)},t.prototype._render=function(){var t=this,e=t.$options,n=e.render,r=e._parentVnode;if(t._isMounted)for(var i in t.$slots){var o=t.$slots[i];(o._rendered||o[0]&&o[0].elm)&&(t.$slots[i]=A(o,!0))}t.$scopedSlots=r&&r.data.scopedSlots||jn,t.$vnode=r;var a;try{a=n.call(t._renderProxy,t.$createElement)}catch(e){V(e,t,"render"),a=t._vnode}return a instanceof mr||(a=gr()),a.parent=r,a}}(Rt);var Qr=[String,RegExp,Array],ti={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Qr,exclude:Qr,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)zt(this.cache,t,this.keys)},watch:{include:function(t){Vt(this,function(e){return Ut(t,e)})},exclude:function(t){Vt(this,function(e){return!Ut(t,e)})}},render:function(){var t=this.$slots.default,e=it(t),n=e&&e.componentOptions;if(n){var r=Bt(n),i=this.include,o=this.exclude;if(i&&(!r||!Ut(i,r))||o&&r&&Ut(o,r))return e;var a=this.cache,s=this.keys,c=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;a[c]?(e.componentInstance=a[c].componentInstance,l(s,c),s.push(c)):(a[c]=e,s.push(c),this.max&&s.length>parseInt(this.max)&&zt(a,s[0],s,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}}};!function(t){var e={};e.get=function(){return Jn},Object.defineProperty(t,"config",e),t.util={warn:pr,extend:h,mergeOptions:F,defineReactive:E},t.set=j,t.delete=N,t.nextTick=q,t.options=Object.create(null),zn.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,h(t.options.components,ti),function(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=v(arguments,1);return n.unshift(this),"function"==typeof t.install?t.install.apply(t,n):"function"==typeof t&&t.apply(null,n),e.push(t),this}}(t),function(t){t.mixin=function(t){return this.options=F(this.options,t),this}}(t),Ht(t),function(t){zn.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&o(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"==typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}(t)}(Rt),Object.defineProperty(Rt.prototype,"$isServer",{get:ur}),Object.defineProperty(Rt.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Rt.version="2.5.13";var ei,ni,ri,ii,oi,ai,si,ci,ui=u("style,class"),li=u("input,textarea,option,select,progress"),fi=function(t,e,n){return"value"===n&&li(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},pi=u("contenteditable,draggable,spellcheck"),di=u("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),vi="http://www.w3.org/1999/xlink",hi=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},mi=function(t){return hi(t)?t.slice(6,t.length):""},yi=function(t){return null==t||!1===t},gi={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},_i=u("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),bi=u("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),$i=function(t){return _i(t)||bi(t)},Ci=Object.create(null),wi=u("text,number,password,search,email,tel,url"),xi=Object.freeze({createElement:function(t,e){var n=document.createElement(t);return"select"!==t?n:(e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)},createElementNS:function(t,e){return document.createElementNS(gi[t],e)},createTextNode:function(t){return document.createTextNode(t)},createComment:function(t){return document.createComment(t)},insertBefore:function(t,e,n){t.insertBefore(e,n)},removeChild:function(t,e){t.removeChild(e)},appendChild:function(t,e){t.appendChild(e)},parentNode:function(t){return t.parentNode},nextSibling:function(t){return t.nextSibling},tagName:function(t){return t.tagName},setTextContent:function(t,e){t.textContent=e},setAttribute:function(t,e,n){t.setAttribute(e,n)}}),ki={create:function(t,e){Xt(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Xt(t,!0),Xt(e))},destroy:function(t){Xt(t,!0)}},Ai=new mr("",{},[]),Oi=["create","activate","update","remove","destroy"],Si={create:te,update:te,destroy:function(t){te(t,Ai)}},Ti=Object.create(null),Ei=[ki,Si],ji={create:re,update:re},Ni={create:oe,update:oe},Ii=/[\w).+\-_$\]]/,Li="__r",Mi="__c",Di={create:xe,update:xe},Pi={create:ke,update:ke},Fi=p(function(t){var e={},n=/:(.+)/;return t.split(/;(?![^(]*\))/g).forEach(function(t){if(t){var r=t.split(n);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}),Ri=/^--/,Hi=/\s*!important$/,Bi=function(t,e,n){if(Ri.test(e))t.style.setProperty(e,n);else if(Hi.test(n))t.style.setProperty(e,n.replace(Hi,""),"important");else{var r=Vi(e);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)t.style[r]=n[i];else t.style[r]=n}},Ui=["Webkit","Moz","ms"],Vi=p(function(t){if(ci=ci||document.createElement("div").style,"filter"!==(t=Pn(t))&&t in ci)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<Ui.length;n++){var r=Ui[n]+e;if(r in ci)return r}}),zi={create:Se,update:Se},Ki=p(function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}}),Ji=Gn&&!tr,qi="transition",Wi="animation",Gi="transition",Zi="transitionend",Xi="animation",Yi="animationend";Ji&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Gi="WebkitTransition",Zi="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Xi="WebkitAnimation",Yi="webkitAnimationEnd"));var Qi=Gn?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()},to=/\b(transform|all)(,|$)/,eo=function(i){function o(t){var n=A.parentNode(t);e(n)&&A.removeChild(n,t)}function a(t,r,i,o,a){if(t.isRootInsert=!a,!function(t,r,i,o){var a=t.data;if(e(a)){var u=e(t.componentInstance)&&a.keepAlive;if(e(a=a.hook)&&e(a=a.init)&&a(t,!1,i,o),e(t.componentInstance))return s(t,r),n(u)&&function(t,n,r,i){for(var o,a=t;a.componentInstance;)if(a=a.componentInstance._vnode,e(o=a.data)&&e(o=o.transition)){for(o=0;o<x.activate.length;++o)x.activate[o](Ai,a);n.push(a);break}c(r,t.elm,i)}(t,r,i,o),!0}}(t,r,i,o)){var u=t.data,f=t.children,v=t.tag;e(v)?(t.elm=t.ns?A.createElementNS(t.ns,v):A.createElement(v,t),d(t),l(t,f,r),e(u)&&p(t,r),c(i,t.elm,o)):n(t.isComment)?(t.elm=A.createComment(t.text),c(i,t.elm,o)):(t.elm=A.createTextNode(t.text),c(i,t.elm,o))}}function s(t,n){e(t.data.pendingInsert)&&(n.push.apply(n,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,f(t)?(p(t,n),d(t)):(Xt(t),n.push(t))}function c(t,n,r){e(t)&&(e(r)?r.parentNode===t&&A.insertBefore(t,n,r):A.appendChild(t,n))}function l(t,e,n){if(Array.isArray(e))for(var i=0;i<e.length;++i)a(e[i],n,t.elm,null,!0);else r(t.text)&&A.appendChild(t.elm,A.createTextNode(String(t.text)))}function f(t){for(;t.componentInstance;)t=t.componentInstance._vnode;return e(t.tag)}function p(t,n){for(var r=0;r<x.create.length;++r)x.create[r](Ai,t);e(C=t.data.hook)&&(e(C.create)&&C.create(Ai,t),e(C.insert)&&n.push(t))}function d(t){var n;if(e(n=t.fnScopeId))A.setAttribute(t.elm,n,"");else for(var r=t;r;)e(n=r.context)&&e(n=n.$options._scopeId)&&A.setAttribute(t.elm,n,""),r=r.parent;e(n=Pr)&&n!==t.context&&n!==t.fnContext&&e(n=n.$options._scopeId)&&A.setAttribute(t.elm,n,"")}function v(t,e,n,r,i,o){for(;r<=i;++r)a(n[r],o,t,e)}function h(t){var n,r,i=t.data;if(e(i))for(e(n=i.hook)&&e(n=n.destroy)&&n(t),n=0;n<x.destroy.length;++n)x.destroy[n](t);if(e(n=t.children))for(r=0;r<t.children.length;++r)h(t.children[r])}function m(t,n,r,i){for(;r<=i;++r){var a=n[r];e(a)&&(e(a.tag)?(y(a),h(a)):o(a.elm))}}function y(t,n){if(e(n)||e(t.data)){var r,i=x.remove.length+1;for(e(n)?n.listeners+=i:n=function(t,e){function n(){0==--n.listeners&&o(t)}return n.listeners=e,n}(t.elm,i),e(r=t.componentInstance)&&e(r=r._vnode)&&e(r.data)&&y(r,n),r=0;r<x.remove.length;++r)x.remove[r](t,n);e(r=t.data.hook)&&e(r=r.remove)?r(t,n):n()}else o(t.elm)}function g(n,r,i,o,s){for(var c,u,l,f=0,p=0,d=r.length-1,h=r[0],y=r[d],g=i.length-1,b=i[0],$=i[g],C=!s;f<=d&&p<=g;)t(h)?h=r[++f]:t(y)?y=r[--d]:Yt(h,b)?(_(h,b,o),h=r[++f],b=i[++p]):Yt(y,$)?(_(y,$,o),y=r[--d],$=i[--g]):Yt(h,$)?(_(h,$,o),C&&A.insertBefore(n,h.elm,A.nextSibling(y.elm)),h=r[++f],$=i[--g]):Yt(y,b)?(_(y,b,o),C&&A.insertBefore(n,y.elm,h.elm),y=r[--d],b=i[++p]):(t(c)&&(c=Qt(r,f,d)),t(u=e(b.key)?c[b.key]:function(t,n,r,i){for(var o=r;o<i;o++){var a=n[o];if(e(a)&&Yt(t,a))return o}}(b,r,f,d))?a(b,o,n,h.elm):Yt(l=r[u],b)?(_(l,b,o),r[u]=void 0,C&&A.insertBefore(n,l.elm,h.elm)):a(b,o,n,h.elm),b=i[++p]);f>d?v(n,t(i[g+1])?null:i[g+1].elm,i,p,g,o):p>g&&m(0,r,f,d)}function _(r,i,o,a){if(r!==i){var s=i.elm=r.elm;if(n(r.isAsyncPlaceholder))e(i.asyncFactory.resolved)?$(r.elm,i,o):i.isAsyncPlaceholder=!0;else if(n(i.isStatic)&&n(r.isStatic)&&i.key===r.key&&(n(i.isCloned)||n(i.isOnce)))i.componentInstance=r.componentInstance;else{var c,u=i.data;e(u)&&e(c=u.hook)&&e(c=c.prepatch)&&c(r,i);var l=r.children,p=i.children;if(e(u)&&f(i)){for(c=0;c<x.update.length;++c)x.update[c](r,i);e(c=u.hook)&&e(c=c.update)&&c(r,i)}t(i.text)?e(l)&&e(p)?l!==p&&g(s,l,p,o,a):e(p)?(e(r.text)&&A.setTextContent(s,""),v(s,null,p,0,p.length-1,o)):e(l)?m(0,l,0,l.length-1):e(r.text)&&A.setTextContent(s,""):r.text!==i.text&&A.setTextContent(s,i.text),e(u)&&e(c=u.hook)&&e(c=c.postpatch)&&c(r,i)}}}function b(t,r,i){if(n(i)&&e(t.parent))t.parent.data.pendingInsert=r;else for(var o=0;o<r.length;++o)r[o].data.hook.insert(r[o])}function $(t,r,i,o){var a,c=r.tag,u=r.data,f=r.children;if(o=o||u&&u.pre,r.elm=t,n(r.isComment)&&e(r.asyncFactory))return r.isAsyncPlaceholder=!0,!0;if(e(u)&&(e(a=u.hook)&&e(a=a.init)&&a(r,!0),e(a=r.componentInstance)))return s(r,i),!0;if(e(c)){if(e(f))if(t.hasChildNodes())if(e(a=u)&&e(a=a.domProps)&&e(a=a.innerHTML)){if(a!==t.innerHTML)return!1}else{for(var d=!0,v=t.firstChild,h=0;h<f.length;h++){if(!v||!$(v,f[h],i,o)){d=!1;break}v=v.nextSibling}if(!d||v)return!1}else l(r,f,i);if(e(u)){var m=!1;for(var y in u)if(!O(y)){m=!0,p(r,i);break}!m&&u.class&&W(u.class)}}else t.data!==r.text&&(t.data=r.text);return!0}var C,w,x={},k=i.modules,A=i.nodeOps;for(C=0;C<Oi.length;++C)for(x[Oi[C]]=[],w=0;w<k.length;++w)e(k[w][Oi[C]])&&x[Oi[C]].push(k[w][Oi[C]]);var O=u("attrs,class,staticClass,staticStyle,key");return function(r,i,o,s,c,u){if(!t(i)){var l=!1,p=[];if(t(r))l=!0,a(i,p,c,u);else{var d=e(r.nodeType);if(!d&&Yt(r,i))_(r,i,p,s);else{if(d){if(1===r.nodeType&&r.hasAttribute(Vn)&&(r.removeAttribute(Vn),o=!0),n(o)&&$(r,i,p))return b(i,p,!0),r;r=function(t){return new mr(A.tagName(t).toLowerCase(),{},[],void 0,t)}(r)}var v=r.elm,y=A.parentNode(v);if(a(i,p,v._leaveCb?null:y,A.nextSibling(v)),e(i.parent))for(var g=i.parent,C=f(i);g;){for(var w=0;w<x.destroy.length;++w)x.destroy[w](g);if(g.elm=i.elm,C){for(var k=0;k<x.create.length;++k)x.create[k](Ai,g);var O=g.data.hook.insert;if(O.merged)for(var S=1;S<O.fns.length;S++)O.fns[S]()}else Xt(g);g=g.parent}e(y)?m(0,[r],0,0):e(r.tag)&&h(r)}}return b(i,p,l),i.elm}e(r)&&h(r)}}({nodeOps:xi,modules:[ji,Ni,Di,Pi,zi,Gn?{create:Ve,activate:Ve,remove:function(t,e){!0!==t.data.show?He(t,e):e()}}:{}].concat(Ei)});tr&&document.addEventListener("selectionchange",function(){var t=document.activeElement;t&&t.vmodel&&Ze(t,"input")});var no={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?Y(n,"postpatch",function(){no.componentUpdated(t,e,n)}):ze(t,e,n.context),t._vOptions=[].map.call(t.options,qe)):("textarea"===n.tag||wi(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("change",Ge),nr||(t.addEventListener("compositionstart",We),t.addEventListener("compositionend",Ge)),tr&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){ze(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,qe);if(i.some(function(t,e){return!g(t,r[e])})){(t.multiple?e.value.some(function(t){return Je(t,i)}):e.value!==e.oldValue&&Je(e.value,i))&&Ze(t,"change")}}}},ro={model:no,show:{bind:function(t,e,n){var r=e.value,i=(n=Xe(n)).data&&n.data.transition,o=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,Re(n,function(){t.style.display=o})):t.style.display=r?o:"none"},update:function(t,e,n){var r=e.value;if(r!==e.oldValue){(n=Xe(n)).data&&n.data.transition?(n.data.show=!0,r?Re(n,function(){t.style.display=t.__vOriginalDisplay}):He(n,function(){t.style.display="none"})):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}}},io={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]},oo={name:"transition",props:io,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(function(t){return t.tag||rt(t)})).length){var i=this.mode,o=n[0];if(function(t){for(;t=t.parent;)if(t.data.transition)return!0}(this.$vnode))return o;var a=Ye(o);if(!a)return o;if(this._leaving)return tn(t,o);var s="__transition-"+this._uid+"-";a.key=null==a.key?a.isComment?s+"comment":s+a.tag:r(a.key)?0===String(a.key).indexOf(s)?a.key:s+a.key:a.key;var c=(a.data||(a.data={})).transition=Qe(this),u=this._vnode,l=Ye(u);if(a.data.directives&&a.data.directives.some(function(t){return"show"===t.name})&&(a.data.show=!0),l&&l.data&&!function(t,e){return e.key===t.key&&e.tag===t.tag}(a,l)&&!rt(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var f=l.data.transition=h({},c);if("out-in"===i)return this._leaving=!0,Y(f,"afterLeave",function(){e._leaving=!1,e.$forceUpdate()}),tn(t,o);if("in-out"===i){if(rt(a))return u;var p,d=function(){p()};Y(c,"afterEnter",d),Y(c,"enterCancelled",d),Y(f,"delayLeave",function(t){p=t})}}return o}}},ao=h({tag:String,moveClass:String},io);delete ao.mode;var so={Transition:oo,TransitionGroup:{props:ao,render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=Qe(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var p=r[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?u.push(p):l.push(p)}this.kept=t(e,null,u),this.removed=l}return t(e,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(en),t.forEach(nn),t.forEach(rn),this._reflow=document.body.offsetHeight,t.forEach(function(t){if(t.data.moved){var n=t.elm,r=n.style;Ie(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Zi,n._moveCb=function t(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Zi,t),n._moveCb=null,Le(n,e))})}}))},methods:{hasMove:function(t,e){if(!Ji)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach(function(t){Ee(n,t)}),Te(n,e),n.style.display="none",this.$el.appendChild(n);var r=De(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};Rt.config.mustUseProp=fi,Rt.config.isReservedTag=$i,Rt.config.isReservedAttr=ui,Rt.config.getTagNamespace=Gt,Rt.config.isUnknownElement=function(t){if(!Gn)return!0;if($i(t))return!1;if(t=t.toLowerCase(),null!=Ci[t])return Ci[t];var e=document.createElement(t);return t.indexOf("-")>-1?Ci[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Ci[t]=/HTMLUnknownElement/.test(e.toString())},h(Rt.options.directives,ro),h(Rt.options.components,so),Rt.prototype.__patch__=Gn?eo:y,Rt.prototype.$mount=function(t,e){return t=t&&Gn?Zt(t):void 0,function(t,e,n){t.$el=e,t.$options.render||(t.$options.render=gr),vt(t,"beforeMount");var r;return r=function(){t._update(t._render(),n)},new Kr(t,r,y,null,!0),n=!1,null==t.$vnode&&(t._isMounted=!0,vt(t,"mounted")),t}(this,t,e)},Rt.nextTick(function(){Jn.devtools&&lr&&lr.emit("init",Rt)},0);var co,uo=/\{\{((?:.|\n)+?)\}\}/g,lo=/[-.*+?^${}()|[\]\/\\]/g,fo=p(function(t){var e=t[0].replace(lo,"\\$&"),n=t[1].replace(lo,"\\$&");return new RegExp(e+"((?:.|\\n)+?)"+n,"g")}),po={staticKeys:["staticClass"],transformNode:function(t,e){e.warn;var n=he(t,"class");n&&(t.staticClass=JSON.stringify(n));var r=ve(t,"class",!1);r&&(t.classBinding=r)},genData:function(t){var e="";return t.staticClass&&(e+="staticClass:"+t.staticClass+","),t.classBinding&&(e+="class:"+t.classBinding+","),e}},vo={staticKeys:["staticStyle"],transformNode:function(t,e){e.warn;var n=he(t,"style");n&&(t.staticStyle=JSON.stringify(Fi(n)));var r=ve(t,"style",!1);r&&(t.styleBinding=r)},genData:function(t){var e="";return t.staticStyle&&(e+="staticStyle:"+t.staticStyle+","),t.styleBinding&&(e+="style:("+t.styleBinding+"),"),e}},ho=function(t){return co=co||document.createElement("div"),co.innerHTML=t,co.textContent},mo=u("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),yo=u("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),go=u("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),_o=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,bo="[a-zA-Z_][\\w\\-\\.]*",$o="((?:"+bo+"\\:)?"+bo+")",Co=new RegExp("^<"+$o),wo=/^\s*(\/?)>/,xo=new RegExp("^<\\/"+$o+"[^>]*>"),ko=/^<!DOCTYPE [^>]+>/i,Ao=/^<!--/,Oo=/^<!\[/,So=!1;"x".replace(/x(.)?/g,function(t,e){So=""===e});var To,Eo,jo,No,Io,Lo,Mo,Do,Po,Fo,Ro,Ho=u("script,style,textarea",!0),Bo={},Uo={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t"},Vo=/&(?:lt|gt|quot|amp);/g,zo=/&(?:lt|gt|quot|amp|#10|#9);/g,Ko=u("pre,textarea",!0),Jo=function(t,e){return t&&Ko(t)&&"\n"===e[0]},qo=/^@|^v-on:/,Wo=/^v-|^@|^:/,Go=/(.*?)\s+(?:in|of)\s+(.*)/,Zo=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Xo=/^\(|\)$/g,Yo=/:(.*)$/,Qo=/^:|^v-bind:/,ta=/\.[^.]+/g,ea=p(ho),na=/^xmlns:NS\d+/,ra=/^NS\d+:/,ia=[po,vo,{preTransformNode:function(t,e){if("input"===t.tag){var n=t.attrsMap;if(n["v-model"]&&(n["v-bind:type"]||n[":type"])){var r=ve(t,"type"),i=he(t,"v-if",!0),o=i?"&&("+i+")":"",a=null!=he(t,"v-else",!0),s=he(t,"v-else-if",!0),c=fn(t);un(c),fe(c,"type","checkbox"),cn(c,e),c.processed=!0,c.if="("+r+")==='checkbox'"+o,ln(c,{exp:c.if,block:c});var u=fn(t);he(u,"v-for",!0),fe(u,"type","radio"),cn(u,e),ln(c,{exp:"("+r+")==='radio'"+o,block:u});var l=fn(t);return he(l,"v-for",!0),fe(l,":type",r),cn(l,e),ln(c,{exp:i,block:l}),a?c.else=!0:s&&(c.elseif=s),c}}}}],oa={expectHTML:!0,modules:ia,directives:{model:function(t,e,n){var r=e.value,i=e.modifiers,o=t.tag,a=t.attrsMap.type;if(t.component)return me(t,r,i),!1;if("select"===o)!function(t,e,n){var r='var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(n&&n.number?"_n(val)":"val")+"});";r=r+" "+ye(e,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),de(t,"change",r,null,!0)}(t,r,i);else if("input"===o&&"checkbox"===a)!function(t,e,n){var r=n&&n.number,i=ve(t,"value")||"null",o=ve(t,"true-value")||"true",a=ve(t,"false-value")||"false";ue(t,"checked","Array.isArray("+e+")?_i("+e+","+i+")>-1"+("true"===o?":("+e+")":":_q("+e+","+o+")")),de(t,"change","var $$a="+e+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+e+"=$$a.concat([$$v]))}else{$$i>-1&&("+e+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+ye(e,"$$c")+"}",null,!0)}(t,r,i);else if("input"===o&&"radio"===a)!function(t,e,n){var r=n&&n.number,i=ve(t,"value")||"null";ue(t,"checked","_q("+e+","+(i=r?"_n("+i+")":i)+")"),de(t,"change",ye(e,i),null,!0)}(t,r,i);else if("input"===o||"textarea"===o)!function(t,e,n){var r=t.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=!o&&"range"!==r,u=o?"change":"range"===r?Li:"input",l="$event.target.value";s&&(l="$event.target.value.trim()"),a&&(l="_n("+l+")");var f=ye(e,l);c&&(f="if($event.target.composing)return;"+f),ue(t,"value","("+e+")"),de(t,u,f,null,!0),(s||a)&&de(t,"blur","$forceUpdate()")}(t,r,i);else if(!Jn.isReservedTag(o))return me(t,r,i),!1;return!0},text:function(t,e){e.value&&ue(t,"textContent","_s("+e.value+")")},html:function(t,e){e.value&&ue(t,"innerHTML","_s("+e.value+")")}},isPreTag:function(t){return"pre"===t},isUnaryTag:mo,mustUseProp:fi,canBeLeftOpenTag:yo,isReservedTag:$i,getTagNamespace:Gt,staticKeys:function(t){return t.reduce(function(t,e){return t.concat(e.staticKeys||[])},[]).join(",")}(ia)},aa=p(function(t){return u("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(t?","+t:""))}),sa=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,ca=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,ua={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},la=function(t){return"if("+t+")return null;"},fa={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:la("$event.target !== $event.currentTarget"),ctrl:la("!$event.ctrlKey"),shift:la("!$event.shiftKey"),alt:la("!$event.altKey"),meta:la("!$event.metaKey"),left:la("'button' in $event && $event.button !== 0"),middle:la("'button' in $event && $event.button !== 1"),right:la("'button' in $event && $event.button !== 2")},pa={on:function(t,e){t.wrapListeners=function(t){return"_g("+t+","+e.value+")"}},bind:function(t,e){t.wrapData=function(n){return"_b("+n+",'"+t.tag+"',"+e.value+","+(e.modifiers&&e.modifiers.prop?"true":"false")+(e.modifiers&&e.modifiers.sync?",true":"")+")"}},cloak:y},da=function(t){this.options=t,this.warn=t.warn||se,this.transforms=ce(t.modules,"transformCode"),this.dataGenFns=ce(t.modules,"genData"),this.directives=h(h({},pa),t.directives);var e=t.isReservedTag||Bn;this.maybeComponent=function(t){return!e(t.tag)},this.onceId=0,this.staticRenderFns=[]},va=(new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)"),function(t){return function(e){function n(n,r){var i=Object.create(e),o=[],a=[];if(i.warn=function(t,e){(e?a:o).push(t)},r){r.modules&&(i.modules=(e.modules||[]).concat(r.modules)),r.directives&&(i.directives=h(Object.create(e.directives||null),r.directives));for(var s in r)"modules"!==s&&"directives"!==s&&(i[s]=r[s])}var c=t(n,i);return c.errors=o,c.tips=a,c}return{compile:n,compileToFunctions:function(t){var e=Object.create(null);return function(n,r,i){(r=h({},r)).warn,delete r.warn;var o=r.delimiters?String(r.delimiters)+n:n;if(e[o])return e[o];var a=t(n,r),s={},c=[];return s.render=Tn(a.render,c),s.staticRenderFns=a.staticRenderFns.map(function(t){return Tn(t,c)}),e[o]=s}}(n)}}}(function(t,e){var n=sn(t.trim(),e);!1!==e.optimize&&function(t,e){t&&(Po=aa(e.staticKeys||""),Fo=e.isReservedTag||Bn,pn(t),dn(t,!1))}(n,e);var r=yn(n,e);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}})(oa).compileToFunctions),ha=!!Gn&&En(!1),ma=!!Gn&&En(!0),ya=p(function(t){var e=Zt(t);return e&&e.innerHTML}),ga=Rt.prototype.$mount;return Rt.prototype.$mount=function(t,e){if((t=t&&Zt(t))===document.body||t===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=ya(r));else{if(!r.nodeType)return this;r=r.innerHTML}else t&&(r=function(t){if(t.outerHTML)return t.outerHTML;var e=document.createElement("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}(t));if(r){var i=va(r,{shouldDecodeNewlines:ha,shouldDecodeNewlinesForHref:ma,delimiters:n.delimiters,comments:n.comments},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return ga.call(this,t,e)},Rt.compile=va,Rt});
var scrollComponent = (function(){

    var scrollPosition = {
        current : 0,
        previous : 0,
        backup : 0
    };

    // PRIVATE =========================================================================================================

    scrollCheck = function () {
        scrollPosition.previous = scrollPosition.current;
        scrollPosition.current = document.documentElement.scrollTop || window.pageYOffset || window.scrollY;
    };

    /* scroll to */
    scrollMoveTo = function (position) {
        window.scrollTo( 0, position );
    };

    /* save scroll position */
    scrollSave = function () {
        scrollPosition.backup = document.documentElement.scrollTop || window.pageYOffset || window.scrollY;
    };

    /* scroll enable */
    scrollEnable = function () {
        document.body.style.overflowY = '';
        document.body.style.position = '';
    };

    /* scroll disable */
    scrollDisable = function () {
        document.body.style.overflowY = 'hidden';
        document.body.style.position = 'fixed';
    };

    /* return down || up */
    scrollDirection = function () {
        return ( scrollPosition.current >= scrollPosition.previous ) ? 'down' : 'up';
    };


    // INIT ============================================================================================================

    scrollCheck();
    window.addEventListener('scroll', function() {
        scrollCheck();
    });


    // PUBLIC ==========================================================================================================

    return {
        current : function(value){
            if(typeof value !== "undefined"){
                scrollMoveTo(value);
                scrollCheck();
            }
            else {
                scrollCheck();
                return scrollPosition.current;
            }
        },
        direction : function(){ return scrollDirection() },
        enable : function(){
            scrollEnable();
            scrollMoveTo(scrollPosition.backup);
        },
        disable : function(){
            scrollSave();
            scrollDisable();
        }
    }
}());
var goalComponent = (function(){

    var services = {
        yaCounterID : false,
        mailRuID : false,
        gaUsed : true,
        fbqUsed : true
    };

    // PRIVATE =========================================================================================================

    goalDone = function (goalName) {
        if(services.yaCounterID !=='' &&  typeof window['yaCounter' + services.yaCounterID] !== "undefined"){
            window['yaCounter' + services.yaCounterID].reachGoal(goalName, function () {});
        }
        if(services.mailRuID !=='' && typeof _tmr !== "undefined"){
            _tmr.push({ id: services.mailRuID, type: 'reachGoal', goal: goalName });
        }
        if(services.gaUsed && typeof ga !== "undefined"){
            ga('send', 'event', 'button', goalName);
        }
        if(services.fbqUsed && typeof fbq !== "undefined"){
            fbq('track', goalName, { });
        }
    };

    debug = function () {
        window.onload = function() {
            console.log( 'yaCounterID: ' + (typeof window['yaCounter' + services.yaCounterID] !== "undefined") );
            console.log( 'gaUsed: ' + (typeof ga !== "undefined") );
            console.log( 'fbqUsed: ' + (typeof fbq !== "undefined") );
            console.log( 'mailRuID: ' + (typeof _tmr !== "undefined") );
        }
    };

    // PUBLIC ==========================================================================================================

    return {
        reach : function(goalName, event){
            event = event || '';
            if( event === ""){ goalDone(goalName); }
            if( event === "onload"){ window.onload = function() { goalDone(goalName); } }
        },
        debug : function(){ debug(); }
    }
}());



(function() {
    window.app = {
        methods:{},
        scroll: {},
        goal: {},
        modal: {}
    };

}());

app.scroll = scrollComponent;
// app.scroll.current(value) - get/set value
// app.scroll.direction() - return 'down'|'up'
// app.scroll.disable() - disable scroll
// app.scroll.enable() - enable scroll;
// - app.scroll.speed() - return scroll speed value

app.goal = goalComponent;
// app.goal.reach(goalName, event) - trigger reach goal  ( event="onload" for window.load )
// app.goal.debug()



function MediaEventListener(queryOption){
    var _self = this;
    _self.resolutionCurr = window.innerWidth;
    _self.resolutionLast = 0;
    // default device breakpoints или из опций при инициализации
    _self.queries = (typeof queryOption !== undefined) ? queryOption :[
        {
            name: 'mobile',
            minResolution: 0,
            maxResolution: 419,
            isActive: false,
            isEach: false,
            callback: []
        },
        {
            name: 'landscape',
            minResolution: 420,
            maxResolution: 1023,
            isActive: false,
            isEach: false,
            callback: []
        },
        {
            name: 'desktop',
            minResolution: 1024,
            maxResolution: 1920,
            isActive: false,
            isEach: false,
            callback: []
        },
        {
            name: 'each-resize',
            minResolution: 0,
            maxResolution: 19200,
            isActive: false,
            isEach: true,
            callback: []
        }
    ];

    // добавление функций на разные разрешения
    _self.addQueryAction = function(queryName, func){
        _self.queries.forEach(function(item){
            if( item.name === queryName){
                item.callback.push(func);
            }
        });
    };

    // выполняем скрипты для перехода на конкретное разршенеие
    _self.doQueryAction = function(queryName){
        _self.queries.forEach(function(item){
            // ищем нужное разрешение
            if( item.name === queryName){
                // запускаем все колбэки
                item.callback.forEach(function(item){ item(); });
            }
        });

    };

    // проверка активных медиа запросов
    _self.resize = function () {
        // определяем текущее разрешение
        _self.resolutionCurr = window.innerWidth;
        // проходим по всем разрешениям
        _self.queries.forEach(function(screen){
            if( screen.minResolution <= _self.resolutionCurr && _self.resolutionCurr <= screen.maxResolution ){

                // выполняем подвешеные скрипты, если на этом разрешение их нужно выполнять при каждом ресайзе
                if(screen.isEach){ _self.doQueryAction(screen.name); }

                // если сменилось на активное, то выполняем подвешеные скрипты
                if(!screen.isActive && !screen.isEach){ _self.doQueryAction(screen.name); }
                screen.isActive = true;

            } else {
                // иначе переключаем флаг, если разрешение неактивно
                screen.isActive = false;
            }
        });
        // запоминаем разрешение
        _self.resolutionLast =  _self.resolutionCurr;

    };

    // инициализация
    _self.init = function(){
        // запускаем проход по всем разрешениям для первой загрузки
        _self.resize();
        // и вешаем обработчик на все последущюие ресайзы
        window.onresize =  function resize(){
            _self.resize();
        }

    };

    _self.debug = function () {
        console.log( _self.queries );
    };

}




(function( $ ){

    var defaults = {
        // дефолтные опции
        minResolution: 1000,
        extraWidth: 61
    };
    var states ={
        hasExtra: false
    };

    var methods = {

        init : function( options ) {

            options = $.extend({}, defaults, options);

            this.each(function() {

                var container = $(this);
                var menuRoot = $(this).find('ul').not('ul ul');
                var menuItems = menuRoot.find('li').not('li li');
                var containerWidth = menuRoot.width();

                methods.addExtraBar(menuRoot, menuItems);

                containerWidth = menuRoot.width();
                methods.hideItem(menuRoot, menuItems, containerWidth, options.extraWidth);

                window.addEventListener("resize", function() {
                    // containerWidth = menuRoot.width();
                    containerWidth = menuRoot.width();
                    if(window.innerWidth > options.minResolution){
                        methods.hideItem(menuRoot, menuItems, containerWidth, options.extraWidth);
                    }
                });

            });
        },

        resize : function () {

        },

        addExtraBar: function (menuRoot, menuItems) {
            var extrabarContent = '';
            for(var i = 0; i < menuItems.length; i++){
                extrabarContent = extrabarContent + menuItems.eq(i).get(0).outerHTML;
            }

            menuRoot.append(
                '<li class="menu-top__item -extraBar -has-drop-down -drop-down-inverse">' +
                '<button class="menu-top__item-name">...</button>' +
                '<div class="menu-top__drop-down">' +
                '<ul class="menu-top__list">' +
                extrabarContent +
                '</ul>' +
                '</div>' +
                '</li>'
            );
            menuRoot.find('.-extraBar .menu-top__drop-down .menu-top__drop-down').remove();
        },

        // удаляет дополнительную выпадашку
        removeExtraBar : function (menuRoot) {
            menuRoot.find('.-extraBar').remove();
        },


        // проверяет элементы, если элементу не хватает места, то скрывает его
        hideItem : function (menuRoot, menuItems, containerWidth, extraWidth) {
            // подготавливаем выпадашку дублёра
            var dubler = menuRoot.find('.-extraBar');
            var dublerList = dubler.find('.menu-top__item');
            // console.log(dublerList);
            dubler.removeClass('-hidden');
            menuItems.removeClass('-hidden');
            var debugLog = false;

            // console.log('containerWidth ' + containerWidth);

            var width = containerWidth;
            var sumWidth = 0;
            states.hasExtra = false;
            for(var i = 0; i < menuItems.length; i++){
                var elWidth = menuItems.eq(i).width();
                if(debugLog){console.log(menuItems.eq(i).children('a').html(), elWidth, sumWidth + elWidth);}
                // проверяем влазит ли текущий пункт
                if(sumWidth + elWidth <= width){
                    // да:
                    // проверяем это последний пункт
                    if(debugLog){console.log('проверяем влазит ли текущий пункт -  да');}
                    if(i === menuItems.length-1){
                        // да: удаляем многоточие
                        dubler.removeClass('-hidden');
                        // dublerList.eq(i).addClass('-hidden');
                        if(debugLog){console.log('проверяем это последний пункт -  да');}
                    } else {
                        // нет:
                        // проверяем осталось ли место для многоточия
                        if(debugLog){console.log('проверяем это последний пункт -  нет');}
                        if(sumWidth + elWidth + extraWidth <= width){
                            // да: переходим к следующему пункту
                            if(debugLog){console.log('проверяем осталось ли место для многоточия -  да');}
                            dublerList.eq(i).addClass('-hidden');
                        } else {
                            // нет: показываем многоточие вместо этого пункта
                            menuItems.eq(i).addClass('-hidden');
                            if(debugLog){console.log('проверяем осталось ли место для многоточия -  нет');}
                        }
                    }

                } else {
                    // нет: показываем многоточие вместо этого пункта
                    if(debugLog){console.log('проверяем влазит ли текущий пункт -  нет');}
                    menuItems.eq(i).addClass('-hidden');
                    states.hasExtra = true;
                }

                sumWidth = sumWidth + elWidth;
                if(debugLog){console.log('-------------------------------------------------');}
            }

            if(!states.hasExtra){
                dubler.addClass('-hidden');
            }


        }

    };

    $.fn.menuSmart = function(method) {

        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод ' +  method + ' не существует в jQuery.menuSmart' );
        }

    };

})( jQuery );
function initMenuMobile(id, data) {

    var menuMobile = new Vue({
        el: '#menu-mobile-' + id,
        data: {
            el: '#menu-mobile-' + id,
            tree: data,
            activeNode: {
                id: data[0].id,
                name: data[0].name,
                parentId: data[0].parentId
            },
            show: false
        },
        template:
        '<transition name="menu-mobile-toggle" mode="out-in">' +
            '<div class="menu-mobile" id="menu-mobile-' + id + '" v-if="show">' +

                // menu-mobile-header begin
                '<transition name="menu-mobile-header-toggle">' +
                    '<div class="menu-mobile__header">' +
                        '<div class="menu-mobile__title">' +
                            '<button class="menu-mobile__title-btn" :data-node="activeNode.id" v-on:click.prevent="activeParentNode">' +
                                '<i class="menu-mobile__icon-arrow-right" v-if="activeNode.id"></i>' +
                                '{{ activeNode.name }}' +
                            '</button>' +
                        '</div>' +
                        '<button class="menu-mobile__switcher-btn" v-on:click.prevent="closeMenu"><span></span></button>' +
                    '</div>' +
                '</transition>' +

                // menu-mobile__list begin
                '<ul class="menu-mobile__list">' +
                    '<template  v-for="item in tree">' +
                    '<menu-mobile-item v-if="item.parentId === activeNode.id" v-bind:item="item" :key="item.id" ></menu-mobile-item>' +
                    '</template>' +
                '</ul>' +

            '</div>' +
        '</transition>',
        methods: {
            getNodeParam: function (input) {
                var result = {};
                result.id = input.id;
                result.name = input.name;
                result.parentId = input.parentId;
                return result;
            },
            closeMenu: function () {
                // $( this.el).hide();
                this.activeNode = menuMobile.getNodeParam( this.tree[0] );
                app.scroll.enable();
                this.show = false;
            },
            activeParentNode: function (event) {
                if( this.activeNode.parentId !== null ){
                    var parentId = this.activeNode.parentId;
                    for(var i = 0; i < menuMobile.tree.length; i++){
                        if (menuMobile.tree[i].id === parentId) {
                            menuMobile.activeNode = menuMobile.getNodeParam( menuMobile.tree[i] );
                        }
                    }
                } else {
                    menuMobile.closeMenu();
                }
            }
        },
        components: {
            'menu-mobile-item': {
                props: ['item', 'activeNode'],
                template:
                '<transition name="menu-mobile-item-show" mode="out-in">' +
                    '<li class="menu-mobile__item">' +
                        '<a class="menu-mobile__item-name" v-bind:href="item.href">' +
                            '{{ item.name }}' +
                            // иконка со стрелкой, для элементов без потомков
                                '<span v-if="!item.hasChild" class="menu-mobile__item-btn">' +
                                    '<i class="menu-mobile__icon-arrow-left"></i>' +
                                '</span>' +
                            '</a>' +
                            // для элементов с подкатегориями добавляем кнопочку показывающую эти подразделы
                            '<button v-if="item.hasChild" class="menu-mobile__item-btn hasChild"  v-on:click.prevent="showChild">' +
                            '<i class="menu-mobile__icon-more"></i>' +
                        '</button>' +
                    '</li>' +
                '</transition>',
                methods: {
                    showChild: function (event) {
                        menuMobile.activeNode = menuMobile.getNodeParam( this._props.item );
                    }
                }
            }
        }
    });

    return menuMobile;
}



function MenuMobile(options){

    // Дерево меню, включает в себя только узлы, листья игнорируются


    var text = {
        rootTitle: 'Меню'
    };

    var selectors = {
        container: '.js-menu-mobile',
        nodeRoot: '[data-menu-mobile--root]',
        nodeLink: '[data-menu-mobile--item-name]',
        node: 'data-menu-mobile--has-drop-down',
        btnToggle: '[data-menu-mobile--switcher-btn]'
    };

    var id = Math.round( Math.random()*10000);


    // переопределяем переменные если надо ============================================================================/

    // переопределяем свойства, если это необходимо
    function setOptions(container){
        // text = $.extend({}, selectors, options.text);
        // selectors = $.extend({}, selectors, options.selectors);
        text.rootTitle = $(container).find(selectors.btnToggle).text();
    }

    // работа с деревом ===============================================================================================/

    function buildMenu(nodeRoot){
        var tree = [];
        var _id = 0;
        // задаём корень
        tree.push({ id: _id, name: text.rootTitle, elementLink: nodeRoot, hasChild: true, parentId: null });
        // рекурсивно строим остальное дерево
        function build(parentNode){
            var parent = $(parentNode.elementLink);
            var el = parent.find('li').not( parent.find('li li'));
            el.each(function () {
                _id++;
                var currNode = {
                    id: _id,
                    name: $(this).children(selectors.nodeLink).text(),
                    href: $(this).children(selectors.nodeLink).attr('href'),
                    elementLink: $(this),
                    hasChild:  $(this).attr(selectors.node) != null,
                    parentId: parentNode.id
                };
                tree.push(currNode);
                if(currNode.hasChild){  build(currNode) }
            });
        }
        build( getNodeRoot(tree) );

        return tree;
    }

    function renderMenu(tree){
        // console.log(tree);
        $('body').append('' +
            '<menu-mobile class="menu-mobile" id="menu-mobile-' + id + '"></menu-mobile>'
        );
        var vueMenuMobile = initMenuMobile(id, tree);
        return vueMenuMobile;
    }

    // вспомогательные ================================================================================================/

    // Получения узла по ID
    function getNodeById(id, tree){
        var result = null;
        //ищем элемент с заданным id
        tree.forEach(function(item){
            if( item.id == id ){
                result = item;
                return false;
            }
        });
        // если элемента с таким id нет, то возвращаем null
        return result;
    }

    // Получения корня
    function getNodeRoot(tree){
        return getNodeById(0, tree);
    }


    // Обработка событий ==============================================================================================/

    function addHandlerToggleBtn(container, vueMenuMobile){
        $(container).on('click', selectors.btnToggle, function () {
            vueMenuMobile.show = true;
            app.scroll.disable();
        });
    }

    // initialize =====================================================================================================/
    $(selectors.container).each(function () {
        setOptions($(this));  // переопределяем свойства, если это необходимо
        var tree = buildMenu($(this).find(selectors.nodeRoot));  // создаём модель меню
        var vueMenuMobile = renderMenu(tree);   // ренедерим меню, колбэком навешиваем обработчики
        addHandlerToggleBtn(this, vueMenuMobile);
    });

    // public =========================================================================================================/
    return {
        init: function () {

        }
    };
}

(function( $ ){

    var defaults = {
        // дефолтные опции
        animation: ''
    };
    var states ={
        hasExtra: false
    };

    var methods = {

        init : function( options ) {

            options = $.extend({}, defaults, options);

            this.each(function() {
                var modalId = 'modal-' + Math.round(Math.random()*999999);
                $(this)
                .on('click', function (e) {
                    e.preventDefault();

                    var AJAX_LOADER  = '<img class="btn__loader" src="/assets/images/loader.svg" width="20" height="20">';
                    var $link = $(this);

                    if ($link.data('clicked')) {
                        return;
                    }

                    var linkContent = $link.html();
                    $link.data('clicked', true).html(AJAX_LOADER);

                    $.ajax({
                        url: $link.attr('href')
                    }).done(function (html) {
                        
                        $('body').append(
                            '<div class="modal ' + $link.attr('data-class') + '" id="' + modalId + '">' +
                                '<div class="modal__wrapper">' +
                                    '<div class="modal__bg"></div>' +
                                    '<button class="modal__btn-close">Close</button>' +
                                    '<div class="modal__container">' +
                                        '<div class="modal__scroll">' +
                                            html +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="modal__loader"></div>' +
                                '</div>' +
                            '</div>'
                        );
                        setTimeout(function(){
                            app.scroll.disable();
                            methods.addEventListener($('#' + modalId));
                        }, 10);
                    }).always(function () {
                        $link.removeData('clicked').html(linkContent);
                        $('.modal__loader').css({'opacity': 0, 'pointerEvents': 'none'});
                    }).fail(function () {
                        console.warn('Ajax fail');
                    });
                })
                
                
            });
        },

        addEventListener : function (modal) {
            $(modal)
            .on('click', '.modal__bg', function (e) {
                if (e.target === this) {
                    $(this).find('.modal__btn-close').trigger('click');
                }
            })
            .on('click', '.modal__btn-close', function (e) {
                e.preventDefault();
                app.scroll.enable();
                $('.modal').addClass('closing');
                setTimeout(function () {
                    $('.modal').remove();
                    $('body').css('position', 'static'); 
                }, 1350);
            });
        },

        // проверяет элементы, если элементу не хватает места, то скрывает его
        hideItem : function () {
            
        }

    };

    $.fn.modalAjax = function(method) {

        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод ' +  method + ' не существует в jQuery.modalAjax' );
        }

    };

})( jQuery );
var Tables = (function(){

    // private =============================================================
    wrapTables = function (tableSelector){
        $(tableSelector).each(function () {
            var currTable = $(this);
            // var className = "table-responsive";
            // if(currTable.attr('data-view-type') == 'horizontal'){ className += ' -horizontal'; }
            currTable.wrap("<div class='table-responsive'><div class='table-responsive__scroll'></div></div>");
        })
    };

    // public =============================================================
    return {
        addMobileView: function(tableSelector){
            wrapTables(tableSelector);
        }
    };
}());
// js-spoiler-area - скрывает область под спойлер
//
// исходный код
// <div class="js-spoiler-area hidden-md"
// data-mobile-only="true"
// data-text-opened="Скрыть"
// data-text-closed="Показать полностью">
//  <!-- тут контент который нужно скрывать -->
// </div>

//  сегнерированый код
//  <div class="spoiler">
//      <div  class="spoiler js-spoiler-area"><!-- тут контент который нужно скрывать --></div>
//      <button class="spoiler__btn" ><span>Btn</span></button>
//  </div>

$('.js-spoiler-area').each(function () {

    var self = $(this);

    // кэшируем data-атрибуты, подставляя значения по умолчанию, если атрибуты не заданы
    var btnTextOpened = self.attr('data-text-opened') ? self.attr('data-text-opened') : 'Скрыть',
        btnTextClosed = self.attr('data-text-closed') ? self.attr('data-text-closed') : 'Смотреть полностью',
        btnClass = self.attr('data-btn-class') ? self.attr('data-btn-class') : '' ;

    // добавляем необходимый html
    self.addClass('spoiler__content');
    self.wrap('<div class="spoiler"></div>');
    self.parent().append('<button class="spoiler__btn btn ' + btnClass + '"><span>' + btnTextClosed + '</span></button>');

    // кэшируем элементы
    var container = self.parent(),
        content = self,
        btn = container.find('.spoiler__btn');


    // добавляем класс hidden-*/visible-* для кнопки если надо
    // класс добавляется, если у контента есть класс hidden-*
    var classList = content.attr('class').split(/\s+/),
        isResponse = false;
    $.each(classList, function(index, item) {
        if (item.substring(0,7) === 'hidden-') {
            btn.addClass('hidden visible-' + item.substring(7,9));
            isResponse = true;
        }
    });
    if(!isResponse){
        content.addClass('hidden');
    }

    // вешаем события
    btn.on('click', function(){
        content.slideToggle();
        btn.toggleClass('is-opened');
        if(btn.hasClass('is-opened')){
            btn.find('span').text(btnTextOpened);
        } else {
            btn.find('span').text(btnTextClosed);
        }
    });
});


$('.js-spoiler-items').each(function () {

    var self = $(this);

    // кэшируем data-атрибуты, подставляя значения по умолчанию, если атрибуты не заданы
    var btnTextOpened = self.attr('data-text-opened') ? self.attr('data-text-opened') : 'Скрыть',
        btnTextClosed = self.attr('data-text-closed') ? self.attr('data-text-closed') : 'Смотреть полностью',
        btnClass = self.attr('data-btn-class') ? self.attr('data-btn-class') : '' ;

    // добавляем необходимый html
    self.addClass('spoiler__content');
    self.wrap('<div class="spoiler"></div>');
    self.parent().append('<button class="spoiler__btn btn ' + btnClass + '"><span>' + btnTextClosed + '</span></button>');


});
console.time('extends-js');
/*=========================================================================*/
/* mediaEventListener кастомизируем breakpoint'ы */
var mediaEventListener = new MediaEventListener([
    { name: 'mobile',  minResolution: 0,    maxResolution: 1023,  isActive: false, isEach: false, callback: [] },
    { name: 'desktop', minResolution: 1024, maxResolution: 1920,  isActive: false, isEach: false, callback: [] },
    { name: 'resize',  minResolution: 0,    maxResolution: 19200, isActive: false, isEach: true,  callback: [] }
]);


/*=========================================================================*/
/* задаём каим именно табилцам нужно добавлять обертки .table-responsive для адаптива */
Tables.addMobileView('table');

$('.js-ajax').modalAjax();

// Base-1 Denis ------------------------------------------------------------------------------------------------------*/

var menuMobile = new MenuMobile({});

$('.js-menu-smart').menuSmart();

(function sliderHeader() {

    var sliderHeader = {

        carousel : $(".js-slider-header .owl-carousel"),

        nextBtn : $(".js-slider-header .js-nav-next"),

        prevBtn : $(".js-slider-header .js-nav-prev"),

        counter : $(".js-slider-header .js-nav-counter"),

        direction : 'forward'   // inverse

    };

    sliderHeader.carousel.owlCarousel({

        autoplay: true,

        autoplayTimeout: 6000,

        loop:true,

        margin:0,

        nav:false,

        dots: false,

        items: 1,

        animateOut: 'slideOutDown',

        animateIn: 'flipInX',

        onInitialized: renderCounter,

        onTranslate: renderCounter

    });



    function renderCounter(event) {

        // normalize index

        if( sliderHeader.direction === 'inverse' && event.item.index-1 === 0){

            sliderHeader.counter.html( event.item.count + '/' + event.item.count);

        } else {

            sliderHeader.counter.html(event.item.index-1 + '/' + event.item.count);

        }

    }



    sliderHeader.nextBtn.click(function() {

        sliderHeader.direction = 'forward';

        sliderHeader.carousel.trigger('next.owl.carousel');

    });

    sliderHeader.prevBtn.click(function() {

        sliderHeader.direction = 'inverse';

        sliderHeader.carousel.trigger('prev.owl.carousel');

    });

}());

(function advantages() {

    var advantages = {

        carousel : $(".js-advantages .owl-carousel"),

        nextBtn : $(".js-advantages .js-nav-next"),

        prevBtn : $(".js-advantages .js-nav-prev")

    };

    $(advantages.carousel).imagesLoaded()

        .always( function( instance ) {

            advantages.carousel.owlCarousel({

                nav: false,

                dots: false,

                loop: true,

                items: 4,

                responsive : {

                    0: { items: 1},

                    480: { items: 2},

                    768: { items: 3},

                    1024: { items: 4}

                }

            });

            advantages.nextBtn.click(function() {

                advantages.carousel.trigger('next.owl.carousel');

            });

            advantages.prevBtn.click(function() {

                advantages.carousel.trigger('prev.owl.carousel');

            });

        })

        .fail( function() {

            console.warn('one or more images is broken in ' + advantages.carousel.selector);

        });



}());

(function hitsWidget() {

    var hitsWidget = {

        carousel : $(".js-hits-widget .owl-carousel"),

        nextBtn : $(".js-hits-widget .js-nav-next"),

        prevBtn : $(".js-hits-widget .js-nav-prev")

    };

    $(hitsWidget.carousel).imagesLoaded()

        .always( function( instance ) {

            hitsWidget.carousel.owlCarousel({

                center: true,

                nav: false,

                dots: false,

                loop: true,

                autoWidth: true,

                margin: 22,

                responsive: {

                    0: {

                        dots: true,

                        items:1

                    },

                    980: {

                        dots: false,

                        margin: 22

                    }

                }

            });

            hitsWidget.nextBtn.click(function() {

                hitsWidget.carousel.trigger('next.owl.carousel');

            });

            hitsWidget.prevBtn.click(function() {

                hitsWidget.carousel.trigger('prev.owl.carousel');

            });

        })

        .fail( function() {

            console.warn('one or more images is broken in ' + hitsWidget.carousel.selector);

        });



}());

(function articlesWidget() {

    var articlesWidget = {

        carousel : $(".js-articles-widget .owl-carousel"),

        nextBtn : $(".js-articles-widget .js-nav-next"),

        prevBtn : $(".js-articles-widget .js-nav-prev")

    };

    $(articlesWidget.carousel).imagesLoaded()

        .always( function( instance ) {

            articlesWidget.carousel.owlCarousel({

                center: true,

                nav: false,

                dots: false,

                loop: true,

                autoWidth: true,

                margin: 22,

                responsive: {

                    0: {

                        dots: true,

                        items:1

                    },

                    980: {

                        dots: false,

                        margin: 22

                    }

                }

            });

            articlesWidget.nextBtn.click(function() {

                articlesWidget.carousel.trigger('next.owl.carousel');

            });

            articlesWidget.prevBtn.click(function() {

                articlesWidget.carousel.trigger('prev.owl.carousel');

            });

        })

        .fail( function() {

            console.warn('one or more images is broken in ' + articlesWidget.carousel.selector);

        });



}());

(function newsWidget() {

    var newsWidget = {

        carousel : $(".js-news-widget .news-widget__carousel.owl-carousel"),

        nextBtn : $(".js-news-widget .js-nav-next"),

        prevBtn : $(".js-news-widget .js-nav-prev")

    };

    $(newsWidget.carousel).imagesLoaded()

        .always( function( instance ) {

            newsWidget.carousel.owlCarousel({

                center: true,

                nav: false,

                dots: false,

                loop: true,

                autoWidth: true,

                margin: 22,

                responsive: {

                    0: {

                        dots: true,

                        items:1

                    },

                    980: {

                        dots: false,

                        margin: 22

                    }

                }

            });

            newsWidget.nextBtn.click(function() {

                newsWidget.carousel.trigger('next.owl.carousel');

            });

            newsWidget.prevBtn.click(function() {

                newsWidget.carousel.trigger('prev.owl.carousel');

            });

        })

        .fail( function() {

            console.warn('one or more images is broken in ' + newsWidget.carousel);

        });



}());



(function bannersWidget() {

    var bannersWidget = {

        carousel : $(".js-news-widget .banners__carousel.owl-carousel"),

    };

    $(bannersWidget.carousel).imagesLoaded()

        .always( function( instance ) {

            bannersWidget.carousel.owlCarousel({

                center: true,

                nav: false,

                dots: false,

                loop: true,

                autoWidth: true,

                margin: 22,

                responsive: {

                    0: {

                        dots: true,

                        items:1

                    },

                    980: {

                        dots: false,

                        margin: 22

                    }

                }

            });

        })

        .fail( function() {

            console.warn('one or more images is broken in ' + bannersWidget.carousel);

        });

}());

(function galeryFullwidthCentered() {

    var galeryFullwidthCentered = {

        carousel : $(".js-galery-fullwidth-centered .owl-carousel"),

        nextBtn : $(".js-galery-fullwidth-centered .js-nav-next"),

        prevBtn : $(".js-galery-fullwidth-centered .js-nav-prev")

    };

    $(galeryFullwidthCentered.carousel).imagesLoaded()

        .always( function( instance ) {

            galeryFullwidthCentered.carousel.owlCarousel({

                center: true,

                nav: false,

                dots: false,

                loop: true,

                autoWidth: true,

                margin: 2

            });

            galeryFullwidthCentered.nextBtn.click(function() {

                galeryFullwidthCentered.carousel.trigger('next.owl.carousel');

            });

            galeryFullwidthCentered.prevBtn.click(function() {

                galeryFullwidthCentered.carousel.trigger('prev.owl.carousel');

            });

        })

        .fail( function() {

            console.warn('one or more images is broken in ' + galeryFullwidthCentered.carousel.selector);

        });



}());

(function certificates() {

    var certificates = {

        carousel : $(".js-certificates .owl-carousel"),

        nextBtn : $(".js-certificates .js-nav-next"),

        prevBtn : $(".js-certificates .js-nav-prev")

    };

    $(certificates.carousel).imagesLoaded()

        .always( function( instance ) {

            certificates.carousel.owlCarousel({

                nav: false,

                dots: false,

                loop: true,

                autoWidth:true,

                margin: 20,

                responsive: {

                    0: {

                        dots: true,

                        items:1

                    },

                    980: {

                        dots: false,

                        margin: 22

                    }

                }

            });

            certificates.nextBtn.click(function() {

                certificates.carousel.trigger('next.owl.carousel');

            });

            certificates.prevBtn.click(function() {

                certificates.carousel.trigger('prev.owl.carousel');

            });

        })

        .fail( function() {

            console.warn('one or more images is broken in ' + certificates.carousel.selector);

        });



}());

(function partners() {

    var partners = {

        carousel : $(".js-partners .owl-carousel"),

        nextBtn : $(".js-partners .js-nav-next"),

        prevBtn : $(".js-partners .js-nav-prev")

    };

    $(partners.carousel).imagesLoaded()

        .always( function( instance ) {

            partners.carousel.owlCarousel({

                nav: false,

                dots: false,

                loop: true,

                autoWidth:true,

                margin: 25,

                responsive: {

                    0: {

                        dots: true,

                        items:1

                    },

                    980: {

                        dots: false,

                        margin: 22

                    }

                }

            });

            partners.nextBtn.click(function() {

                partners.carousel.trigger('next.owl.carousel');

            });

            partners.prevBtn.click(function() {

                partners.carousel.trigger('prev.owl.carousel');

            });

        })

        .fail( function() {

            console.warn('one or more images is broken in ' + partners.carousel);

        });



}());

(function testimonialsWidget() {

    var testimonialsWidget = {

        carousel : $(".js-testimonials-widget .bxslider"),

        nextBtn : $(".js-testimonials-widget .js-nav-next"),

        prevBtn : $(".js-testimonials-widget .js-nav-prev")

    };

    // сохраняем слайдер в testimonialsWidget.carousel

    testimonialsWidget.carousel.bxSlider();



    testimonialsWidget.nextBtn.click(function() {

        testimonialsWidget.carousel.goToNextSlide();

    });

    testimonialsWidget.prevBtn.click(function() {

        testimonialsWidget.carousel.goToPrevSlide();

    });



    mediaEventListener.addQueryAction('mobile', function(){

        testimonialsWidget.carousel.reloadSlider({

            mode: 'horizontal',

            infiniteLoop: true,

            easing: "ease-in",

            pager: true,

            controls: false,

            minSlides: 1,

            maxSlides: 1,

            adaptiveHeight: false

        });

    });



    mediaEventListener.addQueryAction('desktop', function(){

        testimonialsWidget.carousel.reloadSlider({

            mode: 'vertical',

            infiniteLoop: true,

            easing: "ease-in",

            pager: false,

            controls: false,

            minSlides: 2,

            maxSlides: 2,

            adaptiveHeight: false

        });

    });

}());



// Base-1 Denis End --------------------------------------------------------------------------------------------------*/


/*=========================================================================*/
/* Window Resize с mediaEventListener */
// навешиваем скрипты на разные разрешения
mediaEventListener.addQueryAction('mobile', function(){
    // console.log('mobile 1');
});
mediaEventListener.addQueryAction('desktop', function(){
    // console.log('desktop 2');
});
mediaEventListener.addQueryAction('resize', function(){
    // console.log('resize');
});
// mediaEventListener.addQueryAction('resize', function(){
//     console.log('resize');
//


console.timeEnd('extends-js');
console.log('main');
/*=========================================================================*/
// mediaEventListener инициализируем после всех добавлений,
// скрипты подвешеные позже не отработают при первой загрузке
mediaEventListener.init();
/*=========================================================================*/
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS5taW4uanMiLCJpbWFnZXNsb2FkZWQucGtnZC5qcyIsImpxdWVyeS5ieHNsaWRlci5qcyIsIm93bC5jYXJvdXNlbC5qcyIsInZ1ZS5taW4uanMiLCJjb3JlLWNvbXBvbmVudHMvc2Nyb2xsLmNvbXBvbmVudC5qcyIsImNvcmUuanMiLCJjb3JlLWNvbXBvbmVudHMvZ29hbC5jb21wb25lbnQuanMiLCJtZWRpYS1ldmVudC1saXN0ZW5lci5qcyIsImpxdWVyeS5tZW51LXNtYXJ0LmpzIiwibWVudS1tb2JpbGUudnVlLmpzIiwibWVudS1tb2JpbGUuanMiLCJqcXVlcnkubW9kYWwtYWpheC5qcyIsInRhYmxlcy5qcyIsInNwb2lsZXIuanMiLCJfZXh0ZW5kcy5qcyIsIi4uLy4uL3RlbXBsYXRlLWJsb2NrL2Jhc2UtMS9faGVhZGVyL2hlYWRlci5qcyIsIi4uLy4uL3RlbXBsYXRlLWJsb2NrL2Jhc2UtMS9ob21lcGFnZS9zbGlkZXIvc2xpZGVyLmpzIiwiLi4vLi4vdGVtcGxhdGUtYmxvY2svYmFzZS0xL2hvbWVwYWdlL2FkdmFudGFnZXMvYWR2YW50YWdlcy5qcyIsIi4uLy4uL3RlbXBsYXRlLWJsb2NrL2Jhc2UtMS9ob21lcGFnZS9oaXRzLXdpZGdldC9oaXRzLXdpZGdldC5qcyIsIi4uLy4uL3RlbXBsYXRlLWJsb2NrL2Jhc2UtMS9ob21lcGFnZS9hcnRpY2xlcy13aWRnZXQvYXJ0aWNsZXMtd2lkZ2V0LmpzIiwiLi4vLi4vdGVtcGxhdGUtYmxvY2svYmFzZS0xL2hvbWVwYWdlL25ld3Mtd2lkZ2V0LWFuZC1iYW5uZXJzL25ld3Mtd2lkZ2V0LWFuZC1iYW5uZXJzLmpzIiwiLi4vLi4vdGVtcGxhdGUtYmxvY2svYmFzZS0xL2hvbWVwYWdlL2dhbGVyeS1mdWxsd2lkdGgvZ2FsZXJ5LWZ1bGx3aWR0aC5qcyIsIi4uLy4uL3RlbXBsYXRlLWJsb2NrL2Jhc2UtMS9ob21lcGFnZS9jZXJ0aWZpY2F0ZXMtYW5kLXBhcnRuZXJzL2NlcnRpZmljYXRlcy1hbmQtcGFydG5lcnMuanMiLCIuLi8uLi90ZW1wbGF0ZS1ibG9jay9iYXNlLTEvaG9tZXBhZ2UvdGVzdGltb25pYWxzLXdpZGdldC90ZXN0aW1vbmlhbHMtd2lkZ2V0LmpzIiwibWFpbi5qcyIsIm1lZGlhLWV2ZW50LWxpc3RlbmVyLWluaXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDamZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMva0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDenNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxBR25KQTtBSG9KQSxBR25KQTtBRkFBLEFFQ0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBREZBLEFDR0E7QURGQSxBQ0dBO0FERkEsQUNHQTtBRjlGQSxBRStGQTtBRjlGQSxBRStGQTtBRjlGQSxBRStGQTtBRjlGQSxBRStGQTtBRjlGQSxBRStGQTtBRjlGQSxBRStGQTtBRjlGQSxBRStGQTtBRjlGQSxBRStGQTtBRjlGQSxBR1hBO0FIWUEsQUdYQTtBSFlBLEFHWEE7QUhZQSxBR1hBO0FIWUEsQUdYQTtBSFlBLEFHWEE7QUhZQSxBR1hBO0FIWUEsQUdYQTtBSFlBLEFHWEE7QUhZQSxBR1hBO0FIWUEsQUdYQTtBSFlBLEFHWEE7QUhZQSxBR1hBO0FIWUEsQUdYQTtBSFlBLEFHWEE7QUhZQSxBR1hBO0FIWUEsQUdYQTtBSFlBLEFHWEE7QUhZQSxBR1hBO0FIWUEsQUdYQTtBSFlBLEFHWEE7QUhZQSxBR1hBO0FIWUEsQUdYQTtBSFlBLEFHWEE7QUhZQSxBR1hBO0FIWUEsQUdYQTtBSFlBLEFHWEE7QUhZQSxBR1hBO0FIWUEsQUdYQTtBSFlBLEFHWEE7QUhZQSxBR1hBO0FIWUEsQUdYQTtBSFlBLEFHWEE7QUhZQSxBR1hBO0FIWUEsQUdYQTtBSFlBLEFHWEE7QUhZQSxBR1hBO0FIWUEsQUdYQTtBSFlBLEFHWEE7QUhZQSxBR1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUNqQ0E7RUFDQTtFQUNBO0FEaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUV2Q0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUZyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VHekhBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBSDZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VJM0xBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBSm1IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VLelFBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBTGlNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VNdlZBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUlsSUEsRUptSUE7QUtuSUEsRUxvSUE7QUtuSUEsRUxvSUE7QUtuSUEsRUxvSUE7QU5tTkEsQVd0VkE7QVh1VkEsQVd0VkE7QVh1VkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VPamVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FQNmFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFUTNoQkE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FSMllBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RVNqckJBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FUK2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgalF1ZXJ5IHYxLjEyLjQgfCAoYykgalF1ZXJ5IEZvdW5kYXRpb24gfCBqcXVlcnkub3JnL2xpY2Vuc2UgKi9cbiFmdW5jdGlvbihhLGIpe1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1hLmRvY3VtZW50P2IoYSwhMCk6ZnVuY3Rpb24oYSl7aWYoIWEuZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtyZXR1cm4gYihhKX06YihhKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcyxmdW5jdGlvbihhLGIpe3ZhciBjPVtdLGQ9YS5kb2N1bWVudCxlPWMuc2xpY2UsZj1jLmNvbmNhdCxnPWMucHVzaCxoPWMuaW5kZXhPZixpPXt9LGo9aS50b1N0cmluZyxrPWkuaGFzT3duUHJvcGVydHksbD17fSxtPVwiMS4xMi40XCIsbj1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgbi5mbi5pbml0KGEsYil9LG89L15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLHA9L14tbXMtLyxxPS8tKFtcXGRhLXpdKS9naSxyPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGIudG9VcHBlckNhc2UoKX07bi5mbj1uLnByb3RvdHlwZT17anF1ZXJ5Om0sY29uc3RydWN0b3I6bixzZWxlY3RvcjpcIlwiLGxlbmd0aDowLHRvQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gZS5jYWxsKHRoaXMpfSxnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/MD5hP3RoaXNbYSt0aGlzLmxlbmd0aF06dGhpc1thXTplLmNhbGwodGhpcyl9LHB1c2hTdGFjazpmdW5jdGlvbihhKXt2YXIgYj1uLm1lcmdlKHRoaXMuY29uc3RydWN0b3IoKSxhKTtyZXR1cm4gYi5wcmV2T2JqZWN0PXRoaXMsYi5jb250ZXh0PXRoaXMuY29udGV4dCxifSxlYWNoOmZ1bmN0aW9uKGEpe3JldHVybiBuLmVhY2godGhpcyxhKX0sbWFwOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayhuLm1hcCh0aGlzLGZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuY2FsbChiLGMsYil9KSl9LHNsaWNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGUuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0sZmlyc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgwKX0sbGFzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKC0xKX0sZXE6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5sZW5ndGgsYz0rYSsoMD5hP2I6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGM+PTAmJmI+Yz9bdGhpc1tjXV06W10pfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKCl9LHB1c2g6Zyxzb3J0OmMuc29ydCxzcGxpY2U6Yy5zcGxpY2V9LG4uZXh0ZW5kPW4uZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmLGc9YXJndW1lbnRzWzBdfHx7fSxoPTEsaT1hcmd1bWVudHMubGVuZ3RoLGo9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgZyYmKGo9ZyxnPWFyZ3VtZW50c1toXXx8e30saCsrKSxcIm9iamVjdFwiPT10eXBlb2YgZ3x8bi5pc0Z1bmN0aW9uKGcpfHwoZz17fSksaD09PWkmJihnPXRoaXMsaC0tKTtpPmg7aCsrKWlmKG51bGwhPShlPWFyZ3VtZW50c1toXSkpZm9yKGQgaW4gZSlhPWdbZF0sYz1lW2RdLGchPT1jJiYoaiYmYyYmKG4uaXNQbGFpbk9iamVjdChjKXx8KGI9bi5pc0FycmF5KGMpKSk/KGI/KGI9ITEsZj1hJiZuLmlzQXJyYXkoYSk/YTpbXSk6Zj1hJiZuLmlzUGxhaW5PYmplY3QoYSk/YTp7fSxnW2RdPW4uZXh0ZW5kKGosZixjKSk6dm9pZCAwIT09YyYmKGdbZF09YykpO3JldHVybiBnfSxuLmV4dGVuZCh7ZXhwYW5kbzpcImpRdWVyeVwiKyhtK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGlzUmVhZHk6ITAsZXJyb3I6ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKGEpfSxub29wOmZ1bmN0aW9uKCl7fSxpc0Z1bmN0aW9uOmZ1bmN0aW9uKGEpe3JldHVyblwiZnVuY3Rpb25cIj09PW4udHlwZShhKX0saXNBcnJheTpBcnJheS5pc0FycmF5fHxmdW5jdGlvbihhKXtyZXR1cm5cImFycmF5XCI9PT1uLnR5cGUoYSl9LGlzV2luZG93OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hJiZhPT1hLndpbmRvd30saXNOdW1lcmljOmZ1bmN0aW9uKGEpe3ZhciBiPWEmJmEudG9TdHJpbmcoKTtyZXR1cm4hbi5pc0FycmF5KGEpJiZiLXBhcnNlRmxvYXQoYikrMT49MH0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihhKXt2YXIgYjtmb3IoYiBpbiBhKXJldHVybiExO3JldHVybiEwfSxpc1BsYWluT2JqZWN0OmZ1bmN0aW9uKGEpe3ZhciBiO2lmKCFhfHxcIm9iamVjdFwiIT09bi50eXBlKGEpfHxhLm5vZGVUeXBlfHxuLmlzV2luZG93KGEpKXJldHVybiExO3RyeXtpZihhLmNvbnN0cnVjdG9yJiYhay5jYWxsKGEsXCJjb25zdHJ1Y3RvclwiKSYmIWsuY2FsbChhLmNvbnN0cnVjdG9yLnByb3RvdHlwZSxcImlzUHJvdG90eXBlT2ZcIikpcmV0dXJuITF9Y2F0Y2goYyl7cmV0dXJuITF9aWYoIWwub3duRmlyc3QpZm9yKGIgaW4gYSlyZXR1cm4gay5jYWxsKGEsYik7Zm9yKGIgaW4gYSk7cmV0dXJuIHZvaWQgMD09PWJ8fGsuY2FsbChhLGIpfSx0eXBlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP2ErXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYT9pW2ouY2FsbChhKV18fFwib2JqZWN0XCI6dHlwZW9mIGF9LGdsb2JhbEV2YWw6ZnVuY3Rpb24oYil7YiYmbi50cmltKGIpJiYoYS5leGVjU2NyaXB0fHxmdW5jdGlvbihiKXthLmV2YWwuY2FsbChhLGIpfSkoYil9LGNhbWVsQ2FzZTpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKHAsXCJtcy1cIikucmVwbGFjZShxLHIpfSxub2RlTmFtZTpmdW5jdGlvbihhLGIpe3JldHVybiBhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1iLnRvTG93ZXJDYXNlKCl9LGVhY2g6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPTA7aWYocyhhKSl7Zm9yKGM9YS5sZW5ndGg7Yz5kO2QrKylpZihiLmNhbGwoYVtkXSxkLGFbZF0pPT09ITEpYnJlYWt9ZWxzZSBmb3IoZCBpbiBhKWlmKGIuY2FsbChhW2RdLGQsYVtkXSk9PT0hMSlicmVhaztyZXR1cm4gYX0sdHJpbTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOihhK1wiXCIpLnJlcGxhY2UobyxcIlwiKX0sbWFrZUFycmF5OmZ1bmN0aW9uKGEsYil7dmFyIGM9Ynx8W107cmV0dXJuIG51bGwhPWEmJihzKE9iamVjdChhKSk/bi5tZXJnZShjLFwic3RyaW5nXCI9PXR5cGVvZiBhP1thXTphKTpnLmNhbGwoYyxhKSksY30saW5BcnJheTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ7aWYoYil7aWYoaClyZXR1cm4gaC5jYWxsKGIsYSxjKTtmb3IoZD1iLmxlbmd0aCxjPWM/MD5jP01hdGgubWF4KDAsZCtjKTpjOjA7ZD5jO2MrKylpZihjIGluIGImJmJbY109PT1hKXJldHVybiBjfXJldHVybi0xfSxtZXJnZTpmdW5jdGlvbihhLGIpe3ZhciBjPStiLmxlbmd0aCxkPTAsZT1hLmxlbmd0aDt3aGlsZShjPmQpYVtlKytdPWJbZCsrXTtpZihjIT09Yyl3aGlsZSh2b2lkIDAhPT1iW2RdKWFbZSsrXT1iW2QrK107cmV0dXJuIGEubGVuZ3RoPWUsYX0sZ3JlcDpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkLGU9W10sZj0wLGc9YS5sZW5ndGgsaD0hYztnPmY7ZisrKWQ9IWIoYVtmXSxmKSxkIT09aCYmZS5wdXNoKGFbZl0pO3JldHVybiBlfSxtYXA6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZz0wLGg9W107aWYocyhhKSlmb3IoZD1hLmxlbmd0aDtkPmc7ZysrKWU9YihhW2ddLGcsYyksbnVsbCE9ZSYmaC5wdXNoKGUpO2Vsc2UgZm9yKGcgaW4gYSllPWIoYVtnXSxnLGMpLG51bGwhPWUmJmgucHVzaChlKTtyZXR1cm4gZi5hcHBseShbXSxoKX0sZ3VpZDoxLHByb3h5OmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxmO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBiJiYoZj1hW2JdLGI9YSxhPWYpLG4uaXNGdW5jdGlvbihhKT8oYz1lLmNhbGwoYXJndW1lbnRzLDIpLGQ9ZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShifHx0aGlzLGMuY29uY2F0KGUuY2FsbChhcmd1bWVudHMpKSl9LGQuZ3VpZD1hLmd1aWQ9YS5ndWlkfHxuLmd1aWQrKyxkKTp2b2lkIDB9LG5vdzpmdW5jdGlvbigpe3JldHVybituZXcgRGF0ZX0sc3VwcG9ydDpsfSksXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiYobi5mbltTeW1ib2wuaXRlcmF0b3JdPWNbU3ltYm9sLml0ZXJhdG9yXSksbi5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvciBTeW1ib2xcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtpW1wiW29iamVjdCBcIitiK1wiXVwiXT1iLnRvTG93ZXJDYXNlKCl9KTtmdW5jdGlvbiBzKGEpe3ZhciBiPSEhYSYmXCJsZW5ndGhcImluIGEmJmEubGVuZ3RoLGM9bi50eXBlKGEpO3JldHVyblwiZnVuY3Rpb25cIj09PWN8fG4uaXNXaW5kb3coYSk/ITE6XCJhcnJheVwiPT09Y3x8MD09PWJ8fFwibnVtYmVyXCI9PXR5cGVvZiBiJiZiPjAmJmItMSBpbiBhfXZhciB0PWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGksaixrLGwsbSxuLG8scCxxLHIscyx0LHU9XCJzaXp6bGVcIisxKm5ldyBEYXRlLHY9YS5kb2N1bWVudCx3PTAseD0wLHk9Z2EoKSx6PWdhKCksQT1nYSgpLEI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT09PWImJihsPSEwKSwwfSxDPTE8PDMxLEQ9e30uaGFzT3duUHJvcGVydHksRT1bXSxGPUUucG9wLEc9RS5wdXNoLEg9RS5wdXNoLEk9RS5zbGljZSxKPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtkPmM7YysrKWlmKGFbY109PT1iKXJldHVybiBjO3JldHVybi0xfSxLPVwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixMPVwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIixNPVwiKD86XFxcXFxcXFwufFtcXFxcdy1dfFteXFxcXHgwMC1cXFxceGEwXSkrXCIsTj1cIlxcXFxbXCIrTCtcIiooXCIrTStcIikoPzpcIitMK1wiKihbKl4kfCF+XT89KVwiK0wrXCIqKD86JygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwifChcIitNK1wiKSl8KVwiK0wrXCIqXFxcXF1cIixPPVwiOihcIitNK1wiKSg/OlxcXFwoKCgnKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIitOK1wiKSopfC4qKVxcXFwpfClcIixQPW5ldyBSZWdFeHAoTCtcIitcIixcImdcIiksUT1uZXcgUmVnRXhwKFwiXlwiK0wrXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiK0wrXCIrJFwiLFwiZ1wiKSxSPW5ldyBSZWdFeHAoXCJeXCIrTCtcIiosXCIrTCtcIipcIiksUz1uZXcgUmVnRXhwKFwiXlwiK0wrXCIqKFs+K35dfFwiK0wrXCIpXCIrTCtcIipcIiksVD1uZXcgUmVnRXhwKFwiPVwiK0wrXCIqKFteXFxcXF0nXFxcIl0qPylcIitMK1wiKlxcXFxdXCIsXCJnXCIpLFU9bmV3IFJlZ0V4cChPKSxWPW5ldyBSZWdFeHAoXCJeXCIrTStcIiRcIiksVz17SUQ6bmV3IFJlZ0V4cChcIl4jKFwiK00rXCIpXCIpLENMQVNTOm5ldyBSZWdFeHAoXCJeXFxcXC4oXCIrTStcIilcIiksVEFHOm5ldyBSZWdFeHAoXCJeKFwiK00rXCJ8WypdKVwiKSxBVFRSOm5ldyBSZWdFeHAoXCJeXCIrTiksUFNFVURPOm5ldyBSZWdFeHAoXCJeXCIrTyksQ0hJTEQ6bmV3IFJlZ0V4cChcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIrTCtcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiK0wrXCIqKD86KFsrLV18KVwiK0wrXCIqKFxcXFxkKyl8KSlcIitMK1wiKlxcXFwpfClcIixcImlcIiksYm9vbDpuZXcgUmVnRXhwKFwiXig/OlwiK0srXCIpJFwiLFwiaVwiKSxuZWVkc0NvbnRleHQ6bmV3IFJlZ0V4cChcIl5cIitMK1wiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIitMK1wiKigoPzotXFxcXGQpP1xcXFxkKilcIitMK1wiKlxcXFwpfCkoPz1bXi1dfCQpXCIsXCJpXCIpfSxYPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksWT0vXmhcXGQkL2ksWj0vXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLCQ9L14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sXz0vWyt+XS8sYWE9Lyd8XFxcXC9nLGJhPW5ldyBSZWdFeHAoXCJcXFxcXFxcXChbXFxcXGRhLWZdezEsNn1cIitMK1wiP3woXCIrTCtcIil8LilcIixcImlnXCIpLGNhPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1cIjB4XCIrYi02NTUzNjtyZXR1cm4gZCE9PWR8fGM/YjowPmQ/U3RyaW5nLmZyb21DaGFyQ29kZShkKzY1NTM2KTpTdHJpbmcuZnJvbUNoYXJDb2RlKGQ+PjEwfDU1Mjk2LDEwMjMmZHw1NjMyMCl9LGRhPWZ1bmN0aW9uKCl7bSgpfTt0cnl7SC5hcHBseShFPUkuY2FsbCh2LmNoaWxkTm9kZXMpLHYuY2hpbGROb2RlcyksRVt2LmNoaWxkTm9kZXMubGVuZ3RoXS5ub2RlVHlwZX1jYXRjaChlYSl7SD17YXBwbHk6RS5sZW5ndGg/ZnVuY3Rpb24oYSxiKXtHLmFwcGx5KGEsSS5jYWxsKGIpKX06ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLmxlbmd0aCxkPTA7d2hpbGUoYVtjKytdPWJbZCsrXSk7YS5sZW5ndGg9Yy0xfX19ZnVuY3Rpb24gZmEoYSxiLGQsZSl7dmFyIGYsaCxqLGssbCxvLHIscyx3PWImJmIub3duZXJEb2N1bWVudCx4PWI/Yi5ub2RlVHlwZTo5O2lmKGQ9ZHx8W10sXCJzdHJpbmdcIiE9dHlwZW9mIGF8fCFhfHwxIT09eCYmOSE9PXgmJjExIT09eClyZXR1cm4gZDtpZighZSYmKChiP2Iub3duZXJEb2N1bWVudHx8Yjp2KSE9PW4mJm0oYiksYj1ifHxuLHApKXtpZigxMSE9PXgmJihvPSQuZXhlYyhhKSkpaWYoZj1vWzFdKXtpZig5PT09eCl7aWYoIShqPWIuZ2V0RWxlbWVudEJ5SWQoZikpKXJldHVybiBkO2lmKGouaWQ9PT1mKXJldHVybiBkLnB1c2goaiksZH1lbHNlIGlmKHcmJihqPXcuZ2V0RWxlbWVudEJ5SWQoZikpJiZ0KGIsaikmJmouaWQ9PT1mKXJldHVybiBkLnB1c2goaiksZH1lbHNle2lmKG9bMl0pcmV0dXJuIEguYXBwbHkoZCxiLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpKSxkO2lmKChmPW9bM10pJiZjLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSlyZXR1cm4gSC5hcHBseShkLGIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShmKSksZH1pZihjLnFzYSYmIUFbYStcIiBcIl0mJighcXx8IXEudGVzdChhKSkpe2lmKDEhPT14KXc9YixzPWE7ZWxzZSBpZihcIm9iamVjdFwiIT09Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXsoaz1iLmdldEF0dHJpYnV0ZShcImlkXCIpKT9rPWsucmVwbGFjZShhYSxcIlxcXFwkJlwiKTpiLnNldEF0dHJpYnV0ZShcImlkXCIsaz11KSxyPWcoYSksaD1yLmxlbmd0aCxsPVYudGVzdChrKT9cIiNcIitrOlwiW2lkPSdcIitrK1wiJ11cIjt3aGlsZShoLS0pcltoXT1sK1wiIFwiK3FhKHJbaF0pO3M9ci5qb2luKFwiLFwiKSx3PV8udGVzdChhKSYmb2EoYi5wYXJlbnROb2RlKXx8Yn1pZihzKXRyeXtyZXR1cm4gSC5hcHBseShkLHcucXVlcnlTZWxlY3RvckFsbChzKSksZH1jYXRjaCh5KXt9ZmluYWxseXtrPT09dSYmYi5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKX19fXJldHVybiBpKGEucmVwbGFjZShRLFwiJDFcIiksYixkLGUpfWZ1bmN0aW9uIGdhKCl7dmFyIGE9W107ZnVuY3Rpb24gYihjLGUpe3JldHVybiBhLnB1c2goYytcIiBcIik+ZC5jYWNoZUxlbmd0aCYmZGVsZXRlIGJbYS5zaGlmdCgpXSxiW2MrXCIgXCJdPWV9cmV0dXJuIGJ9ZnVuY3Rpb24gaGEoYSl7cmV0dXJuIGFbdV09ITAsYX1mdW5jdGlvbiBpYShhKXt2YXIgYj1uLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dHJ5e3JldHVybiEhYShiKX1jYXRjaChjKXtyZXR1cm4hMX1maW5hbGx5e2IucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpLGI9bnVsbH19ZnVuY3Rpb24gamEoYSxiKXt2YXIgYz1hLnNwbGl0KFwifFwiKSxlPWMubGVuZ3RoO3doaWxlKGUtLSlkLmF0dHJIYW5kbGVbY1tlXV09Yn1mdW5jdGlvbiBrYShhLGIpe3ZhciBjPWImJmEsZD1jJiYxPT09YS5ub2RlVHlwZSYmMT09PWIubm9kZVR5cGUmJih+Yi5zb3VyY2VJbmRleHx8QyktKH5hLnNvdXJjZUluZGV4fHxDKTtpZihkKXJldHVybiBkO2lmKGMpd2hpbGUoYz1jLm5leHRTaWJsaW5nKWlmKGM9PT1iKXJldHVybi0xO3JldHVybiBhPzE6LTF9ZnVuY3Rpb24gbGEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1jJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBtYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybihcImlucHV0XCI9PT1jfHxcImJ1dHRvblwiPT09YykmJmIudHlwZT09PWF9fWZ1bmN0aW9uIG5hKGEpe3JldHVybiBoYShmdW5jdGlvbihiKXtyZXR1cm4gYj0rYixoYShmdW5jdGlvbihjLGQpe3ZhciBlLGY9YShbXSxjLmxlbmd0aCxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSljW2U9ZltnXV0mJihjW2VdPSEoZFtlXT1jW2VdKSl9KX0pfWZ1bmN0aW9uIG9hKGEpe3JldHVybiBhJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZSYmYX1jPWZhLnN1cHBvcnQ9e30sZj1mYS5pc1hNTD1mdW5jdGlvbihhKXt2YXIgYj1hJiYoYS5vd25lckRvY3VtZW50fHxhKS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuIGI/XCJIVE1MXCIhPT1iLm5vZGVOYW1lOiExfSxtPWZhLnNldERvY3VtZW50PWZ1bmN0aW9uKGEpe3ZhciBiLGUsZz1hP2Eub3duZXJEb2N1bWVudHx8YTp2O3JldHVybiBnIT09biYmOT09PWcubm9kZVR5cGUmJmcuZG9jdW1lbnRFbGVtZW50PyhuPWcsbz1uLmRvY3VtZW50RWxlbWVudCxwPSFmKG4pLChlPW4uZGVmYXVsdFZpZXcpJiZlLnRvcCE9PWUmJihlLmFkZEV2ZW50TGlzdGVuZXI/ZS5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsZGEsITEpOmUuYXR0YWNoRXZlbnQmJmUuYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLGRhKSksYy5hdHRyaWJ1dGVzPWlhKGZ1bmN0aW9uKGEpe3JldHVybiBhLmNsYXNzTmFtZT1cImlcIiwhYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIil9KSxjLmdldEVsZW1lbnRzQnlUYWdOYW1lPWlhKGZ1bmN0aW9uKGEpe3JldHVybiBhLmFwcGVuZENoaWxkKG4uY3JlYXRlQ29tbWVudChcIlwiKSksIWEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aH0pLGMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT1aLnRlc3Qobi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSxjLmdldEJ5SWQ9aWEoZnVuY3Rpb24oYSl7cmV0dXJuIG8uYXBwZW5kQ2hpbGQoYSkuaWQ9dSwhbi5nZXRFbGVtZW50c0J5TmFtZXx8IW4uZ2V0RWxlbWVudHNCeU5hbWUodSkubGVuZ3RofSksYy5nZXRCeUlkPyhkLmZpbmQuSUQ9ZnVuY3Rpb24oYSxiKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50QnlJZCYmcCl7dmFyIGM9Yi5nZXRFbGVtZW50QnlJZChhKTtyZXR1cm4gYz9bY106W119fSxkLmZpbHRlci5JRD1mdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoYmEsY2EpO3JldHVybiBmdW5jdGlvbihhKXtyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT09PWJ9fSk6KGRlbGV0ZSBkLmZpbmQuSUQsZC5maWx0ZXIuSUQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKGJhLGNhKTtyZXR1cm4gZnVuY3Rpb24oYSl7dmFyIGM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0QXR0cmlidXRlTm9kZSYmYS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7cmV0dXJuIGMmJmMudmFsdWU9PT1ifX0pLGQuZmluZC5UQUc9Yy5nZXRFbGVtZW50c0J5VGFnTmFtZT9mdW5jdGlvbihhLGIpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRzQnlUYWdOYW1lP2IuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSk6Yy5xc2E/Yi5xdWVyeVNlbGVjdG9yQWxsKGEpOnZvaWQgMH06ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9MCxmPWIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSk7aWYoXCIqXCI9PT1hKXt3aGlsZShjPWZbZSsrXSkxPT09Yy5ub2RlVHlwZSYmZC5wdXNoKGMpO3JldHVybiBkfXJldHVybiBmfSxkLmZpbmQuQ0xBU1M9Yy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZmdW5jdGlvbihhLGIpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJnA/Yi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGEpOnZvaWQgMH0scj1bXSxxPVtdLChjLnFzYT1aLnRlc3Qobi5xdWVyeVNlbGVjdG9yQWxsKSkmJihpYShmdW5jdGlvbihhKXtvLmFwcGVuZENoaWxkKGEpLmlubmVySFRNTD1cIjxhIGlkPSdcIit1K1wiJz48L2E+PHNlbGVjdCBpZD0nXCIrdStcIi1cXHJcXFxcJyBtc2FsbG93Y2FwdHVyZT0nJz48b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiLGEucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCYmcS5wdXNoKFwiWypeJF09XCIrTCtcIiooPzonJ3xcXFwiXFxcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGh8fHEucHVzaChcIlxcXFxbXCIrTCtcIiooPzp2YWx1ZXxcIitLK1wiKVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWR+PVwiK3UrXCItXVwiKS5sZW5ndGh8fHEucHVzaChcIn49XCIpLGEucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aHx8cS5wdXNoKFwiOmNoZWNrZWRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiYSNcIit1K1wiKypcIikubGVuZ3RofHxxLnB1c2goXCIuIy4rWyt+XVwiKX0pLGlhKGZ1bmN0aW9uKGEpe3ZhciBiPW4uY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Iuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiaGlkZGVuXCIpLGEuYXBwZW5kQ2hpbGQoYikuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiRFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGgmJnEucHVzaChcIm5hbWVcIitMK1wiKlsqXiR8IX5dPz1cIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RofHxxLnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIikscS5wdXNoKFwiLC4qOlwiKX0pKSwoYy5tYXRjaGVzU2VsZWN0b3I9Wi50ZXN0KHM9by5tYXRjaGVzfHxvLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8by5tb3pNYXRjaGVzU2VsZWN0b3J8fG8ub01hdGNoZXNTZWxlY3Rvcnx8by5tc01hdGNoZXNTZWxlY3RvcikpJiZpYShmdW5jdGlvbihhKXtjLmRpc2Nvbm5lY3RlZE1hdGNoPXMuY2FsbChhLFwiZGl2XCIpLHMuY2FsbChhLFwiW3MhPScnXTp4XCIpLHIucHVzaChcIiE9XCIsTyl9KSxxPXEubGVuZ3RoJiZuZXcgUmVnRXhwKHEuam9pbihcInxcIikpLHI9ci5sZW5ndGgmJm5ldyBSZWdFeHAoci5qb2luKFwifFwiKSksYj1aLnRlc3Qoby5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiksdD1ifHxaLnRlc3Qoby5jb250YWlucyk/ZnVuY3Rpb24oYSxiKXt2YXIgYz05PT09YS5ub2RlVHlwZT9hLmRvY3VtZW50RWxlbWVudDphLGQ9YiYmYi5wYXJlbnROb2RlO3JldHVybiBhPT09ZHx8ISghZHx8MSE9PWQubm9kZVR5cGV8fCEoYy5jb250YWlucz9jLmNvbnRhaW5zKGQpOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJjE2JmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZCkpKX06ZnVuY3Rpb24oYSxiKXtpZihiKXdoaWxlKGI9Yi5wYXJlbnROb2RlKWlmKGI9PT1hKXJldHVybiEwO3JldHVybiExfSxCPWI/ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBkPSFhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uLSFiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO3JldHVybiBkP2Q6KGQ9KGEub3duZXJEb2N1bWVudHx8YSk9PT0oYi5vd25lckRvY3VtZW50fHxiKT9hLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpOjEsMSZkfHwhYy5zb3J0RGV0YWNoZWQmJmIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYSk9PT1kP2E9PT1ufHxhLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYSk/LTE6Yj09PW58fGIub3duZXJEb2N1bWVudD09PXYmJnQodixiKT8xOms/SihrLGEpLUooayxiKTowOjQmZD8tMToxKX06ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBjLGQ9MCxlPWEucGFyZW50Tm9kZSxmPWIucGFyZW50Tm9kZSxnPVthXSxoPVtiXTtpZighZXx8IWYpcmV0dXJuIGE9PT1uPy0xOmI9PT1uPzE6ZT8tMTpmPzE6az9KKGssYSktSihrLGIpOjA7aWYoZT09PWYpcmV0dXJuIGthKGEsYik7Yz1hO3doaWxlKGM9Yy5wYXJlbnROb2RlKWcudW5zaGlmdChjKTtjPWI7d2hpbGUoYz1jLnBhcmVudE5vZGUpaC51bnNoaWZ0KGMpO3doaWxlKGdbZF09PT1oW2RdKWQrKztyZXR1cm4gZD9rYShnW2RdLGhbZF0pOmdbZF09PT12Py0xOmhbZF09PT12PzE6MH0sbik6bn0sZmEubWF0Y2hlcz1mdW5jdGlvbihhLGIpe3JldHVybiBmYShhLG51bGwsbnVsbCxiKX0sZmEubWF0Y2hlc1NlbGVjdG9yPWZ1bmN0aW9uKGEsYil7aWYoKGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpLGI9Yi5yZXBsYWNlKFQsXCI9JyQxJ11cIiksYy5tYXRjaGVzU2VsZWN0b3ImJnAmJiFBW2IrXCIgXCJdJiYoIXJ8fCFyLnRlc3QoYikpJiYoIXF8fCFxLnRlc3QoYikpKXRyeXt2YXIgZD1zLmNhbGwoYSxiKTtpZihkfHxjLmRpc2Nvbm5lY3RlZE1hdGNofHxhLmRvY3VtZW50JiYxMSE9PWEuZG9jdW1lbnQubm9kZVR5cGUpcmV0dXJuIGR9Y2F0Y2goZSl7fXJldHVybiBmYShiLG4sbnVsbCxbYV0pLmxlbmd0aD4wfSxmYS5jb250YWlucz1mdW5jdGlvbihhLGIpe3JldHVybihhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKSx0KGEsYil9LGZhLmF0dHI9ZnVuY3Rpb24oYSxiKXsoYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSk7dmFyIGU9ZC5hdHRySGFuZGxlW2IudG9Mb3dlckNhc2UoKV0sZj1lJiZELmNhbGwoZC5hdHRySGFuZGxlLGIudG9Mb3dlckNhc2UoKSk/ZShhLGIsIXApOnZvaWQgMDtyZXR1cm4gdm9pZCAwIT09Zj9mOmMuYXR0cmlidXRlc3x8IXA/YS5nZXRBdHRyaWJ1dGUoYik6KGY9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpKSYmZi5zcGVjaWZpZWQ/Zi52YWx1ZTpudWxsfSxmYS5lcnJvcj1mdW5jdGlvbihhKXt0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIithKX0sZmEudW5pcXVlU29ydD1mdW5jdGlvbihhKXt2YXIgYixkPVtdLGU9MCxmPTA7aWYobD0hYy5kZXRlY3REdXBsaWNhdGVzLGs9IWMuc29ydFN0YWJsZSYmYS5zbGljZSgwKSxhLnNvcnQoQiksbCl7d2hpbGUoYj1hW2YrK10pYj09PWFbZl0mJihlPWQucHVzaChmKSk7d2hpbGUoZS0tKWEuc3BsaWNlKGRbZV0sMSl9cmV0dXJuIGs9bnVsbCxhfSxlPWZhLmdldFRleHQ9ZnVuY3Rpb24oYSl7dmFyIGIsYz1cIlwiLGQ9MCxmPWEubm9kZVR5cGU7aWYoZil7aWYoMT09PWZ8fDk9PT1mfHwxMT09PWYpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhLnRleHRDb250ZW50KXJldHVybiBhLnRleHRDb250ZW50O2ZvcihhPWEuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZyljKz1lKGEpfWVsc2UgaWYoMz09PWZ8fDQ9PT1mKXJldHVybiBhLm5vZGVWYWx1ZX1lbHNlIHdoaWxlKGI9YVtkKytdKWMrPWUoYik7cmV0dXJuIGN9LGQ9ZmEuc2VsZWN0b3JzPXtjYWNoZUxlbmd0aDo1MCxjcmVhdGVQc2V1ZG86aGEsbWF0Y2g6VyxhdHRySGFuZGxlOnt9LGZpbmQ6e30scmVsYXRpdmU6e1wiPlwiOntkaXI6XCJwYXJlbnROb2RlXCIsZmlyc3Q6ITB9LFwiIFwiOntkaXI6XCJwYXJlbnROb2RlXCJ9LFwiK1wiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIixmaXJzdDohMH0sXCJ+XCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wifX0scHJlRmlsdGVyOntBVFRSOmZ1bmN0aW9uKGEpe3JldHVybiBhWzFdPWFbMV0ucmVwbGFjZShiYSxjYSksYVszXT0oYVszXXx8YVs0XXx8YVs1XXx8XCJcIikucmVwbGFjZShiYSxjYSksXCJ+PVwiPT09YVsyXSYmKGFbM109XCIgXCIrYVszXStcIiBcIiksYS5zbGljZSgwLDQpfSxDSElMRDpmdW5jdGlvbihhKXtyZXR1cm4gYVsxXT1hWzFdLnRvTG93ZXJDYXNlKCksXCJudGhcIj09PWFbMV0uc2xpY2UoMCwzKT8oYVszXXx8ZmEuZXJyb3IoYVswXSksYVs0XT0rKGFbNF0/YVs1XSsoYVs2XXx8MSk6MiooXCJldmVuXCI9PT1hWzNdfHxcIm9kZFwiPT09YVszXSkpLGFbNV09KyhhWzddK2FbOF18fFwib2RkXCI9PT1hWzNdKSk6YVszXSYmZmEuZXJyb3IoYVswXSksYX0sUFNFVURPOmZ1bmN0aW9uKGEpe3ZhciBiLGM9IWFbNl0mJmFbMl07cmV0dXJuIFcuQ0hJTEQudGVzdChhWzBdKT9udWxsOihhWzNdP2FbMl09YVs0XXx8YVs1XXx8XCJcIjpjJiZVLnRlc3QoYykmJihiPWcoYywhMCkpJiYoYj1jLmluZGV4T2YoXCIpXCIsYy5sZW5ndGgtYiktYy5sZW5ndGgpJiYoYVswXT1hWzBdLnNsaWNlKDAsYiksYVsyXT1jLnNsaWNlKDAsYikpLGEuc2xpY2UoMCwzKSl9fSxmaWx0ZXI6e1RBRzpmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoYmEsY2EpLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCIqXCI9PT1hP2Z1bmN0aW9uKCl7cmV0dXJuITB9OmZ1bmN0aW9uKGEpe3JldHVybiBhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1ifX0sQ0xBU1M6ZnVuY3Rpb24oYSl7dmFyIGI9eVthK1wiIFwiXTtyZXR1cm4gYnx8KGI9bmV3IFJlZ0V4cChcIihefFwiK0wrXCIpXCIrYStcIihcIitMK1wifCQpXCIpKSYmeShhLGZ1bmN0aW9uKGEpe3JldHVybiBiLnRlc3QoXCJzdHJpbmdcIj09dHlwZW9mIGEuY2xhc3NOYW1lJiZhLmNsYXNzTmFtZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0QXR0cmlidXRlJiZhLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKX0pfSxBVFRSOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZCl7dmFyIGU9ZmEuYXR0cihkLGEpO3JldHVybiBudWxsPT1lP1wiIT1cIj09PWI6Yj8oZSs9XCJcIixcIj1cIj09PWI/ZT09PWM6XCIhPVwiPT09Yj9lIT09YzpcIl49XCI9PT1iP2MmJjA9PT1lLmluZGV4T2YoYyk6XCIqPVwiPT09Yj9jJiZlLmluZGV4T2YoYyk+LTE6XCIkPVwiPT09Yj9jJiZlLnNsaWNlKC1jLmxlbmd0aCk9PT1jOlwifj1cIj09PWI/KFwiIFwiK2UucmVwbGFjZShQLFwiIFwiKStcIiBcIikuaW5kZXhPZihjKT4tMTpcInw9XCI9PT1iP2U9PT1jfHxlLnNsaWNlKDAsYy5sZW5ndGgrMSk9PT1jK1wiLVwiOiExKTohMH19LENISUxEOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9XCJudGhcIiE9PWEuc2xpY2UoMCwzKSxnPVwibGFzdFwiIT09YS5zbGljZSgtNCksaD1cIm9mLXR5cGVcIj09PWI7cmV0dXJuIDE9PT1kJiYwPT09ZT9mdW5jdGlvbihhKXtyZXR1cm4hIWEucGFyZW50Tm9kZX06ZnVuY3Rpb24oYixjLGkpe3ZhciBqLGssbCxtLG4sbyxwPWYhPT1nP1wibmV4dFNpYmxpbmdcIjpcInByZXZpb3VzU2libGluZ1wiLHE9Yi5wYXJlbnROb2RlLHI9aCYmYi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLHM9IWkmJiFoLHQ9ITE7aWYocSl7aWYoZil7d2hpbGUocCl7bT1iO3doaWxlKG09bVtwXSlpZihoP20ubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXI6MT09PW0ubm9kZVR5cGUpcmV0dXJuITE7bz1wPVwib25seVwiPT09YSYmIW8mJlwibmV4dFNpYmxpbmdcIn1yZXR1cm4hMH1pZihvPVtnP3EuZmlyc3RDaGlsZDpxLmxhc3RDaGlsZF0sZyYmcyl7bT1xLGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGo9a1thXXx8W10sbj1qWzBdPT09dyYmalsxXSx0PW4mJmpbMl0sbT1uJiZxLmNoaWxkTm9kZXNbbl07d2hpbGUobT0rK24mJm0mJm1bcF18fCh0PW49MCl8fG8ucG9wKCkpaWYoMT09PW0ubm9kZVR5cGUmJisrdCYmbT09PWIpe2tbYV09W3csbix0XTticmVha319ZWxzZSBpZihzJiYobT1iLGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGo9a1thXXx8W10sbj1qWzBdPT09dyYmalsxXSx0PW4pLHQ9PT0hMSl3aGlsZShtPSsrbiYmbSYmbVtwXXx8KHQ9bj0wKXx8by5wb3AoKSlpZigoaD9tLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1yOjE9PT1tLm5vZGVUeXBlKSYmKyt0JiYocyYmKGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGtbYV09W3csdF0pLG09PT1iKSlicmVhaztyZXR1cm4gdC09ZSx0PT09ZHx8dCVkPT09MCYmdC9kPj0wfX19LFBTRVVETzpmdW5jdGlvbihhLGIpe3ZhciBjLGU9ZC5wc2V1ZG9zW2FdfHxkLnNldEZpbHRlcnNbYS50b0xvd2VyQ2FzZSgpXXx8ZmEuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiK2EpO3JldHVybiBlW3VdP2UoYik6ZS5sZW5ndGg+MT8oYz1bYSxhLFwiXCIsYl0sZC5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KGEudG9Mb3dlckNhc2UoKSk/aGEoZnVuY3Rpb24oYSxjKXt2YXIgZCxmPWUoYSxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSlkPUooYSxmW2ddKSxhW2RdPSEoY1tkXT1mW2ddKX0pOmZ1bmN0aW9uKGEpe3JldHVybiBlKGEsMCxjKX0pOmV9fSxwc2V1ZG9zOntub3Q6aGEoZnVuY3Rpb24oYSl7dmFyIGI9W10sYz1bXSxkPWgoYS5yZXBsYWNlKFEsXCIkMVwiKSk7cmV0dXJuIGRbdV0/aGEoZnVuY3Rpb24oYSxiLGMsZSl7dmFyIGYsZz1kKGEsbnVsbCxlLFtdKSxoPWEubGVuZ3RoO3doaWxlKGgtLSkoZj1nW2hdKSYmKGFbaF09IShiW2hdPWYpKX0pOmZ1bmN0aW9uKGEsZSxmKXtyZXR1cm4gYlswXT1hLGQoYixudWxsLGYsYyksYlswXT1udWxsLCFjLnBvcCgpfX0pLGhhczpoYShmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIGZhKGEsYikubGVuZ3RoPjB9fSksY29udGFpbnM6aGEoZnVuY3Rpb24oYSl7cmV0dXJuIGE9YS5yZXBsYWNlKGJhLGNhKSxmdW5jdGlvbihiKXtyZXR1cm4oYi50ZXh0Q29udGVudHx8Yi5pbm5lclRleHR8fGUoYikpLmluZGV4T2YoYSk+LTF9fSksbGFuZzpoYShmdW5jdGlvbihhKXtyZXR1cm4gVi50ZXN0KGF8fFwiXCIpfHxmYS5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiK2EpLGE9YS5yZXBsYWNlKGJhLGNhKS50b0xvd2VyQ2FzZSgpLGZ1bmN0aW9uKGIpe3ZhciBjO2RvIGlmKGM9cD9iLmxhbmc6Yi5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKXx8Yi5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKXJldHVybiBjPWMudG9Mb3dlckNhc2UoKSxjPT09YXx8MD09PWMuaW5kZXhPZihhK1wiLVwiKTt3aGlsZSgoYj1iLnBhcmVudE5vZGUpJiYxPT09Yi5ub2RlVHlwZSk7cmV0dXJuITF9fSksdGFyZ2V0OmZ1bmN0aW9uKGIpe3ZhciBjPWEubG9jYXRpb24mJmEubG9jYXRpb24uaGFzaDtyZXR1cm4gYyYmYy5zbGljZSgxKT09PWIuaWR9LHJvb3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1vfSxmb2N1czpmdW5jdGlvbihhKXtyZXR1cm4gYT09PW4uYWN0aXZlRWxlbWVudCYmKCFuLmhhc0ZvY3VzfHxuLmhhc0ZvY3VzKCkpJiYhIShhLnR5cGV8fGEuaHJlZnx8fmEudGFiSW5kZXgpfSxlbmFibGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLmRpc2FibGVkPT09ITF9LGRpc2FibGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLmRpc2FibGVkPT09ITB9LGNoZWNrZWQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWImJiEhYS5jaGVja2VkfHxcIm9wdGlvblwiPT09YiYmISFhLnNlbGVjdGVkfSxzZWxlY3RlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxhLnNlbGVjdGVkPT09ITB9LGVtcHR5OmZ1bmN0aW9uKGEpe2ZvcihhPWEuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZylpZihhLm5vZGVUeXBlPDYpcmV0dXJuITE7cmV0dXJuITB9LHBhcmVudDpmdW5jdGlvbihhKXtyZXR1cm4hZC5wc2V1ZG9zLmVtcHR5KGEpfSxoZWFkZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIFkudGVzdChhLm5vZGVOYW1lKX0saW5wdXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIFgudGVzdChhLm5vZGVOYW1lKX0sYnV0dG9uOmZ1bmN0aW9uKGEpe3ZhciBiPWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iJiZcImJ1dHRvblwiPT09YS50eXBlfHxcImJ1dHRvblwiPT09Yn0sdGV4dDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm5cImlucHV0XCI9PT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJlwidGV4dFwiPT09YS50eXBlJiYobnVsbD09KGI9YS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKXx8XCJ0ZXh0XCI9PT1iLnRvTG93ZXJDYXNlKCkpfSxmaXJzdDpuYShmdW5jdGlvbigpe3JldHVyblswXX0pLGxhc3Q6bmEoZnVuY3Rpb24oYSxiKXtyZXR1cm5bYi0xXX0pLGVxOm5hKGZ1bmN0aW9uKGEsYixjKXtyZXR1cm5bMD5jP2MrYjpjXX0pLGV2ZW46bmEoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MDtiPmM7Yys9MilhLnB1c2goYyk7cmV0dXJuIGF9KSxvZGQ6bmEoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MTtiPmM7Yys9MilhLnB1c2goYyk7cmV0dXJuIGF9KSxsdDpuYShmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTA+Yz9jK2I6YzstLWQ+PTA7KWEucHVzaChkKTtyZXR1cm4gYX0pLGd0Om5hKGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9MD5jP2MrYjpjOysrZDxiOylhLnB1c2goZCk7cmV0dXJuIGF9KX19LGQucHNldWRvcy5udGg9ZC5wc2V1ZG9zLmVxO2ZvcihiIGlue3JhZGlvOiEwLGNoZWNrYm94OiEwLGZpbGU6ITAscGFzc3dvcmQ6ITAsaW1hZ2U6ITB9KWQucHNldWRvc1tiXT1sYShiKTtmb3IoYiBpbntzdWJtaXQ6ITAscmVzZXQ6ITB9KWQucHNldWRvc1tiXT1tYShiKTtmdW5jdGlvbiBwYSgpe31wYS5wcm90b3R5cGU9ZC5maWx0ZXJzPWQucHNldWRvcyxkLnNldEZpbHRlcnM9bmV3IHBhLGc9ZmEudG9rZW5pemU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxlLGYsZyxoLGksaixrPXpbYStcIiBcIl07aWYoaylyZXR1cm4gYj8wOmsuc2xpY2UoMCk7aD1hLGk9W10saj1kLnByZUZpbHRlcjt3aGlsZShoKXtjJiYhKGU9Ui5leGVjKGgpKXx8KGUmJihoPWguc2xpY2UoZVswXS5sZW5ndGgpfHxoKSxpLnB1c2goZj1bXSkpLGM9ITEsKGU9Uy5leGVjKGgpKSYmKGM9ZS5zaGlmdCgpLGYucHVzaCh7dmFsdWU6Yyx0eXBlOmVbMF0ucmVwbGFjZShRLFwiIFwiKX0pLGg9aC5zbGljZShjLmxlbmd0aCkpO2ZvcihnIGluIGQuZmlsdGVyKSEoZT1XW2ddLmV4ZWMoaCkpfHxqW2ddJiYhKGU9altnXShlKSl8fChjPWUuc2hpZnQoKSxmLnB1c2goe3ZhbHVlOmMsdHlwZTpnLG1hdGNoZXM6ZX0pLGg9aC5zbGljZShjLmxlbmd0aCkpO2lmKCFjKWJyZWFrfXJldHVybiBiP2gubGVuZ3RoOmg/ZmEuZXJyb3IoYSk6eihhLGkpLnNsaWNlKDApfTtmdW5jdGlvbiBxYShhKXtmb3IodmFyIGI9MCxjPWEubGVuZ3RoLGQ9XCJcIjtjPmI7YisrKWQrPWFbYl0udmFsdWU7cmV0dXJuIGR9ZnVuY3Rpb24gcmEoYSxiLGMpe3ZhciBkPWIuZGlyLGU9YyYmXCJwYXJlbnROb2RlXCI9PT1kLGY9eCsrO3JldHVybiBiLmZpcnN0P2Z1bmN0aW9uKGIsYyxmKXt3aGlsZShiPWJbZF0paWYoMT09PWIubm9kZVR5cGV8fGUpcmV0dXJuIGEoYixjLGYpfTpmdW5jdGlvbihiLGMsZyl7dmFyIGgsaSxqLGs9W3csZl07aWYoZyl7d2hpbGUoYj1iW2RdKWlmKCgxPT09Yi5ub2RlVHlwZXx8ZSkmJmEoYixjLGcpKXJldHVybiEwfWVsc2Ugd2hpbGUoYj1iW2RdKWlmKDE9PT1iLm5vZGVUeXBlfHxlKXtpZihqPWJbdV18fChiW3VdPXt9KSxpPWpbYi51bmlxdWVJRF18fChqW2IudW5pcXVlSURdPXt9KSwoaD1pW2RdKSYmaFswXT09PXcmJmhbMV09PT1mKXJldHVybiBrWzJdPWhbMl07aWYoaVtkXT1rLGtbMl09YShiLGMsZykpcmV0dXJuITB9fX1mdW5jdGlvbiBzYShhKXtyZXR1cm4gYS5sZW5ndGg+MT9mdW5jdGlvbihiLGMsZCl7dmFyIGU9YS5sZW5ndGg7d2hpbGUoZS0tKWlmKCFhW2VdKGIsYyxkKSlyZXR1cm4hMTtyZXR1cm4hMH06YVswXX1mdW5jdGlvbiB0YShhLGIsYyl7Zm9yKHZhciBkPTAsZT1iLmxlbmd0aDtlPmQ7ZCsrKWZhKGEsYltkXSxjKTtyZXR1cm4gY31mdW5jdGlvbiB1YShhLGIsYyxkLGUpe2Zvcih2YXIgZixnPVtdLGg9MCxpPWEubGVuZ3RoLGo9bnVsbCE9YjtpPmg7aCsrKShmPWFbaF0pJiYoYyYmIWMoZixkLGUpfHwoZy5wdXNoKGYpLGomJmIucHVzaChoKSkpO3JldHVybiBnfWZ1bmN0aW9uIHZhKGEsYixjLGQsZSxmKXtyZXR1cm4gZCYmIWRbdV0mJihkPXZhKGQpKSxlJiYhZVt1XSYmKGU9dmEoZSxmKSksaGEoZnVuY3Rpb24oZixnLGgsaSl7dmFyIGosayxsLG09W10sbj1bXSxvPWcubGVuZ3RoLHA9Znx8dGEoYnx8XCIqXCIsaC5ub2RlVHlwZT9baF06aCxbXSkscT0hYXx8IWYmJmI/cDp1YShwLG0sYSxoLGkpLHI9Yz9lfHwoZj9hOm98fGQpP1tdOmc6cTtpZihjJiZjKHEscixoLGkpLGQpe2o9dWEocixuKSxkKGosW10saCxpKSxrPWoubGVuZ3RoO3doaWxlKGstLSkobD1qW2tdKSYmKHJbbltrXV09IShxW25ba11dPWwpKX1pZihmKXtpZihlfHxhKXtpZihlKXtqPVtdLGs9ci5sZW5ndGg7d2hpbGUoay0tKShsPXJba10pJiZqLnB1c2gocVtrXT1sKTtlKG51bGwscj1bXSxqLGkpfWs9ci5sZW5ndGg7d2hpbGUoay0tKShsPXJba10pJiYoaj1lP0ooZixsKTptW2tdKT4tMSYmKGZbal09IShnW2pdPWwpKX19ZWxzZSByPXVhKHI9PT1nP3Iuc3BsaWNlKG8sci5sZW5ndGgpOnIpLGU/ZShudWxsLGcscixpKTpILmFwcGx5KGcscil9KX1mdW5jdGlvbiB3YShhKXtmb3IodmFyIGIsYyxlLGY9YS5sZW5ndGgsZz1kLnJlbGF0aXZlW2FbMF0udHlwZV0saD1nfHxkLnJlbGF0aXZlW1wiIFwiXSxpPWc/MTowLGs9cmEoZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1ifSxoLCEwKSxsPXJhKGZ1bmN0aW9uKGEpe3JldHVybiBKKGIsYSk+LTF9LGgsITApLG09W2Z1bmN0aW9uKGEsYyxkKXt2YXIgZT0hZyYmKGR8fGMhPT1qKXx8KChiPWMpLm5vZGVUeXBlP2soYSxjLGQpOmwoYSxjLGQpKTtyZXR1cm4gYj1udWxsLGV9XTtmPmk7aSsrKWlmKGM9ZC5yZWxhdGl2ZVthW2ldLnR5cGVdKW09W3JhKHNhKG0pLGMpXTtlbHNle2lmKGM9ZC5maWx0ZXJbYVtpXS50eXBlXS5hcHBseShudWxsLGFbaV0ubWF0Y2hlcyksY1t1XSl7Zm9yKGU9KytpO2Y+ZTtlKyspaWYoZC5yZWxhdGl2ZVthW2VdLnR5cGVdKWJyZWFrO3JldHVybiB2YShpPjEmJnNhKG0pLGk+MSYmcWEoYS5zbGljZSgwLGktMSkuY29uY2F0KHt2YWx1ZTpcIiBcIj09PWFbaS0yXS50eXBlP1wiKlwiOlwiXCJ9KSkucmVwbGFjZShRLFwiJDFcIiksYyxlPmkmJndhKGEuc2xpY2UoaSxlKSksZj5lJiZ3YShhPWEuc2xpY2UoZSkpLGY+ZSYmcWEoYSkpfW0ucHVzaChjKX1yZXR1cm4gc2EobSl9ZnVuY3Rpb24geGEoYSxiKXt2YXIgYz1iLmxlbmd0aD4wLGU9YS5sZW5ndGg+MCxmPWZ1bmN0aW9uKGYsZyxoLGksayl7dmFyIGwsbyxxLHI9MCxzPVwiMFwiLHQ9ZiYmW10sdT1bXSx2PWoseD1mfHxlJiZkLmZpbmQuVEFHKFwiKlwiLGspLHk9dys9bnVsbD09dj8xOk1hdGgucmFuZG9tKCl8fC4xLHo9eC5sZW5ndGg7Zm9yKGsmJihqPWc9PT1ufHxnfHxrKTtzIT09eiYmbnVsbCE9KGw9eFtzXSk7cysrKXtpZihlJiZsKXtvPTAsZ3x8bC5vd25lckRvY3VtZW50PT09bnx8KG0obCksaD0hcCk7d2hpbGUocT1hW28rK10paWYocShsLGd8fG4saCkpe2kucHVzaChsKTticmVha31rJiYodz15KX1jJiYoKGw9IXEmJmwpJiZyLS0sZiYmdC5wdXNoKGwpKX1pZihyKz1zLGMmJnMhPT1yKXtvPTA7d2hpbGUocT1iW28rK10pcSh0LHUsZyxoKTtpZihmKXtpZihyPjApd2hpbGUocy0tKXRbc118fHVbc118fCh1W3NdPUYuY2FsbChpKSk7dT11YSh1KX1ILmFwcGx5KGksdSksayYmIWYmJnUubGVuZ3RoPjAmJnIrYi5sZW5ndGg+MSYmZmEudW5pcXVlU29ydChpKX1yZXR1cm4gayYmKHc9eSxqPXYpLHR9O3JldHVybiBjP2hhKGYpOmZ9cmV0dXJuIGg9ZmEuY29tcGlsZT1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT1bXSxmPUFbYStcIiBcIl07aWYoIWYpe2J8fChiPWcoYSkpLGM9Yi5sZW5ndGg7d2hpbGUoYy0tKWY9d2EoYltjXSksZlt1XT9kLnB1c2goZik6ZS5wdXNoKGYpO2Y9QShhLHhhKGUsZCkpLGYuc2VsZWN0b3I9YX1yZXR1cm4gZn0saT1mYS5zZWxlY3Q9ZnVuY3Rpb24oYSxiLGUsZil7dmFyIGksaixrLGwsbSxuPVwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJmEsbz0hZiYmZyhhPW4uc2VsZWN0b3J8fGEpO2lmKGU9ZXx8W10sMT09PW8ubGVuZ3RoKXtpZihqPW9bMF09b1swXS5zbGljZSgwKSxqLmxlbmd0aD4yJiZcIklEXCI9PT0oaz1qWzBdKS50eXBlJiZjLmdldEJ5SWQmJjk9PT1iLm5vZGVUeXBlJiZwJiZkLnJlbGF0aXZlW2pbMV0udHlwZV0pe2lmKGI9KGQuZmluZC5JRChrLm1hdGNoZXNbMF0ucmVwbGFjZShiYSxjYSksYil8fFtdKVswXSwhYilyZXR1cm4gZTtuJiYoYj1iLnBhcmVudE5vZGUpLGE9YS5zbGljZShqLnNoaWZ0KCkudmFsdWUubGVuZ3RoKX1pPVcubmVlZHNDb250ZXh0LnRlc3QoYSk/MDpqLmxlbmd0aDt3aGlsZShpLS0pe2lmKGs9altpXSxkLnJlbGF0aXZlW2w9ay50eXBlXSlicmVhaztpZigobT1kLmZpbmRbbF0pJiYoZj1tKGsubWF0Y2hlc1swXS5yZXBsYWNlKGJhLGNhKSxfLnRlc3QoalswXS50eXBlKSYmb2EoYi5wYXJlbnROb2RlKXx8YikpKXtpZihqLnNwbGljZShpLDEpLGE9Zi5sZW5ndGgmJnFhKGopLCFhKXJldHVybiBILmFwcGx5KGUsZiksZTticmVha319fXJldHVybihufHxoKGEsbykpKGYsYiwhcCxlLCFifHxfLnRlc3QoYSkmJm9hKGIucGFyZW50Tm9kZSl8fGIpLGV9LGMuc29ydFN0YWJsZT11LnNwbGl0KFwiXCIpLnNvcnQoQikuam9pbihcIlwiKT09PXUsYy5kZXRlY3REdXBsaWNhdGVzPSEhbCxtKCksYy5zb3J0RGV0YWNoZWQ9aWEoZnVuY3Rpb24oYSl7cmV0dXJuIDEmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihuLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpfSksaWEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGEgaHJlZj0nIyc+PC9hPlwiLFwiI1wiPT09YS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcImhyZWZcIil9KXx8amEoXCJ0eXBlfGhyZWZ8aGVpZ2h0fHdpZHRoXCIsZnVuY3Rpb24oYSxiLGMpe3JldHVybiBjP3ZvaWQgMDphLmdldEF0dHJpYnV0ZShiLFwidHlwZVwiPT09Yi50b0xvd2VyQ2FzZSgpPzE6Mil9KSxjLmF0dHJpYnV0ZXMmJmlhKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxpbnB1dC8+XCIsYS5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIiksXCJcIj09PWEuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKX0pfHxqYShcInZhbHVlXCIsZnVuY3Rpb24oYSxiLGMpe3JldHVybiBjfHxcImlucHV0XCIhPT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk/dm9pZCAwOmEuZGVmYXVsdFZhbHVlfSksaWEoZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWEuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIil9KXx8amEoSyxmdW5jdGlvbihhLGIsYyl7dmFyIGQ7cmV0dXJuIGM/dm9pZCAwOmFbYl09PT0hMD9iLnRvTG93ZXJDYXNlKCk6KGQ9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpKSYmZC5zcGVjaWZpZWQ/ZC52YWx1ZTpudWxsfSksZmF9KGEpO24uZmluZD10LG4uZXhwcj10LnNlbGVjdG9ycyxuLmV4cHJbXCI6XCJdPW4uZXhwci5wc2V1ZG9zLG4udW5pcXVlU29ydD1uLnVuaXF1ZT10LnVuaXF1ZVNvcnQsbi50ZXh0PXQuZ2V0VGV4dCxuLmlzWE1MRG9jPXQuaXNYTUwsbi5jb250YWlucz10LmNvbnRhaW5zO3ZhciB1PWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1bXSxlPXZvaWQgMCE9PWM7d2hpbGUoKGE9YVtiXSkmJjkhPT1hLm5vZGVUeXBlKWlmKDE9PT1hLm5vZGVUeXBlKXtpZihlJiZuKGEpLmlzKGMpKWJyZWFrO2QucHVzaChhKX1yZXR1cm4gZH0sdj1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1bXTthO2E9YS5uZXh0U2libGluZykxPT09YS5ub2RlVHlwZSYmYSE9PWImJmMucHVzaChhKTtyZXR1cm4gY30sdz1uLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LHg9L148KFtcXHctXSspXFxzKlxcLz8+KD86PFxcL1xcMT58KSQvLHk9L14uW146I1xcW1xcLixdKiQvO2Z1bmN0aW9uIHooYSxiLGMpe2lmKG4uaXNGdW5jdGlvbihiKSlyZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSxkKXtyZXR1cm4hIWIuY2FsbChhLGQsYSkhPT1jfSk7aWYoYi5ub2RlVHlwZSlyZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1iIT09Y30pO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKXtpZih5LnRlc3QoYikpcmV0dXJuIG4uZmlsdGVyKGIsYSxjKTtiPW4uZmlsdGVyKGIsYSl9cmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBuLmluQXJyYXkoYSxiKT4tMSE9PWN9KX1uLmZpbHRlcj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YlswXTtyZXR1cm4gYyYmKGE9XCI6bm90KFwiK2ErXCIpXCIpLDE9PT1iLmxlbmd0aCYmMT09PWQubm9kZVR5cGU/bi5maW5kLm1hdGNoZXNTZWxlY3RvcihkLGEpP1tkXTpbXTpuLmZpbmQubWF0Y2hlcyhhLG4uZ3JlcChiLGZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZX0pKX0sbi5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oYSl7dmFyIGIsYz1bXSxkPXRoaXMsZT1kLmxlbmd0aDtpZihcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gdGhpcy5wdXNoU3RhY2sobihhKS5maWx0ZXIoZnVuY3Rpb24oKXtmb3IoYj0wO2U+YjtiKyspaWYobi5jb250YWlucyhkW2JdLHRoaXMpKXJldHVybiEwfSkpO2ZvcihiPTA7ZT5iO2IrKyluLmZpbmQoYSxkW2JdLGMpO3JldHVybiBjPXRoaXMucHVzaFN0YWNrKGU+MT9uLnVuaXF1ZShjKTpjKSxjLnNlbGVjdG9yPXRoaXMuc2VsZWN0b3I/dGhpcy5zZWxlY3RvcitcIiBcIithOmEsY30sZmlsdGVyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayh6KHRoaXMsYXx8W10sITEpKX0sbm90OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayh6KHRoaXMsYXx8W10sITApKX0saXM6ZnVuY3Rpb24oYSl7cmV0dXJuISF6KHRoaXMsXCJzdHJpbmdcIj09dHlwZW9mIGEmJncudGVzdChhKT9uKGEpOmF8fFtdLCExKS5sZW5ndGh9fSk7dmFyIEEsQj0vXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0qKSkkLyxDPW4uZm4uaW5pdD1mdW5jdGlvbihhLGIsYyl7dmFyIGUsZjtpZighYSlyZXR1cm4gdGhpcztpZihjPWN8fEEsXCJzdHJpbmdcIj09dHlwZW9mIGEpe2lmKGU9XCI8XCI9PT1hLmNoYXJBdCgwKSYmXCI+XCI9PT1hLmNoYXJBdChhLmxlbmd0aC0xKSYmYS5sZW5ndGg+PTM/W251bGwsYSxudWxsXTpCLmV4ZWMoYSksIWV8fCFlWzFdJiZiKXJldHVybiFifHxiLmpxdWVyeT8oYnx8YykuZmluZChhKTp0aGlzLmNvbnN0cnVjdG9yKGIpLmZpbmQoYSk7aWYoZVsxXSl7aWYoYj1iIGluc3RhbmNlb2Ygbj9iWzBdOmIsbi5tZXJnZSh0aGlzLG4ucGFyc2VIVE1MKGVbMV0sYiYmYi5ub2RlVHlwZT9iLm93bmVyRG9jdW1lbnR8fGI6ZCwhMCkpLHgudGVzdChlWzFdKSYmbi5pc1BsYWluT2JqZWN0KGIpKWZvcihlIGluIGIpbi5pc0Z1bmN0aW9uKHRoaXNbZV0pP3RoaXNbZV0oYltlXSk6dGhpcy5hdHRyKGUsYltlXSk7cmV0dXJuIHRoaXN9aWYoZj1kLmdldEVsZW1lbnRCeUlkKGVbMl0pLGYmJmYucGFyZW50Tm9kZSl7aWYoZi5pZCE9PWVbMl0pcmV0dXJuIEEuZmluZChhKTt0aGlzLmxlbmd0aD0xLHRoaXNbMF09Zn1yZXR1cm4gdGhpcy5jb250ZXh0PWQsdGhpcy5zZWxlY3Rvcj1hLHRoaXN9cmV0dXJuIGEubm9kZVR5cGU/KHRoaXMuY29udGV4dD10aGlzWzBdPWEsdGhpcy5sZW5ndGg9MSx0aGlzKTpuLmlzRnVuY3Rpb24oYSk/XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGMucmVhZHk/Yy5yZWFkeShhKTphKG4pOih2b2lkIDAhPT1hLnNlbGVjdG9yJiYodGhpcy5zZWxlY3Rvcj1hLnNlbGVjdG9yLHRoaXMuY29udGV4dD1hLmNvbnRleHQpLG4ubWFrZUFycmF5KGEsdGhpcykpfTtDLnByb3RvdHlwZT1uLmZuLEE9bihkKTt2YXIgRD0vXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxFPXtjaGlsZHJlbjohMCxjb250ZW50czohMCxuZXh0OiEwLHByZXY6ITB9O24uZm4uZXh0ZW5kKHtoYXM6ZnVuY3Rpb24oYSl7dmFyIGIsYz1uKGEsdGhpcyksZD1jLmxlbmd0aDtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtmb3IoYj0wO2Q+YjtiKyspaWYobi5jb250YWlucyh0aGlzLGNbYl0pKXJldHVybiEwfSl9LGNsb3Nlc3Q6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGMsZD0wLGU9dGhpcy5sZW5ndGgsZj1bXSxnPXcudGVzdChhKXx8XCJzdHJpbmdcIiE9dHlwZW9mIGE/bihhLGJ8fHRoaXMuY29udGV4dCk6MDtlPmQ7ZCsrKWZvcihjPXRoaXNbZF07YyYmYyE9PWI7Yz1jLnBhcmVudE5vZGUpaWYoYy5ub2RlVHlwZTwxMSYmKGc/Zy5pbmRleChjKT4tMToxPT09Yy5ub2RlVHlwZSYmbi5maW5kLm1hdGNoZXNTZWxlY3RvcihjLGEpKSl7Zi5wdXNoKGMpO2JyZWFrfXJldHVybiB0aGlzLnB1c2hTdGFjayhmLmxlbmd0aD4xP24udW5pcXVlU29ydChmKTpmKX0saW5kZXg6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/XCJzdHJpbmdcIj09dHlwZW9mIGE/bi5pbkFycmF5KHRoaXNbMF0sbihhKSk6bi5pbkFycmF5KGEuanF1ZXJ5P2FbMF06YSx0aGlzKTp0aGlzWzBdJiZ0aGlzWzBdLnBhcmVudE5vZGU/dGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGg6LTF9LGFkZDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLnB1c2hTdGFjayhuLnVuaXF1ZVNvcnQobi5tZXJnZSh0aGlzLmdldCgpLG4oYSxiKSkpKX0sYWRkQmFjazpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5hZGQobnVsbD09YT90aGlzLnByZXZPYmplY3Q6dGhpcy5wcmV2T2JqZWN0LmZpbHRlcihhKSl9fSk7ZnVuY3Rpb24gRihhLGIpe2RvIGE9YVtiXTt3aGlsZShhJiYxIT09YS5ub2RlVHlwZSk7cmV0dXJuIGF9bi5lYWNoKHtwYXJlbnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiYxMSE9PWIubm9kZVR5cGU/YjpudWxsfSxwYXJlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiB1KGEsXCJwYXJlbnROb2RlXCIpfSxwYXJlbnRzVW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB1KGEsXCJwYXJlbnROb2RlXCIsYyl9LG5leHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIEYoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2OmZ1bmN0aW9uKGEpe3JldHVybiBGKGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIHUoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2QWxsOmZ1bmN0aW9uKGEpe3JldHVybiB1KGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHUoYSxcIm5leHRTaWJsaW5nXCIsYyl9LHByZXZVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHUoYSxcInByZXZpb3VzU2libGluZ1wiLGMpfSxzaWJsaW5nczpmdW5jdGlvbihhKXtyZXR1cm4gdigoYS5wYXJlbnROb2RlfHx7fSkuZmlyc3RDaGlsZCxhKX0sY2hpbGRyZW46ZnVuY3Rpb24oYSl7cmV0dXJuIHYoYS5maXJzdENoaWxkKX0sY29udGVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIG4ubm9kZU5hbWUoYSxcImlmcmFtZVwiKT9hLmNvbnRlbnREb2N1bWVudHx8YS5jb250ZW50V2luZG93LmRvY3VtZW50Om4ubWVyZ2UoW10sYS5jaGlsZE5vZGVzKX19LGZ1bmN0aW9uKGEsYil7bi5mblthXT1mdW5jdGlvbihjLGQpe3ZhciBlPW4ubWFwKHRoaXMsYixjKTtyZXR1cm5cIlVudGlsXCIhPT1hLnNsaWNlKC01KSYmKGQ9YyksZCYmXCJzdHJpbmdcIj09dHlwZW9mIGQmJihlPW4uZmlsdGVyKGQsZSkpLHRoaXMubGVuZ3RoPjEmJihFW2FdfHwoZT1uLnVuaXF1ZVNvcnQoZSkpLEQudGVzdChhKSYmKGU9ZS5yZXZlcnNlKCkpKSx0aGlzLnB1c2hTdGFjayhlKX19KTt2YXIgRz0vXFxTKy9nO2Z1bmN0aW9uIEgoYSl7dmFyIGI9e307cmV0dXJuIG4uZWFjaChhLm1hdGNoKEcpfHxbXSxmdW5jdGlvbihhLGMpe2JbY109ITB9KSxifW4uQ2FsbGJhY2tzPWZ1bmN0aW9uKGEpe2E9XCJzdHJpbmdcIj09dHlwZW9mIGE/SChhKTpuLmV4dGVuZCh7fSxhKTt2YXIgYixjLGQsZSxmPVtdLGc9W10saD0tMSxpPWZ1bmN0aW9uKCl7Zm9yKGU9YS5vbmNlLGQ9Yj0hMDtnLmxlbmd0aDtoPS0xKXtjPWcuc2hpZnQoKTt3aGlsZSgrK2g8Zi5sZW5ndGgpZltoXS5hcHBseShjWzBdLGNbMV0pPT09ITEmJmEuc3RvcE9uRmFsc2UmJihoPWYubGVuZ3RoLGM9ITEpfWEubWVtb3J5fHwoYz0hMSksYj0hMSxlJiYoZj1jP1tdOlwiXCIpfSxqPXthZGQ6ZnVuY3Rpb24oKXtyZXR1cm4gZiYmKGMmJiFiJiYoaD1mLmxlbmd0aC0xLGcucHVzaChjKSksZnVuY3Rpb24gZChiKXtuLmVhY2goYixmdW5jdGlvbihiLGMpe24uaXNGdW5jdGlvbihjKT9hLnVuaXF1ZSYmai5oYXMoYyl8fGYucHVzaChjKTpjJiZjLmxlbmd0aCYmXCJzdHJpbmdcIiE9PW4udHlwZShjKSYmZChjKX0pfShhcmd1bWVudHMpLGMmJiFiJiZpKCkpLHRoaXN9LHJlbW92ZTpmdW5jdGlvbigpe3JldHVybiBuLmVhY2goYXJndW1lbnRzLGZ1bmN0aW9uKGEsYil7dmFyIGM7d2hpbGUoKGM9bi5pbkFycmF5KGIsZixjKSk+LTEpZi5zcGxpY2UoYywxKSxoPj1jJiZoLS19KSx0aGlzfSxoYXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/bi5pbkFycmF5KGEsZik+LTE6Zi5sZW5ndGg+MH0sZW1wdHk6ZnVuY3Rpb24oKXtyZXR1cm4gZiYmKGY9W10pLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gZT1nPVtdLGY9Yz1cIlwiLHRoaXN9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIWZ9LGxvY2s6ZnVuY3Rpb24oKXtyZXR1cm4gZT0hMCxjfHxqLmRpc2FibGUoKSx0aGlzfSxsb2NrZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWV9LGZpcmVXaXRoOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGV8fChjPWN8fFtdLGM9W2EsYy5zbGljZT9jLnNsaWNlKCk6Y10sZy5wdXNoKGMpLGJ8fGkoKSksdGhpc30sZmlyZTpmdW5jdGlvbigpe3JldHVybiBqLmZpcmVXaXRoKHRoaXMsYXJndW1lbnRzKSx0aGlzfSxmaXJlZDpmdW5jdGlvbigpe3JldHVybiEhZH19O3JldHVybiBqfSxuLmV4dGVuZCh7RGVmZXJyZWQ6ZnVuY3Rpb24oYSl7dmFyIGI9W1tcInJlc29sdmVcIixcImRvbmVcIixuLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFwicmVzb2x2ZWRcIl0sW1wicmVqZWN0XCIsXCJmYWlsXCIsbi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcInJlamVjdGVkXCJdLFtcIm5vdGlmeVwiLFwicHJvZ3Jlc3NcIixuLkNhbGxiYWNrcyhcIm1lbW9yeVwiKV1dLGM9XCJwZW5kaW5nXCIsZD17c3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gY30sYWx3YXlzOmZ1bmN0aW9uKCl7cmV0dXJuIGUuZG9uZShhcmd1bWVudHMpLmZhaWwoYXJndW1lbnRzKSx0aGlzfSx0aGVuOmZ1bmN0aW9uKCl7dmFyIGE9YXJndW1lbnRzO3JldHVybiBuLkRlZmVycmVkKGZ1bmN0aW9uKGMpe24uZWFjaChiLGZ1bmN0aW9uKGIsZil7dmFyIGc9bi5pc0Z1bmN0aW9uKGFbYl0pJiZhW2JdO2VbZlsxXV0oZnVuY3Rpb24oKXt2YXIgYT1nJiZnLmFwcGx5KHRoaXMsYXJndW1lbnRzKTthJiZuLmlzRnVuY3Rpb24oYS5wcm9taXNlKT9hLnByb21pc2UoKS5wcm9ncmVzcyhjLm5vdGlmeSkuZG9uZShjLnJlc29sdmUpLmZhaWwoYy5yZWplY3QpOmNbZlswXStcIldpdGhcIl0odGhpcz09PWQ/Yy5wcm9taXNlKCk6dGhpcyxnP1thXTphcmd1bWVudHMpfSl9KSxhPW51bGx9KS5wcm9taXNlKCl9LHByb21pc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/bi5leHRlbmQoYSxkKTpkfX0sZT17fTtyZXR1cm4gZC5waXBlPWQudGhlbixuLmVhY2goYixmdW5jdGlvbihhLGYpe3ZhciBnPWZbMl0saD1mWzNdO2RbZlsxXV09Zy5hZGQsaCYmZy5hZGQoZnVuY3Rpb24oKXtjPWh9LGJbMV5hXVsyXS5kaXNhYmxlLGJbMl1bMl0ubG9jayksZVtmWzBdXT1mdW5jdGlvbigpe3JldHVybiBlW2ZbMF0rXCJXaXRoXCJdKHRoaXM9PT1lP2Q6dGhpcyxhcmd1bWVudHMpLHRoaXN9LGVbZlswXStcIldpdGhcIl09Zy5maXJlV2l0aH0pLGQucHJvbWlzZShlKSxhJiZhLmNhbGwoZSxlKSxlfSx3aGVuOmZ1bmN0aW9uKGEpe3ZhciBiPTAsYz1lLmNhbGwoYXJndW1lbnRzKSxkPWMubGVuZ3RoLGY9MSE9PWR8fGEmJm4uaXNGdW5jdGlvbihhLnByb21pc2UpP2Q6MCxnPTE9PT1mP2E6bi5EZWZlcnJlZCgpLGg9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBmdW5jdGlvbihkKXtiW2FdPXRoaXMsY1thXT1hcmd1bWVudHMubGVuZ3RoPjE/ZS5jYWxsKGFyZ3VtZW50cyk6ZCxjPT09aT9nLm5vdGlmeVdpdGgoYixjKTotLWZ8fGcucmVzb2x2ZVdpdGgoYixjKX19LGksaixrO2lmKGQ+MSlmb3IoaT1uZXcgQXJyYXkoZCksaj1uZXcgQXJyYXkoZCksaz1uZXcgQXJyYXkoZCk7ZD5iO2IrKyljW2JdJiZuLmlzRnVuY3Rpb24oY1tiXS5wcm9taXNlKT9jW2JdLnByb21pc2UoKS5wcm9ncmVzcyhoKGIsaixpKSkuZG9uZShoKGIsayxjKSkuZmFpbChnLnJlamVjdCk6LS1mO3JldHVybiBmfHxnLnJlc29sdmVXaXRoKGssYyksZy5wcm9taXNlKCl9fSk7dmFyIEk7bi5mbi5yZWFkeT1mdW5jdGlvbihhKXtyZXR1cm4gbi5yZWFkeS5wcm9taXNlKCkuZG9uZShhKSx0aGlzfSxuLmV4dGVuZCh7aXNSZWFkeTohMSxyZWFkeVdhaXQ6MSxob2xkUmVhZHk6ZnVuY3Rpb24oYSl7YT9uLnJlYWR5V2FpdCsrOm4ucmVhZHkoITApfSxyZWFkeTpmdW5jdGlvbihhKXsoYT09PSEwPy0tbi5yZWFkeVdhaXQ6bi5pc1JlYWR5KXx8KG4uaXNSZWFkeT0hMCxhIT09ITAmJi0tbi5yZWFkeVdhaXQ+MHx8KEkucmVzb2x2ZVdpdGgoZCxbbl0pLG4uZm4udHJpZ2dlckhhbmRsZXImJihuKGQpLnRyaWdnZXJIYW5kbGVyKFwicmVhZHlcIiksbihkKS5vZmYoXCJyZWFkeVwiKSkpKX19KTtmdW5jdGlvbiBKKCl7ZC5hZGRFdmVudExpc3RlbmVyPyhkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsSyksYS5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLEspKTooZC5kZXRhY2hFdmVudChcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLEspLGEuZGV0YWNoRXZlbnQoXCJvbmxvYWRcIixLKSl9ZnVuY3Rpb24gSygpeyhkLmFkZEV2ZW50TGlzdGVuZXJ8fFwibG9hZFwiPT09YS5ldmVudC50eXBlfHxcImNvbXBsZXRlXCI9PT1kLnJlYWR5U3RhdGUpJiYoSigpLG4ucmVhZHkoKSl9bi5yZWFkeS5wcm9taXNlPWZ1bmN0aW9uKGIpe2lmKCFJKWlmKEk9bi5EZWZlcnJlZCgpLFwiY29tcGxldGVcIj09PWQucmVhZHlTdGF0ZXx8XCJsb2FkaW5nXCIhPT1kLnJlYWR5U3RhdGUmJiFkLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbClhLnNldFRpbWVvdXQobi5yZWFkeSk7ZWxzZSBpZihkLmFkZEV2ZW50TGlzdGVuZXIpZC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEspLGEuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixLKTtlbHNle2QuYXR0YWNoRXZlbnQoXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixLKSxhLmF0dGFjaEV2ZW50KFwib25sb2FkXCIsSyk7dmFyIGM9ITE7dHJ5e2M9bnVsbD09YS5mcmFtZUVsZW1lbnQmJmQuZG9jdW1lbnRFbGVtZW50fWNhdGNoKGUpe31jJiZjLmRvU2Nyb2xsJiYhZnVuY3Rpb24gZigpe2lmKCFuLmlzUmVhZHkpe3RyeXtjLmRvU2Nyb2xsKFwibGVmdFwiKX1jYXRjaChiKXtyZXR1cm4gYS5zZXRUaW1lb3V0KGYsNTApfUooKSxuLnJlYWR5KCl9fSgpfXJldHVybiBJLnByb21pc2UoYil9LG4ucmVhZHkucHJvbWlzZSgpO3ZhciBMO2ZvcihMIGluIG4obCkpYnJlYWs7bC5vd25GaXJzdD1cIjBcIj09PUwsbC5pbmxpbmVCbG9ja05lZWRzTGF5b3V0PSExLG4oZnVuY3Rpb24oKXt2YXIgYSxiLGMsZTtjPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLGMmJmMuc3R5bGUmJihiPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxlPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxlLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXI6MDt3aWR0aDowO2hlaWdodDowO3RvcDowO2xlZnQ6LTk5OTlweFwiLGMuYXBwZW5kQ2hpbGQoZSkuYXBwZW5kQ2hpbGQoYiksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuc3R5bGUuem9vbSYmKGIuc3R5bGUuY3NzVGV4dD1cImRpc3BsYXk6aW5saW5lO21hcmdpbjowO2JvcmRlcjowO3BhZGRpbmc6MXB4O3dpZHRoOjFweDt6b29tOjFcIixsLmlubGluZUJsb2NrTmVlZHNMYXlvdXQ9YT0zPT09Yi5vZmZzZXRXaWR0aCxhJiYoYy5zdHlsZS56b29tPTEpKSxjLnJlbW92ZUNoaWxkKGUpKX0pLGZ1bmN0aW9uKCl7dmFyIGE9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2wuZGVsZXRlRXhwYW5kbz0hMDt0cnl7ZGVsZXRlIGEudGVzdH1jYXRjaChiKXtsLmRlbGV0ZUV4cGFuZG89ITF9YT1udWxsfSgpO3ZhciBNPWZ1bmN0aW9uKGEpe3ZhciBiPW4ubm9EYXRhWyhhLm5vZGVOYW1lK1wiIFwiKS50b0xvd2VyQ2FzZSgpXSxjPSthLm5vZGVUeXBlfHwxO3JldHVybiAxIT09YyYmOSE9PWM/ITE6IWJ8fGIhPT0hMCYmYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc2lkXCIpPT09Yn0sTj0vXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sTz0vKFtBLVpdKS9nO2Z1bmN0aW9uIFAoYSxiLGMpe2lmKHZvaWQgMD09PWMmJjE9PT1hLm5vZGVUeXBlKXt2YXIgZD1cImRhdGEtXCIrYi5yZXBsYWNlKE8sXCItJDFcIikudG9Mb3dlckNhc2UoKTtpZihjPWEuZ2V0QXR0cmlidXRlKGQpLFwic3RyaW5nXCI9PXR5cGVvZiBjKXt0cnl7Yz1cInRydWVcIj09PWM/ITA6XCJmYWxzZVwiPT09Yz8hMTpcIm51bGxcIj09PWM/bnVsbDorYytcIlwiPT09Yz8rYzpOLnRlc3QoYyk/bi5wYXJzZUpTT04oYyk6Y31jYXRjaChlKXt9bi5kYXRhKGEsYixjKX1lbHNlIGM9dm9pZCAwO1xufXJldHVybiBjfWZ1bmN0aW9uIFEoYSl7dmFyIGI7Zm9yKGIgaW4gYSlpZigoXCJkYXRhXCIhPT1ifHwhbi5pc0VtcHR5T2JqZWN0KGFbYl0pKSYmXCJ0b0pTT05cIiE9PWIpcmV0dXJuITE7cmV0dXJuITB9ZnVuY3Rpb24gUihhLGIsZCxlKXtpZihNKGEpKXt2YXIgZixnLGg9bi5leHBhbmRvLGk9YS5ub2RlVHlwZSxqPWk/bi5jYWNoZTphLGs9aT9hW2hdOmFbaF0mJmg7aWYoayYmaltrXSYmKGV8fGpba10uZGF0YSl8fHZvaWQgMCE9PWR8fFwic3RyaW5nXCIhPXR5cGVvZiBiKXJldHVybiBrfHwoaz1pP2FbaF09Yy5wb3AoKXx8bi5ndWlkKys6aCksaltrXXx8KGpba109aT97fTp7dG9KU09OOm4ubm9vcH0pLFwib2JqZWN0XCIhPXR5cGVvZiBiJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBifHwoZT9qW2tdPW4uZXh0ZW5kKGpba10sYik6altrXS5kYXRhPW4uZXh0ZW5kKGpba10uZGF0YSxiKSksZz1qW2tdLGV8fChnLmRhdGF8fChnLmRhdGE9e30pLGc9Zy5kYXRhKSx2b2lkIDAhPT1kJiYoZ1tuLmNhbWVsQ2FzZShiKV09ZCksXCJzdHJpbmdcIj09dHlwZW9mIGI/KGY9Z1tiXSxudWxsPT1mJiYoZj1nW24uY2FtZWxDYXNlKGIpXSkpOmY9ZyxmfX1mdW5jdGlvbiBTKGEsYixjKXtpZihNKGEpKXt2YXIgZCxlLGY9YS5ub2RlVHlwZSxnPWY/bi5jYWNoZTphLGg9Zj9hW24uZXhwYW5kb106bi5leHBhbmRvO2lmKGdbaF0pe2lmKGImJihkPWM/Z1toXTpnW2hdLmRhdGEpKXtuLmlzQXJyYXkoYik/Yj1iLmNvbmNhdChuLm1hcChiLG4uY2FtZWxDYXNlKSk6YiBpbiBkP2I9W2JdOihiPW4uY2FtZWxDYXNlKGIpLGI9YiBpbiBkP1tiXTpiLnNwbGl0KFwiIFwiKSksZT1iLmxlbmd0aDt3aGlsZShlLS0pZGVsZXRlIGRbYltlXV07aWYoYz8hUShkKTohbi5pc0VtcHR5T2JqZWN0KGQpKXJldHVybn0oY3x8KGRlbGV0ZSBnW2hdLmRhdGEsUShnW2hdKSkpJiYoZj9uLmNsZWFuRGF0YShbYV0sITApOmwuZGVsZXRlRXhwYW5kb3x8ZyE9Zy53aW5kb3c/ZGVsZXRlIGdbaF06Z1toXT12b2lkIDApfX19bi5leHRlbmQoe2NhY2hlOnt9LG5vRGF0YTp7XCJhcHBsZXQgXCI6ITAsXCJlbWJlZCBcIjohMCxcIm9iamVjdCBcIjpcImNsc2lkOkQyN0NEQjZFLUFFNkQtMTFjZi05NkI4LTQ0NDU1MzU0MDAwMFwifSxoYXNEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiBhPWEubm9kZVR5cGU/bi5jYWNoZVthW24uZXhwYW5kb11dOmFbbi5leHBhbmRvXSwhIWEmJiFRKGEpfSxkYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gUihhLGIsYyl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUyhhLGIpfSxfZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIFIoYSxiLGMsITApfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe3JldHVybiBTKGEsYiwhMCl9fSksbi5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj10aGlzWzBdLGc9ZiYmZi5hdHRyaWJ1dGVzO2lmKHZvaWQgMD09PWEpe2lmKHRoaXMubGVuZ3RoJiYoZT1uLmRhdGEoZiksMT09PWYubm9kZVR5cGUmJiFuLl9kYXRhKGYsXCJwYXJzZWRBdHRyc1wiKSkpe2M9Zy5sZW5ndGg7d2hpbGUoYy0tKWdbY10mJihkPWdbY10ubmFtZSwwPT09ZC5pbmRleE9mKFwiZGF0YS1cIikmJihkPW4uY2FtZWxDYXNlKGQuc2xpY2UoNSkpLFAoZixkLGVbZF0pKSk7bi5fZGF0YShmLFwicGFyc2VkQXR0cnNcIiwhMCl9cmV0dXJuIGV9cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGE/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5kYXRhKHRoaXMsYSl9KTphcmd1bWVudHMubGVuZ3RoPjE/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5kYXRhKHRoaXMsYSxiKX0pOmY/UChmLGEsbi5kYXRhKGYsYSkpOnZvaWQgMH0scmVtb3ZlRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5yZW1vdmVEYXRhKHRoaXMsYSl9KX19KSxuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiBhPyhiPShifHxcImZ4XCIpK1wicXVldWVcIixkPW4uX2RhdGEoYSxiKSxjJiYoIWR8fG4uaXNBcnJheShjKT9kPW4uX2RhdGEoYSxiLG4ubWFrZUFycmF5KGMpKTpkLnB1c2goYykpLGR8fFtdKTp2b2lkIDB9LGRlcXVldWU6ZnVuY3Rpb24oYSxiKXtiPWJ8fFwiZnhcIjt2YXIgYz1uLnF1ZXVlKGEsYiksZD1jLmxlbmd0aCxlPWMuc2hpZnQoKSxmPW4uX3F1ZXVlSG9va3MoYSxiKSxnPWZ1bmN0aW9uKCl7bi5kZXF1ZXVlKGEsYil9O1wiaW5wcm9ncmVzc1wiPT09ZSYmKGU9Yy5zaGlmdCgpLGQtLSksZSYmKFwiZnhcIj09PWImJmMudW5zaGlmdChcImlucHJvZ3Jlc3NcIiksZGVsZXRlIGYuc3RvcCxlLmNhbGwoYSxnLGYpKSwhZCYmZiYmZi5lbXB0eS5maXJlKCl9LF9xdWV1ZUhvb2tzOmZ1bmN0aW9uKGEsYil7dmFyIGM9YitcInF1ZXVlSG9va3NcIjtyZXR1cm4gbi5fZGF0YShhLGMpfHxuLl9kYXRhKGEsYyx7ZW1wdHk6bi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKS5hZGQoZnVuY3Rpb24oKXtuLl9yZW1vdmVEYXRhKGEsYitcInF1ZXVlXCIpLG4uX3JlbW92ZURhdGEoYSxjKX0pfSl9fSksbi5mbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGEsYil7dmFyIGM9MjtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPVwiZnhcIixjLS0pLGFyZ3VtZW50cy5sZW5ndGg8Yz9uLnF1ZXVlKHRoaXNbMF0sYSk6dm9pZCAwPT09Yj90aGlzOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPW4ucXVldWUodGhpcyxhLGIpO24uX3F1ZXVlSG9va3ModGhpcyxhKSxcImZ4XCI9PT1hJiZcImlucHJvZ3Jlc3NcIiE9PWNbMF0mJm4uZGVxdWV1ZSh0aGlzLGEpfSl9LGRlcXVldWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24uZGVxdWV1ZSh0aGlzLGEpfSl9LGNsZWFyUXVldWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucXVldWUoYXx8XCJmeFwiLFtdKX0scHJvbWlzZTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MSxlPW4uRGVmZXJyZWQoKSxmPXRoaXMsZz10aGlzLmxlbmd0aCxoPWZ1bmN0aW9uKCl7LS1kfHxlLnJlc29sdmVXaXRoKGYsW2ZdKX07XCJzdHJpbmdcIiE9dHlwZW9mIGEmJihiPWEsYT12b2lkIDApLGE9YXx8XCJmeFwiO3doaWxlKGctLSljPW4uX2RhdGEoZltnXSxhK1wicXVldWVIb29rc1wiKSxjJiZjLmVtcHR5JiYoZCsrLGMuZW1wdHkuYWRkKGgpKTtyZXR1cm4gaCgpLGUucHJvbWlzZShiKX19KSxmdW5jdGlvbigpe3ZhciBhO2wuc2hyaW5rV3JhcEJsb2Nrcz1mdW5jdGlvbigpe2lmKG51bGwhPWEpcmV0dXJuIGE7YT0hMTt2YXIgYixjLGU7cmV0dXJuIGM9ZC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0sYyYmYy5zdHlsZT8oYj1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZT1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZS5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyOjA7d2lkdGg6MDtoZWlnaHQ6MDt0b3A6MDtsZWZ0Oi05OTk5cHhcIixjLmFwcGVuZENoaWxkKGUpLmFwcGVuZENoaWxkKGIpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLnN0eWxlLnpvb20mJihiLnN0eWxlLmNzc1RleHQ9XCItd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3g7LW1vei1ib3gtc2l6aW5nOmNvbnRlbnQtYm94O2JveC1zaXppbmc6Y29udGVudC1ib3g7ZGlzcGxheTpibG9jazttYXJnaW46MDtib3JkZXI6MDtwYWRkaW5nOjFweDt3aWR0aDoxcHg7em9vbToxXCIsYi5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLnN0eWxlLndpZHRoPVwiNXB4XCIsYT0zIT09Yi5vZmZzZXRXaWR0aCksYy5yZW1vdmVDaGlsZChlKSxhKTp2b2lkIDB9fSgpO3ZhciBUPS9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZSxVPW5ldyBSZWdFeHAoXCJeKD86KFsrLV0pPXwpKFwiK1QrXCIpKFthLXolXSopJFwiLFwiaVwiKSxWPVtcIlRvcFwiLFwiUmlnaHRcIixcIkJvdHRvbVwiLFwiTGVmdFwiXSxXPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9Ynx8YSxcIm5vbmVcIj09PW4uY3NzKGEsXCJkaXNwbGF5XCIpfHwhbi5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSl9O2Z1bmN0aW9uIFgoYSxiLGMsZCl7dmFyIGUsZj0xLGc9MjAsaD1kP2Z1bmN0aW9uKCl7cmV0dXJuIGQuY3VyKCl9OmZ1bmN0aW9uKCl7cmV0dXJuIG4uY3NzKGEsYixcIlwiKX0saT1oKCksaj1jJiZjWzNdfHwobi5jc3NOdW1iZXJbYl0/XCJcIjpcInB4XCIpLGs9KG4uY3NzTnVtYmVyW2JdfHxcInB4XCIhPT1qJiYraSkmJlUuZXhlYyhuLmNzcyhhLGIpKTtpZihrJiZrWzNdIT09ail7aj1qfHxrWzNdLGM9Y3x8W10saz0raXx8MTtkbyBmPWZ8fFwiLjVcIixrLz1mLG4uc3R5bGUoYSxiLGsraik7d2hpbGUoZiE9PShmPWgoKS9pKSYmMSE9PWYmJi0tZyl9cmV0dXJuIGMmJihrPStrfHwraXx8MCxlPWNbMV0/aysoY1sxXSsxKSpjWzJdOitjWzJdLGQmJihkLnVuaXQ9aixkLnN0YXJ0PWssZC5lbmQ9ZSkpLGV9dmFyIFk9ZnVuY3Rpb24oYSxiLGMsZCxlLGYsZyl7dmFyIGg9MCxpPWEubGVuZ3RoLGo9bnVsbD09YztpZihcIm9iamVjdFwiPT09bi50eXBlKGMpKXtlPSEwO2ZvcihoIGluIGMpWShhLGIsaCxjW2hdLCEwLGYsZyl9ZWxzZSBpZih2b2lkIDAhPT1kJiYoZT0hMCxuLmlzRnVuY3Rpb24oZCl8fChnPSEwKSxqJiYoZz8oYi5jYWxsKGEsZCksYj1udWxsKTooaj1iLGI9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBqLmNhbGwobihhKSxjKX0pKSxiKSlmb3IoO2k+aDtoKyspYihhW2hdLGMsZz9kOmQuY2FsbChhW2hdLGgsYihhW2hdLGMpKSk7cmV0dXJuIGU/YTpqP2IuY2FsbChhKTppP2IoYVswXSxjKTpmfSxaPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pLCQ9LzwoW1xcdzotXSspLyxfPS9eJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2ksYWE9L15cXHMrLyxiYT1cImFiYnJ8YXJ0aWNsZXxhc2lkZXxhdWRpb3xiZGl8Y2FudmFzfGRhdGF8ZGF0YWxpc3R8ZGV0YWlsc3xkaWFsb2d8ZmlnY2FwdGlvbnxmaWd1cmV8Zm9vdGVyfGhlYWRlcnxoZ3JvdXB8bWFpbnxtYXJrfG1ldGVyfG5hdnxvdXRwdXR8cGljdHVyZXxwcm9ncmVzc3xzZWN0aW9ufHN1bW1hcnl8dGVtcGxhdGV8dGltZXx2aWRlb1wiO2Z1bmN0aW9uIGNhKGEpe3ZhciBiPWJhLnNwbGl0KFwifFwiKSxjPWEuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2lmKGMuY3JlYXRlRWxlbWVudCl3aGlsZShiLmxlbmd0aCljLmNyZWF0ZUVsZW1lbnQoYi5wb3AoKSk7cmV0dXJuIGN9IWZ1bmN0aW9uKCl7dmFyIGE9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGI9ZC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksYz1kLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTthLmlubmVySFRNTD1cIiAgPGxpbmsvPjx0YWJsZT48L3RhYmxlPjxhIGhyZWY9Jy9hJz5hPC9hPjxpbnB1dCB0eXBlPSdjaGVja2JveCcvPlwiLGwubGVhZGluZ1doaXRlc3BhY2U9Mz09PWEuZmlyc3RDaGlsZC5ub2RlVHlwZSxsLnRib2R5PSFhLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGJvZHlcIikubGVuZ3RoLGwuaHRtbFNlcmlhbGl6ZT0hIWEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaW5rXCIpLmxlbmd0aCxsLmh0bWw1Q2xvbmU9XCI8Om5hdj48LzpuYXY+XCIhPT1kLmNyZWF0ZUVsZW1lbnQoXCJuYXZcIikuY2xvbmVOb2RlKCEwKS5vdXRlckhUTUwsYy50eXBlPVwiY2hlY2tib3hcIixjLmNoZWNrZWQ9ITAsYi5hcHBlbmRDaGlsZChjKSxsLmFwcGVuZENoZWNrZWQ9Yy5jaGVja2VkLGEuaW5uZXJIVE1MPVwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiLGwubm9DbG9uZUNoZWNrZWQ9ISFhLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZSxiLmFwcGVuZENoaWxkKGEpLGM9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKSxjLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIixcImNoZWNrZWRcIiksYy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0XCIpLGEuYXBwZW5kQ2hpbGQoYyksbC5jaGVja0Nsb25lPWEuY2xvbmVOb2RlKCEwKS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5jaGVja2VkLGwubm9DbG9uZUV2ZW50PSEhYS5hZGRFdmVudExpc3RlbmVyLGFbbi5leHBhbmRvXT0xLGwuYXR0cmlidXRlcz0hYS5nZXRBdHRyaWJ1dGUobi5leHBhbmRvKX0oKTt2YXIgZGE9e29wdGlvbjpbMSxcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIixcIjwvc2VsZWN0PlwiXSxsZWdlbmQ6WzEsXCI8ZmllbGRzZXQ+XCIsXCI8L2ZpZWxkc2V0PlwiXSxhcmVhOlsxLFwiPG1hcD5cIixcIjwvbWFwPlwiXSxwYXJhbTpbMSxcIjxvYmplY3Q+XCIsXCI8L29iamVjdD5cIl0sdGhlYWQ6WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48dGJvZHk+PC90Ym9keT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRkOlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sX2RlZmF1bHQ6bC5odG1sU2VyaWFsaXplP1swLFwiXCIsXCJcIl06WzEsXCJYPGRpdj5cIixcIjwvZGl2PlwiXX07ZGEub3B0Z3JvdXA9ZGEub3B0aW9uLGRhLnRib2R5PWRhLnRmb290PWRhLmNvbGdyb3VwPWRhLmNhcHRpb249ZGEudGhlYWQsZGEudGg9ZGEudGQ7ZnVuY3Rpb24gZWEoYSxiKXt2YXIgYyxkLGU9MCxmPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEVsZW1lbnRzQnlUYWdOYW1lP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYnx8XCIqXCIpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLnF1ZXJ5U2VsZWN0b3JBbGw/YS5xdWVyeVNlbGVjdG9yQWxsKGJ8fFwiKlwiKTp2b2lkIDA7aWYoIWYpZm9yKGY9W10sYz1hLmNoaWxkTm9kZXN8fGE7bnVsbCE9KGQ9Y1tlXSk7ZSsrKSFifHxuLm5vZGVOYW1lKGQsYik/Zi5wdXNoKGQpOm4ubWVyZ2UoZixlYShkLGIpKTtyZXR1cm4gdm9pZCAwPT09Ynx8YiYmbi5ub2RlTmFtZShhLGIpP24ubWVyZ2UoW2FdLGYpOmZ9ZnVuY3Rpb24gZmEoYSxiKXtmb3IodmFyIGMsZD0wO251bGwhPShjPWFbZF0pO2QrKyluLl9kYXRhKGMsXCJnbG9iYWxFdmFsXCIsIWJ8fG4uX2RhdGEoYltkXSxcImdsb2JhbEV2YWxcIikpfXZhciBnYT0vPHwmIz9cXHcrOy8saGE9Lzx0Ym9keS9pO2Z1bmN0aW9uIGlhKGEpe1oudGVzdChhLnR5cGUpJiYoYS5kZWZhdWx0Q2hlY2tlZD1hLmNoZWNrZWQpfWZ1bmN0aW9uIGphKGEsYixjLGQsZSl7Zm9yKHZhciBmLGcsaCxpLGosayxtLG89YS5sZW5ndGgscD1jYShiKSxxPVtdLHI9MDtvPnI7cisrKWlmKGc9YVtyXSxnfHwwPT09ZylpZihcIm9iamVjdFwiPT09bi50eXBlKGcpKW4ubWVyZ2UocSxnLm5vZGVUeXBlP1tnXTpnKTtlbHNlIGlmKGdhLnRlc3QoZykpe2k9aXx8cC5hcHBlbmRDaGlsZChiLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGo9KCQuZXhlYyhnKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCksbT1kYVtqXXx8ZGEuX2RlZmF1bHQsaS5pbm5lckhUTUw9bVsxXStuLmh0bWxQcmVmaWx0ZXIoZykrbVsyXSxmPW1bMF07d2hpbGUoZi0tKWk9aS5sYXN0Q2hpbGQ7aWYoIWwubGVhZGluZ1doaXRlc3BhY2UmJmFhLnRlc3QoZykmJnEucHVzaChiLmNyZWF0ZVRleHROb2RlKGFhLmV4ZWMoZylbMF0pKSwhbC50Ym9keSl7Zz1cInRhYmxlXCIhPT1qfHxoYS50ZXN0KGcpP1wiPHRhYmxlPlwiIT09bVsxXXx8aGEudGVzdChnKT8wOmk6aS5maXJzdENoaWxkLGY9ZyYmZy5jaGlsZE5vZGVzLmxlbmd0aDt3aGlsZShmLS0pbi5ub2RlTmFtZShrPWcuY2hpbGROb2Rlc1tmXSxcInRib2R5XCIpJiYhay5jaGlsZE5vZGVzLmxlbmd0aCYmZy5yZW1vdmVDaGlsZChrKX1uLm1lcmdlKHEsaS5jaGlsZE5vZGVzKSxpLnRleHRDb250ZW50PVwiXCI7d2hpbGUoaS5maXJzdENoaWxkKWkucmVtb3ZlQ2hpbGQoaS5maXJzdENoaWxkKTtpPXAubGFzdENoaWxkfWVsc2UgcS5wdXNoKGIuY3JlYXRlVGV4dE5vZGUoZykpO2kmJnAucmVtb3ZlQ2hpbGQoaSksbC5hcHBlbmRDaGVja2VkfHxuLmdyZXAoZWEocSxcImlucHV0XCIpLGlhKSxyPTA7d2hpbGUoZz1xW3IrK10paWYoZCYmbi5pbkFycmF5KGcsZCk+LTEpZSYmZS5wdXNoKGcpO2Vsc2UgaWYoaD1uLmNvbnRhaW5zKGcub3duZXJEb2N1bWVudCxnKSxpPWVhKHAuYXBwZW5kQ2hpbGQoZyksXCJzY3JpcHRcIiksaCYmZmEoaSksYyl7Zj0wO3doaWxlKGc9aVtmKytdKV8udGVzdChnLnR5cGV8fFwiXCIpJiZjLnB1c2goZyl9cmV0dXJuIGk9bnVsbCxwfSFmdW5jdGlvbigpe3ZhciBiLGMsZT1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Zm9yKGIgaW57c3VibWl0OiEwLGNoYW5nZTohMCxmb2N1c2luOiEwfSljPVwib25cIitiLChsW2JdPWMgaW4gYSl8fChlLnNldEF0dHJpYnV0ZShjLFwidFwiKSxsW2JdPWUuYXR0cmlidXRlc1tjXS5leHBhbmRvPT09ITEpO2U9bnVsbH0oKTt2YXIga2E9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWEpJC9pLGxhPS9ea2V5LyxtYT0vXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnV8ZHJhZ3xkcm9wKXxjbGljay8sbmE9L14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvLG9hPS9eKFteLl0qKSg/OlxcLiguKyl8KS87ZnVuY3Rpb24gcGEoKXtyZXR1cm4hMH1mdW5jdGlvbiBxYSgpe3JldHVybiExfWZ1bmN0aW9uIHJhKCl7dHJ5e3JldHVybiBkLmFjdGl2ZUVsZW1lbnR9Y2F0Y2goYSl7fX1mdW5jdGlvbiBzYShhLGIsYyxkLGUsZil7dmFyIGcsaDtpZihcIm9iamVjdFwiPT10eXBlb2YgYil7XCJzdHJpbmdcIiE9dHlwZW9mIGMmJihkPWR8fGMsYz12b2lkIDApO2ZvcihoIGluIGIpc2EoYSxoLGMsZCxiW2hdLGYpO3JldHVybiBhfWlmKG51bGw9PWQmJm51bGw9PWU/KGU9YyxkPWM9dm9pZCAwKTpudWxsPT1lJiYoXCJzdHJpbmdcIj09dHlwZW9mIGM/KGU9ZCxkPXZvaWQgMCk6KGU9ZCxkPWMsYz12b2lkIDApKSxlPT09ITEpZT1xYTtlbHNlIGlmKCFlKXJldHVybiBhO3JldHVybiAxPT09ZiYmKGc9ZSxlPWZ1bmN0aW9uKGEpe3JldHVybiBuKCkub2ZmKGEpLGcuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxlLmd1aWQ9Zy5ndWlkfHwoZy5ndWlkPW4uZ3VpZCsrKSksYS5lYWNoKGZ1bmN0aW9uKCl7bi5ldmVudC5hZGQodGhpcyxiLGUsZCxjKX0pfW4uZXZlbnQ9e2dsb2JhbDp7fSxhZGQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaSxqLGssbCxtLG8scCxxLHI9bi5fZGF0YShhKTtpZihyKXtjLmhhbmRsZXImJihpPWMsYz1pLmhhbmRsZXIsZT1pLnNlbGVjdG9yKSxjLmd1aWR8fChjLmd1aWQ9bi5ndWlkKyspLChnPXIuZXZlbnRzKXx8KGc9ci5ldmVudHM9e30pLChrPXIuaGFuZGxlKXx8KGs9ci5oYW5kbGU9ZnVuY3Rpb24oYSl7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIG58fGEmJm4uZXZlbnQudHJpZ2dlcmVkPT09YS50eXBlP3ZvaWQgMDpuLmV2ZW50LmRpc3BhdGNoLmFwcGx5KGsuZWxlbSxhcmd1bWVudHMpfSxrLmVsZW09YSksYj0oYnx8XCJcIikubWF0Y2goRyl8fFtcIlwiXSxoPWIubGVuZ3RoO3doaWxlKGgtLSlmPW9hLmV4ZWMoYltoXSl8fFtdLG89cT1mWzFdLHA9KGZbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbyYmKGo9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxvPShlP2ouZGVsZWdhdGVUeXBlOmouYmluZFR5cGUpfHxvLGo9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxsPW4uZXh0ZW5kKHt0eXBlOm8sb3JpZ1R5cGU6cSxkYXRhOmQsaGFuZGxlcjpjLGd1aWQ6Yy5ndWlkLHNlbGVjdG9yOmUsbmVlZHNDb250ZXh0OmUmJm4uZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChlKSxuYW1lc3BhY2U6cC5qb2luKFwiLlwiKX0saSksKG09Z1tvXSl8fChtPWdbb109W10sbS5kZWxlZ2F0ZUNvdW50PTAsai5zZXR1cCYmai5zZXR1cC5jYWxsKGEsZCxwLGspIT09ITF8fChhLmFkZEV2ZW50TGlzdGVuZXI/YS5hZGRFdmVudExpc3RlbmVyKG8saywhMSk6YS5hdHRhY2hFdmVudCYmYS5hdHRhY2hFdmVudChcIm9uXCIrbyxrKSkpLGouYWRkJiYoai5hZGQuY2FsbChhLGwpLGwuaGFuZGxlci5ndWlkfHwobC5oYW5kbGVyLmd1aWQ9Yy5ndWlkKSksZT9tLnNwbGljZShtLmRlbGVnYXRlQ291bnQrKywwLGwpOm0ucHVzaChsKSxuLmV2ZW50Lmdsb2JhbFtvXT0hMCk7YT1udWxsfX0scmVtb3ZlOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxvLHAscSxyPW4uaGFzRGF0YShhKSYmbi5fZGF0YShhKTtpZihyJiYoaz1yLmV2ZW50cykpe2I9KGJ8fFwiXCIpLm1hdGNoKEcpfHxbXCJcIl0saj1iLmxlbmd0aDt3aGlsZShqLS0paWYoaD1vYS5leGVjKGJbal0pfHxbXSxvPXE9aFsxXSxwPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG8pe2w9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxvPShkP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxvLG09a1tvXXx8W10saD1oWzJdJiZuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrcC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIiksaT1mPW0ubGVuZ3RoO3doaWxlKGYtLSlnPW1bZl0sIWUmJnEhPT1nLm9yaWdUeXBlfHxjJiZjLmd1aWQhPT1nLmd1aWR8fGgmJiFoLnRlc3QoZy5uYW1lc3BhY2UpfHxkJiZkIT09Zy5zZWxlY3RvciYmKFwiKipcIiE9PWR8fCFnLnNlbGVjdG9yKXx8KG0uc3BsaWNlKGYsMSksZy5zZWxlY3RvciYmbS5kZWxlZ2F0ZUNvdW50LS0sbC5yZW1vdmUmJmwucmVtb3ZlLmNhbGwoYSxnKSk7aSYmIW0ubGVuZ3RoJiYobC50ZWFyZG93biYmbC50ZWFyZG93bi5jYWxsKGEscCxyLmhhbmRsZSkhPT0hMXx8bi5yZW1vdmVFdmVudChhLG8sci5oYW5kbGUpLGRlbGV0ZSBrW29dKX1lbHNlIGZvcihvIGluIGspbi5ldmVudC5yZW1vdmUoYSxvK2Jbal0sYyxkLCEwKTtuLmlzRW1wdHlPYmplY3QoaykmJihkZWxldGUgci5oYW5kbGUsbi5fcmVtb3ZlRGF0YShhLFwiZXZlbnRzXCIpKX19LHRyaWdnZXI6ZnVuY3Rpb24oYixjLGUsZil7dmFyIGcsaCxpLGosbCxtLG8scD1bZXx8ZF0scT1rLmNhbGwoYixcInR5cGVcIik/Yi50eXBlOmIscj1rLmNhbGwoYixcIm5hbWVzcGFjZVwiKT9iLm5hbWVzcGFjZS5zcGxpdChcIi5cIik6W107aWYoaT1tPWU9ZXx8ZCwzIT09ZS5ub2RlVHlwZSYmOCE9PWUubm9kZVR5cGUmJiFuYS50ZXN0KHErbi5ldmVudC50cmlnZ2VyZWQpJiYocS5pbmRleE9mKFwiLlwiKT4tMSYmKHI9cS5zcGxpdChcIi5cIikscT1yLnNoaWZ0KCksci5zb3J0KCkpLGg9cS5pbmRleE9mKFwiOlwiKTwwJiZcIm9uXCIrcSxiPWJbbi5leHBhbmRvXT9iOm5ldyBuLkV2ZW50KHEsXCJvYmplY3RcIj09dHlwZW9mIGImJmIpLGIuaXNUcmlnZ2VyPWY/MjozLGIubmFtZXNwYWNlPXIuam9pbihcIi5cIiksYi5ybmFtZXNwYWNlPWIubmFtZXNwYWNlP25ldyBSZWdFeHAoXCIoXnxcXFxcLilcIityLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKTpudWxsLGIucmVzdWx0PXZvaWQgMCxiLnRhcmdldHx8KGIudGFyZ2V0PWUpLGM9bnVsbD09Yz9bYl06bi5tYWtlQXJyYXkoYyxbYl0pLGw9bi5ldmVudC5zcGVjaWFsW3FdfHx7fSxmfHwhbC50cmlnZ2VyfHxsLnRyaWdnZXIuYXBwbHkoZSxjKSE9PSExKSl7aWYoIWYmJiFsLm5vQnViYmxlJiYhbi5pc1dpbmRvdyhlKSl7Zm9yKGo9bC5kZWxlZ2F0ZVR5cGV8fHEsbmEudGVzdChqK3EpfHwoaT1pLnBhcmVudE5vZGUpO2k7aT1pLnBhcmVudE5vZGUpcC5wdXNoKGkpLG09aTttPT09KGUub3duZXJEb2N1bWVudHx8ZCkmJnAucHVzaChtLmRlZmF1bHRWaWV3fHxtLnBhcmVudFdpbmRvd3x8YSl9bz0wO3doaWxlKChpPXBbbysrXSkmJiFiLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpYi50eXBlPW8+MT9qOmwuYmluZFR5cGV8fHEsZz0obi5fZGF0YShpLFwiZXZlbnRzXCIpfHx7fSlbYi50eXBlXSYmbi5fZGF0YShpLFwiaGFuZGxlXCIpLGcmJmcuYXBwbHkoaSxjKSxnPWgmJmlbaF0sZyYmZy5hcHBseSYmTShpKSYmKGIucmVzdWx0PWcuYXBwbHkoaSxjKSxiLnJlc3VsdD09PSExJiZiLnByZXZlbnREZWZhdWx0KCkpO2lmKGIudHlwZT1xLCFmJiYhYi5pc0RlZmF1bHRQcmV2ZW50ZWQoKSYmKCFsLl9kZWZhdWx0fHxsLl9kZWZhdWx0LmFwcGx5KHAucG9wKCksYyk9PT0hMSkmJk0oZSkmJmgmJmVbcV0mJiFuLmlzV2luZG93KGUpKXttPWVbaF0sbSYmKGVbaF09bnVsbCksbi5ldmVudC50cmlnZ2VyZWQ9cTt0cnl7ZVtxXSgpfWNhdGNoKHMpe31uLmV2ZW50LnRyaWdnZXJlZD12b2lkIDAsbSYmKGVbaF09bSl9cmV0dXJuIGIucmVzdWx0fX0sZGlzcGF0Y2g6ZnVuY3Rpb24oYSl7YT1uLmV2ZW50LmZpeChhKTt2YXIgYixjLGQsZixnLGg9W10saT1lLmNhbGwoYXJndW1lbnRzKSxqPShuLl9kYXRhKHRoaXMsXCJldmVudHNcIil8fHt9KVthLnR5cGVdfHxbXSxrPW4uZXZlbnQuc3BlY2lhbFthLnR5cGVdfHx7fTtpZihpWzBdPWEsYS5kZWxlZ2F0ZVRhcmdldD10aGlzLCFrLnByZURpc3BhdGNofHxrLnByZURpc3BhdGNoLmNhbGwodGhpcyxhKSE9PSExKXtoPW4uZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLGEsaiksYj0wO3doaWxlKChmPWhbYisrXSkmJiFhLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpe2EuY3VycmVudFRhcmdldD1mLmVsZW0sYz0wO3doaWxlKChnPWYuaGFuZGxlcnNbYysrXSkmJiFhLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpYS5ybmFtZXNwYWNlJiYhYS5ybmFtZXNwYWNlLnRlc3QoZy5uYW1lc3BhY2UpfHwoYS5oYW5kbGVPYmo9ZyxhLmRhdGE9Zy5kYXRhLGQ9KChuLmV2ZW50LnNwZWNpYWxbZy5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fGcuaGFuZGxlcikuYXBwbHkoZi5lbGVtLGkpLHZvaWQgMCE9PWQmJihhLnJlc3VsdD1kKT09PSExJiYoYS5wcmV2ZW50RGVmYXVsdCgpLGEuc3RvcFByb3BhZ2F0aW9uKCkpKX1yZXR1cm4gay5wb3N0RGlzcGF0Y2gmJmsucG9zdERpc3BhdGNoLmNhbGwodGhpcyxhKSxhLnJlc3VsdH19LGhhbmRsZXJzOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGYsZz1bXSxoPWIuZGVsZWdhdGVDb3VudCxpPWEudGFyZ2V0O2lmKGgmJmkubm9kZVR5cGUmJihcImNsaWNrXCIhPT1hLnR5cGV8fGlzTmFOKGEuYnV0dG9uKXx8YS5idXR0b248MSkpZm9yKDtpIT10aGlzO2k9aS5wYXJlbnROb2RlfHx0aGlzKWlmKDE9PT1pLm5vZGVUeXBlJiYoaS5kaXNhYmxlZCE9PSEwfHxcImNsaWNrXCIhPT1hLnR5cGUpKXtmb3IoZD1bXSxjPTA7aD5jO2MrKylmPWJbY10sZT1mLnNlbGVjdG9yK1wiIFwiLHZvaWQgMD09PWRbZV0mJihkW2VdPWYubmVlZHNDb250ZXh0P24oZSx0aGlzKS5pbmRleChpKT4tMTpuLmZpbmQoZSx0aGlzLG51bGwsW2ldKS5sZW5ndGgpLGRbZV0mJmQucHVzaChmKTtkLmxlbmd0aCYmZy5wdXNoKHtlbGVtOmksaGFuZGxlcnM6ZH0pfXJldHVybiBoPGIubGVuZ3RoJiZnLnB1c2goe2VsZW06dGhpcyxoYW5kbGVyczpiLnNsaWNlKGgpfSksZ30sZml4OmZ1bmN0aW9uKGEpe2lmKGFbbi5leHBhbmRvXSlyZXR1cm4gYTt2YXIgYixjLGUsZj1hLnR5cGUsZz1hLGg9dGhpcy5maXhIb29rc1tmXTtofHwodGhpcy5maXhIb29rc1tmXT1oPW1hLnRlc3QoZik/dGhpcy5tb3VzZUhvb2tzOmxhLnRlc3QoZik/dGhpcy5rZXlIb29rczp7fSksZT1oLnByb3BzP3RoaXMucHJvcHMuY29uY2F0KGgucHJvcHMpOnRoaXMucHJvcHMsYT1uZXcgbi5FdmVudChnKSxiPWUubGVuZ3RoO3doaWxlKGItLSljPWVbYl0sYVtjXT1nW2NdO3JldHVybiBhLnRhcmdldHx8KGEudGFyZ2V0PWcuc3JjRWxlbWVudHx8ZCksMz09PWEudGFyZ2V0Lm5vZGVUeXBlJiYoYS50YXJnZXQ9YS50YXJnZXQucGFyZW50Tm9kZSksYS5tZXRhS2V5PSEhYS5tZXRhS2V5LGguZmlsdGVyP2guZmlsdGVyKGEsZyk6YX0scHJvcHM6XCJhbHRLZXkgYnViYmxlcyBjYW5jZWxhYmxlIGN0cmxLZXkgY3VycmVudFRhcmdldCBkZXRhaWwgZXZlbnRQaGFzZSBtZXRhS2V5IHJlbGF0ZWRUYXJnZXQgc2hpZnRLZXkgdGFyZ2V0IHRpbWVTdGFtcCB2aWV3IHdoaWNoXCIuc3BsaXQoXCIgXCIpLGZpeEhvb2tzOnt9LGtleUhvb2tzOntwcm9wczpcImNoYXIgY2hhckNvZGUga2V5IGtleUNvZGVcIi5zcGxpdChcIiBcIiksZmlsdGVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIG51bGw9PWEud2hpY2gmJihhLndoaWNoPW51bGwhPWIuY2hhckNvZGU/Yi5jaGFyQ29kZTpiLmtleUNvZGUpLGF9fSxtb3VzZUhvb2tzOntwcm9wczpcImJ1dHRvbiBidXR0b25zIGNsaWVudFggY2xpZW50WSBmcm9tRWxlbWVudCBvZmZzZXRYIG9mZnNldFkgcGFnZVggcGFnZVkgc2NyZWVuWCBzY3JlZW5ZIHRvRWxlbWVudFwiLnNwbGl0KFwiIFwiKSxmaWx0ZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYyxlLGYsZz1iLmJ1dHRvbixoPWIuZnJvbUVsZW1lbnQ7cmV0dXJuIG51bGw9PWEucGFnZVgmJm51bGwhPWIuY2xpZW50WCYmKGU9YS50YXJnZXQub3duZXJEb2N1bWVudHx8ZCxmPWUuZG9jdW1lbnRFbGVtZW50LGM9ZS5ib2R5LGEucGFnZVg9Yi5jbGllbnRYKyhmJiZmLnNjcm9sbExlZnR8fGMmJmMuc2Nyb2xsTGVmdHx8MCktKGYmJmYuY2xpZW50TGVmdHx8YyYmYy5jbGllbnRMZWZ0fHwwKSxhLnBhZ2VZPWIuY2xpZW50WSsoZiYmZi5zY3JvbGxUb3B8fGMmJmMuc2Nyb2xsVG9wfHwwKS0oZiYmZi5jbGllbnRUb3B8fGMmJmMuY2xpZW50VG9wfHwwKSksIWEucmVsYXRlZFRhcmdldCYmaCYmKGEucmVsYXRlZFRhcmdldD1oPT09YS50YXJnZXQ/Yi50b0VsZW1lbnQ6aCksYS53aGljaHx8dm9pZCAwPT09Z3x8KGEud2hpY2g9MSZnPzE6MiZnPzM6NCZnPzI6MCksYX19LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxmb2N1czp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKHRoaXMhPT1yYSgpJiZ0aGlzLmZvY3VzKXRyeXtyZXR1cm4gdGhpcy5mb2N1cygpLCExfWNhdGNoKGEpe319LGRlbGVnYXRlVHlwZTpcImZvY3VzaW5cIn0sYmx1cjp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzPT09cmEoKSYmdGhpcy5ibHVyPyh0aGlzLmJsdXIoKSwhMSk6dm9pZCAwfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c291dFwifSxjbGljazp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiBuLm5vZGVOYW1lKHRoaXMsXCJpbnB1dFwiKSYmXCJjaGVja2JveFwiPT09dGhpcy50eXBlJiZ0aGlzLmNsaWNrPyh0aGlzLmNsaWNrKCksITEpOnZvaWQgMH0sX2RlZmF1bHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG4ubm9kZU5hbWUoYS50YXJnZXQsXCJhXCIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oYSl7dm9pZCAwIT09YS5yZXN1bHQmJmEub3JpZ2luYWxFdmVudCYmKGEub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1hLnJlc3VsdCl9fX0sc2ltdWxhdGU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPW4uZXh0ZW5kKG5ldyBuLkV2ZW50LGMse3R5cGU6YSxpc1NpbXVsYXRlZDohMH0pO24uZXZlbnQudHJpZ2dlcihkLG51bGwsYiksZC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSYmYy5wcmV2ZW50RGVmYXVsdCgpfX0sbi5yZW1vdmVFdmVudD1kLnJlbW92ZUV2ZW50TGlzdGVuZXI/ZnVuY3Rpb24oYSxiLGMpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lciYmYS5yZW1vdmVFdmVudExpc3RlbmVyKGIsYyl9OmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1cIm9uXCIrYjthLmRldGFjaEV2ZW50JiYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIGFbZF0mJihhW2RdPW51bGwpLGEuZGV0YWNoRXZlbnQoZCxjKSl9LG4uRXZlbnQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIG4uRXZlbnQ/KGEmJmEudHlwZT8odGhpcy5vcmlnaW5hbEV2ZW50PWEsdGhpcy50eXBlPWEudHlwZSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1hLmRlZmF1bHRQcmV2ZW50ZWR8fHZvaWQgMD09PWEuZGVmYXVsdFByZXZlbnRlZCYmYS5yZXR1cm5WYWx1ZT09PSExP3BhOnFhKTp0aGlzLnR5cGU9YSxiJiZuLmV4dGVuZCh0aGlzLGIpLHRoaXMudGltZVN0YW1wPWEmJmEudGltZVN0YW1wfHxuLm5vdygpLHZvaWQodGhpc1tuLmV4cGFuZG9dPSEwKSk6bmV3IG4uRXZlbnQoYSxiKX0sbi5FdmVudC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOm4uRXZlbnQsaXNEZWZhdWx0UHJldmVudGVkOnFhLGlzUHJvcGFnYXRpb25TdG9wcGVkOnFhLGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOnFhLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPXBhLGEmJihhLnByZXZlbnREZWZhdWx0P2EucHJldmVudERlZmF1bHQoKTphLnJldHVyblZhbHVlPSExKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9cGEsYSYmIXRoaXMuaXNTaW11bGF0ZWQmJihhLnN0b3BQcm9wYWdhdGlvbiYmYS5zdG9wUHJvcGFnYXRpb24oKSxhLmNhbmNlbEJ1YmJsZT0hMCl9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPXBhLGEmJmEuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uJiZhLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHRoaXMuc3RvcFByb3BhZ2F0aW9uKCl9fSxuLmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIixwb2ludGVyZW50ZXI6XCJwb2ludGVyb3ZlclwiLHBvaW50ZXJsZWF2ZTpcInBvaW50ZXJvdXRcIn0sZnVuY3Rpb24oYSxiKXtuLmV2ZW50LnNwZWNpYWxbYV09e2RlbGVnYXRlVHlwZTpiLGJpbmRUeXBlOmIsaGFuZGxlOmZ1bmN0aW9uKGEpe3ZhciBjLGQ9dGhpcyxlPWEucmVsYXRlZFRhcmdldCxmPWEuaGFuZGxlT2JqO3JldHVybiBlJiYoZT09PWR8fG4uY29udGFpbnMoZCxlKSl8fChhLnR5cGU9Zi5vcmlnVHlwZSxjPWYuaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyksYS50eXBlPWIpLGN9fX0pLGwuc3VibWl0fHwobi5ldmVudC5zcGVjaWFsLnN1Ym1pdD17c2V0dXA6ZnVuY3Rpb24oKXtyZXR1cm4gbi5ub2RlTmFtZSh0aGlzLFwiZm9ybVwiKT8hMTp2b2lkIG4uZXZlbnQuYWRkKHRoaXMsXCJjbGljay5fc3VibWl0IGtleXByZXNzLl9zdWJtaXRcIixmdW5jdGlvbihhKXt2YXIgYj1hLnRhcmdldCxjPW4ubm9kZU5hbWUoYixcImlucHV0XCIpfHxuLm5vZGVOYW1lKGIsXCJidXR0b25cIik/bi5wcm9wKGIsXCJmb3JtXCIpOnZvaWQgMDtjJiYhbi5fZGF0YShjLFwic3VibWl0XCIpJiYobi5ldmVudC5hZGQoYyxcInN1Ym1pdC5fc3VibWl0XCIsZnVuY3Rpb24oYSl7YS5fc3VibWl0QnViYmxlPSEwfSksbi5fZGF0YShjLFwic3VibWl0XCIsITApKX0pfSxwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oYSl7YS5fc3VibWl0QnViYmxlJiYoZGVsZXRlIGEuX3N1Ym1pdEJ1YmJsZSx0aGlzLnBhcmVudE5vZGUmJiFhLmlzVHJpZ2dlciYmbi5ldmVudC5zaW11bGF0ZShcInN1Ym1pdFwiLHRoaXMucGFyZW50Tm9kZSxhKSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7cmV0dXJuIG4ubm9kZU5hbWUodGhpcyxcImZvcm1cIik/ITE6dm9pZCBuLmV2ZW50LnJlbW92ZSh0aGlzLFwiLl9zdWJtaXRcIil9fSksbC5jaGFuZ2V8fChuLmV2ZW50LnNwZWNpYWwuY2hhbmdlPXtzZXR1cDpmdW5jdGlvbigpe3JldHVybiBrYS50ZXN0KHRoaXMubm9kZU5hbWUpPyhcImNoZWNrYm94XCIhPT10aGlzLnR5cGUmJlwicmFkaW9cIiE9PXRoaXMudHlwZXx8KG4uZXZlbnQuYWRkKHRoaXMsXCJwcm9wZXJ0eWNoYW5nZS5fY2hhbmdlXCIsZnVuY3Rpb24oYSl7XCJjaGVja2VkXCI9PT1hLm9yaWdpbmFsRXZlbnQucHJvcGVydHlOYW1lJiYodGhpcy5fanVzdENoYW5nZWQ9ITApfSksbi5ldmVudC5hZGQodGhpcyxcImNsaWNrLl9jaGFuZ2VcIixmdW5jdGlvbihhKXt0aGlzLl9qdXN0Q2hhbmdlZCYmIWEuaXNUcmlnZ2VyJiYodGhpcy5fanVzdENoYW5nZWQ9ITEpLG4uZXZlbnQuc2ltdWxhdGUoXCJjaGFuZ2VcIix0aGlzLGEpfSkpLCExKTp2b2lkIG4uZXZlbnQuYWRkKHRoaXMsXCJiZWZvcmVhY3RpdmF0ZS5fY2hhbmdlXCIsZnVuY3Rpb24oYSl7dmFyIGI9YS50YXJnZXQ7a2EudGVzdChiLm5vZGVOYW1lKSYmIW4uX2RhdGEoYixcImNoYW5nZVwiKSYmKG4uZXZlbnQuYWRkKGIsXCJjaGFuZ2UuX2NoYW5nZVwiLGZ1bmN0aW9uKGEpeyF0aGlzLnBhcmVudE5vZGV8fGEuaXNTaW11bGF0ZWR8fGEuaXNUcmlnZ2VyfHxuLmV2ZW50LnNpbXVsYXRlKFwiY2hhbmdlXCIsdGhpcy5wYXJlbnROb2RlLGEpfSksbi5fZGF0YShiLFwiY2hhbmdlXCIsITApKX0pfSxoYW5kbGU6ZnVuY3Rpb24oYSl7dmFyIGI9YS50YXJnZXQ7cmV0dXJuIHRoaXMhPT1ifHxhLmlzU2ltdWxhdGVkfHxhLmlzVHJpZ2dlcnx8XCJyYWRpb1wiIT09Yi50eXBlJiZcImNoZWNrYm94XCIhPT1iLnR5cGU/YS5oYW5kbGVPYmouaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dm9pZCAwfSx0ZWFyZG93bjpmdW5jdGlvbigpe3JldHVybiBuLmV2ZW50LnJlbW92ZSh0aGlzLFwiLl9jaGFuZ2VcIiksIWthLnRlc3QodGhpcy5ub2RlTmFtZSl9fSksbC5mb2N1c2lufHxuLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPWZ1bmN0aW9uKGEpe24uZXZlbnQuc2ltdWxhdGUoYixhLnRhcmdldCxuLmV2ZW50LmZpeChhKSl9O24uZXZlbnQuc3BlY2lhbFtiXT17c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZD10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsZT1uLl9kYXRhKGQsYik7ZXx8ZC5hZGRFdmVudExpc3RlbmVyKGEsYywhMCksbi5fZGF0YShkLGIsKGV8fDApKzEpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3ZhciBkPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxlPW4uX2RhdGEoZCxiKS0xO2U/bi5fZGF0YShkLGIsZSk6KGQucmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGMsITApLG4uX3JlbW92ZURhdGEoZCxiKSl9fX0pLG4uZm4uZXh0ZW5kKHtvbjpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gc2EodGhpcyxhLGIsYyxkKX0sb25lOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiBzYSh0aGlzLGEsYixjLGQsMSl9LG9mZjpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZTtpZihhJiZhLnByZXZlbnREZWZhdWx0JiZhLmhhbmRsZU9iailyZXR1cm4gZD1hLmhhbmRsZU9iaixuKGEuZGVsZWdhdGVUYXJnZXQpLm9mZihkLm5hbWVzcGFjZT9kLm9yaWdUeXBlK1wiLlwiK2QubmFtZXNwYWNlOmQub3JpZ1R5cGUsZC5zZWxlY3RvcixkLmhhbmRsZXIpLHRoaXM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGEpe2ZvcihlIGluIGEpdGhpcy5vZmYoZSxiLGFbZV0pO3JldHVybiB0aGlzfXJldHVybiBiIT09ITEmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGJ8fChjPWIsYj12b2lkIDApLGM9PT0hMSYmKGM9cWEpLHRoaXMuZWFjaChmdW5jdGlvbigpe24uZXZlbnQucmVtb3ZlKHRoaXMsYSxjLGIpfSl9LHRyaWdnZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5ldmVudC50cmlnZ2VyKGEsYix0aGlzKX0pfSx0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXNbMF07cmV0dXJuIGM/bi5ldmVudC50cmlnZ2VyKGEsYixjLCEwKTp2b2lkIDB9fSk7dmFyIHRhPS8galF1ZXJ5XFxkKz1cIig/Om51bGx8XFxkKylcIi9nLHVhPW5ldyBSZWdFeHAoXCI8KD86XCIrYmErXCIpW1xcXFxzLz5dXCIsXCJpXCIpLHZhPS88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFtcXHc6LV0rKVtePl0qKVxcLz4vZ2ksd2E9LzxzY3JpcHR8PHN0eWxlfDxsaW5rL2kseGE9L2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSx5YT0vXnRydWVcXC8oLiopLyx6YT0vXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2csQWE9Y2EoZCksQmE9QWEuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtmdW5jdGlvbiBDYShhLGIpe3JldHVybiBuLm5vZGVOYW1lKGEsXCJ0YWJsZVwiKSYmbi5ub2RlTmFtZSgxMSE9PWIubm9kZVR5cGU/YjpiLmZpcnN0Q2hpbGQsXCJ0clwiKT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGJvZHlcIilbMF18fGEuYXBwZW5kQ2hpbGQoYS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKSk6YX1mdW5jdGlvbiBEYShhKXtyZXR1cm4gYS50eXBlPShudWxsIT09bi5maW5kLmF0dHIoYSxcInR5cGVcIikpK1wiL1wiK2EudHlwZSxhfWZ1bmN0aW9uIEVhKGEpe3ZhciBiPXlhLmV4ZWMoYS50eXBlKTtyZXR1cm4gYj9hLnR5cGU9YlsxXTphLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksYX1mdW5jdGlvbiBGYShhLGIpe2lmKDE9PT1iLm5vZGVUeXBlJiZuLmhhc0RhdGEoYSkpe3ZhciBjLGQsZSxmPW4uX2RhdGEoYSksZz1uLl9kYXRhKGIsZiksaD1mLmV2ZW50cztpZihoKXtkZWxldGUgZy5oYW5kbGUsZy5ldmVudHM9e307Zm9yKGMgaW4gaClmb3IoZD0wLGU9aFtjXS5sZW5ndGg7ZT5kO2QrKyluLmV2ZW50LmFkZChiLGMsaFtjXVtkXSl9Zy5kYXRhJiYoZy5kYXRhPW4uZXh0ZW5kKHt9LGcuZGF0YSkpfX1mdW5jdGlvbiBHYShhLGIpe3ZhciBjLGQsZTtpZigxPT09Yi5ub2RlVHlwZSl7aWYoYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCksIWwubm9DbG9uZUV2ZW50JiZiW24uZXhwYW5kb10pe2U9bi5fZGF0YShiKTtmb3IoZCBpbiBlLmV2ZW50cyluLnJlbW92ZUV2ZW50KGIsZCxlLmhhbmRsZSk7Yi5yZW1vdmVBdHRyaWJ1dGUobi5leHBhbmRvKX1cInNjcmlwdFwiPT09YyYmYi50ZXh0IT09YS50ZXh0PyhEYShiKS50ZXh0PWEudGV4dCxFYShiKSk6XCJvYmplY3RcIj09PWM/KGIucGFyZW50Tm9kZSYmKGIub3V0ZXJIVE1MPWEub3V0ZXJIVE1MKSxsLmh0bWw1Q2xvbmUmJmEuaW5uZXJIVE1MJiYhbi50cmltKGIuaW5uZXJIVE1MKSYmKGIuaW5uZXJIVE1MPWEuaW5uZXJIVE1MKSk6XCJpbnB1dFwiPT09YyYmWi50ZXN0KGEudHlwZSk/KGIuZGVmYXVsdENoZWNrZWQ9Yi5jaGVja2VkPWEuY2hlY2tlZCxiLnZhbHVlIT09YS52YWx1ZSYmKGIudmFsdWU9YS52YWx1ZSkpOlwib3B0aW9uXCI9PT1jP2IuZGVmYXVsdFNlbGVjdGVkPWIuc2VsZWN0ZWQ9YS5kZWZhdWx0U2VsZWN0ZWQ6XCJpbnB1dFwiIT09YyYmXCJ0ZXh0YXJlYVwiIT09Y3x8KGIuZGVmYXVsdFZhbHVlPWEuZGVmYXVsdFZhbHVlKX19ZnVuY3Rpb24gSGEoYSxiLGMsZCl7Yj1mLmFwcGx5KFtdLGIpO3ZhciBlLGcsaCxpLGosayxtPTAsbz1hLmxlbmd0aCxwPW8tMSxxPWJbMF0scj1uLmlzRnVuY3Rpb24ocSk7aWYocnx8bz4xJiZcInN0cmluZ1wiPT10eXBlb2YgcSYmIWwuY2hlY2tDbG9uZSYmeGEudGVzdChxKSlyZXR1cm4gYS5lYWNoKGZ1bmN0aW9uKGUpe3ZhciBmPWEuZXEoZSk7ciYmKGJbMF09cS5jYWxsKHRoaXMsZSxmLmh0bWwoKSkpLEhhKGYsYixjLGQpfSk7aWYobyYmKGs9amEoYixhWzBdLm93bmVyRG9jdW1lbnQsITEsYSxkKSxlPWsuZmlyc3RDaGlsZCwxPT09ay5jaGlsZE5vZGVzLmxlbmd0aCYmKGs9ZSksZXx8ZCkpe2ZvcihpPW4ubWFwKGVhKGssXCJzY3JpcHRcIiksRGEpLGg9aS5sZW5ndGg7bz5tO20rKylnPWssbSE9PXAmJihnPW4uY2xvbmUoZywhMCwhMCksaCYmbi5tZXJnZShpLGVhKGcsXCJzY3JpcHRcIikpKSxjLmNhbGwoYVttXSxnLG0pO2lmKGgpZm9yKGo9aVtpLmxlbmd0aC0xXS5vd25lckRvY3VtZW50LG4ubWFwKGksRWEpLG09MDtoPm07bSsrKWc9aVttXSxfLnRlc3QoZy50eXBlfHxcIlwiKSYmIW4uX2RhdGEoZyxcImdsb2JhbEV2YWxcIikmJm4uY29udGFpbnMoaixnKSYmKGcuc3JjP24uX2V2YWxVcmwmJm4uX2V2YWxVcmwoZy5zcmMpOm4uZ2xvYmFsRXZhbCgoZy50ZXh0fHxnLnRleHRDb250ZW50fHxnLmlubmVySFRNTHx8XCJcIikucmVwbGFjZSh6YSxcIlwiKSkpO2s9ZT1udWxsfXJldHVybiBhfWZ1bmN0aW9uIElhKGEsYixjKXtmb3IodmFyIGQsZT1iP24uZmlsdGVyKGIsYSk6YSxmPTA7bnVsbCE9KGQ9ZVtmXSk7ZisrKWN8fDEhPT1kLm5vZGVUeXBlfHxuLmNsZWFuRGF0YShlYShkKSksZC5wYXJlbnROb2RlJiYoYyYmbi5jb250YWlucyhkLm93bmVyRG9jdW1lbnQsZCkmJmZhKGVhKGQsXCJzY3JpcHRcIikpLGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkKSk7cmV0dXJuIGF9bi5leHRlbmQoe2h0bWxQcmVmaWx0ZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZSh2YSxcIjwkMT48LyQyPlwiKX0sY2xvbmU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGgsaT1uLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKTtpZihsLmh0bWw1Q2xvbmV8fG4uaXNYTUxEb2MoYSl8fCF1YS50ZXN0KFwiPFwiK2Eubm9kZU5hbWUrXCI+XCIpP2Y9YS5jbG9uZU5vZGUoITApOihCYS5pbm5lckhUTUw9YS5vdXRlckhUTUwsQmEucmVtb3ZlQ2hpbGQoZj1CYS5maXJzdENoaWxkKSksIShsLm5vQ2xvbmVFdmVudCYmbC5ub0Nsb25lQ2hlY2tlZHx8MSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZXx8bi5pc1hNTERvYyhhKSkpZm9yKGQ9ZWEoZiksaD1lYShhKSxnPTA7bnVsbCE9KGU9aFtnXSk7KytnKWRbZ10mJkdhKGUsZFtnXSk7aWYoYilpZihjKWZvcihoPWh8fGVhKGEpLGQ9ZHx8ZWEoZiksZz0wO251bGwhPShlPWhbZ10pO2crKylGYShlLGRbZ10pO2Vsc2UgRmEoYSxmKTtyZXR1cm4gZD1lYShmLFwic2NyaXB0XCIpLGQubGVuZ3RoPjAmJmZhKGQsIWkmJmVhKGEsXCJzY3JpcHRcIikpLGQ9aD1lPW51bGwsZn0sY2xlYW5EYXRhOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBkLGUsZixnLGg9MCxpPW4uZXhwYW5kbyxqPW4uY2FjaGUsaz1sLmF0dHJpYnV0ZXMsbT1uLmV2ZW50LnNwZWNpYWw7bnVsbCE9KGQ9YVtoXSk7aCsrKWlmKChifHxNKGQpKSYmKGY9ZFtpXSxnPWYmJmpbZl0pKXtpZihnLmV2ZW50cylmb3IoZSBpbiBnLmV2ZW50cyltW2VdP24uZXZlbnQucmVtb3ZlKGQsZSk6bi5yZW1vdmVFdmVudChkLGUsZy5oYW5kbGUpO2pbZl0mJihkZWxldGUgaltmXSxrfHxcInVuZGVmaW5lZFwiPT10eXBlb2YgZC5yZW1vdmVBdHRyaWJ1dGU/ZFtpXT12b2lkIDA6ZC5yZW1vdmVBdHRyaWJ1dGUoaSksYy5wdXNoKGYpKX19fSksbi5mbi5leHRlbmQoe2RvbU1hbmlwOkhhLGRldGFjaDpmdW5jdGlvbihhKXtyZXR1cm4gSWEodGhpcyxhLCEwKX0scmVtb3ZlOmZ1bmN0aW9uKGEpe3JldHVybiBJYSh0aGlzLGEpfSx0ZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBZKHRoaXMsZnVuY3Rpb24oYSl7cmV0dXJuIHZvaWQgMD09PWE/bi50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5hcHBlbmQoKHRoaXNbMF0mJnRoaXNbMF0ub3duZXJEb2N1bWVudHx8ZCkuY3JlYXRlVGV4dE5vZGUoYSkpfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LGFwcGVuZDpmdW5jdGlvbigpe3JldHVybiBIYSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9Q2EodGhpcyxhKTtiLmFwcGVuZENoaWxkKGEpfX0pfSxwcmVwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIEhhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1DYSh0aGlzLGEpO2IuaW5zZXJ0QmVmb3JlKGEsYi5maXJzdENoaWxkKX19KX0sYmVmb3JlOmZ1bmN0aW9uKCl7cmV0dXJuIEhhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLHRoaXMpfSl9LGFmdGVyOmZ1bmN0aW9uKCl7cmV0dXJuIEhhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLHRoaXMubmV4dFNpYmxpbmcpfSl9LGVtcHR5OmZ1bmN0aW9uKCl7Zm9yKHZhciBhLGI9MDtudWxsIT0oYT10aGlzW2JdKTtiKyspezE9PT1hLm5vZGVUeXBlJiZuLmNsZWFuRGF0YShlYShhLCExKSk7d2hpbGUoYS5maXJzdENoaWxkKWEucmVtb3ZlQ2hpbGQoYS5maXJzdENoaWxkKTthLm9wdGlvbnMmJm4ubm9kZU5hbWUoYSxcInNlbGVjdFwiKSYmKGEub3B0aW9ucy5sZW5ndGg9MCl9cmV0dXJuIHRoaXN9LGNsb25lOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9bnVsbD09YT8hMTphLGI9bnVsbD09Yj9hOmIsdGhpcy5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gbi5jbG9uZSh0aGlzLGEsYil9KX0saHRtbDpmdW5jdGlvbihhKXtyZXR1cm4gWSh0aGlzLGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXNbMF18fHt9LGM9MCxkPXRoaXMubGVuZ3RoO2lmKHZvaWQgMD09PWEpcmV0dXJuIDE9PT1iLm5vZGVUeXBlP2IuaW5uZXJIVE1MLnJlcGxhY2UodGEsXCJcIik6dm9pZCAwO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiYhd2EudGVzdChhKSYmKGwuaHRtbFNlcmlhbGl6ZXx8IXVhLnRlc3QoYSkpJiYobC5sZWFkaW5nV2hpdGVzcGFjZXx8IWFhLnRlc3QoYSkpJiYhZGFbKCQuZXhlYyhhKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCldKXthPW4uaHRtbFByZWZpbHRlcihhKTt0cnl7Zm9yKDtkPmM7YysrKWI9dGhpc1tjXXx8e30sMT09PWIubm9kZVR5cGUmJihuLmNsZWFuRGF0YShlYShiLCExKSksYi5pbm5lckhUTUw9YSk7Yj0wfWNhdGNoKGUpe319YiYmdGhpcy5lbXB0eSgpLmFwcGVuZChhKX0sbnVsbCxhLGFyZ3VtZW50cy5sZW5ndGgpfSxyZXBsYWNlV2l0aDpmdW5jdGlvbigpe3ZhciBhPVtdO3JldHVybiBIYSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihiKXt2YXIgYz10aGlzLnBhcmVudE5vZGU7bi5pbkFycmF5KHRoaXMsYSk8MCYmKG4uY2xlYW5EYXRhKGVhKHRoaXMpKSxjJiZjLnJlcGxhY2VDaGlsZChiLHRoaXMpKX0sYSl9fSksbi5lYWNoKHthcHBlbmRUbzpcImFwcGVuZFwiLHByZXBlbmRUbzpcInByZXBlbmRcIixpbnNlcnRCZWZvcmU6XCJiZWZvcmVcIixpbnNlcnRBZnRlcjpcImFmdGVyXCIscmVwbGFjZUFsbDpcInJlcGxhY2VXaXRoXCJ9LGZ1bmN0aW9uKGEsYil7bi5mblthXT1mdW5jdGlvbihhKXtmb3IodmFyIGMsZD0wLGU9W10sZj1uKGEpLGg9Zi5sZW5ndGgtMTtoPj1kO2QrKyljPWQ9PT1oP3RoaXM6dGhpcy5jbG9uZSghMCksbihmW2RdKVtiXShjKSxnLmFwcGx5KGUsYy5nZXQoKSk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGUpfX0pO3ZhciBKYSxLYT17SFRNTDpcImJsb2NrXCIsQk9EWTpcImJsb2NrXCJ9O2Z1bmN0aW9uIExhKGEsYil7dmFyIGM9bihiLmNyZWF0ZUVsZW1lbnQoYSkpLmFwcGVuZFRvKGIuYm9keSksZD1uLmNzcyhjWzBdLFwiZGlzcGxheVwiKTtyZXR1cm4gYy5kZXRhY2goKSxkfWZ1bmN0aW9uIE1hKGEpe3ZhciBiPWQsYz1LYVthXTtyZXR1cm4gY3x8KGM9TGEoYSxiKSxcIm5vbmVcIiE9PWMmJmN8fChKYT0oSmF8fG4oXCI8aWZyYW1lIGZyYW1lYm9yZGVyPScwJyB3aWR0aD0nMCcgaGVpZ2h0PScwJy8+XCIpKS5hcHBlbmRUbyhiLmRvY3VtZW50RWxlbWVudCksYj0oSmFbMF0uY29udGVudFdpbmRvd3x8SmFbMF0uY29udGVudERvY3VtZW50KS5kb2N1bWVudCxiLndyaXRlKCksYi5jbG9zZSgpLGM9TGEoYSxiKSxKYS5kZXRhY2goKSksS2FbYV09YyksY312YXIgTmE9L15tYXJnaW4vLE9hPW5ldyBSZWdFeHAoXCJeKFwiK1QrXCIpKD8hcHgpW2EteiVdKyRcIixcImlcIiksUGE9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGUsZixnPXt9O2ZvcihmIGluIGIpZ1tmXT1hLnN0eWxlW2ZdLGEuc3R5bGVbZl09YltmXTtlPWMuYXBwbHkoYSxkfHxbXSk7Zm9yKGYgaW4gYilhLnN0eWxlW2ZdPWdbZl07cmV0dXJuIGV9LFFhPWQuZG9jdW1lbnRFbGVtZW50OyFmdW5jdGlvbigpe3ZhciBiLGMsZSxmLGcsaCxpPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxqPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpZihqLnN0eWxlKXtqLnN0eWxlLmNzc1RleHQ9XCJmbG9hdDpsZWZ0O29wYWNpdHk6LjVcIixsLm9wYWNpdHk9XCIwLjVcIj09PWouc3R5bGUub3BhY2l0eSxsLmNzc0Zsb2F0PSEhai5zdHlsZS5jc3NGbG9hdCxqLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiY29udGVudC1ib3hcIixqLmNsb25lTm9kZSghMCkuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJcIixsLmNsZWFyQ2xvbmVTdHlsZT1cImNvbnRlbnQtYm94XCI9PT1qLnN0eWxlLmJhY2tncm91bmRDbGlwLGk9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGkuc3R5bGUuY3NzVGV4dD1cImJvcmRlcjowO3dpZHRoOjhweDtoZWlnaHQ6MDt0b3A6MDtsZWZ0Oi05OTk5cHg7cGFkZGluZzowO21hcmdpbi10b3A6MXB4O3Bvc2l0aW9uOmFic29sdXRlXCIsai5pbm5lckhUTUw9XCJcIixpLmFwcGVuZENoaWxkKGopLGwuYm94U2l6aW5nPVwiXCI9PT1qLnN0eWxlLmJveFNpemluZ3x8XCJcIj09PWouc3R5bGUuTW96Qm94U2l6aW5nfHxcIlwiPT09ai5zdHlsZS5XZWJraXRCb3hTaXppbmcsbi5leHRlbmQobCx7cmVsaWFibGVIaWRkZW5PZmZzZXRzOmZ1bmN0aW9uKCl7cmV0dXJuIG51bGw9PWImJmsoKSxmfSxib3hTaXppbmdSZWxpYWJsZTpmdW5jdGlvbigpe3JldHVybiBudWxsPT1iJiZrKCksZX0scGl4ZWxNYXJnaW5SaWdodDpmdW5jdGlvbigpe3JldHVybiBudWxsPT1iJiZrKCksY30scGl4ZWxQb3NpdGlvbjpmdW5jdGlvbigpe3JldHVybiBudWxsPT1iJiZrKCksYn0scmVsaWFibGVNYXJnaW5SaWdodDpmdW5jdGlvbigpe3JldHVybiBudWxsPT1iJiZrKCksZ30scmVsaWFibGVNYXJnaW5MZWZ0OmZ1bmN0aW9uKCl7cmV0dXJuIG51bGw9PWImJmsoKSxofX0pO2Z1bmN0aW9uIGsoKXt2YXIgayxsLG09ZC5kb2N1bWVudEVsZW1lbnQ7bS5hcHBlbmRDaGlsZChpKSxqLnN0eWxlLmNzc1RleHQ9XCItd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jazttYXJnaW46YXV0bztib3JkZXI6MXB4O3BhZGRpbmc6MXB4O3RvcDoxJTt3aWR0aDo1MCVcIixiPWU9aD0hMSxjPWc9ITAsYS5nZXRDb21wdXRlZFN0eWxlJiYobD1hLmdldENvbXB1dGVkU3R5bGUoaiksYj1cIjElXCIhPT0obHx8e30pLnRvcCxoPVwiMnB4XCI9PT0obHx8e30pLm1hcmdpbkxlZnQsZT1cIjRweFwiPT09KGx8fHt3aWR0aDpcIjRweFwifSkud2lkdGgsai5zdHlsZS5tYXJnaW5SaWdodD1cIjUwJVwiLGM9XCI0cHhcIj09PShsfHx7bWFyZ2luUmlnaHQ6XCI0cHhcIn0pLm1hcmdpblJpZ2h0LGs9ai5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGsuc3R5bGUuY3NzVGV4dD1qLnN0eWxlLmNzc1RleHQ9XCItd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3g7LW1vei1ib3gtc2l6aW5nOmNvbnRlbnQtYm94O2JveC1zaXppbmc6Y29udGVudC1ib3g7ZGlzcGxheTpibG9jazttYXJnaW46MDtib3JkZXI6MDtwYWRkaW5nOjBcIixrLnN0eWxlLm1hcmdpblJpZ2h0PWsuc3R5bGUud2lkdGg9XCIwXCIsai5zdHlsZS53aWR0aD1cIjFweFwiLGc9IXBhcnNlRmxvYXQoKGEuZ2V0Q29tcHV0ZWRTdHlsZShrKXx8e30pLm1hcmdpblJpZ2h0KSxqLnJlbW92ZUNoaWxkKGspKSxqLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsZj0wPT09ai5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCxmJiYoai5zdHlsZS5kaXNwbGF5PVwiXCIsai5pbm5lckhUTUw9XCI8dGFibGU+PHRyPjx0ZD48L3RkPjx0ZD50PC90ZD48L3RyPjwvdGFibGU+XCIsai5jaGlsZE5vZGVzWzBdLnN0eWxlLmJvcmRlckNvbGxhcHNlPVwic2VwYXJhdGVcIixrPWouZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZFwiKSxrWzBdLnN0eWxlLmNzc1RleHQ9XCJtYXJnaW46MDtib3JkZXI6MDtwYWRkaW5nOjA7ZGlzcGxheTpub25lXCIsZj0wPT09a1swXS5vZmZzZXRIZWlnaHQsZiYmKGtbMF0uc3R5bGUuZGlzcGxheT1cIlwiLGtbMV0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIixmPTA9PT1rWzBdLm9mZnNldEhlaWdodCkpLG0ucmVtb3ZlQ2hpbGQoaSl9fX0oKTt2YXIgUmEsU2EsVGE9L14odG9wfHJpZ2h0fGJvdHRvbXxsZWZ0KSQvO2EuZ2V0Q29tcHV0ZWRTdHlsZT8oUmE9ZnVuY3Rpb24oYil7dmFyIGM9Yi5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O3JldHVybiBjJiZjLm9wZW5lcnx8KGM9YSksYy5nZXRDb21wdXRlZFN0eWxlKGIpfSxTYT1mdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLnN0eWxlO3JldHVybiBjPWN8fFJhKGEpLGc9Yz9jLmdldFByb3BlcnR5VmFsdWUoYil8fGNbYl06dm9pZCAwLFwiXCIhPT1nJiZ2b2lkIDAhPT1nfHxuLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKXx8KGc9bi5zdHlsZShhLGIpKSxjJiYhbC5waXhlbE1hcmdpblJpZ2h0KCkmJk9hLnRlc3QoZykmJk5hLnRlc3QoYikmJihkPWgud2lkdGgsZT1oLm1pbldpZHRoLGY9aC5tYXhXaWR0aCxoLm1pbldpZHRoPWgubWF4V2lkdGg9aC53aWR0aD1nLGc9Yy53aWR0aCxoLndpZHRoPWQsaC5taW5XaWR0aD1lLGgubWF4V2lkdGg9Ziksdm9pZCAwPT09Zz9nOmcrXCJcIn0pOlFhLmN1cnJlbnRTdHlsZSYmKFJhPWZ1bmN0aW9uKGEpe3JldHVybiBhLmN1cnJlbnRTdHlsZX0sU2E9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5zdHlsZTtyZXR1cm4gYz1jfHxSYShhKSxnPWM/Y1tiXTp2b2lkIDAsbnVsbD09ZyYmaCYmaFtiXSYmKGc9aFtiXSksT2EudGVzdChnKSYmIVRhLnRlc3QoYikmJihkPWgubGVmdCxlPWEucnVudGltZVN0eWxlLGY9ZSYmZS5sZWZ0LGYmJihlLmxlZnQ9YS5jdXJyZW50U3R5bGUubGVmdCksaC5sZWZ0PVwiZm9udFNpemVcIj09PWI/XCIxZW1cIjpnLGc9aC5waXhlbExlZnQrXCJweFwiLGgubGVmdD1kLGYmJihlLmxlZnQ9ZikpLHZvaWQgMD09PWc/ZzpnK1wiXCJ8fFwiYXV0b1wifSk7ZnVuY3Rpb24gVWEoYSxiKXtyZXR1cm57Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGEoKT92b2lkIGRlbGV0ZSB0aGlzLmdldDoodGhpcy5nZXQ9YikuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19dmFyIFZhPS9hbHBoYVxcKFteKV0qXFwpL2ksV2E9L29wYWNpdHlcXHMqPVxccyooW14pXSopL2ksWGE9L14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLFlhPW5ldyBSZWdFeHAoXCJeKFwiK1QrXCIpKC4qKSRcIixcImlcIiksWmE9e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix2aXNpYmlsaXR5OlwiaGlkZGVuXCIsZGlzcGxheTpcImJsb2NrXCJ9LCRhPXtsZXR0ZXJTcGFjaW5nOlwiMFwiLGZvbnRXZWlnaHQ6XCI0MDBcIn0sX2E9W1wiV2Via2l0XCIsXCJPXCIsXCJNb3pcIixcIm1zXCJdLGFiPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZTtmdW5jdGlvbiBiYihhKXtpZihhIGluIGFiKXJldHVybiBhO3ZhciBiPWEuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrYS5zbGljZSgxKSxjPV9hLmxlbmd0aDt3aGlsZShjLS0paWYoYT1fYVtjXStiLGEgaW4gYWIpcmV0dXJuIGF9ZnVuY3Rpb24gY2IoYSxiKXtmb3IodmFyIGMsZCxlLGY9W10sZz0wLGg9YS5sZW5ndGg7aD5nO2crKylkPWFbZ10sZC5zdHlsZSYmKGZbZ109bi5fZGF0YShkLFwib2xkZGlzcGxheVwiKSxjPWQuc3R5bGUuZGlzcGxheSxiPyhmW2ddfHxcIm5vbmVcIiE9PWN8fChkLnN0eWxlLmRpc3BsYXk9XCJcIiksXCJcIj09PWQuc3R5bGUuZGlzcGxheSYmVyhkKSYmKGZbZ109bi5fZGF0YShkLFwib2xkZGlzcGxheVwiLE1hKGQubm9kZU5hbWUpKSkpOihlPVcoZCksKGMmJlwibm9uZVwiIT09Y3x8IWUpJiZuLl9kYXRhKGQsXCJvbGRkaXNwbGF5XCIsZT9jOm4uY3NzKGQsXCJkaXNwbGF5XCIpKSkpO2ZvcihnPTA7aD5nO2crKylkPWFbZ10sZC5zdHlsZSYmKGImJlwibm9uZVwiIT09ZC5zdHlsZS5kaXNwbGF5JiZcIlwiIT09ZC5zdHlsZS5kaXNwbGF5fHwoZC5zdHlsZS5kaXNwbGF5PWI/ZltnXXx8XCJcIjpcIm5vbmVcIikpO3JldHVybiBhfWZ1bmN0aW9uIGRiKGEsYixjKXt2YXIgZD1ZYS5leGVjKGIpO3JldHVybiBkP01hdGgubWF4KDAsZFsxXS0oY3x8MCkpKyhkWzJdfHxcInB4XCIpOmJ9ZnVuY3Rpb24gZWIoYSxiLGMsZCxlKXtmb3IodmFyIGY9Yz09PShkP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpPzQ6XCJ3aWR0aFwiPT09Yj8xOjAsZz0wOzQ+ZjtmKz0yKVwibWFyZ2luXCI9PT1jJiYoZys9bi5jc3MoYSxjK1ZbZl0sITAsZSkpLGQ/KFwiY29udGVudFwiPT09YyYmKGctPW4uY3NzKGEsXCJwYWRkaW5nXCIrVltmXSwhMCxlKSksXCJtYXJnaW5cIiE9PWMmJihnLT1uLmNzcyhhLFwiYm9yZGVyXCIrVltmXStcIldpZHRoXCIsITAsZSkpKTooZys9bi5jc3MoYSxcInBhZGRpbmdcIitWW2ZdLCEwLGUpLFwicGFkZGluZ1wiIT09YyYmKGcrPW4uY3NzKGEsXCJib3JkZXJcIitWW2ZdK1wiV2lkdGhcIiwhMCxlKSkpO3JldHVybiBnfWZ1bmN0aW9uIGZiKGEsYixjKXt2YXIgZD0hMCxlPVwid2lkdGhcIj09PWI/YS5vZmZzZXRXaWR0aDphLm9mZnNldEhlaWdodCxmPVJhKGEpLGc9bC5ib3hTaXppbmcmJlwiYm9yZGVyLWJveFwiPT09bi5jc3MoYSxcImJveFNpemluZ1wiLCExLGYpO2lmKDA+PWV8fG51bGw9PWUpe2lmKGU9U2EoYSxiLGYpLCgwPmV8fG51bGw9PWUpJiYoZT1hLnN0eWxlW2JdKSxPYS50ZXN0KGUpKXJldHVybiBlO2Q9ZyYmKGwuYm94U2l6aW5nUmVsaWFibGUoKXx8ZT09PWEuc3R5bGVbYl0pLGU9cGFyc2VGbG9hdChlKXx8MH1yZXR1cm4gZStlYihhLGIsY3x8KGc/XCJib3JkZXJcIjpcImNvbnRlbnRcIiksZCxmKStcInB4XCJ9bi5leHRlbmQoe2Nzc0hvb2tzOntvcGFjaXR5OntnZXQ6ZnVuY3Rpb24oYSxiKXtpZihiKXt2YXIgYz1TYShhLFwib3BhY2l0eVwiKTtyZXR1cm5cIlwiPT09Yz9cIjFcIjpjfX19fSxjc3NOdW1iZXI6e2FuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiEwLGNvbHVtbkNvdW50OiEwLGZpbGxPcGFjaXR5OiEwLGZsZXhHcm93OiEwLGZsZXhTaHJpbms6ITAsZm9udFdlaWdodDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITB9LGNzc1Byb3BzOntcImZsb2F0XCI6bC5jc3NGbG9hdD9cImNzc0Zsb2F0XCI6XCJzdHlsZUZsb2F0XCJ9LHN0eWxlOmZ1bmN0aW9uKGEsYixjLGQpe2lmKGEmJjMhPT1hLm5vZGVUeXBlJiY4IT09YS5ub2RlVHlwZSYmYS5zdHlsZSl7dmFyIGUsZixnLGg9bi5jYW1lbENhc2UoYiksaT1hLnN0eWxlO2lmKGI9bi5jc3NQcm9wc1toXXx8KG4uY3NzUHJvcHNbaF09YmIoaCl8fGgpLGc9bi5jc3NIb29rc1tiXXx8bi5jc3NIb29rc1toXSx2b2lkIDA9PT1jKXJldHVybiBnJiZcImdldFwiaW4gZyYmdm9pZCAwIT09KGU9Zy5nZXQoYSwhMSxkKSk/ZTppW2JdO2lmKGY9dHlwZW9mIGMsXCJzdHJpbmdcIj09PWYmJihlPVUuZXhlYyhjKSkmJmVbMV0mJihjPVgoYSxiLGUpLGY9XCJudW1iZXJcIiksbnVsbCE9YyYmYz09PWMmJihcIm51bWJlclwiPT09ZiYmKGMrPWUmJmVbM118fChuLmNzc051bWJlcltoXT9cIlwiOlwicHhcIikpLGwuY2xlYXJDbG9uZVN0eWxlfHxcIlwiIT09Y3x8MCE9PWIuaW5kZXhPZihcImJhY2tncm91bmRcIil8fChpW2JdPVwiaW5oZXJpdFwiKSwhKGcmJlwic2V0XCJpbiBnJiZ2b2lkIDA9PT0oYz1nLnNldChhLGMsZCkpKSkpdHJ5e2lbYl09Y31jYXRjaChqKXt9fX0sY3NzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZyxoPW4uY2FtZWxDYXNlKGIpO3JldHVybiBiPW4uY3NzUHJvcHNbaF18fChuLmNzc1Byb3BzW2hdPWJiKGgpfHxoKSxnPW4uY3NzSG9va3NbYl18fG4uY3NzSG9va3NbaF0sZyYmXCJnZXRcImluIGcmJihmPWcuZ2V0KGEsITAsYykpLHZvaWQgMD09PWYmJihmPVNhKGEsYixkKSksXCJub3JtYWxcIj09PWYmJmIgaW4gJGEmJihmPSRhW2JdKSxcIlwiPT09Y3x8Yz8oZT1wYXJzZUZsb2F0KGYpLGM9PT0hMHx8aXNGaW5pdGUoZSk/ZXx8MDpmKTpmfX0pLG4uZWFjaChbXCJoZWlnaHRcIixcIndpZHRoXCJdLGZ1bmN0aW9uKGEsYil7bi5jc3NIb29rc1tiXT17Z2V0OmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gYz9YYS50ZXN0KG4uY3NzKGEsXCJkaXNwbGF5XCIpKSYmMD09PWEub2Zmc2V0V2lkdGg/UGEoYSxaYSxmdW5jdGlvbigpe3JldHVybiBmYihhLGIsZCl9KTpmYihhLGIsZCk6dm9pZCAwfSxzZXQ6ZnVuY3Rpb24oYSxjLGQpe3ZhciBlPWQmJlJhKGEpO3JldHVybiBkYihhLGMsZD9lYihhLGIsZCxsLmJveFNpemluZyYmXCJib3JkZXItYm94XCI9PT1uLmNzcyhhLFwiYm94U2l6aW5nXCIsITEsZSksZSk6MCl9fX0pLGwub3BhY2l0eXx8KG4uY3NzSG9va3Mub3BhY2l0eT17Z2V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIFdhLnRlc3QoKGImJmEuY3VycmVudFN0eWxlP2EuY3VycmVudFN0eWxlLmZpbHRlcjphLnN0eWxlLmZpbHRlcil8fFwiXCIpPy4wMSpwYXJzZUZsb2F0KFJlZ0V4cC4kMSkrXCJcIjpiP1wiMVwiOlwiXCJ9LHNldDpmdW5jdGlvbihhLGIpe3ZhciBjPWEuc3R5bGUsZD1hLmN1cnJlbnRTdHlsZSxlPW4uaXNOdW1lcmljKGIpP1wiYWxwaGEob3BhY2l0eT1cIisxMDAqYitcIilcIjpcIlwiLGY9ZCYmZC5maWx0ZXJ8fGMuZmlsdGVyfHxcIlwiO2Muem9vbT0xLChiPj0xfHxcIlwiPT09YikmJlwiXCI9PT1uLnRyaW0oZi5yZXBsYWNlKFZhLFwiXCIpKSYmYy5yZW1vdmVBdHRyaWJ1dGUmJihjLnJlbW92ZUF0dHJpYnV0ZShcImZpbHRlclwiKSxcIlwiPT09Ynx8ZCYmIWQuZmlsdGVyKXx8KGMuZmlsdGVyPVZhLnRlc3QoZik/Zi5yZXBsYWNlKFZhLGUpOmYrXCIgXCIrZSl9fSksbi5jc3NIb29rcy5tYXJnaW5SaWdodD1VYShsLnJlbGlhYmxlTWFyZ2luUmlnaHQsZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj9QYShhLHtkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCJ9LFNhLFthLFwibWFyZ2luUmlnaHRcIl0pOnZvaWQgMH0pLG4uY3NzSG9va3MubWFyZ2luTGVmdD1VYShsLnJlbGlhYmxlTWFyZ2luTGVmdCxmdW5jdGlvbihhLGIpe3JldHVybiBiPyhwYXJzZUZsb2F0KFNhKGEsXCJtYXJnaW5MZWZ0XCIpKXx8KG4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpP2EuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdC1QYShhLHtcbm1hcmdpbkxlZnQ6MH0sZnVuY3Rpb24oKXtyZXR1cm4gYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0fSk6MCkpK1wicHhcIjp2b2lkIDB9KSxuLmVhY2goe21hcmdpbjpcIlwiLHBhZGRpbmc6XCJcIixib3JkZXI6XCJXaWR0aFwifSxmdW5jdGlvbihhLGIpe24uY3NzSG9va3NbYStiXT17ZXhwYW5kOmZ1bmN0aW9uKGMpe2Zvcih2YXIgZD0wLGU9e30sZj1cInN0cmluZ1wiPT10eXBlb2YgYz9jLnNwbGl0KFwiIFwiKTpbY107ND5kO2QrKyllW2ErVltkXStiXT1mW2RdfHxmW2QtMl18fGZbMF07cmV0dXJuIGV9fSxOYS50ZXN0KGEpfHwobi5jc3NIb29rc1thK2JdLnNldD1kYil9KSxuLmZuLmV4dGVuZCh7Y3NzOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFkodGhpcyxmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPXt9LGc9MDtpZihuLmlzQXJyYXkoYikpe2ZvcihkPVJhKGEpLGU9Yi5sZW5ndGg7ZT5nO2crKylmW2JbZ11dPW4uY3NzKGEsYltnXSwhMSxkKTtyZXR1cm4gZn1yZXR1cm4gdm9pZCAwIT09Yz9uLnN0eWxlKGEsYixjKTpuLmNzcyhhLGIpfSxhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0sc2hvdzpmdW5jdGlvbigpe3JldHVybiBjYih0aGlzLCEwKX0saGlkZTpmdW5jdGlvbigpe3JldHVybiBjYih0aGlzKX0sdG9nZ2xlOmZ1bmN0aW9uKGEpe3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgYT9hP3RoaXMuc2hvdygpOnRoaXMuaGlkZSgpOnRoaXMuZWFjaChmdW5jdGlvbigpe1codGhpcyk/bih0aGlzKS5zaG93KCk6bih0aGlzKS5oaWRlKCl9KX19KTtmdW5jdGlvbiBnYihhLGIsYyxkLGUpe3JldHVybiBuZXcgZ2IucHJvdG90eXBlLmluaXQoYSxiLGMsZCxlKX1uLlR3ZWVuPWdiLGdiLnByb3RvdHlwZT17Y29uc3RydWN0b3I6Z2IsaW5pdDpmdW5jdGlvbihhLGIsYyxkLGUsZil7dGhpcy5lbGVtPWEsdGhpcy5wcm9wPWMsdGhpcy5lYXNpbmc9ZXx8bi5lYXNpbmcuX2RlZmF1bHQsdGhpcy5vcHRpb25zPWIsdGhpcy5zdGFydD10aGlzLm5vdz10aGlzLmN1cigpLHRoaXMuZW5kPWQsdGhpcy51bml0PWZ8fChuLmNzc051bWJlcltjXT9cIlwiOlwicHhcIil9LGN1cjpmdW5jdGlvbigpe3ZhciBhPWdiLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiBhJiZhLmdldD9hLmdldCh0aGlzKTpnYi5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpfSxydW46ZnVuY3Rpb24oYSl7dmFyIGIsYz1nYi5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gdGhpcy5vcHRpb25zLmR1cmF0aW9uP3RoaXMucG9zPWI9bi5lYXNpbmdbdGhpcy5lYXNpbmddKGEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKmEsMCwxLHRoaXMub3B0aW9ucy5kdXJhdGlvbik6dGhpcy5wb3M9Yj1hLHRoaXMubm93PSh0aGlzLmVuZC10aGlzLnN0YXJ0KSpiK3RoaXMuc3RhcnQsdGhpcy5vcHRpb25zLnN0ZXAmJnRoaXMub3B0aW9ucy5zdGVwLmNhbGwodGhpcy5lbGVtLHRoaXMubm93LHRoaXMpLGMmJmMuc2V0P2Muc2V0KHRoaXMpOmdiLnByb3BIb29rcy5fZGVmYXVsdC5zZXQodGhpcyksdGhpc319LGdiLnByb3RvdHlwZS5pbml0LnByb3RvdHlwZT1nYi5wcm90b3R5cGUsZ2IucHJvcEhvb2tzPXtfZGVmYXVsdDp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiAxIT09YS5lbGVtLm5vZGVUeXBlfHxudWxsIT1hLmVsZW1bYS5wcm9wXSYmbnVsbD09YS5lbGVtLnN0eWxlW2EucHJvcF0/YS5lbGVtW2EucHJvcF06KGI9bi5jc3MoYS5lbGVtLGEucHJvcCxcIlwiKSxiJiZcImF1dG9cIiE9PWI/YjowKX0sc2V0OmZ1bmN0aW9uKGEpe24uZnguc3RlcFthLnByb3BdP24uZnguc3RlcFthLnByb3BdKGEpOjEhPT1hLmVsZW0ubm9kZVR5cGV8fG51bGw9PWEuZWxlbS5zdHlsZVtuLmNzc1Byb3BzW2EucHJvcF1dJiYhbi5jc3NIb29rc1thLnByb3BdP2EuZWxlbVthLnByb3BdPWEubm93Om4uc3R5bGUoYS5lbGVtLGEucHJvcCxhLm5vdythLnVuaXQpfX19LGdiLnByb3BIb29rcy5zY3JvbGxUb3A9Z2IucHJvcEhvb2tzLnNjcm9sbExlZnQ9e3NldDpmdW5jdGlvbihhKXthLmVsZW0ubm9kZVR5cGUmJmEuZWxlbS5wYXJlbnROb2RlJiYoYS5lbGVtW2EucHJvcF09YS5ub3cpfX0sbi5lYXNpbmc9e2xpbmVhcjpmdW5jdGlvbihhKXtyZXR1cm4gYX0sc3dpbmc6ZnVuY3Rpb24oYSl7cmV0dXJuLjUtTWF0aC5jb3MoYSpNYXRoLlBJKS8yfSxfZGVmYXVsdDpcInN3aW5nXCJ9LG4uZng9Z2IucHJvdG90eXBlLmluaXQsbi5meC5zdGVwPXt9O3ZhciBoYixpYixqYj0vXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8sa2I9L3F1ZXVlSG9va3MkLztmdW5jdGlvbiBsYigpe3JldHVybiBhLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtoYj12b2lkIDB9KSxoYj1uLm5vdygpfWZ1bmN0aW9uIG1iKGEsYil7dmFyIGMsZD17aGVpZ2h0OmF9LGU9MDtmb3IoYj1iPzE6MDs0PmU7ZSs9Mi1iKWM9VltlXSxkW1wibWFyZ2luXCIrY109ZFtcInBhZGRpbmdcIitjXT1hO3JldHVybiBiJiYoZC5vcGFjaXR5PWQud2lkdGg9YSksZH1mdW5jdGlvbiBuYihhLGIsYyl7Zm9yKHZhciBkLGU9KHFiLnR3ZWVuZXJzW2JdfHxbXSkuY29uY2F0KHFiLnR3ZWVuZXJzW1wiKlwiXSksZj0wLGc9ZS5sZW5ndGg7Zz5mO2YrKylpZihkPWVbZl0uY2FsbChjLGIsYSkpcmV0dXJuIGR9ZnVuY3Rpb24gb2IoYSxiLGMpe3ZhciBkLGUsZixnLGgsaSxqLGssbT10aGlzLG89e30scD1hLnN0eWxlLHE9YS5ub2RlVHlwZSYmVyhhKSxyPW4uX2RhdGEoYSxcImZ4c2hvd1wiKTtjLnF1ZXVlfHwoaD1uLl9xdWV1ZUhvb2tzKGEsXCJmeFwiKSxudWxsPT1oLnVucXVldWVkJiYoaC51bnF1ZXVlZD0wLGk9aC5lbXB0eS5maXJlLGguZW1wdHkuZmlyZT1mdW5jdGlvbigpe2gudW5xdWV1ZWR8fGkoKX0pLGgudW5xdWV1ZWQrKyxtLmFsd2F5cyhmdW5jdGlvbigpe20uYWx3YXlzKGZ1bmN0aW9uKCl7aC51bnF1ZXVlZC0tLG4ucXVldWUoYSxcImZ4XCIpLmxlbmd0aHx8aC5lbXB0eS5maXJlKCl9KX0pKSwxPT09YS5ub2RlVHlwZSYmKFwiaGVpZ2h0XCJpbiBifHxcIndpZHRoXCJpbiBiKSYmKGMub3ZlcmZsb3c9W3Aub3ZlcmZsb3cscC5vdmVyZmxvd1gscC5vdmVyZmxvd1ldLGo9bi5jc3MoYSxcImRpc3BsYXlcIiksaz1cIm5vbmVcIj09PWo/bi5fZGF0YShhLFwib2xkZGlzcGxheVwiKXx8TWEoYS5ub2RlTmFtZSk6aixcImlubGluZVwiPT09ayYmXCJub25lXCI9PT1uLmNzcyhhLFwiZmxvYXRcIikmJihsLmlubGluZUJsb2NrTmVlZHNMYXlvdXQmJlwiaW5saW5lXCIhPT1NYShhLm5vZGVOYW1lKT9wLnpvb209MTpwLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIikpLGMub3ZlcmZsb3cmJihwLm92ZXJmbG93PVwiaGlkZGVuXCIsbC5zaHJpbmtXcmFwQmxvY2tzKCl8fG0uYWx3YXlzKGZ1bmN0aW9uKCl7cC5vdmVyZmxvdz1jLm92ZXJmbG93WzBdLHAub3ZlcmZsb3dYPWMub3ZlcmZsb3dbMV0scC5vdmVyZmxvd1k9Yy5vdmVyZmxvd1syXX0pKTtmb3IoZCBpbiBiKWlmKGU9YltkXSxqYi5leGVjKGUpKXtpZihkZWxldGUgYltkXSxmPWZ8fFwidG9nZ2xlXCI9PT1lLGU9PT0ocT9cImhpZGVcIjpcInNob3dcIikpe2lmKFwic2hvd1wiIT09ZXx8IXJ8fHZvaWQgMD09PXJbZF0pY29udGludWU7cT0hMH1vW2RdPXImJnJbZF18fG4uc3R5bGUoYSxkKX1lbHNlIGo9dm9pZCAwO2lmKG4uaXNFbXB0eU9iamVjdChvKSlcImlubGluZVwiPT09KFwibm9uZVwiPT09aj9NYShhLm5vZGVOYW1lKTpqKSYmKHAuZGlzcGxheT1qKTtlbHNle3I/XCJoaWRkZW5cImluIHImJihxPXIuaGlkZGVuKTpyPW4uX2RhdGEoYSxcImZ4c2hvd1wiLHt9KSxmJiYoci5oaWRkZW49IXEpLHE/bihhKS5zaG93KCk6bS5kb25lKGZ1bmN0aW9uKCl7bihhKS5oaWRlKCl9KSxtLmRvbmUoZnVuY3Rpb24oKXt2YXIgYjtuLl9yZW1vdmVEYXRhKGEsXCJmeHNob3dcIik7Zm9yKGIgaW4gbyluLnN0eWxlKGEsYixvW2JdKX0pO2ZvcihkIGluIG8pZz1uYihxP3JbZF06MCxkLG0pLGQgaW4gcnx8KHJbZF09Zy5zdGFydCxxJiYoZy5lbmQ9Zy5zdGFydCxnLnN0YXJ0PVwid2lkdGhcIj09PWR8fFwiaGVpZ2h0XCI9PT1kPzE6MCkpfX1mdW5jdGlvbiBwYihhLGIpe3ZhciBjLGQsZSxmLGc7Zm9yKGMgaW4gYSlpZihkPW4uY2FtZWxDYXNlKGMpLGU9YltkXSxmPWFbY10sbi5pc0FycmF5KGYpJiYoZT1mWzFdLGY9YVtjXT1mWzBdKSxjIT09ZCYmKGFbZF09ZixkZWxldGUgYVtjXSksZz1uLmNzc0hvb2tzW2RdLGcmJlwiZXhwYW5kXCJpbiBnKXtmPWcuZXhwYW5kKGYpLGRlbGV0ZSBhW2RdO2ZvcihjIGluIGYpYyBpbiBhfHwoYVtjXT1mW2NdLGJbY109ZSl9ZWxzZSBiW2RdPWV9ZnVuY3Rpb24gcWIoYSxiLGMpe3ZhciBkLGUsZj0wLGc9cWIucHJlZmlsdGVycy5sZW5ndGgsaD1uLkRlZmVycmVkKCkuYWx3YXlzKGZ1bmN0aW9uKCl7ZGVsZXRlIGkuZWxlbX0pLGk9ZnVuY3Rpb24oKXtpZihlKXJldHVybiExO2Zvcih2YXIgYj1oYnx8bGIoKSxjPU1hdGgubWF4KDAsai5zdGFydFRpbWUrai5kdXJhdGlvbi1iKSxkPWMvai5kdXJhdGlvbnx8MCxmPTEtZCxnPTAsaT1qLnR3ZWVucy5sZW5ndGg7aT5nO2crKylqLnR3ZWVuc1tnXS5ydW4oZik7cmV0dXJuIGgubm90aWZ5V2l0aChhLFtqLGYsY10pLDE+ZiYmaT9jOihoLnJlc29sdmVXaXRoKGEsW2pdKSwhMSl9LGo9aC5wcm9taXNlKHtlbGVtOmEscHJvcHM6bi5leHRlbmQoe30sYiksb3B0czpuLmV4dGVuZCghMCx7c3BlY2lhbEVhc2luZzp7fSxlYXNpbmc6bi5lYXNpbmcuX2RlZmF1bHR9LGMpLG9yaWdpbmFsUHJvcGVydGllczpiLG9yaWdpbmFsT3B0aW9uczpjLHN0YXJ0VGltZTpoYnx8bGIoKSxkdXJhdGlvbjpjLmR1cmF0aW9uLHR3ZWVuczpbXSxjcmVhdGVUd2VlbjpmdW5jdGlvbihiLGMpe3ZhciBkPW4uVHdlZW4oYSxqLm9wdHMsYixjLGoub3B0cy5zcGVjaWFsRWFzaW5nW2JdfHxqLm9wdHMuZWFzaW5nKTtyZXR1cm4gai50d2VlbnMucHVzaChkKSxkfSxzdG9wOmZ1bmN0aW9uKGIpe3ZhciBjPTAsZD1iP2oudHdlZW5zLmxlbmd0aDowO2lmKGUpcmV0dXJuIHRoaXM7Zm9yKGU9ITA7ZD5jO2MrKylqLnR3ZWVuc1tjXS5ydW4oMSk7cmV0dXJuIGI/KGgubm90aWZ5V2l0aChhLFtqLDEsMF0pLGgucmVzb2x2ZVdpdGgoYSxbaixiXSkpOmgucmVqZWN0V2l0aChhLFtqLGJdKSx0aGlzfX0pLGs9ai5wcm9wcztmb3IocGIoayxqLm9wdHMuc3BlY2lhbEVhc2luZyk7Zz5mO2YrKylpZihkPXFiLnByZWZpbHRlcnNbZl0uY2FsbChqLGEsayxqLm9wdHMpKXJldHVybiBuLmlzRnVuY3Rpb24oZC5zdG9wKSYmKG4uX3F1ZXVlSG9va3Moai5lbGVtLGoub3B0cy5xdWV1ZSkuc3RvcD1uLnByb3h5KGQuc3RvcCxkKSksZDtyZXR1cm4gbi5tYXAoayxuYixqKSxuLmlzRnVuY3Rpb24oai5vcHRzLnN0YXJ0KSYmai5vcHRzLnN0YXJ0LmNhbGwoYSxqKSxuLmZ4LnRpbWVyKG4uZXh0ZW5kKGkse2VsZW06YSxhbmltOmoscXVldWU6ai5vcHRzLnF1ZXVlfSkpLGoucHJvZ3Jlc3Moai5vcHRzLnByb2dyZXNzKS5kb25lKGoub3B0cy5kb25lLGoub3B0cy5jb21wbGV0ZSkuZmFpbChqLm9wdHMuZmFpbCkuYWx3YXlzKGoub3B0cy5hbHdheXMpfW4uQW5pbWF0aW9uPW4uZXh0ZW5kKHFiLHt0d2VlbmVyczp7XCIqXCI6W2Z1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5jcmVhdGVUd2VlbihhLGIpO3JldHVybiBYKGMuZWxlbSxhLFUuZXhlYyhiKSxjKSxjfV19LHR3ZWVuZXI6ZnVuY3Rpb24oYSxiKXtuLmlzRnVuY3Rpb24oYSk/KGI9YSxhPVtcIipcIl0pOmE9YS5tYXRjaChHKTtmb3IodmFyIGMsZD0wLGU9YS5sZW5ndGg7ZT5kO2QrKyljPWFbZF0scWIudHdlZW5lcnNbY109cWIudHdlZW5lcnNbY118fFtdLHFiLnR3ZWVuZXJzW2NdLnVuc2hpZnQoYil9LHByZWZpbHRlcnM6W29iXSxwcmVmaWx0ZXI6ZnVuY3Rpb24oYSxiKXtiP3FiLnByZWZpbHRlcnMudW5zaGlmdChhKTpxYi5wcmVmaWx0ZXJzLnB1c2goYSl9fSksbi5zcGVlZD1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YSYmXCJvYmplY3RcIj09dHlwZW9mIGE/bi5leHRlbmQoe30sYSk6e2NvbXBsZXRlOmN8fCFjJiZifHxuLmlzRnVuY3Rpb24oYSkmJmEsZHVyYXRpb246YSxlYXNpbmc6YyYmYnx8YiYmIW4uaXNGdW5jdGlvbihiKSYmYn07cmV0dXJuIGQuZHVyYXRpb249bi5meC5vZmY/MDpcIm51bWJlclwiPT10eXBlb2YgZC5kdXJhdGlvbj9kLmR1cmF0aW9uOmQuZHVyYXRpb24gaW4gbi5meC5zcGVlZHM/bi5meC5zcGVlZHNbZC5kdXJhdGlvbl06bi5meC5zcGVlZHMuX2RlZmF1bHQsbnVsbCE9ZC5xdWV1ZSYmZC5xdWV1ZSE9PSEwfHwoZC5xdWV1ZT1cImZ4XCIpLGQub2xkPWQuY29tcGxldGUsZC5jb21wbGV0ZT1mdW5jdGlvbigpe24uaXNGdW5jdGlvbihkLm9sZCkmJmQub2xkLmNhbGwodGhpcyksZC5xdWV1ZSYmbi5kZXF1ZXVlKHRoaXMsZC5xdWV1ZSl9LGR9LG4uZm4uZXh0ZW5kKHtmYWRlVG86ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMuZmlsdGVyKFcpLmNzcyhcIm9wYWNpdHlcIiwwKS5zaG93KCkuZW5kKCkuYW5pbWF0ZSh7b3BhY2l0eTpifSxhLGMsZCl9LGFuaW1hdGU6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9bi5pc0VtcHR5T2JqZWN0KGEpLGY9bi5zcGVlZChiLGMsZCksZz1mdW5jdGlvbigpe3ZhciBiPXFiKHRoaXMsbi5leHRlbmQoe30sYSksZik7KGV8fG4uX2RhdGEodGhpcyxcImZpbmlzaFwiKSkmJmIuc3RvcCghMCl9O3JldHVybiBnLmZpbmlzaD1nLGV8fGYucXVldWU9PT0hMT90aGlzLmVhY2goZyk6dGhpcy5xdWV1ZShmLnF1ZXVlLGcpfSxzdG9wOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1mdW5jdGlvbihhKXt2YXIgYj1hLnN0b3A7ZGVsZXRlIGEuc3RvcCxiKGMpfTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgYSYmKGM9YixiPWEsYT12b2lkIDApLGImJmEhPT0hMSYmdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiPSEwLGU9bnVsbCE9YSYmYStcInF1ZXVlSG9va3NcIixmPW4udGltZXJzLGc9bi5fZGF0YSh0aGlzKTtpZihlKWdbZV0mJmdbZV0uc3RvcCYmZChnW2VdKTtlbHNlIGZvcihlIGluIGcpZ1tlXSYmZ1tlXS5zdG9wJiZrYi50ZXN0KGUpJiZkKGdbZV0pO2ZvcihlPWYubGVuZ3RoO2UtLTspZltlXS5lbGVtIT09dGhpc3x8bnVsbCE9YSYmZltlXS5xdWV1ZSE9PWF8fChmW2VdLmFuaW0uc3RvcChjKSxiPSExLGYuc3BsaWNlKGUsMSkpOyFiJiZjfHxuLmRlcXVldWUodGhpcyxhKX0pfSxmaW5pc2g6ZnVuY3Rpb24oYSl7cmV0dXJuIGEhPT0hMSYmKGE9YXx8XCJmeFwiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYixjPW4uX2RhdGEodGhpcyksZD1jW2ErXCJxdWV1ZVwiXSxlPWNbYStcInF1ZXVlSG9va3NcIl0sZj1uLnRpbWVycyxnPWQ/ZC5sZW5ndGg6MDtmb3IoYy5maW5pc2g9ITAsbi5xdWV1ZSh0aGlzLGEsW10pLGUmJmUuc3RvcCYmZS5zdG9wLmNhbGwodGhpcywhMCksYj1mLmxlbmd0aDtiLS07KWZbYl0uZWxlbT09PXRoaXMmJmZbYl0ucXVldWU9PT1hJiYoZltiXS5hbmltLnN0b3AoITApLGYuc3BsaWNlKGIsMSkpO2ZvcihiPTA7Zz5iO2IrKylkW2JdJiZkW2JdLmZpbmlzaCYmZFtiXS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgYy5maW5pc2h9KX19KSxuLmVhY2goW1widG9nZ2xlXCIsXCJzaG93XCIsXCJoaWRlXCJdLGZ1bmN0aW9uKGEsYil7dmFyIGM9bi5mbltiXTtuLmZuW2JdPWZ1bmN0aW9uKGEsZCxlKXtyZXR1cm4gbnVsbD09YXx8XCJib29sZWFuXCI9PXR5cGVvZiBhP2MuYXBwbHkodGhpcyxhcmd1bWVudHMpOnRoaXMuYW5pbWF0ZShtYihiLCEwKSxhLGQsZSl9fSksbi5lYWNoKHtzbGlkZURvd246bWIoXCJzaG93XCIpLHNsaWRlVXA6bWIoXCJoaWRlXCIpLHNsaWRlVG9nZ2xlOm1iKFwidG9nZ2xlXCIpLGZhZGVJbjp7b3BhY2l0eTpcInNob3dcIn0sZmFkZU91dDp7b3BhY2l0eTpcImhpZGVcIn0sZmFkZVRvZ2dsZTp7b3BhY2l0eTpcInRvZ2dsZVwifX0sZnVuY3Rpb24oYSxiKXtuLmZuW2FdPWZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gdGhpcy5hbmltYXRlKGIsYSxjLGQpfX0pLG4udGltZXJzPVtdLG4uZngudGljaz1mdW5jdGlvbigpe3ZhciBhLGI9bi50aW1lcnMsYz0wO2ZvcihoYj1uLm5vdygpO2M8Yi5sZW5ndGg7YysrKWE9YltjXSxhKCl8fGJbY10hPT1hfHxiLnNwbGljZShjLS0sMSk7Yi5sZW5ndGh8fG4uZnguc3RvcCgpLGhiPXZvaWQgMH0sbi5meC50aW1lcj1mdW5jdGlvbihhKXtuLnRpbWVycy5wdXNoKGEpLGEoKT9uLmZ4LnN0YXJ0KCk6bi50aW1lcnMucG9wKCl9LG4uZnguaW50ZXJ2YWw9MTMsbi5meC5zdGFydD1mdW5jdGlvbigpe2lifHwoaWI9YS5zZXRJbnRlcnZhbChuLmZ4LnRpY2ssbi5meC5pbnRlcnZhbCkpfSxuLmZ4LnN0b3A9ZnVuY3Rpb24oKXthLmNsZWFySW50ZXJ2YWwoaWIpLGliPW51bGx9LG4uZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCxfZGVmYXVsdDo0MDB9LG4uZm4uZGVsYXk9ZnVuY3Rpb24oYixjKXtyZXR1cm4gYj1uLmZ4P24uZnguc3BlZWRzW2JdfHxiOmIsYz1jfHxcImZ4XCIsdGhpcy5xdWV1ZShjLGZ1bmN0aW9uKGMsZCl7dmFyIGU9YS5zZXRUaW1lb3V0KGMsYik7ZC5zdG9wPWZ1bmN0aW9uKCl7YS5jbGVhclRpbWVvdXQoZSl9fSl9LGZ1bmN0aW9uKCl7dmFyIGEsYj1kLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxjPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxlPWQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSxmPWUuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKTtjPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxjLnNldEF0dHJpYnV0ZShcImNsYXNzTmFtZVwiLFwidFwiKSxjLmlubmVySFRNTD1cIiAgPGxpbmsvPjx0YWJsZT48L3RhYmxlPjxhIGhyZWY9Jy9hJz5hPC9hPjxpbnB1dCB0eXBlPSdjaGVja2JveCcvPlwiLGE9Yy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIilbMF0sYi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJjaGVja2JveFwiKSxjLmFwcGVuZENoaWxkKGIpLGE9Yy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIilbMF0sYS5zdHlsZS5jc3NUZXh0PVwidG9wOjFweFwiLGwuZ2V0U2V0QXR0cmlidXRlPVwidFwiIT09Yy5jbGFzc05hbWUsbC5zdHlsZT0vdG9wLy50ZXN0KGEuZ2V0QXR0cmlidXRlKFwic3R5bGVcIikpLGwuaHJlZk5vcm1hbGl6ZWQ9XCIvYVwiPT09YS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLGwuY2hlY2tPbj0hIWIudmFsdWUsbC5vcHRTZWxlY3RlZD1mLnNlbGVjdGVkLGwuZW5jdHlwZT0hIWQuY3JlYXRlRWxlbWVudChcImZvcm1cIikuZW5jdHlwZSxlLmRpc2FibGVkPSEwLGwub3B0RGlzYWJsZWQ9IWYuZGlzYWJsZWQsYj1kLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxiLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIiksbC5pbnB1dD1cIlwiPT09Yi5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSxiLnZhbHVlPVwidFwiLGIuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksbC5yYWRpb1ZhbHVlPVwidFwiPT09Yi52YWx1ZX0oKTt2YXIgcmI9L1xcci9nLHNiPS9bXFx4MjBcXHRcXHJcXG5cXGZdKy9nO24uZm4uZXh0ZW5kKHt2YWw6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGU9dGhpc1swXTt7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZD1uLmlzRnVuY3Rpb24oYSksdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3ZhciBlOzE9PT10aGlzLm5vZGVUeXBlJiYoZT1kP2EuY2FsbCh0aGlzLGMsbih0aGlzKS52YWwoKSk6YSxudWxsPT1lP2U9XCJcIjpcIm51bWJlclwiPT10eXBlb2YgZT9lKz1cIlwiOm4uaXNBcnJheShlKSYmKGU9bi5tYXAoZSxmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOmErXCJcIn0pKSxiPW4udmFsSG9va3NbdGhpcy50eXBlXXx8bi52YWxIb29rc1t0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwic2V0XCJpbiBiJiZ2b2lkIDAhPT1iLnNldCh0aGlzLGUsXCJ2YWx1ZVwiKXx8KHRoaXMudmFsdWU9ZSkpfSk7aWYoZSlyZXR1cm4gYj1uLnZhbEhvb2tzW2UudHlwZV18fG4udmFsSG9va3NbZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcImdldFwiaW4gYiYmdm9pZCAwIT09KGM9Yi5nZXQoZSxcInZhbHVlXCIpKT9jOihjPWUudmFsdWUsXCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5yZXBsYWNlKHJiLFwiXCIpOm51bGw9PWM/XCJcIjpjKX19fSksbi5leHRlbmQoe3ZhbEhvb2tzOntvcHRpb246e2dldDpmdW5jdGlvbihhKXt2YXIgYj1uLmZpbmQuYXR0cihhLFwidmFsdWVcIik7cmV0dXJuIG51bGwhPWI/YjpuLnRyaW0obi50ZXh0KGEpKS5yZXBsYWNlKHNiLFwiIFwiKX19LHNlbGVjdDp7Z2V0OmZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjLGQ9YS5vcHRpb25zLGU9YS5zZWxlY3RlZEluZGV4LGY9XCJzZWxlY3Qtb25lXCI9PT1hLnR5cGV8fDA+ZSxnPWY/bnVsbDpbXSxoPWY/ZSsxOmQubGVuZ3RoLGk9MD5lP2g6Zj9lOjA7aD5pO2krKylpZihjPWRbaV0sKGMuc2VsZWN0ZWR8fGk9PT1lKSYmKGwub3B0RGlzYWJsZWQ/IWMuZGlzYWJsZWQ6bnVsbD09PWMuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikpJiYoIWMucGFyZW50Tm9kZS5kaXNhYmxlZHx8IW4ubm9kZU5hbWUoYy5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZihiPW4oYykudmFsKCksZilyZXR1cm4gYjtnLnB1c2goYil9cmV0dXJuIGd9LHNldDpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT1hLm9wdGlvbnMsZj1uLm1ha2VBcnJheShiKSxnPWUubGVuZ3RoO3doaWxlKGctLSlpZihkPWVbZ10sbi5pbkFycmF5KG4udmFsSG9va3Mub3B0aW9uLmdldChkKSxmKT4tMSl0cnl7ZC5zZWxlY3RlZD1jPSEwfWNhdGNoKGgpe2Quc2Nyb2xsSGVpZ2h0fWVsc2UgZC5zZWxlY3RlZD0hMTtyZXR1cm4gY3x8KGEuc2VsZWN0ZWRJbmRleD0tMSksZX19fX0pLG4uZWFjaChbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0sZnVuY3Rpb24oKXtuLnZhbEhvb2tzW3RoaXNdPXtzZXQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbi5pc0FycmF5KGIpP2EuY2hlY2tlZD1uLmluQXJyYXkobihhKS52YWwoKSxiKT4tMTp2b2lkIDB9fSxsLmNoZWNrT258fChuLnZhbEhvb2tzW3RoaXNdLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09PWEuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik/XCJvblwiOmEudmFsdWV9KX0pO3ZhciB0Yix1Yix2Yj1uLmV4cHIuYXR0ckhhbmRsZSx3Yj0vXig/OmNoZWNrZWR8c2VsZWN0ZWQpJC9pLHhiPWwuZ2V0U2V0QXR0cmlidXRlLHliPWwuaW5wdXQ7bi5mbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gWSh0aGlzLG4uYXR0cixhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5yZW1vdmVBdHRyKHRoaXMsYSl9KX19KSxuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPWEubm9kZVR5cGU7aWYoMyE9PWYmJjghPT1mJiYyIT09ZilyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgYS5nZXRBdHRyaWJ1dGU/bi5wcm9wKGEsYixjKTooMT09PWYmJm4uaXNYTUxEb2MoYSl8fChiPWIudG9Mb3dlckNhc2UoKSxlPW4uYXR0ckhvb2tzW2JdfHwobi5leHByLm1hdGNoLmJvb2wudGVzdChiKT91Yjp0YikpLHZvaWQgMCE9PWM/bnVsbD09PWM/dm9pZCBuLnJlbW92ZUF0dHIoYSxiKTplJiZcInNldFwiaW4gZSYmdm9pZCAwIT09KGQ9ZS5zZXQoYSxjLGIpKT9kOihhLnNldEF0dHJpYnV0ZShiLGMrXCJcIiksYyk6ZSYmXCJnZXRcImluIGUmJm51bGwhPT0oZD1lLmdldChhLGIpKT9kOihkPW4uZmluZC5hdHRyKGEsYiksbnVsbD09ZD92b2lkIDA6ZCkpfSxhdHRySG9va3M6e3R5cGU6e3NldDpmdW5jdGlvbihhLGIpe2lmKCFsLnJhZGlvVmFsdWUmJlwicmFkaW9cIj09PWImJm4ubm9kZU5hbWUoYSxcImlucHV0XCIpKXt2YXIgYz1hLnZhbHVlO3JldHVybiBhLnNldEF0dHJpYnV0ZShcInR5cGVcIixiKSxjJiYoYS52YWx1ZT1jKSxifX19fSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlPTAsZj1iJiZiLm1hdGNoKEcpO2lmKGYmJjE9PT1hLm5vZGVUeXBlKXdoaWxlKGM9ZltlKytdKWQ9bi5wcm9wRml4W2NdfHxjLG4uZXhwci5tYXRjaC5ib29sLnRlc3QoYyk/eWImJnhifHwhd2IudGVzdChjKT9hW2RdPSExOmFbbi5jYW1lbENhc2UoXCJkZWZhdWx0LVwiK2MpXT1hW2RdPSExOm4uYXR0cihhLGMsXCJcIiksYS5yZW1vdmVBdHRyaWJ1dGUoeGI/YzpkKX19KSx1Yj17c2V0OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYj09PSExP24ucmVtb3ZlQXR0cihhLGMpOnliJiZ4Ynx8IXdiLnRlc3QoYyk/YS5zZXRBdHRyaWJ1dGUoIXhiJiZuLnByb3BGaXhbY118fGMsYyk6YVtuLmNhbWVsQ2FzZShcImRlZmF1bHQtXCIrYyldPWFbY109ITAsY319LG4uZWFjaChuLmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksZnVuY3Rpb24oYSxiKXt2YXIgYz12YltiXXx8bi5maW5kLmF0dHI7eWImJnhifHwhd2IudGVzdChiKT92YltiXT1mdW5jdGlvbihhLGIsZCl7dmFyIGUsZjtyZXR1cm4gZHx8KGY9dmJbYl0sdmJbYl09ZSxlPW51bGwhPWMoYSxiLGQpP2IudG9Mb3dlckNhc2UoKTpudWxsLHZiW2JdPWYpLGV9OnZiW2JdPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYz92b2lkIDA6YVtuLmNhbWVsQ2FzZShcImRlZmF1bHQtXCIrYildP2IudG9Mb3dlckNhc2UoKTpudWxsfX0pLHliJiZ4Ynx8KG4uYXR0ckhvb2tzLnZhbHVlPXtzZXQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuLm5vZGVOYW1lKGEsXCJpbnB1dFwiKT92b2lkKGEuZGVmYXVsdFZhbHVlPWIpOnRiJiZ0Yi5zZXQoYSxiLGMpfX0pLHhifHwodGI9e3NldDpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9YS5nZXRBdHRyaWJ1dGVOb2RlKGMpO3JldHVybiBkfHxhLnNldEF0dHJpYnV0ZU5vZGUoZD1hLm93bmVyRG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKGMpKSxkLnZhbHVlPWIrPVwiXCIsXCJ2YWx1ZVwiPT09Y3x8Yj09PWEuZ2V0QXR0cmlidXRlKGMpP2I6dm9pZCAwfX0sdmIuaWQ9dmIubmFtZT12Yi5jb29yZHM9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiBjP3ZvaWQgMDooZD1hLmdldEF0dHJpYnV0ZU5vZGUoYikpJiZcIlwiIT09ZC52YWx1ZT9kLnZhbHVlOm51bGx9LG4udmFsSG9va3MuYnV0dG9uPXtnZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLmdldEF0dHJpYnV0ZU5vZGUoYik7cmV0dXJuIGMmJmMuc3BlY2lmaWVkP2MudmFsdWU6dm9pZCAwfSxzZXQ6dGIuc2V0fSxuLmF0dHJIb29rcy5jb250ZW50ZWRpdGFibGU9e3NldDpmdW5jdGlvbihhLGIsYyl7dGIuc2V0KGEsXCJcIj09PWI/ITE6YixjKX19LG4uZWFjaChbXCJ3aWR0aFwiLFwiaGVpZ2h0XCJdLGZ1bmN0aW9uKGEsYil7bi5hdHRySG9va3NbYl09e3NldDpmdW5jdGlvbihhLGMpe3JldHVyblwiXCI9PT1jPyhhLnNldEF0dHJpYnV0ZShiLFwiYXV0b1wiKSxjKTp2b2lkIDB9fX0pKSxsLnN0eWxlfHwobi5hdHRySG9va3Muc3R5bGU9e2dldDpmdW5jdGlvbihhKXtyZXR1cm4gYS5zdHlsZS5jc3NUZXh0fHx2b2lkIDB9LHNldDpmdW5jdGlvbihhLGIpe3JldHVybiBhLnN0eWxlLmNzc1RleHQ9YitcIlwifX0pO3ZhciB6Yj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b258b2JqZWN0KSQvaSxBYj0vXig/OmF8YXJlYSkkL2k7bi5mbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gWSh0aGlzLG4ucHJvcCxhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihhKXtyZXR1cm4gYT1uLnByb3BGaXhbYV18fGEsdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dHJ5e3RoaXNbYV09dm9pZCAwLGRlbGV0ZSB0aGlzW2FdfWNhdGNoKGIpe319KX19KSxuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPWEubm9kZVR5cGU7aWYoMyE9PWYmJjghPT1mJiYyIT09ZilyZXR1cm4gMT09PWYmJm4uaXNYTUxEb2MoYSl8fChiPW4ucHJvcEZpeFtiXXx8YixlPW4ucHJvcEhvb2tzW2JdKSx2b2lkIDAhPT1jP2UmJlwic2V0XCJpbiBlJiZ2b2lkIDAhPT0oZD1lLnNldChhLGMsYikpP2Q6YVtiXT1jOmUmJlwiZ2V0XCJpbiBlJiZudWxsIT09KGQ9ZS5nZXQoYSxiKSk/ZDphW2JdfSxwcm9wSG9va3M6e3RhYkluZGV4OntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9bi5maW5kLmF0dHIoYSxcInRhYmluZGV4XCIpO3JldHVybiBiP3BhcnNlSW50KGIsMTApOnpiLnRlc3QoYS5ub2RlTmFtZSl8fEFiLnRlc3QoYS5ub2RlTmFtZSkmJmEuaHJlZj8wOi0xfX19LHByb3BGaXg6e1wiZm9yXCI6XCJodG1sRm9yXCIsXCJjbGFzc1wiOlwiY2xhc3NOYW1lXCJ9fSksbC5ocmVmTm9ybWFsaXplZHx8bi5lYWNoKFtcImhyZWZcIixcInNyY1wiXSxmdW5jdGlvbihhLGIpe24ucHJvcEhvb2tzW2JdPXtnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuZ2V0QXR0cmlidXRlKGIsNCl9fX0pLGwub3B0U2VsZWN0ZWR8fChuLnByb3BIb29rcy5zZWxlY3RlZD17Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtyZXR1cm4gYiYmKGIuc2VsZWN0ZWRJbmRleCxiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4KSxudWxsfSxzZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO2ImJihiLnNlbGVjdGVkSW5kZXgsYi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCl9fSksbi5lYWNoKFtcInRhYkluZGV4XCIsXCJyZWFkT25seVwiLFwibWF4TGVuZ3RoXCIsXCJjZWxsU3BhY2luZ1wiLFwiY2VsbFBhZGRpbmdcIixcInJvd1NwYW5cIixcImNvbFNwYW5cIixcInVzZU1hcFwiLFwiZnJhbWVCb3JkZXJcIixcImNvbnRlbnRFZGl0YWJsZVwiXSxmdW5jdGlvbigpe24ucHJvcEZpeFt0aGlzLnRvTG93ZXJDYXNlKCldPXRoaXN9KSxsLmVuY3R5cGV8fChuLnByb3BGaXguZW5jdHlwZT1cImVuY29kaW5nXCIpO3ZhciBCYj0vW1xcdFxcclxcblxcZl0vZztmdW5jdGlvbiBDYihhKXtyZXR1cm4gbi5hdHRyKGEsXCJjbGFzc1wiKXx8XCJcIn1uLmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaT0wO2lmKG4uaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykuYWRkQ2xhc3MoYS5jYWxsKHRoaXMsYixDYih0aGlzKSkpfSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJmEpe2I9YS5tYXRjaChHKXx8W107d2hpbGUoYz10aGlzW2krK10paWYoZT1DYihjKSxkPTE9PT1jLm5vZGVUeXBlJiYoXCIgXCIrZStcIiBcIikucmVwbGFjZShCYixcIiBcIikpe2c9MDt3aGlsZShmPWJbZysrXSlkLmluZGV4T2YoXCIgXCIrZitcIiBcIik8MCYmKGQrPWYrXCIgXCIpO2g9bi50cmltKGQpLGUhPT1oJiZuLmF0dHIoYyxcImNsYXNzXCIsaCl9fXJldHVybiB0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpPTA7aWYobi5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS5yZW1vdmVDbGFzcyhhLmNhbGwodGhpcyxiLENiKHRoaXMpKSl9KTtpZighYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5hdHRyKFwiY2xhc3NcIixcIlwiKTtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmYSl7Yj1hLm1hdGNoKEcpfHxbXTt3aGlsZShjPXRoaXNbaSsrXSlpZihlPUNiKGMpLGQ9MT09PWMubm9kZVR5cGUmJihcIiBcIitlK1wiIFwiKS5yZXBsYWNlKEJiLFwiIFwiKSl7Zz0wO3doaWxlKGY9YltnKytdKXdoaWxlKGQuaW5kZXhPZihcIiBcIitmK1wiIFwiKT4tMSlkPWQucmVwbGFjZShcIiBcIitmK1wiIFwiLFwiIFwiKTtoPW4udHJpbShkKSxlIT09aCYmbi5hdHRyKGMsXCJjbGFzc1wiLGgpfX1yZXR1cm4gdGhpc30sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz10eXBlb2YgYTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGImJlwic3RyaW5nXCI9PT1jP2I/dGhpcy5hZGRDbGFzcyhhKTp0aGlzLnJlbW92ZUNsYXNzKGEpOm4uaXNGdW5jdGlvbihhKT90aGlzLmVhY2goZnVuY3Rpb24oYyl7bih0aGlzKS50b2dnbGVDbGFzcyhhLmNhbGwodGhpcyxjLENiKHRoaXMpLGIpLGIpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGIsZCxlLGY7aWYoXCJzdHJpbmdcIj09PWMpe2Q9MCxlPW4odGhpcyksZj1hLm1hdGNoKEcpfHxbXTt3aGlsZShiPWZbZCsrXSllLmhhc0NsYXNzKGIpP2UucmVtb3ZlQ2xhc3MoYik6ZS5hZGRDbGFzcyhiKX1lbHNlIHZvaWQgMCE9PWEmJlwiYm9vbGVhblwiIT09Y3x8KGI9Q2IodGhpcyksYiYmbi5fZGF0YSh0aGlzLFwiX19jbGFzc05hbWVfX1wiLGIpLG4uYXR0cih0aGlzLFwiY2xhc3NcIixifHxhPT09ITE/XCJcIjpuLl9kYXRhKHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIpfHxcIlwiKSl9KX0saGFzQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkPTA7Yj1cIiBcIithK1wiIFwiO3doaWxlKGM9dGhpc1tkKytdKWlmKDE9PT1jLm5vZGVUeXBlJiYoXCIgXCIrQ2IoYykrXCIgXCIpLnJlcGxhY2UoQmIsXCIgXCIpLmluZGV4T2YoYik+LTEpcmV0dXJuITA7cmV0dXJuITF9fSksbi5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IGxvYWQgcmVzaXplIHNjcm9sbCB1bmxvYWQgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBlcnJvciBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe24uZm5bYl09ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4wP3RoaXMub24oYixudWxsLGEsYyk6dGhpcy50cmlnZ2VyKGIpfX0pLG4uZm4uZXh0ZW5kKHtob3ZlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm1vdXNlZW50ZXIoYSkubW91c2VsZWF2ZShifHxhKX19KTt2YXIgRGI9YS5sb2NhdGlvbixFYj1uLm5vdygpLEZiPS9cXD8vLEdiPS8oLCl8KFxcW3x7KXwofXxdKXxcIig/OlteXCJcXFxcXFxyXFxuXXxcXFxcW1wiXFxcXFxcL2JmbnJ0XXxcXFxcdVtcXGRhLWZBLUZdezR9KSpcIlxccyo6P3x0cnVlfGZhbHNlfG51bGx8LT8oPyEwXFxkKVxcZCsoPzpcXC5cXGQrfCkoPzpbZUVdWystXT9cXGQrfCkvZztuLnBhcnNlSlNPTj1mdW5jdGlvbihiKXtpZihhLkpTT04mJmEuSlNPTi5wYXJzZSlyZXR1cm4gYS5KU09OLnBhcnNlKGIrXCJcIik7dmFyIGMsZD1udWxsLGU9bi50cmltKGIrXCJcIik7cmV0dXJuIGUmJiFuLnRyaW0oZS5yZXBsYWNlKEdiLGZ1bmN0aW9uKGEsYixlLGYpe3JldHVybiBjJiZiJiYoZD0wKSwwPT09ZD9hOihjPWV8fGIsZCs9IWYtIWUsXCJcIil9KSk/RnVuY3Rpb24oXCJyZXR1cm4gXCIrZSkoKTpuLmVycm9yKFwiSW52YWxpZCBKU09OOiBcIitiKX0sbi5wYXJzZVhNTD1mdW5jdGlvbihiKXt2YXIgYyxkO2lmKCFifHxcInN0cmluZ1wiIT10eXBlb2YgYilyZXR1cm4gbnVsbDt0cnl7YS5ET01QYXJzZXI/KGQ9bmV3IGEuRE9NUGFyc2VyLGM9ZC5wYXJzZUZyb21TdHJpbmcoYixcInRleHQveG1sXCIpKTooYz1uZXcgYS5BY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTERPTVwiKSxjLmFzeW5jPVwiZmFsc2VcIixjLmxvYWRYTUwoYikpfWNhdGNoKGUpe2M9dm9pZCAwfXJldHVybiBjJiZjLmRvY3VtZW50RWxlbWVudCYmIWMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGh8fG4uZXJyb3IoXCJJbnZhbGlkIFhNTDogXCIrYiksY307dmFyIEhiPS8jLiokLyxJYj0vKFs/Jl0pXz1bXiZdKi8sSmI9L14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopXFxyPyQvZ20sS2I9L14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8sTGI9L14oPzpHRVR8SEVBRCkkLyxNYj0vXlxcL1xcLy8sTmI9L14oW1xcdy4rLV0rOikoPzpcXC9cXC8oPzpbXlxcLz8jXSpAfCkoW15cXC8/IzpdKikoPzo6KFxcZCspfCl8KS8sT2I9e30sUGI9e30sUWI9XCIqL1wiLmNvbmNhdChcIipcIiksUmI9RGIuaHJlZixTYj1OYi5leGVjKFJiLnRvTG93ZXJDYXNlKCkpfHxbXTtmdW5jdGlvbiBUYihhKXtyZXR1cm4gZnVuY3Rpb24oYixjKXtcInN0cmluZ1wiIT10eXBlb2YgYiYmKGM9YixiPVwiKlwiKTt2YXIgZCxlPTAsZj1iLnRvTG93ZXJDYXNlKCkubWF0Y2goRyl8fFtdO2lmKG4uaXNGdW5jdGlvbihjKSl3aGlsZShkPWZbZSsrXSlcIitcIj09PWQuY2hhckF0KDApPyhkPWQuc2xpY2UoMSl8fFwiKlwiLChhW2RdPWFbZF18fFtdKS51bnNoaWZ0KGMpKTooYVtkXT1hW2RdfHxbXSkucHVzaChjKX19ZnVuY3Rpb24gVWIoYSxiLGMsZCl7dmFyIGU9e30sZj1hPT09UGI7ZnVuY3Rpb24gZyhoKXt2YXIgaTtyZXR1cm4gZVtoXT0hMCxuLmVhY2goYVtoXXx8W10sZnVuY3Rpb24oYSxoKXt2YXIgaj1oKGIsYyxkKTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2Yganx8Znx8ZVtqXT9mPyEoaT1qKTp2b2lkIDA6KGIuZGF0YVR5cGVzLnVuc2hpZnQoaiksZyhqKSwhMSl9KSxpfXJldHVybiBnKGIuZGF0YVR5cGVzWzBdKXx8IWVbXCIqXCJdJiZnKFwiKlwiKX1mdW5jdGlvbiBWYihhLGIpe3ZhciBjLGQsZT1uLmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9uc3x8e307Zm9yKGQgaW4gYil2b2lkIDAhPT1iW2RdJiYoKGVbZF0/YTpjfHwoYz17fSkpW2RdPWJbZF0pO3JldHVybiBjJiZuLmV4dGVuZCghMCxhLGMpLGF9ZnVuY3Rpb24gV2IoYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5jb250ZW50cyxpPWEuZGF0YVR5cGVzO3doaWxlKFwiKlwiPT09aVswXSlpLnNoaWZ0KCksdm9pZCAwPT09ZSYmKGU9YS5taW1lVHlwZXx8Yi5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKSk7aWYoZSlmb3IoZyBpbiBoKWlmKGhbZ10mJmhbZ10udGVzdChlKSl7aS51bnNoaWZ0KGcpO2JyZWFrfWlmKGlbMF1pbiBjKWY9aVswXTtlbHNle2ZvcihnIGluIGMpe2lmKCFpWzBdfHxhLmNvbnZlcnRlcnNbZytcIiBcIitpWzBdXSl7Zj1nO2JyZWFrfWR8fChkPWcpfWY9Znx8ZH1yZXR1cm4gZj8oZiE9PWlbMF0mJmkudW5zaGlmdChmKSxjW2ZdKTp2b2lkIDB9ZnVuY3Rpb24gWGIoYSxiLGMsZCl7dmFyIGUsZixnLGgsaSxqPXt9LGs9YS5kYXRhVHlwZXMuc2xpY2UoKTtpZihrWzFdKWZvcihnIGluIGEuY29udmVydGVycylqW2cudG9Mb3dlckNhc2UoKV09YS5jb252ZXJ0ZXJzW2ddO2Y9ay5zaGlmdCgpO3doaWxlKGYpaWYoYS5yZXNwb25zZUZpZWxkc1tmXSYmKGNbYS5yZXNwb25zZUZpZWxkc1tmXV09YiksIWkmJmQmJmEuZGF0YUZpbHRlciYmKGI9YS5kYXRhRmlsdGVyKGIsYS5kYXRhVHlwZSkpLGk9ZixmPWsuc2hpZnQoKSlpZihcIipcIj09PWYpZj1pO2Vsc2UgaWYoXCIqXCIhPT1pJiZpIT09Zil7aWYoZz1qW2krXCIgXCIrZl18fGpbXCIqIFwiK2ZdLCFnKWZvcihlIGluIGopaWYoaD1lLnNwbGl0KFwiIFwiKSxoWzFdPT09ZiYmKGc9altpK1wiIFwiK2hbMF1dfHxqW1wiKiBcIitoWzBdXSkpe2c9PT0hMD9nPWpbZV06altlXSE9PSEwJiYoZj1oWzBdLGsudW5zaGlmdChoWzFdKSk7YnJlYWt9aWYoZyE9PSEwKWlmKGcmJmFbXCJ0aHJvd3NcIl0pYj1nKGIpO2Vsc2UgdHJ5e2I9ZyhiKX1jYXRjaChsKXtyZXR1cm57c3RhdGU6XCJwYXJzZXJlcnJvclwiLGVycm9yOmc/bDpcIk5vIGNvbnZlcnNpb24gZnJvbSBcIitpK1wiIHRvIFwiK2Z9fX1yZXR1cm57c3RhdGU6XCJzdWNjZXNzXCIsZGF0YTpifX1uLmV4dGVuZCh7YWN0aXZlOjAsbGFzdE1vZGlmaWVkOnt9LGV0YWc6e30sYWpheFNldHRpbmdzOnt1cmw6UmIsdHlwZTpcIkdFVFwiLGlzTG9jYWw6S2IudGVzdChTYlsxXSksZ2xvYmFsOiEwLHByb2Nlc3NEYXRhOiEwLGFzeW5jOiEwLGNvbnRlbnRUeXBlOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsYWNjZXB0czp7XCIqXCI6UWIsdGV4dDpcInRleHQvcGxhaW5cIixodG1sOlwidGV4dC9odG1sXCIseG1sOlwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLGpzb246XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIn0sY29udGVudHM6e3htbDovXFxieG1sXFxiLyxodG1sOi9cXGJodG1sLyxqc29uOi9cXGJqc29uXFxiL30scmVzcG9uc2VGaWVsZHM6e3htbDpcInJlc3BvbnNlWE1MXCIsdGV4dDpcInJlc3BvbnNlVGV4dFwiLGpzb246XCJyZXNwb25zZUpTT05cIn0sY29udmVydGVyczp7XCIqIHRleHRcIjpTdHJpbmcsXCJ0ZXh0IGh0bWxcIjohMCxcInRleHQganNvblwiOm4ucGFyc2VKU09OLFwidGV4dCB4bWxcIjpuLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj9WYihWYihhLG4uYWpheFNldHRpbmdzKSxiKTpWYihuLmFqYXhTZXR0aW5ncyxhKX0sYWpheFByZWZpbHRlcjpUYihPYiksYWpheFRyYW5zcG9ydDpUYihQYiksYWpheDpmdW5jdGlvbihiLGMpe1wib2JqZWN0XCI9PXR5cGVvZiBiJiYoYz1iLGI9dm9pZCAwKSxjPWN8fHt9O3ZhciBkLGUsZixnLGgsaSxqLGssbD1uLmFqYXhTZXR1cCh7fSxjKSxtPWwuY29udGV4dHx8bCxvPWwuY29udGV4dCYmKG0ubm9kZVR5cGV8fG0uanF1ZXJ5KT9uKG0pOm4uZXZlbnQscD1uLkRlZmVycmVkKCkscT1uLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHI9bC5zdGF0dXNDb2RlfHx7fSxzPXt9LHQ9e30sdT0wLHY9XCJjYW5jZWxlZFwiLHc9e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihhKXt2YXIgYjtpZigyPT09dSl7aWYoIWspe2s9e307d2hpbGUoYj1KYi5leGVjKGcpKWtbYlsxXS50b0xvd2VyQ2FzZSgpXT1iWzJdfWI9a1thLnRvTG93ZXJDYXNlKCldfXJldHVybiBudWxsPT1iP251bGw6Yn0sZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOmZ1bmN0aW9uKCl7cmV0dXJuIDI9PT11P2c6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihhLGIpe3ZhciBjPWEudG9Mb3dlckNhc2UoKTtyZXR1cm4gdXx8KGE9dFtjXT10W2NdfHxhLHNbYV09YiksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gdXx8KGwubWltZVR5cGU9YSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihhKXt2YXIgYjtpZihhKWlmKDI+dSlmb3IoYiBpbiBhKXJbYl09W3JbYl0sYVtiXV07ZWxzZSB3LmFsd2F5cyhhW3cuc3RhdHVzXSk7cmV0dXJuIHRoaXN9LGFib3J0OmZ1bmN0aW9uKGEpe3ZhciBiPWF8fHY7cmV0dXJuIGomJmouYWJvcnQoYikseSgwLGIpLHRoaXN9fTtpZihwLnByb21pc2UodykuY29tcGxldGU9cS5hZGQsdy5zdWNjZXNzPXcuZG9uZSx3LmVycm9yPXcuZmFpbCxsLnVybD0oKGJ8fGwudXJsfHxSYikrXCJcIikucmVwbGFjZShIYixcIlwiKS5yZXBsYWNlKE1iLFNiWzFdK1wiLy9cIiksbC50eXBlPWMubWV0aG9kfHxjLnR5cGV8fGwubWV0aG9kfHxsLnR5cGUsbC5kYXRhVHlwZXM9bi50cmltKGwuZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKEcpfHxbXCJcIl0sbnVsbD09bC5jcm9zc0RvbWFpbiYmKGQ9TmIuZXhlYyhsLnVybC50b0xvd2VyQ2FzZSgpKSxsLmNyb3NzRG9tYWluPSEoIWR8fGRbMV09PT1TYlsxXSYmZFsyXT09PVNiWzJdJiYoZFszXXx8KFwiaHR0cDpcIj09PWRbMV0/XCI4MFwiOlwiNDQzXCIpKT09PShTYlszXXx8KFwiaHR0cDpcIj09PVNiWzFdP1wiODBcIjpcIjQ0M1wiKSkpKSxsLmRhdGEmJmwucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiBsLmRhdGEmJihsLmRhdGE9bi5wYXJhbShsLmRhdGEsbC50cmFkaXRpb25hbCkpLFViKE9iLGwsYyx3KSwyPT09dSlyZXR1cm4gdztpPW4uZXZlbnQmJmwuZ2xvYmFsLGkmJjA9PT1uLmFjdGl2ZSsrJiZuLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIiksbC50eXBlPWwudHlwZS50b1VwcGVyQ2FzZSgpLGwuaGFzQ29udGVudD0hTGIudGVzdChsLnR5cGUpLGY9bC51cmwsbC5oYXNDb250ZW50fHwobC5kYXRhJiYoZj1sLnVybCs9KEZiLnRlc3QoZik/XCImXCI6XCI/XCIpK2wuZGF0YSxkZWxldGUgbC5kYXRhKSxsLmNhY2hlPT09ITEmJihsLnVybD1JYi50ZXN0KGYpP2YucmVwbGFjZShJYixcIiQxXz1cIitFYisrKTpmKyhGYi50ZXN0KGYpP1wiJlwiOlwiP1wiKStcIl89XCIrRWIrKykpLGwuaWZNb2RpZmllZCYmKG4ubGFzdE1vZGlmaWVkW2ZdJiZ3LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLG4ubGFzdE1vZGlmaWVkW2ZdKSxuLmV0YWdbZl0mJncuc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIixuLmV0YWdbZl0pKSwobC5kYXRhJiZsLmhhc0NvbnRlbnQmJmwuY29udGVudFR5cGUhPT0hMXx8Yy5jb250ZW50VHlwZSkmJncuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLGwuY29udGVudFR5cGUpLHcuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLGwuZGF0YVR5cGVzWzBdJiZsLmFjY2VwdHNbbC5kYXRhVHlwZXNbMF1dP2wuYWNjZXB0c1tsLmRhdGFUeXBlc1swXV0rKFwiKlwiIT09bC5kYXRhVHlwZXNbMF0/XCIsIFwiK1FiK1wiOyBxPTAuMDFcIjpcIlwiKTpsLmFjY2VwdHNbXCIqXCJdKTtmb3IoZSBpbiBsLmhlYWRlcnMpdy5zZXRSZXF1ZXN0SGVhZGVyKGUsbC5oZWFkZXJzW2VdKTtpZihsLmJlZm9yZVNlbmQmJihsLmJlZm9yZVNlbmQuY2FsbChtLHcsbCk9PT0hMXx8Mj09PXUpKXJldHVybiB3LmFib3J0KCk7dj1cImFib3J0XCI7Zm9yKGUgaW57c3VjY2VzczoxLGVycm9yOjEsY29tcGxldGU6MX0pd1tlXShsW2VdKTtpZihqPVViKFBiLGwsYyx3KSl7aWYody5yZWFkeVN0YXRlPTEsaSYmby50cmlnZ2VyKFwiYWpheFNlbmRcIixbdyxsXSksMj09PXUpcmV0dXJuIHc7bC5hc3luYyYmbC50aW1lb3V0PjAmJihoPWEuc2V0VGltZW91dChmdW5jdGlvbigpe3cuYWJvcnQoXCJ0aW1lb3V0XCIpfSxsLnRpbWVvdXQpKTt0cnl7dT0xLGouc2VuZChzLHkpfWNhdGNoKHgpe2lmKCEoMj51KSl0aHJvdyB4O3koLTEseCl9fWVsc2UgeSgtMSxcIk5vIFRyYW5zcG9ydFwiKTtmdW5jdGlvbiB5KGIsYyxkLGUpe3ZhciBrLHMsdCx2LHgseT1jOzIhPT11JiYodT0yLGgmJmEuY2xlYXJUaW1lb3V0KGgpLGo9dm9pZCAwLGc9ZXx8XCJcIix3LnJlYWR5U3RhdGU9Yj4wPzQ6MCxrPWI+PTIwMCYmMzAwPmJ8fDMwND09PWIsZCYmKHY9V2IobCx3LGQpKSx2PVhiKGwsdix3LGspLGs/KGwuaWZNb2RpZmllZCYmKHg9dy5nZXRSZXNwb25zZUhlYWRlcihcIkxhc3QtTW9kaWZpZWRcIikseCYmKG4ubGFzdE1vZGlmaWVkW2ZdPXgpLHg9dy5nZXRSZXNwb25zZUhlYWRlcihcImV0YWdcIikseCYmKG4uZXRhZ1tmXT14KSksMjA0PT09Ynx8XCJIRUFEXCI9PT1sLnR5cGU/eT1cIm5vY29udGVudFwiOjMwND09PWI/eT1cIm5vdG1vZGlmaWVkXCI6KHk9di5zdGF0ZSxzPXYuZGF0YSx0PXYuZXJyb3Isaz0hdCkpOih0PXksIWImJnl8fCh5PVwiZXJyb3JcIiwwPmImJihiPTApKSksdy5zdGF0dXM9Yix3LnN0YXR1c1RleHQ9KGN8fHkpK1wiXCIsaz9wLnJlc29sdmVXaXRoKG0sW3MseSx3XSk6cC5yZWplY3RXaXRoKG0sW3cseSx0XSksdy5zdGF0dXNDb2RlKHIpLHI9dm9pZCAwLGkmJm8udHJpZ2dlcihrP1wiYWpheFN1Y2Nlc3NcIjpcImFqYXhFcnJvclwiLFt3LGwsaz9zOnRdKSxxLmZpcmVXaXRoKG0sW3cseV0pLGkmJihvLnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIixbdyxsXSksLS1uLmFjdGl2ZXx8bi5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIikpKX1yZXR1cm4gd30sZ2V0SlNPTjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG4uZ2V0KGEsYixjLFwianNvblwiKX0sZ2V0U2NyaXB0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uZ2V0KGEsdm9pZCAwLGIsXCJzY3JpcHRcIil9fSksbi5lYWNoKFtcImdldFwiLFwicG9zdFwiXSxmdW5jdGlvbihhLGIpe25bYl09ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIG4uaXNGdW5jdGlvbihjKSYmKGU9ZXx8ZCxkPWMsYz12b2lkIDApLG4uYWpheChuLmV4dGVuZCh7dXJsOmEsdHlwZTpiLGRhdGFUeXBlOmUsZGF0YTpjLHN1Y2Nlc3M6ZH0sbi5pc1BsYWluT2JqZWN0KGEpJiZhKSl9fSksbi5fZXZhbFVybD1mdW5jdGlvbihhKXtyZXR1cm4gbi5hamF4KHt1cmw6YSx0eXBlOlwiR0VUXCIsZGF0YVR5cGU6XCJzY3JpcHRcIixjYWNoZTohMCxhc3luYzohMSxnbG9iYWw6ITEsXCJ0aHJvd3NcIjohMH0pfSxuLmZuLmV4dGVuZCh7d3JhcEFsbDpmdW5jdGlvbihhKXtpZihuLmlzRnVuY3Rpb24oYSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLndyYXBBbGwoYS5jYWxsKHRoaXMsYikpfSk7aWYodGhpc1swXSl7dmFyIGI9bihhLHRoaXNbMF0ub3duZXJEb2N1bWVudCkuZXEoMCkuY2xvbmUoITApO3RoaXNbMF0ucGFyZW50Tm9kZSYmYi5pbnNlcnRCZWZvcmUodGhpc1swXSksYi5tYXAoZnVuY3Rpb24oKXt2YXIgYT10aGlzO3doaWxlKGEuZmlyc3RDaGlsZCYmMT09PWEuZmlyc3RDaGlsZC5ub2RlVHlwZSlhPWEuZmlyc3RDaGlsZDtyZXR1cm4gYX0pLmFwcGVuZCh0aGlzKX1yZXR1cm4gdGhpc30sd3JhcElubmVyOmZ1bmN0aW9uKGEpe3JldHVybiBuLmlzRnVuY3Rpb24oYSk/dGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykud3JhcElubmVyKGEuY2FsbCh0aGlzLGIpKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiPW4odGhpcyksYz1iLmNvbnRlbnRzKCk7Yy5sZW5ndGg/Yy53cmFwQWxsKGEpOmIuYXBwZW5kKGEpfSl9LHdyYXA6ZnVuY3Rpb24oYSl7dmFyIGI9bi5pc0Z1bmN0aW9uKGEpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYyl7bih0aGlzKS53cmFwQWxsKGI/YS5jYWxsKHRoaXMsYyk6YSl9KX0sdW53cmFwOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGFyZW50KCkuZWFjaChmdW5jdGlvbigpe24ubm9kZU5hbWUodGhpcyxcImJvZHlcIil8fG4odGhpcykucmVwbGFjZVdpdGgodGhpcy5jaGlsZE5vZGVzKX0pLmVuZCgpfX0pO2Z1bmN0aW9uIFliKGEpe3JldHVybiBhLnN0eWxlJiZhLnN0eWxlLmRpc3BsYXl8fG4uY3NzKGEsXCJkaXNwbGF5XCIpfWZ1bmN0aW9uIFpiKGEpe2lmKCFuLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudHx8ZCxhKSlyZXR1cm4hMDt3aGlsZShhJiYxPT09YS5ub2RlVHlwZSl7aWYoXCJub25lXCI9PT1ZYihhKXx8XCJoaWRkZW5cIj09PWEudHlwZSlyZXR1cm4hMDthPWEucGFyZW50Tm9kZX1yZXR1cm4hMX1uLmV4cHIuZmlsdGVycy5oaWRkZW49ZnVuY3Rpb24oYSl7cmV0dXJuIGwucmVsaWFibGVIaWRkZW5PZmZzZXRzKCk/YS5vZmZzZXRXaWR0aDw9MCYmYS5vZmZzZXRIZWlnaHQ8PTAmJiFhLmdldENsaWVudFJlY3RzKCkubGVuZ3RoOlpiKGEpfSxuLmV4cHIuZmlsdGVycy52aXNpYmxlPWZ1bmN0aW9uKGEpe3JldHVybiFuLmV4cHIuZmlsdGVycy5oaWRkZW4oYSl9O3ZhciAkYj0vJTIwL2csX2I9L1xcW1xcXSQvLGFjPS9cXHI/XFxuL2csYmM9L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLGNjPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtmdW5jdGlvbiBkYyhhLGIsYyxkKXt2YXIgZTtpZihuLmlzQXJyYXkoYikpbi5lYWNoKGIsZnVuY3Rpb24oYixlKXtjfHxfYi50ZXN0KGEpP2QoYSxlKTpkYyhhK1wiW1wiKyhcIm9iamVjdFwiPT10eXBlb2YgZSYmbnVsbCE9ZT9iOlwiXCIpK1wiXVwiLGUsYyxkKX0pO2Vsc2UgaWYoY3x8XCJvYmplY3RcIiE9PW4udHlwZShiKSlkKGEsYik7ZWxzZSBmb3IoZSBpbiBiKWRjKGErXCJbXCIrZStcIl1cIixiW2VdLGMsZCl9bi5wYXJhbT1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT1mdW5jdGlvbihhLGIpe2I9bi5pc0Z1bmN0aW9uKGIpP2IoKTpudWxsPT1iP1wiXCI6YixkW2QubGVuZ3RoXT1lbmNvZGVVUklDb21wb25lbnQoYSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGIpfTtpZih2b2lkIDA9PT1iJiYoYj1uLmFqYXhTZXR0aW5ncyYmbi5hamF4U2V0dGluZ3MudHJhZGl0aW9uYWwpLG4uaXNBcnJheShhKXx8YS5qcXVlcnkmJiFuLmlzUGxhaW5PYmplY3QoYSkpbi5lYWNoKGEsZnVuY3Rpb24oKXtlKHRoaXMubmFtZSx0aGlzLnZhbHVlKX0pO2Vsc2UgZm9yKGMgaW4gYSlkYyhjLGFbY10sYixlKTtyZXR1cm4gZC5qb2luKFwiJlwiKS5yZXBsYWNlKCRiLFwiK1wiKX0sbi5mbi5leHRlbmQoe3NlcmlhbGl6ZTpmdW5jdGlvbigpe3JldHVybiBuLnBhcmFtKHRoaXMuc2VyaWFsaXplQXJyYXkoKSl9LHNlcmlhbGl6ZUFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGE9bi5wcm9wKHRoaXMsXCJlbGVtZW50c1wiKTtyZXR1cm4gYT9uLm1ha2VBcnJheShhKTp0aGlzfSkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy50eXBlO3JldHVybiB0aGlzLm5hbWUmJiFuKHRoaXMpLmlzKFwiOmRpc2FibGVkXCIpJiZjYy50ZXN0KHRoaXMubm9kZU5hbWUpJiYhYmMudGVzdChhKSYmKHRoaXMuY2hlY2tlZHx8IVoudGVzdChhKSl9KS5tYXAoZnVuY3Rpb24oYSxiKXt2YXIgYz1uKHRoaXMpLnZhbCgpO3JldHVybiBudWxsPT1jP251bGw6bi5pc0FycmF5KGMpP24ubWFwKGMsZnVuY3Rpb24oYSl7cmV0dXJue25hbWU6Yi5uYW1lLHZhbHVlOmEucmVwbGFjZShhYyxcIlxcclxcblwiKX19KTp7bmFtZTpiLm5hbWUsdmFsdWU6Yy5yZXBsYWNlKGFjLFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pLG4uYWpheFNldHRpbmdzLnhocj12b2lkIDAhPT1hLkFjdGl2ZVhPYmplY3Q/ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pc0xvY2FsP2ljKCk6ZC5kb2N1bWVudE1vZGU+OD9oYygpOi9eKGdldHxwb3N0fGhlYWR8cHV0fGRlbGV0ZXxvcHRpb25zKSQvaS50ZXN0KHRoaXMudHlwZSkmJmhjKCl8fGljKCl9OmhjO3ZhciBlYz0wLGZjPXt9LGdjPW4uYWpheFNldHRpbmdzLnhocigpO2EuYXR0YWNoRXZlbnQmJmEuYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLGZ1bmN0aW9uKCl7Zm9yKHZhciBhIGluIGZjKWZjW2FdKHZvaWQgMCwhMCl9KSxsLmNvcnM9ISFnYyYmXCJ3aXRoQ3JlZGVudGlhbHNcImluIGdjLGdjPWwuYWpheD0hIWdjLGdjJiZuLmFqYXhUcmFuc3BvcnQoZnVuY3Rpb24oYil7aWYoIWIuY3Jvc3NEb21haW58fGwuY29ycyl7dmFyIGM7cmV0dXJue3NlbmQ6ZnVuY3Rpb24oZCxlKXt2YXIgZixnPWIueGhyKCksaD0rK2VjO2lmKGcub3BlbihiLnR5cGUsYi51cmwsYi5hc3luYyxiLnVzZXJuYW1lLGIucGFzc3dvcmQpLGIueGhyRmllbGRzKWZvcihmIGluIGIueGhyRmllbGRzKWdbZl09Yi54aHJGaWVsZHNbZl07Yi5taW1lVHlwZSYmZy5vdmVycmlkZU1pbWVUeXBlJiZnLm92ZXJyaWRlTWltZVR5cGUoYi5taW1lVHlwZSksYi5jcm9zc0RvbWFpbnx8ZFtcIlgtUmVxdWVzdGVkLVdpdGhcIl18fChkW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXT1cIlhNTEh0dHBSZXF1ZXN0XCIpO2ZvcihmIGluIGQpdm9pZCAwIT09ZFtmXSYmZy5zZXRSZXF1ZXN0SGVhZGVyKGYsZFtmXStcIlwiKTtnLnNlbmQoYi5oYXNDb250ZW50JiZiLmRhdGF8fG51bGwpLGM9ZnVuY3Rpb24oYSxkKXt2YXIgZixpLGo7aWYoYyYmKGR8fDQ9PT1nLnJlYWR5U3RhdGUpKWlmKGRlbGV0ZSBmY1toXSxjPXZvaWQgMCxnLm9ucmVhZHlzdGF0ZWNoYW5nZT1uLm5vb3AsZCk0IT09Zy5yZWFkeVN0YXRlJiZnLmFib3J0KCk7ZWxzZXtqPXt9LGY9Zy5zdGF0dXMsXCJzdHJpbmdcIj09dHlwZW9mIGcucmVzcG9uc2VUZXh0JiYoai50ZXh0PWcucmVzcG9uc2VUZXh0KTt0cnl7aT1nLnN0YXR1c1RleHR9Y2F0Y2goayl7aT1cIlwifWZ8fCFiLmlzTG9jYWx8fGIuY3Jvc3NEb21haW4/MTIyMz09PWYmJihmPTIwNCk6Zj1qLnRleHQ/MjAwOjQwNH1qJiZlKGYsaSxqLGcuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpfSxiLmFzeW5jPzQ9PT1nLnJlYWR5U3RhdGU/YS5zZXRUaW1lb3V0KGMpOmcub25yZWFkeXN0YXRlY2hhbmdlPWZjW2hdPWM6YygpfSxhYm9ydDpmdW5jdGlvbigpe2MmJmModm9pZCAwLCEwKX19fX0pO2Z1bmN0aW9uIGhjKCl7dHJ5e3JldHVybiBuZXcgYS5YTUxIdHRwUmVxdWVzdH1jYXRjaChiKXt9fWZ1bmN0aW9uIGljKCl7dHJ5e3JldHVybiBuZXcgYS5BY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTEhUVFBcIil9Y2F0Y2goYil7fX1uLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovXFxiKD86amF2YXxlY21hKXNjcmlwdFxcYi99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihhKXtyZXR1cm4gbi5nbG9iYWxFdmFsKGEpLGF9fX0pLG4uYWpheFByZWZpbHRlcihcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe3ZvaWQgMD09PWEuY2FjaGUmJihhLmNhY2hlPSExKSxhLmNyb3NzRG9tYWluJiYoYS50eXBlPVwiR0VUXCIsYS5nbG9iYWw9ITEpfSksbi5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24oYSl7aWYoYS5jcm9zc0RvbWFpbil7dmFyIGIsYz1kLmhlYWR8fG4oXCJoZWFkXCIpWzBdfHxkLmRvY3VtZW50RWxlbWVudDtyZXR1cm57c2VuZDpmdW5jdGlvbihlLGYpe2I9ZC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpLGIuYXN5bmM9ITAsYS5zY3JpcHRDaGFyc2V0JiYoYi5jaGFyc2V0PWEuc2NyaXB0Q2hhcnNldCksYi5zcmM9YS51cmwsYi5vbmxvYWQ9Yi5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oYSxjKXsoY3x8IWIucmVhZHlTdGF0ZXx8L2xvYWRlZHxjb21wbGV0ZS8udGVzdChiLnJlYWR5U3RhdGUpKSYmKGIub25sb2FkPWIub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsYi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYiksYj1udWxsLGN8fGYoMjAwLFwic3VjY2Vzc1wiKSl9LGMuaW5zZXJ0QmVmb3JlKGIsYy5maXJzdENoaWxkKX0sYWJvcnQ6ZnVuY3Rpb24oKXtiJiZiLm9ubG9hZCh2b2lkIDAsITApfX19fSk7dmFyIGpjPVtdLGtjPS8oPSlcXD8oPz0mfCQpfFxcP1xcPy87bi5hamF4U2V0dXAoe2pzb25wOlwiY2FsbGJhY2tcIixqc29ucENhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGE9amMucG9wKCl8fG4uZXhwYW5kbytcIl9cIitFYisrO3JldHVybiB0aGlzW2FdPSEwLGF9fSksbi5hamF4UHJlZmlsdGVyKFwianNvbiBqc29ucFwiLGZ1bmN0aW9uKGIsYyxkKXt2YXIgZSxmLGcsaD1iLmpzb25wIT09ITEmJihrYy50ZXN0KGIudXJsKT9cInVybFwiOlwic3RyaW5nXCI9PXR5cGVvZiBiLmRhdGEmJjA9PT0oYi5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYma2MudGVzdChiLmRhdGEpJiZcImRhdGFcIik7cmV0dXJuIGh8fFwianNvbnBcIj09PWIuZGF0YVR5cGVzWzBdPyhlPWIuanNvbnBDYWxsYmFjaz1uLmlzRnVuY3Rpb24oYi5qc29ucENhbGxiYWNrKT9iLmpzb25wQ2FsbGJhY2soKTpiLmpzb25wQ2FsbGJhY2ssaD9iW2hdPWJbaF0ucmVwbGFjZShrYyxcIiQxXCIrZSk6Yi5qc29ucCE9PSExJiYoYi51cmwrPShGYi50ZXN0KGIudXJsKT9cIiZcIjpcIj9cIikrYi5qc29ucCtcIj1cIitlKSxiLmNvbnZlcnRlcnNbXCJzY3JpcHQganNvblwiXT1mdW5jdGlvbigpe3JldHVybiBnfHxuLmVycm9yKGUrXCIgd2FzIG5vdCBjYWxsZWRcIiksZ1swXX0sYi5kYXRhVHlwZXNbMF09XCJqc29uXCIsZj1hW2VdLGFbZV09ZnVuY3Rpb24oKXtnPWFyZ3VtZW50c30sZC5hbHdheXMoZnVuY3Rpb24oKXt2b2lkIDA9PT1mP24oYSkucmVtb3ZlUHJvcChlKTphW2VdPWYsYltlXSYmKGIuanNvbnBDYWxsYmFjaz1jLmpzb25wQ2FsbGJhY2ssamMucHVzaChlKSksZyYmbi5pc0Z1bmN0aW9uKGYpJiZmKGdbMF0pLGc9Zj12b2lkIDB9KSxcInNjcmlwdFwiKTp2b2lkIDB9KSxuLnBhcnNlSFRNTD1mdW5jdGlvbihhLGIsYyl7aWYoIWF8fFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiBudWxsO1wiYm9vbGVhblwiPT10eXBlb2YgYiYmKGM9YixiPSExKSxiPWJ8fGQ7dmFyIGU9eC5leGVjKGEpLGY9IWMmJltdO3JldHVybiBlP1tiLmNyZWF0ZUVsZW1lbnQoZVsxXSldOihlPWphKFthXSxiLGYpLGYmJmYubGVuZ3RoJiZuKGYpLnJlbW92ZSgpLG4ubWVyZ2UoW10sZS5jaGlsZE5vZGVzKSl9O3ZhciBsYz1uLmZuLmxvYWQ7bi5mbi5sb2FkPWZ1bmN0aW9uKGEsYixjKXtpZihcInN0cmluZ1wiIT10eXBlb2YgYSYmbGMpcmV0dXJuIGxjLmFwcGx5KHRoaXMsYXJndW1lbnRzKTt2YXIgZCxlLGYsZz10aGlzLGg9YS5pbmRleE9mKFwiIFwiKTtyZXR1cm4gaD4tMSYmKGQ9bi50cmltKGEuc2xpY2UoaCxhLmxlbmd0aCkpLGE9YS5zbGljZSgwLGgpKSxuLmlzRnVuY3Rpb24oYik/KGM9YixiPXZvaWQgMCk6YiYmXCJvYmplY3RcIj09dHlwZW9mIGImJihlPVwiUE9TVFwiKSxnLmxlbmd0aD4wJiZuLmFqYXgoe3VybDphLHR5cGU6ZXx8XCJHRVRcIixkYXRhVHlwZTpcImh0bWxcIixkYXRhOmJ9KS5kb25lKGZ1bmN0aW9uKGEpe2Y9YXJndW1lbnRzLGcuaHRtbChkP24oXCI8ZGl2PlwiKS5hcHBlbmQobi5wYXJzZUhUTUwoYSkpLmZpbmQoZCk6YSl9KS5hbHdheXMoYyYmZnVuY3Rpb24oYSxiKXtnLmVhY2goZnVuY3Rpb24oKXtjLmFwcGx5KHRoaXMsZnx8W2EucmVzcG9uc2VUZXh0LGIsYV0pfSl9KSx0aGlzfSxuLmVhY2goW1wiYWpheFN0YXJ0XCIsXCJhamF4U3RvcFwiLFwiYWpheENvbXBsZXRlXCIsXCJhamF4RXJyb3JcIixcImFqYXhTdWNjZXNzXCIsXCJhamF4U2VuZFwiXSxmdW5jdGlvbihhLGIpe24uZm5bYl09ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMub24oYixhKX19KSxuLmV4cHIuZmlsdGVycy5hbmltYXRlZD1mdW5jdGlvbihhKXtyZXR1cm4gbi5ncmVwKG4udGltZXJzLGZ1bmN0aW9uKGIpe3JldHVybiBhPT09Yi5lbGVtfSkubGVuZ3RofTtmdW5jdGlvbiBtYyhhKXtyZXR1cm4gbi5pc1dpbmRvdyhhKT9hOjk9PT1hLm5vZGVUeXBlP2EuZGVmYXVsdFZpZXd8fGEucGFyZW50V2luZG93OiExfW4ub2Zmc2V0PXtzZXRPZmZzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGgsaSxqLGs9bi5jc3MoYSxcInBvc2l0aW9uXCIpLGw9bihhKSxtPXt9O1wic3RhdGljXCI9PT1rJiYoYS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpLGg9bC5vZmZzZXQoKSxmPW4uY3NzKGEsXCJ0b3BcIiksaT1uLmNzcyhhLFwibGVmdFwiKSxqPShcImFic29sdXRlXCI9PT1rfHxcImZpeGVkXCI9PT1rKSYmbi5pbkFycmF5KFwiYXV0b1wiLFtmLGldKT4tMSxqPyhkPWwucG9zaXRpb24oKSxnPWQudG9wLGU9ZC5sZWZ0KTooZz1wYXJzZUZsb2F0KGYpfHwwLGU9cGFyc2VGbG9hdChpKXx8MCksbi5pc0Z1bmN0aW9uKGIpJiYoYj1iLmNhbGwoYSxjLG4uZXh0ZW5kKHt9LGgpKSksbnVsbCE9Yi50b3AmJihtLnRvcD1iLnRvcC1oLnRvcCtnKSxudWxsIT1iLmxlZnQmJihtLmxlZnQ9Yi5sZWZ0LWgubGVmdCtlKSxcInVzaW5nXCJpbiBiP2IudXNpbmcuY2FsbChhLG0pOmwuY3NzKG0pfX0sbi5mbi5leHRlbmQoe29mZnNldDpmdW5jdGlvbihhKXtpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiB2b2lkIDA9PT1hP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24ub2Zmc2V0LnNldE9mZnNldCh0aGlzLGEsYil9KTt2YXIgYixjLGQ9e3RvcDowLGxlZnQ6MH0sZT10aGlzWzBdLGY9ZSYmZS5vd25lckRvY3VtZW50O2lmKGYpcmV0dXJuIGI9Zi5kb2N1bWVudEVsZW1lbnQsbi5jb250YWlucyhiLGUpPyhcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QmJihkPWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpLGM9bWMoZikse3RvcDpkLnRvcCsoYy5wYWdlWU9mZnNldHx8Yi5zY3JvbGxUb3ApLShiLmNsaWVudFRvcHx8MCksbGVmdDpkLmxlZnQrKGMucGFnZVhPZmZzZXR8fGIuc2Nyb2xsTGVmdCktKGIuY2xpZW50TGVmdHx8MCl9KTpkfSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXNbMF0pe3ZhciBhLGIsYz17dG9wOjAsbGVmdDowfSxkPXRoaXNbMF07cmV0dXJuXCJmaXhlZFwiPT09bi5jc3MoZCxcInBvc2l0aW9uXCIpP2I9ZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTooYT10aGlzLm9mZnNldFBhcmVudCgpLGI9dGhpcy5vZmZzZXQoKSxuLm5vZGVOYW1lKGFbMF0sXCJodG1sXCIpfHwoYz1hLm9mZnNldCgpKSxjLnRvcCs9bi5jc3MoYVswXSxcImJvcmRlclRvcFdpZHRoXCIsITApLGMubGVmdCs9bi5jc3MoYVswXSxcImJvcmRlckxlZnRXaWR0aFwiLCEwKSkse3RvcDpiLnRvcC1jLnRvcC1uLmNzcyhkLFwibWFyZ2luVG9wXCIsITApLGxlZnQ6Yi5sZWZ0LWMubGVmdC1uLmNzcyhkLFwibWFyZ2luTGVmdFwiLCEwKX19fSxvZmZzZXRQYXJlbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9mZnNldFBhcmVudDt3aGlsZShhJiYhbi5ub2RlTmFtZShhLFwiaHRtbFwiKSYmXCJzdGF0aWNcIj09PW4uY3NzKGEsXCJwb3NpdGlvblwiKSlhPWEub2Zmc2V0UGFyZW50O3JldHVybiBhfHxRYX0pfX0pLG4uZWFjaCh7c2Nyb2xsTGVmdDpcInBhZ2VYT2Zmc2V0XCIsc2Nyb2xsVG9wOlwicGFnZVlPZmZzZXRcIn0sZnVuY3Rpb24oYSxiKXt2YXIgYz0vWS8udGVzdChiKTtuLmZuW2FdPWZ1bmN0aW9uKGQpe3JldHVybiBZKHRoaXMsZnVuY3Rpb24oYSxkLGUpe3ZhciBmPW1jKGEpO3JldHVybiB2b2lkIDA9PT1lP2Y/YiBpbiBmP2ZbYl06Zi5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbZF06YVtkXTp2b2lkKGY/Zi5zY3JvbGxUbyhjP24oZikuc2Nyb2xsTGVmdCgpOmUsYz9lOm4oZikuc2Nyb2xsVG9wKCkpOmFbZF09ZSl9LGEsZCxhcmd1bWVudHMubGVuZ3RoLG51bGwpfX0pLG4uZWFjaChbXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oYSxiKXtuLmNzc0hvb2tzW2JdPVVhKGwucGl4ZWxQb3NpdGlvbixmdW5jdGlvbihhLGMpe3JldHVybiBjPyhjPVNhKGEsYiksT2EudGVzdChjKT9uKGEpLnBvc2l0aW9uKClbYl0rXCJweFwiOmMpOnZvaWQgMH0pfSksbi5lYWNoKHtIZWlnaHQ6XCJoZWlnaHRcIixXaWR0aDpcIndpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7bi5lYWNoKHtcbnBhZGRpbmc6XCJpbm5lclwiK2EsY29udGVudDpiLFwiXCI6XCJvdXRlclwiK2F9LGZ1bmN0aW9uKGMsZCl7bi5mbltkXT1mdW5jdGlvbihkLGUpe3ZhciBmPWFyZ3VtZW50cy5sZW5ndGgmJihjfHxcImJvb2xlYW5cIiE9dHlwZW9mIGQpLGc9Y3x8KGQ9PT0hMHx8ZT09PSEwP1wibWFyZ2luXCI6XCJib3JkZXJcIik7cmV0dXJuIFkodGhpcyxmdW5jdGlvbihiLGMsZCl7dmFyIGU7cmV0dXJuIG4uaXNXaW5kb3coYik/Yi5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIithXTo5PT09Yi5ub2RlVHlwZT8oZT1iLmRvY3VtZW50RWxlbWVudCxNYXRoLm1heChiLmJvZHlbXCJzY3JvbGxcIithXSxlW1wic2Nyb2xsXCIrYV0sYi5ib2R5W1wib2Zmc2V0XCIrYV0sZVtcIm9mZnNldFwiK2FdLGVbXCJjbGllbnRcIithXSkpOnZvaWQgMD09PWQ/bi5jc3MoYixjLGcpOm4uc3R5bGUoYixjLGQsZyl9LGIsZj9kOnZvaWQgMCxmLG51bGwpfX0pfSksbi5mbi5leHRlbmQoe2JpbmQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLm9uKGEsbnVsbCxiLGMpfSx1bmJpbmQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5vZmYoYSxudWxsLGIpfSxkZWxlZ2F0ZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5vbihiLGEsYyxkKX0sdW5kZWxlZ2F0ZTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIDE9PT1hcmd1bWVudHMubGVuZ3RoP3RoaXMub2ZmKGEsXCIqKlwiKTp0aGlzLm9mZihiLGF8fFwiKipcIixjKX19KSxuLmZuLnNpemU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5sZW5ndGh9LG4uZm4uYW5kU2VsZj1uLmZuLmFkZEJhY2ssXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoXCJqcXVlcnlcIixbXSxmdW5jdGlvbigpe3JldHVybiBufSk7dmFyIG5jPWEualF1ZXJ5LG9jPWEuJDtyZXR1cm4gbi5ub0NvbmZsaWN0PWZ1bmN0aW9uKGIpe3JldHVybiBhLiQ9PT1uJiYoYS4kPW9jKSxiJiZhLmpRdWVyeT09PW4mJihhLmpRdWVyeT1uYyksbn0sYnx8KGEualF1ZXJ5PWEuJD1uKSxufSk7XG4iLCIvKiFcbiAqIGltYWdlc0xvYWRlZCBQQUNLQUdFRCB2NC4xLjRcbiAqIEphdmFTY3JpcHQgaXMgYWxsIGxpa2UgXCJZb3UgaW1hZ2VzIGFyZSBkb25lIHlldCBvciB3aGF0P1wiXG4gKiBNSVQgTGljZW5zZVxuICovXG5cbi8qKlxuICogRXZFbWl0dGVyIHYxLjEuMFxuICogTGlsJyBldmVudCBlbWl0dGVyXG4gKiBNSVQgTGljZW5zZVxuICovXG5cbi8qIGpzaGludCB1bnVzZWQ6IHRydWUsIHVuZGVmOiB0cnVlLCBzdHJpY3Q6IHRydWUgKi9cblxuKCBmdW5jdGlvbiggZ2xvYmFsLCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLyogZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgd2luZG93ICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EIC0gUmVxdWlyZUpTXG4gICAgZGVmaW5lKCAnZXYtZW1pdHRlci9ldi1lbWl0dGVyJyxmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlMgLSBCcm93c2VyaWZ5LCBXZWJwYWNrXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgZ2xvYmFsLkV2RW1pdHRlciA9IGZhY3RvcnkoKTtcbiAgfVxuXG59KCB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnID8gd2luZG93IDogdGhpcywgZnVuY3Rpb24oKSB7XG5cblxuXG5mdW5jdGlvbiBFdkVtaXR0ZXIoKSB7fVxuXG52YXIgcHJvdG8gPSBFdkVtaXR0ZXIucHJvdG90eXBlO1xuXG5wcm90by5vbiA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICBpZiAoICFldmVudE5hbWUgfHwgIWxpc3RlbmVyICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBzZXQgZXZlbnRzIGhhc2hcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgLy8gc2V0IGxpc3RlbmVycyBhcnJheVxuICB2YXIgbGlzdGVuZXJzID0gZXZlbnRzWyBldmVudE5hbWUgXSA9IGV2ZW50c1sgZXZlbnROYW1lIF0gfHwgW107XG4gIC8vIG9ubHkgYWRkIG9uY2VcbiAgaWYgKCBsaXN0ZW5lcnMuaW5kZXhPZiggbGlzdGVuZXIgKSA9PSAtMSApIHtcbiAgICBsaXN0ZW5lcnMucHVzaCggbGlzdGVuZXIgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8ub25jZSA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICBpZiAoICFldmVudE5hbWUgfHwgIWxpc3RlbmVyICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBhZGQgZXZlbnRcbiAgdGhpcy5vbiggZXZlbnROYW1lLCBsaXN0ZW5lciApO1xuICAvLyBzZXQgb25jZSBmbGFnXG4gIC8vIHNldCBvbmNlRXZlbnRzIGhhc2hcbiAgdmFyIG9uY2VFdmVudHMgPSB0aGlzLl9vbmNlRXZlbnRzID0gdGhpcy5fb25jZUV2ZW50cyB8fCB7fTtcbiAgLy8gc2V0IG9uY2VMaXN0ZW5lcnMgb2JqZWN0XG4gIHZhciBvbmNlTGlzdGVuZXJzID0gb25jZUV2ZW50c1sgZXZlbnROYW1lIF0gPSBvbmNlRXZlbnRzWyBldmVudE5hbWUgXSB8fCB7fTtcbiAgLy8gc2V0IGZsYWdcbiAgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXSA9IHRydWU7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5vZmYgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50cyAmJiB0aGlzLl9ldmVudHNbIGV2ZW50TmFtZSBdO1xuICBpZiAoICFsaXN0ZW5lcnMgfHwgIWxpc3RlbmVycy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBpbmRleCA9IGxpc3RlbmVycy5pbmRleE9mKCBsaXN0ZW5lciApO1xuICBpZiAoIGluZGV4ICE9IC0xICkge1xuICAgIGxpc3RlbmVycy5zcGxpY2UoIGluZGV4LCAxICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLmVtaXRFdmVudCA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGFyZ3MgKSB7XG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHMgJiYgdGhpcy5fZXZlbnRzWyBldmVudE5hbWUgXTtcbiAgaWYgKCAhbGlzdGVuZXJzIHx8ICFsaXN0ZW5lcnMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBjb3B5IG92ZXIgdG8gYXZvaWQgaW50ZXJmZXJlbmNlIGlmIC5vZmYoKSBpbiBsaXN0ZW5lclxuICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuc2xpY2UoMCk7XG4gIGFyZ3MgPSBhcmdzIHx8IFtdO1xuICAvLyBvbmNlIHN0dWZmXG4gIHZhciBvbmNlTGlzdGVuZXJzID0gdGhpcy5fb25jZUV2ZW50cyAmJiB0aGlzLl9vbmNlRXZlbnRzWyBldmVudE5hbWUgXTtcblxuICBmb3IgKCB2YXIgaT0wOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrICkge1xuICAgIHZhciBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXVxuICAgIHZhciBpc09uY2UgPSBvbmNlTGlzdGVuZXJzICYmIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF07XG4gICAgaWYgKCBpc09uY2UgKSB7XG4gICAgICAvLyByZW1vdmUgbGlzdGVuZXJcbiAgICAgIC8vIHJlbW92ZSBiZWZvcmUgdHJpZ2dlciB0byBwcmV2ZW50IHJlY3Vyc2lvblxuICAgICAgdGhpcy5vZmYoIGV2ZW50TmFtZSwgbGlzdGVuZXIgKTtcbiAgICAgIC8vIHVuc2V0IG9uY2UgZmxhZ1xuICAgICAgZGVsZXRlIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF07XG4gICAgfVxuICAgIC8vIHRyaWdnZXIgbGlzdGVuZXJcbiAgICBsaXN0ZW5lci5hcHBseSggdGhpcywgYXJncyApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5hbGxPZmYgPSBmdW5jdGlvbigpIHtcbiAgZGVsZXRlIHRoaXMuX2V2ZW50cztcbiAgZGVsZXRlIHRoaXMuX29uY2VFdmVudHM7XG59O1xuXG5yZXR1cm4gRXZFbWl0dGVyO1xuXG59KSk7XG5cbi8qIVxuICogaW1hZ2VzTG9hZGVkIHY0LjEuNFxuICogSmF2YVNjcmlwdCBpcyBhbGwgbGlrZSBcIllvdSBpbWFnZXMgYXJlIGRvbmUgeWV0IG9yIHdoYXQ/XCJcbiAqIE1JVCBMaWNlbnNlXG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkgeyAndXNlIHN0cmljdCc7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuXG4gIC8qZ2xvYmFsIGRlZmluZTogZmFsc2UsIG1vZHVsZTogZmFsc2UsIHJlcXVpcmU6IGZhbHNlICovXG5cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICdldi1lbWl0dGVyL2V2LWVtaXR0ZXInXG4gICAgXSwgZnVuY3Rpb24oIEV2RW1pdHRlciApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIEV2RW1pdHRlciApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnZXYtZW1pdHRlcicpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5pbWFnZXNMb2FkZWQgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LkV2RW1pdHRlclxuICAgICk7XG4gIH1cblxufSkoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdGhpcyxcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIGZhY3RvcnkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBFdkVtaXR0ZXIgKSB7XG5cblxuXG52YXIgJCA9IHdpbmRvdy5qUXVlcnk7XG52YXIgY29uc29sZSA9IHdpbmRvdy5jb25zb2xlO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWxwZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGV4dGVuZCBvYmplY3RzXG5mdW5jdGlvbiBleHRlbmQoIGEsIGIgKSB7XG4gIGZvciAoIHZhciBwcm9wIGluIGIgKSB7XG4gICAgYVsgcHJvcCBdID0gYlsgcHJvcCBdO1xuICB9XG4gIHJldHVybiBhO1xufVxuXG52YXIgYXJyYXlTbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuLy8gdHVybiBlbGVtZW50IG9yIG5vZGVMaXN0IGludG8gYW4gYXJyYXlcbmZ1bmN0aW9uIG1ha2VBcnJheSggb2JqICkge1xuICBpZiAoIEFycmF5LmlzQXJyYXkoIG9iaiApICkge1xuICAgIC8vIHVzZSBvYmplY3QgaWYgYWxyZWFkeSBhbiBhcnJheVxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICB2YXIgaXNBcnJheUxpa2UgPSB0eXBlb2Ygb2JqID09ICdvYmplY3QnICYmIHR5cGVvZiBvYmoubGVuZ3RoID09ICdudW1iZXInO1xuICBpZiAoIGlzQXJyYXlMaWtlICkge1xuICAgIC8vIGNvbnZlcnQgbm9kZUxpc3QgdG8gYXJyYXlcbiAgICByZXR1cm4gYXJyYXlTbGljZS5jYWxsKCBvYmogKTtcbiAgfVxuXG4gIC8vIGFycmF5IG9mIHNpbmdsZSBpbmRleFxuICByZXR1cm4gWyBvYmogXTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaW1hZ2VzTG9hZGVkIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheSwgRWxlbWVudCwgTm9kZUxpc3QsIFN0cmluZ30gZWxlbVxuICogQHBhcmFtIHtPYmplY3Qgb3IgRnVuY3Rpb259IG9wdGlvbnMgLSBpZiBmdW5jdGlvbiwgdXNlIGFzIGNhbGxiYWNrXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkFsd2F5cyAtIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIEltYWdlc0xvYWRlZCggZWxlbSwgb3B0aW9ucywgb25BbHdheXMgKSB7XG4gIC8vIGNvZXJjZSBJbWFnZXNMb2FkZWQoKSB3aXRob3V0IG5ldywgdG8gYmUgbmV3IEltYWdlc0xvYWRlZCgpXG4gIGlmICggISggdGhpcyBpbnN0YW5jZW9mIEltYWdlc0xvYWRlZCApICkge1xuICAgIHJldHVybiBuZXcgSW1hZ2VzTG9hZGVkKCBlbGVtLCBvcHRpb25zLCBvbkFsd2F5cyApO1xuICB9XG4gIC8vIHVzZSBlbGVtIGFzIHNlbGVjdG9yIHN0cmluZ1xuICB2YXIgcXVlcnlFbGVtID0gZWxlbTtcbiAgaWYgKCB0eXBlb2YgZWxlbSA9PSAnc3RyaW5nJyApIHtcbiAgICBxdWVyeUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBlbGVtICk7XG4gIH1cbiAgLy8gYmFpbCBpZiBiYWQgZWxlbWVudFxuICBpZiAoICFxdWVyeUVsZW0gKSB7XG4gICAgY29uc29sZS5lcnJvciggJ0JhZCBlbGVtZW50IGZvciBpbWFnZXNMb2FkZWQgJyArICggcXVlcnlFbGVtIHx8IGVsZW0gKSApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuZWxlbWVudHMgPSBtYWtlQXJyYXkoIHF1ZXJ5RWxlbSApO1xuICB0aGlzLm9wdGlvbnMgPSBleHRlbmQoIHt9LCB0aGlzLm9wdGlvbnMgKTtcbiAgLy8gc2hpZnQgYXJndW1lbnRzIGlmIG5vIG9wdGlvbnMgc2V0XG4gIGlmICggdHlwZW9mIG9wdGlvbnMgPT0gJ2Z1bmN0aW9uJyApIHtcbiAgICBvbkFsd2F5cyA9IG9wdGlvbnM7XG4gIH0gZWxzZSB7XG4gICAgZXh0ZW5kKCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMgKTtcbiAgfVxuXG4gIGlmICggb25BbHdheXMgKSB7XG4gICAgdGhpcy5vbiggJ2Fsd2F5cycsIG9uQWx3YXlzICk7XG4gIH1cblxuICB0aGlzLmdldEltYWdlcygpO1xuXG4gIGlmICggJCApIHtcbiAgICAvLyBhZGQgalF1ZXJ5IERlZmVycmVkIG9iamVjdFxuICAgIHRoaXMuanFEZWZlcnJlZCA9IG5ldyAkLkRlZmVycmVkKCk7XG4gIH1cblxuICAvLyBIQUNLIGNoZWNrIGFzeW5jIHRvIGFsbG93IHRpbWUgdG8gYmluZCBsaXN0ZW5lcnNcbiAgc2V0VGltZW91dCggdGhpcy5jaGVjay5iaW5kKCB0aGlzICkgKTtcbn1cblxuSW1hZ2VzTG9hZGVkLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEV2RW1pdHRlci5wcm90b3R5cGUgKTtcblxuSW1hZ2VzTG9hZGVkLnByb3RvdHlwZS5vcHRpb25zID0ge307XG5cbkltYWdlc0xvYWRlZC5wcm90b3R5cGUuZ2V0SW1hZ2VzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuaW1hZ2VzID0gW107XG5cbiAgLy8gZmlsdGVyICYgZmluZCBpdGVtcyBpZiB3ZSBoYXZlIGFuIGl0ZW0gc2VsZWN0b3JcbiAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKCB0aGlzLmFkZEVsZW1lbnRJbWFnZXMsIHRoaXMgKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlfSBlbGVtZW50XG4gKi9cbkltYWdlc0xvYWRlZC5wcm90b3R5cGUuYWRkRWxlbWVudEltYWdlcyA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICAvLyBmaWx0ZXIgc2libGluZ3NcbiAgaWYgKCBlbGVtLm5vZGVOYW1lID09ICdJTUcnICkge1xuICAgIHRoaXMuYWRkSW1hZ2UoIGVsZW0gKTtcbiAgfVxuICAvLyBnZXQgYmFja2dyb3VuZCBpbWFnZSBvbiBlbGVtZW50XG4gIGlmICggdGhpcy5vcHRpb25zLmJhY2tncm91bmQgPT09IHRydWUgKSB7XG4gICAgdGhpcy5hZGRFbGVtZW50QmFja2dyb3VuZEltYWdlcyggZWxlbSApO1xuICB9XG5cbiAgLy8gZmluZCBjaGlsZHJlblxuICAvLyBubyBub24tZWxlbWVudCBub2RlcywgIzE0M1xuICB2YXIgbm9kZVR5cGUgPSBlbGVtLm5vZGVUeXBlO1xuICBpZiAoICFub2RlVHlwZSB8fCAhZWxlbWVudE5vZGVUeXBlc1sgbm9kZVR5cGUgXSApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGNoaWxkSW1ncyA9IGVsZW0ucXVlcnlTZWxlY3RvckFsbCgnaW1nJyk7XG4gIC8vIGNvbmNhdCBjaGlsZEVsZW1zIHRvIGZpbHRlckZvdW5kIGFycmF5XG4gIGZvciAoIHZhciBpPTA7IGkgPCBjaGlsZEltZ3MubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIGltZyA9IGNoaWxkSW1nc1tpXTtcbiAgICB0aGlzLmFkZEltYWdlKCBpbWcgKTtcbiAgfVxuXG4gIC8vIGdldCBjaGlsZCBiYWNrZ3JvdW5kIGltYWdlc1xuICBpZiAoIHR5cGVvZiB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZCA9PSAnc3RyaW5nJyApIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBlbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoIHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kICk7XG4gICAgZm9yICggaT0wOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKysgKSB7XG4gICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIHRoaXMuYWRkRWxlbWVudEJhY2tncm91bmRJbWFnZXMoIGNoaWxkICk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgZWxlbWVudE5vZGVUeXBlcyA9IHtcbiAgMTogdHJ1ZSxcbiAgOTogdHJ1ZSxcbiAgMTE6IHRydWVcbn07XG5cbkltYWdlc0xvYWRlZC5wcm90b3R5cGUuYWRkRWxlbWVudEJhY2tncm91bmRJbWFnZXMgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSggZWxlbSApO1xuICBpZiAoICFzdHlsZSApIHtcbiAgICAvLyBGaXJlZm94IHJldHVybnMgbnVsbCBpZiBpbiBhIGhpZGRlbiBpZnJhbWUgaHR0cHM6Ly9idWd6aWwubGEvNTQ4Mzk3XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGdldCB1cmwgaW5zaWRlIHVybChcIi4uLlwiKVxuICB2YXIgcmVVUkwgPSAvdXJsXFwoKFsnXCJdKT8oLio/KVxcMVxcKS9naTtcbiAgdmFyIG1hdGNoZXMgPSByZVVSTC5leGVjKCBzdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgKTtcbiAgd2hpbGUgKCBtYXRjaGVzICE9PSBudWxsICkge1xuICAgIHZhciB1cmwgPSBtYXRjaGVzICYmIG1hdGNoZXNbMl07XG4gICAgaWYgKCB1cmwgKSB7XG4gICAgICB0aGlzLmFkZEJhY2tncm91bmQoIHVybCwgZWxlbSApO1xuICAgIH1cbiAgICBtYXRjaGVzID0gcmVVUkwuZXhlYyggc3R5bGUuYmFja2dyb3VuZEltYWdlICk7XG4gIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHtJbWFnZX0gaW1nXG4gKi9cbkltYWdlc0xvYWRlZC5wcm90b3R5cGUuYWRkSW1hZ2UgPSBmdW5jdGlvbiggaW1nICkge1xuICB2YXIgbG9hZGluZ0ltYWdlID0gbmV3IExvYWRpbmdJbWFnZSggaW1nICk7XG4gIHRoaXMuaW1hZ2VzLnB1c2goIGxvYWRpbmdJbWFnZSApO1xufTtcblxuSW1hZ2VzTG9hZGVkLnByb3RvdHlwZS5hZGRCYWNrZ3JvdW5kID0gZnVuY3Rpb24oIHVybCwgZWxlbSApIHtcbiAgdmFyIGJhY2tncm91bmQgPSBuZXcgQmFja2dyb3VuZCggdXJsLCBlbGVtICk7XG4gIHRoaXMuaW1hZ2VzLnB1c2goIGJhY2tncm91bmQgKTtcbn07XG5cbkltYWdlc0xvYWRlZC5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcbiAgdGhpcy5wcm9ncmVzc2VkQ291bnQgPSAwO1xuICB0aGlzLmhhc0FueUJyb2tlbiA9IGZhbHNlO1xuICAvLyBjb21wbGV0ZSBpZiBubyBpbWFnZXNcbiAgaWYgKCAhdGhpcy5pbWFnZXMubGVuZ3RoICkge1xuICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBmdW5jdGlvbiBvblByb2dyZXNzKCBpbWFnZSwgZWxlbSwgbWVzc2FnZSApIHtcbiAgICAvLyBIQUNLIC0gQ2hyb21lIHRyaWdnZXJzIGV2ZW50IGJlZm9yZSBvYmplY3QgcHJvcGVydGllcyBoYXZlIGNoYW5nZWQuICM4M1xuICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgX3RoaXMucHJvZ3Jlc3MoIGltYWdlLCBlbGVtLCBtZXNzYWdlICk7XG4gICAgfSk7XG4gIH1cblxuICB0aGlzLmltYWdlcy5mb3JFYWNoKCBmdW5jdGlvbiggbG9hZGluZ0ltYWdlICkge1xuICAgIGxvYWRpbmdJbWFnZS5vbmNlKCAncHJvZ3Jlc3MnLCBvblByb2dyZXNzICk7XG4gICAgbG9hZGluZ0ltYWdlLmNoZWNrKCk7XG4gIH0pO1xufTtcblxuSW1hZ2VzTG9hZGVkLnByb3RvdHlwZS5wcm9ncmVzcyA9IGZ1bmN0aW9uKCBpbWFnZSwgZWxlbSwgbWVzc2FnZSApIHtcbiAgdGhpcy5wcm9ncmVzc2VkQ291bnQrKztcbiAgdGhpcy5oYXNBbnlCcm9rZW4gPSB0aGlzLmhhc0FueUJyb2tlbiB8fCAhaW1hZ2UuaXNMb2FkZWQ7XG4gIC8vIHByb2dyZXNzIGV2ZW50XG4gIHRoaXMuZW1pdEV2ZW50KCAncHJvZ3Jlc3MnLCBbIHRoaXMsIGltYWdlLCBlbGVtIF0gKTtcbiAgaWYgKCB0aGlzLmpxRGVmZXJyZWQgJiYgdGhpcy5qcURlZmVycmVkLm5vdGlmeSApIHtcbiAgICB0aGlzLmpxRGVmZXJyZWQubm90aWZ5KCB0aGlzLCBpbWFnZSApO1xuICB9XG4gIC8vIGNoZWNrIGlmIGNvbXBsZXRlZFxuICBpZiAoIHRoaXMucHJvZ3Jlc3NlZENvdW50ID09IHRoaXMuaW1hZ2VzLmxlbmd0aCApIHtcbiAgICB0aGlzLmNvbXBsZXRlKCk7XG4gIH1cblxuICBpZiAoIHRoaXMub3B0aW9ucy5kZWJ1ZyAmJiBjb25zb2xlICkge1xuICAgIGNvbnNvbGUubG9nKCAncHJvZ3Jlc3M6ICcgKyBtZXNzYWdlLCBpbWFnZSwgZWxlbSApO1xuICB9XG59O1xuXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBldmVudE5hbWUgPSB0aGlzLmhhc0FueUJyb2tlbiA/ICdmYWlsJyA6ICdkb25lJztcbiAgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgdGhpcy5lbWl0RXZlbnQoIGV2ZW50TmFtZSwgWyB0aGlzIF0gKTtcbiAgdGhpcy5lbWl0RXZlbnQoICdhbHdheXMnLCBbIHRoaXMgXSApO1xuICBpZiAoIHRoaXMuanFEZWZlcnJlZCApIHtcbiAgICB2YXIganFNZXRob2QgPSB0aGlzLmhhc0FueUJyb2tlbiA/ICdyZWplY3QnIDogJ3Jlc29sdmUnO1xuICAgIHRoaXMuanFEZWZlcnJlZFsganFNZXRob2QgXSggdGhpcyApO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZnVuY3Rpb24gTG9hZGluZ0ltYWdlKCBpbWcgKSB7XG4gIHRoaXMuaW1nID0gaW1nO1xufVxuXG5Mb2FkaW5nSW1hZ2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRXZFbWl0dGVyLnByb3RvdHlwZSApO1xuXG5Mb2FkaW5nSW1hZ2UucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oKSB7XG4gIC8vIElmIGNvbXBsZXRlIGlzIHRydWUgYW5kIGJyb3dzZXIgc3VwcG9ydHMgbmF0dXJhbCBzaXplcyxcbiAgLy8gdHJ5IHRvIGNoZWNrIGZvciBpbWFnZSBzdGF0dXMgbWFudWFsbHkuXG4gIHZhciBpc0NvbXBsZXRlID0gdGhpcy5nZXRJc0ltYWdlQ29tcGxldGUoKTtcbiAgaWYgKCBpc0NvbXBsZXRlICkge1xuICAgIC8vIHJlcG9ydCBiYXNlZCBvbiBuYXR1cmFsV2lkdGhcbiAgICB0aGlzLmNvbmZpcm0oIHRoaXMuaW1nLm5hdHVyYWxXaWR0aCAhPT0gMCwgJ25hdHVyYWxXaWR0aCcgKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBJZiBub25lIG9mIHRoZSBjaGVja3MgYWJvdmUgbWF0Y2hlZCwgc2ltdWxhdGUgbG9hZGluZyBvbiBkZXRhY2hlZCBlbGVtZW50LlxuICB0aGlzLnByb3h5SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgdGhpcy5wcm94eUltYWdlLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgdGhpcyApO1xuICB0aGlzLnByb3h5SW1hZ2UuYWRkRXZlbnRMaXN0ZW5lciggJ2Vycm9yJywgdGhpcyApO1xuICAvLyBiaW5kIHRvIGltYWdlIGFzIHdlbGwgZm9yIEZpcmVmb3guICMxOTFcbiAgdGhpcy5pbWcuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCB0aGlzICk7XG4gIHRoaXMuaW1nLmFkZEV2ZW50TGlzdGVuZXIoICdlcnJvcicsIHRoaXMgKTtcbiAgdGhpcy5wcm94eUltYWdlLnNyYyA9IHRoaXMuaW1nLnNyYztcbn07XG5cbkxvYWRpbmdJbWFnZS5wcm90b3R5cGUuZ2V0SXNJbWFnZUNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gIC8vIGNoZWNrIGZvciBub24temVybywgbm9uLXVuZGVmaW5lZCBuYXR1cmFsV2lkdGhcbiAgLy8gZml4ZXMgU2FmYXJpK0luZmluaXRlU2Nyb2xsK01hc29ucnkgYnVnIGluZmluaXRlLXNjcm9sbCM2NzFcbiAgcmV0dXJuIHRoaXMuaW1nLmNvbXBsZXRlICYmIHRoaXMuaW1nLm5hdHVyYWxXaWR0aDtcbn07XG5cbkxvYWRpbmdJbWFnZS5wcm90b3R5cGUuY29uZmlybSA9IGZ1bmN0aW9uKCBpc0xvYWRlZCwgbWVzc2FnZSApIHtcbiAgdGhpcy5pc0xvYWRlZCA9IGlzTG9hZGVkO1xuICB0aGlzLmVtaXRFdmVudCggJ3Byb2dyZXNzJywgWyB0aGlzLCB0aGlzLmltZywgbWVzc2FnZSBdICk7XG59O1xuXG4vLyAtLS0tLSBldmVudHMgLS0tLS0gLy9cblxuLy8gdHJpZ2dlciBzcGVjaWZpZWQgaGFuZGxlciBmb3IgZXZlbnQgdHlwZVxuTG9hZGluZ0ltYWdlLnByb3RvdHlwZS5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdmFyIG1ldGhvZCA9ICdvbicgKyBldmVudC50eXBlO1xuICBpZiAoIHRoaXNbIG1ldGhvZCBdICkge1xuICAgIHRoaXNbIG1ldGhvZCBdKCBldmVudCApO1xuICB9XG59O1xuXG5Mb2FkaW5nSW1hZ2UucHJvdG90eXBlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmNvbmZpcm0oIHRydWUsICdvbmxvYWQnICk7XG4gIHRoaXMudW5iaW5kRXZlbnRzKCk7XG59O1xuXG5Mb2FkaW5nSW1hZ2UucHJvdG90eXBlLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5jb25maXJtKCBmYWxzZSwgJ29uZXJyb3InICk7XG4gIHRoaXMudW5iaW5kRXZlbnRzKCk7XG59O1xuXG5Mb2FkaW5nSW1hZ2UucHJvdG90eXBlLnVuYmluZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnByb3h5SW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCB0aGlzICk7XG4gIHRoaXMucHJveHlJbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCAnZXJyb3InLCB0aGlzICk7XG4gIHRoaXMuaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdsb2FkJywgdGhpcyApO1xuICB0aGlzLmltZy5yZW1vdmVFdmVudExpc3RlbmVyKCAnZXJyb3InLCB0aGlzICk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBCYWNrZ3JvdW5kIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmZ1bmN0aW9uIEJhY2tncm91bmQoIHVybCwgZWxlbWVudCApIHtcbiAgdGhpcy51cmwgPSB1cmw7XG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XG59XG5cbi8vIGluaGVyaXQgTG9hZGluZ0ltYWdlIHByb3RvdHlwZVxuQmFja2dyb3VuZC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBMb2FkaW5nSW1hZ2UucHJvdG90eXBlICk7XG5cbkJhY2tncm91bmQucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuaW1nLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgdGhpcyApO1xuICB0aGlzLmltZy5hZGRFdmVudExpc3RlbmVyKCAnZXJyb3InLCB0aGlzICk7XG4gIHRoaXMuaW1nLnNyYyA9IHRoaXMudXJsO1xuICAvLyBjaGVjayBpZiBpbWFnZSBpcyBhbHJlYWR5IGNvbXBsZXRlXG4gIHZhciBpc0NvbXBsZXRlID0gdGhpcy5nZXRJc0ltYWdlQ29tcGxldGUoKTtcbiAgaWYgKCBpc0NvbXBsZXRlICkge1xuICAgIHRoaXMuY29uZmlybSggdGhpcy5pbWcubmF0dXJhbFdpZHRoICE9PSAwLCAnbmF0dXJhbFdpZHRoJyApO1xuICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG4gIH1cbn07XG5cbkJhY2tncm91bmQucHJvdG90eXBlLnVuYmluZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmltZy5yZW1vdmVFdmVudExpc3RlbmVyKCAnbG9hZCcsIHRoaXMgKTtcbiAgdGhpcy5pbWcucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2Vycm9yJywgdGhpcyApO1xufTtcblxuQmFja2dyb3VuZC5wcm90b3R5cGUuY29uZmlybSA9IGZ1bmN0aW9uKCBpc0xvYWRlZCwgbWVzc2FnZSApIHtcbiAgdGhpcy5pc0xvYWRlZCA9IGlzTG9hZGVkO1xuICB0aGlzLmVtaXRFdmVudCggJ3Byb2dyZXNzJywgWyB0aGlzLCB0aGlzLmVsZW1lbnQsIG1lc3NhZ2UgXSApO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0galF1ZXJ5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbkltYWdlc0xvYWRlZC5tYWtlSlF1ZXJ5UGx1Z2luID0gZnVuY3Rpb24oIGpRdWVyeSApIHtcbiAgalF1ZXJ5ID0galF1ZXJ5IHx8IHdpbmRvdy5qUXVlcnk7XG4gIGlmICggIWpRdWVyeSApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gc2V0IGxvY2FsIHZhcmlhYmxlXG4gICQgPSBqUXVlcnk7XG4gIC8vICQoKS5pbWFnZXNMb2FkZWQoKVxuICAkLmZuLmltYWdlc0xvYWRlZCA9IGZ1bmN0aW9uKCBvcHRpb25zLCBjYWxsYmFjayApIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBuZXcgSW1hZ2VzTG9hZGVkKCB0aGlzLCBvcHRpb25zLCBjYWxsYmFjayApO1xuICAgIHJldHVybiBpbnN0YW5jZS5qcURlZmVycmVkLnByb21pc2UoICQodGhpcykgKTtcbiAgfTtcbn07XG4vLyB0cnkgbWFraW5nIHBsdWdpblxuSW1hZ2VzTG9hZGVkLm1ha2VKUXVlcnlQbHVnaW4oKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnJldHVybiBJbWFnZXNMb2FkZWQ7XG5cbn0pO1xuXG4iLCIvKipcbiAqIGJ4U2xpZGVyIHY0LjIuMTJcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUgU3RldmVuIFdhbmRlcnNraVxuICogV3JpdHRlbiB3aGlsZSBkcmlua2luZyBCZWxnaWFuIGFsZXMgYW5kIGxpc3RlbmluZyB0byBqYXp6XG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQpXG4gKi9cblxuOyhmdW5jdGlvbigkKSB7XG5cbiAgdmFyIGRlZmF1bHRzID0ge1xuXG4gICAgLy8gR0VORVJBTFxuICAgIG1vZGU6ICdob3Jpem9udGFsJyxcbiAgICBzbGlkZVNlbGVjdG9yOiAnJyxcbiAgICBpbmZpbml0ZUxvb3A6IHRydWUsXG4gICAgaGlkZUNvbnRyb2xPbkVuZDogZmFsc2UsXG4gICAgc3BlZWQ6IDUwMCxcbiAgICBlYXNpbmc6IG51bGwsXG4gICAgc2xpZGVNYXJnaW46IDAsXG4gICAgc3RhcnRTbGlkZTogMCxcbiAgICByYW5kb21TdGFydDogZmFsc2UsXG4gICAgY2FwdGlvbnM6IGZhbHNlLFxuICAgIHRpY2tlcjogZmFsc2UsXG4gICAgdGlja2VySG92ZXI6IGZhbHNlLFxuICAgIGFkYXB0aXZlSGVpZ2h0OiBmYWxzZSxcbiAgICBhZGFwdGl2ZUhlaWdodFNwZWVkOiA1MDAsXG4gICAgdmlkZW86IGZhbHNlLFxuICAgIHVzZUNTUzogdHJ1ZSxcbiAgICBwcmVsb2FkSW1hZ2VzOiAndmlzaWJsZScsXG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICBzbGlkZVpJbmRleDogNTAsXG4gICAgd3JhcHBlckNsYXNzOiAnYngtd3JhcHBlcicsXG5cbiAgICAvLyBUT1VDSFxuICAgIHRvdWNoRW5hYmxlZDogdHJ1ZSxcbiAgICBzd2lwZVRocmVzaG9sZDogNTAsXG4gICAgb25lVG9PbmVUb3VjaDogdHJ1ZSxcbiAgICBwcmV2ZW50RGVmYXVsdFN3aXBlWDogdHJ1ZSxcbiAgICBwcmV2ZW50RGVmYXVsdFN3aXBlWTogZmFsc2UsXG5cbiAgICAvLyBBQ0NFU1NJQklMSVRZXG4gICAgYXJpYUxpdmU6IHRydWUsXG4gICAgYXJpYUhpZGRlbjogdHJ1ZSxcblxuICAgIC8vIEtFWUJPQVJEXG4gICAga2V5Ym9hcmRFbmFibGVkOiBmYWxzZSxcblxuICAgIC8vIFBBR0VSXG4gICAgcGFnZXI6IHRydWUsXG4gICAgcGFnZXJUeXBlOiAnZnVsbCcsXG4gICAgcGFnZXJTaG9ydFNlcGFyYXRvcjogJyAvICcsXG4gICAgcGFnZXJTZWxlY3RvcjogbnVsbCxcbiAgICBidWlsZFBhZ2VyOiBudWxsLFxuICAgIHBhZ2VyQ3VzdG9tOiBudWxsLFxuXG4gICAgLy8gQ09OVFJPTFNcbiAgICBjb250cm9sczogdHJ1ZSxcbiAgICBuZXh0VGV4dDogJ05leHQnLFxuICAgIHByZXZUZXh0OiAnUHJldicsXG4gICAgbmV4dFNlbGVjdG9yOiBudWxsLFxuICAgIHByZXZTZWxlY3RvcjogbnVsbCxcbiAgICBhdXRvQ29udHJvbHM6IGZhbHNlLFxuICAgIHN0YXJ0VGV4dDogJ1N0YXJ0JyxcbiAgICBzdG9wVGV4dDogJ1N0b3AnLFxuICAgIGF1dG9Db250cm9sc0NvbWJpbmU6IGZhbHNlLFxuICAgIGF1dG9Db250cm9sc1NlbGVjdG9yOiBudWxsLFxuXG4gICAgLy8gQVVUT1xuICAgIGF1dG86IGZhbHNlLFxuICAgIHBhdXNlOiA0MDAwLFxuICAgIGF1dG9TdGFydDogdHJ1ZSxcbiAgICBhdXRvRGlyZWN0aW9uOiAnbmV4dCcsXG4gICAgc3RvcEF1dG9PbkNsaWNrOiBmYWxzZSxcbiAgICBhdXRvSG92ZXI6IGZhbHNlLFxuICAgIGF1dG9EZWxheTogMCxcbiAgICBhdXRvU2xpZGVGb3JPbmVQYWdlOiBmYWxzZSxcblxuICAgIC8vIENBUk9VU0VMXG4gICAgbWluU2xpZGVzOiAxLFxuICAgIG1heFNsaWRlczogMSxcbiAgICBtb3ZlU2xpZGVzOiAwLFxuICAgIHNsaWRlV2lkdGg6IDAsXG4gICAgc2hyaW5rSXRlbXM6IGZhbHNlLFxuXG4gICAgLy8gQ0FMTEJBQ0tTXG4gICAgb25TbGlkZXJMb2FkOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgb25TbGlkZUJlZm9yZTogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlOyB9LFxuICAgIG9uU2xpZGVBZnRlcjogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlOyB9LFxuICAgIG9uU2xpZGVOZXh0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgb25TbGlkZVByZXY6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICBvblNsaWRlclJlc2l6ZTogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlOyB9LFxuXHRvbkF1dG9DaGFuZ2U6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZTsgfSAvL2NhbGxzIHdoZW4gYXV0byBzbGlkZXMgc3RhcnRzIGFuZCBzdG9wc1xuICB9O1xuXG4gICQuZm4uYnhTbGlkZXIgPSBmdW5jdGlvbihvcHRpb25zKSB7XG5cbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIHN1cHBvcnQgbXVsdGlwbGUgZWxlbWVudHNcbiAgICBpZiAodGhpcy5sZW5ndGggPiAxKSB7XG4gICAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykuYnhTbGlkZXIob3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBhIG5hbWVzcGFjZSB0byBiZSB1c2VkIHRocm91Z2hvdXQgdGhlIHBsdWdpblxuICAgIHZhciBzbGlkZXIgPSB7fSxcbiAgICAvLyBzZXQgYSByZWZlcmVuY2UgdG8gb3VyIHNsaWRlciBlbGVtZW50XG4gICAgZWwgPSB0aGlzLFxuICAgIC8vIGdldCB0aGUgb3JpZ2luYWwgd2luZG93IGRpbWVucyAodGhhbmtzIGEgbG90IElFKVxuICAgIHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCksXG4gICAgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuXG4gICAgLy8gUmV0dXJuIGlmIHNsaWRlciBpcyBhbHJlYWR5IGluaXRpYWxpemVkXG4gICAgaWYgKCQoZWwpLmRhdGEoJ2J4U2xpZGVyJykpIHsgcmV0dXJuOyB9XG5cbiAgICAvKipcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqID0gUFJJVkFURSBGVU5DVElPTlNcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgbmFtZXNwYWNlIHNldHRpbmdzIHRvIGJlIHVzZWQgdGhyb3VnaG91dCBwbHVnaW5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gUmV0dXJuIGlmIHNsaWRlciBpcyBhbHJlYWR5IGluaXRpYWxpemVkXG4gICAgICBpZiAoJChlbCkuZGF0YSgnYnhTbGlkZXInKSkgeyByZXR1cm47IH1cbiAgICAgIC8vIG1lcmdlIHVzZXItc3VwcGxpZWQgb3B0aW9ucyB3aXRoIHRoZSBkZWZhdWx0c1xuICAgICAgc2xpZGVyLnNldHRpbmdzID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgIC8vIHBhcnNlIHNsaWRlV2lkdGggc2V0dGluZ1xuICAgICAgc2xpZGVyLnNldHRpbmdzLnNsaWRlV2lkdGggPSBwYXJzZUludChzbGlkZXIuc2V0dGluZ3Muc2xpZGVXaWR0aCk7XG4gICAgICAvLyBzdG9yZSB0aGUgb3JpZ2luYWwgY2hpbGRyZW5cbiAgICAgIHNsaWRlci5jaGlsZHJlbiA9IGVsLmNoaWxkcmVuKHNsaWRlci5zZXR0aW5ncy5zbGlkZVNlbGVjdG9yKTtcbiAgICAgIC8vIGNoZWNrIGlmIGFjdHVhbCBudW1iZXIgb2Ygc2xpZGVzIGlzIGxlc3MgdGhhbiBtaW5TbGlkZXMgLyBtYXhTbGlkZXNcbiAgICAgIGlmIChzbGlkZXIuY2hpbGRyZW4ubGVuZ3RoIDwgc2xpZGVyLnNldHRpbmdzLm1pblNsaWRlcykgeyBzbGlkZXIuc2V0dGluZ3MubWluU2xpZGVzID0gc2xpZGVyLmNoaWxkcmVuLmxlbmd0aDsgfVxuICAgICAgaWYgKHNsaWRlci5jaGlsZHJlbi5sZW5ndGggPCBzbGlkZXIuc2V0dGluZ3MubWF4U2xpZGVzKSB7IHNsaWRlci5zZXR0aW5ncy5tYXhTbGlkZXMgPSBzbGlkZXIuY2hpbGRyZW4ubGVuZ3RoOyB9XG4gICAgICAvLyBpZiByYW5kb20gc3RhcnQsIHNldCB0aGUgc3RhcnRTbGlkZSBzZXR0aW5nIHRvIHJhbmRvbSBudW1iZXJcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MucmFuZG9tU3RhcnQpIHsgc2xpZGVyLnNldHRpbmdzLnN0YXJ0U2xpZGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzbGlkZXIuY2hpbGRyZW4ubGVuZ3RoKTsgfVxuICAgICAgLy8gc3RvcmUgYWN0aXZlIHNsaWRlIGluZm9ybWF0aW9uXG4gICAgICBzbGlkZXIuYWN0aXZlID0geyBpbmRleDogc2xpZGVyLnNldHRpbmdzLnN0YXJ0U2xpZGUgfTtcbiAgICAgIC8vIHN0b3JlIGlmIHRoZSBzbGlkZXIgaXMgaW4gY2Fyb3VzZWwgbW9kZSAoZGlzcGxheWluZyAvIG1vdmluZyBtdWx0aXBsZSBzbGlkZXMpXG4gICAgICBzbGlkZXIuY2Fyb3VzZWwgPSBzbGlkZXIuc2V0dGluZ3MubWluU2xpZGVzID4gMSB8fCBzbGlkZXIuc2V0dGluZ3MubWF4U2xpZGVzID4gMSA/IHRydWUgOiBmYWxzZTtcbiAgICAgIC8vIGlmIGNhcm91c2VsLCBmb3JjZSBwcmVsb2FkSW1hZ2VzID0gJ2FsbCdcbiAgICAgIGlmIChzbGlkZXIuY2Fyb3VzZWwpIHsgc2xpZGVyLnNldHRpbmdzLnByZWxvYWRJbWFnZXMgPSAnYWxsJzsgfVxuICAgICAgLy8gY2FsY3VsYXRlIHRoZSBtaW4gLyBtYXggd2lkdGggdGhyZXNob2xkcyBiYXNlZCBvbiBtaW4gLyBtYXggbnVtYmVyIG9mIHNsaWRlc1xuICAgICAgLy8gdXNlZCB0byBzZXR1cCBhbmQgdXBkYXRlIGNhcm91c2VsIHNsaWRlcyBkaW1lbnNpb25zXG4gICAgICBzbGlkZXIubWluVGhyZXNob2xkID0gKHNsaWRlci5zZXR0aW5ncy5taW5TbGlkZXMgKiBzbGlkZXIuc2V0dGluZ3Muc2xpZGVXaWR0aCkgKyAoKHNsaWRlci5zZXR0aW5ncy5taW5TbGlkZXMgLSAxKSAqIHNsaWRlci5zZXR0aW5ncy5zbGlkZU1hcmdpbik7XG4gICAgICBzbGlkZXIubWF4VGhyZXNob2xkID0gKHNsaWRlci5zZXR0aW5ncy5tYXhTbGlkZXMgKiBzbGlkZXIuc2V0dGluZ3Muc2xpZGVXaWR0aCkgKyAoKHNsaWRlci5zZXR0aW5ncy5tYXhTbGlkZXMgLSAxKSAqIHNsaWRlci5zZXR0aW5ncy5zbGlkZU1hcmdpbik7XG4gICAgICAvLyBzdG9yZSB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc2xpZGVyIChpZiBjdXJyZW50bHkgYW5pbWF0aW5nLCB3b3JraW5nIGlzIHRydWUpXG4gICAgICBzbGlkZXIud29ya2luZyA9IGZhbHNlO1xuICAgICAgLy8gaW5pdGlhbGl6ZSB0aGUgY29udHJvbHMgb2JqZWN0XG4gICAgICBzbGlkZXIuY29udHJvbHMgPSB7fTtcbiAgICAgIC8vIGluaXRpYWxpemUgYW4gYXV0byBpbnRlcnZhbFxuICAgICAgc2xpZGVyLmludGVydmFsID0gbnVsbDtcbiAgICAgIC8vIGRldGVybWluZSB3aGljaCBwcm9wZXJ0eSB0byB1c2UgZm9yIHRyYW5zaXRpb25zXG4gICAgICBzbGlkZXIuYW5pbVByb3AgPSBzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ3ZlcnRpY2FsJyA/ICd0b3AnIDogJ2xlZnQnO1xuICAgICAgLy8gZGV0ZXJtaW5lIGlmIGhhcmR3YXJlIGFjY2VsZXJhdGlvbiBjYW4gYmUgdXNlZFxuICAgICAgc2xpZGVyLnVzaW5nQ1NTID0gc2xpZGVyLnNldHRpbmdzLnVzZUNTUyAmJiBzbGlkZXIuc2V0dGluZ3MubW9kZSAhPT0gJ2ZhZGUnICYmIChmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gY3JlYXRlIG91ciB0ZXN0IGRpdiBlbGVtZW50XG4gICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgLy8gY3NzIHRyYW5zaXRpb24gcHJvcGVydGllc1xuICAgICAgICBwcm9wcyA9IFsnV2Via2l0UGVyc3BlY3RpdmUnLCAnTW96UGVyc3BlY3RpdmUnLCAnT1BlcnNwZWN0aXZlJywgJ21zUGVyc3BlY3RpdmUnXTtcbiAgICAgICAgLy8gdGVzdCBmb3IgZWFjaCBwcm9wZXJ0eVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGRpdi5zdHlsZVtwcm9wc1tpXV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc2xpZGVyLmNzc1ByZWZpeCA9IHByb3BzW2ldLnJlcGxhY2UoJ1BlcnNwZWN0aXZlJywgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBzbGlkZXIuYW5pbVByb3AgPSAnLScgKyBzbGlkZXIuY3NzUHJlZml4ICsgJy10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0oKSk7XG4gICAgICAvLyBpZiB2ZXJ0aWNhbCBtb2RlIGFsd2F5cyBtYWtlIG1heFNsaWRlcyBhbmQgbWluU2xpZGVzIGVxdWFsXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICd2ZXJ0aWNhbCcpIHsgc2xpZGVyLnNldHRpbmdzLm1heFNsaWRlcyA9IHNsaWRlci5zZXR0aW5ncy5taW5TbGlkZXM7IH1cbiAgICAgIC8vIHNhdmUgb3JpZ2luYWwgc3R5bGUgZGF0YVxuICAgICAgZWwuZGF0YSgnb3JpZ1N0eWxlJywgZWwuYXR0cignc3R5bGUnKSk7XG4gICAgICBlbC5jaGlsZHJlbihzbGlkZXIuc2V0dGluZ3Muc2xpZGVTZWxlY3RvcikuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5kYXRhKCdvcmlnU3R5bGUnLCAkKHRoaXMpLmF0dHIoJ3N0eWxlJykpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHBlcmZvcm0gYWxsIERPTSAvIENTUyBtb2RpZmljYXRpb25zXG4gICAgICBzZXR1cCgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhbGwgRE9NIGFuZCBDU1MgbW9kaWZpY2F0aW9uc1xuICAgICAqL1xuICAgIHZhciBzZXR1cCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHByZWxvYWRTZWxlY3RvciA9IHNsaWRlci5jaGlsZHJlbi5lcShzbGlkZXIuc2V0dGluZ3Muc3RhcnRTbGlkZSk7IC8vIHNldCB0aGUgZGVmYXVsdCBwcmVsb2FkIHNlbGVjdG9yICh2aXNpYmxlKVxuXG4gICAgICAvLyB3cmFwIGVsIGluIGEgd3JhcHBlclxuICAgICAgZWwud3JhcCgnPGRpdiBjbGFzcz1cIicgKyBzbGlkZXIuc2V0dGluZ3Mud3JhcHBlckNsYXNzICsgJ1wiPjxkaXYgY2xhc3M9XCJieC12aWV3cG9ydFwiPjwvZGl2PjwvZGl2PicpO1xuICAgICAgLy8gc3RvcmUgYSBuYW1lc3BhY2UgcmVmZXJlbmNlIHRvIC5ieC12aWV3cG9ydFxuICAgICAgc2xpZGVyLnZpZXdwb3J0ID0gZWwucGFyZW50KCk7XG5cbiAgICAgIC8vIGFkZCBhcmlhLWxpdmUgaWYgdGhlIHNldHRpbmcgaXMgZW5hYmxlZCBhbmQgdGlja2VyIG1vZGUgaXMgZGlzYWJsZWRcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuYXJpYUxpdmUgJiYgIXNsaWRlci5zZXR0aW5ncy50aWNrZXIpIHtcbiAgICAgICAgc2xpZGVyLnZpZXdwb3J0LmF0dHIoJ2FyaWEtbGl2ZScsICdwb2xpdGUnKTtcbiAgICAgIH1cbiAgICAgIC8vIGFkZCBhIGxvYWRpbmcgZGl2IHRvIGRpc3BsYXkgd2hpbGUgaW1hZ2VzIGFyZSBsb2FkaW5nXG4gICAgICBzbGlkZXIubG9hZGVyID0gJCgnPGRpdiBjbGFzcz1cImJ4LWxvYWRpbmdcIiAvPicpO1xuICAgICAgc2xpZGVyLnZpZXdwb3J0LnByZXBlbmQoc2xpZGVyLmxvYWRlcik7XG4gICAgICAvLyBzZXQgZWwgdG8gYSBtYXNzaXZlIHdpZHRoLCB0byBob2xkIGFueSBuZWVkZWQgc2xpZGVzXG4gICAgICAvLyBhbHNvIHN0cmlwIGFueSBtYXJnaW4gYW5kIHBhZGRpbmcgZnJvbSBlbFxuICAgICAgZWwuY3NzKHtcbiAgICAgICAgd2lkdGg6IHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAnaG9yaXpvbnRhbCcgPyAoc2xpZGVyLmNoaWxkcmVuLmxlbmd0aCAqIDEwMDAgKyAyMTUpICsgJyUnIDogJ2F1dG8nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgICAgfSk7XG4gICAgICAvLyBpZiB1c2luZyBDU1MsIGFkZCB0aGUgZWFzaW5nIHByb3BlcnR5XG4gICAgICBpZiAoc2xpZGVyLnVzaW5nQ1NTICYmIHNsaWRlci5zZXR0aW5ncy5lYXNpbmcpIHtcbiAgICAgICAgZWwuY3NzKCctJyArIHNsaWRlci5jc3NQcmVmaXggKyAnLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJywgc2xpZGVyLnNldHRpbmdzLmVhc2luZyk7XG4gICAgICAvLyBpZiBub3QgdXNpbmcgQ1NTIGFuZCBubyBlYXNpbmcgdmFsdWUgd2FzIHN1cHBsaWVkLCB1c2UgdGhlIGRlZmF1bHQgSlMgYW5pbWF0aW9uIGVhc2luZyAoc3dpbmcpXG4gICAgICB9IGVsc2UgaWYgKCFzbGlkZXIuc2V0dGluZ3MuZWFzaW5nKSB7XG4gICAgICAgIHNsaWRlci5zZXR0aW5ncy5lYXNpbmcgPSAnc3dpbmcnO1xuICAgICAgfVxuICAgICAgLy8gbWFrZSBtb2RpZmljYXRpb25zIHRvIHRoZSB2aWV3cG9ydCAoLmJ4LXZpZXdwb3J0KVxuICAgICAgc2xpZGVyLnZpZXdwb3J0LmNzcyh7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICAgIH0pO1xuICAgICAgc2xpZGVyLnZpZXdwb3J0LnBhcmVudCgpLmNzcyh7XG4gICAgICAgIG1heFdpZHRoOiBnZXRWaWV3cG9ydE1heFdpZHRoKClcbiAgICAgIH0pO1xuICAgICAgLy8gYXBwbHkgY3NzIHRvIGFsbCBzbGlkZXIgY2hpbGRyZW5cbiAgICAgIHNsaWRlci5jaGlsZHJlbi5jc3Moe1xuICAgICAgICAvLyB0aGUgZmxvYXQgYXR0cmlidXRlIGlzIGEgcmVzZXJ2ZWQgd29yZCBpbiBjb21wcmVzc29ycyBsaWtlIFlVSSBjb21wcmVzc29yIGFuZCBuZWVkIHRvIGJlIHF1b3RlZCAjNDhcbiAgICAgICAgJ2Zsb2F0Jzogc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICdob3Jpem9udGFsJyA/ICdsZWZ0JyA6ICdub25lJyxcbiAgICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICB9KTtcbiAgICAgIC8vIGFwcGx5IHRoZSBjYWxjdWxhdGVkIHdpZHRoIGFmdGVyIHRoZSBmbG9hdCBpcyBhcHBsaWVkIHRvIHByZXZlbnQgc2Nyb2xsYmFyIGludGVyZmVyZW5jZVxuICAgICAgc2xpZGVyLmNoaWxkcmVuLmNzcygnd2lkdGgnLCBnZXRTbGlkZVdpZHRoKCkpO1xuICAgICAgLy8gaWYgc2xpZGVNYXJnaW4gaXMgc3VwcGxpZWQsIGFkZCB0aGUgY3NzXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICdob3Jpem9udGFsJyAmJiBzbGlkZXIuc2V0dGluZ3Muc2xpZGVNYXJnaW4gPiAwKSB7IHNsaWRlci5jaGlsZHJlbi5jc3MoJ21hcmdpblJpZ2h0Jywgc2xpZGVyLnNldHRpbmdzLnNsaWRlTWFyZ2luKTsgfVxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAndmVydGljYWwnICYmIHNsaWRlci5zZXR0aW5ncy5zbGlkZU1hcmdpbiA+IDApIHsgc2xpZGVyLmNoaWxkcmVuLmNzcygnbWFyZ2luQm90dG9tJywgc2xpZGVyLnNldHRpbmdzLnNsaWRlTWFyZ2luKTsgfVxuICAgICAgLy8gaWYgXCJmYWRlXCIgbW9kZSwgYWRkIHBvc2l0aW9uaW5nIGFuZCB6LWluZGV4IENTU1xuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAnZmFkZScpIHtcbiAgICAgICAgc2xpZGVyLmNoaWxkcmVuLmNzcyh7XG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgekluZGV4OiAwLFxuICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gcHJlcGFyZSB0aGUgei1pbmRleCBvbiB0aGUgc2hvd2luZyBlbGVtZW50XG4gICAgICAgIHNsaWRlci5jaGlsZHJlbi5lcShzbGlkZXIuc2V0dGluZ3Muc3RhcnRTbGlkZSkuY3NzKHt6SW5kZXg6IHNsaWRlci5zZXR0aW5ncy5zbGlkZVpJbmRleCwgZGlzcGxheTogJ2Jsb2NrJ30pO1xuICAgICAgfVxuICAgICAgLy8gY3JlYXRlIGFuIGVsZW1lbnQgdG8gY29udGFpbiBhbGwgc2xpZGVyIGNvbnRyb2xzIChwYWdlciwgc3RhcnQgLyBzdG9wLCBldGMpXG4gICAgICBzbGlkZXIuY29udHJvbHMuZWwgPSAkKCc8ZGl2IGNsYXNzPVwiYngtY29udHJvbHNcIiAvPicpO1xuICAgICAgLy8gaWYgY2FwdGlvbnMgYXJlIHJlcXVlc3RlZCwgYWRkIHRoZW1cbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuY2FwdGlvbnMpIHsgYXBwZW5kQ2FwdGlvbnMoKTsgfVxuICAgICAgLy8gY2hlY2sgaWYgc3RhcnRTbGlkZSBpcyBsYXN0IHNsaWRlXG4gICAgICBzbGlkZXIuYWN0aXZlLmxhc3QgPSBzbGlkZXIuc2V0dGluZ3Muc3RhcnRTbGlkZSA9PT0gZ2V0UGFnZXJRdHkoKSAtIDE7XG4gICAgICAvLyBpZiB2aWRlbyBpcyB0cnVlLCBzZXQgdXAgdGhlIGZpdFZpZHMgcGx1Z2luXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLnZpZGVvKSB7IGVsLmZpdFZpZHMoKTsgfVxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5wcmVsb2FkSW1hZ2VzID09PSAnYWxsJyB8fCBzbGlkZXIuc2V0dGluZ3MudGlja2VyKSB7IHByZWxvYWRTZWxlY3RvciA9IHNsaWRlci5jaGlsZHJlbjsgfVxuICAgICAgLy8gb25seSBjaGVjayBmb3IgY29udHJvbCBhZGRpdGlvbiBpZiBub3QgaW4gXCJ0aWNrZXJcIiBtb2RlXG4gICAgICBpZiAoIXNsaWRlci5zZXR0aW5ncy50aWNrZXIpIHtcbiAgICAgICAgLy8gaWYgY29udHJvbHMgYXJlIHJlcXVlc3RlZCwgYWRkIHRoZW1cbiAgICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5jb250cm9scykgeyBhcHBlbmRDb250cm9scygpOyB9XG4gICAgICAgIC8vIGlmIGF1dG8gaXMgdHJ1ZSwgYW5kIGF1dG8gY29udHJvbHMgYXJlIHJlcXVlc3RlZCwgYWRkIHRoZW1cbiAgICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5hdXRvICYmIHNsaWRlci5zZXR0aW5ncy5hdXRvQ29udHJvbHMpIHsgYXBwZW5kQ29udHJvbHNBdXRvKCk7IH1cbiAgICAgICAgLy8gaWYgcGFnZXIgaXMgcmVxdWVzdGVkLCBhZGQgaXRcbiAgICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5wYWdlcikgeyBhcHBlbmRQYWdlcigpOyB9XG4gICAgICAgIC8vIGlmIGFueSBjb250cm9sIG9wdGlvbiBpcyByZXF1ZXN0ZWQsIGFkZCB0aGUgY29udHJvbHMgd3JhcHBlclxuICAgICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmNvbnRyb2xzIHx8IHNsaWRlci5zZXR0aW5ncy5hdXRvQ29udHJvbHMgfHwgc2xpZGVyLnNldHRpbmdzLnBhZ2VyKSB7IHNsaWRlci52aWV3cG9ydC5hZnRlcihzbGlkZXIuY29udHJvbHMuZWwpOyB9XG4gICAgICAvLyBpZiB0aWNrZXIgbW9kZSwgZG8gbm90IGFsbG93IGEgcGFnZXJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNsaWRlci5zZXR0aW5ncy5wYWdlciA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgbG9hZEVsZW1lbnRzKHByZWxvYWRTZWxlY3Rvciwgc3RhcnQpO1xuICAgIH07XG5cbiAgICB2YXIgbG9hZEVsZW1lbnRzID0gZnVuY3Rpb24oc2VsZWN0b3IsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgdG90YWwgPSBzZWxlY3Rvci5maW5kKCdpbWc6bm90KFtzcmM9XCJcIl0pLCBpZnJhbWUnKS5sZW5ndGgsXG4gICAgICBjb3VudCA9IDA7XG4gICAgICBpZiAodG90YWwgPT09IDApIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2VsZWN0b3IuZmluZCgnaW1nOm5vdChbc3JjPVwiXCJdKSwgaWZyYW1lJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5vbmUoJ2xvYWQgZXJyb3InLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoKytjb3VudCA9PT0gdG90YWwpIHsgY2FsbGJhY2soKTsgfVxuICAgICAgICB9KS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICh0aGlzLmNvbXBsZXRlIHx8IHRoaXMuc3JjID09ICcnKSB7ICQodGhpcykudHJpZ2dlcignbG9hZCcpOyB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IHRoZSBzbGlkZXJcbiAgICAgKi9cbiAgICB2YXIgc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGlmIGluZmluaXRlIGxvb3AsIHByZXBhcmUgYWRkaXRpb25hbCBzbGlkZXNcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuaW5maW5pdGVMb29wICYmIHNsaWRlci5zZXR0aW5ncy5tb2RlICE9PSAnZmFkZScgJiYgIXNsaWRlci5zZXR0aW5ncy50aWNrZXIpIHtcbiAgICAgICAgdmFyIHNsaWNlICAgID0gc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICd2ZXJ0aWNhbCcgPyBzbGlkZXIuc2V0dGluZ3MubWluU2xpZGVzIDogc2xpZGVyLnNldHRpbmdzLm1heFNsaWRlcyxcbiAgICAgICAgc2xpY2VBcHBlbmQgID0gc2xpZGVyLmNoaWxkcmVuLnNsaWNlKDAsIHNsaWNlKS5jbG9uZSh0cnVlKS5hZGRDbGFzcygnYngtY2xvbmUnKSxcbiAgICAgICAgc2xpY2VQcmVwZW5kID0gc2xpZGVyLmNoaWxkcmVuLnNsaWNlKC1zbGljZSkuY2xvbmUodHJ1ZSkuYWRkQ2xhc3MoJ2J4LWNsb25lJyk7XG4gICAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuYXJpYUhpZGRlbikge1xuICAgICAgICAgIHNsaWNlQXBwZW5kLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgICAgc2xpY2VQcmVwZW5kLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWwuYXBwZW5kKHNsaWNlQXBwZW5kKS5wcmVwZW5kKHNsaWNlUHJlcGVuZCk7XG4gICAgICB9XG4gICAgICAvLyByZW1vdmUgdGhlIGxvYWRpbmcgRE9NIGVsZW1lbnRcbiAgICAgIHNsaWRlci5sb2FkZXIucmVtb3ZlKCk7XG4gICAgICAvLyBzZXQgdGhlIGxlZnQgLyB0b3AgcG9zaXRpb24gb2YgXCJlbFwiXG4gICAgICBzZXRTbGlkZVBvc2l0aW9uKCk7XG4gICAgICAvLyBpZiBcInZlcnRpY2FsXCIgbW9kZSwgYWx3YXlzIHVzZSBhZGFwdGl2ZUhlaWdodCB0byBwcmV2ZW50IG9kZCBiZWhhdmlvclxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAndmVydGljYWwnKSB7IHNsaWRlci5zZXR0aW5ncy5hZGFwdGl2ZUhlaWdodCA9IHRydWU7IH1cbiAgICAgIC8vIHNldCB0aGUgdmlld3BvcnQgaGVpZ2h0XG4gICAgICBzbGlkZXIudmlld3BvcnQuaGVpZ2h0KGdldFZpZXdwb3J0SGVpZ2h0KCkpO1xuICAgICAgLy8gbWFrZSBzdXJlIGV2ZXJ5dGhpbmcgaXMgcG9zaXRpb25lZCBqdXN0IHJpZ2h0IChzYW1lIGFzIGEgd2luZG93IHJlc2l6ZSlcbiAgICAgIGVsLnJlZHJhd1NsaWRlcigpO1xuICAgICAgLy8gb25TbGlkZXJMb2FkIGNhbGxiYWNrXG4gICAgICBzbGlkZXIuc2V0dGluZ3Mub25TbGlkZXJMb2FkLmNhbGwoZWwsIHNsaWRlci5hY3RpdmUuaW5kZXgpO1xuICAgICAgLy8gc2xpZGVyIGhhcyBiZWVuIGZ1bGx5IGluaXRpYWxpemVkXG4gICAgICBzbGlkZXIuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgLy8gYmluZCB0aGUgcmVzaXplIGNhbGwgdG8gdGhlIHdpbmRvd1xuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5yZXNwb25zaXZlKSB7ICQod2luZG93KS5iaW5kKCdyZXNpemUnLCByZXNpemVXaW5kb3cpOyB9XG4gICAgICAvLyBpZiBhdXRvIGlzIHRydWUgYW5kIGhhcyBtb3JlIHRoYW4gMSBwYWdlLCBzdGFydCB0aGUgc2hvd1xuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5hdXRvICYmIHNsaWRlci5zZXR0aW5ncy5hdXRvU3RhcnQgJiYgKGdldFBhZ2VyUXR5KCkgPiAxIHx8IHNsaWRlci5zZXR0aW5ncy5hdXRvU2xpZGVGb3JPbmVQYWdlKSkgeyBpbml0QXV0bygpOyB9XG4gICAgICAvLyBpZiB0aWNrZXIgaXMgdHJ1ZSwgc3RhcnQgdGhlIHRpY2tlclxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy50aWNrZXIpIHsgaW5pdFRpY2tlcigpOyB9XG4gICAgICAvLyBpZiBwYWdlciBpcyByZXF1ZXN0ZWQsIG1ha2UgdGhlIGFwcHJvcHJpYXRlIHBhZ2VyIGxpbmsgYWN0aXZlXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLnBhZ2VyKSB7IHVwZGF0ZVBhZ2VyQWN0aXZlKHNsaWRlci5zZXR0aW5ncy5zdGFydFNsaWRlKTsgfVxuICAgICAgLy8gY2hlY2sgZm9yIGFueSB1cGRhdGVzIHRvIHRoZSBjb250cm9scyAobGlrZSBoaWRlQ29udHJvbE9uRW5kIHVwZGF0ZXMpXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmNvbnRyb2xzKSB7IHVwZGF0ZURpcmVjdGlvbkNvbnRyb2xzKCk7IH1cbiAgICAgIC8vIGlmIHRvdWNoRW5hYmxlZCBpcyB0cnVlLCBzZXR1cCB0aGUgdG91Y2ggZXZlbnRzXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLnRvdWNoRW5hYmxlZCAmJiAhc2xpZGVyLnNldHRpbmdzLnRpY2tlcikgeyBpbml0VG91Y2goKTsgfVxuICAgICAgLy8gaWYga2V5Ym9hcmRFbmFibGVkIGlzIHRydWUsIHNldHVwIHRoZSBrZXlib2FyZCBldmVudHNcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3Mua2V5Ym9hcmRFbmFibGVkICYmICFzbGlkZXIuc2V0dGluZ3MudGlja2VyKSB7XG4gICAgICAgICQoZG9jdW1lbnQpLmtleWRvd24oa2V5UHJlc3MpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjYWxjdWxhdGVkIGhlaWdodCBvZiB0aGUgdmlld3BvcnQsIHVzZWQgdG8gZGV0ZXJtaW5lIGVpdGhlciBhZGFwdGl2ZUhlaWdodCBvciB0aGUgbWF4SGVpZ2h0IHZhbHVlXG4gICAgICovXG4gICAgdmFyIGdldFZpZXdwb3J0SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaGVpZ2h0ID0gMDtcbiAgICAgIC8vIGZpcnN0IGRldGVybWluZSB3aGljaCBjaGlsZHJlbiAoc2xpZGVzKSBzaG91bGQgYmUgdXNlZCBpbiBvdXIgaGVpZ2h0IGNhbGN1bGF0aW9uXG4gICAgICB2YXIgY2hpbGRyZW4gPSAkKCk7XG4gICAgICAvLyBpZiBtb2RlIGlzIG5vdCBcInZlcnRpY2FsXCIgYW5kIGFkYXB0aXZlSGVpZ2h0IGlzIGZhbHNlLCBpbmNsdWRlIGFsbCBjaGlsZHJlblxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5tb2RlICE9PSAndmVydGljYWwnICYmICFzbGlkZXIuc2V0dGluZ3MuYWRhcHRpdmVIZWlnaHQpIHtcbiAgICAgICAgY2hpbGRyZW4gPSBzbGlkZXIuY2hpbGRyZW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiBub3QgY2Fyb3VzZWwsIHJldHVybiB0aGUgc2luZ2xlIGFjdGl2ZSBjaGlsZFxuICAgICAgICBpZiAoIXNsaWRlci5jYXJvdXNlbCkge1xuICAgICAgICAgIGNoaWxkcmVuID0gc2xpZGVyLmNoaWxkcmVuLmVxKHNsaWRlci5hY3RpdmUuaW5kZXgpO1xuICAgICAgICAvLyBpZiBjYXJvdXNlbCwgcmV0dXJuIGEgc2xpY2Ugb2YgY2hpbGRyZW5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBnZXQgdGhlIGluZGl2aWR1YWwgc2xpZGUgaW5kZXhcbiAgICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gc2xpZGVyLnNldHRpbmdzLm1vdmVTbGlkZXMgPT09IDEgPyBzbGlkZXIuYWN0aXZlLmluZGV4IDogc2xpZGVyLmFjdGl2ZS5pbmRleCAqIGdldE1vdmVCeSgpO1xuICAgICAgICAgIC8vIGFkZCB0aGUgY3VycmVudCBzbGlkZSB0byB0aGUgY2hpbGRyZW5cbiAgICAgICAgICBjaGlsZHJlbiA9IHNsaWRlci5jaGlsZHJlbi5lcShjdXJyZW50SW5kZXgpO1xuICAgICAgICAgIC8vIGN5Y2xlIHRocm91Z2ggdGhlIHJlbWFpbmluZyBcInNob3dpbmdcIiBzbGlkZXNcbiAgICAgICAgICBmb3IgKGkgPSAxOyBpIDw9IHNsaWRlci5zZXR0aW5ncy5tYXhTbGlkZXMgLSAxOyBpKyspIHtcbiAgICAgICAgICAgIC8vIGlmIGxvb3BlZCBiYWNrIHRvIHRoZSBzdGFydFxuICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCArIGkgPj0gc2xpZGVyLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLmFkZChzbGlkZXIuY2hpbGRyZW4uZXEoaSAtIDEpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNoaWxkcmVuID0gY2hpbGRyZW4uYWRkKHNsaWRlci5jaGlsZHJlbi5lcShjdXJyZW50SW5kZXggKyBpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBpZiBcInZlcnRpY2FsXCIgbW9kZSwgY2FsY3VsYXRlIHRoZSBzdW0gb2YgdGhlIGhlaWdodHMgb2YgdGhlIGNoaWxkcmVuXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgY2hpbGRyZW4uZWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgIGhlaWdodCArPSAkKHRoaXMpLm91dGVySGVpZ2h0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBhZGQgdXNlci1zdXBwbGllZCBtYXJnaW5zXG4gICAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3Muc2xpZGVNYXJnaW4gPiAwKSB7XG4gICAgICAgICAgaGVpZ2h0ICs9IHNsaWRlci5zZXR0aW5ncy5zbGlkZU1hcmdpbiAqIChzbGlkZXIuc2V0dGluZ3MubWluU2xpZGVzIC0gMSk7XG4gICAgICAgIH1cbiAgICAgIC8vIGlmIG5vdCBcInZlcnRpY2FsXCIgbW9kZSwgY2FsY3VsYXRlIHRoZSBtYXggaGVpZ2h0IG9mIHRoZSBjaGlsZHJlblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVpZ2h0ID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiAkKHRoaXMpLm91dGVySGVpZ2h0KGZhbHNlKTtcbiAgICAgICAgfSkuZ2V0KCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2xpZGVyLnZpZXdwb3J0LmNzcygnYm94LXNpemluZycpID09PSAnYm9yZGVyLWJveCcpIHtcbiAgICAgICAgaGVpZ2h0ICs9IHBhcnNlRmxvYXQoc2xpZGVyLnZpZXdwb3J0LmNzcygncGFkZGluZy10b3AnKSkgKyBwYXJzZUZsb2F0KHNsaWRlci52aWV3cG9ydC5jc3MoJ3BhZGRpbmctYm90dG9tJykpICtcbiAgICAgICAgICAgICAgcGFyc2VGbG9hdChzbGlkZXIudmlld3BvcnQuY3NzKCdib3JkZXItdG9wLXdpZHRoJykpICsgcGFyc2VGbG9hdChzbGlkZXIudmlld3BvcnQuY3NzKCdib3JkZXItYm90dG9tLXdpZHRoJykpO1xuICAgICAgfSBlbHNlIGlmIChzbGlkZXIudmlld3BvcnQuY3NzKCdib3gtc2l6aW5nJykgPT09ICdwYWRkaW5nLWJveCcpIHtcbiAgICAgICAgaGVpZ2h0ICs9IHBhcnNlRmxvYXQoc2xpZGVyLnZpZXdwb3J0LmNzcygncGFkZGluZy10b3AnKSkgKyBwYXJzZUZsb2F0KHNsaWRlci52aWV3cG9ydC5jc3MoJ3BhZGRpbmctYm90dG9tJykpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGVpZ2h0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjYWxjdWxhdGVkIHdpZHRoIHRvIGJlIHVzZWQgZm9yIHRoZSBvdXRlciB3cmFwcGVyIC8gdmlld3BvcnRcbiAgICAgKi9cbiAgICB2YXIgZ2V0Vmlld3BvcnRNYXhXaWR0aCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHdpZHRoID0gJzEwMCUnO1xuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5zbGlkZVdpZHRoID4gMCkge1xuICAgICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIHdpZHRoID0gKHNsaWRlci5zZXR0aW5ncy5tYXhTbGlkZXMgKiBzbGlkZXIuc2V0dGluZ3Muc2xpZGVXaWR0aCkgKyAoKHNsaWRlci5zZXR0aW5ncy5tYXhTbGlkZXMgLSAxKSAqIHNsaWRlci5zZXR0aW5ncy5zbGlkZU1hcmdpbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2lkdGggPSBzbGlkZXIuc2V0dGluZ3Muc2xpZGVXaWR0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjYWxjdWxhdGVkIHdpZHRoIHRvIGJlIGFwcGxpZWQgdG8gZWFjaCBzbGlkZVxuICAgICAqL1xuICAgIHZhciBnZXRTbGlkZVdpZHRoID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbmV3RWxXaWR0aCA9IHNsaWRlci5zZXR0aW5ncy5zbGlkZVdpZHRoLCAvLyBzdGFydCB3aXRoIGFueSB1c2VyLXN1cHBsaWVkIHNsaWRlIHdpZHRoXG4gICAgICB3cmFwV2lkdGggICAgICA9IHNsaWRlci52aWV3cG9ydC53aWR0aCgpOyAgICAvLyBnZXQgdGhlIGN1cnJlbnQgdmlld3BvcnQgd2lkdGhcbiAgICAgIC8vIGlmIHNsaWRlIHdpZHRoIHdhcyBub3Qgc3VwcGxpZWQsIG9yIGlzIGxhcmdlciB0aGFuIHRoZSB2aWV3cG9ydCB1c2UgdGhlIHZpZXdwb3J0IHdpZHRoXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLnNsaWRlV2lkdGggPT09IDAgfHxcbiAgICAgICAgKHNsaWRlci5zZXR0aW5ncy5zbGlkZVdpZHRoID4gd3JhcFdpZHRoICYmICFzbGlkZXIuY2Fyb3VzZWwpIHx8XG4gICAgICAgIHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIG5ld0VsV2lkdGggPSB3cmFwV2lkdGg7XG4gICAgICAvLyBpZiBjYXJvdXNlbCwgdXNlIHRoZSB0aHJlc2hvbGRzIHRvIGRldGVybWluZSB0aGUgd2lkdGhcbiAgICAgIH0gZWxzZSBpZiAoc2xpZGVyLnNldHRpbmdzLm1heFNsaWRlcyA+IDEgJiYgc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICBpZiAod3JhcFdpZHRoID4gc2xpZGVyLm1heFRocmVzaG9sZCkge1xuICAgICAgICAgIHJldHVybiBuZXdFbFdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKHdyYXBXaWR0aCA8IHNsaWRlci5taW5UaHJlc2hvbGQpIHtcbiAgICAgICAgICBuZXdFbFdpZHRoID0gKHdyYXBXaWR0aCAtIChzbGlkZXIuc2V0dGluZ3Muc2xpZGVNYXJnaW4gKiAoc2xpZGVyLnNldHRpbmdzLm1pblNsaWRlcyAtIDEpKSkgLyBzbGlkZXIuc2V0dGluZ3MubWluU2xpZGVzO1xuICAgICAgICB9IGVsc2UgaWYgKHNsaWRlci5zZXR0aW5ncy5zaHJpbmtJdGVtcykge1xuICAgICAgICAgIG5ld0VsV2lkdGggPSBNYXRoLmZsb29yKCh3cmFwV2lkdGggKyBzbGlkZXIuc2V0dGluZ3Muc2xpZGVNYXJnaW4pIC8gKE1hdGguY2VpbCgod3JhcFdpZHRoICsgc2xpZGVyLnNldHRpbmdzLnNsaWRlTWFyZ2luKSAvIChuZXdFbFdpZHRoICsgc2xpZGVyLnNldHRpbmdzLnNsaWRlTWFyZ2luKSkpIC0gc2xpZGVyLnNldHRpbmdzLnNsaWRlTWFyZ2luKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld0VsV2lkdGg7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBzbGlkZXMgY3VycmVudGx5IHZpc2libGUgaW4gdGhlIHZpZXdwb3J0IChpbmNsdWRlcyBwYXJ0aWFsbHkgdmlzaWJsZSBzbGlkZXMpXG4gICAgICovXG4gICAgdmFyIGdldE51bWJlclNsaWRlc1Nob3dpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzbGlkZXNTaG93aW5nID0gMSxcbiAgICAgIGNoaWxkV2lkdGggPSBudWxsO1xuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAnaG9yaXpvbnRhbCcgJiYgc2xpZGVyLnNldHRpbmdzLnNsaWRlV2lkdGggPiAwKSB7XG4gICAgICAgIC8vIGlmIHZpZXdwb3J0IGlzIHNtYWxsZXIgdGhhbiBtaW5UaHJlc2hvbGQsIHJldHVybiBtaW5TbGlkZXNcbiAgICAgICAgaWYgKHNsaWRlci52aWV3cG9ydC53aWR0aCgpIDwgc2xpZGVyLm1pblRocmVzaG9sZCkge1xuICAgICAgICAgIHNsaWRlc1Nob3dpbmcgPSBzbGlkZXIuc2V0dGluZ3MubWluU2xpZGVzO1xuICAgICAgICAvLyBpZiB2aWV3cG9ydCBpcyBsYXJnZXIgdGhhbiBtYXhUaHJlc2hvbGQsIHJldHVybiBtYXhTbGlkZXNcbiAgICAgICAgfSBlbHNlIGlmIChzbGlkZXIudmlld3BvcnQud2lkdGgoKSA+IHNsaWRlci5tYXhUaHJlc2hvbGQpIHtcbiAgICAgICAgICBzbGlkZXNTaG93aW5nID0gc2xpZGVyLnNldHRpbmdzLm1heFNsaWRlcztcbiAgICAgICAgLy8gaWYgdmlld3BvcnQgaXMgYmV0d2VlbiBtaW4gLyBtYXggdGhyZXNob2xkcywgZGl2aWRlIHZpZXdwb3J0IHdpZHRoIGJ5IGZpcnN0IGNoaWxkIHdpZHRoXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGRXaWR0aCA9IHNsaWRlci5jaGlsZHJlbi5maXJzdCgpLndpZHRoKCkgKyBzbGlkZXIuc2V0dGluZ3Muc2xpZGVNYXJnaW47XG4gICAgICAgICAgc2xpZGVzU2hvd2luZyA9IE1hdGguZmxvb3IoKHNsaWRlci52aWV3cG9ydC53aWR0aCgpICtcbiAgICAgICAgICAgIHNsaWRlci5zZXR0aW5ncy5zbGlkZU1hcmdpbikgLyBjaGlsZFdpZHRoKSB8fCAxO1xuICAgICAgICB9XG4gICAgICAvLyBpZiBcInZlcnRpY2FsXCIgbW9kZSwgc2xpZGVzIHNob3dpbmcgd2lsbCBhbHdheXMgYmUgbWluU2xpZGVzXG4gICAgICB9IGVsc2UgaWYgKHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIHNsaWRlc1Nob3dpbmcgPSBzbGlkZXIuc2V0dGluZ3MubWluU2xpZGVzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNsaWRlc1Nob3dpbmc7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBwYWdlcyAob25lIGZ1bGwgdmlld3BvcnQgb2Ygc2xpZGVzIGlzIG9uZSBcInBhZ2VcIilcbiAgICAgKi9cbiAgICB2YXIgZ2V0UGFnZXJRdHkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwYWdlclF0eSA9IDAsXG4gICAgICBicmVha1BvaW50ID0gMCxcbiAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgLy8gaWYgbW92ZVNsaWRlcyBpcyBzcGVjaWZpZWQgYnkgdGhlIHVzZXJcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MubW92ZVNsaWRlcyA+IDApIHtcbiAgICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5pbmZpbml0ZUxvb3ApIHtcbiAgICAgICAgICBwYWdlclF0eSA9IE1hdGguY2VpbChzbGlkZXIuY2hpbGRyZW4ubGVuZ3RoIC8gZ2V0TW92ZUJ5KCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHdoZW4gYnJlYWtwb2ludCBnb2VzIGFib3ZlIGNoaWxkcmVuIGxlbmd0aCwgY291bnRlciBpcyB0aGUgbnVtYmVyIG9mIHBhZ2VzXG4gICAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBzbGlkZXIuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICArK3BhZ2VyUXR5O1xuICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBnZXROdW1iZXJTbGlkZXNTaG93aW5nKCk7XG4gICAgICAgICAgICBjb3VudGVyICs9IHNsaWRlci5zZXR0aW5ncy5tb3ZlU2xpZGVzIDw9IGdldE51bWJlclNsaWRlc1Nob3dpbmcoKSA/IHNsaWRlci5zZXR0aW5ncy5tb3ZlU2xpZGVzIDogZ2V0TnVtYmVyU2xpZGVzU2hvd2luZygpO1xuICAgICAgICAgIH1cblx0XHQgIHJldHVybiBjb3VudGVyO1xuICAgICAgICB9XG4gICAgICAvLyBpZiBtb3ZlU2xpZGVzIGlzIDAgKGF1dG8pIGRpdmlkZSBjaGlsZHJlbiBsZW5ndGggYnkgc2lkZXMgc2hvd2luZywgdGhlbiByb3VuZCB1cFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFnZXJRdHkgPSBNYXRoLmNlaWwoc2xpZGVyLmNoaWxkcmVuLmxlbmd0aCAvIGdldE51bWJlclNsaWRlc1Nob3dpbmcoKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcGFnZXJRdHk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBpbmRpdmlkdWFsIHNsaWRlcyBieSB3aGljaCB0byBzaGlmdCB0aGUgc2xpZGVyXG4gICAgICovXG4gICAgdmFyIGdldE1vdmVCeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gaWYgbW92ZVNsaWRlcyB3YXMgc2V0IGJ5IHRoZSB1c2VyIGFuZCBtb3ZlU2xpZGVzIGlzIGxlc3MgdGhhbiBudW1iZXIgb2Ygc2xpZGVzIHNob3dpbmdcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MubW92ZVNsaWRlcyA+IDAgJiYgc2xpZGVyLnNldHRpbmdzLm1vdmVTbGlkZXMgPD0gZ2V0TnVtYmVyU2xpZGVzU2hvd2luZygpKSB7XG4gICAgICAgIHJldHVybiBzbGlkZXIuc2V0dGluZ3MubW92ZVNsaWRlcztcbiAgICAgIH1cbiAgICAgIC8vIGlmIG1vdmVTbGlkZXMgaXMgMCAoYXV0bylcbiAgICAgIHJldHVybiBnZXROdW1iZXJTbGlkZXNTaG93aW5nKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHNsaWRlcidzIChlbCkgbGVmdCBvciB0b3AgcG9zaXRpb25cbiAgICAgKi9cbiAgICB2YXIgc2V0U2xpZGVQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHBvc2l0aW9uLCBsYXN0Q2hpbGQsIGxhc3RTaG93aW5nSW5kZXg7XG4gICAgICAvLyBpZiBsYXN0IHNsaWRlLCBub3QgaW5maW5pdGUgbG9vcCwgYW5kIG51bWJlciBvZiBjaGlsZHJlbiBpcyBsYXJnZXIgdGhhbiBzcGVjaWZpZWQgbWF4U2xpZGVzXG4gICAgICBpZiAoc2xpZGVyLmNoaWxkcmVuLmxlbmd0aCA+IHNsaWRlci5zZXR0aW5ncy5tYXhTbGlkZXMgJiYgc2xpZGVyLmFjdGl2ZS5sYXN0ICYmICFzbGlkZXIuc2V0dGluZ3MuaW5maW5pdGVMb29wKSB7XG4gICAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgLy8gZ2V0IHRoZSBsYXN0IGNoaWxkJ3MgcG9zaXRpb25cbiAgICAgICAgICBsYXN0Q2hpbGQgPSBzbGlkZXIuY2hpbGRyZW4ubGFzdCgpO1xuICAgICAgICAgIHBvc2l0aW9uID0gbGFzdENoaWxkLnBvc2l0aW9uKCk7XG4gICAgICAgICAgLy8gc2V0IHRoZSBsZWZ0IHBvc2l0aW9uXG4gICAgICAgICAgc2V0UG9zaXRpb25Qcm9wZXJ0eSgtKHBvc2l0aW9uLmxlZnQgLSAoc2xpZGVyLnZpZXdwb3J0LndpZHRoKCkgLSBsYXN0Q2hpbGQub3V0ZXJXaWR0aCgpKSksICdyZXNldCcsIDApO1xuICAgICAgICB9IGVsc2UgaWYgKHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgLy8gZ2V0IHRoZSBsYXN0IHNob3dpbmcgaW5kZXgncyBwb3NpdGlvblxuICAgICAgICAgIGxhc3RTaG93aW5nSW5kZXggPSBzbGlkZXIuY2hpbGRyZW4ubGVuZ3RoIC0gc2xpZGVyLnNldHRpbmdzLm1pblNsaWRlcztcbiAgICAgICAgICBwb3NpdGlvbiA9IHNsaWRlci5jaGlsZHJlbi5lcShsYXN0U2hvd2luZ0luZGV4KS5wb3NpdGlvbigpO1xuICAgICAgICAgIC8vIHNldCB0aGUgdG9wIHBvc2l0aW9uXG4gICAgICAgICAgc2V0UG9zaXRpb25Qcm9wZXJ0eSgtcG9zaXRpb24udG9wLCAncmVzZXQnLCAwKTtcbiAgICAgICAgfVxuICAgICAgLy8gaWYgbm90IGxhc3Qgc2xpZGVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGdldCB0aGUgcG9zaXRpb24gb2YgdGhlIGZpcnN0IHNob3dpbmcgc2xpZGVcbiAgICAgICAgcG9zaXRpb24gPSBzbGlkZXIuY2hpbGRyZW4uZXEoc2xpZGVyLmFjdGl2ZS5pbmRleCAqIGdldE1vdmVCeSgpKS5wb3NpdGlvbigpO1xuICAgICAgICAvLyBjaGVjayBmb3IgbGFzdCBzbGlkZVxuICAgICAgICBpZiAoc2xpZGVyLmFjdGl2ZS5pbmRleCA9PT0gZ2V0UGFnZXJRdHkoKSAtIDEpIHsgc2xpZGVyLmFjdGl2ZS5sYXN0ID0gdHJ1ZTsgfVxuICAgICAgICAvLyBzZXQgdGhlIHJlc3BlY3RpdmUgcG9zaXRpb25cbiAgICAgICAgaWYgKHBvc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICdob3Jpem9udGFsJykgeyBzZXRQb3NpdGlvblByb3BlcnR5KC1wb3NpdGlvbi5sZWZ0LCAncmVzZXQnLCAwKTsgfVxuICAgICAgICAgIGVsc2UgaWYgKHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAndmVydGljYWwnKSB7IHNldFBvc2l0aW9uUHJvcGVydHkoLXBvc2l0aW9uLnRvcCwgJ3Jlc2V0JywgMCk7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBlbCdzIGFuaW1hdGluZyBwcm9wZXJ0eSBwb3NpdGlvbiAod2hpY2ggaW4gdHVybiB3aWxsIHNvbWV0aW1lcyBhbmltYXRlIGVsKS5cbiAgICAgKiBJZiB1c2luZyBDU1MsIHNldHMgdGhlIHRyYW5zZm9ybSBwcm9wZXJ0eS4gSWYgbm90IHVzaW5nIENTUywgc2V0cyB0aGUgdG9wIC8gbGVmdCBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZSAoaW50KVxuICAgICAqICAtIHRoZSBhbmltYXRpbmcgcHJvcGVydHkncyB2YWx1ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHR5cGUgKHN0cmluZykgJ3NsaWRlJywgJ3Jlc2V0JywgJ3RpY2tlcidcbiAgICAgKiAgLSB0aGUgdHlwZSBvZiBpbnN0YW5jZSBmb3Igd2hpY2ggdGhlIGZ1bmN0aW9uIGlzIGJlaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZHVyYXRpb24gKGludClcbiAgICAgKiAgLSB0aGUgYW1vdW50IG9mIHRpbWUgKGluIG1zKSB0aGUgdHJhbnNpdGlvbiBzaG91bGQgb2NjdXB5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFyYW1zIChhcnJheSkgb3B0aW9uYWxcbiAgICAgKiAgLSBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgY29udGFpbmluZyBhbnkgdmFyaWFibGVzIHRoYXQgbmVlZCB0byBiZSBwYXNzZWQgaW5cbiAgICAgKi9cbiAgICB2YXIgc2V0UG9zaXRpb25Qcm9wZXJ0eSA9IGZ1bmN0aW9uKHZhbHVlLCB0eXBlLCBkdXJhdGlvbiwgcGFyYW1zKSB7XG4gICAgICB2YXIgYW5pbWF0ZU9iaiwgcHJvcFZhbHVlO1xuICAgICAgLy8gdXNlIENTUyB0cmFuc2Zvcm1cbiAgICAgIGlmIChzbGlkZXIudXNpbmdDU1MpIHtcbiAgICAgICAgLy8gZGV0ZXJtaW5lIHRoZSB0cmFuc2xhdGUzZCB2YWx1ZVxuICAgICAgICBwcm9wVmFsdWUgPSBzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ3ZlcnRpY2FsJyA/ICd0cmFuc2xhdGUzZCgwLCAnICsgdmFsdWUgKyAncHgsIDApJyA6ICd0cmFuc2xhdGUzZCgnICsgdmFsdWUgKyAncHgsIDAsIDApJztcbiAgICAgICAgLy8gYWRkIHRoZSBDU1MgdHJhbnNpdGlvbi1kdXJhdGlvblxuICAgICAgICBlbC5jc3MoJy0nICsgc2xpZGVyLmNzc1ByZWZpeCArICctdHJhbnNpdGlvbi1kdXJhdGlvbicsIGR1cmF0aW9uIC8gMTAwMCArICdzJyk7XG4gICAgICAgIGlmICh0eXBlID09PSAnc2xpZGUnKSB7XG4gICAgICAgICAgLy8gc2V0IHRoZSBwcm9wZXJ0eSB2YWx1ZVxuICAgICAgICAgIGVsLmNzcyhzbGlkZXIuYW5pbVByb3AsIHByb3BWYWx1ZSk7XG4gICAgICAgICAgaWYgKGR1cmF0aW9uICE9PSAwKSB7XG4gICAgICAgICAgICAvLyBiaW5kIGEgY2FsbGJhY2sgbWV0aG9kIC0gZXhlY3V0ZXMgd2hlbiBDU1MgdHJhbnNpdGlvbiBjb21wbGV0ZXNcbiAgICAgICAgICAgIGVsLmJpbmQoJ3RyYW5zaXRpb25lbmQgd2Via2l0VHJhbnNpdGlvbkVuZCBvVHJhbnNpdGlvbkVuZCBNU1RyYW5zaXRpb25FbmQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgIC8vbWFrZSBzdXJlIGl0J3MgdGhlIGNvcnJlY3Qgb25lXG4gICAgICAgICAgICAgIGlmICghJChlLnRhcmdldCkuaXMoZWwpKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgICAvLyB1bmJpbmQgdGhlIGNhbGxiYWNrXG4gICAgICAgICAgICAgIGVsLnVuYmluZCgndHJhbnNpdGlvbmVuZCB3ZWJraXRUcmFuc2l0aW9uRW5kIG9UcmFuc2l0aW9uRW5kIE1TVHJhbnNpdGlvbkVuZCcpO1xuICAgICAgICAgICAgICB1cGRhdGVBZnRlclNsaWRlVHJhbnNpdGlvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHsgLy9kdXJhdGlvbiA9IDBcbiAgICAgICAgICAgIHVwZGF0ZUFmdGVyU2xpZGVUcmFuc2l0aW9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdyZXNldCcpIHtcbiAgICAgICAgICBlbC5jc3Moc2xpZGVyLmFuaW1Qcm9wLCBwcm9wVmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd0aWNrZXInKSB7XG4gICAgICAgICAgLy8gbWFrZSB0aGUgdHJhbnNpdGlvbiB1c2UgJ2xpbmVhcidcbiAgICAgICAgICBlbC5jc3MoJy0nICsgc2xpZGVyLmNzc1ByZWZpeCArICctdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nLCAnbGluZWFyJyk7XG4gICAgICAgICAgZWwuY3NzKHNsaWRlci5hbmltUHJvcCwgcHJvcFZhbHVlKTtcbiAgICAgICAgICBpZiAoZHVyYXRpb24gIT09IDApIHtcbiAgICAgICAgICAgIGVsLmJpbmQoJ3RyYW5zaXRpb25lbmQgd2Via2l0VHJhbnNpdGlvbkVuZCBvVHJhbnNpdGlvbkVuZCBNU1RyYW5zaXRpb25FbmQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgIC8vbWFrZSBzdXJlIGl0J3MgdGhlIGNvcnJlY3Qgb25lXG4gICAgICAgICAgICAgIGlmICghJChlLnRhcmdldCkuaXMoZWwpKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgICAvLyB1bmJpbmQgdGhlIGNhbGxiYWNrXG4gICAgICAgICAgICAgIGVsLnVuYmluZCgndHJhbnNpdGlvbmVuZCB3ZWJraXRUcmFuc2l0aW9uRW5kIG9UcmFuc2l0aW9uRW5kIE1TVHJhbnNpdGlvbkVuZCcpO1xuICAgICAgICAgICAgICAvLyByZXNldCB0aGUgcG9zaXRpb25cbiAgICAgICAgICAgICAgc2V0UG9zaXRpb25Qcm9wZXJ0eShwYXJhbXMucmVzZXRWYWx1ZSwgJ3Jlc2V0JywgMCk7XG4gICAgICAgICAgICAgIC8vIHN0YXJ0IHRoZSBsb29wIGFnYWluXG4gICAgICAgICAgICAgIHRpY2tlckxvb3AoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7IC8vZHVyYXRpb24gPSAwXG4gICAgICAgICAgICBzZXRQb3NpdGlvblByb3BlcnR5KHBhcmFtcy5yZXNldFZhbHVlLCAncmVzZXQnLCAwKTtcbiAgICAgICAgICAgIHRpY2tlckxvb3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIC8vIHVzZSBKUyBhbmltYXRlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbmltYXRlT2JqID0ge307XG4gICAgICAgIGFuaW1hdGVPYmpbc2xpZGVyLmFuaW1Qcm9wXSA9IHZhbHVlO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3NsaWRlJykge1xuICAgICAgICAgIGVsLmFuaW1hdGUoYW5pbWF0ZU9iaiwgZHVyYXRpb24sIHNsaWRlci5zZXR0aW5ncy5lYXNpbmcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdXBkYXRlQWZ0ZXJTbGlkZVRyYW5zaXRpb24oKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAncmVzZXQnKSB7XG4gICAgICAgICAgZWwuY3NzKHNsaWRlci5hbmltUHJvcCwgdmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd0aWNrZXInKSB7XG4gICAgICAgICAgZWwuYW5pbWF0ZShhbmltYXRlT2JqLCBkdXJhdGlvbiwgJ2xpbmVhcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2V0UG9zaXRpb25Qcm9wZXJ0eShwYXJhbXMucmVzZXRWYWx1ZSwgJ3Jlc2V0JywgMCk7XG4gICAgICAgICAgICAvLyBydW4gdGhlIHJlY3Vyc2l2ZSBsb29wIGFmdGVyIGFuaW1hdGlvblxuICAgICAgICAgICAgdGlja2VyTG9vcCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFBvcHVsYXRlcyB0aGUgcGFnZXIgd2l0aCBwcm9wZXIgYW1vdW50IG9mIHBhZ2VzXG4gICAgICovXG4gICAgdmFyIHBvcHVsYXRlUGFnZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwYWdlckh0bWwgPSAnJyxcbiAgICAgIGxpbmtDb250ZW50ID0gJycsXG4gICAgICBwYWdlclF0eSA9IGdldFBhZ2VyUXR5KCk7XG4gICAgICAvLyBsb29wIHRocm91Z2ggZWFjaCBwYWdlciBpdGVtXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhZ2VyUXR5OyBpKyspIHtcbiAgICAgICAgbGlua0NvbnRlbnQgPSAnJztcbiAgICAgICAgLy8gaWYgYSBidWlsZFBhZ2VyIGZ1bmN0aW9uIGlzIHN1cHBsaWVkLCB1c2UgaXQgdG8gZ2V0IHBhZ2VyIGxpbmsgdmFsdWUsIGVsc2UgdXNlIGluZGV4ICsgMVxuICAgICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmJ1aWxkUGFnZXIgJiYgJC5pc0Z1bmN0aW9uKHNsaWRlci5zZXR0aW5ncy5idWlsZFBhZ2VyKSB8fCBzbGlkZXIuc2V0dGluZ3MucGFnZXJDdXN0b20pIHtcbiAgICAgICAgICBsaW5rQ29udGVudCA9IHNsaWRlci5zZXR0aW5ncy5idWlsZFBhZ2VyKGkpO1xuICAgICAgICAgIHNsaWRlci5wYWdlckVsLmFkZENsYXNzKCdieC1jdXN0b20tcGFnZXInKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaW5rQ29udGVudCA9IGkgKyAxO1xuICAgICAgICAgIHNsaWRlci5wYWdlckVsLmFkZENsYXNzKCdieC1kZWZhdWx0LXBhZ2VyJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdmFyIGxpbmtDb250ZW50ID0gc2xpZGVyLnNldHRpbmdzLmJ1aWxkUGFnZXIgJiYgJC5pc0Z1bmN0aW9uKHNsaWRlci5zZXR0aW5ncy5idWlsZFBhZ2VyKSA/IHNsaWRlci5zZXR0aW5ncy5idWlsZFBhZ2VyKGkpIDogaSArIDE7XG4gICAgICAgIC8vIGFkZCB0aGUgbWFya3VwIHRvIHRoZSBzdHJpbmdcbiAgICAgICAgcGFnZXJIdG1sICs9ICc8ZGl2IGNsYXNzPVwiYngtcGFnZXItaXRlbVwiPjxhIGhyZWY9XCJcIiBkYXRhLXNsaWRlLWluZGV4PVwiJyArIGkgKyAnXCIgY2xhc3M9XCJieC1wYWdlci1saW5rXCI+JyArIGxpbmtDb250ZW50ICsgJzwvYT48L2Rpdj4nO1xuICAgICAgfVxuICAgICAgLy8gcG9wdWxhdGUgdGhlIHBhZ2VyIGVsZW1lbnQgd2l0aCBwYWdlciBsaW5rc1xuICAgICAgc2xpZGVyLnBhZ2VyRWwuaHRtbChwYWdlckh0bWwpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIHRoZSBwYWdlciB0byB0aGUgY29udHJvbHMgZWxlbWVudFxuICAgICAqL1xuICAgIHZhciBhcHBlbmRQYWdlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFzbGlkZXIuc2V0dGluZ3MucGFnZXJDdXN0b20pIHtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBwYWdlciBET00gZWxlbWVudFxuICAgICAgICBzbGlkZXIucGFnZXJFbCA9ICQoJzxkaXYgY2xhc3M9XCJieC1wYWdlclwiIC8+Jyk7XG4gICAgICAgIC8vIGlmIGEgcGFnZXIgc2VsZWN0b3Igd2FzIHN1cHBsaWVkLCBwb3B1bGF0ZSBpdCB3aXRoIHRoZSBwYWdlclxuICAgICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLnBhZ2VyU2VsZWN0b3IpIHtcbiAgICAgICAgICAkKHNsaWRlci5zZXR0aW5ncy5wYWdlclNlbGVjdG9yKS5odG1sKHNsaWRlci5wYWdlckVsKTtcbiAgICAgICAgLy8gaWYgbm8gcGFnZXIgc2VsZWN0b3Igd2FzIHN1cHBsaWVkLCBhZGQgaXQgYWZ0ZXIgdGhlIHdyYXBwZXJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzbGlkZXIuY29udHJvbHMuZWwuYWRkQ2xhc3MoJ2J4LWhhcy1wYWdlcicpLmFwcGVuZChzbGlkZXIucGFnZXJFbCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcG9wdWxhdGUgdGhlIHBhZ2VyXG4gICAgICAgIHBvcHVsYXRlUGFnZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNsaWRlci5wYWdlckVsID0gJChzbGlkZXIuc2V0dGluZ3MucGFnZXJDdXN0b20pO1xuICAgICAgfVxuICAgICAgLy8gYXNzaWduIHRoZSBwYWdlciBjbGljayBiaW5kaW5nXG4gICAgICBzbGlkZXIucGFnZXJFbC5vbignY2xpY2sgdG91Y2hlbmQnLCAnYScsIGNsaWNrUGFnZXJCaW5kKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXBwZW5kcyBwcmV2IC8gbmV4dCBjb250cm9scyB0byB0aGUgY29udHJvbHMgZWxlbWVudFxuICAgICAqL1xuICAgIHZhciBhcHBlbmRDb250cm9scyA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2xpZGVyLmNvbnRyb2xzLm5leHQgPSAkKCc8YSBjbGFzcz1cImJ4LW5leHRcIiBocmVmPVwiXCI+JyArIHNsaWRlci5zZXR0aW5ncy5uZXh0VGV4dCArICc8L2E+Jyk7XG4gICAgICBzbGlkZXIuY29udHJvbHMucHJldiA9ICQoJzxhIGNsYXNzPVwiYngtcHJldlwiIGhyZWY9XCJcIj4nICsgc2xpZGVyLnNldHRpbmdzLnByZXZUZXh0ICsgJzwvYT4nKTtcbiAgICAgIC8vIGJpbmQgY2xpY2sgYWN0aW9ucyB0byB0aGUgY29udHJvbHNcbiAgICAgIHNsaWRlci5jb250cm9scy5uZXh0LmJpbmQoJ2NsaWNrIHRvdWNoZW5kJywgY2xpY2tOZXh0QmluZCk7XG4gICAgICBzbGlkZXIuY29udHJvbHMucHJldi5iaW5kKCdjbGljayB0b3VjaGVuZCcsIGNsaWNrUHJldkJpbmQpO1xuICAgICAgLy8gaWYgbmV4dFNlbGVjdG9yIHdhcyBzdXBwbGllZCwgcG9wdWxhdGUgaXRcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MubmV4dFNlbGVjdG9yKSB7XG4gICAgICAgICQoc2xpZGVyLnNldHRpbmdzLm5leHRTZWxlY3RvcikuYXBwZW5kKHNsaWRlci5jb250cm9scy5uZXh0KTtcbiAgICAgIH1cbiAgICAgIC8vIGlmIHByZXZTZWxlY3RvciB3YXMgc3VwcGxpZWQsIHBvcHVsYXRlIGl0XG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLnByZXZTZWxlY3Rvcikge1xuICAgICAgICAkKHNsaWRlci5zZXR0aW5ncy5wcmV2U2VsZWN0b3IpLmFwcGVuZChzbGlkZXIuY29udHJvbHMucHJldik7XG4gICAgICB9XG4gICAgICAvLyBpZiBubyBjdXN0b20gc2VsZWN0b3JzIHdlcmUgc3VwcGxpZWRcbiAgICAgIGlmICghc2xpZGVyLnNldHRpbmdzLm5leHRTZWxlY3RvciAmJiAhc2xpZGVyLnNldHRpbmdzLnByZXZTZWxlY3Rvcikge1xuICAgICAgICAvLyBhZGQgdGhlIGNvbnRyb2xzIHRvIHRoZSBET01cbiAgICAgICAgc2xpZGVyLmNvbnRyb2xzLmRpcmVjdGlvbkVsID0gJCgnPGRpdiBjbGFzcz1cImJ4LWNvbnRyb2xzLWRpcmVjdGlvblwiIC8+Jyk7XG4gICAgICAgIC8vIGFkZCB0aGUgY29udHJvbCBlbGVtZW50cyB0byB0aGUgZGlyZWN0aW9uRWxcbiAgICAgICAgc2xpZGVyLmNvbnRyb2xzLmRpcmVjdGlvbkVsLmFwcGVuZChzbGlkZXIuY29udHJvbHMucHJldikuYXBwZW5kKHNsaWRlci5jb250cm9scy5uZXh0KTtcbiAgICAgICAgLy8gc2xpZGVyLnZpZXdwb3J0LmFwcGVuZChzbGlkZXIuY29udHJvbHMuZGlyZWN0aW9uRWwpO1xuICAgICAgICBzbGlkZXIuY29udHJvbHMuZWwuYWRkQ2xhc3MoJ2J4LWhhcy1jb250cm9scy1kaXJlY3Rpb24nKS5hcHBlbmQoc2xpZGVyLmNvbnRyb2xzLmRpcmVjdGlvbkVsKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXBwZW5kcyBzdGFydCAvIHN0b3AgYXV0byBjb250cm9scyB0byB0aGUgY29udHJvbHMgZWxlbWVudFxuICAgICAqL1xuICAgIHZhciBhcHBlbmRDb250cm9sc0F1dG8gPSBmdW5jdGlvbigpIHtcbiAgICAgIHNsaWRlci5jb250cm9scy5zdGFydCA9ICQoJzxkaXYgY2xhc3M9XCJieC1jb250cm9scy1hdXRvLWl0ZW1cIj48YSBjbGFzcz1cImJ4LXN0YXJ0XCIgaHJlZj1cIlwiPicgKyBzbGlkZXIuc2V0dGluZ3Muc3RhcnRUZXh0ICsgJzwvYT48L2Rpdj4nKTtcbiAgICAgIHNsaWRlci5jb250cm9scy5zdG9wID0gJCgnPGRpdiBjbGFzcz1cImJ4LWNvbnRyb2xzLWF1dG8taXRlbVwiPjxhIGNsYXNzPVwiYngtc3RvcFwiIGhyZWY9XCJcIj4nICsgc2xpZGVyLnNldHRpbmdzLnN0b3BUZXh0ICsgJzwvYT48L2Rpdj4nKTtcbiAgICAgIC8vIGFkZCB0aGUgY29udHJvbHMgdG8gdGhlIERPTVxuICAgICAgc2xpZGVyLmNvbnRyb2xzLmF1dG9FbCA9ICQoJzxkaXYgY2xhc3M9XCJieC1jb250cm9scy1hdXRvXCIgLz4nKTtcbiAgICAgIC8vIGJpbmQgY2xpY2sgYWN0aW9ucyB0byB0aGUgY29udHJvbHNcbiAgICAgIHNsaWRlci5jb250cm9scy5hdXRvRWwub24oJ2NsaWNrJywgJy5ieC1zdGFydCcsIGNsaWNrU3RhcnRCaW5kKTtcbiAgICAgIHNsaWRlci5jb250cm9scy5hdXRvRWwub24oJ2NsaWNrJywgJy5ieC1zdG9wJywgY2xpY2tTdG9wQmluZCk7XG4gICAgICAvLyBpZiBhdXRvQ29udHJvbHNDb21iaW5lLCBpbnNlcnQgb25seSB0aGUgXCJzdGFydFwiIGNvbnRyb2xcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuYXV0b0NvbnRyb2xzQ29tYmluZSkge1xuICAgICAgICBzbGlkZXIuY29udHJvbHMuYXV0b0VsLmFwcGVuZChzbGlkZXIuY29udHJvbHMuc3RhcnQpO1xuICAgICAgLy8gaWYgYXV0b0NvbnRyb2xzQ29tYmluZSBpcyBmYWxzZSwgaW5zZXJ0IGJvdGggY29udHJvbHNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNsaWRlci5jb250cm9scy5hdXRvRWwuYXBwZW5kKHNsaWRlci5jb250cm9scy5zdGFydCkuYXBwZW5kKHNsaWRlci5jb250cm9scy5zdG9wKTtcbiAgICAgIH1cbiAgICAgIC8vIGlmIGF1dG8gY29udHJvbHMgc2VsZWN0b3Igd2FzIHN1cHBsaWVkLCBwb3B1bGF0ZSBpdCB3aXRoIHRoZSBjb250cm9sc1xuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5hdXRvQ29udHJvbHNTZWxlY3Rvcikge1xuICAgICAgICAkKHNsaWRlci5zZXR0aW5ncy5hdXRvQ29udHJvbHNTZWxlY3RvcikuaHRtbChzbGlkZXIuY29udHJvbHMuYXV0b0VsKTtcbiAgICAgIC8vIGlmIGF1dG8gY29udHJvbHMgc2VsZWN0b3Igd2FzIG5vdCBzdXBwbGllZCwgYWRkIGl0IGFmdGVyIHRoZSB3cmFwcGVyXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbGlkZXIuY29udHJvbHMuZWwuYWRkQ2xhc3MoJ2J4LWhhcy1jb250cm9scy1hdXRvJykuYXBwZW5kKHNsaWRlci5jb250cm9scy5hdXRvRWwpO1xuICAgICAgfVxuICAgICAgLy8gdXBkYXRlIHRoZSBhdXRvIGNvbnRyb2xzXG4gICAgICB1cGRhdGVBdXRvQ29udHJvbHMoc2xpZGVyLnNldHRpbmdzLmF1dG9TdGFydCA/ICdzdG9wJyA6ICdzdGFydCcpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIGltYWdlIGNhcHRpb25zIHRvIHRoZSBET01cbiAgICAgKi9cbiAgICB2YXIgYXBwZW5kQ2FwdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGN5Y2xlIHRocm91Z2ggZWFjaCBjaGlsZFxuICAgICAgc2xpZGVyLmNoaWxkcmVuLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgLy8gZ2V0IHRoZSBpbWFnZSB0aXRsZSBhdHRyaWJ1dGVcbiAgICAgICAgdmFyIHRpdGxlID0gJCh0aGlzKS5maW5kKCdpbWc6Zmlyc3QnKS5hdHRyKCd0aXRsZScpO1xuICAgICAgICAvLyBhcHBlbmQgdGhlIGNhcHRpb25cbiAgICAgICAgaWYgKHRpdGxlICE9PSB1bmRlZmluZWQgJiYgKCcnICsgdGl0bGUpLmxlbmd0aCkge1xuICAgICAgICAgICQodGhpcykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiYngtY2FwdGlvblwiPjxzcGFuPicgKyB0aXRsZSArICc8L3NwYW4+PC9kaXY+Jyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGljayBuZXh0IGJpbmRpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlIChldmVudClcbiAgICAgKiAgLSBET00gZXZlbnQgb2JqZWN0XG4gICAgICovXG4gICAgdmFyIGNsaWNrTmV4dEJpbmQgPSBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoc2xpZGVyLmNvbnRyb2xzLmVsLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7IHJldHVybjsgfVxuICAgICAgLy8gaWYgYXV0byBzaG93IGlzIHJ1bm5pbmcsIHN0b3AgaXRcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuYXV0byAmJiBzbGlkZXIuc2V0dGluZ3Muc3RvcEF1dG9PbkNsaWNrKSB7IGVsLnN0b3BBdXRvKCk7IH1cbiAgICAgIGVsLmdvVG9OZXh0U2xpZGUoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xpY2sgcHJldiBiaW5kaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZSAoZXZlbnQpXG4gICAgICogIC0gRE9NIGV2ZW50IG9iamVjdFxuICAgICAqL1xuICAgIHZhciBjbGlja1ByZXZCaW5kID0gZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHNsaWRlci5jb250cm9scy5lbC5oYXNDbGFzcygnZGlzYWJsZWQnKSkgeyByZXR1cm47IH1cbiAgICAgIC8vIGlmIGF1dG8gc2hvdyBpcyBydW5uaW5nLCBzdG9wIGl0XG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmF1dG8gJiYgc2xpZGVyLnNldHRpbmdzLnN0b3BBdXRvT25DbGljaykgeyBlbC5zdG9wQXV0bygpOyB9XG4gICAgICBlbC5nb1RvUHJldlNsaWRlKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsaWNrIHN0YXJ0IGJpbmRpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlIChldmVudClcbiAgICAgKiAgLSBET00gZXZlbnQgb2JqZWN0XG4gICAgICovXG4gICAgdmFyIGNsaWNrU3RhcnRCaW5kID0gZnVuY3Rpb24oZSkge1xuICAgICAgZWwuc3RhcnRBdXRvKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsaWNrIHN0b3AgYmluZGluZ1xuICAgICAqXG4gICAgICogQHBhcmFtIGUgKGV2ZW50KVxuICAgICAqICAtIERPTSBldmVudCBvYmplY3RcbiAgICAgKi9cbiAgICB2YXIgY2xpY2tTdG9wQmluZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGVsLnN0b3BBdXRvKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsaWNrIHBhZ2VyIGJpbmRpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlIChldmVudClcbiAgICAgKiAgLSBET00gZXZlbnQgb2JqZWN0XG4gICAgICovXG4gICAgdmFyIGNsaWNrUGFnZXJCaW5kID0gZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIHBhZ2VyTGluaywgcGFnZXJJbmRleDtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChzbGlkZXIuY29udHJvbHMuZWwuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gaWYgYXV0byBzaG93IGlzIHJ1bm5pbmcsIHN0b3AgaXRcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuYXV0byAgJiYgc2xpZGVyLnNldHRpbmdzLnN0b3BBdXRvT25DbGljaykgeyBlbC5zdG9wQXV0bygpOyB9XG4gICAgICBwYWdlckxpbmsgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgICBpZiAocGFnZXJMaW5rLmF0dHIoJ2RhdGEtc2xpZGUtaW5kZXgnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhZ2VySW5kZXggPSBwYXJzZUludChwYWdlckxpbmsuYXR0cignZGF0YS1zbGlkZS1pbmRleCcpKTtcbiAgICAgICAgLy8gaWYgY2xpY2tlZCBwYWdlciBsaW5rIGlzIG5vdCBhY3RpdmUsIGNvbnRpbnVlIHdpdGggdGhlIGdvVG9TbGlkZSBjYWxsXG4gICAgICAgIGlmIChwYWdlckluZGV4ICE9PSBzbGlkZXIuYWN0aXZlLmluZGV4KSB7IGVsLmdvVG9TbGlkZShwYWdlckluZGV4KTsgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBwYWdlciBsaW5rcyB3aXRoIGFuIGFjdGl2ZSBjbGFzc1xuICAgICAqXG4gICAgICogQHBhcmFtIHNsaWRlSW5kZXggKGludClcbiAgICAgKiAgLSBpbmRleCBvZiBzbGlkZSB0byBtYWtlIGFjdGl2ZVxuICAgICAqL1xuICAgIHZhciB1cGRhdGVQYWdlckFjdGl2ZSA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgpIHtcbiAgICAgIC8vIGlmIFwic2hvcnRcIiBwYWdlciB0eXBlXG4gICAgICB2YXIgbGVuID0gc2xpZGVyLmNoaWxkcmVuLmxlbmd0aDsgLy8gbmIgb2YgY2hpbGRyZW5cbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MucGFnZXJUeXBlID09PSAnc2hvcnQnKSB7XG4gICAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MubWF4U2xpZGVzID4gMSkge1xuICAgICAgICAgIGxlbiA9IE1hdGguY2VpbChzbGlkZXIuY2hpbGRyZW4ubGVuZ3RoIC8gc2xpZGVyLnNldHRpbmdzLm1heFNsaWRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgc2xpZGVyLnBhZ2VyRWwuaHRtbCgoc2xpZGVJbmRleCArIDEpICsgc2xpZGVyLnNldHRpbmdzLnBhZ2VyU2hvcnRTZXBhcmF0b3IgKyBsZW4pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyByZW1vdmUgYWxsIHBhZ2VyIGFjdGl2ZSBjbGFzc2VzXG4gICAgICBzbGlkZXIucGFnZXJFbC5maW5kKCdhJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgLy8gYXBwbHkgdGhlIGFjdGl2ZSBjbGFzcyBmb3IgYWxsIHBhZ2Vyc1xuICAgICAgc2xpZGVyLnBhZ2VyRWwuZWFjaChmdW5jdGlvbihpLCBlbCkgeyAkKGVsKS5maW5kKCdhJykuZXEoc2xpZGVJbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpOyB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgbmVlZGVkIGFjdGlvbnMgYWZ0ZXIgYSBzbGlkZSB0cmFuc2l0aW9uXG4gICAgICovXG4gICAgdmFyIHVwZGF0ZUFmdGVyU2xpZGVUcmFuc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBpZiBpbmZpbml0ZSBsb29wIGlzIHRydWVcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuaW5maW5pdGVMb29wKSB7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9ICcnO1xuICAgICAgICAvLyBmaXJzdCBzbGlkZVxuICAgICAgICBpZiAoc2xpZGVyLmFjdGl2ZS5pbmRleCA9PT0gMCkge1xuICAgICAgICAgIC8vIHNldCB0aGUgbmV3IHBvc2l0aW9uXG4gICAgICAgICAgcG9zaXRpb24gPSBzbGlkZXIuY2hpbGRyZW4uZXEoMCkucG9zaXRpb24oKTtcbiAgICAgICAgLy8gY2Fyb3VzZWwsIGxhc3Qgc2xpZGVcbiAgICAgICAgfSBlbHNlIGlmIChzbGlkZXIuYWN0aXZlLmluZGV4ID09PSBnZXRQYWdlclF0eSgpIC0gMSAmJiBzbGlkZXIuY2Fyb3VzZWwpIHtcbiAgICAgICAgICBwb3NpdGlvbiA9IHNsaWRlci5jaGlsZHJlbi5lcSgoZ2V0UGFnZXJRdHkoKSAtIDEpICogZ2V0TW92ZUJ5KCkpLnBvc2l0aW9uKCk7XG4gICAgICAgIC8vIGxhc3Qgc2xpZGVcbiAgICAgICAgfSBlbHNlIGlmIChzbGlkZXIuYWN0aXZlLmluZGV4ID09PSBzbGlkZXIuY2hpbGRyZW4ubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHBvc2l0aW9uID0gc2xpZGVyLmNoaWxkcmVuLmVxKHNsaWRlci5jaGlsZHJlbi5sZW5ndGggLSAxKS5wb3NpdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ2hvcml6b250YWwnKSB7IHNldFBvc2l0aW9uUHJvcGVydHkoLXBvc2l0aW9uLmxlZnQsICdyZXNldCcsIDApOyB9XG4gICAgICAgICAgZWxzZSBpZiAoc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICd2ZXJ0aWNhbCcpIHsgc2V0UG9zaXRpb25Qcm9wZXJ0eSgtcG9zaXRpb24udG9wLCAncmVzZXQnLCAwKTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBkZWNsYXJlIHRoYXQgdGhlIHRyYW5zaXRpb24gaXMgY29tcGxldGVcbiAgICAgIHNsaWRlci53b3JraW5nID0gZmFsc2U7XG4gICAgICAvLyBvblNsaWRlQWZ0ZXIgY2FsbGJhY2tcbiAgICAgIHNsaWRlci5zZXR0aW5ncy5vblNsaWRlQWZ0ZXIuY2FsbChlbCwgc2xpZGVyLmNoaWxkcmVuLmVxKHNsaWRlci5hY3RpdmUuaW5kZXgpLCBzbGlkZXIub2xkSW5kZXgsIHNsaWRlci5hY3RpdmUuaW5kZXgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBhdXRvIGNvbnRyb2xzIHN0YXRlIChlaXRoZXIgYWN0aXZlLCBvciBjb21iaW5lZCBzd2l0Y2gpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RhdGUgKHN0cmluZykgXCJzdGFydFwiLCBcInN0b3BcIlxuICAgICAqICAtIHRoZSBuZXcgc3RhdGUgb2YgdGhlIGF1dG8gc2hvd1xuICAgICAqL1xuICAgIHZhciB1cGRhdGVBdXRvQ29udHJvbHMgPSBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgLy8gaWYgYXV0b0NvbnRyb2xzQ29tYmluZSBpcyB0cnVlLCByZXBsYWNlIHRoZSBjdXJyZW50IGNvbnRyb2wgd2l0aCB0aGUgbmV3IHN0YXRlXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmF1dG9Db250cm9sc0NvbWJpbmUpIHtcbiAgICAgICAgc2xpZGVyLmNvbnRyb2xzLmF1dG9FbC5odG1sKHNsaWRlci5jb250cm9sc1tzdGF0ZV0pO1xuICAgICAgLy8gaWYgYXV0b0NvbnRyb2xzQ29tYmluZSBpcyBmYWxzZSwgYXBwbHkgdGhlIFwiYWN0aXZlXCIgY2xhc3MgdG8gdGhlIGFwcHJvcHJpYXRlIGNvbnRyb2xcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNsaWRlci5jb250cm9scy5hdXRvRWwuZmluZCgnYScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgc2xpZGVyLmNvbnRyb2xzLmF1dG9FbC5maW5kKCdhOm5vdCguYngtJyArIHN0YXRlICsgJyknKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGRpcmVjdGlvbiBjb250cm9scyAoY2hlY2tzIGlmIGVpdGhlciBzaG91bGQgYmUgaGlkZGVuKVxuICAgICAqL1xuICAgIHZhciB1cGRhdGVEaXJlY3Rpb25Db250cm9scyA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGdldFBhZ2VyUXR5KCkgPT09IDEpIHtcbiAgICAgICAgc2xpZGVyLmNvbnRyb2xzLnByZXYuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgIHNsaWRlci5jb250cm9scy5uZXh0LmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgfSBlbHNlIGlmICghc2xpZGVyLnNldHRpbmdzLmluZmluaXRlTG9vcCAmJiBzbGlkZXIuc2V0dGluZ3MuaGlkZUNvbnRyb2xPbkVuZCkge1xuICAgICAgICAvLyBpZiBmaXJzdCBzbGlkZVxuICAgICAgICBpZiAoc2xpZGVyLmFjdGl2ZS5pbmRleCA9PT0gMCkge1xuICAgICAgICAgIHNsaWRlci5jb250cm9scy5wcmV2LmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICAgIHNsaWRlci5jb250cm9scy5uZXh0LnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICAvLyBpZiBsYXN0IHNsaWRlXG4gICAgICAgIH0gZWxzZSBpZiAoc2xpZGVyLmFjdGl2ZS5pbmRleCA9PT0gZ2V0UGFnZXJRdHkoKSAtIDEpIHtcbiAgICAgICAgICBzbGlkZXIuY29udHJvbHMubmV4dC5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgICBzbGlkZXIuY29udHJvbHMucHJldi5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgLy8gaWYgYW55IHNsaWRlIGluIHRoZSBtaWRkbGVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzbGlkZXIuY29udHJvbHMucHJldi5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgICBzbGlkZXIuY29udHJvbHMubmV4dC5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cdC8qIGF1dG8gc3RhcnQgYW5kIHN0b3AgZnVuY3Rpb25zICovXG5cdHZhciB3aW5kb3dGb2N1c0hhbmRsZXIgPSBmdW5jdGlvbigpIHsgZWwuc3RhcnRBdXRvKCk7IH07XG5cdHZhciB3aW5kb3dCbHVySGFuZGxlciA9IGZ1bmN0aW9uKCkgeyBlbC5zdG9wQXV0bygpOyB9O1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHRoZSBhdXRvIHByb2Nlc3NcbiAgICAgKi9cbiAgICB2YXIgaW5pdEF1dG8gPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGlmIGF1dG9EZWxheSB3YXMgc3VwcGxpZWQsIGxhdW5jaCB0aGUgYXV0byBzaG93IHVzaW5nIGEgc2V0VGltZW91dCgpIGNhbGxcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuYXV0b0RlbGF5ID4gMCkge1xuICAgICAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZWwuc3RhcnRBdXRvLCBzbGlkZXIuc2V0dGluZ3MuYXV0b0RlbGF5KTtcbiAgICAgIC8vIGlmIGF1dG9EZWxheSB3YXMgbm90IHN1cHBsaWVkLCBzdGFydCB0aGUgYXV0byBzaG93IG5vcm1hbGx5XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5zdGFydEF1dG8oKTtcblxuICAgICAgICAvL2FkZCBmb2N1cyBhbmQgYmx1ciBldmVudHMgdG8gZW5zdXJlIGl0cyBydW5uaW5nIGlmIHRpbWVvdXQgZ2V0cyBwYXVzZWRcbiAgICAgICAgJCh3aW5kb3cpLmZvY3VzKHdpbmRvd0ZvY3VzSGFuZGxlcikuYmx1cih3aW5kb3dCbHVySGFuZGxlcik7XG4gICAgICB9XG4gICAgICAvLyBpZiBhdXRvSG92ZXIgaXMgcmVxdWVzdGVkXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmF1dG9Ib3Zlcikge1xuICAgICAgICAvLyBvbiBlbCBob3ZlclxuICAgICAgICBlbC5ob3ZlcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBpZiB0aGUgYXV0byBzaG93IGlzIGN1cnJlbnRseSBwbGF5aW5nIChoYXMgYW4gYWN0aXZlIGludGVydmFsKVxuICAgICAgICAgIGlmIChzbGlkZXIuaW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIC8vIHN0b3AgdGhlIGF1dG8gc2hvdyBhbmQgcGFzcyB0cnVlIGFyZ3VtZW50IHdoaWNoIHdpbGwgcHJldmVudCBjb250cm9sIHVwZGF0ZVxuICAgICAgICAgICAgZWwuc3RvcEF1dG8odHJ1ZSk7XG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBuZXcgYXV0b1BhdXNlZCB2YWx1ZSB3aGljaCB3aWxsIGJlIHVzZWQgYnkgdGhlIHJlbGF0aXZlIFwibW91c2VvdXRcIiBldmVudFxuICAgICAgICAgICAgc2xpZGVyLmF1dG9QYXVzZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gaWYgdGhlIGF1dG9QYXVzZWQgdmFsdWUgd2FzIGNyZWF0ZWQgYmUgdGhlIHByaW9yIFwibW91c2VvdmVyXCIgZXZlbnRcbiAgICAgICAgICBpZiAoc2xpZGVyLmF1dG9QYXVzZWQpIHtcbiAgICAgICAgICAgIC8vIHN0YXJ0IHRoZSBhdXRvIHNob3cgYW5kIHBhc3MgdHJ1ZSBhcmd1bWVudCB3aGljaCB3aWxsIHByZXZlbnQgY29udHJvbCB1cGRhdGVcbiAgICAgICAgICAgIGVsLnN0YXJ0QXV0byh0cnVlKTtcbiAgICAgICAgICAgIC8vIHJlc2V0IHRoZSBhdXRvUGF1c2VkIHZhbHVlXG4gICAgICAgICAgICBzbGlkZXIuYXV0b1BhdXNlZCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIHRpY2tlciBwcm9jZXNzXG4gICAgICovXG4gICAgdmFyIGluaXRUaWNrZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzdGFydFBvc2l0aW9uID0gMCxcbiAgICAgIHBvc2l0aW9uLCB0cmFuc2Zvcm0sIHZhbHVlLCBpZHgsIHJhdGlvLCBwcm9wZXJ0eSwgbmV3U3BlZWQsIHRvdGFsRGltZW5zO1xuICAgICAgLy8gaWYgYXV0b0RpcmVjdGlvbiBpcyBcIm5leHRcIiwgYXBwZW5kIGEgY2xvbmUgb2YgdGhlIGVudGlyZSBzbGlkZXJcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuYXV0b0RpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICAgIGVsLmFwcGVuZChzbGlkZXIuY2hpbGRyZW4uY2xvbmUoKS5hZGRDbGFzcygnYngtY2xvbmUnKSk7XG4gICAgICAvLyBpZiBhdXRvRGlyZWN0aW9uIGlzIFwicHJldlwiLCBwcmVwZW5kIGEgY2xvbmUgb2YgdGhlIGVudGlyZSBzbGlkZXIsIGFuZCBzZXQgdGhlIGxlZnQgcG9zaXRpb25cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnByZXBlbmQoc2xpZGVyLmNoaWxkcmVuLmNsb25lKCkuYWRkQ2xhc3MoJ2J4LWNsb25lJykpO1xuICAgICAgICBwb3NpdGlvbiA9IHNsaWRlci5jaGlsZHJlbi5maXJzdCgpLnBvc2l0aW9uKCk7XG4gICAgICAgIHN0YXJ0UG9zaXRpb24gPSBzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ2hvcml6b250YWwnID8gLXBvc2l0aW9uLmxlZnQgOiAtcG9zaXRpb24udG9wO1xuICAgICAgfVxuICAgICAgc2V0UG9zaXRpb25Qcm9wZXJ0eShzdGFydFBvc2l0aW9uLCAncmVzZXQnLCAwKTtcbiAgICAgIC8vIGRvIG5vdCBhbGxvdyBjb250cm9scyBpbiB0aWNrZXIgbW9kZVxuICAgICAgc2xpZGVyLnNldHRpbmdzLnBhZ2VyID0gZmFsc2U7XG4gICAgICBzbGlkZXIuc2V0dGluZ3MuY29udHJvbHMgPSBmYWxzZTtcbiAgICAgIHNsaWRlci5zZXR0aW5ncy5hdXRvQ29udHJvbHMgPSBmYWxzZTtcbiAgICAgIC8vIGlmIGF1dG9Ib3ZlciBpcyByZXF1ZXN0ZWRcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MudGlja2VySG92ZXIpIHtcbiAgICAgICAgaWYgKHNsaWRlci51c2luZ0NTUykge1xuICAgICAgICAgIGlkeCA9IHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAnaG9yaXpvbnRhbCcgPyA0IDogNTtcbiAgICAgICAgICBzbGlkZXIudmlld3BvcnQuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0gPSBlbC5jc3MoJy0nICsgc2xpZGVyLmNzc1ByZWZpeCArICctdHJhbnNmb3JtJyk7XG4gICAgICAgICAgICB2YWx1ZSA9IHBhcnNlRmxvYXQodHJhbnNmb3JtLnNwbGl0KCcsJylbaWR4XSk7XG4gICAgICAgICAgICBzZXRQb3NpdGlvblByb3BlcnR5KHZhbHVlLCAncmVzZXQnLCAwKTtcbiAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRvdGFsRGltZW5zID0gMDtcbiAgICAgICAgICAgIHNsaWRlci5jaGlsZHJlbi5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICAgIHRvdGFsRGltZW5zICs9IHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAnaG9yaXpvbnRhbCcgPyAkKHRoaXMpLm91dGVyV2lkdGgodHJ1ZSkgOiAkKHRoaXMpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIHNwZWVkIHJhdGlvICh1c2VkIHRvIGRldGVybWluZSB0aGUgbmV3IHNwZWVkIHRvIGZpbmlzaCB0aGUgcGF1c2VkIGFuaW1hdGlvbilcbiAgICAgICAgICAgIHJhdGlvID0gc2xpZGVyLnNldHRpbmdzLnNwZWVkIC8gdG90YWxEaW1lbnM7XG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgd2hpY2ggcHJvcGVydHkgdG8gdXNlXG4gICAgICAgICAgICBwcm9wZXJ0eSA9IHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAnaG9yaXpvbnRhbCcgPyAnbGVmdCcgOiAndG9wJztcbiAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgbmV3IHNwZWVkXG4gICAgICAgICAgICBuZXdTcGVlZCA9IHJhdGlvICogKHRvdGFsRGltZW5zIC0gKE1hdGguYWJzKHBhcnNlSW50KHZhbHVlKSkpKTtcbiAgICAgICAgICAgIHRpY2tlckxvb3AobmV3U3BlZWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIG9uIGVsIGhvdmVyXG4gICAgICAgICAgc2xpZGVyLnZpZXdwb3J0LmhvdmVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZWwuc3RvcCgpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSB0b3RhbCB3aWR0aCBvZiBjaGlsZHJlbiAodXNlZCB0byBjYWxjdWxhdGUgdGhlIHNwZWVkIHJhdGlvKVxuICAgICAgICAgICAgdG90YWxEaW1lbnMgPSAwO1xuICAgICAgICAgICAgc2xpZGVyLmNoaWxkcmVuLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgICAgdG90YWxEaW1lbnMgKz0gc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICdob3Jpem9udGFsJyA/ICQodGhpcykub3V0ZXJXaWR0aCh0cnVlKSA6ICQodGhpcykub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgc3BlZWQgcmF0aW8gKHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSBuZXcgc3BlZWQgdG8gZmluaXNoIHRoZSBwYXVzZWQgYW5pbWF0aW9uKVxuICAgICAgICAgICAgcmF0aW8gPSBzbGlkZXIuc2V0dGluZ3Muc3BlZWQgLyB0b3RhbERpbWVucztcbiAgICAgICAgICAgIC8vIGRldGVybWluZSB3aGljaCBwcm9wZXJ0eSB0byB1c2VcbiAgICAgICAgICAgIHByb3BlcnR5ID0gc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICdob3Jpem9udGFsJyA/ICdsZWZ0JyA6ICd0b3AnO1xuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBuZXcgc3BlZWRcbiAgICAgICAgICAgIG5ld1NwZWVkID0gcmF0aW8gKiAodG90YWxEaW1lbnMgLSAoTWF0aC5hYnMocGFyc2VJbnQoZWwuY3NzKHByb3BlcnR5KSkpKSk7XG4gICAgICAgICAgICB0aWNrZXJMb29wKG5ld1NwZWVkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gc3RhcnQgdGhlIHRpY2tlciBsb29wXG4gICAgICB0aWNrZXJMb29wKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJ1bnMgYSBjb250aW51b3VzIGxvb3AsIG5ld3MgdGlja2VyLXN0eWxlXG4gICAgICovXG4gICAgdmFyIHRpY2tlckxvb3AgPSBmdW5jdGlvbihyZXN1bWVTcGVlZCkge1xuICAgICAgdmFyIHNwZWVkID0gcmVzdW1lU3BlZWQgPyByZXN1bWVTcGVlZCA6IHNsaWRlci5zZXR0aW5ncy5zcGVlZCxcbiAgICAgIHBvc2l0aW9uID0ge2xlZnQ6IDAsIHRvcDogMH0sXG4gICAgICByZXNldCA9IHtsZWZ0OiAwLCB0b3A6IDB9LFxuICAgICAgYW5pbWF0ZVByb3BlcnR5LCByZXNldFZhbHVlLCBwYXJhbXM7XG5cbiAgICAgIC8vIGlmIFwibmV4dFwiIGFuaW1hdGUgbGVmdCBwb3NpdGlvbiB0byBsYXN0IGNoaWxkLCB0aGVuIHJlc2V0IGxlZnQgdG8gMFxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5hdXRvRGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgICAgcG9zaXRpb24gPSBlbC5maW5kKCcuYngtY2xvbmUnKS5maXJzdCgpLnBvc2l0aW9uKCk7XG4gICAgICAvLyBpZiBcInByZXZcIiBhbmltYXRlIGxlZnQgcG9zaXRpb24gdG8gMCwgdGhlbiByZXNldCBsZWZ0IHRvIGZpcnN0IG5vbi1jbG9uZSBjaGlsZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzZXQgPSBzbGlkZXIuY2hpbGRyZW4uZmlyc3QoKS5wb3NpdGlvbigpO1xuICAgICAgfVxuICAgICAgYW5pbWF0ZVByb3BlcnR5ID0gc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICdob3Jpem9udGFsJyA/IC1wb3NpdGlvbi5sZWZ0IDogLXBvc2l0aW9uLnRvcDtcbiAgICAgIHJlc2V0VmFsdWUgPSBzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ2hvcml6b250YWwnID8gLXJlc2V0LmxlZnQgOiAtcmVzZXQudG9wO1xuICAgICAgcGFyYW1zID0ge3Jlc2V0VmFsdWU6IHJlc2V0VmFsdWV9O1xuICAgICAgc2V0UG9zaXRpb25Qcm9wZXJ0eShhbmltYXRlUHJvcGVydHksICd0aWNrZXInLCBzcGVlZCwgcGFyYW1zKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgZWwgaXMgb24gc2NyZWVuXG4gICAgICovXG4gICAgdmFyIGlzT25TY3JlZW4gPSBmdW5jdGlvbihlbCkge1xuICAgICAgdmFyIHdpbiA9ICQod2luZG93KSxcbiAgICAgIHZpZXdwb3J0ID0ge1xuICAgICAgICB0b3A6IHdpbi5zY3JvbGxUb3AoKSxcbiAgICAgICAgbGVmdDogd2luLnNjcm9sbExlZnQoKVxuICAgICAgfSxcbiAgICAgIGJvdW5kcyA9IGVsLm9mZnNldCgpO1xuXG4gICAgICB2aWV3cG9ydC5yaWdodCA9IHZpZXdwb3J0LmxlZnQgKyB3aW4ud2lkdGgoKTtcbiAgICAgIHZpZXdwb3J0LmJvdHRvbSA9IHZpZXdwb3J0LnRvcCArIHdpbi5oZWlnaHQoKTtcbiAgICAgIGJvdW5kcy5yaWdodCA9IGJvdW5kcy5sZWZ0ICsgZWwub3V0ZXJXaWR0aCgpO1xuICAgICAgYm91bmRzLmJvdHRvbSA9IGJvdW5kcy50b3AgKyBlbC5vdXRlckhlaWdodCgpO1xuXG4gICAgICByZXR1cm4gKCEodmlld3BvcnQucmlnaHQgPCBib3VuZHMubGVmdCB8fCB2aWV3cG9ydC5sZWZ0ID4gYm91bmRzLnJpZ2h0IHx8IHZpZXdwb3J0LmJvdHRvbSA8IGJvdW5kcy50b3AgfHwgdmlld3BvcnQudG9wID4gYm91bmRzLmJvdHRvbSkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBrZXlib2FyZCBldmVudHNcbiAgICAgKi9cbiAgICB2YXIga2V5UHJlc3MgPSBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgYWN0aXZlRWxlbWVudFRhZyA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgdGFnRmlsdGVycyA9ICdpbnB1dHx0ZXh0YXJlYScsXG4gICAgICBwID0gbmV3IFJlZ0V4cChhY3RpdmVFbGVtZW50VGFnLFsnaSddKSxcbiAgICAgIHJlc3VsdCA9IHAuZXhlYyh0YWdGaWx0ZXJzKTtcblxuICAgICAgaWYgKHJlc3VsdCA9PSBudWxsICYmIGlzT25TY3JlZW4oZWwpKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAgICAgY2xpY2tOZXh0QmluZChlKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzNykge1xuICAgICAgICAgIGNsaWNrUHJldkJpbmQoZSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHRvdWNoIGV2ZW50c1xuICAgICAqL1xuICAgIHZhciBpbml0VG91Y2ggPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGluaXRpYWxpemUgb2JqZWN0IHRvIGNvbnRhaW4gYWxsIHRvdWNoIHZhbHVlc1xuICAgICAgc2xpZGVyLnRvdWNoID0ge1xuICAgICAgICBzdGFydDoge3g6IDAsIHk6IDB9LFxuICAgICAgICBlbmQ6IHt4OiAwLCB5OiAwfVxuICAgICAgfTtcbiAgICAgIHNsaWRlci52aWV3cG9ydC5iaW5kKCd0b3VjaHN0YXJ0IE1TUG9pbnRlckRvd24gcG9pbnRlcmRvd24nLCBvblRvdWNoU3RhcnQpO1xuXG4gICAgICAvL2ZvciBicm93c2VycyB0aGF0IGhhdmUgaW1wbGVtZW50ZWQgcG9pbnRlciBldmVudHMgYW5kIGZpcmUgYSBjbGljayBhZnRlclxuICAgICAgLy9ldmVyeSBwb2ludGVydXAgcmVnYXJkbGVzcyBvZiB3aGV0aGVyIHBvaW50ZXJ1cCBpcyBvbiBzYW1lIHNjcmVlbiBsb2NhdGlvbiBhcyBwb2ludGVyZG93biBvciBub3RcbiAgICAgIHNsaWRlci52aWV3cG9ydC5vbignY2xpY2snLCAnLmJ4c2xpZGVyIGEnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChzbGlkZXIudmlld3BvcnQuaGFzQ2xhc3MoJ2NsaWNrLWRpc2FibGVkJykpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgc2xpZGVyLnZpZXdwb3J0LnJlbW92ZUNsYXNzKCdjbGljay1kaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgXCJ0b3VjaHN0YXJ0XCJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlIChldmVudClcbiAgICAgKiAgLSBET00gZXZlbnQgb2JqZWN0XG4gICAgICovXG4gICAgdmFyIG9uVG91Y2hTdGFydCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIC8vZGlzYWJsZSBzbGlkZXIgY29udHJvbHMgd2hpbGUgdXNlciBpcyBpbnRlcmFjdGluZyB3aXRoIHNsaWRlcyB0byBhdm9pZCBzbGlkZXIgZnJlZXplIHRoYXQgaGFwcGVucyBvbiB0b3VjaCBkZXZpY2VzIHdoZW4gYSBzbGlkZSBzd2lwZSBoYXBwZW5zIGltbWVkaWF0ZWx5IGFmdGVyIGludGVyYWN0aW5nIHdpdGggc2xpZGVyIGNvbnRyb2xzXG4gICAgICBzbGlkZXIuY29udHJvbHMuZWwuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cbiAgICAgIGlmIChzbGlkZXIud29ya2luZykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNsaWRlci5jb250cm9scy5lbC5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJlY29yZCB0aGUgb3JpZ2luYWwgcG9zaXRpb24gd2hlbiB0b3VjaCBzdGFydHNcbiAgICAgICAgc2xpZGVyLnRvdWNoLm9yaWdpbmFsUG9zID0gZWwucG9zaXRpb24oKTtcbiAgICAgICAgdmFyIG9yaWcgPSBlLm9yaWdpbmFsRXZlbnQsXG4gICAgICAgIHRvdWNoUG9pbnRzID0gKHR5cGVvZiBvcmlnLmNoYW5nZWRUb3VjaGVzICE9PSAndW5kZWZpbmVkJykgPyBvcmlnLmNoYW5nZWRUb3VjaGVzIDogW29yaWddO1xuICAgICAgICAvLyByZWNvcmQgdGhlIHN0YXJ0aW5nIHRvdWNoIHgsIHkgY29vcmRpbmF0ZXNcbiAgICAgICAgc2xpZGVyLnRvdWNoLnN0YXJ0LnggPSB0b3VjaFBvaW50c1swXS5wYWdlWDtcbiAgICAgICAgc2xpZGVyLnRvdWNoLnN0YXJ0LnkgPSB0b3VjaFBvaW50c1swXS5wYWdlWTtcblxuICAgICAgICBpZiAoc2xpZGVyLnZpZXdwb3J0LmdldCgwKS5zZXRQb2ludGVyQ2FwdHVyZSkge1xuICAgICAgICAgIHNsaWRlci5wb2ludGVySWQgPSBvcmlnLnBvaW50ZXJJZDtcbiAgICAgICAgICBzbGlkZXIudmlld3BvcnQuZ2V0KDApLnNldFBvaW50ZXJDYXB0dXJlKHNsaWRlci5wb2ludGVySWQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGJpbmQgYSBcInRvdWNobW92ZVwiIGV2ZW50IHRvIHRoZSB2aWV3cG9ydFxuICAgICAgICBzbGlkZXIudmlld3BvcnQuYmluZCgndG91Y2htb3ZlIE1TUG9pbnRlck1vdmUgcG9pbnRlcm1vdmUnLCBvblRvdWNoTW92ZSk7XG4gICAgICAgIC8vIGJpbmQgYSBcInRvdWNoZW5kXCIgZXZlbnQgdG8gdGhlIHZpZXdwb3J0XG4gICAgICAgIHNsaWRlci52aWV3cG9ydC5iaW5kKCd0b3VjaGVuZCBNU1BvaW50ZXJVcCBwb2ludGVydXAnLCBvblRvdWNoRW5kKTtcbiAgICAgICAgc2xpZGVyLnZpZXdwb3J0LmJpbmQoJ01TUG9pbnRlckNhbmNlbCBwb2ludGVyY2FuY2VsJywgb25Qb2ludGVyQ2FuY2VsKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2FuY2VsIFBvaW50ZXIgZm9yIFdpbmRvd3MgUGhvbmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlIChldmVudClcbiAgICAgKiAgLSBET00gZXZlbnQgb2JqZWN0XG4gICAgICovXG4gICAgdmFyIG9uUG9pbnRlckNhbmNlbCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIC8qIG9uUG9pbnRlckNhbmNlbCBoYW5kbGVyIGlzIG5lZWRlZCB0byBkZWFsIHdpdGggc2l0dWF0aW9ucyB3aGVuIGEgdG91Y2hlbmRcbiAgICAgIGRvZXNuJ3QgZmlyZSBhZnRlciBhIHRvdWNoc3RhcnQgKHRoaXMgaGFwcGVucyBvbiB3aW5kb3dzIHBob25lcyBvbmx5KSAqL1xuICAgICAgc2V0UG9zaXRpb25Qcm9wZXJ0eShzbGlkZXIudG91Y2gub3JpZ2luYWxQb3MubGVmdCwgJ3Jlc2V0JywgMCk7XG5cbiAgICAgIC8vcmVtb3ZlIGhhbmRsZXJzXG4gICAgICBzbGlkZXIuY29udHJvbHMuZWwucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICBzbGlkZXIudmlld3BvcnQudW5iaW5kKCdNU1BvaW50ZXJDYW5jZWwgcG9pbnRlcmNhbmNlbCcsIG9uUG9pbnRlckNhbmNlbCk7XG4gICAgICBzbGlkZXIudmlld3BvcnQudW5iaW5kKCd0b3VjaG1vdmUgTVNQb2ludGVyTW92ZSBwb2ludGVybW92ZScsIG9uVG91Y2hNb3ZlKTtcbiAgICAgIHNsaWRlci52aWV3cG9ydC51bmJpbmQoJ3RvdWNoZW5kIE1TUG9pbnRlclVwIHBvaW50ZXJ1cCcsIG9uVG91Y2hFbmQpO1xuICAgICAgaWYgKHNsaWRlci52aWV3cG9ydC5nZXQoMCkucmVsZWFzZVBvaW50ZXJDYXB0dXJlKSB7XG4gICAgICAgIHNsaWRlci52aWV3cG9ydC5nZXQoMCkucmVsZWFzZVBvaW50ZXJDYXB0dXJlKHNsaWRlci5wb2ludGVySWQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBcInRvdWNobW92ZVwiXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZSAoZXZlbnQpXG4gICAgICogIC0gRE9NIGV2ZW50IG9iamVjdFxuICAgICAqL1xuICAgIHZhciBvblRvdWNoTW92ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciBvcmlnID0gZS5vcmlnaW5hbEV2ZW50LFxuICAgICAgdG91Y2hQb2ludHMgPSAodHlwZW9mIG9yaWcuY2hhbmdlZFRvdWNoZXMgIT09ICd1bmRlZmluZWQnKSA/IG9yaWcuY2hhbmdlZFRvdWNoZXMgOiBbb3JpZ10sXG4gICAgICAvLyBpZiBzY3JvbGxpbmcgb24geSBheGlzLCBkbyBub3QgcHJldmVudCBkZWZhdWx0XG4gICAgICB4TW92ZW1lbnQgPSBNYXRoLmFicyh0b3VjaFBvaW50c1swXS5wYWdlWCAtIHNsaWRlci50b3VjaC5zdGFydC54KSxcbiAgICAgIHlNb3ZlbWVudCA9IE1hdGguYWJzKHRvdWNoUG9pbnRzWzBdLnBhZ2VZIC0gc2xpZGVyLnRvdWNoLnN0YXJ0LnkpLFxuICAgICAgdmFsdWUgPSAwLFxuICAgICAgY2hhbmdlID0gMDtcblxuICAgICAgLy8geCBheGlzIHN3aXBlXG4gICAgICBpZiAoKHhNb3ZlbWVudCAqIDMpID4geU1vdmVtZW50ICYmIHNsaWRlci5zZXR0aW5ncy5wcmV2ZW50RGVmYXVsdFN3aXBlWCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAvLyB5IGF4aXMgc3dpcGVcbiAgICAgIH0gZWxzZSBpZiAoKHlNb3ZlbWVudCAqIDMpID4geE1vdmVtZW50ICYmIHNsaWRlci5zZXR0aW5ncy5wcmV2ZW50RGVmYXVsdFN3aXBlWSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLm1vZGUgIT09ICdmYWRlJyAmJiBzbGlkZXIuc2V0dGluZ3Mub25lVG9PbmVUb3VjaCkge1xuICAgICAgICAvLyBpZiBob3Jpem9udGFsLCBkcmFnIGFsb25nIHggYXhpc1xuICAgICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIGNoYW5nZSA9IHRvdWNoUG9pbnRzWzBdLnBhZ2VYIC0gc2xpZGVyLnRvdWNoLnN0YXJ0Lng7XG4gICAgICAgICAgdmFsdWUgPSBzbGlkZXIudG91Y2gub3JpZ2luYWxQb3MubGVmdCArIGNoYW5nZTtcbiAgICAgICAgLy8gaWYgdmVydGljYWwsIGRyYWcgYWxvbmcgeSBheGlzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hhbmdlID0gdG91Y2hQb2ludHNbMF0ucGFnZVkgLSBzbGlkZXIudG91Y2guc3RhcnQueTtcbiAgICAgICAgICB2YWx1ZSA9IHNsaWRlci50b3VjaC5vcmlnaW5hbFBvcy50b3AgKyBjaGFuZ2U7XG4gICAgICAgIH1cbiAgICAgICAgc2V0UG9zaXRpb25Qcm9wZXJ0eSh2YWx1ZSwgJ3Jlc2V0JywgMCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIFwidG91Y2hlbmRcIlxuICAgICAqXG4gICAgICogQHBhcmFtIGUgKGV2ZW50KVxuICAgICAqICAtIERPTSBldmVudCBvYmplY3RcbiAgICAgKi9cbiAgICB2YXIgb25Ub3VjaEVuZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHNsaWRlci52aWV3cG9ydC51bmJpbmQoJ3RvdWNobW92ZSBNU1BvaW50ZXJNb3ZlIHBvaW50ZXJtb3ZlJywgb25Ub3VjaE1vdmUpO1xuICAgICAgLy9lbmFibGUgc2xpZGVyIGNvbnRyb2xzIGFzIHNvb24gYXMgdXNlciBzdG9wcyBpbnRlcmFjaW5nIHdpdGggc2xpZGVzXG4gICAgICBzbGlkZXIuY29udHJvbHMuZWwucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICB2YXIgb3JpZyAgICA9IGUub3JpZ2luYWxFdmVudCxcbiAgICAgIHRvdWNoUG9pbnRzID0gKHR5cGVvZiBvcmlnLmNoYW5nZWRUb3VjaGVzICE9PSAndW5kZWZpbmVkJykgPyBvcmlnLmNoYW5nZWRUb3VjaGVzIDogW29yaWddLFxuICAgICAgdmFsdWUgICAgICAgPSAwLFxuICAgICAgZGlzdGFuY2UgICAgPSAwO1xuICAgICAgLy8gcmVjb3JkIGVuZCB4LCB5IHBvc2l0aW9uc1xuICAgICAgc2xpZGVyLnRvdWNoLmVuZC54ID0gdG91Y2hQb2ludHNbMF0ucGFnZVg7XG4gICAgICBzbGlkZXIudG91Y2guZW5kLnkgPSB0b3VjaFBvaW50c1swXS5wYWdlWTtcbiAgICAgIC8vIGlmIGZhZGUgbW9kZSwgY2hlY2sgaWYgYWJzb2x1dGUgeCBkaXN0YW5jZSBjbGVhcnMgdGhlIHRocmVzaG9sZFxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAnZmFkZScpIHtcbiAgICAgICAgZGlzdGFuY2UgPSBNYXRoLmFicyhzbGlkZXIudG91Y2guc3RhcnQueCAtIHNsaWRlci50b3VjaC5lbmQueCk7XG4gICAgICAgIGlmIChkaXN0YW5jZSA+PSBzbGlkZXIuc2V0dGluZ3Muc3dpcGVUaHJlc2hvbGQpIHtcbiAgICAgICAgICBpZiAoc2xpZGVyLnRvdWNoLnN0YXJ0LnggPiBzbGlkZXIudG91Y2guZW5kLngpIHtcbiAgICAgICAgICAgIGVsLmdvVG9OZXh0U2xpZGUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwuZ29Ub1ByZXZTbGlkZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbC5zdG9wQXV0bygpO1xuICAgICAgICB9XG4gICAgICAvLyBub3QgZmFkZSBtb2RlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjYWxjdWxhdGUgZGlzdGFuY2UgYW5kIGVsJ3MgYW5pbWF0ZSBwcm9wZXJ0eVxuICAgICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIGRpc3RhbmNlID0gc2xpZGVyLnRvdWNoLmVuZC54IC0gc2xpZGVyLnRvdWNoLnN0YXJ0Lng7XG4gICAgICAgICAgdmFsdWUgPSBzbGlkZXIudG91Y2gub3JpZ2luYWxQb3MubGVmdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXN0YW5jZSA9IHNsaWRlci50b3VjaC5lbmQueSAtIHNsaWRlci50b3VjaC5zdGFydC55O1xuICAgICAgICAgIHZhbHVlID0gc2xpZGVyLnRvdWNoLm9yaWdpbmFsUG9zLnRvcDtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBub3QgaW5maW5pdGUgbG9vcCBhbmQgZmlyc3QgLyBsYXN0IHNsaWRlLCBkbyBub3QgYXR0ZW1wdCBhIHNsaWRlIHRyYW5zaXRpb25cbiAgICAgICAgaWYgKCFzbGlkZXIuc2V0dGluZ3MuaW5maW5pdGVMb29wICYmICgoc2xpZGVyLmFjdGl2ZS5pbmRleCA9PT0gMCAmJiBkaXN0YW5jZSA+IDApIHx8IChzbGlkZXIuYWN0aXZlLmxhc3QgJiYgZGlzdGFuY2UgPCAwKSkpIHtcbiAgICAgICAgICBzZXRQb3NpdGlvblByb3BlcnR5KHZhbHVlLCAncmVzZXQnLCAyMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIGRpc3RhbmNlIGNsZWFycyB0aHJlc2hvbGRcbiAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlzdGFuY2UpID49IHNsaWRlci5zZXR0aW5ncy5zd2lwZVRocmVzaG9sZCkge1xuICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCkge1xuICAgICAgICAgICAgICBlbC5nb1RvTmV4dFNsaWRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbC5nb1RvUHJldlNsaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbC5zdG9wQXV0bygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBlbC5hbmltYXRlKHByb3BlcnR5LCAyMDApO1xuICAgICAgICAgICAgc2V0UG9zaXRpb25Qcm9wZXJ0eSh2YWx1ZSwgJ3Jlc2V0JywgMjAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNsaWRlci52aWV3cG9ydC51bmJpbmQoJ3RvdWNoZW5kIE1TUG9pbnRlclVwIHBvaW50ZXJ1cCcsIG9uVG91Y2hFbmQpO1xuICAgICAgaWYgKHNsaWRlci52aWV3cG9ydC5nZXQoMCkucmVsZWFzZVBvaW50ZXJDYXB0dXJlKSB7XG4gICAgICAgIHNsaWRlci52aWV3cG9ydC5nZXQoMCkucmVsZWFzZVBvaW50ZXJDYXB0dXJlKHNsaWRlci5wb2ludGVySWQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBXaW5kb3cgcmVzaXplIGV2ZW50IGNhbGxiYWNrXG4gICAgICovXG4gICAgdmFyIHJlc2l6ZVdpbmRvdyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIC8vIGRvbid0IGRvIGFueXRoaW5nIGlmIHNsaWRlciBpc24ndCBpbml0aWFsaXplZC5cbiAgICAgIGlmICghc2xpZGVyLmluaXRpYWxpemVkKSB7IHJldHVybjsgfVxuICAgICAgLy8gRGVsYXkgaWYgc2xpZGVyIHdvcmtpbmcuXG4gICAgICBpZiAoc2xpZGVyLndvcmtpbmcpIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQocmVzaXplV2luZG93LCAxMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBnZXQgdGhlIG5ldyB3aW5kb3cgZGltZW5zIChhZ2FpbiwgdGhhbmsgeW91IElFKVxuICAgICAgICB2YXIgd2luZG93V2lkdGhOZXcgPSAkKHdpbmRvdykud2lkdGgoKSxcbiAgICAgICAgd2luZG93SGVpZ2h0TmV3ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCBpdCBpcyBhIHRydWUgd2luZG93IHJlc2l6ZVxuICAgICAgICAvLyAqd2UgbXVzdCBjaGVjayB0aGlzIGJlY2F1c2Ugb3VyIGRpbm9zYXVyIGZyaWVuZCBJRSBmaXJlcyBhIHdpbmRvdyByZXNpemUgZXZlbnQgd2hlbiBjZXJ0YWluIERPTSBlbGVtZW50c1xuICAgICAgICAvLyBhcmUgcmVzaXplZC4gQ2FuIHlvdSBqdXN0IGRpZSBhbHJlYWR5PypcbiAgICAgICAgaWYgKHdpbmRvd1dpZHRoICE9PSB3aW5kb3dXaWR0aE5ldyB8fCB3aW5kb3dIZWlnaHQgIT09IHdpbmRvd0hlaWdodE5ldykge1xuICAgICAgICAgIC8vIHNldCB0aGUgbmV3IHdpbmRvdyBkaW1lbnNcbiAgICAgICAgICB3aW5kb3dXaWR0aCA9IHdpbmRvd1dpZHRoTmV3O1xuICAgICAgICAgIHdpbmRvd0hlaWdodCA9IHdpbmRvd0hlaWdodE5ldztcbiAgICAgICAgICAvLyB1cGRhdGUgYWxsIGR5bmFtaWMgZWxlbWVudHNcbiAgICAgICAgICBlbC5yZWRyYXdTbGlkZXIoKTtcbiAgICAgICAgICAvLyBDYWxsIHVzZXIgcmVzaXplIGhhbmRsZXJcbiAgICAgICAgICBzbGlkZXIuc2V0dGluZ3Mub25TbGlkZXJSZXNpemUuY2FsbChlbCwgc2xpZGVyLmFjdGl2ZS5pbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBhcmlhLWhpZGRlbj10cnVlIGF0dHJpYnV0ZSB0byBlYWNoIGVsZW1lbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdGFydFZpc2libGVJbmRleCAoaW50KVxuICAgICAqICAtIHRoZSBmaXJzdCB2aXNpYmxlIGVsZW1lbnQncyBpbmRleFxuICAgICAqL1xuICAgIHZhciBhcHBseUFyaWFIaWRkZW5BdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3RhcnRWaXNpYmxlSW5kZXgpIHtcbiAgICAgIHZhciBudW1iZXJPZlNsaWRlc1Nob3dpbmcgPSBnZXROdW1iZXJTbGlkZXNTaG93aW5nKCk7XG4gICAgICAvLyBvbmx5IGFwcGx5IGF0dHJpYnV0ZXMgaWYgdGhlIHNldHRpbmcgaXMgZW5hYmxlZCBhbmQgbm90IGluIHRpY2tlciBtb2RlXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmFyaWFIaWRkZW4gJiYgIXNsaWRlci5zZXR0aW5ncy50aWNrZXIpIHtcbiAgICAgICAgLy8gYWRkIGFyaWEtaGlkZGVuPXRydWUgdG8gYWxsIGVsZW1lbnRzXG4gICAgICAgIHNsaWRlci5jaGlsZHJlbi5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICAgIC8vIGdldCB0aGUgdmlzaWJsZSBlbGVtZW50cyBhbmQgY2hhbmdlIHRvIGFyaWEtaGlkZGVuPWZhbHNlXG4gICAgICAgIHNsaWRlci5jaGlsZHJlbi5zbGljZShzdGFydFZpc2libGVJbmRleCwgc3RhcnRWaXNpYmxlSW5kZXggKyBudW1iZXJPZlNsaWRlc1Nob3dpbmcpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgaW5kZXggYWNjb3JkaW5nIHRvIHByZXNlbnQgcGFnZSByYW5nZVxuICAgICAqXG4gICAgICogQHBhcmFtIHNsaWRlT25kZXggKGludClcbiAgICAgKiAgLSB0aGUgZGVzaXJlZCBzbGlkZSBpbmRleFxuICAgICAqL1xuICAgIHZhciBzZXRTbGlkZUluZGV4ID0gZnVuY3Rpb24oc2xpZGVJbmRleCkge1xuICAgICAgaWYgKHNsaWRlSW5kZXggPCAwKSB7XG4gICAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuaW5maW5pdGVMb29wKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFBhZ2VyUXR5KCkgLSAxO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgLy93ZSBkb24ndCBnbyB0byB1bmRlZmluZWQgc2xpZGVzXG4gICAgICAgICAgcmV0dXJuIHNsaWRlci5hY3RpdmUuaW5kZXg7XG4gICAgICAgIH1cbiAgICAgIC8vIGlmIHNsaWRlSW5kZXggaXMgZ3JlYXRlciB0aGFuIGNoaWxkcmVuIGxlbmd0aCwgc2V0IGFjdGl2ZSBpbmRleCB0byAwICh0aGlzIGhhcHBlbnMgZHVyaW5nIGluZmluaXRlIGxvb3ApXG4gICAgICB9IGVsc2UgaWYgKHNsaWRlSW5kZXggPj0gZ2V0UGFnZXJRdHkoKSkge1xuICAgICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmluZmluaXRlTG9vcCkge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vd2UgZG9uJ3QgbW92ZSB0byB1bmRlZmluZWQgcGFnZXNcbiAgICAgICAgICByZXR1cm4gc2xpZGVyLmFjdGl2ZS5pbmRleDtcbiAgICAgICAgfVxuICAgICAgLy8gc2V0IGFjdGl2ZSBpbmRleCB0byByZXF1ZXN0ZWQgc2xpZGVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzbGlkZUluZGV4O1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqID0gUFVCTElDIEZVTkNUSU9OU1xuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBzbGlkZSB0cmFuc2l0aW9uIHRvIHRoZSBzcGVjaWZpZWQgc2xpZGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzbGlkZUluZGV4IChpbnQpXG4gICAgICogIC0gdGhlIGRlc3RpbmF0aW9uIHNsaWRlJ3MgaW5kZXggKHplcm8tYmFzZWQpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIChzdHJpbmcpXG4gICAgICogIC0gSU5URVJOQUwgVVNFIE9OTFkgLSB0aGUgZGlyZWN0aW9uIG9mIHRyYXZlbCAoXCJwcmV2XCIgLyBcIm5leHRcIilcbiAgICAgKi9cbiAgICBlbC5nb1RvU2xpZGUgPSBmdW5jdGlvbihzbGlkZUluZGV4LCBkaXJlY3Rpb24pIHtcbiAgICAgIC8vIG9uU2xpZGVCZWZvcmUsIG9uU2xpZGVOZXh0LCBvblNsaWRlUHJldiBjYWxsYmFja3NcbiAgICAgIC8vIEFsbG93IHRyYW5zaXRpb24gY2FuY2VsaW5nIGJhc2VkIG9uIHJldHVybmVkIHZhbHVlXG4gICAgICB2YXIgcGVyZm9ybVRyYW5zaXRpb24gPSB0cnVlLFxuICAgICAgbW92ZUJ5ID0gMCxcbiAgICAgIHBvc2l0aW9uID0ge2xlZnQ6IDAsIHRvcDogMH0sXG4gICAgICBsYXN0Q2hpbGQgPSBudWxsLFxuICAgICAgbGFzdFNob3dpbmdJbmRleCwgZXEsIHZhbHVlLCByZXF1ZXN0RWw7XG4gICAgICAvLyBzdG9yZSB0aGUgb2xkIGluZGV4XG4gICAgICBzbGlkZXIub2xkSW5kZXggPSBzbGlkZXIuYWN0aXZlLmluZGV4O1xuICAgICAgLy9zZXQgbmV3IGluZGV4XG4gICAgICBzbGlkZXIuYWN0aXZlLmluZGV4ID0gc2V0U2xpZGVJbmRleChzbGlkZUluZGV4KTtcblxuICAgICAgLy8gaWYgcGx1Z2luIGlzIGN1cnJlbnRseSBpbiBtb3Rpb24sIGlnbm9yZSByZXF1ZXN0XG4gICAgICBpZiAoc2xpZGVyLndvcmtpbmcgfHwgc2xpZGVyLmFjdGl2ZS5pbmRleCA9PT0gc2xpZGVyLm9sZEluZGV4KSB7IHJldHVybjsgfVxuICAgICAgLy8gZGVjbGFyZSB0aGF0IHBsdWdpbiBpcyBpbiBtb3Rpb25cbiAgICAgIHNsaWRlci53b3JraW5nID0gdHJ1ZTtcblxuICAgICAgcGVyZm9ybVRyYW5zaXRpb24gPSBzbGlkZXIuc2V0dGluZ3Mub25TbGlkZUJlZm9yZS5jYWxsKGVsLCBzbGlkZXIuY2hpbGRyZW4uZXEoc2xpZGVyLmFjdGl2ZS5pbmRleCksIHNsaWRlci5vbGRJbmRleCwgc2xpZGVyLmFjdGl2ZS5pbmRleCk7XG5cbiAgICAgIC8vIElmIHRyYW5zaXRpb25zIGNhbmNlbGVkLCByZXNldCBhbmQgcmV0dXJuXG4gICAgICBpZiAodHlwZW9mIChwZXJmb3JtVHJhbnNpdGlvbikgIT09ICd1bmRlZmluZWQnICYmICFwZXJmb3JtVHJhbnNpdGlvbikge1xuICAgICAgICBzbGlkZXIuYWN0aXZlLmluZGV4ID0gc2xpZGVyLm9sZEluZGV4OyAvLyByZXN0b3JlIG9sZCBpbmRleFxuICAgICAgICBzbGlkZXIud29ya2luZyA9IGZhbHNlOyAvLyBpcyBub3QgaW4gbW90aW9uXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICAgIC8vIFByZXZlbnQgY2FuY2VsaW5nIGluIGZ1dHVyZSBmdW5jdGlvbnMgb3IgbGFjayB0aGVyZS1vZiBmcm9tIG5lZ2F0aW5nIHByZXZpb3VzIGNvbW1hbmRzIHRvIGNhbmNlbFxuICAgICAgICBpZiAoIXNsaWRlci5zZXR0aW5ncy5vblNsaWRlTmV4dC5jYWxsKGVsLCBzbGlkZXIuY2hpbGRyZW4uZXEoc2xpZGVyLmFjdGl2ZS5pbmRleCksIHNsaWRlci5vbGRJbmRleCwgc2xpZGVyLmFjdGl2ZS5pbmRleCkpIHtcbiAgICAgICAgICBwZXJmb3JtVHJhbnNpdGlvbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKSB7XG4gICAgICAgIC8vIFByZXZlbnQgY2FuY2VsaW5nIGluIGZ1dHVyZSBmdW5jdGlvbnMgb3IgbGFjayB0aGVyZS1vZiBmcm9tIG5lZ2F0aW5nIHByZXZpb3VzIGNvbW1hbmRzIHRvIGNhbmNlbFxuICAgICAgICBpZiAoIXNsaWRlci5zZXR0aW5ncy5vblNsaWRlUHJldi5jYWxsKGVsLCBzbGlkZXIuY2hpbGRyZW4uZXEoc2xpZGVyLmFjdGl2ZS5pbmRleCksIHNsaWRlci5vbGRJbmRleCwgc2xpZGVyLmFjdGl2ZS5pbmRleCkpIHtcbiAgICAgICAgICBwZXJmb3JtVHJhbnNpdGlvbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGNoZWNrIGlmIGxhc3Qgc2xpZGVcbiAgICAgIHNsaWRlci5hY3RpdmUubGFzdCA9IHNsaWRlci5hY3RpdmUuaW5kZXggPj0gZ2V0UGFnZXJRdHkoKSAtIDE7XG4gICAgICAvLyB1cGRhdGUgdGhlIHBhZ2VyIHdpdGggYWN0aXZlIGNsYXNzXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLnBhZ2VyIHx8IHNsaWRlci5zZXR0aW5ncy5wYWdlckN1c3RvbSkgeyB1cGRhdGVQYWdlckFjdGl2ZShzbGlkZXIuYWN0aXZlLmluZGV4KTsgfVxuICAgICAgLy8gLy8gY2hlY2sgZm9yIGRpcmVjdGlvbiBjb250cm9sIHVwZGF0ZVxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5jb250cm9scykgeyB1cGRhdGVEaXJlY3Rpb25Db250cm9scygpOyB9XG4gICAgICAvLyBpZiBzbGlkZXIgaXMgc2V0IHRvIG1vZGU6IFwiZmFkZVwiXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICdmYWRlJykge1xuICAgICAgICAvLyBpZiBhZGFwdGl2ZUhlaWdodCBpcyB0cnVlIGFuZCBuZXh0IGhlaWdodCBpcyBkaWZmZXJlbnQgZnJvbSBjdXJyZW50IGhlaWdodCwgYW5pbWF0ZSB0byB0aGUgbmV3IGhlaWdodFxuICAgICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmFkYXB0aXZlSGVpZ2h0ICYmIHNsaWRlci52aWV3cG9ydC5oZWlnaHQoKSAhPT0gZ2V0Vmlld3BvcnRIZWlnaHQoKSkge1xuICAgICAgICAgIHNsaWRlci52aWV3cG9ydC5hbmltYXRlKHtoZWlnaHQ6IGdldFZpZXdwb3J0SGVpZ2h0KCl9LCBzbGlkZXIuc2V0dGluZ3MuYWRhcHRpdmVIZWlnaHRTcGVlZCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZmFkZSBvdXQgdGhlIHZpc2libGUgY2hpbGQgYW5kIHJlc2V0IGl0cyB6LWluZGV4IHZhbHVlXG4gICAgICAgIHNsaWRlci5jaGlsZHJlbi5maWx0ZXIoJzp2aXNpYmxlJykuZmFkZU91dChzbGlkZXIuc2V0dGluZ3Muc3BlZWQpLmNzcyh7ekluZGV4OiAwfSk7XG4gICAgICAgIC8vIGZhZGUgaW4gdGhlIG5ld2x5IHJlcXVlc3RlZCBzbGlkZVxuICAgICAgICBzbGlkZXIuY2hpbGRyZW4uZXEoc2xpZGVyLmFjdGl2ZS5pbmRleCkuY3NzKCd6SW5kZXgnLCBzbGlkZXIuc2V0dGluZ3Muc2xpZGVaSW5kZXggKyAxKS5mYWRlSW4oc2xpZGVyLnNldHRpbmdzLnNwZWVkLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKHRoaXMpLmNzcygnekluZGV4Jywgc2xpZGVyLnNldHRpbmdzLnNsaWRlWkluZGV4KTtcbiAgICAgICAgICB1cGRhdGVBZnRlclNsaWRlVHJhbnNpdGlvbigpO1xuICAgICAgICB9KTtcbiAgICAgIC8vIHNsaWRlciBtb2RlIGlzIG5vdCBcImZhZGVcIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgYWRhcHRpdmVIZWlnaHQgaXMgdHJ1ZSBhbmQgbmV4dCBoZWlnaHQgaXMgZGlmZmVyZW50IGZyb20gY3VycmVudCBoZWlnaHQsIGFuaW1hdGUgdG8gdGhlIG5ldyBoZWlnaHRcbiAgICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5hZGFwdGl2ZUhlaWdodCAmJiBzbGlkZXIudmlld3BvcnQuaGVpZ2h0KCkgIT09IGdldFZpZXdwb3J0SGVpZ2h0KCkpIHtcbiAgICAgICAgICBzbGlkZXIudmlld3BvcnQuYW5pbWF0ZSh7aGVpZ2h0OiBnZXRWaWV3cG9ydEhlaWdodCgpfSwgc2xpZGVyLnNldHRpbmdzLmFkYXB0aXZlSGVpZ2h0U3BlZWQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIGNhcm91c2VsIGFuZCBub3QgaW5maW5pdGUgbG9vcFxuICAgICAgICBpZiAoIXNsaWRlci5zZXR0aW5ncy5pbmZpbml0ZUxvb3AgJiYgc2xpZGVyLmNhcm91c2VsICYmIHNsaWRlci5hY3RpdmUubGFzdCkge1xuICAgICAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAvLyBnZXQgdGhlIGxhc3QgY2hpbGQgcG9zaXRpb25cbiAgICAgICAgICAgIGxhc3RDaGlsZCA9IHNsaWRlci5jaGlsZHJlbi5lcShzbGlkZXIuY2hpbGRyZW4ubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGxhc3RDaGlsZC5wb3NpdGlvbigpO1xuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBwb3NpdGlvbiBvZiB0aGUgbGFzdCBzbGlkZVxuICAgICAgICAgICAgbW92ZUJ5ID0gc2xpZGVyLnZpZXdwb3J0LndpZHRoKCkgLSBsYXN0Q2hpbGQub3V0ZXJXaWR0aCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBnZXQgbGFzdCBzaG93aW5nIGluZGV4IHBvc2l0aW9uXG4gICAgICAgICAgICBsYXN0U2hvd2luZ0luZGV4ID0gc2xpZGVyLmNoaWxkcmVuLmxlbmd0aCAtIHNsaWRlci5zZXR0aW5ncy5taW5TbGlkZXM7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IHNsaWRlci5jaGlsZHJlbi5lcShsYXN0U2hvd2luZ0luZGV4KS5wb3NpdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBob3Jpem9udGFsIGNhcm91c2VsLCBnb2luZyBwcmV2aW91cyB3aGlsZSBvbiBmaXJzdCBzbGlkZSAoaW5maW5pdGVMb29wIG1vZGUpXG4gICAgICAgIH0gZWxzZSBpZiAoc2xpZGVyLmNhcm91c2VsICYmIHNsaWRlci5hY3RpdmUubGFzdCAmJiBkaXJlY3Rpb24gPT09ICdwcmV2Jykge1xuICAgICAgICAgIC8vIGdldCB0aGUgbGFzdCBjaGlsZCBwb3NpdGlvblxuICAgICAgICAgIGVxID0gc2xpZGVyLnNldHRpbmdzLm1vdmVTbGlkZXMgPT09IDEgPyBzbGlkZXIuc2V0dGluZ3MubWF4U2xpZGVzIC0gZ2V0TW92ZUJ5KCkgOiAoKGdldFBhZ2VyUXR5KCkgLSAxKSAqIGdldE1vdmVCeSgpKSAtIChzbGlkZXIuY2hpbGRyZW4ubGVuZ3RoIC0gc2xpZGVyLnNldHRpbmdzLm1heFNsaWRlcyk7XG4gICAgICAgICAgbGFzdENoaWxkID0gZWwuY2hpbGRyZW4oJy5ieC1jbG9uZScpLmVxKGVxKTtcbiAgICAgICAgICBwb3NpdGlvbiA9IGxhc3RDaGlsZC5wb3NpdGlvbigpO1xuICAgICAgICAvLyBpZiBpbmZpbml0ZSBsb29wIGFuZCBcIk5leHRcIiBpcyBjbGlja2VkIG9uIHRoZSBsYXN0IHNsaWRlXG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcgJiYgc2xpZGVyLmFjdGl2ZS5pbmRleCA9PT0gMCkge1xuICAgICAgICAgIC8vIGdldCB0aGUgbGFzdCBjbG9uZSBwb3NpdGlvblxuICAgICAgICAgIHBvc2l0aW9uID0gZWwuZmluZCgnPiAuYngtY2xvbmUnKS5lcShzbGlkZXIuc2V0dGluZ3MubWF4U2xpZGVzKS5wb3NpdGlvbigpO1xuICAgICAgICAgIHNsaWRlci5hY3RpdmUubGFzdCA9IGZhbHNlO1xuICAgICAgICAvLyBub3JtYWwgbm9uLXplcm8gcmVxdWVzdHNcbiAgICAgICAgfSBlbHNlIGlmIChzbGlkZUluZGV4ID49IDApIHtcbiAgICAgICAgICAvL3BhcnNlSW50IGlzIGFwcGxpZWQgdG8gYWxsb3cgZmxvYXRzIGZvciBzbGlkZXMvcGFnZVxuICAgICAgICAgIHJlcXVlc3RFbCA9IHNsaWRlSW5kZXggKiBwYXJzZUludChnZXRNb3ZlQnkoKSk7XG4gICAgICAgICAgcG9zaXRpb24gPSBzbGlkZXIuY2hpbGRyZW4uZXEocmVxdWVzdEVsKS5wb3NpdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogSWYgdGhlIHBvc2l0aW9uIGRvZXNuJ3QgZXhpc3RcbiAgICAgICAgICogKGUuZy4gaWYgeW91IGRlc3Ryb3kgdGhlIHNsaWRlciBvbiBhIG5leHQgY2xpY2spLFxuICAgICAgICAgKiBpdCBkb2Vzbid0IHRocm93IGFuIGVycm9yLlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHR5cGVvZiAocG9zaXRpb24pICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHZhbHVlID0gc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICdob3Jpem9udGFsJyA/IC0ocG9zaXRpb24ubGVmdCAtIG1vdmVCeSkgOiAtcG9zaXRpb24udG9wO1xuICAgICAgICAgIC8vIHBsdWdpbiB2YWx1ZXMgdG8gYmUgYW5pbWF0ZWRcbiAgICAgICAgICBzZXRQb3NpdGlvblByb3BlcnR5KHZhbHVlLCAnc2xpZGUnLCBzbGlkZXIuc2V0dGluZ3Muc3BlZWQpO1xuICAgICAgICB9XG4gICAgICAgIHNsaWRlci53b3JraW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmFyaWFIaWRkZW4pIHsgYXBwbHlBcmlhSGlkZGVuQXR0cmlidXRlcyhzbGlkZXIuYWN0aXZlLmluZGV4ICogZ2V0TW92ZUJ5KCkpOyB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRyYW5zaXRpb25zIHRvIHRoZSBuZXh0IHNsaWRlIGluIHRoZSBzaG93XG4gICAgICovXG4gICAgZWwuZ29Ub05leHRTbGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gaWYgaW5maW5pdGVMb29wIGlzIGZhbHNlIGFuZCBsYXN0IHBhZ2UgaXMgc2hvd2luZywgZGlzcmVnYXJkIGNhbGxcbiAgICAgIGlmICghc2xpZGVyLnNldHRpbmdzLmluZmluaXRlTG9vcCAmJiBzbGlkZXIuYWN0aXZlLmxhc3QpIHsgcmV0dXJuOyB9XG5cdCAgaWYgKHNsaWRlci53b3JraW5nID09IHRydWUpeyByZXR1cm4gO31cbiAgICAgIHZhciBwYWdlckluZGV4ID0gcGFyc2VJbnQoc2xpZGVyLmFjdGl2ZS5pbmRleCkgKyAxO1xuICAgICAgZWwuZ29Ub1NsaWRlKHBhZ2VySW5kZXgsICduZXh0Jyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRyYW5zaXRpb25zIHRvIHRoZSBwcmV2IHNsaWRlIGluIHRoZSBzaG93XG4gICAgICovXG4gICAgZWwuZ29Ub1ByZXZTbGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gaWYgaW5maW5pdGVMb29wIGlzIGZhbHNlIGFuZCBsYXN0IHBhZ2UgaXMgc2hvd2luZywgZGlzcmVnYXJkIGNhbGxcbiAgICAgIGlmICghc2xpZGVyLnNldHRpbmdzLmluZmluaXRlTG9vcCAmJiBzbGlkZXIuYWN0aXZlLmluZGV4ID09PSAwKSB7IHJldHVybjsgfVxuXHQgIGlmIChzbGlkZXIud29ya2luZyA9PSB0cnVlKXsgcmV0dXJuIDt9XG4gICAgICB2YXIgcGFnZXJJbmRleCA9IHBhcnNlSW50KHNsaWRlci5hY3RpdmUuaW5kZXgpIC0gMTtcbiAgICAgIGVsLmdvVG9TbGlkZShwYWdlckluZGV4LCAncHJldicpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdGFydHMgdGhlIGF1dG8gc2hvd1xuICAgICAqXG4gICAgICogQHBhcmFtIHByZXZlbnRDb250cm9sVXBkYXRlIChib29sZWFuKVxuICAgICAqICAtIGlmIHRydWUsIGF1dG8gY29udHJvbHMgc3RhdGUgd2lsbCBub3QgYmUgdXBkYXRlZFxuICAgICAqL1xuICAgIGVsLnN0YXJ0QXV0byA9IGZ1bmN0aW9uKHByZXZlbnRDb250cm9sVXBkYXRlKSB7XG4gICAgICAvLyBpZiBhbiBpbnRlcnZhbCBhbHJlYWR5IGV4aXN0cywgZGlzcmVnYXJkIGNhbGxcbiAgICAgIGlmIChzbGlkZXIuaW50ZXJ2YWwpIHsgcmV0dXJuOyB9XG4gICAgICAvLyBjcmVhdGUgYW4gaW50ZXJ2YWxcbiAgICAgIHNsaWRlci5pbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmF1dG9EaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgICAgIGVsLmdvVG9OZXh0U2xpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbC5nb1RvUHJldlNsaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHNsaWRlci5zZXR0aW5ncy5wYXVzZSk7XG5cdCAgLy9hbGxiYWNrIGZvciB3aGVuIHRoZSBhdXRvIHJvdGF0ZSBzdGF0dXMgY2hhbmdlc1xuXHQgIHNsaWRlci5zZXR0aW5ncy5vbkF1dG9DaGFuZ2UuY2FsbChlbCwgdHJ1ZSk7XG4gICAgICAvLyBpZiBhdXRvIGNvbnRyb2xzIGFyZSBkaXNwbGF5ZWQgYW5kIHByZXZlbnRDb250cm9sVXBkYXRlIGlzIG5vdCB0cnVlXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmF1dG9Db250cm9scyAmJiBwcmV2ZW50Q29udHJvbFVwZGF0ZSAhPT0gdHJ1ZSkgeyB1cGRhdGVBdXRvQ29udHJvbHMoJ3N0b3AnKTsgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdG9wcyB0aGUgYXV0byBzaG93XG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJldmVudENvbnRyb2xVcGRhdGUgKGJvb2xlYW4pXG4gICAgICogIC0gaWYgdHJ1ZSwgYXV0byBjb250cm9scyBzdGF0ZSB3aWxsIG5vdCBiZSB1cGRhdGVkXG4gICAgICovXG4gICAgZWwuc3RvcEF1dG8gPSBmdW5jdGlvbihwcmV2ZW50Q29udHJvbFVwZGF0ZSkge1xuICAgICAgLy8gaWYgbm8gaW50ZXJ2YWwgZXhpc3RzLCBkaXNyZWdhcmQgY2FsbFxuICAgICAgaWYgKCFzbGlkZXIuaW50ZXJ2YWwpIHsgcmV0dXJuOyB9XG4gICAgICAvLyBjbGVhciB0aGUgaW50ZXJ2YWxcbiAgICAgIGNsZWFySW50ZXJ2YWwoc2xpZGVyLmludGVydmFsKTtcbiAgICAgIHNsaWRlci5pbnRlcnZhbCA9IG51bGw7XG5cdCAgLy9hbGxiYWNrIGZvciB3aGVuIHRoZSBhdXRvIHJvdGF0ZSBzdGF0dXMgY2hhbmdlc1xuXHQgIHNsaWRlci5zZXR0aW5ncy5vbkF1dG9DaGFuZ2UuY2FsbChlbCwgZmFsc2UpO1xuICAgICAgLy8gaWYgYXV0byBjb250cm9scyBhcmUgZGlzcGxheWVkIGFuZCBwcmV2ZW50Q29udHJvbFVwZGF0ZSBpcyBub3QgdHJ1ZVxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5hdXRvQ29udHJvbHMgJiYgcHJldmVudENvbnRyb2xVcGRhdGUgIT09IHRydWUpIHsgdXBkYXRlQXV0b0NvbnRyb2xzKCdzdGFydCcpOyB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgY3VycmVudCBzbGlkZSBpbmRleCAoemVyby1iYXNlZClcbiAgICAgKi9cbiAgICBlbC5nZXRDdXJyZW50U2xpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBzbGlkZXIuYWN0aXZlLmluZGV4O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGN1cnJlbnQgc2xpZGUgZWxlbWVudFxuICAgICAqL1xuICAgIGVsLmdldEN1cnJlbnRTbGlkZUVsZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBzbGlkZXIuY2hpbGRyZW4uZXEoc2xpZGVyLmFjdGl2ZS5pbmRleCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzbGlkZSBlbGVtZW50XG4gICAgICogQHBhcmFtIGluZGV4IChpbnQpXG4gICAgICogIC0gVGhlIGluZGV4ICh6ZXJvLWJhc2VkKSBvZiB0aGUgZWxlbWVudCB5b3Ugd2FudCByZXR1cm5lZC5cbiAgICAgKi9cbiAgICBlbC5nZXRTbGlkZUVsZW1lbnQgPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgcmV0dXJuIHNsaWRlci5jaGlsZHJlbi5lcShpbmRleCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgbnVtYmVyIG9mIHNsaWRlcyBpbiBzaG93XG4gICAgICovXG4gICAgZWwuZ2V0U2xpZGVDb3VudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHNsaWRlci5jaGlsZHJlbi5sZW5ndGg7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybiBzbGlkZXIud29ya2luZyB2YXJpYWJsZVxuICAgICAqL1xuICAgIGVsLmlzV29ya2luZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHNsaWRlci53b3JraW5nO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgYWxsIGR5bmFtaWMgc2xpZGVyIGVsZW1lbnRzXG4gICAgICovXG4gICAgZWwucmVkcmF3U2xpZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyByZXNpemUgYWxsIGNoaWxkcmVuIGluIHJhdGlvIHRvIG5ldyBzY3JlZW4gc2l6ZVxuICAgICAgc2xpZGVyLmNoaWxkcmVuLmFkZChlbC5maW5kKCcuYngtY2xvbmUnKSkub3V0ZXJXaWR0aChnZXRTbGlkZVdpZHRoKCkpO1xuICAgICAgLy8gYWRqdXN0IHRoZSBoZWlnaHRcbiAgICAgIHNsaWRlci52aWV3cG9ydC5jc3MoJ2hlaWdodCcsIGdldFZpZXdwb3J0SGVpZ2h0KCkpO1xuICAgICAgLy8gdXBkYXRlIHRoZSBzbGlkZSBwb3NpdGlvblxuICAgICAgaWYgKCFzbGlkZXIuc2V0dGluZ3MudGlja2VyKSB7IHNldFNsaWRlUG9zaXRpb24oKTsgfVxuICAgICAgLy8gaWYgYWN0aXZlLmxhc3Qgd2FzIHRydWUgYmVmb3JlIHRoZSBzY3JlZW4gcmVzaXplLCB3ZSB3YW50XG4gICAgICAvLyB0byBrZWVwIGl0IGxhc3Qgbm8gbWF0dGVyIHdoYXQgc2NyZWVuIHNpemUgd2UgZW5kIG9uXG4gICAgICBpZiAoc2xpZGVyLmFjdGl2ZS5sYXN0KSB7IHNsaWRlci5hY3RpdmUuaW5kZXggPSBnZXRQYWdlclF0eSgpIC0gMTsgfVxuICAgICAgLy8gaWYgdGhlIGFjdGl2ZSBpbmRleCAocGFnZSkgbm8gbG9uZ2VyIGV4aXN0cyBkdWUgdG8gdGhlIHJlc2l6ZSwgc2ltcGx5IHNldCB0aGUgaW5kZXggYXMgbGFzdFxuICAgICAgaWYgKHNsaWRlci5hY3RpdmUuaW5kZXggPj0gZ2V0UGFnZXJRdHkoKSkgeyBzbGlkZXIuYWN0aXZlLmxhc3QgPSB0cnVlOyB9XG4gICAgICAvLyBpZiBhIHBhZ2VyIGlzIGJlaW5nIGRpc3BsYXllZCBhbmQgYSBjdXN0b20gcGFnZXIgaXMgbm90IGJlaW5nIHVzZWQsIHVwZGF0ZSBpdFxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5wYWdlciAmJiAhc2xpZGVyLnNldHRpbmdzLnBhZ2VyQ3VzdG9tKSB7XG4gICAgICAgIHBvcHVsYXRlUGFnZXIoKTtcbiAgICAgICAgdXBkYXRlUGFnZXJBY3RpdmUoc2xpZGVyLmFjdGl2ZS5pbmRleCk7XG4gICAgICB9XG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmFyaWFIaWRkZW4pIHsgYXBwbHlBcmlhSGlkZGVuQXR0cmlidXRlcyhzbGlkZXIuYWN0aXZlLmluZGV4ICogZ2V0TW92ZUJ5KCkpOyB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3kgdGhlIGN1cnJlbnQgaW5zdGFuY2Ugb2YgdGhlIHNsaWRlciAocmV2ZXJ0IGV2ZXJ5dGhpbmcgYmFjayB0byBvcmlnaW5hbCBzdGF0ZSlcbiAgICAgKi9cbiAgICBlbC5kZXN0cm95U2xpZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBkb24ndCBkbyBhbnl0aGluZyBpZiBzbGlkZXIgaGFzIGFscmVhZHkgYmVlbiBkZXN0cm95ZWRcbiAgICAgIGlmICghc2xpZGVyLmluaXRpYWxpemVkKSB7IHJldHVybjsgfVxuICAgICAgc2xpZGVyLmluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgICAkKCcuYngtY2xvbmUnLCB0aGlzKS5yZW1vdmUoKTtcbiAgICAgIHNsaWRlci5jaGlsZHJlbi5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5kYXRhKCdvcmlnU3R5bGUnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgJCh0aGlzKS5hdHRyKCdzdHlsZScsICQodGhpcykuZGF0YSgnb3JpZ1N0eWxlJykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQodGhpcykucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoJCh0aGlzKS5kYXRhKCdvcmlnU3R5bGUnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuYXR0cignc3R5bGUnLCAkKHRoaXMpLmRhdGEoJ29yaWdTdHlsZScpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQodGhpcykucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgIH1cbiAgICAgICQodGhpcykudW53cmFwKCkudW53cmFwKCk7XG4gICAgICBpZiAoc2xpZGVyLmNvbnRyb2xzLmVsKSB7IHNsaWRlci5jb250cm9scy5lbC5yZW1vdmUoKTsgfVxuICAgICAgaWYgKHNsaWRlci5jb250cm9scy5uZXh0KSB7IHNsaWRlci5jb250cm9scy5uZXh0LnJlbW92ZSgpOyB9XG4gICAgICBpZiAoc2xpZGVyLmNvbnRyb2xzLnByZXYpIHsgc2xpZGVyLmNvbnRyb2xzLnByZXYucmVtb3ZlKCk7IH1cbiAgICAgIGlmIChzbGlkZXIucGFnZXJFbCAmJiBzbGlkZXIuc2V0dGluZ3MuY29udHJvbHMgJiYgIXNsaWRlci5zZXR0aW5ncy5wYWdlckN1c3RvbSkgeyBzbGlkZXIucGFnZXJFbC5yZW1vdmUoKTsgfVxuICAgICAgJCgnLmJ4LWNhcHRpb24nLCB0aGlzKS5yZW1vdmUoKTtcbiAgICAgIGlmIChzbGlkZXIuY29udHJvbHMuYXV0b0VsKSB7IHNsaWRlci5jb250cm9scy5hdXRvRWwucmVtb3ZlKCk7IH1cbiAgICAgIGNsZWFySW50ZXJ2YWwoc2xpZGVyLmludGVydmFsKTtcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MucmVzcG9uc2l2ZSkgeyAkKHdpbmRvdykudW5iaW5kKCdyZXNpemUnLCByZXNpemVXaW5kb3cpOyB9XG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmtleWJvYXJkRW5hYmxlZCkgeyAkKGRvY3VtZW50KS51bmJpbmQoJ2tleWRvd24nLCBrZXlQcmVzcyk7IH1cbiAgICAgIC8vcmVtb3ZlIHNlbGYgcmVmZXJlbmNlIGluIGRhdGFcbiAgICAgICQodGhpcykucmVtb3ZlRGF0YSgnYnhTbGlkZXInKTtcblx0ICAvLyByZW1vdmUgZ2xvYmFsIHdpbmRvdyBoYW5kbGVyc1xuXHQgICQod2luZG93KS5vZmYoJ2JsdXInLCB3aW5kb3dCbHVySGFuZGxlcikub2ZmKCdmb2N1cycsIHdpbmRvd0ZvY3VzSGFuZGxlcik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbG9hZCB0aGUgc2xpZGVyIChyZXZlcnQgYWxsIERPTSBjaGFuZ2VzLCBhbmQgcmUtaW5pdGlhbGl6ZSlcbiAgICAgKi9cbiAgICBlbC5yZWxvYWRTbGlkZXIgPSBmdW5jdGlvbihzZXR0aW5ncykge1xuICAgICAgaWYgKHNldHRpbmdzICE9PSB1bmRlZmluZWQpIHsgb3B0aW9ucyA9IHNldHRpbmdzOyB9XG4gICAgICBlbC5kZXN0cm95U2xpZGVyKCk7XG4gICAgICBpbml0KCk7XG4gICAgICAvL3N0b3JlIHJlZmVyZW5jZSB0byBzZWxmIGluIG9yZGVyIHRvIGFjY2VzcyBwdWJsaWMgZnVuY3Rpb25zIGxhdGVyXG4gICAgICAkKGVsKS5kYXRhKCdieFNsaWRlcicsIHRoaXMpO1xuICAgIH07XG5cbiAgICBpbml0KCk7XG5cbiAgICAkKGVsKS5kYXRhKCdieFNsaWRlcicsIHRoaXMpO1xuXG4gICAgLy8gcmV0dXJucyB0aGUgY3VycmVudCBqUXVlcnkgb2JqZWN0XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbn0pKGpRdWVyeSk7XG4iLCIvKipcbiAqIE93bCBDYXJvdXNlbCB2Mi4yLjBcbiAqIENvcHlyaWdodCAyMDEzLTIwMTYgRGF2aWQgRGV1dHNjaFxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vT3dsQ2Fyb3VzZWwyL093bENhcm91c2VsMi9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICovXG4vKipcbiAqIE93bCBjYXJvdXNlbFxuICogQHZlcnNpb24gMi4xLjZcbiAqIEBhdXRob3IgQmFydG9zeiBXb2pjaWVjaG93c2tpXG4gKiBAYXV0aG9yIERhdmlkIERldXRzY2hcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogQHRvZG8gTGF6eSBMb2FkIEljb25cbiAqIEB0b2RvIHByZXZlbnQgYW5pbWF0aW9uZW5kIGJ1YmxpbmdcbiAqIEB0b2RvIGl0ZW1zU2NhbGVVcFxuICogQHRvZG8gVGVzdCBaZXB0b1xuICogQHRvZG8gc3RhZ2VQYWRkaW5nIGNhbGN1bGF0ZSB3cm9uZyBhY3RpdmUgY2xhc3Nlc1xuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgY2Fyb3VzZWwuXG5cdCAqIEBjbGFzcyBUaGUgT3dsIENhcm91c2VsLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8alF1ZXJ5fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gY3JlYXRlIHRoZSBjYXJvdXNlbCBmb3IuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBUaGUgb3B0aW9uc1xuXHQgKi9cblx0ZnVuY3Rpb24gT3dsKGVsZW1lbnQsIG9wdGlvbnMpIHtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgc2V0dGluZ3MgZm9yIHRoZSBjYXJvdXNlbC5cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0dGhpcy5zZXR0aW5ncyA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IG9wdGlvbnMgc2V0IGJ5IHRoZSBjYWxsZXIgaW5jbHVkaW5nIGRlZmF1bHRzLlxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgT3dsLkRlZmF1bHRzLCBvcHRpb25zKTtcblxuXHRcdC8qKlxuXHRcdCAqIFBsdWdpbiBlbGVtZW50LlxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHR0aGlzLiRlbGVtZW50ID0gJChlbGVtZW50KTtcblxuXHRcdC8qKlxuXHRcdCAqIFByb3hpZWQgZXZlbnQgaGFuZGxlcnMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX2hhbmRsZXJzID0ge307XG5cblx0XHQvKipcblx0XHQgKiBSZWZlcmVuY2VzIHRvIHRoZSBydW5uaW5nIHBsdWdpbnMgb2YgdGhpcyBjYXJvdXNlbC5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fcGx1Z2lucyA9IHt9O1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudGx5IHN1cHByZXNzZWQgZXZlbnRzIHRvIHByZXZlbnQgdGhlbSBmcm9tIGJlZWluZyByZXRyaWdnZXJlZC5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fc3VwcmVzcyA9IHt9O1xuXG5cdFx0LyoqXG5cdFx0ICogQWJzb2x1dGUgY3VycmVudCBwb3NpdGlvbi5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fY3VycmVudCA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBBbmltYXRpb24gc3BlZWQgaW4gbWlsbGlzZWNvbmRzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9zcGVlZCA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBDb29yZGluYXRlcyBvZiBhbGwgaXRlbXMgaW4gcGl4ZWwuXG5cdFx0ICogQHRvZG8gVGhlIG5hbWUgb2YgdGhpcyBtZW1iZXIgaXMgbWlzc2xlYWRpbmcuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX2Nvb3JkaW5hdGVzID0gW107XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IGJyZWFrcG9pbnQuXG5cdFx0ICogQHRvZG8gUmVhbCBtZWRpYSBxdWVyaWVzIHdvdWxkIGJlIG5pY2UuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX2JyZWFrcG9pbnQgPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCB3aWR0aCBvZiB0aGUgcGx1Z2luIGVsZW1lbnQuXG5cdFx0ICovXG5cdFx0dGhpcy5fd2lkdGggPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogQWxsIHJlYWwgaXRlbXMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX2l0ZW1zID0gW107XG5cblx0XHQvKipcblx0XHQgKiBBbGwgY2xvbmVkIGl0ZW1zLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9jbG9uZXMgPSBbXTtcblxuXHRcdC8qKlxuXHRcdCAqIE1lcmdlIHZhbHVlcyBvZiBhbGwgaXRlbXMuXG5cdFx0ICogQHRvZG8gTWF5YmUgdGhpcyBjb3VsZCBiZSBwYXJ0IG9mIGEgcGx1Z2luLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9tZXJnZXJzID0gW107XG5cblx0XHQvKipcblx0XHQgKiBXaWR0aHMgb2YgYWxsIGl0ZW1zLlxuXHRcdCAqL1xuXHRcdHRoaXMuX3dpZHRocyA9IFtdO1xuXG5cdFx0LyoqXG5cdFx0ICogSW52YWxpZGF0ZWQgcGFydHMgd2l0aGluIHRoZSB1cGRhdGUgcHJvY2Vzcy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5faW52YWxpZGF0ZWQgPSB7fTtcblxuXHRcdC8qKlxuXHRcdCAqIE9yZGVyZWQgbGlzdCBvZiB3b3JrZXJzIGZvciB0aGUgdXBkYXRlIHByb2Nlc3MuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX3BpcGUgPSBbXTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgc3RhdGUgaW5mb3JtYXRpb24gZm9yIHRoZSBkcmFnIG9wZXJhdGlvbi5cblx0XHQgKiBAdG9kbyAjMjYxXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX2RyYWcgPSB7XG5cdFx0XHR0aW1lOiBudWxsLFxuXHRcdFx0dGFyZ2V0OiBudWxsLFxuXHRcdFx0cG9pbnRlcjogbnVsbCxcblx0XHRcdHN0YWdlOiB7XG5cdFx0XHRcdHN0YXJ0OiBudWxsLFxuXHRcdFx0XHRjdXJyZW50OiBudWxsXG5cdFx0XHR9LFxuXHRcdFx0ZGlyZWN0aW9uOiBudWxsXG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgc3RhdGUgaW5mb3JtYXRpb24gYW5kIHRoZWlyIHRhZ3MuXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fc3RhdGVzID0ge1xuXHRcdFx0Y3VycmVudDoge30sXG5cdFx0XHR0YWdzOiB7XG5cdFx0XHRcdCdpbml0aWFsaXppbmcnOiBbICdidXN5JyBdLFxuXHRcdFx0XHQnYW5pbWF0aW5nJzogWyAnYnVzeScgXSxcblx0XHRcdFx0J2RyYWdnaW5nJzogWyAnaW50ZXJhY3RpbmcnIF1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0JC5lYWNoKFsgJ29uUmVzaXplJywgJ29uVGhyb3R0bGVkUmVzaXplJyBdLCAkLnByb3h5KGZ1bmN0aW9uKGksIGhhbmRsZXIpIHtcblx0XHRcdHRoaXMuX2hhbmRsZXJzW2hhbmRsZXJdID0gJC5wcm94eSh0aGlzW2hhbmRsZXJdLCB0aGlzKTtcblx0XHR9LCB0aGlzKSk7XG5cblx0XHQkLmVhY2goT3dsLlBsdWdpbnMsICQucHJveHkoZnVuY3Rpb24oa2V5LCBwbHVnaW4pIHtcblx0XHRcdHRoaXMuX3BsdWdpbnNba2V5LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsga2V5LnNsaWNlKDEpXVxuXHRcdFx0XHQ9IG5ldyBwbHVnaW4odGhpcyk7XG5cdFx0fSwgdGhpcykpO1xuXG5cdFx0JC5lYWNoKE93bC5Xb3JrZXJzLCAkLnByb3h5KGZ1bmN0aW9uKHByaW9yaXR5LCB3b3JrZXIpIHtcblx0XHRcdHRoaXMuX3BpcGUucHVzaCh7XG5cdFx0XHRcdCdmaWx0ZXInOiB3b3JrZXIuZmlsdGVyLFxuXHRcdFx0XHQncnVuJzogJC5wcm94eSh3b3JrZXIucnVuLCB0aGlzKVxuXHRcdFx0fSk7XG5cdFx0fSwgdGhpcykpO1xuXG5cdFx0dGhpcy5zZXR1cCgpO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIERlZmF1bHQgb3B0aW9ucyBmb3IgdGhlIGNhcm91c2VsLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRPd2wuRGVmYXVsdHMgPSB7XG5cdFx0aXRlbXM6IDMsXG5cdFx0bG9vcDogZmFsc2UsXG5cdFx0Y2VudGVyOiBmYWxzZSxcblx0XHRyZXdpbmQ6IGZhbHNlLFxuXG5cdFx0bW91c2VEcmFnOiB0cnVlLFxuXHRcdHRvdWNoRHJhZzogdHJ1ZSxcblx0XHRwdWxsRHJhZzogdHJ1ZSxcblx0XHRmcmVlRHJhZzogZmFsc2UsXG5cblx0XHRtYXJnaW46IDAsXG5cdFx0c3RhZ2VQYWRkaW5nOiAwLFxuXG5cdFx0bWVyZ2U6IGZhbHNlLFxuXHRcdG1lcmdlRml0OiB0cnVlLFxuXHRcdGF1dG9XaWR0aDogZmFsc2UsXG5cblx0XHRzdGFydFBvc2l0aW9uOiAwLFxuXHRcdHJ0bDogZmFsc2UsXG5cblx0XHRzbWFydFNwZWVkOiAyNTAsXG5cdFx0Zmx1aWRTcGVlZDogZmFsc2UsXG5cdFx0ZHJhZ0VuZFNwZWVkOiBmYWxzZSxcblxuXHRcdHJlc3BvbnNpdmU6IHt9LFxuXHRcdHJlc3BvbnNpdmVSZWZyZXNoUmF0ZTogMjAwLFxuXHRcdHJlc3BvbnNpdmVCYXNlRWxlbWVudDogd2luZG93LFxuXG5cdFx0ZmFsbGJhY2tFYXNpbmc6ICdzd2luZycsXG5cblx0XHRpbmZvOiBmYWxzZSxcblxuXHRcdG5lc3RlZEl0ZW1TZWxlY3RvcjogZmFsc2UsXG5cdFx0aXRlbUVsZW1lbnQ6ICdkaXYnLFxuXHRcdHN0YWdlRWxlbWVudDogJ2RpdicsXG5cblx0XHRyZWZyZXNoQ2xhc3M6ICdvd2wtcmVmcmVzaCcsXG5cdFx0bG9hZGVkQ2xhc3M6ICdvd2wtbG9hZGVkJyxcblx0XHRsb2FkaW5nQ2xhc3M6ICdvd2wtbG9hZGluZycsXG5cdFx0cnRsQ2xhc3M6ICdvd2wtcnRsJyxcblx0XHRyZXNwb25zaXZlQ2xhc3M6ICdvd2wtcmVzcG9uc2l2ZScsXG5cdFx0ZHJhZ0NsYXNzOiAnb3dsLWRyYWcnLFxuXHRcdGl0ZW1DbGFzczogJ293bC1pdGVtJyxcblx0XHRzdGFnZUNsYXNzOiAnb3dsLXN0YWdlJyxcblx0XHRzdGFnZU91dGVyQ2xhc3M6ICdvd2wtc3RhZ2Utb3V0ZXInLFxuXHRcdGdyYWJDbGFzczogJ293bC1ncmFiJ1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBFbnVtZXJhdGlvbiBmb3Igd2lkdGguXG5cdCAqIEBwdWJsaWNcblx0ICogQHJlYWRvbmx5XG5cdCAqIEBlbnVtIHtTdHJpbmd9XG5cdCAqL1xuXHRPd2wuV2lkdGggPSB7XG5cdFx0RGVmYXVsdDogJ2RlZmF1bHQnLFxuXHRcdElubmVyOiAnaW5uZXInLFxuXHRcdE91dGVyOiAnb3V0ZXInXG5cdH07XG5cblx0LyoqXG5cdCAqIEVudW1lcmF0aW9uIGZvciB0eXBlcy5cblx0ICogQHB1YmxpY1xuXHQgKiBAcmVhZG9ubHlcblx0ICogQGVudW0ge1N0cmluZ31cblx0ICovXG5cdE93bC5UeXBlID0ge1xuXHRcdEV2ZW50OiAnZXZlbnQnLFxuXHRcdFN0YXRlOiAnc3RhdGUnXG5cdH07XG5cblx0LyoqXG5cdCAqIENvbnRhaW5zIGFsbCByZWdpc3RlcmVkIHBsdWdpbnMuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdE93bC5QbHVnaW5zID0ge307XG5cblx0LyoqXG5cdCAqIExpc3Qgb2Ygd29ya2VycyBpbnZvbHZlZCBpbiB0aGUgdXBkYXRlIHByb2Nlc3MuXG5cdCAqL1xuXHRPd2wuV29ya2VycyA9IFsge1xuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuX3dpZHRoID0gdGhpcy4kZWxlbWVudC53aWR0aCgpO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbihjYWNoZSkge1xuXHRcdFx0Y2FjaGUuY3VycmVudCA9IHRoaXMuX2l0ZW1zICYmIHRoaXMuX2l0ZW1zW3RoaXMucmVsYXRpdmUodGhpcy5fY3VycmVudCldO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuJHN0YWdlLmNoaWxkcmVuKCcuY2xvbmVkJykucmVtb3ZlKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICd3aWR0aCcsICdpdGVtcycsICdzZXR0aW5ncycgXSxcblx0XHRydW46IGZ1bmN0aW9uKGNhY2hlKSB7XG5cdFx0XHR2YXIgbWFyZ2luID0gdGhpcy5zZXR0aW5ncy5tYXJnaW4gfHwgJycsXG5cdFx0XHRcdGdyaWQgPSAhdGhpcy5zZXR0aW5ncy5hdXRvV2lkdGgsXG5cdFx0XHRcdHJ0bCA9IHRoaXMuc2V0dGluZ3MucnRsLFxuXHRcdFx0XHRjc3MgPSB7XG5cdFx0XHRcdFx0J3dpZHRoJzogJ2F1dG8nLFxuXHRcdFx0XHRcdCdtYXJnaW4tbGVmdCc6IHJ0bCA/IG1hcmdpbiA6ICcnLFxuXHRcdFx0XHRcdCdtYXJnaW4tcmlnaHQnOiBydGwgPyAnJyA6IG1hcmdpblxuXHRcdFx0XHR9O1xuXG5cdFx0XHQhZ3JpZCAmJiB0aGlzLiRzdGFnZS5jaGlsZHJlbigpLmNzcyhjc3MpO1xuXG5cdFx0XHRjYWNoZS5jc3MgPSBjc3M7XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICd3aWR0aCcsICdpdGVtcycsICdzZXR0aW5ncycgXSxcblx0XHRydW46IGZ1bmN0aW9uKGNhY2hlKSB7XG5cdFx0XHR2YXIgd2lkdGggPSAodGhpcy53aWR0aCgpIC8gdGhpcy5zZXR0aW5ncy5pdGVtcykudG9GaXhlZCgzKSAtIHRoaXMuc2V0dGluZ3MubWFyZ2luLFxuXHRcdFx0XHRtZXJnZSA9IG51bGwsXG5cdFx0XHRcdGl0ZXJhdG9yID0gdGhpcy5faXRlbXMubGVuZ3RoLFxuXHRcdFx0XHRncmlkID0gIXRoaXMuc2V0dGluZ3MuYXV0b1dpZHRoLFxuXHRcdFx0XHR3aWR0aHMgPSBbXTtcblxuXHRcdFx0Y2FjaGUuaXRlbXMgPSB7XG5cdFx0XHRcdG1lcmdlOiBmYWxzZSxcblx0XHRcdFx0d2lkdGg6IHdpZHRoXG5cdFx0XHR9O1xuXG5cdFx0XHR3aGlsZSAoaXRlcmF0b3ItLSkge1xuXHRcdFx0XHRtZXJnZSA9IHRoaXMuX21lcmdlcnNbaXRlcmF0b3JdO1xuXHRcdFx0XHRtZXJnZSA9IHRoaXMuc2V0dGluZ3MubWVyZ2VGaXQgJiYgTWF0aC5taW4obWVyZ2UsIHRoaXMuc2V0dGluZ3MuaXRlbXMpIHx8IG1lcmdlO1xuXG5cdFx0XHRcdGNhY2hlLml0ZW1zLm1lcmdlID0gbWVyZ2UgPiAxIHx8IGNhY2hlLml0ZW1zLm1lcmdlO1xuXG5cdFx0XHRcdHdpZHRoc1tpdGVyYXRvcl0gPSAhZ3JpZCA/IHRoaXMuX2l0ZW1zW2l0ZXJhdG9yXS53aWR0aCgpIDogd2lkdGggKiBtZXJnZTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fd2lkdGhzID0gd2lkdGhzO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBjbG9uZXMgPSBbXSxcblx0XHRcdFx0aXRlbXMgPSB0aGlzLl9pdGVtcyxcblx0XHRcdFx0c2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLFxuXHRcdFx0XHR2aWV3ID0gTWF0aC5tYXgoc2V0dGluZ3MuaXRlbXMgKiAyLCA0KSxcblx0XHRcdFx0c2l6ZSA9IE1hdGguY2VpbChpdGVtcy5sZW5ndGggLyAyKSAqIDIsXG5cdFx0XHRcdHJlcGVhdCA9IHNldHRpbmdzLmxvb3AgJiYgaXRlbXMubGVuZ3RoID8gc2V0dGluZ3MucmV3aW5kID8gdmlldyA6IE1hdGgubWF4KHZpZXcsIHNpemUpIDogMCxcblx0XHRcdFx0YXBwZW5kID0gJycsXG5cdFx0XHRcdHByZXBlbmQgPSAnJztcblxuXHRcdFx0cmVwZWF0IC89IDI7XG5cblx0XHRcdHdoaWxlIChyZXBlYXQtLSkge1xuXHRcdFx0XHRjbG9uZXMucHVzaCh0aGlzLm5vcm1hbGl6ZShjbG9uZXMubGVuZ3RoIC8gMiwgdHJ1ZSkpO1xuXHRcdFx0XHRhcHBlbmQgPSBhcHBlbmQgKyBpdGVtc1tjbG9uZXNbY2xvbmVzLmxlbmd0aCAtIDFdXVswXS5vdXRlckhUTUw7XG5cdFx0XHRcdGNsb25lcy5wdXNoKHRoaXMubm9ybWFsaXplKGl0ZW1zLmxlbmd0aCAtIDEgLSAoY2xvbmVzLmxlbmd0aCAtIDEpIC8gMiwgdHJ1ZSkpO1xuXHRcdFx0XHRwcmVwZW5kID0gaXRlbXNbY2xvbmVzW2Nsb25lcy5sZW5ndGggLSAxXV1bMF0ub3V0ZXJIVE1MICsgcHJlcGVuZDtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fY2xvbmVzID0gY2xvbmVzO1xuXG5cdFx0XHQkKGFwcGVuZCkuYWRkQ2xhc3MoJ2Nsb25lZCcpLmFwcGVuZFRvKHRoaXMuJHN0YWdlKTtcblx0XHRcdCQocHJlcGVuZCkuYWRkQ2xhc3MoJ2Nsb25lZCcpLnByZXBlbmRUbyh0aGlzLiRzdGFnZSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICd3aWR0aCcsICdpdGVtcycsICdzZXR0aW5ncycgXSxcblx0XHRydW46IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJ0bCA9IHRoaXMuc2V0dGluZ3MucnRsID8gMSA6IC0xLFxuXHRcdFx0XHRzaXplID0gdGhpcy5fY2xvbmVzLmxlbmd0aCArIHRoaXMuX2l0ZW1zLmxlbmd0aCxcblx0XHRcdFx0aXRlcmF0b3IgPSAtMSxcblx0XHRcdFx0cHJldmlvdXMgPSAwLFxuXHRcdFx0XHRjdXJyZW50ID0gMCxcblx0XHRcdFx0Y29vcmRpbmF0ZXMgPSBbXTtcblxuXHRcdFx0d2hpbGUgKCsraXRlcmF0b3IgPCBzaXplKSB7XG5cdFx0XHRcdHByZXZpb3VzID0gY29vcmRpbmF0ZXNbaXRlcmF0b3IgLSAxXSB8fCAwO1xuXHRcdFx0XHRjdXJyZW50ID0gdGhpcy5fd2lkdGhzW3RoaXMucmVsYXRpdmUoaXRlcmF0b3IpXSArIHRoaXMuc2V0dGluZ3MubWFyZ2luO1xuXHRcdFx0XHRjb29yZGluYXRlcy5wdXNoKHByZXZpb3VzICsgY3VycmVudCAqIHJ0bCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2Nvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICd3aWR0aCcsICdpdGVtcycsICdzZXR0aW5ncycgXSxcblx0XHRydW46IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHBhZGRpbmcgPSB0aGlzLnNldHRpbmdzLnN0YWdlUGFkZGluZyxcblx0XHRcdFx0Y29vcmRpbmF0ZXMgPSB0aGlzLl9jb29yZGluYXRlcyxcblx0XHRcdFx0Y3NzID0ge1xuXHRcdFx0XHRcdCd3aWR0aCc6IE1hdGguY2VpbChNYXRoLmFicyhjb29yZGluYXRlc1tjb29yZGluYXRlcy5sZW5ndGggLSAxXSkpICsgcGFkZGluZyAqIDIsXG5cdFx0XHRcdFx0J3BhZGRpbmctbGVmdCc6IHBhZGRpbmcgfHwgJycsXG5cdFx0XHRcdFx0J3BhZGRpbmctcmlnaHQnOiBwYWRkaW5nIHx8ICcnXG5cdFx0XHRcdH07XG5cblx0XHRcdHRoaXMuJHN0YWdlLmNzcyhjc3MpO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbihjYWNoZSkge1xuXHRcdFx0dmFyIGl0ZXJhdG9yID0gdGhpcy5fY29vcmRpbmF0ZXMubGVuZ3RoLFxuXHRcdFx0XHRncmlkID0gIXRoaXMuc2V0dGluZ3MuYXV0b1dpZHRoLFxuXHRcdFx0XHRpdGVtcyA9IHRoaXMuJHN0YWdlLmNoaWxkcmVuKCk7XG5cblx0XHRcdGlmIChncmlkICYmIGNhY2hlLml0ZW1zLm1lcmdlKSB7XG5cdFx0XHRcdHdoaWxlIChpdGVyYXRvci0tKSB7XG5cdFx0XHRcdFx0Y2FjaGUuY3NzLndpZHRoID0gdGhpcy5fd2lkdGhzW3RoaXMucmVsYXRpdmUoaXRlcmF0b3IpXTtcblx0XHRcdFx0XHRpdGVtcy5lcShpdGVyYXRvcikuY3NzKGNhY2hlLmNzcyk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoZ3JpZCkge1xuXHRcdFx0XHRjYWNoZS5jc3Mud2lkdGggPSBjYWNoZS5pdGVtcy53aWR0aDtcblx0XHRcdFx0aXRlbXMuY3NzKGNhY2hlLmNzcyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICdpdGVtcycgXSxcblx0XHRydW46IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5fY29vcmRpbmF0ZXMubGVuZ3RoIDwgMSAmJiB0aGlzLiRzdGFnZS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbihjYWNoZSkge1xuXHRcdFx0Y2FjaGUuY3VycmVudCA9IGNhY2hlLmN1cnJlbnQgPyB0aGlzLiRzdGFnZS5jaGlsZHJlbigpLmluZGV4KGNhY2hlLmN1cnJlbnQpIDogMDtcblx0XHRcdGNhY2hlLmN1cnJlbnQgPSBNYXRoLm1heCh0aGlzLm1pbmltdW0oKSwgTWF0aC5taW4odGhpcy5tYXhpbXVtKCksIGNhY2hlLmN1cnJlbnQpKTtcblx0XHRcdHRoaXMucmVzZXQoY2FjaGUuY3VycmVudCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICdwb3NpdGlvbicgXSxcblx0XHRydW46IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5hbmltYXRlKHRoaXMuY29vcmRpbmF0ZXModGhpcy5fY3VycmVudCkpO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAncG9zaXRpb24nLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBydGwgPSB0aGlzLnNldHRpbmdzLnJ0bCA/IDEgOiAtMSxcblx0XHRcdFx0cGFkZGluZyA9IHRoaXMuc2V0dGluZ3Muc3RhZ2VQYWRkaW5nICogMixcblx0XHRcdFx0YmVnaW4gPSB0aGlzLmNvb3JkaW5hdGVzKHRoaXMuY3VycmVudCgpKSArIHBhZGRpbmcsXG5cdFx0XHRcdGVuZCA9IGJlZ2luICsgdGhpcy53aWR0aCgpICogcnRsLFxuXHRcdFx0XHRpbm5lciwgb3V0ZXIsIG1hdGNoZXMgPSBbXSwgaSwgbjtcblxuXHRcdFx0Zm9yIChpID0gMCwgbiA9IHRoaXMuX2Nvb3JkaW5hdGVzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdFx0XHRpbm5lciA9IHRoaXMuX2Nvb3JkaW5hdGVzW2kgLSAxXSB8fCAwO1xuXHRcdFx0XHRvdXRlciA9IE1hdGguYWJzKHRoaXMuX2Nvb3JkaW5hdGVzW2ldKSArIHBhZGRpbmcgKiBydGw7XG5cblx0XHRcdFx0aWYgKCh0aGlzLm9wKGlubmVyLCAnPD0nLCBiZWdpbikgJiYgKHRoaXMub3AoaW5uZXIsICc+JywgZW5kKSkpXG5cdFx0XHRcdFx0fHwgKHRoaXMub3Aob3V0ZXIsICc8JywgYmVnaW4pICYmIHRoaXMub3Aob3V0ZXIsICc+JywgZW5kKSkpIHtcblx0XHRcdFx0XHRtYXRjaGVzLnB1c2goaSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHR0aGlzLiRzdGFnZS5jaGlsZHJlbignOmVxKCcgKyBtYXRjaGVzLmpvaW4oJyksIDplcSgnKSArICcpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG5cdFx0XHRpZiAodGhpcy5zZXR0aW5ncy5jZW50ZXIpIHtcblx0XHRcdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oJy5jZW50ZXInKS5yZW1vdmVDbGFzcygnY2VudGVyJyk7XG5cdFx0XHRcdHRoaXMuJHN0YWdlLmNoaWxkcmVuKCkuZXEodGhpcy5jdXJyZW50KCkpLmFkZENsYXNzKCdjZW50ZXInKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gXTtcblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZXMgdGhlIGNhcm91c2VsLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmVudGVyKCdpbml0aWFsaXppbmcnKTtcblx0XHR0aGlzLnRyaWdnZXIoJ2luaXRpYWxpemUnKTtcblxuXHRcdHRoaXMuJGVsZW1lbnQudG9nZ2xlQ2xhc3ModGhpcy5zZXR0aW5ncy5ydGxDbGFzcywgdGhpcy5zZXR0aW5ncy5ydGwpO1xuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MuYXV0b1dpZHRoICYmICF0aGlzLmlzKCdwcmUtbG9hZGluZycpKSB7XG5cdFx0XHR2YXIgaW1ncywgbmVzdGVkU2VsZWN0b3IsIHdpZHRoO1xuXHRcdFx0aW1ncyA9IHRoaXMuJGVsZW1lbnQuZmluZCgnaW1nJyk7XG5cdFx0XHRuZXN0ZWRTZWxlY3RvciA9IHRoaXMuc2V0dGluZ3MubmVzdGVkSXRlbVNlbGVjdG9yID8gJy4nICsgdGhpcy5zZXR0aW5ncy5uZXN0ZWRJdGVtU2VsZWN0b3IgOiB1bmRlZmluZWQ7XG5cdFx0XHR3aWR0aCA9IHRoaXMuJGVsZW1lbnQuY2hpbGRyZW4obmVzdGVkU2VsZWN0b3IpLndpZHRoKCk7XG5cblx0XHRcdGlmIChpbWdzLmxlbmd0aCAmJiB3aWR0aCA8PSAwKSB7XG5cdFx0XHRcdHRoaXMucHJlbG9hZEF1dG9XaWR0aEltYWdlcyhpbWdzKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLiRlbGVtZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5sb2FkaW5nQ2xhc3MpO1xuXG5cdFx0Ly8gY3JlYXRlIHN0YWdlXG5cdFx0dGhpcy4kc3RhZ2UgPSAkKCc8JyArIHRoaXMuc2V0dGluZ3Muc3RhZ2VFbGVtZW50ICsgJyBjbGFzcz1cIicgKyB0aGlzLnNldHRpbmdzLnN0YWdlQ2xhc3MgKyAnXCIvPicpXG5cdFx0XHQud3JhcCgnPGRpdiBjbGFzcz1cIicgKyB0aGlzLnNldHRpbmdzLnN0YWdlT3V0ZXJDbGFzcyArICdcIi8+Jyk7XG5cblx0XHQvLyBhcHBlbmQgc3RhZ2Vcblx0XHR0aGlzLiRlbGVtZW50LmFwcGVuZCh0aGlzLiRzdGFnZS5wYXJlbnQoKSk7XG5cblx0XHQvLyBhcHBlbmQgY29udGVudFxuXHRcdHRoaXMucmVwbGFjZSh0aGlzLiRlbGVtZW50LmNoaWxkcmVuKCkubm90KHRoaXMuJHN0YWdlLnBhcmVudCgpKSk7XG5cblx0XHQvLyBjaGVjayB2aXNpYmlsaXR5XG5cdFx0aWYgKHRoaXMuJGVsZW1lbnQuaXMoJzp2aXNpYmxlJykpIHtcblx0XHRcdC8vIHVwZGF0ZSB2aWV3XG5cdFx0XHR0aGlzLnJlZnJlc2goKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gaW52YWxpZGF0ZSB3aWR0aFxuXHRcdFx0dGhpcy5pbnZhbGlkYXRlKCd3aWR0aCcpO1xuXHRcdH1cblxuXHRcdHRoaXMuJGVsZW1lbnRcblx0XHRcdC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMubG9hZGluZ0NsYXNzKVxuXHRcdFx0LmFkZENsYXNzKHRoaXMub3B0aW9ucy5sb2FkZWRDbGFzcyk7XG5cblx0XHQvLyByZWdpc3RlciBldmVudCBoYW5kbGVyc1xuXHRcdHRoaXMucmVnaXN0ZXJFdmVudEhhbmRsZXJzKCk7XG5cblx0XHR0aGlzLmxlYXZlKCdpbml0aWFsaXppbmcnKTtcblx0XHR0aGlzLnRyaWdnZXIoJ2luaXRpYWxpemVkJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldHVwcyB0aGUgY3VycmVudCBzZXR0aW5ncy5cblx0ICogQHRvZG8gUmVtb3ZlIHJlc3BvbnNpdmUgY2xhc3Nlcy4gV2h5IHNob3VsZCBhZGFwdGl2ZSBkZXNpZ25zIGJlIGJyb3VnaHQgaW50byBJRTg/XG5cdCAqIEB0b2RvIFN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXMgYnkgdXNpbmcgYG1hdGNoTWVkaWFgIHdvdWxkIGJlIG5pY2UuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdE93bC5wcm90b3R5cGUuc2V0dXAgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgdmlld3BvcnQgPSB0aGlzLnZpZXdwb3J0KCksXG5cdFx0XHRvdmVyd3JpdGVzID0gdGhpcy5vcHRpb25zLnJlc3BvbnNpdmUsXG5cdFx0XHRtYXRjaCA9IC0xLFxuXHRcdFx0c2V0dGluZ3MgPSBudWxsO1xuXG5cdFx0aWYgKCFvdmVyd3JpdGVzKSB7XG5cdFx0XHRzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkLmVhY2gob3ZlcndyaXRlcywgZnVuY3Rpb24oYnJlYWtwb2ludCkge1xuXHRcdFx0XHRpZiAoYnJlYWtwb2ludCA8PSB2aWV3cG9ydCAmJiBicmVha3BvaW50ID4gbWF0Y2gpIHtcblx0XHRcdFx0XHRtYXRjaCA9IE51bWJlcihicmVha3BvaW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHNldHRpbmdzID0gJC5leHRlbmQoe30sIHRoaXMub3B0aW9ucywgb3ZlcndyaXRlc1ttYXRjaF0pO1xuXHRcdFx0aWYgKHR5cGVvZiBzZXR0aW5ncy5zdGFnZVBhZGRpbmcgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0c2V0dGluZ3Muc3RhZ2VQYWRkaW5nID0gc2V0dGluZ3Muc3RhZ2VQYWRkaW5nKCk7XG5cdFx0XHR9XG5cdFx0XHRkZWxldGUgc2V0dGluZ3MucmVzcG9uc2l2ZTtcblxuXHRcdFx0Ly8gcmVzcG9uc2l2ZSBjbGFzc1xuXHRcdFx0aWYgKHNldHRpbmdzLnJlc3BvbnNpdmVDbGFzcykge1xuXHRcdFx0XHR0aGlzLiRlbGVtZW50LmF0dHIoJ2NsYXNzJyxcblx0XHRcdFx0XHR0aGlzLiRlbGVtZW50LmF0dHIoJ2NsYXNzJykucmVwbGFjZShuZXcgUmVnRXhwKCcoJyArIHRoaXMub3B0aW9ucy5yZXNwb25zaXZlQ2xhc3MgKyAnLSlcXFxcUytcXFxccycsICdnJyksICckMScgKyBtYXRjaClcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnRyaWdnZXIoJ2NoYW5nZScsIHsgcHJvcGVydHk6IHsgbmFtZTogJ3NldHRpbmdzJywgdmFsdWU6IHNldHRpbmdzIH0gfSk7XG5cdFx0dGhpcy5fYnJlYWtwb2ludCA9IG1hdGNoO1xuXHRcdHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcblx0XHR0aGlzLmludmFsaWRhdGUoJ3NldHRpbmdzJyk7XG5cdFx0dGhpcy50cmlnZ2VyKCdjaGFuZ2VkJywgeyBwcm9wZXJ0eTogeyBuYW1lOiAnc2V0dGluZ3MnLCB2YWx1ZTogdGhpcy5zZXR0aW5ncyB9IH0pO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIG9wdGlvbiBsb2dpYyBpZiBuZWNlc3NlcnkuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdE93bC5wcm90b3R5cGUub3B0aW9uc0xvZ2ljID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MuYXV0b1dpZHRoKSB7XG5cdFx0XHR0aGlzLnNldHRpbmdzLnN0YWdlUGFkZGluZyA9IGZhbHNlO1xuXHRcdFx0dGhpcy5zZXR0aW5ncy5tZXJnZSA9IGZhbHNlO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogUHJlcGFyZXMgYW4gaXRlbSBiZWZvcmUgYWRkLlxuXHQgKiBAdG9kbyBSZW5hbWUgZXZlbnQgcGFyYW1ldGVyIGBjb250ZW50YCB0byBgaXRlbWAuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHJldHVybnMge2pRdWVyeXxIVE1MRWxlbWVudH0gLSBUaGUgaXRlbSBjb250YWluZXIuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnByZXBhcmUgPSBmdW5jdGlvbihpdGVtKSB7XG5cdFx0dmFyIGV2ZW50ID0gdGhpcy50cmlnZ2VyKCdwcmVwYXJlJywgeyBjb250ZW50OiBpdGVtIH0pO1xuXG5cdFx0aWYgKCFldmVudC5kYXRhKSB7XG5cdFx0XHRldmVudC5kYXRhID0gJCgnPCcgKyB0aGlzLnNldHRpbmdzLml0ZW1FbGVtZW50ICsgJy8+Jylcblx0XHRcdFx0LmFkZENsYXNzKHRoaXMub3B0aW9ucy5pdGVtQ2xhc3MpLmFwcGVuZChpdGVtKVxuXHRcdH1cblxuXHRcdHRoaXMudHJpZ2dlcigncHJlcGFyZWQnLCB7IGNvbnRlbnQ6IGV2ZW50LmRhdGEgfSk7XG5cblx0XHRyZXR1cm4gZXZlbnQuZGF0YTtcblx0fTtcblxuXHQvKipcblx0ICogVXBkYXRlcyB0aGUgdmlldy5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0T3dsLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaSA9IDAsXG5cdFx0XHRuID0gdGhpcy5fcGlwZS5sZW5ndGgsXG5cdFx0XHRmaWx0ZXIgPSAkLnByb3h5KGZ1bmN0aW9uKHApIHsgcmV0dXJuIHRoaXNbcF0gfSwgdGhpcy5faW52YWxpZGF0ZWQpLFxuXHRcdFx0Y2FjaGUgPSB7fTtcblxuXHRcdHdoaWxlIChpIDwgbikge1xuXHRcdFx0aWYgKHRoaXMuX2ludmFsaWRhdGVkLmFsbCB8fCAkLmdyZXAodGhpcy5fcGlwZVtpXS5maWx0ZXIsIGZpbHRlcikubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR0aGlzLl9waXBlW2ldLnJ1bihjYWNoZSk7XG5cdFx0XHR9XG5cdFx0XHRpKys7XG5cdFx0fVxuXG5cdFx0dGhpcy5faW52YWxpZGF0ZWQgPSB7fTtcblxuXHRcdCF0aGlzLmlzKCd2YWxpZCcpICYmIHRoaXMuZW50ZXIoJ3ZhbGlkJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIHdpZHRoIG9mIHRoZSB2aWV3LlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7T3dsLldpZHRofSBbZGltZW5zaW9uPU93bC5XaWR0aC5EZWZhdWx0XSAtIFRoZSBkaW1lbnNpb24gdG8gcmV0dXJuLlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSAtIFRoZSB3aWR0aCBvZiB0aGUgdmlldyBpbiBwaXhlbC5cblx0ICovXG5cdE93bC5wcm90b3R5cGUud2lkdGggPSBmdW5jdGlvbihkaW1lbnNpb24pIHtcblx0XHRkaW1lbnNpb24gPSBkaW1lbnNpb24gfHwgT3dsLldpZHRoLkRlZmF1bHQ7XG5cdFx0c3dpdGNoIChkaW1lbnNpb24pIHtcblx0XHRcdGNhc2UgT3dsLldpZHRoLklubmVyOlxuXHRcdFx0Y2FzZSBPd2wuV2lkdGguT3V0ZXI6XG5cdFx0XHRcdHJldHVybiB0aGlzLl93aWR0aDtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLl93aWR0aCAtIHRoaXMuc2V0dGluZ3Muc3RhZ2VQYWRkaW5nICogMiArIHRoaXMuc2V0dGluZ3MubWFyZ2luO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogUmVmcmVzaGVzIHRoZSBjYXJvdXNlbCBwcmltYXJpbHkgZm9yIGFkYXB0aXZlIHB1cnBvc2VzLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmVudGVyKCdyZWZyZXNoaW5nJyk7XG5cdFx0dGhpcy50cmlnZ2VyKCdyZWZyZXNoJyk7XG5cblx0XHR0aGlzLnNldHVwKCk7XG5cblx0XHR0aGlzLm9wdGlvbnNMb2dpYygpO1xuXG5cdFx0dGhpcy4kZWxlbWVudC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMucmVmcmVzaENsYXNzKTtcblxuXHRcdHRoaXMudXBkYXRlKCk7XG5cblx0XHR0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5yZWZyZXNoQ2xhc3MpO1xuXG5cdFx0dGhpcy5sZWF2ZSgncmVmcmVzaGluZycpO1xuXHRcdHRoaXMudHJpZ2dlcigncmVmcmVzaGVkJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIENoZWNrcyB3aW5kb3cgYHJlc2l6ZWAgZXZlbnQuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdE93bC5wcm90b3R5cGUub25UaHJvdHRsZWRSZXNpemUgPSBmdW5jdGlvbigpIHtcblx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZXIpO1xuXHRcdHRoaXMucmVzaXplVGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCh0aGlzLl9oYW5kbGVycy5vblJlc2l6ZSwgdGhpcy5zZXR0aW5ncy5yZXNwb25zaXZlUmVmcmVzaFJhdGUpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDaGVja3Mgd2luZG93IGByZXNpemVgIGV2ZW50LlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm9uUmVzaXplID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCF0aGlzLl9pdGVtcy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5fd2lkdGggPT09IHRoaXMuJGVsZW1lbnQud2lkdGgoKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy4kZWxlbWVudC5pcygnOnZpc2libGUnKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHRoaXMuZW50ZXIoJ3Jlc2l6aW5nJyk7XG5cblx0XHRpZiAodGhpcy50cmlnZ2VyKCdyZXNpemUnKS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuXHRcdFx0dGhpcy5sZWF2ZSgncmVzaXppbmcnKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR0aGlzLmludmFsaWRhdGUoJ3dpZHRoJyk7XG5cblx0XHR0aGlzLnJlZnJlc2goKTtcblxuXHRcdHRoaXMubGVhdmUoJ3Jlc2l6aW5nJyk7XG5cdFx0dGhpcy50cmlnZ2VyKCdyZXNpemVkJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVycyBldmVudCBoYW5kbGVycy5cblx0ICogQHRvZG8gQ2hlY2sgYG1zUG9pbnRlckVuYWJsZWRgXG5cdCAqIEB0b2RvICMyNjFcblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5yZWdpc3RlckV2ZW50SGFuZGxlcnMgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoJC5zdXBwb3J0LnRyYW5zaXRpb24pIHtcblx0XHRcdHRoaXMuJHN0YWdlLm9uKCQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCArICcub3dsLmNvcmUnLCAkLnByb3h5KHRoaXMub25UcmFuc2l0aW9uRW5kLCB0aGlzKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MucmVzcG9uc2l2ZSAhPT0gZmFsc2UpIHtcblx0XHRcdHRoaXMub24od2luZG93LCAncmVzaXplJywgdGhpcy5faGFuZGxlcnMub25UaHJvdHRsZWRSZXNpemUpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNldHRpbmdzLm1vdXNlRHJhZykge1xuXHRcdFx0dGhpcy4kZWxlbWVudC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuZHJhZ0NsYXNzKTtcblx0XHRcdHRoaXMuJHN0YWdlLm9uKCdtb3VzZWRvd24ub3dsLmNvcmUnLCAkLnByb3h5KHRoaXMub25EcmFnU3RhcnQsIHRoaXMpKTtcblx0XHRcdHRoaXMuJHN0YWdlLm9uKCdkcmFnc3RhcnQub3dsLmNvcmUgc2VsZWN0c3RhcnQub3dsLmNvcmUnLCBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlIH0pO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNldHRpbmdzLnRvdWNoRHJhZyl7XG5cdFx0XHR0aGlzLiRzdGFnZS5vbigndG91Y2hzdGFydC5vd2wuY29yZScsICQucHJveHkodGhpcy5vbkRyYWdTdGFydCwgdGhpcykpO1xuXHRcdFx0dGhpcy4kc3RhZ2Uub24oJ3RvdWNoY2FuY2VsLm93bC5jb3JlJywgJC5wcm94eSh0aGlzLm9uRHJhZ0VuZCwgdGhpcykpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogSGFuZGxlcyBgdG91Y2hzdGFydGAgYW5kIGBtb3VzZWRvd25gIGV2ZW50cy5cblx0ICogQHRvZG8gSG9yaXpvbnRhbCBzd2lwZSB0aHJlc2hvbGQgYXMgb3B0aW9uXG5cdCAqIEB0b2RvICMyNjFcblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIFRoZSBldmVudCBhcmd1bWVudHMuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm9uRHJhZ1N0YXJ0ID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgc3RhZ2UgPSBudWxsO1xuXG5cdFx0aWYgKGV2ZW50LndoaWNoID09PSAzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCQuc3VwcG9ydC50cmFuc2Zvcm0pIHtcblx0XHRcdHN0YWdlID0gdGhpcy4kc3RhZ2UuY3NzKCd0cmFuc2Zvcm0nKS5yZXBsYWNlKC8uKlxcKHxcXCl8IC9nLCAnJykuc3BsaXQoJywnKTtcblx0XHRcdHN0YWdlID0ge1xuXHRcdFx0XHR4OiBzdGFnZVtzdGFnZS5sZW5ndGggPT09IDE2ID8gMTIgOiA0XSxcblx0XHRcdFx0eTogc3RhZ2Vbc3RhZ2UubGVuZ3RoID09PSAxNiA/IDEzIDogNV1cblx0XHRcdH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0YWdlID0gdGhpcy4kc3RhZ2UucG9zaXRpb24oKTtcblx0XHRcdHN0YWdlID0ge1xuXHRcdFx0XHR4OiB0aGlzLnNldHRpbmdzLnJ0bCA/XG5cdFx0XHRcdFx0c3RhZ2UubGVmdCArIHRoaXMuJHN0YWdlLndpZHRoKCkgLSB0aGlzLndpZHRoKCkgKyB0aGlzLnNldHRpbmdzLm1hcmdpbiA6XG5cdFx0XHRcdFx0c3RhZ2UubGVmdCxcblx0XHRcdFx0eTogc3RhZ2UudG9wXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzKCdhbmltYXRpbmcnKSkge1xuXHRcdFx0JC5zdXBwb3J0LnRyYW5zZm9ybSA/IHRoaXMuYW5pbWF0ZShzdGFnZS54KSA6IHRoaXMuJHN0YWdlLnN0b3AoKVxuXHRcdFx0dGhpcy5pbnZhbGlkYXRlKCdwb3NpdGlvbicpO1xuXHRcdH1cblxuXHRcdHRoaXMuJGVsZW1lbnQudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLmdyYWJDbGFzcywgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicpO1xuXG5cdFx0dGhpcy5zcGVlZCgwKTtcblxuXHRcdHRoaXMuX2RyYWcudGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHRcdHRoaXMuX2RyYWcudGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xuXHRcdHRoaXMuX2RyYWcuc3RhZ2Uuc3RhcnQgPSBzdGFnZTtcblx0XHR0aGlzLl9kcmFnLnN0YWdlLmN1cnJlbnQgPSBzdGFnZTtcblx0XHR0aGlzLl9kcmFnLnBvaW50ZXIgPSB0aGlzLnBvaW50ZXIoZXZlbnQpO1xuXG5cdFx0JChkb2N1bWVudCkub24oJ21vdXNldXAub3dsLmNvcmUgdG91Y2hlbmQub3dsLmNvcmUnLCAkLnByb3h5KHRoaXMub25EcmFnRW5kLCB0aGlzKSk7XG5cblx0XHQkKGRvY3VtZW50KS5vbmUoJ21vdXNlbW92ZS5vd2wuY29yZSB0b3VjaG1vdmUub3dsLmNvcmUnLCAkLnByb3h5KGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHR2YXIgZGVsdGEgPSB0aGlzLmRpZmZlcmVuY2UodGhpcy5fZHJhZy5wb2ludGVyLCB0aGlzLnBvaW50ZXIoZXZlbnQpKTtcblxuXHRcdFx0JChkb2N1bWVudCkub24oJ21vdXNlbW92ZS5vd2wuY29yZSB0b3VjaG1vdmUub3dsLmNvcmUnLCAkLnByb3h5KHRoaXMub25EcmFnTW92ZSwgdGhpcykpO1xuXG5cdFx0XHRpZiAoTWF0aC5hYnMoZGVsdGEueCkgPCBNYXRoLmFicyhkZWx0YS55KSAmJiB0aGlzLmlzKCd2YWxpZCcpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0dGhpcy5lbnRlcignZHJhZ2dpbmcnKTtcblx0XHRcdHRoaXMudHJpZ2dlcignZHJhZycpO1xuXHRcdH0sIHRoaXMpKTtcblx0fTtcblxuXHQvKipcblx0ICogSGFuZGxlcyB0aGUgYHRvdWNobW92ZWAgYW5kIGBtb3VzZW1vdmVgIGV2ZW50cy5cblx0ICogQHRvZG8gIzI2MVxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gVGhlIGV2ZW50IGFyZ3VtZW50cy5cblx0ICovXG5cdE93bC5wcm90b3R5cGUub25EcmFnTW92ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIG1pbmltdW0gPSBudWxsLFxuXHRcdFx0bWF4aW11bSA9IG51bGwsXG5cdFx0XHRwdWxsID0gbnVsbCxcblx0XHRcdGRlbHRhID0gdGhpcy5kaWZmZXJlbmNlKHRoaXMuX2RyYWcucG9pbnRlciwgdGhpcy5wb2ludGVyKGV2ZW50KSksXG5cdFx0XHRzdGFnZSA9IHRoaXMuZGlmZmVyZW5jZSh0aGlzLl9kcmFnLnN0YWdlLnN0YXJ0LCBkZWx0YSk7XG5cblx0XHRpZiAoIXRoaXMuaXMoJ2RyYWdnaW5nJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MubG9vcCkge1xuXHRcdFx0bWluaW11bSA9IHRoaXMuY29vcmRpbmF0ZXModGhpcy5taW5pbXVtKCkpO1xuXHRcdFx0bWF4aW11bSA9IHRoaXMuY29vcmRpbmF0ZXModGhpcy5tYXhpbXVtKCkgKyAxKSAtIG1pbmltdW07XG5cdFx0XHRzdGFnZS54ID0gKCgoc3RhZ2UueCAtIG1pbmltdW0pICUgbWF4aW11bSArIG1heGltdW0pICUgbWF4aW11bSkgKyBtaW5pbXVtO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtaW5pbXVtID0gdGhpcy5zZXR0aW5ncy5ydGwgPyB0aGlzLmNvb3JkaW5hdGVzKHRoaXMubWF4aW11bSgpKSA6IHRoaXMuY29vcmRpbmF0ZXModGhpcy5taW5pbXVtKCkpO1xuXHRcdFx0bWF4aW11bSA9IHRoaXMuc2V0dGluZ3MucnRsID8gdGhpcy5jb29yZGluYXRlcyh0aGlzLm1pbmltdW0oKSkgOiB0aGlzLmNvb3JkaW5hdGVzKHRoaXMubWF4aW11bSgpKTtcblx0XHRcdHB1bGwgPSB0aGlzLnNldHRpbmdzLnB1bGxEcmFnID8gLTEgKiBkZWx0YS54IC8gNSA6IDA7XG5cdFx0XHRzdGFnZS54ID0gTWF0aC5tYXgoTWF0aC5taW4oc3RhZ2UueCwgbWluaW11bSArIHB1bGwpLCBtYXhpbXVtICsgcHVsbCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fZHJhZy5zdGFnZS5jdXJyZW50ID0gc3RhZ2U7XG5cblx0XHR0aGlzLmFuaW1hdGUoc3RhZ2UueCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgdGhlIGB0b3VjaGVuZGAgYW5kIGBtb3VzZXVwYCBldmVudHMuXG5cdCAqIEB0b2RvICMyNjFcblx0ICogQHRvZG8gVGhyZXNob2xkIGZvciBjbGljayBldmVudFxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gVGhlIGV2ZW50IGFyZ3VtZW50cy5cblx0ICovXG5cdE93bC5wcm90b3R5cGUub25EcmFnRW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgZGVsdGEgPSB0aGlzLmRpZmZlcmVuY2UodGhpcy5fZHJhZy5wb2ludGVyLCB0aGlzLnBvaW50ZXIoZXZlbnQpKSxcblx0XHRcdHN0YWdlID0gdGhpcy5fZHJhZy5zdGFnZS5jdXJyZW50LFxuXHRcdFx0ZGlyZWN0aW9uID0gZGVsdGEueCA+IDAgXiB0aGlzLnNldHRpbmdzLnJ0bCA/ICdsZWZ0JyA6ICdyaWdodCc7XG5cblx0XHQkKGRvY3VtZW50KS5vZmYoJy5vd2wuY29yZScpO1xuXG5cdFx0dGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZ3JhYkNsYXNzKTtcblxuXHRcdGlmIChkZWx0YS54ICE9PSAwICYmIHRoaXMuaXMoJ2RyYWdnaW5nJykgfHwgIXRoaXMuaXMoJ3ZhbGlkJykpIHtcblx0XHRcdHRoaXMuc3BlZWQodGhpcy5zZXR0aW5ncy5kcmFnRW5kU3BlZWQgfHwgdGhpcy5zZXR0aW5ncy5zbWFydFNwZWVkKTtcblx0XHRcdHRoaXMuY3VycmVudCh0aGlzLmNsb3Nlc3Qoc3RhZ2UueCwgZGVsdGEueCAhPT0gMCA/IGRpcmVjdGlvbiA6IHRoaXMuX2RyYWcuZGlyZWN0aW9uKSk7XG5cdFx0XHR0aGlzLmludmFsaWRhdGUoJ3Bvc2l0aW9uJyk7XG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXG5cdFx0XHR0aGlzLl9kcmFnLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcblxuXHRcdFx0aWYgKE1hdGguYWJzKGRlbHRhLngpID4gMyB8fCBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRoaXMuX2RyYWcudGltZSA+IDMwMCkge1xuXHRcdFx0XHR0aGlzLl9kcmFnLnRhcmdldC5vbmUoJ2NsaWNrLm93bC5jb3JlJywgZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZTsgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLmlzKCdkcmFnZ2luZycpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5sZWF2ZSgnZHJhZ2dpbmcnKTtcblx0XHR0aGlzLnRyaWdnZXIoJ2RyYWdnZWQnKTtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgY2xvc2VzdCBpdGVtIGZvciBhIGNvb3JkaW5hdGUuXG5cdCAqIEB0b2RvIFNldHRpbmcgYGZyZWVEcmFnYCBtYWtlcyBgY2xvc2VzdGAgbm90IHJldXNhYmxlLiBTZWUgIzE2NS5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge051bWJlcn0gY29vcmRpbmF0ZSAtIFRoZSBjb29yZGluYXRlIGluIHBpeGVsLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZGlyZWN0aW9uIC0gVGhlIGRpcmVjdGlvbiB0byBjaGVjayBmb3IgdGhlIGNsb3Nlc3QgaXRlbS4gRXRoZXIgYGxlZnRgIG9yIGByaWdodGAuXG5cdCAqIEByZXR1cm4ge051bWJlcn0gLSBUaGUgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhlIGNsb3Nlc3QgaXRlbS5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuY2xvc2VzdCA9IGZ1bmN0aW9uKGNvb3JkaW5hdGUsIGRpcmVjdGlvbikge1xuXHRcdHZhciBwb3NpdGlvbiA9IC0xLFxuXHRcdFx0cHVsbCA9IDMwLFxuXHRcdFx0d2lkdGggPSB0aGlzLndpZHRoKCksXG5cdFx0XHRjb29yZGluYXRlcyA9IHRoaXMuY29vcmRpbmF0ZXMoKTtcblxuXHRcdGlmICghdGhpcy5zZXR0aW5ncy5mcmVlRHJhZykge1xuXHRcdFx0Ly8gY2hlY2sgY2xvc2VzdCBpdGVtXG5cdFx0XHQkLmVhY2goY29vcmRpbmF0ZXMsICQucHJveHkoZnVuY3Rpb24oaW5kZXgsIHZhbHVlKSB7XG5cdFx0XHRcdC8vIG9uIGEgbGVmdCBwdWxsLCBjaGVjayBvbiBjdXJyZW50IGluZGV4XG5cdFx0XHRcdGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0JyAmJiBjb29yZGluYXRlID4gdmFsdWUgLSBwdWxsICYmIGNvb3JkaW5hdGUgPCB2YWx1ZSArIHB1bGwpIHtcblx0XHRcdFx0XHRwb3NpdGlvbiA9IGluZGV4O1xuXHRcdFx0XHQvLyBvbiBhIHJpZ2h0IHB1bGwsIGNoZWNrIG9uIHByZXZpb3VzIGluZGV4XG5cdFx0XHRcdC8vIHRvIGRvIHNvLCBzdWJ0cmFjdCB3aWR0aCBmcm9tIHZhbHVlIGFuZCBzZXQgcG9zaXRpb24gPSBpbmRleCArIDFcblx0XHRcdFx0fSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcgJiYgY29vcmRpbmF0ZSA+IHZhbHVlIC0gd2lkdGggLSBwdWxsICYmIGNvb3JkaW5hdGUgPCB2YWx1ZSAtIHdpZHRoICsgcHVsbCkge1xuXHRcdFx0XHRcdHBvc2l0aW9uID0gaW5kZXggKyAxO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMub3AoY29vcmRpbmF0ZSwgJzwnLCB2YWx1ZSlcblx0XHRcdFx0XHQmJiB0aGlzLm9wKGNvb3JkaW5hdGUsICc+JywgY29vcmRpbmF0ZXNbaW5kZXggKyAxXSB8fCB2YWx1ZSAtIHdpZHRoKSkge1xuXHRcdFx0XHRcdHBvc2l0aW9uID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyBpbmRleCArIDEgOiBpbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcG9zaXRpb24gPT09IC0xO1xuXHRcdFx0fSwgdGhpcykpO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5zZXR0aW5ncy5sb29wKSB7XG5cdFx0XHQvLyBub24gbG9vcCBib3VuZHJpZXNcblx0XHRcdGlmICh0aGlzLm9wKGNvb3JkaW5hdGUsICc+JywgY29vcmRpbmF0ZXNbdGhpcy5taW5pbXVtKCldKSkge1xuXHRcdFx0XHRwb3NpdGlvbiA9IGNvb3JkaW5hdGUgPSB0aGlzLm1pbmltdW0oKTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5vcChjb29yZGluYXRlLCAnPCcsIGNvb3JkaW5hdGVzW3RoaXMubWF4aW11bSgpXSkpIHtcblx0XHRcdFx0cG9zaXRpb24gPSBjb29yZGluYXRlID0gdGhpcy5tYXhpbXVtKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBvc2l0aW9uO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBBbmltYXRlcyB0aGUgc3RhZ2UuXG5cdCAqIEB0b2RvICMyNzBcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gY29vcmRpbmF0ZSAtIFRoZSBjb29yZGluYXRlIGluIHBpeGVscy5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uKGNvb3JkaW5hdGUpIHtcblx0XHR2YXIgYW5pbWF0ZSA9IHRoaXMuc3BlZWQoKSA+IDA7XG5cblx0XHR0aGlzLmlzKCdhbmltYXRpbmcnKSAmJiB0aGlzLm9uVHJhbnNpdGlvbkVuZCgpO1xuXG5cdFx0aWYgKGFuaW1hdGUpIHtcblx0XHRcdHRoaXMuZW50ZXIoJ2FuaW1hdGluZycpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd0cmFuc2xhdGUnKTtcblx0XHR9XG5cblx0XHRpZiAoJC5zdXBwb3J0LnRyYW5zZm9ybTNkICYmICQuc3VwcG9ydC50cmFuc2l0aW9uKSB7XG5cdFx0XHR0aGlzLiRzdGFnZS5jc3Moe1xuXHRcdFx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgnICsgY29vcmRpbmF0ZSArICdweCwwcHgsMHB4KScsXG5cdFx0XHRcdHRyYW5zaXRpb246ICh0aGlzLnNwZWVkKCkgLyAxMDAwKSArICdzJ1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIGlmIChhbmltYXRlKSB7XG5cdFx0XHR0aGlzLiRzdGFnZS5hbmltYXRlKHtcblx0XHRcdFx0bGVmdDogY29vcmRpbmF0ZSArICdweCdcblx0XHRcdH0sIHRoaXMuc3BlZWQoKSwgdGhpcy5zZXR0aW5ncy5mYWxsYmFja0Vhc2luZywgJC5wcm94eSh0aGlzLm9uVHJhbnNpdGlvbkVuZCwgdGhpcykpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLiRzdGFnZS5jc3Moe1xuXHRcdFx0XHRsZWZ0OiBjb29yZGluYXRlICsgJ3B4J1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBDaGVja3Mgd2hldGhlciB0aGUgY2Fyb3VzZWwgaXMgaW4gYSBzcGVjaWZpYyBzdGF0ZSBvciBub3QuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSAtIFRoZSBzdGF0ZSB0byBjaGVjay5cblx0ICogQHJldHVybnMge0Jvb2xlYW59IC0gVGhlIGZsYWcgd2hpY2ggaW5kaWNhdGVzIGlmIHRoZSBjYXJvdXNlbCBpcyBidXN5LlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5pcyA9IGZ1bmN0aW9uKHN0YXRlKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3N0YXRlcy5jdXJyZW50W3N0YXRlXSAmJiB0aGlzLl9zdGF0ZXMuY3VycmVudFtzdGF0ZV0gPiAwO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCBpdGVtLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbcG9zaXRpb25dIC0gVGhlIG5ldyBhYnNvbHV0ZSBwb3NpdGlvbiBvciBub3RoaW5nIHRvIGxlYXZlIGl0IHVuY2hhbmdlZC5cblx0ICogQHJldHVybnMge051bWJlcn0gLSBUaGUgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhlIGN1cnJlbnQgaXRlbS5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuY3VycmVudCA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cdFx0aWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLl9jdXJyZW50O1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLl9pdGVtcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0cG9zaXRpb24gPSB0aGlzLm5vcm1hbGl6ZShwb3NpdGlvbik7XG5cblx0XHRpZiAodGhpcy5fY3VycmVudCAhPT0gcG9zaXRpb24pIHtcblx0XHRcdHZhciBldmVudCA9IHRoaXMudHJpZ2dlcignY2hhbmdlJywgeyBwcm9wZXJ0eTogeyBuYW1lOiAncG9zaXRpb24nLCB2YWx1ZTogcG9zaXRpb24gfSB9KTtcblxuXHRcdFx0aWYgKGV2ZW50LmRhdGEgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplKGV2ZW50LmRhdGEpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9jdXJyZW50ID0gcG9zaXRpb247XG5cblx0XHRcdHRoaXMuaW52YWxpZGF0ZSgncG9zaXRpb24nKTtcblxuXHRcdFx0dGhpcy50cmlnZ2VyKCdjaGFuZ2VkJywgeyBwcm9wZXJ0eTogeyBuYW1lOiAncG9zaXRpb24nLCB2YWx1ZTogdGhpcy5fY3VycmVudCB9IH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLl9jdXJyZW50O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBJbnZhbGlkYXRlcyB0aGUgZ2l2ZW4gcGFydCBvZiB0aGUgdXBkYXRlIHJvdXRpbmUuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbcGFydF0gLSBUaGUgcGFydCB0byBpbnZhbGlkYXRlLlxuXHQgKiBAcmV0dXJucyB7QXJyYXkuPFN0cmluZz59IC0gVGhlIGludmFsaWRhdGVkIHBhcnRzLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5pbnZhbGlkYXRlID0gZnVuY3Rpb24ocGFydCkge1xuXHRcdGlmICgkLnR5cGUocGFydCkgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aGlzLl9pbnZhbGlkYXRlZFtwYXJ0XSA9IHRydWU7XG5cdFx0XHR0aGlzLmlzKCd2YWxpZCcpICYmIHRoaXMubGVhdmUoJ3ZhbGlkJyk7XG5cdFx0fVxuXHRcdHJldHVybiAkLm1hcCh0aGlzLl9pbnZhbGlkYXRlZCwgZnVuY3Rpb24odiwgaSkgeyByZXR1cm4gaSB9KTtcblx0fTtcblxuXHQvKipcblx0ICogUmVzZXRzIHRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCBpdGVtLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvbiAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgbmV3IGl0ZW0uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0XHRwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplKHBvc2l0aW9uKTtcblxuXHRcdGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5fc3BlZWQgPSAwO1xuXHRcdHRoaXMuX2N1cnJlbnQgPSBwb3NpdGlvbjtcblxuXHRcdHRoaXMuc3VwcHJlc3MoWyAndHJhbnNsYXRlJywgJ3RyYW5zbGF0ZWQnIF0pO1xuXG5cdFx0dGhpcy5hbmltYXRlKHRoaXMuY29vcmRpbmF0ZXMocG9zaXRpb24pKTtcblxuXHRcdHRoaXMucmVsZWFzZShbICd0cmFuc2xhdGUnLCAndHJhbnNsYXRlZCcgXSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIE5vcm1hbGl6ZXMgYW4gYWJzb2x1dGUgb3IgYSByZWxhdGl2ZSBwb3NpdGlvbiBvZiBhbiBpdGVtLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvbiAtIFRoZSBhYnNvbHV0ZSBvciByZWxhdGl2ZSBwb3NpdGlvbiB0byBub3JtYWxpemUuXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW3JlbGF0aXZlPWZhbHNlXSAtIFdoZXRoZXIgdGhlIGdpdmVuIHBvc2l0aW9uIGlzIHJlbGF0aXZlIG9yIG5vdC5cblx0ICogQHJldHVybnMge051bWJlcn0gLSBUaGUgbm9ybWFsaXplZCBwb3NpdGlvbi5cblx0ICovXG5cdE93bC5wcm90b3R5cGUubm9ybWFsaXplID0gZnVuY3Rpb24ocG9zaXRpb24sIHJlbGF0aXZlKSB7XG5cdFx0dmFyIG4gPSB0aGlzLl9pdGVtcy5sZW5ndGgsXG5cdFx0XHRtID0gcmVsYXRpdmUgPyAwIDogdGhpcy5fY2xvbmVzLmxlbmd0aDtcblxuXHRcdGlmICghdGhpcy5pc051bWVyaWMocG9zaXRpb24pIHx8IG4gPCAxKSB7XG5cdFx0XHRwb3NpdGlvbiA9IHVuZGVmaW5lZDtcblx0XHR9IGVsc2UgaWYgKHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSBuICsgbSkge1xuXHRcdFx0cG9zaXRpb24gPSAoKHBvc2l0aW9uIC0gbSAvIDIpICUgbiArIG4pICUgbiArIG0gLyAyO1xuXHRcdH1cblxuXHRcdHJldHVybiBwb3NpdGlvbjtcblx0fTtcblxuXHQvKipcblx0ICogQ29udmVydHMgYW4gYWJzb2x1dGUgcG9zaXRpb24gb2YgYW4gaXRlbSBpbnRvIGEgcmVsYXRpdmUgb25lLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvbiAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiB0byBjb252ZXJ0LlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSAtIFRoZSBjb252ZXJ0ZWQgcG9zaXRpb24uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnJlbGF0aXZlID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0XHRwb3NpdGlvbiAtPSB0aGlzLl9jbG9uZXMubGVuZ3RoIC8gMjtcblx0XHRyZXR1cm4gdGhpcy5ub3JtYWxpemUocG9zaXRpb24sIHRydWUpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBtYXhpbXVtIHBvc2l0aW9uIGZvciB0aGUgY3VycmVudCBpdGVtLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW3JlbGF0aXZlPWZhbHNlXSAtIFdoZXRoZXIgdG8gcmV0dXJuIGFuIGFic29sdXRlIHBvc2l0aW9uIG9yIGEgcmVsYXRpdmUgcG9zaXRpb24uXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9XG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm1heGltdW0gPSBmdW5jdGlvbihyZWxhdGl2ZSkge1xuXHRcdHZhciBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MsXG5cdFx0XHRtYXhpbXVtID0gdGhpcy5fY29vcmRpbmF0ZXMubGVuZ3RoLFxuXHRcdFx0aXRlcmF0b3IsXG5cdFx0XHRyZWNpcHJvY2FsSXRlbXNXaWR0aCxcblx0XHRcdGVsZW1lbnRXaWR0aDtcblxuXHRcdGlmIChzZXR0aW5ncy5sb29wKSB7XG5cdFx0XHRtYXhpbXVtID0gdGhpcy5fY2xvbmVzLmxlbmd0aCAvIDIgKyB0aGlzLl9pdGVtcy5sZW5ndGggLSAxO1xuXHRcdH0gZWxzZSBpZiAoc2V0dGluZ3MuYXV0b1dpZHRoIHx8IHNldHRpbmdzLm1lcmdlKSB7XG5cdFx0XHRpdGVyYXRvciA9IHRoaXMuX2l0ZW1zLmxlbmd0aDtcblx0XHRcdHJlY2lwcm9jYWxJdGVtc1dpZHRoID0gdGhpcy5faXRlbXNbLS1pdGVyYXRvcl0ud2lkdGgoKTtcblx0XHRcdGVsZW1lbnRXaWR0aCA9IHRoaXMuJGVsZW1lbnQud2lkdGgoKTtcblx0XHRcdHdoaWxlIChpdGVyYXRvci0tKSB7XG5cdFx0XHRcdHJlY2lwcm9jYWxJdGVtc1dpZHRoICs9IHRoaXMuX2l0ZW1zW2l0ZXJhdG9yXS53aWR0aCgpICsgdGhpcy5zZXR0aW5ncy5tYXJnaW47XG5cdFx0XHRcdGlmIChyZWNpcHJvY2FsSXRlbXNXaWR0aCA+IGVsZW1lbnRXaWR0aCkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtYXhpbXVtID0gaXRlcmF0b3IgKyAxO1xuXHRcdH0gZWxzZSBpZiAoc2V0dGluZ3MuY2VudGVyKSB7XG5cdFx0XHRtYXhpbXVtID0gdGhpcy5faXRlbXMubGVuZ3RoIC0gMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWF4aW11bSA9IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIHNldHRpbmdzLml0ZW1zO1xuXHRcdH1cblxuXHRcdGlmIChyZWxhdGl2ZSkge1xuXHRcdFx0bWF4aW11bSAtPSB0aGlzLl9jbG9uZXMubGVuZ3RoIC8gMjtcblx0XHR9XG5cblx0XHRyZXR1cm4gTWF0aC5tYXgobWF4aW11bSwgMCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIG1pbmltdW0gcG9zaXRpb24gZm9yIHRoZSBjdXJyZW50IGl0ZW0uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtCb29sZWFufSBbcmVsYXRpdmU9ZmFsc2VdIC0gV2hldGhlciB0byByZXR1cm4gYW4gYWJzb2x1dGUgcG9zaXRpb24gb3IgYSByZWxhdGl2ZSBwb3NpdGlvbi5cblx0ICogQHJldHVybnMge051bWJlcn1cblx0ICovXG5cdE93bC5wcm90b3R5cGUubWluaW11bSA9IGZ1bmN0aW9uKHJlbGF0aXZlKSB7XG5cdFx0cmV0dXJuIHJlbGF0aXZlID8gMCA6IHRoaXMuX2Nsb25lcy5sZW5ndGggLyAyO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIGFuIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCByZWxhdGl2ZSBwb3NpdGlvbi5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gW3Bvc2l0aW9uXSAtIFRoZSByZWxhdGl2ZSBwb3NpdGlvbiBvZiB0aGUgaXRlbS5cblx0ICogQHJldHVybiB7alF1ZXJ5fEFycmF5LjxqUXVlcnk+fSAtIFRoZSBpdGVtIGF0IHRoZSBnaXZlbiBwb3NpdGlvbiBvciBhbGwgaXRlbXMgaWYgbm8gcG9zaXRpb24gd2FzIGdpdmVuLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5pdGVtcyA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cdFx0aWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLl9pdGVtcy5zbGljZSgpO1xuXHRcdH1cblxuXHRcdHBvc2l0aW9uID0gdGhpcy5ub3JtYWxpemUocG9zaXRpb24sIHRydWUpO1xuXHRcdHJldHVybiB0aGlzLl9pdGVtc1twb3NpdGlvbl07XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgYW4gaXRlbSBhdCB0aGUgc3BlY2lmaWVkIHJlbGF0aXZlIHBvc2l0aW9uLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbcG9zaXRpb25dIC0gVGhlIHJlbGF0aXZlIHBvc2l0aW9uIG9mIHRoZSBpdGVtLlxuXHQgKiBAcmV0dXJuIHtqUXVlcnl8QXJyYXkuPGpRdWVyeT59IC0gVGhlIGl0ZW0gYXQgdGhlIGdpdmVuIHBvc2l0aW9uIG9yIGFsbCBpdGVtcyBpZiBubyBwb3NpdGlvbiB3YXMgZ2l2ZW4uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm1lcmdlcnMgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXHRcdGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fbWVyZ2Vycy5zbGljZSgpO1xuXHRcdH1cblxuXHRcdHBvc2l0aW9uID0gdGhpcy5ub3JtYWxpemUocG9zaXRpb24sIHRydWUpO1xuXHRcdHJldHVybiB0aGlzLl9tZXJnZXJzW3Bvc2l0aW9uXTtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyB0aGUgYWJzb2x1dGUgcG9zaXRpb25zIG9mIGNsb25lcyBmb3IgYW4gaXRlbS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gW3Bvc2l0aW9uXSAtIFRoZSByZWxhdGl2ZSBwb3NpdGlvbiBvZiB0aGUgaXRlbS5cblx0ICogQHJldHVybnMge0FycmF5LjxOdW1iZXI+fSAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbnMgb2YgY2xvbmVzIGZvciB0aGUgaXRlbSBvciBhbGwgaWYgbm8gcG9zaXRpb24gd2FzIGdpdmVuLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5jbG9uZXMgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXHRcdHZhciBvZGQgPSB0aGlzLl9jbG9uZXMubGVuZ3RoIC8gMixcblx0XHRcdGV2ZW4gPSBvZGQgKyB0aGlzLl9pdGVtcy5sZW5ndGgsXG5cdFx0XHRtYXAgPSBmdW5jdGlvbihpbmRleCkgeyByZXR1cm4gaW5kZXggJSAyID09PSAwID8gZXZlbiArIGluZGV4IC8gMiA6IG9kZCAtIChpbmRleCArIDEpIC8gMiB9O1xuXG5cdFx0aWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiAkLm1hcCh0aGlzLl9jbG9uZXMsIGZ1bmN0aW9uKHYsIGkpIHsgcmV0dXJuIG1hcChpKSB9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gJC5tYXAodGhpcy5fY2xvbmVzLCBmdW5jdGlvbih2LCBpKSB7IHJldHVybiB2ID09PSBwb3NpdGlvbiA/IG1hcChpKSA6IG51bGwgfSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldHMgdGhlIGN1cnJlbnQgYW5pbWF0aW9uIHNwZWVkLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWRdIC0gVGhlIGFuaW1hdGlvbiBzcGVlZCBpbiBtaWxsaXNlY29uZHMgb3Igbm90aGluZyB0byBsZWF2ZSBpdCB1bmNoYW5nZWQuXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IC0gVGhlIGN1cnJlbnQgYW5pbWF0aW9uIHNwZWVkIGluIG1pbGxpc2Vjb25kcy5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuc3BlZWQgPSBmdW5jdGlvbihzcGVlZCkge1xuXHRcdGlmIChzcGVlZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLl9zcGVlZCA9IHNwZWVkO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLl9zcGVlZDtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyB0aGUgY29vcmRpbmF0ZSBvZiBhbiBpdGVtLlxuXHQgKiBAdG9kbyBUaGUgbmFtZSBvZiB0aGlzIG1ldGhvZCBpcyBtaXNzbGVhbmRpbmcuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBpdGVtIHdpdGhpbiBgbWluaW11bSgpYCBhbmQgYG1heGltdW0oKWAuXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ8QXJyYXkuPE51bWJlcj59IC0gVGhlIGNvb3JkaW5hdGUgb2YgdGhlIGl0ZW0gaW4gcGl4ZWwgb3IgYWxsIGNvb3JkaW5hdGVzLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5jb29yZGluYXRlcyA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cdFx0dmFyIG11bHRpcGxpZXIgPSAxLFxuXHRcdFx0bmV3UG9zaXRpb24gPSBwb3NpdGlvbiAtIDEsXG5cdFx0XHRjb29yZGluYXRlO1xuXG5cdFx0aWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiAkLm1hcCh0aGlzLl9jb29yZGluYXRlcywgJC5wcm94eShmdW5jdGlvbihjb29yZGluYXRlLCBpbmRleCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb29yZGluYXRlcyhpbmRleCk7XG5cdFx0XHR9LCB0aGlzKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MuY2VudGVyKSB7XG5cdFx0XHRpZiAodGhpcy5zZXR0aW5ncy5ydGwpIHtcblx0XHRcdFx0bXVsdGlwbGllciA9IC0xO1xuXHRcdFx0XHRuZXdQb3NpdGlvbiA9IHBvc2l0aW9uICsgMTtcblx0XHRcdH1cblxuXHRcdFx0Y29vcmRpbmF0ZSA9IHRoaXMuX2Nvb3JkaW5hdGVzW3Bvc2l0aW9uXTtcblx0XHRcdGNvb3JkaW5hdGUgKz0gKHRoaXMud2lkdGgoKSAtIGNvb3JkaW5hdGUgKyAodGhpcy5fY29vcmRpbmF0ZXNbbmV3UG9zaXRpb25dIHx8IDApKSAvIDIgKiBtdWx0aXBsaWVyO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb29yZGluYXRlID0gdGhpcy5fY29vcmRpbmF0ZXNbbmV3UG9zaXRpb25dIHx8IDA7XG5cdFx0fVxuXG5cdFx0Y29vcmRpbmF0ZSA9IE1hdGguY2VpbChjb29yZGluYXRlKTtcblxuXHRcdHJldHVybiBjb29yZGluYXRlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGVzIHRoZSBzcGVlZCBmb3IgYSB0cmFuc2xhdGlvbi5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge051bWJlcn0gZnJvbSAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgc3RhcnQgaXRlbS5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IHRvIC0gVGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSB0YXJnZXQgaXRlbS5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtmYWN0b3I9dW5kZWZpbmVkXSAtIFRoZSB0aW1lIGZhY3RvciBpbiBtaWxsaXNlY29uZHMuXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNsYXRpb24uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmR1cmF0aW9uID0gZnVuY3Rpb24oZnJvbSwgdG8sIGZhY3Rvcikge1xuXHRcdGlmIChmYWN0b3IgPT09IDApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdHJldHVybiBNYXRoLm1pbihNYXRoLm1heChNYXRoLmFicyh0byAtIGZyb20pLCAxKSwgNikgKiBNYXRoLmFicygoZmFjdG9yIHx8IHRoaXMuc2V0dGluZ3Muc21hcnRTcGVlZCkpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTbGlkZXMgdG8gdGhlIHNwZWNpZmllZCBpdGVtLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvbiAtIFRoZSBwb3NpdGlvbiBvZiB0aGUgaXRlbS5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtzcGVlZF0gLSBUaGUgdGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIHRoZSB0cmFuc2l0aW9uLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS50byA9IGZ1bmN0aW9uKHBvc2l0aW9uLCBzcGVlZCkge1xuXHRcdHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50KCksXG5cdFx0XHRyZXZlcnQgPSBudWxsLFxuXHRcdFx0ZGlzdGFuY2UgPSBwb3NpdGlvbiAtIHRoaXMucmVsYXRpdmUoY3VycmVudCksXG5cdFx0XHRkaXJlY3Rpb24gPSAoZGlzdGFuY2UgPiAwKSAtIChkaXN0YW5jZSA8IDApLFxuXHRcdFx0aXRlbXMgPSB0aGlzLl9pdGVtcy5sZW5ndGgsXG5cdFx0XHRtaW5pbXVtID0gdGhpcy5taW5pbXVtKCksXG5cdFx0XHRtYXhpbXVtID0gdGhpcy5tYXhpbXVtKCk7XG5cblx0XHRpZiAodGhpcy5zZXR0aW5ncy5sb29wKSB7XG5cdFx0XHRpZiAoIXRoaXMuc2V0dGluZ3MucmV3aW5kICYmIE1hdGguYWJzKGRpc3RhbmNlKSA+IGl0ZW1zIC8gMikge1xuXHRcdFx0XHRkaXN0YW5jZSArPSBkaXJlY3Rpb24gKiAtMSAqIGl0ZW1zO1xuXHRcdFx0fVxuXG5cdFx0XHRwb3NpdGlvbiA9IGN1cnJlbnQgKyBkaXN0YW5jZTtcblx0XHRcdHJldmVydCA9ICgocG9zaXRpb24gLSBtaW5pbXVtKSAlIGl0ZW1zICsgaXRlbXMpICUgaXRlbXMgKyBtaW5pbXVtO1xuXG5cdFx0XHRpZiAocmV2ZXJ0ICE9PSBwb3NpdGlvbiAmJiByZXZlcnQgLSBkaXN0YW5jZSA8PSBtYXhpbXVtICYmIHJldmVydCAtIGRpc3RhbmNlID4gMCkge1xuXHRcdFx0XHRjdXJyZW50ID0gcmV2ZXJ0IC0gZGlzdGFuY2U7XG5cdFx0XHRcdHBvc2l0aW9uID0gcmV2ZXJ0O1xuXHRcdFx0XHR0aGlzLnJlc2V0KGN1cnJlbnQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAodGhpcy5zZXR0aW5ncy5yZXdpbmQpIHtcblx0XHRcdG1heGltdW0gKz0gMTtcblx0XHRcdHBvc2l0aW9uID0gKHBvc2l0aW9uICUgbWF4aW11bSArIG1heGltdW0pICUgbWF4aW11bTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cG9zaXRpb24gPSBNYXRoLm1heChtaW5pbXVtLCBNYXRoLm1pbihtYXhpbXVtLCBwb3NpdGlvbikpO1xuXHRcdH1cblxuXHRcdHRoaXMuc3BlZWQodGhpcy5kdXJhdGlvbihjdXJyZW50LCBwb3NpdGlvbiwgc3BlZWQpKTtcblx0XHR0aGlzLmN1cnJlbnQocG9zaXRpb24pO1xuXG5cdFx0aWYgKHRoaXMuJGVsZW1lbnQuaXMoJzp2aXNpYmxlJykpIHtcblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBTbGlkZXMgdG8gdGhlIG5leHQgaXRlbS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gW3NwZWVkXSAtIFRoZSB0aW1lIGluIG1pbGxpc2Vjb25kcyBmb3IgdGhlIHRyYW5zaXRpb24uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbihzcGVlZCkge1xuXHRcdHNwZWVkID0gc3BlZWQgfHwgZmFsc2U7XG5cdFx0dGhpcy50byh0aGlzLnJlbGF0aXZlKHRoaXMuY3VycmVudCgpKSArIDEsIHNwZWVkKTtcblx0fTtcblxuXHQvKipcblx0ICogU2xpZGVzIHRvIHRoZSBwcmV2aW91cyBpdGVtLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWRdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cblx0ICovXG5cdE93bC5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uKHNwZWVkKSB7XG5cdFx0c3BlZWQgPSBzcGVlZCB8fCBmYWxzZTtcblx0XHR0aGlzLnRvKHRoaXMucmVsYXRpdmUodGhpcy5jdXJyZW50KCkpIC0gMSwgc3BlZWQpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIHRoZSBlbmQgb2YgYW4gYW5pbWF0aW9uLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gVGhlIGV2ZW50IGFyZ3VtZW50cy5cblx0ICovXG5cdE93bC5wcm90b3R5cGUub25UcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuXHRcdC8vIGlmIGNzczIgYW5pbWF0aW9uIHRoZW4gZXZlbnQgb2JqZWN0IGlzIHVuZGVmaW5lZFxuXHRcdGlmIChldmVudCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0Ly8gQ2F0Y2ggb25seSBvd2wtc3RhZ2UgdHJhbnNpdGlvbkVuZCBldmVudFxuXHRcdFx0aWYgKChldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudCB8fCBldmVudC5vcmlnaW5hbFRhcmdldCkgIT09IHRoaXMuJHN0YWdlLmdldCgwKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5sZWF2ZSgnYW5pbWF0aW5nJyk7XG5cdFx0dGhpcy50cmlnZ2VyKCd0cmFuc2xhdGVkJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdmlld3BvcnQgd2lkdGguXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHJldHVybiB7TnVtYmVyfSAtIFRoZSB3aWR0aCBpbiBwaXhlbC5cblx0ICovXG5cdE93bC5wcm90b3R5cGUudmlld3BvcnQgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgd2lkdGg7XG5cdFx0aWYgKHRoaXMub3B0aW9ucy5yZXNwb25zaXZlQmFzZUVsZW1lbnQgIT09IHdpbmRvdykge1xuXHRcdFx0d2lkdGggPSAkKHRoaXMub3B0aW9ucy5yZXNwb25zaXZlQmFzZUVsZW1lbnQpLndpZHRoKCk7XG5cdFx0fSBlbHNlIGlmICh3aW5kb3cuaW5uZXJXaWR0aCkge1xuXHRcdFx0d2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHR9IGVsc2UgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpIHtcblx0XHRcdHdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyAnQ2FuIG5vdCBkZXRlY3Qgdmlld3BvcnQgd2lkdGguJztcblx0XHR9XG5cdFx0cmV0dXJuIHdpZHRoO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZXBsYWNlcyB0aGUgY3VycmVudCBjb250ZW50LlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8alF1ZXJ5fFN0cmluZ30gY29udGVudCAtIFRoZSBuZXcgY29udGVudC5cblx0ICovXG5cdE93bC5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uKGNvbnRlbnQpIHtcblx0XHR0aGlzLiRzdGFnZS5lbXB0eSgpO1xuXHRcdHRoaXMuX2l0ZW1zID0gW107XG5cblx0XHRpZiAoY29udGVudCkge1xuXHRcdFx0Y29udGVudCA9IChjb250ZW50IGluc3RhbmNlb2YgalF1ZXJ5KSA/IGNvbnRlbnQgOiAkKGNvbnRlbnQpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNldHRpbmdzLm5lc3RlZEl0ZW1TZWxlY3Rvcikge1xuXHRcdFx0Y29udGVudCA9IGNvbnRlbnQuZmluZCgnLicgKyB0aGlzLnNldHRpbmdzLm5lc3RlZEl0ZW1TZWxlY3Rvcik7XG5cdFx0fVxuXG5cdFx0Y29udGVudC5maWx0ZXIoZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5ub2RlVHlwZSA9PT0gMTtcblx0XHR9KS5lYWNoKCQucHJveHkoZnVuY3Rpb24oaW5kZXgsIGl0ZW0pIHtcblx0XHRcdGl0ZW0gPSB0aGlzLnByZXBhcmUoaXRlbSk7XG5cdFx0XHR0aGlzLiRzdGFnZS5hcHBlbmQoaXRlbSk7XG5cdFx0XHR0aGlzLl9pdGVtcy5wdXNoKGl0ZW0pO1xuXHRcdFx0dGhpcy5fbWVyZ2Vycy5wdXNoKGl0ZW0uZmluZCgnW2RhdGEtbWVyZ2VdJykuYWRkQmFjaygnW2RhdGEtbWVyZ2VdJykuYXR0cignZGF0YS1tZXJnZScpICogMSB8fCAxKTtcblx0XHR9LCB0aGlzKSk7XG5cblx0XHR0aGlzLnJlc2V0KHRoaXMuaXNOdW1lcmljKHRoaXMuc2V0dGluZ3Muc3RhcnRQb3NpdGlvbikgPyB0aGlzLnNldHRpbmdzLnN0YXJ0UG9zaXRpb24gOiAwKTtcblxuXHRcdHRoaXMuaW52YWxpZGF0ZSgnaXRlbXMnKTtcblx0fTtcblxuXHQvKipcblx0ICogQWRkcyBhbiBpdGVtLlxuXHQgKiBAdG9kbyBVc2UgYGl0ZW1gIGluc3RlYWQgb2YgYGNvbnRlbnRgIGZvciB0aGUgZXZlbnQgYXJndW1lbnRzLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8alF1ZXJ5fFN0cmluZ30gY29udGVudCAtIFRoZSBpdGVtIGNvbnRlbnQgdG8gYWRkLlxuXHQgKiBAcGFyYW0ge051bWJlcn0gW3Bvc2l0aW9uXSAtIFRoZSByZWxhdGl2ZSBwb3NpdGlvbiBhdCB3aGljaCB0byBpbnNlcnQgdGhlIGl0ZW0gb3RoZXJ3aXNlIHRoZSBpdGVtIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGVuZC5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oY29udGVudCwgcG9zaXRpb24pIHtcblx0XHR2YXIgY3VycmVudCA9IHRoaXMucmVsYXRpdmUodGhpcy5fY3VycmVudCk7XG5cblx0XHRwb3NpdGlvbiA9IHBvc2l0aW9uID09PSB1bmRlZmluZWQgPyB0aGlzLl9pdGVtcy5sZW5ndGggOiB0aGlzLm5vcm1hbGl6ZShwb3NpdGlvbiwgdHJ1ZSk7XG5cdFx0Y29udGVudCA9IGNvbnRlbnQgaW5zdGFuY2VvZiBqUXVlcnkgPyBjb250ZW50IDogJChjb250ZW50KTtcblxuXHRcdHRoaXMudHJpZ2dlcignYWRkJywgeyBjb250ZW50OiBjb250ZW50LCBwb3NpdGlvbjogcG9zaXRpb24gfSk7XG5cblx0XHRjb250ZW50ID0gdGhpcy5wcmVwYXJlKGNvbnRlbnQpO1xuXG5cdFx0aWYgKHRoaXMuX2l0ZW1zLmxlbmd0aCA9PT0gMCB8fCBwb3NpdGlvbiA9PT0gdGhpcy5faXRlbXMubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLl9pdGVtcy5sZW5ndGggPT09IDAgJiYgdGhpcy4kc3RhZ2UuYXBwZW5kKGNvbnRlbnQpO1xuXHRcdFx0dGhpcy5faXRlbXMubGVuZ3RoICE9PSAwICYmIHRoaXMuX2l0ZW1zW3Bvc2l0aW9uIC0gMV0uYWZ0ZXIoY29udGVudCk7XG5cdFx0XHR0aGlzLl9pdGVtcy5wdXNoKGNvbnRlbnQpO1xuXHRcdFx0dGhpcy5fbWVyZ2Vycy5wdXNoKGNvbnRlbnQuZmluZCgnW2RhdGEtbWVyZ2VdJykuYWRkQmFjaygnW2RhdGEtbWVyZ2VdJykuYXR0cignZGF0YS1tZXJnZScpICogMSB8fCAxKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5faXRlbXNbcG9zaXRpb25dLmJlZm9yZShjb250ZW50KTtcblx0XHRcdHRoaXMuX2l0ZW1zLnNwbGljZShwb3NpdGlvbiwgMCwgY29udGVudCk7XG5cdFx0XHR0aGlzLl9tZXJnZXJzLnNwbGljZShwb3NpdGlvbiwgMCwgY29udGVudC5maW5kKCdbZGF0YS1tZXJnZV0nKS5hZGRCYWNrKCdbZGF0YS1tZXJnZV0nKS5hdHRyKCdkYXRhLW1lcmdlJykgKiAxIHx8IDEpO1xuXHRcdH1cblxuXHRcdHRoaXMuX2l0ZW1zW2N1cnJlbnRdICYmIHRoaXMucmVzZXQodGhpcy5faXRlbXNbY3VycmVudF0uaW5kZXgoKSk7XG5cblx0XHR0aGlzLmludmFsaWRhdGUoJ2l0ZW1zJyk7XG5cblx0XHR0aGlzLnRyaWdnZXIoJ2FkZGVkJywgeyBjb250ZW50OiBjb250ZW50LCBwb3NpdGlvbjogcG9zaXRpb24gfSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFJlbW92ZXMgYW4gaXRlbSBieSBpdHMgcG9zaXRpb24uXG5cdCAqIEB0b2RvIFVzZSBgaXRlbWAgaW5zdGVhZCBvZiBgY29udGVudGAgZm9yIHRoZSBldmVudCBhcmd1bWVudHMuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIHJlbGF0aXZlIHBvc2l0aW9uIG9mIHRoZSBpdGVtIHRvIHJlbW92ZS5cblx0ICovXG5cdE93bC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0XHRwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplKHBvc2l0aW9uLCB0cnVlKTtcblxuXHRcdGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy50cmlnZ2VyKCdyZW1vdmUnLCB7IGNvbnRlbnQ6IHRoaXMuX2l0ZW1zW3Bvc2l0aW9uXSwgcG9zaXRpb246IHBvc2l0aW9uIH0pO1xuXG5cdFx0dGhpcy5faXRlbXNbcG9zaXRpb25dLnJlbW92ZSgpO1xuXHRcdHRoaXMuX2l0ZW1zLnNwbGljZShwb3NpdGlvbiwgMSk7XG5cdFx0dGhpcy5fbWVyZ2Vycy5zcGxpY2UocG9zaXRpb24sIDEpO1xuXG5cdFx0dGhpcy5pbnZhbGlkYXRlKCdpdGVtcycpO1xuXG5cdFx0dGhpcy50cmlnZ2VyKCdyZW1vdmVkJywgeyBjb250ZW50OiBudWxsLCBwb3NpdGlvbjogcG9zaXRpb24gfSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFByZWxvYWRzIGltYWdlcyB3aXRoIGF1dG8gd2lkdGguXG5cdCAqIEB0b2RvIFJlcGxhY2UgYnkgYSBtb3JlIGdlbmVyaWMgYXBwcm9hY2hcblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5wcmVsb2FkQXV0b1dpZHRoSW1hZ2VzID0gZnVuY3Rpb24oaW1hZ2VzKSB7XG5cdFx0aW1hZ2VzLmVhY2goJC5wcm94eShmdW5jdGlvbihpLCBlbGVtZW50KSB7XG5cdFx0XHR0aGlzLmVudGVyKCdwcmUtbG9hZGluZycpO1xuXHRcdFx0ZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cdFx0XHQkKG5ldyBJbWFnZSgpKS5vbmUoJ2xvYWQnLCAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0ZWxlbWVudC5hdHRyKCdzcmMnLCBlLnRhcmdldC5zcmMpO1xuXHRcdFx0XHRlbGVtZW50LmNzcygnb3BhY2l0eScsIDEpO1xuXHRcdFx0XHR0aGlzLmxlYXZlKCdwcmUtbG9hZGluZycpO1xuXHRcdFx0XHQhdGhpcy5pcygncHJlLWxvYWRpbmcnKSAmJiAhdGhpcy5pcygnaW5pdGlhbGl6aW5nJykgJiYgdGhpcy5yZWZyZXNoKCk7XG5cdFx0XHR9LCB0aGlzKSkuYXR0cignc3JjJywgZWxlbWVudC5hdHRyKCdzcmMnKSB8fCBlbGVtZW50LmF0dHIoJ2RhdGEtc3JjJykgfHwgZWxlbWVudC5hdHRyKCdkYXRhLXNyYy1yZXRpbmEnKSk7XG5cdFx0fSwgdGhpcykpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZXN0cm95cyB0aGUgY2Fyb3VzZWwuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdE93bC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dGhpcy4kZWxlbWVudC5vZmYoJy5vd2wuY29yZScpO1xuXHRcdHRoaXMuJHN0YWdlLm9mZignLm93bC5jb3JlJyk7XG5cdFx0JChkb2N1bWVudCkub2ZmKCcub3dsLmNvcmUnKTtcblxuXHRcdGlmICh0aGlzLnNldHRpbmdzLnJlc3BvbnNpdmUgIT09IGZhbHNlKSB7XG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZXIpO1xuXHRcdFx0dGhpcy5vZmYod2luZG93LCAncmVzaXplJywgdGhpcy5faGFuZGxlcnMub25UaHJvdHRsZWRSZXNpemUpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgaW4gdGhpcy5fcGx1Z2lucykge1xuXHRcdFx0dGhpcy5fcGx1Z2luc1tpXS5kZXN0cm95KCk7XG5cdFx0fVxuXG5cdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oJy5jbG9uZWQnKS5yZW1vdmUoKTtcblxuXHRcdHRoaXMuJHN0YWdlLnVud3JhcCgpO1xuXHRcdHRoaXMuJHN0YWdlLmNoaWxkcmVuKCkuY29udGVudHMoKS51bndyYXAoKTtcblx0XHR0aGlzLiRzdGFnZS5jaGlsZHJlbigpLnVud3JhcCgpO1xuXG5cdFx0dGhpcy4kZWxlbWVudFxuXHRcdFx0LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5yZWZyZXNoQ2xhc3MpXG5cdFx0XHQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmxvYWRpbmdDbGFzcylcblx0XHRcdC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMubG9hZGVkQ2xhc3MpXG5cdFx0XHQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnJ0bENsYXNzKVxuXHRcdFx0LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5kcmFnQ2xhc3MpXG5cdFx0XHQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmdyYWJDbGFzcylcblx0XHRcdC5hdHRyKCdjbGFzcycsIHRoaXMuJGVsZW1lbnQuYXR0cignY2xhc3MnKS5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5vcHRpb25zLnJlc3BvbnNpdmVDbGFzcyArICctXFxcXFMrXFxcXHMnLCAnZycpLCAnJykpXG5cdFx0XHQucmVtb3ZlRGF0YSgnb3dsLmNhcm91c2VsJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIE9wZXJhdG9ycyB0byBjYWxjdWxhdGUgcmlnaHQtdG8tbGVmdCBhbmQgbGVmdC10by1yaWdodC5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge051bWJlcn0gW2FdIC0gVGhlIGxlZnQgc2lkZSBvcGVyYW5kLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW29dIC0gVGhlIG9wZXJhdG9yLlxuXHQgKiBAcGFyYW0ge051bWJlcn0gW2JdIC0gVGhlIHJpZ2h0IHNpZGUgb3BlcmFuZC5cblx0ICovXG5cdE93bC5wcm90b3R5cGUub3AgPSBmdW5jdGlvbihhLCBvLCBiKSB7XG5cdFx0dmFyIHJ0bCA9IHRoaXMuc2V0dGluZ3MucnRsO1xuXHRcdHN3aXRjaCAobykge1xuXHRcdFx0Y2FzZSAnPCc6XG5cdFx0XHRcdHJldHVybiBydGwgPyBhID4gYiA6IGEgPCBiO1xuXHRcdFx0Y2FzZSAnPic6XG5cdFx0XHRcdHJldHVybiBydGwgPyBhIDwgYiA6IGEgPiBiO1xuXHRcdFx0Y2FzZSAnPj0nOlxuXHRcdFx0XHRyZXR1cm4gcnRsID8gYSA8PSBiIDogYSA+PSBiO1xuXHRcdFx0Y2FzZSAnPD0nOlxuXHRcdFx0XHRyZXR1cm4gcnRsID8gYSA+PSBiIDogYSA8PSBiO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBBdHRhY2hlcyB0byBhbiBpbnRlcm5hbCBldmVudC5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGV2ZW50IHNvdXJjZS5cblx0ICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IC0gVGhlIGV2ZW50IG5hbWUuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIC0gVGhlIGV2ZW50IGhhbmRsZXIgdG8gYXR0YWNoLlxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IGNhcHR1cmUgLSBXZXRoZXIgdGhlIGV2ZW50IHNob3VsZCBiZSBoYW5kbGVkIGF0IHRoZSBjYXB0dXJpbmcgcGhhc2Ugb3Igbm90LlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGVsZW1lbnQsIGV2ZW50LCBsaXN0ZW5lciwgY2FwdHVyZSkge1xuXHRcdGlmIChlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGNhcHR1cmUpO1xuXHRcdH0gZWxzZSBpZiAoZWxlbWVudC5hdHRhY2hFdmVudCkge1xuXHRcdFx0ZWxlbWVudC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIERldGFjaGVzIGZyb20gYW4gaW50ZXJuYWwgZXZlbnQuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBldmVudCBzb3VyY2UuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCAtIFRoZSBldmVudCBuYW1lLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciAtIFRoZSBhdHRhY2hlZCBldmVudCBoYW5kbGVyIHRvIGRldGFjaC5cblx0ICogQHBhcmFtIHtCb29sZWFufSBjYXB0dXJlIC0gV2V0aGVyIHRoZSBhdHRhY2hlZCBldmVudCBoYW5kbGVyIHdhcyByZWdpc3RlcmVkIGFzIGEgY2FwdHVyaW5nIGxpc3RlbmVyIG9yIG5vdC5cblx0ICovXG5cdE93bC5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oZWxlbWVudCwgZXZlbnQsIGxpc3RlbmVyLCBjYXB0dXJlKSB7XG5cdFx0aWYgKGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgY2FwdHVyZSk7XG5cdFx0fSBlbHNlIGlmIChlbGVtZW50LmRldGFjaEV2ZW50KSB7XG5cdFx0XHRlbGVtZW50LmRldGFjaEV2ZW50KCdvbicgKyBldmVudCwgbGlzdGVuZXIpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogVHJpZ2dlcnMgYSBwdWJsaWMgZXZlbnQuXG5cdCAqIEB0b2RvIFJlbW92ZSBgc3RhdHVzYCwgYHJlbGF0ZWRUYXJnZXRgIHNob3VsZCBiZSB1c2VkIGluc3RlYWQuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBUaGUgZXZlbnQgbmFtZS5cblx0ICogQHBhcmFtIHsqfSBbZGF0YT1udWxsXSAtIFRoZSBldmVudCBkYXRhLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW25hbWVzcGFjZT1jYXJvdXNlbF0gLSBUaGUgZXZlbnQgbmFtZXNwYWNlLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW3N0YXRlXSAtIFRoZSBzdGF0ZSB3aGljaCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50LlxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtlbnRlcj1mYWxzZV0gLSBJbmRpY2F0ZXMgaWYgdGhlIGNhbGwgZW50ZXJzIHRoZSBzcGVjaWZpZWQgc3RhdGUgb3Igbm90LlxuXHQgKiBAcmV0dXJucyB7RXZlbnR9IC0gVGhlIGV2ZW50IGFyZ3VtZW50cy5cblx0ICovXG5cdE93bC5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKG5hbWUsIGRhdGEsIG5hbWVzcGFjZSwgc3RhdGUsIGVudGVyKSB7XG5cdFx0dmFyIHN0YXR1cyA9IHtcblx0XHRcdGl0ZW06IHsgY291bnQ6IHRoaXMuX2l0ZW1zLmxlbmd0aCwgaW5kZXg6IHRoaXMuY3VycmVudCgpIH1cblx0XHR9LCBoYW5kbGVyID0gJC5jYW1lbENhc2UoXG5cdFx0XHQkLmdyZXAoWyAnb24nLCBuYW1lLCBuYW1lc3BhY2UgXSwgZnVuY3Rpb24odikgeyByZXR1cm4gdiB9KVxuXHRcdFx0XHQuam9pbignLScpLnRvTG93ZXJDYXNlKClcblx0XHQpLCBldmVudCA9ICQuRXZlbnQoXG5cdFx0XHRbIG5hbWUsICdvd2wnLCBuYW1lc3BhY2UgfHwgJ2Nhcm91c2VsJyBdLmpvaW4oJy4nKS50b0xvd2VyQ2FzZSgpLFxuXHRcdFx0JC5leHRlbmQoeyByZWxhdGVkVGFyZ2V0OiB0aGlzIH0sIHN0YXR1cywgZGF0YSlcblx0XHQpO1xuXG5cdFx0aWYgKCF0aGlzLl9zdXByZXNzW25hbWVdKSB7XG5cdFx0XHQkLmVhY2godGhpcy5fcGx1Z2lucywgZnVuY3Rpb24obmFtZSwgcGx1Z2luKSB7XG5cdFx0XHRcdGlmIChwbHVnaW4ub25UcmlnZ2VyKSB7XG5cdFx0XHRcdFx0cGx1Z2luLm9uVHJpZ2dlcihldmVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLnJlZ2lzdGVyKHsgdHlwZTogT3dsLlR5cGUuRXZlbnQsIG5hbWU6IG5hbWUgfSk7XG5cdFx0XHR0aGlzLiRlbGVtZW50LnRyaWdnZXIoZXZlbnQpO1xuXG5cdFx0XHRpZiAodGhpcy5zZXR0aW5ncyAmJiB0eXBlb2YgdGhpcy5zZXR0aW5nc1toYW5kbGVyXSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHR0aGlzLnNldHRpbmdzW2hhbmRsZXJdLmNhbGwodGhpcywgZXZlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBldmVudDtcblx0fTtcblxuXHQvKipcblx0ICogRW50ZXJzIGEgc3RhdGUuXG5cdCAqIEBwYXJhbSBuYW1lIC0gVGhlIHN0YXRlIG5hbWUuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmVudGVyID0gZnVuY3Rpb24obmFtZSkge1xuXHRcdCQuZWFjaChbIG5hbWUgXS5jb25jYXQodGhpcy5fc3RhdGVzLnRhZ3NbbmFtZV0gfHwgW10pLCAkLnByb3h5KGZ1bmN0aW9uKGksIG5hbWUpIHtcblx0XHRcdGlmICh0aGlzLl9zdGF0ZXMuY3VycmVudFtuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuX3N0YXRlcy5jdXJyZW50W25hbWVdID0gMDtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fc3RhdGVzLmN1cnJlbnRbbmFtZV0rKztcblx0XHR9LCB0aGlzKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIExlYXZlcyBhIHN0YXRlLlxuXHQgKiBAcGFyYW0gbmFtZSAtIFRoZSBzdGF0ZSBuYW1lLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5sZWF2ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0XHQkLmVhY2goWyBuYW1lIF0uY29uY2F0KHRoaXMuX3N0YXRlcy50YWdzW25hbWVdIHx8IFtdKSwgJC5wcm94eShmdW5jdGlvbihpLCBuYW1lKSB7XG5cdFx0XHR0aGlzLl9zdGF0ZXMuY3VycmVudFtuYW1lXS0tO1xuXHRcdH0sIHRoaXMpKTtcblx0fTtcblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGFuIGV2ZW50IG9yIHN0YXRlLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgLSBUaGUgZXZlbnQgb3Igc3RhdGUgdG8gcmVnaXN0ZXIuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24ob2JqZWN0KSB7XG5cdFx0aWYgKG9iamVjdC50eXBlID09PSBPd2wuVHlwZS5FdmVudCkge1xuXHRcdFx0aWYgKCEkLmV2ZW50LnNwZWNpYWxbb2JqZWN0Lm5hbWVdKSB7XG5cdFx0XHRcdCQuZXZlbnQuc3BlY2lhbFtvYmplY3QubmFtZV0gPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCEkLmV2ZW50LnNwZWNpYWxbb2JqZWN0Lm5hbWVdLm93bCkge1xuXHRcdFx0XHR2YXIgX2RlZmF1bHQgPSAkLmV2ZW50LnNwZWNpYWxbb2JqZWN0Lm5hbWVdLl9kZWZhdWx0O1xuXHRcdFx0XHQkLmV2ZW50LnNwZWNpYWxbb2JqZWN0Lm5hbWVdLl9kZWZhdWx0ID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdGlmIChfZGVmYXVsdCAmJiBfZGVmYXVsdC5hcHBseSAmJiAoIWUubmFtZXNwYWNlIHx8IGUubmFtZXNwYWNlLmluZGV4T2YoJ293bCcpID09PSAtMSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiBfZGVmYXVsdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gZS5uYW1lc3BhY2UgJiYgZS5uYW1lc3BhY2UuaW5kZXhPZignb3dsJykgPiAtMTtcblx0XHRcdFx0fTtcblx0XHRcdFx0JC5ldmVudC5zcGVjaWFsW29iamVjdC5uYW1lXS5vd2wgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAob2JqZWN0LnR5cGUgPT09IE93bC5UeXBlLlN0YXRlKSB7XG5cdFx0XHRpZiAoIXRoaXMuX3N0YXRlcy50YWdzW29iamVjdC5uYW1lXSkge1xuXHRcdFx0XHR0aGlzLl9zdGF0ZXMudGFnc1tvYmplY3QubmFtZV0gPSBvYmplY3QudGFncztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX3N0YXRlcy50YWdzW29iamVjdC5uYW1lXSA9IHRoaXMuX3N0YXRlcy50YWdzW29iamVjdC5uYW1lXS5jb25jYXQob2JqZWN0LnRhZ3MpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9zdGF0ZXMudGFnc1tvYmplY3QubmFtZV0gPSAkLmdyZXAodGhpcy5fc3RhdGVzLnRhZ3Nbb2JqZWN0Lm5hbWVdLCAkLnByb3h5KGZ1bmN0aW9uKHRhZywgaSkge1xuXHRcdFx0XHRyZXR1cm4gJC5pbkFycmF5KHRhZywgdGhpcy5fc3RhdGVzLnRhZ3Nbb2JqZWN0Lm5hbWVdKSA9PT0gaTtcblx0XHRcdH0sIHRoaXMpKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFN1cHByZXNzZXMgZXZlbnRzLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7QXJyYXkuPFN0cmluZz59IGV2ZW50cyAtIFRoZSBldmVudHMgdG8gc3VwcHJlc3MuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnN1cHByZXNzID0gZnVuY3Rpb24oZXZlbnRzKSB7XG5cdFx0JC5lYWNoKGV2ZW50cywgJC5wcm94eShmdW5jdGlvbihpbmRleCwgZXZlbnQpIHtcblx0XHRcdHRoaXMuX3N1cHJlc3NbZXZlbnRdID0gdHJ1ZTtcblx0XHR9LCB0aGlzKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFJlbGVhc2VzIHN1cHByZXNzZWQgZXZlbnRzLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7QXJyYXkuPFN0cmluZz59IGV2ZW50cyAtIFRoZSBldmVudHMgdG8gcmVsZWFzZS5cblx0ICovXG5cdE93bC5wcm90b3R5cGUucmVsZWFzZSA9IGZ1bmN0aW9uKGV2ZW50cykge1xuXHRcdCQuZWFjaChldmVudHMsICQucHJveHkoZnVuY3Rpb24oaW5kZXgsIGV2ZW50KSB7XG5cdFx0XHRkZWxldGUgdGhpcy5fc3VwcmVzc1tldmVudF07XG5cdFx0fSwgdGhpcykpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHVuaWZpZWQgcG9pbnRlciBjb29yZGluYXRlcyBmcm9tIGV2ZW50LlxuXHQgKiBAdG9kbyAjMjYxXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtFdmVudH0gLSBUaGUgYG1vdXNlZG93bmAgb3IgYHRvdWNoc3RhcnRgIGV2ZW50LlxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fSAtIENvbnRhaW5zIGB4YCBhbmQgYHlgIGNvb3JkaW5hdGVzIG9mIGN1cnJlbnQgcG9pbnRlciBwb3NpdGlvbi5cblx0ICovXG5cdE93bC5wcm90b3R5cGUucG9pbnRlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIHJlc3VsdCA9IHsgeDogbnVsbCwgeTogbnVsbCB9O1xuXG5cdFx0ZXZlbnQgPSBldmVudC5vcmlnaW5hbEV2ZW50IHx8IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcblxuXHRcdGV2ZW50ID0gZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA/XG5cdFx0XHRldmVudC50b3VjaGVzWzBdIDogZXZlbnQuY2hhbmdlZFRvdWNoZXMgJiYgZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID9cblx0XHRcdFx0ZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gOiBldmVudDtcblxuXHRcdGlmIChldmVudC5wYWdlWCkge1xuXHRcdFx0cmVzdWx0LnggPSBldmVudC5wYWdlWDtcblx0XHRcdHJlc3VsdC55ID0gZXZlbnQucGFnZVk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdC54ID0gZXZlbnQuY2xpZW50WDtcblx0XHRcdHJlc3VsdC55ID0gZXZlbnQuY2xpZW50WTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmVzIGlmIHRoZSBpbnB1dCBpcyBhIE51bWJlciBvciBzb21ldGhpbmcgdGhhdCBjYW4gYmUgY29lcmNlZCB0byBhIE51bWJlclxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xPYmplY3R8QXJyYXl8Qm9vbGVhbnxSZWdFeHB8RnVuY3Rpb258U3ltYm9sfSAtIFRoZSBpbnB1dCB0byBiZSB0ZXN0ZWRcblx0ICogQHJldHVybnMge0Jvb2xlYW59IC0gQW4gaW5kaWNhdGlvbiBpZiB0aGUgaW5wdXQgaXMgYSBOdW1iZXIgb3IgY2FuIGJlIGNvZXJjZWQgdG8gYSBOdW1iZXJcblx0ICovXG5cdE93bC5wcm90b3R5cGUuaXNOdW1lcmljID0gZnVuY3Rpb24obnVtYmVyKSB7XG5cdFx0cmV0dXJuICFpc05hTihwYXJzZUZsb2F0KG51bWJlcikpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBkaWZmZXJlbmNlIG9mIHR3byB2ZWN0b3JzLlxuXHQgKiBAdG9kbyAjMjYxXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtPYmplY3R9IC0gVGhlIGZpcnN0IHZlY3Rvci5cblx0ICogQHBhcmFtIHtPYmplY3R9IC0gVGhlIHNlY29uZCB2ZWN0b3IuXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IC0gVGhlIGRpZmZlcmVuY2UuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmRpZmZlcmVuY2UgPSBmdW5jdGlvbihmaXJzdCwgc2Vjb25kKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHg6IGZpcnN0LnggLSBzZWNvbmQueCxcblx0XHRcdHk6IGZpcnN0LnkgLSBzZWNvbmQueVxuXHRcdH07XG5cdH07XG5cblx0LyoqXG5cdCAqIFRoZSBqUXVlcnkgUGx1Z2luIGZvciB0aGUgT3dsIENhcm91c2VsXG5cdCAqIEB0b2RvIE5hdmlnYXRpb24gcGx1Z2luIGBuZXh0YCBhbmQgYHByZXZgXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdCQuZm4ub3dsQ2Fyb3VzZWwgPSBmdW5jdGlvbihvcHRpb24pIHtcblx0XHR2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcblx0XHRcdFx0ZGF0YSA9ICR0aGlzLmRhdGEoJ293bC5jYXJvdXNlbCcpO1xuXG5cdFx0XHRpZiAoIWRhdGEpIHtcblx0XHRcdFx0ZGF0YSA9IG5ldyBPd2wodGhpcywgdHlwZW9mIG9wdGlvbiA9PSAnb2JqZWN0JyAmJiBvcHRpb24pO1xuXHRcdFx0XHQkdGhpcy5kYXRhKCdvd2wuY2Fyb3VzZWwnLCBkYXRhKTtcblxuXHRcdFx0XHQkLmVhY2goW1xuXHRcdFx0XHRcdCduZXh0JywgJ3ByZXYnLCAndG8nLCAnZGVzdHJveScsICdyZWZyZXNoJywgJ3JlcGxhY2UnLCAnYWRkJywgJ3JlbW92ZSdcblx0XHRcdFx0XSwgZnVuY3Rpb24oaSwgZXZlbnQpIHtcblx0XHRcdFx0XHRkYXRhLnJlZ2lzdGVyKHsgdHlwZTogT3dsLlR5cGUuRXZlbnQsIG5hbWU6IGV2ZW50IH0pO1xuXHRcdFx0XHRcdGRhdGEuJGVsZW1lbnQub24oZXZlbnQgKyAnLm93bC5jYXJvdXNlbC5jb3JlJywgJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgZS5yZWxhdGVkVGFyZ2V0ICE9PSB0aGlzKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3VwcHJlc3MoWyBldmVudCBdKTtcblx0XHRcdFx0XHRcdFx0ZGF0YVtldmVudF0uYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5yZWxlYXNlKFsgZXZlbnQgXSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgZGF0YSkpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycgJiYgb3B0aW9uLmNoYXJBdCgwKSAhPT0gJ18nKSB7XG5cdFx0XHRcdGRhdGFbb3B0aW9uXS5hcHBseShkYXRhLCBhcmdzKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHQvKipcblx0ICogVGhlIGNvbnN0cnVjdG9yIGZvciB0aGUgalF1ZXJ5IFBsdWdpblxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHQkLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yID0gT3dsO1xuXG59KSh3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XG5cbi8qKlxuICogQXV0b1JlZnJlc2ggUGx1Z2luXG4gKiBAdmVyc2lvbiAyLjEuMFxuICogQGF1dGhvciBBcnR1cyBLb2xhbm93c2tpXG4gKiBAYXV0aG9yIERhdmlkIERldXRzY2hcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSBhdXRvIHJlZnJlc2ggcGx1Z2luLlxuXHQgKiBAY2xhc3MgVGhlIEF1dG8gUmVmcmVzaCBQbHVnaW5cblx0ICogQHBhcmFtIHtPd2x9IGNhcm91c2VsIC0gVGhlIE93bCBDYXJvdXNlbFxuXHQgKi9cblx0dmFyIEF1dG9SZWZyZXNoID0gZnVuY3Rpb24oY2Fyb3VzZWwpIHtcblx0XHQvKipcblx0XHQgKiBSZWZlcmVuY2UgdG8gdGhlIGNvcmUuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPd2x9XG5cdFx0ICovXG5cdFx0dGhpcy5fY29yZSA9IGNhcm91c2VsO1xuXG5cdFx0LyoqXG5cdFx0ICogUmVmcmVzaCBpbnRlcnZhbC5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge251bWJlcn1cblx0XHQgKi9cblx0XHR0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIGN1cnJlbnRseSB2aXNpYmxlIG9yIG5vdC5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge0Jvb2xlYW59XG5cdFx0ICovXG5cdFx0dGhpcy5fdmlzaWJsZSA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBBbGwgZXZlbnQgaGFuZGxlcnMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5faGFuZGxlcnMgPSB7XG5cdFx0XHQnaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9SZWZyZXNoKSB7XG5cdFx0XHRcdFx0dGhpcy53YXRjaCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKVxuXHRcdH07XG5cblx0XHQvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG5cdFx0dGhpcy5fY29yZS5vcHRpb25zID0gJC5leHRlbmQoe30sIEF1dG9SZWZyZXNoLkRlZmF1bHRzLCB0aGlzLl9jb3JlLm9wdGlvbnMpO1xuXG5cdFx0Ly8gcmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnNcblx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9uKHRoaXMuX2hhbmRsZXJzKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVmYXVsdCBvcHRpb25zLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRBdXRvUmVmcmVzaC5EZWZhdWx0cyA9IHtcblx0XHRhdXRvUmVmcmVzaDogdHJ1ZSxcblx0XHRhdXRvUmVmcmVzaEludGVydmFsOiA1MDBcblx0fTtcblxuXHQvKipcblx0ICogV2F0Y2hlcyB0aGUgZWxlbWVudC5cblx0ICovXG5cdEF1dG9SZWZyZXNoLnByb3RvdHlwZS53YXRjaCA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh0aGlzLl9pbnRlcnZhbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuX3Zpc2libGUgPSB0aGlzLl9jb3JlLiRlbGVtZW50LmlzKCc6dmlzaWJsZScpO1xuXHRcdHRoaXMuX2ludGVydmFsID0gd2luZG93LnNldEludGVydmFsKCQucHJveHkodGhpcy5yZWZyZXNoLCB0aGlzKSwgdGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvUmVmcmVzaEludGVydmFsKTtcblx0fTtcblxuXHQvKipcblx0ICogUmVmcmVzaGVzIHRoZSBlbGVtZW50LlxuXHQgKi9cblx0QXV0b1JlZnJlc2gucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcblx0XHRpZiAodGhpcy5fY29yZS4kZWxlbWVudC5pcygnOnZpc2libGUnKSA9PT0gdGhpcy5fdmlzaWJsZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuX3Zpc2libGUgPSAhdGhpcy5fdmlzaWJsZTtcblxuXHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQudG9nZ2xlQ2xhc3MoJ293bC1oaWRkZW4nLCAhdGhpcy5fdmlzaWJsZSk7XG5cblx0XHR0aGlzLl92aXNpYmxlICYmICh0aGlzLl9jb3JlLmludmFsaWRhdGUoJ3dpZHRoJykgJiYgdGhpcy5fY29yZS5yZWZyZXNoKCkpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZXN0cm95cyB0aGUgcGx1Z2luLlxuXHQgKi9cblx0QXV0b1JlZnJlc2gucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaGFuZGxlciwgcHJvcGVydHk7XG5cblx0XHR3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XG5cblx0XHRmb3IgKGhhbmRsZXIgaW4gdGhpcy5faGFuZGxlcnMpIHtcblx0XHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub2ZmKGhhbmRsZXIsIHRoaXMuX2hhbmRsZXJzW2hhbmRsZXJdKTtcblx0XHR9XG5cdFx0Zm9yIChwcm9wZXJ0eSBpbiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuXHRcdFx0dHlwZW9mIHRoaXNbcHJvcGVydHldICE9ICdmdW5jdGlvbicgJiYgKHRoaXNbcHJvcGVydHldID0gbnVsbCk7XG5cdFx0fVxuXHR9O1xuXG5cdCQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5BdXRvUmVmcmVzaCA9IEF1dG9SZWZyZXNoO1xuXG59KSh3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XG5cbi8qKlxuICogTGF6eSBQbHVnaW5cbiAqIEB2ZXJzaW9uIDIuMS4wXG4gKiBAYXV0aG9yIEJhcnRvc3ogV29qY2llY2hvd3NraVxuICogQGF1dGhvciBEYXZpZCBEZXV0c2NoXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuXHQvKipcblx0ICogQ3JlYXRlcyB0aGUgbGF6eSBwbHVnaW4uXG5cdCAqIEBjbGFzcyBUaGUgTGF6eSBQbHVnaW5cblx0ICogQHBhcmFtIHtPd2x9IGNhcm91c2VsIC0gVGhlIE93bCBDYXJvdXNlbFxuXHQgKi9cblx0dmFyIExhenkgPSBmdW5jdGlvbihjYXJvdXNlbCkge1xuXG5cdFx0LyoqXG5cdFx0ICogUmVmZXJlbmNlIHRvIHRoZSBjb3JlLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T3dsfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NvcmUgPSBjYXJvdXNlbDtcblxuXHRcdC8qKlxuXHRcdCAqIEFscmVhZHkgbG9hZGVkIGl0ZW1zLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7QXJyYXkuPGpRdWVyeT59XG5cdFx0ICovXG5cdFx0dGhpcy5fbG9hZGVkID0gW107XG5cblx0XHQvKipcblx0XHQgKiBFdmVudCBoYW5kbGVycy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLl9oYW5kbGVycyA9IHtcblx0XHRcdCdpbml0aWFsaXplZC5vd2wuY2Fyb3VzZWwgY2hhbmdlLm93bC5jYXJvdXNlbCByZXNpemVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoIWUubmFtZXNwYWNlKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCF0aGlzLl9jb3JlLnNldHRpbmdzIHx8ICF0aGlzLl9jb3JlLnNldHRpbmdzLmxhenlMb2FkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKChlLnByb3BlcnR5ICYmIGUucHJvcGVydHkubmFtZSA9PSAncG9zaXRpb24nKSB8fCBlLnR5cGUgPT0gJ2luaXRpYWxpemVkJykge1xuXHRcdFx0XHRcdHZhciBzZXR0aW5ncyA9IHRoaXMuX2NvcmUuc2V0dGluZ3MsXG5cdFx0XHRcdFx0XHRuID0gKHNldHRpbmdzLmNlbnRlciAmJiBNYXRoLmNlaWwoc2V0dGluZ3MuaXRlbXMgLyAyKSB8fCBzZXR0aW5ncy5pdGVtcyksXG5cdFx0XHRcdFx0XHRpID0gKChzZXR0aW5ncy5jZW50ZXIgJiYgbiAqIC0xKSB8fCAwKSxcblx0XHRcdFx0XHRcdHBvc2l0aW9uID0gKGUucHJvcGVydHkgJiYgZS5wcm9wZXJ0eS52YWx1ZSAhPT0gdW5kZWZpbmVkID8gZS5wcm9wZXJ0eS52YWx1ZSA6IHRoaXMuX2NvcmUuY3VycmVudCgpKSArIGksXG5cdFx0XHRcdFx0XHRjbG9uZXMgPSB0aGlzLl9jb3JlLmNsb25lcygpLmxlbmd0aCxcblx0XHRcdFx0XHRcdGxvYWQgPSAkLnByb3h5KGZ1bmN0aW9uKGksIHYpIHsgdGhpcy5sb2FkKHYpIH0sIHRoaXMpO1xuXG5cdFx0XHRcdFx0d2hpbGUgKGkrKyA8IG4pIHtcblx0XHRcdFx0XHRcdHRoaXMubG9hZChjbG9uZXMgLyAyICsgdGhpcy5fY29yZS5yZWxhdGl2ZShwb3NpdGlvbikpO1xuXHRcdFx0XHRcdFx0Y2xvbmVzICYmICQuZWFjaCh0aGlzLl9jb3JlLmNsb25lcyh0aGlzLl9jb3JlLnJlbGF0aXZlKHBvc2l0aW9uKSksIGxvYWQpO1xuXHRcdFx0XHRcdFx0cG9zaXRpb24rKztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpXG5cdFx0fTtcblxuXHRcdC8vIHNldCB0aGUgZGVmYXVsdCBvcHRpb25zXG5cdFx0dGhpcy5fY29yZS5vcHRpb25zID0gJC5leHRlbmQoe30sIExhenkuRGVmYXVsdHMsIHRoaXMuX2NvcmUub3B0aW9ucyk7XG5cblx0XHQvLyByZWdpc3RlciBldmVudCBoYW5kbGVyXG5cdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vbih0aGlzLl9oYW5kbGVycyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlZmF1bHQgb3B0aW9ucy5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0TGF6eS5EZWZhdWx0cyA9IHtcblx0XHRsYXp5TG9hZDogZmFsc2Vcblx0fTtcblxuXHQvKipcblx0ICogTG9hZHMgYWxsIHJlc291cmNlcyBvZiBhbiBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgcG9zaXRpb24uXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvbiAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgaXRlbS5cblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0TGF6eS5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cdFx0dmFyICRpdGVtID0gdGhpcy5fY29yZS4kc3RhZ2UuY2hpbGRyZW4oKS5lcShwb3NpdGlvbiksXG5cdFx0XHQkZWxlbWVudHMgPSAkaXRlbSAmJiAkaXRlbS5maW5kKCcub3dsLWxhenknKTtcblxuXHRcdGlmICghJGVsZW1lbnRzIHx8ICQuaW5BcnJheSgkaXRlbS5nZXQoMCksIHRoaXMuX2xvYWRlZCkgPiAtMSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdCRlbGVtZW50cy5lYWNoKCQucHJveHkoZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcblx0XHRcdHZhciAkZWxlbWVudCA9ICQoZWxlbWVudCksIGltYWdlLFxuXHRcdFx0XHR1cmwgPSAod2luZG93LmRldmljZVBpeGVsUmF0aW8gPiAxICYmICRlbGVtZW50LmF0dHIoJ2RhdGEtc3JjLXJldGluYScpKSB8fCAkZWxlbWVudC5hdHRyKCdkYXRhLXNyYycpO1xuXG5cdFx0XHR0aGlzLl9jb3JlLnRyaWdnZXIoJ2xvYWQnLCB7IGVsZW1lbnQ6ICRlbGVtZW50LCB1cmw6IHVybCB9LCAnbGF6eScpO1xuXG5cdFx0XHRpZiAoJGVsZW1lbnQuaXMoJ2ltZycpKSB7XG5cdFx0XHRcdCRlbGVtZW50Lm9uZSgnbG9hZC5vd2wubGF6eScsICQucHJveHkoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JGVsZW1lbnQuY3NzKCdvcGFjaXR5JywgMSk7XG5cdFx0XHRcdFx0dGhpcy5fY29yZS50cmlnZ2VyKCdsb2FkZWQnLCB7IGVsZW1lbnQ6ICRlbGVtZW50LCB1cmw6IHVybCB9LCAnbGF6eScpO1xuXHRcdFx0XHR9LCB0aGlzKSkuYXR0cignc3JjJywgdXJsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGltYWdlID0gbmV3IEltYWdlKCk7XG5cdFx0XHRcdGltYWdlLm9ubG9hZCA9ICQucHJveHkoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JGVsZW1lbnQuY3NzKHtcblx0XHRcdFx0XHRcdCdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgdXJsICsgJyknLFxuXHRcdFx0XHRcdFx0J29wYWNpdHknOiAnMSdcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0aGlzLl9jb3JlLnRyaWdnZXIoJ2xvYWRlZCcsIHsgZWxlbWVudDogJGVsZW1lbnQsIHVybDogdXJsIH0sICdsYXp5Jyk7XG5cdFx0XHRcdH0sIHRoaXMpO1xuXHRcdFx0XHRpbWFnZS5zcmMgPSB1cmw7XG5cdFx0XHR9XG5cdFx0fSwgdGhpcykpO1xuXG5cdFx0dGhpcy5fbG9hZGVkLnB1c2goJGl0ZW0uZ2V0KDApKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVzdHJveXMgdGhlIHBsdWdpbi5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0TGF6eS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBoYW5kbGVyLCBwcm9wZXJ0eTtcblxuXHRcdGZvciAoaGFuZGxlciBpbiB0aGlzLmhhbmRsZXJzKSB7XG5cdFx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9mZihoYW5kbGVyLCB0aGlzLmhhbmRsZXJzW2hhbmRsZXJdKTtcblx0XHR9XG5cdFx0Zm9yIChwcm9wZXJ0eSBpbiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuXHRcdFx0dHlwZW9mIHRoaXNbcHJvcGVydHldICE9ICdmdW5jdGlvbicgJiYgKHRoaXNbcHJvcGVydHldID0gbnVsbCk7XG5cdFx0fVxuXHR9O1xuXG5cdCQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5MYXp5ID0gTGF6eTtcblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vKipcbiAqIEF1dG9IZWlnaHQgUGx1Z2luXG4gKiBAdmVyc2lvbiAyLjEuMFxuICogQGF1dGhvciBCYXJ0b3N6IFdvamNpZWNob3dza2lcbiAqIEBhdXRob3IgRGF2aWQgRGV1dHNjaFxuICogQGxpY2Vuc2UgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKi9cbjsoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgdGhlIGF1dG8gaGVpZ2h0IHBsdWdpbi5cblx0ICogQGNsYXNzIFRoZSBBdXRvIEhlaWdodCBQbHVnaW5cblx0ICogQHBhcmFtIHtPd2x9IGNhcm91c2VsIC0gVGhlIE93bCBDYXJvdXNlbFxuXHQgKi9cblx0dmFyIEF1dG9IZWlnaHQgPSBmdW5jdGlvbihjYXJvdXNlbCkge1xuXHRcdC8qKlxuXHRcdCAqIFJlZmVyZW5jZSB0byB0aGUgY29yZS5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge093bH1cblx0XHQgKi9cblx0XHR0aGlzLl9jb3JlID0gY2Fyb3VzZWw7XG5cblx0XHQvKipcblx0XHQgKiBBbGwgZXZlbnQgaGFuZGxlcnMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5faGFuZGxlcnMgPSB7XG5cdFx0XHQnaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsIHJlZnJlc2hlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b0hlaWdodCkge1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J2NoYW5nZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9IZWlnaHQgJiYgZS5wcm9wZXJ0eS5uYW1lID09ICdwb3NpdGlvbicpe1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J2xvYWRlZC5vd2wubGF6eSc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvSGVpZ2h0XG5cdFx0XHRcdFx0JiYgZS5lbGVtZW50LmNsb3Nlc3QoJy4nICsgdGhpcy5fY29yZS5zZXR0aW5ncy5pdGVtQ2xhc3MpLmluZGV4KCkgPT09IHRoaXMuX2NvcmUuY3VycmVudCgpKSB7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcylcblx0XHR9O1xuXG5cdFx0Ly8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuXHRcdHRoaXMuX2NvcmUub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBBdXRvSGVpZ2h0LkRlZmF1bHRzLCB0aGlzLl9jb3JlLm9wdGlvbnMpO1xuXG5cdFx0Ly8gcmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnNcblx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9uKHRoaXMuX2hhbmRsZXJzKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVmYXVsdCBvcHRpb25zLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRBdXRvSGVpZ2h0LkRlZmF1bHRzID0ge1xuXHRcdGF1dG9IZWlnaHQ6IGZhbHNlLFxuXHRcdGF1dG9IZWlnaHRDbGFzczogJ293bC1oZWlnaHQnXG5cdH07XG5cblx0LyoqXG5cdCAqIFVwZGF0ZXMgdGhlIHZpZXcuXG5cdCAqL1xuXHRBdXRvSGVpZ2h0LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgc3RhcnQgPSB0aGlzLl9jb3JlLl9jdXJyZW50LFxuXHRcdFx0ZW5kID0gc3RhcnQgKyB0aGlzLl9jb3JlLnNldHRpbmdzLml0ZW1zLFxuXHRcdFx0dmlzaWJsZSA9IHRoaXMuX2NvcmUuJHN0YWdlLmNoaWxkcmVuKCkudG9BcnJheSgpLnNsaWNlKHN0YXJ0LCBlbmQpLFxuXHRcdFx0aGVpZ2h0cyA9IFtdLFxuXHRcdFx0bWF4aGVpZ2h0ID0gMDtcblxuXHRcdCQuZWFjaCh2aXNpYmxlLCBmdW5jdGlvbihpbmRleCwgaXRlbSkge1xuXHRcdFx0aGVpZ2h0cy5wdXNoKCQoaXRlbSkuaGVpZ2h0KCkpO1xuXHRcdH0pO1xuXG5cdFx0bWF4aGVpZ2h0ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaGVpZ2h0cyk7XG5cblx0XHR0aGlzLl9jb3JlLiRzdGFnZS5wYXJlbnQoKVxuXHRcdFx0LmhlaWdodChtYXhoZWlnaHQpXG5cdFx0XHQuYWRkQ2xhc3ModGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvSGVpZ2h0Q2xhc3MpO1xuXHR9O1xuXG5cdEF1dG9IZWlnaHQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaGFuZGxlciwgcHJvcGVydHk7XG5cblx0XHRmb3IgKGhhbmRsZXIgaW4gdGhpcy5faGFuZGxlcnMpIHtcblx0XHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub2ZmKGhhbmRsZXIsIHRoaXMuX2hhbmRsZXJzW2hhbmRsZXJdKTtcblx0XHR9XG5cdFx0Zm9yIChwcm9wZXJ0eSBpbiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuXHRcdFx0dHlwZW9mIHRoaXNbcHJvcGVydHldICE9ICdmdW5jdGlvbicgJiYgKHRoaXNbcHJvcGVydHldID0gbnVsbCk7XG5cdFx0fVxuXHR9O1xuXG5cdCQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5BdXRvSGVpZ2h0ID0gQXV0b0hlaWdodDtcblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vKipcbiAqIFZpZGVvIFBsdWdpblxuICogQHZlcnNpb24gMi4xLjBcbiAqIEBhdXRob3IgQmFydG9zeiBXb2pjaWVjaG93c2tpXG4gKiBAYXV0aG9yIERhdmlkIERldXRzY2hcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSB2aWRlbyBwbHVnaW4uXG5cdCAqIEBjbGFzcyBUaGUgVmlkZW8gUGx1Z2luXG5cdCAqIEBwYXJhbSB7T3dsfSBjYXJvdXNlbCAtIFRoZSBPd2wgQ2Fyb3VzZWxcblx0ICovXG5cdHZhciBWaWRlbyA9IGZ1bmN0aW9uKGNhcm91c2VsKSB7XG5cdFx0LyoqXG5cdFx0ICogUmVmZXJlbmNlIHRvIHRoZSBjb3JlLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T3dsfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NvcmUgPSBjYXJvdXNlbDtcblxuXHRcdC8qKlxuXHRcdCAqIENhY2hlIGFsbCB2aWRlbyBVUkxzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX3ZpZGVvcyA9IHt9O1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBwbGF5aW5nIGl0ZW0uXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtqUXVlcnl9XG5cdFx0ICovXG5cdFx0dGhpcy5fcGxheWluZyA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBBbGwgZXZlbnQgaGFuZGxlcnMuXG5cdFx0ICogQHRvZG8gVGhlIGNsb25lZCBjb250ZW50IHJlbW92YWxlIGlzIHRvbyBsYXRlXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5faGFuZGxlcnMgPSB7XG5cdFx0XHQnaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSkge1xuXHRcdFx0XHRcdHRoaXMuX2NvcmUucmVnaXN0ZXIoeyB0eXBlOiAnc3RhdGUnLCBuYW1lOiAncGxheWluZycsIHRhZ3M6IFsgJ2ludGVyYWN0aW5nJyBdIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdyZXNpemUub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLnZpZGVvICYmIHRoaXMuaXNJbkZ1bGxTY3JlZW4oKSkge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQncmVmcmVzaGVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5fY29yZS5pcygncmVzaXppbmcnKSkge1xuXHRcdFx0XHRcdHRoaXMuX2NvcmUuJHN0YWdlLmZpbmQoJy5jbG9uZWQgLm93bC12aWRlby1mcmFtZScpLnJlbW92ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdjaGFuZ2VkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgZS5wcm9wZXJ0eS5uYW1lID09PSAncG9zaXRpb24nICYmIHRoaXMuX3BsYXlpbmcpIHtcblx0XHRcdFx0XHR0aGlzLnN0b3AoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQncHJlcGFyZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmICghZS5uYW1lc3BhY2UpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgJGVsZW1lbnQgPSAkKGUuY29udGVudCkuZmluZCgnLm93bC12aWRlbycpO1xuXG5cdFx0XHRcdGlmICgkZWxlbWVudC5sZW5ndGgpIHtcblx0XHRcdFx0XHQkZWxlbWVudC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdFx0XHRcdHRoaXMuZmV0Y2goJGVsZW1lbnQsICQoZS5jb250ZW50KSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpXG5cdFx0fTtcblxuXHRcdC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcblx0XHR0aGlzLl9jb3JlLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgVmlkZW8uRGVmYXVsdHMsIHRoaXMuX2NvcmUub3B0aW9ucyk7XG5cblx0XHQvLyByZWdpc3RlciBldmVudCBoYW5kbGVyc1xuXHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub24odGhpcy5faGFuZGxlcnMpO1xuXG5cdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vbignY2xpY2sub3dsLnZpZGVvJywgJy5vd2wtdmlkZW8tcGxheS1pY29uJywgJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHR0aGlzLnBsYXkoZSk7XG5cdFx0fSwgdGhpcykpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZWZhdWx0IG9wdGlvbnMuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdFZpZGVvLkRlZmF1bHRzID0ge1xuXHRcdHZpZGVvOiBmYWxzZSxcblx0XHR2aWRlb0hlaWdodDogZmFsc2UsXG5cdFx0dmlkZW9XaWR0aDogZmFsc2Vcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyB0aGUgdmlkZW8gSUQgYW5kIHRoZSB0eXBlIChZb3VUdWJlL1ZpbWVvL3Z6YWFyIG9ubHkpLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7alF1ZXJ5fSB0YXJnZXQgLSBUaGUgdGFyZ2V0IGNvbnRhaW5pbmcgdGhlIHZpZGVvIGRhdGEuXG5cdCAqIEBwYXJhbSB7alF1ZXJ5fSBpdGVtIC0gVGhlIGl0ZW0gY29udGFpbmluZyB0aGUgdmlkZW8uXG5cdCAqL1xuXHRWaWRlby5wcm90b3R5cGUuZmV0Y2ggPSBmdW5jdGlvbih0YXJnZXQsIGl0ZW0pIHtcblx0XHRcdHZhciB0eXBlID0gKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICh0YXJnZXQuYXR0cignZGF0YS12aW1lby1pZCcpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJ3ZpbWVvJztcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRhcmdldC5hdHRyKCdkYXRhLXZ6YWFyLWlkJykpIHtcblx0XHRcdFx0XHRcdHJldHVybiAndnphYXInXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiAneW91dHViZSc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSgpLFxuXHRcdFx0XHRpZCA9IHRhcmdldC5hdHRyKCdkYXRhLXZpbWVvLWlkJykgfHwgdGFyZ2V0LmF0dHIoJ2RhdGEteW91dHViZS1pZCcpIHx8IHRhcmdldC5hdHRyKCdkYXRhLXZ6YWFyLWlkJyksXG5cdFx0XHRcdHdpZHRoID0gdGFyZ2V0LmF0dHIoJ2RhdGEtd2lkdGgnKSB8fCB0aGlzLl9jb3JlLnNldHRpbmdzLnZpZGVvV2lkdGgsXG5cdFx0XHRcdGhlaWdodCA9IHRhcmdldC5hdHRyKCdkYXRhLWhlaWdodCcpIHx8IHRoaXMuX2NvcmUuc2V0dGluZ3MudmlkZW9IZWlnaHQsXG5cdFx0XHRcdHVybCA9IHRhcmdldC5hdHRyKCdocmVmJyk7XG5cblx0XHRpZiAodXJsKSB7XG5cblx0XHRcdC8qXG5cdFx0XHRcdFx0UGFyc2VzIHRoZSBpZCdzIG91dCBvZiB0aGUgZm9sbG93aW5nIHVybHMgKGFuZCBwcm9iYWJseSBtb3JlKTpcblx0XHRcdFx0XHRodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTppZFxuXHRcdFx0XHRcdGh0dHBzOi8veW91dHUuYmUvOmlkXG5cdFx0XHRcdFx0aHR0cHM6Ly92aW1lby5jb20vOmlkXG5cdFx0XHRcdFx0aHR0cHM6Ly92aW1lby5jb20vY2hhbm5lbHMvOmNoYW5uZWwvOmlkXG5cdFx0XHRcdFx0aHR0cHM6Ly92aW1lby5jb20vZ3JvdXBzLzpncm91cC92aWRlb3MvOmlkXG5cdFx0XHRcdFx0aHR0cHM6Ly9hcHAudnphYXIuY29tL3ZpZGVvcy86aWRcblxuXHRcdFx0XHRcdFZpc3VhbCBleGFtcGxlOiBodHRwczovL3JlZ2V4cGVyLmNvbS8jKGh0dHAlM0ElN0NodHRwcyUzQSU3QyklNUMlMkYlNUMlMkYocGxheWVyLiU3Q3d3dy4lN0NhcHAuKSUzRih2aW1lbyU1Qy5jb20lN0N5b3V0dShiZSU1Qy5jb20lN0MlNUMuYmUlN0NiZSU1Qy5nb29nbGVhcGlzJTVDLmNvbSklN0N2emFhciU1Qy5jb20pJTVDJTJGKHZpZGVvJTVDJTJGJTdDdmlkZW9zJTVDJTJGJTdDZW1iZWQlNUMlMkYlN0NjaGFubmVscyU1QyUyRi4lMkIlNUMlMkYlN0Nncm91cHMlNUMlMkYuJTJCJTVDJTJGJTdDd2F0Y2glNUMlM0Z2JTNEJTdDdiU1QyUyRiklM0YoJTVCQS1aYS16MC05Ll8lMjUtJTVEKikoJTVDJTI2JTVDUyUyQiklM0Zcblx0XHRcdCovXG5cblx0XHRcdGlkID0gdXJsLm1hdGNoKC8oaHR0cDp8aHR0cHM6fClcXC9cXC8ocGxheWVyLnx3d3cufGFwcC4pPyh2aW1lb1xcLmNvbXx5b3V0dShiZVxcLmNvbXxcXC5iZXxiZVxcLmdvb2dsZWFwaXNcXC5jb20pfHZ6YWFyXFwuY29tKVxcLyh2aWRlb1xcL3x2aWRlb3NcXC98ZW1iZWRcXC98Y2hhbm5lbHNcXC8uK1xcL3xncm91cHNcXC8uK1xcL3x3YXRjaFxcP3Y9fHZcXC8pPyhbQS1aYS16MC05Ll8lLV0qKShcXCZcXFMrKT8vKTtcblxuXHRcdFx0aWYgKGlkWzNdLmluZGV4T2YoJ3lvdXR1JykgPiAtMSkge1xuXHRcdFx0XHR0eXBlID0gJ3lvdXR1YmUnO1xuXHRcdFx0fSBlbHNlIGlmIChpZFszXS5pbmRleE9mKCd2aW1lbycpID4gLTEpIHtcblx0XHRcdFx0dHlwZSA9ICd2aW1lbyc7XG5cdFx0XHR9IGVsc2UgaWYgKGlkWzNdLmluZGV4T2YoJ3Z6YWFyJykgPiAtMSkge1xuXHRcdFx0XHR0eXBlID0gJ3Z6YWFyJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVmlkZW8gVVJMIG5vdCBzdXBwb3J0ZWQuJyk7XG5cdFx0XHR9XG5cdFx0XHRpZCA9IGlkWzZdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgdmlkZW8gVVJMLicpO1xuXHRcdH1cblxuXHRcdHRoaXMuX3ZpZGVvc1t1cmxdID0ge1xuXHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdGlkOiBpZCxcblx0XHRcdHdpZHRoOiB3aWR0aCxcblx0XHRcdGhlaWdodDogaGVpZ2h0XG5cdFx0fTtcblxuXHRcdGl0ZW0uYXR0cignZGF0YS12aWRlbycsIHVybCk7XG5cblx0XHR0aGlzLnRodW1ibmFpbCh0YXJnZXQsIHRoaXMuX3ZpZGVvc1t1cmxdKTtcblx0fTtcblxuXHQvKipcblx0ICogQ3JlYXRlcyB2aWRlbyB0aHVtYm5haWwuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtqUXVlcnl9IHRhcmdldCAtIFRoZSB0YXJnZXQgY29udGFpbmluZyB0aGUgdmlkZW8gZGF0YS5cblx0ICogQHBhcmFtIHtPYmplY3R9IGluZm8gLSBUaGUgdmlkZW8gaW5mbyBvYmplY3QuXG5cdCAqIEBzZWUgYGZldGNoYFxuXHQgKi9cblx0VmlkZW8ucHJvdG90eXBlLnRodW1ibmFpbCA9IGZ1bmN0aW9uKHRhcmdldCwgdmlkZW8pIHtcblx0XHR2YXIgdG5MaW5rLFxuXHRcdFx0aWNvbixcblx0XHRcdHBhdGgsXG5cdFx0XHRkaW1lbnNpb25zID0gdmlkZW8ud2lkdGggJiYgdmlkZW8uaGVpZ2h0ID8gJ3N0eWxlPVwid2lkdGg6JyArIHZpZGVvLndpZHRoICsgJ3B4O2hlaWdodDonICsgdmlkZW8uaGVpZ2h0ICsgJ3B4O1wiJyA6ICcnLFxuXHRcdFx0Y3VzdG9tVG4gPSB0YXJnZXQuZmluZCgnaW1nJyksXG5cdFx0XHRzcmNUeXBlID0gJ3NyYycsXG5cdFx0XHRsYXp5Q2xhc3MgPSAnJyxcblx0XHRcdHNldHRpbmdzID0gdGhpcy5fY29yZS5zZXR0aW5ncyxcblx0XHRcdGNyZWF0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcblx0XHRcdFx0aWNvbiA9ICc8ZGl2IGNsYXNzPVwib3dsLXZpZGVvLXBsYXktaWNvblwiPjwvZGl2Pic7XG5cblx0XHRcdFx0aWYgKHNldHRpbmdzLmxhenlMb2FkKSB7XG5cdFx0XHRcdFx0dG5MaW5rID0gJzxkaXYgY2xhc3M9XCJvd2wtdmlkZW8tdG4gJyArIGxhenlDbGFzcyArICdcIiAnICsgc3JjVHlwZSArICc9XCInICsgcGF0aCArICdcIj48L2Rpdj4nO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRuTGluayA9ICc8ZGl2IGNsYXNzPVwib3dsLXZpZGVvLXRuXCIgc3R5bGU9XCJvcGFjaXR5OjE7YmFja2dyb3VuZC1pbWFnZTp1cmwoJyArIHBhdGggKyAnKVwiPjwvZGl2Pic7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGFyZ2V0LmFmdGVyKHRuTGluayk7XG5cdFx0XHRcdHRhcmdldC5hZnRlcihpY29uKTtcblx0XHRcdH07XG5cblx0XHQvLyB3cmFwIHZpZGVvIGNvbnRlbnQgaW50byBvd2wtdmlkZW8td3JhcHBlciBkaXZcblx0XHR0YXJnZXQud3JhcCgnPGRpdiBjbGFzcz1cIm93bC12aWRlby13cmFwcGVyXCInICsgZGltZW5zaW9ucyArICc+PC9kaXY+Jyk7XG5cblx0XHRpZiAodGhpcy5fY29yZS5zZXR0aW5ncy5sYXp5TG9hZCkge1xuXHRcdFx0c3JjVHlwZSA9ICdkYXRhLXNyYyc7XG5cdFx0XHRsYXp5Q2xhc3MgPSAnb3dsLWxhenknO1xuXHRcdH1cblxuXHRcdC8vIGN1c3RvbSB0aHVtYm5haWxcblx0XHRpZiAoY3VzdG9tVG4ubGVuZ3RoKSB7XG5cdFx0XHRjcmVhdGUoY3VzdG9tVG4uYXR0cihzcmNUeXBlKSk7XG5cdFx0XHRjdXN0b21Ubi5yZW1vdmUoKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAodmlkZW8udHlwZSA9PT0gJ3lvdXR1YmUnKSB7XG5cdFx0XHRwYXRoID0gXCIvL2ltZy55b3V0dWJlLmNvbS92aS9cIiArIHZpZGVvLmlkICsgXCIvaHFkZWZhdWx0LmpwZ1wiO1xuXHRcdFx0Y3JlYXRlKHBhdGgpO1xuXHRcdH0gZWxzZSBpZiAodmlkZW8udHlwZSA9PT0gJ3ZpbWVvJykge1xuXHRcdFx0JC5hamF4KHtcblx0XHRcdFx0dHlwZTogJ0dFVCcsXG5cdFx0XHRcdHVybDogJy8vdmltZW8uY29tL2FwaS92Mi92aWRlby8nICsgdmlkZW8uaWQgKyAnLmpzb24nLFxuXHRcdFx0XHRqc29ucDogJ2NhbGxiYWNrJyxcblx0XHRcdFx0ZGF0YVR5cGU6ICdqc29ucCcsXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdFx0XHRwYXRoID0gZGF0YVswXS50aHVtYm5haWxfbGFyZ2U7XG5cdFx0XHRcdFx0Y3JlYXRlKHBhdGgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYgKHZpZGVvLnR5cGUgPT09ICd2emFhcicpIHtcblx0XHRcdCQuYWpheCh7XG5cdFx0XHRcdHR5cGU6ICdHRVQnLFxuXHRcdFx0XHR1cmw6ICcvL3Z6YWFyLmNvbS9hcGkvdmlkZW9zLycgKyB2aWRlby5pZCArICcuanNvbicsXG5cdFx0XHRcdGpzb25wOiAnY2FsbGJhY2snLFxuXHRcdFx0XHRkYXRhVHlwZTogJ2pzb25wJyxcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0XHRcdHBhdGggPSBkYXRhLmZyYW1lZ3JhYl91cmw7XG5cdFx0XHRcdFx0Y3JlYXRlKHBhdGgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFN0b3BzIHRoZSBjdXJyZW50IHZpZGVvLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRWaWRlby5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuX2NvcmUudHJpZ2dlcignc3RvcCcsIG51bGwsICd2aWRlbycpO1xuXHRcdHRoaXMuX3BsYXlpbmcuZmluZCgnLm93bC12aWRlby1mcmFtZScpLnJlbW92ZSgpO1xuXHRcdHRoaXMuX3BsYXlpbmcucmVtb3ZlQ2xhc3MoJ293bC12aWRlby1wbGF5aW5nJyk7XG5cdFx0dGhpcy5fcGxheWluZyA9IG51bGw7XG5cdFx0dGhpcy5fY29yZS5sZWF2ZSgncGxheWluZycpO1xuXHRcdHRoaXMuX2NvcmUudHJpZ2dlcignc3RvcHBlZCcsIG51bGwsICd2aWRlbycpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTdGFydHMgdGhlIGN1cnJlbnQgdmlkZW8uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBUaGUgZXZlbnQgYXJndW1lbnRzLlxuXHQgKi9cblx0VmlkZW8ucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCksXG5cdFx0XHRpdGVtID0gdGFyZ2V0LmNsb3Nlc3QoJy4nICsgdGhpcy5fY29yZS5zZXR0aW5ncy5pdGVtQ2xhc3MpLFxuXHRcdFx0dmlkZW8gPSB0aGlzLl92aWRlb3NbaXRlbS5hdHRyKCdkYXRhLXZpZGVvJyldLFxuXHRcdFx0d2lkdGggPSB2aWRlby53aWR0aCB8fCAnMTAwJScsXG5cdFx0XHRoZWlnaHQgPSB2aWRlby5oZWlnaHQgfHwgdGhpcy5fY29yZS4kc3RhZ2UuaGVpZ2h0KCksXG5cdFx0XHRodG1sO1xuXG5cdFx0aWYgKHRoaXMuX3BsYXlpbmcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLl9jb3JlLmVudGVyKCdwbGF5aW5nJyk7XG5cdFx0dGhpcy5fY29yZS50cmlnZ2VyKCdwbGF5JywgbnVsbCwgJ3ZpZGVvJyk7XG5cblx0XHRpdGVtID0gdGhpcy5fY29yZS5pdGVtcyh0aGlzLl9jb3JlLnJlbGF0aXZlKGl0ZW0uaW5kZXgoKSkpO1xuXG5cdFx0dGhpcy5fY29yZS5yZXNldChpdGVtLmluZGV4KCkpO1xuXG5cdFx0aWYgKHZpZGVvLnR5cGUgPT09ICd5b3V0dWJlJykge1xuXHRcdFx0aHRtbCA9ICc8aWZyYW1lIHdpZHRoPVwiJyArIHdpZHRoICsgJ1wiIGhlaWdodD1cIicgKyBoZWlnaHQgKyAnXCIgc3JjPVwiLy93d3cueW91dHViZS5jb20vZW1iZWQvJyArXG5cdFx0XHRcdHZpZGVvLmlkICsgJz9hdXRvcGxheT0xJnY9JyArIHZpZGVvLmlkICsgJ1wiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nO1xuXHRcdH0gZWxzZSBpZiAodmlkZW8udHlwZSA9PT0gJ3ZpbWVvJykge1xuXHRcdFx0aHRtbCA9ICc8aWZyYW1lIHNyYz1cIi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8nICsgdmlkZW8uaWQgK1xuXHRcdFx0XHQnP2F1dG9wbGF5PTFcIiB3aWR0aD1cIicgKyB3aWR0aCArICdcIiBoZWlnaHQ9XCInICsgaGVpZ2h0ICtcblx0XHRcdFx0J1wiIGZyYW1lYm9yZGVyPVwiMFwiIHdlYmtpdGFsbG93ZnVsbHNjcmVlbiBtb3phbGxvd2Z1bGxzY3JlZW4gYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPic7XG5cdFx0fSBlbHNlIGlmICh2aWRlby50eXBlID09PSAndnphYXInKSB7XG5cdFx0XHRodG1sID0gJzxpZnJhbWUgZnJhbWVib3JkZXI9XCIwXCInICsgJ2hlaWdodD1cIicgKyBoZWlnaHQgKyAnXCInICsgJ3dpZHRoPVwiJyArIHdpZHRoICtcblx0XHRcdFx0J1wiIGFsbG93ZnVsbHNjcmVlbiBtb3phbGxvd2Z1bGxzY3JlZW4gd2Via2l0QWxsb3dGdWxsU2NyZWVuICcgK1xuXHRcdFx0XHQnc3JjPVwiLy92aWV3LnZ6YWFyLmNvbS8nICsgdmlkZW8uaWQgKyAnL3BsYXllcj9hdXRvcGxheT10cnVlXCI+PC9pZnJhbWU+Jztcblx0XHR9XG5cblx0XHQkKCc8ZGl2IGNsYXNzPVwib3dsLXZpZGVvLWZyYW1lXCI+JyArIGh0bWwgKyAnPC9kaXY+JykuaW5zZXJ0QWZ0ZXIoaXRlbS5maW5kKCcub3dsLXZpZGVvJykpO1xuXG5cdFx0dGhpcy5fcGxheWluZyA9IGl0ZW0uYWRkQ2xhc3MoJ293bC12aWRlby1wbGF5aW5nJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIENoZWNrcyB3aGV0aGVyIGFuIHZpZGVvIGlzIGN1cnJlbnRseSBpbiBmdWxsIHNjcmVlbiBtb2RlIG9yIG5vdC5cblx0ICogQHRvZG8gQmFkIHN0eWxlIGJlY2F1c2UgbG9va3MgbGlrZSBhIHJlYWRvbmx5IG1ldGhvZCBidXQgY2hhbmdlcyBtZW1iZXJzLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEByZXR1cm5zIHtCb29sZWFufVxuXHQgKi9cblx0VmlkZW8ucHJvdG90eXBlLmlzSW5GdWxsU2NyZWVuID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCB8fCBkb2N1bWVudC5tb3pGdWxsU2NyZWVuRWxlbWVudCB8fFxuXHRcdFx0XHRkb2N1bWVudC53ZWJraXRGdWxsc2NyZWVuRWxlbWVudDtcblxuXHRcdHJldHVybiBlbGVtZW50ICYmICQoZWxlbWVudCkucGFyZW50KCkuaGFzQ2xhc3MoJ293bC12aWRlby1mcmFtZScpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZXN0cm95cyB0aGUgcGx1Z2luLlxuXHQgKi9cblx0VmlkZW8ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaGFuZGxlciwgcHJvcGVydHk7XG5cblx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9mZignY2xpY2sub3dsLnZpZGVvJyk7XG5cblx0XHRmb3IgKGhhbmRsZXIgaW4gdGhpcy5faGFuZGxlcnMpIHtcblx0XHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub2ZmKGhhbmRsZXIsIHRoaXMuX2hhbmRsZXJzW2hhbmRsZXJdKTtcblx0XHR9XG5cdFx0Zm9yIChwcm9wZXJ0eSBpbiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuXHRcdFx0dHlwZW9mIHRoaXNbcHJvcGVydHldICE9ICdmdW5jdGlvbicgJiYgKHRoaXNbcHJvcGVydHldID0gbnVsbCk7XG5cdFx0fVxuXHR9O1xuXG5cdCQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5WaWRlbyA9IFZpZGVvO1xuXG59KSh3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XG5cbi8qKlxuICogQW5pbWF0ZSBQbHVnaW5cbiAqIEB2ZXJzaW9uIDIuMS4wXG4gKiBAYXV0aG9yIEJhcnRvc3ogV29qY2llY2hvd3NraVxuICogQGF1dGhvciBEYXZpZCBEZXV0c2NoXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuXHQvKipcblx0ICogQ3JlYXRlcyB0aGUgYW5pbWF0ZSBwbHVnaW4uXG5cdCAqIEBjbGFzcyBUaGUgTmF2aWdhdGlvbiBQbHVnaW5cblx0ICogQHBhcmFtIHtPd2x9IHNjb3BlIC0gVGhlIE93bCBDYXJvdXNlbFxuXHQgKi9cblx0dmFyIEFuaW1hdGUgPSBmdW5jdGlvbihzY29wZSkge1xuXHRcdHRoaXMuY29yZSA9IHNjb3BlO1xuXHRcdHRoaXMuY29yZS5vcHRpb25zID0gJC5leHRlbmQoe30sIEFuaW1hdGUuRGVmYXVsdHMsIHRoaXMuY29yZS5vcHRpb25zKTtcblx0XHR0aGlzLnN3YXBwaW5nID0gdHJ1ZTtcblx0XHR0aGlzLnByZXZpb3VzID0gdW5kZWZpbmVkO1xuXHRcdHRoaXMubmV4dCA9IHVuZGVmaW5lZDtcblxuXHRcdHRoaXMuaGFuZGxlcnMgPSB7XG5cdFx0XHQnY2hhbmdlLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgZS5wcm9wZXJ0eS5uYW1lID09ICdwb3NpdGlvbicpIHtcblx0XHRcdFx0XHR0aGlzLnByZXZpb3VzID0gdGhpcy5jb3JlLmN1cnJlbnQoKTtcblx0XHRcdFx0XHR0aGlzLm5leHQgPSBlLnByb3BlcnR5LnZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdkcmFnLm93bC5jYXJvdXNlbCBkcmFnZ2VkLm93bC5jYXJvdXNlbCB0cmFuc2xhdGVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UpIHtcblx0XHRcdFx0XHR0aGlzLnN3YXBwaW5nID0gZS50eXBlID09ICd0cmFuc2xhdGVkJztcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQndHJhbnNsYXRlLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5zd2FwcGluZyAmJiAodGhpcy5jb3JlLm9wdGlvbnMuYW5pbWF0ZU91dCB8fCB0aGlzLmNvcmUub3B0aW9ucy5hbmltYXRlSW4pKSB7XG5cdFx0XHRcdFx0dGhpcy5zd2FwKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpXG5cdFx0fTtcblxuXHRcdHRoaXMuY29yZS4kZWxlbWVudC5vbih0aGlzLmhhbmRsZXJzKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVmYXVsdCBvcHRpb25zLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRBbmltYXRlLkRlZmF1bHRzID0ge1xuXHRcdGFuaW1hdGVPdXQ6IGZhbHNlLFxuXHRcdGFuaW1hdGVJbjogZmFsc2Vcblx0fTtcblxuXHQvKipcblx0ICogVG9nZ2xlcyB0aGUgYW5pbWF0aW9uIGNsYXNzZXMgd2hlbmV2ZXIgYW4gdHJhbnNsYXRpb25zIHN0YXJ0cy5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcmV0dXJucyB7Qm9vbGVhbnx1bmRlZmluZWR9XG5cdCAqL1xuXHRBbmltYXRlLnByb3RvdHlwZS5zd2FwID0gZnVuY3Rpb24oKSB7XG5cblx0XHRpZiAodGhpcy5jb3JlLnNldHRpbmdzLml0ZW1zICE9PSAxKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCEkLnN1cHBvcnQuYW5pbWF0aW9uIHx8ICEkLnN1cHBvcnQudHJhbnNpdGlvbikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuY29yZS5zcGVlZCgwKTtcblxuXHRcdHZhciBsZWZ0LFxuXHRcdFx0Y2xlYXIgPSAkLnByb3h5KHRoaXMuY2xlYXIsIHRoaXMpLFxuXHRcdFx0cHJldmlvdXMgPSB0aGlzLmNvcmUuJHN0YWdlLmNoaWxkcmVuKCkuZXEodGhpcy5wcmV2aW91cyksXG5cdFx0XHRuZXh0ID0gdGhpcy5jb3JlLiRzdGFnZS5jaGlsZHJlbigpLmVxKHRoaXMubmV4dCksXG5cdFx0XHRpbmNvbWluZyA9IHRoaXMuY29yZS5zZXR0aW5ncy5hbmltYXRlSW4sXG5cdFx0XHRvdXRnb2luZyA9IHRoaXMuY29yZS5zZXR0aW5ncy5hbmltYXRlT3V0O1xuXG5cdFx0aWYgKHRoaXMuY29yZS5jdXJyZW50KCkgPT09IHRoaXMucHJldmlvdXMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAob3V0Z29pbmcpIHtcblx0XHRcdGxlZnQgPSB0aGlzLmNvcmUuY29vcmRpbmF0ZXModGhpcy5wcmV2aW91cykgLSB0aGlzLmNvcmUuY29vcmRpbmF0ZXModGhpcy5uZXh0KTtcblx0XHRcdHByZXZpb3VzLm9uZSgkLnN1cHBvcnQuYW5pbWF0aW9uLmVuZCwgY2xlYXIpXG5cdFx0XHRcdC5jc3MoIHsgJ2xlZnQnOiBsZWZ0ICsgJ3B4JyB9IClcblx0XHRcdFx0LmFkZENsYXNzKCdhbmltYXRlZCBvd2wtYW5pbWF0ZWQtb3V0Jylcblx0XHRcdFx0LmFkZENsYXNzKG91dGdvaW5nKTtcblx0XHR9XG5cblx0XHRpZiAoaW5jb21pbmcpIHtcblx0XHRcdG5leHQub25lKCQuc3VwcG9ydC5hbmltYXRpb24uZW5kLCBjbGVhcilcblx0XHRcdFx0LmFkZENsYXNzKCdhbmltYXRlZCBvd2wtYW5pbWF0ZWQtaW4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoaW5jb21pbmcpO1xuXHRcdH1cblx0fTtcblxuXHRBbmltYXRlLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKGUpIHtcblx0XHQkKGUudGFyZ2V0KS5jc3MoIHsgJ2xlZnQnOiAnJyB9IClcblx0XHRcdC5yZW1vdmVDbGFzcygnYW5pbWF0ZWQgb3dsLWFuaW1hdGVkLW91dCBvd2wtYW5pbWF0ZWQtaW4nKVxuXHRcdFx0LnJlbW92ZUNsYXNzKHRoaXMuY29yZS5zZXR0aW5ncy5hbmltYXRlSW4pXG5cdFx0XHQucmVtb3ZlQ2xhc3ModGhpcy5jb3JlLnNldHRpbmdzLmFuaW1hdGVPdXQpO1xuXHRcdHRoaXMuY29yZS5vblRyYW5zaXRpb25FbmQoKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVzdHJveXMgdGhlIHBsdWdpbi5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0QW5pbWF0ZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBoYW5kbGVyLCBwcm9wZXJ0eTtcblxuXHRcdGZvciAoaGFuZGxlciBpbiB0aGlzLmhhbmRsZXJzKSB7XG5cdFx0XHR0aGlzLmNvcmUuJGVsZW1lbnQub2ZmKGhhbmRsZXIsIHRoaXMuaGFuZGxlcnNbaGFuZGxlcl0pO1xuXHRcdH1cblx0XHRmb3IgKHByb3BlcnR5IGluIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKSB7XG5cdFx0XHR0eXBlb2YgdGhpc1twcm9wZXJ0eV0gIT0gJ2Z1bmN0aW9uJyAmJiAodGhpc1twcm9wZXJ0eV0gPSBudWxsKTtcblx0XHR9XG5cdH07XG5cblx0JC5mbi5vd2xDYXJvdXNlbC5Db25zdHJ1Y3Rvci5QbHVnaW5zLkFuaW1hdGUgPSBBbmltYXRlO1xuXG59KSh3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XG5cbi8qKlxuICogQXV0b3BsYXkgUGx1Z2luXG4gKiBAdmVyc2lvbiAyLjEuMFxuICogQGF1dGhvciBCYXJ0b3N6IFdvamNpZWNob3dza2lcbiAqIEBhdXRob3IgQXJ0dXMgS29sYW5vd3NraVxuICogQGF1dGhvciBEYXZpZCBEZXV0c2NoXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuXHQvKipcblx0ICogQ3JlYXRlcyB0aGUgYXV0b3BsYXkgcGx1Z2luLlxuXHQgKiBAY2xhc3MgVGhlIEF1dG9wbGF5IFBsdWdpblxuXHQgKiBAcGFyYW0ge093bH0gc2NvcGUgLSBUaGUgT3dsIENhcm91c2VsXG5cdCAqL1xuXHR2YXIgQXV0b3BsYXkgPSBmdW5jdGlvbihjYXJvdXNlbCkge1xuXHRcdC8qKlxuXHRcdCAqIFJlZmVyZW5jZSB0byB0aGUgY29yZS5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge093bH1cblx0XHQgKi9cblx0XHR0aGlzLl9jb3JlID0gY2Fyb3VzZWw7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgYXV0b3BsYXkgdGltZW91dC5cblx0XHQgKiBAdHlwZSB7VGltZW91dH1cblx0XHQgKi9cblx0XHR0aGlzLl90aW1lb3V0ID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIEluZGljYXRlcyB3aGVuZXZlciB0aGUgYXV0b3BsYXkgaXMgcGF1c2VkLlxuXHRcdCAqIEB0eXBlIHtCb29sZWFufVxuXHRcdCAqL1xuXHRcdHRoaXMuX3BhdXNlZCA9IGZhbHNlO1xuXG5cdFx0LyoqXG5cdFx0ICogQWxsIGV2ZW50IGhhbmRsZXJzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2hhbmRsZXJzID0ge1xuXHRcdFx0J2NoYW5nZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiBlLnByb3BlcnR5Lm5hbWUgPT09ICdzZXR0aW5ncycpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvcGxheSkge1xuXHRcdFx0XHRcdFx0dGhpcy5wbGF5KCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChlLm5hbWVzcGFjZSAmJiBlLnByb3BlcnR5Lm5hbWUgPT09ICdwb3NpdGlvbicpIHtcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKCdwbGF5PycsIGUpO1xuXHRcdFx0XHRcdGlmICh0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9wbGF5KSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9zZXRBdXRvUGxheUludGVydmFsKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdpbml0aWFsaXplZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b3BsYXkpIHtcblx0XHRcdFx0XHR0aGlzLnBsYXkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQncGxheS5vd2wuYXV0b3BsYXknOiAkLnByb3h5KGZ1bmN0aW9uKGUsIHQsIHMpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlKSB7XG5cdFx0XHRcdFx0dGhpcy5wbGF5KHQsIHMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdzdG9wLm93bC5hdXRvcGxheSc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UpIHtcblx0XHRcdFx0XHR0aGlzLnN0b3AoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQnbW91c2VvdmVyLm93bC5hdXRvcGxheSc6ICQucHJveHkoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICh0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9wbGF5SG92ZXJQYXVzZSAmJiB0aGlzLl9jb3JlLmlzKCdyb3RhdGluZycpKSB7XG5cdFx0XHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdtb3VzZWxlYXZlLm93bC5hdXRvcGxheSc6ICQucHJveHkoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICh0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9wbGF5SG92ZXJQYXVzZSAmJiB0aGlzLl9jb3JlLmlzKCdyb3RhdGluZycpKSB7XG5cdFx0XHRcdFx0dGhpcy5wbGF5KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3RvdWNoc3RhcnQub3dsLmNvcmUnOiAkLnByb3h5KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAodGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvcGxheUhvdmVyUGF1c2UgJiYgdGhpcy5fY29yZS5pcygncm90YXRpbmcnKSkge1xuXHRcdFx0XHRcdHRoaXMucGF1c2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQndG91Y2hlbmQub3dsLmNvcmUnOiAkLnByb3h5KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAodGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvcGxheUhvdmVyUGF1c2UpIHtcblx0XHRcdFx0XHR0aGlzLnBsYXkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcylcblx0XHR9O1xuXG5cdFx0Ly8gcmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnNcblx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9uKHRoaXMuX2hhbmRsZXJzKTtcblxuXHRcdC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcblx0XHR0aGlzLl9jb3JlLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgQXV0b3BsYXkuRGVmYXVsdHMsIHRoaXMuX2NvcmUub3B0aW9ucyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlZmF1bHQgb3B0aW9ucy5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0QXV0b3BsYXkuRGVmYXVsdHMgPSB7XG5cdFx0YXV0b3BsYXk6IGZhbHNlLFxuXHRcdGF1dG9wbGF5VGltZW91dDogNTAwMCxcblx0XHRhdXRvcGxheUhvdmVyUGF1c2U6IGZhbHNlLFxuXHRcdGF1dG9wbGF5U3BlZWQ6IGZhbHNlXG5cdH07XG5cblx0LyoqXG5cdCAqIFN0YXJ0cyB0aGUgYXV0b3BsYXkuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFt0aW1lb3V0XSAtIFRoZSBpbnRlcnZhbCBiZWZvcmUgdGhlIG5leHQgYW5pbWF0aW9uIHN0YXJ0cy5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtzcGVlZF0gLSBUaGUgYW5pbWF0aW9uIHNwZWVkIGZvciB0aGUgYW5pbWF0aW9ucy5cblx0ICovXG5cdEF1dG9wbGF5LnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24odGltZW91dCwgc3BlZWQpIHtcblx0XHR0aGlzLl9wYXVzZWQgPSBmYWxzZTtcblxuXHRcdGlmICh0aGlzLl9jb3JlLmlzKCdyb3RhdGluZycpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5fY29yZS5lbnRlcigncm90YXRpbmcnKTtcblxuXHRcdHRoaXMuX3NldEF1dG9QbGF5SW50ZXJ2YWwoKTtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyBhIG5ldyB0aW1lb3V0XG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbdGltZW91dF0gLSBUaGUgaW50ZXJ2YWwgYmVmb3JlIHRoZSBuZXh0IGFuaW1hdGlvbiBzdGFydHMuXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWRdIC0gVGhlIGFuaW1hdGlvbiBzcGVlZCBmb3IgdGhlIGFuaW1hdGlvbnMuXG5cdCAqIEByZXR1cm4ge1RpbWVvdXR9XG5cdCAqL1xuXHRBdXRvcGxheS5wcm90b3R5cGUuX2dldE5leHRUaW1lb3V0ID0gZnVuY3Rpb24odGltZW91dCwgc3BlZWQpIHtcblx0XHRpZiAoIHRoaXMuX3RpbWVvdXQgKSB7XG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuXHRcdH1cblx0XHRyZXR1cm4gd2luZG93LnNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpIHtcblx0XHRcdGlmICh0aGlzLl9wYXVzZWQgfHwgdGhpcy5fY29yZS5pcygnYnVzeScpIHx8IHRoaXMuX2NvcmUuaXMoJ2ludGVyYWN0aW5nJykgfHwgZG9jdW1lbnQuaGlkZGVuKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2NvcmUubmV4dChzcGVlZCB8fCB0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9wbGF5U3BlZWQpO1xuXHRcdH0sIHRoaXMpLCB0aW1lb3V0IHx8IHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b3BsYXlUaW1lb3V0KTtcblx0fTtcblxuXHQvKipcblx0ICogU2V0cyBhdXRvcGxheSBpbiBtb3Rpb24uXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRBdXRvcGxheS5wcm90b3R5cGUuX3NldEF1dG9QbGF5SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLl90aW1lb3V0ID0gdGhpcy5fZ2V0TmV4dFRpbWVvdXQoKTtcblx0fTtcblxuXHQvKipcblx0ICogU3RvcHMgdGhlIGF1dG9wbGF5LlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRBdXRvcGxheS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICghdGhpcy5fY29yZS5pcygncm90YXRpbmcnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG5cdFx0dGhpcy5fY29yZS5sZWF2ZSgncm90YXRpbmcnKTtcblx0fTtcblxuXHQvKipcblx0ICogU3RvcHMgdGhlIGF1dG9wbGF5LlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRBdXRvcGxheS5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoIXRoaXMuX2NvcmUuaXMoJ3JvdGF0aW5nJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLl9wYXVzZWQgPSB0cnVlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZXN0cm95cyB0aGUgcGx1Z2luLlxuXHQgKi9cblx0QXV0b3BsYXkucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaGFuZGxlciwgcHJvcGVydHk7XG5cblx0XHR0aGlzLnN0b3AoKTtcblxuXHRcdGZvciAoaGFuZGxlciBpbiB0aGlzLl9oYW5kbGVycykge1xuXHRcdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vZmYoaGFuZGxlciwgdGhpcy5faGFuZGxlcnNbaGFuZGxlcl0pO1xuXHRcdH1cblx0XHRmb3IgKHByb3BlcnR5IGluIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKSB7XG5cdFx0XHR0eXBlb2YgdGhpc1twcm9wZXJ0eV0gIT0gJ2Z1bmN0aW9uJyAmJiAodGhpc1twcm9wZXJ0eV0gPSBudWxsKTtcblx0XHR9XG5cdH07XG5cblx0JC5mbi5vd2xDYXJvdXNlbC5Db25zdHJ1Y3Rvci5QbHVnaW5zLmF1dG9wbGF5ID0gQXV0b3BsYXk7XG5cbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIFBsdWdpblxuICogQHZlcnNpb24gMi4xLjBcbiAqIEBhdXRob3IgQXJ0dXMgS29sYW5vd3NraVxuICogQGF1dGhvciBEYXZpZCBEZXV0c2NoXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSBuYXZpZ2F0aW9uIHBsdWdpbi5cblx0ICogQGNsYXNzIFRoZSBOYXZpZ2F0aW9uIFBsdWdpblxuXHQgKiBAcGFyYW0ge093bH0gY2Fyb3VzZWwgLSBUaGUgT3dsIENhcm91c2VsLlxuXHQgKi9cblx0dmFyIE5hdmlnYXRpb24gPSBmdW5jdGlvbihjYXJvdXNlbCkge1xuXHRcdC8qKlxuXHRcdCAqIFJlZmVyZW5jZSB0byB0aGUgY29yZS5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge093bH1cblx0XHQgKi9cblx0XHR0aGlzLl9jb3JlID0gY2Fyb3VzZWw7XG5cblx0XHQvKipcblx0XHQgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgcGx1Z2luIGlzIGluaXRpYWxpemVkIG9yIG5vdC5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge0Jvb2xlYW59XG5cdFx0ICovXG5cdFx0dGhpcy5faW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBjdXJyZW50IHBhZ2luZyBpbmRleGVzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7QXJyYXl9XG5cdFx0ICovXG5cdFx0dGhpcy5fcGFnZXMgPSBbXTtcblxuXHRcdC8qKlxuXHRcdCAqIEFsbCBET00gZWxlbWVudHMgb2YgdGhlIHVzZXIgaW50ZXJmYWNlLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NvbnRyb2xzID0ge307XG5cblx0XHQvKipcblx0XHQgKiBNYXJrdXAgZm9yIGFuIGluZGljYXRvci5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge0FycmF5LjxTdHJpbmc+fVxuXHRcdCAqL1xuXHRcdHRoaXMuX3RlbXBsYXRlcyA9IFtdO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGNhcm91c2VsIGVsZW1lbnQuXG5cdFx0ICogQHR5cGUge2pRdWVyeX1cblx0XHQgKi9cblx0XHR0aGlzLiRlbGVtZW50ID0gdGhpcy5fY29yZS4kZWxlbWVudDtcblxuXHRcdC8qKlxuXHRcdCAqIE92ZXJyaWRkZW4gbWV0aG9kcyBvZiB0aGUgY2Fyb3VzZWwuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5fb3ZlcnJpZGVzID0ge1xuXHRcdFx0bmV4dDogdGhpcy5fY29yZS5uZXh0LFxuXHRcdFx0cHJldjogdGhpcy5fY29yZS5wcmV2LFxuXHRcdFx0dG86IHRoaXMuX2NvcmUudG9cblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogQWxsIGV2ZW50IGhhbmRsZXJzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2hhbmRsZXJzID0ge1xuXHRcdFx0J3ByZXBhcmVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5fY29yZS5zZXR0aW5ncy5kb3RzRGF0YSkge1xuXHRcdFx0XHRcdHRoaXMuX3RlbXBsYXRlcy5wdXNoKCc8ZGl2IGNsYXNzPVwiJyArIHRoaXMuX2NvcmUuc2V0dGluZ3MuZG90Q2xhc3MgKyAnXCI+JyArXG5cdFx0XHRcdFx0XHQkKGUuY29udGVudCkuZmluZCgnW2RhdGEtZG90XScpLmFkZEJhY2soJ1tkYXRhLWRvdF0nKS5hdHRyKCdkYXRhLWRvdCcpICsgJzwvZGl2PicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdhZGRlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuc2V0dGluZ3MuZG90c0RhdGEpIHtcblx0XHRcdFx0XHR0aGlzLl90ZW1wbGF0ZXMuc3BsaWNlKGUucG9zaXRpb24sIDAsIHRoaXMuX3RlbXBsYXRlcy5wb3AoKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3JlbW92ZS5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuc2V0dGluZ3MuZG90c0RhdGEpIHtcblx0XHRcdFx0XHR0aGlzLl90ZW1wbGF0ZXMuc3BsaWNlKGUucG9zaXRpb24sIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdjaGFuZ2VkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgZS5wcm9wZXJ0eS5uYW1lID09ICdwb3NpdGlvbicpIHtcblx0XHRcdFx0XHR0aGlzLmRyYXcoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQnaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiAhdGhpcy5faW5pdGlhbGl6ZWQpIHtcblx0XHRcdFx0XHR0aGlzLl9jb3JlLnRyaWdnZXIoJ2luaXRpYWxpemUnLCBudWxsLCAnbmF2aWdhdGlvbicpO1xuXHRcdFx0XHRcdHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0XHRcdFx0dGhpcy5kcmF3KCk7XG5cdFx0XHRcdFx0dGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdHRoaXMuX2NvcmUudHJpZ2dlcignaW5pdGlhbGl6ZWQnLCBudWxsLCAnbmF2aWdhdGlvbicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdyZWZyZXNoZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9pbml0aWFsaXplZCkge1xuXHRcdFx0XHRcdHRoaXMuX2NvcmUudHJpZ2dlcigncmVmcmVzaCcsIG51bGwsICduYXZpZ2F0aW9uJyk7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHRcdFx0XHR0aGlzLmRyYXcoKTtcblx0XHRcdFx0XHR0aGlzLl9jb3JlLnRyaWdnZXIoJ3JlZnJlc2hlZCcsIG51bGwsICduYXZpZ2F0aW9uJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpXG5cdFx0fTtcblxuXHRcdC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcblx0XHR0aGlzLl9jb3JlLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgTmF2aWdhdGlvbi5EZWZhdWx0cywgdGhpcy5fY29yZS5vcHRpb25zKTtcblxuXHRcdC8vIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzXG5cdFx0dGhpcy4kZWxlbWVudC5vbih0aGlzLl9oYW5kbGVycyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlZmF1bHQgb3B0aW9ucy5cblx0ICogQHB1YmxpY1xuXHQgKiBAdG9kbyBSZW5hbWUgYHNsaWRlQnlgIHRvIGBuYXZCeWBcblx0ICovXG5cdE5hdmlnYXRpb24uRGVmYXVsdHMgPSB7XG5cdFx0bmF2OiBmYWxzZSxcblx0XHRuYXZUZXh0OiBbICdwcmV2JywgJ25leHQnIF0sXG5cdFx0bmF2U3BlZWQ6IGZhbHNlLFxuXHRcdG5hdkVsZW1lbnQ6ICdkaXYnLFxuXHRcdG5hdkNvbnRhaW5lcjogZmFsc2UsXG5cdFx0bmF2Q29udGFpbmVyQ2xhc3M6ICdvd2wtbmF2Jyxcblx0XHRuYXZDbGFzczogWyAnb3dsLXByZXYnLCAnb3dsLW5leHQnIF0sXG5cdFx0c2xpZGVCeTogMSxcblx0XHRkb3RDbGFzczogJ293bC1kb3QnLFxuXHRcdGRvdHNDbGFzczogJ293bC1kb3RzJyxcblx0XHRkb3RzOiB0cnVlLFxuXHRcdGRvdHNFYWNoOiBmYWxzZSxcblx0XHRkb3RzRGF0YTogZmFsc2UsXG5cdFx0ZG90c1NwZWVkOiBmYWxzZSxcblx0XHRkb3RzQ29udGFpbmVyOiBmYWxzZVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplcyB0aGUgbGF5b3V0IG9mIHRoZSBwbHVnaW4gYW5kIGV4dGVuZHMgdGhlIGNhcm91c2VsLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG92ZXJyaWRlLFxuXHRcdFx0c2V0dGluZ3MgPSB0aGlzLl9jb3JlLnNldHRpbmdzO1xuXG5cdFx0Ly8gY3JlYXRlIERPTSBzdHJ1Y3R1cmUgZm9yIHJlbGF0aXZlIG5hdmlnYXRpb25cblx0XHR0aGlzLl9jb250cm9scy4kcmVsYXRpdmUgPSAoc2V0dGluZ3MubmF2Q29udGFpbmVyID8gJChzZXR0aW5ncy5uYXZDb250YWluZXIpXG5cdFx0XHQ6ICQoJzxkaXY+JykuYWRkQ2xhc3Moc2V0dGluZ3MubmF2Q29udGFpbmVyQ2xhc3MpLmFwcGVuZFRvKHRoaXMuJGVsZW1lbnQpKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblxuXHRcdHRoaXMuX2NvbnRyb2xzLiRwcmV2aW91cyA9ICQoJzwnICsgc2V0dGluZ3MubmF2RWxlbWVudCArICc+Jylcblx0XHRcdC5hZGRDbGFzcyhzZXR0aW5ncy5uYXZDbGFzc1swXSlcblx0XHRcdC5odG1sKHNldHRpbmdzLm5hdlRleHRbMF0pXG5cdFx0XHQucHJlcGVuZFRvKHRoaXMuX2NvbnRyb2xzLiRyZWxhdGl2ZSlcblx0XHRcdC5vbignY2xpY2snLCAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dGhpcy5wcmV2KHNldHRpbmdzLm5hdlNwZWVkKTtcblx0XHRcdH0sIHRoaXMpKTtcblx0XHR0aGlzLl9jb250cm9scy4kbmV4dCA9ICQoJzwnICsgc2V0dGluZ3MubmF2RWxlbWVudCArICc+Jylcblx0XHRcdC5hZGRDbGFzcyhzZXR0aW5ncy5uYXZDbGFzc1sxXSlcblx0XHRcdC5odG1sKHNldHRpbmdzLm5hdlRleHRbMV0pXG5cdFx0XHQuYXBwZW5kVG8odGhpcy5fY29udHJvbHMuJHJlbGF0aXZlKVxuXHRcdFx0Lm9uKCdjbGljaycsICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHR0aGlzLm5leHQoc2V0dGluZ3MubmF2U3BlZWQpO1xuXHRcdFx0fSwgdGhpcykpO1xuXG5cdFx0Ly8gY3JlYXRlIERPTSBzdHJ1Y3R1cmUgZm9yIGFic29sdXRlIG5hdmlnYXRpb25cblx0XHRpZiAoIXNldHRpbmdzLmRvdHNEYXRhKSB7XG5cdFx0XHR0aGlzLl90ZW1wbGF0ZXMgPSBbICQoJzxkaXY+Jylcblx0XHRcdFx0LmFkZENsYXNzKHNldHRpbmdzLmRvdENsYXNzKVxuXHRcdFx0XHQuYXBwZW5kKCQoJzxzcGFuPicpKVxuXHRcdFx0XHQucHJvcCgnb3V0ZXJIVE1MJykgXTtcblx0XHR9XG5cblx0XHR0aGlzLl9jb250cm9scy4kYWJzb2x1dGUgPSAoc2V0dGluZ3MuZG90c0NvbnRhaW5lciA/ICQoc2V0dGluZ3MuZG90c0NvbnRhaW5lcilcblx0XHRcdDogJCgnPGRpdj4nKS5hZGRDbGFzcyhzZXR0aW5ncy5kb3RzQ2xhc3MpLmFwcGVuZFRvKHRoaXMuJGVsZW1lbnQpKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblxuXHRcdHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZS5vbignY2xpY2snLCAnZGl2JywgJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHR2YXIgaW5kZXggPSAkKGUudGFyZ2V0KS5wYXJlbnQoKS5pcyh0aGlzLl9jb250cm9scy4kYWJzb2x1dGUpXG5cdFx0XHRcdD8gJChlLnRhcmdldCkuaW5kZXgoKSA6ICQoZS50YXJnZXQpLnBhcmVudCgpLmluZGV4KCk7XG5cblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0dGhpcy50byhpbmRleCwgc2V0dGluZ3MuZG90c1NwZWVkKTtcblx0XHR9LCB0aGlzKSk7XG5cblx0XHQvLyBvdmVycmlkZSBwdWJsaWMgbWV0aG9kcyBvZiB0aGUgY2Fyb3VzZWxcblx0XHRmb3IgKG92ZXJyaWRlIGluIHRoaXMuX292ZXJyaWRlcykge1xuXHRcdFx0dGhpcy5fY29yZVtvdmVycmlkZV0gPSAkLnByb3h5KHRoaXNbb3ZlcnJpZGVdLCB0aGlzKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIERlc3Ryb3lzIHRoZSBwbHVnaW4uXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdE5hdmlnYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaGFuZGxlciwgY29udHJvbCwgcHJvcGVydHksIG92ZXJyaWRlO1xuXG5cdFx0Zm9yIChoYW5kbGVyIGluIHRoaXMuX2hhbmRsZXJzKSB7XG5cdFx0XHR0aGlzLiRlbGVtZW50Lm9mZihoYW5kbGVyLCB0aGlzLl9oYW5kbGVyc1toYW5kbGVyXSk7XG5cdFx0fVxuXHRcdGZvciAoY29udHJvbCBpbiB0aGlzLl9jb250cm9scykge1xuXHRcdFx0dGhpcy5fY29udHJvbHNbY29udHJvbF0ucmVtb3ZlKCk7XG5cdFx0fVxuXHRcdGZvciAob3ZlcnJpZGUgaW4gdGhpcy5vdmVyaWRlcykge1xuXHRcdFx0dGhpcy5fY29yZVtvdmVycmlkZV0gPSB0aGlzLl9vdmVycmlkZXNbb3ZlcnJpZGVdO1xuXHRcdH1cblx0XHRmb3IgKHByb3BlcnR5IGluIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKSB7XG5cdFx0XHR0eXBlb2YgdGhpc1twcm9wZXJ0eV0gIT0gJ2Z1bmN0aW9uJyAmJiAodGhpc1twcm9wZXJ0eV0gPSBudWxsKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFVwZGF0ZXMgdGhlIGludGVybmFsIHN0YXRlLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaSwgaiwgayxcblx0XHRcdGxvd2VyID0gdGhpcy5fY29yZS5jbG9uZXMoKS5sZW5ndGggLyAyLFxuXHRcdFx0dXBwZXIgPSBsb3dlciArIHRoaXMuX2NvcmUuaXRlbXMoKS5sZW5ndGgsXG5cdFx0XHRtYXhpbXVtID0gdGhpcy5fY29yZS5tYXhpbXVtKHRydWUpLFxuXHRcdFx0c2V0dGluZ3MgPSB0aGlzLl9jb3JlLnNldHRpbmdzLFxuXHRcdFx0c2l6ZSA9IHNldHRpbmdzLmNlbnRlciB8fCBzZXR0aW5ncy5hdXRvV2lkdGggfHwgc2V0dGluZ3MuZG90c0RhdGFcblx0XHRcdFx0PyAxIDogc2V0dGluZ3MuZG90c0VhY2ggfHwgc2V0dGluZ3MuaXRlbXM7XG5cblx0XHRpZiAoc2V0dGluZ3Muc2xpZGVCeSAhPT0gJ3BhZ2UnKSB7XG5cdFx0XHRzZXR0aW5ncy5zbGlkZUJ5ID0gTWF0aC5taW4oc2V0dGluZ3Muc2xpZGVCeSwgc2V0dGluZ3MuaXRlbXMpO1xuXHRcdH1cblxuXHRcdGlmIChzZXR0aW5ncy5kb3RzIHx8IHNldHRpbmdzLnNsaWRlQnkgPT0gJ3BhZ2UnKSB7XG5cdFx0XHR0aGlzLl9wYWdlcyA9IFtdO1xuXG5cdFx0XHRmb3IgKGkgPSBsb3dlciwgaiA9IDAsIGsgPSAwOyBpIDwgdXBwZXI7IGkrKykge1xuXHRcdFx0XHRpZiAoaiA+PSBzaXplIHx8IGogPT09IDApIHtcblx0XHRcdFx0XHR0aGlzLl9wYWdlcy5wdXNoKHtcblx0XHRcdFx0XHRcdHN0YXJ0OiBNYXRoLm1pbihtYXhpbXVtLCBpIC0gbG93ZXIpLFxuXHRcdFx0XHRcdFx0ZW5kOiBpIC0gbG93ZXIgKyBzaXplIC0gMVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGlmIChNYXRoLm1pbihtYXhpbXVtLCBpIC0gbG93ZXIpID09PSBtYXhpbXVtKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aiA9IDAsICsraztcblx0XHRcdFx0fVxuXHRcdFx0XHRqICs9IHRoaXMuX2NvcmUubWVyZ2Vycyh0aGlzLl9jb3JlLnJlbGF0aXZlKGkpKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIERyYXdzIHRoZSB1c2VyIGludGVyZmFjZS5cblx0ICogQHRvZG8gVGhlIG9wdGlvbiBgZG90c0RhdGFgIHdvbnQgd29yay5cblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0TmF2aWdhdGlvbi5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBkaWZmZXJlbmNlLFxuXHRcdFx0c2V0dGluZ3MgPSB0aGlzLl9jb3JlLnNldHRpbmdzLFxuXHRcdFx0ZGlzYWJsZWQgPSB0aGlzLl9jb3JlLml0ZW1zKCkubGVuZ3RoIDw9IHNldHRpbmdzLml0ZW1zLFxuXHRcdFx0aW5kZXggPSB0aGlzLl9jb3JlLnJlbGF0aXZlKHRoaXMuX2NvcmUuY3VycmVudCgpKSxcblx0XHRcdGxvb3AgPSBzZXR0aW5ncy5sb29wIHx8IHNldHRpbmdzLnJld2luZDtcblxuXHRcdHRoaXMuX2NvbnRyb2xzLiRyZWxhdGl2ZS50b2dnbGVDbGFzcygnZGlzYWJsZWQnLCAhc2V0dGluZ3MubmF2IHx8IGRpc2FibGVkKTtcblxuXHRcdGlmIChzZXR0aW5ncy5uYXYpIHtcblx0XHRcdHRoaXMuX2NvbnRyb2xzLiRwcmV2aW91cy50b2dnbGVDbGFzcygnZGlzYWJsZWQnLCAhbG9vcCAmJiBpbmRleCA8PSB0aGlzLl9jb3JlLm1pbmltdW0odHJ1ZSkpO1xuXHRcdFx0dGhpcy5fY29udHJvbHMuJG5leHQudG9nZ2xlQ2xhc3MoJ2Rpc2FibGVkJywgIWxvb3AgJiYgaW5kZXggPj0gdGhpcy5fY29yZS5tYXhpbXVtKHRydWUpKTtcblx0XHR9XG5cblx0XHR0aGlzLl9jb250cm9scy4kYWJzb2x1dGUudG9nZ2xlQ2xhc3MoJ2Rpc2FibGVkJywgIXNldHRpbmdzLmRvdHMgfHwgZGlzYWJsZWQpO1xuXG5cdFx0aWYgKHNldHRpbmdzLmRvdHMpIHtcblx0XHRcdGRpZmZlcmVuY2UgPSB0aGlzLl9wYWdlcy5sZW5ndGggLSB0aGlzLl9jb250cm9scy4kYWJzb2x1dGUuY2hpbGRyZW4oKS5sZW5ndGg7XG5cblx0XHRcdGlmIChzZXR0aW5ncy5kb3RzRGF0YSAmJiBkaWZmZXJlbmNlICE9PSAwKSB7XG5cdFx0XHRcdHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZS5odG1sKHRoaXMuX3RlbXBsYXRlcy5qb2luKCcnKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGRpZmZlcmVuY2UgPiAwKSB7XG5cdFx0XHRcdHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZS5hcHBlbmQobmV3IEFycmF5KGRpZmZlcmVuY2UgKyAxKS5qb2luKHRoaXMuX3RlbXBsYXRlc1swXSkpO1xuXHRcdFx0fSBlbHNlIGlmIChkaWZmZXJlbmNlIDwgMCkge1xuXHRcdFx0XHR0aGlzLl9jb250cm9scy4kYWJzb2x1dGUuY2hpbGRyZW4oKS5zbGljZShkaWZmZXJlbmNlKS5yZW1vdmUoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fY29udHJvbHMuJGFic29sdXRlLmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHR0aGlzLl9jb250cm9scy4kYWJzb2x1dGUuY2hpbGRyZW4oKS5lcSgkLmluQXJyYXkodGhpcy5jdXJyZW50KCksIHRoaXMuX3BhZ2VzKSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogRXh0ZW5kcyBldmVudCBkYXRhLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gVGhlIGV2ZW50IG9iamVjdCB3aGljaCBnZXRzIHRocm93bi5cblx0ICovXG5cdE5hdmlnYXRpb24ucHJvdG90eXBlLm9uVHJpZ2dlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIHNldHRpbmdzID0gdGhpcy5fY29yZS5zZXR0aW5ncztcblxuXHRcdGV2ZW50LnBhZ2UgPSB7XG5cdFx0XHRpbmRleDogJC5pbkFycmF5KHRoaXMuY3VycmVudCgpLCB0aGlzLl9wYWdlcyksXG5cdFx0XHRjb3VudDogdGhpcy5fcGFnZXMubGVuZ3RoLFxuXHRcdFx0c2l6ZTogc2V0dGluZ3MgJiYgKHNldHRpbmdzLmNlbnRlciB8fCBzZXR0aW5ncy5hdXRvV2lkdGggfHwgc2V0dGluZ3MuZG90c0RhdGFcblx0XHRcdFx0PyAxIDogc2V0dGluZ3MuZG90c0VhY2ggfHwgc2V0dGluZ3MuaXRlbXMpXG5cdFx0fTtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyB0aGUgY3VycmVudCBwYWdlIHBvc2l0aW9uIG9mIHRoZSBjYXJvdXNlbC5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfVxuXHQgKi9cblx0TmF2aWdhdGlvbi5wcm90b3R5cGUuY3VycmVudCA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBjdXJyZW50ID0gdGhpcy5fY29yZS5yZWxhdGl2ZSh0aGlzLl9jb3JlLmN1cnJlbnQoKSk7XG5cdFx0cmV0dXJuICQuZ3JlcCh0aGlzLl9wYWdlcywgJC5wcm94eShmdW5jdGlvbihwYWdlLCBpbmRleCkge1xuXHRcdFx0cmV0dXJuIHBhZ2Uuc3RhcnQgPD0gY3VycmVudCAmJiBwYWdlLmVuZCA+PSBjdXJyZW50O1xuXHRcdH0sIHRoaXMpKS5wb3AoKTtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyB0aGUgY3VycmVudCBzdWNjZXNvci9wcmVkZWNlc3NvciBwb3NpdGlvbi5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfVxuXHQgKi9cblx0TmF2aWdhdGlvbi5wcm90b3R5cGUuZ2V0UG9zaXRpb24gPSBmdW5jdGlvbihzdWNjZXNzb3IpIHtcblx0XHR2YXIgcG9zaXRpb24sIGxlbmd0aCxcblx0XHRcdHNldHRpbmdzID0gdGhpcy5fY29yZS5zZXR0aW5ncztcblxuXHRcdGlmIChzZXR0aW5ncy5zbGlkZUJ5ID09ICdwYWdlJykge1xuXHRcdFx0cG9zaXRpb24gPSAkLmluQXJyYXkodGhpcy5jdXJyZW50KCksIHRoaXMuX3BhZ2VzKTtcblx0XHRcdGxlbmd0aCA9IHRoaXMuX3BhZ2VzLmxlbmd0aDtcblx0XHRcdHN1Y2Nlc3NvciA/ICsrcG9zaXRpb24gOiAtLXBvc2l0aW9uO1xuXHRcdFx0cG9zaXRpb24gPSB0aGlzLl9wYWdlc1soKHBvc2l0aW9uICUgbGVuZ3RoKSArIGxlbmd0aCkgJSBsZW5ndGhdLnN0YXJ0O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwb3NpdGlvbiA9IHRoaXMuX2NvcmUucmVsYXRpdmUodGhpcy5fY29yZS5jdXJyZW50KCkpO1xuXHRcdFx0bGVuZ3RoID0gdGhpcy5fY29yZS5pdGVtcygpLmxlbmd0aDtcblx0XHRcdHN1Y2Nlc3NvciA/IHBvc2l0aW9uICs9IHNldHRpbmdzLnNsaWRlQnkgOiBwb3NpdGlvbiAtPSBzZXR0aW5ncy5zbGlkZUJ5O1xuXHRcdH1cblxuXHRcdHJldHVybiBwb3NpdGlvbjtcblx0fTtcblxuXHQvKipcblx0ICogU2xpZGVzIHRvIHRoZSBuZXh0IGl0ZW0gb3IgcGFnZS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gW3NwZWVkPWZhbHNlXSAtIFRoZSB0aW1lIGluIG1pbGxpc2Vjb25kcyBmb3IgdGhlIHRyYW5zaXRpb24uXG5cdCAqL1xuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oc3BlZWQpIHtcblx0XHQkLnByb3h5KHRoaXMuX292ZXJyaWRlcy50bywgdGhpcy5fY29yZSkodGhpcy5nZXRQb3NpdGlvbih0cnVlKSwgc3BlZWQpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTbGlkZXMgdG8gdGhlIHByZXZpb3VzIGl0ZW0gb3IgcGFnZS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gW3NwZWVkPWZhbHNlXSAtIFRoZSB0aW1lIGluIG1pbGxpc2Vjb25kcyBmb3IgdGhlIHRyYW5zaXRpb24uXG5cdCAqL1xuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24oc3BlZWQpIHtcblx0XHQkLnByb3h5KHRoaXMuX292ZXJyaWRlcy50bywgdGhpcy5fY29yZSkodGhpcy5nZXRQb3NpdGlvbihmYWxzZSksIHNwZWVkKTtcblx0fTtcblxuXHQvKipcblx0ICogU2xpZGVzIHRvIHRoZSBzcGVjaWZpZWQgaXRlbSBvciBwYWdlLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvbiAtIFRoZSBwb3NpdGlvbiBvZiB0aGUgaXRlbSBvciBwYWdlLlxuXHQgKiBAcGFyYW0ge051bWJlcn0gW3NwZWVkXSAtIFRoZSB0aW1lIGluIG1pbGxpc2Vjb25kcyBmb3IgdGhlIHRyYW5zaXRpb24uXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW3N0YW5kYXJkPWZhbHNlXSAtIFdoZXRoZXIgdG8gdXNlIHRoZSBzdGFuZGFyZCBiZWhhdmlvdXIgb3Igbm90LlxuXHQgKi9cblx0TmF2aWdhdGlvbi5wcm90b3R5cGUudG8gPSBmdW5jdGlvbihwb3NpdGlvbiwgc3BlZWQsIHN0YW5kYXJkKSB7XG5cdFx0dmFyIGxlbmd0aDtcblxuXHRcdGlmICghc3RhbmRhcmQgJiYgdGhpcy5fcGFnZXMubGVuZ3RoKSB7XG5cdFx0XHRsZW5ndGggPSB0aGlzLl9wYWdlcy5sZW5ndGg7XG5cdFx0XHQkLnByb3h5KHRoaXMuX292ZXJyaWRlcy50bywgdGhpcy5fY29yZSkodGhpcy5fcGFnZXNbKChwb3NpdGlvbiAlIGxlbmd0aCkgKyBsZW5ndGgpICUgbGVuZ3RoXS5zdGFydCwgc3BlZWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkLnByb3h5KHRoaXMuX292ZXJyaWRlcy50bywgdGhpcy5fY29yZSkocG9zaXRpb24sIHNwZWVkKTtcblx0XHR9XG5cdH07XG5cblx0JC5mbi5vd2xDYXJvdXNlbC5Db25zdHJ1Y3Rvci5QbHVnaW5zLk5hdmlnYXRpb24gPSBOYXZpZ2F0aW9uO1xuXG59KSh3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XG5cbi8qKlxuICogSGFzaCBQbHVnaW5cbiAqIEB2ZXJzaW9uIDIuMS4wXG4gKiBAYXV0aG9yIEFydHVzIEtvbGFub3dza2lcbiAqIEBhdXRob3IgRGF2aWQgRGV1dHNjaFxuICogQGxpY2Vuc2UgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKi9cbjsoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHQvKipcblx0ICogQ3JlYXRlcyB0aGUgaGFzaCBwbHVnaW4uXG5cdCAqIEBjbGFzcyBUaGUgSGFzaCBQbHVnaW5cblx0ICogQHBhcmFtIHtPd2x9IGNhcm91c2VsIC0gVGhlIE93bCBDYXJvdXNlbFxuXHQgKi9cblx0dmFyIEhhc2ggPSBmdW5jdGlvbihjYXJvdXNlbCkge1xuXHRcdC8qKlxuXHRcdCAqIFJlZmVyZW5jZSB0byB0aGUgY29yZS5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge093bH1cblx0XHQgKi9cblx0XHR0aGlzLl9jb3JlID0gY2Fyb3VzZWw7XG5cblx0XHQvKipcblx0XHQgKiBIYXNoIGluZGV4IGZvciB0aGUgaXRlbXMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5faGFzaGVzID0ge307XG5cblx0XHQvKipcblx0XHQgKiBUaGUgY2Fyb3VzZWwgZWxlbWVudC5cblx0XHQgKiBAdHlwZSB7alF1ZXJ5fVxuXHRcdCAqL1xuXHRcdHRoaXMuJGVsZW1lbnQgPSB0aGlzLl9jb3JlLiRlbGVtZW50O1xuXG5cdFx0LyoqXG5cdFx0ICogQWxsIGV2ZW50IGhhbmRsZXJzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2hhbmRsZXJzID0ge1xuXHRcdFx0J2luaXRpYWxpemVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5fY29yZS5zZXR0aW5ncy5zdGFydFBvc2l0aW9uID09PSAnVVJMSGFzaCcpIHtcblx0XHRcdFx0XHQkKHdpbmRvdykudHJpZ2dlcignaGFzaGNoYW5nZS5vd2wubmF2aWdhdGlvbicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdwcmVwYXJlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlKSB7XG5cdFx0XHRcdFx0dmFyIGhhc2ggPSAkKGUuY29udGVudCkuZmluZCgnW2RhdGEtaGFzaF0nKS5hZGRCYWNrKCdbZGF0YS1oYXNoXScpLmF0dHIoJ2RhdGEtaGFzaCcpO1xuXG5cdFx0XHRcdFx0aWYgKCFoYXNoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5faGFzaGVzW2hhc2hdID0gZS5jb250ZW50O1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdjaGFuZ2VkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgZS5wcm9wZXJ0eS5uYW1lID09PSAncG9zaXRpb24nKSB7XG5cdFx0XHRcdFx0dmFyIGN1cnJlbnQgPSB0aGlzLl9jb3JlLml0ZW1zKHRoaXMuX2NvcmUucmVsYXRpdmUodGhpcy5fY29yZS5jdXJyZW50KCkpKSxcblx0XHRcdFx0XHRcdGhhc2ggPSAkLm1hcCh0aGlzLl9oYXNoZXMsIGZ1bmN0aW9uKGl0ZW0sIGhhc2gpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGl0ZW0gPT09IGN1cnJlbnQgPyBoYXNoIDogbnVsbDtcblx0XHRcdFx0XHRcdH0pLmpvaW4oKTtcblxuXHRcdFx0XHRcdGlmICghaGFzaCB8fCB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKSA9PT0gaGFzaCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcylcblx0XHR9O1xuXG5cdFx0Ly8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuXHRcdHRoaXMuX2NvcmUub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBIYXNoLkRlZmF1bHRzLCB0aGlzLl9jb3JlLm9wdGlvbnMpO1xuXG5cdFx0Ly8gcmVnaXN0ZXIgdGhlIGV2ZW50IGhhbmRsZXJzXG5cdFx0dGhpcy4kZWxlbWVudC5vbih0aGlzLl9oYW5kbGVycyk7XG5cblx0XHQvLyByZWdpc3RlciBldmVudCBsaXN0ZW5lciBmb3IgaGFzaCBuYXZpZ2F0aW9uXG5cdFx0JCh3aW5kb3cpLm9uKCdoYXNoY2hhbmdlLm93bC5uYXZpZ2F0aW9uJywgJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHR2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSxcblx0XHRcdFx0aXRlbXMgPSB0aGlzLl9jb3JlLiRzdGFnZS5jaGlsZHJlbigpLFxuXHRcdFx0XHRwb3NpdGlvbiA9IHRoaXMuX2hhc2hlc1toYXNoXSAmJiBpdGVtcy5pbmRleCh0aGlzLl9oYXNoZXNbaGFzaF0pO1xuXG5cdFx0XHRpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCB8fCBwb3NpdGlvbiA9PT0gdGhpcy5fY29yZS5jdXJyZW50KCkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9jb3JlLnRvKHRoaXMuX2NvcmUucmVsYXRpdmUocG9zaXRpb24pLCBmYWxzZSwgdHJ1ZSk7XG5cdFx0fSwgdGhpcykpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZWZhdWx0IG9wdGlvbnMuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdEhhc2guRGVmYXVsdHMgPSB7XG5cdFx0VVJMaGFzaExpc3RlbmVyOiBmYWxzZVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZXN0cm95cyB0aGUgcGx1Z2luLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRIYXNoLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGhhbmRsZXIsIHByb3BlcnR5O1xuXG5cdFx0JCh3aW5kb3cpLm9mZignaGFzaGNoYW5nZS5vd2wubmF2aWdhdGlvbicpO1xuXG5cdFx0Zm9yIChoYW5kbGVyIGluIHRoaXMuX2hhbmRsZXJzKSB7XG5cdFx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9mZihoYW5kbGVyLCB0aGlzLl9oYW5kbGVyc1toYW5kbGVyXSk7XG5cdFx0fVxuXHRcdGZvciAocHJvcGVydHkgaW4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcblx0XHRcdHR5cGVvZiB0aGlzW3Byb3BlcnR5XSAhPSAnZnVuY3Rpb24nICYmICh0aGlzW3Byb3BlcnR5XSA9IG51bGwpO1xuXHRcdH1cblx0fTtcblxuXHQkLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yLlBsdWdpbnMuSGFzaCA9IEhhc2g7XG5cbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcblxuLyoqXG4gKiBTdXBwb3J0IFBsdWdpblxuICpcbiAqIEB2ZXJzaW9uIDIuMS4wXG4gKiBAYXV0aG9yIFZpdmlkIFBsYW5ldCBTb2Z0d2FyZSBHbWJIXG4gKiBAYXV0aG9yIEFydHVzIEtvbGFub3dza2lcbiAqIEBhdXRob3IgRGF2aWQgRGV1dHNjaFxuICogQGxpY2Vuc2UgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKi9cbjsoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cblx0dmFyIHN0eWxlID0gJCgnPHN1cHBvcnQ+JykuZ2V0KDApLnN0eWxlLFxuXHRcdHByZWZpeGVzID0gJ1dlYmtpdCBNb3ogTyBtcycuc3BsaXQoJyAnKSxcblx0XHRldmVudHMgPSB7XG5cdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdGVuZDoge1xuXHRcdFx0XHRcdFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcblx0XHRcdFx0XHRNb3pUcmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCcsXG5cdFx0XHRcdFx0T1RyYW5zaXRpb246ICdvVHJhbnNpdGlvbkVuZCcsXG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRhbmltYXRpb246IHtcblx0XHRcdFx0ZW5kOiB7XG5cdFx0XHRcdFx0V2Via2l0QW5pbWF0aW9uOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcblx0XHRcdFx0XHRNb3pBbmltYXRpb246ICdhbmltYXRpb25lbmQnLFxuXHRcdFx0XHRcdE9BbmltYXRpb246ICdvQW5pbWF0aW9uRW5kJyxcblx0XHRcdFx0XHRhbmltYXRpb246ICdhbmltYXRpb25lbmQnXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdHRlc3RzID0ge1xuXHRcdFx0Y3NzdHJhbnNmb3JtczogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAhIXRlc3QoJ3RyYW5zZm9ybScpO1xuXHRcdFx0fSxcblx0XHRcdGNzc3RyYW5zZm9ybXMzZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAhIXRlc3QoJ3BlcnNwZWN0aXZlJyk7XG5cdFx0XHR9LFxuXHRcdFx0Y3NzdHJhbnNpdGlvbnM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gISF0ZXN0KCd0cmFuc2l0aW9uJyk7XG5cdFx0XHR9LFxuXHRcdFx0Y3NzYW5pbWF0aW9uczogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAhIXRlc3QoJ2FuaW1hdGlvbicpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0ZnVuY3Rpb24gdGVzdChwcm9wZXJ0eSwgcHJlZml4ZWQpIHtcblx0XHR2YXIgcmVzdWx0ID0gZmFsc2UsXG5cdFx0XHR1cHBlciA9IHByb3BlcnR5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcGVydHkuc2xpY2UoMSk7XG5cblx0XHQkLmVhY2goKHByb3BlcnR5ICsgJyAnICsgcHJlZml4ZXMuam9pbih1cHBlciArICcgJykgKyB1cHBlcikuc3BsaXQoJyAnKSwgZnVuY3Rpb24oaSwgcHJvcGVydHkpIHtcblx0XHRcdGlmIChzdHlsZVtwcm9wZXJ0eV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRyZXN1bHQgPSBwcmVmaXhlZCA/IHByb3BlcnR5IDogdHJ1ZTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGZ1bmN0aW9uIHByZWZpeGVkKHByb3BlcnR5KSB7XG5cdFx0cmV0dXJuIHRlc3QocHJvcGVydHksIHRydWUpO1xuXHR9XG5cblx0aWYgKHRlc3RzLmNzc3RyYW5zaXRpb25zKCkpIHtcblx0XHQvKiBqc2hpbnQgLVcwNTMgKi9cblx0XHQkLnN1cHBvcnQudHJhbnNpdGlvbiA9IG5ldyBTdHJpbmcocHJlZml4ZWQoJ3RyYW5zaXRpb24nKSlcblx0XHQkLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQgPSBldmVudHMudHJhbnNpdGlvbi5lbmRbICQuc3VwcG9ydC50cmFuc2l0aW9uIF07XG5cdH1cblxuXHRpZiAodGVzdHMuY3NzYW5pbWF0aW9ucygpKSB7XG5cdFx0LyoganNoaW50IC1XMDUzICovXG5cdFx0JC5zdXBwb3J0LmFuaW1hdGlvbiA9IG5ldyBTdHJpbmcocHJlZml4ZWQoJ2FuaW1hdGlvbicpKVxuXHRcdCQuc3VwcG9ydC5hbmltYXRpb24uZW5kID0gZXZlbnRzLmFuaW1hdGlvbi5lbmRbICQuc3VwcG9ydC5hbmltYXRpb24gXTtcblx0fVxuXG5cdGlmICh0ZXN0cy5jc3N0cmFuc2Zvcm1zKCkpIHtcblx0XHQvKiBqc2hpbnQgLVcwNTMgKi9cblx0XHQkLnN1cHBvcnQudHJhbnNmb3JtID0gbmV3IFN0cmluZyhwcmVmaXhlZCgndHJhbnNmb3JtJykpO1xuXHRcdCQuc3VwcG9ydC50cmFuc2Zvcm0zZCA9IHRlc3RzLmNzc3RyYW5zZm9ybXMzZCgpO1xuXHR9XG5cbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcbiIsIi8qIVxuICogVnVlLmpzIHYyLjUuMTNcbiAqIChjKSAyMDE0LTIwMTcgRXZhbiBZb3VcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6dC5WdWU9ZSgpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCh0KXtyZXR1cm4gdm9pZCAwPT09dHx8bnVsbD09PXR9ZnVuY3Rpb24gZSh0KXtyZXR1cm4gdm9pZCAwIT09dCYmbnVsbCE9PXR9ZnVuY3Rpb24gbih0KXtyZXR1cm4hMD09PXR9ZnVuY3Rpb24gcih0KXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdHx8XCJudW1iZXJcIj09dHlwZW9mIHR8fFwic3ltYm9sXCI9PXR5cGVvZiB0fHxcImJvb2xlYW5cIj09dHlwZW9mIHR9ZnVuY3Rpb24gaSh0KXtyZXR1cm4gbnVsbCE9PXQmJlwib2JqZWN0XCI9PXR5cGVvZiB0fWZ1bmN0aW9uIG8odCl7cmV0dXJuXCJbb2JqZWN0IE9iamVjdF1cIj09PU5uLmNhbGwodCl9ZnVuY3Rpb24gYSh0KXt2YXIgZT1wYXJzZUZsb2F0KFN0cmluZyh0KSk7cmV0dXJuIGU+PTAmJk1hdGguZmxvb3IoZSk9PT1lJiZpc0Zpbml0ZSh0KX1mdW5jdGlvbiBzKHQpe3JldHVybiBudWxsPT10P1wiXCI6XCJvYmplY3RcIj09dHlwZW9mIHQ/SlNPTi5zdHJpbmdpZnkodCxudWxsLDIpOlN0cmluZyh0KX1mdW5jdGlvbiBjKHQpe3ZhciBlPXBhcnNlRmxvYXQodCk7cmV0dXJuIGlzTmFOKGUpP3Q6ZX1mdW5jdGlvbiB1KHQsZSl7Zm9yKHZhciBuPU9iamVjdC5jcmVhdGUobnVsbCkscj10LnNwbGl0KFwiLFwiKSxpPTA7aTxyLmxlbmd0aDtpKyspbltyW2ldXT0hMDtyZXR1cm4gZT9mdW5jdGlvbih0KXtyZXR1cm4gblt0LnRvTG93ZXJDYXNlKCldfTpmdW5jdGlvbih0KXtyZXR1cm4gblt0XX19ZnVuY3Rpb24gbCh0LGUpe2lmKHQubGVuZ3RoKXt2YXIgbj10LmluZGV4T2YoZSk7aWYobj4tMSlyZXR1cm4gdC5zcGxpY2UobiwxKX19ZnVuY3Rpb24gZih0LGUpe3JldHVybiBNbi5jYWxsKHQsZSl9ZnVuY3Rpb24gcCh0KXt2YXIgZT1PYmplY3QuY3JlYXRlKG51bGwpO3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gZVtuXXx8KGVbbl09dChuKSl9fWZ1bmN0aW9uIGQodCxlKXtmdW5jdGlvbiBuKG4pe3ZhciByPWFyZ3VtZW50cy5sZW5ndGg7cmV0dXJuIHI/cj4xP3QuYXBwbHkoZSxhcmd1bWVudHMpOnQuY2FsbChlLG4pOnQuY2FsbChlKX1yZXR1cm4gbi5fbGVuZ3RoPXQubGVuZ3RoLG59ZnVuY3Rpb24gdih0LGUpe2U9ZXx8MDtmb3IodmFyIG49dC5sZW5ndGgtZSxyPW5ldyBBcnJheShuKTtuLS07KXJbbl09dFtuK2VdO3JldHVybiByfWZ1bmN0aW9uIGgodCxlKXtmb3IodmFyIG4gaW4gZSl0W25dPWVbbl07cmV0dXJuIHR9ZnVuY3Rpb24gbSh0KXtmb3IodmFyIGU9e30sbj0wO248dC5sZW5ndGg7bisrKXRbbl0mJmgoZSx0W25dKTtyZXR1cm4gZX1mdW5jdGlvbiB5KHQsZSxuKXt9ZnVuY3Rpb24gZyh0LGUpe2lmKHQ9PT1lKXJldHVybiEwO3ZhciBuPWkodCkscj1pKGUpO2lmKCFufHwhcilyZXR1cm4hbiYmIXImJlN0cmluZyh0KT09PVN0cmluZyhlKTt0cnl7dmFyIG89QXJyYXkuaXNBcnJheSh0KSxhPUFycmF5LmlzQXJyYXkoZSk7aWYobyYmYSlyZXR1cm4gdC5sZW5ndGg9PT1lLmxlbmd0aCYmdC5ldmVyeShmdW5jdGlvbih0LG4pe3JldHVybiBnKHQsZVtuXSl9KTtpZihvfHxhKXJldHVybiExO3ZhciBzPU9iamVjdC5rZXlzKHQpLGM9T2JqZWN0LmtleXMoZSk7cmV0dXJuIHMubGVuZ3RoPT09Yy5sZW5ndGgmJnMuZXZlcnkoZnVuY3Rpb24obil7cmV0dXJuIGcodFtuXSxlW25dKX0pfWNhdGNoKHQpe3JldHVybiExfX1mdW5jdGlvbiBfKHQsZSl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspaWYoZyh0W25dLGUpKXJldHVybiBuO3JldHVybi0xfWZ1bmN0aW9uIGIodCl7dmFyIGU9ITE7cmV0dXJuIGZ1bmN0aW9uKCl7ZXx8KGU9ITAsdC5hcHBseSh0aGlzLGFyZ3VtZW50cykpfX1mdW5jdGlvbiAkKHQpe3ZhciBlPSh0K1wiXCIpLmNoYXJDb2RlQXQoMCk7cmV0dXJuIDM2PT09ZXx8OTU9PT1lfWZ1bmN0aW9uIEModCxlLG4scil7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7dmFsdWU6bixlbnVtZXJhYmxlOiEhcix3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9KX1mdW5jdGlvbiB3KHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJi9uYXRpdmUgY29kZS8udGVzdCh0LnRvU3RyaW5nKCkpfWZ1bmN0aW9uIHgodCl7cmV0dXJuIG5ldyBtcih2b2lkIDAsdm9pZCAwLHZvaWQgMCxTdHJpbmcodCkpfWZ1bmN0aW9uIGsodCxlKXt2YXIgbj10LmNvbXBvbmVudE9wdGlvbnMscj1uZXcgbXIodC50YWcsdC5kYXRhLHQuY2hpbGRyZW4sdC50ZXh0LHQuZWxtLHQuY29udGV4dCxuLHQuYXN5bmNGYWN0b3J5KTtyZXR1cm4gci5ucz10Lm5zLHIuaXNTdGF0aWM9dC5pc1N0YXRpYyxyLmtleT10LmtleSxyLmlzQ29tbWVudD10LmlzQ29tbWVudCxyLmZuQ29udGV4dD10LmZuQ29udGV4dCxyLmZuT3B0aW9ucz10LmZuT3B0aW9ucyxyLmZuU2NvcGVJZD10LmZuU2NvcGVJZCxyLmlzQ2xvbmVkPSEwLGUmJih0LmNoaWxkcmVuJiYoci5jaGlsZHJlbj1BKHQuY2hpbGRyZW4sITApKSxuJiZuLmNoaWxkcmVuJiYobi5jaGlsZHJlbj1BKG4uY2hpbGRyZW4sITApKSkscn1mdW5jdGlvbiBBKHQsZSl7Zm9yKHZhciBuPXQubGVuZ3RoLHI9bmV3IEFycmF5KG4pLGk9MDtpPG47aSsrKXJbaV09ayh0W2ldLGUpO3JldHVybiByfWZ1bmN0aW9uIE8odCxlLG4pe3QuX19wcm90b19fPWV9ZnVuY3Rpb24gUyh0LGUsbil7Zm9yKHZhciByPTAsaT1uLmxlbmd0aDtyPGk7cisrKXt2YXIgbz1uW3JdO0ModCxvLGVbb10pfX1mdW5jdGlvbiBUKHQsZSl7aWYoaSh0KSYmISh0IGluc3RhbmNlb2YgbXIpKXt2YXIgbjtyZXR1cm4gZih0LFwiX19vYl9fXCIpJiZ0Ll9fb2JfXyBpbnN0YW5jZW9mIHdyP249dC5fX29iX186Q3Iuc2hvdWxkQ29udmVydCYmIXVyKCkmJihBcnJheS5pc0FycmF5KHQpfHxvKHQpKSYmT2JqZWN0LmlzRXh0ZW5zaWJsZSh0KSYmIXQuX2lzVnVlJiYobj1uZXcgd3IodCkpLGUmJm4mJm4udm1Db3VudCsrLG59fWZ1bmN0aW9uIEUodCxlLG4scixpKXt2YXIgbz1uZXcgdnIsYT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsZSk7aWYoIWF8fCExIT09YS5jb25maWd1cmFibGUpe3ZhciBzPWEmJmEuZ2V0LGM9YSYmYS5zZXQsdT0haSYmVChuKTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXt2YXIgZT1zP3MuY2FsbCh0KTpuO3JldHVybiB2ci50YXJnZXQmJihvLmRlcGVuZCgpLHUmJih1LmRlcC5kZXBlbmQoKSxBcnJheS5pc0FycmF5KGUpJiZJKGUpKSksZX0sc2V0OmZ1bmN0aW9uKGUpe3ZhciByPXM/cy5jYWxsKHQpOm47ZT09PXJ8fGUhPWUmJnIhPXJ8fChjP2MuY2FsbCh0LGUpOm49ZSx1PSFpJiZUKGUpLG8ubm90aWZ5KCkpfX0pfX1mdW5jdGlvbiBqKHQsZSxuKXtpZihBcnJheS5pc0FycmF5KHQpJiZhKGUpKXJldHVybiB0Lmxlbmd0aD1NYXRoLm1heCh0Lmxlbmd0aCxlKSx0LnNwbGljZShlLDEsbiksbjtpZihlIGluIHQmJiEoZSBpbiBPYmplY3QucHJvdG90eXBlKSlyZXR1cm4gdFtlXT1uLG47dmFyIHI9dC5fX29iX187cmV0dXJuIHQuX2lzVnVlfHxyJiZyLnZtQ291bnQ/bjpyPyhFKHIudmFsdWUsZSxuKSxyLmRlcC5ub3RpZnkoKSxuKToodFtlXT1uLG4pfWZ1bmN0aW9uIE4odCxlKXtpZihBcnJheS5pc0FycmF5KHQpJiZhKGUpKXQuc3BsaWNlKGUsMSk7ZWxzZXt2YXIgbj10Ll9fb2JfXzt0Ll9pc1Z1ZXx8biYmbi52bUNvdW50fHxmKHQsZSkmJihkZWxldGUgdFtlXSxuJiZuLmRlcC5ub3RpZnkoKSl9fWZ1bmN0aW9uIEkodCl7Zm9yKHZhciBlPXZvaWQgMCxuPTAscj10Lmxlbmd0aDtuPHI7bisrKShlPXRbbl0pJiZlLl9fb2JfXyYmZS5fX29iX18uZGVwLmRlcGVuZCgpLEFycmF5LmlzQXJyYXkoZSkmJkkoZSl9ZnVuY3Rpb24gTCh0LGUpe2lmKCFlKXJldHVybiB0O2Zvcih2YXIgbixyLGksYT1PYmplY3Qua2V5cyhlKSxzPTA7czxhLmxlbmd0aDtzKyspcj10W249YVtzXV0saT1lW25dLGYodCxuKT9vKHIpJiZvKGkpJiZMKHIsaSk6aih0LG4saSk7cmV0dXJuIHR9ZnVuY3Rpb24gTSh0LGUsbil7cmV0dXJuIG4/ZnVuY3Rpb24oKXt2YXIgcj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2UuY2FsbChuLG4pOmUsaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QuY2FsbChuLG4pOnQ7cmV0dXJuIHI/TChyLGkpOml9OmU/dD9mdW5jdGlvbigpe3JldHVybiBMKFwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZS5jYWxsKHRoaXMsdGhpcyk6ZSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QuY2FsbCh0aGlzLHRoaXMpOnQpfTplOnR9ZnVuY3Rpb24gRCh0LGUpe3JldHVybiBlP3Q/dC5jb25jYXQoZSk6QXJyYXkuaXNBcnJheShlKT9lOltlXTp0fWZ1bmN0aW9uIFAodCxlLG4scil7dmFyIGk9T2JqZWN0LmNyZWF0ZSh0fHxudWxsKTtyZXR1cm4gZT9oKGksZSk6aX1mdW5jdGlvbiBGKHQsZSxuKXtmdW5jdGlvbiByKHIpe3ZhciBpPXhyW3JdfHxPcjt1W3JdPWkodFtyXSxlW3JdLG4scil9XCJmdW5jdGlvblwiPT10eXBlb2YgZSYmKGU9ZS5vcHRpb25zKSxmdW5jdGlvbih0LGUpe3ZhciBuPXQucHJvcHM7aWYobil7dmFyIHIsaSxhPXt9O2lmKEFycmF5LmlzQXJyYXkobikpZm9yKHI9bi5sZW5ndGg7ci0tOylcInN0cmluZ1wiPT10eXBlb2YoaT1uW3JdKSYmKGFbUG4oaSldPXt0eXBlOm51bGx9KTtlbHNlIGlmKG8obikpZm9yKHZhciBzIGluIG4paT1uW3NdLGFbUG4ocyldPW8oaSk/aTp7dHlwZTppfTt0LnByb3BzPWF9fShlKSxmdW5jdGlvbih0LGUpe3ZhciBuPXQuaW5qZWN0O2lmKG4pe3ZhciByPXQuaW5qZWN0PXt9O2lmKEFycmF5LmlzQXJyYXkobikpZm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspcltuW2ldXT17ZnJvbTpuW2ldfTtlbHNlIGlmKG8obikpZm9yKHZhciBhIGluIG4pe3ZhciBzPW5bYV07clthXT1vKHMpP2goe2Zyb206YX0scyk6e2Zyb206c319fX0oZSksZnVuY3Rpb24odCl7dmFyIGU9dC5kaXJlY3RpdmVzO2lmKGUpZm9yKHZhciBuIGluIGUpe3ZhciByPWVbbl07XCJmdW5jdGlvblwiPT10eXBlb2YgciYmKGVbbl09e2JpbmQ6cix1cGRhdGU6cn0pfX0oZSk7dmFyIGk9ZS5leHRlbmRzO2lmKGkmJih0PUYodCxpLG4pKSxlLm1peGlucylmb3IodmFyIGE9MCxzPWUubWl4aW5zLmxlbmd0aDthPHM7YSsrKXQ9Rih0LGUubWl4aW5zW2FdLG4pO3ZhciBjLHU9e307Zm9yKGMgaW4gdClyKGMpO2ZvcihjIGluIGUpZih0LGMpfHxyKGMpO3JldHVybiB1fWZ1bmN0aW9uIFIodCxlLG4scil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIG4pe3ZhciBpPXRbZV07aWYoZihpLG4pKXJldHVybiBpW25dO3ZhciBvPVBuKG4pO2lmKGYoaSxvKSlyZXR1cm4gaVtvXTt2YXIgYT1GbihvKTtpZihmKGksYSkpcmV0dXJuIGlbYV07cmV0dXJuIGlbbl18fGlbb118fGlbYV19fWZ1bmN0aW9uIEgodCxlLG4scil7dmFyIGk9ZVt0XSxvPSFmKG4sdCksYT1uW3RdO2lmKFUoQm9vbGVhbixpLnR5cGUpJiYobyYmIWYoaSxcImRlZmF1bHRcIik/YT0hMTpVKFN0cmluZyxpLnR5cGUpfHxcIlwiIT09YSYmYSE9PUhuKHQpfHwoYT0hMCkpLHZvaWQgMD09PWEpe2E9ZnVuY3Rpb24odCxlLG4pe2lmKCFmKGUsXCJkZWZhdWx0XCIpKXJldHVybjt2YXIgcj1lLmRlZmF1bHQ7aWYodCYmdC4kb3B0aW9ucy5wcm9wc0RhdGEmJnZvaWQgMD09PXQuJG9wdGlvbnMucHJvcHNEYXRhW25dJiZ2b2lkIDAhPT10Ll9wcm9wc1tuXSlyZXR1cm4gdC5fcHJvcHNbbl07cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgciYmXCJGdW5jdGlvblwiIT09QihlLnR5cGUpP3IuY2FsbCh0KTpyfShyLGksdCk7dmFyIHM9Q3Iuc2hvdWxkQ29udmVydDtDci5zaG91bGRDb252ZXJ0PSEwLFQoYSksQ3Iuc2hvdWxkQ29udmVydD1zfXJldHVybiBhfWZ1bmN0aW9uIEIodCl7dmFyIGU9dCYmdC50b1N0cmluZygpLm1hdGNoKC9eXFxzKmZ1bmN0aW9uIChcXHcrKS8pO3JldHVybiBlP2VbMV06XCJcIn1mdW5jdGlvbiBVKHQsZSl7aWYoIUFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIEIoZSk9PT1CKHQpO2Zvcih2YXIgbj0wLHI9ZS5sZW5ndGg7bjxyO24rKylpZihCKGVbbl0pPT09Qih0KSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBWKHQsZSxuKXtpZihlKWZvcih2YXIgcj1lO3I9ci4kcGFyZW50Oyl7dmFyIGk9ci4kb3B0aW9ucy5lcnJvckNhcHR1cmVkO2lmKGkpZm9yKHZhciBvPTA7bzxpLmxlbmd0aDtvKyspdHJ5e2lmKCExPT09aVtvXS5jYWxsKHIsdCxlLG4pKXJldHVybn1jYXRjaCh0KXt6KHQscixcImVycm9yQ2FwdHVyZWQgaG9va1wiKX19eih0LGUsbil9ZnVuY3Rpb24geih0LGUsbil7aWYoSm4uZXJyb3JIYW5kbGVyKXRyeXtyZXR1cm4gSm4uZXJyb3JIYW5kbGVyLmNhbGwobnVsbCx0LGUsbil9Y2F0Y2godCl7Syh0LG51bGwsXCJjb25maWcuZXJyb3JIYW5kbGVyXCIpfUsodCxlLG4pfWZ1bmN0aW9uIEsodCxlLG4pe2lmKCFHbiYmIVpufHxcInVuZGVmaW5lZFwiPT10eXBlb2YgY29uc29sZSl0aHJvdyB0O2NvbnNvbGUuZXJyb3IodCl9ZnVuY3Rpb24gSigpe1RyPSExO3ZhciB0PVNyLnNsaWNlKDApO1NyLmxlbmd0aD0wO2Zvcih2YXIgZT0wO2U8dC5sZW5ndGg7ZSsrKXRbZV0oKX1mdW5jdGlvbiBxKHQsZSl7dmFyIG47aWYoU3IucHVzaChmdW5jdGlvbigpe2lmKHQpdHJ5e3QuY2FsbChlKX1jYXRjaCh0KXtWKHQsZSxcIm5leHRUaWNrXCIpfWVsc2UgbiYmbihlKX0pLFRyfHwoVHI9ITAsRXI/QXIoKTprcigpKSwhdCYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFByb21pc2UpcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHQpe249dH0pfWZ1bmN0aW9uIFcodCl7Ryh0LE1yKSxNci5jbGVhcigpfWZ1bmN0aW9uIEcodCxlKXt2YXIgbixyLG89QXJyYXkuaXNBcnJheSh0KTtpZigob3x8aSh0KSkmJiFPYmplY3QuaXNGcm96ZW4odCkpe2lmKHQuX19vYl9fKXt2YXIgYT10Ll9fb2JfXy5kZXAuaWQ7aWYoZS5oYXMoYSkpcmV0dXJuO2UuYWRkKGEpfWlmKG8pZm9yKG49dC5sZW5ndGg7bi0tOylHKHRbbl0sZSk7ZWxzZSBmb3Iobj0ocj1PYmplY3Qua2V5cyh0KSkubGVuZ3RoO24tLTspRyh0W3Jbbl1dLGUpfX1mdW5jdGlvbiBaKHQpe2Z1bmN0aW9uIGUoKXt2YXIgdD1hcmd1bWVudHMsbj1lLmZucztpZighQXJyYXkuaXNBcnJheShuKSlyZXR1cm4gbi5hcHBseShudWxsLGFyZ3VtZW50cyk7Zm9yKHZhciByPW4uc2xpY2UoKSxpPTA7aTxyLmxlbmd0aDtpKyspcltpXS5hcHBseShudWxsLHQpfXJldHVybiBlLmZucz10LGV9ZnVuY3Rpb24gWChlLG4scixpLG8pe3ZhciBhLHMsYyx1O2ZvcihhIGluIGUpcz1lW2FdLGM9blthXSx1PURyKGEpLHQocyl8fCh0KGMpPyh0KHMuZm5zKSYmKHM9ZVthXT1aKHMpKSxyKHUubmFtZSxzLHUub25jZSx1LmNhcHR1cmUsdS5wYXNzaXZlLHUucGFyYW1zKSk6cyE9PWMmJihjLmZucz1zLGVbYV09YykpO2ZvcihhIGluIG4pdChlW2FdKSYmaSgodT1EcihhKSkubmFtZSxuW2FdLHUuY2FwdHVyZSl9ZnVuY3Rpb24gWShyLGksbyl7ZnVuY3Rpb24gYSgpe28uYXBwbHkodGhpcyxhcmd1bWVudHMpLGwocy5mbnMsYSl9ciBpbnN0YW5jZW9mIG1yJiYocj1yLmRhdGEuaG9va3x8KHIuZGF0YS5ob29rPXt9KSk7dmFyIHMsYz1yW2ldO3QoYyk/cz1aKFthXSk6ZShjLmZucykmJm4oYy5tZXJnZWQpPyhzPWMpLmZucy5wdXNoKGEpOnM9WihbYyxhXSkscy5tZXJnZWQ9ITAscltpXT1zfWZ1bmN0aW9uIFEodCxuLHIsaSxvKXtpZihlKG4pKXtpZihmKG4scikpcmV0dXJuIHRbcl09bltyXSxvfHxkZWxldGUgbltyXSwhMDtpZihmKG4saSkpcmV0dXJuIHRbcl09bltpXSxvfHxkZWxldGUgbltpXSwhMH1yZXR1cm4hMX1mdW5jdGlvbiB0dCh0KXtyZXR1cm4gZSh0KSYmZSh0LnRleHQpJiZmdW5jdGlvbih0KXtyZXR1cm4hMT09PXR9KHQuaXNDb21tZW50KX1mdW5jdGlvbiBldChpLG8pe3ZhciBhLHMsYyx1LGw9W107Zm9yKGE9MDthPGkubGVuZ3RoO2ErKyl0KHM9aVthXSl8fFwiYm9vbGVhblwiPT10eXBlb2Ygc3x8KHU9bFtjPWwubGVuZ3RoLTFdLEFycmF5LmlzQXJyYXkocyk/cy5sZW5ndGg+MCYmKHR0KChzPWV0KHMsKG98fFwiXCIpK1wiX1wiK2EpKVswXSkmJnR0KHUpJiYobFtjXT14KHUudGV4dCtzWzBdLnRleHQpLHMuc2hpZnQoKSksbC5wdXNoLmFwcGx5KGwscykpOnIocyk/dHQodSk/bFtjXT14KHUudGV4dCtzKTpcIlwiIT09cyYmbC5wdXNoKHgocykpOnR0KHMpJiZ0dCh1KT9sW2NdPXgodS50ZXh0K3MudGV4dCk6KG4oaS5faXNWTGlzdCkmJmUocy50YWcpJiZ0KHMua2V5KSYmZShvKSYmKHMua2V5PVwiX192bGlzdFwiK28rXCJfXCIrYStcIl9fXCIpLGwucHVzaChzKSkpO3JldHVybiBsfWZ1bmN0aW9uIG50KHQsZSl7cmV0dXJuKHQuX19lc01vZHVsZXx8ZnImJlwiTW9kdWxlXCI9PT10W1N5bWJvbC50b1N0cmluZ1RhZ10pJiYodD10LmRlZmF1bHQpLGkodCk/ZS5leHRlbmQodCk6dH1mdW5jdGlvbiBydCh0KXtyZXR1cm4gdC5pc0NvbW1lbnQmJnQuYXN5bmNGYWN0b3J5fWZ1bmN0aW9uIGl0KHQpe2lmKEFycmF5LmlzQXJyYXkodCkpZm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciByPXRbbl07aWYoZShyKSYmKGUoci5jb21wb25lbnRPcHRpb25zKXx8cnQocikpKXJldHVybiByfX1mdW5jdGlvbiBvdCh0LGUsbil7bj9Mci4kb25jZSh0LGUpOkxyLiRvbih0LGUpfWZ1bmN0aW9uIGF0KHQsZSl7THIuJG9mZih0LGUpfWZ1bmN0aW9uIHN0KHQsZSxuKXtMcj10LFgoZSxufHx7fSxvdCxhdCksTHI9dm9pZCAwfWZ1bmN0aW9uIGN0KHQsZSl7dmFyIG49e307aWYoIXQpcmV0dXJuIG47Zm9yKHZhciByPTAsaT10Lmxlbmd0aDtyPGk7cisrKXt2YXIgbz10W3JdLGE9by5kYXRhO2lmKGEmJmEuYXR0cnMmJmEuYXR0cnMuc2xvdCYmZGVsZXRlIGEuYXR0cnMuc2xvdCxvLmNvbnRleHQhPT1lJiZvLmZuQ29udGV4dCE9PWV8fCFhfHxudWxsPT1hLnNsb3QpKG4uZGVmYXVsdHx8KG4uZGVmYXVsdD1bXSkpLnB1c2gobyk7ZWxzZXt2YXIgcz1hLnNsb3QsYz1uW3NdfHwobltzXT1bXSk7XCJ0ZW1wbGF0ZVwiPT09by50YWc/Yy5wdXNoLmFwcGx5KGMsby5jaGlsZHJlbnx8W10pOmMucHVzaChvKX19Zm9yKHZhciB1IGluIG4pblt1XS5ldmVyeSh1dCkmJmRlbGV0ZSBuW3VdO3JldHVybiBufWZ1bmN0aW9uIHV0KHQpe3JldHVybiB0LmlzQ29tbWVudCYmIXQuYXN5bmNGYWN0b3J5fHxcIiBcIj09PXQudGV4dH1mdW5jdGlvbiBsdCh0LGUpe2U9ZXx8e307Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspQXJyYXkuaXNBcnJheSh0W25dKT9sdCh0W25dLGUpOmVbdFtuXS5rZXldPXRbbl0uZm47cmV0dXJuIGV9ZnVuY3Rpb24gZnQodCl7Zm9yKDt0JiYodD10LiRwYXJlbnQpOylpZih0Ll9pbmFjdGl2ZSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBwdCh0LGUpe2lmKGUpe2lmKHQuX2RpcmVjdEluYWN0aXZlPSExLGZ0KHQpKXJldHVybn1lbHNlIGlmKHQuX2RpcmVjdEluYWN0aXZlKXJldHVybjtpZih0Ll9pbmFjdGl2ZXx8bnVsbD09PXQuX2luYWN0aXZlKXt0Ll9pbmFjdGl2ZT0hMTtmb3IodmFyIG49MDtuPHQuJGNoaWxkcmVuLmxlbmd0aDtuKyspcHQodC4kY2hpbGRyZW5bbl0pO3Z0KHQsXCJhY3RpdmF0ZWRcIil9fWZ1bmN0aW9uIGR0KHQsZSl7aWYoIShlJiYodC5fZGlyZWN0SW5hY3RpdmU9ITAsZnQodCkpfHx0Ll9pbmFjdGl2ZSkpe3QuX2luYWN0aXZlPSEwO2Zvcih2YXIgbj0wO248dC4kY2hpbGRyZW4ubGVuZ3RoO24rKylkdCh0LiRjaGlsZHJlbltuXSk7dnQodCxcImRlYWN0aXZhdGVkXCIpfX1mdW5jdGlvbiB2dCh0LGUpe3ZhciBuPXQuJG9wdGlvbnNbZV07aWYobilmb3IodmFyIHI9MCxpPW4ubGVuZ3RoO3I8aTtyKyspdHJ5e25bcl0uY2FsbCh0KX1jYXRjaChuKXtWKG4sdCxlK1wiIGhvb2tcIil9dC5faGFzSG9va0V2ZW50JiZ0LiRlbWl0KFwiaG9vazpcIitlKX1mdW5jdGlvbiBodCgpe1VyPSEwO3ZhciB0LGU7Zm9yKEZyLnNvcnQoZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5pZC1lLmlkfSksVnI9MDtWcjxGci5sZW5ndGg7VnIrKyllPSh0PUZyW1ZyXSkuaWQsSHJbZV09bnVsbCx0LnJ1bigpO3ZhciBuPVJyLnNsaWNlKCkscj1Gci5zbGljZSgpO1ZyPUZyLmxlbmd0aD1Sci5sZW5ndGg9MCxIcj17fSxCcj1Vcj0hMSxmdW5jdGlvbih0KXtmb3IodmFyIGU9MDtlPHQubGVuZ3RoO2UrKyl0W2VdLl9pbmFjdGl2ZT0hMCxwdCh0W2VdLCEwKX0obiksZnVuY3Rpb24odCl7dmFyIGU9dC5sZW5ndGg7Zm9yKDtlLS07KXt2YXIgbj10W2VdLHI9bi52bTtyLl93YXRjaGVyPT09biYmci5faXNNb3VudGVkJiZ2dChyLFwidXBkYXRlZFwiKX19KHIpLGxyJiZKbi5kZXZ0b29scyYmbHIuZW1pdChcImZsdXNoXCIpfWZ1bmN0aW9uIG10KHQsZSxuKXtKci5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tlXVtuXX0sSnIuc2V0PWZ1bmN0aW9uKHQpe3RoaXNbZV1bbl09dH0sT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbixKcil9ZnVuY3Rpb24geXQodCl7dC5fd2F0Y2hlcnM9W107dmFyIGU9dC4kb3B0aW9ucztlLnByb3BzJiZmdW5jdGlvbih0LGUpe3ZhciBuPXQuJG9wdGlvbnMucHJvcHNEYXRhfHx7fSxyPXQuX3Byb3BzPXt9LGk9dC4kb3B0aW9ucy5fcHJvcEtleXM9W10sbz0hdC4kcGFyZW50O0NyLnNob3VsZENvbnZlcnQ9bzt2YXIgYT1mdW5jdGlvbihvKXtpLnB1c2gobyk7dmFyIGE9SChvLGUsbix0KTtFKHIsbyxhKSxvIGluIHR8fG10KHQsXCJfcHJvcHNcIixvKX07Zm9yKHZhciBzIGluIGUpYShzKTtDci5zaG91bGRDb252ZXJ0PSEwfSh0LGUucHJvcHMpLGUubWV0aG9kcyYmZnVuY3Rpb24odCxlKXt0LiRvcHRpb25zLnByb3BzO2Zvcih2YXIgbiBpbiBlKXRbbl09bnVsbD09ZVtuXT95OmQoZVtuXSx0KX0odCxlLm1ldGhvZHMpLGUuZGF0YT9mdW5jdGlvbih0KXt2YXIgZT10LiRvcHRpb25zLmRhdGE7ZT10Ll9kYXRhPVwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZnVuY3Rpb24odCxlKXt0cnl7cmV0dXJuIHQuY2FsbChlLGUpfWNhdGNoKHQpe3JldHVybiBWKHQsZSxcImRhdGEoKVwiKSx7fX19KGUsdCk6ZXx8e30sbyhlKXx8KGU9e30pO3ZhciBuPU9iamVjdC5rZXlzKGUpLHI9dC4kb3B0aW9ucy5wcm9wcyxpPSh0LiRvcHRpb25zLm1ldGhvZHMsbi5sZW5ndGgpO2Zvcig7aS0tOyl7dmFyIGE9bltpXTtyJiZmKHIsYSl8fCQoYSl8fG10KHQsXCJfZGF0YVwiLGEpfVQoZSwhMCl9KHQpOlQodC5fZGF0YT17fSwhMCksZS5jb21wdXRlZCYmZnVuY3Rpb24odCxlKXt2YXIgbj10Ll9jb21wdXRlZFdhdGNoZXJzPU9iamVjdC5jcmVhdGUobnVsbCkscj11cigpO2Zvcih2YXIgaSBpbiBlKXt2YXIgbz1lW2ldLGE9XCJmdW5jdGlvblwiPT10eXBlb2Ygbz9vOm8uZ2V0O3J8fChuW2ldPW5ldyBLcih0LGF8fHkseSxxcikpLGkgaW4gdHx8Z3QodCxpLG8pfX0odCxlLmNvbXB1dGVkKSxlLndhdGNoJiZlLndhdGNoIT09aXImJmZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBuIGluIGUpe3ZhciByPWVbbl07aWYoQXJyYXkuaXNBcnJheShyKSlmb3IodmFyIGk9MDtpPHIubGVuZ3RoO2krKylidCh0LG4scltpXSk7ZWxzZSBidCh0LG4scil9fSh0LGUud2F0Y2gpfWZ1bmN0aW9uIGd0KHQsZSxuKXt2YXIgcj0hdXIoKTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuPyhKci5nZXQ9cj9fdChlKTpuLEpyLnNldD15KTooSnIuZ2V0PW4uZ2V0P3ImJiExIT09bi5jYWNoZT9fdChlKTpuLmdldDp5LEpyLnNldD1uLnNldD9uLnNldDp5KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLEpyKX1mdW5jdGlvbiBfdCh0KXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgZT10aGlzLl9jb21wdXRlZFdhdGNoZXJzJiZ0aGlzLl9jb21wdXRlZFdhdGNoZXJzW3RdO2lmKGUpcmV0dXJuIGUuZGlydHkmJmUuZXZhbHVhdGUoKSx2ci50YXJnZXQmJmUuZGVwZW5kKCksZS52YWx1ZX19ZnVuY3Rpb24gYnQodCxlLG4scil7cmV0dXJuIG8obikmJihyPW4sbj1uLmhhbmRsZXIpLFwic3RyaW5nXCI9PXR5cGVvZiBuJiYobj10W25dKSx0LiR3YXRjaChlLG4scil9ZnVuY3Rpb24gJHQodCxlKXtpZih0KXtmb3IodmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKSxyPWZyP1JlZmxlY3Qub3duS2V5cyh0KS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxlKS5lbnVtZXJhYmxlfSk6T2JqZWN0LmtleXModCksaT0wO2k8ci5sZW5ndGg7aSsrKXtmb3IodmFyIG89cltpXSxhPXRbb10uZnJvbSxzPWU7czspe2lmKHMuX3Byb3ZpZGVkJiZhIGluIHMuX3Byb3ZpZGVkKXtuW29dPXMuX3Byb3ZpZGVkW2FdO2JyZWFrfXM9cy4kcGFyZW50fWlmKCFzJiZcImRlZmF1bHRcImluIHRbb10pe3ZhciBjPXRbb10uZGVmYXVsdDtuW29dPVwiZnVuY3Rpb25cIj09dHlwZW9mIGM/Yy5jYWxsKGUpOmN9fXJldHVybiBufX1mdW5jdGlvbiBDdCh0LG4pe3ZhciByLG8sYSxzLGM7aWYoQXJyYXkuaXNBcnJheSh0KXx8XCJzdHJpbmdcIj09dHlwZW9mIHQpZm9yKHI9bmV3IEFycmF5KHQubGVuZ3RoKSxvPTAsYT10Lmxlbmd0aDtvPGE7bysrKXJbb109bih0W29dLG8pO2Vsc2UgaWYoXCJudW1iZXJcIj09dHlwZW9mIHQpZm9yKHI9bmV3IEFycmF5KHQpLG89MDtvPHQ7bysrKXJbb109bihvKzEsbyk7ZWxzZSBpZihpKHQpKWZvcihzPU9iamVjdC5rZXlzKHQpLHI9bmV3IEFycmF5KHMubGVuZ3RoKSxvPTAsYT1zLmxlbmd0aDtvPGE7bysrKWM9c1tvXSxyW29dPW4odFtjXSxjLG8pO3JldHVybiBlKHIpJiYoci5faXNWTGlzdD0hMCkscn1mdW5jdGlvbiB3dCh0LGUsbixyKXt2YXIgaSxvPXRoaXMuJHNjb3BlZFNsb3RzW3RdO2lmKG8pbj1ufHx7fSxyJiYobj1oKGgoe30sciksbikpLGk9byhuKXx8ZTtlbHNle3ZhciBhPXRoaXMuJHNsb3RzW3RdO2EmJihhLl9yZW5kZXJlZD0hMCksaT1hfHxlfXZhciBzPW4mJm4uc2xvdDtyZXR1cm4gcz90aGlzLiRjcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIix7c2xvdDpzfSxpKTppfWZ1bmN0aW9uIHh0KHQpe3JldHVybiBSKHRoaXMuJG9wdGlvbnMsXCJmaWx0ZXJzXCIsdCl8fFVufWZ1bmN0aW9uIGt0KHQsZSxuLHIpe3ZhciBpPUpuLmtleUNvZGVzW2VdfHxuO3JldHVybiBpP0FycmF5LmlzQXJyYXkoaSk/LTE9PT1pLmluZGV4T2YodCk6aSE9PXQ6cj9IbihyKSE9PWU6dm9pZCAwfWZ1bmN0aW9uIEF0KHQsZSxuLHIsbyl7aWYobilpZihpKG4pKXtBcnJheS5pc0FycmF5KG4pJiYobj1tKG4pKTt2YXIgYSxzPWZ1bmN0aW9uKGkpe2lmKFwiY2xhc3NcIj09PWl8fFwic3R5bGVcIj09PWl8fExuKGkpKWE9dDtlbHNle3ZhciBzPXQuYXR0cnMmJnQuYXR0cnMudHlwZTthPXJ8fEpuLm11c3RVc2VQcm9wKGUscyxpKT90LmRvbVByb3BzfHwodC5kb21Qcm9wcz17fSk6dC5hdHRyc3x8KHQuYXR0cnM9e30pfWlmKCEoaSBpbiBhKSYmKGFbaV09bltpXSxvKSl7KHQub258fCh0Lm9uPXt9KSlbXCJ1cGRhdGU6XCIraV09ZnVuY3Rpb24odCl7bltpXT10fX19O2Zvcih2YXIgYyBpbiBuKXMoYyl9ZWxzZTtyZXR1cm4gdH1mdW5jdGlvbiBPdCh0LGUpe3ZhciBuPXRoaXMuX3N0YXRpY1RyZWVzfHwodGhpcy5fc3RhdGljVHJlZXM9W10pLHI9blt0XTtyZXR1cm4gciYmIWU/QXJyYXkuaXNBcnJheShyKT9BKHIpOmsocik6KHI9blt0XT10aGlzLiRvcHRpb25zLnN0YXRpY1JlbmRlckZuc1t0XS5jYWxsKHRoaXMuX3JlbmRlclByb3h5LG51bGwsdGhpcyksVHQocixcIl9fc3RhdGljX19cIit0LCExKSxyKX1mdW5jdGlvbiBTdCh0LGUsbil7cmV0dXJuIFR0KHQsXCJfX29uY2VfX1wiK2UrKG4/XCJfXCIrbjpcIlwiKSwhMCksdH1mdW5jdGlvbiBUdCh0LGUsbil7aWYoQXJyYXkuaXNBcnJheSh0KSlmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKyl0W3JdJiZcInN0cmluZ1wiIT10eXBlb2YgdFtyXSYmRXQodFtyXSxlK1wiX1wiK3Isbik7ZWxzZSBFdCh0LGUsbil9ZnVuY3Rpb24gRXQodCxlLG4pe3QuaXNTdGF0aWM9ITAsdC5rZXk9ZSx0LmlzT25jZT1ufWZ1bmN0aW9uIGp0KHQsZSl7aWYoZSlpZihvKGUpKXt2YXIgbj10Lm9uPXQub24/aCh7fSx0Lm9uKTp7fTtmb3IodmFyIHIgaW4gZSl7dmFyIGk9bltyXSxhPWVbcl07bltyXT1pP1tdLmNvbmNhdChpLGEpOmF9fWVsc2U7cmV0dXJuIHR9ZnVuY3Rpb24gTnQodCl7dC5fbz1TdCx0Ll9uPWMsdC5fcz1zLHQuX2w9Q3QsdC5fdD13dCx0Ll9xPWcsdC5faT1fLHQuX209T3QsdC5fZj14dCx0Ll9rPWt0LHQuX2I9QXQsdC5fdj14LHQuX2U9Z3IsdC5fdT1sdCx0Ll9nPWp0fWZ1bmN0aW9uIEl0KHQsZSxyLGksbyl7dmFyIGE9by5vcHRpb25zO3RoaXMuZGF0YT10LHRoaXMucHJvcHM9ZSx0aGlzLmNoaWxkcmVuPXIsdGhpcy5wYXJlbnQ9aSx0aGlzLmxpc3RlbmVycz10Lm9ufHxqbix0aGlzLmluamVjdGlvbnM9JHQoYS5pbmplY3QsaSksdGhpcy5zbG90cz1mdW5jdGlvbigpe3JldHVybiBjdChyLGkpfTt2YXIgcz1PYmplY3QuY3JlYXRlKGkpLGM9bihhLl9jb21waWxlZCksdT0hYztjJiYodGhpcy4kb3B0aW9ucz1hLHRoaXMuJHNsb3RzPXRoaXMuc2xvdHMoKSx0aGlzLiRzY29wZWRTbG90cz10LnNjb3BlZFNsb3RzfHxqbiksYS5fc2NvcGVJZD90aGlzLl9jPWZ1bmN0aW9uKHQsZSxuLHIpe3ZhciBvPUR0KHMsdCxlLG4scix1KTtyZXR1cm4gbyYmKG8uZm5TY29wZUlkPWEuX3Njb3BlSWQsby5mbkNvbnRleHQ9aSksb306dGhpcy5fYz1mdW5jdGlvbih0LGUsbixyKXtyZXR1cm4gRHQocyx0LGUsbixyLHUpfX1mdW5jdGlvbiBMdCh0LGUpe2Zvcih2YXIgbiBpbiBlKXRbUG4obildPWVbbl19ZnVuY3Rpb24gTXQocixvLGEscyxjKXtpZighdChyKSl7dmFyIHU9YS4kb3B0aW9ucy5fYmFzZTtpZihpKHIpJiYocj11LmV4dGVuZChyKSksXCJmdW5jdGlvblwiPT10eXBlb2Ygcil7dmFyIGw7aWYodChyLmNpZCkmJihsPXIsdm9pZCAwPT09KHI9ZnVuY3Rpb24ocixvLGEpe2lmKG4oci5lcnJvcikmJmUoci5lcnJvckNvbXApKXJldHVybiByLmVycm9yQ29tcDtpZihlKHIucmVzb2x2ZWQpKXJldHVybiByLnJlc29sdmVkO2lmKG4oci5sb2FkaW5nKSYmZShyLmxvYWRpbmdDb21wKSlyZXR1cm4gci5sb2FkaW5nQ29tcDtpZighZShyLmNvbnRleHRzKSl7dmFyIHM9ci5jb250ZXh0cz1bYV0sYz0hMCx1PWZ1bmN0aW9uKCl7Zm9yKHZhciB0PTAsZT1zLmxlbmd0aDt0PGU7dCsrKXNbdF0uJGZvcmNlVXBkYXRlKCl9LGw9YihmdW5jdGlvbih0KXtyLnJlc29sdmVkPW50KHQsbyksY3x8dSgpfSksZj1iKGZ1bmN0aW9uKHQpe2Uoci5lcnJvckNvbXApJiYoci5lcnJvcj0hMCx1KCkpfSkscD1yKGwsZik7cmV0dXJuIGkocCkmJihcImZ1bmN0aW9uXCI9PXR5cGVvZiBwLnRoZW4/dChyLnJlc29sdmVkKSYmcC50aGVuKGwsZik6ZShwLmNvbXBvbmVudCkmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHAuY29tcG9uZW50LnRoZW4mJihwLmNvbXBvbmVudC50aGVuKGwsZiksZShwLmVycm9yKSYmKHIuZXJyb3JDb21wPW50KHAuZXJyb3IsbykpLGUocC5sb2FkaW5nKSYmKHIubG9hZGluZ0NvbXA9bnQocC5sb2FkaW5nLG8pLDA9PT1wLmRlbGF5P3IubG9hZGluZz0hMDpzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dChyLnJlc29sdmVkKSYmdChyLmVycm9yKSYmKHIubG9hZGluZz0hMCx1KCkpfSxwLmRlbGF5fHwyMDApKSxlKHAudGltZW91dCkmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0KHIucmVzb2x2ZWQpJiZmKG51bGwpfSxwLnRpbWVvdXQpKSksYz0hMSxyLmxvYWRpbmc/ci5sb2FkaW5nQ29tcDpyLnJlc29sdmVkfXIuY29udGV4dHMucHVzaChhKX0obCx1LGEpKSkpcmV0dXJuIGZ1bmN0aW9uKHQsZSxuLHIsaSl7dmFyIG89Z3IoKTtyZXR1cm4gby5hc3luY0ZhY3Rvcnk9dCxvLmFzeW5jTWV0YT17ZGF0YTplLGNvbnRleHQ6bixjaGlsZHJlbjpyLHRhZzppfSxvfShsLG8sYSxzLGMpO289b3x8e30sRnQociksZShvLm1vZGVsKSYmZnVuY3Rpb24odCxuKXt2YXIgcj10Lm1vZGVsJiZ0Lm1vZGVsLnByb3B8fFwidmFsdWVcIixpPXQubW9kZWwmJnQubW9kZWwuZXZlbnR8fFwiaW5wdXRcIjsobi5wcm9wc3x8KG4ucHJvcHM9e30pKVtyXT1uLm1vZGVsLnZhbHVlO3ZhciBvPW4ub258fChuLm9uPXt9KTtlKG9baV0pP29baV09W24ubW9kZWwuY2FsbGJhY2tdLmNvbmNhdChvW2ldKTpvW2ldPW4ubW9kZWwuY2FsbGJhY2t9KHIub3B0aW9ucyxvKTt2YXIgZj1mdW5jdGlvbihuLHIsaSl7dmFyIG89ci5vcHRpb25zLnByb3BzO2lmKCF0KG8pKXt2YXIgYT17fSxzPW4uYXR0cnMsYz1uLnByb3BzO2lmKGUocyl8fGUoYykpZm9yKHZhciB1IGluIG8pe3ZhciBsPUhuKHUpO1EoYSxjLHUsbCwhMCl8fFEoYSxzLHUsbCwhMSl9cmV0dXJuIGF9fShvLHIpO2lmKG4oci5vcHRpb25zLmZ1bmN0aW9uYWwpKXJldHVybiBmdW5jdGlvbih0LG4scixpLG8pe3ZhciBhPXQub3B0aW9ucyxzPXt9LGM9YS5wcm9wcztpZihlKGMpKWZvcih2YXIgdSBpbiBjKXNbdV09SCh1LGMsbnx8am4pO2Vsc2UgZShyLmF0dHJzKSYmTHQocyxyLmF0dHJzKSxlKHIucHJvcHMpJiZMdChzLHIucHJvcHMpO3ZhciBsPW5ldyBJdChyLHMsbyxpLHQpLGY9YS5yZW5kZXIuY2FsbChudWxsLGwuX2MsbCk7cmV0dXJuIGYgaW5zdGFuY2VvZiBtciYmKGYuZm5Db250ZXh0PWksZi5mbk9wdGlvbnM9YSxyLnNsb3QmJigoZi5kYXRhfHwoZi5kYXRhPXt9KSkuc2xvdD1yLnNsb3QpKSxmfShyLGYsbyxhLHMpO3ZhciBwPW8ub247aWYoby5vbj1vLm5hdGl2ZU9uLG4oci5vcHRpb25zLmFic3RyYWN0KSl7dmFyIGQ9by5zbG90O289e30sZCYmKG8uc2xvdD1kKX0hZnVuY3Rpb24odCl7dC5ob29rfHwodC5ob29rPXt9KTtmb3IodmFyIGU9MDtlPEdyLmxlbmd0aDtlKyspe3ZhciBuPUdyW2VdLHI9dC5ob29rW25dLGk9V3Jbbl07dC5ob29rW25dPXI/ZnVuY3Rpb24odCxlKXtyZXR1cm4gZnVuY3Rpb24obixyLGksbyl7dChuLHIsaSxvKSxlKG4scixpLG8pfX0oaSxyKTppfX0obyk7dmFyIHY9ci5vcHRpb25zLm5hbWV8fGM7cmV0dXJuIG5ldyBtcihcInZ1ZS1jb21wb25lbnQtXCIrci5jaWQrKHY/XCItXCIrdjpcIlwiKSxvLHZvaWQgMCx2b2lkIDAsdm9pZCAwLGEse0N0b3I6cixwcm9wc0RhdGE6ZixsaXN0ZW5lcnM6cCx0YWc6YyxjaGlsZHJlbjpzfSxsKX19fWZ1bmN0aW9uIER0KHQsaSxvLGEscyxjKXtyZXR1cm4oQXJyYXkuaXNBcnJheShvKXx8cihvKSkmJihzPWEsYT1vLG89dm9pZCAwKSxuKGMpJiYocz1YciksZnVuY3Rpb24odCxuLGksbyxhKXtpZihlKGkpJiZlKGkuX19vYl9fKSlyZXR1cm4gZ3IoKTtlKGkpJiZlKGkuaXMpJiYobj1pLmlzKTtpZighbilyZXR1cm4gZ3IoKTtBcnJheS5pc0FycmF5KG8pJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBvWzBdJiYoKGk9aXx8e30pLnNjb3BlZFNsb3RzPXtkZWZhdWx0Om9bMF19LG8ubGVuZ3RoPTApO2E9PT1Ycj9vPWZ1bmN0aW9uKHQpe3JldHVybiByKHQpP1t4KHQpXTpBcnJheS5pc0FycmF5KHQpP2V0KHQpOnZvaWQgMH0obyk6YT09PVpyJiYobz1mdW5jdGlvbih0KXtmb3IodmFyIGU9MDtlPHQubGVuZ3RoO2UrKylpZihBcnJheS5pc0FycmF5KHRbZV0pKXJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLHQpO3JldHVybiB0fShvKSk7dmFyIHMsYztpZihcInN0cmluZ1wiPT10eXBlb2Ygbil7dmFyIHU7Yz10LiR2bm9kZSYmdC4kdm5vZGUubnN8fEpuLmdldFRhZ05hbWVzcGFjZShuKSxzPUpuLmlzUmVzZXJ2ZWRUYWcobik/bmV3IG1yKEpuLnBhcnNlUGxhdGZvcm1UYWdOYW1lKG4pLGksbyx2b2lkIDAsdm9pZCAwLHQpOmUodT1SKHQuJG9wdGlvbnMsXCJjb21wb25lbnRzXCIsbikpP010KHUsaSx0LG8sbik6bmV3IG1yKG4saSxvLHZvaWQgMCx2b2lkIDAsdCl9ZWxzZSBzPU10KG4saSx0LG8pO3JldHVybiBlKHMpPyhjJiZQdChzLGMpLHMpOmdyKCl9KHQsaSxvLGEscyl9ZnVuY3Rpb24gUHQocixpLG8pe2lmKHIubnM9aSxcImZvcmVpZ25PYmplY3RcIj09PXIudGFnJiYoaT12b2lkIDAsbz0hMCksZShyLmNoaWxkcmVuKSlmb3IodmFyIGE9MCxzPXIuY2hpbGRyZW4ubGVuZ3RoO2E8czthKyspe3ZhciBjPXIuY2hpbGRyZW5bYV07ZShjLnRhZykmJih0KGMubnMpfHxuKG8pKSYmUHQoYyxpLG8pfX1mdW5jdGlvbiBGdCh0KXt2YXIgZT10Lm9wdGlvbnM7aWYodC5zdXBlcil7dmFyIG49RnQodC5zdXBlcik7aWYobiE9PXQuc3VwZXJPcHRpb25zKXt0LnN1cGVyT3B0aW9ucz1uO3ZhciByPWZ1bmN0aW9uKHQpe3ZhciBlLG49dC5vcHRpb25zLHI9dC5leHRlbmRPcHRpb25zLGk9dC5zZWFsZWRPcHRpb25zO2Zvcih2YXIgbyBpbiBuKW5bb10hPT1pW29dJiYoZXx8KGU9e30pLGVbb109ZnVuY3Rpb24odCxlLG4pe3tpZihBcnJheS5pc0FycmF5KHQpKXt2YXIgcj1bXTtuPUFycmF5LmlzQXJyYXkobik/bjpbbl0sZT1BcnJheS5pc0FycmF5KGUpP2U6W2VdO2Zvcih2YXIgaT0wO2k8dC5sZW5ndGg7aSsrKShlLmluZGV4T2YodFtpXSk+PTB8fG4uaW5kZXhPZih0W2ldKTwwKSYmci5wdXNoKHRbaV0pO3JldHVybiByfXJldHVybiB0fX0obltvXSxyW29dLGlbb10pKTtyZXR1cm4gZX0odCk7ciYmaCh0LmV4dGVuZE9wdGlvbnMsciksKGU9dC5vcHRpb25zPUYobix0LmV4dGVuZE9wdGlvbnMpKS5uYW1lJiYoZS5jb21wb25lbnRzW2UubmFtZV09dCl9fXJldHVybiBlfWZ1bmN0aW9uIFJ0KHQpe3RoaXMuX2luaXQodCl9ZnVuY3Rpb24gSHQodCl7dC5jaWQ9MDt2YXIgZT0xO3QuZXh0ZW5kPWZ1bmN0aW9uKHQpe3Q9dHx8e307dmFyIG49dGhpcyxyPW4uY2lkLGk9dC5fQ3Rvcnx8KHQuX0N0b3I9e30pO2lmKGlbcl0pcmV0dXJuIGlbcl07dmFyIG89dC5uYW1lfHxuLm9wdGlvbnMubmFtZSxhPWZ1bmN0aW9uKHQpe3RoaXMuX2luaXQodCl9O3JldHVybiBhLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKG4ucHJvdG90eXBlKSxhLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1hLGEuY2lkPWUrKyxhLm9wdGlvbnM9RihuLm9wdGlvbnMsdCksYS5zdXBlcj1uLGEub3B0aW9ucy5wcm9wcyYmZnVuY3Rpb24odCl7dmFyIGU9dC5vcHRpb25zLnByb3BzO2Zvcih2YXIgbiBpbiBlKW10KHQucHJvdG90eXBlLFwiX3Byb3BzXCIsbil9KGEpLGEub3B0aW9ucy5jb21wdXRlZCYmZnVuY3Rpb24odCl7dmFyIGU9dC5vcHRpb25zLmNvbXB1dGVkO2Zvcih2YXIgbiBpbiBlKWd0KHQucHJvdG90eXBlLG4sZVtuXSl9KGEpLGEuZXh0ZW5kPW4uZXh0ZW5kLGEubWl4aW49bi5taXhpbixhLnVzZT1uLnVzZSx6bi5mb3JFYWNoKGZ1bmN0aW9uKHQpe2FbdF09blt0XX0pLG8mJihhLm9wdGlvbnMuY29tcG9uZW50c1tvXT1hKSxhLnN1cGVyT3B0aW9ucz1uLm9wdGlvbnMsYS5leHRlbmRPcHRpb25zPXQsYS5zZWFsZWRPcHRpb25zPWgoe30sYS5vcHRpb25zKSxpW3JdPWEsYX19ZnVuY3Rpb24gQnQodCl7cmV0dXJuIHQmJih0LkN0b3Iub3B0aW9ucy5uYW1lfHx0LnRhZyl9ZnVuY3Rpb24gVXQodCxlKXtyZXR1cm4gQXJyYXkuaXNBcnJheSh0KT90LmluZGV4T2YoZSk+LTE6XCJzdHJpbmdcIj09dHlwZW9mIHQ/dC5zcGxpdChcIixcIikuaW5kZXhPZihlKT4tMTohIWZ1bmN0aW9uKHQpe3JldHVyblwiW29iamVjdCBSZWdFeHBdXCI9PT1Obi5jYWxsKHQpfSh0KSYmdC50ZXN0KGUpfWZ1bmN0aW9uIFZ0KHQsZSl7dmFyIG49dC5jYWNoZSxyPXQua2V5cyxpPXQuX3Zub2RlO2Zvcih2YXIgbyBpbiBuKXt2YXIgYT1uW29dO2lmKGEpe3ZhciBzPUJ0KGEuY29tcG9uZW50T3B0aW9ucyk7cyYmIWUocykmJnp0KG4sbyxyLGkpfX19ZnVuY3Rpb24genQodCxlLG4scil7dmFyIGk9dFtlXTshaXx8ciYmaS50YWc9PT1yLnRhZ3x8aS5jb21wb25lbnRJbnN0YW5jZS4kZGVzdHJveSgpLHRbZV09bnVsbCxsKG4sZSl9ZnVuY3Rpb24gS3QodCl7Zm9yKHZhciBuPXQuZGF0YSxyPXQsaT10O2UoaS5jb21wb25lbnRJbnN0YW5jZSk7KShpPWkuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlKSYmaS5kYXRhJiYobj1KdChpLmRhdGEsbikpO2Zvcig7ZShyPXIucGFyZW50KTspciYmci5kYXRhJiYobj1KdChuLHIuZGF0YSkpO3JldHVybiBmdW5jdGlvbih0LG4pe2lmKGUodCl8fGUobikpcmV0dXJuIHF0KHQsV3QobikpO3JldHVyblwiXCJ9KG4uc3RhdGljQ2xhc3Msbi5jbGFzcyl9ZnVuY3Rpb24gSnQodCxuKXtyZXR1cm57c3RhdGljQ2xhc3M6cXQodC5zdGF0aWNDbGFzcyxuLnN0YXRpY0NsYXNzKSxjbGFzczplKHQuY2xhc3MpP1t0LmNsYXNzLG4uY2xhc3NdOm4uY2xhc3N9fWZ1bmN0aW9uIHF0KHQsZSl7cmV0dXJuIHQ/ZT90K1wiIFwiK2U6dDplfHxcIlwifWZ1bmN0aW9uIFd0KHQpe3JldHVybiBBcnJheS5pc0FycmF5KHQpP2Z1bmN0aW9uKHQpe2Zvcih2YXIgbixyPVwiXCIsaT0wLG89dC5sZW5ndGg7aTxvO2krKyllKG49V3QodFtpXSkpJiZcIlwiIT09biYmKHImJihyKz1cIiBcIikscis9bik7cmV0dXJuIHJ9KHQpOmkodCk/ZnVuY3Rpb24odCl7dmFyIGU9XCJcIjtmb3IodmFyIG4gaW4gdCl0W25dJiYoZSYmKGUrPVwiIFwiKSxlKz1uKTtyZXR1cm4gZX0odCk6XCJzdHJpbmdcIj09dHlwZW9mIHQ/dDpcIlwifWZ1bmN0aW9uIEd0KHQpe3JldHVybiBiaSh0KT9cInN2Z1wiOlwibWF0aFwiPT09dD9cIm1hdGhcIjp2b2lkIDB9ZnVuY3Rpb24gWnQodCl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe3ZhciBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodCk7cmV0dXJuIGV8fGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIil9cmV0dXJuIHR9ZnVuY3Rpb24gWHQodCxlKXt2YXIgbj10LmRhdGEucmVmO2lmKG4pe3ZhciByPXQuY29udGV4dCxpPXQuY29tcG9uZW50SW5zdGFuY2V8fHQuZWxtLG89ci4kcmVmcztlP0FycmF5LmlzQXJyYXkob1tuXSk/bChvW25dLGkpOm9bbl09PT1pJiYob1tuXT12b2lkIDApOnQuZGF0YS5yZWZJbkZvcj9BcnJheS5pc0FycmF5KG9bbl0pP29bbl0uaW5kZXhPZihpKTwwJiZvW25dLnB1c2goaSk6b1tuXT1baV06b1tuXT1pfX1mdW5jdGlvbiBZdChyLGkpe3JldHVybiByLmtleT09PWkua2V5JiYoci50YWc9PT1pLnRhZyYmci5pc0NvbW1lbnQ9PT1pLmlzQ29tbWVudCYmZShyLmRhdGEpPT09ZShpLmRhdGEpJiZmdW5jdGlvbih0LG4pe2lmKFwiaW5wdXRcIiE9PXQudGFnKXJldHVybiEwO3ZhciByLGk9ZShyPXQuZGF0YSkmJmUocj1yLmF0dHJzKSYmci50eXBlLG89ZShyPW4uZGF0YSkmJmUocj1yLmF0dHJzKSYmci50eXBlO3JldHVybiBpPT09b3x8d2koaSkmJndpKG8pfShyLGkpfHxuKHIuaXNBc3luY1BsYWNlaG9sZGVyKSYmci5hc3luY0ZhY3Rvcnk9PT1pLmFzeW5jRmFjdG9yeSYmdChpLmFzeW5jRmFjdG9yeS5lcnJvcikpfWZ1bmN0aW9uIFF0KHQsbixyKXt2YXIgaSxvLGE9e307Zm9yKGk9bjtpPD1yOysraSllKG89dFtpXS5rZXkpJiYoYVtvXT1pKTtyZXR1cm4gYX1mdW5jdGlvbiB0ZSh0LGUpeyh0LmRhdGEuZGlyZWN0aXZlc3x8ZS5kYXRhLmRpcmVjdGl2ZXMpJiZmdW5jdGlvbih0LGUpe3ZhciBuLHIsaSxvPXQ9PT1BaSxhPWU9PT1BaSxzPWVlKHQuZGF0YS5kaXJlY3RpdmVzLHQuY29udGV4dCksYz1lZShlLmRhdGEuZGlyZWN0aXZlcyxlLmNvbnRleHQpLHU9W10sbD1bXTtmb3IobiBpbiBjKXI9c1tuXSxpPWNbbl0scj8oaS5vbGRWYWx1ZT1yLnZhbHVlLG5lKGksXCJ1cGRhdGVcIixlLHQpLGkuZGVmJiZpLmRlZi5jb21wb25lbnRVcGRhdGVkJiZsLnB1c2goaSkpOihuZShpLFwiYmluZFwiLGUsdCksaS5kZWYmJmkuZGVmLmluc2VydGVkJiZ1LnB1c2goaSkpO2lmKHUubGVuZ3RoKXt2YXIgZj1mdW5jdGlvbigpe2Zvcih2YXIgbj0wO248dS5sZW5ndGg7bisrKW5lKHVbbl0sXCJpbnNlcnRlZFwiLGUsdCl9O28/WShlLFwiaW5zZXJ0XCIsZik6ZigpfWwubGVuZ3RoJiZZKGUsXCJwb3N0cGF0Y2hcIixmdW5jdGlvbigpe2Zvcih2YXIgbj0wO248bC5sZW5ndGg7bisrKW5lKGxbbl0sXCJjb21wb25lbnRVcGRhdGVkXCIsZSx0KX0pO2lmKCFvKWZvcihuIGluIHMpY1tuXXx8bmUoc1tuXSxcInVuYmluZFwiLHQsdCxhKX0odCxlKX1mdW5jdGlvbiBlZSh0LGUpe3ZhciBuPU9iamVjdC5jcmVhdGUobnVsbCk7aWYoIXQpcmV0dXJuIG47dmFyIHIsaTtmb3Iocj0wO3I8dC5sZW5ndGg7cisrKShpPXRbcl0pLm1vZGlmaWVyc3x8KGkubW9kaWZpZXJzPVRpKSxuW2Z1bmN0aW9uKHQpe3JldHVybiB0LnJhd05hbWV8fHQubmFtZStcIi5cIitPYmplY3Qua2V5cyh0Lm1vZGlmaWVyc3x8e30pLmpvaW4oXCIuXCIpfShpKV09aSxpLmRlZj1SKGUuJG9wdGlvbnMsXCJkaXJlY3RpdmVzXCIsaS5uYW1lKTtyZXR1cm4gbn1mdW5jdGlvbiBuZSh0LGUsbixyLGkpe3ZhciBvPXQuZGVmJiZ0LmRlZltlXTtpZihvKXRyeXtvKG4uZWxtLHQsbixyLGkpfWNhdGNoKHIpe1YocixuLmNvbnRleHQsXCJkaXJlY3RpdmUgXCIrdC5uYW1lK1wiIFwiK2UrXCIgaG9va1wiKX19ZnVuY3Rpb24gcmUobixyKXt2YXIgaT1yLmNvbXBvbmVudE9wdGlvbnM7aWYoIShlKGkpJiYhMT09PWkuQ3Rvci5vcHRpb25zLmluaGVyaXRBdHRyc3x8dChuLmRhdGEuYXR0cnMpJiZ0KHIuZGF0YS5hdHRycykpKXt2YXIgbyxhLHM9ci5lbG0sYz1uLmRhdGEuYXR0cnN8fHt9LHU9ci5kYXRhLmF0dHJzfHx7fTtlKHUuX19vYl9fKSYmKHU9ci5kYXRhLmF0dHJzPWgoe30sdSkpO2ZvcihvIGluIHUpYT11W29dLGNbb10hPT1hJiZpZShzLG8sYSk7KFFufHxlcikmJnUudmFsdWUhPT1jLnZhbHVlJiZpZShzLFwidmFsdWVcIix1LnZhbHVlKTtmb3IobyBpbiBjKXQodVtvXSkmJihoaShvKT9zLnJlbW92ZUF0dHJpYnV0ZU5TKHZpLG1pKG8pKTpwaShvKXx8cy5yZW1vdmVBdHRyaWJ1dGUobykpfX1mdW5jdGlvbiBpZSh0LGUsbil7aWYoZGkoZSkpeWkobik/dC5yZW1vdmVBdHRyaWJ1dGUoZSk6KG49XCJhbGxvd2Z1bGxzY3JlZW5cIj09PWUmJlwiRU1CRURcIj09PXQudGFnTmFtZT9cInRydWVcIjplLHQuc2V0QXR0cmlidXRlKGUsbikpO2Vsc2UgaWYocGkoZSkpdC5zZXRBdHRyaWJ1dGUoZSx5aShuKXx8XCJmYWxzZVwiPT09bj9cImZhbHNlXCI6XCJ0cnVlXCIpO2Vsc2UgaWYoaGkoZSkpeWkobik/dC5yZW1vdmVBdHRyaWJ1dGVOUyh2aSxtaShlKSk6dC5zZXRBdHRyaWJ1dGVOUyh2aSxlLG4pO2Vsc2UgaWYoeWkobikpdC5yZW1vdmVBdHRyaWJ1dGUoZSk7ZWxzZXtpZihRbiYmIXRyJiZcIlRFWFRBUkVBXCI9PT10LnRhZ05hbWUmJlwicGxhY2Vob2xkZXJcIj09PWUmJiF0Ll9faWVwaCl7dmFyIHI9ZnVuY3Rpb24oZSl7ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLHIpfTt0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLHIpLHQuX19pZXBoPSEwfXQuc2V0QXR0cmlidXRlKGUsbil9fWZ1bmN0aW9uIG9lKG4scil7dmFyIGk9ci5lbG0sbz1yLmRhdGEsYT1uLmRhdGE7aWYoISh0KG8uc3RhdGljQ2xhc3MpJiZ0KG8uY2xhc3MpJiYodChhKXx8dChhLnN0YXRpY0NsYXNzKSYmdChhLmNsYXNzKSkpKXt2YXIgcz1LdChyKSxjPWkuX3RyYW5zaXRpb25DbGFzc2VzO2UoYykmJihzPXF0KHMsV3QoYykpKSxzIT09aS5fcHJldkNsYXNzJiYoaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLHMpLGkuX3ByZXZDbGFzcz1zKX19ZnVuY3Rpb24gYWUodCl7ZnVuY3Rpb24gZSgpeyhhfHwoYT1bXSkpLnB1c2godC5zbGljZSh2LGkpLnRyaW0oKSksdj1pKzF9dmFyIG4scixpLG8sYSxzPSExLGM9ITEsdT0hMSxsPSExLGY9MCxwPTAsZD0wLHY9MDtmb3IoaT0wO2k8dC5sZW5ndGg7aSsrKWlmKHI9bixuPXQuY2hhckNvZGVBdChpKSxzKTM5PT09biYmOTIhPT1yJiYocz0hMSk7ZWxzZSBpZihjKTM0PT09biYmOTIhPT1yJiYoYz0hMSk7ZWxzZSBpZih1KTk2PT09biYmOTIhPT1yJiYodT0hMSk7ZWxzZSBpZihsKTQ3PT09biYmOTIhPT1yJiYobD0hMSk7ZWxzZSBpZigxMjQhPT1ufHwxMjQ9PT10LmNoYXJDb2RlQXQoaSsxKXx8MTI0PT09dC5jaGFyQ29kZUF0KGktMSl8fGZ8fHB8fGQpe3N3aXRjaChuKXtjYXNlIDM0OmM9ITA7YnJlYWs7Y2FzZSAzOTpzPSEwO2JyZWFrO2Nhc2UgOTY6dT0hMDticmVhaztjYXNlIDQwOmQrKzticmVhaztjYXNlIDQxOmQtLTticmVhaztjYXNlIDkxOnArKzticmVhaztjYXNlIDkzOnAtLTticmVhaztjYXNlIDEyMzpmKys7YnJlYWs7Y2FzZSAxMjU6Zi0tfWlmKDQ3PT09bil7Zm9yKHZhciBoPWktMSxtPXZvaWQgMDtoPj0wJiZcIiBcIj09PShtPXQuY2hhckF0KGgpKTtoLS0pO20mJklpLnRlc3QobSl8fChsPSEwKX19ZWxzZSB2b2lkIDA9PT1vPyh2PWkrMSxvPXQuc2xpY2UoMCxpKS50cmltKCkpOmUoKTtpZih2b2lkIDA9PT1vP289dC5zbGljZSgwLGkpLnRyaW0oKTowIT09diYmZSgpLGEpZm9yKGk9MDtpPGEubGVuZ3RoO2krKylvPWZ1bmN0aW9uKHQsZSl7dmFyIG49ZS5pbmRleE9mKFwiKFwiKTt7aWYobjwwKXJldHVybidfZihcIicrZSsnXCIpKCcrdCtcIilcIjt2YXIgcj1lLnNsaWNlKDAsbiksaT1lLnNsaWNlKG4rMSk7cmV0dXJuJ19mKFwiJytyKydcIikoJyt0K1wiLFwiK2l9fShvLGFbaV0pO3JldHVybiBvfWZ1bmN0aW9uIHNlKHQpe2NvbnNvbGUuZXJyb3IoXCJbVnVlIGNvbXBpbGVyXTogXCIrdCl9ZnVuY3Rpb24gY2UodCxlKXtyZXR1cm4gdD90Lm1hcChmdW5jdGlvbih0KXtyZXR1cm4gdFtlXX0pLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gdH0pOltdfWZ1bmN0aW9uIHVlKHQsZSxuKXsodC5wcm9wc3x8KHQucHJvcHM9W10pKS5wdXNoKHtuYW1lOmUsdmFsdWU6bn0pLHQucGxhaW49ITF9ZnVuY3Rpb24gbGUodCxlLG4peyh0LmF0dHJzfHwodC5hdHRycz1bXSkpLnB1c2goe25hbWU6ZSx2YWx1ZTpufSksdC5wbGFpbj0hMX1mdW5jdGlvbiBmZSh0LGUsbil7dC5hdHRyc01hcFtlXT1uLHQuYXR0cnNMaXN0LnB1c2goe25hbWU6ZSx2YWx1ZTpufSl9ZnVuY3Rpb24gcGUodCxlLG4scixpLG8peyh0LmRpcmVjdGl2ZXN8fCh0LmRpcmVjdGl2ZXM9W10pKS5wdXNoKHtuYW1lOmUscmF3TmFtZTpuLHZhbHVlOnIsYXJnOmksbW9kaWZpZXJzOm99KSx0LnBsYWluPSExfWZ1bmN0aW9uIGRlKHQsZSxuLHIsaSxvKXsocj1yfHxqbikuY2FwdHVyZSYmKGRlbGV0ZSByLmNhcHR1cmUsZT1cIiFcIitlKSxyLm9uY2UmJihkZWxldGUgci5vbmNlLGU9XCJ+XCIrZSksci5wYXNzaXZlJiYoZGVsZXRlIHIucGFzc2l2ZSxlPVwiJlwiK2UpLFwiY2xpY2tcIj09PWUmJihyLnJpZ2h0PyhlPVwiY29udGV4dG1lbnVcIixkZWxldGUgci5yaWdodCk6ci5taWRkbGUmJihlPVwibW91c2V1cFwiKSk7dmFyIGE7ci5uYXRpdmU/KGRlbGV0ZSByLm5hdGl2ZSxhPXQubmF0aXZlRXZlbnRzfHwodC5uYXRpdmVFdmVudHM9e30pKTphPXQuZXZlbnRzfHwodC5ldmVudHM9e30pO3ZhciBzPXt2YWx1ZTpufTtyIT09am4mJihzLm1vZGlmaWVycz1yKTt2YXIgYz1hW2VdO0FycmF5LmlzQXJyYXkoYyk/aT9jLnVuc2hpZnQocyk6Yy5wdXNoKHMpOmFbZV09Yz9pP1tzLGNdOltjLHNdOnMsdC5wbGFpbj0hMX1mdW5jdGlvbiB2ZSh0LGUsbil7dmFyIHI9aGUodCxcIjpcIitlKXx8aGUodCxcInYtYmluZDpcIitlKTtpZihudWxsIT1yKXJldHVybiBhZShyKTtpZighMSE9PW4pe3ZhciBpPWhlKHQsZSk7aWYobnVsbCE9aSlyZXR1cm4gSlNPTi5zdHJpbmdpZnkoaSl9fWZ1bmN0aW9uIGhlKHQsZSxuKXt2YXIgcjtpZihudWxsIT0ocj10LmF0dHJzTWFwW2VdKSlmb3IodmFyIGk9dC5hdHRyc0xpc3Qsbz0wLGE9aS5sZW5ndGg7bzxhO28rKylpZihpW29dLm5hbWU9PT1lKXtpLnNwbGljZShvLDEpO2JyZWFrfXJldHVybiBuJiZkZWxldGUgdC5hdHRyc01hcFtlXSxyfWZ1bmN0aW9uIG1lKHQsZSxuKXt2YXIgcj1ufHx7fSxpPVwiJCR2XCI7ci50cmltJiYoaT1cIih0eXBlb2YgJCR2ID09PSAnc3RyaW5nJz8gJCR2LnRyaW0oKTogJCR2KVwiKSxyLm51bWJlciYmKGk9XCJfbihcIitpK1wiKVwiKTt2YXIgbz15ZShlLGkpO3QubW9kZWw9e3ZhbHVlOlwiKFwiK2UrXCIpXCIsZXhwcmVzc2lvbjonXCInK2UrJ1wiJyxjYWxsYmFjazpcImZ1bmN0aW9uICgkJHYpIHtcIitvK1wifVwifX1mdW5jdGlvbiB5ZSh0LGUpe3ZhciBuPWZ1bmN0aW9uKHQpe2lmKGVpPXQubGVuZ3RoLHQuaW5kZXhPZihcIltcIik8MHx8dC5sYXN0SW5kZXhPZihcIl1cIik8ZWktMSlyZXR1cm4oaWk9dC5sYXN0SW5kZXhPZihcIi5cIikpPi0xP3tleHA6dC5zbGljZSgwLGlpKSxrZXk6J1wiJyt0LnNsaWNlKGlpKzEpKydcIid9OntleHA6dCxrZXk6bnVsbH07bmk9dCxpaT1vaT1haT0wO2Zvcig7IV9lKCk7KWJlKHJpPWdlKCkpPyRlKHJpKTo5MT09PXJpJiZmdW5jdGlvbih0KXt2YXIgZT0xO29pPWlpO2Zvcig7IV9lKCk7KWlmKHQ9Z2UoKSxiZSh0KSkkZSh0KTtlbHNlIGlmKDkxPT09dCYmZSsrLDkzPT09dCYmZS0tLDA9PT1lKXthaT1paTticmVha319KHJpKTtyZXR1cm57ZXhwOnQuc2xpY2UoMCxvaSksa2V5OnQuc2xpY2Uob2krMSxhaSl9fSh0KTtyZXR1cm4gbnVsbD09PW4ua2V5P3QrXCI9XCIrZTpcIiRzZXQoXCIrbi5leHArXCIsIFwiK24ua2V5K1wiLCBcIitlK1wiKVwifWZ1bmN0aW9uIGdlKCl7cmV0dXJuIG5pLmNoYXJDb2RlQXQoKytpaSl9ZnVuY3Rpb24gX2UoKXtyZXR1cm4gaWk+PWVpfWZ1bmN0aW9uIGJlKHQpe3JldHVybiAzND09PXR8fDM5PT09dH1mdW5jdGlvbiAkZSh0KXtmb3IodmFyIGU9dDshX2UoKSYmKHQ9Z2UoKSkhPT1lOyk7fWZ1bmN0aW9uIENlKHQsZSxuLHIsaSl7ZT1mdW5jdGlvbih0KXtyZXR1cm4gdC5fd2l0aFRhc2t8fCh0Ll93aXRoVGFzaz1mdW5jdGlvbigpe0VyPSEwO3ZhciBlPXQuYXBwbHkobnVsbCxhcmd1bWVudHMpO3JldHVybiBFcj0hMSxlfSl9KGUpLG4mJihlPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1zaTtyZXR1cm4gZnVuY3Rpb24gaSgpe251bGwhPT10LmFwcGx5KG51bGwsYXJndW1lbnRzKSYmd2UoZSxpLG4scil9fShlLHQscikpLHNpLmFkZEV2ZW50TGlzdGVuZXIodCxlLG9yP3tjYXB0dXJlOnIscGFzc2l2ZTppfTpyKX1mdW5jdGlvbiB3ZSh0LGUsbixyKXsocnx8c2kpLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxlLl93aXRoVGFza3x8ZSxuKX1mdW5jdGlvbiB4ZShuLHIpe2lmKCF0KG4uZGF0YS5vbil8fCF0KHIuZGF0YS5vbikpe3ZhciBpPXIuZGF0YS5vbnx8e30sbz1uLmRhdGEub258fHt9O3NpPXIuZWxtLGZ1bmN0aW9uKHQpe2lmKGUodFtMaV0pKXt2YXIgbj1Rbj9cImNoYW5nZVwiOlwiaW5wdXRcIjt0W25dPVtdLmNvbmNhdCh0W0xpXSx0W25dfHxbXSksZGVsZXRlIHRbTGldfWUodFtNaV0pJiYodC5jaGFuZ2U9W10uY29uY2F0KHRbTWldLHQuY2hhbmdlfHxbXSksZGVsZXRlIHRbTWldKX0oaSksWChpLG8sQ2Usd2Usci5jb250ZXh0KSxzaT12b2lkIDB9fWZ1bmN0aW9uIGtlKG4scil7aWYoIXQobi5kYXRhLmRvbVByb3BzKXx8IXQoci5kYXRhLmRvbVByb3BzKSl7dmFyIGksbyxhPXIuZWxtLHM9bi5kYXRhLmRvbVByb3BzfHx7fSx1PXIuZGF0YS5kb21Qcm9wc3x8e307ZSh1Ll9fb2JfXykmJih1PXIuZGF0YS5kb21Qcm9wcz1oKHt9LHUpKTtmb3IoaSBpbiBzKXQodVtpXSkmJihhW2ldPVwiXCIpO2ZvcihpIGluIHUpe2lmKG89dVtpXSxcInRleHRDb250ZW50XCI9PT1pfHxcImlubmVySFRNTFwiPT09aSl7aWYoci5jaGlsZHJlbiYmKHIuY2hpbGRyZW4ubGVuZ3RoPTApLG89PT1zW2ldKWNvbnRpbnVlOzE9PT1hLmNoaWxkTm9kZXMubGVuZ3RoJiZhLnJlbW92ZUNoaWxkKGEuY2hpbGROb2Rlc1swXSl9aWYoXCJ2YWx1ZVwiPT09aSl7YS5fdmFsdWU9bzt2YXIgbD10KG8pP1wiXCI6U3RyaW5nKG8pOyhmdW5jdGlvbih0LG4pe3JldHVybiF0LmNvbXBvc2luZyYmKFwiT1BUSU9OXCI9PT10LnRhZ05hbWV8fGZ1bmN0aW9uKHQsZSl7dmFyIG49ITA7dHJ5e249ZG9jdW1lbnQuYWN0aXZlRWxlbWVudCE9PXR9Y2F0Y2godCl7fXJldHVybiBuJiZ0LnZhbHVlIT09ZX0odCxuKXx8ZnVuY3Rpb24odCxuKXt2YXIgcj10LnZhbHVlLGk9dC5fdk1vZGlmaWVycztpZihlKGkpKXtpZihpLmxhenkpcmV0dXJuITE7aWYoaS5udW1iZXIpcmV0dXJuIGMocikhPT1jKG4pO2lmKGkudHJpbSlyZXR1cm4gci50cmltKCkhPT1uLnRyaW0oKX1yZXR1cm4gciE9PW59KHQsbikpfSkoYSxsKSYmKGEudmFsdWU9bCl9ZWxzZSBhW2ldPW99fX1mdW5jdGlvbiBBZSh0KXt2YXIgZT1PZSh0LnN0eWxlKTtyZXR1cm4gdC5zdGF0aWNTdHlsZT9oKHQuc3RhdGljU3R5bGUsZSk6ZX1mdW5jdGlvbiBPZSh0KXtyZXR1cm4gQXJyYXkuaXNBcnJheSh0KT9tKHQpOlwic3RyaW5nXCI9PXR5cGVvZiB0P0ZpKHQpOnR9ZnVuY3Rpb24gU2UobixyKXt2YXIgaT1yLmRhdGEsbz1uLmRhdGE7aWYoISh0KGkuc3RhdGljU3R5bGUpJiZ0KGkuc3R5bGUpJiZ0KG8uc3RhdGljU3R5bGUpJiZ0KG8uc3R5bGUpKSl7dmFyIGEscyxjPXIuZWxtLHU9by5zdGF0aWNTdHlsZSxsPW8ubm9ybWFsaXplZFN0eWxlfHxvLnN0eWxlfHx7fSxmPXV8fGwscD1PZShyLmRhdGEuc3R5bGUpfHx7fTtyLmRhdGEubm9ybWFsaXplZFN0eWxlPWUocC5fX29iX18pP2goe30scCk6cDt2YXIgZD1mdW5jdGlvbih0LGUpe3ZhciBuLHI9e307aWYoZSlmb3IodmFyIGk9dDtpLmNvbXBvbmVudEluc3RhbmNlOykoaT1pLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZSkmJmkuZGF0YSYmKG49QWUoaS5kYXRhKSkmJmgocixuKTsobj1BZSh0LmRhdGEpKSYmaChyLG4pO2Zvcih2YXIgbz10O289by5wYXJlbnQ7KW8uZGF0YSYmKG49QWUoby5kYXRhKSkmJmgocixuKTtyZXR1cm4gcn0ociwhMCk7Zm9yKHMgaW4gZil0KGRbc10pJiZCaShjLHMsXCJcIik7Zm9yKHMgaW4gZCkoYT1kW3NdKSE9PWZbc10mJkJpKGMscyxudWxsPT1hP1wiXCI6YSl9fWZ1bmN0aW9uIFRlKHQsZSl7aWYoZSYmKGU9ZS50cmltKCkpKWlmKHQuY2xhc3NMaXN0KWUuaW5kZXhPZihcIiBcIik+LTE/ZS5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIHQuY2xhc3NMaXN0LmFkZChlKX0pOnQuY2xhc3NMaXN0LmFkZChlKTtlbHNle3ZhciBuPVwiIFwiKyh0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKStcIiBcIjtuLmluZGV4T2YoXCIgXCIrZStcIiBcIik8MCYmdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLChuK2UpLnRyaW0oKSl9fWZ1bmN0aW9uIEVlKHQsZSl7aWYoZSYmKGU9ZS50cmltKCkpKWlmKHQuY2xhc3NMaXN0KWUuaW5kZXhPZihcIiBcIik+LTE/ZS5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIHQuY2xhc3NMaXN0LnJlbW92ZShlKX0pOnQuY2xhc3NMaXN0LnJlbW92ZShlKSx0LmNsYXNzTGlzdC5sZW5ndGh8fHQucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIik7ZWxzZXtmb3IodmFyIG49XCIgXCIrKHQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpK1wiIFwiLHI9XCIgXCIrZStcIiBcIjtuLmluZGV4T2Yocik+PTA7KW49bi5yZXBsYWNlKHIsXCIgXCIpOyhuPW4udHJpbSgpKT90LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsbik6dC5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKX19ZnVuY3Rpb24gamUodCl7aWYodCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIHQpe3ZhciBlPXt9O3JldHVybiExIT09dC5jc3MmJmgoZSxLaSh0Lm5hbWV8fFwidlwiKSksaChlLHQpLGV9cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQ/S2kodCk6dm9pZCAwfX1mdW5jdGlvbiBOZSh0KXtRaShmdW5jdGlvbigpe1FpKHQpfSl9ZnVuY3Rpb24gSWUodCxlKXt2YXIgbj10Ll90cmFuc2l0aW9uQ2xhc3Nlc3x8KHQuX3RyYW5zaXRpb25DbGFzc2VzPVtdKTtuLmluZGV4T2YoZSk8MCYmKG4ucHVzaChlKSxUZSh0LGUpKX1mdW5jdGlvbiBMZSh0LGUpe3QuX3RyYW5zaXRpb25DbGFzc2VzJiZsKHQuX3RyYW5zaXRpb25DbGFzc2VzLGUpLEVlKHQsZSl9ZnVuY3Rpb24gTWUodCxlLG4pe3ZhciByPURlKHQsZSksaT1yLnR5cGUsbz1yLnRpbWVvdXQsYT1yLnByb3BDb3VudDtpZighaSlyZXR1cm4gbigpO3ZhciBzPWk9PT1xaT9aaTpZaSxjPTAsdT1mdW5jdGlvbigpe3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihzLGwpLG4oKX0sbD1mdW5jdGlvbihlKXtlLnRhcmdldD09PXQmJisrYz49YSYmdSgpfTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YzxhJiZ1KCl9LG8rMSksdC5hZGRFdmVudExpc3RlbmVyKHMsbCl9ZnVuY3Rpb24gRGUodCxlKXt2YXIgbixyPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpLGk9cltHaStcIkRlbGF5XCJdLnNwbGl0KFwiLCBcIiksbz1yW0dpK1wiRHVyYXRpb25cIl0uc3BsaXQoXCIsIFwiKSxhPVBlKGksbykscz1yW1hpK1wiRGVsYXlcIl0uc3BsaXQoXCIsIFwiKSxjPXJbWGkrXCJEdXJhdGlvblwiXS5zcGxpdChcIiwgXCIpLHU9UGUocyxjKSxsPTAsZj0wO2U9PT1xaT9hPjAmJihuPXFpLGw9YSxmPW8ubGVuZ3RoKTplPT09V2k/dT4wJiYobj1XaSxsPXUsZj1jLmxlbmd0aCk6Zj0obj0obD1NYXRoLm1heChhLHUpKT4wP2E+dT9xaTpXaTpudWxsKT9uPT09cWk/by5sZW5ndGg6Yy5sZW5ndGg6MDtyZXR1cm57dHlwZTpuLHRpbWVvdXQ6bCxwcm9wQ291bnQ6ZixoYXNUcmFuc2Zvcm06bj09PXFpJiZ0by50ZXN0KHJbR2krXCJQcm9wZXJ0eVwiXSl9fWZ1bmN0aW9uIFBlKHQsZSl7Zm9yKDt0Lmxlbmd0aDxlLmxlbmd0aDspdD10LmNvbmNhdCh0KTtyZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCxlLm1hcChmdW5jdGlvbihlLG4pe3JldHVybiBGZShlKStGZSh0W25dKX0pKX1mdW5jdGlvbiBGZSh0KXtyZXR1cm4gMWUzKk51bWJlcih0LnNsaWNlKDAsLTEpKX1mdW5jdGlvbiBSZShuLHIpe3ZhciBvPW4uZWxtO2Uoby5fbGVhdmVDYikmJihvLl9sZWF2ZUNiLmNhbmNlbGxlZD0hMCxvLl9sZWF2ZUNiKCkpO3ZhciBhPWplKG4uZGF0YS50cmFuc2l0aW9uKTtpZighdChhKSYmIWUoby5fZW50ZXJDYikmJjE9PT1vLm5vZGVUeXBlKXtmb3IodmFyIHM9YS5jc3MsdT1hLnR5cGUsbD1hLmVudGVyQ2xhc3MsZj1hLmVudGVyVG9DbGFzcyxwPWEuZW50ZXJBY3RpdmVDbGFzcyxkPWEuYXBwZWFyQ2xhc3Msdj1hLmFwcGVhclRvQ2xhc3MsaD1hLmFwcGVhckFjdGl2ZUNsYXNzLG09YS5iZWZvcmVFbnRlcix5PWEuZW50ZXIsZz1hLmFmdGVyRW50ZXIsXz1hLmVudGVyQ2FuY2VsbGVkLCQ9YS5iZWZvcmVBcHBlYXIsQz1hLmFwcGVhcix3PWEuYWZ0ZXJBcHBlYXIseD1hLmFwcGVhckNhbmNlbGxlZCxrPWEuZHVyYXRpb24sQT1QcixPPVByLiR2bm9kZTtPJiZPLnBhcmVudDspQT0oTz1PLnBhcmVudCkuY29udGV4dDt2YXIgUz0hQS5faXNNb3VudGVkfHwhbi5pc1Jvb3RJbnNlcnQ7aWYoIVN8fEN8fFwiXCI9PT1DKXt2YXIgVD1TJiZkP2Q6bCxFPVMmJmg/aDpwLGo9UyYmdj92OmYsTj1TPyR8fG06bSxJPVMmJlwiZnVuY3Rpb25cIj09dHlwZW9mIEM/Qzp5LEw9Uz93fHxnOmcsTT1TP3h8fF86XyxEPWMoaShrKT9rLmVudGVyOmspLFA9ITEhPT1zJiYhdHIsRj1VZShJKSxSPW8uX2VudGVyQ2I9YihmdW5jdGlvbigpe1AmJihMZShvLGopLExlKG8sRSkpLFIuY2FuY2VsbGVkPyhQJiZMZShvLFQpLE0mJk0obykpOkwmJkwobyksby5fZW50ZXJDYj1udWxsfSk7bi5kYXRhLnNob3d8fFkobixcImluc2VydFwiLGZ1bmN0aW9uKCl7dmFyIHQ9by5wYXJlbnROb2RlLGU9dCYmdC5fcGVuZGluZyYmdC5fcGVuZGluZ1tuLmtleV07ZSYmZS50YWc9PT1uLnRhZyYmZS5lbG0uX2xlYXZlQ2ImJmUuZWxtLl9sZWF2ZUNiKCksSSYmSShvLFIpfSksTiYmTihvKSxQJiYoSWUobyxUKSxJZShvLEUpLE5lKGZ1bmN0aW9uKCl7SWUobyxqKSxMZShvLFQpLFIuY2FuY2VsbGVkfHxGfHwoQmUoRCk/c2V0VGltZW91dChSLEQpOk1lKG8sdSxSKSl9KSksbi5kYXRhLnNob3cmJihyJiZyKCksSSYmSShvLFIpKSxQfHxGfHxSKCl9fX1mdW5jdGlvbiBIZShuLHIpe2Z1bmN0aW9uIG8oKXt4LmNhbmNlbGxlZHx8KG4uZGF0YS5zaG93fHwoKGEucGFyZW50Tm9kZS5fcGVuZGluZ3x8KGEucGFyZW50Tm9kZS5fcGVuZGluZz17fSkpW24ua2V5XT1uKSx2JiZ2KGEpLCQmJihJZShhLGYpLEllKGEsZCksTmUoZnVuY3Rpb24oKXtJZShhLHApLExlKGEsZikseC5jYW5jZWxsZWR8fEN8fChCZSh3KT9zZXRUaW1lb3V0KHgsdyk6TWUoYSxsLHgpKX0pKSxoJiZoKGEseCksJHx8Q3x8eCgpKX12YXIgYT1uLmVsbTtlKGEuX2VudGVyQ2IpJiYoYS5fZW50ZXJDYi5jYW5jZWxsZWQ9ITAsYS5fZW50ZXJDYigpKTt2YXIgcz1qZShuLmRhdGEudHJhbnNpdGlvbik7aWYodChzKXx8MSE9PWEubm9kZVR5cGUpcmV0dXJuIHIoKTtpZighZShhLl9sZWF2ZUNiKSl7dmFyIHU9cy5jc3MsbD1zLnR5cGUsZj1zLmxlYXZlQ2xhc3MscD1zLmxlYXZlVG9DbGFzcyxkPXMubGVhdmVBY3RpdmVDbGFzcyx2PXMuYmVmb3JlTGVhdmUsaD1zLmxlYXZlLG09cy5hZnRlckxlYXZlLHk9cy5sZWF2ZUNhbmNlbGxlZCxnPXMuZGVsYXlMZWF2ZSxfPXMuZHVyYXRpb24sJD0hMSE9PXUmJiF0cixDPVVlKGgpLHc9YyhpKF8pP18ubGVhdmU6XykseD1hLl9sZWF2ZUNiPWIoZnVuY3Rpb24oKXthLnBhcmVudE5vZGUmJmEucGFyZW50Tm9kZS5fcGVuZGluZyYmKGEucGFyZW50Tm9kZS5fcGVuZGluZ1tuLmtleV09bnVsbCksJCYmKExlKGEscCksTGUoYSxkKSkseC5jYW5jZWxsZWQ/KCQmJkxlKGEsZikseSYmeShhKSk6KHIoKSxtJiZtKGEpKSxhLl9sZWF2ZUNiPW51bGx9KTtnP2cobyk6bygpfX1mdW5jdGlvbiBCZSh0KXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgdCYmIWlzTmFOKHQpfWZ1bmN0aW9uIFVlKG4pe2lmKHQobikpcmV0dXJuITE7dmFyIHI9bi5mbnM7cmV0dXJuIGUocik/VWUoQXJyYXkuaXNBcnJheShyKT9yWzBdOnIpOihuLl9sZW5ndGh8fG4ubGVuZ3RoKT4xfWZ1bmN0aW9uIFZlKHQsZSl7ITAhPT1lLmRhdGEuc2hvdyYmUmUoZSl9ZnVuY3Rpb24gemUodCxlLG4pe0tlKHQsZSxuKSwoUW58fGVyKSYmc2V0VGltZW91dChmdW5jdGlvbigpe0tlKHQsZSxuKX0sMCl9ZnVuY3Rpb24gS2UodCxlLG4pe3ZhciByPWUudmFsdWUsaT10Lm11bHRpcGxlO2lmKCFpfHxBcnJheS5pc0FycmF5KHIpKXtmb3IodmFyIG8sYSxzPTAsYz10Lm9wdGlvbnMubGVuZ3RoO3M8YztzKyspaWYoYT10Lm9wdGlvbnNbc10saSlvPV8ocixxZShhKSk+LTEsYS5zZWxlY3RlZCE9PW8mJihhLnNlbGVjdGVkPW8pO2Vsc2UgaWYoZyhxZShhKSxyKSlyZXR1cm4gdm9pZCh0LnNlbGVjdGVkSW5kZXghPT1zJiYodC5zZWxlY3RlZEluZGV4PXMpKTtpfHwodC5zZWxlY3RlZEluZGV4PS0xKX19ZnVuY3Rpb24gSmUodCxlKXtyZXR1cm4gZS5ldmVyeShmdW5jdGlvbihlKXtyZXR1cm4hZyhlLHQpfSl9ZnVuY3Rpb24gcWUodCl7cmV0dXJuXCJfdmFsdWVcImluIHQ/dC5fdmFsdWU6dC52YWx1ZX1mdW5jdGlvbiBXZSh0KXt0LnRhcmdldC5jb21wb3Npbmc9ITB9ZnVuY3Rpb24gR2UodCl7dC50YXJnZXQuY29tcG9zaW5nJiYodC50YXJnZXQuY29tcG9zaW5nPSExLFplKHQudGFyZ2V0LFwiaW5wdXRcIikpfWZ1bmN0aW9uIFplKHQsZSl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJIVE1MRXZlbnRzXCIpO24uaW5pdEV2ZW50KGUsITAsITApLHQuZGlzcGF0Y2hFdmVudChuKX1mdW5jdGlvbiBYZSh0KXtyZXR1cm4hdC5jb21wb25lbnRJbnN0YW5jZXx8dC5kYXRhJiZ0LmRhdGEudHJhbnNpdGlvbj90OlhlKHQuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlKX1mdW5jdGlvbiBZZSh0KXt2YXIgZT10JiZ0LmNvbXBvbmVudE9wdGlvbnM7cmV0dXJuIGUmJmUuQ3Rvci5vcHRpb25zLmFic3RyYWN0P1llKGl0KGUuY2hpbGRyZW4pKTp0fWZ1bmN0aW9uIFFlKHQpe3ZhciBlPXt9LG49dC4kb3B0aW9ucztmb3IodmFyIHIgaW4gbi5wcm9wc0RhdGEpZVtyXT10W3JdO3ZhciBpPW4uX3BhcmVudExpc3RlbmVycztmb3IodmFyIG8gaW4gaSllW1BuKG8pXT1pW29dO3JldHVybiBlfWZ1bmN0aW9uIHRuKHQsZSl7aWYoL1xcZC1rZWVwLWFsaXZlJC8udGVzdChlLnRhZykpcmV0dXJuIHQoXCJrZWVwLWFsaXZlXCIse3Byb3BzOmUuY29tcG9uZW50T3B0aW9ucy5wcm9wc0RhdGF9KX1mdW5jdGlvbiBlbih0KXt0LmVsbS5fbW92ZUNiJiZ0LmVsbS5fbW92ZUNiKCksdC5lbG0uX2VudGVyQ2ImJnQuZWxtLl9lbnRlckNiKCl9ZnVuY3Rpb24gbm4odCl7dC5kYXRhLm5ld1Bvcz10LmVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKX1mdW5jdGlvbiBybih0KXt2YXIgZT10LmRhdGEucG9zLG49dC5kYXRhLm5ld1BvcyxyPWUubGVmdC1uLmxlZnQsaT1lLnRvcC1uLnRvcDtpZihyfHxpKXt0LmRhdGEubW92ZWQ9ITA7dmFyIG89dC5lbG0uc3R5bGU7by50cmFuc2Zvcm09by5XZWJraXRUcmFuc2Zvcm09XCJ0cmFuc2xhdGUoXCIrcitcInB4LFwiK2krXCJweClcIixvLnRyYW5zaXRpb25EdXJhdGlvbj1cIjBzXCJ9fWZ1bmN0aW9uIG9uKHQsZSl7dmFyIG49ZT96bzpWbztyZXR1cm4gdC5yZXBsYWNlKG4sZnVuY3Rpb24odCl7cmV0dXJuIFVvW3RdfSl9ZnVuY3Rpb24gYW4odCxlLG4pe3JldHVybnt0eXBlOjEsdGFnOnQsYXR0cnNMaXN0OmUsYXR0cnNNYXA6ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXt9LG49MCxyPXQubGVuZ3RoO248cjtuKyspZVt0W25dLm5hbWVdPXRbbl0udmFsdWU7cmV0dXJuIGV9KGUpLHBhcmVudDpuLGNoaWxkcmVuOltdfX1mdW5jdGlvbiBzbih0LGUpe2Z1bmN0aW9uIG4odCl7dC5wcmUmJihzPSExKSxMbyh0LnRhZykmJihjPSExKTtmb3IodmFyIG49MDtuPElvLmxlbmd0aDtuKyspSW9bbl0odCxlKX1Ubz1lLndhcm58fHNlLExvPWUuaXNQcmVUYWd8fEJuLE1vPWUubXVzdFVzZVByb3B8fEJuLERvPWUuZ2V0VGFnTmFtZXNwYWNlfHxCbixqbz1jZShlLm1vZHVsZXMsXCJ0cmFuc2Zvcm1Ob2RlXCIpLE5vPWNlKGUubW9kdWxlcyxcInByZVRyYW5zZm9ybU5vZGVcIiksSW89Y2UoZS5tb2R1bGVzLFwicG9zdFRyYW5zZm9ybU5vZGVcIiksRW89ZS5kZWxpbWl0ZXJzO3ZhciByLGksbz1bXSxhPSExIT09ZS5wcmVzZXJ2ZVdoaXRlc3BhY2Uscz0hMSxjPSExO3JldHVybiBmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIG4oZSl7bCs9ZSx0PXQuc3Vic3RyaW5nKGUpfWZ1bmN0aW9uIHIodCxuLHIpe3ZhciBpLHM7aWYobnVsbD09biYmKG49bCksbnVsbD09ciYmKHI9bCksdCYmKHM9dC50b0xvd2VyQ2FzZSgpKSx0KWZvcihpPWEubGVuZ3RoLTE7aT49MCYmYVtpXS5sb3dlckNhc2VkVGFnIT09cztpLS0pO2Vsc2UgaT0wO2lmKGk+PTApe2Zvcih2YXIgYz1hLmxlbmd0aC0xO2M+PWk7Yy0tKWUuZW5kJiZlLmVuZChhW2NdLnRhZyxuLHIpO2EubGVuZ3RoPWksbz1pJiZhW2ktMV0udGFnfWVsc2VcImJyXCI9PT1zP2Uuc3RhcnQmJmUuc3RhcnQodCxbXSwhMCxuLHIpOlwicFwiPT09cyYmKGUuc3RhcnQmJmUuc3RhcnQodCxbXSwhMSxuLHIpLGUuZW5kJiZlLmVuZCh0LG4scikpfWZvcih2YXIgaSxvLGE9W10scz1lLmV4cGVjdEhUTUwsYz1lLmlzVW5hcnlUYWd8fEJuLHU9ZS5jYW5CZUxlZnRPcGVuVGFnfHxCbixsPTA7dDspe2lmKGk9dCxvJiZIbyhvKSl7dmFyIGY9MCxwPW8udG9Mb3dlckNhc2UoKSxkPUJvW3BdfHwoQm9bcF09bmV3IFJlZ0V4cChcIihbXFxcXHNcXFxcU10qPykoPC9cIitwK1wiW14+XSo+KVwiLFwiaVwiKSksdj10LnJlcGxhY2UoZCxmdW5jdGlvbih0LG4scil7cmV0dXJuIGY9ci5sZW5ndGgsSG8ocCl8fFwibm9zY3JpcHRcIj09PXB8fChuPW4ucmVwbGFjZSgvPCEtLShbXFxzXFxTXSo/KS0tPi9nLFwiJDFcIikucmVwbGFjZSgvPCFcXFtDREFUQVxcWyhbXFxzXFxTXSo/KV1dPi9nLFwiJDFcIikpLEpvKHAsbikmJihuPW4uc2xpY2UoMSkpLGUuY2hhcnMmJmUuY2hhcnMobiksXCJcIn0pO2wrPXQubGVuZ3RoLXYubGVuZ3RoLHQ9dixyKHAsbC1mLGwpfWVsc2V7dmFyIGg9dC5pbmRleE9mKFwiPFwiKTtpZigwPT09aCl7aWYoQW8udGVzdCh0KSl7dmFyIG09dC5pbmRleE9mKFwiLS1cXHgzZVwiKTtpZihtPj0wKXtlLnNob3VsZEtlZXBDb21tZW50JiZlLmNvbW1lbnQodC5zdWJzdHJpbmcoNCxtKSksbihtKzMpO2NvbnRpbnVlfX1pZihPby50ZXN0KHQpKXt2YXIgeT10LmluZGV4T2YoXCJdPlwiKTtpZih5Pj0wKXtuKHkrMik7Y29udGludWV9fXZhciBnPXQubWF0Y2goa28pO2lmKGcpe24oZ1swXS5sZW5ndGgpO2NvbnRpbnVlfXZhciBfPXQubWF0Y2goeG8pO2lmKF8pe3ZhciBiPWw7bihfWzBdLmxlbmd0aCkscihfWzFdLGIsbCk7Y29udGludWV9dmFyICQ9ZnVuY3Rpb24oKXt2YXIgZT10Lm1hdGNoKENvKTtpZihlKXt2YXIgcj17dGFnTmFtZTplWzFdLGF0dHJzOltdLHN0YXJ0Omx9O24oZVswXS5sZW5ndGgpO2Zvcih2YXIgaSxvOyEoaT10Lm1hdGNoKHdvKSkmJihvPXQubWF0Y2goX28pKTspbihvWzBdLmxlbmd0aCksci5hdHRycy5wdXNoKG8pO2lmKGkpcmV0dXJuIHIudW5hcnlTbGFzaD1pWzFdLG4oaVswXS5sZW5ndGgpLHIuZW5kPWwscn19KCk7aWYoJCl7IWZ1bmN0aW9uKHQpe3ZhciBuPXQudGFnTmFtZSxpPXQudW5hcnlTbGFzaDtzJiYoXCJwXCI9PT1vJiZnbyhuKSYmcihvKSx1KG4pJiZvPT09biYmcihuKSk7Zm9yKHZhciBsPWMobil8fCEhaSxmPXQuYXR0cnMubGVuZ3RoLHA9bmV3IEFycmF5KGYpLGQ9MDtkPGY7ZCsrKXt2YXIgdj10LmF0dHJzW2RdO1NvJiYtMT09PXZbMF0uaW5kZXhPZignXCJcIicpJiYoXCJcIj09PXZbM10mJmRlbGV0ZSB2WzNdLFwiXCI9PT12WzRdJiZkZWxldGUgdls0XSxcIlwiPT09dls1XSYmZGVsZXRlIHZbNV0pO3ZhciBoPXZbM118fHZbNF18fHZbNV18fFwiXCIsbT1cImFcIj09PW4mJlwiaHJlZlwiPT09dlsxXT9lLnNob3VsZERlY29kZU5ld2xpbmVzRm9ySHJlZjplLnNob3VsZERlY29kZU5ld2xpbmVzO3BbZF09e25hbWU6dlsxXSx2YWx1ZTpvbihoLG0pfX1sfHwoYS5wdXNoKHt0YWc6bixsb3dlckNhc2VkVGFnOm4udG9Mb3dlckNhc2UoKSxhdHRyczpwfSksbz1uKSxlLnN0YXJ0JiZlLnN0YXJ0KG4scCxsLHQuc3RhcnQsdC5lbmQpfSgkKSxKbyhvLHQpJiZuKDEpO2NvbnRpbnVlfX12YXIgQz12b2lkIDAsdz12b2lkIDAseD12b2lkIDA7aWYoaD49MCl7Zm9yKHc9dC5zbGljZShoKTshKHhvLnRlc3Qodyl8fENvLnRlc3Qodyl8fEFvLnRlc3Qodyl8fE9vLnRlc3Qodyl8fCh4PXcuaW5kZXhPZihcIjxcIiwxKSk8MCk7KWgrPXgsdz10LnNsaWNlKGgpO0M9dC5zdWJzdHJpbmcoMCxoKSxuKGgpfWg8MCYmKEM9dCx0PVwiXCIpLGUuY2hhcnMmJkMmJmUuY2hhcnMoQyl9aWYodD09PWkpe2UuY2hhcnMmJmUuY2hhcnModCk7YnJlYWt9fXIoKX0odCx7d2FybjpUbyxleHBlY3RIVE1MOmUuZXhwZWN0SFRNTCxpc1VuYXJ5VGFnOmUuaXNVbmFyeVRhZyxjYW5CZUxlZnRPcGVuVGFnOmUuY2FuQmVMZWZ0T3BlblRhZyxzaG91bGREZWNvZGVOZXdsaW5lczplLnNob3VsZERlY29kZU5ld2xpbmVzLHNob3VsZERlY29kZU5ld2xpbmVzRm9ySHJlZjplLnNob3VsZERlY29kZU5ld2xpbmVzRm9ySHJlZixzaG91bGRLZWVwQ29tbWVudDplLmNvbW1lbnRzLHN0YXJ0OmZ1bmN0aW9uKHQsYSx1KXt2YXIgbD1pJiZpLm5zfHxEbyh0KTtRbiYmXCJzdmdcIj09PWwmJihhPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1bXSxuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciByPXRbbl07bmEudGVzdChyLm5hbWUpfHwoci5uYW1lPXIubmFtZS5yZXBsYWNlKHJhLFwiXCIpLGUucHVzaChyKSl9cmV0dXJuIGV9KGEpKTt2YXIgZj1hbih0LGEsaSk7bCYmKGYubnM9bCksZnVuY3Rpb24odCl7cmV0dXJuXCJzdHlsZVwiPT09dC50YWd8fFwic2NyaXB0XCI9PT10LnRhZyYmKCF0LmF0dHJzTWFwLnR5cGV8fFwidGV4dC9qYXZhc2NyaXB0XCI9PT10LmF0dHJzTWFwLnR5cGUpfShmKSYmIXVyKCkmJihmLmZvcmJpZGRlbj0hMCk7Zm9yKHZhciBwPTA7cDxOby5sZW5ndGg7cCsrKWY9Tm9bcF0oZixlKXx8ZjtpZihzfHwoIWZ1bmN0aW9uKHQpe251bGwhPWhlKHQsXCJ2LXByZVwiKSYmKHQucHJlPSEwKX0oZiksZi5wcmUmJihzPSEwKSksTG8oZi50YWcpJiYoYz0hMCkscz9mdW5jdGlvbih0KXt2YXIgZT10LmF0dHJzTGlzdC5sZW5ndGg7aWYoZSlmb3IodmFyIG49dC5hdHRycz1uZXcgQXJyYXkoZSkscj0wO3I8ZTtyKyspbltyXT17bmFtZTp0LmF0dHJzTGlzdFtyXS5uYW1lLHZhbHVlOkpTT04uc3RyaW5naWZ5KHQuYXR0cnNMaXN0W3JdLnZhbHVlKX07ZWxzZSB0LnByZXx8KHQucGxhaW49ITApfShmKTpmLnByb2Nlc3NlZHx8KHVuKGYpLGZ1bmN0aW9uKHQpe3ZhciBlPWhlKHQsXCJ2LWlmXCIpO2lmKGUpdC5pZj1lLGxuKHQse2V4cDplLGJsb2NrOnR9KTtlbHNle251bGwhPWhlKHQsXCJ2LWVsc2VcIikmJih0LmVsc2U9ITApO3ZhciBuPWhlKHQsXCJ2LWVsc2UtaWZcIik7biYmKHQuZWxzZWlmPW4pfX0oZiksZnVuY3Rpb24odCl7bnVsbCE9aGUodCxcInYtb25jZVwiKSYmKHQub25jZT0hMCl9KGYpLGNuKGYsZSkpLHI/by5sZW5ndGh8fHIuaWYmJihmLmVsc2VpZnx8Zi5lbHNlKSYmbG4ocix7ZXhwOmYuZWxzZWlmLGJsb2NrOmZ9KTpyPWYsaSYmIWYuZm9yYmlkZGVuKWlmKGYuZWxzZWlmfHxmLmVsc2UpIWZ1bmN0aW9uKHQsZSl7dmFyIG49ZnVuY3Rpb24odCl7dmFyIGU9dC5sZW5ndGg7Zm9yKDtlLS07KXtpZigxPT09dFtlXS50eXBlKXJldHVybiB0W2VdO3QucG9wKCl9fShlLmNoaWxkcmVuKTtuJiZuLmlmJiZsbihuLHtleHA6dC5lbHNlaWYsYmxvY2s6dH0pfShmLGkpO2Vsc2UgaWYoZi5zbG90U2NvcGUpe2kucGxhaW49ITE7dmFyIGQ9Zi5zbG90VGFyZ2V0fHwnXCJkZWZhdWx0XCInOyhpLnNjb3BlZFNsb3RzfHwoaS5zY29wZWRTbG90cz17fSkpW2RdPWZ9ZWxzZSBpLmNoaWxkcmVuLnB1c2goZiksZi5wYXJlbnQ9aTt1P24oZik6KGk9ZixvLnB1c2goZikpfSxlbmQ6ZnVuY3Rpb24oKXt2YXIgdD1vW28ubGVuZ3RoLTFdLGU9dC5jaGlsZHJlblt0LmNoaWxkcmVuLmxlbmd0aC0xXTtlJiYzPT09ZS50eXBlJiZcIiBcIj09PWUudGV4dCYmIWMmJnQuY2hpbGRyZW4ucG9wKCksby5sZW5ndGgtPTEsaT1vW28ubGVuZ3RoLTFdLG4odCl9LGNoYXJzOmZ1bmN0aW9uKHQpe2lmKGkmJighUW58fFwidGV4dGFyZWFcIiE9PWkudGFnfHxpLmF0dHJzTWFwLnBsYWNlaG9sZGVyIT09dCkpe3ZhciBlPWkuY2hpbGRyZW47aWYodD1jfHx0LnRyaW0oKT9mdW5jdGlvbih0KXtyZXR1cm5cInNjcmlwdFwiPT09dC50YWd8fFwic3R5bGVcIj09PXQudGFnfShpKT90OmVhKHQpOmEmJmUubGVuZ3RoP1wiIFwiOlwiXCIpe3ZhciBuOyFzJiZcIiBcIiE9PXQmJihuPWZ1bmN0aW9uKHQsZSl7dmFyIG49ZT9mbyhlKTp1bztpZihuLnRlc3QodCkpe2Zvcih2YXIgcixpLG8sYT1bXSxzPVtdLGM9bi5sYXN0SW5kZXg9MDtyPW4uZXhlYyh0KTspeyhpPXIuaW5kZXgpPmMmJihzLnB1c2gobz10LnNsaWNlKGMsaSkpLGEucHVzaChKU09OLnN0cmluZ2lmeShvKSkpO3ZhciB1PWFlKHJbMV0udHJpbSgpKTthLnB1c2goXCJfcyhcIit1K1wiKVwiKSxzLnB1c2goe1wiQGJpbmRpbmdcIjp1fSksYz1pK3JbMF0ubGVuZ3RofXJldHVybiBjPHQubGVuZ3RoJiYocy5wdXNoKG89dC5zbGljZShjKSksYS5wdXNoKEpTT04uc3RyaW5naWZ5KG8pKSkse2V4cHJlc3Npb246YS5qb2luKFwiK1wiKSx0b2tlbnM6c319fSh0LEVvKSk/ZS5wdXNoKHt0eXBlOjIsZXhwcmVzc2lvbjpuLmV4cHJlc3Npb24sdG9rZW5zOm4udG9rZW5zLHRleHQ6dH0pOlwiIFwiPT09dCYmZS5sZW5ndGgmJlwiIFwiPT09ZVtlLmxlbmd0aC0xXS50ZXh0fHxlLnB1c2goe3R5cGU6Myx0ZXh0OnR9KX19fSxjb21tZW50OmZ1bmN0aW9uKHQpe2kuY2hpbGRyZW4ucHVzaCh7dHlwZTozLHRleHQ6dCxpc0NvbW1lbnQ6ITB9KX19KSxyfWZ1bmN0aW9uIGNuKHQsZSl7IWZ1bmN0aW9uKHQpe3ZhciBlPXZlKHQsXCJrZXlcIik7ZSYmKHQua2V5PWUpfSh0KSx0LnBsYWluPSF0LmtleSYmIXQuYXR0cnNMaXN0Lmxlbmd0aCxmdW5jdGlvbih0KXt2YXIgZT12ZSh0LFwicmVmXCIpO2UmJih0LnJlZj1lLHQucmVmSW5Gb3I9ZnVuY3Rpb24odCl7dmFyIGU9dDtmb3IoO2U7KXtpZih2b2lkIDAhPT1lLmZvcilyZXR1cm4hMDtlPWUucGFyZW50fXJldHVybiExfSh0KSl9KHQpLGZ1bmN0aW9uKHQpe2lmKFwic2xvdFwiPT09dC50YWcpdC5zbG90TmFtZT12ZSh0LFwibmFtZVwiKTtlbHNle3ZhciBlO1widGVtcGxhdGVcIj09PXQudGFnPyhlPWhlKHQsXCJzY29wZVwiKSx0LnNsb3RTY29wZT1lfHxoZSh0LFwic2xvdC1zY29wZVwiKSk6KGU9aGUodCxcInNsb3Qtc2NvcGVcIikpJiYodC5zbG90U2NvcGU9ZSk7dmFyIG49dmUodCxcInNsb3RcIik7biYmKHQuc2xvdFRhcmdldD0nXCJcIic9PT1uPydcImRlZmF1bHRcIic6bixcInRlbXBsYXRlXCI9PT10LnRhZ3x8dC5zbG90U2NvcGV8fGxlKHQsXCJzbG90XCIsbikpfX0odCksZnVuY3Rpb24odCl7dmFyIGU7KGU9dmUodCxcImlzXCIpKSYmKHQuY29tcG9uZW50PWUpO251bGwhPWhlKHQsXCJpbmxpbmUtdGVtcGxhdGVcIikmJih0LmlubGluZVRlbXBsYXRlPSEwKX0odCk7Zm9yKHZhciBuPTA7bjxqby5sZW5ndGg7bisrKXQ9am9bbl0odCxlKXx8dDshZnVuY3Rpb24odCl7dmFyIGUsbixyLGksbyxhLHMsYz10LmF0dHJzTGlzdDtmb3IoZT0wLG49Yy5sZW5ndGg7ZTxuO2UrKylpZihyPWk9Y1tlXS5uYW1lLG89Y1tlXS52YWx1ZSxXby50ZXN0KHIpKWlmKHQuaGFzQmluZGluZ3M9ITAsKGE9ZnVuY3Rpb24odCl7dmFyIGU9dC5tYXRjaCh0YSk7aWYoZSl7dmFyIG49e307cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbih0KXtuW3Quc2xpY2UoMSldPSEwfSksbn19KHIpKSYmKHI9ci5yZXBsYWNlKHRhLFwiXCIpKSxRby50ZXN0KHIpKXI9ci5yZXBsYWNlKFFvLFwiXCIpLG89YWUobykscz0hMSxhJiYoYS5wcm9wJiYocz0hMCxcImlubmVySHRtbFwiPT09KHI9UG4ocikpJiYocj1cImlubmVySFRNTFwiKSksYS5jYW1lbCYmKHI9UG4ocikpLGEuc3luYyYmZGUodCxcInVwZGF0ZTpcIitQbihyKSx5ZShvLFwiJGV2ZW50XCIpKSksc3x8IXQuY29tcG9uZW50JiZNbyh0LnRhZyx0LmF0dHJzTWFwLnR5cGUscik/dWUodCxyLG8pOmxlKHQscixvKTtlbHNlIGlmKHFvLnRlc3Qocikpcj1yLnJlcGxhY2UocW8sXCJcIiksZGUodCxyLG8sYSwhMSk7ZWxzZXt2YXIgdT0ocj1yLnJlcGxhY2UoV28sXCJcIikpLm1hdGNoKFlvKSxsPXUmJnVbMV07bCYmKHI9ci5zbGljZSgwLC0obC5sZW5ndGgrMSkpKSxwZSh0LHIsaSxvLGwsYSl9ZWxzZSBsZSh0LHIsSlNPTi5zdHJpbmdpZnkobykpLCF0LmNvbXBvbmVudCYmXCJtdXRlZFwiPT09ciYmTW8odC50YWcsdC5hdHRyc01hcC50eXBlLHIpJiZ1ZSh0LHIsXCJ0cnVlXCIpfSh0KX1mdW5jdGlvbiB1bih0KXt2YXIgZTtpZihlPWhlKHQsXCJ2LWZvclwiKSl7dmFyIG49ZnVuY3Rpb24odCl7dmFyIGU9dC5tYXRjaChHbyk7aWYoIWUpcmV0dXJuO3ZhciBuPXt9O24uZm9yPWVbMl0udHJpbSgpO3ZhciByPWVbMV0udHJpbSgpLnJlcGxhY2UoWG8sXCJcIiksaT1yLm1hdGNoKFpvKTtpPyhuLmFsaWFzPXIucmVwbGFjZShabyxcIlwiKSxuLml0ZXJhdG9yMT1pWzFdLnRyaW0oKSxpWzJdJiYobi5pdGVyYXRvcjI9aVsyXS50cmltKCkpKTpuLmFsaWFzPXI7cmV0dXJuIG59KGUpO24mJmgodCxuKX19ZnVuY3Rpb24gbG4odCxlKXt0LmlmQ29uZGl0aW9uc3x8KHQuaWZDb25kaXRpb25zPVtdKSx0LmlmQ29uZGl0aW9ucy5wdXNoKGUpfWZ1bmN0aW9uIGZuKHQpe3JldHVybiBhbih0LnRhZyx0LmF0dHJzTGlzdC5zbGljZSgpLHQucGFyZW50KX1mdW5jdGlvbiBwbih0KXtpZih0LnN0YXRpYz1mdW5jdGlvbih0KXtpZigyPT09dC50eXBlKXJldHVybiExO2lmKDM9PT10LnR5cGUpcmV0dXJuITA7cmV0dXJuISghdC5wcmUmJih0Lmhhc0JpbmRpbmdzfHx0LmlmfHx0LmZvcnx8SW4odC50YWcpfHwhRm8odC50YWcpfHxmdW5jdGlvbih0KXtmb3IoO3QucGFyZW50Oyl7aWYoXCJ0ZW1wbGF0ZVwiIT09KHQ9dC5wYXJlbnQpLnRhZylyZXR1cm4hMTtpZih0LmZvcilyZXR1cm4hMH1yZXR1cm4hMX0odCl8fCFPYmplY3Qua2V5cyh0KS5ldmVyeShQbykpKX0odCksMT09PXQudHlwZSl7aWYoIUZvKHQudGFnKSYmXCJzbG90XCIhPT10LnRhZyYmbnVsbD09dC5hdHRyc01hcFtcImlubGluZS10ZW1wbGF0ZVwiXSlyZXR1cm47Zm9yKHZhciBlPTAsbj10LmNoaWxkcmVuLmxlbmd0aDtlPG47ZSsrKXt2YXIgcj10LmNoaWxkcmVuW2VdO3BuKHIpLHIuc3RhdGljfHwodC5zdGF0aWM9ITEpfWlmKHQuaWZDb25kaXRpb25zKWZvcih2YXIgaT0xLG89dC5pZkNvbmRpdGlvbnMubGVuZ3RoO2k8bztpKyspe3ZhciBhPXQuaWZDb25kaXRpb25zW2ldLmJsb2NrO3BuKGEpLGEuc3RhdGljfHwodC5zdGF0aWM9ITEpfX19ZnVuY3Rpb24gZG4odCxlKXtpZigxPT09dC50eXBlKXtpZigodC5zdGF0aWN8fHQub25jZSkmJih0LnN0YXRpY0luRm9yPWUpLHQuc3RhdGljJiZ0LmNoaWxkcmVuLmxlbmd0aCYmKDEhPT10LmNoaWxkcmVuLmxlbmd0aHx8MyE9PXQuY2hpbGRyZW5bMF0udHlwZSkpcmV0dXJuIHZvaWQodC5zdGF0aWNSb290PSEwKTtpZih0LnN0YXRpY1Jvb3Q9ITEsdC5jaGlsZHJlbilmb3IodmFyIG49MCxyPXQuY2hpbGRyZW4ubGVuZ3RoO248cjtuKyspZG4odC5jaGlsZHJlbltuXSxlfHwhIXQuZm9yKTtpZih0LmlmQ29uZGl0aW9ucylmb3IodmFyIGk9MSxvPXQuaWZDb25kaXRpb25zLmxlbmd0aDtpPG87aSsrKWRuKHQuaWZDb25kaXRpb25zW2ldLmJsb2NrLGUpfX1mdW5jdGlvbiB2bih0LGUsbil7dmFyIHI9ZT9cIm5hdGl2ZU9uOntcIjpcIm9uOntcIjtmb3IodmFyIGkgaW4gdClyKz0nXCInK2krJ1wiOicraG4oaSx0W2ldKStcIixcIjtyZXR1cm4gci5zbGljZSgwLC0xKStcIn1cIn1mdW5jdGlvbiBobih0LGUpe2lmKCFlKXJldHVyblwiZnVuY3Rpb24oKXt9XCI7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm5cIltcIitlLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gaG4odCxlKX0pLmpvaW4oXCIsXCIpK1wiXVwiO3ZhciBuPWNhLnRlc3QoZS52YWx1ZSkscj1zYS50ZXN0KGUudmFsdWUpO2lmKGUubW9kaWZpZXJzKXt2YXIgaT1cIlwiLG89XCJcIixhPVtdO2Zvcih2YXIgcyBpbiBlLm1vZGlmaWVycylpZihmYVtzXSlvKz1mYVtzXSx1YVtzXSYmYS5wdXNoKHMpO2Vsc2UgaWYoXCJleGFjdFwiPT09cyl7dmFyIGM9ZS5tb2RpZmllcnM7bys9bGEoW1wiY3RybFwiLFwic2hpZnRcIixcImFsdFwiLFwibWV0YVwiXS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIWNbdF19KS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuXCIkZXZlbnQuXCIrdCtcIktleVwifSkuam9pbihcInx8XCIpKX1lbHNlIGEucHVzaChzKTthLmxlbmd0aCYmKGkrPWZ1bmN0aW9uKHQpe3JldHVyblwiaWYoISgnYnV0dG9uJyBpbiAkZXZlbnQpJiZcIit0Lm1hcChtbikuam9pbihcIiYmXCIpK1wiKXJldHVybiBudWxsO1wifShhKSksbyYmKGkrPW8pO3JldHVyblwiZnVuY3Rpb24oJGV2ZW50KXtcIitpKyhuP2UudmFsdWUrXCIoJGV2ZW50KVwiOnI/XCIoXCIrZS52YWx1ZStcIikoJGV2ZW50KVwiOmUudmFsdWUpK1wifVwifXJldHVybiBufHxyP2UudmFsdWU6XCJmdW5jdGlvbigkZXZlbnQpe1wiK2UudmFsdWUrXCJ9XCJ9ZnVuY3Rpb24gbW4odCl7dmFyIGU9cGFyc2VJbnQodCwxMCk7aWYoZSlyZXR1cm5cIiRldmVudC5rZXlDb2RlIT09XCIrZTt2YXIgbj11YVt0XTtyZXR1cm5cIl9rKCRldmVudC5rZXlDb2RlLFwiK0pTT04uc3RyaW5naWZ5KHQpK1wiLFwiK0pTT04uc3RyaW5naWZ5KG4pK1wiLCRldmVudC5rZXkpXCJ9ZnVuY3Rpb24geW4odCxlKXt2YXIgbj1uZXcgZGEoZSk7cmV0dXJue3JlbmRlcjpcIndpdGgodGhpcyl7cmV0dXJuIFwiKyh0P2duKHQsbik6J19jKFwiZGl2XCIpJykrXCJ9XCIsc3RhdGljUmVuZGVyRm5zOm4uc3RhdGljUmVuZGVyRm5zfX1mdW5jdGlvbiBnbih0LGUpe2lmKHQuc3RhdGljUm9vdCYmIXQuc3RhdGljUHJvY2Vzc2VkKXJldHVybiBfbih0LGUpO2lmKHQub25jZSYmIXQub25jZVByb2Nlc3NlZClyZXR1cm4gYm4odCxlKTtpZih0LmZvciYmIXQuZm9yUHJvY2Vzc2VkKXJldHVybiBmdW5jdGlvbih0LGUsbixyKXt2YXIgaT10LmZvcixvPXQuYWxpYXMsYT10Lml0ZXJhdG9yMT9cIixcIit0Lml0ZXJhdG9yMTpcIlwiLHM9dC5pdGVyYXRvcjI/XCIsXCIrdC5pdGVyYXRvcjI6XCJcIjtyZXR1cm4gdC5mb3JQcm9jZXNzZWQ9ITAsKHJ8fFwiX2xcIikrXCIoKFwiK2krXCIpLGZ1bmN0aW9uKFwiK28rYStzK1wiKXtyZXR1cm4gXCIrKG58fGduKSh0LGUpK1wifSlcIn0odCxlKTtpZih0LmlmJiYhdC5pZlByb2Nlc3NlZClyZXR1cm4gJG4odCxlKTtpZihcInRlbXBsYXRlXCIhPT10LnRhZ3x8dC5zbG90VGFyZ2V0KXtpZihcInNsb3RcIj09PXQudGFnKXJldHVybiBmdW5jdGlvbih0LGUpe3ZhciBuPXQuc2xvdE5hbWV8fCdcImRlZmF1bHRcIicscj1rbih0LGUpLGk9XCJfdChcIituKyhyP1wiLFwiK3I6XCJcIiksbz10LmF0dHJzJiZcIntcIit0LmF0dHJzLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gUG4odC5uYW1lKStcIjpcIit0LnZhbHVlfSkuam9pbihcIixcIikrXCJ9XCIsYT10LmF0dHJzTWFwW1widi1iaW5kXCJdOyFvJiYhYXx8cnx8KGkrPVwiLG51bGxcIik7byYmKGkrPVwiLFwiK28pO2EmJihpKz0obz9cIlwiOlwiLG51bGxcIikrXCIsXCIrYSk7cmV0dXJuIGkrXCIpXCJ9KHQsZSk7dmFyIG47aWYodC5jb21wb25lbnQpbj1mdW5jdGlvbih0LGUsbil7dmFyIHI9ZS5pbmxpbmVUZW1wbGF0ZT9udWxsOmtuKGUsbiwhMCk7cmV0dXJuXCJfYyhcIit0K1wiLFwiK3duKGUsbikrKHI/XCIsXCIrcjpcIlwiKStcIilcIn0odC5jb21wb25lbnQsdCxlKTtlbHNle3ZhciByPXQucGxhaW4/dm9pZCAwOnduKHQsZSksaT10LmlubGluZVRlbXBsYXRlP251bGw6a24odCxlLCEwKTtuPVwiX2MoJ1wiK3QudGFnK1wiJ1wiKyhyP1wiLFwiK3I6XCJcIikrKGk/XCIsXCIraTpcIlwiKStcIilcIn1mb3IodmFyIG89MDtvPGUudHJhbnNmb3Jtcy5sZW5ndGg7bysrKW49ZS50cmFuc2Zvcm1zW29dKHQsbik7cmV0dXJuIG59cmV0dXJuIGtuKHQsZSl8fFwidm9pZCAwXCJ9ZnVuY3Rpb24gX24odCxlKXtyZXR1cm4gdC5zdGF0aWNQcm9jZXNzZWQ9ITAsZS5zdGF0aWNSZW5kZXJGbnMucHVzaChcIndpdGgodGhpcyl7cmV0dXJuIFwiK2duKHQsZSkrXCJ9XCIpLFwiX20oXCIrKGUuc3RhdGljUmVuZGVyRm5zLmxlbmd0aC0xKSsodC5zdGF0aWNJbkZvcj9cIix0cnVlXCI6XCJcIikrXCIpXCJ9ZnVuY3Rpb24gYm4odCxlKXtpZih0Lm9uY2VQcm9jZXNzZWQ9ITAsdC5pZiYmIXQuaWZQcm9jZXNzZWQpcmV0dXJuICRuKHQsZSk7aWYodC5zdGF0aWNJbkZvcil7Zm9yKHZhciBuPVwiXCIscj10LnBhcmVudDtyOyl7aWYoci5mb3Ipe249ci5rZXk7YnJlYWt9cj1yLnBhcmVudH1yZXR1cm4gbj9cIl9vKFwiK2duKHQsZSkrXCIsXCIrZS5vbmNlSWQrKytcIixcIituK1wiKVwiOmduKHQsZSl9cmV0dXJuIF9uKHQsZSl9ZnVuY3Rpb24gJG4odCxlLG4scil7cmV0dXJuIHQuaWZQcm9jZXNzZWQ9ITAsQ24odC5pZkNvbmRpdGlvbnMuc2xpY2UoKSxlLG4scil9ZnVuY3Rpb24gQ24odCxlLG4scil7ZnVuY3Rpb24gaSh0KXtyZXR1cm4gbj9uKHQsZSk6dC5vbmNlP2JuKHQsZSk6Z24odCxlKX1pZighdC5sZW5ndGgpcmV0dXJuIHJ8fFwiX2UoKVwiO3ZhciBvPXQuc2hpZnQoKTtyZXR1cm4gby5leHA/XCIoXCIrby5leHArXCIpP1wiK2koby5ibG9jaykrXCI6XCIrQ24odCxlLG4scik6XCJcIitpKG8uYmxvY2spfWZ1bmN0aW9uIHduKHQsZSl7dmFyIG49XCJ7XCIscj1mdW5jdGlvbih0LGUpe3ZhciBuPXQuZGlyZWN0aXZlcztpZighbilyZXR1cm47dmFyIHIsaSxvLGEscz1cImRpcmVjdGl2ZXM6W1wiLGM9ITE7Zm9yKHI9MCxpPW4ubGVuZ3RoO3I8aTtyKyspe289bltyXSxhPSEwO3ZhciB1PWUuZGlyZWN0aXZlc1tvLm5hbWVdO3UmJihhPSEhdSh0LG8sZS53YXJuKSksYSYmKGM9ITAscys9J3tuYW1lOlwiJytvLm5hbWUrJ1wiLHJhd05hbWU6XCInK28ucmF3TmFtZSsnXCInKyhvLnZhbHVlP1wiLHZhbHVlOihcIitvLnZhbHVlK1wiKSxleHByZXNzaW9uOlwiK0pTT04uc3RyaW5naWZ5KG8udmFsdWUpOlwiXCIpKyhvLmFyZz8nLGFyZzpcIicrby5hcmcrJ1wiJzpcIlwiKSsoby5tb2RpZmllcnM/XCIsbW9kaWZpZXJzOlwiK0pTT04uc3RyaW5naWZ5KG8ubW9kaWZpZXJzKTpcIlwiKStcIn0sXCIpfWlmKGMpcmV0dXJuIHMuc2xpY2UoMCwtMSkrXCJdXCJ9KHQsZSk7ciYmKG4rPXIrXCIsXCIpLHQua2V5JiYobis9XCJrZXk6XCIrdC5rZXkrXCIsXCIpLHQucmVmJiYobis9XCJyZWY6XCIrdC5yZWYrXCIsXCIpLHQucmVmSW5Gb3ImJihuKz1cInJlZkluRm9yOnRydWUsXCIpLHQucHJlJiYobis9XCJwcmU6dHJ1ZSxcIiksdC5jb21wb25lbnQmJihuKz0ndGFnOlwiJyt0LnRhZysnXCIsJyk7Zm9yKHZhciBpPTA7aTxlLmRhdGFHZW5GbnMubGVuZ3RoO2krKyluKz1lLmRhdGFHZW5GbnNbaV0odCk7aWYodC5hdHRycyYmKG4rPVwiYXR0cnM6e1wiK09uKHQuYXR0cnMpK1wifSxcIiksdC5wcm9wcyYmKG4rPVwiZG9tUHJvcHM6e1wiK09uKHQucHJvcHMpK1wifSxcIiksdC5ldmVudHMmJihuKz12bih0LmV2ZW50cywhMSxlLndhcm4pK1wiLFwiKSx0Lm5hdGl2ZUV2ZW50cyYmKG4rPXZuKHQubmF0aXZlRXZlbnRzLCEwLGUud2FybikrXCIsXCIpLHQuc2xvdFRhcmdldCYmIXQuc2xvdFNjb3BlJiYobis9XCJzbG90OlwiK3Quc2xvdFRhcmdldCtcIixcIiksdC5zY29wZWRTbG90cyYmKG4rPWZ1bmN0aW9uKHQsZSl7cmV0dXJuXCJzY29wZWRTbG90czpfdShbXCIrT2JqZWN0LmtleXModCkubWFwKGZ1bmN0aW9uKG4pe3JldHVybiB4bihuLHRbbl0sZSl9KS5qb2luKFwiLFwiKStcIl0pXCJ9KHQuc2NvcGVkU2xvdHMsZSkrXCIsXCIpLHQubW9kZWwmJihuKz1cIm1vZGVsOnt2YWx1ZTpcIit0Lm1vZGVsLnZhbHVlK1wiLGNhbGxiYWNrOlwiK3QubW9kZWwuY2FsbGJhY2srXCIsZXhwcmVzc2lvbjpcIit0Lm1vZGVsLmV4cHJlc3Npb24rXCJ9LFwiKSx0LmlubGluZVRlbXBsYXRlKXt2YXIgbz1mdW5jdGlvbih0LGUpe3ZhciBuPXQuY2hpbGRyZW5bMF07aWYoMT09PW4udHlwZSl7dmFyIHI9eW4obixlLm9wdGlvbnMpO3JldHVyblwiaW5saW5lVGVtcGxhdGU6e3JlbmRlcjpmdW5jdGlvbigpe1wiK3IucmVuZGVyK1wifSxzdGF0aWNSZW5kZXJGbnM6W1wiK3Iuc3RhdGljUmVuZGVyRm5zLm1hcChmdW5jdGlvbih0KXtyZXR1cm5cImZ1bmN0aW9uKCl7XCIrdCtcIn1cIn0pLmpvaW4oXCIsXCIpK1wiXX1cIn19KHQsZSk7byYmKG4rPW8rXCIsXCIpfXJldHVybiBuPW4ucmVwbGFjZSgvLCQvLFwiXCIpK1wifVwiLHQud3JhcERhdGEmJihuPXQud3JhcERhdGEobikpLHQud3JhcExpc3RlbmVycyYmKG49dC53cmFwTGlzdGVuZXJzKG4pKSxufWZ1bmN0aW9uIHhuKHQsZSxuKXtpZihlLmZvciYmIWUuZm9yUHJvY2Vzc2VkKXJldHVybiBmdW5jdGlvbih0LGUsbil7dmFyIHI9ZS5mb3IsaT1lLmFsaWFzLG89ZS5pdGVyYXRvcjE/XCIsXCIrZS5pdGVyYXRvcjE6XCJcIixhPWUuaXRlcmF0b3IyP1wiLFwiK2UuaXRlcmF0b3IyOlwiXCI7cmV0dXJuIGUuZm9yUHJvY2Vzc2VkPSEwLFwiX2woKFwiK3IrXCIpLGZ1bmN0aW9uKFwiK2krbythK1wiKXtyZXR1cm4gXCIreG4odCxlLG4pK1wifSlcIn0odCxlLG4pO3JldHVyblwie2tleTpcIit0K1wiLGZuOlwiKyhcImZ1bmN0aW9uKFwiK1N0cmluZyhlLnNsb3RTY29wZSkrXCIpe3JldHVybiBcIisoXCJ0ZW1wbGF0ZVwiPT09ZS50YWc/ZS5pZj9lLmlmK1wiP1wiKyhrbihlLG4pfHxcInVuZGVmaW5lZFwiKStcIjp1bmRlZmluZWRcIjprbihlLG4pfHxcInVuZGVmaW5lZFwiOmduKGUsbikpK1wifVwiKStcIn1cIn1mdW5jdGlvbiBrbih0LGUsbixyLGkpe3ZhciBvPXQuY2hpbGRyZW47aWYoby5sZW5ndGgpe3ZhciBhPW9bMF07aWYoMT09PW8ubGVuZ3RoJiZhLmZvciYmXCJ0ZW1wbGF0ZVwiIT09YS50YWcmJlwic2xvdFwiIT09YS50YWcpcmV0dXJuKHJ8fGduKShhLGUpO3ZhciBzPW4/ZnVuY3Rpb24odCxlKXtmb3IodmFyIG49MCxyPTA7cjx0Lmxlbmd0aDtyKyspe3ZhciBpPXRbcl07aWYoMT09PWkudHlwZSl7aWYoQW4oaSl8fGkuaWZDb25kaXRpb25zJiZpLmlmQ29uZGl0aW9ucy5zb21lKGZ1bmN0aW9uKHQpe3JldHVybiBBbih0LmJsb2NrKX0pKXtuPTI7YnJlYWt9KGUoaSl8fGkuaWZDb25kaXRpb25zJiZpLmlmQ29uZGl0aW9ucy5zb21lKGZ1bmN0aW9uKHQpe3JldHVybiBlKHQuYmxvY2spfSkpJiYobj0xKX19cmV0dXJuIG59KG8sZS5tYXliZUNvbXBvbmVudCk6MCxjPWl8fGZ1bmN0aW9uKHQsZSl7aWYoMT09PXQudHlwZSlyZXR1cm4gZ24odCxlKTtyZXR1cm4gMz09PXQudHlwZSYmdC5pc0NvbW1lbnQ/ZnVuY3Rpb24odCl7cmV0dXJuXCJfZShcIitKU09OLnN0cmluZ2lmeSh0LnRleHQpK1wiKVwifSh0KTpmdW5jdGlvbih0KXtyZXR1cm5cIl92KFwiKygyPT09dC50eXBlP3QuZXhwcmVzc2lvbjpTbihKU09OLnN0cmluZ2lmeSh0LnRleHQpKSkrXCIpXCJ9KHQpfTtyZXR1cm5cIltcIitvLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gYyh0LGUpfSkuam9pbihcIixcIikrXCJdXCIrKHM/XCIsXCIrczpcIlwiKX19ZnVuY3Rpb24gQW4odCl7cmV0dXJuIHZvaWQgMCE9PXQuZm9yfHxcInRlbXBsYXRlXCI9PT10LnRhZ3x8XCJzbG90XCI9PT10LnRhZ31mdW5jdGlvbiBPbih0KXtmb3IodmFyIGU9XCJcIixuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciByPXRbbl07ZSs9J1wiJytyLm5hbWUrJ1wiOicrU24oci52YWx1ZSkrXCIsXCJ9cmV0dXJuIGUuc2xpY2UoMCwtMSl9ZnVuY3Rpb24gU24odCl7cmV0dXJuIHQucmVwbGFjZSgvXFx1MjAyOC9nLFwiXFxcXHUyMDI4XCIpLnJlcGxhY2UoL1xcdTIwMjkvZyxcIlxcXFx1MjAyOVwiKX1mdW5jdGlvbiBUbih0LGUpe3RyeXtyZXR1cm4gbmV3IEZ1bmN0aW9uKHQpfWNhdGNoKG4pe3JldHVybiBlLnB1c2goe2VycjpuLGNvZGU6dH0pLHl9fWZ1bmN0aW9uIEVuKHQpe3JldHVybiBSbz1Sb3x8ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxSby5pbm5lckhUTUw9dD8nPGEgaHJlZj1cIlxcblwiLz4nOic8ZGl2IGE9XCJcXG5cIi8+JyxSby5pbm5lckhUTUwuaW5kZXhPZihcIiYjMTA7XCIpPjB9dmFyIGpuPU9iamVjdC5mcmVlemUoe30pLE5uPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsSW49dShcInNsb3QsY29tcG9uZW50XCIsITApLExuPXUoXCJrZXkscmVmLHNsb3Qsc2xvdC1zY29wZSxpc1wiKSxNbj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LERuPS8tKFxcdykvZyxQbj1wKGZ1bmN0aW9uKHQpe3JldHVybiB0LnJlcGxhY2UoRG4sZnVuY3Rpb24odCxlKXtyZXR1cm4gZT9lLnRvVXBwZXJDYXNlKCk6XCJcIn0pfSksRm49cChmdW5jdGlvbih0KXtyZXR1cm4gdC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpfSksUm49L1xcQihbQS1aXSkvZyxIbj1wKGZ1bmN0aW9uKHQpe3JldHVybiB0LnJlcGxhY2UoUm4sXCItJDFcIikudG9Mb3dlckNhc2UoKX0pLEJuPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4hMX0sVW49ZnVuY3Rpb24odCl7cmV0dXJuIHR9LFZuPVwiZGF0YS1zZXJ2ZXItcmVuZGVyZWRcIix6bj1bXCJjb21wb25lbnRcIixcImRpcmVjdGl2ZVwiLFwiZmlsdGVyXCJdLEtuPVtcImJlZm9yZUNyZWF0ZVwiLFwiY3JlYXRlZFwiLFwiYmVmb3JlTW91bnRcIixcIm1vdW50ZWRcIixcImJlZm9yZVVwZGF0ZVwiLFwidXBkYXRlZFwiLFwiYmVmb3JlRGVzdHJveVwiLFwiZGVzdHJveWVkXCIsXCJhY3RpdmF0ZWRcIixcImRlYWN0aXZhdGVkXCIsXCJlcnJvckNhcHR1cmVkXCJdLEpuPXtvcHRpb25NZXJnZVN0cmF0ZWdpZXM6T2JqZWN0LmNyZWF0ZShudWxsKSxzaWxlbnQ6ITEscHJvZHVjdGlvblRpcDohMSxkZXZ0b29sczohMSxwZXJmb3JtYW5jZTohMSxlcnJvckhhbmRsZXI6bnVsbCx3YXJuSGFuZGxlcjpudWxsLGlnbm9yZWRFbGVtZW50czpbXSxrZXlDb2RlczpPYmplY3QuY3JlYXRlKG51bGwpLGlzUmVzZXJ2ZWRUYWc6Qm4saXNSZXNlcnZlZEF0dHI6Qm4saXNVbmtub3duRWxlbWVudDpCbixnZXRUYWdOYW1lc3BhY2U6eSxwYXJzZVBsYXRmb3JtVGFnTmFtZTpVbixtdXN0VXNlUHJvcDpCbixfbGlmZWN5Y2xlSG9va3M6S259LHFuPS9bXlxcdy4kXS8sV249XCJfX3Byb3RvX19cImlue30sR249XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyxabj1cInVuZGVmaW5lZFwiIT10eXBlb2YgV1hFbnZpcm9ubWVudCYmISFXWEVudmlyb25tZW50LnBsYXRmb3JtLFhuPVpuJiZXWEVudmlyb25tZW50LnBsYXRmb3JtLnRvTG93ZXJDYXNlKCksWW49R24mJndpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCksUW49WW4mJi9tc2llfHRyaWRlbnQvLnRlc3QoWW4pLHRyPVluJiZZbi5pbmRleE9mKFwibXNpZSA5LjBcIik+MCxlcj1ZbiYmWW4uaW5kZXhPZihcImVkZ2UvXCIpPjAsbnI9WW4mJlluLmluZGV4T2YoXCJhbmRyb2lkXCIpPjB8fFwiYW5kcm9pZFwiPT09WG4scnI9WW4mJi9pcGhvbmV8aXBhZHxpcG9kfGlvcy8udGVzdChZbil8fFwiaW9zXCI9PT1Ybixpcj0oWW4mJi9jaHJvbWVcXC9cXGQrLy50ZXN0KFluKSx7fS53YXRjaCksb3I9ITE7aWYoR24pdHJ5e3ZhciBhcj17fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoYXIsXCJwYXNzaXZlXCIse2dldDpmdW5jdGlvbigpe29yPSEwfX0pLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidGVzdC1wYXNzaXZlXCIsbnVsbCxhcil9Y2F0Y2godCl7fXZhciBzcixjcix1cj1mdW5jdGlvbigpe3JldHVybiB2b2lkIDA9PT1zciYmKHNyPSFHbiYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbCYmXCJzZXJ2ZXJcIj09PWdsb2JhbC5wcm9jZXNzLmVudi5WVUVfRU5WKSxzcn0sbHI9R24mJndpbmRvdy5fX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fLGZyPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJncoU3ltYm9sKSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFJlZmxlY3QmJncoUmVmbGVjdC5vd25LZXlzKTtjcj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU2V0JiZ3KFNldCk/U2V0OmZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3RoaXMuc2V0PU9iamVjdC5jcmVhdGUobnVsbCl9cmV0dXJuIHQucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXtyZXR1cm4hMD09PXRoaXMuc2V0W3RdfSx0LnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24odCl7dGhpcy5zZXRbdF09ITB9LHQucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5zZXQ9T2JqZWN0LmNyZWF0ZShudWxsKX0sdH0oKTt2YXIgcHI9eSxkcj0wLHZyPWZ1bmN0aW9uKCl7dGhpcy5pZD1kcisrLHRoaXMuc3Vicz1bXX07dnIucHJvdG90eXBlLmFkZFN1Yj1mdW5jdGlvbih0KXt0aGlzLnN1YnMucHVzaCh0KX0sdnIucHJvdG90eXBlLnJlbW92ZVN1Yj1mdW5jdGlvbih0KXtsKHRoaXMuc3Vicyx0KX0sdnIucHJvdG90eXBlLmRlcGVuZD1mdW5jdGlvbigpe3ZyLnRhcmdldCYmdnIudGFyZ2V0LmFkZERlcCh0aGlzKX0sdnIucHJvdG90eXBlLm5vdGlmeT1mdW5jdGlvbigpe2Zvcih2YXIgdD10aGlzLnN1YnMuc2xpY2UoKSxlPTAsbj10Lmxlbmd0aDtlPG47ZSsrKXRbZV0udXBkYXRlKCl9LHZyLnRhcmdldD1udWxsO3ZhciBocj1bXSxtcj1mdW5jdGlvbih0LGUsbixyLGksbyxhLHMpe3RoaXMudGFnPXQsdGhpcy5kYXRhPWUsdGhpcy5jaGlsZHJlbj1uLHRoaXMudGV4dD1yLHRoaXMuZWxtPWksdGhpcy5ucz12b2lkIDAsdGhpcy5jb250ZXh0PW8sdGhpcy5mbkNvbnRleHQ9dm9pZCAwLHRoaXMuZm5PcHRpb25zPXZvaWQgMCx0aGlzLmZuU2NvcGVJZD12b2lkIDAsdGhpcy5rZXk9ZSYmZS5rZXksdGhpcy5jb21wb25lbnRPcHRpb25zPWEsdGhpcy5jb21wb25lbnRJbnN0YW5jZT12b2lkIDAsdGhpcy5wYXJlbnQ9dm9pZCAwLHRoaXMucmF3PSExLHRoaXMuaXNTdGF0aWM9ITEsdGhpcy5pc1Jvb3RJbnNlcnQ9ITAsdGhpcy5pc0NvbW1lbnQ9ITEsdGhpcy5pc0Nsb25lZD0hMSx0aGlzLmlzT25jZT0hMSx0aGlzLmFzeW5jRmFjdG9yeT1zLHRoaXMuYXN5bmNNZXRhPXZvaWQgMCx0aGlzLmlzQXN5bmNQbGFjZWhvbGRlcj0hMX0seXI9e2NoaWxkOntjb25maWd1cmFibGU6ITB9fTt5ci5jaGlsZC5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb21wb25lbnRJbnN0YW5jZX0sT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobXIucHJvdG90eXBlLHlyKTt2YXIgZ3I9ZnVuY3Rpb24odCl7dm9pZCAwPT09dCYmKHQ9XCJcIik7dmFyIGU9bmV3IG1yO3JldHVybiBlLnRleHQ9dCxlLmlzQ29tbWVudD0hMCxlfSxfcj1BcnJheS5wcm90b3R5cGUsYnI9T2JqZWN0LmNyZWF0ZShfcik7W1wicHVzaFwiLFwicG9wXCIsXCJzaGlmdFwiLFwidW5zaGlmdFwiLFwic3BsaWNlXCIsXCJzb3J0XCIsXCJyZXZlcnNlXCJdLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIGU9X3JbdF07Qyhicix0LGZ1bmN0aW9uKCl7Zm9yKHZhciBuPVtdLHI9YXJndW1lbnRzLmxlbmd0aDtyLS07KW5bcl09YXJndW1lbnRzW3JdO3ZhciBpLG89ZS5hcHBseSh0aGlzLG4pLGE9dGhpcy5fX29iX187c3dpdGNoKHQpe2Nhc2VcInB1c2hcIjpjYXNlXCJ1bnNoaWZ0XCI6aT1uO2JyZWFrO2Nhc2VcInNwbGljZVwiOmk9bi5zbGljZSgyKX1yZXR1cm4gaSYmYS5vYnNlcnZlQXJyYXkoaSksYS5kZXAubm90aWZ5KCksb30pfSk7dmFyICRyPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGJyKSxDcj17c2hvdWxkQ29udmVydDohMH0sd3I9ZnVuY3Rpb24odCl7aWYodGhpcy52YWx1ZT10LHRoaXMuZGVwPW5ldyB2cix0aGlzLnZtQ291bnQ9MCxDKHQsXCJfX29iX19cIix0aGlzKSxBcnJheS5pc0FycmF5KHQpKXsoV24/TzpTKSh0LGJyLCRyKSx0aGlzLm9ic2VydmVBcnJheSh0KX1lbHNlIHRoaXMud2Fsayh0KX07d3IucHJvdG90eXBlLndhbGs9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPU9iamVjdC5rZXlzKHQpLG49MDtuPGUubGVuZ3RoO24rKylFKHQsZVtuXSx0W2Vbbl1dKX0sd3IucHJvdG90eXBlLm9ic2VydmVBcnJheT1mdW5jdGlvbih0KXtmb3IodmFyIGU9MCxuPXQubGVuZ3RoO2U8bjtlKyspVCh0W2VdKX07dmFyIHhyPUpuLm9wdGlvbk1lcmdlU3RyYXRlZ2llczt4ci5kYXRhPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gbj9NKHQsZSxuKTplJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBlP3Q6TSh0LGUpfSxLbi5mb3JFYWNoKGZ1bmN0aW9uKHQpe3hyW3RdPUR9KSx6bi5mb3JFYWNoKGZ1bmN0aW9uKHQpe3hyW3QrXCJzXCJdPVB9KSx4ci53YXRjaD1mdW5jdGlvbih0LGUsbixyKXtpZih0PT09aXImJih0PXZvaWQgMCksZT09PWlyJiYoZT12b2lkIDApLCFlKXJldHVybiBPYmplY3QuY3JlYXRlKHR8fG51bGwpO2lmKCF0KXJldHVybiBlO3ZhciBpPXt9O2goaSx0KTtmb3IodmFyIG8gaW4gZSl7dmFyIGE9aVtvXSxzPWVbb107YSYmIUFycmF5LmlzQXJyYXkoYSkmJihhPVthXSksaVtvXT1hP2EuY29uY2F0KHMpOkFycmF5LmlzQXJyYXkocyk/czpbc119cmV0dXJuIGl9LHhyLnByb3BzPXhyLm1ldGhvZHM9eHIuaW5qZWN0PXhyLmNvbXB1dGVkPWZ1bmN0aW9uKHQsZSxuLHIpe2lmKCF0KXJldHVybiBlO3ZhciBpPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJuIGgoaSx0KSxlJiZoKGksZSksaX0seHIucHJvdmlkZT1NO3ZhciBrcixBcixPcj1mdW5jdGlvbih0LGUpe3JldHVybiB2b2lkIDA9PT1lP3Q6ZX0sU3I9W10sVHI9ITEsRXI9ITE7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNldEltbWVkaWF0ZSYmdyhzZXRJbW1lZGlhdGUpKUFyPWZ1bmN0aW9uKCl7c2V0SW1tZWRpYXRlKEopfTtlbHNlIGlmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBNZXNzYWdlQ2hhbm5lbHx8IXcoTWVzc2FnZUNoYW5uZWwpJiZcIltvYmplY3QgTWVzc2FnZUNoYW5uZWxDb25zdHJ1Y3Rvcl1cIiE9PU1lc3NhZ2VDaGFubmVsLnRvU3RyaW5nKCkpQXI9ZnVuY3Rpb24oKXtzZXRUaW1lb3V0KEosMCl9O2Vsc2V7dmFyIGpyPW5ldyBNZXNzYWdlQ2hhbm5lbCxOcj1qci5wb3J0Mjtqci5wb3J0MS5vbm1lc3NhZ2U9SixBcj1mdW5jdGlvbigpe05yLnBvc3RNZXNzYWdlKDEpfX1pZihcInVuZGVmaW5lZFwiIT10eXBlb2YgUHJvbWlzZSYmdyhQcm9taXNlKSl7dmFyIElyPVByb21pc2UucmVzb2x2ZSgpO2tyPWZ1bmN0aW9uKCl7SXIudGhlbihKKSxyciYmc2V0VGltZW91dCh5KX19ZWxzZSBrcj1Bcjt2YXIgTHIsTXI9bmV3IGNyLERyPXAoZnVuY3Rpb24odCl7dmFyIGU9XCImXCI9PT10LmNoYXJBdCgwKSxuPVwiflwiPT09KHQ9ZT90LnNsaWNlKDEpOnQpLmNoYXJBdCgwKSxyPVwiIVwiPT09KHQ9bj90LnNsaWNlKDEpOnQpLmNoYXJBdCgwKTtyZXR1cm4gdD1yP3Quc2xpY2UoMSk6dCx7bmFtZTp0LG9uY2U6bixjYXB0dXJlOnIscGFzc2l2ZTplfX0pLFByPW51bGwsRnI9W10sUnI9W10sSHI9e30sQnI9ITEsVXI9ITEsVnI9MCx6cj0wLEtyPWZ1bmN0aW9uKHQsZSxuLHIsaSl7dGhpcy52bT10LGkmJih0Ll93YXRjaGVyPXRoaXMpLHQuX3dhdGNoZXJzLnB1c2godGhpcykscj8odGhpcy5kZWVwPSEhci5kZWVwLHRoaXMudXNlcj0hIXIudXNlcix0aGlzLmxhenk9ISFyLmxhenksdGhpcy5zeW5jPSEhci5zeW5jKTp0aGlzLmRlZXA9dGhpcy51c2VyPXRoaXMubGF6eT10aGlzLnN5bmM9ITEsdGhpcy5jYj1uLHRoaXMuaWQ9Kyt6cix0aGlzLmFjdGl2ZT0hMCx0aGlzLmRpcnR5PXRoaXMubGF6eSx0aGlzLmRlcHM9W10sdGhpcy5uZXdEZXBzPVtdLHRoaXMuZGVwSWRzPW5ldyBjcix0aGlzLm5ld0RlcElkcz1uZXcgY3IsdGhpcy5leHByZXNzaW9uPVwiXCIsXCJmdW5jdGlvblwiPT10eXBlb2YgZT90aGlzLmdldHRlcj1lOih0aGlzLmdldHRlcj1mdW5jdGlvbih0KXtpZighcW4udGVzdCh0KSl7dmFyIGU9dC5zcGxpdChcIi5cIik7cmV0dXJuIGZ1bmN0aW9uKHQpe2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKXtpZighdClyZXR1cm47dD10W2Vbbl1dfXJldHVybiB0fX19KGUpLHRoaXMuZ2V0dGVyfHwodGhpcy5nZXR0ZXI9ZnVuY3Rpb24oKXt9KSksdGhpcy52YWx1ZT10aGlzLmxhenk/dm9pZCAwOnRoaXMuZ2V0KCl9O0tyLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oKXshZnVuY3Rpb24odCl7dnIudGFyZ2V0JiZoci5wdXNoKHZyLnRhcmdldCksdnIudGFyZ2V0PXR9KHRoaXMpO3ZhciB0LGU9dGhpcy52bTt0cnl7dD10aGlzLmdldHRlci5jYWxsKGUsZSl9Y2F0Y2godCl7aWYoIXRoaXMudXNlcil0aHJvdyB0O1YodCxlLCdnZXR0ZXIgZm9yIHdhdGNoZXIgXCInK3RoaXMuZXhwcmVzc2lvbisnXCInKX1maW5hbGx5e3RoaXMuZGVlcCYmVyh0KSx2ci50YXJnZXQ9aHIucG9wKCksdGhpcy5jbGVhbnVwRGVwcygpfXJldHVybiB0fSxLci5wcm90b3R5cGUuYWRkRGVwPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaWQ7dGhpcy5uZXdEZXBJZHMuaGFzKGUpfHwodGhpcy5uZXdEZXBJZHMuYWRkKGUpLHRoaXMubmV3RGVwcy5wdXNoKHQpLHRoaXMuZGVwSWRzLmhhcyhlKXx8dC5hZGRTdWIodGhpcykpfSxLci5wcm90b3R5cGUuY2xlYW51cERlcHM9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9dGhpcy5kZXBzLmxlbmd0aDt0LS07KXt2YXIgZT10aGlzLmRlcHNbdF07dGhpcy5uZXdEZXBJZHMuaGFzKGUuaWQpfHxlLnJlbW92ZVN1Yih0aGlzKX12YXIgbj10aGlzLmRlcElkczt0aGlzLmRlcElkcz10aGlzLm5ld0RlcElkcyx0aGlzLm5ld0RlcElkcz1uLHRoaXMubmV3RGVwSWRzLmNsZWFyKCksbj10aGlzLmRlcHMsdGhpcy5kZXBzPXRoaXMubmV3RGVwcyx0aGlzLm5ld0RlcHM9bix0aGlzLm5ld0RlcHMubGVuZ3RoPTB9LEtyLnByb3RvdHlwZS51cGRhdGU9ZnVuY3Rpb24oKXt0aGlzLmxhenk/dGhpcy5kaXJ0eT0hMDp0aGlzLnN5bmM/dGhpcy5ydW4oKTpmdW5jdGlvbih0KXt2YXIgZT10LmlkO2lmKG51bGw9PUhyW2VdKXtpZihIcltlXT0hMCxVcil7Zm9yKHZhciBuPUZyLmxlbmd0aC0xO24+VnImJkZyW25dLmlkPnQuaWQ7KW4tLTtGci5zcGxpY2UobisxLDAsdCl9ZWxzZSBGci5wdXNoKHQpO0JyfHwoQnI9ITAscShodCkpfX0odGhpcyl9LEtyLnByb3RvdHlwZS5ydW49ZnVuY3Rpb24oKXtpZih0aGlzLmFjdGl2ZSl7dmFyIHQ9dGhpcy5nZXQoKTtpZih0IT09dGhpcy52YWx1ZXx8aSh0KXx8dGhpcy5kZWVwKXt2YXIgZT10aGlzLnZhbHVlO2lmKHRoaXMudmFsdWU9dCx0aGlzLnVzZXIpdHJ5e3RoaXMuY2IuY2FsbCh0aGlzLnZtLHQsZSl9Y2F0Y2godCl7Vih0LHRoaXMudm0sJ2NhbGxiYWNrIGZvciB3YXRjaGVyIFwiJyt0aGlzLmV4cHJlc3Npb24rJ1wiJyl9ZWxzZSB0aGlzLmNiLmNhbGwodGhpcy52bSx0LGUpfX19LEtyLnByb3RvdHlwZS5ldmFsdWF0ZT1mdW5jdGlvbigpe3RoaXMudmFsdWU9dGhpcy5nZXQoKSx0aGlzLmRpcnR5PSExfSxLci5wcm90b3R5cGUuZGVwZW5kPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PXRoaXMuZGVwcy5sZW5ndGg7dC0tOyl0aGlzLmRlcHNbdF0uZGVwZW5kKCl9LEtyLnByb3RvdHlwZS50ZWFyZG93bj1mdW5jdGlvbigpe2lmKHRoaXMuYWN0aXZlKXt0aGlzLnZtLl9pc0JlaW5nRGVzdHJveWVkfHxsKHRoaXMudm0uX3dhdGNoZXJzLHRoaXMpO2Zvcih2YXIgdD10aGlzLmRlcHMubGVuZ3RoO3QtLTspdGhpcy5kZXBzW3RdLnJlbW92ZVN1Yih0aGlzKTt0aGlzLmFjdGl2ZT0hMX19O3ZhciBKcj17ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsZ2V0Onksc2V0Onl9LHFyPXtsYXp5OiEwfTtOdChJdC5wcm90b3R5cGUpO3ZhciBXcj17aW5pdDpmdW5jdGlvbih0LG4scixpKXtpZighdC5jb21wb25lbnRJbnN0YW5jZXx8dC5jb21wb25lbnRJbnN0YW5jZS5faXNEZXN0cm95ZWQpeyh0LmNvbXBvbmVudEluc3RhbmNlPWZ1bmN0aW9uKHQsbixyLGkpe3ZhciBvPXtfaXNDb21wb25lbnQ6ITAscGFyZW50Om4sX3BhcmVudFZub2RlOnQsX3BhcmVudEVsbTpyfHxudWxsLF9yZWZFbG06aXx8bnVsbH0sYT10LmRhdGEuaW5saW5lVGVtcGxhdGU7cmV0dXJuIGUoYSkmJihvLnJlbmRlcj1hLnJlbmRlcixvLnN0YXRpY1JlbmRlckZucz1hLnN0YXRpY1JlbmRlckZucyksbmV3IHQuY29tcG9uZW50T3B0aW9ucy5DdG9yKG8pfSh0LFByLHIsaSkpLiRtb3VudChuP3QuZWxtOnZvaWQgMCxuKX1lbHNlIGlmKHQuZGF0YS5rZWVwQWxpdmUpe3ZhciBvPXQ7V3IucHJlcGF0Y2gobyxvKX19LHByZXBhdGNoOmZ1bmN0aW9uKHQsZSl7dmFyIG49ZS5jb21wb25lbnRPcHRpb25zOyFmdW5jdGlvbih0LGUsbixyLGkpe3ZhciBvPSEhKGl8fHQuJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVufHxyLmRhdGEuc2NvcGVkU2xvdHN8fHQuJHNjb3BlZFNsb3RzIT09am4pO2lmKHQuJG9wdGlvbnMuX3BhcmVudFZub2RlPXIsdC4kdm5vZGU9cix0Ll92bm9kZSYmKHQuX3Zub2RlLnBhcmVudD1yKSx0LiRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbj1pLHQuJGF0dHJzPXIuZGF0YSYmci5kYXRhLmF0dHJzfHxqbix0LiRsaXN0ZW5lcnM9bnx8am4sZSYmdC4kb3B0aW9ucy5wcm9wcyl7Q3Iuc2hvdWxkQ29udmVydD0hMTtmb3IodmFyIGE9dC5fcHJvcHMscz10LiRvcHRpb25zLl9wcm9wS2V5c3x8W10sYz0wO2M8cy5sZW5ndGg7YysrKXt2YXIgdT1zW2NdO2FbdV09SCh1LHQuJG9wdGlvbnMucHJvcHMsZSx0KX1Dci5zaG91bGRDb252ZXJ0PSEwLHQuJG9wdGlvbnMucHJvcHNEYXRhPWV9aWYobil7dmFyIGw9dC4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzO3QuJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycz1uLHN0KHQsbixsKX1vJiYodC4kc2xvdHM9Y3QoaSxyLmNvbnRleHQpLHQuJGZvcmNlVXBkYXRlKCkpfShlLmNvbXBvbmVudEluc3RhbmNlPXQuY29tcG9uZW50SW5zdGFuY2Usbi5wcm9wc0RhdGEsbi5saXN0ZW5lcnMsZSxuLmNoaWxkcmVuKX0saW5zZXJ0OmZ1bmN0aW9uKHQpe3ZhciBlPXQuY29udGV4dCxuPXQuY29tcG9uZW50SW5zdGFuY2U7bi5faXNNb3VudGVkfHwobi5faXNNb3VudGVkPSEwLHZ0KG4sXCJtb3VudGVkXCIpKSx0LmRhdGEua2VlcEFsaXZlJiYoZS5faXNNb3VudGVkP2Z1bmN0aW9uKHQpe3QuX2luYWN0aXZlPSExLFJyLnB1c2godCl9KG4pOnB0KG4sITApKX0sZGVzdHJveTpmdW5jdGlvbih0KXt2YXIgZT10LmNvbXBvbmVudEluc3RhbmNlO2UuX2lzRGVzdHJveWVkfHwodC5kYXRhLmtlZXBBbGl2ZT9kdChlLCEwKTplLiRkZXN0cm95KCkpfX0sR3I9T2JqZWN0LmtleXMoV3IpLFpyPTEsWHI9MixZcj0wOyFmdW5jdGlvbih0KXt0LnByb3RvdHlwZS5faW5pdD1mdW5jdGlvbih0KXt0aGlzLl91aWQ9WXIrKyx0aGlzLl9pc1Z1ZT0hMCx0JiZ0Ll9pc0NvbXBvbmVudD9mdW5jdGlvbih0LGUpe3ZhciBuPXQuJG9wdGlvbnM9T2JqZWN0LmNyZWF0ZSh0LmNvbnN0cnVjdG9yLm9wdGlvbnMpLHI9ZS5fcGFyZW50Vm5vZGU7bi5wYXJlbnQ9ZS5wYXJlbnQsbi5fcGFyZW50Vm5vZGU9cixuLl9wYXJlbnRFbG09ZS5fcGFyZW50RWxtLG4uX3JlZkVsbT1lLl9yZWZFbG07dmFyIGk9ci5jb21wb25lbnRPcHRpb25zO24ucHJvcHNEYXRhPWkucHJvcHNEYXRhLG4uX3BhcmVudExpc3RlbmVycz1pLmxpc3RlbmVycyxuLl9yZW5kZXJDaGlsZHJlbj1pLmNoaWxkcmVuLG4uX2NvbXBvbmVudFRhZz1pLnRhZyxlLnJlbmRlciYmKG4ucmVuZGVyPWUucmVuZGVyLG4uc3RhdGljUmVuZGVyRm5zPWUuc3RhdGljUmVuZGVyRm5zKX0odGhpcyx0KTp0aGlzLiRvcHRpb25zPUYoRnQodGhpcy5jb25zdHJ1Y3RvciksdHx8e30sdGhpcyksdGhpcy5fcmVuZGVyUHJveHk9dGhpcyx0aGlzLl9zZWxmPXRoaXMsZnVuY3Rpb24odCl7dmFyIGU9dC4kb3B0aW9ucyxuPWUucGFyZW50O2lmKG4mJiFlLmFic3RyYWN0KXtmb3IoO24uJG9wdGlvbnMuYWJzdHJhY3QmJm4uJHBhcmVudDspbj1uLiRwYXJlbnQ7bi4kY2hpbGRyZW4ucHVzaCh0KX10LiRwYXJlbnQ9bix0LiRyb290PW4/bi4kcm9vdDp0LHQuJGNoaWxkcmVuPVtdLHQuJHJlZnM9e30sdC5fd2F0Y2hlcj1udWxsLHQuX2luYWN0aXZlPW51bGwsdC5fZGlyZWN0SW5hY3RpdmU9ITEsdC5faXNNb3VudGVkPSExLHQuX2lzRGVzdHJveWVkPSExLHQuX2lzQmVpbmdEZXN0cm95ZWQ9ITF9KHRoaXMpLGZ1bmN0aW9uKHQpe3QuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpLHQuX2hhc0hvb2tFdmVudD0hMTt2YXIgZT10LiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM7ZSYmc3QodCxlKX0odGhpcyksZnVuY3Rpb24odCl7dC5fdm5vZGU9bnVsbCx0Ll9zdGF0aWNUcmVlcz1udWxsO3ZhciBlPXQuJG9wdGlvbnMsbj10LiR2bm9kZT1lLl9wYXJlbnRWbm9kZSxyPW4mJm4uY29udGV4dDt0LiRzbG90cz1jdChlLl9yZW5kZXJDaGlsZHJlbixyKSx0LiRzY29wZWRTbG90cz1qbix0Ll9jPWZ1bmN0aW9uKGUsbixyLGkpe3JldHVybiBEdCh0LGUsbixyLGksITEpfSx0LiRjcmVhdGVFbGVtZW50PWZ1bmN0aW9uKGUsbixyLGkpe3JldHVybiBEdCh0LGUsbixyLGksITApfTt2YXIgaT1uJiZuLmRhdGE7RSh0LFwiJGF0dHJzXCIsaSYmaS5hdHRyc3x8am4sMCwhMCksRSh0LFwiJGxpc3RlbmVyc1wiLGUuX3BhcmVudExpc3RlbmVyc3x8am4sMCwhMCl9KHRoaXMpLHZ0KHRoaXMsXCJiZWZvcmVDcmVhdGVcIiksZnVuY3Rpb24odCl7dmFyIGU9JHQodC4kb3B0aW9ucy5pbmplY3QsdCk7ZSYmKENyLnNob3VsZENvbnZlcnQ9ITEsT2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbihuKXtFKHQsbixlW25dKX0pLENyLnNob3VsZENvbnZlcnQ9ITApfSh0aGlzKSx5dCh0aGlzKSxmdW5jdGlvbih0KXt2YXIgZT10LiRvcHRpb25zLnByb3ZpZGU7ZSYmKHQuX3Byb3ZpZGVkPVwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZS5jYWxsKHQpOmUpfSh0aGlzKSx2dCh0aGlzLFwiY3JlYXRlZFwiKSx0aGlzLiRvcHRpb25zLmVsJiZ0aGlzLiRtb3VudCh0aGlzLiRvcHRpb25zLmVsKX19KFJ0KSxmdW5jdGlvbih0KXt2YXIgZT17fTtlLmdldD1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9kYXRhfTt2YXIgbj17fTtuLmdldD1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9wcm9wc30sT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiJGRhdGFcIixlKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCIkcHJvcHNcIixuKSx0LnByb3RvdHlwZS4kc2V0PWosdC5wcm90b3R5cGUuJGRlbGV0ZT1OLHQucHJvdG90eXBlLiR3YXRjaD1mdW5jdGlvbih0LGUsbil7aWYobyhlKSlyZXR1cm4gYnQodGhpcyx0LGUsbik7KG49bnx8e30pLnVzZXI9ITA7dmFyIHI9bmV3IEtyKHRoaXMsdCxlLG4pO3JldHVybiBuLmltbWVkaWF0ZSYmZS5jYWxsKHRoaXMsci52YWx1ZSksZnVuY3Rpb24oKXtyLnRlYXJkb3duKCl9fX0oUnQpLGZ1bmN0aW9uKHQpe3ZhciBlPS9eaG9vazovO3QucHJvdG90eXBlLiRvbj1mdW5jdGlvbih0LG4pe2lmKEFycmF5LmlzQXJyYXkodCkpZm9yKHZhciByPTAsaT10Lmxlbmd0aDtyPGk7cisrKXRoaXMuJG9uKHRbcl0sbik7ZWxzZSh0aGlzLl9ldmVudHNbdF18fCh0aGlzLl9ldmVudHNbdF09W10pKS5wdXNoKG4pLGUudGVzdCh0KSYmKHRoaXMuX2hhc0hvb2tFdmVudD0hMCk7cmV0dXJuIHRoaXN9LHQucHJvdG90eXBlLiRvbmNlPWZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gbigpe3IuJG9mZih0LG4pLGUuYXBwbHkocixhcmd1bWVudHMpfXZhciByPXRoaXM7cmV0dXJuIG4uZm49ZSxyLiRvbih0LG4pLHJ9LHQucHJvdG90eXBlLiRvZmY9ZnVuY3Rpb24odCxlKXtpZighYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCksdGhpcztpZihBcnJheS5pc0FycmF5KHQpKXtmb3IodmFyIG49MCxyPXQubGVuZ3RoO248cjtuKyspdGhpcy4kb2ZmKHRbbl0sZSk7cmV0dXJuIHRoaXN9dmFyIGk9dGhpcy5fZXZlbnRzW3RdO2lmKCFpKXJldHVybiB0aGlzO2lmKCFlKXJldHVybiB0aGlzLl9ldmVudHNbdF09bnVsbCx0aGlzO2lmKGUpZm9yKHZhciBvLGE9aS5sZW5ndGg7YS0tOylpZigobz1pW2FdKT09PWV8fG8uZm49PT1lKXtpLnNwbGljZShhLDEpO2JyZWFrfXJldHVybiB0aGlzfSx0LnByb3RvdHlwZS4kZW1pdD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLG49ZS5fZXZlbnRzW3RdO2lmKG4pe249bi5sZW5ndGg+MT92KG4pOm47Zm9yKHZhciByPXYoYXJndW1lbnRzLDEpLGk9MCxvPW4ubGVuZ3RoO2k8bztpKyspdHJ5e25baV0uYXBwbHkoZSxyKX1jYXRjaChuKXtWKG4sZSwnZXZlbnQgaGFuZGxlciBmb3IgXCInK3QrJ1wiJyl9fXJldHVybiBlfX0oUnQpLGZ1bmN0aW9uKHQpe3QucHJvdG90eXBlLl91cGRhdGU9ZnVuY3Rpb24odCxlKXt0aGlzLl9pc01vdW50ZWQmJnZ0KHRoaXMsXCJiZWZvcmVVcGRhdGVcIik7dmFyIG49dGhpcy4kZWwscj10aGlzLl92bm9kZSxpPVByO1ByPXRoaXMsdGhpcy5fdm5vZGU9dCxyP3RoaXMuJGVsPXRoaXMuX19wYXRjaF9fKHIsdCk6KHRoaXMuJGVsPXRoaXMuX19wYXRjaF9fKHRoaXMuJGVsLHQsZSwhMSx0aGlzLiRvcHRpb25zLl9wYXJlbnRFbG0sdGhpcy4kb3B0aW9ucy5fcmVmRWxtKSx0aGlzLiRvcHRpb25zLl9wYXJlbnRFbG09dGhpcy4kb3B0aW9ucy5fcmVmRWxtPW51bGwpLFByPWksbiYmKG4uX192dWVfXz1udWxsKSx0aGlzLiRlbCYmKHRoaXMuJGVsLl9fdnVlX189dGhpcyksdGhpcy4kdm5vZGUmJnRoaXMuJHBhcmVudCYmdGhpcy4kdm5vZGU9PT10aGlzLiRwYXJlbnQuX3Zub2RlJiYodGhpcy4kcGFyZW50LiRlbD10aGlzLiRlbCl9LHQucHJvdG90eXBlLiRmb3JjZVVwZGF0ZT1mdW5jdGlvbigpe3RoaXMuX3dhdGNoZXImJnRoaXMuX3dhdGNoZXIudXBkYXRlKCl9LHQucHJvdG90eXBlLiRkZXN0cm95PWZ1bmN0aW9uKCl7aWYoIXRoaXMuX2lzQmVpbmdEZXN0cm95ZWQpe3Z0KHRoaXMsXCJiZWZvcmVEZXN0cm95XCIpLHRoaXMuX2lzQmVpbmdEZXN0cm95ZWQ9ITA7dmFyIHQ9dGhpcy4kcGFyZW50OyF0fHx0Ll9pc0JlaW5nRGVzdHJveWVkfHx0aGlzLiRvcHRpb25zLmFic3RyYWN0fHxsKHQuJGNoaWxkcmVuLHRoaXMpLHRoaXMuX3dhdGNoZXImJnRoaXMuX3dhdGNoZXIudGVhcmRvd24oKTtmb3IodmFyIGU9dGhpcy5fd2F0Y2hlcnMubGVuZ3RoO2UtLTspdGhpcy5fd2F0Y2hlcnNbZV0udGVhcmRvd24oKTt0aGlzLl9kYXRhLl9fb2JfXyYmdGhpcy5fZGF0YS5fX29iX18udm1Db3VudC0tLHRoaXMuX2lzRGVzdHJveWVkPSEwLHRoaXMuX19wYXRjaF9fKHRoaXMuX3Zub2RlLG51bGwpLHZ0KHRoaXMsXCJkZXN0cm95ZWRcIiksdGhpcy4kb2ZmKCksdGhpcy4kZWwmJih0aGlzLiRlbC5fX3Z1ZV9fPW51bGwpLHRoaXMuJHZub2RlJiYodGhpcy4kdm5vZGUucGFyZW50PW51bGwpfX19KFJ0KSxmdW5jdGlvbih0KXtOdCh0LnByb3RvdHlwZSksdC5wcm90b3R5cGUuJG5leHRUaWNrPWZ1bmN0aW9uKHQpe3JldHVybiBxKHQsdGhpcyl9LHQucHJvdG90eXBlLl9yZW5kZXI9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dC4kb3B0aW9ucyxuPWUucmVuZGVyLHI9ZS5fcGFyZW50Vm5vZGU7aWYodC5faXNNb3VudGVkKWZvcih2YXIgaSBpbiB0LiRzbG90cyl7dmFyIG89dC4kc2xvdHNbaV07KG8uX3JlbmRlcmVkfHxvWzBdJiZvWzBdLmVsbSkmJih0LiRzbG90c1tpXT1BKG8sITApKX10LiRzY29wZWRTbG90cz1yJiZyLmRhdGEuc2NvcGVkU2xvdHN8fGpuLHQuJHZub2RlPXI7dmFyIGE7dHJ5e2E9bi5jYWxsKHQuX3JlbmRlclByb3h5LHQuJGNyZWF0ZUVsZW1lbnQpfWNhdGNoKGUpe1YoZSx0LFwicmVuZGVyXCIpLGE9dC5fdm5vZGV9cmV0dXJuIGEgaW5zdGFuY2VvZiBtcnx8KGE9Z3IoKSksYS5wYXJlbnQ9cixhfX0oUnQpO3ZhciBRcj1bU3RyaW5nLFJlZ0V4cCxBcnJheV0sdGk9e0tlZXBBbGl2ZTp7bmFtZTpcImtlZXAtYWxpdmVcIixhYnN0cmFjdDohMCxwcm9wczp7aW5jbHVkZTpRcixleGNsdWRlOlFyLG1heDpbU3RyaW5nLE51bWJlcl19LGNyZWF0ZWQ6ZnVuY3Rpb24oKXt0aGlzLmNhY2hlPU9iamVjdC5jcmVhdGUobnVsbCksdGhpcy5rZXlzPVtdfSxkZXN0cm95ZWQ6ZnVuY3Rpb24oKXtmb3IodmFyIHQgaW4gdGhpcy5jYWNoZSl6dCh0aGlzLmNhY2hlLHQsdGhpcy5rZXlzKX0sd2F0Y2g6e2luY2x1ZGU6ZnVuY3Rpb24odCl7VnQodGhpcyxmdW5jdGlvbihlKXtyZXR1cm4gVXQodCxlKX0pfSxleGNsdWRlOmZ1bmN0aW9uKHQpe1Z0KHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIVV0KHQsZSl9KX19LHJlbmRlcjpmdW5jdGlvbigpe3ZhciB0PXRoaXMuJHNsb3RzLmRlZmF1bHQsZT1pdCh0KSxuPWUmJmUuY29tcG9uZW50T3B0aW9ucztpZihuKXt2YXIgcj1CdChuKSxpPXRoaXMuaW5jbHVkZSxvPXRoaXMuZXhjbHVkZTtpZihpJiYoIXJ8fCFVdChpLHIpKXx8byYmciYmVXQobyxyKSlyZXR1cm4gZTt2YXIgYT10aGlzLmNhY2hlLHM9dGhpcy5rZXlzLGM9bnVsbD09ZS5rZXk/bi5DdG9yLmNpZCsobi50YWc/XCI6OlwiK24udGFnOlwiXCIpOmUua2V5O2FbY10/KGUuY29tcG9uZW50SW5zdGFuY2U9YVtjXS5jb21wb25lbnRJbnN0YW5jZSxsKHMsYykscy5wdXNoKGMpKTooYVtjXT1lLHMucHVzaChjKSx0aGlzLm1heCYmcy5sZW5ndGg+cGFyc2VJbnQodGhpcy5tYXgpJiZ6dChhLHNbMF0scyx0aGlzLl92bm9kZSkpLGUuZGF0YS5rZWVwQWxpdmU9ITB9cmV0dXJuIGV8fHQmJnRbMF19fX07IWZ1bmN0aW9uKHQpe3ZhciBlPXt9O2UuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIEpufSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcImNvbmZpZ1wiLGUpLHQudXRpbD17d2FybjpwcixleHRlbmQ6aCxtZXJnZU9wdGlvbnM6RixkZWZpbmVSZWFjdGl2ZTpFfSx0LnNldD1qLHQuZGVsZXRlPU4sdC5uZXh0VGljaz1xLHQub3B0aW9ucz1PYmplY3QuY3JlYXRlKG51bGwpLHpuLmZvckVhY2goZnVuY3Rpb24oZSl7dC5vcHRpb25zW2UrXCJzXCJdPU9iamVjdC5jcmVhdGUobnVsbCl9KSx0Lm9wdGlvbnMuX2Jhc2U9dCxoKHQub3B0aW9ucy5jb21wb25lbnRzLHRpKSxmdW5jdGlvbih0KXt0LnVzZT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLl9pbnN0YWxsZWRQbHVnaW5zfHwodGhpcy5faW5zdGFsbGVkUGx1Z2lucz1bXSk7aWYoZS5pbmRleE9mKHQpPi0xKXJldHVybiB0aGlzO3ZhciBuPXYoYXJndW1lbnRzLDEpO3JldHVybiBuLnVuc2hpZnQodGhpcyksXCJmdW5jdGlvblwiPT10eXBlb2YgdC5pbnN0YWxsP3QuaW5zdGFsbC5hcHBseSh0LG4pOlwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJnQuYXBwbHkobnVsbCxuKSxlLnB1c2godCksdGhpc319KHQpLGZ1bmN0aW9uKHQpe3QubWl4aW49ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMub3B0aW9ucz1GKHRoaXMub3B0aW9ucyx0KSx0aGlzfX0odCksSHQodCksZnVuY3Rpb24odCl7em4uZm9yRWFjaChmdW5jdGlvbihlKXt0W2VdPWZ1bmN0aW9uKHQsbil7cmV0dXJuIG4/KFwiY29tcG9uZW50XCI9PT1lJiZvKG4pJiYobi5uYW1lPW4ubmFtZXx8dCxuPXRoaXMub3B0aW9ucy5fYmFzZS5leHRlbmQobikpLFwiZGlyZWN0aXZlXCI9PT1lJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj17YmluZDpuLHVwZGF0ZTpufSksdGhpcy5vcHRpb25zW2UrXCJzXCJdW3RdPW4sbik6dGhpcy5vcHRpb25zW2UrXCJzXCJdW3RdfX0pfSh0KX0oUnQpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSdC5wcm90b3R5cGUsXCIkaXNTZXJ2ZXJcIix7Z2V0OnVyfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KFJ0LnByb3RvdHlwZSxcIiRzc3JDb250ZXh0XCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLiR2bm9kZSYmdGhpcy4kdm5vZGUuc3NyQ29udGV4dH19KSxSdC52ZXJzaW9uPVwiMi41LjEzXCI7dmFyIGVpLG5pLHJpLGlpLG9pLGFpLHNpLGNpLHVpPXUoXCJzdHlsZSxjbGFzc1wiKSxsaT11KFwiaW5wdXQsdGV4dGFyZWEsb3B0aW9uLHNlbGVjdCxwcm9ncmVzc1wiKSxmaT1mdW5jdGlvbih0LGUsbil7cmV0dXJuXCJ2YWx1ZVwiPT09biYmbGkodCkmJlwiYnV0dG9uXCIhPT1lfHxcInNlbGVjdGVkXCI9PT1uJiZcIm9wdGlvblwiPT09dHx8XCJjaGVja2VkXCI9PT1uJiZcImlucHV0XCI9PT10fHxcIm11dGVkXCI9PT1uJiZcInZpZGVvXCI9PT10fSxwaT11KFwiY29udGVudGVkaXRhYmxlLGRyYWdnYWJsZSxzcGVsbGNoZWNrXCIpLGRpPXUoXCJhbGxvd2Z1bGxzY3JlZW4sYXN5bmMsYXV0b2ZvY3VzLGF1dG9wbGF5LGNoZWNrZWQsY29tcGFjdCxjb250cm9scyxkZWNsYXJlLGRlZmF1bHQsZGVmYXVsdGNoZWNrZWQsZGVmYXVsdG11dGVkLGRlZmF1bHRzZWxlY3RlZCxkZWZlcixkaXNhYmxlZCxlbmFibGVkLGZvcm1ub3ZhbGlkYXRlLGhpZGRlbixpbmRldGVybWluYXRlLGluZXJ0LGlzbWFwLGl0ZW1zY29wZSxsb29wLG11bHRpcGxlLG11dGVkLG5vaHJlZixub3Jlc2l6ZSxub3NoYWRlLG5vdmFsaWRhdGUsbm93cmFwLG9wZW4scGF1c2VvbmV4aXQscmVhZG9ubHkscmVxdWlyZWQscmV2ZXJzZWQsc2NvcGVkLHNlYW1sZXNzLHNlbGVjdGVkLHNvcnRhYmxlLHRyYW5zbGF0ZSx0cnVlc3BlZWQsdHlwZW11c3RtYXRjaCx2aXNpYmxlXCIpLHZpPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLGhpPWZ1bmN0aW9uKHQpe3JldHVyblwiOlwiPT09dC5jaGFyQXQoNSkmJlwieGxpbmtcIj09PXQuc2xpY2UoMCw1KX0sbWk9ZnVuY3Rpb24odCl7cmV0dXJuIGhpKHQpP3Quc2xpY2UoNix0Lmxlbmd0aCk6XCJcIn0seWk9ZnVuY3Rpb24odCl7cmV0dXJuIG51bGw9PXR8fCExPT09dH0sZ2k9e3N2ZzpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsbWF0aDpcImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIn0sX2k9dShcImh0bWwsYm9keSxiYXNlLGhlYWQsbGluayxtZXRhLHN0eWxlLHRpdGxlLGFkZHJlc3MsYXJ0aWNsZSxhc2lkZSxmb290ZXIsaGVhZGVyLGgxLGgyLGgzLGg0LGg1LGg2LGhncm91cCxuYXYsc2VjdGlvbixkaXYsZGQsZGwsZHQsZmlnY2FwdGlvbixmaWd1cmUscGljdHVyZSxocixpbWcsbGksbWFpbixvbCxwLHByZSx1bCxhLGIsYWJicixiZGksYmRvLGJyLGNpdGUsY29kZSxkYXRhLGRmbixlbSxpLGtiZCxtYXJrLHEscnAscnQscnRjLHJ1YnkscyxzYW1wLHNtYWxsLHNwYW4sc3Ryb25nLHN1YixzdXAsdGltZSx1LHZhcix3YnIsYXJlYSxhdWRpbyxtYXAsdHJhY2ssdmlkZW8sZW1iZWQsb2JqZWN0LHBhcmFtLHNvdXJjZSxjYW52YXMsc2NyaXB0LG5vc2NyaXB0LGRlbCxpbnMsY2FwdGlvbixjb2wsY29sZ3JvdXAsdGFibGUsdGhlYWQsdGJvZHksdGQsdGgsdHIsYnV0dG9uLGRhdGFsaXN0LGZpZWxkc2V0LGZvcm0saW5wdXQsbGFiZWwsbGVnZW5kLG1ldGVyLG9wdGdyb3VwLG9wdGlvbixvdXRwdXQscHJvZ3Jlc3Msc2VsZWN0LHRleHRhcmVhLGRldGFpbHMsZGlhbG9nLG1lbnUsbWVudWl0ZW0sc3VtbWFyeSxjb250ZW50LGVsZW1lbnQsc2hhZG93LHRlbXBsYXRlLGJsb2NrcXVvdGUsaWZyYW1lLHRmb290XCIpLGJpPXUoXCJzdmcsYW5pbWF0ZSxjaXJjbGUsY2xpcHBhdGgsY3Vyc29yLGRlZnMsZGVzYyxlbGxpcHNlLGZpbHRlcixmb250LWZhY2UsZm9yZWlnbk9iamVjdCxnLGdseXBoLGltYWdlLGxpbmUsbWFya2VyLG1hc2ssbWlzc2luZy1nbHlwaCxwYXRoLHBhdHRlcm4scG9seWdvbixwb2x5bGluZSxyZWN0LHN3aXRjaCxzeW1ib2wsdGV4dCx0ZXh0cGF0aCx0c3Bhbix1c2Usdmlld1wiLCEwKSwkaT1mdW5jdGlvbih0KXtyZXR1cm4gX2kodCl8fGJpKHQpfSxDaT1PYmplY3QuY3JlYXRlKG51bGwpLHdpPXUoXCJ0ZXh0LG51bWJlcixwYXNzd29yZCxzZWFyY2gsZW1haWwsdGVsLHVybFwiKSx4aT1PYmplY3QuZnJlZXplKHtjcmVhdGVFbGVtZW50OmZ1bmN0aW9uKHQsZSl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0KTtyZXR1cm5cInNlbGVjdFwiIT09dD9uOihlLmRhdGEmJmUuZGF0YS5hdHRycyYmdm9pZCAwIT09ZS5kYXRhLmF0dHJzLm11bHRpcGxlJiZuLnNldEF0dHJpYnV0ZShcIm11bHRpcGxlXCIsXCJtdWx0aXBsZVwiKSxuKX0sY3JlYXRlRWxlbWVudE5TOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhnaVt0XSxlKX0sY3JlYXRlVGV4dE5vZGU6ZnVuY3Rpb24odCl7cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQpfSxjcmVhdGVDb21tZW50OmZ1bmN0aW9uKHQpe3JldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KHQpfSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24odCxlLG4pe3QuaW5zZXJ0QmVmb3JlKGUsbil9LHJlbW92ZUNoaWxkOmZ1bmN0aW9uKHQsZSl7dC5yZW1vdmVDaGlsZChlKX0sYXBwZW5kQ2hpbGQ6ZnVuY3Rpb24odCxlKXt0LmFwcGVuZENoaWxkKGUpfSxwYXJlbnROb2RlOmZ1bmN0aW9uKHQpe3JldHVybiB0LnBhcmVudE5vZGV9LG5leHRTaWJsaW5nOmZ1bmN0aW9uKHQpe3JldHVybiB0Lm5leHRTaWJsaW5nfSx0YWdOYW1lOmZ1bmN0aW9uKHQpe3JldHVybiB0LnRhZ05hbWV9LHNldFRleHRDb250ZW50OmZ1bmN0aW9uKHQsZSl7dC50ZXh0Q29udGVudD1lfSxzZXRBdHRyaWJ1dGU6ZnVuY3Rpb24odCxlLG4pe3Quc2V0QXR0cmlidXRlKGUsbil9fSksa2k9e2NyZWF0ZTpmdW5jdGlvbih0LGUpe1h0KGUpfSx1cGRhdGU6ZnVuY3Rpb24odCxlKXt0LmRhdGEucmVmIT09ZS5kYXRhLnJlZiYmKFh0KHQsITApLFh0KGUpKX0sZGVzdHJveTpmdW5jdGlvbih0KXtYdCh0LCEwKX19LEFpPW5ldyBtcihcIlwiLHt9LFtdKSxPaT1bXCJjcmVhdGVcIixcImFjdGl2YXRlXCIsXCJ1cGRhdGVcIixcInJlbW92ZVwiLFwiZGVzdHJveVwiXSxTaT17Y3JlYXRlOnRlLHVwZGF0ZTp0ZSxkZXN0cm95OmZ1bmN0aW9uKHQpe3RlKHQsQWkpfX0sVGk9T2JqZWN0LmNyZWF0ZShudWxsKSxFaT1ba2ksU2ldLGppPXtjcmVhdGU6cmUsdXBkYXRlOnJlfSxOaT17Y3JlYXRlOm9lLHVwZGF0ZTpvZX0sSWk9L1tcXHcpLitcXC1fJFxcXV0vLExpPVwiX19yXCIsTWk9XCJfX2NcIixEaT17Y3JlYXRlOnhlLHVwZGF0ZTp4ZX0sUGk9e2NyZWF0ZTprZSx1cGRhdGU6a2V9LEZpPXAoZnVuY3Rpb24odCl7dmFyIGU9e30sbj0vOiguKykvO3JldHVybiB0LnNwbGl0KC87KD8hW14oXSpcXCkpL2cpLmZvckVhY2goZnVuY3Rpb24odCl7aWYodCl7dmFyIHI9dC5zcGxpdChuKTtyLmxlbmd0aD4xJiYoZVtyWzBdLnRyaW0oKV09clsxXS50cmltKCkpfX0pLGV9KSxSaT0vXi0tLyxIaT0vXFxzKiFpbXBvcnRhbnQkLyxCaT1mdW5jdGlvbih0LGUsbil7aWYoUmkudGVzdChlKSl0LnN0eWxlLnNldFByb3BlcnR5KGUsbik7ZWxzZSBpZihIaS50ZXN0KG4pKXQuc3R5bGUuc2V0UHJvcGVydHkoZSxuLnJlcGxhY2UoSGksXCJcIiksXCJpbXBvcnRhbnRcIik7ZWxzZXt2YXIgcj1WaShlKTtpZihBcnJheS5pc0FycmF5KG4pKWZvcih2YXIgaT0wLG89bi5sZW5ndGg7aTxvO2krKyl0LnN0eWxlW3JdPW5baV07ZWxzZSB0LnN0eWxlW3JdPW59fSxVaT1bXCJXZWJraXRcIixcIk1velwiLFwibXNcIl0sVmk9cChmdW5jdGlvbih0KXtpZihjaT1jaXx8ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZSxcImZpbHRlclwiIT09KHQ9UG4odCkpJiZ0IGluIGNpKXJldHVybiB0O2Zvcih2YXIgZT10LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSksbj0wO248VWkubGVuZ3RoO24rKyl7dmFyIHI9VWlbbl0rZTtpZihyIGluIGNpKXJldHVybiByfX0pLHppPXtjcmVhdGU6U2UsdXBkYXRlOlNlfSxLaT1wKGZ1bmN0aW9uKHQpe3JldHVybntlbnRlckNsYXNzOnQrXCItZW50ZXJcIixlbnRlclRvQ2xhc3M6dCtcIi1lbnRlci10b1wiLGVudGVyQWN0aXZlQ2xhc3M6dCtcIi1lbnRlci1hY3RpdmVcIixsZWF2ZUNsYXNzOnQrXCItbGVhdmVcIixsZWF2ZVRvQ2xhc3M6dCtcIi1sZWF2ZS10b1wiLGxlYXZlQWN0aXZlQ2xhc3M6dCtcIi1sZWF2ZS1hY3RpdmVcIn19KSxKaT1HbiYmIXRyLHFpPVwidHJhbnNpdGlvblwiLFdpPVwiYW5pbWF0aW9uXCIsR2k9XCJ0cmFuc2l0aW9uXCIsWmk9XCJ0cmFuc2l0aW9uZW5kXCIsWGk9XCJhbmltYXRpb25cIixZaT1cImFuaW1hdGlvbmVuZFwiO0ppJiYodm9pZCAwPT09d2luZG93Lm9udHJhbnNpdGlvbmVuZCYmdm9pZCAwIT09d2luZG93Lm9ud2Via2l0dHJhbnNpdGlvbmVuZCYmKEdpPVwiV2Via2l0VHJhbnNpdGlvblwiLFppPVwid2Via2l0VHJhbnNpdGlvbkVuZFwiKSx2b2lkIDA9PT13aW5kb3cub25hbmltYXRpb25lbmQmJnZvaWQgMCE9PXdpbmRvdy5vbndlYmtpdGFuaW1hdGlvbmVuZCYmKFhpPVwiV2Via2l0QW5pbWF0aW9uXCIsWWk9XCJ3ZWJraXRBbmltYXRpb25FbmRcIikpO3ZhciBRaT1Hbj93aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lP3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZCh3aW5kb3cpOnNldFRpbWVvdXQ6ZnVuY3Rpb24odCl7cmV0dXJuIHQoKX0sdG89L1xcYih0cmFuc2Zvcm18YWxsKSgsfCQpLyxlbz1mdW5jdGlvbihpKXtmdW5jdGlvbiBvKHQpe3ZhciBuPUEucGFyZW50Tm9kZSh0KTtlKG4pJiZBLnJlbW92ZUNoaWxkKG4sdCl9ZnVuY3Rpb24gYSh0LHIsaSxvLGEpe2lmKHQuaXNSb290SW5zZXJ0PSFhLCFmdW5jdGlvbih0LHIsaSxvKXt2YXIgYT10LmRhdGE7aWYoZShhKSl7dmFyIHU9ZSh0LmNvbXBvbmVudEluc3RhbmNlKSYmYS5rZWVwQWxpdmU7aWYoZShhPWEuaG9vaykmJmUoYT1hLmluaXQpJiZhKHQsITEsaSxvKSxlKHQuY29tcG9uZW50SW5zdGFuY2UpKXJldHVybiBzKHQsciksbih1KSYmZnVuY3Rpb24odCxuLHIsaSl7Zm9yKHZhciBvLGE9dDthLmNvbXBvbmVudEluc3RhbmNlOylpZihhPWEuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlLGUobz1hLmRhdGEpJiZlKG89by50cmFuc2l0aW9uKSl7Zm9yKG89MDtvPHguYWN0aXZhdGUubGVuZ3RoOysrbyl4LmFjdGl2YXRlW29dKEFpLGEpO24ucHVzaChhKTticmVha31jKHIsdC5lbG0saSl9KHQscixpLG8pLCEwfX0odCxyLGksbykpe3ZhciB1PXQuZGF0YSxmPXQuY2hpbGRyZW4sdj10LnRhZztlKHYpPyh0LmVsbT10Lm5zP0EuY3JlYXRlRWxlbWVudE5TKHQubnMsdik6QS5jcmVhdGVFbGVtZW50KHYsdCksZCh0KSxsKHQsZixyKSxlKHUpJiZwKHQsciksYyhpLHQuZWxtLG8pKTpuKHQuaXNDb21tZW50KT8odC5lbG09QS5jcmVhdGVDb21tZW50KHQudGV4dCksYyhpLHQuZWxtLG8pKToodC5lbG09QS5jcmVhdGVUZXh0Tm9kZSh0LnRleHQpLGMoaSx0LmVsbSxvKSl9fWZ1bmN0aW9uIHModCxuKXtlKHQuZGF0YS5wZW5kaW5nSW5zZXJ0KSYmKG4ucHVzaC5hcHBseShuLHQuZGF0YS5wZW5kaW5nSW5zZXJ0KSx0LmRhdGEucGVuZGluZ0luc2VydD1udWxsKSx0LmVsbT10LmNvbXBvbmVudEluc3RhbmNlLiRlbCxmKHQpPyhwKHQsbiksZCh0KSk6KFh0KHQpLG4ucHVzaCh0KSl9ZnVuY3Rpb24gYyh0LG4scil7ZSh0KSYmKGUocik/ci5wYXJlbnROb2RlPT09dCYmQS5pbnNlcnRCZWZvcmUodCxuLHIpOkEuYXBwZW5kQ2hpbGQodCxuKSl9ZnVuY3Rpb24gbCh0LGUsbil7aWYoQXJyYXkuaXNBcnJheShlKSlmb3IodmFyIGk9MDtpPGUubGVuZ3RoOysraSlhKGVbaV0sbix0LmVsbSxudWxsLCEwKTtlbHNlIHIodC50ZXh0KSYmQS5hcHBlbmRDaGlsZCh0LmVsbSxBLmNyZWF0ZVRleHROb2RlKFN0cmluZyh0LnRleHQpKSl9ZnVuY3Rpb24gZih0KXtmb3IoO3QuY29tcG9uZW50SW5zdGFuY2U7KXQ9dC5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGU7cmV0dXJuIGUodC50YWcpfWZ1bmN0aW9uIHAodCxuKXtmb3IodmFyIHI9MDtyPHguY3JlYXRlLmxlbmd0aDsrK3IpeC5jcmVhdGVbcl0oQWksdCk7ZShDPXQuZGF0YS5ob29rKSYmKGUoQy5jcmVhdGUpJiZDLmNyZWF0ZShBaSx0KSxlKEMuaW5zZXJ0KSYmbi5wdXNoKHQpKX1mdW5jdGlvbiBkKHQpe3ZhciBuO2lmKGUobj10LmZuU2NvcGVJZCkpQS5zZXRBdHRyaWJ1dGUodC5lbG0sbixcIlwiKTtlbHNlIGZvcih2YXIgcj10O3I7KWUobj1yLmNvbnRleHQpJiZlKG49bi4kb3B0aW9ucy5fc2NvcGVJZCkmJkEuc2V0QXR0cmlidXRlKHQuZWxtLG4sXCJcIikscj1yLnBhcmVudDtlKG49UHIpJiZuIT09dC5jb250ZXh0JiZuIT09dC5mbkNvbnRleHQmJmUobj1uLiRvcHRpb25zLl9zY29wZUlkKSYmQS5zZXRBdHRyaWJ1dGUodC5lbG0sbixcIlwiKX1mdW5jdGlvbiB2KHQsZSxuLHIsaSxvKXtmb3IoO3I8PWk7KytyKWEobltyXSxvLHQsZSl9ZnVuY3Rpb24gaCh0KXt2YXIgbixyLGk9dC5kYXRhO2lmKGUoaSkpZm9yKGUobj1pLmhvb2spJiZlKG49bi5kZXN0cm95KSYmbih0KSxuPTA7bjx4LmRlc3Ryb3kubGVuZ3RoOysrbil4LmRlc3Ryb3lbbl0odCk7aWYoZShuPXQuY2hpbGRyZW4pKWZvcihyPTA7cjx0LmNoaWxkcmVuLmxlbmd0aDsrK3IpaCh0LmNoaWxkcmVuW3JdKX1mdW5jdGlvbiBtKHQsbixyLGkpe2Zvcig7cjw9aTsrK3Ipe3ZhciBhPW5bcl07ZShhKSYmKGUoYS50YWcpPyh5KGEpLGgoYSkpOm8oYS5lbG0pKX19ZnVuY3Rpb24geSh0LG4pe2lmKGUobil8fGUodC5kYXRhKSl7dmFyIHIsaT14LnJlbW92ZS5sZW5ndGgrMTtmb3IoZShuKT9uLmxpc3RlbmVycys9aTpuPWZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gbigpezA9PS0tbi5saXN0ZW5lcnMmJm8odCl9cmV0dXJuIG4ubGlzdGVuZXJzPWUsbn0odC5lbG0saSksZShyPXQuY29tcG9uZW50SW5zdGFuY2UpJiZlKHI9ci5fdm5vZGUpJiZlKHIuZGF0YSkmJnkocixuKSxyPTA7cjx4LnJlbW92ZS5sZW5ndGg7KytyKXgucmVtb3ZlW3JdKHQsbik7ZShyPXQuZGF0YS5ob29rKSYmZShyPXIucmVtb3ZlKT9yKHQsbik6bigpfWVsc2Ugbyh0LmVsbSl9ZnVuY3Rpb24gZyhuLHIsaSxvLHMpe2Zvcih2YXIgYyx1LGwsZj0wLHA9MCxkPXIubGVuZ3RoLTEsaD1yWzBdLHk9cltkXSxnPWkubGVuZ3RoLTEsYj1pWzBdLCQ9aVtnXSxDPSFzO2Y8PWQmJnA8PWc7KXQoaCk/aD1yWysrZl06dCh5KT95PXJbLS1kXTpZdChoLGIpPyhfKGgsYixvKSxoPXJbKytmXSxiPWlbKytwXSk6WXQoeSwkKT8oXyh5LCQsbykseT1yWy0tZF0sJD1pWy0tZ10pOll0KGgsJCk/KF8oaCwkLG8pLEMmJkEuaW5zZXJ0QmVmb3JlKG4saC5lbG0sQS5uZXh0U2libGluZyh5LmVsbSkpLGg9clsrK2ZdLCQ9aVstLWddKTpZdCh5LGIpPyhfKHksYixvKSxDJiZBLmluc2VydEJlZm9yZShuLHkuZWxtLGguZWxtKSx5PXJbLS1kXSxiPWlbKytwXSk6KHQoYykmJihjPVF0KHIsZixkKSksdCh1PWUoYi5rZXkpP2NbYi5rZXldOmZ1bmN0aW9uKHQsbixyLGkpe2Zvcih2YXIgbz1yO288aTtvKyspe3ZhciBhPW5bb107aWYoZShhKSYmWXQodCxhKSlyZXR1cm4gb319KGIscixmLGQpKT9hKGIsbyxuLGguZWxtKTpZdChsPXJbdV0sYik/KF8obCxiLG8pLHJbdV09dm9pZCAwLEMmJkEuaW5zZXJ0QmVmb3JlKG4sbC5lbG0saC5lbG0pKTphKGIsbyxuLGguZWxtKSxiPWlbKytwXSk7Zj5kP3Yobix0KGlbZysxXSk/bnVsbDppW2crMV0uZWxtLGkscCxnLG8pOnA+ZyYmbSgwLHIsZixkKX1mdW5jdGlvbiBfKHIsaSxvLGEpe2lmKHIhPT1pKXt2YXIgcz1pLmVsbT1yLmVsbTtpZihuKHIuaXNBc3luY1BsYWNlaG9sZGVyKSllKGkuYXN5bmNGYWN0b3J5LnJlc29sdmVkKT8kKHIuZWxtLGksbyk6aS5pc0FzeW5jUGxhY2Vob2xkZXI9ITA7ZWxzZSBpZihuKGkuaXNTdGF0aWMpJiZuKHIuaXNTdGF0aWMpJiZpLmtleT09PXIua2V5JiYobihpLmlzQ2xvbmVkKXx8bihpLmlzT25jZSkpKWkuY29tcG9uZW50SW5zdGFuY2U9ci5jb21wb25lbnRJbnN0YW5jZTtlbHNle3ZhciBjLHU9aS5kYXRhO2UodSkmJmUoYz11Lmhvb2spJiZlKGM9Yy5wcmVwYXRjaCkmJmMocixpKTt2YXIgbD1yLmNoaWxkcmVuLHA9aS5jaGlsZHJlbjtpZihlKHUpJiZmKGkpKXtmb3IoYz0wO2M8eC51cGRhdGUubGVuZ3RoOysrYyl4LnVwZGF0ZVtjXShyLGkpO2UoYz11Lmhvb2spJiZlKGM9Yy51cGRhdGUpJiZjKHIsaSl9dChpLnRleHQpP2UobCkmJmUocCk/bCE9PXAmJmcocyxsLHAsbyxhKTplKHApPyhlKHIudGV4dCkmJkEuc2V0VGV4dENvbnRlbnQocyxcIlwiKSx2KHMsbnVsbCxwLDAscC5sZW5ndGgtMSxvKSk6ZShsKT9tKDAsbCwwLGwubGVuZ3RoLTEpOmUoci50ZXh0KSYmQS5zZXRUZXh0Q29udGVudChzLFwiXCIpOnIudGV4dCE9PWkudGV4dCYmQS5zZXRUZXh0Q29udGVudChzLGkudGV4dCksZSh1KSYmZShjPXUuaG9vaykmJmUoYz1jLnBvc3RwYXRjaCkmJmMocixpKX19fWZ1bmN0aW9uIGIodCxyLGkpe2lmKG4oaSkmJmUodC5wYXJlbnQpKXQucGFyZW50LmRhdGEucGVuZGluZ0luc2VydD1yO2Vsc2UgZm9yKHZhciBvPTA7bzxyLmxlbmd0aDsrK28pcltvXS5kYXRhLmhvb2suaW5zZXJ0KHJbb10pfWZ1bmN0aW9uICQodCxyLGksbyl7dmFyIGEsYz1yLnRhZyx1PXIuZGF0YSxmPXIuY2hpbGRyZW47aWYobz1vfHx1JiZ1LnByZSxyLmVsbT10LG4oci5pc0NvbW1lbnQpJiZlKHIuYXN5bmNGYWN0b3J5KSlyZXR1cm4gci5pc0FzeW5jUGxhY2Vob2xkZXI9ITAsITA7aWYoZSh1KSYmKGUoYT11Lmhvb2spJiZlKGE9YS5pbml0KSYmYShyLCEwKSxlKGE9ci5jb21wb25lbnRJbnN0YW5jZSkpKXJldHVybiBzKHIsaSksITA7aWYoZShjKSl7aWYoZShmKSlpZih0Lmhhc0NoaWxkTm9kZXMoKSlpZihlKGE9dSkmJmUoYT1hLmRvbVByb3BzKSYmZShhPWEuaW5uZXJIVE1MKSl7aWYoYSE9PXQuaW5uZXJIVE1MKXJldHVybiExfWVsc2V7Zm9yKHZhciBkPSEwLHY9dC5maXJzdENoaWxkLGg9MDtoPGYubGVuZ3RoO2grKyl7aWYoIXZ8fCEkKHYsZltoXSxpLG8pKXtkPSExO2JyZWFrfXY9di5uZXh0U2libGluZ31pZighZHx8dilyZXR1cm4hMX1lbHNlIGwocixmLGkpO2lmKGUodSkpe3ZhciBtPSExO2Zvcih2YXIgeSBpbiB1KWlmKCFPKHkpKXttPSEwLHAocixpKTticmVha30hbSYmdS5jbGFzcyYmVyh1LmNsYXNzKX19ZWxzZSB0LmRhdGEhPT1yLnRleHQmJih0LmRhdGE9ci50ZXh0KTtyZXR1cm4hMH12YXIgQyx3LHg9e30saz1pLm1vZHVsZXMsQT1pLm5vZGVPcHM7Zm9yKEM9MDtDPE9pLmxlbmd0aDsrK0MpZm9yKHhbT2lbQ11dPVtdLHc9MDt3PGsubGVuZ3RoOysrdyllKGtbd11bT2lbQ11dKSYmeFtPaVtDXV0ucHVzaChrW3ddW09pW0NdXSk7dmFyIE89dShcImF0dHJzLGNsYXNzLHN0YXRpY0NsYXNzLHN0YXRpY1N0eWxlLGtleVwiKTtyZXR1cm4gZnVuY3Rpb24ocixpLG8scyxjLHUpe2lmKCF0KGkpKXt2YXIgbD0hMSxwPVtdO2lmKHQocikpbD0hMCxhKGkscCxjLHUpO2Vsc2V7dmFyIGQ9ZShyLm5vZGVUeXBlKTtpZighZCYmWXQocixpKSlfKHIsaSxwLHMpO2Vsc2V7aWYoZCl7aWYoMT09PXIubm9kZVR5cGUmJnIuaGFzQXR0cmlidXRlKFZuKSYmKHIucmVtb3ZlQXR0cmlidXRlKFZuKSxvPSEwKSxuKG8pJiYkKHIsaSxwKSlyZXR1cm4gYihpLHAsITApLHI7cj1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IG1yKEEudGFnTmFtZSh0KS50b0xvd2VyQ2FzZSgpLHt9LFtdLHZvaWQgMCx0KX0ocil9dmFyIHY9ci5lbG0seT1BLnBhcmVudE5vZGUodik7aWYoYShpLHAsdi5fbGVhdmVDYj9udWxsOnksQS5uZXh0U2libGluZyh2KSksZShpLnBhcmVudCkpZm9yKHZhciBnPWkucGFyZW50LEM9ZihpKTtnOyl7Zm9yKHZhciB3PTA7dzx4LmRlc3Ryb3kubGVuZ3RoOysrdyl4LmRlc3Ryb3lbd10oZyk7aWYoZy5lbG09aS5lbG0sQyl7Zm9yKHZhciBrPTA7azx4LmNyZWF0ZS5sZW5ndGg7KytrKXguY3JlYXRlW2tdKEFpLGcpO3ZhciBPPWcuZGF0YS5ob29rLmluc2VydDtpZihPLm1lcmdlZClmb3IodmFyIFM9MTtTPE8uZm5zLmxlbmd0aDtTKyspTy5mbnNbU10oKX1lbHNlIFh0KGcpO2c9Zy5wYXJlbnR9ZSh5KT9tKDAsW3JdLDAsMCk6ZShyLnRhZykmJmgocil9fXJldHVybiBiKGkscCxsKSxpLmVsbX1lKHIpJiZoKHIpfX0oe25vZGVPcHM6eGksbW9kdWxlczpbamksTmksRGksUGksemksR24/e2NyZWF0ZTpWZSxhY3RpdmF0ZTpWZSxyZW1vdmU6ZnVuY3Rpb24odCxlKXshMCE9PXQuZGF0YS5zaG93P0hlKHQsZSk6ZSgpfX06e31dLmNvbmNhdChFaSl9KTt0ciYmZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNlbGVjdGlvbmNoYW5nZVwiLGZ1bmN0aW9uKCl7dmFyIHQ9ZG9jdW1lbnQuYWN0aXZlRWxlbWVudDt0JiZ0LnZtb2RlbCYmWmUodCxcImlucHV0XCIpfSk7dmFyIG5vPXtpbnNlcnRlZDpmdW5jdGlvbih0LGUsbixyKXtcInNlbGVjdFwiPT09bi50YWc/KHIuZWxtJiYhci5lbG0uX3ZPcHRpb25zP1kobixcInBvc3RwYXRjaFwiLGZ1bmN0aW9uKCl7bm8uY29tcG9uZW50VXBkYXRlZCh0LGUsbil9KTp6ZSh0LGUsbi5jb250ZXh0KSx0Ll92T3B0aW9ucz1bXS5tYXAuY2FsbCh0Lm9wdGlvbnMscWUpKTooXCJ0ZXh0YXJlYVwiPT09bi50YWd8fHdpKHQudHlwZSkpJiYodC5fdk1vZGlmaWVycz1lLm1vZGlmaWVycyxlLm1vZGlmaWVycy5sYXp5fHwodC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsR2UpLG5yfHwodC5hZGRFdmVudExpc3RlbmVyKFwiY29tcG9zaXRpb25zdGFydFwiLFdlKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjb21wb3NpdGlvbmVuZFwiLEdlKSksdHImJih0LnZtb2RlbD0hMCkpKX0sY29tcG9uZW50VXBkYXRlZDpmdW5jdGlvbih0LGUsbil7aWYoXCJzZWxlY3RcIj09PW4udGFnKXt6ZSh0LGUsbi5jb250ZXh0KTt2YXIgcj10Ll92T3B0aW9ucyxpPXQuX3ZPcHRpb25zPVtdLm1hcC5jYWxsKHQub3B0aW9ucyxxZSk7aWYoaS5zb21lKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIWcodCxyW2VdKX0pKXsodC5tdWx0aXBsZT9lLnZhbHVlLnNvbWUoZnVuY3Rpb24odCl7cmV0dXJuIEplKHQsaSl9KTplLnZhbHVlIT09ZS5vbGRWYWx1ZSYmSmUoZS52YWx1ZSxpKSkmJlplKHQsXCJjaGFuZ2VcIil9fX19LHJvPXttb2RlbDpubyxzaG93OntiaW5kOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1lLnZhbHVlLGk9KG49WGUobikpLmRhdGEmJm4uZGF0YS50cmFuc2l0aW9uLG89dC5fX3ZPcmlnaW5hbERpc3BsYXk9XCJub25lXCI9PT10LnN0eWxlLmRpc3BsYXk/XCJcIjp0LnN0eWxlLmRpc3BsYXk7ciYmaT8obi5kYXRhLnNob3c9ITAsUmUobixmdW5jdGlvbigpe3Quc3R5bGUuZGlzcGxheT1vfSkpOnQuc3R5bGUuZGlzcGxheT1yP286XCJub25lXCJ9LHVwZGF0ZTpmdW5jdGlvbih0LGUsbil7dmFyIHI9ZS52YWx1ZTtpZihyIT09ZS5vbGRWYWx1ZSl7KG49WGUobikpLmRhdGEmJm4uZGF0YS50cmFuc2l0aW9uPyhuLmRhdGEuc2hvdz0hMCxyP1JlKG4sZnVuY3Rpb24oKXt0LnN0eWxlLmRpc3BsYXk9dC5fX3ZPcmlnaW5hbERpc3BsYXl9KTpIZShuLGZ1bmN0aW9uKCl7dC5zdHlsZS5kaXNwbGF5PVwibm9uZVwifSkpOnQuc3R5bGUuZGlzcGxheT1yP3QuX192T3JpZ2luYWxEaXNwbGF5Olwibm9uZVwifX0sdW5iaW5kOmZ1bmN0aW9uKHQsZSxuLHIsaSl7aXx8KHQuc3R5bGUuZGlzcGxheT10Ll9fdk9yaWdpbmFsRGlzcGxheSl9fX0saW89e25hbWU6U3RyaW5nLGFwcGVhcjpCb29sZWFuLGNzczpCb29sZWFuLG1vZGU6U3RyaW5nLHR5cGU6U3RyaW5nLGVudGVyQ2xhc3M6U3RyaW5nLGxlYXZlQ2xhc3M6U3RyaW5nLGVudGVyVG9DbGFzczpTdHJpbmcsbGVhdmVUb0NsYXNzOlN0cmluZyxlbnRlckFjdGl2ZUNsYXNzOlN0cmluZyxsZWF2ZUFjdGl2ZUNsYXNzOlN0cmluZyxhcHBlYXJDbGFzczpTdHJpbmcsYXBwZWFyQWN0aXZlQ2xhc3M6U3RyaW5nLGFwcGVhclRvQ2xhc3M6U3RyaW5nLGR1cmF0aW9uOltOdW1iZXIsU3RyaW5nLE9iamVjdF19LG9vPXtuYW1lOlwidHJhbnNpdGlvblwiLHByb3BzOmlvLGFic3RyYWN0OiEwLHJlbmRlcjpmdW5jdGlvbih0KXt2YXIgZT10aGlzLG49dGhpcy4kc2xvdHMuZGVmYXVsdDtpZihuJiYobj1uLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gdC50YWd8fHJ0KHQpfSkpLmxlbmd0aCl7dmFyIGk9dGhpcy5tb2RlLG89blswXTtpZihmdW5jdGlvbih0KXtmb3IoO3Q9dC5wYXJlbnQ7KWlmKHQuZGF0YS50cmFuc2l0aW9uKXJldHVybiEwfSh0aGlzLiR2bm9kZSkpcmV0dXJuIG87dmFyIGE9WWUobyk7aWYoIWEpcmV0dXJuIG87aWYodGhpcy5fbGVhdmluZylyZXR1cm4gdG4odCxvKTt2YXIgcz1cIl9fdHJhbnNpdGlvbi1cIit0aGlzLl91aWQrXCItXCI7YS5rZXk9bnVsbD09YS5rZXk/YS5pc0NvbW1lbnQ/cytcImNvbW1lbnRcIjpzK2EudGFnOnIoYS5rZXkpPzA9PT1TdHJpbmcoYS5rZXkpLmluZGV4T2Yocyk/YS5rZXk6cythLmtleTphLmtleTt2YXIgYz0oYS5kYXRhfHwoYS5kYXRhPXt9KSkudHJhbnNpdGlvbj1RZSh0aGlzKSx1PXRoaXMuX3Zub2RlLGw9WWUodSk7aWYoYS5kYXRhLmRpcmVjdGl2ZXMmJmEuZGF0YS5kaXJlY3RpdmVzLnNvbWUoZnVuY3Rpb24odCl7cmV0dXJuXCJzaG93XCI9PT10Lm5hbWV9KSYmKGEuZGF0YS5zaG93PSEwKSxsJiZsLmRhdGEmJiFmdW5jdGlvbih0LGUpe3JldHVybiBlLmtleT09PXQua2V5JiZlLnRhZz09PXQudGFnfShhLGwpJiYhcnQobCkmJighbC5jb21wb25lbnRJbnN0YW5jZXx8IWwuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlLmlzQ29tbWVudCkpe3ZhciBmPWwuZGF0YS50cmFuc2l0aW9uPWgoe30sYyk7aWYoXCJvdXQtaW5cIj09PWkpcmV0dXJuIHRoaXMuX2xlYXZpbmc9ITAsWShmLFwiYWZ0ZXJMZWF2ZVwiLGZ1bmN0aW9uKCl7ZS5fbGVhdmluZz0hMSxlLiRmb3JjZVVwZGF0ZSgpfSksdG4odCxvKTtpZihcImluLW91dFwiPT09aSl7aWYocnQoYSkpcmV0dXJuIHU7dmFyIHAsZD1mdW5jdGlvbigpe3AoKX07WShjLFwiYWZ0ZXJFbnRlclwiLGQpLFkoYyxcImVudGVyQ2FuY2VsbGVkXCIsZCksWShmLFwiZGVsYXlMZWF2ZVwiLGZ1bmN0aW9uKHQpe3A9dH0pfX1yZXR1cm4gb319fSxhbz1oKHt0YWc6U3RyaW5nLG1vdmVDbGFzczpTdHJpbmd9LGlvKTtkZWxldGUgYW8ubW9kZTt2YXIgc289e1RyYW5zaXRpb246b28sVHJhbnNpdGlvbkdyb3VwOntwcm9wczphbyxyZW5kZXI6ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXRoaXMudGFnfHx0aGlzLiR2bm9kZS5kYXRhLnRhZ3x8XCJzcGFuXCIsbj1PYmplY3QuY3JlYXRlKG51bGwpLHI9dGhpcy5wcmV2Q2hpbGRyZW49dGhpcy5jaGlsZHJlbixpPXRoaXMuJHNsb3RzLmRlZmF1bHR8fFtdLG89dGhpcy5jaGlsZHJlbj1bXSxhPVFlKHRoaXMpLHM9MDtzPGkubGVuZ3RoO3MrKyl7dmFyIGM9aVtzXTtjLnRhZyYmbnVsbCE9Yy5rZXkmJjAhPT1TdHJpbmcoYy5rZXkpLmluZGV4T2YoXCJfX3ZsaXN0XCIpJiYoby5wdXNoKGMpLG5bYy5rZXldPWMsKGMuZGF0YXx8KGMuZGF0YT17fSkpLnRyYW5zaXRpb249YSl9aWYocil7Zm9yKHZhciB1PVtdLGw9W10sZj0wO2Y8ci5sZW5ndGg7ZisrKXt2YXIgcD1yW2ZdO3AuZGF0YS50cmFuc2l0aW9uPWEscC5kYXRhLnBvcz1wLmVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxuW3Aua2V5XT91LnB1c2gocCk6bC5wdXNoKHApfXRoaXMua2VwdD10KGUsbnVsbCx1KSx0aGlzLnJlbW92ZWQ9bH1yZXR1cm4gdChlLG51bGwsbyl9LGJlZm9yZVVwZGF0ZTpmdW5jdGlvbigpe3RoaXMuX19wYXRjaF9fKHRoaXMuX3Zub2RlLHRoaXMua2VwdCwhMSwhMCksdGhpcy5fdm5vZGU9dGhpcy5rZXB0fSx1cGRhdGVkOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5wcmV2Q2hpbGRyZW4sZT10aGlzLm1vdmVDbGFzc3x8KHRoaXMubmFtZXx8XCJ2XCIpK1wiLW1vdmVcIjt0Lmxlbmd0aCYmdGhpcy5oYXNNb3ZlKHRbMF0uZWxtLGUpJiYodC5mb3JFYWNoKGVuKSx0LmZvckVhY2gobm4pLHQuZm9yRWFjaChybiksdGhpcy5fcmVmbG93PWRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LHQuZm9yRWFjaChmdW5jdGlvbih0KXtpZih0LmRhdGEubW92ZWQpe3ZhciBuPXQuZWxtLHI9bi5zdHlsZTtJZShuLGUpLHIudHJhbnNmb3JtPXIuV2Via2l0VHJhbnNmb3JtPXIudHJhbnNpdGlvbkR1cmF0aW9uPVwiXCIsbi5hZGRFdmVudExpc3RlbmVyKFppLG4uX21vdmVDYj1mdW5jdGlvbiB0KHIpe3ImJiEvdHJhbnNmb3JtJC8udGVzdChyLnByb3BlcnR5TmFtZSl8fChuLnJlbW92ZUV2ZW50TGlzdGVuZXIoWmksdCksbi5fbW92ZUNiPW51bGwsTGUobixlKSl9KX19KSl9LG1ldGhvZHM6e2hhc01vdmU6ZnVuY3Rpb24odCxlKXtpZighSmkpcmV0dXJuITE7aWYodGhpcy5faGFzTW92ZSlyZXR1cm4gdGhpcy5faGFzTW92ZTt2YXIgbj10LmNsb25lTm9kZSgpO3QuX3RyYW5zaXRpb25DbGFzc2VzJiZ0Ll90cmFuc2l0aW9uQ2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uKHQpe0VlKG4sdCl9KSxUZShuLGUpLG4uc3R5bGUuZGlzcGxheT1cIm5vbmVcIix0aGlzLiRlbC5hcHBlbmRDaGlsZChuKTt2YXIgcj1EZShuKTtyZXR1cm4gdGhpcy4kZWwucmVtb3ZlQ2hpbGQobiksdGhpcy5faGFzTW92ZT1yLmhhc1RyYW5zZm9ybX19fX07UnQuY29uZmlnLm11c3RVc2VQcm9wPWZpLFJ0LmNvbmZpZy5pc1Jlc2VydmVkVGFnPSRpLFJ0LmNvbmZpZy5pc1Jlc2VydmVkQXR0cj11aSxSdC5jb25maWcuZ2V0VGFnTmFtZXNwYWNlPUd0LFJ0LmNvbmZpZy5pc1Vua25vd25FbGVtZW50PWZ1bmN0aW9uKHQpe2lmKCFHbilyZXR1cm4hMDtpZigkaSh0KSlyZXR1cm4hMTtpZih0PXQudG9Mb3dlckNhc2UoKSxudWxsIT1DaVt0XSlyZXR1cm4gQ2lbdF07dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0KTtyZXR1cm4gdC5pbmRleE9mKFwiLVwiKT4tMT9DaVt0XT1lLmNvbnN0cnVjdG9yPT09d2luZG93LkhUTUxVbmtub3duRWxlbWVudHx8ZS5jb25zdHJ1Y3Rvcj09PXdpbmRvdy5IVE1MRWxlbWVudDpDaVt0XT0vSFRNTFVua25vd25FbGVtZW50Ly50ZXN0KGUudG9TdHJpbmcoKSl9LGgoUnQub3B0aW9ucy5kaXJlY3RpdmVzLHJvKSxoKFJ0Lm9wdGlvbnMuY29tcG9uZW50cyxzbyksUnQucHJvdG90eXBlLl9fcGF0Y2hfXz1Hbj9lbzp5LFJ0LnByb3RvdHlwZS4kbW91bnQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdD10JiZHbj9adCh0KTp2b2lkIDAsZnVuY3Rpb24odCxlLG4pe3QuJGVsPWUsdC4kb3B0aW9ucy5yZW5kZXJ8fCh0LiRvcHRpb25zLnJlbmRlcj1nciksdnQodCxcImJlZm9yZU1vdW50XCIpO3ZhciByO3JldHVybiByPWZ1bmN0aW9uKCl7dC5fdXBkYXRlKHQuX3JlbmRlcigpLG4pfSxuZXcgS3IodCxyLHksbnVsbCwhMCksbj0hMSxudWxsPT10LiR2bm9kZSYmKHQuX2lzTW91bnRlZD0hMCx2dCh0LFwibW91bnRlZFwiKSksdH0odGhpcyx0LGUpfSxSdC5uZXh0VGljayhmdW5jdGlvbigpe0puLmRldnRvb2xzJiZsciYmbHIuZW1pdChcImluaXRcIixSdCl9LDApO3ZhciBjbyx1bz0vXFx7XFx7KCg/Oi58XFxuKSs/KVxcfVxcfS9nLGxvPS9bLS4qKz9eJHt9KCl8W1xcXVxcL1xcXFxdL2csZm89cChmdW5jdGlvbih0KXt2YXIgZT10WzBdLnJlcGxhY2UobG8sXCJcXFxcJCZcIiksbj10WzFdLnJlcGxhY2UobG8sXCJcXFxcJCZcIik7cmV0dXJuIG5ldyBSZWdFeHAoZStcIigoPzoufFxcXFxuKSs/KVwiK24sXCJnXCIpfSkscG89e3N0YXRpY0tleXM6W1wic3RhdGljQ2xhc3NcIl0sdHJhbnNmb3JtTm9kZTpmdW5jdGlvbih0LGUpe2Uud2Fybjt2YXIgbj1oZSh0LFwiY2xhc3NcIik7biYmKHQuc3RhdGljQ2xhc3M9SlNPTi5zdHJpbmdpZnkobikpO3ZhciByPXZlKHQsXCJjbGFzc1wiLCExKTtyJiYodC5jbGFzc0JpbmRpbmc9cil9LGdlbkRhdGE6ZnVuY3Rpb24odCl7dmFyIGU9XCJcIjtyZXR1cm4gdC5zdGF0aWNDbGFzcyYmKGUrPVwic3RhdGljQ2xhc3M6XCIrdC5zdGF0aWNDbGFzcytcIixcIiksdC5jbGFzc0JpbmRpbmcmJihlKz1cImNsYXNzOlwiK3QuY2xhc3NCaW5kaW5nK1wiLFwiKSxlfX0sdm89e3N0YXRpY0tleXM6W1wic3RhdGljU3R5bGVcIl0sdHJhbnNmb3JtTm9kZTpmdW5jdGlvbih0LGUpe2Uud2Fybjt2YXIgbj1oZSh0LFwic3R5bGVcIik7biYmKHQuc3RhdGljU3R5bGU9SlNPTi5zdHJpbmdpZnkoRmkobikpKTt2YXIgcj12ZSh0LFwic3R5bGVcIiwhMSk7ciYmKHQuc3R5bGVCaW5kaW5nPXIpfSxnZW5EYXRhOmZ1bmN0aW9uKHQpe3ZhciBlPVwiXCI7cmV0dXJuIHQuc3RhdGljU3R5bGUmJihlKz1cInN0YXRpY1N0eWxlOlwiK3Quc3RhdGljU3R5bGUrXCIsXCIpLHQuc3R5bGVCaW5kaW5nJiYoZSs9XCJzdHlsZTooXCIrdC5zdHlsZUJpbmRpbmcrXCIpLFwiKSxlfX0saG89ZnVuY3Rpb24odCl7cmV0dXJuIGNvPWNvfHxkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGNvLmlubmVySFRNTD10LGNvLnRleHRDb250ZW50fSxtbz11KFwiYXJlYSxiYXNlLGJyLGNvbCxlbWJlZCxmcmFtZSxocixpbWcsaW5wdXQsaXNpbmRleCxrZXlnZW4sbGluayxtZXRhLHBhcmFtLHNvdXJjZSx0cmFjayx3YnJcIikseW89dShcImNvbGdyb3VwLGRkLGR0LGxpLG9wdGlvbnMscCx0ZCx0Zm9vdCx0aCx0aGVhZCx0cixzb3VyY2VcIiksZ289dShcImFkZHJlc3MsYXJ0aWNsZSxhc2lkZSxiYXNlLGJsb2NrcXVvdGUsYm9keSxjYXB0aW9uLGNvbCxjb2xncm91cCxkZCxkZXRhaWxzLGRpYWxvZyxkaXYsZGwsZHQsZmllbGRzZXQsZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGZvcm0saDEsaDIsaDMsaDQsaDUsaDYsaGVhZCxoZWFkZXIsaGdyb3VwLGhyLGh0bWwsbGVnZW5kLGxpLG1lbnVpdGVtLG1ldGEsb3B0Z3JvdXAsb3B0aW9uLHBhcmFtLHJwLHJ0LHNvdXJjZSxzdHlsZSxzdW1tYXJ5LHRib2R5LHRkLHRmb290LHRoLHRoZWFkLHRpdGxlLHRyLHRyYWNrXCIpLF9vPS9eXFxzKihbXlxcc1wiJzw+XFwvPV0rKSg/OlxccyooPSlcXHMqKD86XCIoW15cIl0qKVwiK3wnKFteJ10qKScrfChbXlxcc1wiJz08PmBdKykpKT8vLGJvPVwiW2EtekEtWl9dW1xcXFx3XFxcXC1cXFxcLl0qXCIsJG89XCIoKD86XCIrYm8rXCJcXFxcOik/XCIrYm8rXCIpXCIsQ289bmV3IFJlZ0V4cChcIl48XCIrJG8pLHdvPS9eXFxzKihcXC8/KT4vLHhvPW5ldyBSZWdFeHAoXCJePFxcXFwvXCIrJG8rXCJbXj5dKj5cIiksa289L148IURPQ1RZUEUgW14+XSs+L2ksQW89L148IS0tLyxPbz0vXjwhXFxbLyxTbz0hMTtcInhcIi5yZXBsYWNlKC94KC4pPy9nLGZ1bmN0aW9uKHQsZSl7U289XCJcIj09PWV9KTt2YXIgVG8sRW8sam8sTm8sSW8sTG8sTW8sRG8sUG8sRm8sUm8sSG89dShcInNjcmlwdCxzdHlsZSx0ZXh0YXJlYVwiLCEwKSxCbz17fSxVbz17XCImbHQ7XCI6XCI8XCIsXCImZ3Q7XCI6XCI+XCIsXCImcXVvdDtcIjonXCInLFwiJmFtcDtcIjpcIiZcIixcIiYjMTA7XCI6XCJcXG5cIixcIiYjOTtcIjpcIlxcdFwifSxWbz0vJig/Omx0fGd0fHF1b3R8YW1wKTsvZyx6bz0vJig/Omx0fGd0fHF1b3R8YW1wfCMxMHwjOSk7L2csS289dShcInByZSx0ZXh0YXJlYVwiLCEwKSxKbz1mdW5jdGlvbih0LGUpe3JldHVybiB0JiZLbyh0KSYmXCJcXG5cIj09PWVbMF19LHFvPS9eQHxedi1vbjovLFdvPS9edi18XkB8XjovLEdvPS8oLio/KVxccysoPzppbnxvZilcXHMrKC4qKS8sWm89LywoW14sXFx9XFxdXSopKD86LChbXixcXH1cXF1dKikpPyQvLFhvPS9eXFwofFxcKSQvZyxZbz0vOiguKikkLyxRbz0vXjp8XnYtYmluZDovLHRhPS9cXC5bXi5dKy9nLGVhPXAoaG8pLG5hPS9eeG1sbnM6TlNcXGQrLyxyYT0vXk5TXFxkKzovLGlhPVtwbyx2byx7cHJlVHJhbnNmb3JtTm9kZTpmdW5jdGlvbih0LGUpe2lmKFwiaW5wdXRcIj09PXQudGFnKXt2YXIgbj10LmF0dHJzTWFwO2lmKG5bXCJ2LW1vZGVsXCJdJiYobltcInYtYmluZDp0eXBlXCJdfHxuW1wiOnR5cGVcIl0pKXt2YXIgcj12ZSh0LFwidHlwZVwiKSxpPWhlKHQsXCJ2LWlmXCIsITApLG89aT9cIiYmKFwiK2krXCIpXCI6XCJcIixhPW51bGwhPWhlKHQsXCJ2LWVsc2VcIiwhMCkscz1oZSh0LFwidi1lbHNlLWlmXCIsITApLGM9Zm4odCk7dW4oYyksZmUoYyxcInR5cGVcIixcImNoZWNrYm94XCIpLGNuKGMsZSksYy5wcm9jZXNzZWQ9ITAsYy5pZj1cIihcIityK1wiKT09PSdjaGVja2JveCdcIitvLGxuKGMse2V4cDpjLmlmLGJsb2NrOmN9KTt2YXIgdT1mbih0KTtoZSh1LFwidi1mb3JcIiwhMCksZmUodSxcInR5cGVcIixcInJhZGlvXCIpLGNuKHUsZSksbG4oYyx7ZXhwOlwiKFwiK3IrXCIpPT09J3JhZGlvJ1wiK28sYmxvY2s6dX0pO3ZhciBsPWZuKHQpO3JldHVybiBoZShsLFwidi1mb3JcIiwhMCksZmUobCxcIjp0eXBlXCIsciksY24obCxlKSxsbihjLHtleHA6aSxibG9jazpsfSksYT9jLmVsc2U9ITA6cyYmKGMuZWxzZWlmPXMpLGN9fX19XSxvYT17ZXhwZWN0SFRNTDohMCxtb2R1bGVzOmlhLGRpcmVjdGl2ZXM6e21vZGVsOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1lLnZhbHVlLGk9ZS5tb2RpZmllcnMsbz10LnRhZyxhPXQuYXR0cnNNYXAudHlwZTtpZih0LmNvbXBvbmVudClyZXR1cm4gbWUodCxyLGkpLCExO2lmKFwic2VsZWN0XCI9PT1vKSFmdW5jdGlvbih0LGUsbil7dmFyIHI9J3ZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucyxmdW5jdGlvbihvKXtyZXR1cm4gby5zZWxlY3RlZH0pLm1hcChmdW5jdGlvbihvKXt2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlO3JldHVybiAnKyhuJiZuLm51bWJlcj9cIl9uKHZhbClcIjpcInZhbFwiKStcIn0pO1wiO3I9citcIiBcIit5ZShlLFwiJGV2ZW50LnRhcmdldC5tdWx0aXBsZSA/ICQkc2VsZWN0ZWRWYWwgOiAkJHNlbGVjdGVkVmFsWzBdXCIpLGRlKHQsXCJjaGFuZ2VcIixyLG51bGwsITApfSh0LHIsaSk7ZWxzZSBpZihcImlucHV0XCI9PT1vJiZcImNoZWNrYm94XCI9PT1hKSFmdW5jdGlvbih0LGUsbil7dmFyIHI9biYmbi5udW1iZXIsaT12ZSh0LFwidmFsdWVcIil8fFwibnVsbFwiLG89dmUodCxcInRydWUtdmFsdWVcIil8fFwidHJ1ZVwiLGE9dmUodCxcImZhbHNlLXZhbHVlXCIpfHxcImZhbHNlXCI7dWUodCxcImNoZWNrZWRcIixcIkFycmF5LmlzQXJyYXkoXCIrZStcIik/X2koXCIrZStcIixcIitpK1wiKT4tMVwiKyhcInRydWVcIj09PW8/XCI6KFwiK2UrXCIpXCI6XCI6X3EoXCIrZStcIixcIitvK1wiKVwiKSksZGUodCxcImNoYW5nZVwiLFwidmFyICQkYT1cIitlK1wiLCQkZWw9JGV2ZW50LnRhcmdldCwkJGM9JCRlbC5jaGVja2VkPyhcIitvK1wiKTooXCIrYStcIik7aWYoQXJyYXkuaXNBcnJheSgkJGEpKXt2YXIgJCR2PVwiKyhyP1wiX24oXCIraStcIilcIjppKStcIiwkJGk9X2koJCRhLCQkdik7aWYoJCRlbC5jaGVja2VkKXskJGk8MCYmKFwiK2UrXCI9JCRhLmNvbmNhdChbJCR2XSkpfWVsc2V7JCRpPi0xJiYoXCIrZStcIj0kJGEuc2xpY2UoMCwkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpKzEpKSl9fWVsc2V7XCIreWUoZSxcIiQkY1wiKStcIn1cIixudWxsLCEwKX0odCxyLGkpO2Vsc2UgaWYoXCJpbnB1dFwiPT09byYmXCJyYWRpb1wiPT09YSkhZnVuY3Rpb24odCxlLG4pe3ZhciByPW4mJm4ubnVtYmVyLGk9dmUodCxcInZhbHVlXCIpfHxcIm51bGxcIjt1ZSh0LFwiY2hlY2tlZFwiLFwiX3EoXCIrZStcIixcIisoaT1yP1wiX24oXCIraStcIilcIjppKStcIilcIiksZGUodCxcImNoYW5nZVwiLHllKGUsaSksbnVsbCwhMCl9KHQscixpKTtlbHNlIGlmKFwiaW5wdXRcIj09PW98fFwidGV4dGFyZWFcIj09PW8pIWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10LmF0dHJzTWFwLnR5cGUsaT1ufHx7fSxvPWkubGF6eSxhPWkubnVtYmVyLHM9aS50cmltLGM9IW8mJlwicmFuZ2VcIiE9PXIsdT1vP1wiY2hhbmdlXCI6XCJyYW5nZVwiPT09cj9MaTpcImlucHV0XCIsbD1cIiRldmVudC50YXJnZXQudmFsdWVcIjtzJiYobD1cIiRldmVudC50YXJnZXQudmFsdWUudHJpbSgpXCIpLGEmJihsPVwiX24oXCIrbCtcIilcIik7dmFyIGY9eWUoZSxsKTtjJiYoZj1cImlmKCRldmVudC50YXJnZXQuY29tcG9zaW5nKXJldHVybjtcIitmKSx1ZSh0LFwidmFsdWVcIixcIihcIitlK1wiKVwiKSxkZSh0LHUsZixudWxsLCEwKSwoc3x8YSkmJmRlKHQsXCJibHVyXCIsXCIkZm9yY2VVcGRhdGUoKVwiKX0odCxyLGkpO2Vsc2UgaWYoIUpuLmlzUmVzZXJ2ZWRUYWcobykpcmV0dXJuIG1lKHQscixpKSwhMTtyZXR1cm4hMH0sdGV4dDpmdW5jdGlvbih0LGUpe2UudmFsdWUmJnVlKHQsXCJ0ZXh0Q29udGVudFwiLFwiX3MoXCIrZS52YWx1ZStcIilcIil9LGh0bWw6ZnVuY3Rpb24odCxlKXtlLnZhbHVlJiZ1ZSh0LFwiaW5uZXJIVE1MXCIsXCJfcyhcIitlLnZhbHVlK1wiKVwiKX19LGlzUHJlVGFnOmZ1bmN0aW9uKHQpe3JldHVyblwicHJlXCI9PT10fSxpc1VuYXJ5VGFnOm1vLG11c3RVc2VQcm9wOmZpLGNhbkJlTGVmdE9wZW5UYWc6eW8saXNSZXNlcnZlZFRhZzokaSxnZXRUYWdOYW1lc3BhY2U6R3Qsc3RhdGljS2V5czpmdW5jdGlvbih0KXtyZXR1cm4gdC5yZWR1Y2UoZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5jb25jYXQoZS5zdGF0aWNLZXlzfHxbXSl9LFtdKS5qb2luKFwiLFwiKX0oaWEpfSxhYT1wKGZ1bmN0aW9uKHQpe3JldHVybiB1KFwidHlwZSx0YWcsYXR0cnNMaXN0LGF0dHJzTWFwLHBsYWluLHBhcmVudCxjaGlsZHJlbixhdHRyc1wiKyh0P1wiLFwiK3Q6XCJcIikpfSksc2E9L15cXHMqKFtcXHckX10rfFxcKFteKV0qP1xcKSlcXHMqPT58XmZ1bmN0aW9uXFxzKlxcKC8sY2E9L15cXHMqW0EtWmEtel8kXVtcXHckXSooPzpcXC5bQS1aYS16XyRdW1xcdyRdKnxcXFsnLio/J118XFxbXCIuKj9cIl18XFxbXFxkK118XFxbW0EtWmEtel8kXVtcXHckXSpdKSpcXHMqJC8sdWE9e2VzYzoyNyx0YWI6OSxlbnRlcjoxMyxzcGFjZTozMix1cDozOCxsZWZ0OjM3LHJpZ2h0OjM5LGRvd246NDAsZGVsZXRlOls4LDQ2XX0sbGE9ZnVuY3Rpb24odCl7cmV0dXJuXCJpZihcIit0K1wiKXJldHVybiBudWxsO1wifSxmYT17c3RvcDpcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcIixwcmV2ZW50OlwiJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XCIsc2VsZjpsYShcIiRldmVudC50YXJnZXQgIT09ICRldmVudC5jdXJyZW50VGFyZ2V0XCIpLGN0cmw6bGEoXCIhJGV2ZW50LmN0cmxLZXlcIiksc2hpZnQ6bGEoXCIhJGV2ZW50LnNoaWZ0S2V5XCIpLGFsdDpsYShcIiEkZXZlbnQuYWx0S2V5XCIpLG1ldGE6bGEoXCIhJGV2ZW50Lm1ldGFLZXlcIiksbGVmdDpsYShcIididXR0b24nIGluICRldmVudCAmJiAkZXZlbnQuYnV0dG9uICE9PSAwXCIpLG1pZGRsZTpsYShcIididXR0b24nIGluICRldmVudCAmJiAkZXZlbnQuYnV0dG9uICE9PSAxXCIpLHJpZ2h0OmxhKFwiJ2J1dHRvbicgaW4gJGV2ZW50ICYmICRldmVudC5idXR0b24gIT09IDJcIil9LHBhPXtvbjpmdW5jdGlvbih0LGUpe3Qud3JhcExpc3RlbmVycz1mdW5jdGlvbih0KXtyZXR1cm5cIl9nKFwiK3QrXCIsXCIrZS52YWx1ZStcIilcIn19LGJpbmQ6ZnVuY3Rpb24odCxlKXt0LndyYXBEYXRhPWZ1bmN0aW9uKG4pe3JldHVyblwiX2IoXCIrbitcIiwnXCIrdC50YWcrXCInLFwiK2UudmFsdWUrXCIsXCIrKGUubW9kaWZpZXJzJiZlLm1vZGlmaWVycy5wcm9wP1widHJ1ZVwiOlwiZmFsc2VcIikrKGUubW9kaWZpZXJzJiZlLm1vZGlmaWVycy5zeW5jP1wiLHRydWVcIjpcIlwiKStcIilcIn19LGNsb2FrOnl9LGRhPWZ1bmN0aW9uKHQpe3RoaXMub3B0aW9ucz10LHRoaXMud2Fybj10Lndhcm58fHNlLHRoaXMudHJhbnNmb3Jtcz1jZSh0Lm1vZHVsZXMsXCJ0cmFuc2Zvcm1Db2RlXCIpLHRoaXMuZGF0YUdlbkZucz1jZSh0Lm1vZHVsZXMsXCJnZW5EYXRhXCIpLHRoaXMuZGlyZWN0aXZlcz1oKGgoe30scGEpLHQuZGlyZWN0aXZlcyk7dmFyIGU9dC5pc1Jlc2VydmVkVGFnfHxCbjt0aGlzLm1heWJlQ29tcG9uZW50PWZ1bmN0aW9uKHQpe3JldHVybiFlKHQudGFnKX0sdGhpcy5vbmNlSWQ9MCx0aGlzLnN0YXRpY1JlbmRlckZucz1bXX0sdmE9KG5ldyBSZWdFeHAoXCJcXFxcYlwiK1wiZG8saWYsZm9yLGxldCxuZXcsdHJ5LHZhcixjYXNlLGVsc2Usd2l0aCxhd2FpdCxicmVhayxjYXRjaCxjbGFzcyxjb25zdCxzdXBlcix0aHJvdyx3aGlsZSx5aWVsZCxkZWxldGUsZXhwb3J0LGltcG9ydCxyZXR1cm4sc3dpdGNoLGRlZmF1bHQsZXh0ZW5kcyxmaW5hbGx5LGNvbnRpbnVlLGRlYnVnZ2VyLGZ1bmN0aW9uLGFyZ3VtZW50c1wiLnNwbGl0KFwiLFwiKS5qb2luKFwiXFxcXGJ8XFxcXGJcIikrXCJcXFxcYlwiKSxuZXcgUmVnRXhwKFwiXFxcXGJcIitcImRlbGV0ZSx0eXBlb2Ysdm9pZFwiLnNwbGl0KFwiLFwiKS5qb2luKFwiXFxcXHMqXFxcXChbXlxcXFwpXSpcXFxcKXxcXFxcYlwiKStcIlxcXFxzKlxcXFwoW15cXFxcKV0qXFxcXClcIiksZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIG4obixyKXt2YXIgaT1PYmplY3QuY3JlYXRlKGUpLG89W10sYT1bXTtpZihpLndhcm49ZnVuY3Rpb24odCxlKXsoZT9hOm8pLnB1c2godCl9LHIpe3IubW9kdWxlcyYmKGkubW9kdWxlcz0oZS5tb2R1bGVzfHxbXSkuY29uY2F0KHIubW9kdWxlcykpLHIuZGlyZWN0aXZlcyYmKGkuZGlyZWN0aXZlcz1oKE9iamVjdC5jcmVhdGUoZS5kaXJlY3RpdmVzfHxudWxsKSxyLmRpcmVjdGl2ZXMpKTtmb3IodmFyIHMgaW4gcilcIm1vZHVsZXNcIiE9PXMmJlwiZGlyZWN0aXZlc1wiIT09cyYmKGlbc109cltzXSl9dmFyIGM9dChuLGkpO3JldHVybiBjLmVycm9ycz1vLGMudGlwcz1hLGN9cmV0dXJue2NvbXBpbGU6bixjb21waWxlVG9GdW5jdGlvbnM6ZnVuY3Rpb24odCl7dmFyIGU9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm4gZnVuY3Rpb24obixyLGkpeyhyPWgoe30scikpLndhcm4sZGVsZXRlIHIud2Fybjt2YXIgbz1yLmRlbGltaXRlcnM/U3RyaW5nKHIuZGVsaW1pdGVycykrbjpuO2lmKGVbb10pcmV0dXJuIGVbb107dmFyIGE9dChuLHIpLHM9e30sYz1bXTtyZXR1cm4gcy5yZW5kZXI9VG4oYS5yZW5kZXIsYykscy5zdGF0aWNSZW5kZXJGbnM9YS5zdGF0aWNSZW5kZXJGbnMubWFwKGZ1bmN0aW9uKHQpe3JldHVybiBUbih0LGMpfSksZVtvXT1zfX0obil9fX0oZnVuY3Rpb24odCxlKXt2YXIgbj1zbih0LnRyaW0oKSxlKTshMSE9PWUub3B0aW1pemUmJmZ1bmN0aW9uKHQsZSl7dCYmKFBvPWFhKGUuc3RhdGljS2V5c3x8XCJcIiksRm89ZS5pc1Jlc2VydmVkVGFnfHxCbixwbih0KSxkbih0LCExKSl9KG4sZSk7dmFyIHI9eW4obixlKTtyZXR1cm57YXN0Om4scmVuZGVyOnIucmVuZGVyLHN0YXRpY1JlbmRlckZuczpyLnN0YXRpY1JlbmRlckZuc319KShvYSkuY29tcGlsZVRvRnVuY3Rpb25zKSxoYT0hIUduJiZFbighMSksbWE9ISFHbiYmRW4oITApLHlhPXAoZnVuY3Rpb24odCl7dmFyIGU9WnQodCk7cmV0dXJuIGUmJmUuaW5uZXJIVE1MfSksZ2E9UnQucHJvdG90eXBlLiRtb3VudDtyZXR1cm4gUnQucHJvdG90eXBlLiRtb3VudD1mdW5jdGlvbih0LGUpe2lmKCh0PXQmJlp0KHQpKT09PWRvY3VtZW50LmJvZHl8fHQ9PT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpcmV0dXJuIHRoaXM7dmFyIG49dGhpcy4kb3B0aW9ucztpZighbi5yZW5kZXIpe3ZhciByPW4udGVtcGxhdGU7aWYocilpZihcInN0cmluZ1wiPT10eXBlb2YgcilcIiNcIj09PXIuY2hhckF0KDApJiYocj15YShyKSk7ZWxzZXtpZighci5ub2RlVHlwZSlyZXR1cm4gdGhpcztyPXIuaW5uZXJIVE1MfWVsc2UgdCYmKHI9ZnVuY3Rpb24odCl7aWYodC5vdXRlckhUTUwpcmV0dXJuIHQub3V0ZXJIVE1MO3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGUuYXBwZW5kQ2hpbGQodC5jbG9uZU5vZGUoITApKSxlLmlubmVySFRNTH0odCkpO2lmKHIpe3ZhciBpPXZhKHIse3Nob3VsZERlY29kZU5ld2xpbmVzOmhhLHNob3VsZERlY29kZU5ld2xpbmVzRm9ySHJlZjptYSxkZWxpbWl0ZXJzOm4uZGVsaW1pdGVycyxjb21tZW50czpuLmNvbW1lbnRzfSx0aGlzKSxvPWkucmVuZGVyLGE9aS5zdGF0aWNSZW5kZXJGbnM7bi5yZW5kZXI9byxuLnN0YXRpY1JlbmRlckZucz1hfX1yZXR1cm4gZ2EuY2FsbCh0aGlzLHQsZSl9LFJ0LmNvbXBpbGU9dmEsUnR9KTsiLCJ2YXIgc2Nyb2xsQ29tcG9uZW50ID0gKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIHNjcm9sbFBvc2l0aW9uID0ge1xyXG4gICAgICAgIGN1cnJlbnQgOiAwLFxyXG4gICAgICAgIHByZXZpb3VzIDogMCxcclxuICAgICAgICBiYWNrdXAgOiAwXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFBSSVZBVEUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgc2Nyb2xsQ2hlY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2Nyb2xsUG9zaXRpb24ucHJldmlvdXMgPSBzY3JvbGxQb3NpdGlvbi5jdXJyZW50O1xyXG4gICAgICAgIHNjcm9sbFBvc2l0aW9uLmN1cnJlbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IHdpbmRvdy5wYWdlWU9mZnNldCB8fCB3aW5kb3cuc2Nyb2xsWTtcclxuICAgIH07XHJcblxyXG4gICAgLyogc2Nyb2xsIHRvICovXHJcbiAgICBzY3JvbGxNb3ZlVG8gPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oIDAsIHBvc2l0aW9uICk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qIHNhdmUgc2Nyb2xsIHBvc2l0aW9uICovXHJcbiAgICBzY3JvbGxTYXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNjcm9sbFBvc2l0aW9uLmJhY2t1cCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgd2luZG93LnBhZ2VZT2Zmc2V0IHx8IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKiBzY3JvbGwgZW5hYmxlICovXHJcbiAgICBzY3JvbGxFbmFibGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnJztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gJyc7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qIHNjcm9sbCBkaXNhYmxlICovXHJcbiAgICBzY3JvbGxEaXNhYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qIHJldHVybiBkb3duIHx8IHVwICovXHJcbiAgICBzY3JvbGxEaXJlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICggc2Nyb2xsUG9zaXRpb24uY3VycmVudCA+PSBzY3JvbGxQb3NpdGlvbi5wcmV2aW91cyApID8gJ2Rvd24nIDogJ3VwJztcclxuICAgIH07XHJcblxyXG5cclxuICAgIC8vIElOSVQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgc2Nyb2xsQ2hlY2soKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBzY3JvbGxDaGVjaygpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vIFBVQkxJQyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjdXJyZW50IDogZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsTW92ZVRvKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHNjcm9sbENoZWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxDaGVjaygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjcm9sbFBvc2l0aW9uLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRpcmVjdGlvbiA6IGZ1bmN0aW9uKCl7IHJldHVybiBzY3JvbGxEaXJlY3Rpb24oKSB9LFxyXG4gICAgICAgIGVuYWJsZSA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHNjcm9sbEVuYWJsZSgpO1xyXG4gICAgICAgICAgICBzY3JvbGxNb3ZlVG8oc2Nyb2xsUG9zaXRpb24uYmFja3VwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRpc2FibGUgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBzY3JvbGxTYXZlKCk7XHJcbiAgICAgICAgICAgIHNjcm9sbERpc2FibGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0oKSk7IixudWxsLCJ2YXIgZ29hbENvbXBvbmVudCA9IChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBzZXJ2aWNlcyA9IHtcclxuICAgICAgICB5YUNvdW50ZXJJRCA6IGZhbHNlLFxyXG4gICAgICAgIG1haWxSdUlEIDogZmFsc2UsXHJcbiAgICAgICAgZ2FVc2VkIDogdHJ1ZSxcclxuICAgICAgICBmYnFVc2VkIDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBQUklWQVRFID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGdvYWxEb25lID0gZnVuY3Rpb24gKGdvYWxOYW1lKSB7XHJcbiAgICAgICAgaWYoc2VydmljZXMueWFDb3VudGVySUQgIT09JycgJiYgIHR5cGVvZiB3aW5kb3dbJ3lhQ291bnRlcicgKyBzZXJ2aWNlcy55YUNvdW50ZXJJRF0gIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICB3aW5kb3dbJ3lhQ291bnRlcicgKyBzZXJ2aWNlcy55YUNvdW50ZXJJRF0ucmVhY2hHb2FsKGdvYWxOYW1lLCBmdW5jdGlvbiAoKSB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHNlcnZpY2VzLm1haWxSdUlEICE9PScnICYmIHR5cGVvZiBfdG1yICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgX3Rtci5wdXNoKHsgaWQ6IHNlcnZpY2VzLm1haWxSdUlELCB0eXBlOiAncmVhY2hHb2FsJywgZ29hbDogZ29hbE5hbWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHNlcnZpY2VzLmdhVXNlZCAmJiB0eXBlb2YgZ2EgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICBnYSgnc2VuZCcsICdldmVudCcsICdidXR0b24nLCBnb2FsTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHNlcnZpY2VzLmZicVVzZWQgJiYgdHlwZW9mIGZicSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgIGZicSgndHJhY2snLCBnb2FsTmFtZSwgeyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGRlYnVnID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coICd5YUNvdW50ZXJJRDogJyArICh0eXBlb2Ygd2luZG93Wyd5YUNvdW50ZXInICsgc2VydmljZXMueWFDb3VudGVySURdICE9PSBcInVuZGVmaW5lZFwiKSApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyggJ2dhVXNlZDogJyArICh0eXBlb2YgZ2EgIT09IFwidW5kZWZpbmVkXCIpICk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnZmJxVXNlZDogJyArICh0eXBlb2YgZmJxICE9PSBcInVuZGVmaW5lZFwiKSApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyggJ21haWxSdUlEOiAnICsgKHR5cGVvZiBfdG1yICE9PSBcInVuZGVmaW5lZFwiKSApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gUFVCTElDID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlYWNoIDogZnVuY3Rpb24oZ29hbE5hbWUsIGV2ZW50KXtcclxuICAgICAgICAgICAgZXZlbnQgPSBldmVudCB8fCAnJztcclxuICAgICAgICAgICAgaWYoIGV2ZW50ID09PSBcIlwiKXsgZ29hbERvbmUoZ29hbE5hbWUpOyB9XHJcbiAgICAgICAgICAgIGlmKCBldmVudCA9PT0gXCJvbmxvYWRcIil7IHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHsgZ29hbERvbmUoZ29hbE5hbWUpOyB9IH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlYnVnIDogZnVuY3Rpb24oKXsgZGVidWcoKTsgfVxyXG4gICAgfVxyXG59KCkpO1xyXG5cclxuIiwiZnVuY3Rpb24gTWVkaWFFdmVudExpc3RlbmVyKHF1ZXJ5T3B0aW9uKXtcclxuICAgIHZhciBfc2VsZiA9IHRoaXM7XHJcbiAgICBfc2VsZi5yZXNvbHV0aW9uQ3VyciA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgX3NlbGYucmVzb2x1dGlvbkxhc3QgPSAwO1xyXG4gICAgLy8gZGVmYXVsdCBkZXZpY2UgYnJlYWtwb2ludHMg0LjQu9C4INC40Lcg0L7Qv9GG0LjQuSDQv9GA0Lgg0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40LhcclxuICAgIF9zZWxmLnF1ZXJpZXMgPSAodHlwZW9mIHF1ZXJ5T3B0aW9uICE9PSB1bmRlZmluZWQpID8gcXVlcnlPcHRpb24gOltcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdtb2JpbGUnLFxyXG4gICAgICAgICAgICBtaW5SZXNvbHV0aW9uOiAwLFxyXG4gICAgICAgICAgICBtYXhSZXNvbHV0aW9uOiA0MTksXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNFYWNoOiBmYWxzZSxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdsYW5kc2NhcGUnLFxyXG4gICAgICAgICAgICBtaW5SZXNvbHV0aW9uOiA0MjAsXHJcbiAgICAgICAgICAgIG1heFJlc29sdXRpb246IDEwMjMsXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNFYWNoOiBmYWxzZSxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdkZXNrdG9wJyxcclxuICAgICAgICAgICAgbWluUmVzb2x1dGlvbjogMTAyNCxcclxuICAgICAgICAgICAgbWF4UmVzb2x1dGlvbjogMTkyMCxcclxuICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc0VhY2g6IGZhbHNlLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogW11cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2VhY2gtcmVzaXplJyxcclxuICAgICAgICAgICAgbWluUmVzb2x1dGlvbjogMCxcclxuICAgICAgICAgICAgbWF4UmVzb2x1dGlvbjogMTkyMDAsXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNFYWNoOiB0cnVlLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogW11cclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIC8vINC00L7QsdCw0LLQu9C10L3QuNC1INGE0YPQvdC60YbQuNC5INC90LAg0YDQsNC30L3Ri9C1INGA0LDQt9GA0LXRiNC10L3QuNGPXHJcbiAgICBfc2VsZi5hZGRRdWVyeUFjdGlvbiA9IGZ1bmN0aW9uKHF1ZXJ5TmFtZSwgZnVuYyl7XHJcbiAgICAgICAgX3NlbGYucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgICAgICBpZiggaXRlbS5uYW1lID09PSBxdWVyeU5hbWUpe1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jYWxsYmFjay5wdXNoKGZ1bmMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vINCy0YvQv9C+0LvQvdGP0LXQvCDRgdC60YDQuNC/0YLRiyDQtNC70Y8g0L/QtdGA0LXRhdC+0LTQsCDQvdCwINC60L7QvdC60YDQtdGC0L3QvtC1INGA0LDQt9GA0YjQtdC90LXQuNC1XHJcbiAgICBfc2VsZi5kb1F1ZXJ5QWN0aW9uID0gZnVuY3Rpb24ocXVlcnlOYW1lKXtcclxuICAgICAgICBfc2VsZi5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICAgIC8vINC40YnQtdC8INC90YPQttC90L7QtSDRgNCw0LfRgNC10YjQtdC90LjQtVxyXG4gICAgICAgICAgICBpZiggaXRlbS5uYW1lID09PSBxdWVyeU5hbWUpe1xyXG4gICAgICAgICAgICAgICAgLy8g0LfQsNC/0YPRgdC60LDQtdC8INCy0YHQtSDQutC+0LvQsdGN0LrQuFxyXG4gICAgICAgICAgICAgICAgaXRlbS5jYWxsYmFjay5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0peyBpdGVtKCk7IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICAvLyDQv9GA0L7QstC10YDQutCwINCw0LrRgtC40LLQvdGL0YUg0LzQtdC00LjQsCDQt9Cw0L/RgNC+0YHQvtCyXHJcbiAgICBfc2VsZi5yZXNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8g0L7Qv9GA0LXQtNC10LvRj9C10Lwg0YLQtdC60YPRidC10LUg0YDQsNC30YDQtdGI0LXQvdC40LVcclxuICAgICAgICBfc2VsZi5yZXNvbHV0aW9uQ3VyciA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIC8vINC/0YDQvtGF0L7QtNC40Lwg0L/QviDQstGB0LXQvCDRgNCw0LfRgNC10YjQtdC90LjRj9C8XHJcbiAgICAgICAgX3NlbGYucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uKHNjcmVlbil7XHJcbiAgICAgICAgICAgIGlmKCBzY3JlZW4ubWluUmVzb2x1dGlvbiA8PSBfc2VsZi5yZXNvbHV0aW9uQ3VyciAmJiBfc2VsZi5yZXNvbHV0aW9uQ3VyciA8PSBzY3JlZW4ubWF4UmVzb2x1dGlvbiApe1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINCy0YvQv9C+0LvQvdGP0LXQvCDQv9C+0LTQstC10YjQtdC90YvQtSDRgdC60YDQuNC/0YLRiywg0LXRgdC70Lgg0L3QsCDRjdGC0L7QvCDRgNCw0LfRgNC10YjQtdC90LjQtSDQuNGFINC90YPQttC90L4g0LLRi9C/0L7Qu9C90Y/RgtGMINC/0YDQuCDQutCw0LbQtNC+0Lwg0YDQtdGB0LDQudC30LVcclxuICAgICAgICAgICAgICAgIGlmKHNjcmVlbi5pc0VhY2gpeyBfc2VsZi5kb1F1ZXJ5QWN0aW9uKHNjcmVlbi5uYW1lKTsgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vINC10YHQu9C4INGB0LzQtdC90LjQu9C+0YHRjCDQvdCwINCw0LrRgtC40LLQvdC+0LUsINGC0L4g0LLRi9C/0L7Qu9C90Y/QtdC8INC/0L7QtNCy0LXRiNC10L3Ri9C1INGB0LrRgNC40L/RgtGLXHJcbiAgICAgICAgICAgICAgICBpZighc2NyZWVuLmlzQWN0aXZlICYmICFzY3JlZW4uaXNFYWNoKXsgX3NlbGYuZG9RdWVyeUFjdGlvbihzY3JlZW4ubmFtZSk7IH1cclxuICAgICAgICAgICAgICAgIHNjcmVlbi5pc0FjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8g0LjQvdCw0YfQtSDQv9C10YDQtdC60LvRjtGH0LDQtdC8INGE0LvQsNCzLCDQtdGB0LvQuCDRgNCw0LfRgNC10YjQtdC90LjQtSDQvdC10LDQutGC0LjQstC90L5cclxuICAgICAgICAgICAgICAgIHNjcmVlbi5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8g0LfQsNC/0L7QvNC40L3QsNC10Lwg0YDQsNC30YDQtdGI0LXQvdC40LVcclxuICAgICAgICBfc2VsZi5yZXNvbHV0aW9uTGFzdCA9ICBfc2VsZi5yZXNvbHV0aW9uQ3VycjtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIC8vINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPXHJcbiAgICBfc2VsZi5pbml0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyDQt9Cw0L/Rg9GB0LrQsNC10Lwg0L/RgNC+0YXQvtC0INC/0L4g0LLRgdC10Lwg0YDQsNC30YDQtdGI0LXQvdC40Y/QvCDQtNC70Y8g0L/QtdGA0LLQvtC5INC30LDQs9GA0YPQt9C60LhcclxuICAgICAgICBfc2VsZi5yZXNpemUoKTtcclxuICAgICAgICAvLyDQuCDQstC10YjQsNC10Lwg0L7QsdGA0LDQsdC+0YLRh9C40Log0L3QsCDQstGB0LUg0L/QvtGB0LvQtdC00YPRidGO0LjQtSDRgNC10YHQsNC50LfRi1xyXG4gICAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9ICBmdW5jdGlvbiByZXNpemUoKXtcclxuICAgICAgICAgICAgX3NlbGYucmVzaXplKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgX3NlbGYuZGVidWcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coIF9zZWxmLnF1ZXJpZXMgKTtcclxuICAgIH07XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiIsIihmdW5jdGlvbiggJCApe1xyXG5cclxuICAgIHZhciBkZWZhdWx0cyA9IHtcclxuICAgICAgICAvLyDQtNC10YTQvtC70YLQvdGL0LUg0L7Qv9GG0LjQuFxyXG4gICAgICAgIG1pblJlc29sdXRpb246IDEwMDAsXHJcbiAgICAgICAgZXh0cmFXaWR0aDogNjFcclxuICAgIH07XHJcbiAgICB2YXIgc3RhdGVzID17XHJcbiAgICAgICAgaGFzRXh0cmE6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBtZXRob2RzID0ge1xyXG5cclxuICAgICAgICBpbml0IDogZnVuY3Rpb24oIG9wdGlvbnMgKSB7XHJcblxyXG4gICAgICAgICAgICBvcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIHZhciBtZW51Um9vdCA9ICQodGhpcykuZmluZCgndWwnKS5ub3QoJ3VsIHVsJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVudUl0ZW1zID0gbWVudVJvb3QuZmluZCgnbGknKS5ub3QoJ2xpIGxpJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyV2lkdGggPSBtZW51Um9vdC53aWR0aCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIG1ldGhvZHMuYWRkRXh0cmFCYXIobWVudVJvb3QsIG1lbnVJdGVtcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyV2lkdGggPSBtZW51Um9vdC53aWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kcy5oaWRlSXRlbShtZW51Um9vdCwgbWVudUl0ZW1zLCBjb250YWluZXJXaWR0aCwgb3B0aW9ucy5leHRyYVdpZHRoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb250YWluZXJXaWR0aCA9IG1lbnVSb290LndpZHRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyV2lkdGggPSBtZW51Um9vdC53aWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gb3B0aW9ucy5taW5SZXNvbHV0aW9uKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kcy5oaWRlSXRlbShtZW51Um9vdCwgbWVudUl0ZW1zLCBjb250YWluZXJXaWR0aCwgb3B0aW9ucy5leHRyYVdpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHJlc2l6ZSA6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYWRkRXh0cmFCYXI6IGZ1bmN0aW9uIChtZW51Um9vdCwgbWVudUl0ZW1zKSB7XHJcbiAgICAgICAgICAgIHZhciBleHRyYWJhckNvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IG1lbnVJdGVtcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBleHRyYWJhckNvbnRlbnQgPSBleHRyYWJhckNvbnRlbnQgKyBtZW51SXRlbXMuZXEoaSkuZ2V0KDApLm91dGVySFRNTDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbWVudVJvb3QuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgJzxsaSBjbGFzcz1cIm1lbnUtdG9wX19pdGVtIC1leHRyYUJhciAtaGFzLWRyb3AtZG93biAtZHJvcC1kb3duLWludmVyc2VcIj4nICtcclxuICAgICAgICAgICAgICAgICc8YnV0dG9uIGNsYXNzPVwibWVudS10b3BfX2l0ZW0tbmFtZVwiPi4uLjwvYnV0dG9uPicgK1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtZW51LXRvcF9fZHJvcC1kb3duXCI+JyArXHJcbiAgICAgICAgICAgICAgICAnPHVsIGNsYXNzPVwibWVudS10b3BfX2xpc3RcIj4nICtcclxuICAgICAgICAgICAgICAgIGV4dHJhYmFyQ29udGVudCArXHJcbiAgICAgICAgICAgICAgICAnPC91bD4nICtcclxuICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICc8L2xpPidcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbWVudVJvb3QuZmluZCgnLi1leHRyYUJhciAubWVudS10b3BfX2Ryb3AtZG93biAubWVudS10b3BfX2Ryb3AtZG93bicpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vINGD0LTQsNC70Y/QtdGCINC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdGD0Y4g0LLRi9C/0LDQtNCw0YjQutGDXHJcbiAgICAgICAgcmVtb3ZlRXh0cmFCYXIgOiBmdW5jdGlvbiAobWVudVJvb3QpIHtcclxuICAgICAgICAgICAgbWVudVJvb3QuZmluZCgnLi1leHRyYUJhcicpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAvLyDQv9GA0L7QstC10YDRj9C10YIg0Y3Qu9C10LzQtdC90YLRiywg0LXRgdC70Lgg0Y3Qu9C10LzQtdC90YLRgyDQvdC1INGF0LLQsNGC0LDQtdGCINC80LXRgdGC0LAsINGC0L4g0YHQutGA0YvQstCw0LXRgiDQtdCz0L5cclxuICAgICAgICBoaWRlSXRlbSA6IGZ1bmN0aW9uIChtZW51Um9vdCwgbWVudUl0ZW1zLCBjb250YWluZXJXaWR0aCwgZXh0cmFXaWR0aCkge1xyXG4gICAgICAgICAgICAvLyDQv9C+0LTQs9C+0YLQsNCy0LvQuNCy0LDQtdC8INCy0YvQv9Cw0LTQsNGI0LrRgyDQtNGD0LHQu9GR0YDQsFxyXG4gICAgICAgICAgICB2YXIgZHVibGVyID0gbWVudVJvb3QuZmluZCgnLi1leHRyYUJhcicpO1xyXG4gICAgICAgICAgICB2YXIgZHVibGVyTGlzdCA9IGR1Ymxlci5maW5kKCcubWVudS10b3BfX2l0ZW0nKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZHVibGVyTGlzdCk7XHJcbiAgICAgICAgICAgIGR1Ymxlci5yZW1vdmVDbGFzcygnLWhpZGRlbicpO1xyXG4gICAgICAgICAgICBtZW51SXRlbXMucmVtb3ZlQ2xhc3MoJy1oaWRkZW4nKTtcclxuICAgICAgICAgICAgdmFyIGRlYnVnTG9nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY29udGFpbmVyV2lkdGggJyArIGNvbnRhaW5lcldpZHRoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IGNvbnRhaW5lcldpZHRoO1xyXG4gICAgICAgICAgICB2YXIgc3VtV2lkdGggPSAwO1xyXG4gICAgICAgICAgICBzdGF0ZXMuaGFzRXh0cmEgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IG1lbnVJdGVtcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWxXaWR0aCA9IG1lbnVJdGVtcy5lcShpKS53aWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgaWYoZGVidWdMb2cpe2NvbnNvbGUubG9nKG1lbnVJdGVtcy5lcShpKS5jaGlsZHJlbignYScpLmh0bWwoKSwgZWxXaWR0aCwgc3VtV2lkdGggKyBlbFdpZHRoKTt9XHJcbiAgICAgICAgICAgICAgICAvLyDQv9GA0L7QstC10YDRj9C10Lwg0LLQu9Cw0LfQuNGCINC70Lgg0YLQtdC60YPRidC40Lkg0L/Rg9C90LrRglxyXG4gICAgICAgICAgICAgICAgaWYoc3VtV2lkdGggKyBlbFdpZHRoIDw9IHdpZHRoKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyDQtNCwOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vINC/0YDQvtCy0LXRgNGP0LXQvCDRjdGC0L4g0L/QvtGB0LvQtdC00L3QuNC5INC/0YPQvdC60YJcclxuICAgICAgICAgICAgICAgICAgICBpZihkZWJ1Z0xvZyl7Y29uc29sZS5sb2coJ9C/0YDQvtCy0LXRgNGP0LXQvCDQstC70LDQt9C40YIg0LvQuCDRgtC10LrRg9GJ0LjQuSDQv9GD0L3QutGCIC0gINC00LAnKTt9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaSA9PT0gbWVudUl0ZW1zLmxlbmd0aC0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0LTQsDog0YPQtNCw0LvRj9C10Lwg0LzQvdC+0LPQvtGC0L7Rh9C40LVcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVibGVyLnJlbW92ZUNsYXNzKCctaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGR1Ymxlckxpc3QuZXEoaSkuYWRkQ2xhc3MoJy1oaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGVidWdMb2cpe2NvbnNvbGUubG9nKCfQv9GA0L7QstC10YDRj9C10Lwg0Y3RgtC+INC/0L7RgdC70LXQtNC90LjQuSDQv9GD0L3QutGCIC0gINC00LAnKTt9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0L3QtdGCOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQv9GA0L7QstC10YDRj9C10Lwg0L7RgdGC0LDQu9C+0YHRjCDQu9C4INC80LXRgdGC0L4g0LTQu9GPINC80L3QvtCz0L7RgtC+0YfQuNGPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRlYnVnTG9nKXtjb25zb2xlLmxvZygn0L/RgNC+0LLQtdGA0Y/QtdC8INGN0YLQviDQv9C+0YHQu9C10LTQvdC40Lkg0L/Rg9C90LrRgiAtICDQvdC10YInKTt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHN1bVdpZHRoICsgZWxXaWR0aCArIGV4dHJhV2lkdGggPD0gd2lkdGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0LTQsDog0L/QtdGA0LXRhdC+0LTQuNC8INC6INGB0LvQtdC00YPRjtGJ0LXQvNGDINC/0YPQvdC60YLRg1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGVidWdMb2cpe2NvbnNvbGUubG9nKCfQv9GA0L7QstC10YDRj9C10Lwg0L7RgdGC0LDQu9C+0YHRjCDQu9C4INC80LXRgdGC0L4g0LTQu9GPINC80L3QvtCz0L7RgtC+0YfQuNGPIC0gINC00LAnKTt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdWJsZXJMaXN0LmVxKGkpLmFkZENsYXNzKCctaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQvdC10YI6INC/0L7QutCw0LfRi9Cy0LDQtdC8INC80L3QvtCz0L7RgtC+0YfQuNC1INCy0LzQtdGB0YLQviDRjdGC0L7Qs9C+INC/0YPQvdC60YLQsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW1zLmVxKGkpLmFkZENsYXNzKCctaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihkZWJ1Z0xvZyl7Y29uc29sZS5sb2coJ9C/0YDQvtCy0LXRgNGP0LXQvCDQvtGB0YLQsNC70L7RgdGMINC70Lgg0LzQtdGB0YLQviDQtNC70Y8g0LzQvdC+0LPQvtGC0L7Rh9C40Y8gLSAg0L3QtdGCJyk7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g0L3QtdGCOiDQv9C+0LrQsNC30YvQstCw0LXQvCDQvNC90L7Qs9C+0YLQvtGH0LjQtSDQstC80LXRgdGC0L4g0Y3RgtC+0LPQviDQv9GD0L3QutGC0LBcclxuICAgICAgICAgICAgICAgICAgICBpZihkZWJ1Z0xvZyl7Y29uc29sZS5sb2coJ9C/0YDQvtCy0LXRgNGP0LXQvCDQstC70LDQt9C40YIg0LvQuCDRgtC10LrRg9GJ0LjQuSDQv9GD0L3QutGCIC0gINC90LXRgicpO31cclxuICAgICAgICAgICAgICAgICAgICBtZW51SXRlbXMuZXEoaSkuYWRkQ2xhc3MoJy1oaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMuaGFzRXh0cmEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHN1bVdpZHRoID0gc3VtV2lkdGggKyBlbFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgaWYoZGVidWdMb2cpe2NvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7fVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZighc3RhdGVzLmhhc0V4dHJhKXtcclxuICAgICAgICAgICAgICAgIGR1Ymxlci5hZGRDbGFzcygnLWhpZGRlbicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICAkLmZuLm1lbnVTbWFydCA9IGZ1bmN0aW9uKG1ldGhvZCkge1xyXG5cclxuICAgICAgICBpZiAoIG1ldGhvZHNbbWV0aG9kXSApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZHNbIG1ldGhvZCBdLmFwcGx5KCB0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCggYXJndW1lbnRzLCAxICkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBtZXRob2QgPT09ICdvYmplY3QnIHx8ICEgbWV0aG9kICkge1xyXG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kcy5pbml0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkLmVycm9yKCAn0JzQtdGC0L7QtCAnICsgIG1ldGhvZCArICcg0L3QtSDRgdGD0YnQtdGB0YLQstGD0LXRgiDQsiBqUXVlcnkubWVudVNtYXJ0JyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxufSkoIGpRdWVyeSApOyIsImZ1bmN0aW9uIGluaXRNZW51TW9iaWxlKGlkLCBkYXRhKSB7XHJcblxyXG4gICAgdmFyIG1lbnVNb2JpbGUgPSBuZXcgVnVlKHtcclxuICAgICAgICBlbDogJyNtZW51LW1vYmlsZS0nICsgaWQsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBlbDogJyNtZW51LW1vYmlsZS0nICsgaWQsXHJcbiAgICAgICAgICAgIHRyZWU6IGRhdGEsXHJcbiAgICAgICAgICAgIGFjdGl2ZU5vZGU6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBkYXRhWzBdLmlkLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogZGF0YVswXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgcGFyZW50SWQ6IGRhdGFbMF0ucGFyZW50SWRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRlbXBsYXRlOlxyXG4gICAgICAgICc8dHJhbnNpdGlvbiBuYW1lPVwibWVudS1tb2JpbGUtdG9nZ2xlXCIgbW9kZT1cIm91dC1pblwiPicgK1xyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1lbnUtbW9iaWxlXCIgaWQ9XCJtZW51LW1vYmlsZS0nICsgaWQgKyAnXCIgdi1pZj1cInNob3dcIj4nICtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBtZW51LW1vYmlsZS1oZWFkZXIgYmVnaW5cclxuICAgICAgICAgICAgICAgICc8dHJhbnNpdGlvbiBuYW1lPVwibWVudS1tb2JpbGUtaGVhZGVyLXRvZ2dsZVwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibWVudS1tb2JpbGVfX2hlYWRlclwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1lbnUtbW9iaWxlX190aXRsZVwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxidXR0b24gY2xhc3M9XCJtZW51LW1vYmlsZV9fdGl0bGUtYnRuXCIgOmRhdGEtbm9kZT1cImFjdGl2ZU5vZGUuaWRcIiB2LW9uOmNsaWNrLnByZXZlbnQ9XCJhY3RpdmVQYXJlbnROb2RlXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxpIGNsYXNzPVwibWVudS1tb2JpbGVfX2ljb24tYXJyb3ctcmlnaHRcIiB2LWlmPVwiYWN0aXZlTm9kZS5pZFwiPjwvaT4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAne3sgYWN0aXZlTm9kZS5uYW1lIH19JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPC9idXR0b24+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzxidXR0b24gY2xhc3M9XCJtZW51LW1vYmlsZV9fc3dpdGNoZXItYnRuXCIgdi1vbjpjbGljay5wcmV2ZW50PVwiY2xvc2VNZW51XCI+PHNwYW4+PC9zcGFuPjwvYnV0dG9uPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICc8L3RyYW5zaXRpb24+JyArXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbWVudS1tb2JpbGVfX2xpc3QgYmVnaW5cclxuICAgICAgICAgICAgICAgICc8dWwgY2xhc3M9XCJtZW51LW1vYmlsZV9fbGlzdFwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8dGVtcGxhdGUgIHYtZm9yPVwiaXRlbSBpbiB0cmVlXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzxtZW51LW1vYmlsZS1pdGVtIHYtaWY9XCJpdGVtLnBhcmVudElkID09PSBhY3RpdmVOb2RlLmlkXCIgdi1iaW5kOml0ZW09XCJpdGVtXCIgOmtleT1cIml0ZW0uaWRcIiA+PC9tZW51LW1vYmlsZS1pdGVtPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8L3RlbXBsYXRlPicgK1xyXG4gICAgICAgICAgICAgICAgJzwvdWw+JyArXHJcblxyXG4gICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgJzwvdHJhbnNpdGlvbj4nLFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgZ2V0Tm9kZVBhcmFtOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5pZCA9IGlucHV0LmlkO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5hbWUgPSBpbnB1dC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnBhcmVudElkID0gaW5wdXQucGFyZW50SWQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbG9zZU1lbnU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vICQoIHRoaXMuZWwpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlTm9kZSA9IG1lbnVNb2JpbGUuZ2V0Tm9kZVBhcmFtKCB0aGlzLnRyZWVbMF0gKTtcclxuICAgICAgICAgICAgICAgIGFwcC5zY3JvbGwuZW5hYmxlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3cgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWN0aXZlUGFyZW50Tm9kZTogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiggdGhpcy5hY3RpdmVOb2RlLnBhcmVudElkICE9PSBudWxsICl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudElkID0gdGhpcy5hY3RpdmVOb2RlLnBhcmVudElkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBtZW51TW9iaWxlLnRyZWUubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVudU1vYmlsZS50cmVlW2ldLmlkID09PSBwYXJlbnRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudU1vYmlsZS5hY3RpdmVOb2RlID0gbWVudU1vYmlsZS5nZXROb2RlUGFyYW0oIG1lbnVNb2JpbGUudHJlZVtpXSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtZW51TW9iaWxlLmNsb3NlTWVudSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICdtZW51LW1vYmlsZS1pdGVtJzoge1xyXG4gICAgICAgICAgICAgICAgcHJvcHM6IFsnaXRlbScsICdhY3RpdmVOb2RlJ10sXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTpcclxuICAgICAgICAgICAgICAgICc8dHJhbnNpdGlvbiBuYW1lPVwibWVudS1tb2JpbGUtaXRlbS1zaG93XCIgbW9kZT1cIm91dC1pblwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8bGkgY2xhc3M9XCJtZW51LW1vYmlsZV9faXRlbVwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGEgY2xhc3M9XCJtZW51LW1vYmlsZV9faXRlbS1uYW1lXCIgdi1iaW5kOmhyZWY9XCJpdGVtLmhyZWZcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd7eyBpdGVtLm5hbWUgfX0nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINC40LrQvtC90LrQsCDRgdC+INGB0YLRgNC10LvQutC+0LksINC00LvRjyDRjdC70LXQvNC10L3RgtC+0LIg0LHQtdC3INC/0L7RgtC+0LzQutC+0LJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gdi1pZj1cIiFpdGVtLmhhc0NoaWxkXCIgY2xhc3M9XCJtZW51LW1vYmlsZV9faXRlbS1idG5cIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxpIGNsYXNzPVwibWVudS1tb2JpbGVfX2ljb24tYXJyb3ctbGVmdFwiPjwvaT4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvYT4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINC00LvRjyDRjdC70LXQvNC10L3RgtC+0LIg0YEg0L/QvtC00LrQsNGC0LXQs9C+0YDQuNGP0LzQuCDQtNC+0LHQsNCy0LvRj9C10Lwg0LrQvdC+0L/QvtGH0LrRgyDQv9C+0LrQsNC30YvQstCw0Y7RidGD0Y4g0Y3RgtC4INC/0L7QtNGA0LDQt9C00LXQu9GLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGJ1dHRvbiB2LWlmPVwiaXRlbS5oYXNDaGlsZFwiIGNsYXNzPVwibWVudS1tb2JpbGVfX2l0ZW0tYnRuIGhhc0NoaWxkXCIgIHYtb246Y2xpY2sucHJldmVudD1cInNob3dDaGlsZFwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxpIGNsYXNzPVwibWVudS1tb2JpbGVfX2ljb24tbW9yZVwiPjwvaT4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzwvYnV0dG9uPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8L2xpPicgK1xyXG4gICAgICAgICAgICAgICAgJzwvdHJhbnNpdGlvbj4nLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDaGlsZDogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVNb2JpbGUuYWN0aXZlTm9kZSA9IG1lbnVNb2JpbGUuZ2V0Tm9kZVBhcmFtKCB0aGlzLl9wcm9wcy5pdGVtICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG1lbnVNb2JpbGU7XHJcbn1cclxuXHJcblxyXG4iLCJmdW5jdGlvbiBNZW51TW9iaWxlKG9wdGlvbnMpe1xyXG5cclxuICAgIC8vINCU0LXRgNC10LLQviDQvNC10L3Rjiwg0LLQutC70Y7Rh9Cw0LXRgiDQsiDRgdC10LHRjyDRgtC+0LvRjNC60L4g0YPQt9C70YssINC70LjRgdGC0YzRjyDQuNCz0L3QvtGA0LjRgNGD0Y7RgtGB0Y9cclxuXHJcblxyXG4gICAgdmFyIHRleHQgPSB7XHJcbiAgICAgICAgcm9vdFRpdGxlOiAn0JzQtdC90Y4nXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzZWxlY3RvcnMgPSB7XHJcbiAgICAgICAgY29udGFpbmVyOiAnLmpzLW1lbnUtbW9iaWxlJyxcclxuICAgICAgICBub2RlUm9vdDogJ1tkYXRhLW1lbnUtbW9iaWxlLS1yb290XScsXHJcbiAgICAgICAgbm9kZUxpbms6ICdbZGF0YS1tZW51LW1vYmlsZS0taXRlbS1uYW1lXScsXHJcbiAgICAgICAgbm9kZTogJ2RhdGEtbWVudS1tb2JpbGUtLWhhcy1kcm9wLWRvd24nLFxyXG4gICAgICAgIGJ0blRvZ2dsZTogJ1tkYXRhLW1lbnUtbW9iaWxlLS1zd2l0Y2hlci1idG5dJ1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKCBNYXRoLnJhbmRvbSgpKjEwMDAwKTtcclxuXHJcblxyXG4gICAgLy8g0L/QtdGA0LXQvtC/0YDQtdC00LXQu9GP0LXQvCDQv9C10YDQtdC80LXQvdC90YvQtSDQtdGB0LvQuCDQvdCw0LTQviA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09L1xyXG5cclxuICAgIC8vINC/0LXRgNC10L7Qv9GA0LXQtNC10LvRj9C10Lwg0YHQstC+0LnRgdGC0LLQsCwg0LXRgdC70Lgg0Y3RgtC+INC90LXQvtCx0YXQvtC00LjQvNC+XHJcbiAgICBmdW5jdGlvbiBzZXRPcHRpb25zKGNvbnRhaW5lcil7XHJcbiAgICAgICAgLy8gdGV4dCA9ICQuZXh0ZW5kKHt9LCBzZWxlY3RvcnMsIG9wdGlvbnMudGV4dCk7XHJcbiAgICAgICAgLy8gc2VsZWN0b3JzID0gJC5leHRlbmQoe30sIHNlbGVjdG9ycywgb3B0aW9ucy5zZWxlY3RvcnMpO1xyXG4gICAgICAgIHRleHQucm9vdFRpdGxlID0gJChjb250YWluZXIpLmZpbmQoc2VsZWN0b3JzLmJ0blRvZ2dsZSkudGV4dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINGA0LDQsdC+0YLQsCDRgSDQtNC10YDQtdCy0L7QvCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS9cclxuXHJcbiAgICBmdW5jdGlvbiBidWlsZE1lbnUobm9kZVJvb3Qpe1xyXG4gICAgICAgIHZhciB0cmVlID0gW107XHJcbiAgICAgICAgdmFyIF9pZCA9IDA7XHJcbiAgICAgICAgLy8g0LfQsNC00LDRkdC8INC60L7RgNC10L3RjFxyXG4gICAgICAgIHRyZWUucHVzaCh7IGlkOiBfaWQsIG5hbWU6IHRleHQucm9vdFRpdGxlLCBlbGVtZW50TGluazogbm9kZVJvb3QsIGhhc0NoaWxkOiB0cnVlLCBwYXJlbnRJZDogbnVsbCB9KTtcclxuICAgICAgICAvLyDRgNC10LrRg9GA0YHQuNCy0L3QviDRgdGC0YDQvtC40Lwg0L7RgdGC0LDQu9GM0L3QvtC1INC00LXRgNC10LLQvlxyXG4gICAgICAgIGZ1bmN0aW9uIGJ1aWxkKHBhcmVudE5vZGUpe1xyXG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gJChwYXJlbnROb2RlLmVsZW1lbnRMaW5rKTtcclxuICAgICAgICAgICAgdmFyIGVsID0gcGFyZW50LmZpbmQoJ2xpJykubm90KCBwYXJlbnQuZmluZCgnbGkgbGknKSk7XHJcbiAgICAgICAgICAgIGVsLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX2lkKys7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3Vyck5vZGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IF9pZCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAkKHRoaXMpLmNoaWxkcmVuKHNlbGVjdG9ycy5ub2RlTGluaykudGV4dCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6ICQodGhpcykuY2hpbGRyZW4oc2VsZWN0b3JzLm5vZGVMaW5rKS5hdHRyKCdocmVmJyksXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudExpbms6ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgaGFzQ2hpbGQ6ICAkKHRoaXMpLmF0dHIoc2VsZWN0b3JzLm5vZGUpICE9IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQ6IHBhcmVudE5vZGUuaWRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0cmVlLnB1c2goY3Vyck5vZGUpO1xyXG4gICAgICAgICAgICAgICAgaWYoY3Vyck5vZGUuaGFzQ2hpbGQpeyAgYnVpbGQoY3Vyck5vZGUpIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkKCBnZXROb2RlUm9vdCh0cmVlKSApO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJlZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW5kZXJNZW51KHRyZWUpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRyZWUpO1xyXG4gICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJycgK1xyXG4gICAgICAgICAgICAnPG1lbnUtbW9iaWxlIGNsYXNzPVwibWVudS1tb2JpbGVcIiBpZD1cIm1lbnUtbW9iaWxlLScgKyBpZCArICdcIj48L21lbnUtbW9iaWxlPidcclxuICAgICAgICApO1xyXG4gICAgICAgIHZhciB2dWVNZW51TW9iaWxlID0gaW5pdE1lbnVNb2JpbGUoaWQsIHRyZWUpO1xyXG4gICAgICAgIHJldHVybiB2dWVNZW51TW9iaWxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINCy0YHQv9C+0LzQvtCz0LDRgtC10LvRjNC90YvQtSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0vXHJcblxyXG4gICAgLy8g0J/QvtC70YPRh9C10L3QuNGPINGD0LfQu9CwINC/0L4gSURcclxuICAgIGZ1bmN0aW9uIGdldE5vZGVCeUlkKGlkLCB0cmVlKXtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICAvL9C40YnQtdC8INGN0LvQtdC80LXQvdGCINGBINC30LDQtNCw0L3QvdGL0LwgaWRcclxuICAgICAgICB0cmVlLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICAgIGlmKCBpdGVtLmlkID09IGlkICl7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8g0LXRgdC70Lgg0Y3Qu9C10LzQtdC90YLQsCDRgSDRgtCw0LrQuNC8IGlkINC90LXRgiwg0YLQviDQstC+0LfQstGA0LDRidCw0LXQvCBudWxsXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQn9C+0LvRg9GH0LXQvdC40Y8g0LrQvtGA0L3Rj1xyXG4gICAgZnVuY3Rpb24gZ2V0Tm9kZVJvb3QodHJlZSl7XHJcbiAgICAgICAgcmV0dXJuIGdldE5vZGVCeUlkKDAsIHRyZWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyDQntCx0YDQsNCx0L7RgtC60LAg0YHQvtCx0YvRgtC40LkgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS9cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRIYW5kbGVyVG9nZ2xlQnRuKGNvbnRhaW5lciwgdnVlTWVudU1vYmlsZSl7XHJcbiAgICAgICAgJChjb250YWluZXIpLm9uKCdjbGljaycsIHNlbGVjdG9ycy5idG5Ub2dnbGUsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdnVlTWVudU1vYmlsZS5zaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgYXBwLnNjcm9sbC5kaXNhYmxlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaW5pdGlhbGl6ZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS9cclxuICAgICQoc2VsZWN0b3JzLmNvbnRhaW5lcikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2V0T3B0aW9ucygkKHRoaXMpKTsgIC8vINC/0LXRgNC10L7Qv9GA0LXQtNC10LvRj9C10Lwg0YHQstC+0LnRgdGC0LLQsCwg0LXRgdC70Lgg0Y3RgtC+INC90LXQvtCx0YXQvtC00LjQvNC+XHJcbiAgICAgICAgdmFyIHRyZWUgPSBidWlsZE1lbnUoJCh0aGlzKS5maW5kKHNlbGVjdG9ycy5ub2RlUm9vdCkpOyAgLy8g0YHQvtC30LTQsNGR0Lwg0LzQvtC00LXQu9GMINC80LXQvdGOXHJcbiAgICAgICAgdmFyIHZ1ZU1lbnVNb2JpbGUgPSByZW5kZXJNZW51KHRyZWUpOyAgIC8vINGA0LXQvdC10LTQtdGA0LjQvCDQvNC10L3Rjiwg0LrQvtC70LHRjdC60L7QvCDQvdCw0LLQtdGI0LjQstCw0LXQvCDQvtCx0YDQsNCx0L7RgtGH0LjQutC4XHJcbiAgICAgICAgYWRkSGFuZGxlclRvZ2dsZUJ0bih0aGlzLCB2dWVNZW51TW9iaWxlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHB1YmxpYyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0vXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4iLCIoZnVuY3Rpb24oICQgKXtcclxuXHJcbiAgICB2YXIgZGVmYXVsdHMgPSB7XHJcbiAgICAgICAgLy8g0LTQtdGE0L7Qu9GC0L3Ri9C1INC+0L/RhtC40LhcclxuICAgICAgICBhbmltYXRpb246ICcnXHJcbiAgICB9O1xyXG4gICAgdmFyIHN0YXRlcyA9e1xyXG4gICAgICAgIGhhc0V4dHJhOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgbWV0aG9kcyA9IHtcclxuXHJcbiAgICAgICAgaW5pdCA6IGZ1bmN0aW9uKCBvcHRpb25zICkge1xyXG5cclxuICAgICAgICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbW9kYWxJZCA9ICdtb2RhbC0nICsgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjk5OTk5OSk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBBSkFYX0xPQURFUiAgPSAnPGltZyBjbGFzcz1cImJ0bl9fbG9hZGVyXCIgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbG9hZGVyLnN2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiPic7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRsaW5rID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRsaW5rLmRhdGEoJ2NsaWNrZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGlua0NvbnRlbnQgPSAkbGluay5odG1sKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGxpbmsuZGF0YSgnY2xpY2tlZCcsIHRydWUpLmh0bWwoQUpBWF9MT0FERVIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICRsaW5rLmF0dHIoJ2hyZWYnKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsICcgKyAkbGluay5hdHRyKCdkYXRhLWNsYXNzJykgKyAnXCIgaWQ9XCInICsgbW9kYWxJZCArICdcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsX193cmFwcGVyXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWxfX2JnXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8YnV0dG9uIGNsYXNzPVwibW9kYWxfX2J0bi1jbG9zZVwiPkNsb3NlPC9idXR0b24+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWxfX2NvbnRhaW5lclwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbF9fc2Nyb2xsXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbF9fbG9hZGVyXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PidcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwLnNjcm9sbC5kaXNhYmxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2RzLmFkZEV2ZW50TGlzdGVuZXIoJCgnIycgKyBtb2RhbElkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICB9KS5hbHdheXMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkbGluay5yZW1vdmVEYXRhKCdjbGlja2VkJykuaHRtbChsaW5rQ29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbF9fbG9hZGVyJykuY3NzKHsnb3BhY2l0eSc6IDAsICdwb2ludGVyRXZlbnRzJzogJ25vbmUnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQWpheCBmYWlsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lciA6IGZ1bmN0aW9uIChtb2RhbCkge1xyXG4gICAgICAgICAgICAkKG1vZGFsKVxyXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgJy5tb2RhbF9fYmcnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSB0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcubW9kYWxfX2J0bi1jbG9zZScpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbignY2xpY2snLCAnLm1vZGFsX19idG4tY2xvc2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgYXBwLnNjcm9sbC5lbmFibGUoKTtcclxuICAgICAgICAgICAgICAgICQoJy5tb2RhbCcpLmFkZENsYXNzKCdjbG9zaW5nJyk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubW9kYWwnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykuY3NzKCdwb3NpdGlvbicsICdzdGF0aWMnKTsgXHJcbiAgICAgICAgICAgICAgICB9LCAxMzUwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g0L/RgNC+0LLQtdGA0Y/QtdGCINGN0LvQtdC80LXQvdGC0YssINC10YHQu9C4INGN0LvQtdC80LXQvdGC0YMg0L3QtSDRhdCy0LDRgtCw0LXRgiDQvNC10YHRgtCwLCDRgtC+INGB0LrRgNGL0LLQsNC10YIg0LXQs9C+XHJcbiAgICAgICAgaGlkZUl0ZW0gOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgICQuZm4ubW9kYWxBamF4ID0gZnVuY3Rpb24obWV0aG9kKSB7XHJcblxyXG4gICAgICAgIGlmICggbWV0aG9kc1ttZXRob2RdICkge1xyXG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kc1sgbWV0aG9kIF0uYXBwbHkoIHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICggdHlwZW9mIG1ldGhvZCA9PT0gJ29iamVjdCcgfHwgISBtZXRob2QgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXRob2RzLmluaXQuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQuZXJyb3IoICfQnNC10YLQvtC0ICcgKyAgbWV0aG9kICsgJyDQvdC1INGB0YPRidC10YHRgtCy0YPQtdGCINCyIGpRdWVyeS5tb2RhbEFqYXgnICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG59KSggalF1ZXJ5ICk7IiwidmFyIFRhYmxlcyA9IChmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vIHByaXZhdGUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgd3JhcFRhYmxlcyA9IGZ1bmN0aW9uICh0YWJsZVNlbGVjdG9yKXtcclxuICAgICAgICAkKHRhYmxlU2VsZWN0b3IpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY3VyclRhYmxlID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgLy8gdmFyIGNsYXNzTmFtZSA9IFwidGFibGUtcmVzcG9uc2l2ZVwiO1xyXG4gICAgICAgICAgICAvLyBpZihjdXJyVGFibGUuYXR0cignZGF0YS12aWV3LXR5cGUnKSA9PSAnaG9yaXpvbnRhbCcpeyBjbGFzc05hbWUgKz0gJyAtaG9yaXpvbnRhbCc7IH1cclxuICAgICAgICAgICAgY3VyclRhYmxlLndyYXAoXCI8ZGl2IGNsYXNzPSd0YWJsZS1yZXNwb25zaXZlJz48ZGl2IGNsYXNzPSd0YWJsZS1yZXNwb25zaXZlX19zY3JvbGwnPjwvZGl2PjwvZGl2PlwiKTtcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBwdWJsaWMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZGRNb2JpbGVWaWV3OiBmdW5jdGlvbih0YWJsZVNlbGVjdG9yKXtcclxuICAgICAgICAgICAgd3JhcFRhYmxlcyh0YWJsZVNlbGVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCkpOyIsIi8vIGpzLXNwb2lsZXItYXJlYSAtINGB0LrRgNGL0LLQsNC10YIg0L7QsdC70LDRgdGC0Ywg0L/QvtC0INGB0L/QvtC50LvQtdGAXHJcbi8vXHJcbi8vINC40YHRhdC+0LTQvdGL0Lkg0LrQvtC0XHJcbi8vIDxkaXYgY2xhc3M9XCJqcy1zcG9pbGVyLWFyZWEgaGlkZGVuLW1kXCJcclxuLy8gZGF0YS1tb2JpbGUtb25seT1cInRydWVcIlxyXG4vLyBkYXRhLXRleHQtb3BlbmVkPVwi0KHQutGA0YvRgtGMXCJcclxuLy8gZGF0YS10ZXh0LWNsb3NlZD1cItCf0L7QutCw0LfQsNGC0Ywg0L/QvtC70L3QvtGB0YLRjNGOXCI+XHJcbi8vICA8IS0tINGC0YPRgiDQutC+0L3RgtC10L3RgiDQutC+0YLQvtGA0YvQuSDQvdGD0LbQvdC+INGB0LrRgNGL0LLQsNGC0YwgLS0+XHJcbi8vIDwvZGl2PlxyXG5cclxuLy8gINGB0LXQs9C90LXRgNC40YDQvtCy0LDQvdGL0Lkg0LrQvtC0XHJcbi8vICA8ZGl2IGNsYXNzPVwic3BvaWxlclwiPlxyXG4vLyAgICAgIDxkaXYgIGNsYXNzPVwic3BvaWxlciBqcy1zcG9pbGVyLWFyZWFcIj48IS0tINGC0YPRgiDQutC+0L3RgtC10L3RgiDQutC+0YLQvtGA0YvQuSDQvdGD0LbQvdC+INGB0LrRgNGL0LLQsNGC0YwgLS0+PC9kaXY+XHJcbi8vICAgICAgPGJ1dHRvbiBjbGFzcz1cInNwb2lsZXJfX2J0blwiID48c3Bhbj5CdG48L3NwYW4+PC9idXR0b24+XHJcbi8vICA8L2Rpdj5cclxuXHJcbiQoJy5qcy1zcG9pbGVyLWFyZWEnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgc2VsZiA9ICQodGhpcyk7XHJcblxyXG4gICAgLy8g0LrRjdGI0LjRgNGD0LXQvCBkYXRhLdCw0YLRgNC40LHRg9GC0YssINC/0L7QtNGB0YLQsNCy0LvRj9GPINC30L3QsNGH0LXQvdC40Y8g0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4sINC10YHQu9C4INCw0YLRgNC40LHRg9GC0Ysg0L3QtSDQt9Cw0LTQsNC90YtcclxuICAgIHZhciBidG5UZXh0T3BlbmVkID0gc2VsZi5hdHRyKCdkYXRhLXRleHQtb3BlbmVkJykgPyBzZWxmLmF0dHIoJ2RhdGEtdGV4dC1vcGVuZWQnKSA6ICfQodC60YDRi9GC0YwnLFxyXG4gICAgICAgIGJ0blRleHRDbG9zZWQgPSBzZWxmLmF0dHIoJ2RhdGEtdGV4dC1jbG9zZWQnKSA/IHNlbGYuYXR0cignZGF0YS10ZXh0LWNsb3NlZCcpIDogJ9Ch0LzQvtGC0YDQtdGC0Ywg0L/QvtC70L3QvtGB0YLRjNGOJyxcclxuICAgICAgICBidG5DbGFzcyA9IHNlbGYuYXR0cignZGF0YS1idG4tY2xhc3MnKSA/IHNlbGYuYXR0cignZGF0YS1idG4tY2xhc3MnKSA6ICcnIDtcclxuXHJcbiAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0L3QtdC+0LHRhdC+0LTQuNC80YvQuSBodG1sXHJcbiAgICBzZWxmLmFkZENsYXNzKCdzcG9pbGVyX19jb250ZW50Jyk7XHJcbiAgICBzZWxmLndyYXAoJzxkaXYgY2xhc3M9XCJzcG9pbGVyXCI+PC9kaXY+Jyk7XHJcbiAgICBzZWxmLnBhcmVudCgpLmFwcGVuZCgnPGJ1dHRvbiBjbGFzcz1cInNwb2lsZXJfX2J0biBidG4gJyArIGJ0bkNsYXNzICsgJ1wiPjxzcGFuPicgKyBidG5UZXh0Q2xvc2VkICsgJzwvc3Bhbj48L2J1dHRvbj4nKTtcclxuXHJcbiAgICAvLyDQutGN0YjQuNGA0YPQtdC8INGN0LvQtdC80LXQvdGC0YtcclxuICAgIHZhciBjb250YWluZXIgPSBzZWxmLnBhcmVudCgpLFxyXG4gICAgICAgIGNvbnRlbnQgPSBzZWxmLFxyXG4gICAgICAgIGJ0biA9IGNvbnRhaW5lci5maW5kKCcuc3BvaWxlcl9fYnRuJyk7XHJcblxyXG5cclxuICAgIC8vINC00L7QsdCw0LLQu9GP0LXQvCDQutC70LDRgdGBIGhpZGRlbi0qL3Zpc2libGUtKiDQtNC70Y8g0LrQvdC+0L/QutC4INC10YHQu9C4INC90LDQtNC+XHJcbiAgICAvLyDQutC70LDRgdGBINC00L7QsdCw0LLQu9GP0LXRgtGB0Y8sINC10YHQu9C4INGDINC60L7QvdGC0LXQvdGC0LAg0LXRgdGC0Ywg0LrQu9Cw0YHRgSBoaWRkZW4tKlxyXG4gICAgdmFyIGNsYXNzTGlzdCA9IGNvbnRlbnQuYXR0cignY2xhc3MnKS5zcGxpdCgvXFxzKy8pLFxyXG4gICAgICAgIGlzUmVzcG9uc2UgPSBmYWxzZTtcclxuICAgICQuZWFjaChjbGFzc0xpc3QsIGZ1bmN0aW9uKGluZGV4LCBpdGVtKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0uc3Vic3RyaW5nKDAsNykgPT09ICdoaWRkZW4tJykge1xyXG4gICAgICAgICAgICBidG4uYWRkQ2xhc3MoJ2hpZGRlbiB2aXNpYmxlLScgKyBpdGVtLnN1YnN0cmluZyg3LDkpKTtcclxuICAgICAgICAgICAgaXNSZXNwb25zZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZighaXNSZXNwb25zZSl7XHJcbiAgICAgICAgY29udGVudC5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0LLQtdGI0LDQtdC8INGB0L7QsdGL0YLQuNGPXHJcbiAgICBidG4ub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBjb250ZW50LnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgYnRuLnRvZ2dsZUNsYXNzKCdpcy1vcGVuZWQnKTtcclxuICAgICAgICBpZihidG4uaGFzQ2xhc3MoJ2lzLW9wZW5lZCcpKXtcclxuICAgICAgICAgICAgYnRuLmZpbmQoJ3NwYW4nKS50ZXh0KGJ0blRleHRPcGVuZWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ0bi5maW5kKCdzcGFuJykudGV4dChidG5UZXh0Q2xvc2VkKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuJCgnLmpzLXNwb2lsZXItaXRlbXMnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgc2VsZiA9ICQodGhpcyk7XHJcblxyXG4gICAgLy8g0LrRjdGI0LjRgNGD0LXQvCBkYXRhLdCw0YLRgNC40LHRg9GC0YssINC/0L7QtNGB0YLQsNCy0LvRj9GPINC30L3QsNGH0LXQvdC40Y8g0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4sINC10YHQu9C4INCw0YLRgNC40LHRg9GC0Ysg0L3QtSDQt9Cw0LTQsNC90YtcclxuICAgIHZhciBidG5UZXh0T3BlbmVkID0gc2VsZi5hdHRyKCdkYXRhLXRleHQtb3BlbmVkJykgPyBzZWxmLmF0dHIoJ2RhdGEtdGV4dC1vcGVuZWQnKSA6ICfQodC60YDRi9GC0YwnLFxyXG4gICAgICAgIGJ0blRleHRDbG9zZWQgPSBzZWxmLmF0dHIoJ2RhdGEtdGV4dC1jbG9zZWQnKSA/IHNlbGYuYXR0cignZGF0YS10ZXh0LWNsb3NlZCcpIDogJ9Ch0LzQvtGC0YDQtdGC0Ywg0L/QvtC70L3QvtGB0YLRjNGOJyxcclxuICAgICAgICBidG5DbGFzcyA9IHNlbGYuYXR0cignZGF0YS1idG4tY2xhc3MnKSA/IHNlbGYuYXR0cignZGF0YS1idG4tY2xhc3MnKSA6ICcnIDtcclxuXHJcbiAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0L3QtdC+0LHRhdC+0LTQuNC80YvQuSBodG1sXHJcbiAgICBzZWxmLmFkZENsYXNzKCdzcG9pbGVyX19jb250ZW50Jyk7XHJcbiAgICBzZWxmLndyYXAoJzxkaXYgY2xhc3M9XCJzcG9pbGVyXCI+PC9kaXY+Jyk7XHJcbiAgICBzZWxmLnBhcmVudCgpLmFwcGVuZCgnPGJ1dHRvbiBjbGFzcz1cInNwb2lsZXJfX2J0biBidG4gJyArIGJ0bkNsYXNzICsgJ1wiPjxzcGFuPicgKyBidG5UZXh0Q2xvc2VkICsgJzwvc3Bhbj48L2J1dHRvbj4nKTtcclxuXHJcblxyXG59KTsiLG51bGwsInZhciBtZW51TW9iaWxlID0gbmV3IE1lbnVNb2JpbGUoe30pO1xyXG4kKCcuanMtbWVudS1zbWFydCcpLm1lbnVTbWFydCgpOyIsIihmdW5jdGlvbiBzbGlkZXJIZWFkZXIoKSB7XHJcbiAgICB2YXIgc2xpZGVySGVhZGVyID0ge1xyXG4gICAgICAgIGNhcm91c2VsIDogJChcIi5qcy1zbGlkZXItaGVhZGVyIC5vd2wtY2Fyb3VzZWxcIiksXHJcbiAgICAgICAgbmV4dEJ0biA6ICQoXCIuanMtc2xpZGVyLWhlYWRlciAuanMtbmF2LW5leHRcIiksXHJcbiAgICAgICAgcHJldkJ0biA6ICQoXCIuanMtc2xpZGVyLWhlYWRlciAuanMtbmF2LXByZXZcIiksXHJcbiAgICAgICAgY291bnRlciA6ICQoXCIuanMtc2xpZGVyLWhlYWRlciAuanMtbmF2LWNvdW50ZXJcIiksXHJcbiAgICAgICAgZGlyZWN0aW9uIDogJ2ZvcndhcmQnICAgLy8gaW52ZXJzZVxyXG4gICAgfTtcclxuICAgIHNsaWRlckhlYWRlci5jYXJvdXNlbC5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA2MDAwLFxyXG4gICAgICAgIGxvb3A6dHJ1ZSxcclxuICAgICAgICBtYXJnaW46MCxcclxuICAgICAgICBuYXY6ZmFsc2UsXHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgYW5pbWF0ZU91dDogJ3NsaWRlT3V0RG93bicsXHJcbiAgICAgICAgYW5pbWF0ZUluOiAnZmxpcEluWCcsXHJcbiAgICAgICAgb25Jbml0aWFsaXplZDogcmVuZGVyQ291bnRlcixcclxuICAgICAgICBvblRyYW5zbGF0ZTogcmVuZGVyQ291bnRlclxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyQ291bnRlcihldmVudCkge1xyXG4gICAgICAgIC8vIG5vcm1hbGl6ZSBpbmRleFxyXG4gICAgICAgIGlmKCBzbGlkZXJIZWFkZXIuZGlyZWN0aW9uID09PSAnaW52ZXJzZScgJiYgZXZlbnQuaXRlbS5pbmRleC0xID09PSAwKXtcclxuICAgICAgICAgICAgc2xpZGVySGVhZGVyLmNvdW50ZXIuaHRtbCggZXZlbnQuaXRlbS5jb3VudCArICcvJyArIGV2ZW50Lml0ZW0uY291bnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNsaWRlckhlYWRlci5jb3VudGVyLmh0bWwoZXZlbnQuaXRlbS5pbmRleC0xICsgJy8nICsgZXZlbnQuaXRlbS5jb3VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNsaWRlckhlYWRlci5uZXh0QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHNsaWRlckhlYWRlci5kaXJlY3Rpb24gPSAnZm9yd2FyZCc7XHJcbiAgICAgICAgc2xpZGVySGVhZGVyLmNhcm91c2VsLnRyaWdnZXIoJ25leHQub3dsLmNhcm91c2VsJyk7XHJcbiAgICB9KTtcclxuICAgIHNsaWRlckhlYWRlci5wcmV2QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHNsaWRlckhlYWRlci5kaXJlY3Rpb24gPSAnaW52ZXJzZSc7XHJcbiAgICAgICAgc2xpZGVySGVhZGVyLmNhcm91c2VsLnRyaWdnZXIoJ3ByZXYub3dsLmNhcm91c2VsJyk7XHJcbiAgICB9KTtcclxufSgpKTsiLCIoZnVuY3Rpb24gYWR2YW50YWdlcygpIHtcclxuICAgIHZhciBhZHZhbnRhZ2VzID0ge1xyXG4gICAgICAgIGNhcm91c2VsIDogJChcIi5qcy1hZHZhbnRhZ2VzIC5vd2wtY2Fyb3VzZWxcIiksXHJcbiAgICAgICAgbmV4dEJ0biA6ICQoXCIuanMtYWR2YW50YWdlcyAuanMtbmF2LW5leHRcIiksXHJcbiAgICAgICAgcHJldkJ0biA6ICQoXCIuanMtYWR2YW50YWdlcyAuanMtbmF2LXByZXZcIilcclxuICAgIH07XHJcbiAgICAkKGFkdmFudGFnZXMuY2Fyb3VzZWwpLmltYWdlc0xvYWRlZCgpXHJcbiAgICAgICAgLmFsd2F5cyggZnVuY3Rpb24oIGluc3RhbmNlICkge1xyXG4gICAgICAgICAgICBhZHZhbnRhZ2VzLmNhcm91c2VsLm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogNCxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmUgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgMDogeyBpdGVtczogMX0sXHJcbiAgICAgICAgICAgICAgICAgICAgNDgwOiB7IGl0ZW1zOiAyfSxcclxuICAgICAgICAgICAgICAgICAgICA3Njg6IHsgaXRlbXM6IDN9LFxyXG4gICAgICAgICAgICAgICAgICAgIDEwMjQ6IHsgaXRlbXM6IDR9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhZHZhbnRhZ2VzLm5leHRCdG4uY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBhZHZhbnRhZ2VzLmNhcm91c2VsLnRyaWdnZXIoJ25leHQub3dsLmNhcm91c2VsJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhZHZhbnRhZ2VzLnByZXZCdG4uY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBhZHZhbnRhZ2VzLmNhcm91c2VsLnRyaWdnZXIoJ3ByZXYub3dsLmNhcm91c2VsJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZhaWwoIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ29uZSBvciBtb3JlIGltYWdlcyBpcyBicm9rZW4gaW4gJyArIGFkdmFudGFnZXMuY2Fyb3VzZWwuc2VsZWN0b3IpO1xyXG4gICAgICAgIH0pO1xyXG5cclxufSgpKTsiLCIoZnVuY3Rpb24gaGl0c1dpZGdldCgpIHtcclxuICAgIHZhciBoaXRzV2lkZ2V0ID0ge1xyXG4gICAgICAgIGNhcm91c2VsIDogJChcIi5qcy1oaXRzLXdpZGdldCAub3dsLWNhcm91c2VsXCIpLFxyXG4gICAgICAgIG5leHRCdG4gOiAkKFwiLmpzLWhpdHMtd2lkZ2V0IC5qcy1uYXYtbmV4dFwiKSxcclxuICAgICAgICBwcmV2QnRuIDogJChcIi5qcy1oaXRzLXdpZGdldCAuanMtbmF2LXByZXZcIilcclxuICAgIH07XHJcbiAgICAkKGhpdHNXaWRnZXQuY2Fyb3VzZWwpLmltYWdlc0xvYWRlZCgpXHJcbiAgICAgICAgLmFsd2F5cyggZnVuY3Rpb24oIGluc3RhbmNlICkge1xyXG4gICAgICAgICAgICBoaXRzV2lkZ2V0LmNhcm91c2VsLm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgICAgIGNlbnRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIyLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIDA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6MVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgOTgwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaGl0c1dpZGdldC5uZXh0QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaGl0c1dpZGdldC5jYXJvdXNlbC50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaGl0c1dpZGdldC5wcmV2QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaGl0c1dpZGdldC5jYXJvdXNlbC50cmlnZ2VyKCdwcmV2Lm93bC5jYXJvdXNlbCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5mYWlsKCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdvbmUgb3IgbW9yZSBpbWFnZXMgaXMgYnJva2VuIGluICcgKyBoaXRzV2lkZ2V0LmNhcm91c2VsLnNlbGVjdG9yKTtcclxuICAgICAgICB9KTtcclxuXHJcbn0oKSk7IiwiKGZ1bmN0aW9uIGFydGljbGVzV2lkZ2V0KCkge1xyXG4gICAgdmFyIGFydGljbGVzV2lkZ2V0ID0ge1xyXG4gICAgICAgIGNhcm91c2VsIDogJChcIi5qcy1hcnRpY2xlcy13aWRnZXQgLm93bC1jYXJvdXNlbFwiKSxcclxuICAgICAgICBuZXh0QnRuIDogJChcIi5qcy1hcnRpY2xlcy13aWRnZXQgLmpzLW5hdi1uZXh0XCIpLFxyXG4gICAgICAgIHByZXZCdG4gOiAkKFwiLmpzLWFydGljbGVzLXdpZGdldCAuanMtbmF2LXByZXZcIilcclxuICAgIH07XHJcbiAgICAkKGFydGljbGVzV2lkZ2V0LmNhcm91c2VsKS5pbWFnZXNMb2FkZWQoKVxyXG4gICAgICAgIC5hbHdheXMoIGZ1bmN0aW9uKCBpbnN0YW5jZSApIHtcclxuICAgICAgICAgICAgYXJ0aWNsZXNXaWRnZXQuY2Fyb3VzZWwub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICAgICAgY2VudGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9XaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjIsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgMDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczoxXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICA5ODA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhcnRpY2xlc1dpZGdldC5uZXh0QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZXNXaWRnZXQuY2Fyb3VzZWwudHJpZ2dlcignbmV4dC5vd2wuY2Fyb3VzZWwnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFydGljbGVzV2lkZ2V0LnByZXZCdG4uY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlc1dpZGdldC5jYXJvdXNlbC50cmlnZ2VyKCdwcmV2Lm93bC5jYXJvdXNlbCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5mYWlsKCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdvbmUgb3IgbW9yZSBpbWFnZXMgaXMgYnJva2VuIGluICcgKyBhcnRpY2xlc1dpZGdldC5jYXJvdXNlbC5zZWxlY3Rvcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG59KCkpOyIsIihmdW5jdGlvbiBuZXdzV2lkZ2V0KCkge1xyXG4gICAgdmFyIG5ld3NXaWRnZXQgPSB7XHJcbiAgICAgICAgY2Fyb3VzZWwgOiAkKFwiLmpzLW5ld3Mtd2lkZ2V0IC5uZXdzLXdpZGdldF9fY2Fyb3VzZWwub3dsLWNhcm91c2VsXCIpLFxyXG4gICAgICAgIG5leHRCdG4gOiAkKFwiLmpzLW5ld3Mtd2lkZ2V0IC5qcy1uYXYtbmV4dFwiKSxcclxuICAgICAgICBwcmV2QnRuIDogJChcIi5qcy1uZXdzLXdpZGdldCAuanMtbmF2LXByZXZcIilcclxuICAgIH07XHJcbiAgICAkKG5ld3NXaWRnZXQuY2Fyb3VzZWwpLmltYWdlc0xvYWRlZCgpXHJcbiAgICAgICAgLmFsd2F5cyggZnVuY3Rpb24oIGluc3RhbmNlICkge1xyXG4gICAgICAgICAgICBuZXdzV2lkZ2V0LmNhcm91c2VsLm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgICAgIGNlbnRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIyLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIDA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6MVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgOTgwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbmV3c1dpZGdldC5uZXh0QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgbmV3c1dpZGdldC5jYXJvdXNlbC50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbmV3c1dpZGdldC5wcmV2QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgbmV3c1dpZGdldC5jYXJvdXNlbC50cmlnZ2VyKCdwcmV2Lm93bC5jYXJvdXNlbCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5mYWlsKCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdvbmUgb3IgbW9yZSBpbWFnZXMgaXMgYnJva2VuIGluICcgKyBuZXdzV2lkZ2V0LmNhcm91c2VsKTtcclxuICAgICAgICB9KTtcclxuXHJcbn0oKSk7XHJcblxyXG4oZnVuY3Rpb24gYmFubmVyc1dpZGdldCgpIHtcclxuICAgIHZhciBiYW5uZXJzV2lkZ2V0ID0ge1xyXG4gICAgICAgIGNhcm91c2VsIDogJChcIi5qcy1uZXdzLXdpZGdldCAuYmFubmVyc19fY2Fyb3VzZWwub3dsLWNhcm91c2VsXCIpLFxyXG4gICAgfTtcclxuICAgICQoYmFubmVyc1dpZGdldC5jYXJvdXNlbCkuaW1hZ2VzTG9hZGVkKClcclxuICAgICAgICAuYWx3YXlzKCBmdW5jdGlvbiggaW5zdGFuY2UgKSB7XHJcbiAgICAgICAgICAgIGJhbm5lcnNXaWRnZXQuY2Fyb3VzZWwub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICAgICAgY2VudGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9XaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjIsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgMDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczoxXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICA5ODA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZhaWwoIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ29uZSBvciBtb3JlIGltYWdlcyBpcyBicm9rZW4gaW4gJyArIGJhbm5lcnNXaWRnZXQuY2Fyb3VzZWwpO1xyXG4gICAgICAgIH0pO1xyXG59KCkpOyIsIihmdW5jdGlvbiBnYWxlcnlGdWxsd2lkdGhDZW50ZXJlZCgpIHtcclxuICAgIHZhciBnYWxlcnlGdWxsd2lkdGhDZW50ZXJlZCA9IHtcclxuICAgICAgICBjYXJvdXNlbCA6ICQoXCIuanMtZ2FsZXJ5LWZ1bGx3aWR0aC1jZW50ZXJlZCAub3dsLWNhcm91c2VsXCIpLFxyXG4gICAgICAgIG5leHRCdG4gOiAkKFwiLmpzLWdhbGVyeS1mdWxsd2lkdGgtY2VudGVyZWQgLmpzLW5hdi1uZXh0XCIpLFxyXG4gICAgICAgIHByZXZCdG4gOiAkKFwiLmpzLWdhbGVyeS1mdWxsd2lkdGgtY2VudGVyZWQgLmpzLW5hdi1wcmV2XCIpXHJcbiAgICB9O1xyXG4gICAgJChnYWxlcnlGdWxsd2lkdGhDZW50ZXJlZC5jYXJvdXNlbCkuaW1hZ2VzTG9hZGVkKClcclxuICAgICAgICAuYWx3YXlzKCBmdW5jdGlvbiggaW5zdGFuY2UgKSB7XHJcbiAgICAgICAgICAgIGdhbGVyeUZ1bGx3aWR0aENlbnRlcmVkLmNhcm91c2VsLm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgICAgIGNlbnRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGdhbGVyeUZ1bGx3aWR0aENlbnRlcmVkLm5leHRCdG4uY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBnYWxlcnlGdWxsd2lkdGhDZW50ZXJlZC5jYXJvdXNlbC50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZ2FsZXJ5RnVsbHdpZHRoQ2VudGVyZWQucHJldkJ0bi5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGdhbGVyeUZ1bGx3aWR0aENlbnRlcmVkLmNhcm91c2VsLnRyaWdnZXIoJ3ByZXYub3dsLmNhcm91c2VsJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZhaWwoIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ29uZSBvciBtb3JlIGltYWdlcyBpcyBicm9rZW4gaW4gJyArIGdhbGVyeUZ1bGx3aWR0aENlbnRlcmVkLmNhcm91c2VsLnNlbGVjdG9yKTtcclxuICAgICAgICB9KTtcclxuXHJcbn0oKSk7IiwiKGZ1bmN0aW9uIGNlcnRpZmljYXRlcygpIHtcclxuICAgIHZhciBjZXJ0aWZpY2F0ZXMgPSB7XHJcbiAgICAgICAgY2Fyb3VzZWwgOiAkKFwiLmpzLWNlcnRpZmljYXRlcyAub3dsLWNhcm91c2VsXCIpLFxyXG4gICAgICAgIG5leHRCdG4gOiAkKFwiLmpzLWNlcnRpZmljYXRlcyAuanMtbmF2LW5leHRcIiksXHJcbiAgICAgICAgcHJldkJ0biA6ICQoXCIuanMtY2VydGlmaWNhdGVzIC5qcy1uYXYtcHJldlwiKVxyXG4gICAgfTtcclxuICAgICQoY2VydGlmaWNhdGVzLmNhcm91c2VsKS5pbWFnZXNMb2FkZWQoKVxyXG4gICAgICAgIC5hbHdheXMoIGZ1bmN0aW9uKCBpbnN0YW5jZSApIHtcclxuICAgICAgICAgICAgY2VydGlmaWNhdGVzLmNhcm91c2VsLm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvV2lkdGg6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjAsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgMDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczoxXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICA5ODA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjZXJ0aWZpY2F0ZXMubmV4dEJ0bi5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNlcnRpZmljYXRlcy5jYXJvdXNlbC50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2VydGlmaWNhdGVzLnByZXZCdG4uY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjZXJ0aWZpY2F0ZXMuY2Fyb3VzZWwudHJpZ2dlcigncHJldi5vd2wuY2Fyb3VzZWwnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmFpbCggZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignb25lIG9yIG1vcmUgaW1hZ2VzIGlzIGJyb2tlbiBpbiAnICsgY2VydGlmaWNhdGVzLmNhcm91c2VsLnNlbGVjdG9yKTtcclxuICAgICAgICB9KTtcclxuXHJcbn0oKSk7XHJcbihmdW5jdGlvbiBwYXJ0bmVycygpIHtcclxuICAgIHZhciBwYXJ0bmVycyA9IHtcclxuICAgICAgICBjYXJvdXNlbCA6ICQoXCIuanMtcGFydG5lcnMgLm93bC1jYXJvdXNlbFwiKSxcclxuICAgICAgICBuZXh0QnRuIDogJChcIi5qcy1wYXJ0bmVycyAuanMtbmF2LW5leHRcIiksXHJcbiAgICAgICAgcHJldkJ0biA6ICQoXCIuanMtcGFydG5lcnMgLmpzLW5hdi1wcmV2XCIpXHJcbiAgICB9O1xyXG4gICAgJChwYXJ0bmVycy5jYXJvdXNlbCkuaW1hZ2VzTG9hZGVkKClcclxuICAgICAgICAuYWx3YXlzKCBmdW5jdGlvbiggaW5zdGFuY2UgKSB7XHJcbiAgICAgICAgICAgIHBhcnRuZXJzLmNhcm91c2VsLm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvV2lkdGg6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjUsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgMDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczoxXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICA5ODA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBwYXJ0bmVycy5uZXh0QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcGFydG5lcnMuY2Fyb3VzZWwudHJpZ2dlcignbmV4dC5vd2wuY2Fyb3VzZWwnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHBhcnRuZXJzLnByZXZCdG4uY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0bmVycy5jYXJvdXNlbC50cmlnZ2VyKCdwcmV2Lm93bC5jYXJvdXNlbCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5mYWlsKCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdvbmUgb3IgbW9yZSBpbWFnZXMgaXMgYnJva2VuIGluICcgKyBwYXJ0bmVycy5jYXJvdXNlbCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG59KCkpOyIsIihmdW5jdGlvbiB0ZXN0aW1vbmlhbHNXaWRnZXQoKSB7XHJcbiAgICB2YXIgdGVzdGltb25pYWxzV2lkZ2V0ID0ge1xyXG4gICAgICAgIGNhcm91c2VsIDogJChcIi5qcy10ZXN0aW1vbmlhbHMtd2lkZ2V0IC5ieHNsaWRlclwiKSxcclxuICAgICAgICBuZXh0QnRuIDogJChcIi5qcy10ZXN0aW1vbmlhbHMtd2lkZ2V0IC5qcy1uYXYtbmV4dFwiKSxcclxuICAgICAgICBwcmV2QnRuIDogJChcIi5qcy10ZXN0aW1vbmlhbHMtd2lkZ2V0IC5qcy1uYXYtcHJldlwiKVxyXG4gICAgfTtcclxuICAgIC8vINGB0L7RhdGA0LDQvdGP0LXQvCDRgdC70LDQudC00LXRgCDQsiB0ZXN0aW1vbmlhbHNXaWRnZXQuY2Fyb3VzZWxcclxuICAgIHRlc3RpbW9uaWFsc1dpZGdldC5jYXJvdXNlbC5ieFNsaWRlcigpO1xyXG5cclxuICAgIHRlc3RpbW9uaWFsc1dpZGdldC5uZXh0QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRlc3RpbW9uaWFsc1dpZGdldC5jYXJvdXNlbC5nb1RvTmV4dFNsaWRlKCk7XHJcbiAgICB9KTtcclxuICAgIHRlc3RpbW9uaWFsc1dpZGdldC5wcmV2QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRlc3RpbW9uaWFsc1dpZGdldC5jYXJvdXNlbC5nb1RvUHJldlNsaWRlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtZWRpYUV2ZW50TGlzdGVuZXIuYWRkUXVlcnlBY3Rpb24oJ21vYmlsZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGVzdGltb25pYWxzV2lkZ2V0LmNhcm91c2VsLnJlbG9hZFNsaWRlcih7XHJcbiAgICAgICAgICAgIG1vZGU6ICdob3Jpem9udGFsJyxcclxuICAgICAgICAgICAgaW5maW5pdGVMb29wOiB0cnVlLFxyXG4gICAgICAgICAgICBlYXNpbmc6IFwiZWFzZS1pblwiLFxyXG4gICAgICAgICAgICBwYWdlcjogdHJ1ZSxcclxuICAgICAgICAgICAgY29udHJvbHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBtaW5TbGlkZXM6IDEsXHJcbiAgICAgICAgICAgIG1heFNsaWRlczogMSxcclxuICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtZWRpYUV2ZW50TGlzdGVuZXIuYWRkUXVlcnlBY3Rpb24oJ2Rlc2t0b3AnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRlc3RpbW9uaWFsc1dpZGdldC5jYXJvdXNlbC5yZWxvYWRTbGlkZXIoe1xyXG4gICAgICAgICAgICBtb2RlOiAndmVydGljYWwnLFxyXG4gICAgICAgICAgICBpbmZpbml0ZUxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIGVhc2luZzogXCJlYXNlLWluXCIsXHJcbiAgICAgICAgICAgIHBhZ2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgY29udHJvbHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBtaW5TbGlkZXM6IDIsXHJcbiAgICAgICAgICAgIG1heFNsaWRlczogMixcclxuICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSgpKTtcclxuIiwiY29uc29sZS5sb2coJ21haW4nKTsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4vLyBtZWRpYUV2ZW50TGlzdGVuZXIg0LjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXQvCDQv9C+0YHQu9C1INCy0YHQtdGFINC00L7QsdCw0LLQu9C10L3QuNC5LFxyXG4vLyDRgdC60YDQuNC/0YLRiyDQv9C+0LTQstC10YjQtdC90YvQtSDQv9C+0LfQttC1INC90LUg0L7RgtGA0LDQsdC+0YLQsNGO0YIg0L/RgNC4INC/0LXRgNCy0L7QuSDQt9Cw0LPRgNGD0LfQutC1XHJcbm1lZGlhRXZlbnRMaXN0ZW5lci5pbml0KCk7XHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovIl19
