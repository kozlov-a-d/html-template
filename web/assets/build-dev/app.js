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
        scroll : {},
        goal : {}
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS5taW4uanMiLCJpbWFnZXNsb2FkZWQucGtnZC5qcyIsImpxdWVyeS5ieHNsaWRlci5qcyIsIm93bC5jYXJvdXNlbC5qcyIsInZ1ZS5taW4uanMiLCJjb3JlLWNvbXBvbmVudHMvc2Nyb2xsLmNvbXBvbmVudC5qcyIsImNvcmUuanMiLCJjb3JlLWNvbXBvbmVudHMvZ29hbC5jb21wb25lbnQuanMiLCJtZWRpYS1ldmVudC1saXN0ZW5lci5qcyIsImpxdWVyeS5tZW51LXNtYXJ0LmpzIiwibWVudS1tb2JpbGUudnVlLmpzIiwibWVudS1tb2JpbGUuanMiLCJ0YWJsZXMuanMiLCJzcG9pbGVyLmpzIiwiX2V4dGVuZHMuanMiLCIuLi8uLi90ZW1wbGF0ZS1ibG9jay9iYXNlLTEvX2hlYWRlci9oZWFkZXIuanMiLCIuLi8uLi90ZW1wbGF0ZS1ibG9jay9iYXNlLTEvaG9tZXBhZ2Uvc2xpZGVyL3NsaWRlci5qcyIsIi4uLy4uL3RlbXBsYXRlLWJsb2NrL2Jhc2UtMS9ob21lcGFnZS9hZHZhbnRhZ2VzL2FkdmFudGFnZXMuanMiLCIuLi8uLi90ZW1wbGF0ZS1ibG9jay9iYXNlLTEvaG9tZXBhZ2UvaGl0cy13aWRnZXQvaGl0cy13aWRnZXQuanMiLCIuLi8uLi90ZW1wbGF0ZS1ibG9jay9iYXNlLTEvaG9tZXBhZ2UvYXJ0aWNsZXMtd2lkZ2V0L2FydGljbGVzLXdpZGdldC5qcyIsIi4uLy4uL3RlbXBsYXRlLWJsb2NrL2Jhc2UtMS9ob21lcGFnZS9uZXdzLXdpZGdldC1hbmQtYmFubmVycy9uZXdzLXdpZGdldC1hbmQtYmFubmVycy5qcyIsIi4uLy4uL3RlbXBsYXRlLWJsb2NrL2Jhc2UtMS9ob21lcGFnZS9nYWxlcnktZnVsbHdpZHRoL2dhbGVyeS1mdWxsd2lkdGguanMiLCIuLi8uLi90ZW1wbGF0ZS1ibG9jay9iYXNlLTEvaG9tZXBhZ2UvY2VydGlmaWNhdGVzLWFuZC1wYXJ0bmVycy9jZXJ0aWZpY2F0ZXMtYW5kLXBhcnRuZXJzLmpzIiwiLi4vLi4vdGVtcGxhdGUtYmxvY2svYmFzZS0xL2hvbWVwYWdlL3Rlc3RpbW9uaWFscy13aWRnZXQvdGVzdGltb25pYWxzLXdpZGdldC5qcyIsIm1haW4uanMiLCJtZWRpYS1ldmVudC1saXN0ZW5lci1pbml0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL2tEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pzR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxBR2pKQTtBSGtKQSxBR2pKQTtBSGtKQSxBR2pKQTtBSGtKQSxBR2pKQTtBRkZBLEFFR0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBREpBLEFDS0E7QURKQSxBQ0tBO0FESkEsQUNLQTtBRmhHQSxBRWlHQTtBRmhHQSxBRWlHQTtBRmhHQSxBRWlHQTtBRmhHQSxBRWlHQTtBRmhHQSxBRWlHQTtBRmhHQSxBRWlHQTtBRmhHQSxBR1RBO0FIVUEsQUdUQTtBSFVBLEFHVEE7QUhVQSxBR1RBO0FIVUEsQUdUQTtBSFVBLEFHVEE7QUhVQSxBR1RBO0FIVUEsQUdUQTtBSFVBLEFHVEE7QUhVQSxBR1RBO0FIVUEsQUdUQTtBSFVBLEFHVEE7QUhVQSxBR1RBO0FIVUEsQUdUQTtBSFVBLEFHVEE7QUhVQSxBR1RBO0FIVUEsQUdUQTtBSFVBLEFHVEE7QUhVQSxBR1RBO0FIVUEsQUdUQTtBSFVBLEFHVEE7QUhVQSxBR1RBO0FIVUEsQUdUQTtBSFVBLEFHVEE7QUhVQSxBR1RBO0FIVUEsQUdUQTtBSFVBLEFHVEE7QUhVQSxBR1RBO0FIVUEsQUdUQTtBSFVBLEFHVEE7QUhVQSxBR1RBO0FIVUEsQUdUQTtBSFVBLEFHVEE7QUhVQSxBR1RBO0FIVUEsQUdUQTtBSFVBLEFHVEE7QUhVQSxBR1RBO0FIVUEsQUdUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VDN0JBO0VBQ0E7RUFDQTtBRDZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VFbkNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FGekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFR3JIQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUh5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFSXZMQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUorR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFS3JRQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUw2TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFTW5WQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBSXBJQSxFSnFJQTtBS3JJQSxFTHNJQTtBTitNQSxBV3BWQTtBWHFWQSxBV3BWQTtBWHFWQSxBV3BWQTtBWHFWQSxBV3BWQTtBWHFWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFTzdkQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBUHlhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RVF2aEJBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBUnVZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VTN3FCQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBVDJsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohIGpRdWVyeSB2MS4xMi40IHwgKGMpIGpRdWVyeSBGb3VuZGF0aW9uIHwganF1ZXJ5Lm9yZy9saWNlbnNlICovXG4hZnVuY3Rpb24oYSxiKXtcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YS5kb2N1bWVudD9iKGEsITApOmZ1bmN0aW9uKGEpe2lmKCFhLmRvY3VtZW50KXRocm93IG5ldyBFcnJvcihcImpRdWVyeSByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7cmV0dXJuIGIoYSl9OmIoYSl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnRoaXMsZnVuY3Rpb24oYSxiKXt2YXIgYz1bXSxkPWEuZG9jdW1lbnQsZT1jLnNsaWNlLGY9Yy5jb25jYXQsZz1jLnB1c2gsaD1jLmluZGV4T2YsaT17fSxqPWkudG9TdHJpbmcsaz1pLmhhc093blByb3BlcnR5LGw9e30sbT1cIjEuMTIuNFwiLG49ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IG4uZm4uaW5pdChhLGIpfSxvPS9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZyxwPS9eLW1zLS8scT0vLShbXFxkYS16XSkvZ2kscj1mdW5jdGlvbihhLGIpe3JldHVybiBiLnRvVXBwZXJDYXNlKCl9O24uZm49bi5wcm90b3R5cGU9e2pxdWVyeTptLGNvbnN0cnVjdG9yOm4sc2VsZWN0b3I6XCJcIixsZW5ndGg6MCx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIGUuY2FsbCh0aGlzKX0sZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hPzA+YT90aGlzW2ErdGhpcy5sZW5ndGhdOnRoaXNbYV06ZS5jYWxsKHRoaXMpfSxwdXNoU3RhY2s6ZnVuY3Rpb24oYSl7dmFyIGI9bi5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksYSk7cmV0dXJuIGIucHJldk9iamVjdD10aGlzLGIuY29udGV4dD10aGlzLmNvbnRleHQsYn0sZWFjaDpmdW5jdGlvbihhKXtyZXR1cm4gbi5lYWNoKHRoaXMsYSl9LG1hcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobi5tYXAodGhpcyxmdW5jdGlvbihiLGMpe3JldHVybiBhLmNhbGwoYixjLGIpfSkpfSxzbGljZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhlLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LGZpcnN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoMCl9LGxhc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgtMSl9LGVxOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMubGVuZ3RoLGM9K2ErKDA+YT9iOjApO3JldHVybiB0aGlzLnB1c2hTdGFjayhjPj0wJiZiPmM/W3RoaXNbY11dOltdKX0sZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJldk9iamVjdHx8dGhpcy5jb25zdHJ1Y3RvcigpfSxwdXNoOmcsc29ydDpjLnNvcnQsc3BsaWNlOmMuc3BsaWNlfSxuLmV4dGVuZD1uLmZuLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBhLGIsYyxkLGUsZixnPWFyZ3VtZW50c1swXXx8e30saD0xLGk9YXJndW1lbnRzLmxlbmd0aCxqPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIGcmJihqPWcsZz1hcmd1bWVudHNbaF18fHt9LGgrKyksXCJvYmplY3RcIj09dHlwZW9mIGd8fG4uaXNGdW5jdGlvbihnKXx8KGc9e30pLGg9PT1pJiYoZz10aGlzLGgtLSk7aT5oO2grKylpZihudWxsIT0oZT1hcmd1bWVudHNbaF0pKWZvcihkIGluIGUpYT1nW2RdLGM9ZVtkXSxnIT09YyYmKGomJmMmJihuLmlzUGxhaW5PYmplY3QoYyl8fChiPW4uaXNBcnJheShjKSkpPyhiPyhiPSExLGY9YSYmbi5pc0FycmF5KGEpP2E6W10pOmY9YSYmbi5pc1BsYWluT2JqZWN0KGEpP2E6e30sZ1tkXT1uLmV4dGVuZChqLGYsYykpOnZvaWQgMCE9PWMmJihnW2RdPWMpKTtyZXR1cm4gZ30sbi5leHRlbmQoe2V4cGFuZG86XCJqUXVlcnlcIisobStNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKC9cXEQvZyxcIlwiKSxpc1JlYWR5OiEwLGVycm9yOmZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihhKX0sbm9vcDpmdW5jdGlvbigpe30saXNGdW5jdGlvbjpmdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT1uLnR5cGUoYSl9LGlzQXJyYXk6QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24oYSl7cmV0dXJuXCJhcnJheVwiPT09bi50eXBlKGEpfSxpc1dpbmRvdzpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YSYmYT09YS53aW5kb3d9LGlzTnVtZXJpYzpmdW5jdGlvbihhKXt2YXIgYj1hJiZhLnRvU3RyaW5nKCk7cmV0dXJuIW4uaXNBcnJheShhKSYmYi1wYXJzZUZsb2F0KGIpKzE+PTB9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24oYSl7dmFyIGI7Zm9yKGIgaW4gYSlyZXR1cm4hMTtyZXR1cm4hMH0saXNQbGFpbk9iamVjdDpmdW5jdGlvbihhKXt2YXIgYjtpZighYXx8XCJvYmplY3RcIiE9PW4udHlwZShhKXx8YS5ub2RlVHlwZXx8bi5pc1dpbmRvdyhhKSlyZXR1cm4hMTt0cnl7aWYoYS5jb25zdHJ1Y3RvciYmIWsuY2FsbChhLFwiY29uc3RydWN0b3JcIikmJiFrLmNhbGwoYS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsXCJpc1Byb3RvdHlwZU9mXCIpKXJldHVybiExfWNhdGNoKGMpe3JldHVybiExfWlmKCFsLm93bkZpcnN0KWZvcihiIGluIGEpcmV0dXJuIGsuY2FsbChhLGIpO2ZvcihiIGluIGEpO3JldHVybiB2b2lkIDA9PT1ifHxrLmNhbGwoYSxiKX0sdHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9hK1wiXCI6XCJvYmplY3RcIj09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGE/aVtqLmNhbGwoYSldfHxcIm9iamVjdFwiOnR5cGVvZiBhfSxnbG9iYWxFdmFsOmZ1bmN0aW9uKGIpe2ImJm4udHJpbShiKSYmKGEuZXhlY1NjcmlwdHx8ZnVuY3Rpb24oYil7YS5ldmFsLmNhbGwoYSxiKX0pKGIpfSxjYW1lbENhc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZShwLFwibXMtXCIpLnJlcGxhY2UocSxyKX0sbm9kZU5hbWU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yi50b0xvd2VyQ2FzZSgpfSxlYWNoOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0wO2lmKHMoYSkpe2ZvcihjPWEubGVuZ3RoO2M+ZDtkKyspaWYoYi5jYWxsKGFbZF0sZCxhW2RdKT09PSExKWJyZWFrfWVsc2UgZm9yKGQgaW4gYSlpZihiLmNhbGwoYVtkXSxkLGFbZF0pPT09ITEpYnJlYWs7cmV0dXJuIGF9LHRyaW06ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjooYStcIlwiKS5yZXBsYWNlKG8sXCJcIil9LG1ha2VBcnJheTpmdW5jdGlvbihhLGIpe3ZhciBjPWJ8fFtdO3JldHVybiBudWxsIT1hJiYocyhPYmplY3QoYSkpP24ubWVyZ2UoYyxcInN0cmluZ1wiPT10eXBlb2YgYT9bYV06YSk6Zy5jYWxsKGMsYSkpLGN9LGluQXJyYXk6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO2lmKGIpe2lmKGgpcmV0dXJuIGguY2FsbChiLGEsYyk7Zm9yKGQ9Yi5sZW5ndGgsYz1jPzA+Yz9NYXRoLm1heCgwLGQrYyk6YzowO2Q+YztjKyspaWYoYyBpbiBiJiZiW2NdPT09YSlyZXR1cm4gY31yZXR1cm4tMX0sbWVyZ2U6ZnVuY3Rpb24oYSxiKXt2YXIgYz0rYi5sZW5ndGgsZD0wLGU9YS5sZW5ndGg7d2hpbGUoYz5kKWFbZSsrXT1iW2QrK107aWYoYyE9PWMpd2hpbGUodm9pZCAwIT09YltkXSlhW2UrK109YltkKytdO3JldHVybiBhLmxlbmd0aD1lLGF9LGdyZXA6ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZCxlPVtdLGY9MCxnPWEubGVuZ3RoLGg9IWM7Zz5mO2YrKylkPSFiKGFbZl0sZiksZCE9PWgmJmUucHVzaChhW2ZdKTtyZXR1cm4gZX0sbWFwOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGc9MCxoPVtdO2lmKHMoYSkpZm9yKGQ9YS5sZW5ndGg7ZD5nO2crKyllPWIoYVtnXSxnLGMpLG51bGwhPWUmJmgucHVzaChlKTtlbHNlIGZvcihnIGluIGEpZT1iKGFbZ10sZyxjKSxudWxsIT1lJiZoLnB1c2goZSk7cmV0dXJuIGYuYXBwbHkoW10saCl9LGd1aWQ6MSxwcm94eTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZjtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYiYmKGY9YVtiXSxiPWEsYT1mKSxuLmlzRnVuY3Rpb24oYSk/KGM9ZS5jYWxsKGFyZ3VtZW50cywyKSxkPWZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYnx8dGhpcyxjLmNvbmNhdChlLmNhbGwoYXJndW1lbnRzKSkpfSxkLmd1aWQ9YS5ndWlkPWEuZ3VpZHx8bi5ndWlkKyssZCk6dm9pZCAwfSxub3c6ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGV9LHN1cHBvcnQ6bH0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmKG4uZm5bU3ltYm9sLml0ZXJhdG9yXT1jW1N5bWJvbC5pdGVyYXRvcl0pLG4uZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3IgU3ltYm9sXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7aVtcIltvYmplY3QgXCIrYitcIl1cIl09Yi50b0xvd2VyQ2FzZSgpfSk7ZnVuY3Rpb24gcyhhKXt2YXIgYj0hIWEmJlwibGVuZ3RoXCJpbiBhJiZhLmxlbmd0aCxjPW4udHlwZShhKTtyZXR1cm5cImZ1bmN0aW9uXCI9PT1jfHxuLmlzV2luZG93KGEpPyExOlwiYXJyYXlcIj09PWN8fDA9PT1ifHxcIm51bWJlclwiPT10eXBlb2YgYiYmYj4wJiZiLTEgaW4gYX12YXIgdD1mdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpLGosayxsLG0sbixvLHAscSxyLHMsdCx1PVwic2l6emxlXCIrMSpuZXcgRGF0ZSx2PWEuZG9jdW1lbnQsdz0wLHg9MCx5PWdhKCksej1nYSgpLEE9Z2EoKSxCPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9PT1iJiYobD0hMCksMH0sQz0xPDwzMSxEPXt9Lmhhc093blByb3BlcnR5LEU9W10sRj1FLnBvcCxHPUUucHVzaCxIPUUucHVzaCxJPUUuc2xpY2UsSj1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7ZD5jO2MrKylpZihhW2NdPT09YilyZXR1cm4gYztyZXR1cm4tMX0sSz1cImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsTD1cIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsTT1cIig/OlxcXFxcXFxcLnxbXFxcXHctXXxbXlxcXFx4MDAtXFxcXHhhMF0pK1wiLE49XCJcXFxcW1wiK0wrXCIqKFwiK00rXCIpKD86XCIrTCtcIiooWypeJHwhfl0/PSlcIitMK1wiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIrTStcIikpfClcIitMK1wiKlxcXFxdXCIsTz1cIjooXCIrTStcIikoPzpcXFxcKCgoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXwoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIrTitcIikqKXwuKilcXFxcKXwpXCIsUD1uZXcgUmVnRXhwKEwrXCIrXCIsXCJnXCIpLFE9bmV3IFJlZ0V4cChcIl5cIitMK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitMK1wiKyRcIixcImdcIiksUj1uZXcgUmVnRXhwKFwiXlwiK0wrXCIqLFwiK0wrXCIqXCIpLFM9bmV3IFJlZ0V4cChcIl5cIitMK1wiKihbPit+XXxcIitMK1wiKVwiK0wrXCIqXCIpLFQ9bmV3IFJlZ0V4cChcIj1cIitMK1wiKihbXlxcXFxdJ1xcXCJdKj8pXCIrTCtcIipcXFxcXVwiLFwiZ1wiKSxVPW5ldyBSZWdFeHAoTyksVj1uZXcgUmVnRXhwKFwiXlwiK00rXCIkXCIpLFc9e0lEOm5ldyBSZWdFeHAoXCJeIyhcIitNK1wiKVwiKSxDTEFTUzpuZXcgUmVnRXhwKFwiXlxcXFwuKFwiK00rXCIpXCIpLFRBRzpuZXcgUmVnRXhwKFwiXihcIitNK1wifFsqXSlcIiksQVRUUjpuZXcgUmVnRXhwKFwiXlwiK04pLFBTRVVETzpuZXcgUmVnRXhwKFwiXlwiK08pLENISUxEOm5ldyBSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiK0wrXCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIitMK1wiKig/OihbKy1dfClcIitMK1wiKihcXFxcZCspfCkpXCIrTCtcIipcXFxcKXwpXCIsXCJpXCIpLGJvb2w6bmV3IFJlZ0V4cChcIl4oPzpcIitLK1wiKSRcIixcImlcIiksbmVlZHNDb250ZXh0Om5ldyBSZWdFeHAoXCJeXCIrTCtcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIrTCtcIiooKD86LVxcXFxkKT9cXFxcZCopXCIrTCtcIipcXFxcKXwpKD89W14tXXwkKVwiLFwiaVwiKX0sWD0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFk9L15oXFxkJC9pLFo9L15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LywkPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLF89L1srfl0vLGFhPS8nfFxcXFwvZyxiYT1uZXcgUmVnRXhwKFwiXFxcXFxcXFwoW1xcXFxkYS1mXXsxLDZ9XCIrTCtcIj98KFwiK0wrXCIpfC4pXCIsXCJpZ1wiKSxjYT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9XCIweFwiK2ItNjU1MzY7cmV0dXJuIGQhPT1kfHxjP2I6MD5kP1N0cmluZy5mcm9tQ2hhckNvZGUoZCs2NTUzNik6U3RyaW5nLmZyb21DaGFyQ29kZShkPj4xMHw1NTI5NiwxMDIzJmR8NTYzMjApfSxkYT1mdW5jdGlvbigpe20oKX07dHJ5e0guYXBwbHkoRT1JLmNhbGwodi5jaGlsZE5vZGVzKSx2LmNoaWxkTm9kZXMpLEVbdi5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGV9Y2F0Y2goZWEpe0g9e2FwcGx5OkUubGVuZ3RoP2Z1bmN0aW9uKGEsYil7Ry5hcHBseShhLEkuY2FsbChiKSl9OmZ1bmN0aW9uKGEsYil7dmFyIGM9YS5sZW5ndGgsZD0wO3doaWxlKGFbYysrXT1iW2QrK10pO2EubGVuZ3RoPWMtMX19fWZ1bmN0aW9uIGZhKGEsYixkLGUpe3ZhciBmLGgsaixrLGwsbyxyLHMsdz1iJiZiLm93bmVyRG9jdW1lbnQseD1iP2Iubm9kZVR5cGU6OTtpZihkPWR8fFtdLFwic3RyaW5nXCIhPXR5cGVvZiBhfHwhYXx8MSE9PXgmJjkhPT14JiYxMSE9PXgpcmV0dXJuIGQ7aWYoIWUmJigoYj9iLm93bmVyRG9jdW1lbnR8fGI6dikhPT1uJiZtKGIpLGI9Ynx8bixwKSl7aWYoMTEhPT14JiYobz0kLmV4ZWMoYSkpKWlmKGY9b1sxXSl7aWYoOT09PXgpe2lmKCEoaj1iLmdldEVsZW1lbnRCeUlkKGYpKSlyZXR1cm4gZDtpZihqLmlkPT09ZilyZXR1cm4gZC5wdXNoKGopLGR9ZWxzZSBpZih3JiYoaj13LmdldEVsZW1lbnRCeUlkKGYpKSYmdChiLGopJiZqLmlkPT09ZilyZXR1cm4gZC5wdXNoKGopLGR9ZWxzZXtpZihvWzJdKXJldHVybiBILmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKSksZDtpZigoZj1vWzNdKSYmYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpcmV0dXJuIEguYXBwbHkoZCxiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZikpLGR9aWYoYy5xc2EmJiFBW2ErXCIgXCJdJiYoIXF8fCFxLnRlc3QoYSkpKXtpZigxIT09eCl3PWIscz1hO2Vsc2UgaWYoXCJvYmplY3RcIiE9PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl7KGs9Yi5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk/az1rLnJlcGxhY2UoYWEsXCJcXFxcJCZcIik6Yi5zZXRBdHRyaWJ1dGUoXCJpZFwiLGs9dSkscj1nKGEpLGg9ci5sZW5ndGgsbD1WLnRlc3Qoayk/XCIjXCIrazpcIltpZD0nXCIraytcIiddXCI7d2hpbGUoaC0tKXJbaF09bCtcIiBcIitxYShyW2hdKTtzPXIuam9pbihcIixcIiksdz1fLnRlc3QoYSkmJm9hKGIucGFyZW50Tm9kZSl8fGJ9aWYocyl0cnl7cmV0dXJuIEguYXBwbHkoZCx3LnF1ZXJ5U2VsZWN0b3JBbGwocykpLGR9Y2F0Y2goeSl7fWZpbmFsbHl7az09PXUmJmIucmVtb3ZlQXR0cmlidXRlKFwiaWRcIil9fX1yZXR1cm4gaShhLnJlcGxhY2UoUSxcIiQxXCIpLGIsZCxlKX1mdW5jdGlvbiBnYSgpe3ZhciBhPVtdO2Z1bmN0aW9uIGIoYyxlKXtyZXR1cm4gYS5wdXNoKGMrXCIgXCIpPmQuY2FjaGVMZW5ndGgmJmRlbGV0ZSBiW2Euc2hpZnQoKV0sYltjK1wiIFwiXT1lfXJldHVybiBifWZ1bmN0aW9uIGhhKGEpe3JldHVybiBhW3VdPSEwLGF9ZnVuY3Rpb24gaWEoYSl7dmFyIGI9bi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3RyeXtyZXR1cm4hIWEoYil9Y2F0Y2goYyl7cmV0dXJuITF9ZmluYWxseXtiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKSxiPW51bGx9fWZ1bmN0aW9uIGphKGEsYil7dmFyIGM9YS5zcGxpdChcInxcIiksZT1jLmxlbmd0aDt3aGlsZShlLS0pZC5hdHRySGFuZGxlW2NbZV1dPWJ9ZnVuY3Rpb24ga2EoYSxiKXt2YXIgYz1iJiZhLGQ9YyYmMT09PWEubm9kZVR5cGUmJjE9PT1iLm5vZGVUeXBlJiYofmIuc291cmNlSW5kZXh8fEMpLSh+YS5zb3VyY2VJbmRleHx8Qyk7aWYoZClyZXR1cm4gZDtpZihjKXdoaWxlKGM9Yy5uZXh0U2libGluZylpZihjPT09YilyZXR1cm4tMTtyZXR1cm4gYT8xOi0xfWZ1bmN0aW9uIGxhKGEpe3JldHVybiBmdW5jdGlvbihiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YyYmYi50eXBlPT09YX19ZnVuY3Rpb24gbWEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4oXCJpbnB1dFwiPT09Y3x8XCJidXR0b25cIj09PWMpJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBuYShhKXtyZXR1cm4gaGEoZnVuY3Rpb24oYil7cmV0dXJuIGI9K2IsaGEoZnVuY3Rpb24oYyxkKXt2YXIgZSxmPWEoW10sYy5sZW5ndGgsYiksZz1mLmxlbmd0aDt3aGlsZShnLS0pY1tlPWZbZ11dJiYoY1tlXT0hKGRbZV09Y1tlXSkpfSl9KX1mdW5jdGlvbiBvYShhKXtyZXR1cm4gYSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUmJmF9Yz1mYS5zdXBwb3J0PXt9LGY9ZmEuaXNYTUw9ZnVuY3Rpb24oYSl7dmFyIGI9YSYmKGEub3duZXJEb2N1bWVudHx8YSkuZG9jdW1lbnRFbGVtZW50O3JldHVybiBiP1wiSFRNTFwiIT09Yi5ub2RlTmFtZTohMX0sbT1mYS5zZXREb2N1bWVudD1mdW5jdGlvbihhKXt2YXIgYixlLGc9YT9hLm93bmVyRG9jdW1lbnR8fGE6djtyZXR1cm4gZyE9PW4mJjk9PT1nLm5vZGVUeXBlJiZnLmRvY3VtZW50RWxlbWVudD8obj1nLG89bi5kb2N1bWVudEVsZW1lbnQscD0hZihuKSwoZT1uLmRlZmF1bHRWaWV3KSYmZS50b3AhPT1lJiYoZS5hZGRFdmVudExpc3RlbmVyP2UuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLGRhLCExKTplLmF0dGFjaEV2ZW50JiZlLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIixkYSkpLGMuYXR0cmlidXRlcz1pYShmdW5jdGlvbihhKXtyZXR1cm4gYS5jbGFzc05hbWU9XCJpXCIsIWEuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpfSksYy5nZXRFbGVtZW50c0J5VGFnTmFtZT1pYShmdW5jdGlvbihhKXtyZXR1cm4gYS5hcHBlbmRDaGlsZChuLmNyZWF0ZUNvbW1lbnQoXCJcIikpLCFhLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGh9KSxjLmdldEVsZW1lbnRzQnlDbGFzc05hbWU9Wi50ZXN0KG4uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSksYy5nZXRCeUlkPWlhKGZ1bmN0aW9uKGEpe3JldHVybiBvLmFwcGVuZENoaWxkKGEpLmlkPXUsIW4uZ2V0RWxlbWVudHNCeU5hbWV8fCFuLmdldEVsZW1lbnRzQnlOYW1lKHUpLmxlbmd0aH0pLGMuZ2V0QnlJZD8oZC5maW5kLklEPWZ1bmN0aW9uKGEsYil7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudEJ5SWQmJnApe3ZhciBjPWIuZ2V0RWxlbWVudEJ5SWQoYSk7cmV0dXJuIGM/W2NdOltdfX0sZC5maWx0ZXIuSUQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKGJhLGNhKTtyZXR1cm4gZnVuY3Rpb24oYSl7cmV0dXJuIGEuZ2V0QXR0cmlidXRlKFwiaWRcIik9PT1ifX0pOihkZWxldGUgZC5maW5kLklELGQuZmlsdGVyLklEPWZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShiYSxjYSk7cmV0dXJuIGZ1bmN0aW9uKGEpe3ZhciBjPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEF0dHJpYnV0ZU5vZGUmJmEuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO3JldHVybiBjJiZjLnZhbHVlPT09Yn19KSxkLmZpbmQuVEFHPWMuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZnVuY3Rpb24oYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50c0J5VGFnTmFtZT9iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpOmMucXNhP2IucXVlcnlTZWxlY3RvckFsbChhKTp2b2lkIDB9OmZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPTAsZj1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpO2lmKFwiKlwiPT09YSl7d2hpbGUoYz1mW2UrK10pMT09PWMubm9kZVR5cGUmJmQucHVzaChjKTtyZXR1cm4gZH1yZXR1cm4gZn0sZC5maW5kLkNMQVNTPWMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZnVuY3Rpb24oYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZwP2IuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShhKTp2b2lkIDB9LHI9W10scT1bXSwoYy5xc2E9Wi50ZXN0KG4ucXVlcnlTZWxlY3RvckFsbCkpJiYoaWEoZnVuY3Rpb24oYSl7by5hcHBlbmRDaGlsZChhKS5pbm5lckhUTUw9XCI8YSBpZD0nXCIrdStcIic+PC9hPjxzZWxlY3QgaWQ9J1wiK3UrXCItXFxyXFxcXCcgbXNhbGxvd2NhcHR1cmU9Jyc+PG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIixhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbXNhbGxvd2NhcHR1cmVePScnXVwiKS5sZW5ndGgmJnEucHVzaChcIlsqXiRdPVwiK0wrXCIqKD86Jyd8XFxcIlxcXCIpXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RofHxxLnB1c2goXCJcXFxcW1wiK0wrXCIqKD86dmFsdWV8XCIrSytcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkfj1cIit1K1wiLV1cIikubGVuZ3RofHxxLnB1c2goXCJ+PVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGh8fHEucHVzaChcIjpjaGVja2VkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcImEjXCIrdStcIisqXCIpLmxlbmd0aHx8cS5wdXNoKFwiLiMuK1srfl1cIil9KSxpYShmdW5jdGlvbihhKXt2YXIgYj1uLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtiLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImhpZGRlblwiKSxhLmFwcGVuZENoaWxkKGIpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIkRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZF1cIikubGVuZ3RoJiZxLnB1c2goXCJuYW1lXCIrTCtcIipbKl4kfCF+XT89XCIpLGEucXVlcnlTZWxlY3RvckFsbChcIjplbmFibGVkXCIpLmxlbmd0aHx8cS5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpLHEucHVzaChcIiwuKjpcIil9KSksKGMubWF0Y2hlc1NlbGVjdG9yPVoudGVzdChzPW8ubWF0Y2hlc3x8by53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fG8ubW96TWF0Y2hlc1NlbGVjdG9yfHxvLm9NYXRjaGVzU2VsZWN0b3J8fG8ubXNNYXRjaGVzU2VsZWN0b3IpKSYmaWEoZnVuY3Rpb24oYSl7Yy5kaXNjb25uZWN0ZWRNYXRjaD1zLmNhbGwoYSxcImRpdlwiKSxzLmNhbGwoYSxcIltzIT0nJ106eFwiKSxyLnB1c2goXCIhPVwiLE8pfSkscT1xLmxlbmd0aCYmbmV3IFJlZ0V4cChxLmpvaW4oXCJ8XCIpKSxyPXIubGVuZ3RoJiZuZXcgUmVnRXhwKHIuam9pbihcInxcIikpLGI9Wi50ZXN0KG8uY29tcGFyZURvY3VtZW50UG9zaXRpb24pLHQ9Ynx8Wi50ZXN0KG8uY29udGFpbnMpP2Z1bmN0aW9uKGEsYil7dmFyIGM9OT09PWEubm9kZVR5cGU/YS5kb2N1bWVudEVsZW1lbnQ6YSxkPWImJmIucGFyZW50Tm9kZTtyZXR1cm4gYT09PWR8fCEoIWR8fDEhPT1kLm5vZGVUeXBlfHwhKGMuY29udGFpbnM/Yy5jb250YWlucyhkKTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiYxNiZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGQpKSl9OmZ1bmN0aW9uKGEsYil7aWYoYil3aGlsZShiPWIucGFyZW50Tm9kZSlpZihiPT09YSlyZXR1cm4hMDtyZXR1cm4hMX0sQj1iP2Z1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGw9ITAsMDt2YXIgZD0hYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbi0hYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtyZXR1cm4gZD9kOihkPShhLm93bmVyRG9jdW1lbnR8fGEpPT09KGIub3duZXJEb2N1bWVudHx8Yik/YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihiKToxLDEmZHx8IWMuc29ydERldGFjaGVkJiZiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGEpPT09ZD9hPT09bnx8YS5vd25lckRvY3VtZW50PT09diYmdCh2LGEpPy0xOmI9PT1ufHxiLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYik/MTprP0ooayxhKS1KKGssYik6MDo0JmQ/LTE6MSl9OmZ1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGw9ITAsMDt2YXIgYyxkPTAsZT1hLnBhcmVudE5vZGUsZj1iLnBhcmVudE5vZGUsZz1bYV0saD1bYl07aWYoIWV8fCFmKXJldHVybiBhPT09bj8tMTpiPT09bj8xOmU/LTE6Zj8xOms/SihrLGEpLUooayxiKTowO2lmKGU9PT1mKXJldHVybiBrYShhLGIpO2M9YTt3aGlsZShjPWMucGFyZW50Tm9kZSlnLnVuc2hpZnQoYyk7Yz1iO3doaWxlKGM9Yy5wYXJlbnROb2RlKWgudW5zaGlmdChjKTt3aGlsZShnW2RdPT09aFtkXSlkKys7cmV0dXJuIGQ/a2EoZ1tkXSxoW2RdKTpnW2RdPT09dj8tMTpoW2RdPT09dj8xOjB9LG4pOm59LGZhLm1hdGNoZXM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZmEoYSxudWxsLG51bGwsYil9LGZhLm1hdGNoZXNTZWxlY3Rvcj1mdW5jdGlvbihhLGIpe2lmKChhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKSxiPWIucmVwbGFjZShULFwiPSckMSddXCIpLGMubWF0Y2hlc1NlbGVjdG9yJiZwJiYhQVtiK1wiIFwiXSYmKCFyfHwhci50ZXN0KGIpKSYmKCFxfHwhcS50ZXN0KGIpKSl0cnl7dmFyIGQ9cy5jYWxsKGEsYik7aWYoZHx8Yy5kaXNjb25uZWN0ZWRNYXRjaHx8YS5kb2N1bWVudCYmMTEhPT1hLmRvY3VtZW50Lm5vZGVUeXBlKXJldHVybiBkfWNhdGNoKGUpe31yZXR1cm4gZmEoYixuLG51bGwsW2FdKS5sZW5ndGg+MH0sZmEuY29udGFpbnM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4oYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSksdChhLGIpfSxmYS5hdHRyPWZ1bmN0aW9uKGEsYil7KGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpO3ZhciBlPWQuYXR0ckhhbmRsZVtiLnRvTG93ZXJDYXNlKCldLGY9ZSYmRC5jYWxsKGQuYXR0ckhhbmRsZSxiLnRvTG93ZXJDYXNlKCkpP2UoYSxiLCFwKTp2b2lkIDA7cmV0dXJuIHZvaWQgMCE9PWY/ZjpjLmF0dHJpYnV0ZXN8fCFwP2EuZ2V0QXR0cmlidXRlKGIpOihmPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmYuc3BlY2lmaWVkP2YudmFsdWU6bnVsbH0sZmEuZXJyb3I9ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIrYSl9LGZhLnVuaXF1ZVNvcnQ9ZnVuY3Rpb24oYSl7dmFyIGIsZD1bXSxlPTAsZj0wO2lmKGw9IWMuZGV0ZWN0RHVwbGljYXRlcyxrPSFjLnNvcnRTdGFibGUmJmEuc2xpY2UoMCksYS5zb3J0KEIpLGwpe3doaWxlKGI9YVtmKytdKWI9PT1hW2ZdJiYoZT1kLnB1c2goZikpO3doaWxlKGUtLSlhLnNwbGljZShkW2VdLDEpfXJldHVybiBrPW51bGwsYX0sZT1mYS5nZXRUZXh0PWZ1bmN0aW9uKGEpe3ZhciBiLGM9XCJcIixkPTAsZj1hLm5vZGVUeXBlO2lmKGYpe2lmKDE9PT1mfHw5PT09Znx8MTE9PT1mKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYS50ZXh0Q29udGVudClyZXR1cm4gYS50ZXh0Q29udGVudDtmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpYys9ZShhKX1lbHNlIGlmKDM9PT1mfHw0PT09ZilyZXR1cm4gYS5ub2RlVmFsdWV9ZWxzZSB3aGlsZShiPWFbZCsrXSljKz1lKGIpO3JldHVybiBjfSxkPWZhLnNlbGVjdG9ycz17Y2FjaGVMZW5ndGg6NTAsY3JlYXRlUHNldWRvOmhhLG1hdGNoOlcsYXR0ckhhbmRsZTp7fSxmaW5kOnt9LHJlbGF0aXZlOntcIj5cIjp7ZGlyOlwicGFyZW50Tm9kZVwiLGZpcnN0OiEwfSxcIiBcIjp7ZGlyOlwicGFyZW50Tm9kZVwifSxcIitcIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCIsZmlyc3Q6ITB9LFwiflwiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIn19LHByZUZpbHRlcjp7QVRUUjpmdW5jdGlvbihhKXtyZXR1cm4gYVsxXT1hWzFdLnJlcGxhY2UoYmEsY2EpLGFbM109KGFbM118fGFbNF18fGFbNV18fFwiXCIpLnJlcGxhY2UoYmEsY2EpLFwifj1cIj09PWFbMl0mJihhWzNdPVwiIFwiK2FbM10rXCIgXCIpLGEuc2xpY2UoMCw0KX0sQ0hJTEQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbMV09YVsxXS50b0xvd2VyQ2FzZSgpLFwibnRoXCI9PT1hWzFdLnNsaWNlKDAsMyk/KGFbM118fGZhLmVycm9yKGFbMF0pLGFbNF09KyhhWzRdP2FbNV0rKGFbNl18fDEpOjIqKFwiZXZlblwiPT09YVszXXx8XCJvZGRcIj09PWFbM10pKSxhWzVdPSsoYVs3XSthWzhdfHxcIm9kZFwiPT09YVszXSkpOmFbM10mJmZhLmVycm9yKGFbMF0pLGF9LFBTRVVETzpmdW5jdGlvbihhKXt2YXIgYixjPSFhWzZdJiZhWzJdO3JldHVybiBXLkNISUxELnRlc3QoYVswXSk/bnVsbDooYVszXT9hWzJdPWFbNF18fGFbNV18fFwiXCI6YyYmVS50ZXN0KGMpJiYoYj1nKGMsITApKSYmKGI9Yy5pbmRleE9mKFwiKVwiLGMubGVuZ3RoLWIpLWMubGVuZ3RoKSYmKGFbMF09YVswXS5zbGljZSgwLGIpLGFbMl09Yy5zbGljZSgwLGIpKSxhLnNsaWNlKDAsMykpfX0sZmlsdGVyOntUQUc6ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKGJhLGNhKS50b0xvd2VyQ2FzZSgpO3JldHVyblwiKlwiPT09YT9mdW5jdGlvbigpe3JldHVybiEwfTpmdW5jdGlvbihhKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yn19LENMQVNTOmZ1bmN0aW9uKGEpe3ZhciBiPXlbYStcIiBcIl07cmV0dXJuIGJ8fChiPW5ldyBSZWdFeHAoXCIoXnxcIitMK1wiKVwiK2ErXCIoXCIrTCtcInwkKVwiKSkmJnkoYSxmdW5jdGlvbihhKXtyZXR1cm4gYi50ZXN0KFwic3RyaW5nXCI9PXR5cGVvZiBhLmNsYXNzTmFtZSYmYS5jbGFzc05hbWV8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEF0dHJpYnV0ZSYmYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIil9KX0sQVRUUjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGQpe3ZhciBlPWZhLmF0dHIoZCxhKTtyZXR1cm4gbnVsbD09ZT9cIiE9XCI9PT1iOmI/KGUrPVwiXCIsXCI9XCI9PT1iP2U9PT1jOlwiIT1cIj09PWI/ZSE9PWM6XCJePVwiPT09Yj9jJiYwPT09ZS5pbmRleE9mKGMpOlwiKj1cIj09PWI/YyYmZS5pbmRleE9mKGMpPi0xOlwiJD1cIj09PWI/YyYmZS5zbGljZSgtYy5sZW5ndGgpPT09YzpcIn49XCI9PT1iPyhcIiBcIitlLnJlcGxhY2UoUCxcIiBcIikrXCIgXCIpLmluZGV4T2YoYyk+LTE6XCJ8PVwiPT09Yj9lPT09Y3x8ZS5zbGljZSgwLGMubGVuZ3RoKzEpPT09YytcIi1cIjohMSk6ITB9fSxDSElMRDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPVwibnRoXCIhPT1hLnNsaWNlKDAsMyksZz1cImxhc3RcIiE9PWEuc2xpY2UoLTQpLGg9XCJvZi10eXBlXCI9PT1iO3JldHVybiAxPT09ZCYmMD09PWU/ZnVuY3Rpb24oYSl7cmV0dXJuISFhLnBhcmVudE5vZGV9OmZ1bmN0aW9uKGIsYyxpKXt2YXIgaixrLGwsbSxuLG8scD1mIT09Zz9cIm5leHRTaWJsaW5nXCI6XCJwcmV2aW91c1NpYmxpbmdcIixxPWIucGFyZW50Tm9kZSxyPWgmJmIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxzPSFpJiYhaCx0PSExO2lmKHEpe2lmKGYpe3doaWxlKHApe209Yjt3aGlsZShtPW1bcF0paWYoaD9tLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1yOjE9PT1tLm5vZGVUeXBlKXJldHVybiExO289cD1cIm9ubHlcIj09PWEmJiFvJiZcIm5leHRTaWJsaW5nXCJ9cmV0dXJuITB9aWYobz1bZz9xLmZpcnN0Q2hpbGQ6cS5sYXN0Q2hpbGRdLGcmJnMpe209cSxsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxqPWtbYV18fFtdLG49alswXT09PXcmJmpbMV0sdD1uJiZqWzJdLG09biYmcS5jaGlsZE5vZGVzW25dO3doaWxlKG09KytuJiZtJiZtW3BdfHwodD1uPTApfHxvLnBvcCgpKWlmKDE9PT1tLm5vZGVUeXBlJiYrK3QmJm09PT1iKXtrW2FdPVt3LG4sdF07YnJlYWt9fWVsc2UgaWYocyYmKG09YixsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxqPWtbYV18fFtdLG49alswXT09PXcmJmpbMV0sdD1uKSx0PT09ITEpd2hpbGUobT0rK24mJm0mJm1bcF18fCh0PW49MCl8fG8ucG9wKCkpaWYoKGg/bS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09cjoxPT09bS5ub2RlVHlwZSkmJisrdCYmKHMmJihsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxrW2FdPVt3LHRdKSxtPT09YikpYnJlYWs7cmV0dXJuIHQtPWUsdD09PWR8fHQlZD09PTAmJnQvZD49MH19fSxQU0VVRE86ZnVuY3Rpb24oYSxiKXt2YXIgYyxlPWQucHNldWRvc1thXXx8ZC5zZXRGaWx0ZXJzW2EudG9Mb3dlckNhc2UoKV18fGZhLmVycm9yKFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIithKTtyZXR1cm4gZVt1XT9lKGIpOmUubGVuZ3RoPjE/KGM9W2EsYSxcIlwiLGJdLGQuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eShhLnRvTG93ZXJDYXNlKCkpP2hhKGZ1bmN0aW9uKGEsYyl7dmFyIGQsZj1lKGEsYiksZz1mLmxlbmd0aDt3aGlsZShnLS0pZD1KKGEsZltnXSksYVtkXT0hKGNbZF09ZltnXSl9KTpmdW5jdGlvbihhKXtyZXR1cm4gZShhLDAsYyl9KTplfX0scHNldWRvczp7bm90OmhhKGZ1bmN0aW9uKGEpe3ZhciBiPVtdLGM9W10sZD1oKGEucmVwbGFjZShRLFwiJDFcIikpO3JldHVybiBkW3VdP2hhKGZ1bmN0aW9uKGEsYixjLGUpe3ZhciBmLGc9ZChhLG51bGwsZSxbXSksaD1hLmxlbmd0aDt3aGlsZShoLS0pKGY9Z1toXSkmJihhW2hdPSEoYltoXT1mKSl9KTpmdW5jdGlvbihhLGUsZil7cmV0dXJuIGJbMF09YSxkKGIsbnVsbCxmLGMpLGJbMF09bnVsbCwhYy5wb3AoKX19KSxoYXM6aGEoZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBmYShhLGIpLmxlbmd0aD4wfX0pLGNvbnRhaW5zOmhhKGZ1bmN0aW9uKGEpe3JldHVybiBhPWEucmVwbGFjZShiYSxjYSksZnVuY3Rpb24oYil7cmV0dXJuKGIudGV4dENvbnRlbnR8fGIuaW5uZXJUZXh0fHxlKGIpKS5pbmRleE9mKGEpPi0xfX0pLGxhbmc6aGEoZnVuY3Rpb24oYSl7cmV0dXJuIFYudGVzdChhfHxcIlwiKXx8ZmEuZXJyb3IoXCJ1bnN1cHBvcnRlZCBsYW5nOiBcIithKSxhPWEucmVwbGFjZShiYSxjYSkudG9Mb3dlckNhc2UoKSxmdW5jdGlvbihiKXt2YXIgYztkbyBpZihjPXA/Yi5sYW5nOmIuZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIil8fGIuZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSlyZXR1cm4gYz1jLnRvTG93ZXJDYXNlKCksYz09PWF8fDA9PT1jLmluZGV4T2YoYStcIi1cIik7d2hpbGUoKGI9Yi5wYXJlbnROb2RlKSYmMT09PWIubm9kZVR5cGUpO3JldHVybiExfX0pLHRhcmdldDpmdW5jdGlvbihiKXt2YXIgYz1hLmxvY2F0aW9uJiZhLmxvY2F0aW9uLmhhc2g7cmV0dXJuIGMmJmMuc2xpY2UoMSk9PT1iLmlkfSxyb290OmZ1bmN0aW9uKGEpe3JldHVybiBhPT09b30sZm9jdXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1uLmFjdGl2ZUVsZW1lbnQmJighbi5oYXNGb2N1c3x8bi5oYXNGb2N1cygpKSYmISEoYS50eXBlfHxhLmhyZWZ8fH5hLnRhYkluZGV4KX0sZW5hYmxlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5kaXNhYmxlZD09PSExfSxkaXNhYmxlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5kaXNhYmxlZD09PSEwfSxjaGVja2VkOmZ1bmN0aW9uKGEpe3ZhciBiPWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iJiYhIWEuY2hlY2tlZHx8XCJvcHRpb25cIj09PWImJiEhYS5zZWxlY3RlZH0sc2VsZWN0ZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsYS5zZWxlY3RlZD09PSEwfSxlbXB0eTpmdW5jdGlvbihhKXtmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpaWYoYS5ub2RlVHlwZTw2KXJldHVybiExO3JldHVybiEwfSxwYXJlbnQ6ZnVuY3Rpb24oYSl7cmV0dXJuIWQucHNldWRvcy5lbXB0eShhKX0saGVhZGVyOmZ1bmN0aW9uKGEpe3JldHVybiBZLnRlc3QoYS5ub2RlTmFtZSl9LGlucHV0OmZ1bmN0aW9uKGEpe3JldHVybiBYLnRlc3QoYS5ub2RlTmFtZSl9LGJ1dHRvbjpmdW5jdGlvbihhKXt2YXIgYj1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YiYmXCJidXR0b25cIj09PWEudHlwZXx8XCJidXR0b25cIj09PWJ9LHRleHQ6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuXCJpbnB1dFwiPT09YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZcInRleHRcIj09PWEudHlwZSYmKG51bGw9PShiPWEuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSl8fFwidGV4dFwiPT09Yi50b0xvd2VyQ2FzZSgpKX0sZmlyc3Q6bmEoZnVuY3Rpb24oKXtyZXR1cm5bMF19KSxsYXN0Om5hKGZ1bmN0aW9uKGEsYil7cmV0dXJuW2ItMV19KSxlcTpuYShmdW5jdGlvbihhLGIsYyl7cmV0dXJuWzA+Yz9jK2I6Y119KSxldmVuOm5hKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTA7Yj5jO2MrPTIpYS5wdXNoKGMpO3JldHVybiBhfSksb2RkOm5hKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTE7Yj5jO2MrPTIpYS5wdXNoKGMpO3JldHVybiBhfSksbHQ6bmEoZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD0wPmM/YytiOmM7LS1kPj0wOylhLnB1c2goZCk7cmV0dXJuIGF9KSxndDpuYShmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTA+Yz9jK2I6YzsrK2Q8YjspYS5wdXNoKGQpO3JldHVybiBhfSl9fSxkLnBzZXVkb3MubnRoPWQucHNldWRvcy5lcTtmb3IoYiBpbntyYWRpbzohMCxjaGVja2JveDohMCxmaWxlOiEwLHBhc3N3b3JkOiEwLGltYWdlOiEwfSlkLnBzZXVkb3NbYl09bGEoYik7Zm9yKGIgaW57c3VibWl0OiEwLHJlc2V0OiEwfSlkLnBzZXVkb3NbYl09bWEoYik7ZnVuY3Rpb24gcGEoKXt9cGEucHJvdG90eXBlPWQuZmlsdGVycz1kLnBzZXVkb3MsZC5zZXRGaWx0ZXJzPW5ldyBwYSxnPWZhLnRva2VuaXplPWZ1bmN0aW9uKGEsYil7dmFyIGMsZSxmLGcsaCxpLGosaz16W2ErXCIgXCJdO2lmKGspcmV0dXJuIGI/MDprLnNsaWNlKDApO2g9YSxpPVtdLGo9ZC5wcmVGaWx0ZXI7d2hpbGUoaCl7YyYmIShlPVIuZXhlYyhoKSl8fChlJiYoaD1oLnNsaWNlKGVbMF0ubGVuZ3RoKXx8aCksaS5wdXNoKGY9W10pKSxjPSExLChlPVMuZXhlYyhoKSkmJihjPWUuc2hpZnQoKSxmLnB1c2goe3ZhbHVlOmMsdHlwZTplWzBdLnJlcGxhY2UoUSxcIiBcIil9KSxoPWguc2xpY2UoYy5sZW5ndGgpKTtmb3IoZyBpbiBkLmZpbHRlcikhKGU9V1tnXS5leGVjKGgpKXx8altnXSYmIShlPWpbZ10oZSkpfHwoYz1lLnNoaWZ0KCksZi5wdXNoKHt2YWx1ZTpjLHR5cGU6ZyxtYXRjaGVzOmV9KSxoPWguc2xpY2UoYy5sZW5ndGgpKTtpZighYylicmVha31yZXR1cm4gYj9oLmxlbmd0aDpoP2ZhLmVycm9yKGEpOnooYSxpKS5zbGljZSgwKX07ZnVuY3Rpb24gcWEoYSl7Zm9yKHZhciBiPTAsYz1hLmxlbmd0aCxkPVwiXCI7Yz5iO2IrKylkKz1hW2JdLnZhbHVlO3JldHVybiBkfWZ1bmN0aW9uIHJhKGEsYixjKXt2YXIgZD1iLmRpcixlPWMmJlwicGFyZW50Tm9kZVwiPT09ZCxmPXgrKztyZXR1cm4gYi5maXJzdD9mdW5jdGlvbihiLGMsZil7d2hpbGUoYj1iW2RdKWlmKDE9PT1iLm5vZGVUeXBlfHxlKXJldHVybiBhKGIsYyxmKX06ZnVuY3Rpb24oYixjLGcpe3ZhciBoLGksaixrPVt3LGZdO2lmKGcpe3doaWxlKGI9YltkXSlpZigoMT09PWIubm9kZVR5cGV8fGUpJiZhKGIsYyxnKSlyZXR1cm4hMH1lbHNlIHdoaWxlKGI9YltkXSlpZigxPT09Yi5ub2RlVHlwZXx8ZSl7aWYoaj1iW3VdfHwoYlt1XT17fSksaT1qW2IudW5pcXVlSURdfHwoaltiLnVuaXF1ZUlEXT17fSksKGg9aVtkXSkmJmhbMF09PT13JiZoWzFdPT09ZilyZXR1cm4ga1syXT1oWzJdO2lmKGlbZF09ayxrWzJdPWEoYixjLGcpKXJldHVybiEwfX19ZnVuY3Rpb24gc2EoYSl7cmV0dXJuIGEubGVuZ3RoPjE/ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWEubGVuZ3RoO3doaWxlKGUtLSlpZighYVtlXShiLGMsZCkpcmV0dXJuITE7cmV0dXJuITB9OmFbMF19ZnVuY3Rpb24gdGEoYSxiLGMpe2Zvcih2YXIgZD0wLGU9Yi5sZW5ndGg7ZT5kO2QrKylmYShhLGJbZF0sYyk7cmV0dXJuIGN9ZnVuY3Rpb24gdWEoYSxiLGMsZCxlKXtmb3IodmFyIGYsZz1bXSxoPTAsaT1hLmxlbmd0aCxqPW51bGwhPWI7aT5oO2grKykoZj1hW2hdKSYmKGMmJiFjKGYsZCxlKXx8KGcucHVzaChmKSxqJiZiLnB1c2goaCkpKTtyZXR1cm4gZ31mdW5jdGlvbiB2YShhLGIsYyxkLGUsZil7cmV0dXJuIGQmJiFkW3VdJiYoZD12YShkKSksZSYmIWVbdV0mJihlPXZhKGUsZikpLGhhKGZ1bmN0aW9uKGYsZyxoLGkpe3ZhciBqLGssbCxtPVtdLG49W10sbz1nLmxlbmd0aCxwPWZ8fHRhKGJ8fFwiKlwiLGgubm9kZVR5cGU/W2hdOmgsW10pLHE9IWF8fCFmJiZiP3A6dWEocCxtLGEsaCxpKSxyPWM/ZXx8KGY/YTpvfHxkKT9bXTpnOnE7aWYoYyYmYyhxLHIsaCxpKSxkKXtqPXVhKHIsbiksZChqLFtdLGgsaSksaz1qLmxlbmd0aDt3aGlsZShrLS0pKGw9altrXSkmJihyW25ba11dPSEocVtuW2tdXT1sKSl9aWYoZil7aWYoZXx8YSl7aWYoZSl7aj1bXSxrPXIubGVuZ3RoO3doaWxlKGstLSkobD1yW2tdKSYmai5wdXNoKHFba109bCk7ZShudWxsLHI9W10saixpKX1rPXIubGVuZ3RoO3doaWxlKGstLSkobD1yW2tdKSYmKGo9ZT9KKGYsbCk6bVtrXSk+LTEmJihmW2pdPSEoZ1tqXT1sKSl9fWVsc2Ugcj11YShyPT09Zz9yLnNwbGljZShvLHIubGVuZ3RoKTpyKSxlP2UobnVsbCxnLHIsaSk6SC5hcHBseShnLHIpfSl9ZnVuY3Rpb24gd2EoYSl7Zm9yKHZhciBiLGMsZSxmPWEubGVuZ3RoLGc9ZC5yZWxhdGl2ZVthWzBdLnR5cGVdLGg9Z3x8ZC5yZWxhdGl2ZVtcIiBcIl0saT1nPzE6MCxrPXJhKGZ1bmN0aW9uKGEpe3JldHVybiBhPT09Yn0saCwhMCksbD1yYShmdW5jdGlvbihhKXtyZXR1cm4gSihiLGEpPi0xfSxoLCEwKSxtPVtmdW5jdGlvbihhLGMsZCl7dmFyIGU9IWcmJihkfHxjIT09ail8fCgoYj1jKS5ub2RlVHlwZT9rKGEsYyxkKTpsKGEsYyxkKSk7cmV0dXJuIGI9bnVsbCxlfV07Zj5pO2krKylpZihjPWQucmVsYXRpdmVbYVtpXS50eXBlXSltPVtyYShzYShtKSxjKV07ZWxzZXtpZihjPWQuZmlsdGVyW2FbaV0udHlwZV0uYXBwbHkobnVsbCxhW2ldLm1hdGNoZXMpLGNbdV0pe2ZvcihlPSsraTtmPmU7ZSsrKWlmKGQucmVsYXRpdmVbYVtlXS50eXBlXSlicmVhaztyZXR1cm4gdmEoaT4xJiZzYShtKSxpPjEmJnFhKGEuc2xpY2UoMCxpLTEpLmNvbmNhdCh7dmFsdWU6XCIgXCI9PT1hW2ktMl0udHlwZT9cIipcIjpcIlwifSkpLnJlcGxhY2UoUSxcIiQxXCIpLGMsZT5pJiZ3YShhLnNsaWNlKGksZSkpLGY+ZSYmd2EoYT1hLnNsaWNlKGUpKSxmPmUmJnFhKGEpKX1tLnB1c2goYyl9cmV0dXJuIHNhKG0pfWZ1bmN0aW9uIHhhKGEsYil7dmFyIGM9Yi5sZW5ndGg+MCxlPWEubGVuZ3RoPjAsZj1mdW5jdGlvbihmLGcsaCxpLGspe3ZhciBsLG8scSxyPTAscz1cIjBcIix0PWYmJltdLHU9W10sdj1qLHg9Znx8ZSYmZC5maW5kLlRBRyhcIipcIixrKSx5PXcrPW51bGw9PXY/MTpNYXRoLnJhbmRvbSgpfHwuMSx6PXgubGVuZ3RoO2ZvcihrJiYoaj1nPT09bnx8Z3x8ayk7cyE9PXomJm51bGwhPShsPXhbc10pO3MrKyl7aWYoZSYmbCl7bz0wLGd8fGwub3duZXJEb2N1bWVudD09PW58fChtKGwpLGg9IXApO3doaWxlKHE9YVtvKytdKWlmKHEobCxnfHxuLGgpKXtpLnB1c2gobCk7YnJlYWt9ayYmKHc9eSl9YyYmKChsPSFxJiZsKSYmci0tLGYmJnQucHVzaChsKSl9aWYocis9cyxjJiZzIT09cil7bz0wO3doaWxlKHE9YltvKytdKXEodCx1LGcsaCk7aWYoZil7aWYocj4wKXdoaWxlKHMtLSl0W3NdfHx1W3NdfHwodVtzXT1GLmNhbGwoaSkpO3U9dWEodSl9SC5hcHBseShpLHUpLGsmJiFmJiZ1Lmxlbmd0aD4wJiZyK2IubGVuZ3RoPjEmJmZhLnVuaXF1ZVNvcnQoaSl9cmV0dXJuIGsmJih3PXksaj12KSx0fTtyZXR1cm4gYz9oYShmKTpmfXJldHVybiBoPWZhLmNvbXBpbGU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9W10sZj1BW2ErXCIgXCJdO2lmKCFmKXtifHwoYj1nKGEpKSxjPWIubGVuZ3RoO3doaWxlKGMtLSlmPXdhKGJbY10pLGZbdV0/ZC5wdXNoKGYpOmUucHVzaChmKTtmPUEoYSx4YShlLGQpKSxmLnNlbGVjdG9yPWF9cmV0dXJuIGZ9LGk9ZmEuc2VsZWN0PWZ1bmN0aW9uKGEsYixlLGYpe3ZhciBpLGosayxsLG0sbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiZhLG89IWYmJmcoYT1uLnNlbGVjdG9yfHxhKTtpZihlPWV8fFtdLDE9PT1vLmxlbmd0aCl7aWYoaj1vWzBdPW9bMF0uc2xpY2UoMCksai5sZW5ndGg+MiYmXCJJRFwiPT09KGs9alswXSkudHlwZSYmYy5nZXRCeUlkJiY5PT09Yi5ub2RlVHlwZSYmcCYmZC5yZWxhdGl2ZVtqWzFdLnR5cGVdKXtpZihiPShkLmZpbmQuSUQoay5tYXRjaGVzWzBdLnJlcGxhY2UoYmEsY2EpLGIpfHxbXSlbMF0sIWIpcmV0dXJuIGU7biYmKGI9Yi5wYXJlbnROb2RlKSxhPWEuc2xpY2Uoai5zaGlmdCgpLnZhbHVlLmxlbmd0aCl9aT1XLm5lZWRzQ29udGV4dC50ZXN0KGEpPzA6ai5sZW5ndGg7d2hpbGUoaS0tKXtpZihrPWpbaV0sZC5yZWxhdGl2ZVtsPWsudHlwZV0pYnJlYWs7aWYoKG09ZC5maW5kW2xdKSYmKGY9bShrLm1hdGNoZXNbMF0ucmVwbGFjZShiYSxjYSksXy50ZXN0KGpbMF0udHlwZSkmJm9hKGIucGFyZW50Tm9kZSl8fGIpKSl7aWYoai5zcGxpY2UoaSwxKSxhPWYubGVuZ3RoJiZxYShqKSwhYSlyZXR1cm4gSC5hcHBseShlLGYpLGU7YnJlYWt9fX1yZXR1cm4obnx8aChhLG8pKShmLGIsIXAsZSwhYnx8Xy50ZXN0KGEpJiZvYShiLnBhcmVudE5vZGUpfHxiKSxlfSxjLnNvcnRTdGFibGU9dS5zcGxpdChcIlwiKS5zb3J0KEIpLmpvaW4oXCJcIik9PT11LGMuZGV0ZWN0RHVwbGljYXRlcz0hIWwsbSgpLGMuc29ydERldGFjaGVkPWlhKGZ1bmN0aW9uKGEpe3JldHVybiAxJmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24obi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKX0pLGlhKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxhIGhyZWY9JyMnPjwvYT5cIixcIiNcIj09PWEuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfSl8fGphKFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLGZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYz92b2lkIDA6YS5nZXRBdHRyaWJ1dGUoYixcInR5cGVcIj09PWIudG9Mb3dlckNhc2UoKT8xOjIpfSksYy5hdHRyaWJ1dGVzJiZpYShmdW5jdGlvbihhKXtyZXR1cm4gYS5pbm5lckhUTUw9XCI8aW5wdXQvPlwiLGEuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLFwiXCI9PT1hLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil9KXx8amEoXCJ2YWx1ZVwiLGZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gY3x8XCJpbnB1dFwiIT09YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpP3ZvaWQgMDphLmRlZmF1bHRWYWx1ZX0pLGlhKGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpfSl8fGphKEssZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiBjP3ZvaWQgMDphW2JdPT09ITA/Yi50b0xvd2VyQ2FzZSgpOihkPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmQuc3BlY2lmaWVkP2QudmFsdWU6bnVsbH0pLGZhfShhKTtuLmZpbmQ9dCxuLmV4cHI9dC5zZWxlY3RvcnMsbi5leHByW1wiOlwiXT1uLmV4cHIucHNldWRvcyxuLnVuaXF1ZVNvcnQ9bi51bmlxdWU9dC51bmlxdWVTb3J0LG4udGV4dD10LmdldFRleHQsbi5pc1hNTERvYz10LmlzWE1MLG4uY29udGFpbnM9dC5jb250YWluczt2YXIgdT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9W10sZT12b2lkIDAhPT1jO3doaWxlKChhPWFbYl0pJiY5IT09YS5ub2RlVHlwZSlpZigxPT09YS5ub2RlVHlwZSl7aWYoZSYmbihhKS5pcyhjKSlicmVhaztkLnB1c2goYSl9cmV0dXJuIGR9LHY9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9W107YTthPWEubmV4dFNpYmxpbmcpMT09PWEubm9kZVR5cGUmJmEhPT1iJiZjLnB1c2goYSk7cmV0dXJuIGN9LHc9bi5leHByLm1hdGNoLm5lZWRzQ29udGV4dCx4PS9ePChbXFx3LV0rKVxccypcXC8/Pig/OjxcXC9cXDE+fCkkLyx5PS9eLlteOiNcXFtcXC4sXSokLztmdW5jdGlvbiB6KGEsYixjKXtpZihuLmlzRnVuY3Rpb24oYikpcmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEsZCl7cmV0dXJuISFiLmNhbGwoYSxkLGEpIT09Y30pO2lmKGIubm9kZVR5cGUpcmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBhPT09YiE9PWN9KTtpZihcInN0cmluZ1wiPT10eXBlb2YgYil7aWYoeS50ZXN0KGIpKXJldHVybiBuLmZpbHRlcihiLGEsYyk7Yj1uLmZpbHRlcihiLGEpfXJldHVybiBuLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gbi5pbkFycmF5KGEsYik+LTEhPT1jfSl9bi5maWx0ZXI9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWJbMF07cmV0dXJuIGMmJihhPVwiOm5vdChcIithK1wiKVwiKSwxPT09Yi5sZW5ndGgmJjE9PT1kLm5vZGVUeXBlP24uZmluZC5tYXRjaGVzU2VsZWN0b3IoZCxhKT9bZF06W106bi5maW5kLm1hdGNoZXMoYSxuLmdyZXAoYixmdW5jdGlvbihhKXtyZXR1cm4gMT09PWEubm9kZVR5cGV9KSl9LG4uZm4uZXh0ZW5kKHtmaW5kOmZ1bmN0aW9uKGEpe3ZhciBiLGM9W10sZD10aGlzLGU9ZC5sZW5ndGg7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIHRoaXMucHVzaFN0YWNrKG4oYSkuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKGI9MDtlPmI7YisrKWlmKG4uY29udGFpbnMoZFtiXSx0aGlzKSlyZXR1cm4hMH0pKTtmb3IoYj0wO2U+YjtiKyspbi5maW5kKGEsZFtiXSxjKTtyZXR1cm4gYz10aGlzLnB1c2hTdGFjayhlPjE/bi51bmlxdWUoYyk6YyksYy5zZWxlY3Rvcj10aGlzLnNlbGVjdG9yP3RoaXMuc2VsZWN0b3IrXCIgXCIrYTphLGN9LGZpbHRlcjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soeih0aGlzLGF8fFtdLCExKSl9LG5vdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soeih0aGlzLGF8fFtdLCEwKSl9LGlzOmZ1bmN0aW9uKGEpe3JldHVybiEheih0aGlzLFwic3RyaW5nXCI9PXR5cGVvZiBhJiZ3LnRlc3QoYSk/bihhKTphfHxbXSwhMSkubGVuZ3RofX0pO3ZhciBBLEI9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKikpJC8sQz1uLmZuLmluaXQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBlLGY7aWYoIWEpcmV0dXJuIHRoaXM7aWYoYz1jfHxBLFwic3RyaW5nXCI9PXR5cGVvZiBhKXtpZihlPVwiPFwiPT09YS5jaGFyQXQoMCkmJlwiPlwiPT09YS5jaGFyQXQoYS5sZW5ndGgtMSkmJmEubGVuZ3RoPj0zP1tudWxsLGEsbnVsbF06Qi5leGVjKGEpLCFlfHwhZVsxXSYmYilyZXR1cm4hYnx8Yi5qcXVlcnk/KGJ8fGMpLmZpbmQoYSk6dGhpcy5jb25zdHJ1Y3RvcihiKS5maW5kKGEpO2lmKGVbMV0pe2lmKGI9YiBpbnN0YW5jZW9mIG4/YlswXTpiLG4ubWVyZ2UodGhpcyxuLnBhcnNlSFRNTChlWzFdLGImJmIubm9kZVR5cGU/Yi5vd25lckRvY3VtZW50fHxiOmQsITApKSx4LnRlc3QoZVsxXSkmJm4uaXNQbGFpbk9iamVjdChiKSlmb3IoZSBpbiBiKW4uaXNGdW5jdGlvbih0aGlzW2VdKT90aGlzW2VdKGJbZV0pOnRoaXMuYXR0cihlLGJbZV0pO3JldHVybiB0aGlzfWlmKGY9ZC5nZXRFbGVtZW50QnlJZChlWzJdKSxmJiZmLnBhcmVudE5vZGUpe2lmKGYuaWQhPT1lWzJdKXJldHVybiBBLmZpbmQoYSk7dGhpcy5sZW5ndGg9MSx0aGlzWzBdPWZ9cmV0dXJuIHRoaXMuY29udGV4dD1kLHRoaXMuc2VsZWN0b3I9YSx0aGlzfXJldHVybiBhLm5vZGVUeXBlPyh0aGlzLmNvbnRleHQ9dGhpc1swXT1hLHRoaXMubGVuZ3RoPTEsdGhpcyk6bi5pc0Z1bmN0aW9uKGEpP1widW5kZWZpbmVkXCIhPXR5cGVvZiBjLnJlYWR5P2MucmVhZHkoYSk6YShuKToodm9pZCAwIT09YS5zZWxlY3RvciYmKHRoaXMuc2VsZWN0b3I9YS5zZWxlY3Rvcix0aGlzLmNvbnRleHQ9YS5jb250ZXh0KSxuLm1ha2VBcnJheShhLHRoaXMpKX07Qy5wcm90b3R5cGU9bi5mbixBPW4oZCk7dmFyIEQ9L14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sRT17Y2hpbGRyZW46ITAsY29udGVudHM6ITAsbmV4dDohMCxwcmV2OiEwfTtuLmZuLmV4dGVuZCh7aGFzOmZ1bmN0aW9uKGEpe3ZhciBiLGM9bihhLHRoaXMpLGQ9Yy5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKGI9MDtkPmI7YisrKWlmKG4uY29udGFpbnModGhpcyxjW2JdKSlyZXR1cm4hMH0pfSxjbG9zZXN0OmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjLGQ9MCxlPXRoaXMubGVuZ3RoLGY9W10sZz13LnRlc3QoYSl8fFwic3RyaW5nXCIhPXR5cGVvZiBhP24oYSxifHx0aGlzLmNvbnRleHQpOjA7ZT5kO2QrKylmb3IoYz10aGlzW2RdO2MmJmMhPT1iO2M9Yy5wYXJlbnROb2RlKWlmKGMubm9kZVR5cGU8MTEmJihnP2cuaW5kZXgoYyk+LTE6MT09PWMubm9kZVR5cGUmJm4uZmluZC5tYXRjaGVzU2VsZWN0b3IoYyxhKSkpe2YucHVzaChjKTticmVha31yZXR1cm4gdGhpcy5wdXNoU3RhY2soZi5sZW5ndGg+MT9uLnVuaXF1ZVNvcnQoZik6Zil9LGluZGV4OmZ1bmN0aW9uKGEpe3JldHVybiBhP1wic3RyaW5nXCI9PXR5cGVvZiBhP24uaW5BcnJheSh0aGlzWzBdLG4oYSkpOm4uaW5BcnJheShhLmpxdWVyeT9hWzBdOmEsdGhpcyk6dGhpc1swXSYmdGhpc1swXS5wYXJlbnROb2RlP3RoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoOi0xfSxhZGQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobi51bmlxdWVTb3J0KG4ubWVyZ2UodGhpcy5nZXQoKSxuKGEsYikpKSl9LGFkZEJhY2s6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuYWRkKG51bGw9PWE/dGhpcy5wcmV2T2JqZWN0OnRoaXMucHJldk9iamVjdC5maWx0ZXIoYSkpfX0pO2Z1bmN0aW9uIEYoYSxiKXtkbyBhPWFbYl07d2hpbGUoYSYmMSE9PWEubm9kZVR5cGUpO3JldHVybiBhfW4uZWFjaCh7cGFyZW50OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtyZXR1cm4gYiYmMTEhPT1iLm5vZGVUeXBlP2I6bnVsbH0scGFyZW50czpmdW5jdGlvbihhKXtyZXR1cm4gdShhLFwicGFyZW50Tm9kZVwiKX0scGFyZW50c1VudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdShhLFwicGFyZW50Tm9kZVwiLGMpfSxuZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBGKGEsXCJuZXh0U2libGluZ1wiKX0scHJldjpmdW5jdGlvbihhKXtyZXR1cm4gRihhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0QWxsOmZ1bmN0aW9uKGEpe3JldHVybiB1KGEsXCJuZXh0U2libGluZ1wiKX0scHJldkFsbDpmdW5jdGlvbihhKXtyZXR1cm4gdShhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB1KGEsXCJuZXh0U2libGluZ1wiLGMpfSxwcmV2VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB1KGEsXCJwcmV2aW91c1NpYmxpbmdcIixjKX0sc2libGluZ3M6ZnVuY3Rpb24oYSl7cmV0dXJuIHYoKGEucGFyZW50Tm9kZXx8e30pLmZpcnN0Q2hpbGQsYSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGEpe3JldHVybiB2KGEuZmlyc3RDaGlsZCl9LGNvbnRlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiBuLm5vZGVOYW1lKGEsXCJpZnJhbWVcIik/YS5jb250ZW50RG9jdW1lbnR8fGEuY29udGVudFdpbmRvdy5kb2N1bWVudDpuLm1lcmdlKFtdLGEuY2hpbGROb2Rlcyl9fSxmdW5jdGlvbihhLGIpe24uZm5bYV09ZnVuY3Rpb24oYyxkKXt2YXIgZT1uLm1hcCh0aGlzLGIsYyk7cmV0dXJuXCJVbnRpbFwiIT09YS5zbGljZSgtNSkmJihkPWMpLGQmJlwic3RyaW5nXCI9PXR5cGVvZiBkJiYoZT1uLmZpbHRlcihkLGUpKSx0aGlzLmxlbmd0aD4xJiYoRVthXXx8KGU9bi51bmlxdWVTb3J0KGUpKSxELnRlc3QoYSkmJihlPWUucmV2ZXJzZSgpKSksdGhpcy5wdXNoU3RhY2soZSl9fSk7dmFyIEc9L1xcUysvZztmdW5jdGlvbiBIKGEpe3ZhciBiPXt9O3JldHVybiBuLmVhY2goYS5tYXRjaChHKXx8W10sZnVuY3Rpb24oYSxjKXtiW2NdPSEwfSksYn1uLkNhbGxiYWNrcz1mdW5jdGlvbihhKXthPVwic3RyaW5nXCI9PXR5cGVvZiBhP0goYSk6bi5leHRlbmQoe30sYSk7dmFyIGIsYyxkLGUsZj1bXSxnPVtdLGg9LTEsaT1mdW5jdGlvbigpe2ZvcihlPWEub25jZSxkPWI9ITA7Zy5sZW5ndGg7aD0tMSl7Yz1nLnNoaWZ0KCk7d2hpbGUoKytoPGYubGVuZ3RoKWZbaF0uYXBwbHkoY1swXSxjWzFdKT09PSExJiZhLnN0b3BPbkZhbHNlJiYoaD1mLmxlbmd0aCxjPSExKX1hLm1lbW9yeXx8KGM9ITEpLGI9ITEsZSYmKGY9Yz9bXTpcIlwiKX0saj17YWRkOmZ1bmN0aW9uKCl7cmV0dXJuIGYmJihjJiYhYiYmKGg9Zi5sZW5ndGgtMSxnLnB1c2goYykpLGZ1bmN0aW9uIGQoYil7bi5lYWNoKGIsZnVuY3Rpb24oYixjKXtuLmlzRnVuY3Rpb24oYyk/YS51bmlxdWUmJmouaGFzKGMpfHxmLnB1c2goYyk6YyYmYy5sZW5ndGgmJlwic3RyaW5nXCIhPT1uLnR5cGUoYykmJmQoYyl9KX0oYXJndW1lbnRzKSxjJiYhYiYmaSgpKSx0aGlzfSxyZW1vdmU6ZnVuY3Rpb24oKXtyZXR1cm4gbi5lYWNoKGFyZ3VtZW50cyxmdW5jdGlvbihhLGIpe3ZhciBjO3doaWxlKChjPW4uaW5BcnJheShiLGYsYykpPi0xKWYuc3BsaWNlKGMsMSksaD49YyYmaC0tfSksdGhpc30saGFzOmZ1bmN0aW9uKGEpe3JldHVybiBhP24uaW5BcnJheShhLGYpPi0xOmYubGVuZ3RoPjB9LGVtcHR5OmZ1bmN0aW9uKCl7cmV0dXJuIGYmJihmPVtdKSx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGU9Zz1bXSxmPWM9XCJcIix0aGlzfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiFmfSxsb2NrOmZ1bmN0aW9uKCl7cmV0dXJuIGU9ITAsY3x8ai5kaXNhYmxlKCksdGhpc30sbG9ja2VkOmZ1bmN0aW9uKCl7cmV0dXJuISFlfSxmaXJlV2l0aDpmdW5jdGlvbihhLGMpe3JldHVybiBlfHwoYz1jfHxbXSxjPVthLGMuc2xpY2U/Yy5zbGljZSgpOmNdLGcucHVzaChjKSxifHxpKCkpLHRoaXN9LGZpcmU6ZnVuY3Rpb24oKXtyZXR1cm4gai5maXJlV2l0aCh0aGlzLGFyZ3VtZW50cyksdGhpc30sZmlyZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWR9fTtyZXR1cm4gan0sbi5leHRlbmQoe0RlZmVycmVkOmZ1bmN0aW9uKGEpe3ZhciBiPVtbXCJyZXNvbHZlXCIsXCJkb25lXCIsbi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcInJlc29sdmVkXCJdLFtcInJlamVjdFwiLFwiZmFpbFwiLG4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXCJyZWplY3RlZFwiXSxbXCJub3RpZnlcIixcInByb2dyZXNzXCIsbi5DYWxsYmFja3MoXCJtZW1vcnlcIildXSxjPVwicGVuZGluZ1wiLGQ9e3N0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIGN9LGFsd2F5czpmdW5jdGlvbigpe3JldHVybiBlLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyksdGhpc30sdGhlbjpmdW5jdGlvbigpe3ZhciBhPWFyZ3VtZW50cztyZXR1cm4gbi5EZWZlcnJlZChmdW5jdGlvbihjKXtuLmVhY2goYixmdW5jdGlvbihiLGYpe3ZhciBnPW4uaXNGdW5jdGlvbihhW2JdKSYmYVtiXTtlW2ZbMV1dKGZ1bmN0aW9uKCl7dmFyIGE9ZyYmZy5hcHBseSh0aGlzLGFyZ3VtZW50cyk7YSYmbi5pc0Z1bmN0aW9uKGEucHJvbWlzZSk/YS5wcm9taXNlKCkucHJvZ3Jlc3MoYy5ub3RpZnkpLmRvbmUoYy5yZXNvbHZlKS5mYWlsKGMucmVqZWN0KTpjW2ZbMF0rXCJXaXRoXCJdKHRoaXM9PT1kP2MucHJvbWlzZSgpOnRoaXMsZz9bYV06YXJndW1lbnRzKX0pfSksYT1udWxsfSkucHJvbWlzZSgpfSxwcm9taXNlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hP24uZXh0ZW5kKGEsZCk6ZH19LGU9e307cmV0dXJuIGQucGlwZT1kLnRoZW4sbi5lYWNoKGIsZnVuY3Rpb24oYSxmKXt2YXIgZz1mWzJdLGg9ZlszXTtkW2ZbMV1dPWcuYWRkLGgmJmcuYWRkKGZ1bmN0aW9uKCl7Yz1ofSxiWzFeYV1bMl0uZGlzYWJsZSxiWzJdWzJdLmxvY2spLGVbZlswXV09ZnVuY3Rpb24oKXtyZXR1cm4gZVtmWzBdK1wiV2l0aFwiXSh0aGlzPT09ZT9kOnRoaXMsYXJndW1lbnRzKSx0aGlzfSxlW2ZbMF0rXCJXaXRoXCJdPWcuZmlyZVdpdGh9KSxkLnByb21pc2UoZSksYSYmYS5jYWxsKGUsZSksZX0sd2hlbjpmdW5jdGlvbihhKXt2YXIgYj0wLGM9ZS5jYWxsKGFyZ3VtZW50cyksZD1jLmxlbmd0aCxmPTEhPT1kfHxhJiZuLmlzRnVuY3Rpb24oYS5wcm9taXNlKT9kOjAsZz0xPT09Zj9hOm4uRGVmZXJyZWQoKSxoPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZCl7YlthXT10aGlzLGNbYV09YXJndW1lbnRzLmxlbmd0aD4xP2UuY2FsbChhcmd1bWVudHMpOmQsYz09PWk/Zy5ub3RpZnlXaXRoKGIsYyk6LS1mfHxnLnJlc29sdmVXaXRoKGIsYyl9fSxpLGosaztpZihkPjEpZm9yKGk9bmV3IEFycmF5KGQpLGo9bmV3IEFycmF5KGQpLGs9bmV3IEFycmF5KGQpO2Q+YjtiKyspY1tiXSYmbi5pc0Z1bmN0aW9uKGNbYl0ucHJvbWlzZSk/Y1tiXS5wcm9taXNlKCkucHJvZ3Jlc3MoaChiLGosaSkpLmRvbmUoaChiLGssYykpLmZhaWwoZy5yZWplY3QpOi0tZjtyZXR1cm4gZnx8Zy5yZXNvbHZlV2l0aChrLGMpLGcucHJvbWlzZSgpfX0pO3ZhciBJO24uZm4ucmVhZHk9ZnVuY3Rpb24oYSl7cmV0dXJuIG4ucmVhZHkucHJvbWlzZSgpLmRvbmUoYSksdGhpc30sbi5leHRlbmQoe2lzUmVhZHk6ITEscmVhZHlXYWl0OjEsaG9sZFJlYWR5OmZ1bmN0aW9uKGEpe2E/bi5yZWFkeVdhaXQrKzpuLnJlYWR5KCEwKX0scmVhZHk6ZnVuY3Rpb24oYSl7KGE9PT0hMD8tLW4ucmVhZHlXYWl0Om4uaXNSZWFkeSl8fChuLmlzUmVhZHk9ITAsYSE9PSEwJiYtLW4ucmVhZHlXYWl0PjB8fChJLnJlc29sdmVXaXRoKGQsW25dKSxuLmZuLnRyaWdnZXJIYW5kbGVyJiYobihkKS50cmlnZ2VySGFuZGxlcihcInJlYWR5XCIpLG4oZCkub2ZmKFwicmVhZHlcIikpKSl9fSk7ZnVuY3Rpb24gSigpe2QuYWRkRXZlbnRMaXN0ZW5lcj8oZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEspLGEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixLKSk6KGQuZGV0YWNoRXZlbnQoXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixLKSxhLmRldGFjaEV2ZW50KFwib25sb2FkXCIsSykpfWZ1bmN0aW9uIEsoKXsoZC5hZGRFdmVudExpc3RlbmVyfHxcImxvYWRcIj09PWEuZXZlbnQudHlwZXx8XCJjb21wbGV0ZVwiPT09ZC5yZWFkeVN0YXRlKSYmKEooKSxuLnJlYWR5KCkpfW4ucmVhZHkucHJvbWlzZT1mdW5jdGlvbihiKXtpZighSSlpZihJPW4uRGVmZXJyZWQoKSxcImNvbXBsZXRlXCI9PT1kLnJlYWR5U3RhdGV8fFwibG9hZGluZ1wiIT09ZC5yZWFkeVN0YXRlJiYhZC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwpYS5zZXRUaW1lb3V0KG4ucmVhZHkpO2Vsc2UgaWYoZC5hZGRFdmVudExpc3RlbmVyKWQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixLKSxhLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsSyk7ZWxzZXtkLmF0dGFjaEV2ZW50KFwib25yZWFkeXN0YXRlY2hhbmdlXCIsSyksYS5hdHRhY2hFdmVudChcIm9ubG9hZFwiLEspO3ZhciBjPSExO3RyeXtjPW51bGw9PWEuZnJhbWVFbGVtZW50JiZkLmRvY3VtZW50RWxlbWVudH1jYXRjaChlKXt9YyYmYy5kb1Njcm9sbCYmIWZ1bmN0aW9uIGYoKXtpZighbi5pc1JlYWR5KXt0cnl7Yy5kb1Njcm9sbChcImxlZnRcIil9Y2F0Y2goYil7cmV0dXJuIGEuc2V0VGltZW91dChmLDUwKX1KKCksbi5yZWFkeSgpfX0oKX1yZXR1cm4gSS5wcm9taXNlKGIpfSxuLnJlYWR5LnByb21pc2UoKTt2YXIgTDtmb3IoTCBpbiBuKGwpKWJyZWFrO2wub3duRmlyc3Q9XCIwXCI9PT1MLGwuaW5saW5lQmxvY2tOZWVkc0xheW91dD0hMSxuKGZ1bmN0aW9uKCl7dmFyIGEsYixjLGU7Yz1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXSxjJiZjLnN0eWxlJiYoYj1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZT1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZS5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyOjA7d2lkdGg6MDtoZWlnaHQ6MDt0b3A6MDtsZWZ0Oi05OTk5cHhcIixjLmFwcGVuZENoaWxkKGUpLmFwcGVuZENoaWxkKGIpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLnN0eWxlLnpvb20mJihiLnN0eWxlLmNzc1RleHQ9XCJkaXNwbGF5OmlubGluZTttYXJnaW46MDtib3JkZXI6MDtwYWRkaW5nOjFweDt3aWR0aDoxcHg7em9vbToxXCIsbC5pbmxpbmVCbG9ja05lZWRzTGF5b3V0PWE9Mz09PWIub2Zmc2V0V2lkdGgsYSYmKGMuc3R5bGUuem9vbT0xKSksYy5yZW1vdmVDaGlsZChlKSl9KSxmdW5jdGlvbigpe3ZhciBhPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtsLmRlbGV0ZUV4cGFuZG89ITA7dHJ5e2RlbGV0ZSBhLnRlc3R9Y2F0Y2goYil7bC5kZWxldGVFeHBhbmRvPSExfWE9bnVsbH0oKTt2YXIgTT1mdW5jdGlvbihhKXt2YXIgYj1uLm5vRGF0YVsoYS5ub2RlTmFtZStcIiBcIikudG9Mb3dlckNhc2UoKV0sYz0rYS5ub2RlVHlwZXx8MTtyZXR1cm4gMSE9PWMmJjkhPT1jPyExOiFifHxiIT09ITAmJmEuZ2V0QXR0cmlidXRlKFwiY2xhc3NpZFwiKT09PWJ9LE49L14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLE89LyhbQS1aXSkvZztmdW5jdGlvbiBQKGEsYixjKXtpZih2b2lkIDA9PT1jJiYxPT09YS5ub2RlVHlwZSl7dmFyIGQ9XCJkYXRhLVwiK2IucmVwbGFjZShPLFwiLSQxXCIpLnRvTG93ZXJDYXNlKCk7aWYoYz1hLmdldEF0dHJpYnV0ZShkKSxcInN0cmluZ1wiPT10eXBlb2YgYyl7dHJ5e2M9XCJ0cnVlXCI9PT1jPyEwOlwiZmFsc2VcIj09PWM/ITE6XCJudWxsXCI9PT1jP251bGw6K2MrXCJcIj09PWM/K2M6Ti50ZXN0KGMpP24ucGFyc2VKU09OKGMpOmN9Y2F0Y2goZSl7fW4uZGF0YShhLGIsYyl9ZWxzZSBjPXZvaWQgMDtcbn1yZXR1cm4gY31mdW5jdGlvbiBRKGEpe3ZhciBiO2ZvcihiIGluIGEpaWYoKFwiZGF0YVwiIT09Ynx8IW4uaXNFbXB0eU9iamVjdChhW2JdKSkmJlwidG9KU09OXCIhPT1iKXJldHVybiExO3JldHVybiEwfWZ1bmN0aW9uIFIoYSxiLGQsZSl7aWYoTShhKSl7dmFyIGYsZyxoPW4uZXhwYW5kbyxpPWEubm9kZVR5cGUsaj1pP24uY2FjaGU6YSxrPWk/YVtoXTphW2hdJiZoO2lmKGsmJmpba10mJihlfHxqW2tdLmRhdGEpfHx2b2lkIDAhPT1kfHxcInN0cmluZ1wiIT10eXBlb2YgYilyZXR1cm4ga3x8KGs9aT9hW2hdPWMucG9wKCl8fG4uZ3VpZCsrOmgpLGpba118fChqW2tdPWk/e306e3RvSlNPTjpuLm5vb3B9KSxcIm9iamVjdFwiIT10eXBlb2YgYiYmXCJmdW5jdGlvblwiIT10eXBlb2YgYnx8KGU/altrXT1uLmV4dGVuZChqW2tdLGIpOmpba10uZGF0YT1uLmV4dGVuZChqW2tdLmRhdGEsYikpLGc9altrXSxlfHwoZy5kYXRhfHwoZy5kYXRhPXt9KSxnPWcuZGF0YSksdm9pZCAwIT09ZCYmKGdbbi5jYW1lbENhc2UoYildPWQpLFwic3RyaW5nXCI9PXR5cGVvZiBiPyhmPWdbYl0sbnVsbD09ZiYmKGY9Z1tuLmNhbWVsQ2FzZShiKV0pKTpmPWcsZn19ZnVuY3Rpb24gUyhhLGIsYyl7aWYoTShhKSl7dmFyIGQsZSxmPWEubm9kZVR5cGUsZz1mP24uY2FjaGU6YSxoPWY/YVtuLmV4cGFuZG9dOm4uZXhwYW5kbztpZihnW2hdKXtpZihiJiYoZD1jP2dbaF06Z1toXS5kYXRhKSl7bi5pc0FycmF5KGIpP2I9Yi5jb25jYXQobi5tYXAoYixuLmNhbWVsQ2FzZSkpOmIgaW4gZD9iPVtiXTooYj1uLmNhbWVsQ2FzZShiKSxiPWIgaW4gZD9bYl06Yi5zcGxpdChcIiBcIikpLGU9Yi5sZW5ndGg7d2hpbGUoZS0tKWRlbGV0ZSBkW2JbZV1dO2lmKGM/IVEoZCk6IW4uaXNFbXB0eU9iamVjdChkKSlyZXR1cm59KGN8fChkZWxldGUgZ1toXS5kYXRhLFEoZ1toXSkpKSYmKGY/bi5jbGVhbkRhdGEoW2FdLCEwKTpsLmRlbGV0ZUV4cGFuZG98fGchPWcud2luZG93P2RlbGV0ZSBnW2hdOmdbaF09dm9pZCAwKX19fW4uZXh0ZW5kKHtjYWNoZTp7fSxub0RhdGE6e1wiYXBwbGV0IFwiOiEwLFwiZW1iZWQgXCI6ITAsXCJvYmplY3QgXCI6XCJjbHNpZDpEMjdDREI2RS1BRTZELTExY2YtOTZCOC00NDQ1NTM1NDAwMDBcIn0saGFzRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4gYT1hLm5vZGVUeXBlP24uY2FjaGVbYVtuLmV4cGFuZG9dXTphW24uZXhwYW5kb10sISFhJiYhUShhKX0sZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIFIoYSxiLGMpfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoYSxiKX0sX2RhdGE6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBSKGEsYixjLCEwKX0sX3JlbW92ZURhdGE6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUyhhLGIsITApfX0pLG4uZm4uZXh0ZW5kKHtkYXRhOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9dGhpc1swXSxnPWYmJmYuYXR0cmlidXRlcztpZih2b2lkIDA9PT1hKXtpZih0aGlzLmxlbmd0aCYmKGU9bi5kYXRhKGYpLDE9PT1mLm5vZGVUeXBlJiYhbi5fZGF0YShmLFwicGFyc2VkQXR0cnNcIikpKXtjPWcubGVuZ3RoO3doaWxlKGMtLSlnW2NdJiYoZD1nW2NdLm5hbWUsMD09PWQuaW5kZXhPZihcImRhdGEtXCIpJiYoZD1uLmNhbWVsQ2FzZShkLnNsaWNlKDUpKSxQKGYsZCxlW2RdKSkpO24uX2RhdGEoZixcInBhcnNlZEF0dHJzXCIsITApfXJldHVybiBlfXJldHVyblwib2JqZWN0XCI9PXR5cGVvZiBhP3RoaXMuZWFjaChmdW5jdGlvbigpe24uZGF0YSh0aGlzLGEpfSk6YXJndW1lbnRzLmxlbmd0aD4xP3RoaXMuZWFjaChmdW5jdGlvbigpe24uZGF0YSh0aGlzLGEsYil9KTpmP1AoZixhLG4uZGF0YShmLGEpKTp2b2lkIDB9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24ucmVtb3ZlRGF0YSh0aGlzLGEpfSl9fSksbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gYT8oYj0oYnx8XCJmeFwiKStcInF1ZXVlXCIsZD1uLl9kYXRhKGEsYiksYyYmKCFkfHxuLmlzQXJyYXkoYyk/ZD1uLl9kYXRhKGEsYixuLm1ha2VBcnJheShjKSk6ZC5wdXNoKGMpKSxkfHxbXSk6dm9pZCAwfSxkZXF1ZXVlOmZ1bmN0aW9uKGEsYil7Yj1ifHxcImZ4XCI7dmFyIGM9bi5xdWV1ZShhLGIpLGQ9Yy5sZW5ndGgsZT1jLnNoaWZ0KCksZj1uLl9xdWV1ZUhvb2tzKGEsYiksZz1mdW5jdGlvbigpe24uZGVxdWV1ZShhLGIpfTtcImlucHJvZ3Jlc3NcIj09PWUmJihlPWMuc2hpZnQoKSxkLS0pLGUmJihcImZ4XCI9PT1iJiZjLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLGRlbGV0ZSBmLnN0b3AsZS5jYWxsKGEsZyxmKSksIWQmJmYmJmYuZW1wdHkuZmlyZSgpfSxfcXVldWVIb29rczpmdW5jdGlvbihhLGIpe3ZhciBjPWIrXCJxdWV1ZUhvb2tzXCI7cmV0dXJuIG4uX2RhdGEoYSxjKXx8bi5fZGF0YShhLGMse2VtcHR5Om4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7bi5fcmVtb3ZlRGF0YShhLGIrXCJxdWV1ZVwiKSxuLl9yZW1vdmVEYXRhKGEsYyl9KX0pfX0pLG4uZm4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihhLGIpe3ZhciBjPTI7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihiPWEsYT1cImZ4XCIsYy0tKSxhcmd1bWVudHMubGVuZ3RoPGM/bi5xdWV1ZSh0aGlzWzBdLGEpOnZvaWQgMD09PWI/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1uLnF1ZXVlKHRoaXMsYSxiKTtuLl9xdWV1ZUhvb2tzKHRoaXMsYSksXCJmeFwiPT09YSYmXCJpbnByb2dyZXNzXCIhPT1jWzBdJiZuLmRlcXVldWUodGhpcyxhKX0pfSxkZXF1ZXVlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmRlcXVldWUodGhpcyxhKX0pfSxjbGVhclF1ZXVlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnF1ZXVlKGF8fFwiZnhcIixbXSl9LHByb21pc2U6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPTEsZT1uLkRlZmVycmVkKCksZj10aGlzLGc9dGhpcy5sZW5ndGgsaD1mdW5jdGlvbigpey0tZHx8ZS5yZXNvbHZlV2l0aChmLFtmXSl9O1wic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9dm9pZCAwKSxhPWF8fFwiZnhcIjt3aGlsZShnLS0pYz1uLl9kYXRhKGZbZ10sYStcInF1ZXVlSG9va3NcIiksYyYmYy5lbXB0eSYmKGQrKyxjLmVtcHR5LmFkZChoKSk7cmV0dXJuIGgoKSxlLnByb21pc2UoYil9fSksZnVuY3Rpb24oKXt2YXIgYTtsLnNocmlua1dyYXBCbG9ja3M9ZnVuY3Rpb24oKXtpZihudWxsIT1hKXJldHVybiBhO2E9ITE7dmFyIGIsYyxlO3JldHVybiBjPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLGMmJmMuc3R5bGU/KGI9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGU9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGUuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmFic29sdXRlO2JvcmRlcjowO3dpZHRoOjA7aGVpZ2h0OjA7dG9wOjA7bGVmdDotOTk5OXB4XCIsYy5hcHBlbmRDaGlsZChlKS5hcHBlbmRDaGlsZChiKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5zdHlsZS56b29tJiYoYi5zdHlsZS5jc3NUZXh0PVwiLXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94Oy1tb3otYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjA7Ym9yZGVyOjA7cGFkZGluZzoxcHg7d2lkdGg6MXB4O3pvb206MVwiLGIuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKS5zdHlsZS53aWR0aD1cIjVweFwiLGE9MyE9PWIub2Zmc2V0V2lkdGgpLGMucmVtb3ZlQ2hpbGQoZSksYSk6dm9pZCAwfX0oKTt2YXIgVD0vWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2UsVT1uZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIitUK1wiKShbYS16JV0qKSRcIixcImlcIiksVj1bXCJUb3BcIixcIlJpZ2h0XCIsXCJCb3R0b21cIixcIkxlZnRcIl0sVz1mdW5jdGlvbihhLGIpe3JldHVybiBhPWJ8fGEsXCJub25lXCI9PT1uLmNzcyhhLFwiZGlzcGxheVwiKXx8IW4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpfTtmdW5jdGlvbiBYKGEsYixjLGQpe3ZhciBlLGY9MSxnPTIwLGg9ZD9mdW5jdGlvbigpe3JldHVybiBkLmN1cigpfTpmdW5jdGlvbigpe3JldHVybiBuLmNzcyhhLGIsXCJcIil9LGk9aCgpLGo9YyYmY1szXXx8KG4uY3NzTnVtYmVyW2JdP1wiXCI6XCJweFwiKSxrPShuLmNzc051bWJlcltiXXx8XCJweFwiIT09aiYmK2kpJiZVLmV4ZWMobi5jc3MoYSxiKSk7aWYoayYma1szXSE9PWope2o9anx8a1szXSxjPWN8fFtdLGs9K2l8fDE7ZG8gZj1mfHxcIi41XCIsay89ZixuLnN0eWxlKGEsYixrK2opO3doaWxlKGYhPT0oZj1oKCkvaSkmJjEhPT1mJiYtLWcpfXJldHVybiBjJiYoaz0ra3x8K2l8fDAsZT1jWzFdP2srKGNbMV0rMSkqY1syXTorY1syXSxkJiYoZC51bml0PWosZC5zdGFydD1rLGQuZW5kPWUpKSxlfXZhciBZPWZ1bmN0aW9uKGEsYixjLGQsZSxmLGcpe3ZhciBoPTAsaT1hLmxlbmd0aCxqPW51bGw9PWM7aWYoXCJvYmplY3RcIj09PW4udHlwZShjKSl7ZT0hMDtmb3IoaCBpbiBjKVkoYSxiLGgsY1toXSwhMCxmLGcpfWVsc2UgaWYodm9pZCAwIT09ZCYmKGU9ITAsbi5pc0Z1bmN0aW9uKGQpfHwoZz0hMCksaiYmKGc/KGIuY2FsbChhLGQpLGI9bnVsbCk6KGo9YixiPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gai5jYWxsKG4oYSksYyl9KSksYikpZm9yKDtpPmg7aCsrKWIoYVtoXSxjLGc/ZDpkLmNhbGwoYVtoXSxoLGIoYVtoXSxjKSkpO3JldHVybiBlP2E6aj9iLmNhbGwoYSk6aT9iKGFbMF0sYyk6Zn0sWj0vXig/OmNoZWNrYm94fHJhZGlvKSQvaSwkPS88KFtcXHc6LV0rKS8sXz0vXiR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pLGFhPS9eXFxzKy8sYmE9XCJhYmJyfGFydGljbGV8YXNpZGV8YXVkaW98YmRpfGNhbnZhc3xkYXRhfGRhdGFsaXN0fGRldGFpbHN8ZGlhbG9nfGZpZ2NhcHRpb258ZmlndXJlfGZvb3RlcnxoZWFkZXJ8aGdyb3VwfG1haW58bWFya3xtZXRlcnxuYXZ8b3V0cHV0fHBpY3R1cmV8cHJvZ3Jlc3N8c2VjdGlvbnxzdW1tYXJ5fHRlbXBsYXRlfHRpbWV8dmlkZW9cIjtmdW5jdGlvbiBjYShhKXt2YXIgYj1iYS5zcGxpdChcInxcIiksYz1hLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtpZihjLmNyZWF0ZUVsZW1lbnQpd2hpbGUoYi5sZW5ndGgpYy5jcmVhdGVFbGVtZW50KGIucG9wKCkpO3JldHVybiBjfSFmdW5jdGlvbigpe3ZhciBhPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxiPWQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLGM9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7YS5pbm5lckhUTUw9XCIgIDxsaW5rLz48dGFibGU+PC90YWJsZT48YSBocmVmPScvYSc+YTwvYT48aW5wdXQgdHlwZT0nY2hlY2tib3gnLz5cIixsLmxlYWRpbmdXaGl0ZXNwYWNlPTM9PT1hLmZpcnN0Q2hpbGQubm9kZVR5cGUsbC50Ym9keT0hYS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRib2R5XCIpLmxlbmd0aCxsLmh0bWxTZXJpYWxpemU9ISFhLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKS5sZW5ndGgsbC5odG1sNUNsb25lPVwiPDpuYXY+PC86bmF2PlwiIT09ZC5jcmVhdGVFbGVtZW50KFwibmF2XCIpLmNsb25lTm9kZSghMCkub3V0ZXJIVE1MLGMudHlwZT1cImNoZWNrYm94XCIsYy5jaGVja2VkPSEwLGIuYXBwZW5kQ2hpbGQoYyksbC5hcHBlbmRDaGVja2VkPWMuY2hlY2tlZCxhLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIixsLm5vQ2xvbmVDaGVja2VkPSEhYS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWUsYi5hcHBlbmRDaGlsZChhKSxjPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGMuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksYy5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJjaGVja2VkXCIpLGMuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidFwiKSxhLmFwcGVuZENoaWxkKGMpLGwuY2hlY2tDbG9uZT1hLmNsb25lTm9kZSghMCkuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuY2hlY2tlZCxsLm5vQ2xvbmVFdmVudD0hIWEuYWRkRXZlbnRMaXN0ZW5lcixhW24uZXhwYW5kb109MSxsLmF0dHJpYnV0ZXM9IWEuZ2V0QXR0cmlidXRlKG4uZXhwYW5kbyl9KCk7dmFyIGRhPXtvcHRpb246WzEsXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsXCI8L3NlbGVjdD5cIl0sbGVnZW5kOlsxLFwiPGZpZWxkc2V0PlwiLFwiPC9maWVsZHNldD5cIl0sYXJlYTpbMSxcIjxtYXA+XCIsXCI8L21hcD5cIl0scGFyYW06WzEsXCI8b2JqZWN0PlwiLFwiPC9vYmplY3Q+XCJdLHRoZWFkOlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSxjb2w6WzIsXCI8dGFibGU+PHRib2R5PjwvdGJvZHk+PGNvbGdyb3VwPlwiLFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSx0ZDpbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLF9kZWZhdWx0OmwuaHRtbFNlcmlhbGl6ZT9bMCxcIlwiLFwiXCJdOlsxLFwiWDxkaXY+XCIsXCI8L2Rpdj5cIl19O2RhLm9wdGdyb3VwPWRhLm9wdGlvbixkYS50Ym9keT1kYS50Zm9vdD1kYS5jb2xncm91cD1kYS5jYXB0aW9uPWRhLnRoZWFkLGRhLnRoPWRhLnRkO2Z1bmN0aW9uIGVhKGEsYil7dmFyIGMsZCxlPTAsZj1cInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKGJ8fFwiKlwiKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5xdWVyeVNlbGVjdG9yQWxsP2EucXVlcnlTZWxlY3RvckFsbChifHxcIipcIik6dm9pZCAwO2lmKCFmKWZvcihmPVtdLGM9YS5jaGlsZE5vZGVzfHxhO251bGwhPShkPWNbZV0pO2UrKykhYnx8bi5ub2RlTmFtZShkLGIpP2YucHVzaChkKTpuLm1lcmdlKGYsZWEoZCxiKSk7cmV0dXJuIHZvaWQgMD09PWJ8fGImJm4ubm9kZU5hbWUoYSxiKT9uLm1lcmdlKFthXSxmKTpmfWZ1bmN0aW9uIGZhKGEsYil7Zm9yKHZhciBjLGQ9MDtudWxsIT0oYz1hW2RdKTtkKyspbi5fZGF0YShjLFwiZ2xvYmFsRXZhbFwiLCFifHxuLl9kYXRhKGJbZF0sXCJnbG9iYWxFdmFsXCIpKX12YXIgZ2E9Lzx8JiM/XFx3KzsvLGhhPS88dGJvZHkvaTtmdW5jdGlvbiBpYShhKXtaLnRlc3QoYS50eXBlKSYmKGEuZGVmYXVsdENoZWNrZWQ9YS5jaGVja2VkKX1mdW5jdGlvbiBqYShhLGIsYyxkLGUpe2Zvcih2YXIgZixnLGgsaSxqLGssbSxvPWEubGVuZ3RoLHA9Y2EoYikscT1bXSxyPTA7bz5yO3IrKylpZihnPWFbcl0sZ3x8MD09PWcpaWYoXCJvYmplY3RcIj09PW4udHlwZShnKSluLm1lcmdlKHEsZy5ub2RlVHlwZT9bZ106Zyk7ZWxzZSBpZihnYS50ZXN0KGcpKXtpPWl8fHAuYXBwZW5kQ2hpbGQoYi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxqPSgkLmV4ZWMoZyl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLG09ZGFbal18fGRhLl9kZWZhdWx0LGkuaW5uZXJIVE1MPW1bMV0rbi5odG1sUHJlZmlsdGVyKGcpK21bMl0sZj1tWzBdO3doaWxlKGYtLSlpPWkubGFzdENoaWxkO2lmKCFsLmxlYWRpbmdXaGl0ZXNwYWNlJiZhYS50ZXN0KGcpJiZxLnB1c2goYi5jcmVhdGVUZXh0Tm9kZShhYS5leGVjKGcpWzBdKSksIWwudGJvZHkpe2c9XCJ0YWJsZVwiIT09anx8aGEudGVzdChnKT9cIjx0YWJsZT5cIiE9PW1bMV18fGhhLnRlc3QoZyk/MDppOmkuZmlyc3RDaGlsZCxmPWcmJmcuY2hpbGROb2Rlcy5sZW5ndGg7d2hpbGUoZi0tKW4ubm9kZU5hbWUoaz1nLmNoaWxkTm9kZXNbZl0sXCJ0Ym9keVwiKSYmIWsuY2hpbGROb2Rlcy5sZW5ndGgmJmcucmVtb3ZlQ2hpbGQoayl9bi5tZXJnZShxLGkuY2hpbGROb2RlcyksaS50ZXh0Q29udGVudD1cIlwiO3doaWxlKGkuZmlyc3RDaGlsZClpLnJlbW92ZUNoaWxkKGkuZmlyc3RDaGlsZCk7aT1wLmxhc3RDaGlsZH1lbHNlIHEucHVzaChiLmNyZWF0ZVRleHROb2RlKGcpKTtpJiZwLnJlbW92ZUNoaWxkKGkpLGwuYXBwZW5kQ2hlY2tlZHx8bi5ncmVwKGVhKHEsXCJpbnB1dFwiKSxpYSkscj0wO3doaWxlKGc9cVtyKytdKWlmKGQmJm4uaW5BcnJheShnLGQpPi0xKWUmJmUucHVzaChnKTtlbHNlIGlmKGg9bi5jb250YWlucyhnLm93bmVyRG9jdW1lbnQsZyksaT1lYShwLmFwcGVuZENoaWxkKGcpLFwic2NyaXB0XCIpLGgmJmZhKGkpLGMpe2Y9MDt3aGlsZShnPWlbZisrXSlfLnRlc3QoZy50eXBlfHxcIlwiKSYmYy5wdXNoKGcpfXJldHVybiBpPW51bGwscH0hZnVuY3Rpb24oKXt2YXIgYixjLGU9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2ZvcihiIGlue3N1Ym1pdDohMCxjaGFuZ2U6ITAsZm9jdXNpbjohMH0pYz1cIm9uXCIrYiwobFtiXT1jIGluIGEpfHwoZS5zZXRBdHRyaWJ1dGUoYyxcInRcIiksbFtiXT1lLmF0dHJpYnV0ZXNbY10uZXhwYW5kbz09PSExKTtlPW51bGx9KCk7dmFyIGthPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhKSQvaSxsYT0vXmtleS8sbWE9L14oPzptb3VzZXxwb2ludGVyfGNvbnRleHRtZW51fGRyYWd8ZHJvcCl8Y2xpY2svLG5hPS9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLyxvYT0vXihbXi5dKikoPzpcXC4oLispfCkvO2Z1bmN0aW9uIHBhKCl7cmV0dXJuITB9ZnVuY3Rpb24gcWEoKXtyZXR1cm4hMX1mdW5jdGlvbiByYSgpe3RyeXtyZXR1cm4gZC5hY3RpdmVFbGVtZW50fWNhdGNoKGEpe319ZnVuY3Rpb24gc2EoYSxiLGMsZCxlLGYpe3ZhciBnLGg7aWYoXCJvYmplY3RcIj09dHlwZW9mIGIpe1wic3RyaW5nXCIhPXR5cGVvZiBjJiYoZD1kfHxjLGM9dm9pZCAwKTtmb3IoaCBpbiBiKXNhKGEsaCxjLGQsYltoXSxmKTtyZXR1cm4gYX1pZihudWxsPT1kJiZudWxsPT1lPyhlPWMsZD1jPXZvaWQgMCk6bnVsbD09ZSYmKFwic3RyaW5nXCI9PXR5cGVvZiBjPyhlPWQsZD12b2lkIDApOihlPWQsZD1jLGM9dm9pZCAwKSksZT09PSExKWU9cWE7ZWxzZSBpZighZSlyZXR1cm4gYTtyZXR1cm4gMT09PWYmJihnPWUsZT1mdW5jdGlvbihhKXtyZXR1cm4gbigpLm9mZihhKSxnLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sZS5ndWlkPWcuZ3VpZHx8KGcuZ3VpZD1uLmd1aWQrKykpLGEuZWFjaChmdW5jdGlvbigpe24uZXZlbnQuYWRkKHRoaXMsYixlLGQsYyl9KX1uLmV2ZW50PXtnbG9iYWw6e30sYWRkOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxvLHAscSxyPW4uX2RhdGEoYSk7aWYocil7Yy5oYW5kbGVyJiYoaT1jLGM9aS5oYW5kbGVyLGU9aS5zZWxlY3RvciksYy5ndWlkfHwoYy5ndWlkPW4uZ3VpZCsrKSwoZz1yLmV2ZW50cyl8fChnPXIuZXZlbnRzPXt9KSwoaz1yLmhhbmRsZSl8fChrPXIuaGFuZGxlPWZ1bmN0aW9uKGEpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBufHxhJiZuLmV2ZW50LnRyaWdnZXJlZD09PWEudHlwZT92b2lkIDA6bi5ldmVudC5kaXNwYXRjaC5hcHBseShrLmVsZW0sYXJndW1lbnRzKX0say5lbGVtPWEpLGI9KGJ8fFwiXCIpLm1hdGNoKEcpfHxbXCJcIl0saD1iLmxlbmd0aDt3aGlsZShoLS0pZj1vYS5leGVjKGJbaF0pfHxbXSxvPXE9ZlsxXSxwPShmWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG8mJihqPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30sbz0oZT9qLmRlbGVnYXRlVHlwZTpqLmJpbmRUeXBlKXx8byxqPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30sbD1uLmV4dGVuZCh7dHlwZTpvLG9yaWdUeXBlOnEsZGF0YTpkLGhhbmRsZXI6YyxndWlkOmMuZ3VpZCxzZWxlY3RvcjplLG5lZWRzQ29udGV4dDplJiZuLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoZSksbmFtZXNwYWNlOnAuam9pbihcIi5cIil9LGkpLChtPWdbb10pfHwobT1nW29dPVtdLG0uZGVsZWdhdGVDb3VudD0wLGouc2V0dXAmJmouc2V0dXAuY2FsbChhLGQscCxrKSE9PSExfHwoYS5hZGRFdmVudExpc3RlbmVyP2EuYWRkRXZlbnRMaXN0ZW5lcihvLGssITEpOmEuYXR0YWNoRXZlbnQmJmEuYXR0YWNoRXZlbnQoXCJvblwiK28saykpKSxqLmFkZCYmKGouYWRkLmNhbGwoYSxsKSxsLmhhbmRsZXIuZ3VpZHx8KGwuaGFuZGxlci5ndWlkPWMuZ3VpZCkpLGU/bS5zcGxpY2UobS5kZWxlZ2F0ZUNvdW50KyssMCxsKTptLnB1c2gobCksbi5ldmVudC5nbG9iYWxbb109ITApO2E9bnVsbH19LHJlbW92ZTpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbyxwLHEscj1uLmhhc0RhdGEoYSkmJm4uX2RhdGEoYSk7aWYociYmKGs9ci5ldmVudHMpKXtiPShifHxcIlwiKS5tYXRjaChHKXx8W1wiXCJdLGo9Yi5sZW5ndGg7d2hpbGUoai0tKWlmKGg9b2EuZXhlYyhiW2pdKXx8W10sbz1xPWhbMV0scD0oaFsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxvKXtsPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30sbz0oZD9sLmRlbGVnYXRlVHlwZTpsLmJpbmRUeXBlKXx8byxtPWtbb118fFtdLGg9aFsyXSYmbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Auam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpLGk9Zj1tLmxlbmd0aDt3aGlsZShmLS0pZz1tW2ZdLCFlJiZxIT09Zy5vcmlnVHlwZXx8YyYmYy5ndWlkIT09Zy5ndWlkfHxoJiYhaC50ZXN0KGcubmFtZXNwYWNlKXx8ZCYmZCE9PWcuc2VsZWN0b3ImJihcIioqXCIhPT1kfHwhZy5zZWxlY3Rvcil8fChtLnNwbGljZShmLDEpLGcuc2VsZWN0b3ImJm0uZGVsZWdhdGVDb3VudC0tLGwucmVtb3ZlJiZsLnJlbW92ZS5jYWxsKGEsZykpO2kmJiFtLmxlbmd0aCYmKGwudGVhcmRvd24mJmwudGVhcmRvd24uY2FsbChhLHAsci5oYW5kbGUpIT09ITF8fG4ucmVtb3ZlRXZlbnQoYSxvLHIuaGFuZGxlKSxkZWxldGUga1tvXSl9ZWxzZSBmb3IobyBpbiBrKW4uZXZlbnQucmVtb3ZlKGEsbytiW2pdLGMsZCwhMCk7bi5pc0VtcHR5T2JqZWN0KGspJiYoZGVsZXRlIHIuaGFuZGxlLG4uX3JlbW92ZURhdGEoYSxcImV2ZW50c1wiKSl9fSx0cmlnZ2VyOmZ1bmN0aW9uKGIsYyxlLGYpe3ZhciBnLGgsaSxqLGwsbSxvLHA9W2V8fGRdLHE9ay5jYWxsKGIsXCJ0eXBlXCIpP2IudHlwZTpiLHI9ay5jYWxsKGIsXCJuYW1lc3BhY2VcIik/Yi5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpOltdO2lmKGk9bT1lPWV8fGQsMyE9PWUubm9kZVR5cGUmJjghPT1lLm5vZGVUeXBlJiYhbmEudGVzdChxK24uZXZlbnQudHJpZ2dlcmVkKSYmKHEuaW5kZXhPZihcIi5cIik+LTEmJihyPXEuc3BsaXQoXCIuXCIpLHE9ci5zaGlmdCgpLHIuc29ydCgpKSxoPXEuaW5kZXhPZihcIjpcIik8MCYmXCJvblwiK3EsYj1iW24uZXhwYW5kb10/YjpuZXcgbi5FdmVudChxLFwib2JqZWN0XCI9PXR5cGVvZiBiJiZiKSxiLmlzVHJpZ2dlcj1mPzI6MyxiLm5hbWVzcGFjZT1yLmpvaW4oXCIuXCIpLGIucm5hbWVzcGFjZT1iLm5hbWVzcGFjZT9uZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrci5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIik6bnVsbCxiLnJlc3VsdD12b2lkIDAsYi50YXJnZXR8fChiLnRhcmdldD1lKSxjPW51bGw9PWM/W2JdOm4ubWFrZUFycmF5KGMsW2JdKSxsPW4uZXZlbnQuc3BlY2lhbFtxXXx8e30sZnx8IWwudHJpZ2dlcnx8bC50cmlnZ2VyLmFwcGx5KGUsYykhPT0hMSkpe2lmKCFmJiYhbC5ub0J1YmJsZSYmIW4uaXNXaW5kb3coZSkpe2ZvcihqPWwuZGVsZWdhdGVUeXBlfHxxLG5hLnRlc3QoaitxKXx8KGk9aS5wYXJlbnROb2RlKTtpO2k9aS5wYXJlbnROb2RlKXAucHVzaChpKSxtPWk7bT09PShlLm93bmVyRG9jdW1lbnR8fGQpJiZwLnB1c2gobS5kZWZhdWx0Vmlld3x8bS5wYXJlbnRXaW5kb3d8fGEpfW89MDt3aGlsZSgoaT1wW28rK10pJiYhYi5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWIudHlwZT1vPjE/ajpsLmJpbmRUeXBlfHxxLGc9KG4uX2RhdGEoaSxcImV2ZW50c1wiKXx8e30pW2IudHlwZV0mJm4uX2RhdGEoaSxcImhhbmRsZVwiKSxnJiZnLmFwcGx5KGksYyksZz1oJiZpW2hdLGcmJmcuYXBwbHkmJk0oaSkmJihiLnJlc3VsdD1nLmFwcGx5KGksYyksYi5yZXN1bHQ9PT0hMSYmYi5wcmV2ZW50RGVmYXVsdCgpKTtpZihiLnR5cGU9cSwhZiYmIWIuaXNEZWZhdWx0UHJldmVudGVkKCkmJighbC5fZGVmYXVsdHx8bC5fZGVmYXVsdC5hcHBseShwLnBvcCgpLGMpPT09ITEpJiZNKGUpJiZoJiZlW3FdJiYhbi5pc1dpbmRvdyhlKSl7bT1lW2hdLG0mJihlW2hdPW51bGwpLG4uZXZlbnQudHJpZ2dlcmVkPXE7dHJ5e2VbcV0oKX1jYXRjaChzKXt9bi5ldmVudC50cmlnZ2VyZWQ9dm9pZCAwLG0mJihlW2hdPW0pfXJldHVybiBiLnJlc3VsdH19LGRpc3BhdGNoOmZ1bmN0aW9uKGEpe2E9bi5ldmVudC5maXgoYSk7dmFyIGIsYyxkLGYsZyxoPVtdLGk9ZS5jYWxsKGFyZ3VtZW50cyksaj0obi5fZGF0YSh0aGlzLFwiZXZlbnRzXCIpfHx7fSlbYS50eXBlXXx8W10saz1uLmV2ZW50LnNwZWNpYWxbYS50eXBlXXx8e307aWYoaVswXT1hLGEuZGVsZWdhdGVUYXJnZXQ9dGhpcywhay5wcmVEaXNwYXRjaHx8ay5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsYSkhPT0hMSl7aD1uLmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcyxhLGopLGI9MDt3aGlsZSgoZj1oW2IrK10pJiYhYS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKXthLmN1cnJlbnRUYXJnZXQ9Zi5lbGVtLGM9MDt3aGlsZSgoZz1mLmhhbmRsZXJzW2MrK10pJiYhYS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKWEucm5hbWVzcGFjZSYmIWEucm5hbWVzcGFjZS50ZXN0KGcubmFtZXNwYWNlKXx8KGEuaGFuZGxlT2JqPWcsYS5kYXRhPWcuZGF0YSxkPSgobi5ldmVudC5zcGVjaWFsW2cub3JpZ1R5cGVdfHx7fSkuaGFuZGxlfHxnLmhhbmRsZXIpLmFwcGx5KGYuZWxlbSxpKSx2b2lkIDAhPT1kJiYoYS5yZXN1bHQ9ZCk9PT0hMSYmKGEucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpKSl9cmV0dXJuIGsucG9zdERpc3BhdGNoJiZrLnBvc3REaXNwYXRjaC5jYWxsKHRoaXMsYSksYS5yZXN1bHR9fSxoYW5kbGVyczpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmLGc9W10saD1iLmRlbGVnYXRlQ291bnQsaT1hLnRhcmdldDtpZihoJiZpLm5vZGVUeXBlJiYoXCJjbGlja1wiIT09YS50eXBlfHxpc05hTihhLmJ1dHRvbil8fGEuYnV0dG9uPDEpKWZvcig7aSE9dGhpcztpPWkucGFyZW50Tm9kZXx8dGhpcylpZigxPT09aS5ub2RlVHlwZSYmKGkuZGlzYWJsZWQhPT0hMHx8XCJjbGlja1wiIT09YS50eXBlKSl7Zm9yKGQ9W10sYz0wO2g+YztjKyspZj1iW2NdLGU9Zi5zZWxlY3RvcitcIiBcIix2b2lkIDA9PT1kW2VdJiYoZFtlXT1mLm5lZWRzQ29udGV4dD9uKGUsdGhpcykuaW5kZXgoaSk+LTE6bi5maW5kKGUsdGhpcyxudWxsLFtpXSkubGVuZ3RoKSxkW2VdJiZkLnB1c2goZik7ZC5sZW5ndGgmJmcucHVzaCh7ZWxlbTppLGhhbmRsZXJzOmR9KX1yZXR1cm4gaDxiLmxlbmd0aCYmZy5wdXNoKHtlbGVtOnRoaXMsaGFuZGxlcnM6Yi5zbGljZShoKX0pLGd9LGZpeDpmdW5jdGlvbihhKXtpZihhW24uZXhwYW5kb10pcmV0dXJuIGE7dmFyIGIsYyxlLGY9YS50eXBlLGc9YSxoPXRoaXMuZml4SG9va3NbZl07aHx8KHRoaXMuZml4SG9va3NbZl09aD1tYS50ZXN0KGYpP3RoaXMubW91c2VIb29rczpsYS50ZXN0KGYpP3RoaXMua2V5SG9va3M6e30pLGU9aC5wcm9wcz90aGlzLnByb3BzLmNvbmNhdChoLnByb3BzKTp0aGlzLnByb3BzLGE9bmV3IG4uRXZlbnQoZyksYj1lLmxlbmd0aDt3aGlsZShiLS0pYz1lW2JdLGFbY109Z1tjXTtyZXR1cm4gYS50YXJnZXR8fChhLnRhcmdldD1nLnNyY0VsZW1lbnR8fGQpLDM9PT1hLnRhcmdldC5ub2RlVHlwZSYmKGEudGFyZ2V0PWEudGFyZ2V0LnBhcmVudE5vZGUpLGEubWV0YUtleT0hIWEubWV0YUtleSxoLmZpbHRlcj9oLmZpbHRlcihhLGcpOmF9LHByb3BzOlwiYWx0S2V5IGJ1YmJsZXMgY2FuY2VsYWJsZSBjdHJsS2V5IGN1cnJlbnRUYXJnZXQgZGV0YWlsIGV2ZW50UGhhc2UgbWV0YUtleSByZWxhdGVkVGFyZ2V0IHNoaWZ0S2V5IHRhcmdldCB0aW1lU3RhbXAgdmlldyB3aGljaFwiLnNwbGl0KFwiIFwiKSxmaXhIb29rczp7fSxrZXlIb29rczp7cHJvcHM6XCJjaGFyIGNoYXJDb2RlIGtleSBrZXlDb2RlXCIuc3BsaXQoXCIgXCIpLGZpbHRlcjpmdW5jdGlvbihhLGIpe3JldHVybiBudWxsPT1hLndoaWNoJiYoYS53aGljaD1udWxsIT1iLmNoYXJDb2RlP2IuY2hhckNvZGU6Yi5rZXlDb2RlKSxhfX0sbW91c2VIb29rczp7cHJvcHM6XCJidXR0b24gYnV0dG9ucyBjbGllbnRYIGNsaWVudFkgZnJvbUVsZW1lbnQgb2Zmc2V0WCBvZmZzZXRZIHBhZ2VYIHBhZ2VZIHNjcmVlblggc2NyZWVuWSB0b0VsZW1lbnRcIi5zcGxpdChcIiBcIiksZmlsdGVyOmZ1bmN0aW9uKGEsYil7dmFyIGMsZSxmLGc9Yi5idXR0b24saD1iLmZyb21FbGVtZW50O3JldHVybiBudWxsPT1hLnBhZ2VYJiZudWxsIT1iLmNsaWVudFgmJihlPWEudGFyZ2V0Lm93bmVyRG9jdW1lbnR8fGQsZj1lLmRvY3VtZW50RWxlbWVudCxjPWUuYm9keSxhLnBhZ2VYPWIuY2xpZW50WCsoZiYmZi5zY3JvbGxMZWZ0fHxjJiZjLnNjcm9sbExlZnR8fDApLShmJiZmLmNsaWVudExlZnR8fGMmJmMuY2xpZW50TGVmdHx8MCksYS5wYWdlWT1iLmNsaWVudFkrKGYmJmYuc2Nyb2xsVG9wfHxjJiZjLnNjcm9sbFRvcHx8MCktKGYmJmYuY2xpZW50VG9wfHxjJiZjLmNsaWVudFRvcHx8MCkpLCFhLnJlbGF0ZWRUYXJnZXQmJmgmJihhLnJlbGF0ZWRUYXJnZXQ9aD09PWEudGFyZ2V0P2IudG9FbGVtZW50OmgpLGEud2hpY2h8fHZvaWQgMD09PWd8fChhLndoaWNoPTEmZz8xOjImZz8zOjQmZz8yOjApLGF9fSxzcGVjaWFsOntsb2FkOntub0J1YmJsZTohMH0sZm9jdXM6e3RyaWdnZXI6ZnVuY3Rpb24oKXtpZih0aGlzIT09cmEoKSYmdGhpcy5mb2N1cyl0cnl7cmV0dXJuIHRoaXMuZm9jdXMoKSwhMX1jYXRjaChhKXt9fSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c2luXCJ9LGJsdXI6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcz09PXJhKCkmJnRoaXMuYmx1cj8odGhpcy5ibHVyKCksITEpOnZvaWQgMH0sZGVsZWdhdGVUeXBlOlwiZm9jdXNvdXRcIn0sY2xpY2s6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gbi5ub2RlTmFtZSh0aGlzLFwiaW5wdXRcIikmJlwiY2hlY2tib3hcIj09PXRoaXMudHlwZSYmdGhpcy5jbGljaz8odGhpcy5jbGljaygpLCExKTp2b2lkIDB9LF9kZWZhdWx0OmZ1bmN0aW9uKGEpe3JldHVybiBuLm5vZGVOYW1lKGEudGFyZ2V0LFwiYVwiKX19LGJlZm9yZXVubG9hZDp7cG9zdERpc3BhdGNoOmZ1bmN0aW9uKGEpe3ZvaWQgMCE9PWEucmVzdWx0JiZhLm9yaWdpbmFsRXZlbnQmJihhLm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWU9YS5yZXN1bHQpfX19LHNpbXVsYXRlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1uLmV4dGVuZChuZXcgbi5FdmVudCxjLHt0eXBlOmEsaXNTaW11bGF0ZWQ6ITB9KTtuLmV2ZW50LnRyaWdnZXIoZCxudWxsLGIpLGQuaXNEZWZhdWx0UHJldmVudGVkKCkmJmMucHJldmVudERlZmF1bHQoKX19LG4ucmVtb3ZlRXZlbnQ9ZC5yZW1vdmVFdmVudExpc3RlbmVyP2Z1bmN0aW9uKGEsYixjKXthLnJlbW92ZUV2ZW50TGlzdGVuZXImJmEucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLGMpfTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9XCJvblwiK2I7YS5kZXRhY2hFdmVudCYmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBhW2RdJiYoYVtkXT1udWxsKSxhLmRldGFjaEV2ZW50KGQsYykpfSxuLkV2ZW50PWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBuLkV2ZW50PyhhJiZhLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1hLHRoaXMudHlwZT1hLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9YS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1hLmRlZmF1bHRQcmV2ZW50ZWQmJmEucmV0dXJuVmFsdWU9PT0hMT9wYTpxYSk6dGhpcy50eXBlPWEsYiYmbi5leHRlbmQodGhpcyxiKSx0aGlzLnRpbWVTdGFtcD1hJiZhLnRpbWVTdGFtcHx8bi5ub3coKSx2b2lkKHRoaXNbbi5leHBhbmRvXT0hMCkpOm5ldyBuLkV2ZW50KGEsYil9LG4uRXZlbnQucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpuLkV2ZW50LGlzRGVmYXVsdFByZXZlbnRlZDpxYSxpc1Byb3BhZ2F0aW9uU3RvcHBlZDpxYSxpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDpxYSxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1wYSxhJiYoYS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6YS5yZXR1cm5WYWx1ZT0hMSl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPXBhLGEmJiF0aGlzLmlzU2ltdWxhdGVkJiYoYS5zdG9wUHJvcGFnYXRpb24mJmEuc3RvcFByb3BhZ2F0aW9uKCksYS5jYW5jZWxCdWJibGU9ITApfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD1wYSxhJiZhLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiYmYS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0sbi5lYWNoKHttb3VzZWVudGVyOlwibW91c2VvdmVyXCIsbW91c2VsZWF2ZTpcIm1vdXNlb3V0XCIscG9pbnRlcmVudGVyOlwicG9pbnRlcm92ZXJcIixwb2ludGVybGVhdmU6XCJwb2ludGVyb3V0XCJ9LGZ1bmN0aW9uKGEsYil7bi5ldmVudC5zcGVjaWFsW2FdPXtkZWxlZ2F0ZVR5cGU6YixiaW5kVHlwZTpiLGhhbmRsZTpmdW5jdGlvbihhKXt2YXIgYyxkPXRoaXMsZT1hLnJlbGF0ZWRUYXJnZXQsZj1hLmhhbmRsZU9iajtyZXR1cm4gZSYmKGU9PT1kfHxuLmNvbnRhaW5zKGQsZSkpfHwoYS50eXBlPWYub3JpZ1R5cGUsYz1mLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGEudHlwZT1iKSxjfX19KSxsLnN1Ym1pdHx8KG4uZXZlbnQuc3BlY2lhbC5zdWJtaXQ9e3NldHVwOmZ1bmN0aW9uKCl7cmV0dXJuIG4ubm9kZU5hbWUodGhpcyxcImZvcm1cIik/ITE6dm9pZCBuLmV2ZW50LmFkZCh0aGlzLFwiY2xpY2suX3N1Ym1pdCBrZXlwcmVzcy5fc3VibWl0XCIsZnVuY3Rpb24oYSl7dmFyIGI9YS50YXJnZXQsYz1uLm5vZGVOYW1lKGIsXCJpbnB1dFwiKXx8bi5ub2RlTmFtZShiLFwiYnV0dG9uXCIpP24ucHJvcChiLFwiZm9ybVwiKTp2b2lkIDA7YyYmIW4uX2RhdGEoYyxcInN1Ym1pdFwiKSYmKG4uZXZlbnQuYWRkKGMsXCJzdWJtaXQuX3N1Ym1pdFwiLGZ1bmN0aW9uKGEpe2EuX3N1Ym1pdEJ1YmJsZT0hMH0pLG4uX2RhdGEoYyxcInN1Ym1pdFwiLCEwKSl9KX0scG9zdERpc3BhdGNoOmZ1bmN0aW9uKGEpe2EuX3N1Ym1pdEJ1YmJsZSYmKGRlbGV0ZSBhLl9zdWJtaXRCdWJibGUsdGhpcy5wYXJlbnROb2RlJiYhYS5pc1RyaWdnZXImJm4uZXZlbnQuc2ltdWxhdGUoXCJzdWJtaXRcIix0aGlzLnBhcmVudE5vZGUsYSkpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3JldHVybiBuLm5vZGVOYW1lKHRoaXMsXCJmb3JtXCIpPyExOnZvaWQgbi5ldmVudC5yZW1vdmUodGhpcyxcIi5fc3VibWl0XCIpfX0pLGwuY2hhbmdlfHwobi5ldmVudC5zcGVjaWFsLmNoYW5nZT17c2V0dXA6ZnVuY3Rpb24oKXtyZXR1cm4ga2EudGVzdCh0aGlzLm5vZGVOYW1lKT8oXCJjaGVja2JveFwiIT09dGhpcy50eXBlJiZcInJhZGlvXCIhPT10aGlzLnR5cGV8fChuLmV2ZW50LmFkZCh0aGlzLFwicHJvcGVydHljaGFuZ2UuX2NoYW5nZVwiLGZ1bmN0aW9uKGEpe1wiY2hlY2tlZFwiPT09YS5vcmlnaW5hbEV2ZW50LnByb3BlcnR5TmFtZSYmKHRoaXMuX2p1c3RDaGFuZ2VkPSEwKX0pLG4uZXZlbnQuYWRkKHRoaXMsXCJjbGljay5fY2hhbmdlXCIsZnVuY3Rpb24oYSl7dGhpcy5fanVzdENoYW5nZWQmJiFhLmlzVHJpZ2dlciYmKHRoaXMuX2p1c3RDaGFuZ2VkPSExKSxuLmV2ZW50LnNpbXVsYXRlKFwiY2hhbmdlXCIsdGhpcyxhKX0pKSwhMSk6dm9pZCBuLmV2ZW50LmFkZCh0aGlzLFwiYmVmb3JlYWN0aXZhdGUuX2NoYW5nZVwiLGZ1bmN0aW9uKGEpe3ZhciBiPWEudGFyZ2V0O2thLnRlc3QoYi5ub2RlTmFtZSkmJiFuLl9kYXRhKGIsXCJjaGFuZ2VcIikmJihuLmV2ZW50LmFkZChiLFwiY2hhbmdlLl9jaGFuZ2VcIixmdW5jdGlvbihhKXshdGhpcy5wYXJlbnROb2RlfHxhLmlzU2ltdWxhdGVkfHxhLmlzVHJpZ2dlcnx8bi5ldmVudC5zaW11bGF0ZShcImNoYW5nZVwiLHRoaXMucGFyZW50Tm9kZSxhKX0pLG4uX2RhdGEoYixcImNoYW5nZVwiLCEwKSl9KX0saGFuZGxlOmZ1bmN0aW9uKGEpe3ZhciBiPWEudGFyZ2V0O3JldHVybiB0aGlzIT09Ynx8YS5pc1NpbXVsYXRlZHx8YS5pc1RyaWdnZXJ8fFwicmFkaW9cIiE9PWIudHlwZSYmXCJjaGVja2JveFwiIT09Yi50eXBlP2EuaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpOnZvaWQgMH0sdGVhcmRvd246ZnVuY3Rpb24oKXtyZXR1cm4gbi5ldmVudC5yZW1vdmUodGhpcyxcIi5fY2hhbmdlXCIpLCFrYS50ZXN0KHRoaXMubm9kZU5hbWUpfX0pLGwuZm9jdXNpbnx8bi5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oYSxiKXt2YXIgYz1mdW5jdGlvbihhKXtuLmV2ZW50LnNpbXVsYXRlKGIsYS50YXJnZXQsbi5ldmVudC5maXgoYSkpfTtuLmV2ZW50LnNwZWNpYWxbYl09e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9bi5fZGF0YShkLGIpO2V8fGQuYWRkRXZlbnRMaXN0ZW5lcihhLGMsITApLG4uX2RhdGEoZCxiLChlfHwwKSsxKX0sdGVhcmRvd246ZnVuY3Rpb24oKXt2YXIgZD10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsZT1uLl9kYXRhKGQsYiktMTtlP24uX2RhdGEoZCxiLGUpOihkLnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxjLCEwKSxuLl9yZW1vdmVEYXRhKGQsYikpfX19KSxuLmZuLmV4dGVuZCh7b246ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHNhKHRoaXMsYSxiLGMsZCl9LG9uZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gc2EodGhpcyxhLGIsYyxkLDEpfSxvZmY6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU7aWYoYSYmYS5wcmV2ZW50RGVmYXVsdCYmYS5oYW5kbGVPYmopcmV0dXJuIGQ9YS5oYW5kbGVPYmosbihhLmRlbGVnYXRlVGFyZ2V0KS5vZmYoZC5uYW1lc3BhY2U/ZC5vcmlnVHlwZStcIi5cIitkLm5hbWVzcGFjZTpkLm9yaWdUeXBlLGQuc2VsZWN0b3IsZC5oYW5kbGVyKSx0aGlzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBhKXtmb3IoZSBpbiBhKXRoaXMub2ZmKGUsYixhW2VdKTtyZXR1cm4gdGhpc31yZXR1cm4gYiE9PSExJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBifHwoYz1iLGI9dm9pZCAwKSxjPT09ITEmJihjPXFhKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LnJlbW92ZSh0aGlzLGEsYyxiKX0pfSx0cmlnZ2VyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24uZXZlbnQudHJpZ2dlcihhLGIsdGhpcyl9KX0sdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzWzBdO3JldHVybiBjP24uZXZlbnQudHJpZ2dlcihhLGIsYywhMCk6dm9pZCAwfX0pO3ZhciB0YT0vIGpRdWVyeVxcZCs9XCIoPzpudWxsfFxcZCspXCIvZyx1YT1uZXcgUmVnRXhwKFwiPCg/OlwiK2JhK1wiKVtcXFxccy8+XVwiLFwiaVwiKSx2YT0vPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbXFx3Oi1dKylbXj5dKilcXC8+L2dpLHdhPS88c2NyaXB0fDxzdHlsZXw8bGluay9pLHhhPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2kseWE9L150cnVlXFwvKC4qKS8semE9L15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nLEFhPWNhKGQpLEJhPUFhLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7ZnVuY3Rpb24gQ2EoYSxiKXtyZXR1cm4gbi5ub2RlTmFtZShhLFwidGFibGVcIikmJm4ubm9kZU5hbWUoMTEhPT1iLm5vZGVUeXBlP2I6Yi5maXJzdENoaWxkLFwidHJcIik/YS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRib2R5XCIpWzBdfHxhLmFwcGVuZENoaWxkKGEub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIikpOmF9ZnVuY3Rpb24gRGEoYSl7cmV0dXJuIGEudHlwZT0obnVsbCE9PW4uZmluZC5hdHRyKGEsXCJ0eXBlXCIpKStcIi9cIithLnR5cGUsYX1mdW5jdGlvbiBFYShhKXt2YXIgYj15YS5leGVjKGEudHlwZSk7cmV0dXJuIGI/YS50eXBlPWJbMV06YS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGF9ZnVuY3Rpb24gRmEoYSxiKXtpZigxPT09Yi5ub2RlVHlwZSYmbi5oYXNEYXRhKGEpKXt2YXIgYyxkLGUsZj1uLl9kYXRhKGEpLGc9bi5fZGF0YShiLGYpLGg9Zi5ldmVudHM7aWYoaCl7ZGVsZXRlIGcuaGFuZGxlLGcuZXZlbnRzPXt9O2ZvcihjIGluIGgpZm9yKGQ9MCxlPWhbY10ubGVuZ3RoO2U+ZDtkKyspbi5ldmVudC5hZGQoYixjLGhbY11bZF0pfWcuZGF0YSYmKGcuZGF0YT1uLmV4dGVuZCh7fSxnLmRhdGEpKX19ZnVuY3Rpb24gR2EoYSxiKXt2YXIgYyxkLGU7aWYoMT09PWIubm9kZVR5cGUpe2lmKGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLCFsLm5vQ2xvbmVFdmVudCYmYltuLmV4cGFuZG9dKXtlPW4uX2RhdGEoYik7Zm9yKGQgaW4gZS5ldmVudHMpbi5yZW1vdmVFdmVudChiLGQsZS5oYW5kbGUpO2IucmVtb3ZlQXR0cmlidXRlKG4uZXhwYW5kbyl9XCJzY3JpcHRcIj09PWMmJmIudGV4dCE9PWEudGV4dD8oRGEoYikudGV4dD1hLnRleHQsRWEoYikpOlwib2JqZWN0XCI9PT1jPyhiLnBhcmVudE5vZGUmJihiLm91dGVySFRNTD1hLm91dGVySFRNTCksbC5odG1sNUNsb25lJiZhLmlubmVySFRNTCYmIW4udHJpbShiLmlubmVySFRNTCkmJihiLmlubmVySFRNTD1hLmlubmVySFRNTCkpOlwiaW5wdXRcIj09PWMmJloudGVzdChhLnR5cGUpPyhiLmRlZmF1bHRDaGVja2VkPWIuY2hlY2tlZD1hLmNoZWNrZWQsYi52YWx1ZSE9PWEudmFsdWUmJihiLnZhbHVlPWEudmFsdWUpKTpcIm9wdGlvblwiPT09Yz9iLmRlZmF1bHRTZWxlY3RlZD1iLnNlbGVjdGVkPWEuZGVmYXVsdFNlbGVjdGVkOlwiaW5wdXRcIiE9PWMmJlwidGV4dGFyZWFcIiE9PWN8fChiLmRlZmF1bHRWYWx1ZT1hLmRlZmF1bHRWYWx1ZSl9fWZ1bmN0aW9uIEhhKGEsYixjLGQpe2I9Zi5hcHBseShbXSxiKTt2YXIgZSxnLGgsaSxqLGssbT0wLG89YS5sZW5ndGgscD1vLTEscT1iWzBdLHI9bi5pc0Z1bmN0aW9uKHEpO2lmKHJ8fG8+MSYmXCJzdHJpbmdcIj09dHlwZW9mIHEmJiFsLmNoZWNrQ2xvbmUmJnhhLnRlc3QocSkpcmV0dXJuIGEuZWFjaChmdW5jdGlvbihlKXt2YXIgZj1hLmVxKGUpO3ImJihiWzBdPXEuY2FsbCh0aGlzLGUsZi5odG1sKCkpKSxIYShmLGIsYyxkKX0pO2lmKG8mJihrPWphKGIsYVswXS5vd25lckRvY3VtZW50LCExLGEsZCksZT1rLmZpcnN0Q2hpbGQsMT09PWsuY2hpbGROb2Rlcy5sZW5ndGgmJihrPWUpLGV8fGQpKXtmb3IoaT1uLm1hcChlYShrLFwic2NyaXB0XCIpLERhKSxoPWkubGVuZ3RoO28+bTttKyspZz1rLG0hPT1wJiYoZz1uLmNsb25lKGcsITAsITApLGgmJm4ubWVyZ2UoaSxlYShnLFwic2NyaXB0XCIpKSksYy5jYWxsKGFbbV0sZyxtKTtpZihoKWZvcihqPWlbaS5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxuLm1hcChpLEVhKSxtPTA7aD5tO20rKylnPWlbbV0sXy50ZXN0KGcudHlwZXx8XCJcIikmJiFuLl9kYXRhKGcsXCJnbG9iYWxFdmFsXCIpJiZuLmNvbnRhaW5zKGosZykmJihnLnNyYz9uLl9ldmFsVXJsJiZuLl9ldmFsVXJsKGcuc3JjKTpuLmdsb2JhbEV2YWwoKGcudGV4dHx8Zy50ZXh0Q29udGVudHx8Zy5pbm5lckhUTUx8fFwiXCIpLnJlcGxhY2UoemEsXCJcIikpKTtrPWU9bnVsbH1yZXR1cm4gYX1mdW5jdGlvbiBJYShhLGIsYyl7Zm9yKHZhciBkLGU9Yj9uLmZpbHRlcihiLGEpOmEsZj0wO251bGwhPShkPWVbZl0pO2YrKyljfHwxIT09ZC5ub2RlVHlwZXx8bi5jbGVhbkRhdGEoZWEoZCkpLGQucGFyZW50Tm9kZSYmKGMmJm4uY29udGFpbnMoZC5vd25lckRvY3VtZW50LGQpJiZmYShlYShkLFwic2NyaXB0XCIpKSxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCkpO3JldHVybiBhfW4uZXh0ZW5kKHtodG1sUHJlZmlsdGVyOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UodmEsXCI8JDE+PC8kMj5cIil9LGNsb25lOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoLGk9bi5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSk7aWYobC5odG1sNUNsb25lfHxuLmlzWE1MRG9jKGEpfHwhdWEudGVzdChcIjxcIithLm5vZGVOYW1lK1wiPlwiKT9mPWEuY2xvbmVOb2RlKCEwKTooQmEuaW5uZXJIVE1MPWEub3V0ZXJIVE1MLEJhLnJlbW92ZUNoaWxkKGY9QmEuZmlyc3RDaGlsZCkpLCEobC5ub0Nsb25lRXZlbnQmJmwubm9DbG9uZUNoZWNrZWR8fDEhPT1hLm5vZGVUeXBlJiYxMSE9PWEubm9kZVR5cGV8fG4uaXNYTUxEb2MoYSkpKWZvcihkPWVhKGYpLGg9ZWEoYSksZz0wO251bGwhPShlPWhbZ10pOysrZylkW2ddJiZHYShlLGRbZ10pO2lmKGIpaWYoYylmb3IoaD1ofHxlYShhKSxkPWR8fGVhKGYpLGc9MDtudWxsIT0oZT1oW2ddKTtnKyspRmEoZSxkW2ddKTtlbHNlIEZhKGEsZik7cmV0dXJuIGQ9ZWEoZixcInNjcmlwdFwiKSxkLmxlbmd0aD4wJiZmYShkLCFpJiZlYShhLFwic2NyaXB0XCIpKSxkPWg9ZT1udWxsLGZ9LGNsZWFuRGF0YTpmdW5jdGlvbihhLGIpe2Zvcih2YXIgZCxlLGYsZyxoPTAsaT1uLmV4cGFuZG8saj1uLmNhY2hlLGs9bC5hdHRyaWJ1dGVzLG09bi5ldmVudC5zcGVjaWFsO251bGwhPShkPWFbaF0pO2grKylpZigoYnx8TShkKSkmJihmPWRbaV0sZz1mJiZqW2ZdKSl7aWYoZy5ldmVudHMpZm9yKGUgaW4gZy5ldmVudHMpbVtlXT9uLmV2ZW50LnJlbW92ZShkLGUpOm4ucmVtb3ZlRXZlbnQoZCxlLGcuaGFuZGxlKTtqW2ZdJiYoZGVsZXRlIGpbZl0sa3x8XCJ1bmRlZmluZWRcIj09dHlwZW9mIGQucmVtb3ZlQXR0cmlidXRlP2RbaV09dm9pZCAwOmQucmVtb3ZlQXR0cmlidXRlKGkpLGMucHVzaChmKSl9fX0pLG4uZm4uZXh0ZW5kKHtkb21NYW5pcDpIYSxkZXRhY2g6ZnVuY3Rpb24oYSl7cmV0dXJuIElhKHRoaXMsYSwhMCl9LHJlbW92ZTpmdW5jdGlvbihhKXtyZXR1cm4gSWEodGhpcyxhKX0sdGV4dDpmdW5jdGlvbihhKXtyZXR1cm4gWSh0aGlzLGZ1bmN0aW9uKGEpe3JldHVybiB2b2lkIDA9PT1hP24udGV4dCh0aGlzKTp0aGlzLmVtcHR5KCkuYXBwZW5kKCh0aGlzWzBdJiZ0aGlzWzBdLm93bmVyRG9jdW1lbnR8fGQpLmNyZWF0ZVRleHROb2RlKGEpKX0sbnVsbCxhLGFyZ3VtZW50cy5sZW5ndGgpfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gSGEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPUNhKHRoaXMsYSk7Yi5hcHBlbmRDaGlsZChhKX19KX0scHJlcGVuZDpmdW5jdGlvbigpe3JldHVybiBIYSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9Q2EodGhpcyxhKTtiLmluc2VydEJlZm9yZShhLGIuZmlyc3RDaGlsZCl9fSl9LGJlZm9yZTpmdW5jdGlvbigpe3JldHVybiBIYSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzKX0pfSxhZnRlcjpmdW5jdGlvbigpe3JldHVybiBIYSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzLm5leHRTaWJsaW5nKX0pfSxlbXB0eTpmdW5jdGlvbigpe2Zvcih2YXIgYSxiPTA7bnVsbCE9KGE9dGhpc1tiXSk7YisrKXsxPT09YS5ub2RlVHlwZSYmbi5jbGVhbkRhdGEoZWEoYSwhMSkpO3doaWxlKGEuZmlyc3RDaGlsZClhLnJlbW92ZUNoaWxkKGEuZmlyc3RDaGlsZCk7YS5vcHRpb25zJiZuLm5vZGVOYW1lKGEsXCJzZWxlY3RcIikmJihhLm9wdGlvbnMubGVuZ3RoPTApfXJldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihhLGIpe3JldHVybiBhPW51bGw9PWE/ITE6YSxiPW51bGw9PWI/YTpiLHRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIG4uY2xvbmUodGhpcyxhLGIpfSl9LGh0bWw6ZnVuY3Rpb24oYSl7cmV0dXJuIFkodGhpcyxmdW5jdGlvbihhKXt2YXIgYj10aGlzWzBdfHx7fSxjPTAsZD10aGlzLmxlbmd0aDtpZih2b2lkIDA9PT1hKXJldHVybiAxPT09Yi5ub2RlVHlwZT9iLmlubmVySFRNTC5yZXBsYWNlKHRhLFwiXCIpOnZvaWQgMDtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmIXdhLnRlc3QoYSkmJihsLmh0bWxTZXJpYWxpemV8fCF1YS50ZXN0KGEpKSYmKGwubGVhZGluZ1doaXRlc3BhY2V8fCFhYS50ZXN0KGEpKSYmIWRhWygkLmV4ZWMoYSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpXSl7YT1uLmh0bWxQcmVmaWx0ZXIoYSk7dHJ5e2Zvcig7ZD5jO2MrKyliPXRoaXNbY118fHt9LDE9PT1iLm5vZGVUeXBlJiYobi5jbGVhbkRhdGEoZWEoYiwhMSkpLGIuaW5uZXJIVE1MPWEpO2I9MH1jYXRjaChlKXt9fWImJnRoaXMuZW1wdHkoKS5hcHBlbmQoYSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oKXt2YXIgYT1bXTtyZXR1cm4gSGEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYil7dmFyIGM9dGhpcy5wYXJlbnROb2RlO24uaW5BcnJheSh0aGlzLGEpPDAmJihuLmNsZWFuRGF0YShlYSh0aGlzKSksYyYmYy5yZXBsYWNlQ2hpbGQoYix0aGlzKSl9LGEpfX0pLG4uZWFjaCh7YXBwZW5kVG86XCJhcHBlbmRcIixwcmVwZW5kVG86XCJwcmVwZW5kXCIsaW5zZXJ0QmVmb3JlOlwiYmVmb3JlXCIsaW5zZXJ0QWZ0ZXI6XCJhZnRlclwiLHJlcGxhY2VBbGw6XCJyZXBsYWNlV2l0aFwifSxmdW5jdGlvbihhLGIpe24uZm5bYV09ZnVuY3Rpb24oYSl7Zm9yKHZhciBjLGQ9MCxlPVtdLGY9bihhKSxoPWYubGVuZ3RoLTE7aD49ZDtkKyspYz1kPT09aD90aGlzOnRoaXMuY2xvbmUoITApLG4oZltkXSlbYl0oYyksZy5hcHBseShlLGMuZ2V0KCkpO3JldHVybiB0aGlzLnB1c2hTdGFjayhlKX19KTt2YXIgSmEsS2E9e0hUTUw6XCJibG9ja1wiLEJPRFk6XCJibG9ja1wifTtmdW5jdGlvbiBMYShhLGIpe3ZhciBjPW4oYi5jcmVhdGVFbGVtZW50KGEpKS5hcHBlbmRUbyhiLmJvZHkpLGQ9bi5jc3MoY1swXSxcImRpc3BsYXlcIik7cmV0dXJuIGMuZGV0YWNoKCksZH1mdW5jdGlvbiBNYShhKXt2YXIgYj1kLGM9S2FbYV07cmV0dXJuIGN8fChjPUxhKGEsYiksXCJub25lXCIhPT1jJiZjfHwoSmE9KEphfHxuKFwiPGlmcmFtZSBmcmFtZWJvcmRlcj0nMCcgd2lkdGg9JzAnIGhlaWdodD0nMCcvPlwiKSkuYXBwZW5kVG8oYi5kb2N1bWVudEVsZW1lbnQpLGI9KEphWzBdLmNvbnRlbnRXaW5kb3d8fEphWzBdLmNvbnRlbnREb2N1bWVudCkuZG9jdW1lbnQsYi53cml0ZSgpLGIuY2xvc2UoKSxjPUxhKGEsYiksSmEuZGV0YWNoKCkpLEthW2FdPWMpLGN9dmFyIE5hPS9ebWFyZ2luLyxPYT1uZXcgUmVnRXhwKFwiXihcIitUK1wiKSg/IXB4KVthLXolXSskXCIsXCJpXCIpLFBhPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZz17fTtmb3IoZiBpbiBiKWdbZl09YS5zdHlsZVtmXSxhLnN0eWxlW2ZdPWJbZl07ZT1jLmFwcGx5KGEsZHx8W10pO2ZvcihmIGluIGIpYS5zdHlsZVtmXT1nW2ZdO3JldHVybiBlfSxRYT1kLmRvY3VtZW50RWxlbWVudDshZnVuY3Rpb24oKXt2YXIgYixjLGUsZixnLGgsaT1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksaj1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWYoai5zdHlsZSl7ai5zdHlsZS5jc3NUZXh0PVwiZmxvYXQ6bGVmdDtvcGFjaXR5Oi41XCIsbC5vcGFjaXR5PVwiMC41XCI9PT1qLnN0eWxlLm9wYWNpdHksbC5jc3NGbG9hdD0hIWouc3R5bGUuY3NzRmxvYXQsai5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cImNvbnRlbnQtYm94XCIsai5jbG9uZU5vZGUoITApLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiXCIsbC5jbGVhckNsb25lU3R5bGU9XCJjb250ZW50LWJveFwiPT09ai5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCxpPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxpLnN0eWxlLmNzc1RleHQ9XCJib3JkZXI6MDt3aWR0aDo4cHg7aGVpZ2h0OjA7dG9wOjA7bGVmdDotOTk5OXB4O3BhZGRpbmc6MDttYXJnaW4tdG9wOjFweDtwb3NpdGlvbjphYnNvbHV0ZVwiLGouaW5uZXJIVE1MPVwiXCIsaS5hcHBlbmRDaGlsZChqKSxsLmJveFNpemluZz1cIlwiPT09ai5zdHlsZS5ib3hTaXppbmd8fFwiXCI9PT1qLnN0eWxlLk1vekJveFNpemluZ3x8XCJcIj09PWouc3R5bGUuV2Via2l0Qm94U2l6aW5nLG4uZXh0ZW5kKGwse3JlbGlhYmxlSGlkZGVuT2Zmc2V0czpmdW5jdGlvbigpe3JldHVybiBudWxsPT1iJiZrKCksZn0sYm94U2l6aW5nUmVsaWFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09YiYmaygpLGV9LHBpeGVsTWFyZ2luUmlnaHQ6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09YiYmaygpLGN9LHBpeGVsUG9zaXRpb246ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09YiYmaygpLGJ9LHJlbGlhYmxlTWFyZ2luUmlnaHQ6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09YiYmaygpLGd9LHJlbGlhYmxlTWFyZ2luTGVmdDpmdW5jdGlvbigpe3JldHVybiBudWxsPT1iJiZrKCksaH19KTtmdW5jdGlvbiBrKCl7dmFyIGssbCxtPWQuZG9jdW1lbnRFbGVtZW50O20uYXBwZW5kQ2hpbGQoaSksai5zdHlsZS5jc3NUZXh0PVwiLXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7bWFyZ2luOmF1dG87Ym9yZGVyOjFweDtwYWRkaW5nOjFweDt0b3A6MSU7d2lkdGg6NTAlXCIsYj1lPWg9ITEsYz1nPSEwLGEuZ2V0Q29tcHV0ZWRTdHlsZSYmKGw9YS5nZXRDb21wdXRlZFN0eWxlKGopLGI9XCIxJVwiIT09KGx8fHt9KS50b3AsaD1cIjJweFwiPT09KGx8fHt9KS5tYXJnaW5MZWZ0LGU9XCI0cHhcIj09PShsfHx7d2lkdGg6XCI0cHhcIn0pLndpZHRoLGouc3R5bGUubWFyZ2luUmlnaHQ9XCI1MCVcIixjPVwiNHB4XCI9PT0obHx8e21hcmdpblJpZ2h0OlwiNHB4XCJ9KS5tYXJnaW5SaWdodCxrPWouYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxrLnN0eWxlLmNzc1RleHQ9ai5zdHlsZS5jc3NUZXh0PVwiLXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94Oy1tb3otYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjA7Ym9yZGVyOjA7cGFkZGluZzowXCIsay5zdHlsZS5tYXJnaW5SaWdodD1rLnN0eWxlLndpZHRoPVwiMFwiLGouc3R5bGUud2lkdGg9XCIxcHhcIixnPSFwYXJzZUZsb2F0KChhLmdldENvbXB1dGVkU3R5bGUoayl8fHt9KS5tYXJnaW5SaWdodCksai5yZW1vdmVDaGlsZChrKSksai5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLGY9MD09PWouZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgsZiYmKGouc3R5bGUuZGlzcGxheT1cIlwiLGouaW5uZXJIVE1MPVwiPHRhYmxlPjx0cj48dGQ+PC90ZD48dGQ+dDwvdGQ+PC90cj48L3RhYmxlPlwiLGouY2hpbGROb2Rlc1swXS5zdHlsZS5ib3JkZXJDb2xsYXBzZT1cInNlcGFyYXRlXCIsaz1qLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGRcIiksa1swXS5zdHlsZS5jc3NUZXh0PVwibWFyZ2luOjA7Ym9yZGVyOjA7cGFkZGluZzowO2Rpc3BsYXk6bm9uZVwiLGY9MD09PWtbMF0ub2Zmc2V0SGVpZ2h0LGYmJihrWzBdLnN0eWxlLmRpc3BsYXk9XCJcIixrWzFdLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsZj0wPT09a1swXS5vZmZzZXRIZWlnaHQpKSxtLnJlbW92ZUNoaWxkKGkpfX19KCk7dmFyIFJhLFNhLFRhPS9eKHRvcHxyaWdodHxib3R0b218bGVmdCkkLzthLmdldENvbXB1dGVkU3R5bGU/KFJhPWZ1bmN0aW9uKGIpe3ZhciBjPWIub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztyZXR1cm4gYyYmYy5vcGVuZXJ8fChjPWEpLGMuZ2V0Q29tcHV0ZWRTdHlsZShiKX0sU2E9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5zdHlsZTtyZXR1cm4gYz1jfHxSYShhKSxnPWM/Yy5nZXRQcm9wZXJ0eVZhbHVlKGIpfHxjW2JdOnZvaWQgMCxcIlwiIT09ZyYmdm9pZCAwIT09Z3x8bi5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSl8fChnPW4uc3R5bGUoYSxiKSksYyYmIWwucGl4ZWxNYXJnaW5SaWdodCgpJiZPYS50ZXN0KGcpJiZOYS50ZXN0KGIpJiYoZD1oLndpZHRoLGU9aC5taW5XaWR0aCxmPWgubWF4V2lkdGgsaC5taW5XaWR0aD1oLm1heFdpZHRoPWgud2lkdGg9ZyxnPWMud2lkdGgsaC53aWR0aD1kLGgubWluV2lkdGg9ZSxoLm1heFdpZHRoPWYpLHZvaWQgMD09PWc/ZzpnK1wiXCJ9KTpRYS5jdXJyZW50U3R5bGUmJihSYT1mdW5jdGlvbihhKXtyZXR1cm4gYS5jdXJyZW50U3R5bGV9LFNhPWZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuc3R5bGU7cmV0dXJuIGM9Y3x8UmEoYSksZz1jP2NbYl06dm9pZCAwLG51bGw9PWcmJmgmJmhbYl0mJihnPWhbYl0pLE9hLnRlc3QoZykmJiFUYS50ZXN0KGIpJiYoZD1oLmxlZnQsZT1hLnJ1bnRpbWVTdHlsZSxmPWUmJmUubGVmdCxmJiYoZS5sZWZ0PWEuY3VycmVudFN0eWxlLmxlZnQpLGgubGVmdD1cImZvbnRTaXplXCI9PT1iP1wiMWVtXCI6ZyxnPWgucGl4ZWxMZWZ0K1wicHhcIixoLmxlZnQ9ZCxmJiYoZS5sZWZ0PWYpKSx2b2lkIDA9PT1nP2c6ZytcIlwifHxcImF1dG9cIn0pO2Z1bmN0aW9uIFVhKGEsYil7cmV0dXJue2dldDpmdW5jdGlvbigpe3JldHVybiBhKCk/dm9pZCBkZWxldGUgdGhpcy5nZXQ6KHRoaXMuZ2V0PWIpLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fXZhciBWYT0vYWxwaGFcXChbXildKlxcKS9pLFdhPS9vcGFjaXR5XFxzKj1cXHMqKFteKV0qKS9pLFhhPS9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxZYT1uZXcgUmVnRXhwKFwiXihcIitUK1wiKSguKikkXCIsXCJpXCIpLFphPXtwb3NpdGlvbjpcImFic29sdXRlXCIsdmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wifSwkYT17bGV0dGVyU3BhY2luZzpcIjBcIixmb250V2VpZ2h0OlwiNDAwXCJ9LF9hPVtcIldlYmtpdFwiLFwiT1wiLFwiTW96XCIsXCJtc1wiXSxhYj1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGU7ZnVuY3Rpb24gYmIoYSl7aWYoYSBpbiBhYilyZXR1cm4gYTt2YXIgYj1hLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Euc2xpY2UoMSksYz1fYS5sZW5ndGg7d2hpbGUoYy0tKWlmKGE9X2FbY10rYixhIGluIGFiKXJldHVybiBhfWZ1bmN0aW9uIGNiKGEsYil7Zm9yKHZhciBjLGQsZSxmPVtdLGc9MCxoPWEubGVuZ3RoO2g+ZztnKyspZD1hW2ddLGQuc3R5bGUmJihmW2ddPW4uX2RhdGEoZCxcIm9sZGRpc3BsYXlcIiksYz1kLnN0eWxlLmRpc3BsYXksYj8oZltnXXx8XCJub25lXCIhPT1jfHwoZC5zdHlsZS5kaXNwbGF5PVwiXCIpLFwiXCI9PT1kLnN0eWxlLmRpc3BsYXkmJlcoZCkmJihmW2ddPW4uX2RhdGEoZCxcIm9sZGRpc3BsYXlcIixNYShkLm5vZGVOYW1lKSkpKTooZT1XKGQpLChjJiZcIm5vbmVcIiE9PWN8fCFlKSYmbi5fZGF0YShkLFwib2xkZGlzcGxheVwiLGU/YzpuLmNzcyhkLFwiZGlzcGxheVwiKSkpKTtmb3IoZz0wO2g+ZztnKyspZD1hW2ddLGQuc3R5bGUmJihiJiZcIm5vbmVcIiE9PWQuc3R5bGUuZGlzcGxheSYmXCJcIiE9PWQuc3R5bGUuZGlzcGxheXx8KGQuc3R5bGUuZGlzcGxheT1iP2ZbZ118fFwiXCI6XCJub25lXCIpKTtyZXR1cm4gYX1mdW5jdGlvbiBkYihhLGIsYyl7dmFyIGQ9WWEuZXhlYyhiKTtyZXR1cm4gZD9NYXRoLm1heCgwLGRbMV0tKGN8fDApKSsoZFsyXXx8XCJweFwiKTpifWZ1bmN0aW9uIGViKGEsYixjLGQsZSl7Zm9yKHZhciBmPWM9PT0oZD9cImJvcmRlclwiOlwiY29udGVudFwiKT80Olwid2lkdGhcIj09PWI/MTowLGc9MDs0PmY7Zis9MilcIm1hcmdpblwiPT09YyYmKGcrPW4uY3NzKGEsYytWW2ZdLCEwLGUpKSxkPyhcImNvbnRlbnRcIj09PWMmJihnLT1uLmNzcyhhLFwicGFkZGluZ1wiK1ZbZl0sITAsZSkpLFwibWFyZ2luXCIhPT1jJiYoZy09bi5jc3MoYSxcImJvcmRlclwiK1ZbZl0rXCJXaWR0aFwiLCEwLGUpKSk6KGcrPW4uY3NzKGEsXCJwYWRkaW5nXCIrVltmXSwhMCxlKSxcInBhZGRpbmdcIiE9PWMmJihnKz1uLmNzcyhhLFwiYm9yZGVyXCIrVltmXStcIldpZHRoXCIsITAsZSkpKTtyZXR1cm4gZ31mdW5jdGlvbiBmYihhLGIsYyl7dmFyIGQ9ITAsZT1cIndpZHRoXCI9PT1iP2Eub2Zmc2V0V2lkdGg6YS5vZmZzZXRIZWlnaHQsZj1SYShhKSxnPWwuYm94U2l6aW5nJiZcImJvcmRlci1ib3hcIj09PW4uY3NzKGEsXCJib3hTaXppbmdcIiwhMSxmKTtpZigwPj1lfHxudWxsPT1lKXtpZihlPVNhKGEsYixmKSwoMD5lfHxudWxsPT1lKSYmKGU9YS5zdHlsZVtiXSksT2EudGVzdChlKSlyZXR1cm4gZTtkPWcmJihsLmJveFNpemluZ1JlbGlhYmxlKCl8fGU9PT1hLnN0eWxlW2JdKSxlPXBhcnNlRmxvYXQoZSl8fDB9cmV0dXJuIGUrZWIoYSxiLGN8fChnP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpLGQsZikrXCJweFwifW4uZXh0ZW5kKHtjc3NIb29rczp7b3BhY2l0eTp7Z2V0OmZ1bmN0aW9uKGEsYil7aWYoYil7dmFyIGM9U2EoYSxcIm9wYWNpdHlcIik7cmV0dXJuXCJcIj09PWM/XCIxXCI6Y319fX0sY3NzTnVtYmVyOnthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxjb2x1bW5Db3VudDohMCxmaWxsT3BhY2l0eTohMCxmbGV4R3JvdzohMCxmbGV4U2hyaW5rOiEwLGZvbnRXZWlnaHQ6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwfSxjc3NQcm9wczp7XCJmbG9hdFwiOmwuY3NzRmxvYXQ/XCJjc3NGbG9hdFwiOlwic3R5bGVGbG9hdFwifSxzdHlsZTpmdW5jdGlvbihhLGIsYyxkKXtpZihhJiYzIT09YS5ub2RlVHlwZSYmOCE9PWEubm9kZVR5cGUmJmEuc3R5bGUpe3ZhciBlLGYsZyxoPW4uY2FtZWxDYXNlKGIpLGk9YS5zdHlsZTtpZihiPW4uY3NzUHJvcHNbaF18fChuLmNzc1Byb3BzW2hdPWJiKGgpfHxoKSxnPW4uY3NzSG9va3NbYl18fG4uY3NzSG9va3NbaF0sdm9pZCAwPT09YylyZXR1cm4gZyYmXCJnZXRcImluIGcmJnZvaWQgMCE9PShlPWcuZ2V0KGEsITEsZCkpP2U6aVtiXTtpZihmPXR5cGVvZiBjLFwic3RyaW5nXCI9PT1mJiYoZT1VLmV4ZWMoYykpJiZlWzFdJiYoYz1YKGEsYixlKSxmPVwibnVtYmVyXCIpLG51bGwhPWMmJmM9PT1jJiYoXCJudW1iZXJcIj09PWYmJihjKz1lJiZlWzNdfHwobi5jc3NOdW1iZXJbaF0/XCJcIjpcInB4XCIpKSxsLmNsZWFyQ2xvbmVTdHlsZXx8XCJcIiE9PWN8fDAhPT1iLmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpfHwoaVtiXT1cImluaGVyaXRcIiksIShnJiZcInNldFwiaW4gZyYmdm9pZCAwPT09KGM9Zy5zZXQoYSxjLGQpKSkpKXRyeXtpW2JdPWN9Y2F0Y2goail7fX19LGNzczpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGcsaD1uLmNhbWVsQ2FzZShiKTtyZXR1cm4gYj1uLmNzc1Byb3BzW2hdfHwobi5jc3NQcm9wc1toXT1iYihoKXx8aCksZz1uLmNzc0hvb2tzW2JdfHxuLmNzc0hvb2tzW2hdLGcmJlwiZ2V0XCJpbiBnJiYoZj1nLmdldChhLCEwLGMpKSx2b2lkIDA9PT1mJiYoZj1TYShhLGIsZCkpLFwibm9ybWFsXCI9PT1mJiZiIGluICRhJiYoZj0kYVtiXSksXCJcIj09PWN8fGM/KGU9cGFyc2VGbG9hdChmKSxjPT09ITB8fGlzRmluaXRlKGUpP2V8fDA6Zik6Zn19KSxuLmVhY2goW1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXSxmdW5jdGlvbihhLGIpe24uY3NzSG9va3NbYl09e2dldDpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGM/WGEudGVzdChuLmNzcyhhLFwiZGlzcGxheVwiKSkmJjA9PT1hLm9mZnNldFdpZHRoP1BhKGEsWmEsZnVuY3Rpb24oKXtyZXR1cm4gZmIoYSxiLGQpfSk6ZmIoYSxiLGQpOnZvaWQgMH0sc2V0OmZ1bmN0aW9uKGEsYyxkKXt2YXIgZT1kJiZSYShhKTtyZXR1cm4gZGIoYSxjLGQ/ZWIoYSxiLGQsbC5ib3hTaXppbmcmJlwiYm9yZGVyLWJveFwiPT09bi5jc3MoYSxcImJveFNpemluZ1wiLCExLGUpLGUpOjApfX19KSxsLm9wYWNpdHl8fChuLmNzc0hvb2tzLm9wYWNpdHk9e2dldDpmdW5jdGlvbihhLGIpe3JldHVybiBXYS50ZXN0KChiJiZhLmN1cnJlbnRTdHlsZT9hLmN1cnJlbnRTdHlsZS5maWx0ZXI6YS5zdHlsZS5maWx0ZXIpfHxcIlwiKT8uMDEqcGFyc2VGbG9hdChSZWdFeHAuJDEpK1wiXCI6Yj9cIjFcIjpcIlwifSxzZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLnN0eWxlLGQ9YS5jdXJyZW50U3R5bGUsZT1uLmlzTnVtZXJpYyhiKT9cImFscGhhKG9wYWNpdHk9XCIrMTAwKmIrXCIpXCI6XCJcIixmPWQmJmQuZmlsdGVyfHxjLmZpbHRlcnx8XCJcIjtjLnpvb209MSwoYj49MXx8XCJcIj09PWIpJiZcIlwiPT09bi50cmltKGYucmVwbGFjZShWYSxcIlwiKSkmJmMucmVtb3ZlQXR0cmlidXRlJiYoYy5yZW1vdmVBdHRyaWJ1dGUoXCJmaWx0ZXJcIiksXCJcIj09PWJ8fGQmJiFkLmZpbHRlcil8fChjLmZpbHRlcj1WYS50ZXN0KGYpP2YucmVwbGFjZShWYSxlKTpmK1wiIFwiK2UpfX0pLG4uY3NzSG9va3MubWFyZ2luUmlnaHQ9VWEobC5yZWxpYWJsZU1hcmdpblJpZ2h0LGZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/UGEoYSx7ZGlzcGxheTpcImlubGluZS1ibG9ja1wifSxTYSxbYSxcIm1hcmdpblJpZ2h0XCJdKTp2b2lkIDB9KSxuLmNzc0hvb2tzLm1hcmdpbkxlZnQ9VWEobC5yZWxpYWJsZU1hcmdpbkxlZnQsZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj8ocGFyc2VGbG9hdChTYShhLFwibWFyZ2luTGVmdFwiKSl8fChuLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKT9hLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQtUGEoYSx7XG5tYXJnaW5MZWZ0OjB9LGZ1bmN0aW9uKCl7cmV0dXJuIGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdH0pOjApKStcInB4XCI6dm9pZCAwfSksbi5lYWNoKHttYXJnaW46XCJcIixwYWRkaW5nOlwiXCIsYm9yZGVyOlwiV2lkdGhcIn0sZnVuY3Rpb24oYSxiKXtuLmNzc0hvb2tzW2ErYl09e2V4cGFuZDpmdW5jdGlvbihjKXtmb3IodmFyIGQ9MCxlPXt9LGY9XCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5zcGxpdChcIiBcIik6W2NdOzQ+ZDtkKyspZVthK1ZbZF0rYl09ZltkXXx8ZltkLTJdfHxmWzBdO3JldHVybiBlfX0sTmEudGVzdChhKXx8KG4uY3NzSG9va3NbYStiXS5zZXQ9ZGIpfSksbi5mbi5leHRlbmQoe2NzczpmdW5jdGlvbihhLGIpe3JldHVybiBZKHRoaXMsZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj17fSxnPTA7aWYobi5pc0FycmF5KGIpKXtmb3IoZD1SYShhKSxlPWIubGVuZ3RoO2U+ZztnKyspZltiW2ddXT1uLmNzcyhhLGJbZ10sITEsZCk7cmV0dXJuIGZ9cmV0dXJuIHZvaWQgMCE9PWM/bi5zdHlsZShhLGIsYyk6bi5jc3MoYSxiKX0sYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHNob3c6ZnVuY3Rpb24oKXtyZXR1cm4gY2IodGhpcywhMCl9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gY2IodGhpcyl9LHRvZ2dsZTpmdW5jdGlvbihhKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGE/YT90aGlzLnNob3coKTp0aGlzLmhpZGUoKTp0aGlzLmVhY2goZnVuY3Rpb24oKXtXKHRoaXMpP24odGhpcykuc2hvdygpOm4odGhpcykuaGlkZSgpfSl9fSk7ZnVuY3Rpb24gZ2IoYSxiLGMsZCxlKXtyZXR1cm4gbmV3IGdiLnByb3RvdHlwZS5pbml0KGEsYixjLGQsZSl9bi5Ud2Vlbj1nYixnYi5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmdiLGluaXQ6ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3RoaXMuZWxlbT1hLHRoaXMucHJvcD1jLHRoaXMuZWFzaW5nPWV8fG4uZWFzaW5nLl9kZWZhdWx0LHRoaXMub3B0aW9ucz1iLHRoaXMuc3RhcnQ9dGhpcy5ub3c9dGhpcy5jdXIoKSx0aGlzLmVuZD1kLHRoaXMudW5pdD1mfHwobi5jc3NOdW1iZXJbY10/XCJcIjpcInB4XCIpfSxjdXI6ZnVuY3Rpb24oKXt2YXIgYT1nYi5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gYSYmYS5nZXQ/YS5nZXQodGhpcyk6Z2IucHJvcEhvb2tzLl9kZWZhdWx0LmdldCh0aGlzKX0scnVuOmZ1bmN0aW9uKGEpe3ZhciBiLGM9Z2IucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIHRoaXMub3B0aW9ucy5kdXJhdGlvbj90aGlzLnBvcz1iPW4uZWFzaW5nW3RoaXMuZWFzaW5nXShhLHRoaXMub3B0aW9ucy5kdXJhdGlvbiphLDAsMSx0aGlzLm9wdGlvbnMuZHVyYXRpb24pOnRoaXMucG9zPWI9YSx0aGlzLm5vdz0odGhpcy5lbmQtdGhpcy5zdGFydCkqYit0aGlzLnN0YXJ0LHRoaXMub3B0aW9ucy5zdGVwJiZ0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSx0aGlzLm5vdyx0aGlzKSxjJiZjLnNldD9jLnNldCh0aGlzKTpnYi5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpLHRoaXN9fSxnYi5wcm90b3R5cGUuaW5pdC5wcm90b3R5cGU9Z2IucHJvdG90eXBlLGdiLnByb3BIb29rcz17X2RlZmF1bHQ6e2dldDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4gMSE9PWEuZWxlbS5ub2RlVHlwZXx8bnVsbCE9YS5lbGVtW2EucHJvcF0mJm51bGw9PWEuZWxlbS5zdHlsZVthLnByb3BdP2EuZWxlbVthLnByb3BdOihiPW4uY3NzKGEuZWxlbSxhLnByb3AsXCJcIiksYiYmXCJhdXRvXCIhPT1iP2I6MCl9LHNldDpmdW5jdGlvbihhKXtuLmZ4LnN0ZXBbYS5wcm9wXT9uLmZ4LnN0ZXBbYS5wcm9wXShhKToxIT09YS5lbGVtLm5vZGVUeXBlfHxudWxsPT1hLmVsZW0uc3R5bGVbbi5jc3NQcm9wc1thLnByb3BdXSYmIW4uY3NzSG9va3NbYS5wcm9wXT9hLmVsZW1bYS5wcm9wXT1hLm5vdzpuLnN0eWxlKGEuZWxlbSxhLnByb3AsYS5ub3crYS51bml0KX19fSxnYi5wcm9wSG9va3Muc2Nyb2xsVG9wPWdiLnByb3BIb29rcy5zY3JvbGxMZWZ0PXtzZXQ6ZnVuY3Rpb24oYSl7YS5lbGVtLm5vZGVUeXBlJiZhLmVsZW0ucGFyZW50Tm9kZSYmKGEuZWxlbVthLnByb3BdPWEubm93KX19LG4uZWFzaW5nPXtsaW5lYXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGF9LHN3aW5nOmZ1bmN0aW9uKGEpe3JldHVybi41LU1hdGguY29zKGEqTWF0aC5QSSkvMn0sX2RlZmF1bHQ6XCJzd2luZ1wifSxuLmZ4PWdiLnByb3RvdHlwZS5pbml0LG4uZnguc3RlcD17fTt2YXIgaGIsaWIsamI9L14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLGtiPS9xdWV1ZUhvb2tzJC87ZnVuY3Rpb24gbGIoKXtyZXR1cm4gYS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aGI9dm9pZCAwfSksaGI9bi5ub3coKX1mdW5jdGlvbiBtYihhLGIpe3ZhciBjLGQ9e2hlaWdodDphfSxlPTA7Zm9yKGI9Yj8xOjA7ND5lO2UrPTItYiljPVZbZV0sZFtcIm1hcmdpblwiK2NdPWRbXCJwYWRkaW5nXCIrY109YTtyZXR1cm4gYiYmKGQub3BhY2l0eT1kLndpZHRoPWEpLGR9ZnVuY3Rpb24gbmIoYSxiLGMpe2Zvcih2YXIgZCxlPShxYi50d2VlbmVyc1tiXXx8W10pLmNvbmNhdChxYi50d2VlbmVyc1tcIipcIl0pLGY9MCxnPWUubGVuZ3RoO2c+ZjtmKyspaWYoZD1lW2ZdLmNhbGwoYyxiLGEpKXJldHVybiBkfWZ1bmN0aW9uIG9iKGEsYixjKXt2YXIgZCxlLGYsZyxoLGksaixrLG09dGhpcyxvPXt9LHA9YS5zdHlsZSxxPWEubm9kZVR5cGUmJlcoYSkscj1uLl9kYXRhKGEsXCJmeHNob3dcIik7Yy5xdWV1ZXx8KGg9bi5fcXVldWVIb29rcyhhLFwiZnhcIiksbnVsbD09aC51bnF1ZXVlZCYmKGgudW5xdWV1ZWQ9MCxpPWguZW1wdHkuZmlyZSxoLmVtcHR5LmZpcmU9ZnVuY3Rpb24oKXtoLnVucXVldWVkfHxpKCl9KSxoLnVucXVldWVkKyssbS5hbHdheXMoZnVuY3Rpb24oKXttLmFsd2F5cyhmdW5jdGlvbigpe2gudW5xdWV1ZWQtLSxuLnF1ZXVlKGEsXCJmeFwiKS5sZW5ndGh8fGguZW1wdHkuZmlyZSgpfSl9KSksMT09PWEubm9kZVR5cGUmJihcImhlaWdodFwiaW4gYnx8XCJ3aWR0aFwiaW4gYikmJihjLm92ZXJmbG93PVtwLm92ZXJmbG93LHAub3ZlcmZsb3dYLHAub3ZlcmZsb3dZXSxqPW4uY3NzKGEsXCJkaXNwbGF5XCIpLGs9XCJub25lXCI9PT1qP24uX2RhdGEoYSxcIm9sZGRpc3BsYXlcIil8fE1hKGEubm9kZU5hbWUpOmosXCJpbmxpbmVcIj09PWsmJlwibm9uZVwiPT09bi5jc3MoYSxcImZsb2F0XCIpJiYobC5pbmxpbmVCbG9ja05lZWRzTGF5b3V0JiZcImlubGluZVwiIT09TWEoYS5ub2RlTmFtZSk/cC56b29tPTE6cC5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpKSxjLm92ZXJmbG93JiYocC5vdmVyZmxvdz1cImhpZGRlblwiLGwuc2hyaW5rV3JhcEJsb2NrcygpfHxtLmFsd2F5cyhmdW5jdGlvbigpe3Aub3ZlcmZsb3c9Yy5vdmVyZmxvd1swXSxwLm92ZXJmbG93WD1jLm92ZXJmbG93WzFdLHAub3ZlcmZsb3dZPWMub3ZlcmZsb3dbMl19KSk7Zm9yKGQgaW4gYilpZihlPWJbZF0samIuZXhlYyhlKSl7aWYoZGVsZXRlIGJbZF0sZj1mfHxcInRvZ2dsZVwiPT09ZSxlPT09KHE/XCJoaWRlXCI6XCJzaG93XCIpKXtpZihcInNob3dcIiE9PWV8fCFyfHx2b2lkIDA9PT1yW2RdKWNvbnRpbnVlO3E9ITB9b1tkXT1yJiZyW2RdfHxuLnN0eWxlKGEsZCl9ZWxzZSBqPXZvaWQgMDtpZihuLmlzRW1wdHlPYmplY3QobykpXCJpbmxpbmVcIj09PShcIm5vbmVcIj09PWo/TWEoYS5ub2RlTmFtZSk6aikmJihwLmRpc3BsYXk9aik7ZWxzZXtyP1wiaGlkZGVuXCJpbiByJiYocT1yLmhpZGRlbik6cj1uLl9kYXRhKGEsXCJmeHNob3dcIix7fSksZiYmKHIuaGlkZGVuPSFxKSxxP24oYSkuc2hvdygpOm0uZG9uZShmdW5jdGlvbigpe24oYSkuaGlkZSgpfSksbS5kb25lKGZ1bmN0aW9uKCl7dmFyIGI7bi5fcmVtb3ZlRGF0YShhLFwiZnhzaG93XCIpO2ZvcihiIGluIG8pbi5zdHlsZShhLGIsb1tiXSl9KTtmb3IoZCBpbiBvKWc9bmIocT9yW2RdOjAsZCxtKSxkIGluIHJ8fChyW2RdPWcuc3RhcnQscSYmKGcuZW5kPWcuc3RhcnQsZy5zdGFydD1cIndpZHRoXCI9PT1kfHxcImhlaWdodFwiPT09ZD8xOjApKX19ZnVuY3Rpb24gcGIoYSxiKXt2YXIgYyxkLGUsZixnO2ZvcihjIGluIGEpaWYoZD1uLmNhbWVsQ2FzZShjKSxlPWJbZF0sZj1hW2NdLG4uaXNBcnJheShmKSYmKGU9ZlsxXSxmPWFbY109ZlswXSksYyE9PWQmJihhW2RdPWYsZGVsZXRlIGFbY10pLGc9bi5jc3NIb29rc1tkXSxnJiZcImV4cGFuZFwiaW4gZyl7Zj1nLmV4cGFuZChmKSxkZWxldGUgYVtkXTtmb3IoYyBpbiBmKWMgaW4gYXx8KGFbY109ZltjXSxiW2NdPWUpfWVsc2UgYltkXT1lfWZ1bmN0aW9uIHFiKGEsYixjKXt2YXIgZCxlLGY9MCxnPXFiLnByZWZpbHRlcnMubGVuZ3RoLGg9bi5EZWZlcnJlZCgpLmFsd2F5cyhmdW5jdGlvbigpe2RlbGV0ZSBpLmVsZW19KSxpPWZ1bmN0aW9uKCl7aWYoZSlyZXR1cm4hMTtmb3IodmFyIGI9aGJ8fGxiKCksYz1NYXRoLm1heCgwLGouc3RhcnRUaW1lK2ouZHVyYXRpb24tYiksZD1jL2ouZHVyYXRpb258fDAsZj0xLWQsZz0wLGk9ai50d2VlbnMubGVuZ3RoO2k+ZztnKyspai50d2VlbnNbZ10ucnVuKGYpO3JldHVybiBoLm5vdGlmeVdpdGgoYSxbaixmLGNdKSwxPmYmJmk/YzooaC5yZXNvbHZlV2l0aChhLFtqXSksITEpfSxqPWgucHJvbWlzZSh7ZWxlbTphLHByb3BzOm4uZXh0ZW5kKHt9LGIpLG9wdHM6bi5leHRlbmQoITAse3NwZWNpYWxFYXNpbmc6e30sZWFzaW5nOm4uZWFzaW5nLl9kZWZhdWx0fSxjKSxvcmlnaW5hbFByb3BlcnRpZXM6YixvcmlnaW5hbE9wdGlvbnM6YyxzdGFydFRpbWU6aGJ8fGxiKCksZHVyYXRpb246Yy5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24oYixjKXt2YXIgZD1uLlR3ZWVuKGEsai5vcHRzLGIsYyxqLm9wdHMuc3BlY2lhbEVhc2luZ1tiXXx8ai5vcHRzLmVhc2luZyk7cmV0dXJuIGoudHdlZW5zLnB1c2goZCksZH0sc3RvcDpmdW5jdGlvbihiKXt2YXIgYz0wLGQ9Yj9qLnR3ZWVucy5sZW5ndGg6MDtpZihlKXJldHVybiB0aGlzO2ZvcihlPSEwO2Q+YztjKyspai50d2VlbnNbY10ucnVuKDEpO3JldHVybiBiPyhoLm5vdGlmeVdpdGgoYSxbaiwxLDBdKSxoLnJlc29sdmVXaXRoKGEsW2osYl0pKTpoLnJlamVjdFdpdGgoYSxbaixiXSksdGhpc319KSxrPWoucHJvcHM7Zm9yKHBiKGssai5vcHRzLnNwZWNpYWxFYXNpbmcpO2c+ZjtmKyspaWYoZD1xYi5wcmVmaWx0ZXJzW2ZdLmNhbGwoaixhLGssai5vcHRzKSlyZXR1cm4gbi5pc0Z1bmN0aW9uKGQuc3RvcCkmJihuLl9xdWV1ZUhvb2tzKGouZWxlbSxqLm9wdHMucXVldWUpLnN0b3A9bi5wcm94eShkLnN0b3AsZCkpLGQ7cmV0dXJuIG4ubWFwKGssbmIsaiksbi5pc0Z1bmN0aW9uKGoub3B0cy5zdGFydCkmJmoub3B0cy5zdGFydC5jYWxsKGEsaiksbi5meC50aW1lcihuLmV4dGVuZChpLHtlbGVtOmEsYW5pbTpqLHF1ZXVlOmoub3B0cy5xdWV1ZX0pKSxqLnByb2dyZXNzKGoub3B0cy5wcm9ncmVzcykuZG9uZShqLm9wdHMuZG9uZSxqLm9wdHMuY29tcGxldGUpLmZhaWwoai5vcHRzLmZhaWwpLmFsd2F5cyhqLm9wdHMuYWx3YXlzKX1uLkFuaW1hdGlvbj1uLmV4dGVuZChxYix7dHdlZW5lcnM6e1wiKlwiOltmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuY3JlYXRlVHdlZW4oYSxiKTtyZXR1cm4gWChjLmVsZW0sYSxVLmV4ZWMoYiksYyksY31dfSx0d2VlbmVyOmZ1bmN0aW9uKGEsYil7bi5pc0Z1bmN0aW9uKGEpPyhiPWEsYT1bXCIqXCJdKTphPWEubWF0Y2goRyk7Zm9yKHZhciBjLGQ9MCxlPWEubGVuZ3RoO2U+ZDtkKyspYz1hW2RdLHFiLnR3ZWVuZXJzW2NdPXFiLnR3ZWVuZXJzW2NdfHxbXSxxYi50d2VlbmVyc1tjXS51bnNoaWZ0KGIpfSxwcmVmaWx0ZXJzOltvYl0scHJlZmlsdGVyOmZ1bmN0aW9uKGEsYil7Yj9xYi5wcmVmaWx0ZXJzLnVuc2hpZnQoYSk6cWIucHJlZmlsdGVycy5wdXNoKGEpfX0pLG4uc3BlZWQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWEmJlwib2JqZWN0XCI9PXR5cGVvZiBhP24uZXh0ZW5kKHt9LGEpOntjb21wbGV0ZTpjfHwhYyYmYnx8bi5pc0Z1bmN0aW9uKGEpJiZhLGR1cmF0aW9uOmEsZWFzaW5nOmMmJmJ8fGImJiFuLmlzRnVuY3Rpb24oYikmJmJ9O3JldHVybiBkLmR1cmF0aW9uPW4uZngub2ZmPzA6XCJudW1iZXJcIj09dHlwZW9mIGQuZHVyYXRpb24/ZC5kdXJhdGlvbjpkLmR1cmF0aW9uIGluIG4uZnguc3BlZWRzP24uZnguc3BlZWRzW2QuZHVyYXRpb25dOm4uZnguc3BlZWRzLl9kZWZhdWx0LG51bGwhPWQucXVldWUmJmQucXVldWUhPT0hMHx8KGQucXVldWU9XCJmeFwiKSxkLm9sZD1kLmNvbXBsZXRlLGQuY29tcGxldGU9ZnVuY3Rpb24oKXtuLmlzRnVuY3Rpb24oZC5vbGQpJiZkLm9sZC5jYWxsKHRoaXMpLGQucXVldWUmJm4uZGVxdWV1ZSh0aGlzLGQucXVldWUpfSxkfSxuLmZuLmV4dGVuZCh7ZmFkZVRvOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLmZpbHRlcihXKS5jc3MoXCJvcGFjaXR5XCIsMCkuc2hvdygpLmVuZCgpLmFuaW1hdGUoe29wYWNpdHk6Yn0sYSxjLGQpfSxhbmltYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPW4uaXNFbXB0eU9iamVjdChhKSxmPW4uc3BlZWQoYixjLGQpLGc9ZnVuY3Rpb24oKXt2YXIgYj1xYih0aGlzLG4uZXh0ZW5kKHt9LGEpLGYpOyhlfHxuLl9kYXRhKHRoaXMsXCJmaW5pc2hcIikpJiZiLnN0b3AoITApfTtyZXR1cm4gZy5maW5pc2g9ZyxlfHxmLnF1ZXVlPT09ITE/dGhpcy5lYWNoKGcpOnRoaXMucXVldWUoZi5xdWV1ZSxnKX0sc3RvcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5zdG9wO2RlbGV0ZSBhLnN0b3AsYihjKX07cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihjPWIsYj1hLGE9dm9pZCAwKSxiJiZhIT09ITEmJnRoaXMucXVldWUoYXx8XCJmeFwiLFtdKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj0hMCxlPW51bGwhPWEmJmErXCJxdWV1ZUhvb2tzXCIsZj1uLnRpbWVycyxnPW4uX2RhdGEodGhpcyk7aWYoZSlnW2VdJiZnW2VdLnN0b3AmJmQoZ1tlXSk7ZWxzZSBmb3IoZSBpbiBnKWdbZV0mJmdbZV0uc3RvcCYma2IudGVzdChlKSYmZChnW2VdKTtmb3IoZT1mLmxlbmd0aDtlLS07KWZbZV0uZWxlbSE9PXRoaXN8fG51bGwhPWEmJmZbZV0ucXVldWUhPT1hfHwoZltlXS5hbmltLnN0b3AoYyksYj0hMSxmLnNwbGljZShlLDEpKTshYiYmY3x8bi5kZXF1ZXVlKHRoaXMsYSl9KX0sZmluaXNoOmZ1bmN0aW9uKGEpe3JldHVybiBhIT09ITEmJihhPWF8fFwiZnhcIiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGIsYz1uLl9kYXRhKHRoaXMpLGQ9Y1thK1wicXVldWVcIl0sZT1jW2ErXCJxdWV1ZUhvb2tzXCJdLGY9bi50aW1lcnMsZz1kP2QubGVuZ3RoOjA7Zm9yKGMuZmluaXNoPSEwLG4ucXVldWUodGhpcyxhLFtdKSxlJiZlLnN0b3AmJmUuc3RvcC5jYWxsKHRoaXMsITApLGI9Zi5sZW5ndGg7Yi0tOylmW2JdLmVsZW09PT10aGlzJiZmW2JdLnF1ZXVlPT09YSYmKGZbYl0uYW5pbS5zdG9wKCEwKSxmLnNwbGljZShiLDEpKTtmb3IoYj0wO2c+YjtiKyspZFtiXSYmZFtiXS5maW5pc2gmJmRbYl0uZmluaXNoLmNhbGwodGhpcyk7ZGVsZXRlIGMuZmluaXNofSl9fSksbi5lYWNoKFtcInRvZ2dsZVwiLFwic2hvd1wiLFwiaGlkZVwiXSxmdW5jdGlvbihhLGIpe3ZhciBjPW4uZm5bYl07bi5mbltiXT1mdW5jdGlvbihhLGQsZSl7cmV0dXJuIG51bGw9PWF8fFwiYm9vbGVhblwiPT10eXBlb2YgYT9jLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp0aGlzLmFuaW1hdGUobWIoYiwhMCksYSxkLGUpfX0pLG4uZWFjaCh7c2xpZGVEb3duOm1iKFwic2hvd1wiKSxzbGlkZVVwOm1iKFwiaGlkZVwiKSxzbGlkZVRvZ2dsZTptYihcInRvZ2dsZVwiKSxmYWRlSW46e29wYWNpdHk6XCJzaG93XCJ9LGZhZGVPdXQ6e29wYWNpdHk6XCJoaWRlXCJ9LGZhZGVUb2dnbGU6e29wYWNpdHk6XCJ0b2dnbGVcIn19LGZ1bmN0aW9uKGEsYil7bi5mblthXT1mdW5jdGlvbihhLGMsZCl7cmV0dXJuIHRoaXMuYW5pbWF0ZShiLGEsYyxkKX19KSxuLnRpbWVycz1bXSxuLmZ4LnRpY2s9ZnVuY3Rpb24oKXt2YXIgYSxiPW4udGltZXJzLGM9MDtmb3IoaGI9bi5ub3coKTtjPGIubGVuZ3RoO2MrKylhPWJbY10sYSgpfHxiW2NdIT09YXx8Yi5zcGxpY2UoYy0tLDEpO2IubGVuZ3RofHxuLmZ4LnN0b3AoKSxoYj12b2lkIDB9LG4uZngudGltZXI9ZnVuY3Rpb24oYSl7bi50aW1lcnMucHVzaChhKSxhKCk/bi5meC5zdGFydCgpOm4udGltZXJzLnBvcCgpfSxuLmZ4LmludGVydmFsPTEzLG4uZnguc3RhcnQ9ZnVuY3Rpb24oKXtpYnx8KGliPWEuc2V0SW50ZXJ2YWwobi5meC50aWNrLG4uZnguaW50ZXJ2YWwpKX0sbi5meC5zdG9wPWZ1bmN0aW9uKCl7YS5jbGVhckludGVydmFsKGliKSxpYj1udWxsfSxuLmZ4LnNwZWVkcz17c2xvdzo2MDAsZmFzdDoyMDAsX2RlZmF1bHQ6NDAwfSxuLmZuLmRlbGF5PWZ1bmN0aW9uKGIsYyl7cmV0dXJuIGI9bi5meD9uLmZ4LnNwZWVkc1tiXXx8YjpiLGM9Y3x8XCJmeFwiLHRoaXMucXVldWUoYyxmdW5jdGlvbihjLGQpe3ZhciBlPWEuc2V0VGltZW91dChjLGIpO2Quc3RvcD1mdW5jdGlvbigpe2EuY2xlYXJUaW1lb3V0KGUpfX0pfSxmdW5jdGlvbigpe3ZhciBhLGI9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYz1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZT1kLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksZj1lLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSk7Yz1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIixcInRcIiksYy5pbm5lckhUTUw9XCIgIDxsaW5rLz48dGFibGU+PC90YWJsZT48YSBocmVmPScvYSc+YTwvYT48aW5wdXQgdHlwZT0nY2hlY2tib3gnLz5cIixhPWMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhXCIpWzBdLGIuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiY2hlY2tib3hcIiksYy5hcHBlbmRDaGlsZChiKSxhPWMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhXCIpWzBdLGEuc3R5bGUuY3NzVGV4dD1cInRvcDoxcHhcIixsLmdldFNldEF0dHJpYnV0ZT1cInRcIiE9PWMuY2xhc3NOYW1lLGwuc3R5bGU9L3RvcC8udGVzdChhLmdldEF0dHJpYnV0ZShcInN0eWxlXCIpKSxsLmhyZWZOb3JtYWxpemVkPVwiL2FcIj09PWEuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxsLmNoZWNrT249ISFiLnZhbHVlLGwub3B0U2VsZWN0ZWQ9Zi5zZWxlY3RlZCxsLmVuY3R5cGU9ISFkLmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpLmVuY3R5cGUsZS5kaXNhYmxlZD0hMCxsLm9wdERpc2FibGVkPSFmLmRpc2FibGVkLGI9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLGwuaW5wdXQ9XCJcIj09PWIuZ2V0QXR0cmlidXRlKFwidmFsdWVcIiksYi52YWx1ZT1cInRcIixiLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInJhZGlvXCIpLGwucmFkaW9WYWx1ZT1cInRcIj09PWIudmFsdWV9KCk7dmFyIHJiPS9cXHIvZyxzYj0vW1xceDIwXFx0XFxyXFxuXFxmXSsvZztuLmZuLmV4dGVuZCh7dmFsOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlPXRoaXNbMF07e2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGQ9bi5pc0Z1bmN0aW9uKGEpLHRoaXMuZWFjaChmdW5jdGlvbihjKXt2YXIgZTsxPT09dGhpcy5ub2RlVHlwZSYmKGU9ZD9hLmNhbGwodGhpcyxjLG4odGhpcykudmFsKCkpOmEsbnVsbD09ZT9lPVwiXCI6XCJudW1iZXJcIj09dHlwZW9mIGU/ZSs9XCJcIjpuLmlzQXJyYXkoZSkmJihlPW4ubWFwKGUsZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjphK1wiXCJ9KSksYj1uLnZhbEhvb2tzW3RoaXMudHlwZV18fG4udmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcInNldFwiaW4gYiYmdm9pZCAwIT09Yi5zZXQodGhpcyxlLFwidmFsdWVcIil8fCh0aGlzLnZhbHVlPWUpKX0pO2lmKGUpcmV0dXJuIGI9bi52YWxIb29rc1tlLnR5cGVdfHxuLnZhbEhvb2tzW2Uubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJnZXRcImluIGImJnZvaWQgMCE9PShjPWIuZ2V0KGUsXCJ2YWx1ZVwiKSk/YzooYz1lLnZhbHVlLFwic3RyaW5nXCI9PXR5cGVvZiBjP2MucmVwbGFjZShyYixcIlwiKTpudWxsPT1jP1wiXCI6Yyl9fX0pLG4uZXh0ZW5kKHt2YWxIb29rczp7b3B0aW9uOntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9bi5maW5kLmF0dHIoYSxcInZhbHVlXCIpO3JldHVybiBudWxsIT1iP2I6bi50cmltKG4udGV4dChhKSkucmVwbGFjZShzYixcIiBcIil9fSxzZWxlY3Q6e2dldDpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkPWEub3B0aW9ucyxlPWEuc2VsZWN0ZWRJbmRleCxmPVwic2VsZWN0LW9uZVwiPT09YS50eXBlfHwwPmUsZz1mP251bGw6W10saD1mP2UrMTpkLmxlbmd0aCxpPTA+ZT9oOmY/ZTowO2g+aTtpKyspaWYoYz1kW2ldLChjLnNlbGVjdGVkfHxpPT09ZSkmJihsLm9wdERpc2FibGVkPyFjLmRpc2FibGVkOm51bGw9PT1jLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpKSYmKCFjLnBhcmVudE5vZGUuZGlzYWJsZWR8fCFuLm5vZGVOYW1lKGMucGFyZW50Tm9kZSxcIm9wdGdyb3VwXCIpKSl7aWYoYj1uKGMpLnZhbCgpLGYpcmV0dXJuIGI7Zy5wdXNoKGIpfXJldHVybiBnfSxzZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9YS5vcHRpb25zLGY9bi5tYWtlQXJyYXkoYiksZz1lLmxlbmd0aDt3aGlsZShnLS0paWYoZD1lW2ddLG4uaW5BcnJheShuLnZhbEhvb2tzLm9wdGlvbi5nZXQoZCksZik+LTEpdHJ5e2Quc2VsZWN0ZWQ9Yz0hMH1jYXRjaChoKXtkLnNjcm9sbEhlaWdodH1lbHNlIGQuc2VsZWN0ZWQ9ITE7cmV0dXJuIGN8fChhLnNlbGVjdGVkSW5kZXg9LTEpLGV9fX19KSxuLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7bi52YWxIb29rc1t0aGlzXT17c2V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uaXNBcnJheShiKT9hLmNoZWNrZWQ9bi5pbkFycmF5KG4oYSkudmFsKCksYik+LTE6dm9pZCAwfX0sbC5jaGVja09ufHwobi52YWxIb29rc1t0aGlzXS5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PT1hLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpP1wib25cIjphLnZhbHVlfSl9KTt2YXIgdGIsdWIsdmI9bi5leHByLmF0dHJIYW5kbGUsd2I9L14oPzpjaGVja2VkfHNlbGVjdGVkKSQvaSx4Yj1sLmdldFNldEF0dHJpYnV0ZSx5Yj1sLmlucHV0O24uZm4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFkodGhpcyxuLmF0dHIsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24ucmVtb3ZlQXR0cih0aGlzLGEpfSl9fSksbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1hLm5vZGVUeXBlO2lmKDMhPT1mJiY4IT09ZiYmMiE9PWYpcmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGEuZ2V0QXR0cmlidXRlP24ucHJvcChhLGIsYyk6KDE9PT1mJiZuLmlzWE1MRG9jKGEpfHwoYj1iLnRvTG93ZXJDYXNlKCksZT1uLmF0dHJIb29rc1tiXXx8KG4uZXhwci5tYXRjaC5ib29sLnRlc3QoYik/dWI6dGIpKSx2b2lkIDAhPT1jP251bGw9PT1jP3ZvaWQgbi5yZW1vdmVBdHRyKGEsYik6ZSYmXCJzZXRcImluIGUmJnZvaWQgMCE9PShkPWUuc2V0KGEsYyxiKSk/ZDooYS5zZXRBdHRyaWJ1dGUoYixjK1wiXCIpLGMpOmUmJlwiZ2V0XCJpbiBlJiZudWxsIT09KGQ9ZS5nZXQoYSxiKSk/ZDooZD1uLmZpbmQuYXR0cihhLGIpLG51bGw9PWQ/dm9pZCAwOmQpKX0sYXR0ckhvb2tzOnt0eXBlOntzZXQ6ZnVuY3Rpb24oYSxiKXtpZighbC5yYWRpb1ZhbHVlJiZcInJhZGlvXCI9PT1iJiZuLm5vZGVOYW1lKGEsXCJpbnB1dFwiKSl7dmFyIGM9YS52YWx1ZTtyZXR1cm4gYS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsYiksYyYmKGEudmFsdWU9YyksYn19fX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT0wLGY9YiYmYi5tYXRjaChHKTtpZihmJiYxPT09YS5ub2RlVHlwZSl3aGlsZShjPWZbZSsrXSlkPW4ucHJvcEZpeFtjXXx8YyxuLmV4cHIubWF0Y2guYm9vbC50ZXN0KGMpP3liJiZ4Ynx8IXdiLnRlc3QoYyk/YVtkXT0hMTphW24uY2FtZWxDYXNlKFwiZGVmYXVsdC1cIitjKV09YVtkXT0hMTpuLmF0dHIoYSxjLFwiXCIpLGEucmVtb3ZlQXR0cmlidXRlKHhiP2M6ZCl9fSksdWI9e3NldDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGI9PT0hMT9uLnJlbW92ZUF0dHIoYSxjKTp5YiYmeGJ8fCF3Yi50ZXN0KGMpP2Euc2V0QXR0cmlidXRlKCF4YiYmbi5wcm9wRml4W2NdfHxjLGMpOmFbbi5jYW1lbENhc2UoXCJkZWZhdWx0LVwiK2MpXT1hW2NdPSEwLGN9fSxuLmVhY2gobi5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKC9cXHcrL2cpLGZ1bmN0aW9uKGEsYil7dmFyIGM9dmJbYl18fG4uZmluZC5hdHRyO3liJiZ4Ynx8IXdiLnRlc3QoYik/dmJbYl09ZnVuY3Rpb24oYSxiLGQpe3ZhciBlLGY7cmV0dXJuIGR8fChmPXZiW2JdLHZiW2JdPWUsZT1udWxsIT1jKGEsYixkKT9iLnRvTG93ZXJDYXNlKCk6bnVsbCx2YltiXT1mKSxlfTp2YltiXT1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGM/dm9pZCAwOmFbbi5jYW1lbENhc2UoXCJkZWZhdWx0LVwiK2IpXT9iLnRvTG93ZXJDYXNlKCk6bnVsbH19KSx5YiYmeGJ8fChuLmF0dHJIb29rcy52YWx1ZT17c2V0OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbi5ub2RlTmFtZShhLFwiaW5wdXRcIik/dm9pZChhLmRlZmF1bHRWYWx1ZT1iKTp0YiYmdGIuc2V0KGEsYixjKX19KSx4Ynx8KHRiPXtzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWEuZ2V0QXR0cmlidXRlTm9kZShjKTtyZXR1cm4gZHx8YS5zZXRBdHRyaWJ1dGVOb2RlKGQ9YS5vd25lckRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShjKSksZC52YWx1ZT1iKz1cIlwiLFwidmFsdWVcIj09PWN8fGI9PT1hLmdldEF0dHJpYnV0ZShjKT9iOnZvaWQgMH19LHZiLmlkPXZiLm5hbWU9dmIuY29vcmRzPWZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gYz92b2lkIDA6KGQ9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpKSYmXCJcIiE9PWQudmFsdWU/ZC52YWx1ZTpudWxsfSxuLnZhbEhvb2tzLmJ1dHRvbj17Z2V0OmZ1bmN0aW9uKGEsYil7dmFyIGM9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpO3JldHVybiBjJiZjLnNwZWNpZmllZD9jLnZhbHVlOnZvaWQgMH0sc2V0OnRiLnNldH0sbi5hdHRySG9va3MuY29udGVudGVkaXRhYmxlPXtzZXQ6ZnVuY3Rpb24oYSxiLGMpe3RiLnNldChhLFwiXCI9PT1iPyExOmIsYyl9fSxuLmVhY2goW1wid2lkdGhcIixcImhlaWdodFwiXSxmdW5jdGlvbihhLGIpe24uYXR0ckhvb2tzW2JdPXtzZXQ6ZnVuY3Rpb24oYSxjKXtyZXR1cm5cIlwiPT09Yz8oYS5zZXRBdHRyaWJ1dGUoYixcImF1dG9cIiksYyk6dm9pZCAwfX19KSksbC5zdHlsZXx8KG4uYXR0ckhvb2tzLnN0eWxlPXtnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuc3R5bGUuY3NzVGV4dHx8dm9pZCAwfSxzZXQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5zdHlsZS5jc3NUZXh0PWIrXCJcIn19KTt2YXIgemI9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9ufG9iamVjdCkkL2ksQWI9L14oPzphfGFyZWEpJC9pO24uZm4uZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFkodGhpcyxuLnByb3AsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZVByb3A6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9bi5wcm9wRml4W2FdfHxhLHRoaXMuZWFjaChmdW5jdGlvbigpe3RyeXt0aGlzW2FdPXZvaWQgMCxkZWxldGUgdGhpc1thXX1jYXRjaChiKXt9fSl9fSksbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1hLm5vZGVUeXBlO2lmKDMhPT1mJiY4IT09ZiYmMiE9PWYpcmV0dXJuIDE9PT1mJiZuLmlzWE1MRG9jKGEpfHwoYj1uLnByb3BGaXhbYl18fGIsZT1uLnByb3BIb29rc1tiXSksdm9pZCAwIT09Yz9lJiZcInNldFwiaW4gZSYmdm9pZCAwIT09KGQ9ZS5zZXQoYSxjLGIpKT9kOmFbYl09YzplJiZcImdldFwiaW4gZSYmbnVsbCE9PShkPWUuZ2V0KGEsYikpP2Q6YVtiXX0scHJvcEhvb2tzOnt0YWJJbmRleDp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPW4uZmluZC5hdHRyKGEsXCJ0YWJpbmRleFwiKTtyZXR1cm4gYj9wYXJzZUludChiLDEwKTp6Yi50ZXN0KGEubm9kZU5hbWUpfHxBYi50ZXN0KGEubm9kZU5hbWUpJiZhLmhyZWY/MDotMX19fSxwcm9wRml4OntcImZvclwiOlwiaHRtbEZvclwiLFwiY2xhc3NcIjpcImNsYXNzTmFtZVwifX0pLGwuaHJlZk5vcm1hbGl6ZWR8fG4uZWFjaChbXCJocmVmXCIsXCJzcmNcIl0sZnVuY3Rpb24oYSxiKXtuLnByb3BIb29rc1tiXT17Z2V0OmZ1bmN0aW9uKGEpe3JldHVybiBhLmdldEF0dHJpYnV0ZShiLDQpfX19KSxsLm9wdFNlbGVjdGVkfHwobi5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJihiLnNlbGVjdGVkSW5kZXgsYi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCksbnVsbH0sc2V0OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtiJiYoYi5zZWxlY3RlZEluZGV4LGIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgpfX0pLG4uZWFjaChbXCJ0YWJJbmRleFwiLFwicmVhZE9ubHlcIixcIm1heExlbmd0aFwiLFwiY2VsbFNwYWNpbmdcIixcImNlbGxQYWRkaW5nXCIsXCJyb3dTcGFuXCIsXCJjb2xTcGFuXCIsXCJ1c2VNYXBcIixcImZyYW1lQm9yZGVyXCIsXCJjb250ZW50RWRpdGFibGVcIl0sZnVuY3Rpb24oKXtuLnByb3BGaXhbdGhpcy50b0xvd2VyQ2FzZSgpXT10aGlzfSksbC5lbmN0eXBlfHwobi5wcm9wRml4LmVuY3R5cGU9XCJlbmNvZGluZ1wiKTt2YXIgQmI9L1tcXHRcXHJcXG5cXGZdL2c7ZnVuY3Rpb24gQ2IoYSl7cmV0dXJuIG4uYXR0cihhLFwiY2xhc3NcIil8fFwiXCJ9bi5mbi5leHRlbmQoe2FkZENsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGk9MDtpZihuLmlzRnVuY3Rpb24oYSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLmFkZENsYXNzKGEuY2FsbCh0aGlzLGIsQ2IodGhpcykpKX0pO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiZhKXtiPWEubWF0Y2goRyl8fFtdO3doaWxlKGM9dGhpc1tpKytdKWlmKGU9Q2IoYyksZD0xPT09Yy5ub2RlVHlwZSYmKFwiIFwiK2UrXCIgXCIpLnJlcGxhY2UoQmIsXCIgXCIpKXtnPTA7d2hpbGUoZj1iW2crK10pZC5pbmRleE9mKFwiIFwiK2YrXCIgXCIpPDAmJihkKz1mK1wiIFwiKTtoPW4udHJpbShkKSxlIT09aCYmbi5hdHRyKGMsXCJjbGFzc1wiLGgpfX1yZXR1cm4gdGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaT0wO2lmKG4uaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykucmVtb3ZlQ2xhc3MoYS5jYWxsKHRoaXMsYixDYih0aGlzKSkpfSk7aWYoIWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMuYXR0cihcImNsYXNzXCIsXCJcIik7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJmEpe2I9YS5tYXRjaChHKXx8W107d2hpbGUoYz10aGlzW2krK10paWYoZT1DYihjKSxkPTE9PT1jLm5vZGVUeXBlJiYoXCIgXCIrZStcIiBcIikucmVwbGFjZShCYixcIiBcIikpe2c9MDt3aGlsZShmPWJbZysrXSl3aGlsZShkLmluZGV4T2YoXCIgXCIrZitcIiBcIik+LTEpZD1kLnJlcGxhY2UoXCIgXCIrZitcIiBcIixcIiBcIik7aD1uLnRyaW0oZCksZSE9PWgmJm4uYXR0cihjLFwiY2xhc3NcIixoKX19cmV0dXJuIHRoaXN9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKGEsYil7dmFyIGM9dHlwZW9mIGE7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBiJiZcInN0cmluZ1wiPT09Yz9iP3RoaXMuYWRkQ2xhc3MoYSk6dGhpcy5yZW1vdmVDbGFzcyhhKTpuLmlzRnVuY3Rpb24oYSk/dGhpcy5lYWNoKGZ1bmN0aW9uKGMpe24odGhpcykudG9nZ2xlQ2xhc3MoYS5jYWxsKHRoaXMsYyxDYih0aGlzKSxiKSxiKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiLGQsZSxmO2lmKFwic3RyaW5nXCI9PT1jKXtkPTAsZT1uKHRoaXMpLGY9YS5tYXRjaChHKXx8W107d2hpbGUoYj1mW2QrK10pZS5oYXNDbGFzcyhiKT9lLnJlbW92ZUNsYXNzKGIpOmUuYWRkQ2xhc3MoYil9ZWxzZSB2b2lkIDAhPT1hJiZcImJvb2xlYW5cIiE9PWN8fChiPUNiKHRoaXMpLGImJm4uX2RhdGEodGhpcyxcIl9fY2xhc3NOYW1lX19cIixiKSxuLmF0dHIodGhpcyxcImNsYXNzXCIsYnx8YT09PSExP1wiXCI6bi5fZGF0YSh0aGlzLFwiX19jbGFzc05hbWVfX1wiKXx8XCJcIikpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZD0wO2I9XCIgXCIrYStcIiBcIjt3aGlsZShjPXRoaXNbZCsrXSlpZigxPT09Yy5ub2RlVHlwZSYmKFwiIFwiK0NiKGMpK1wiIFwiKS5yZXBsYWNlKEJiLFwiIFwiKS5pbmRleE9mKGIpPi0xKXJldHVybiEwO3JldHVybiExfX0pLG4uZWFjaChcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCBsb2FkIHJlc2l6ZSBzY3JvbGwgdW5sb2FkIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgZXJyb3IgY29udGV4dG1lbnVcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtuLmZuW2JdPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MD90aGlzLm9uKGIsbnVsbCxhLGMpOnRoaXMudHJpZ2dlcihiKX19KSxuLmZuLmV4dGVuZCh7aG92ZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5tb3VzZWVudGVyKGEpLm1vdXNlbGVhdmUoYnx8YSl9fSk7dmFyIERiPWEubG9jYXRpb24sRWI9bi5ub3coKSxGYj0vXFw/LyxHYj0vKCwpfChcXFt8eyl8KH18XSl8XCIoPzpbXlwiXFxcXFxcclxcbl18XFxcXFtcIlxcXFxcXC9iZm5ydF18XFxcXHVbXFxkYS1mQS1GXXs0fSkqXCJcXHMqOj98dHJ1ZXxmYWxzZXxudWxsfC0/KD8hMFxcZClcXGQrKD86XFwuXFxkK3wpKD86W2VFXVsrLV0/XFxkK3wpL2c7bi5wYXJzZUpTT049ZnVuY3Rpb24oYil7aWYoYS5KU09OJiZhLkpTT04ucGFyc2UpcmV0dXJuIGEuSlNPTi5wYXJzZShiK1wiXCIpO3ZhciBjLGQ9bnVsbCxlPW4udHJpbShiK1wiXCIpO3JldHVybiBlJiYhbi50cmltKGUucmVwbGFjZShHYixmdW5jdGlvbihhLGIsZSxmKXtyZXR1cm4gYyYmYiYmKGQ9MCksMD09PWQ/YTooYz1lfHxiLGQrPSFmLSFlLFwiXCIpfSkpP0Z1bmN0aW9uKFwicmV0dXJuIFwiK2UpKCk6bi5lcnJvcihcIkludmFsaWQgSlNPTjogXCIrYil9LG4ucGFyc2VYTUw9ZnVuY3Rpb24oYil7dmFyIGMsZDtpZighYnx8XCJzdHJpbmdcIiE9dHlwZW9mIGIpcmV0dXJuIG51bGw7dHJ5e2EuRE9NUGFyc2VyPyhkPW5ldyBhLkRPTVBhcnNlcixjPWQucGFyc2VGcm9tU3RyaW5nKGIsXCJ0ZXh0L3htbFwiKSk6KGM9bmV3IGEuQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxET01cIiksYy5hc3luYz1cImZhbHNlXCIsYy5sb2FkWE1MKGIpKX1jYXRjaChlKXtjPXZvaWQgMH1yZXR1cm4gYyYmYy5kb2N1bWVudEVsZW1lbnQmJiFjLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIikubGVuZ3RofHxuLmVycm9yKFwiSW52YWxpZCBYTUw6IFwiK2IpLGN9O3ZhciBIYj0vIy4qJC8sSWI9LyhbPyZdKV89W14mXSovLEpiPS9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKVxccj8kL2dtLEtiPS9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLExiPS9eKD86R0VUfEhFQUQpJC8sTWI9L15cXC9cXC8vLE5iPS9eKFtcXHcuKy1dKzopKD86XFwvXFwvKD86W15cXC8/I10qQHwpKFteXFwvPyM6XSopKD86OihcXGQrKXwpfCkvLE9iPXt9LFBiPXt9LFFiPVwiKi9cIi5jb25jYXQoXCIqXCIpLFJiPURiLmhyZWYsU2I9TmIuZXhlYyhSYi50b0xvd2VyQ2FzZSgpKXx8W107ZnVuY3Rpb24gVGIoYSl7cmV0dXJuIGZ1bmN0aW9uKGIsYyl7XCJzdHJpbmdcIiE9dHlwZW9mIGImJihjPWIsYj1cIipcIik7dmFyIGQsZT0wLGY9Yi50b0xvd2VyQ2FzZSgpLm1hdGNoKEcpfHxbXTtpZihuLmlzRnVuY3Rpb24oYykpd2hpbGUoZD1mW2UrK10pXCIrXCI9PT1kLmNoYXJBdCgwKT8oZD1kLnNsaWNlKDEpfHxcIipcIiwoYVtkXT1hW2RdfHxbXSkudW5zaGlmdChjKSk6KGFbZF09YVtkXXx8W10pLnB1c2goYyl9fWZ1bmN0aW9uIFViKGEsYixjLGQpe3ZhciBlPXt9LGY9YT09PVBiO2Z1bmN0aW9uIGcoaCl7dmFyIGk7cmV0dXJuIGVbaF09ITAsbi5lYWNoKGFbaF18fFtdLGZ1bmN0aW9uKGEsaCl7dmFyIGo9aChiLGMsZCk7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGp8fGZ8fGVbal0/Zj8hKGk9aik6dm9pZCAwOihiLmRhdGFUeXBlcy51bnNoaWZ0KGopLGcoaiksITEpfSksaX1yZXR1cm4gZyhiLmRhdGFUeXBlc1swXSl8fCFlW1wiKlwiXSYmZyhcIipcIil9ZnVuY3Rpb24gVmIoYSxiKXt2YXIgYyxkLGU9bi5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnN8fHt9O2ZvcihkIGluIGIpdm9pZCAwIT09YltkXSYmKChlW2RdP2E6Y3x8KGM9e30pKVtkXT1iW2RdKTtyZXR1cm4gYyYmbi5leHRlbmQoITAsYSxjKSxhfWZ1bmN0aW9uIFdiKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY29udGVudHMsaT1hLmRhdGFUeXBlczt3aGlsZShcIipcIj09PWlbMF0paS5zaGlmdCgpLHZvaWQgMD09PWUmJihlPWEubWltZVR5cGV8fGIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIikpO2lmKGUpZm9yKGcgaW4gaClpZihoW2ddJiZoW2ddLnRlc3QoZSkpe2kudW5zaGlmdChnKTticmVha31pZihpWzBdaW4gYylmPWlbMF07ZWxzZXtmb3IoZyBpbiBjKXtpZighaVswXXx8YS5jb252ZXJ0ZXJzW2crXCIgXCIraVswXV0pe2Y9ZzticmVha31kfHwoZD1nKX1mPWZ8fGR9cmV0dXJuIGY/KGYhPT1pWzBdJiZpLnVuc2hpZnQoZiksY1tmXSk6dm9pZCAwfWZ1bmN0aW9uIFhiKGEsYixjLGQpe3ZhciBlLGYsZyxoLGksaj17fSxrPWEuZGF0YVR5cGVzLnNsaWNlKCk7aWYoa1sxXSlmb3IoZyBpbiBhLmNvbnZlcnRlcnMpaltnLnRvTG93ZXJDYXNlKCldPWEuY29udmVydGVyc1tnXTtmPWsuc2hpZnQoKTt3aGlsZShmKWlmKGEucmVzcG9uc2VGaWVsZHNbZl0mJihjW2EucmVzcG9uc2VGaWVsZHNbZl1dPWIpLCFpJiZkJiZhLmRhdGFGaWx0ZXImJihiPWEuZGF0YUZpbHRlcihiLGEuZGF0YVR5cGUpKSxpPWYsZj1rLnNoaWZ0KCkpaWYoXCIqXCI9PT1mKWY9aTtlbHNlIGlmKFwiKlwiIT09aSYmaSE9PWYpe2lmKGc9altpK1wiIFwiK2ZdfHxqW1wiKiBcIitmXSwhZylmb3IoZSBpbiBqKWlmKGg9ZS5zcGxpdChcIiBcIiksaFsxXT09PWYmJihnPWpbaStcIiBcIitoWzBdXXx8altcIiogXCIraFswXV0pKXtnPT09ITA/Zz1qW2VdOmpbZV0hPT0hMCYmKGY9aFswXSxrLnVuc2hpZnQoaFsxXSkpO2JyZWFrfWlmKGchPT0hMClpZihnJiZhW1widGhyb3dzXCJdKWI9ZyhiKTtlbHNlIHRyeXtiPWcoYil9Y2F0Y2gobCl7cmV0dXJue3N0YXRlOlwicGFyc2VyZXJyb3JcIixlcnJvcjpnP2w6XCJObyBjb252ZXJzaW9uIGZyb20gXCIraStcIiB0byBcIitmfX19cmV0dXJue3N0YXRlOlwic3VjY2Vzc1wiLGRhdGE6Yn19bi5leHRlbmQoe2FjdGl2ZTowLGxhc3RNb2RpZmllZDp7fSxldGFnOnt9LGFqYXhTZXR0aW5nczp7dXJsOlJiLHR5cGU6XCJHRVRcIixpc0xvY2FsOktiLnRlc3QoU2JbMV0pLGdsb2JhbDohMCxwcm9jZXNzRGF0YTohMCxhc3luYzohMCxjb250ZW50VHlwZTpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLGFjY2VwdHM6e1wiKlwiOlFiLHRleHQ6XCJ0ZXh0L3BsYWluXCIsaHRtbDpcInRleHQvaHRtbFwiLHhtbDpcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixqc29uOlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJ9LGNvbnRlbnRzOnt4bWw6L1xcYnhtbFxcYi8saHRtbDovXFxiaHRtbC8sanNvbjovXFxianNvblxcYi99LHJlc3BvbnNlRmllbGRzOnt4bWw6XCJyZXNwb25zZVhNTFwiLHRleHQ6XCJyZXNwb25zZVRleHRcIixqc29uOlwicmVzcG9uc2VKU09OXCJ9LGNvbnZlcnRlcnM6e1wiKiB0ZXh0XCI6U3RyaW5nLFwidGV4dCBodG1sXCI6ITAsXCJ0ZXh0IGpzb25cIjpuLnBhcnNlSlNPTixcInRleHQgeG1sXCI6bi5wYXJzZVhNTH0sZmxhdE9wdGlvbnM6e3VybDohMCxjb250ZXh0OiEwfX0sYWpheFNldHVwOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/VmIoVmIoYSxuLmFqYXhTZXR0aW5ncyksYik6VmIobi5hamF4U2V0dGluZ3MsYSl9LGFqYXhQcmVmaWx0ZXI6VGIoT2IpLGFqYXhUcmFuc3BvcnQ6VGIoUGIpLGFqYXg6ZnVuY3Rpb24oYixjKXtcIm9iamVjdFwiPT10eXBlb2YgYiYmKGM9YixiPXZvaWQgMCksYz1jfHx7fTt2YXIgZCxlLGYsZyxoLGksaixrLGw9bi5hamF4U2V0dXAoe30sYyksbT1sLmNvbnRleHR8fGwsbz1sLmNvbnRleHQmJihtLm5vZGVUeXBlfHxtLmpxdWVyeSk/bihtKTpuLmV2ZW50LHA9bi5EZWZlcnJlZCgpLHE9bi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxyPWwuc3RhdHVzQ29kZXx8e30scz17fSx0PXt9LHU9MCx2PVwiY2FuY2VsZWRcIix3PXtyZWFkeVN0YXRlOjAsZ2V0UmVzcG9uc2VIZWFkZXI6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoMj09PXUpe2lmKCFrKXtrPXt9O3doaWxlKGI9SmIuZXhlYyhnKSlrW2JbMV0udG9Mb3dlckNhc2UoKV09YlsyXX1iPWtbYS50b0xvd2VyQ2FzZSgpXX1yZXR1cm4gbnVsbD09Yj9udWxsOmJ9LGdldEFsbFJlc3BvbnNlSGVhZGVyczpmdW5jdGlvbigpe3JldHVybiAyPT09dT9nOm51bGx9LHNldFJlcXVlc3RIZWFkZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLnRvTG93ZXJDYXNlKCk7cmV0dXJuIHV8fChhPXRbY109dFtjXXx8YSxzW2FdPWIpLHRoaXN9LG92ZXJyaWRlTWltZVR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIHV8fChsLm1pbWVUeXBlPWEpLHRoaXN9LHN0YXR1c0NvZGU6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoYSlpZigyPnUpZm9yKGIgaW4gYSlyW2JdPVtyW2JdLGFbYl1dO2Vsc2Ugdy5hbHdheXMoYVt3LnN0YXR1c10pO3JldHVybiB0aGlzfSxhYm9ydDpmdW5jdGlvbihhKXt2YXIgYj1hfHx2O3JldHVybiBqJiZqLmFib3J0KGIpLHkoMCxiKSx0aGlzfX07aWYocC5wcm9taXNlKHcpLmNvbXBsZXRlPXEuYWRkLHcuc3VjY2Vzcz13LmRvbmUsdy5lcnJvcj13LmZhaWwsbC51cmw9KChifHxsLnVybHx8UmIpK1wiXCIpLnJlcGxhY2UoSGIsXCJcIikucmVwbGFjZShNYixTYlsxXStcIi8vXCIpLGwudHlwZT1jLm1ldGhvZHx8Yy50eXBlfHxsLm1ldGhvZHx8bC50eXBlLGwuZGF0YVR5cGVzPW4udHJpbShsLmRhdGFUeXBlfHxcIipcIikudG9Mb3dlckNhc2UoKS5tYXRjaChHKXx8W1wiXCJdLG51bGw9PWwuY3Jvc3NEb21haW4mJihkPU5iLmV4ZWMobC51cmwudG9Mb3dlckNhc2UoKSksbC5jcm9zc0RvbWFpbj0hKCFkfHxkWzFdPT09U2JbMV0mJmRbMl09PT1TYlsyXSYmKGRbM118fChcImh0dHA6XCI9PT1kWzFdP1wiODBcIjpcIjQ0M1wiKSk9PT0oU2JbM118fChcImh0dHA6XCI9PT1TYlsxXT9cIjgwXCI6XCI0NDNcIikpKSksbC5kYXRhJiZsLnByb2Nlc3NEYXRhJiZcInN0cmluZ1wiIT10eXBlb2YgbC5kYXRhJiYobC5kYXRhPW4ucGFyYW0obC5kYXRhLGwudHJhZGl0aW9uYWwpKSxVYihPYixsLGMsdyksMj09PXUpcmV0dXJuIHc7aT1uLmV2ZW50JiZsLmdsb2JhbCxpJiYwPT09bi5hY3RpdmUrKyYmbi5ldmVudC50cmlnZ2VyKFwiYWpheFN0YXJ0XCIpLGwudHlwZT1sLnR5cGUudG9VcHBlckNhc2UoKSxsLmhhc0NvbnRlbnQ9IUxiLnRlc3QobC50eXBlKSxmPWwudXJsLGwuaGFzQ29udGVudHx8KGwuZGF0YSYmKGY9bC51cmwrPShGYi50ZXN0KGYpP1wiJlwiOlwiP1wiKStsLmRhdGEsZGVsZXRlIGwuZGF0YSksbC5jYWNoZT09PSExJiYobC51cmw9SWIudGVzdChmKT9mLnJlcGxhY2UoSWIsXCIkMV89XCIrRWIrKyk6ZisoRmIudGVzdChmKT9cIiZcIjpcIj9cIikrXCJfPVwiK0ViKyspKSxsLmlmTW9kaWZpZWQmJihuLmxhc3RNb2RpZmllZFtmXSYmdy5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTW9kaWZpZWQtU2luY2VcIixuLmxhc3RNb2RpZmllZFtmXSksbi5ldGFnW2ZdJiZ3LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Ob25lLU1hdGNoXCIsbi5ldGFnW2ZdKSksKGwuZGF0YSYmbC5oYXNDb250ZW50JiZsLmNvbnRlbnRUeXBlIT09ITF8fGMuY29udGVudFR5cGUpJiZ3LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixsLmNvbnRlbnRUeXBlKSx3LnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIixsLmRhdGFUeXBlc1swXSYmbC5hY2NlcHRzW2wuZGF0YVR5cGVzWzBdXT9sLmFjY2VwdHNbbC5kYXRhVHlwZXNbMF1dKyhcIipcIiE9PWwuZGF0YVR5cGVzWzBdP1wiLCBcIitRYitcIjsgcT0wLjAxXCI6XCJcIik6bC5hY2NlcHRzW1wiKlwiXSk7Zm9yKGUgaW4gbC5oZWFkZXJzKXcuc2V0UmVxdWVzdEhlYWRlcihlLGwuaGVhZGVyc1tlXSk7aWYobC5iZWZvcmVTZW5kJiYobC5iZWZvcmVTZW5kLmNhbGwobSx3LGwpPT09ITF8fDI9PT11KSlyZXR1cm4gdy5hYm9ydCgpO3Y9XCJhYm9ydFwiO2ZvcihlIGlue3N1Y2Nlc3M6MSxlcnJvcjoxLGNvbXBsZXRlOjF9KXdbZV0obFtlXSk7aWYoaj1VYihQYixsLGMsdykpe2lmKHcucmVhZHlTdGF0ZT0xLGkmJm8udHJpZ2dlcihcImFqYXhTZW5kXCIsW3csbF0pLDI9PT11KXJldHVybiB3O2wuYXN5bmMmJmwudGltZW91dD4wJiYoaD1hLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt3LmFib3J0KFwidGltZW91dFwiKX0sbC50aW1lb3V0KSk7dHJ5e3U9MSxqLnNlbmQocyx5KX1jYXRjaCh4KXtpZighKDI+dSkpdGhyb3cgeDt5KC0xLHgpfX1lbHNlIHkoLTEsXCJObyBUcmFuc3BvcnRcIik7ZnVuY3Rpb24geShiLGMsZCxlKXt2YXIgayxzLHQsdix4LHk9YzsyIT09dSYmKHU9MixoJiZhLmNsZWFyVGltZW91dChoKSxqPXZvaWQgMCxnPWV8fFwiXCIsdy5yZWFkeVN0YXRlPWI+MD80OjAsaz1iPj0yMDAmJjMwMD5ifHwzMDQ9PT1iLGQmJih2PVdiKGwsdyxkKSksdj1YYihsLHYsdyxrKSxrPyhsLmlmTW9kaWZpZWQmJih4PXcuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpLHgmJihuLmxhc3RNb2RpZmllZFtmXT14KSx4PXcuZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpLHgmJihuLmV0YWdbZl09eCkpLDIwND09PWJ8fFwiSEVBRFwiPT09bC50eXBlP3k9XCJub2NvbnRlbnRcIjozMDQ9PT1iP3k9XCJub3Rtb2RpZmllZFwiOih5PXYuc3RhdGUscz12LmRhdGEsdD12LmVycm9yLGs9IXQpKToodD15LCFiJiZ5fHwoeT1cImVycm9yXCIsMD5iJiYoYj0wKSkpLHcuc3RhdHVzPWIsdy5zdGF0dXNUZXh0PShjfHx5KStcIlwiLGs/cC5yZXNvbHZlV2l0aChtLFtzLHksd10pOnAucmVqZWN0V2l0aChtLFt3LHksdF0pLHcuc3RhdHVzQ29kZShyKSxyPXZvaWQgMCxpJiZvLnRyaWdnZXIoaz9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbdyxsLGs/czp0XSkscS5maXJlV2l0aChtLFt3LHldKSxpJiYoby50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW3csbF0pLC0tbi5hY3RpdmV8fG4uZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIHd9LGdldEpTT046ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuLmdldChhLGIsYyxcImpzb25cIil9LGdldFNjcmlwdDpmdW5jdGlvbihhLGIpe3JldHVybiBuLmdldChhLHZvaWQgMCxiLFwic2NyaXB0XCIpfX0pLG4uZWFjaChbXCJnZXRcIixcInBvc3RcIl0sZnVuY3Rpb24oYSxiKXtuW2JdPWZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBuLmlzRnVuY3Rpb24oYykmJihlPWV8fGQsZD1jLGM9dm9pZCAwKSxuLmFqYXgobi5leHRlbmQoe3VybDphLHR5cGU6YixkYXRhVHlwZTplLGRhdGE6YyxzdWNjZXNzOmR9LG4uaXNQbGFpbk9iamVjdChhKSYmYSkpfX0pLG4uX2V2YWxVcmw9ZnVuY3Rpb24oYSl7cmV0dXJuIG4uYWpheCh7dXJsOmEsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsY2FjaGU6ITAsYXN5bmM6ITEsZ2xvYmFsOiExLFwidGhyb3dzXCI6ITB9KX0sbi5mbi5leHRlbmQoe3dyYXBBbGw6ZnVuY3Rpb24oYSl7aWYobi5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS53cmFwQWxsKGEuY2FsbCh0aGlzLGIpKX0pO2lmKHRoaXNbMF0pe3ZhciBiPW4oYSx0aGlzWzBdLm93bmVyRG9jdW1lbnQpLmVxKDApLmNsb25lKCEwKTt0aGlzWzBdLnBhcmVudE5vZGUmJmIuaW5zZXJ0QmVmb3JlKHRoaXNbMF0pLGIubWFwKGZ1bmN0aW9uKCl7dmFyIGE9dGhpczt3aGlsZShhLmZpcnN0Q2hpbGQmJjE9PT1hLmZpcnN0Q2hpbGQubm9kZVR5cGUpYT1hLmZpcnN0Q2hpbGQ7cmV0dXJuIGF9KS5hcHBlbmQodGhpcyl9cmV0dXJuIHRoaXN9LHdyYXBJbm5lcjpmdW5jdGlvbihhKXtyZXR1cm4gbi5pc0Z1bmN0aW9uKGEpP3RoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLndyYXBJbm5lcihhLmNhbGwodGhpcyxiKSl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1uKHRoaXMpLGM9Yi5jb250ZW50cygpO2MubGVuZ3RoP2Mud3JhcEFsbChhKTpiLmFwcGVuZChhKX0pfSx3cmFwOmZ1bmN0aW9uKGEpe3ZhciBiPW4uaXNGdW5jdGlvbihhKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe24odGhpcykud3JhcEFsbChiP2EuY2FsbCh0aGlzLGMpOmEpfSl9LHVud3JhcDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnBhcmVudCgpLmVhY2goZnVuY3Rpb24oKXtuLm5vZGVOYW1lKHRoaXMsXCJib2R5XCIpfHxuKHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyl9KS5lbmQoKX19KTtmdW5jdGlvbiBZYihhKXtyZXR1cm4gYS5zdHlsZSYmYS5zdHlsZS5kaXNwbGF5fHxuLmNzcyhhLFwiZGlzcGxheVwiKX1mdW5jdGlvbiBaYihhKXtpZighbi5jb250YWlucyhhLm93bmVyRG9jdW1lbnR8fGQsYSkpcmV0dXJuITA7d2hpbGUoYSYmMT09PWEubm9kZVR5cGUpe2lmKFwibm9uZVwiPT09WWIoYSl8fFwiaGlkZGVuXCI9PT1hLnR5cGUpcmV0dXJuITA7YT1hLnBhcmVudE5vZGV9cmV0dXJuITF9bi5leHByLmZpbHRlcnMuaGlkZGVuPWZ1bmN0aW9uKGEpe3JldHVybiBsLnJlbGlhYmxlSGlkZGVuT2Zmc2V0cygpP2Eub2Zmc2V0V2lkdGg8PTAmJmEub2Zmc2V0SGVpZ2h0PD0wJiYhYS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aDpaYihhKX0sbi5leHByLmZpbHRlcnMudmlzaWJsZT1mdW5jdGlvbihhKXtyZXR1cm4hbi5leHByLmZpbHRlcnMuaGlkZGVuKGEpfTt2YXIgJGI9LyUyMC9nLF9iPS9cXFtcXF0kLyxhYz0vXFxyP1xcbi9nLGJjPS9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSxjYz0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7ZnVuY3Rpb24gZGMoYSxiLGMsZCl7dmFyIGU7aWYobi5pc0FycmF5KGIpKW4uZWFjaChiLGZ1bmN0aW9uKGIsZSl7Y3x8X2IudGVzdChhKT9kKGEsZSk6ZGMoYStcIltcIisoXCJvYmplY3RcIj09dHlwZW9mIGUmJm51bGwhPWU/YjpcIlwiKStcIl1cIixlLGMsZCl9KTtlbHNlIGlmKGN8fFwib2JqZWN0XCIhPT1uLnR5cGUoYikpZChhLGIpO2Vsc2UgZm9yKGUgaW4gYilkYyhhK1wiW1wiK2UrXCJdXCIsYltlXSxjLGQpfW4ucGFyYW09ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9ZnVuY3Rpb24oYSxiKXtiPW4uaXNGdW5jdGlvbihiKT9iKCk6bnVsbD09Yj9cIlwiOmIsZFtkLmxlbmd0aF09ZW5jb2RlVVJJQ29tcG9uZW50KGEpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChiKX07aWYodm9pZCAwPT09YiYmKGI9bi5hamF4U2V0dGluZ3MmJm4uYWpheFNldHRpbmdzLnRyYWRpdGlvbmFsKSxuLmlzQXJyYXkoYSl8fGEuanF1ZXJ5JiYhbi5pc1BsYWluT2JqZWN0KGEpKW4uZWFjaChhLGZ1bmN0aW9uKCl7ZSh0aGlzLm5hbWUsdGhpcy52YWx1ZSl9KTtlbHNlIGZvcihjIGluIGEpZGMoYyxhW2NdLGIsZSk7cmV0dXJuIGQuam9pbihcIiZcIikucmVwbGFjZSgkYixcIitcIil9LG4uZm4uZXh0ZW5kKHtzZXJpYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4gbi5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpfSxzZXJpYWxpemVBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBhPW4ucHJvcCh0aGlzLFwiZWxlbWVudHNcIik7cmV0dXJuIGE/bi5tYWtlQXJyYXkoYSk6dGhpc30pLmZpbHRlcihmdW5jdGlvbigpe3ZhciBhPXRoaXMudHlwZTtyZXR1cm4gdGhpcy5uYW1lJiYhbih0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSYmY2MudGVzdCh0aGlzLm5vZGVOYW1lKSYmIWJjLnRlc3QoYSkmJih0aGlzLmNoZWNrZWR8fCFaLnRlc3QoYSkpfSkubWFwKGZ1bmN0aW9uKGEsYil7dmFyIGM9bih0aGlzKS52YWwoKTtyZXR1cm4gbnVsbD09Yz9udWxsOm4uaXNBcnJheShjKT9uLm1hcChjLGZ1bmN0aW9uKGEpe3JldHVybntuYW1lOmIubmFtZSx2YWx1ZTphLnJlcGxhY2UoYWMsXCJcXHJcXG5cIil9fSk6e25hbWU6Yi5uYW1lLHZhbHVlOmMucmVwbGFjZShhYyxcIlxcclxcblwiKX19KS5nZXQoKX19KSxuLmFqYXhTZXR0aW5ncy54aHI9dm9pZCAwIT09YS5BY3RpdmVYT2JqZWN0P2Z1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXNMb2NhbD9pYygpOmQuZG9jdW1lbnRNb2RlPjg/aGMoKTovXihnZXR8cG9zdHxoZWFkfHB1dHxkZWxldGV8b3B0aW9ucykkL2kudGVzdCh0aGlzLnR5cGUpJiZoYygpfHxpYygpfTpoYzt2YXIgZWM9MCxmYz17fSxnYz1uLmFqYXhTZXR0aW5ncy54aHIoKTthLmF0dGFjaEV2ZW50JiZhLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIixmdW5jdGlvbigpe2Zvcih2YXIgYSBpbiBmYylmY1thXSh2b2lkIDAsITApfSksbC5jb3JzPSEhZ2MmJlwid2l0aENyZWRlbnRpYWxzXCJpbiBnYyxnYz1sLmFqYXg9ISFnYyxnYyYmbi5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKGIpe2lmKCFiLmNyb3NzRG9tYWlufHxsLmNvcnMpe3ZhciBjO3JldHVybntzZW5kOmZ1bmN0aW9uKGQsZSl7dmFyIGYsZz1iLnhocigpLGg9KytlYztpZihnLm9wZW4oYi50eXBlLGIudXJsLGIuYXN5bmMsYi51c2VybmFtZSxiLnBhc3N3b3JkKSxiLnhockZpZWxkcylmb3IoZiBpbiBiLnhockZpZWxkcylnW2ZdPWIueGhyRmllbGRzW2ZdO2IubWltZVR5cGUmJmcub3ZlcnJpZGVNaW1lVHlwZSYmZy5vdmVycmlkZU1pbWVUeXBlKGIubWltZVR5cGUpLGIuY3Jvc3NEb21haW58fGRbXCJYLVJlcXVlc3RlZC1XaXRoXCJdfHwoZFtcIlgtUmVxdWVzdGVkLVdpdGhcIl09XCJYTUxIdHRwUmVxdWVzdFwiKTtmb3IoZiBpbiBkKXZvaWQgMCE9PWRbZl0mJmcuc2V0UmVxdWVzdEhlYWRlcihmLGRbZl0rXCJcIik7Zy5zZW5kKGIuaGFzQ29udGVudCYmYi5kYXRhfHxudWxsKSxjPWZ1bmN0aW9uKGEsZCl7dmFyIGYsaSxqO2lmKGMmJihkfHw0PT09Zy5yZWFkeVN0YXRlKSlpZihkZWxldGUgZmNbaF0sYz12b2lkIDAsZy5vbnJlYWR5c3RhdGVjaGFuZ2U9bi5ub29wLGQpNCE9PWcucmVhZHlTdGF0ZSYmZy5hYm9ydCgpO2Vsc2V7aj17fSxmPWcuc3RhdHVzLFwic3RyaW5nXCI9PXR5cGVvZiBnLnJlc3BvbnNlVGV4dCYmKGoudGV4dD1nLnJlc3BvbnNlVGV4dCk7dHJ5e2k9Zy5zdGF0dXNUZXh0fWNhdGNoKGspe2k9XCJcIn1mfHwhYi5pc0xvY2FsfHxiLmNyb3NzRG9tYWluPzEyMjM9PT1mJiYoZj0yMDQpOmY9ai50ZXh0PzIwMDo0MDR9aiYmZShmLGksaixnLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKX0sYi5hc3luYz80PT09Zy5yZWFkeVN0YXRlP2Euc2V0VGltZW91dChjKTpnLm9ucmVhZHlzdGF0ZWNoYW5nZT1mY1toXT1jOmMoKX0sYWJvcnQ6ZnVuY3Rpb24oKXtjJiZjKHZvaWQgMCwhMCl9fX19KTtmdW5jdGlvbiBoYygpe3RyeXtyZXR1cm4gbmV3IGEuWE1MSHR0cFJlcXVlc3R9Y2F0Y2goYil7fX1mdW5jdGlvbiBpYygpe3RyeXtyZXR1cm4gbmV3IGEuQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxIVFRQXCIpfWNhdGNoKGIpe319bi5hamF4U2V0dXAoe2FjY2VwdHM6e3NjcmlwdDpcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJ9LGNvbnRlbnRzOntzY3JpcHQ6L1xcYig/OmphdmF8ZWNtYSlzY3JpcHRcXGIvfSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZ2xvYmFsRXZhbChhKSxhfX19KSxuLmFqYXhQcmVmaWx0ZXIoXCJzY3JpcHRcIixmdW5jdGlvbihhKXt2b2lkIDA9PT1hLmNhY2hlJiYoYS5jYWNoZT0hMSksYS5jcm9zc0RvbWFpbiYmKGEudHlwZT1cIkdFVFwiLGEuZ2xvYmFsPSExKX0pLG4uYWpheFRyYW5zcG9ydChcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe2lmKGEuY3Jvc3NEb21haW4pe3ZhciBiLGM9ZC5oZWFkfHxuKFwiaGVhZFwiKVswXXx8ZC5kb2N1bWVudEVsZW1lbnQ7cmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSxmKXtiPWQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSxiLmFzeW5jPSEwLGEuc2NyaXB0Q2hhcnNldCYmKGIuY2hhcnNldD1hLnNjcmlwdENoYXJzZXQpLGIuc3JjPWEudXJsLGIub25sb2FkPWIub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKGEsYyl7KGN8fCFiLnJlYWR5U3RhdGV8fC9sb2FkZWR8Y29tcGxldGUvLnRlc3QoYi5yZWFkeVN0YXRlKSkmJihiLm9ubG9hZD1iLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLGIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpLGI9bnVsbCxjfHxmKDIwMCxcInN1Y2Nlc3NcIikpfSxjLmluc2VydEJlZm9yZShiLGMuZmlyc3RDaGlsZCl9LGFib3J0OmZ1bmN0aW9uKCl7YiYmYi5vbmxvYWQodm9pZCAwLCEwKX19fX0pO3ZhciBqYz1bXSxrYz0vKD0pXFw/KD89JnwkKXxcXD9cXD8vO24uYWpheFNldHVwKHtqc29ucDpcImNhbGxiYWNrXCIsanNvbnBDYWxsYmFjazpmdW5jdGlvbigpe3ZhciBhPWpjLnBvcCgpfHxuLmV4cGFuZG8rXCJfXCIrRWIrKztyZXR1cm4gdGhpc1thXT0hMCxhfX0pLG4uYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbihiLGMsZCl7dmFyIGUsZixnLGg9Yi5qc29ucCE9PSExJiYoa2MudGVzdChiLnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2YgYi5kYXRhJiYwPT09KGIuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJmtjLnRlc3QoYi5kYXRhKSYmXCJkYXRhXCIpO3JldHVybiBofHxcImpzb25wXCI9PT1iLmRhdGFUeXBlc1swXT8oZT1iLmpzb25wQ2FsbGJhY2s9bi5pc0Z1bmN0aW9uKGIuanNvbnBDYWxsYmFjayk/Yi5qc29ucENhbGxiYWNrKCk6Yi5qc29ucENhbGxiYWNrLGg/YltoXT1iW2hdLnJlcGxhY2Uoa2MsXCIkMVwiK2UpOmIuanNvbnAhPT0hMSYmKGIudXJsKz0oRmIudGVzdChiLnVybCk/XCImXCI6XCI/XCIpK2IuanNvbnArXCI9XCIrZSksYi5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gZ3x8bi5lcnJvcihlK1wiIHdhcyBub3QgY2FsbGVkXCIpLGdbMF19LGIuZGF0YVR5cGVzWzBdPVwianNvblwiLGY9YVtlXSxhW2VdPWZ1bmN0aW9uKCl7Zz1hcmd1bWVudHN9LGQuYWx3YXlzKGZ1bmN0aW9uKCl7dm9pZCAwPT09Zj9uKGEpLnJlbW92ZVByb3AoZSk6YVtlXT1mLGJbZV0mJihiLmpzb25wQ2FsbGJhY2s9Yy5qc29ucENhbGxiYWNrLGpjLnB1c2goZSkpLGcmJm4uaXNGdW5jdGlvbihmKSYmZihnWzBdKSxnPWY9dm9pZCAwfSksXCJzY3JpcHRcIik6dm9pZCAwfSksbi5wYXJzZUhUTUw9ZnVuY3Rpb24oYSxiLGMpe2lmKCFhfHxcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gbnVsbDtcImJvb2xlYW5cIj09dHlwZW9mIGImJihjPWIsYj0hMSksYj1ifHxkO3ZhciBlPXguZXhlYyhhKSxmPSFjJiZbXTtyZXR1cm4gZT9bYi5jcmVhdGVFbGVtZW50KGVbMV0pXTooZT1qYShbYV0sYixmKSxmJiZmLmxlbmd0aCYmbihmKS5yZW1vdmUoKSxuLm1lcmdlKFtdLGUuY2hpbGROb2RlcykpfTt2YXIgbGM9bi5mbi5sb2FkO24uZm4ubG9hZD1mdW5jdGlvbihhLGIsYyl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEmJmxjKXJldHVybiBsYy5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dmFyIGQsZSxmLGc9dGhpcyxoPWEuaW5kZXhPZihcIiBcIik7cmV0dXJuIGg+LTEmJihkPW4udHJpbShhLnNsaWNlKGgsYS5sZW5ndGgpKSxhPWEuc2xpY2UoMCxoKSksbi5pc0Z1bmN0aW9uKGIpPyhjPWIsYj12b2lkIDApOmImJlwib2JqZWN0XCI9PXR5cGVvZiBiJiYoZT1cIlBPU1RcIiksZy5sZW5ndGg+MCYmbi5hamF4KHt1cmw6YSx0eXBlOmV8fFwiR0VUXCIsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTpifSkuZG9uZShmdW5jdGlvbihhKXtmPWFyZ3VtZW50cyxnLmh0bWwoZD9uKFwiPGRpdj5cIikuYXBwZW5kKG4ucGFyc2VIVE1MKGEpKS5maW5kKGQpOmEpfSkuYWx3YXlzKGMmJmZ1bmN0aW9uKGEsYil7Zy5lYWNoKGZ1bmN0aW9uKCl7Yy5hcHBseSh0aGlzLGZ8fFthLnJlc3BvbnNlVGV4dCxiLGFdKX0pfSksdGhpc30sbi5lYWNoKFtcImFqYXhTdGFydFwiLFwiYWpheFN0b3BcIixcImFqYXhDb21wbGV0ZVwiLFwiYWpheEVycm9yXCIsXCJhamF4U3VjY2Vzc1wiLFwiYWpheFNlbmRcIl0sZnVuY3Rpb24oYSxiKXtuLmZuW2JdPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm9uKGIsYSl9fSksbi5leHByLmZpbHRlcnMuYW5pbWF0ZWQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZ3JlcChuLnRpbWVycyxmdW5jdGlvbihiKXtyZXR1cm4gYT09PWIuZWxlbX0pLmxlbmd0aH07ZnVuY3Rpb24gbWMoYSl7cmV0dXJuIG4uaXNXaW5kb3coYSk/YTo5PT09YS5ub2RlVHlwZT9hLmRlZmF1bHRWaWV3fHxhLnBhcmVudFdpbmRvdzohMX1uLm9mZnNldD17c2V0T2Zmc2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoLGksaixrPW4uY3NzKGEsXCJwb3NpdGlvblwiKSxsPW4oYSksbT17fTtcInN0YXRpY1wiPT09ayYmKGEuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiKSxoPWwub2Zmc2V0KCksZj1uLmNzcyhhLFwidG9wXCIpLGk9bi5jc3MoYSxcImxlZnRcIiksaj0oXCJhYnNvbHV0ZVwiPT09a3x8XCJmaXhlZFwiPT09aykmJm4uaW5BcnJheShcImF1dG9cIixbZixpXSk+LTEsaj8oZD1sLnBvc2l0aW9uKCksZz1kLnRvcCxlPWQubGVmdCk6KGc9cGFyc2VGbG9hdChmKXx8MCxlPXBhcnNlRmxvYXQoaSl8fDApLG4uaXNGdW5jdGlvbihiKSYmKGI9Yi5jYWxsKGEsYyxuLmV4dGVuZCh7fSxoKSkpLG51bGwhPWIudG9wJiYobS50b3A9Yi50b3AtaC50b3ArZyksbnVsbCE9Yi5sZWZ0JiYobS5sZWZ0PWIubGVmdC1oLmxlZnQrZSksXCJ1c2luZ1wiaW4gYj9iLnVzaW5nLmNhbGwoYSxtKTpsLmNzcyhtKX19LG4uZm4uZXh0ZW5kKHtvZmZzZXQ6ZnVuY3Rpb24oYSl7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdm9pZCAwPT09YT90aGlzOnRoaXMuZWFjaChmdW5jdGlvbihiKXtuLm9mZnNldC5zZXRPZmZzZXQodGhpcyxhLGIpfSk7dmFyIGIsYyxkPXt0b3A6MCxsZWZ0OjB9LGU9dGhpc1swXSxmPWUmJmUub3duZXJEb2N1bWVudDtpZihmKXJldHVybiBiPWYuZG9jdW1lbnRFbGVtZW50LG4uY29udGFpbnMoYixlKT8oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0JiYoZD1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKSxjPW1jKGYpLHt0b3A6ZC50b3ArKGMucGFnZVlPZmZzZXR8fGIuc2Nyb2xsVG9wKS0oYi5jbGllbnRUb3B8fDApLGxlZnQ6ZC5sZWZ0KyhjLnBhZ2VYT2Zmc2V0fHxiLnNjcm9sbExlZnQpLShiLmNsaWVudExlZnR8fDApfSk6ZH0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzWzBdKXt2YXIgYSxiLGM9e3RvcDowLGxlZnQ6MH0sZD10aGlzWzBdO3JldHVyblwiZml4ZWRcIj09PW4uY3NzKGQsXCJwb3NpdGlvblwiKT9iPWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6KGE9dGhpcy5vZmZzZXRQYXJlbnQoKSxiPXRoaXMub2Zmc2V0KCksbi5ub2RlTmFtZShhWzBdLFwiaHRtbFwiKXx8KGM9YS5vZmZzZXQoKSksYy50b3ArPW4uY3NzKGFbMF0sXCJib3JkZXJUb3BXaWR0aFwiLCEwKSxjLmxlZnQrPW4uY3NzKGFbMF0sXCJib3JkZXJMZWZ0V2lkdGhcIiwhMCkpLHt0b3A6Yi50b3AtYy50b3Atbi5jc3MoZCxcIm1hcmdpblRvcFwiLCEwKSxsZWZ0OmIubGVmdC1jLmxlZnQtbi5jc3MoZCxcIm1hcmdpbkxlZnRcIiwhMCl9fX0sb2Zmc2V0UGFyZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vZmZzZXRQYXJlbnQ7d2hpbGUoYSYmIW4ubm9kZU5hbWUoYSxcImh0bWxcIikmJlwic3RhdGljXCI9PT1uLmNzcyhhLFwicG9zaXRpb25cIikpYT1hLm9mZnNldFBhcmVudDtyZXR1cm4gYXx8UWF9KX19KSxuLmVhY2goe3Njcm9sbExlZnQ6XCJwYWdlWE9mZnNldFwiLHNjcm9sbFRvcDpcInBhZ2VZT2Zmc2V0XCJ9LGZ1bmN0aW9uKGEsYil7dmFyIGM9L1kvLnRlc3QoYik7bi5mblthXT1mdW5jdGlvbihkKXtyZXR1cm4gWSh0aGlzLGZ1bmN0aW9uKGEsZCxlKXt2YXIgZj1tYyhhKTtyZXR1cm4gdm9pZCAwPT09ZT9mP2IgaW4gZj9mW2JdOmYuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W2RdOmFbZF06dm9pZChmP2Yuc2Nyb2xsVG8oYz9uKGYpLnNjcm9sbExlZnQoKTplLGM/ZTpuKGYpLnNjcm9sbFRvcCgpKTphW2RdPWUpfSxhLGQsYXJndW1lbnRzLmxlbmd0aCxudWxsKX19KSxuLmVhY2goW1widG9wXCIsXCJsZWZ0XCJdLGZ1bmN0aW9uKGEsYil7bi5jc3NIb29rc1tiXT1VYShsLnBpeGVsUG9zaXRpb24sZnVuY3Rpb24oYSxjKXtyZXR1cm4gYz8oYz1TYShhLGIpLE9hLnRlc3QoYyk/bihhKS5wb3NpdGlvbigpW2JdK1wicHhcIjpjKTp2b2lkIDB9KX0pLG4uZWFjaCh7SGVpZ2h0OlwiaGVpZ2h0XCIsV2lkdGg6XCJ3aWR0aFwifSxmdW5jdGlvbihhLGIpe24uZWFjaCh7XG5wYWRkaW5nOlwiaW5uZXJcIithLGNvbnRlbnQ6YixcIlwiOlwib3V0ZXJcIithfSxmdW5jdGlvbihjLGQpe24uZm5bZF09ZnVuY3Rpb24oZCxlKXt2YXIgZj1hcmd1bWVudHMubGVuZ3RoJiYoY3x8XCJib29sZWFuXCIhPXR5cGVvZiBkKSxnPWN8fChkPT09ITB8fGU9PT0hMD9cIm1hcmdpblwiOlwiYm9yZGVyXCIpO3JldHVybiBZKHRoaXMsZnVuY3Rpb24oYixjLGQpe3ZhciBlO3JldHVybiBuLmlzV2luZG93KGIpP2IuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50XCIrYV06OT09PWIubm9kZVR5cGU/KGU9Yi5kb2N1bWVudEVsZW1lbnQsTWF0aC5tYXgoYi5ib2R5W1wic2Nyb2xsXCIrYV0sZVtcInNjcm9sbFwiK2FdLGIuYm9keVtcIm9mZnNldFwiK2FdLGVbXCJvZmZzZXRcIithXSxlW1wiY2xpZW50XCIrYV0pKTp2b2lkIDA9PT1kP24uY3NzKGIsYyxnKTpuLnN0eWxlKGIsYyxkLGcpfSxiLGY/ZDp2b2lkIDAsZixudWxsKX19KX0pLG4uZm4uZXh0ZW5kKHtiaW5kOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vbihhLG51bGwsYixjKX0sdW5iaW5kOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub2ZmKGEsbnVsbCxiKX0sZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMub24oYixhLGMsZCl9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihhLFwiKipcIik6dGhpcy5vZmYoYixhfHxcIioqXCIsYyl9fSksbi5mbi5zaXplPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubGVuZ3RofSxuLmZuLmFuZFNlbGY9bi5mbi5hZGRCYWNrLFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lKFwianF1ZXJ5XCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gbn0pO3ZhciBuYz1hLmpRdWVyeSxvYz1hLiQ7cmV0dXJuIG4ubm9Db25mbGljdD1mdW5jdGlvbihiKXtyZXR1cm4gYS4kPT09biYmKGEuJD1vYyksYiYmYS5qUXVlcnk9PT1uJiYoYS5qUXVlcnk9bmMpLG59LGJ8fChhLmpRdWVyeT1hLiQ9biksbn0pO1xuIiwiLyohXG4gKiBpbWFnZXNMb2FkZWQgUEFDS0FHRUQgdjQuMS40XG4gKiBKYXZhU2NyaXB0IGlzIGFsbCBsaWtlIFwiWW91IGltYWdlcyBhcmUgZG9uZSB5ZXQgb3Igd2hhdD9cIlxuICogTUlUIExpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEV2RW1pdHRlciB2MS4xLjBcbiAqIExpbCcgZXZlbnQgZW1pdHRlclxuICogTUlUIExpY2Vuc2VcbiAqL1xuXG4vKiBqc2hpbnQgdW51c2VkOiB0cnVlLCB1bmRlZjogdHJ1ZSwgc3RyaWN0OiB0cnVlICovXG5cbiggZnVuY3Rpb24oIGdsb2JhbCwgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qIGdsb2JhbHMgZGVmaW5lLCBtb2R1bGUsIHdpbmRvdyAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRCAtIFJlcXVpcmVKU1xuICAgIGRlZmluZSggJ2V2LWVtaXR0ZXIvZXYtZW1pdHRlcicsZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTIC0gQnJvd3NlcmlmeSwgV2VicGFja1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgIGdsb2JhbC5FdkVtaXR0ZXIgPSBmYWN0b3J5KCk7XG4gIH1cblxufSggdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uKCkge1xuXG5cblxuZnVuY3Rpb24gRXZFbWl0dGVyKCkge31cblxudmFyIHByb3RvID0gRXZFbWl0dGVyLnByb3RvdHlwZTtcblxucHJvdG8ub24gPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgaWYgKCAhZXZlbnROYW1lIHx8ICFsaXN0ZW5lciApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gc2V0IGV2ZW50cyBoYXNoXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIC8vIHNldCBsaXN0ZW5lcnMgYXJyYXlcbiAgdmFyIGxpc3RlbmVycyA9IGV2ZW50c1sgZXZlbnROYW1lIF0gPSBldmVudHNbIGV2ZW50TmFtZSBdIHx8IFtdO1xuICAvLyBvbmx5IGFkZCBvbmNlXG4gIGlmICggbGlzdGVuZXJzLmluZGV4T2YoIGxpc3RlbmVyICkgPT0gLTEgKSB7XG4gICAgbGlzdGVuZXJzLnB1c2goIGxpc3RlbmVyICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLm9uY2UgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgaWYgKCAhZXZlbnROYW1lIHx8ICFsaXN0ZW5lciApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gYWRkIGV2ZW50XG4gIHRoaXMub24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKTtcbiAgLy8gc2V0IG9uY2UgZmxhZ1xuICAvLyBzZXQgb25jZUV2ZW50cyBoYXNoXG4gIHZhciBvbmNlRXZlbnRzID0gdGhpcy5fb25jZUV2ZW50cyA9IHRoaXMuX29uY2VFdmVudHMgfHwge307XG4gIC8vIHNldCBvbmNlTGlzdGVuZXJzIG9iamVjdFxuICB2YXIgb25jZUxpc3RlbmVycyA9IG9uY2VFdmVudHNbIGV2ZW50TmFtZSBdID0gb25jZUV2ZW50c1sgZXZlbnROYW1lIF0gfHwge307XG4gIC8vIHNldCBmbGFnXG4gIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF0gPSB0cnVlO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8ub2ZmID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHMgJiYgdGhpcy5fZXZlbnRzWyBldmVudE5hbWUgXTtcbiAgaWYgKCAhbGlzdGVuZXJzIHx8ICFsaXN0ZW5lcnMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgaW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZiggbGlzdGVuZXIgKTtcbiAgaWYgKCBpbmRleCAhPSAtMSApIHtcbiAgICBsaXN0ZW5lcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5lbWl0RXZlbnQgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBhcmdzICkge1xuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzICYmIHRoaXMuX2V2ZW50c1sgZXZlbnROYW1lIF07XG4gIGlmICggIWxpc3RlbmVycyB8fCAhbGlzdGVuZXJzLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gY29weSBvdmVyIHRvIGF2b2lkIGludGVyZmVyZW5jZSBpZiAub2ZmKCkgaW4gbGlzdGVuZXJcbiAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLnNsaWNlKDApO1xuICBhcmdzID0gYXJncyB8fCBbXTtcbiAgLy8gb25jZSBzdHVmZlxuICB2YXIgb25jZUxpc3RlbmVycyA9IHRoaXMuX29uY2VFdmVudHMgJiYgdGhpcy5fb25jZUV2ZW50c1sgZXZlbnROYW1lIF07XG5cbiAgZm9yICggdmFyIGk9MDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV1cbiAgICB2YXIgaXNPbmNlID0gb25jZUxpc3RlbmVycyAmJiBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdO1xuICAgIGlmICggaXNPbmNlICkge1xuICAgICAgLy8gcmVtb3ZlIGxpc3RlbmVyXG4gICAgICAvLyByZW1vdmUgYmVmb3JlIHRyaWdnZXIgdG8gcHJldmVudCByZWN1cnNpb25cbiAgICAgIHRoaXMub2ZmKCBldmVudE5hbWUsIGxpc3RlbmVyICk7XG4gICAgICAvLyB1bnNldCBvbmNlIGZsYWdcbiAgICAgIGRlbGV0ZSBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdO1xuICAgIH1cbiAgICAvLyB0cmlnZ2VyIGxpc3RlbmVyXG4gICAgbGlzdGVuZXIuYXBwbHkoIHRoaXMsIGFyZ3MgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8uYWxsT2ZmID0gZnVuY3Rpb24oKSB7XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHM7XG4gIGRlbGV0ZSB0aGlzLl9vbmNlRXZlbnRzO1xufTtcblxucmV0dXJuIEV2RW1pdHRlcjtcblxufSkpO1xuXG4vKiFcbiAqIGltYWdlc0xvYWRlZCB2NC4xLjRcbiAqIEphdmFTY3JpcHQgaXMgYWxsIGxpa2UgXCJZb3UgaW1hZ2VzIGFyZSBkb25lIHlldCBvciB3aGF0P1wiXG4gKiBNSVQgTGljZW5zZVxuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHsgJ3VzZSBzdHJpY3QnO1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cblxuICAvKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlLCByZXF1aXJlOiBmYWxzZSAqL1xuXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAnZXYtZW1pdHRlci9ldi1lbWl0dGVyJ1xuICAgIF0sIGZ1bmN0aW9uKCBFdkVtaXR0ZXIgKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCBFdkVtaXR0ZXIgKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHJlcXVpcmUoJ2V2LWVtaXR0ZXInKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuaW1hZ2VzTG9hZGVkID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHdpbmRvdy5FdkVtaXR0ZXJcbiAgICApO1xuICB9XG5cbn0pKCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHRoaXMsXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBmYWN0b3J5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgRXZFbWl0dGVyICkge1xuXG5cblxudmFyICQgPSB3aW5kb3cualF1ZXJ5O1xudmFyIGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaGVscGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBleHRlbmQgb2JqZWN0c1xuZnVuY3Rpb24gZXh0ZW5kKCBhLCBiICkge1xuICBmb3IgKCB2YXIgcHJvcCBpbiBiICkge1xuICAgIGFbIHByb3AgXSA9IGJbIHByb3AgXTtcbiAgfVxuICByZXR1cm4gYTtcbn1cblxudmFyIGFycmF5U2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbi8vIHR1cm4gZWxlbWVudCBvciBub2RlTGlzdCBpbnRvIGFuIGFycmF5XG5mdW5jdGlvbiBtYWtlQXJyYXkoIG9iaiApIHtcbiAgaWYgKCBBcnJheS5pc0FycmF5KCBvYmogKSApIHtcbiAgICAvLyB1c2Ugb2JqZWN0IGlmIGFscmVhZHkgYW4gYXJyYXlcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgdmFyIGlzQXJyYXlMaWtlID0gdHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqLmxlbmd0aCA9PSAnbnVtYmVyJztcbiAgaWYgKCBpc0FycmF5TGlrZSApIHtcbiAgICAvLyBjb252ZXJ0IG5vZGVMaXN0IHRvIGFycmF5XG4gICAgcmV0dXJuIGFycmF5U2xpY2UuY2FsbCggb2JqICk7XG4gIH1cblxuICAvLyBhcnJheSBvZiBzaW5nbGUgaW5kZXhcbiAgcmV0dXJuIFsgb2JqIF07XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGltYWdlc0xvYWRlZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXksIEVsZW1lbnQsIE5vZGVMaXN0LCBTdHJpbmd9IGVsZW1cbiAqIEBwYXJhbSB7T2JqZWN0IG9yIEZ1bmN0aW9ufSBvcHRpb25zIC0gaWYgZnVuY3Rpb24sIHVzZSBhcyBjYWxsYmFja1xuICogQHBhcmFtIHtGdW5jdGlvbn0gb25BbHdheXMgLSBjYWxsYmFjayBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBJbWFnZXNMb2FkZWQoIGVsZW0sIG9wdGlvbnMsIG9uQWx3YXlzICkge1xuICAvLyBjb2VyY2UgSW1hZ2VzTG9hZGVkKCkgd2l0aG91dCBuZXcsIHRvIGJlIG5ldyBJbWFnZXNMb2FkZWQoKVxuICBpZiAoICEoIHRoaXMgaW5zdGFuY2VvZiBJbWFnZXNMb2FkZWQgKSApIHtcbiAgICByZXR1cm4gbmV3IEltYWdlc0xvYWRlZCggZWxlbSwgb3B0aW9ucywgb25BbHdheXMgKTtcbiAgfVxuICAvLyB1c2UgZWxlbSBhcyBzZWxlY3RvciBzdHJpbmdcbiAgdmFyIHF1ZXJ5RWxlbSA9IGVsZW07XG4gIGlmICggdHlwZW9mIGVsZW0gPT0gJ3N0cmluZycgKSB7XG4gICAgcXVlcnlFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggZWxlbSApO1xuICB9XG4gIC8vIGJhaWwgaWYgYmFkIGVsZW1lbnRcbiAgaWYgKCAhcXVlcnlFbGVtICkge1xuICAgIGNvbnNvbGUuZXJyb3IoICdCYWQgZWxlbWVudCBmb3IgaW1hZ2VzTG9hZGVkICcgKyAoIHF1ZXJ5RWxlbSB8fCBlbGVtICkgKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmVsZW1lbnRzID0gbWFrZUFycmF5KCBxdWVyeUVsZW0gKTtcbiAgdGhpcy5vcHRpb25zID0gZXh0ZW5kKCB7fSwgdGhpcy5vcHRpb25zICk7XG4gIC8vIHNoaWZ0IGFyZ3VtZW50cyBpZiBubyBvcHRpb25zIHNldFxuICBpZiAoIHR5cGVvZiBvcHRpb25zID09ICdmdW5jdGlvbicgKSB7XG4gICAgb25BbHdheXMgPSBvcHRpb25zO1xuICB9IGVsc2Uge1xuICAgIGV4dGVuZCggdGhpcy5vcHRpb25zLCBvcHRpb25zICk7XG4gIH1cblxuICBpZiAoIG9uQWx3YXlzICkge1xuICAgIHRoaXMub24oICdhbHdheXMnLCBvbkFsd2F5cyApO1xuICB9XG5cbiAgdGhpcy5nZXRJbWFnZXMoKTtcblxuICBpZiAoICQgKSB7XG4gICAgLy8gYWRkIGpRdWVyeSBEZWZlcnJlZCBvYmplY3RcbiAgICB0aGlzLmpxRGVmZXJyZWQgPSBuZXcgJC5EZWZlcnJlZCgpO1xuICB9XG5cbiAgLy8gSEFDSyBjaGVjayBhc3luYyB0byBhbGxvdyB0aW1lIHRvIGJpbmQgbGlzdGVuZXJzXG4gIHNldFRpbWVvdXQoIHRoaXMuY2hlY2suYmluZCggdGhpcyApICk7XG59XG5cbkltYWdlc0xvYWRlZC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBFdkVtaXR0ZXIucHJvdG90eXBlICk7XG5cbkltYWdlc0xvYWRlZC5wcm90b3R5cGUub3B0aW9ucyA9IHt9O1xuXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlLmdldEltYWdlcyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmltYWdlcyA9IFtdO1xuXG4gIC8vIGZpbHRlciAmIGZpbmQgaXRlbXMgaWYgd2UgaGF2ZSBhbiBpdGVtIHNlbGVjdG9yXG4gIHRoaXMuZWxlbWVudHMuZm9yRWFjaCggdGhpcy5hZGRFbGVtZW50SW1hZ2VzLCB0aGlzICk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZX0gZWxlbWVudFxuICovXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlLmFkZEVsZW1lbnRJbWFnZXMgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgLy8gZmlsdGVyIHNpYmxpbmdzXG4gIGlmICggZWxlbS5ub2RlTmFtZSA9PSAnSU1HJyApIHtcbiAgICB0aGlzLmFkZEltYWdlKCBlbGVtICk7XG4gIH1cbiAgLy8gZ2V0IGJhY2tncm91bmQgaW1hZ2Ugb24gZWxlbWVudFxuICBpZiAoIHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kID09PSB0cnVlICkge1xuICAgIHRoaXMuYWRkRWxlbWVudEJhY2tncm91bmRJbWFnZXMoIGVsZW0gKTtcbiAgfVxuXG4gIC8vIGZpbmQgY2hpbGRyZW5cbiAgLy8gbm8gbm9uLWVsZW1lbnQgbm9kZXMsICMxNDNcbiAgdmFyIG5vZGVUeXBlID0gZWxlbS5ub2RlVHlwZTtcbiAgaWYgKCAhbm9kZVR5cGUgfHwgIWVsZW1lbnROb2RlVHlwZXNbIG5vZGVUeXBlIF0gKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBjaGlsZEltZ3MgPSBlbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpO1xuICAvLyBjb25jYXQgY2hpbGRFbGVtcyB0byBmaWx0ZXJGb3VuZCBhcnJheVxuICBmb3IgKCB2YXIgaT0wOyBpIDwgY2hpbGRJbWdzLmxlbmd0aDsgaSsrICkge1xuICAgIHZhciBpbWcgPSBjaGlsZEltZ3NbaV07XG4gICAgdGhpcy5hZGRJbWFnZSggaW1nICk7XG4gIH1cblxuICAvLyBnZXQgY2hpbGQgYmFja2dyb3VuZCBpbWFnZXNcbiAgaWYgKCB0eXBlb2YgdGhpcy5vcHRpb25zLmJhY2tncm91bmQgPT0gJ3N0cmluZycgKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZCApO1xuICAgIGZvciAoIGk9MDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrICkge1xuICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICB0aGlzLmFkZEVsZW1lbnRCYWNrZ3JvdW5kSW1hZ2VzKCBjaGlsZCApO1xuICAgIH1cbiAgfVxufTtcblxudmFyIGVsZW1lbnROb2RlVHlwZXMgPSB7XG4gIDE6IHRydWUsXG4gIDk6IHRydWUsXG4gIDExOiB0cnVlXG59O1xuXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlLmFkZEVsZW1lbnRCYWNrZ3JvdW5kSW1hZ2VzID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoIGVsZW0gKTtcbiAgaWYgKCAhc3R5bGUgKSB7XG4gICAgLy8gRmlyZWZveCByZXR1cm5zIG51bGwgaWYgaW4gYSBoaWRkZW4gaWZyYW1lIGh0dHBzOi8vYnVnemlsLmxhLzU0ODM5N1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBnZXQgdXJsIGluc2lkZSB1cmwoXCIuLi5cIilcbiAgdmFyIHJlVVJMID0gL3VybFxcKChbJ1wiXSk/KC4qPylcXDFcXCkvZ2k7XG4gIHZhciBtYXRjaGVzID0gcmVVUkwuZXhlYyggc3R5bGUuYmFja2dyb3VuZEltYWdlICk7XG4gIHdoaWxlICggbWF0Y2hlcyAhPT0gbnVsbCApIHtcbiAgICB2YXIgdXJsID0gbWF0Y2hlcyAmJiBtYXRjaGVzWzJdO1xuICAgIGlmICggdXJsICkge1xuICAgICAgdGhpcy5hZGRCYWNrZ3JvdW5kKCB1cmwsIGVsZW0gKTtcbiAgICB9XG4gICAgbWF0Y2hlcyA9IHJlVVJMLmV4ZWMoIHN0eWxlLmJhY2tncm91bmRJbWFnZSApO1xuICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7SW1hZ2V9IGltZ1xuICovXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlLmFkZEltYWdlID0gZnVuY3Rpb24oIGltZyApIHtcbiAgdmFyIGxvYWRpbmdJbWFnZSA9IG5ldyBMb2FkaW5nSW1hZ2UoIGltZyApO1xuICB0aGlzLmltYWdlcy5wdXNoKCBsb2FkaW5nSW1hZ2UgKTtcbn07XG5cbkltYWdlc0xvYWRlZC5wcm90b3R5cGUuYWRkQmFja2dyb3VuZCA9IGZ1bmN0aW9uKCB1cmwsIGVsZW0gKSB7XG4gIHZhciBiYWNrZ3JvdW5kID0gbmV3IEJhY2tncm91bmQoIHVybCwgZWxlbSApO1xuICB0aGlzLmltYWdlcy5wdXNoKCBiYWNrZ3JvdW5kICk7XG59O1xuXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG4gIHRoaXMucHJvZ3Jlc3NlZENvdW50ID0gMDtcbiAgdGhpcy5oYXNBbnlCcm9rZW4gPSBmYWxzZTtcbiAgLy8gY29tcGxldGUgaWYgbm8gaW1hZ2VzXG4gIGlmICggIXRoaXMuaW1hZ2VzLmxlbmd0aCApIHtcbiAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Qcm9ncmVzcyggaW1hZ2UsIGVsZW0sIG1lc3NhZ2UgKSB7XG4gICAgLy8gSEFDSyAtIENocm9tZSB0cmlnZ2VycyBldmVudCBiZWZvcmUgb2JqZWN0IHByb3BlcnRpZXMgaGF2ZSBjaGFuZ2VkLiAjODNcbiAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgIF90aGlzLnByb2dyZXNzKCBpbWFnZSwgZWxlbSwgbWVzc2FnZSApO1xuICAgIH0pO1xuICB9XG5cbiAgdGhpcy5pbWFnZXMuZm9yRWFjaCggZnVuY3Rpb24oIGxvYWRpbmdJbWFnZSApIHtcbiAgICBsb2FkaW5nSW1hZ2Uub25jZSggJ3Byb2dyZXNzJywgb25Qcm9ncmVzcyApO1xuICAgIGxvYWRpbmdJbWFnZS5jaGVjaygpO1xuICB9KTtcbn07XG5cbkltYWdlc0xvYWRlZC5wcm90b3R5cGUucHJvZ3Jlc3MgPSBmdW5jdGlvbiggaW1hZ2UsIGVsZW0sIG1lc3NhZ2UgKSB7XG4gIHRoaXMucHJvZ3Jlc3NlZENvdW50Kys7XG4gIHRoaXMuaGFzQW55QnJva2VuID0gdGhpcy5oYXNBbnlCcm9rZW4gfHwgIWltYWdlLmlzTG9hZGVkO1xuICAvLyBwcm9ncmVzcyBldmVudFxuICB0aGlzLmVtaXRFdmVudCggJ3Byb2dyZXNzJywgWyB0aGlzLCBpbWFnZSwgZWxlbSBdICk7XG4gIGlmICggdGhpcy5qcURlZmVycmVkICYmIHRoaXMuanFEZWZlcnJlZC5ub3RpZnkgKSB7XG4gICAgdGhpcy5qcURlZmVycmVkLm5vdGlmeSggdGhpcywgaW1hZ2UgKTtcbiAgfVxuICAvLyBjaGVjayBpZiBjb21wbGV0ZWRcbiAgaWYgKCB0aGlzLnByb2dyZXNzZWRDb3VudCA9PSB0aGlzLmltYWdlcy5sZW5ndGggKSB7XG4gICAgdGhpcy5jb21wbGV0ZSgpO1xuICB9XG5cbiAgaWYgKCB0aGlzLm9wdGlvbnMuZGVidWcgJiYgY29uc29sZSApIHtcbiAgICBjb25zb2xlLmxvZyggJ3Byb2dyZXNzOiAnICsgbWVzc2FnZSwgaW1hZ2UsIGVsZW0gKTtcbiAgfVxufTtcblxuSW1hZ2VzTG9hZGVkLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZXZlbnROYW1lID0gdGhpcy5oYXNBbnlCcm9rZW4gPyAnZmFpbCcgOiAnZG9uZSc7XG4gIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG4gIHRoaXMuZW1pdEV2ZW50KCBldmVudE5hbWUsIFsgdGhpcyBdICk7XG4gIHRoaXMuZW1pdEV2ZW50KCAnYWx3YXlzJywgWyB0aGlzIF0gKTtcbiAgaWYgKCB0aGlzLmpxRGVmZXJyZWQgKSB7XG4gICAgdmFyIGpxTWV0aG9kID0gdGhpcy5oYXNBbnlCcm9rZW4gPyAncmVqZWN0JyA6ICdyZXNvbHZlJztcbiAgICB0aGlzLmpxRGVmZXJyZWRbIGpxTWV0aG9kIF0oIHRoaXMgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmZ1bmN0aW9uIExvYWRpbmdJbWFnZSggaW1nICkge1xuICB0aGlzLmltZyA9IGltZztcbn1cblxuTG9hZGluZ0ltYWdlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEV2RW1pdHRlci5wcm90b3R5cGUgKTtcblxuTG9hZGluZ0ltYWdlLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKCkge1xuICAvLyBJZiBjb21wbGV0ZSBpcyB0cnVlIGFuZCBicm93c2VyIHN1cHBvcnRzIG5hdHVyYWwgc2l6ZXMsXG4gIC8vIHRyeSB0byBjaGVjayBmb3IgaW1hZ2Ugc3RhdHVzIG1hbnVhbGx5LlxuICB2YXIgaXNDb21wbGV0ZSA9IHRoaXMuZ2V0SXNJbWFnZUNvbXBsZXRlKCk7XG4gIGlmICggaXNDb21wbGV0ZSApIHtcbiAgICAvLyByZXBvcnQgYmFzZWQgb24gbmF0dXJhbFdpZHRoXG4gICAgdGhpcy5jb25maXJtKCB0aGlzLmltZy5uYXR1cmFsV2lkdGggIT09IDAsICduYXR1cmFsV2lkdGgnICk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gSWYgbm9uZSBvZiB0aGUgY2hlY2tzIGFib3ZlIG1hdGNoZWQsIHNpbXVsYXRlIGxvYWRpbmcgb24gZGV0YWNoZWQgZWxlbWVudC5cbiAgdGhpcy5wcm94eUltYWdlID0gbmV3IEltYWdlKCk7XG4gIHRoaXMucHJveHlJbWFnZS5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIHRoaXMgKTtcbiAgdGhpcy5wcm94eUltYWdlLmFkZEV2ZW50TGlzdGVuZXIoICdlcnJvcicsIHRoaXMgKTtcbiAgLy8gYmluZCB0byBpbWFnZSBhcyB3ZWxsIGZvciBGaXJlZm94LiAjMTkxXG4gIHRoaXMuaW1nLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgdGhpcyApO1xuICB0aGlzLmltZy5hZGRFdmVudExpc3RlbmVyKCAnZXJyb3InLCB0aGlzICk7XG4gIHRoaXMucHJveHlJbWFnZS5zcmMgPSB0aGlzLmltZy5zcmM7XG59O1xuXG5Mb2FkaW5nSW1hZ2UucHJvdG90eXBlLmdldElzSW1hZ2VDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBjaGVjayBmb3Igbm9uLXplcm8sIG5vbi11bmRlZmluZWQgbmF0dXJhbFdpZHRoXG4gIC8vIGZpeGVzIFNhZmFyaStJbmZpbml0ZVNjcm9sbCtNYXNvbnJ5IGJ1ZyBpbmZpbml0ZS1zY3JvbGwjNjcxXG4gIHJldHVybiB0aGlzLmltZy5jb21wbGV0ZSAmJiB0aGlzLmltZy5uYXR1cmFsV2lkdGg7XG59O1xuXG5Mb2FkaW5nSW1hZ2UucHJvdG90eXBlLmNvbmZpcm0gPSBmdW5jdGlvbiggaXNMb2FkZWQsIG1lc3NhZ2UgKSB7XG4gIHRoaXMuaXNMb2FkZWQgPSBpc0xvYWRlZDtcbiAgdGhpcy5lbWl0RXZlbnQoICdwcm9ncmVzcycsIFsgdGhpcywgdGhpcy5pbWcsIG1lc3NhZ2UgXSApO1xufTtcblxuLy8gLS0tLS0gZXZlbnRzIC0tLS0tIC8vXG5cbi8vIHRyaWdnZXIgc3BlY2lmaWVkIGhhbmRsZXIgZm9yIGV2ZW50IHR5cGVcbkxvYWRpbmdJbWFnZS5wcm90b3R5cGUuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHZhciBtZXRob2QgPSAnb24nICsgZXZlbnQudHlwZTtcbiAgaWYgKCB0aGlzWyBtZXRob2QgXSApIHtcbiAgICB0aGlzWyBtZXRob2QgXSggZXZlbnQgKTtcbiAgfVxufTtcblxuTG9hZGluZ0ltYWdlLnByb3RvdHlwZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5jb25maXJtKCB0cnVlLCAnb25sb2FkJyApO1xuICB0aGlzLnVuYmluZEV2ZW50cygpO1xufTtcblxuTG9hZGluZ0ltYWdlLnByb3RvdHlwZS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuY29uZmlybSggZmFsc2UsICdvbmVycm9yJyApO1xuICB0aGlzLnVuYmluZEV2ZW50cygpO1xufTtcblxuTG9hZGluZ0ltYWdlLnByb3RvdHlwZS51bmJpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wcm94eUltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdsb2FkJywgdGhpcyApO1xuICB0aGlzLnByb3h5SW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2Vycm9yJywgdGhpcyApO1xuICB0aGlzLmltZy5yZW1vdmVFdmVudExpc3RlbmVyKCAnbG9hZCcsIHRoaXMgKTtcbiAgdGhpcy5pbWcucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2Vycm9yJywgdGhpcyApO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQmFja2dyb3VuZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBCYWNrZ3JvdW5kKCB1cmwsIGVsZW1lbnQgKSB7XG4gIHRoaXMudXJsID0gdXJsO1xuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xufVxuXG4vLyBpbmhlcml0IExvYWRpbmdJbWFnZSBwcm90b3R5cGVcbkJhY2tncm91bmQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggTG9hZGluZ0ltYWdlLnByb3RvdHlwZSApO1xuXG5CYWNrZ3JvdW5kLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmltZy5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIHRoaXMgKTtcbiAgdGhpcy5pbWcuYWRkRXZlbnRMaXN0ZW5lciggJ2Vycm9yJywgdGhpcyApO1xuICB0aGlzLmltZy5zcmMgPSB0aGlzLnVybDtcbiAgLy8gY2hlY2sgaWYgaW1hZ2UgaXMgYWxyZWFkeSBjb21wbGV0ZVxuICB2YXIgaXNDb21wbGV0ZSA9IHRoaXMuZ2V0SXNJbWFnZUNvbXBsZXRlKCk7XG4gIGlmICggaXNDb21wbGV0ZSApIHtcbiAgICB0aGlzLmNvbmZpcm0oIHRoaXMuaW1nLm5hdHVyYWxXaWR0aCAhPT0gMCwgJ25hdHVyYWxXaWR0aCcgKTtcbiAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuICB9XG59O1xuXG5CYWNrZ3JvdW5kLnByb3RvdHlwZS51bmJpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5pbWcucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCB0aGlzICk7XG4gIHRoaXMuaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdlcnJvcicsIHRoaXMgKTtcbn07XG5cbkJhY2tncm91bmQucHJvdG90eXBlLmNvbmZpcm0gPSBmdW5jdGlvbiggaXNMb2FkZWQsIG1lc3NhZ2UgKSB7XG4gIHRoaXMuaXNMb2FkZWQgPSBpc0xvYWRlZDtcbiAgdGhpcy5lbWl0RXZlbnQoICdwcm9ncmVzcycsIFsgdGhpcywgdGhpcy5lbGVtZW50LCBtZXNzYWdlIF0gKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGpRdWVyeSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5JbWFnZXNMb2FkZWQubWFrZUpRdWVyeVBsdWdpbiA9IGZ1bmN0aW9uKCBqUXVlcnkgKSB7XG4gIGpRdWVyeSA9IGpRdWVyeSB8fCB3aW5kb3cualF1ZXJ5O1xuICBpZiAoICFqUXVlcnkgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHNldCBsb2NhbCB2YXJpYWJsZVxuICAkID0galF1ZXJ5O1xuICAvLyAkKCkuaW1hZ2VzTG9hZGVkKClcbiAgJC5mbi5pbWFnZXNMb2FkZWQgPSBmdW5jdGlvbiggb3B0aW9ucywgY2FsbGJhY2sgKSB7XG4gICAgdmFyIGluc3RhbmNlID0gbmV3IEltYWdlc0xvYWRlZCggdGhpcywgb3B0aW9ucywgY2FsbGJhY2sgKTtcbiAgICByZXR1cm4gaW5zdGFuY2UuanFEZWZlcnJlZC5wcm9taXNlKCAkKHRoaXMpICk7XG4gIH07XG59O1xuLy8gdHJ5IG1ha2luZyBwbHVnaW5cbkltYWdlc0xvYWRlZC5tYWtlSlF1ZXJ5UGx1Z2luKCk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5yZXR1cm4gSW1hZ2VzTG9hZGVkO1xuXG59KTtcblxuIiwiLyoqXG4gKiBieFNsaWRlciB2NC4yLjEyXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1IFN0ZXZlbiBXYW5kZXJza2lcbiAqIFdyaXR0ZW4gd2hpbGUgZHJpbmtpbmcgQmVsZ2lhbiBhbGVzIGFuZCBsaXN0ZW5pbmcgdG8gamF6elxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUKVxuICovXG5cbjsoZnVuY3Rpb24oJCkge1xuXG4gIHZhciBkZWZhdWx0cyA9IHtcblxuICAgIC8vIEdFTkVSQUxcbiAgICBtb2RlOiAnaG9yaXpvbnRhbCcsXG4gICAgc2xpZGVTZWxlY3RvcjogJycsXG4gICAgaW5maW5pdGVMb29wOiB0cnVlLFxuICAgIGhpZGVDb250cm9sT25FbmQ6IGZhbHNlLFxuICAgIHNwZWVkOiA1MDAsXG4gICAgZWFzaW5nOiBudWxsLFxuICAgIHNsaWRlTWFyZ2luOiAwLFxuICAgIHN0YXJ0U2xpZGU6IDAsXG4gICAgcmFuZG9tU3RhcnQ6IGZhbHNlLFxuICAgIGNhcHRpb25zOiBmYWxzZSxcbiAgICB0aWNrZXI6IGZhbHNlLFxuICAgIHRpY2tlckhvdmVyOiBmYWxzZSxcbiAgICBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXG4gICAgYWRhcHRpdmVIZWlnaHRTcGVlZDogNTAwLFxuICAgIHZpZGVvOiBmYWxzZSxcbiAgICB1c2VDU1M6IHRydWUsXG4gICAgcHJlbG9hZEltYWdlczogJ3Zpc2libGUnLFxuICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgc2xpZGVaSW5kZXg6IDUwLFxuICAgIHdyYXBwZXJDbGFzczogJ2J4LXdyYXBwZXInLFxuXG4gICAgLy8gVE9VQ0hcbiAgICB0b3VjaEVuYWJsZWQ6IHRydWUsXG4gICAgc3dpcGVUaHJlc2hvbGQ6IDUwLFxuICAgIG9uZVRvT25lVG91Y2g6IHRydWUsXG4gICAgcHJldmVudERlZmF1bHRTd2lwZVg6IHRydWUsXG4gICAgcHJldmVudERlZmF1bHRTd2lwZVk6IGZhbHNlLFxuXG4gICAgLy8gQUNDRVNTSUJJTElUWVxuICAgIGFyaWFMaXZlOiB0cnVlLFxuICAgIGFyaWFIaWRkZW46IHRydWUsXG5cbiAgICAvLyBLRVlCT0FSRFxuICAgIGtleWJvYXJkRW5hYmxlZDogZmFsc2UsXG5cbiAgICAvLyBQQUdFUlxuICAgIHBhZ2VyOiB0cnVlLFxuICAgIHBhZ2VyVHlwZTogJ2Z1bGwnLFxuICAgIHBhZ2VyU2hvcnRTZXBhcmF0b3I6ICcgLyAnLFxuICAgIHBhZ2VyU2VsZWN0b3I6IG51bGwsXG4gICAgYnVpbGRQYWdlcjogbnVsbCxcbiAgICBwYWdlckN1c3RvbTogbnVsbCxcblxuICAgIC8vIENPTlRST0xTXG4gICAgY29udHJvbHM6IHRydWUsXG4gICAgbmV4dFRleHQ6ICdOZXh0JyxcbiAgICBwcmV2VGV4dDogJ1ByZXYnLFxuICAgIG5leHRTZWxlY3RvcjogbnVsbCxcbiAgICBwcmV2U2VsZWN0b3I6IG51bGwsXG4gICAgYXV0b0NvbnRyb2xzOiBmYWxzZSxcbiAgICBzdGFydFRleHQ6ICdTdGFydCcsXG4gICAgc3RvcFRleHQ6ICdTdG9wJyxcbiAgICBhdXRvQ29udHJvbHNDb21iaW5lOiBmYWxzZSxcbiAgICBhdXRvQ29udHJvbHNTZWxlY3RvcjogbnVsbCxcblxuICAgIC8vIEFVVE9cbiAgICBhdXRvOiBmYWxzZSxcbiAgICBwYXVzZTogNDAwMCxcbiAgICBhdXRvU3RhcnQ6IHRydWUsXG4gICAgYXV0b0RpcmVjdGlvbjogJ25leHQnLFxuICAgIHN0b3BBdXRvT25DbGljazogZmFsc2UsXG4gICAgYXV0b0hvdmVyOiBmYWxzZSxcbiAgICBhdXRvRGVsYXk6IDAsXG4gICAgYXV0b1NsaWRlRm9yT25lUGFnZTogZmFsc2UsXG5cbiAgICAvLyBDQVJPVVNFTFxuICAgIG1pblNsaWRlczogMSxcbiAgICBtYXhTbGlkZXM6IDEsXG4gICAgbW92ZVNsaWRlczogMCxcbiAgICBzbGlkZVdpZHRoOiAwLFxuICAgIHNocmlua0l0ZW1zOiBmYWxzZSxcblxuICAgIC8vIENBTExCQUNLU1xuICAgIG9uU2xpZGVyTG9hZDogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlOyB9LFxuICAgIG9uU2xpZGVCZWZvcmU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICBvblNsaWRlQWZ0ZXI6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICBvblNsaWRlTmV4dDogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlOyB9LFxuICAgIG9uU2xpZGVQcmV2OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgb25TbGlkZXJSZXNpemU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZTsgfSxcblx0b25BdXRvQ2hhbmdlOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWU7IH0gLy9jYWxscyB3aGVuIGF1dG8gc2xpZGVzIHN0YXJ0cyBhbmQgc3RvcHNcbiAgfTtcblxuICAkLmZuLmJ4U2xpZGVyID0gZnVuY3Rpb24ob3B0aW9ucykge1xuXG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBzdXBwb3J0IG11bHRpcGxlIGVsZW1lbnRzXG4gICAgaWYgKHRoaXMubGVuZ3RoID4gMSkge1xuICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLmJ4U2xpZGVyKG9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgYSBuYW1lc3BhY2UgdG8gYmUgdXNlZCB0aHJvdWdob3V0IHRoZSBwbHVnaW5cbiAgICB2YXIgc2xpZGVyID0ge30sXG4gICAgLy8gc2V0IGEgcmVmZXJlbmNlIHRvIG91ciBzbGlkZXIgZWxlbWVudFxuICAgIGVsID0gdGhpcyxcbiAgICAvLyBnZXQgdGhlIG9yaWdpbmFsIHdpbmRvdyBkaW1lbnMgKHRoYW5rcyBhIGxvdCBJRSlcbiAgICB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpLFxuICAgIHdpbmRvd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcblxuICAgIC8vIFJldHVybiBpZiBzbGlkZXIgaXMgYWxyZWFkeSBpbml0aWFsaXplZFxuICAgIGlmICgkKGVsKS5kYXRhKCdieFNsaWRlcicpKSB7IHJldHVybjsgfVxuXG4gICAgLyoqXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKiA9IFBSSVZBVEUgRlVOQ1RJT05TXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIG5hbWVzcGFjZSBzZXR0aW5ncyB0byBiZSB1c2VkIHRocm91Z2hvdXQgcGx1Z2luXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFJldHVybiBpZiBzbGlkZXIgaXMgYWxyZWFkeSBpbml0aWFsaXplZFxuICAgICAgaWYgKCQoZWwpLmRhdGEoJ2J4U2xpZGVyJykpIHsgcmV0dXJuOyB9XG4gICAgICAvLyBtZXJnZSB1c2VyLXN1cHBsaWVkIG9wdGlvbnMgd2l0aCB0aGUgZGVmYXVsdHNcbiAgICAgIHNsaWRlci5zZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAvLyBwYXJzZSBzbGlkZVdpZHRoIHNldHRpbmdcbiAgICAgIHNsaWRlci5zZXR0aW5ncy5zbGlkZVdpZHRoID0gcGFyc2VJbnQoc2xpZGVyLnNldHRpbmdzLnNsaWRlV2lkdGgpO1xuICAgICAgLy8gc3RvcmUgdGhlIG9yaWdpbmFsIGNoaWxkcmVuXG4gICAgICBzbGlkZXIuY2hpbGRyZW4gPSBlbC5jaGlsZHJlbihzbGlkZXIuc2V0dGluZ3Muc2xpZGVTZWxlY3Rvcik7XG4gICAgICAvLyBjaGVjayBpZiBhY3R1YWwgbnVtYmVyIG9mIHNsaWRlcyBpcyBsZXNzIHRoYW4gbWluU2xpZGVzIC8gbWF4U2xpZGVzXG4gICAgICBpZiAoc2xpZGVyLmNoaWxkcmVuLmxlbmd0aCA8IHNsaWRlci5zZXR0aW5ncy5taW5TbGlkZXMpIHsgc2xpZGVyLnNldHRpbmdzLm1pblNsaWRlcyA9IHNsaWRlci5jaGlsZHJlbi5sZW5ndGg7IH1cbiAgICAgIGlmIChzbGlkZXIuY2hpbGRyZW4ubGVuZ3RoIDwgc2xpZGVyLnNldHRpbmdzLm1heFNsaWRlcykgeyBzbGlkZXIuc2V0dGluZ3MubWF4U2xpZGVzID0gc2xpZGVyLmNoaWxkcmVuLmxlbmd0aDsgfVxuICAgICAgLy8gaWYgcmFuZG9tIHN0YXJ0LCBzZXQgdGhlIHN0YXJ0U2xpZGUgc2V0dGluZyB0byByYW5kb20gbnVtYmVyXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLnJhbmRvbVN0YXJ0KSB7IHNsaWRlci5zZXR0aW5ncy5zdGFydFNsaWRlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2xpZGVyLmNoaWxkcmVuLmxlbmd0aCk7IH1cbiAgICAgIC8vIHN0b3JlIGFjdGl2ZSBzbGlkZSBpbmZvcm1hdGlvblxuICAgICAgc2xpZGVyLmFjdGl2ZSA9IHsgaW5kZXg6IHNsaWRlci5zZXR0aW5ncy5zdGFydFNsaWRlIH07XG4gICAgICAvLyBzdG9yZSBpZiB0aGUgc2xpZGVyIGlzIGluIGNhcm91c2VsIG1vZGUgKGRpc3BsYXlpbmcgLyBtb3ZpbmcgbXVsdGlwbGUgc2xpZGVzKVxuICAgICAgc2xpZGVyLmNhcm91c2VsID0gc2xpZGVyLnNldHRpbmdzLm1pblNsaWRlcyA+IDEgfHwgc2xpZGVyLnNldHRpbmdzLm1heFNsaWRlcyA+IDEgPyB0cnVlIDogZmFsc2U7XG4gICAgICAvLyBpZiBjYXJvdXNlbCwgZm9yY2UgcHJlbG9hZEltYWdlcyA9ICdhbGwnXG4gICAgICBpZiAoc2xpZGVyLmNhcm91c2VsKSB7IHNsaWRlci5zZXR0aW5ncy5wcmVsb2FkSW1hZ2VzID0gJ2FsbCc7IH1cbiAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgbWluIC8gbWF4IHdpZHRoIHRocmVzaG9sZHMgYmFzZWQgb24gbWluIC8gbWF4IG51bWJlciBvZiBzbGlkZXNcbiAgICAgIC8vIHVzZWQgdG8gc2V0dXAgYW5kIHVwZGF0ZSBjYXJvdXNlbCBzbGlkZXMgZGltZW5zaW9uc1xuICAgICAgc2xpZGVyLm1pblRocmVzaG9sZCA9IChzbGlkZXIuc2V0dGluZ3MubWluU2xpZGVzICogc2xpZGVyLnNldHRpbmdzLnNsaWRlV2lkdGgpICsgKChzbGlkZXIuc2V0dGluZ3MubWluU2xpZGVzIC0gMSkgKiBzbGlkZXIuc2V0dGluZ3Muc2xpZGVNYXJnaW4pO1xuICAgICAgc2xpZGVyLm1heFRocmVzaG9sZCA9IChzbGlkZXIuc2V0dGluZ3MubWF4U2xpZGVzICogc2xpZGVyLnNldHRpbmdzLnNsaWRlV2lkdGgpICsgKChzbGlkZXIuc2V0dGluZ3MubWF4U2xpZGVzIC0gMSkgKiBzbGlkZXIuc2V0dGluZ3Muc2xpZGVNYXJnaW4pO1xuICAgICAgLy8gc3RvcmUgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHNsaWRlciAoaWYgY3VycmVudGx5IGFuaW1hdGluZywgd29ya2luZyBpcyB0cnVlKVxuICAgICAgc2xpZGVyLndvcmtpbmcgPSBmYWxzZTtcbiAgICAgIC8vIGluaXRpYWxpemUgdGhlIGNvbnRyb2xzIG9iamVjdFxuICAgICAgc2xpZGVyLmNvbnRyb2xzID0ge307XG4gICAgICAvLyBpbml0aWFsaXplIGFuIGF1dG8gaW50ZXJ2YWxcbiAgICAgIHNsaWRlci5pbnRlcnZhbCA9IG51bGw7XG4gICAgICAvLyBkZXRlcm1pbmUgd2hpY2ggcHJvcGVydHkgdG8gdXNlIGZvciB0cmFuc2l0aW9uc1xuICAgICAgc2xpZGVyLmFuaW1Qcm9wID0gc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICd2ZXJ0aWNhbCcgPyAndG9wJyA6ICdsZWZ0JztcbiAgICAgIC8vIGRldGVybWluZSBpZiBoYXJkd2FyZSBhY2NlbGVyYXRpb24gY2FuIGJlIHVzZWRcbiAgICAgIHNsaWRlci51c2luZ0NTUyA9IHNsaWRlci5zZXR0aW5ncy51c2VDU1MgJiYgc2xpZGVyLnNldHRpbmdzLm1vZGUgIT09ICdmYWRlJyAmJiAoZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBvdXIgdGVzdCBkaXYgZWxlbWVudFxuICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgIC8vIGNzcyB0cmFuc2l0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgcHJvcHMgPSBbJ1dlYmtpdFBlcnNwZWN0aXZlJywgJ01velBlcnNwZWN0aXZlJywgJ09QZXJzcGVjdGl2ZScsICdtc1BlcnNwZWN0aXZlJ107XG4gICAgICAgIC8vIHRlc3QgZm9yIGVhY2ggcHJvcGVydHlcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChkaXYuc3R5bGVbcHJvcHNbaV1dICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNsaWRlci5jc3NQcmVmaXggPSBwcm9wc1tpXS5yZXBsYWNlKCdQZXJzcGVjdGl2ZScsICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgc2xpZGVyLmFuaW1Qcm9wID0gJy0nICsgc2xpZGVyLmNzc1ByZWZpeCArICctdHJhbnNmb3JtJztcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KCkpO1xuICAgICAgLy8gaWYgdmVydGljYWwgbW9kZSBhbHdheXMgbWFrZSBtYXhTbGlkZXMgYW5kIG1pblNsaWRlcyBlcXVhbFxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAndmVydGljYWwnKSB7IHNsaWRlci5zZXR0aW5ncy5tYXhTbGlkZXMgPSBzbGlkZXIuc2V0dGluZ3MubWluU2xpZGVzOyB9XG4gICAgICAvLyBzYXZlIG9yaWdpbmFsIHN0eWxlIGRhdGFcbiAgICAgIGVsLmRhdGEoJ29yaWdTdHlsZScsIGVsLmF0dHIoJ3N0eWxlJykpO1xuICAgICAgZWwuY2hpbGRyZW4oc2xpZGVyLnNldHRpbmdzLnNsaWRlU2VsZWN0b3IpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykuZGF0YSgnb3JpZ1N0eWxlJywgJCh0aGlzKS5hdHRyKCdzdHlsZScpKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBwZXJmb3JtIGFsbCBET00gLyBDU1MgbW9kaWZpY2F0aW9uc1xuICAgICAgc2V0dXAoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYWxsIERPTSBhbmQgQ1NTIG1vZGlmaWNhdGlvbnNcbiAgICAgKi9cbiAgICB2YXIgc2V0dXAgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwcmVsb2FkU2VsZWN0b3IgPSBzbGlkZXIuY2hpbGRyZW4uZXEoc2xpZGVyLnNldHRpbmdzLnN0YXJ0U2xpZGUpOyAvLyBzZXQgdGhlIGRlZmF1bHQgcHJlbG9hZCBzZWxlY3RvciAodmlzaWJsZSlcblxuICAgICAgLy8gd3JhcCBlbCBpbiBhIHdyYXBwZXJcbiAgICAgIGVsLndyYXAoJzxkaXYgY2xhc3M9XCInICsgc2xpZGVyLnNldHRpbmdzLndyYXBwZXJDbGFzcyArICdcIj48ZGl2IGNsYXNzPVwiYngtdmlld3BvcnRcIj48L2Rpdj48L2Rpdj4nKTtcbiAgICAgIC8vIHN0b3JlIGEgbmFtZXNwYWNlIHJlZmVyZW5jZSB0byAuYngtdmlld3BvcnRcbiAgICAgIHNsaWRlci52aWV3cG9ydCA9IGVsLnBhcmVudCgpO1xuXG4gICAgICAvLyBhZGQgYXJpYS1saXZlIGlmIHRoZSBzZXR0aW5nIGlzIGVuYWJsZWQgYW5kIHRpY2tlciBtb2RlIGlzIGRpc2FibGVkXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmFyaWFMaXZlICYmICFzbGlkZXIuc2V0dGluZ3MudGlja2VyKSB7XG4gICAgICAgIHNsaWRlci52aWV3cG9ydC5hdHRyKCdhcmlhLWxpdmUnLCAncG9saXRlJyk7XG4gICAgICB9XG4gICAgICAvLyBhZGQgYSBsb2FkaW5nIGRpdiB0byBkaXNwbGF5IHdoaWxlIGltYWdlcyBhcmUgbG9hZGluZ1xuICAgICAgc2xpZGVyLmxvYWRlciA9ICQoJzxkaXYgY2xhc3M9XCJieC1sb2FkaW5nXCIgLz4nKTtcbiAgICAgIHNsaWRlci52aWV3cG9ydC5wcmVwZW5kKHNsaWRlci5sb2FkZXIpO1xuICAgICAgLy8gc2V0IGVsIHRvIGEgbWFzc2l2ZSB3aWR0aCwgdG8gaG9sZCBhbnkgbmVlZGVkIHNsaWRlc1xuICAgICAgLy8gYWxzbyBzdHJpcCBhbnkgbWFyZ2luIGFuZCBwYWRkaW5nIGZyb20gZWxcbiAgICAgIGVsLmNzcyh7XG4gICAgICAgIHdpZHRoOiBzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ2hvcml6b250YWwnID8gKHNsaWRlci5jaGlsZHJlbi5sZW5ndGggKiAxMDAwICsgMjE1KSArICclJyA6ICdhdXRvJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICAgIH0pO1xuICAgICAgLy8gaWYgdXNpbmcgQ1NTLCBhZGQgdGhlIGVhc2luZyBwcm9wZXJ0eVxuICAgICAgaWYgKHNsaWRlci51c2luZ0NTUyAmJiBzbGlkZXIuc2V0dGluZ3MuZWFzaW5nKSB7XG4gICAgICAgIGVsLmNzcygnLScgKyBzbGlkZXIuY3NzUHJlZml4ICsgJy10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbicsIHNsaWRlci5zZXR0aW5ncy5lYXNpbmcpO1xuICAgICAgLy8gaWYgbm90IHVzaW5nIENTUyBhbmQgbm8gZWFzaW5nIHZhbHVlIHdhcyBzdXBwbGllZCwgdXNlIHRoZSBkZWZhdWx0IEpTIGFuaW1hdGlvbiBlYXNpbmcgKHN3aW5nKVxuICAgICAgfSBlbHNlIGlmICghc2xpZGVyLnNldHRpbmdzLmVhc2luZykge1xuICAgICAgICBzbGlkZXIuc2V0dGluZ3MuZWFzaW5nID0gJ3N3aW5nJztcbiAgICAgIH1cbiAgICAgIC8vIG1ha2UgbW9kaWZpY2F0aW9ucyB0byB0aGUgdmlld3BvcnQgKC5ieC12aWV3cG9ydClcbiAgICAgIHNsaWRlci52aWV3cG9ydC5jc3Moe1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICB9KTtcbiAgICAgIHNsaWRlci52aWV3cG9ydC5wYXJlbnQoKS5jc3Moe1xuICAgICAgICBtYXhXaWR0aDogZ2V0Vmlld3BvcnRNYXhXaWR0aCgpXG4gICAgICB9KTtcbiAgICAgIC8vIGFwcGx5IGNzcyB0byBhbGwgc2xpZGVyIGNoaWxkcmVuXG4gICAgICBzbGlkZXIuY2hpbGRyZW4uY3NzKHtcbiAgICAgICAgLy8gdGhlIGZsb2F0IGF0dHJpYnV0ZSBpcyBhIHJlc2VydmVkIHdvcmQgaW4gY29tcHJlc3NvcnMgbGlrZSBZVUkgY29tcHJlc3NvciBhbmQgbmVlZCB0byBiZSBxdW90ZWQgIzQ4XG4gICAgICAgICdmbG9hdCc6IHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAnaG9yaXpvbnRhbCcgPyAnbGVmdCcgOiAnbm9uZScsXG4gICAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgICAgfSk7XG4gICAgICAvLyBhcHBseSB0aGUgY2FsY3VsYXRlZCB3aWR0aCBhZnRlciB0aGUgZmxvYXQgaXMgYXBwbGllZCB0byBwcmV2ZW50IHNjcm9sbGJhciBpbnRlcmZlcmVuY2VcbiAgICAgIHNsaWRlci5jaGlsZHJlbi5jc3MoJ3dpZHRoJywgZ2V0U2xpZGVXaWR0aCgpKTtcbiAgICAgIC8vIGlmIHNsaWRlTWFyZ2luIGlzIHN1cHBsaWVkLCBhZGQgdGhlIGNzc1xuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAnaG9yaXpvbnRhbCcgJiYgc2xpZGVyLnNldHRpbmdzLnNsaWRlTWFyZ2luID4gMCkgeyBzbGlkZXIuY2hpbGRyZW4uY3NzKCdtYXJnaW5SaWdodCcsIHNsaWRlci5zZXR0aW5ncy5zbGlkZU1hcmdpbik7IH1cbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ3ZlcnRpY2FsJyAmJiBzbGlkZXIuc2V0dGluZ3Muc2xpZGVNYXJnaW4gPiAwKSB7IHNsaWRlci5jaGlsZHJlbi5jc3MoJ21hcmdpbkJvdHRvbScsIHNsaWRlci5zZXR0aW5ncy5zbGlkZU1hcmdpbik7IH1cbiAgICAgIC8vIGlmIFwiZmFkZVwiIG1vZGUsIGFkZCBwb3NpdGlvbmluZyBhbmQgei1pbmRleCBDU1NcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ2ZhZGUnKSB7XG4gICAgICAgIHNsaWRlci5jaGlsZHJlbi5jc3Moe1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHpJbmRleDogMCxcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHByZXBhcmUgdGhlIHotaW5kZXggb24gdGhlIHNob3dpbmcgZWxlbWVudFxuICAgICAgICBzbGlkZXIuY2hpbGRyZW4uZXEoc2xpZGVyLnNldHRpbmdzLnN0YXJ0U2xpZGUpLmNzcyh7ekluZGV4OiBzbGlkZXIuc2V0dGluZ3Muc2xpZGVaSW5kZXgsIGRpc3BsYXk6ICdibG9jayd9KTtcbiAgICAgIH1cbiAgICAgIC8vIGNyZWF0ZSBhbiBlbGVtZW50IHRvIGNvbnRhaW4gYWxsIHNsaWRlciBjb250cm9scyAocGFnZXIsIHN0YXJ0IC8gc3RvcCwgZXRjKVxuICAgICAgc2xpZGVyLmNvbnRyb2xzLmVsID0gJCgnPGRpdiBjbGFzcz1cImJ4LWNvbnRyb2xzXCIgLz4nKTtcbiAgICAgIC8vIGlmIGNhcHRpb25zIGFyZSByZXF1ZXN0ZWQsIGFkZCB0aGVtXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmNhcHRpb25zKSB7IGFwcGVuZENhcHRpb25zKCk7IH1cbiAgICAgIC8vIGNoZWNrIGlmIHN0YXJ0U2xpZGUgaXMgbGFzdCBzbGlkZVxuICAgICAgc2xpZGVyLmFjdGl2ZS5sYXN0ID0gc2xpZGVyLnNldHRpbmdzLnN0YXJ0U2xpZGUgPT09IGdldFBhZ2VyUXR5KCkgLSAxO1xuICAgICAgLy8gaWYgdmlkZW8gaXMgdHJ1ZSwgc2V0IHVwIHRoZSBmaXRWaWRzIHBsdWdpblxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy52aWRlbykgeyBlbC5maXRWaWRzKCk7IH1cbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MucHJlbG9hZEltYWdlcyA9PT0gJ2FsbCcgfHwgc2xpZGVyLnNldHRpbmdzLnRpY2tlcikgeyBwcmVsb2FkU2VsZWN0b3IgPSBzbGlkZXIuY2hpbGRyZW47IH1cbiAgICAgIC8vIG9ubHkgY2hlY2sgZm9yIGNvbnRyb2wgYWRkaXRpb24gaWYgbm90IGluIFwidGlja2VyXCIgbW9kZVxuICAgICAgaWYgKCFzbGlkZXIuc2V0dGluZ3MudGlja2VyKSB7XG4gICAgICAgIC8vIGlmIGNvbnRyb2xzIGFyZSByZXF1ZXN0ZWQsIGFkZCB0aGVtXG4gICAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuY29udHJvbHMpIHsgYXBwZW5kQ29udHJvbHMoKTsgfVxuICAgICAgICAvLyBpZiBhdXRvIGlzIHRydWUsIGFuZCBhdXRvIGNvbnRyb2xzIGFyZSByZXF1ZXN0ZWQsIGFkZCB0aGVtXG4gICAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuYXV0byAmJiBzbGlkZXIuc2V0dGluZ3MuYXV0b0NvbnRyb2xzKSB7IGFwcGVuZENvbnRyb2xzQXV0bygpOyB9XG4gICAgICAgIC8vIGlmIHBhZ2VyIGlzIHJlcXVlc3RlZCwgYWRkIGl0XG4gICAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MucGFnZXIpIHsgYXBwZW5kUGFnZXIoKTsgfVxuICAgICAgICAvLyBpZiBhbnkgY29udHJvbCBvcHRpb24gaXMgcmVxdWVzdGVkLCBhZGQgdGhlIGNvbnRyb2xzIHdyYXBwZXJcbiAgICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5jb250cm9scyB8fCBzbGlkZXIuc2V0dGluZ3MuYXV0b0NvbnRyb2xzIHx8IHNsaWRlci5zZXR0aW5ncy5wYWdlcikgeyBzbGlkZXIudmlld3BvcnQuYWZ0ZXIoc2xpZGVyLmNvbnRyb2xzLmVsKTsgfVxuICAgICAgLy8gaWYgdGlja2VyIG1vZGUsIGRvIG5vdCBhbGxvdyBhIHBhZ2VyXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbGlkZXIuc2V0dGluZ3MucGFnZXIgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGxvYWRFbGVtZW50cyhwcmVsb2FkU2VsZWN0b3IsIHN0YXJ0KTtcbiAgICB9O1xuXG4gICAgdmFyIGxvYWRFbGVtZW50cyA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBjYWxsYmFjaykge1xuICAgICAgdmFyIHRvdGFsID0gc2VsZWN0b3IuZmluZCgnaW1nOm5vdChbc3JjPVwiXCJdKSwgaWZyYW1lJykubGVuZ3RoLFxuICAgICAgY291bnQgPSAwO1xuICAgICAgaWYgKHRvdGFsID09PSAwKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNlbGVjdG9yLmZpbmQoJ2ltZzpub3QoW3NyYz1cIlwiXSksIGlmcmFtZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykub25lKCdsb2FkIGVycm9yJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKCsrY291bnQgPT09IHRvdGFsKSB7IGNhbGxiYWNrKCk7IH1cbiAgICAgICAgfSkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAodGhpcy5jb21wbGV0ZSB8fCB0aGlzLnNyYyA9PSAnJykgeyAkKHRoaXMpLnRyaWdnZXIoJ2xvYWQnKTsgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdGFydCB0aGUgc2xpZGVyXG4gICAgICovXG4gICAgdmFyIHN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBpZiBpbmZpbml0ZSBsb29wLCBwcmVwYXJlIGFkZGl0aW9uYWwgc2xpZGVzXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmluZmluaXRlTG9vcCAmJiBzbGlkZXIuc2V0dGluZ3MubW9kZSAhPT0gJ2ZhZGUnICYmICFzbGlkZXIuc2V0dGluZ3MudGlja2VyKSB7XG4gICAgICAgIHZhciBzbGljZSAgICA9IHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAndmVydGljYWwnID8gc2xpZGVyLnNldHRpbmdzLm1pblNsaWRlcyA6IHNsaWRlci5zZXR0aW5ncy5tYXhTbGlkZXMsXG4gICAgICAgIHNsaWNlQXBwZW5kICA9IHNsaWRlci5jaGlsZHJlbi5zbGljZSgwLCBzbGljZSkuY2xvbmUodHJ1ZSkuYWRkQ2xhc3MoJ2J4LWNsb25lJyksXG4gICAgICAgIHNsaWNlUHJlcGVuZCA9IHNsaWRlci5jaGlsZHJlbi5zbGljZSgtc2xpY2UpLmNsb25lKHRydWUpLmFkZENsYXNzKCdieC1jbG9uZScpO1xuICAgICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmFyaWFIaWRkZW4pIHtcbiAgICAgICAgICBzbGljZUFwcGVuZC5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuICAgICAgICAgIHNsaWNlUHJlcGVuZC5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsLmFwcGVuZChzbGljZUFwcGVuZCkucHJlcGVuZChzbGljZVByZXBlbmQpO1xuICAgICAgfVxuICAgICAgLy8gcmVtb3ZlIHRoZSBsb2FkaW5nIERPTSBlbGVtZW50XG4gICAgICBzbGlkZXIubG9hZGVyLnJlbW92ZSgpO1xuICAgICAgLy8gc2V0IHRoZSBsZWZ0IC8gdG9wIHBvc2l0aW9uIG9mIFwiZWxcIlxuICAgICAgc2V0U2xpZGVQb3NpdGlvbigpO1xuICAgICAgLy8gaWYgXCJ2ZXJ0aWNhbFwiIG1vZGUsIGFsd2F5cyB1c2UgYWRhcHRpdmVIZWlnaHQgdG8gcHJldmVudCBvZGQgYmVoYXZpb3JcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ3ZlcnRpY2FsJykgeyBzbGlkZXIuc2V0dGluZ3MuYWRhcHRpdmVIZWlnaHQgPSB0cnVlOyB9XG4gICAgICAvLyBzZXQgdGhlIHZpZXdwb3J0IGhlaWdodFxuICAgICAgc2xpZGVyLnZpZXdwb3J0LmhlaWdodChnZXRWaWV3cG9ydEhlaWdodCgpKTtcbiAgICAgIC8vIG1ha2Ugc3VyZSBldmVyeXRoaW5nIGlzIHBvc2l0aW9uZWQganVzdCByaWdodCAoc2FtZSBhcyBhIHdpbmRvdyByZXNpemUpXG4gICAgICBlbC5yZWRyYXdTbGlkZXIoKTtcbiAgICAgIC8vIG9uU2xpZGVyTG9hZCBjYWxsYmFja1xuICAgICAgc2xpZGVyLnNldHRpbmdzLm9uU2xpZGVyTG9hZC5jYWxsKGVsLCBzbGlkZXIuYWN0aXZlLmluZGV4KTtcbiAgICAgIC8vIHNsaWRlciBoYXMgYmVlbiBmdWxseSBpbml0aWFsaXplZFxuICAgICAgc2xpZGVyLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIC8vIGJpbmQgdGhlIHJlc2l6ZSBjYWxsIHRvIHRoZSB3aW5kb3dcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MucmVzcG9uc2l2ZSkgeyAkKHdpbmRvdykuYmluZCgncmVzaXplJywgcmVzaXplV2luZG93KTsgfVxuICAgICAgLy8gaWYgYXV0byBpcyB0cnVlIGFuZCBoYXMgbW9yZSB0aGFuIDEgcGFnZSwgc3RhcnQgdGhlIHNob3dcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuYXV0byAmJiBzbGlkZXIuc2V0dGluZ3MuYXV0b1N0YXJ0ICYmIChnZXRQYWdlclF0eSgpID4gMSB8fCBzbGlkZXIuc2V0dGluZ3MuYXV0b1NsaWRlRm9yT25lUGFnZSkpIHsgaW5pdEF1dG8oKTsgfVxuICAgICAgLy8gaWYgdGlja2VyIGlzIHRydWUsIHN0YXJ0IHRoZSB0aWNrZXJcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MudGlja2VyKSB7IGluaXRUaWNrZXIoKTsgfVxuICAgICAgLy8gaWYgcGFnZXIgaXMgcmVxdWVzdGVkLCBtYWtlIHRoZSBhcHByb3ByaWF0ZSBwYWdlciBsaW5rIGFjdGl2ZVxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5wYWdlcikgeyB1cGRhdGVQYWdlckFjdGl2ZShzbGlkZXIuc2V0dGluZ3Muc3RhcnRTbGlkZSk7IH1cbiAgICAgIC8vIGNoZWNrIGZvciBhbnkgdXBkYXRlcyB0byB0aGUgY29udHJvbHMgKGxpa2UgaGlkZUNvbnRyb2xPbkVuZCB1cGRhdGVzKVxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5jb250cm9scykgeyB1cGRhdGVEaXJlY3Rpb25Db250cm9scygpOyB9XG4gICAgICAvLyBpZiB0b3VjaEVuYWJsZWQgaXMgdHJ1ZSwgc2V0dXAgdGhlIHRvdWNoIGV2ZW50c1xuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy50b3VjaEVuYWJsZWQgJiYgIXNsaWRlci5zZXR0aW5ncy50aWNrZXIpIHsgaW5pdFRvdWNoKCk7IH1cbiAgICAgIC8vIGlmIGtleWJvYXJkRW5hYmxlZCBpcyB0cnVlLCBzZXR1cCB0aGUga2V5Ym9hcmQgZXZlbnRzXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmtleWJvYXJkRW5hYmxlZCAmJiAhc2xpZGVyLnNldHRpbmdzLnRpY2tlcikge1xuICAgICAgICAkKGRvY3VtZW50KS5rZXlkb3duKGtleVByZXNzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY2FsY3VsYXRlZCBoZWlnaHQgb2YgdGhlIHZpZXdwb3J0LCB1c2VkIHRvIGRldGVybWluZSBlaXRoZXIgYWRhcHRpdmVIZWlnaHQgb3IgdGhlIG1heEhlaWdodCB2YWx1ZVxuICAgICAqL1xuICAgIHZhciBnZXRWaWV3cG9ydEhlaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhlaWdodCA9IDA7XG4gICAgICAvLyBmaXJzdCBkZXRlcm1pbmUgd2hpY2ggY2hpbGRyZW4gKHNsaWRlcykgc2hvdWxkIGJlIHVzZWQgaW4gb3VyIGhlaWdodCBjYWxjdWxhdGlvblxuICAgICAgdmFyIGNoaWxkcmVuID0gJCgpO1xuICAgICAgLy8gaWYgbW9kZSBpcyBub3QgXCJ2ZXJ0aWNhbFwiIGFuZCBhZGFwdGl2ZUhlaWdodCBpcyBmYWxzZSwgaW5jbHVkZSBhbGwgY2hpbGRyZW5cbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MubW9kZSAhPT0gJ3ZlcnRpY2FsJyAmJiAhc2xpZGVyLnNldHRpbmdzLmFkYXB0aXZlSGVpZ2h0KSB7XG4gICAgICAgIGNoaWxkcmVuID0gc2xpZGVyLmNoaWxkcmVuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgbm90IGNhcm91c2VsLCByZXR1cm4gdGhlIHNpbmdsZSBhY3RpdmUgY2hpbGRcbiAgICAgICAgaWYgKCFzbGlkZXIuY2Fyb3VzZWwpIHtcbiAgICAgICAgICBjaGlsZHJlbiA9IHNsaWRlci5jaGlsZHJlbi5lcShzbGlkZXIuYWN0aXZlLmluZGV4KTtcbiAgICAgICAgLy8gaWYgY2Fyb3VzZWwsIHJldHVybiBhIHNsaWNlIG9mIGNoaWxkcmVuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZ2V0IHRoZSBpbmRpdmlkdWFsIHNsaWRlIGluZGV4XG4gICAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IHNsaWRlci5zZXR0aW5ncy5tb3ZlU2xpZGVzID09PSAxID8gc2xpZGVyLmFjdGl2ZS5pbmRleCA6IHNsaWRlci5hY3RpdmUuaW5kZXggKiBnZXRNb3ZlQnkoKTtcbiAgICAgICAgICAvLyBhZGQgdGhlIGN1cnJlbnQgc2xpZGUgdG8gdGhlIGNoaWxkcmVuXG4gICAgICAgICAgY2hpbGRyZW4gPSBzbGlkZXIuY2hpbGRyZW4uZXEoY3VycmVudEluZGV4KTtcbiAgICAgICAgICAvLyBjeWNsZSB0aHJvdWdoIHRoZSByZW1haW5pbmcgXCJzaG93aW5nXCIgc2xpZGVzXG4gICAgICAgICAgZm9yIChpID0gMTsgaSA8PSBzbGlkZXIuc2V0dGluZ3MubWF4U2xpZGVzIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAvLyBpZiBsb29wZWQgYmFjayB0byB0aGUgc3RhcnRcbiAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggKyBpID49IHNsaWRlci5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5hZGQoc2xpZGVyLmNoaWxkcmVuLmVxKGkgLSAxKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLmFkZChzbGlkZXIuY2hpbGRyZW4uZXEoY3VycmVudEluZGV4ICsgaSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gaWYgXCJ2ZXJ0aWNhbFwiIG1vZGUsIGNhbGN1bGF0ZSB0aGUgc3VtIG9mIHRoZSBoZWlnaHRzIG9mIHRoZSBjaGlsZHJlblxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIGNoaWxkcmVuLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICBoZWlnaHQgKz0gJCh0aGlzKS5vdXRlckhlaWdodCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gYWRkIHVzZXItc3VwcGxpZWQgbWFyZ2luc1xuICAgICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLnNsaWRlTWFyZ2luID4gMCkge1xuICAgICAgICAgIGhlaWdodCArPSBzbGlkZXIuc2V0dGluZ3Muc2xpZGVNYXJnaW4gKiAoc2xpZGVyLnNldHRpbmdzLm1pblNsaWRlcyAtIDEpO1xuICAgICAgICB9XG4gICAgICAvLyBpZiBub3QgXCJ2ZXJ0aWNhbFwiIG1vZGUsIGNhbGN1bGF0ZSB0aGUgbWF4IGhlaWdodCBvZiB0aGUgY2hpbGRyZW5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlaWdodCA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIGNoaWxkcmVuLm1hcChmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gJCh0aGlzKS5vdXRlckhlaWdodChmYWxzZSk7XG4gICAgICAgIH0pLmdldCgpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNsaWRlci52aWV3cG9ydC5jc3MoJ2JveC1zaXppbmcnKSA9PT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgICAgIGhlaWdodCArPSBwYXJzZUZsb2F0KHNsaWRlci52aWV3cG9ydC5jc3MoJ3BhZGRpbmctdG9wJykpICsgcGFyc2VGbG9hdChzbGlkZXIudmlld3BvcnQuY3NzKCdwYWRkaW5nLWJvdHRvbScpKSArXG4gICAgICAgICAgICAgIHBhcnNlRmxvYXQoc2xpZGVyLnZpZXdwb3J0LmNzcygnYm9yZGVyLXRvcC13aWR0aCcpKSArIHBhcnNlRmxvYXQoc2xpZGVyLnZpZXdwb3J0LmNzcygnYm9yZGVyLWJvdHRvbS13aWR0aCcpKTtcbiAgICAgIH0gZWxzZSBpZiAoc2xpZGVyLnZpZXdwb3J0LmNzcygnYm94LXNpemluZycpID09PSAncGFkZGluZy1ib3gnKSB7XG4gICAgICAgIGhlaWdodCArPSBwYXJzZUZsb2F0KHNsaWRlci52aWV3cG9ydC5jc3MoJ3BhZGRpbmctdG9wJykpICsgcGFyc2VGbG9hdChzbGlkZXIudmlld3BvcnQuY3NzKCdwYWRkaW5nLWJvdHRvbScpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGhlaWdodDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY2FsY3VsYXRlZCB3aWR0aCB0byBiZSB1c2VkIGZvciB0aGUgb3V0ZXIgd3JhcHBlciAvIHZpZXdwb3J0XG4gICAgICovXG4gICAgdmFyIGdldFZpZXdwb3J0TWF4V2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB3aWR0aCA9ICcxMDAlJztcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3Muc2xpZGVXaWR0aCA+IDApIHtcbiAgICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICB3aWR0aCA9IChzbGlkZXIuc2V0dGluZ3MubWF4U2xpZGVzICogc2xpZGVyLnNldHRpbmdzLnNsaWRlV2lkdGgpICsgKChzbGlkZXIuc2V0dGluZ3MubWF4U2xpZGVzIC0gMSkgKiBzbGlkZXIuc2V0dGluZ3Muc2xpZGVNYXJnaW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpZHRoID0gc2xpZGVyLnNldHRpbmdzLnNsaWRlV2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY2FsY3VsYXRlZCB3aWR0aCB0byBiZSBhcHBsaWVkIHRvIGVhY2ggc2xpZGVcbiAgICAgKi9cbiAgICB2YXIgZ2V0U2xpZGVXaWR0aCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG5ld0VsV2lkdGggPSBzbGlkZXIuc2V0dGluZ3Muc2xpZGVXaWR0aCwgLy8gc3RhcnQgd2l0aCBhbnkgdXNlci1zdXBwbGllZCBzbGlkZSB3aWR0aFxuICAgICAgd3JhcFdpZHRoICAgICAgPSBzbGlkZXIudmlld3BvcnQud2lkdGgoKTsgICAgLy8gZ2V0IHRoZSBjdXJyZW50IHZpZXdwb3J0IHdpZHRoXG4gICAgICAvLyBpZiBzbGlkZSB3aWR0aCB3YXMgbm90IHN1cHBsaWVkLCBvciBpcyBsYXJnZXIgdGhhbiB0aGUgdmlld3BvcnQgdXNlIHRoZSB2aWV3cG9ydCB3aWR0aFxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5zbGlkZVdpZHRoID09PSAwIHx8XG4gICAgICAgIChzbGlkZXIuc2V0dGluZ3Muc2xpZGVXaWR0aCA+IHdyYXBXaWR0aCAmJiAhc2xpZGVyLmNhcm91c2VsKSB8fFxuICAgICAgICBzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICBuZXdFbFdpZHRoID0gd3JhcFdpZHRoO1xuICAgICAgLy8gaWYgY2Fyb3VzZWwsIHVzZSB0aGUgdGhyZXNob2xkcyB0byBkZXRlcm1pbmUgdGhlIHdpZHRoXG4gICAgICB9IGVsc2UgaWYgKHNsaWRlci5zZXR0aW5ncy5tYXhTbGlkZXMgPiAxICYmIHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgaWYgKHdyYXBXaWR0aCA+IHNsaWRlci5tYXhUaHJlc2hvbGQpIHtcbiAgICAgICAgICByZXR1cm4gbmV3RWxXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmICh3cmFwV2lkdGggPCBzbGlkZXIubWluVGhyZXNob2xkKSB7XG4gICAgICAgICAgbmV3RWxXaWR0aCA9ICh3cmFwV2lkdGggLSAoc2xpZGVyLnNldHRpbmdzLnNsaWRlTWFyZ2luICogKHNsaWRlci5zZXR0aW5ncy5taW5TbGlkZXMgLSAxKSkpIC8gc2xpZGVyLnNldHRpbmdzLm1pblNsaWRlcztcbiAgICAgICAgfSBlbHNlIGlmIChzbGlkZXIuc2V0dGluZ3Muc2hyaW5rSXRlbXMpIHtcbiAgICAgICAgICBuZXdFbFdpZHRoID0gTWF0aC5mbG9vcigod3JhcFdpZHRoICsgc2xpZGVyLnNldHRpbmdzLnNsaWRlTWFyZ2luKSAvIChNYXRoLmNlaWwoKHdyYXBXaWR0aCArIHNsaWRlci5zZXR0aW5ncy5zbGlkZU1hcmdpbikgLyAobmV3RWxXaWR0aCArIHNsaWRlci5zZXR0aW5ncy5zbGlkZU1hcmdpbikpKSAtIHNsaWRlci5zZXR0aW5ncy5zbGlkZU1hcmdpbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXdFbFdpZHRoO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2Ygc2xpZGVzIGN1cnJlbnRseSB2aXNpYmxlIGluIHRoZSB2aWV3cG9ydCAoaW5jbHVkZXMgcGFydGlhbGx5IHZpc2libGUgc2xpZGVzKVxuICAgICAqL1xuICAgIHZhciBnZXROdW1iZXJTbGlkZXNTaG93aW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2xpZGVzU2hvd2luZyA9IDEsXG4gICAgICBjaGlsZFdpZHRoID0gbnVsbDtcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ2hvcml6b250YWwnICYmIHNsaWRlci5zZXR0aW5ncy5zbGlkZVdpZHRoID4gMCkge1xuICAgICAgICAvLyBpZiB2aWV3cG9ydCBpcyBzbWFsbGVyIHRoYW4gbWluVGhyZXNob2xkLCByZXR1cm4gbWluU2xpZGVzXG4gICAgICAgIGlmIChzbGlkZXIudmlld3BvcnQud2lkdGgoKSA8IHNsaWRlci5taW5UaHJlc2hvbGQpIHtcbiAgICAgICAgICBzbGlkZXNTaG93aW5nID0gc2xpZGVyLnNldHRpbmdzLm1pblNsaWRlcztcbiAgICAgICAgLy8gaWYgdmlld3BvcnQgaXMgbGFyZ2VyIHRoYW4gbWF4VGhyZXNob2xkLCByZXR1cm4gbWF4U2xpZGVzXG4gICAgICAgIH0gZWxzZSBpZiAoc2xpZGVyLnZpZXdwb3J0LndpZHRoKCkgPiBzbGlkZXIubWF4VGhyZXNob2xkKSB7XG4gICAgICAgICAgc2xpZGVzU2hvd2luZyA9IHNsaWRlci5zZXR0aW5ncy5tYXhTbGlkZXM7XG4gICAgICAgIC8vIGlmIHZpZXdwb3J0IGlzIGJldHdlZW4gbWluIC8gbWF4IHRocmVzaG9sZHMsIGRpdmlkZSB2aWV3cG9ydCB3aWR0aCBieSBmaXJzdCBjaGlsZCB3aWR0aFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoaWxkV2lkdGggPSBzbGlkZXIuY2hpbGRyZW4uZmlyc3QoKS53aWR0aCgpICsgc2xpZGVyLnNldHRpbmdzLnNsaWRlTWFyZ2luO1xuICAgICAgICAgIHNsaWRlc1Nob3dpbmcgPSBNYXRoLmZsb29yKChzbGlkZXIudmlld3BvcnQud2lkdGgoKSArXG4gICAgICAgICAgICBzbGlkZXIuc2V0dGluZ3Muc2xpZGVNYXJnaW4pIC8gY2hpbGRXaWR0aCkgfHwgMTtcbiAgICAgICAgfVxuICAgICAgLy8gaWYgXCJ2ZXJ0aWNhbFwiIG1vZGUsIHNsaWRlcyBzaG93aW5nIHdpbGwgYWx3YXlzIGJlIG1pblNsaWRlc1xuICAgICAgfSBlbHNlIGlmIChzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICBzbGlkZXNTaG93aW5nID0gc2xpZGVyLnNldHRpbmdzLm1pblNsaWRlcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBzbGlkZXNTaG93aW5nO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgcGFnZXMgKG9uZSBmdWxsIHZpZXdwb3J0IG9mIHNsaWRlcyBpcyBvbmUgXCJwYWdlXCIpXG4gICAgICovXG4gICAgdmFyIGdldFBhZ2VyUXR5ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcGFnZXJRdHkgPSAwLFxuICAgICAgYnJlYWtQb2ludCA9IDAsXG4gICAgICBjb3VudGVyID0gMDtcbiAgICAgIC8vIGlmIG1vdmVTbGlkZXMgaXMgc3BlY2lmaWVkIGJ5IHRoZSB1c2VyXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLm1vdmVTbGlkZXMgPiAwKSB7XG4gICAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuaW5maW5pdGVMb29wKSB7XG4gICAgICAgICAgcGFnZXJRdHkgPSBNYXRoLmNlaWwoc2xpZGVyLmNoaWxkcmVuLmxlbmd0aCAvIGdldE1vdmVCeSgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB3aGVuIGJyZWFrcG9pbnQgZ29lcyBhYm92ZSBjaGlsZHJlbiBsZW5ndGgsIGNvdW50ZXIgaXMgdGhlIG51bWJlciBvZiBwYWdlc1xuICAgICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgc2xpZGVyLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgZ2V0TnVtYmVyU2xpZGVzU2hvd2luZygpO1xuICAgICAgICAgICAgY291bnRlciArPSBzbGlkZXIuc2V0dGluZ3MubW92ZVNsaWRlcyA8PSBnZXROdW1iZXJTbGlkZXNTaG93aW5nKCkgPyBzbGlkZXIuc2V0dGluZ3MubW92ZVNsaWRlcyA6IGdldE51bWJlclNsaWRlc1Nob3dpbmcoKTtcbiAgICAgICAgICB9XG5cdFx0ICByZXR1cm4gY291bnRlcjtcbiAgICAgICAgfVxuICAgICAgLy8gaWYgbW92ZVNsaWRlcyBpcyAwIChhdXRvKSBkaXZpZGUgY2hpbGRyZW4gbGVuZ3RoIGJ5IHNpZGVzIHNob3dpbmcsIHRoZW4gcm91bmQgdXBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhZ2VyUXR5ID0gTWF0aC5jZWlsKHNsaWRlci5jaGlsZHJlbi5sZW5ndGggLyBnZXROdW1iZXJTbGlkZXNTaG93aW5nKCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhZ2VyUXR5O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgaW5kaXZpZHVhbCBzbGlkZXMgYnkgd2hpY2ggdG8gc2hpZnQgdGhlIHNsaWRlclxuICAgICAqL1xuICAgIHZhciBnZXRNb3ZlQnkgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGlmIG1vdmVTbGlkZXMgd2FzIHNldCBieSB0aGUgdXNlciBhbmQgbW92ZVNsaWRlcyBpcyBsZXNzIHRoYW4gbnVtYmVyIG9mIHNsaWRlcyBzaG93aW5nXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLm1vdmVTbGlkZXMgPiAwICYmIHNsaWRlci5zZXR0aW5ncy5tb3ZlU2xpZGVzIDw9IGdldE51bWJlclNsaWRlc1Nob3dpbmcoKSkge1xuICAgICAgICByZXR1cm4gc2xpZGVyLnNldHRpbmdzLm1vdmVTbGlkZXM7XG4gICAgICB9XG4gICAgICAvLyBpZiBtb3ZlU2xpZGVzIGlzIDAgKGF1dG8pXG4gICAgICByZXR1cm4gZ2V0TnVtYmVyU2xpZGVzU2hvd2luZygpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBzbGlkZXIncyAoZWwpIGxlZnQgb3IgdG9wIHBvc2l0aW9uXG4gICAgICovXG4gICAgdmFyIHNldFNsaWRlUG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwb3NpdGlvbiwgbGFzdENoaWxkLCBsYXN0U2hvd2luZ0luZGV4O1xuICAgICAgLy8gaWYgbGFzdCBzbGlkZSwgbm90IGluZmluaXRlIGxvb3AsIGFuZCBudW1iZXIgb2YgY2hpbGRyZW4gaXMgbGFyZ2VyIHRoYW4gc3BlY2lmaWVkIG1heFNsaWRlc1xuICAgICAgaWYgKHNsaWRlci5jaGlsZHJlbi5sZW5ndGggPiBzbGlkZXIuc2V0dGluZ3MubWF4U2xpZGVzICYmIHNsaWRlci5hY3RpdmUubGFzdCAmJiAhc2xpZGVyLnNldHRpbmdzLmluZmluaXRlTG9vcCkge1xuICAgICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIC8vIGdldCB0aGUgbGFzdCBjaGlsZCdzIHBvc2l0aW9uXG4gICAgICAgICAgbGFzdENoaWxkID0gc2xpZGVyLmNoaWxkcmVuLmxhc3QoKTtcbiAgICAgICAgICBwb3NpdGlvbiA9IGxhc3RDaGlsZC5wb3NpdGlvbigpO1xuICAgICAgICAgIC8vIHNldCB0aGUgbGVmdCBwb3NpdGlvblxuICAgICAgICAgIHNldFBvc2l0aW9uUHJvcGVydHkoLShwb3NpdGlvbi5sZWZ0IC0gKHNsaWRlci52aWV3cG9ydC53aWR0aCgpIC0gbGFzdENoaWxkLm91dGVyV2lkdGgoKSkpLCAncmVzZXQnLCAwKTtcbiAgICAgICAgfSBlbHNlIGlmIChzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgIC8vIGdldCB0aGUgbGFzdCBzaG93aW5nIGluZGV4J3MgcG9zaXRpb25cbiAgICAgICAgICBsYXN0U2hvd2luZ0luZGV4ID0gc2xpZGVyLmNoaWxkcmVuLmxlbmd0aCAtIHNsaWRlci5zZXR0aW5ncy5taW5TbGlkZXM7XG4gICAgICAgICAgcG9zaXRpb24gPSBzbGlkZXIuY2hpbGRyZW4uZXEobGFzdFNob3dpbmdJbmRleCkucG9zaXRpb24oKTtcbiAgICAgICAgICAvLyBzZXQgdGhlIHRvcCBwb3NpdGlvblxuICAgICAgICAgIHNldFBvc2l0aW9uUHJvcGVydHkoLXBvc2l0aW9uLnRvcCwgJ3Jlc2V0JywgMCk7XG4gICAgICAgIH1cbiAgICAgIC8vIGlmIG5vdCBsYXN0IHNsaWRlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBnZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCBzaG93aW5nIHNsaWRlXG4gICAgICAgIHBvc2l0aW9uID0gc2xpZGVyLmNoaWxkcmVuLmVxKHNsaWRlci5hY3RpdmUuaW5kZXggKiBnZXRNb3ZlQnkoKSkucG9zaXRpb24oKTtcbiAgICAgICAgLy8gY2hlY2sgZm9yIGxhc3Qgc2xpZGVcbiAgICAgICAgaWYgKHNsaWRlci5hY3RpdmUuaW5kZXggPT09IGdldFBhZ2VyUXR5KCkgLSAxKSB7IHNsaWRlci5hY3RpdmUubGFzdCA9IHRydWU7IH1cbiAgICAgICAgLy8gc2V0IHRoZSByZXNwZWN0aXZlIHBvc2l0aW9uXG4gICAgICAgIGlmIChwb3NpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAnaG9yaXpvbnRhbCcpIHsgc2V0UG9zaXRpb25Qcm9wZXJ0eSgtcG9zaXRpb24ubGVmdCwgJ3Jlc2V0JywgMCk7IH1cbiAgICAgICAgICBlbHNlIGlmIChzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ3ZlcnRpY2FsJykgeyBzZXRQb3NpdGlvblByb3BlcnR5KC1wb3NpdGlvbi50b3AsICdyZXNldCcsIDApOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZWwncyBhbmltYXRpbmcgcHJvcGVydHkgcG9zaXRpb24gKHdoaWNoIGluIHR1cm4gd2lsbCBzb21ldGltZXMgYW5pbWF0ZSBlbCkuXG4gICAgICogSWYgdXNpbmcgQ1NTLCBzZXRzIHRoZSB0cmFuc2Zvcm0gcHJvcGVydHkuIElmIG5vdCB1c2luZyBDU1MsIHNldHMgdGhlIHRvcCAvIGxlZnQgcHJvcGVydHkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUgKGludClcbiAgICAgKiAgLSB0aGUgYW5pbWF0aW5nIHByb3BlcnR5J3MgdmFsdWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0eXBlIChzdHJpbmcpICdzbGlkZScsICdyZXNldCcsICd0aWNrZXInXG4gICAgICogIC0gdGhlIHR5cGUgb2YgaW5zdGFuY2UgZm9yIHdoaWNoIHRoZSBmdW5jdGlvbiBpcyBiZWluZ1xuICAgICAqXG4gICAgICogQHBhcmFtIGR1cmF0aW9uIChpbnQpXG4gICAgICogIC0gdGhlIGFtb3VudCBvZiB0aW1lIChpbiBtcykgdGhlIHRyYW5zaXRpb24gc2hvdWxkIG9jY3VweVxuICAgICAqXG4gICAgICogQHBhcmFtIHBhcmFtcyAoYXJyYXkpIG9wdGlvbmFsXG4gICAgICogIC0gYW4gb3B0aW9uYWwgcGFyYW1ldGVyIGNvbnRhaW5pbmcgYW55IHZhcmlhYmxlcyB0aGF0IG5lZWQgdG8gYmUgcGFzc2VkIGluXG4gICAgICovXG4gICAgdmFyIHNldFBvc2l0aW9uUHJvcGVydHkgPSBmdW5jdGlvbih2YWx1ZSwgdHlwZSwgZHVyYXRpb24sIHBhcmFtcykge1xuICAgICAgdmFyIGFuaW1hdGVPYmosIHByb3BWYWx1ZTtcbiAgICAgIC8vIHVzZSBDU1MgdHJhbnNmb3JtXG4gICAgICBpZiAoc2xpZGVyLnVzaW5nQ1NTKSB7XG4gICAgICAgIC8vIGRldGVybWluZSB0aGUgdHJhbnNsYXRlM2QgdmFsdWVcbiAgICAgICAgcHJvcFZhbHVlID0gc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICd2ZXJ0aWNhbCcgPyAndHJhbnNsYXRlM2QoMCwgJyArIHZhbHVlICsgJ3B4LCAwKScgOiAndHJhbnNsYXRlM2QoJyArIHZhbHVlICsgJ3B4LCAwLCAwKSc7XG4gICAgICAgIC8vIGFkZCB0aGUgQ1NTIHRyYW5zaXRpb24tZHVyYXRpb25cbiAgICAgICAgZWwuY3NzKCctJyArIHNsaWRlci5jc3NQcmVmaXggKyAnLXRyYW5zaXRpb24tZHVyYXRpb24nLCBkdXJhdGlvbiAvIDEwMDAgKyAncycpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3NsaWRlJykge1xuICAgICAgICAgIC8vIHNldCB0aGUgcHJvcGVydHkgdmFsdWVcbiAgICAgICAgICBlbC5jc3Moc2xpZGVyLmFuaW1Qcm9wLCBwcm9wVmFsdWUpO1xuICAgICAgICAgIGlmIChkdXJhdGlvbiAhPT0gMCkge1xuICAgICAgICAgICAgLy8gYmluZCBhIGNhbGxiYWNrIG1ldGhvZCAtIGV4ZWN1dGVzIHdoZW4gQ1NTIHRyYW5zaXRpb24gY29tcGxldGVzXG4gICAgICAgICAgICBlbC5iaW5kKCd0cmFuc2l0aW9uZW5kIHdlYmtpdFRyYW5zaXRpb25FbmQgb1RyYW5zaXRpb25FbmQgTVNUcmFuc2l0aW9uRW5kJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAvL21ha2Ugc3VyZSBpdCdzIHRoZSBjb3JyZWN0IG9uZVxuICAgICAgICAgICAgICBpZiAoISQoZS50YXJnZXQpLmlzKGVsKSkgeyByZXR1cm47IH1cbiAgICAgICAgICAgICAgLy8gdW5iaW5kIHRoZSBjYWxsYmFja1xuICAgICAgICAgICAgICBlbC51bmJpbmQoJ3RyYW5zaXRpb25lbmQgd2Via2l0VHJhbnNpdGlvbkVuZCBvVHJhbnNpdGlvbkVuZCBNU1RyYW5zaXRpb25FbmQnKTtcbiAgICAgICAgICAgICAgdXBkYXRlQWZ0ZXJTbGlkZVRyYW5zaXRpb24oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7IC8vZHVyYXRpb24gPSAwXG4gICAgICAgICAgICB1cGRhdGVBZnRlclNsaWRlVHJhbnNpdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAncmVzZXQnKSB7XG4gICAgICAgICAgZWwuY3NzKHNsaWRlci5hbmltUHJvcCwgcHJvcFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAndGlja2VyJykge1xuICAgICAgICAgIC8vIG1ha2UgdGhlIHRyYW5zaXRpb24gdXNlICdsaW5lYXInXG4gICAgICAgICAgZWwuY3NzKCctJyArIHNsaWRlci5jc3NQcmVmaXggKyAnLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJywgJ2xpbmVhcicpO1xuICAgICAgICAgIGVsLmNzcyhzbGlkZXIuYW5pbVByb3AsIHByb3BWYWx1ZSk7XG4gICAgICAgICAgaWYgKGR1cmF0aW9uICE9PSAwKSB7XG4gICAgICAgICAgICBlbC5iaW5kKCd0cmFuc2l0aW9uZW5kIHdlYmtpdFRyYW5zaXRpb25FbmQgb1RyYW5zaXRpb25FbmQgTVNUcmFuc2l0aW9uRW5kJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAvL21ha2Ugc3VyZSBpdCdzIHRoZSBjb3JyZWN0IG9uZVxuICAgICAgICAgICAgICBpZiAoISQoZS50YXJnZXQpLmlzKGVsKSkgeyByZXR1cm47IH1cbiAgICAgICAgICAgICAgLy8gdW5iaW5kIHRoZSBjYWxsYmFja1xuICAgICAgICAgICAgICBlbC51bmJpbmQoJ3RyYW5zaXRpb25lbmQgd2Via2l0VHJhbnNpdGlvbkVuZCBvVHJhbnNpdGlvbkVuZCBNU1RyYW5zaXRpb25FbmQnKTtcbiAgICAgICAgICAgICAgLy8gcmVzZXQgdGhlIHBvc2l0aW9uXG4gICAgICAgICAgICAgIHNldFBvc2l0aW9uUHJvcGVydHkocGFyYW1zLnJlc2V0VmFsdWUsICdyZXNldCcsIDApO1xuICAgICAgICAgICAgICAvLyBzdGFydCB0aGUgbG9vcCBhZ2FpblxuICAgICAgICAgICAgICB0aWNrZXJMb29wKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgeyAvL2R1cmF0aW9uID0gMFxuICAgICAgICAgICAgc2V0UG9zaXRpb25Qcm9wZXJ0eShwYXJhbXMucmVzZXRWYWx1ZSwgJ3Jlc2V0JywgMCk7XG4gICAgICAgICAgICB0aWNrZXJMb29wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAvLyB1c2UgSlMgYW5pbWF0ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW5pbWF0ZU9iaiA9IHt9O1xuICAgICAgICBhbmltYXRlT2JqW3NsaWRlci5hbmltUHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzbGlkZScpIHtcbiAgICAgICAgICBlbC5hbmltYXRlKGFuaW1hdGVPYmosIGR1cmF0aW9uLCBzbGlkZXIuc2V0dGluZ3MuZWFzaW5nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHVwZGF0ZUFmdGVyU2xpZGVUcmFuc2l0aW9uKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3Jlc2V0Jykge1xuICAgICAgICAgIGVsLmNzcyhzbGlkZXIuYW5pbVByb3AsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAndGlja2VyJykge1xuICAgICAgICAgIGVsLmFuaW1hdGUoYW5pbWF0ZU9iaiwgZHVyYXRpb24sICdsaW5lYXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNldFBvc2l0aW9uUHJvcGVydHkocGFyYW1zLnJlc2V0VmFsdWUsICdyZXNldCcsIDApO1xuICAgICAgICAgICAgLy8gcnVuIHRoZSByZWN1cnNpdmUgbG9vcCBhZnRlciBhbmltYXRpb25cbiAgICAgICAgICAgIHRpY2tlckxvb3AoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQb3B1bGF0ZXMgdGhlIHBhZ2VyIHdpdGggcHJvcGVyIGFtb3VudCBvZiBwYWdlc1xuICAgICAqL1xuICAgIHZhciBwb3B1bGF0ZVBhZ2VyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcGFnZXJIdG1sID0gJycsXG4gICAgICBsaW5rQ29udGVudCA9ICcnLFxuICAgICAgcGFnZXJRdHkgPSBnZXRQYWdlclF0eSgpO1xuICAgICAgLy8gbG9vcCB0aHJvdWdoIGVhY2ggcGFnZXIgaXRlbVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWdlclF0eTsgaSsrKSB7XG4gICAgICAgIGxpbmtDb250ZW50ID0gJyc7XG4gICAgICAgIC8vIGlmIGEgYnVpbGRQYWdlciBmdW5jdGlvbiBpcyBzdXBwbGllZCwgdXNlIGl0IHRvIGdldCBwYWdlciBsaW5rIHZhbHVlLCBlbHNlIHVzZSBpbmRleCArIDFcbiAgICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5idWlsZFBhZ2VyICYmICQuaXNGdW5jdGlvbihzbGlkZXIuc2V0dGluZ3MuYnVpbGRQYWdlcikgfHwgc2xpZGVyLnNldHRpbmdzLnBhZ2VyQ3VzdG9tKSB7XG4gICAgICAgICAgbGlua0NvbnRlbnQgPSBzbGlkZXIuc2V0dGluZ3MuYnVpbGRQYWdlcihpKTtcbiAgICAgICAgICBzbGlkZXIucGFnZXJFbC5hZGRDbGFzcygnYngtY3VzdG9tLXBhZ2VyJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGlua0NvbnRlbnQgPSBpICsgMTtcbiAgICAgICAgICBzbGlkZXIucGFnZXJFbC5hZGRDbGFzcygnYngtZGVmYXVsdC1wYWdlcicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHZhciBsaW5rQ29udGVudCA9IHNsaWRlci5zZXR0aW5ncy5idWlsZFBhZ2VyICYmICQuaXNGdW5jdGlvbihzbGlkZXIuc2V0dGluZ3MuYnVpbGRQYWdlcikgPyBzbGlkZXIuc2V0dGluZ3MuYnVpbGRQYWdlcihpKSA6IGkgKyAxO1xuICAgICAgICAvLyBhZGQgdGhlIG1hcmt1cCB0byB0aGUgc3RyaW5nXG4gICAgICAgIHBhZ2VySHRtbCArPSAnPGRpdiBjbGFzcz1cImJ4LXBhZ2VyLWl0ZW1cIj48YSBocmVmPVwiXCIgZGF0YS1zbGlkZS1pbmRleD1cIicgKyBpICsgJ1wiIGNsYXNzPVwiYngtcGFnZXItbGlua1wiPicgKyBsaW5rQ29udGVudCArICc8L2E+PC9kaXY+JztcbiAgICAgIH1cbiAgICAgIC8vIHBvcHVsYXRlIHRoZSBwYWdlciBlbGVtZW50IHdpdGggcGFnZXIgbGlua3NcbiAgICAgIHNsaWRlci5wYWdlckVsLmh0bWwocGFnZXJIdG1sKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXBwZW5kcyB0aGUgcGFnZXIgdG8gdGhlIGNvbnRyb2xzIGVsZW1lbnRcbiAgICAgKi9cbiAgICB2YXIgYXBwZW5kUGFnZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghc2xpZGVyLnNldHRpbmdzLnBhZ2VyQ3VzdG9tKSB7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgcGFnZXIgRE9NIGVsZW1lbnRcbiAgICAgICAgc2xpZGVyLnBhZ2VyRWwgPSAkKCc8ZGl2IGNsYXNzPVwiYngtcGFnZXJcIiAvPicpO1xuICAgICAgICAvLyBpZiBhIHBhZ2VyIHNlbGVjdG9yIHdhcyBzdXBwbGllZCwgcG9wdWxhdGUgaXQgd2l0aCB0aGUgcGFnZXJcbiAgICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5wYWdlclNlbGVjdG9yKSB7XG4gICAgICAgICAgJChzbGlkZXIuc2V0dGluZ3MucGFnZXJTZWxlY3RvcikuaHRtbChzbGlkZXIucGFnZXJFbCk7XG4gICAgICAgIC8vIGlmIG5vIHBhZ2VyIHNlbGVjdG9yIHdhcyBzdXBwbGllZCwgYWRkIGl0IGFmdGVyIHRoZSB3cmFwcGVyXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2xpZGVyLmNvbnRyb2xzLmVsLmFkZENsYXNzKCdieC1oYXMtcGFnZXInKS5hcHBlbmQoc2xpZGVyLnBhZ2VyRWwpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHBvcHVsYXRlIHRoZSBwYWdlclxuICAgICAgICBwb3B1bGF0ZVBhZ2VyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbGlkZXIucGFnZXJFbCA9ICQoc2xpZGVyLnNldHRpbmdzLnBhZ2VyQ3VzdG9tKTtcbiAgICAgIH1cbiAgICAgIC8vIGFzc2lnbiB0aGUgcGFnZXIgY2xpY2sgYmluZGluZ1xuICAgICAgc2xpZGVyLnBhZ2VyRWwub24oJ2NsaWNrIHRvdWNoZW5kJywgJ2EnLCBjbGlja1BhZ2VyQmluZCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgcHJldiAvIG5leHQgY29udHJvbHMgdG8gdGhlIGNvbnRyb2xzIGVsZW1lbnRcbiAgICAgKi9cbiAgICB2YXIgYXBwZW5kQ29udHJvbHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNsaWRlci5jb250cm9scy5uZXh0ID0gJCgnPGEgY2xhc3M9XCJieC1uZXh0XCIgaHJlZj1cIlwiPicgKyBzbGlkZXIuc2V0dGluZ3MubmV4dFRleHQgKyAnPC9hPicpO1xuICAgICAgc2xpZGVyLmNvbnRyb2xzLnByZXYgPSAkKCc8YSBjbGFzcz1cImJ4LXByZXZcIiBocmVmPVwiXCI+JyArIHNsaWRlci5zZXR0aW5ncy5wcmV2VGV4dCArICc8L2E+Jyk7XG4gICAgICAvLyBiaW5kIGNsaWNrIGFjdGlvbnMgdG8gdGhlIGNvbnRyb2xzXG4gICAgICBzbGlkZXIuY29udHJvbHMubmV4dC5iaW5kKCdjbGljayB0b3VjaGVuZCcsIGNsaWNrTmV4dEJpbmQpO1xuICAgICAgc2xpZGVyLmNvbnRyb2xzLnByZXYuYmluZCgnY2xpY2sgdG91Y2hlbmQnLCBjbGlja1ByZXZCaW5kKTtcbiAgICAgIC8vIGlmIG5leHRTZWxlY3RvciB3YXMgc3VwcGxpZWQsIHBvcHVsYXRlIGl0XG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLm5leHRTZWxlY3Rvcikge1xuICAgICAgICAkKHNsaWRlci5zZXR0aW5ncy5uZXh0U2VsZWN0b3IpLmFwcGVuZChzbGlkZXIuY29udHJvbHMubmV4dCk7XG4gICAgICB9XG4gICAgICAvLyBpZiBwcmV2U2VsZWN0b3Igd2FzIHN1cHBsaWVkLCBwb3B1bGF0ZSBpdFxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5wcmV2U2VsZWN0b3IpIHtcbiAgICAgICAgJChzbGlkZXIuc2V0dGluZ3MucHJldlNlbGVjdG9yKS5hcHBlbmQoc2xpZGVyLmNvbnRyb2xzLnByZXYpO1xuICAgICAgfVxuICAgICAgLy8gaWYgbm8gY3VzdG9tIHNlbGVjdG9ycyB3ZXJlIHN1cHBsaWVkXG4gICAgICBpZiAoIXNsaWRlci5zZXR0aW5ncy5uZXh0U2VsZWN0b3IgJiYgIXNsaWRlci5zZXR0aW5ncy5wcmV2U2VsZWN0b3IpIHtcbiAgICAgICAgLy8gYWRkIHRoZSBjb250cm9scyB0byB0aGUgRE9NXG4gICAgICAgIHNsaWRlci5jb250cm9scy5kaXJlY3Rpb25FbCA9ICQoJzxkaXYgY2xhc3M9XCJieC1jb250cm9scy1kaXJlY3Rpb25cIiAvPicpO1xuICAgICAgICAvLyBhZGQgdGhlIGNvbnRyb2wgZWxlbWVudHMgdG8gdGhlIGRpcmVjdGlvbkVsXG4gICAgICAgIHNsaWRlci5jb250cm9scy5kaXJlY3Rpb25FbC5hcHBlbmQoc2xpZGVyLmNvbnRyb2xzLnByZXYpLmFwcGVuZChzbGlkZXIuY29udHJvbHMubmV4dCk7XG4gICAgICAgIC8vIHNsaWRlci52aWV3cG9ydC5hcHBlbmQoc2xpZGVyLmNvbnRyb2xzLmRpcmVjdGlvbkVsKTtcbiAgICAgICAgc2xpZGVyLmNvbnRyb2xzLmVsLmFkZENsYXNzKCdieC1oYXMtY29udHJvbHMtZGlyZWN0aW9uJykuYXBwZW5kKHNsaWRlci5jb250cm9scy5kaXJlY3Rpb25FbCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgc3RhcnQgLyBzdG9wIGF1dG8gY29udHJvbHMgdG8gdGhlIGNvbnRyb2xzIGVsZW1lbnRcbiAgICAgKi9cbiAgICB2YXIgYXBwZW5kQ29udHJvbHNBdXRvID0gZnVuY3Rpb24oKSB7XG4gICAgICBzbGlkZXIuY29udHJvbHMuc3RhcnQgPSAkKCc8ZGl2IGNsYXNzPVwiYngtY29udHJvbHMtYXV0by1pdGVtXCI+PGEgY2xhc3M9XCJieC1zdGFydFwiIGhyZWY9XCJcIj4nICsgc2xpZGVyLnNldHRpbmdzLnN0YXJ0VGV4dCArICc8L2E+PC9kaXY+Jyk7XG4gICAgICBzbGlkZXIuY29udHJvbHMuc3RvcCA9ICQoJzxkaXYgY2xhc3M9XCJieC1jb250cm9scy1hdXRvLWl0ZW1cIj48YSBjbGFzcz1cImJ4LXN0b3BcIiBocmVmPVwiXCI+JyArIHNsaWRlci5zZXR0aW5ncy5zdG9wVGV4dCArICc8L2E+PC9kaXY+Jyk7XG4gICAgICAvLyBhZGQgdGhlIGNvbnRyb2xzIHRvIHRoZSBET01cbiAgICAgIHNsaWRlci5jb250cm9scy5hdXRvRWwgPSAkKCc8ZGl2IGNsYXNzPVwiYngtY29udHJvbHMtYXV0b1wiIC8+Jyk7XG4gICAgICAvLyBiaW5kIGNsaWNrIGFjdGlvbnMgdG8gdGhlIGNvbnRyb2xzXG4gICAgICBzbGlkZXIuY29udHJvbHMuYXV0b0VsLm9uKCdjbGljaycsICcuYngtc3RhcnQnLCBjbGlja1N0YXJ0QmluZCk7XG4gICAgICBzbGlkZXIuY29udHJvbHMuYXV0b0VsLm9uKCdjbGljaycsICcuYngtc3RvcCcsIGNsaWNrU3RvcEJpbmQpO1xuICAgICAgLy8gaWYgYXV0b0NvbnRyb2xzQ29tYmluZSwgaW5zZXJ0IG9ubHkgdGhlIFwic3RhcnRcIiBjb250cm9sXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmF1dG9Db250cm9sc0NvbWJpbmUpIHtcbiAgICAgICAgc2xpZGVyLmNvbnRyb2xzLmF1dG9FbC5hcHBlbmQoc2xpZGVyLmNvbnRyb2xzLnN0YXJ0KTtcbiAgICAgIC8vIGlmIGF1dG9Db250cm9sc0NvbWJpbmUgaXMgZmFsc2UsIGluc2VydCBib3RoIGNvbnRyb2xzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbGlkZXIuY29udHJvbHMuYXV0b0VsLmFwcGVuZChzbGlkZXIuY29udHJvbHMuc3RhcnQpLmFwcGVuZChzbGlkZXIuY29udHJvbHMuc3RvcCk7XG4gICAgICB9XG4gICAgICAvLyBpZiBhdXRvIGNvbnRyb2xzIHNlbGVjdG9yIHdhcyBzdXBwbGllZCwgcG9wdWxhdGUgaXQgd2l0aCB0aGUgY29udHJvbHNcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuYXV0b0NvbnRyb2xzU2VsZWN0b3IpIHtcbiAgICAgICAgJChzbGlkZXIuc2V0dGluZ3MuYXV0b0NvbnRyb2xzU2VsZWN0b3IpLmh0bWwoc2xpZGVyLmNvbnRyb2xzLmF1dG9FbCk7XG4gICAgICAvLyBpZiBhdXRvIGNvbnRyb2xzIHNlbGVjdG9yIHdhcyBub3Qgc3VwcGxpZWQsIGFkZCBpdCBhZnRlciB0aGUgd3JhcHBlclxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2xpZGVyLmNvbnRyb2xzLmVsLmFkZENsYXNzKCdieC1oYXMtY29udHJvbHMtYXV0bycpLmFwcGVuZChzbGlkZXIuY29udHJvbHMuYXV0b0VsKTtcbiAgICAgIH1cbiAgICAgIC8vIHVwZGF0ZSB0aGUgYXV0byBjb250cm9sc1xuICAgICAgdXBkYXRlQXV0b0NvbnRyb2xzKHNsaWRlci5zZXR0aW5ncy5hdXRvU3RhcnQgPyAnc3RvcCcgOiAnc3RhcnQnKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXBwZW5kcyBpbWFnZSBjYXB0aW9ucyB0byB0aGUgRE9NXG4gICAgICovXG4gICAgdmFyIGFwcGVuZENhcHRpb25zID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBjeWNsZSB0aHJvdWdoIGVhY2ggY2hpbGRcbiAgICAgIHNsaWRlci5jaGlsZHJlbi5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgIC8vIGdldCB0aGUgaW1hZ2UgdGl0bGUgYXR0cmlidXRlXG4gICAgICAgIHZhciB0aXRsZSA9ICQodGhpcykuZmluZCgnaW1nOmZpcnN0JykuYXR0cigndGl0bGUnKTtcbiAgICAgICAgLy8gYXBwZW5kIHRoZSBjYXB0aW9uXG4gICAgICAgIGlmICh0aXRsZSAhPT0gdW5kZWZpbmVkICYmICgnJyArIHRpdGxlKS5sZW5ndGgpIHtcbiAgICAgICAgICAkKHRoaXMpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImJ4LWNhcHRpb25cIj48c3Bhbj4nICsgdGl0bGUgKyAnPC9zcGFuPjwvZGl2PicpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xpY2sgbmV4dCBiaW5kaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZSAoZXZlbnQpXG4gICAgICogIC0gRE9NIGV2ZW50IG9iamVjdFxuICAgICAqL1xuICAgIHZhciBjbGlja05leHRCaW5kID0gZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHNsaWRlci5jb250cm9scy5lbC5oYXNDbGFzcygnZGlzYWJsZWQnKSkgeyByZXR1cm47IH1cbiAgICAgIC8vIGlmIGF1dG8gc2hvdyBpcyBydW5uaW5nLCBzdG9wIGl0XG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmF1dG8gJiYgc2xpZGVyLnNldHRpbmdzLnN0b3BBdXRvT25DbGljaykgeyBlbC5zdG9wQXV0bygpOyB9XG4gICAgICBlbC5nb1RvTmV4dFNsaWRlKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsaWNrIHByZXYgYmluZGluZ1xuICAgICAqXG4gICAgICogQHBhcmFtIGUgKGV2ZW50KVxuICAgICAqICAtIERPTSBldmVudCBvYmplY3RcbiAgICAgKi9cbiAgICB2YXIgY2xpY2tQcmV2QmluZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChzbGlkZXIuY29udHJvbHMuZWwuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHsgcmV0dXJuOyB9XG4gICAgICAvLyBpZiBhdXRvIHNob3cgaXMgcnVubmluZywgc3RvcCBpdFxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5hdXRvICYmIHNsaWRlci5zZXR0aW5ncy5zdG9wQXV0b09uQ2xpY2spIHsgZWwuc3RvcEF1dG8oKTsgfVxuICAgICAgZWwuZ29Ub1ByZXZTbGlkZSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGljayBzdGFydCBiaW5kaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZSAoZXZlbnQpXG4gICAgICogIC0gRE9NIGV2ZW50IG9iamVjdFxuICAgICAqL1xuICAgIHZhciBjbGlja1N0YXJ0QmluZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGVsLnN0YXJ0QXV0bygpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGljayBzdG9wIGJpbmRpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlIChldmVudClcbiAgICAgKiAgLSBET00gZXZlbnQgb2JqZWN0XG4gICAgICovXG4gICAgdmFyIGNsaWNrU3RvcEJpbmQgPSBmdW5jdGlvbihlKSB7XG4gICAgICBlbC5zdG9wQXV0bygpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGljayBwYWdlciBiaW5kaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZSAoZXZlbnQpXG4gICAgICogIC0gRE9NIGV2ZW50IG9iamVjdFxuICAgICAqL1xuICAgIHZhciBjbGlja1BhZ2VyQmluZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciBwYWdlckxpbmssIHBhZ2VySW5kZXg7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoc2xpZGVyLmNvbnRyb2xzLmVsLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIGlmIGF1dG8gc2hvdyBpcyBydW5uaW5nLCBzdG9wIGl0XG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmF1dG8gICYmIHNsaWRlci5zZXR0aW5ncy5zdG9wQXV0b09uQ2xpY2spIHsgZWwuc3RvcEF1dG8oKTsgfVxuICAgICAgcGFnZXJMaW5rID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgaWYgKHBhZ2VyTGluay5hdHRyKCdkYXRhLXNsaWRlLWluZGV4JykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYWdlckluZGV4ID0gcGFyc2VJbnQocGFnZXJMaW5rLmF0dHIoJ2RhdGEtc2xpZGUtaW5kZXgnKSk7XG4gICAgICAgIC8vIGlmIGNsaWNrZWQgcGFnZXIgbGluayBpcyBub3QgYWN0aXZlLCBjb250aW51ZSB3aXRoIHRoZSBnb1RvU2xpZGUgY2FsbFxuICAgICAgICBpZiAocGFnZXJJbmRleCAhPT0gc2xpZGVyLmFjdGl2ZS5pbmRleCkgeyBlbC5nb1RvU2xpZGUocGFnZXJJbmRleCk7IH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgcGFnZXIgbGlua3Mgd2l0aCBhbiBhY3RpdmUgY2xhc3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzbGlkZUluZGV4IChpbnQpXG4gICAgICogIC0gaW5kZXggb2Ygc2xpZGUgdG8gbWFrZSBhY3RpdmVcbiAgICAgKi9cbiAgICB2YXIgdXBkYXRlUGFnZXJBY3RpdmUgPSBmdW5jdGlvbihzbGlkZUluZGV4KSB7XG4gICAgICAvLyBpZiBcInNob3J0XCIgcGFnZXIgdHlwZVxuICAgICAgdmFyIGxlbiA9IHNsaWRlci5jaGlsZHJlbi5sZW5ndGg7IC8vIG5iIG9mIGNoaWxkcmVuXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLnBhZ2VyVHlwZSA9PT0gJ3Nob3J0Jykge1xuICAgICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLm1heFNsaWRlcyA+IDEpIHtcbiAgICAgICAgICBsZW4gPSBNYXRoLmNlaWwoc2xpZGVyLmNoaWxkcmVuLmxlbmd0aCAvIHNsaWRlci5zZXR0aW5ncy5tYXhTbGlkZXMpO1xuICAgICAgICB9XG4gICAgICAgIHNsaWRlci5wYWdlckVsLmh0bWwoKHNsaWRlSW5kZXggKyAxKSArIHNsaWRlci5zZXR0aW5ncy5wYWdlclNob3J0U2VwYXJhdG9yICsgbGVuKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gcmVtb3ZlIGFsbCBwYWdlciBhY3RpdmUgY2xhc3Nlc1xuICAgICAgc2xpZGVyLnBhZ2VyRWwuZmluZCgnYScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgIC8vIGFwcGx5IHRoZSBhY3RpdmUgY2xhc3MgZm9yIGFsbCBwYWdlcnNcbiAgICAgIHNsaWRlci5wYWdlckVsLmVhY2goZnVuY3Rpb24oaSwgZWwpIHsgJChlbCkuZmluZCgnYScpLmVxKHNsaWRlSW5kZXgpLmFkZENsYXNzKCdhY3RpdmUnKTsgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIG5lZWRlZCBhY3Rpb25zIGFmdGVyIGEgc2xpZGUgdHJhbnNpdGlvblxuICAgICAqL1xuICAgIHZhciB1cGRhdGVBZnRlclNsaWRlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gaWYgaW5maW5pdGUgbG9vcCBpcyB0cnVlXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmluZmluaXRlTG9vcCkge1xuICAgICAgICB2YXIgcG9zaXRpb24gPSAnJztcbiAgICAgICAgLy8gZmlyc3Qgc2xpZGVcbiAgICAgICAgaWYgKHNsaWRlci5hY3RpdmUuaW5kZXggPT09IDApIHtcbiAgICAgICAgICAvLyBzZXQgdGhlIG5ldyBwb3NpdGlvblxuICAgICAgICAgIHBvc2l0aW9uID0gc2xpZGVyLmNoaWxkcmVuLmVxKDApLnBvc2l0aW9uKCk7XG4gICAgICAgIC8vIGNhcm91c2VsLCBsYXN0IHNsaWRlXG4gICAgICAgIH0gZWxzZSBpZiAoc2xpZGVyLmFjdGl2ZS5pbmRleCA9PT0gZ2V0UGFnZXJRdHkoKSAtIDEgJiYgc2xpZGVyLmNhcm91c2VsKSB7XG4gICAgICAgICAgcG9zaXRpb24gPSBzbGlkZXIuY2hpbGRyZW4uZXEoKGdldFBhZ2VyUXR5KCkgLSAxKSAqIGdldE1vdmVCeSgpKS5wb3NpdGlvbigpO1xuICAgICAgICAvLyBsYXN0IHNsaWRlXG4gICAgICAgIH0gZWxzZSBpZiAoc2xpZGVyLmFjdGl2ZS5pbmRleCA9PT0gc2xpZGVyLmNoaWxkcmVuLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBwb3NpdGlvbiA9IHNsaWRlci5jaGlsZHJlbi5lcShzbGlkZXIuY2hpbGRyZW4ubGVuZ3RoIC0gMSkucG9zaXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICdob3Jpem9udGFsJykgeyBzZXRQb3NpdGlvblByb3BlcnR5KC1wb3NpdGlvbi5sZWZ0LCAncmVzZXQnLCAwKTsgfVxuICAgICAgICAgIGVsc2UgaWYgKHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAndmVydGljYWwnKSB7IHNldFBvc2l0aW9uUHJvcGVydHkoLXBvc2l0aW9uLnRvcCwgJ3Jlc2V0JywgMCk7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gZGVjbGFyZSB0aGF0IHRoZSB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlXG4gICAgICBzbGlkZXIud29ya2luZyA9IGZhbHNlO1xuICAgICAgLy8gb25TbGlkZUFmdGVyIGNhbGxiYWNrXG4gICAgICBzbGlkZXIuc2V0dGluZ3Mub25TbGlkZUFmdGVyLmNhbGwoZWwsIHNsaWRlci5jaGlsZHJlbi5lcShzbGlkZXIuYWN0aXZlLmluZGV4KSwgc2xpZGVyLm9sZEluZGV4LCBzbGlkZXIuYWN0aXZlLmluZGV4KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgYXV0byBjb250cm9scyBzdGF0ZSAoZWl0aGVyIGFjdGl2ZSwgb3IgY29tYmluZWQgc3dpdGNoKVxuICAgICAqXG4gICAgICogQHBhcmFtIHN0YXRlIChzdHJpbmcpIFwic3RhcnRcIiwgXCJzdG9wXCJcbiAgICAgKiAgLSB0aGUgbmV3IHN0YXRlIG9mIHRoZSBhdXRvIHNob3dcbiAgICAgKi9cbiAgICB2YXIgdXBkYXRlQXV0b0NvbnRyb2xzID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgIC8vIGlmIGF1dG9Db250cm9sc0NvbWJpbmUgaXMgdHJ1ZSwgcmVwbGFjZSB0aGUgY3VycmVudCBjb250cm9sIHdpdGggdGhlIG5ldyBzdGF0ZVxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5hdXRvQ29udHJvbHNDb21iaW5lKSB7XG4gICAgICAgIHNsaWRlci5jb250cm9scy5hdXRvRWwuaHRtbChzbGlkZXIuY29udHJvbHNbc3RhdGVdKTtcbiAgICAgIC8vIGlmIGF1dG9Db250cm9sc0NvbWJpbmUgaXMgZmFsc2UsIGFwcGx5IHRoZSBcImFjdGl2ZVwiIGNsYXNzIHRvIHRoZSBhcHByb3ByaWF0ZSBjb250cm9sXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbGlkZXIuY29udHJvbHMuYXV0b0VsLmZpbmQoJ2EnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIHNsaWRlci5jb250cm9scy5hdXRvRWwuZmluZCgnYTpub3QoLmJ4LScgKyBzdGF0ZSArICcpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBkaXJlY3Rpb24gY29udHJvbHMgKGNoZWNrcyBpZiBlaXRoZXIgc2hvdWxkIGJlIGhpZGRlbilcbiAgICAgKi9cbiAgICB2YXIgdXBkYXRlRGlyZWN0aW9uQ29udHJvbHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChnZXRQYWdlclF0eSgpID09PSAxKSB7XG4gICAgICAgIHNsaWRlci5jb250cm9scy5wcmV2LmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICBzbGlkZXIuY29udHJvbHMubmV4dC5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgIH0gZWxzZSBpZiAoIXNsaWRlci5zZXR0aW5ncy5pbmZpbml0ZUxvb3AgJiYgc2xpZGVyLnNldHRpbmdzLmhpZGVDb250cm9sT25FbmQpIHtcbiAgICAgICAgLy8gaWYgZmlyc3Qgc2xpZGVcbiAgICAgICAgaWYgKHNsaWRlci5hY3RpdmUuaW5kZXggPT09IDApIHtcbiAgICAgICAgICBzbGlkZXIuY29udHJvbHMucHJldi5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgICBzbGlkZXIuY29udHJvbHMubmV4dC5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgLy8gaWYgbGFzdCBzbGlkZVxuICAgICAgICB9IGVsc2UgaWYgKHNsaWRlci5hY3RpdmUuaW5kZXggPT09IGdldFBhZ2VyUXR5KCkgLSAxKSB7XG4gICAgICAgICAgc2xpZGVyLmNvbnRyb2xzLm5leHQuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgc2xpZGVyLmNvbnRyb2xzLnByZXYucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgIC8vIGlmIGFueSBzbGlkZSBpbiB0aGUgbWlkZGxlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2xpZGVyLmNvbnRyb2xzLnByZXYucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgc2xpZGVyLmNvbnRyb2xzLm5leHQucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXHQvKiBhdXRvIHN0YXJ0IGFuZCBzdG9wIGZ1bmN0aW9ucyAqL1xuXHR2YXIgd2luZG93Rm9jdXNIYW5kbGVyID0gZnVuY3Rpb24oKSB7IGVsLnN0YXJ0QXV0bygpOyB9O1xuXHR2YXIgd2luZG93Qmx1ckhhbmRsZXIgPSBmdW5jdGlvbigpIHsgZWwuc3RvcEF1dG8oKTsgfTtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgYXV0byBwcm9jZXNzXG4gICAgICovXG4gICAgdmFyIGluaXRBdXRvID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBpZiBhdXRvRGVsYXkgd2FzIHN1cHBsaWVkLCBsYXVuY2ggdGhlIGF1dG8gc2hvdyB1c2luZyBhIHNldFRpbWVvdXQoKSBjYWxsXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmF1dG9EZWxheSA+IDApIHtcbiAgICAgICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGVsLnN0YXJ0QXV0bywgc2xpZGVyLnNldHRpbmdzLmF1dG9EZWxheSk7XG4gICAgICAvLyBpZiBhdXRvRGVsYXkgd2FzIG5vdCBzdXBwbGllZCwgc3RhcnQgdGhlIGF1dG8gc2hvdyBub3JtYWxseVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwuc3RhcnRBdXRvKCk7XG5cbiAgICAgICAgLy9hZGQgZm9jdXMgYW5kIGJsdXIgZXZlbnRzIHRvIGVuc3VyZSBpdHMgcnVubmluZyBpZiB0aW1lb3V0IGdldHMgcGF1c2VkXG4gICAgICAgICQod2luZG93KS5mb2N1cyh3aW5kb3dGb2N1c0hhbmRsZXIpLmJsdXIod2luZG93Qmx1ckhhbmRsZXIpO1xuICAgICAgfVxuICAgICAgLy8gaWYgYXV0b0hvdmVyIGlzIHJlcXVlc3RlZFxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5hdXRvSG92ZXIpIHtcbiAgICAgICAgLy8gb24gZWwgaG92ZXJcbiAgICAgICAgZWwuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gaWYgdGhlIGF1dG8gc2hvdyBpcyBjdXJyZW50bHkgcGxheWluZyAoaGFzIGFuIGFjdGl2ZSBpbnRlcnZhbClcbiAgICAgICAgICBpZiAoc2xpZGVyLmludGVydmFsKSB7XG4gICAgICAgICAgICAvLyBzdG9wIHRoZSBhdXRvIHNob3cgYW5kIHBhc3MgdHJ1ZSBhcmd1bWVudCB3aGljaCB3aWxsIHByZXZlbnQgY29udHJvbCB1cGRhdGVcbiAgICAgICAgICAgIGVsLnN0b3BBdXRvKHRydWUpO1xuICAgICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IGF1dG9QYXVzZWQgdmFsdWUgd2hpY2ggd2lsbCBiZSB1c2VkIGJ5IHRoZSByZWxhdGl2ZSBcIm1vdXNlb3V0XCIgZXZlbnRcbiAgICAgICAgICAgIHNsaWRlci5hdXRvUGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIGlmIHRoZSBhdXRvUGF1c2VkIHZhbHVlIHdhcyBjcmVhdGVkIGJlIHRoZSBwcmlvciBcIm1vdXNlb3ZlclwiIGV2ZW50XG4gICAgICAgICAgaWYgKHNsaWRlci5hdXRvUGF1c2VkKSB7XG4gICAgICAgICAgICAvLyBzdGFydCB0aGUgYXV0byBzaG93IGFuZCBwYXNzIHRydWUgYXJndW1lbnQgd2hpY2ggd2lsbCBwcmV2ZW50IGNvbnRyb2wgdXBkYXRlXG4gICAgICAgICAgICBlbC5zdGFydEF1dG8odHJ1ZSk7XG4gICAgICAgICAgICAvLyByZXNldCB0aGUgYXV0b1BhdXNlZCB2YWx1ZVxuICAgICAgICAgICAgc2xpZGVyLmF1dG9QYXVzZWQgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHRoZSB0aWNrZXIgcHJvY2Vzc1xuICAgICAqL1xuICAgIHZhciBpbml0VGlja2VyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc3RhcnRQb3NpdGlvbiA9IDAsXG4gICAgICBwb3NpdGlvbiwgdHJhbnNmb3JtLCB2YWx1ZSwgaWR4LCByYXRpbywgcHJvcGVydHksIG5ld1NwZWVkLCB0b3RhbERpbWVucztcbiAgICAgIC8vIGlmIGF1dG9EaXJlY3Rpb24gaXMgXCJuZXh0XCIsIGFwcGVuZCBhIGNsb25lIG9mIHRoZSBlbnRpcmUgc2xpZGVyXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmF1dG9EaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgICBlbC5hcHBlbmQoc2xpZGVyLmNoaWxkcmVuLmNsb25lKCkuYWRkQ2xhc3MoJ2J4LWNsb25lJykpO1xuICAgICAgLy8gaWYgYXV0b0RpcmVjdGlvbiBpcyBcInByZXZcIiwgcHJlcGVuZCBhIGNsb25lIG9mIHRoZSBlbnRpcmUgc2xpZGVyLCBhbmQgc2V0IHRoZSBsZWZ0IHBvc2l0aW9uXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5wcmVwZW5kKHNsaWRlci5jaGlsZHJlbi5jbG9uZSgpLmFkZENsYXNzKCdieC1jbG9uZScpKTtcbiAgICAgICAgcG9zaXRpb24gPSBzbGlkZXIuY2hpbGRyZW4uZmlyc3QoKS5wb3NpdGlvbigpO1xuICAgICAgICBzdGFydFBvc2l0aW9uID0gc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICdob3Jpem9udGFsJyA/IC1wb3NpdGlvbi5sZWZ0IDogLXBvc2l0aW9uLnRvcDtcbiAgICAgIH1cbiAgICAgIHNldFBvc2l0aW9uUHJvcGVydHkoc3RhcnRQb3NpdGlvbiwgJ3Jlc2V0JywgMCk7XG4gICAgICAvLyBkbyBub3QgYWxsb3cgY29udHJvbHMgaW4gdGlja2VyIG1vZGVcbiAgICAgIHNsaWRlci5zZXR0aW5ncy5wYWdlciA9IGZhbHNlO1xuICAgICAgc2xpZGVyLnNldHRpbmdzLmNvbnRyb2xzID0gZmFsc2U7XG4gICAgICBzbGlkZXIuc2V0dGluZ3MuYXV0b0NvbnRyb2xzID0gZmFsc2U7XG4gICAgICAvLyBpZiBhdXRvSG92ZXIgaXMgcmVxdWVzdGVkXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLnRpY2tlckhvdmVyKSB7XG4gICAgICAgIGlmIChzbGlkZXIudXNpbmdDU1MpIHtcbiAgICAgICAgICBpZHggPSBzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ2hvcml6b250YWwnID8gNCA6IDU7XG4gICAgICAgICAgc2xpZGVyLnZpZXdwb3J0LmhvdmVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtID0gZWwuY3NzKCctJyArIHNsaWRlci5jc3NQcmVmaXggKyAnLXRyYW5zZm9ybScpO1xuICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUZsb2F0KHRyYW5zZm9ybS5zcGxpdCgnLCcpW2lkeF0pO1xuICAgICAgICAgICAgc2V0UG9zaXRpb25Qcm9wZXJ0eSh2YWx1ZSwgJ3Jlc2V0JywgMCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0b3RhbERpbWVucyA9IDA7XG4gICAgICAgICAgICBzbGlkZXIuY2hpbGRyZW4uZWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgICAgICB0b3RhbERpbWVucyArPSBzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ2hvcml6b250YWwnID8gJCh0aGlzKS5vdXRlcldpZHRoKHRydWUpIDogJCh0aGlzKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBzcGVlZCByYXRpbyAodXNlZCB0byBkZXRlcm1pbmUgdGhlIG5ldyBzcGVlZCB0byBmaW5pc2ggdGhlIHBhdXNlZCBhbmltYXRpb24pXG4gICAgICAgICAgICByYXRpbyA9IHNsaWRlci5zZXR0aW5ncy5zcGVlZCAvIHRvdGFsRGltZW5zO1xuICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIHdoaWNoIHByb3BlcnR5IHRvIHVzZVxuICAgICAgICAgICAgcHJvcGVydHkgPSBzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ2hvcml6b250YWwnID8gJ2xlZnQnIDogJ3RvcCc7XG4gICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIG5ldyBzcGVlZFxuICAgICAgICAgICAgbmV3U3BlZWQgPSByYXRpbyAqICh0b3RhbERpbWVucyAtIChNYXRoLmFicyhwYXJzZUludCh2YWx1ZSkpKSk7XG4gICAgICAgICAgICB0aWNrZXJMb29wKG5ld1NwZWVkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBvbiBlbCBob3ZlclxuICAgICAgICAgIHNsaWRlci52aWV3cG9ydC5ob3ZlcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGVsLnN0b3AoKTtcbiAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgdG90YWwgd2lkdGggb2YgY2hpbGRyZW4gKHVzZWQgdG8gY2FsY3VsYXRlIHRoZSBzcGVlZCByYXRpbylcbiAgICAgICAgICAgIHRvdGFsRGltZW5zID0gMDtcbiAgICAgICAgICAgIHNsaWRlci5jaGlsZHJlbi5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICAgIHRvdGFsRGltZW5zICs9IHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAnaG9yaXpvbnRhbCcgPyAkKHRoaXMpLm91dGVyV2lkdGgodHJ1ZSkgOiAkKHRoaXMpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIHNwZWVkIHJhdGlvICh1c2VkIHRvIGRldGVybWluZSB0aGUgbmV3IHNwZWVkIHRvIGZpbmlzaCB0aGUgcGF1c2VkIGFuaW1hdGlvbilcbiAgICAgICAgICAgIHJhdGlvID0gc2xpZGVyLnNldHRpbmdzLnNwZWVkIC8gdG90YWxEaW1lbnM7XG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgd2hpY2ggcHJvcGVydHkgdG8gdXNlXG4gICAgICAgICAgICBwcm9wZXJ0eSA9IHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAnaG9yaXpvbnRhbCcgPyAnbGVmdCcgOiAndG9wJztcbiAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgbmV3IHNwZWVkXG4gICAgICAgICAgICBuZXdTcGVlZCA9IHJhdGlvICogKHRvdGFsRGltZW5zIC0gKE1hdGguYWJzKHBhcnNlSW50KGVsLmNzcyhwcm9wZXJ0eSkpKSkpO1xuICAgICAgICAgICAgdGlja2VyTG9vcChuZXdTcGVlZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIHN0YXJ0IHRoZSB0aWNrZXIgbG9vcFxuICAgICAgdGlja2VyTG9vcCgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSdW5zIGEgY29udGludW91cyBsb29wLCBuZXdzIHRpY2tlci1zdHlsZVxuICAgICAqL1xuICAgIHZhciB0aWNrZXJMb29wID0gZnVuY3Rpb24ocmVzdW1lU3BlZWQpIHtcbiAgICAgIHZhciBzcGVlZCA9IHJlc3VtZVNwZWVkID8gcmVzdW1lU3BlZWQgOiBzbGlkZXIuc2V0dGluZ3Muc3BlZWQsXG4gICAgICBwb3NpdGlvbiA9IHtsZWZ0OiAwLCB0b3A6IDB9LFxuICAgICAgcmVzZXQgPSB7bGVmdDogMCwgdG9wOiAwfSxcbiAgICAgIGFuaW1hdGVQcm9wZXJ0eSwgcmVzZXRWYWx1ZSwgcGFyYW1zO1xuXG4gICAgICAvLyBpZiBcIm5leHRcIiBhbmltYXRlIGxlZnQgcG9zaXRpb24gdG8gbGFzdCBjaGlsZCwgdGhlbiByZXNldCBsZWZ0IHRvIDBcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuYXV0b0RpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICAgIHBvc2l0aW9uID0gZWwuZmluZCgnLmJ4LWNsb25lJykuZmlyc3QoKS5wb3NpdGlvbigpO1xuICAgICAgLy8gaWYgXCJwcmV2XCIgYW5pbWF0ZSBsZWZ0IHBvc2l0aW9uIHRvIDAsIHRoZW4gcmVzZXQgbGVmdCB0byBmaXJzdCBub24tY2xvbmUgY2hpbGRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc2V0ID0gc2xpZGVyLmNoaWxkcmVuLmZpcnN0KCkucG9zaXRpb24oKTtcbiAgICAgIH1cbiAgICAgIGFuaW1hdGVQcm9wZXJ0eSA9IHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAnaG9yaXpvbnRhbCcgPyAtcG9zaXRpb24ubGVmdCA6IC1wb3NpdGlvbi50b3A7XG4gICAgICByZXNldFZhbHVlID0gc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICdob3Jpem9udGFsJyA/IC1yZXNldC5sZWZ0IDogLXJlc2V0LnRvcDtcbiAgICAgIHBhcmFtcyA9IHtyZXNldFZhbHVlOiByZXNldFZhbHVlfTtcbiAgICAgIHNldFBvc2l0aW9uUHJvcGVydHkoYW5pbWF0ZVByb3BlcnR5LCAndGlja2VyJywgc3BlZWQsIHBhcmFtcyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGVsIGlzIG9uIHNjcmVlblxuICAgICAqL1xuICAgIHZhciBpc09uU2NyZWVuID0gZnVuY3Rpb24oZWwpIHtcbiAgICAgIHZhciB3aW4gPSAkKHdpbmRvdyksXG4gICAgICB2aWV3cG9ydCA9IHtcbiAgICAgICAgdG9wOiB3aW4uc2Nyb2xsVG9wKCksXG4gICAgICAgIGxlZnQ6IHdpbi5zY3JvbGxMZWZ0KClcbiAgICAgIH0sXG4gICAgICBib3VuZHMgPSBlbC5vZmZzZXQoKTtcblxuICAgICAgdmlld3BvcnQucmlnaHQgPSB2aWV3cG9ydC5sZWZ0ICsgd2luLndpZHRoKCk7XG4gICAgICB2aWV3cG9ydC5ib3R0b20gPSB2aWV3cG9ydC50b3AgKyB3aW4uaGVpZ2h0KCk7XG4gICAgICBib3VuZHMucmlnaHQgPSBib3VuZHMubGVmdCArIGVsLm91dGVyV2lkdGgoKTtcbiAgICAgIGJvdW5kcy5ib3R0b20gPSBib3VuZHMudG9wICsgZWwub3V0ZXJIZWlnaHQoKTtcblxuICAgICAgcmV0dXJuICghKHZpZXdwb3J0LnJpZ2h0IDwgYm91bmRzLmxlZnQgfHwgdmlld3BvcnQubGVmdCA+IGJvdW5kcy5yaWdodCB8fCB2aWV3cG9ydC5ib3R0b20gPCBib3VuZHMudG9wIHx8IHZpZXdwb3J0LnRvcCA+IGJvdW5kcy5ib3R0b20pKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMga2V5Ym9hcmQgZXZlbnRzXG4gICAgICovXG4gICAgdmFyIGtleVByZXNzID0gZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIGFjdGl2ZUVsZW1lbnRUYWcgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgIHRhZ0ZpbHRlcnMgPSAnaW5wdXR8dGV4dGFyZWEnLFxuICAgICAgcCA9IG5ldyBSZWdFeHAoYWN0aXZlRWxlbWVudFRhZyxbJ2knXSksXG4gICAgICByZXN1bHQgPSBwLmV4ZWModGFnRmlsdGVycyk7XG5cbiAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiBpc09uU2NyZWVuKGVsKSkge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOSkge1xuICAgICAgICAgIGNsaWNrTmV4dEJpbmQoZSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzcpIHtcbiAgICAgICAgICBjbGlja1ByZXZCaW5kKGUpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyB0b3VjaCBldmVudHNcbiAgICAgKi9cbiAgICB2YXIgaW5pdFRvdWNoID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBpbml0aWFsaXplIG9iamVjdCB0byBjb250YWluIGFsbCB0b3VjaCB2YWx1ZXNcbiAgICAgIHNsaWRlci50b3VjaCA9IHtcbiAgICAgICAgc3RhcnQ6IHt4OiAwLCB5OiAwfSxcbiAgICAgICAgZW5kOiB7eDogMCwgeTogMH1cbiAgICAgIH07XG4gICAgICBzbGlkZXIudmlld3BvcnQuYmluZCgndG91Y2hzdGFydCBNU1BvaW50ZXJEb3duIHBvaW50ZXJkb3duJywgb25Ub3VjaFN0YXJ0KTtcblxuICAgICAgLy9mb3IgYnJvd3NlcnMgdGhhdCBoYXZlIGltcGxlbWVudGVkIHBvaW50ZXIgZXZlbnRzIGFuZCBmaXJlIGEgY2xpY2sgYWZ0ZXJcbiAgICAgIC8vZXZlcnkgcG9pbnRlcnVwIHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciBwb2ludGVydXAgaXMgb24gc2FtZSBzY3JlZW4gbG9jYXRpb24gYXMgcG9pbnRlcmRvd24gb3Igbm90XG4gICAgICBzbGlkZXIudmlld3BvcnQub24oJ2NsaWNrJywgJy5ieHNsaWRlciBhJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoc2xpZGVyLnZpZXdwb3J0Lmhhc0NsYXNzKCdjbGljay1kaXNhYmxlZCcpKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHNsaWRlci52aWV3cG9ydC5yZW1vdmVDbGFzcygnY2xpY2stZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIFwidG91Y2hzdGFydFwiXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZSAoZXZlbnQpXG4gICAgICogIC0gRE9NIGV2ZW50IG9iamVjdFxuICAgICAqL1xuICAgIHZhciBvblRvdWNoU3RhcnQgPSBmdW5jdGlvbihlKSB7XG4gICAgICAvL2Rpc2FibGUgc2xpZGVyIGNvbnRyb2xzIHdoaWxlIHVzZXIgaXMgaW50ZXJhY3Rpbmcgd2l0aCBzbGlkZXMgdG8gYXZvaWQgc2xpZGVyIGZyZWV6ZSB0aGF0IGhhcHBlbnMgb24gdG91Y2ggZGV2aWNlcyB3aGVuIGEgc2xpZGUgc3dpcGUgaGFwcGVucyBpbW1lZGlhdGVseSBhZnRlciBpbnRlcmFjdGluZyB3aXRoIHNsaWRlciBjb250cm9sc1xuICAgICAgc2xpZGVyLmNvbnRyb2xzLmVsLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuXG4gICAgICBpZiAoc2xpZGVyLndvcmtpbmcpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzbGlkZXIuY29udHJvbHMuZWwucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZWNvcmQgdGhlIG9yaWdpbmFsIHBvc2l0aW9uIHdoZW4gdG91Y2ggc3RhcnRzXG4gICAgICAgIHNsaWRlci50b3VjaC5vcmlnaW5hbFBvcyA9IGVsLnBvc2l0aW9uKCk7XG4gICAgICAgIHZhciBvcmlnID0gZS5vcmlnaW5hbEV2ZW50LFxuICAgICAgICB0b3VjaFBvaW50cyA9ICh0eXBlb2Ygb3JpZy5jaGFuZ2VkVG91Y2hlcyAhPT0gJ3VuZGVmaW5lZCcpID8gb3JpZy5jaGFuZ2VkVG91Y2hlcyA6IFtvcmlnXTtcbiAgICAgICAgLy8gcmVjb3JkIHRoZSBzdGFydGluZyB0b3VjaCB4LCB5IGNvb3JkaW5hdGVzXG4gICAgICAgIHNsaWRlci50b3VjaC5zdGFydC54ID0gdG91Y2hQb2ludHNbMF0ucGFnZVg7XG4gICAgICAgIHNsaWRlci50b3VjaC5zdGFydC55ID0gdG91Y2hQb2ludHNbMF0ucGFnZVk7XG5cbiAgICAgICAgaWYgKHNsaWRlci52aWV3cG9ydC5nZXQoMCkuc2V0UG9pbnRlckNhcHR1cmUpIHtcbiAgICAgICAgICBzbGlkZXIucG9pbnRlcklkID0gb3JpZy5wb2ludGVySWQ7XG4gICAgICAgICAgc2xpZGVyLnZpZXdwb3J0LmdldCgwKS5zZXRQb2ludGVyQ2FwdHVyZShzbGlkZXIucG9pbnRlcklkKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBiaW5kIGEgXCJ0b3VjaG1vdmVcIiBldmVudCB0byB0aGUgdmlld3BvcnRcbiAgICAgICAgc2xpZGVyLnZpZXdwb3J0LmJpbmQoJ3RvdWNobW92ZSBNU1BvaW50ZXJNb3ZlIHBvaW50ZXJtb3ZlJywgb25Ub3VjaE1vdmUpO1xuICAgICAgICAvLyBiaW5kIGEgXCJ0b3VjaGVuZFwiIGV2ZW50IHRvIHRoZSB2aWV3cG9ydFxuICAgICAgICBzbGlkZXIudmlld3BvcnQuYmluZCgndG91Y2hlbmQgTVNQb2ludGVyVXAgcG9pbnRlcnVwJywgb25Ub3VjaEVuZCk7XG4gICAgICAgIHNsaWRlci52aWV3cG9ydC5iaW5kKCdNU1BvaW50ZXJDYW5jZWwgcG9pbnRlcmNhbmNlbCcsIG9uUG9pbnRlckNhbmNlbCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENhbmNlbCBQb2ludGVyIGZvciBXaW5kb3dzIFBob25lXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZSAoZXZlbnQpXG4gICAgICogIC0gRE9NIGV2ZW50IG9iamVjdFxuICAgICAqL1xuICAgIHZhciBvblBvaW50ZXJDYW5jZWwgPSBmdW5jdGlvbihlKSB7XG4gICAgICAvKiBvblBvaW50ZXJDYW5jZWwgaGFuZGxlciBpcyBuZWVkZWQgdG8gZGVhbCB3aXRoIHNpdHVhdGlvbnMgd2hlbiBhIHRvdWNoZW5kXG4gICAgICBkb2Vzbid0IGZpcmUgYWZ0ZXIgYSB0b3VjaHN0YXJ0ICh0aGlzIGhhcHBlbnMgb24gd2luZG93cyBwaG9uZXMgb25seSkgKi9cbiAgICAgIHNldFBvc2l0aW9uUHJvcGVydHkoc2xpZGVyLnRvdWNoLm9yaWdpbmFsUG9zLmxlZnQsICdyZXNldCcsIDApO1xuXG4gICAgICAvL3JlbW92ZSBoYW5kbGVyc1xuICAgICAgc2xpZGVyLmNvbnRyb2xzLmVsLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgc2xpZGVyLnZpZXdwb3J0LnVuYmluZCgnTVNQb2ludGVyQ2FuY2VsIHBvaW50ZXJjYW5jZWwnLCBvblBvaW50ZXJDYW5jZWwpO1xuICAgICAgc2xpZGVyLnZpZXdwb3J0LnVuYmluZCgndG91Y2htb3ZlIE1TUG9pbnRlck1vdmUgcG9pbnRlcm1vdmUnLCBvblRvdWNoTW92ZSk7XG4gICAgICBzbGlkZXIudmlld3BvcnQudW5iaW5kKCd0b3VjaGVuZCBNU1BvaW50ZXJVcCBwb2ludGVydXAnLCBvblRvdWNoRW5kKTtcbiAgICAgIGlmIChzbGlkZXIudmlld3BvcnQuZ2V0KDApLnJlbGVhc2VQb2ludGVyQ2FwdHVyZSkge1xuICAgICAgICBzbGlkZXIudmlld3BvcnQuZ2V0KDApLnJlbGVhc2VQb2ludGVyQ2FwdHVyZShzbGlkZXIucG9pbnRlcklkKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgXCJ0b3VjaG1vdmVcIlxuICAgICAqXG4gICAgICogQHBhcmFtIGUgKGV2ZW50KVxuICAgICAqICAtIERPTSBldmVudCBvYmplY3RcbiAgICAgKi9cbiAgICB2YXIgb25Ub3VjaE1vdmUgPSBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgb3JpZyA9IGUub3JpZ2luYWxFdmVudCxcbiAgICAgIHRvdWNoUG9pbnRzID0gKHR5cGVvZiBvcmlnLmNoYW5nZWRUb3VjaGVzICE9PSAndW5kZWZpbmVkJykgPyBvcmlnLmNoYW5nZWRUb3VjaGVzIDogW29yaWddLFxuICAgICAgLy8gaWYgc2Nyb2xsaW5nIG9uIHkgYXhpcywgZG8gbm90IHByZXZlbnQgZGVmYXVsdFxuICAgICAgeE1vdmVtZW50ID0gTWF0aC5hYnModG91Y2hQb2ludHNbMF0ucGFnZVggLSBzbGlkZXIudG91Y2guc3RhcnQueCksXG4gICAgICB5TW92ZW1lbnQgPSBNYXRoLmFicyh0b3VjaFBvaW50c1swXS5wYWdlWSAtIHNsaWRlci50b3VjaC5zdGFydC55KSxcbiAgICAgIHZhbHVlID0gMCxcbiAgICAgIGNoYW5nZSA9IDA7XG5cbiAgICAgIC8vIHggYXhpcyBzd2lwZVxuICAgICAgaWYgKCh4TW92ZW1lbnQgKiAzKSA+IHlNb3ZlbWVudCAmJiBzbGlkZXIuc2V0dGluZ3MucHJldmVudERlZmF1bHRTd2lwZVgpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8geSBheGlzIHN3aXBlXG4gICAgICB9IGVsc2UgaWYgKCh5TW92ZW1lbnQgKiAzKSA+IHhNb3ZlbWVudCAmJiBzbGlkZXIuc2V0dGluZ3MucHJldmVudERlZmF1bHRTd2lwZVkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5tb2RlICE9PSAnZmFkZScgJiYgc2xpZGVyLnNldHRpbmdzLm9uZVRvT25lVG91Y2gpIHtcbiAgICAgICAgLy8gaWYgaG9yaXpvbnRhbCwgZHJhZyBhbG9uZyB4IGF4aXNcbiAgICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICBjaGFuZ2UgPSB0b3VjaFBvaW50c1swXS5wYWdlWCAtIHNsaWRlci50b3VjaC5zdGFydC54O1xuICAgICAgICAgIHZhbHVlID0gc2xpZGVyLnRvdWNoLm9yaWdpbmFsUG9zLmxlZnQgKyBjaGFuZ2U7XG4gICAgICAgIC8vIGlmIHZlcnRpY2FsLCBkcmFnIGFsb25nIHkgYXhpc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoYW5nZSA9IHRvdWNoUG9pbnRzWzBdLnBhZ2VZIC0gc2xpZGVyLnRvdWNoLnN0YXJ0Lnk7XG4gICAgICAgICAgdmFsdWUgPSBzbGlkZXIudG91Y2gub3JpZ2luYWxQb3MudG9wICsgY2hhbmdlO1xuICAgICAgICB9XG4gICAgICAgIHNldFBvc2l0aW9uUHJvcGVydHkodmFsdWUsICdyZXNldCcsIDApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBcInRvdWNoZW5kXCJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlIChldmVudClcbiAgICAgKiAgLSBET00gZXZlbnQgb2JqZWN0XG4gICAgICovXG4gICAgdmFyIG9uVG91Y2hFbmQgPSBmdW5jdGlvbihlKSB7XG4gICAgICBzbGlkZXIudmlld3BvcnQudW5iaW5kKCd0b3VjaG1vdmUgTVNQb2ludGVyTW92ZSBwb2ludGVybW92ZScsIG9uVG91Y2hNb3ZlKTtcbiAgICAgIC8vZW5hYmxlIHNsaWRlciBjb250cm9scyBhcyBzb29uIGFzIHVzZXIgc3RvcHMgaW50ZXJhY2luZyB3aXRoIHNsaWRlc1xuICAgICAgc2xpZGVyLmNvbnRyb2xzLmVsLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgdmFyIG9yaWcgICAgPSBlLm9yaWdpbmFsRXZlbnQsXG4gICAgICB0b3VjaFBvaW50cyA9ICh0eXBlb2Ygb3JpZy5jaGFuZ2VkVG91Y2hlcyAhPT0gJ3VuZGVmaW5lZCcpID8gb3JpZy5jaGFuZ2VkVG91Y2hlcyA6IFtvcmlnXSxcbiAgICAgIHZhbHVlICAgICAgID0gMCxcbiAgICAgIGRpc3RhbmNlICAgID0gMDtcbiAgICAgIC8vIHJlY29yZCBlbmQgeCwgeSBwb3NpdGlvbnNcbiAgICAgIHNsaWRlci50b3VjaC5lbmQueCA9IHRvdWNoUG9pbnRzWzBdLnBhZ2VYO1xuICAgICAgc2xpZGVyLnRvdWNoLmVuZC55ID0gdG91Y2hQb2ludHNbMF0ucGFnZVk7XG4gICAgICAvLyBpZiBmYWRlIG1vZGUsIGNoZWNrIGlmIGFic29sdXRlIHggZGlzdGFuY2UgY2xlYXJzIHRoZSB0aHJlc2hvbGRcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ2ZhZGUnKSB7XG4gICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnMoc2xpZGVyLnRvdWNoLnN0YXJ0LnggLSBzbGlkZXIudG91Y2guZW5kLngpO1xuICAgICAgICBpZiAoZGlzdGFuY2UgPj0gc2xpZGVyLnNldHRpbmdzLnN3aXBlVGhyZXNob2xkKSB7XG4gICAgICAgICAgaWYgKHNsaWRlci50b3VjaC5zdGFydC54ID4gc2xpZGVyLnRvdWNoLmVuZC54KSB7XG4gICAgICAgICAgICBlbC5nb1RvTmV4dFNsaWRlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsLmdvVG9QcmV2U2xpZGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWwuc3RvcEF1dG8oKTtcbiAgICAgICAgfVxuICAgICAgLy8gbm90IGZhZGUgbW9kZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY2FsY3VsYXRlIGRpc3RhbmNlIGFuZCBlbCdzIGFuaW1hdGUgcHJvcGVydHlcbiAgICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICBkaXN0YW5jZSA9IHNsaWRlci50b3VjaC5lbmQueCAtIHNsaWRlci50b3VjaC5zdGFydC54O1xuICAgICAgICAgIHZhbHVlID0gc2xpZGVyLnRvdWNoLm9yaWdpbmFsUG9zLmxlZnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzdGFuY2UgPSBzbGlkZXIudG91Y2guZW5kLnkgLSBzbGlkZXIudG91Y2guc3RhcnQueTtcbiAgICAgICAgICB2YWx1ZSA9IHNsaWRlci50b3VjaC5vcmlnaW5hbFBvcy50b3A7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgbm90IGluZmluaXRlIGxvb3AgYW5kIGZpcnN0IC8gbGFzdCBzbGlkZSwgZG8gbm90IGF0dGVtcHQgYSBzbGlkZSB0cmFuc2l0aW9uXG4gICAgICAgIGlmICghc2xpZGVyLnNldHRpbmdzLmluZmluaXRlTG9vcCAmJiAoKHNsaWRlci5hY3RpdmUuaW5kZXggPT09IDAgJiYgZGlzdGFuY2UgPiAwKSB8fCAoc2xpZGVyLmFjdGl2ZS5sYXN0ICYmIGRpc3RhbmNlIDwgMCkpKSB7XG4gICAgICAgICAgc2V0UG9zaXRpb25Qcm9wZXJ0eSh2YWx1ZSwgJ3Jlc2V0JywgMjAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiBkaXN0YW5jZSBjbGVhcnMgdGhyZXNob2xkXG4gICAgICAgICAgaWYgKE1hdGguYWJzKGRpc3RhbmNlKSA+PSBzbGlkZXIuc2V0dGluZ3Muc3dpcGVUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDApIHtcbiAgICAgICAgICAgICAgZWwuZ29Ub05leHRTbGlkZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZWwuZ29Ub1ByZXZTbGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWwuc3RvcEF1dG8oKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZWwuYW5pbWF0ZShwcm9wZXJ0eSwgMjAwKTtcbiAgICAgICAgICAgIHNldFBvc2l0aW9uUHJvcGVydHkodmFsdWUsICdyZXNldCcsIDIwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzbGlkZXIudmlld3BvcnQudW5iaW5kKCd0b3VjaGVuZCBNU1BvaW50ZXJVcCBwb2ludGVydXAnLCBvblRvdWNoRW5kKTtcbiAgICAgIGlmIChzbGlkZXIudmlld3BvcnQuZ2V0KDApLnJlbGVhc2VQb2ludGVyQ2FwdHVyZSkge1xuICAgICAgICBzbGlkZXIudmlld3BvcnQuZ2V0KDApLnJlbGVhc2VQb2ludGVyQ2FwdHVyZShzbGlkZXIucG9pbnRlcklkKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogV2luZG93IHJlc2l6ZSBldmVudCBjYWxsYmFja1xuICAgICAqL1xuICAgIHZhciByZXNpemVXaW5kb3cgPSBmdW5jdGlvbihlKSB7XG4gICAgICAvLyBkb24ndCBkbyBhbnl0aGluZyBpZiBzbGlkZXIgaXNuJ3QgaW5pdGlhbGl6ZWQuXG4gICAgICBpZiAoIXNsaWRlci5pbml0aWFsaXplZCkgeyByZXR1cm47IH1cbiAgICAgIC8vIERlbGF5IGlmIHNsaWRlciB3b3JraW5nLlxuICAgICAgaWYgKHNsaWRlci53b3JraW5nKSB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHJlc2l6ZVdpbmRvdywgMTApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZ2V0IHRoZSBuZXcgd2luZG93IGRpbWVucyAoYWdhaW4sIHRoYW5rIHlvdSBJRSlcbiAgICAgICAgdmFyIHdpbmRvd1dpZHRoTmV3ID0gJCh3aW5kb3cpLndpZHRoKCksXG4gICAgICAgIHdpbmRvd0hlaWdodE5ldyA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgaXQgaXMgYSB0cnVlIHdpbmRvdyByZXNpemVcbiAgICAgICAgLy8gKndlIG11c3QgY2hlY2sgdGhpcyBiZWNhdXNlIG91ciBkaW5vc2F1ciBmcmllbmQgSUUgZmlyZXMgYSB3aW5kb3cgcmVzaXplIGV2ZW50IHdoZW4gY2VydGFpbiBET00gZWxlbWVudHNcbiAgICAgICAgLy8gYXJlIHJlc2l6ZWQuIENhbiB5b3UganVzdCBkaWUgYWxyZWFkeT8qXG4gICAgICAgIGlmICh3aW5kb3dXaWR0aCAhPT0gd2luZG93V2lkdGhOZXcgfHwgd2luZG93SGVpZ2h0ICE9PSB3aW5kb3dIZWlnaHROZXcpIHtcbiAgICAgICAgICAvLyBzZXQgdGhlIG5ldyB3aW5kb3cgZGltZW5zXG4gICAgICAgICAgd2luZG93V2lkdGggPSB3aW5kb3dXaWR0aE5ldztcbiAgICAgICAgICB3aW5kb3dIZWlnaHQgPSB3aW5kb3dIZWlnaHROZXc7XG4gICAgICAgICAgLy8gdXBkYXRlIGFsbCBkeW5hbWljIGVsZW1lbnRzXG4gICAgICAgICAgZWwucmVkcmF3U2xpZGVyKCk7XG4gICAgICAgICAgLy8gQ2FsbCB1c2VyIHJlc2l6ZSBoYW5kbGVyXG4gICAgICAgICAgc2xpZGVyLnNldHRpbmdzLm9uU2xpZGVyUmVzaXplLmNhbGwoZWwsIHNsaWRlci5hY3RpdmUuaW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gYXJpYS1oaWRkZW49dHJ1ZSBhdHRyaWJ1dGUgdG8gZWFjaCBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RhcnRWaXNpYmxlSW5kZXggKGludClcbiAgICAgKiAgLSB0aGUgZmlyc3QgdmlzaWJsZSBlbGVtZW50J3MgaW5kZXhcbiAgICAgKi9cbiAgICB2YXIgYXBwbHlBcmlhSGlkZGVuQXR0cmlidXRlcyA9IGZ1bmN0aW9uKHN0YXJ0VmlzaWJsZUluZGV4KSB7XG4gICAgICB2YXIgbnVtYmVyT2ZTbGlkZXNTaG93aW5nID0gZ2V0TnVtYmVyU2xpZGVzU2hvd2luZygpO1xuICAgICAgLy8gb25seSBhcHBseSBhdHRyaWJ1dGVzIGlmIHRoZSBzZXR0aW5nIGlzIGVuYWJsZWQgYW5kIG5vdCBpbiB0aWNrZXIgbW9kZVxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5hcmlhSGlkZGVuICYmICFzbGlkZXIuc2V0dGluZ3MudGlja2VyKSB7XG4gICAgICAgIC8vIGFkZCBhcmlhLWhpZGRlbj10cnVlIHRvIGFsbCBlbGVtZW50c1xuICAgICAgICBzbGlkZXIuY2hpbGRyZW4uYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICAvLyBnZXQgdGhlIHZpc2libGUgZWxlbWVudHMgYW5kIGNoYW5nZSB0byBhcmlhLWhpZGRlbj1mYWxzZVxuICAgICAgICBzbGlkZXIuY2hpbGRyZW4uc2xpY2Uoc3RhcnRWaXNpYmxlSW5kZXgsIHN0YXJ0VmlzaWJsZUluZGV4ICsgbnVtYmVyT2ZTbGlkZXNTaG93aW5nKS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGluZGV4IGFjY29yZGluZyB0byBwcmVzZW50IHBhZ2UgcmFuZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzbGlkZU9uZGV4IChpbnQpXG4gICAgICogIC0gdGhlIGRlc2lyZWQgc2xpZGUgaW5kZXhcbiAgICAgKi9cbiAgICB2YXIgc2V0U2xpZGVJbmRleCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgpIHtcbiAgICAgIGlmIChzbGlkZUluZGV4IDwgMCkge1xuICAgICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmluZmluaXRlTG9vcCkge1xuICAgICAgICAgIHJldHVybiBnZXRQYWdlclF0eSgpIC0gMTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgIC8vd2UgZG9uJ3QgZ28gdG8gdW5kZWZpbmVkIHNsaWRlc1xuICAgICAgICAgIHJldHVybiBzbGlkZXIuYWN0aXZlLmluZGV4O1xuICAgICAgICB9XG4gICAgICAvLyBpZiBzbGlkZUluZGV4IGlzIGdyZWF0ZXIgdGhhbiBjaGlsZHJlbiBsZW5ndGgsIHNldCBhY3RpdmUgaW5kZXggdG8gMCAodGhpcyBoYXBwZW5zIGR1cmluZyBpbmZpbml0ZSBsb29wKVxuICAgICAgfSBlbHNlIGlmIChzbGlkZUluZGV4ID49IGdldFBhZ2VyUXR5KCkpIHtcbiAgICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5pbmZpbml0ZUxvb3ApIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL3dlIGRvbid0IG1vdmUgdG8gdW5kZWZpbmVkIHBhZ2VzXG4gICAgICAgICAgcmV0dXJuIHNsaWRlci5hY3RpdmUuaW5kZXg7XG4gICAgICAgIH1cbiAgICAgIC8vIHNldCBhY3RpdmUgaW5kZXggdG8gcmVxdWVzdGVkIHNsaWRlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc2xpZGVJbmRleDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKiA9IFBVQkxJQyBGVU5DVElPTlNcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgc2xpZGUgdHJhbnNpdGlvbiB0byB0aGUgc3BlY2lmaWVkIHNsaWRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2xpZGVJbmRleCAoaW50KVxuICAgICAqICAtIHRoZSBkZXN0aW5hdGlvbiBzbGlkZSdzIGluZGV4ICh6ZXJvLWJhc2VkKVxuICAgICAqXG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiAoc3RyaW5nKVxuICAgICAqICAtIElOVEVSTkFMIFVTRSBPTkxZIC0gdGhlIGRpcmVjdGlvbiBvZiB0cmF2ZWwgKFwicHJldlwiIC8gXCJuZXh0XCIpXG4gICAgICovXG4gICAgZWwuZ29Ub1NsaWRlID0gZnVuY3Rpb24oc2xpZGVJbmRleCwgZGlyZWN0aW9uKSB7XG4gICAgICAvLyBvblNsaWRlQmVmb3JlLCBvblNsaWRlTmV4dCwgb25TbGlkZVByZXYgY2FsbGJhY2tzXG4gICAgICAvLyBBbGxvdyB0cmFuc2l0aW9uIGNhbmNlbGluZyBiYXNlZCBvbiByZXR1cm5lZCB2YWx1ZVxuICAgICAgdmFyIHBlcmZvcm1UcmFuc2l0aW9uID0gdHJ1ZSxcbiAgICAgIG1vdmVCeSA9IDAsXG4gICAgICBwb3NpdGlvbiA9IHtsZWZ0OiAwLCB0b3A6IDB9LFxuICAgICAgbGFzdENoaWxkID0gbnVsbCxcbiAgICAgIGxhc3RTaG93aW5nSW5kZXgsIGVxLCB2YWx1ZSwgcmVxdWVzdEVsO1xuICAgICAgLy8gc3RvcmUgdGhlIG9sZCBpbmRleFxuICAgICAgc2xpZGVyLm9sZEluZGV4ID0gc2xpZGVyLmFjdGl2ZS5pbmRleDtcbiAgICAgIC8vc2V0IG5ldyBpbmRleFxuICAgICAgc2xpZGVyLmFjdGl2ZS5pbmRleCA9IHNldFNsaWRlSW5kZXgoc2xpZGVJbmRleCk7XG5cbiAgICAgIC8vIGlmIHBsdWdpbiBpcyBjdXJyZW50bHkgaW4gbW90aW9uLCBpZ25vcmUgcmVxdWVzdFxuICAgICAgaWYgKHNsaWRlci53b3JraW5nIHx8IHNsaWRlci5hY3RpdmUuaW5kZXggPT09IHNsaWRlci5vbGRJbmRleCkgeyByZXR1cm47IH1cbiAgICAgIC8vIGRlY2xhcmUgdGhhdCBwbHVnaW4gaXMgaW4gbW90aW9uXG4gICAgICBzbGlkZXIud29ya2luZyA9IHRydWU7XG5cbiAgICAgIHBlcmZvcm1UcmFuc2l0aW9uID0gc2xpZGVyLnNldHRpbmdzLm9uU2xpZGVCZWZvcmUuY2FsbChlbCwgc2xpZGVyLmNoaWxkcmVuLmVxKHNsaWRlci5hY3RpdmUuaW5kZXgpLCBzbGlkZXIub2xkSW5kZXgsIHNsaWRlci5hY3RpdmUuaW5kZXgpO1xuXG4gICAgICAvLyBJZiB0cmFuc2l0aW9ucyBjYW5jZWxlZCwgcmVzZXQgYW5kIHJldHVyblxuICAgICAgaWYgKHR5cGVvZiAocGVyZm9ybVRyYW5zaXRpb24pICE9PSAndW5kZWZpbmVkJyAmJiAhcGVyZm9ybVRyYW5zaXRpb24pIHtcbiAgICAgICAgc2xpZGVyLmFjdGl2ZS5pbmRleCA9IHNsaWRlci5vbGRJbmRleDsgLy8gcmVzdG9yZSBvbGQgaW5kZXhcbiAgICAgICAgc2xpZGVyLndvcmtpbmcgPSBmYWxzZTsgLy8gaXMgbm90IGluIG1vdGlvblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgICAvLyBQcmV2ZW50IGNhbmNlbGluZyBpbiBmdXR1cmUgZnVuY3Rpb25zIG9yIGxhY2sgdGhlcmUtb2YgZnJvbSBuZWdhdGluZyBwcmV2aW91cyBjb21tYW5kcyB0byBjYW5jZWxcbiAgICAgICAgaWYgKCFzbGlkZXIuc2V0dGluZ3Mub25TbGlkZU5leHQuY2FsbChlbCwgc2xpZGVyLmNoaWxkcmVuLmVxKHNsaWRlci5hY3RpdmUuaW5kZXgpLCBzbGlkZXIub2xkSW5kZXgsIHNsaWRlci5hY3RpdmUuaW5kZXgpKSB7XG4gICAgICAgICAgcGVyZm9ybVRyYW5zaXRpb24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdwcmV2Jykge1xuICAgICAgICAvLyBQcmV2ZW50IGNhbmNlbGluZyBpbiBmdXR1cmUgZnVuY3Rpb25zIG9yIGxhY2sgdGhlcmUtb2YgZnJvbSBuZWdhdGluZyBwcmV2aW91cyBjb21tYW5kcyB0byBjYW5jZWxcbiAgICAgICAgaWYgKCFzbGlkZXIuc2V0dGluZ3Mub25TbGlkZVByZXYuY2FsbChlbCwgc2xpZGVyLmNoaWxkcmVuLmVxKHNsaWRlci5hY3RpdmUuaW5kZXgpLCBzbGlkZXIub2xkSW5kZXgsIHNsaWRlci5hY3RpdmUuaW5kZXgpKSB7XG4gICAgICAgICAgcGVyZm9ybVRyYW5zaXRpb24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBjaGVjayBpZiBsYXN0IHNsaWRlXG4gICAgICBzbGlkZXIuYWN0aXZlLmxhc3QgPSBzbGlkZXIuYWN0aXZlLmluZGV4ID49IGdldFBhZ2VyUXR5KCkgLSAxO1xuICAgICAgLy8gdXBkYXRlIHRoZSBwYWdlciB3aXRoIGFjdGl2ZSBjbGFzc1xuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5wYWdlciB8fCBzbGlkZXIuc2V0dGluZ3MucGFnZXJDdXN0b20pIHsgdXBkYXRlUGFnZXJBY3RpdmUoc2xpZGVyLmFjdGl2ZS5pbmRleCk7IH1cbiAgICAgIC8vIC8vIGNoZWNrIGZvciBkaXJlY3Rpb24gY29udHJvbCB1cGRhdGVcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuY29udHJvbHMpIHsgdXBkYXRlRGlyZWN0aW9uQ29udHJvbHMoKTsgfVxuICAgICAgLy8gaWYgc2xpZGVyIGlzIHNldCB0byBtb2RlOiBcImZhZGVcIlxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAnZmFkZScpIHtcbiAgICAgICAgLy8gaWYgYWRhcHRpdmVIZWlnaHQgaXMgdHJ1ZSBhbmQgbmV4dCBoZWlnaHQgaXMgZGlmZmVyZW50IGZyb20gY3VycmVudCBoZWlnaHQsIGFuaW1hdGUgdG8gdGhlIG5ldyBoZWlnaHRcbiAgICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5hZGFwdGl2ZUhlaWdodCAmJiBzbGlkZXIudmlld3BvcnQuaGVpZ2h0KCkgIT09IGdldFZpZXdwb3J0SGVpZ2h0KCkpIHtcbiAgICAgICAgICBzbGlkZXIudmlld3BvcnQuYW5pbWF0ZSh7aGVpZ2h0OiBnZXRWaWV3cG9ydEhlaWdodCgpfSwgc2xpZGVyLnNldHRpbmdzLmFkYXB0aXZlSGVpZ2h0U3BlZWQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZhZGUgb3V0IHRoZSB2aXNpYmxlIGNoaWxkIGFuZCByZXNldCBpdHMgei1pbmRleCB2YWx1ZVxuICAgICAgICBzbGlkZXIuY2hpbGRyZW4uZmlsdGVyKCc6dmlzaWJsZScpLmZhZGVPdXQoc2xpZGVyLnNldHRpbmdzLnNwZWVkKS5jc3Moe3pJbmRleDogMH0pO1xuICAgICAgICAvLyBmYWRlIGluIHRoZSBuZXdseSByZXF1ZXN0ZWQgc2xpZGVcbiAgICAgICAgc2xpZGVyLmNoaWxkcmVuLmVxKHNsaWRlci5hY3RpdmUuaW5kZXgpLmNzcygnekluZGV4Jywgc2xpZGVyLnNldHRpbmdzLnNsaWRlWkluZGV4ICsgMSkuZmFkZUluKHNsaWRlci5zZXR0aW5ncy5zcGVlZCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCh0aGlzKS5jc3MoJ3pJbmRleCcsIHNsaWRlci5zZXR0aW5ncy5zbGlkZVpJbmRleCk7XG4gICAgICAgICAgdXBkYXRlQWZ0ZXJTbGlkZVRyYW5zaXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgICAvLyBzbGlkZXIgbW9kZSBpcyBub3QgXCJmYWRlXCJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlmIGFkYXB0aXZlSGVpZ2h0IGlzIHRydWUgYW5kIG5leHQgaGVpZ2h0IGlzIGRpZmZlcmVudCBmcm9tIGN1cnJlbnQgaGVpZ2h0LCBhbmltYXRlIHRvIHRoZSBuZXcgaGVpZ2h0XG4gICAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuYWRhcHRpdmVIZWlnaHQgJiYgc2xpZGVyLnZpZXdwb3J0LmhlaWdodCgpICE9PSBnZXRWaWV3cG9ydEhlaWdodCgpKSB7XG4gICAgICAgICAgc2xpZGVyLnZpZXdwb3J0LmFuaW1hdGUoe2hlaWdodDogZ2V0Vmlld3BvcnRIZWlnaHQoKX0sIHNsaWRlci5zZXR0aW5ncy5hZGFwdGl2ZUhlaWdodFNwZWVkKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBjYXJvdXNlbCBhbmQgbm90IGluZmluaXRlIGxvb3BcbiAgICAgICAgaWYgKCFzbGlkZXIuc2V0dGluZ3MuaW5maW5pdGVMb29wICYmIHNsaWRlci5jYXJvdXNlbCAmJiBzbGlkZXIuYWN0aXZlLmxhc3QpIHtcbiAgICAgICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSBsYXN0IGNoaWxkIHBvc2l0aW9uXG4gICAgICAgICAgICBsYXN0Q2hpbGQgPSBzbGlkZXIuY2hpbGRyZW4uZXEoc2xpZGVyLmNoaWxkcmVuLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBsYXN0Q2hpbGQucG9zaXRpb24oKTtcbiAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIGxhc3Qgc2xpZGVcbiAgICAgICAgICAgIG1vdmVCeSA9IHNsaWRlci52aWV3cG9ydC53aWR0aCgpIC0gbGFzdENoaWxkLm91dGVyV2lkdGgoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZ2V0IGxhc3Qgc2hvd2luZyBpbmRleCBwb3NpdGlvblxuICAgICAgICAgICAgbGFzdFNob3dpbmdJbmRleCA9IHNsaWRlci5jaGlsZHJlbi5sZW5ndGggLSBzbGlkZXIuc2V0dGluZ3MubWluU2xpZGVzO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBzbGlkZXIuY2hpbGRyZW4uZXEobGFzdFNob3dpbmdJbmRleCkucG9zaXRpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gaG9yaXpvbnRhbCBjYXJvdXNlbCwgZ29pbmcgcHJldmlvdXMgd2hpbGUgb24gZmlyc3Qgc2xpZGUgKGluZmluaXRlTG9vcCBtb2RlKVxuICAgICAgICB9IGVsc2UgaWYgKHNsaWRlci5jYXJvdXNlbCAmJiBzbGlkZXIuYWN0aXZlLmxhc3QgJiYgZGlyZWN0aW9uID09PSAncHJldicpIHtcbiAgICAgICAgICAvLyBnZXQgdGhlIGxhc3QgY2hpbGQgcG9zaXRpb25cbiAgICAgICAgICBlcSA9IHNsaWRlci5zZXR0aW5ncy5tb3ZlU2xpZGVzID09PSAxID8gc2xpZGVyLnNldHRpbmdzLm1heFNsaWRlcyAtIGdldE1vdmVCeSgpIDogKChnZXRQYWdlclF0eSgpIC0gMSkgKiBnZXRNb3ZlQnkoKSkgLSAoc2xpZGVyLmNoaWxkcmVuLmxlbmd0aCAtIHNsaWRlci5zZXR0aW5ncy5tYXhTbGlkZXMpO1xuICAgICAgICAgIGxhc3RDaGlsZCA9IGVsLmNoaWxkcmVuKCcuYngtY2xvbmUnKS5lcShlcSk7XG4gICAgICAgICAgcG9zaXRpb24gPSBsYXN0Q2hpbGQucG9zaXRpb24oKTtcbiAgICAgICAgLy8gaWYgaW5maW5pdGUgbG9vcCBhbmQgXCJOZXh0XCIgaXMgY2xpY2tlZCBvbiB0aGUgbGFzdCBzbGlkZVxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnICYmIHNsaWRlci5hY3RpdmUuaW5kZXggPT09IDApIHtcbiAgICAgICAgICAvLyBnZXQgdGhlIGxhc3QgY2xvbmUgcG9zaXRpb25cbiAgICAgICAgICBwb3NpdGlvbiA9IGVsLmZpbmQoJz4gLmJ4LWNsb25lJykuZXEoc2xpZGVyLnNldHRpbmdzLm1heFNsaWRlcykucG9zaXRpb24oKTtcbiAgICAgICAgICBzbGlkZXIuYWN0aXZlLmxhc3QgPSBmYWxzZTtcbiAgICAgICAgLy8gbm9ybWFsIG5vbi16ZXJvIHJlcXVlc3RzXG4gICAgICAgIH0gZWxzZSBpZiAoc2xpZGVJbmRleCA+PSAwKSB7XG4gICAgICAgICAgLy9wYXJzZUludCBpcyBhcHBsaWVkIHRvIGFsbG93IGZsb2F0cyBmb3Igc2xpZGVzL3BhZ2VcbiAgICAgICAgICByZXF1ZXN0RWwgPSBzbGlkZUluZGV4ICogcGFyc2VJbnQoZ2V0TW92ZUJ5KCkpO1xuICAgICAgICAgIHBvc2l0aW9uID0gc2xpZGVyLmNoaWxkcmVuLmVxKHJlcXVlc3RFbCkucG9zaXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIElmIHRoZSBwb3NpdGlvbiBkb2Vzbid0IGV4aXN0XG4gICAgICAgICAqIChlLmcuIGlmIHlvdSBkZXN0cm95IHRoZSBzbGlkZXIgb24gYSBuZXh0IGNsaWNrKSxcbiAgICAgICAgICogaXQgZG9lc24ndCB0aHJvdyBhbiBlcnJvci5cbiAgICAgICAgICovXG4gICAgICAgIGlmICh0eXBlb2YgKHBvc2l0aW9uKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB2YWx1ZSA9IHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAnaG9yaXpvbnRhbCcgPyAtKHBvc2l0aW9uLmxlZnQgLSBtb3ZlQnkpIDogLXBvc2l0aW9uLnRvcDtcbiAgICAgICAgICAvLyBwbHVnaW4gdmFsdWVzIHRvIGJlIGFuaW1hdGVkXG4gICAgICAgICAgc2V0UG9zaXRpb25Qcm9wZXJ0eSh2YWx1ZSwgJ3NsaWRlJywgc2xpZGVyLnNldHRpbmdzLnNwZWVkKTtcbiAgICAgICAgfVxuICAgICAgICBzbGlkZXIud29ya2luZyA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5hcmlhSGlkZGVuKSB7IGFwcGx5QXJpYUhpZGRlbkF0dHJpYnV0ZXMoc2xpZGVyLmFjdGl2ZS5pbmRleCAqIGdldE1vdmVCeSgpKTsgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2l0aW9ucyB0byB0aGUgbmV4dCBzbGlkZSBpbiB0aGUgc2hvd1xuICAgICAqL1xuICAgIGVsLmdvVG9OZXh0U2xpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGlmIGluZmluaXRlTG9vcCBpcyBmYWxzZSBhbmQgbGFzdCBwYWdlIGlzIHNob3dpbmcsIGRpc3JlZ2FyZCBjYWxsXG4gICAgICBpZiAoIXNsaWRlci5zZXR0aW5ncy5pbmZpbml0ZUxvb3AgJiYgc2xpZGVyLmFjdGl2ZS5sYXN0KSB7IHJldHVybjsgfVxuXHQgIGlmIChzbGlkZXIud29ya2luZyA9PSB0cnVlKXsgcmV0dXJuIDt9XG4gICAgICB2YXIgcGFnZXJJbmRleCA9IHBhcnNlSW50KHNsaWRlci5hY3RpdmUuaW5kZXgpICsgMTtcbiAgICAgIGVsLmdvVG9TbGlkZShwYWdlckluZGV4LCAnbmV4dCcpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2l0aW9ucyB0byB0aGUgcHJldiBzbGlkZSBpbiB0aGUgc2hvd1xuICAgICAqL1xuICAgIGVsLmdvVG9QcmV2U2xpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGlmIGluZmluaXRlTG9vcCBpcyBmYWxzZSBhbmQgbGFzdCBwYWdlIGlzIHNob3dpbmcsIGRpc3JlZ2FyZCBjYWxsXG4gICAgICBpZiAoIXNsaWRlci5zZXR0aW5ncy5pbmZpbml0ZUxvb3AgJiYgc2xpZGVyLmFjdGl2ZS5pbmRleCA9PT0gMCkgeyByZXR1cm47IH1cblx0ICBpZiAoc2xpZGVyLndvcmtpbmcgPT0gdHJ1ZSl7IHJldHVybiA7fVxuICAgICAgdmFyIHBhZ2VySW5kZXggPSBwYXJzZUludChzbGlkZXIuYWN0aXZlLmluZGV4KSAtIDE7XG4gICAgICBlbC5nb1RvU2xpZGUocGFnZXJJbmRleCwgJ3ByZXYnKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3RhcnRzIHRoZSBhdXRvIHNob3dcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcmV2ZW50Q29udHJvbFVwZGF0ZSAoYm9vbGVhbilcbiAgICAgKiAgLSBpZiB0cnVlLCBhdXRvIGNvbnRyb2xzIHN0YXRlIHdpbGwgbm90IGJlIHVwZGF0ZWRcbiAgICAgKi9cbiAgICBlbC5zdGFydEF1dG8gPSBmdW5jdGlvbihwcmV2ZW50Q29udHJvbFVwZGF0ZSkge1xuICAgICAgLy8gaWYgYW4gaW50ZXJ2YWwgYWxyZWFkeSBleGlzdHMsIGRpc3JlZ2FyZCBjYWxsXG4gICAgICBpZiAoc2xpZGVyLmludGVydmFsKSB7IHJldHVybjsgfVxuICAgICAgLy8gY3JlYXRlIGFuIGludGVydmFsXG4gICAgICBzbGlkZXIuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5hdXRvRGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgICAgICBlbC5nb1RvTmV4dFNsaWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWwuZ29Ub1ByZXZTbGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9LCBzbGlkZXIuc2V0dGluZ3MucGF1c2UpO1xuXHQgIC8vYWxsYmFjayBmb3Igd2hlbiB0aGUgYXV0byByb3RhdGUgc3RhdHVzIGNoYW5nZXNcblx0ICBzbGlkZXIuc2V0dGluZ3Mub25BdXRvQ2hhbmdlLmNhbGwoZWwsIHRydWUpO1xuICAgICAgLy8gaWYgYXV0byBjb250cm9scyBhcmUgZGlzcGxheWVkIGFuZCBwcmV2ZW50Q29udHJvbFVwZGF0ZSBpcyBub3QgdHJ1ZVxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5hdXRvQ29udHJvbHMgJiYgcHJldmVudENvbnRyb2xVcGRhdGUgIT09IHRydWUpIHsgdXBkYXRlQXV0b0NvbnRyb2xzKCdzdG9wJyk7IH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3RvcHMgdGhlIGF1dG8gc2hvd1xuICAgICAqXG4gICAgICogQHBhcmFtIHByZXZlbnRDb250cm9sVXBkYXRlIChib29sZWFuKVxuICAgICAqICAtIGlmIHRydWUsIGF1dG8gY29udHJvbHMgc3RhdGUgd2lsbCBub3QgYmUgdXBkYXRlZFxuICAgICAqL1xuICAgIGVsLnN0b3BBdXRvID0gZnVuY3Rpb24ocHJldmVudENvbnRyb2xVcGRhdGUpIHtcbiAgICAgIC8vIGlmIG5vIGludGVydmFsIGV4aXN0cywgZGlzcmVnYXJkIGNhbGxcbiAgICAgIGlmICghc2xpZGVyLmludGVydmFsKSB7IHJldHVybjsgfVxuICAgICAgLy8gY2xlYXIgdGhlIGludGVydmFsXG4gICAgICBjbGVhckludGVydmFsKHNsaWRlci5pbnRlcnZhbCk7XG4gICAgICBzbGlkZXIuaW50ZXJ2YWwgPSBudWxsO1xuXHQgIC8vYWxsYmFjayBmb3Igd2hlbiB0aGUgYXV0byByb3RhdGUgc3RhdHVzIGNoYW5nZXNcblx0ICBzbGlkZXIuc2V0dGluZ3Mub25BdXRvQ2hhbmdlLmNhbGwoZWwsIGZhbHNlKTtcbiAgICAgIC8vIGlmIGF1dG8gY29udHJvbHMgYXJlIGRpc3BsYXllZCBhbmQgcHJldmVudENvbnRyb2xVcGRhdGUgaXMgbm90IHRydWVcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuYXV0b0NvbnRyb2xzICYmIHByZXZlbnRDb250cm9sVXBkYXRlICE9PSB0cnVlKSB7IHVwZGF0ZUF1dG9Db250cm9scygnc3RhcnQnKTsgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGN1cnJlbnQgc2xpZGUgaW5kZXggKHplcm8tYmFzZWQpXG4gICAgICovXG4gICAgZWwuZ2V0Q3VycmVudFNsaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc2xpZGVyLmFjdGl2ZS5pbmRleDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBjdXJyZW50IHNsaWRlIGVsZW1lbnRcbiAgICAgKi9cbiAgICBlbC5nZXRDdXJyZW50U2xpZGVFbGVtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc2xpZGVyLmNoaWxkcmVuLmVxKHNsaWRlci5hY3RpdmUuaW5kZXgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc2xpZGUgZWxlbWVudFxuICAgICAqIEBwYXJhbSBpbmRleCAoaW50KVxuICAgICAqICAtIFRoZSBpbmRleCAoemVyby1iYXNlZCkgb2YgdGhlIGVsZW1lbnQgeW91IHdhbnQgcmV0dXJuZWQuXG4gICAgICovXG4gICAgZWwuZ2V0U2xpZGVFbGVtZW50ID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIHJldHVybiBzbGlkZXIuY2hpbGRyZW4uZXEoaW5kZXgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIG51bWJlciBvZiBzbGlkZXMgaW4gc2hvd1xuICAgICAqL1xuICAgIGVsLmdldFNsaWRlQ291bnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBzbGlkZXIuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gc2xpZGVyLndvcmtpbmcgdmFyaWFibGVcbiAgICAgKi9cbiAgICBlbC5pc1dvcmtpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBzbGlkZXIud29ya2luZztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGFsbCBkeW5hbWljIHNsaWRlciBlbGVtZW50c1xuICAgICAqL1xuICAgIGVsLnJlZHJhd1NsaWRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gcmVzaXplIGFsbCBjaGlsZHJlbiBpbiByYXRpbyB0byBuZXcgc2NyZWVuIHNpemVcbiAgICAgIHNsaWRlci5jaGlsZHJlbi5hZGQoZWwuZmluZCgnLmJ4LWNsb25lJykpLm91dGVyV2lkdGgoZ2V0U2xpZGVXaWR0aCgpKTtcbiAgICAgIC8vIGFkanVzdCB0aGUgaGVpZ2h0XG4gICAgICBzbGlkZXIudmlld3BvcnQuY3NzKCdoZWlnaHQnLCBnZXRWaWV3cG9ydEhlaWdodCgpKTtcbiAgICAgIC8vIHVwZGF0ZSB0aGUgc2xpZGUgcG9zaXRpb25cbiAgICAgIGlmICghc2xpZGVyLnNldHRpbmdzLnRpY2tlcikgeyBzZXRTbGlkZVBvc2l0aW9uKCk7IH1cbiAgICAgIC8vIGlmIGFjdGl2ZS5sYXN0IHdhcyB0cnVlIGJlZm9yZSB0aGUgc2NyZWVuIHJlc2l6ZSwgd2Ugd2FudFxuICAgICAgLy8gdG8ga2VlcCBpdCBsYXN0IG5vIG1hdHRlciB3aGF0IHNjcmVlbiBzaXplIHdlIGVuZCBvblxuICAgICAgaWYgKHNsaWRlci5hY3RpdmUubGFzdCkgeyBzbGlkZXIuYWN0aXZlLmluZGV4ID0gZ2V0UGFnZXJRdHkoKSAtIDE7IH1cbiAgICAgIC8vIGlmIHRoZSBhY3RpdmUgaW5kZXggKHBhZ2UpIG5vIGxvbmdlciBleGlzdHMgZHVlIHRvIHRoZSByZXNpemUsIHNpbXBseSBzZXQgdGhlIGluZGV4IGFzIGxhc3RcbiAgICAgIGlmIChzbGlkZXIuYWN0aXZlLmluZGV4ID49IGdldFBhZ2VyUXR5KCkpIHsgc2xpZGVyLmFjdGl2ZS5sYXN0ID0gdHJ1ZTsgfVxuICAgICAgLy8gaWYgYSBwYWdlciBpcyBiZWluZyBkaXNwbGF5ZWQgYW5kIGEgY3VzdG9tIHBhZ2VyIGlzIG5vdCBiZWluZyB1c2VkLCB1cGRhdGUgaXRcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MucGFnZXIgJiYgIXNsaWRlci5zZXR0aW5ncy5wYWdlckN1c3RvbSkge1xuICAgICAgICBwb3B1bGF0ZVBhZ2VyKCk7XG4gICAgICAgIHVwZGF0ZVBhZ2VyQWN0aXZlKHNsaWRlci5hY3RpdmUuaW5kZXgpO1xuICAgICAgfVxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5hcmlhSGlkZGVuKSB7IGFwcGx5QXJpYUhpZGRlbkF0dHJpYnV0ZXMoc2xpZGVyLmFjdGl2ZS5pbmRleCAqIGdldE1vdmVCeSgpKTsgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95IHRoZSBjdXJyZW50IGluc3RhbmNlIG9mIHRoZSBzbGlkZXIgKHJldmVydCBldmVyeXRoaW5nIGJhY2sgdG8gb3JpZ2luYWwgc3RhdGUpXG4gICAgICovXG4gICAgZWwuZGVzdHJveVNsaWRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gZG9uJ3QgZG8gYW55dGhpbmcgaWYgc2xpZGVyIGhhcyBhbHJlYWR5IGJlZW4gZGVzdHJveWVkXG4gICAgICBpZiAoIXNsaWRlci5pbml0aWFsaXplZCkgeyByZXR1cm47IH1cbiAgICAgIHNsaWRlci5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgJCgnLmJ4LWNsb25lJywgdGhpcykucmVtb3ZlKCk7XG4gICAgICBzbGlkZXIuY2hpbGRyZW4uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQodGhpcykuZGF0YSgnb3JpZ1N0eWxlJykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICQodGhpcykuYXR0cignc3R5bGUnLCAkKHRoaXMpLmRhdGEoJ29yaWdTdHlsZScpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKCQodGhpcykuZGF0YSgnb3JpZ1N0eWxlJykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmF0dHIoJ3N0eWxlJywgJCh0aGlzKS5kYXRhKCdvcmlnU3R5bGUnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKHRoaXMpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICB9XG4gICAgICAkKHRoaXMpLnVud3JhcCgpLnVud3JhcCgpO1xuICAgICAgaWYgKHNsaWRlci5jb250cm9scy5lbCkgeyBzbGlkZXIuY29udHJvbHMuZWwucmVtb3ZlKCk7IH1cbiAgICAgIGlmIChzbGlkZXIuY29udHJvbHMubmV4dCkgeyBzbGlkZXIuY29udHJvbHMubmV4dC5yZW1vdmUoKTsgfVxuICAgICAgaWYgKHNsaWRlci5jb250cm9scy5wcmV2KSB7IHNsaWRlci5jb250cm9scy5wcmV2LnJlbW92ZSgpOyB9XG4gICAgICBpZiAoc2xpZGVyLnBhZ2VyRWwgJiYgc2xpZGVyLnNldHRpbmdzLmNvbnRyb2xzICYmICFzbGlkZXIuc2V0dGluZ3MucGFnZXJDdXN0b20pIHsgc2xpZGVyLnBhZ2VyRWwucmVtb3ZlKCk7IH1cbiAgICAgICQoJy5ieC1jYXB0aW9uJywgdGhpcykucmVtb3ZlKCk7XG4gICAgICBpZiAoc2xpZGVyLmNvbnRyb2xzLmF1dG9FbCkgeyBzbGlkZXIuY29udHJvbHMuYXV0b0VsLnJlbW92ZSgpOyB9XG4gICAgICBjbGVhckludGVydmFsKHNsaWRlci5pbnRlcnZhbCk7XG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLnJlc3BvbnNpdmUpIHsgJCh3aW5kb3cpLnVuYmluZCgncmVzaXplJywgcmVzaXplV2luZG93KTsgfVxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5rZXlib2FyZEVuYWJsZWQpIHsgJChkb2N1bWVudCkudW5iaW5kKCdrZXlkb3duJywga2V5UHJlc3MpOyB9XG4gICAgICAvL3JlbW92ZSBzZWxmIHJlZmVyZW5jZSBpbiBkYXRhXG4gICAgICAkKHRoaXMpLnJlbW92ZURhdGEoJ2J4U2xpZGVyJyk7XG5cdCAgLy8gcmVtb3ZlIGdsb2JhbCB3aW5kb3cgaGFuZGxlcnNcblx0ICAkKHdpbmRvdykub2ZmKCdibHVyJywgd2luZG93Qmx1ckhhbmRsZXIpLm9mZignZm9jdXMnLCB3aW5kb3dGb2N1c0hhbmRsZXIpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZWxvYWQgdGhlIHNsaWRlciAocmV2ZXJ0IGFsbCBET00gY2hhbmdlcywgYW5kIHJlLWluaXRpYWxpemUpXG4gICAgICovXG4gICAgZWwucmVsb2FkU2xpZGVyID0gZnVuY3Rpb24oc2V0dGluZ3MpIHtcbiAgICAgIGlmIChzZXR0aW5ncyAhPT0gdW5kZWZpbmVkKSB7IG9wdGlvbnMgPSBzZXR0aW5nczsgfVxuICAgICAgZWwuZGVzdHJveVNsaWRlcigpO1xuICAgICAgaW5pdCgpO1xuICAgICAgLy9zdG9yZSByZWZlcmVuY2UgdG8gc2VsZiBpbiBvcmRlciB0byBhY2Nlc3MgcHVibGljIGZ1bmN0aW9ucyBsYXRlclxuICAgICAgJChlbCkuZGF0YSgnYnhTbGlkZXInLCB0aGlzKTtcbiAgICB9O1xuXG4gICAgaW5pdCgpO1xuXG4gICAgJChlbCkuZGF0YSgnYnhTbGlkZXInLCB0aGlzKTtcblxuICAgIC8vIHJldHVybnMgdGhlIGN1cnJlbnQgalF1ZXJ5IG9iamVjdFxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG59KShqUXVlcnkpO1xuIiwiLyoqXG4gKiBPd2wgQ2Fyb3VzZWwgdjIuMi4wXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE2IERhdmlkIERldXRzY2hcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL093bENhcm91c2VsMi9Pd2xDYXJvdXNlbDIvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqL1xuLyoqXG4gKiBPd2wgY2Fyb3VzZWxcbiAqIEB2ZXJzaW9uIDIuMS42XG4gKiBAYXV0aG9yIEJhcnRvc3ogV29qY2llY2hvd3NraVxuICogQGF1dGhvciBEYXZpZCBEZXV0c2NoXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIEB0b2RvIExhenkgTG9hZCBJY29uXG4gKiBAdG9kbyBwcmV2ZW50IGFuaW1hdGlvbmVuZCBidWJsaW5nXG4gKiBAdG9kbyBpdGVtc1NjYWxlVXBcbiAqIEB0b2RvIFRlc3QgWmVwdG9cbiAqIEB0b2RvIHN0YWdlUGFkZGluZyBjYWxjdWxhdGUgd3JvbmcgYWN0aXZlIGNsYXNzZXNcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIGNhcm91c2VsLlxuXHQgKiBAY2xhc3MgVGhlIE93bCBDYXJvdXNlbC5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fGpRdWVyeX0gZWxlbWVudCAtIFRoZSBlbGVtZW50IHRvIGNyZWF0ZSB0aGUgY2Fyb3VzZWwgZm9yLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gVGhlIG9wdGlvbnNcblx0ICovXG5cdGZ1bmN0aW9uIE93bChlbGVtZW50LCBvcHRpb25zKSB7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IHNldHRpbmdzIGZvciB0aGUgY2Fyb3VzZWwuXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqL1xuXHRcdHRoaXMuc2V0dGluZ3MgPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBvcHRpb25zIHNldCBieSB0aGUgY2FsbGVyIGluY2x1ZGluZyBkZWZhdWx0cy5cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIE93bC5EZWZhdWx0cywgb3B0aW9ucyk7XG5cblx0XHQvKipcblx0XHQgKiBQbHVnaW4gZWxlbWVudC5cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0dGhpcy4kZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cblx0XHQvKipcblx0XHQgKiBQcm94aWVkIGV2ZW50IGhhbmRsZXJzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9oYW5kbGVycyA9IHt9O1xuXG5cdFx0LyoqXG5cdFx0ICogUmVmZXJlbmNlcyB0byB0aGUgcnVubmluZyBwbHVnaW5zIG9mIHRoaXMgY2Fyb3VzZWwuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX3BsdWdpbnMgPSB7fTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnRseSBzdXBwcmVzc2VkIGV2ZW50cyB0byBwcmV2ZW50IHRoZW0gZnJvbSBiZWVpbmcgcmV0cmlnZ2VyZWQuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX3N1cHJlc3MgPSB7fTtcblxuXHRcdC8qKlxuXHRcdCAqIEFic29sdXRlIGN1cnJlbnQgcG9zaXRpb24uXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX2N1cnJlbnQgPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogQW5pbWF0aW9uIHNwZWVkIGluIG1pbGxpc2Vjb25kcy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fc3BlZWQgPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogQ29vcmRpbmF0ZXMgb2YgYWxsIGl0ZW1zIGluIHBpeGVsLlxuXHRcdCAqIEB0b2RvIFRoZSBuYW1lIG9mIHRoaXMgbWVtYmVyIGlzIG1pc3NsZWFkaW5nLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9jb29yZGluYXRlcyA9IFtdO1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBicmVha3BvaW50LlxuXHRcdCAqIEB0b2RvIFJlYWwgbWVkaWEgcXVlcmllcyB3b3VsZCBiZSBuaWNlLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9icmVha3BvaW50ID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgd2lkdGggb2YgdGhlIHBsdWdpbiBlbGVtZW50LlxuXHRcdCAqL1xuXHRcdHRoaXMuX3dpZHRoID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIEFsbCByZWFsIGl0ZW1zLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9pdGVtcyA9IFtdO1xuXG5cdFx0LyoqXG5cdFx0ICogQWxsIGNsb25lZCBpdGVtcy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fY2xvbmVzID0gW107XG5cblx0XHQvKipcblx0XHQgKiBNZXJnZSB2YWx1ZXMgb2YgYWxsIGl0ZW1zLlxuXHRcdCAqIEB0b2RvIE1heWJlIHRoaXMgY291bGQgYmUgcGFydCBvZiBhIHBsdWdpbi5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fbWVyZ2VycyA9IFtdO1xuXG5cdFx0LyoqXG5cdFx0ICogV2lkdGhzIG9mIGFsbCBpdGVtcy5cblx0XHQgKi9cblx0XHR0aGlzLl93aWR0aHMgPSBbXTtcblxuXHRcdC8qKlxuXHRcdCAqIEludmFsaWRhdGVkIHBhcnRzIHdpdGhpbiB0aGUgdXBkYXRlIHByb2Nlc3MuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX2ludmFsaWRhdGVkID0ge307XG5cblx0XHQvKipcblx0XHQgKiBPcmRlcmVkIGxpc3Qgb2Ygd29ya2VycyBmb3IgdGhlIHVwZGF0ZSBwcm9jZXNzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9waXBlID0gW107XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IHN0YXRlIGluZm9ybWF0aW9uIGZvciB0aGUgZHJhZyBvcGVyYXRpb24uXG5cdFx0ICogQHRvZG8gIzI2MVxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9kcmFnID0ge1xuXHRcdFx0dGltZTogbnVsbCxcblx0XHRcdHRhcmdldDogbnVsbCxcblx0XHRcdHBvaW50ZXI6IG51bGwsXG5cdFx0XHRzdGFnZToge1xuXHRcdFx0XHRzdGFydDogbnVsbCxcblx0XHRcdFx0Y3VycmVudDogbnVsbFxuXHRcdFx0fSxcblx0XHRcdGRpcmVjdGlvbjogbnVsbFxuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IHN0YXRlIGluZm9ybWF0aW9uIGFuZCB0aGVpciB0YWdzLlxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX3N0YXRlcyA9IHtcblx0XHRcdGN1cnJlbnQ6IHt9LFxuXHRcdFx0dGFnczoge1xuXHRcdFx0XHQnaW5pdGlhbGl6aW5nJzogWyAnYnVzeScgXSxcblx0XHRcdFx0J2FuaW1hdGluZyc6IFsgJ2J1c3knIF0sXG5cdFx0XHRcdCdkcmFnZ2luZyc6IFsgJ2ludGVyYWN0aW5nJyBdXG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdCQuZWFjaChbICdvblJlc2l6ZScsICdvblRocm90dGxlZFJlc2l6ZScgXSwgJC5wcm94eShmdW5jdGlvbihpLCBoYW5kbGVyKSB7XG5cdFx0XHR0aGlzLl9oYW5kbGVyc1toYW5kbGVyXSA9ICQucHJveHkodGhpc1toYW5kbGVyXSwgdGhpcyk7XG5cdFx0fSwgdGhpcykpO1xuXG5cdFx0JC5lYWNoKE93bC5QbHVnaW5zLCAkLnByb3h5KGZ1bmN0aW9uKGtleSwgcGx1Z2luKSB7XG5cdFx0XHR0aGlzLl9wbHVnaW5zW2tleS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIGtleS5zbGljZSgxKV1cblx0XHRcdFx0PSBuZXcgcGx1Z2luKHRoaXMpO1xuXHRcdH0sIHRoaXMpKTtcblxuXHRcdCQuZWFjaChPd2wuV29ya2VycywgJC5wcm94eShmdW5jdGlvbihwcmlvcml0eSwgd29ya2VyKSB7XG5cdFx0XHR0aGlzLl9waXBlLnB1c2goe1xuXHRcdFx0XHQnZmlsdGVyJzogd29ya2VyLmZpbHRlcixcblx0XHRcdFx0J3J1bic6ICQucHJveHkod29ya2VyLnJ1biwgdGhpcylcblx0XHRcdH0pO1xuXHRcdH0sIHRoaXMpKTtcblxuXHRcdHRoaXMuc2V0dXAoKTtcblx0XHR0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEZWZhdWx0IG9wdGlvbnMgZm9yIHRoZSBjYXJvdXNlbC5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0T3dsLkRlZmF1bHRzID0ge1xuXHRcdGl0ZW1zOiAzLFxuXHRcdGxvb3A6IGZhbHNlLFxuXHRcdGNlbnRlcjogZmFsc2UsXG5cdFx0cmV3aW5kOiBmYWxzZSxcblxuXHRcdG1vdXNlRHJhZzogdHJ1ZSxcblx0XHR0b3VjaERyYWc6IHRydWUsXG5cdFx0cHVsbERyYWc6IHRydWUsXG5cdFx0ZnJlZURyYWc6IGZhbHNlLFxuXG5cdFx0bWFyZ2luOiAwLFxuXHRcdHN0YWdlUGFkZGluZzogMCxcblxuXHRcdG1lcmdlOiBmYWxzZSxcblx0XHRtZXJnZUZpdDogdHJ1ZSxcblx0XHRhdXRvV2lkdGg6IGZhbHNlLFxuXG5cdFx0c3RhcnRQb3NpdGlvbjogMCxcblx0XHRydGw6IGZhbHNlLFxuXG5cdFx0c21hcnRTcGVlZDogMjUwLFxuXHRcdGZsdWlkU3BlZWQ6IGZhbHNlLFxuXHRcdGRyYWdFbmRTcGVlZDogZmFsc2UsXG5cblx0XHRyZXNwb25zaXZlOiB7fSxcblx0XHRyZXNwb25zaXZlUmVmcmVzaFJhdGU6IDIwMCxcblx0XHRyZXNwb25zaXZlQmFzZUVsZW1lbnQ6IHdpbmRvdyxcblxuXHRcdGZhbGxiYWNrRWFzaW5nOiAnc3dpbmcnLFxuXG5cdFx0aW5mbzogZmFsc2UsXG5cblx0XHRuZXN0ZWRJdGVtU2VsZWN0b3I6IGZhbHNlLFxuXHRcdGl0ZW1FbGVtZW50OiAnZGl2Jyxcblx0XHRzdGFnZUVsZW1lbnQ6ICdkaXYnLFxuXG5cdFx0cmVmcmVzaENsYXNzOiAnb3dsLXJlZnJlc2gnLFxuXHRcdGxvYWRlZENsYXNzOiAnb3dsLWxvYWRlZCcsXG5cdFx0bG9hZGluZ0NsYXNzOiAnb3dsLWxvYWRpbmcnLFxuXHRcdHJ0bENsYXNzOiAnb3dsLXJ0bCcsXG5cdFx0cmVzcG9uc2l2ZUNsYXNzOiAnb3dsLXJlc3BvbnNpdmUnLFxuXHRcdGRyYWdDbGFzczogJ293bC1kcmFnJyxcblx0XHRpdGVtQ2xhc3M6ICdvd2wtaXRlbScsXG5cdFx0c3RhZ2VDbGFzczogJ293bC1zdGFnZScsXG5cdFx0c3RhZ2VPdXRlckNsYXNzOiAnb3dsLXN0YWdlLW91dGVyJyxcblx0XHRncmFiQ2xhc3M6ICdvd2wtZ3JhYidcblx0fTtcblxuXHQvKipcblx0ICogRW51bWVyYXRpb24gZm9yIHdpZHRoLlxuXHQgKiBAcHVibGljXG5cdCAqIEByZWFkb25seVxuXHQgKiBAZW51bSB7U3RyaW5nfVxuXHQgKi9cblx0T3dsLldpZHRoID0ge1xuXHRcdERlZmF1bHQ6ICdkZWZhdWx0Jyxcblx0XHRJbm5lcjogJ2lubmVyJyxcblx0XHRPdXRlcjogJ291dGVyJ1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBFbnVtZXJhdGlvbiBmb3IgdHlwZXMuXG5cdCAqIEBwdWJsaWNcblx0ICogQHJlYWRvbmx5XG5cdCAqIEBlbnVtIHtTdHJpbmd9XG5cdCAqL1xuXHRPd2wuVHlwZSA9IHtcblx0XHRFdmVudDogJ2V2ZW50Jyxcblx0XHRTdGF0ZTogJ3N0YXRlJ1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDb250YWlucyBhbGwgcmVnaXN0ZXJlZCBwbHVnaW5zLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRPd2wuUGx1Z2lucyA9IHt9O1xuXG5cdC8qKlxuXHQgKiBMaXN0IG9mIHdvcmtlcnMgaW52b2x2ZWQgaW4gdGhlIHVwZGF0ZSBwcm9jZXNzLlxuXHQgKi9cblx0T3dsLldvcmtlcnMgPSBbIHtcblx0XHRmaWx0ZXI6IFsgJ3dpZHRoJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLl93aWR0aCA9IHRoaXMuJGVsZW1lbnQud2lkdGgoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ3dpZHRoJywgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oY2FjaGUpIHtcblx0XHRcdGNhY2hlLmN1cnJlbnQgPSB0aGlzLl9pdGVtcyAmJiB0aGlzLl9pdGVtc1t0aGlzLnJlbGF0aXZlKHRoaXMuX2N1cnJlbnQpXTtcblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLiRzdGFnZS5jaGlsZHJlbignLmNsb25lZCcpLnJlbW92ZSgpO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbihjYWNoZSkge1xuXHRcdFx0dmFyIG1hcmdpbiA9IHRoaXMuc2V0dGluZ3MubWFyZ2luIHx8ICcnLFxuXHRcdFx0XHRncmlkID0gIXRoaXMuc2V0dGluZ3MuYXV0b1dpZHRoLFxuXHRcdFx0XHRydGwgPSB0aGlzLnNldHRpbmdzLnJ0bCxcblx0XHRcdFx0Y3NzID0ge1xuXHRcdFx0XHRcdCd3aWR0aCc6ICdhdXRvJyxcblx0XHRcdFx0XHQnbWFyZ2luLWxlZnQnOiBydGwgPyBtYXJnaW4gOiAnJyxcblx0XHRcdFx0XHQnbWFyZ2luLXJpZ2h0JzogcnRsID8gJycgOiBtYXJnaW5cblx0XHRcdFx0fTtcblxuXHRcdFx0IWdyaWQgJiYgdGhpcy4kc3RhZ2UuY2hpbGRyZW4oKS5jc3MoY3NzKTtcblxuXHRcdFx0Y2FjaGUuY3NzID0gY3NzO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbihjYWNoZSkge1xuXHRcdFx0dmFyIHdpZHRoID0gKHRoaXMud2lkdGgoKSAvIHRoaXMuc2V0dGluZ3MuaXRlbXMpLnRvRml4ZWQoMykgLSB0aGlzLnNldHRpbmdzLm1hcmdpbixcblx0XHRcdFx0bWVyZ2UgPSBudWxsLFxuXHRcdFx0XHRpdGVyYXRvciA9IHRoaXMuX2l0ZW1zLmxlbmd0aCxcblx0XHRcdFx0Z3JpZCA9ICF0aGlzLnNldHRpbmdzLmF1dG9XaWR0aCxcblx0XHRcdFx0d2lkdGhzID0gW107XG5cblx0XHRcdGNhY2hlLml0ZW1zID0ge1xuXHRcdFx0XHRtZXJnZTogZmFsc2UsXG5cdFx0XHRcdHdpZHRoOiB3aWR0aFxuXHRcdFx0fTtcblxuXHRcdFx0d2hpbGUgKGl0ZXJhdG9yLS0pIHtcblx0XHRcdFx0bWVyZ2UgPSB0aGlzLl9tZXJnZXJzW2l0ZXJhdG9yXTtcblx0XHRcdFx0bWVyZ2UgPSB0aGlzLnNldHRpbmdzLm1lcmdlRml0ICYmIE1hdGgubWluKG1lcmdlLCB0aGlzLnNldHRpbmdzLml0ZW1zKSB8fCBtZXJnZTtcblxuXHRcdFx0XHRjYWNoZS5pdGVtcy5tZXJnZSA9IG1lcmdlID4gMSB8fCBjYWNoZS5pdGVtcy5tZXJnZTtcblxuXHRcdFx0XHR3aWR0aHNbaXRlcmF0b3JdID0gIWdyaWQgPyB0aGlzLl9pdGVtc1tpdGVyYXRvcl0ud2lkdGgoKSA6IHdpZHRoICogbWVyZ2U7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX3dpZHRocyA9IHdpZHRocztcblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgY2xvbmVzID0gW10sXG5cdFx0XHRcdGl0ZW1zID0gdGhpcy5faXRlbXMsXG5cdFx0XHRcdHNldHRpbmdzID0gdGhpcy5zZXR0aW5ncyxcblx0XHRcdFx0dmlldyA9IE1hdGgubWF4KHNldHRpbmdzLml0ZW1zICogMiwgNCksXG5cdFx0XHRcdHNpemUgPSBNYXRoLmNlaWwoaXRlbXMubGVuZ3RoIC8gMikgKiAyLFxuXHRcdFx0XHRyZXBlYXQgPSBzZXR0aW5ncy5sb29wICYmIGl0ZW1zLmxlbmd0aCA/IHNldHRpbmdzLnJld2luZCA/IHZpZXcgOiBNYXRoLm1heCh2aWV3LCBzaXplKSA6IDAsXG5cdFx0XHRcdGFwcGVuZCA9ICcnLFxuXHRcdFx0XHRwcmVwZW5kID0gJyc7XG5cblx0XHRcdHJlcGVhdCAvPSAyO1xuXG5cdFx0XHR3aGlsZSAocmVwZWF0LS0pIHtcblx0XHRcdFx0Y2xvbmVzLnB1c2godGhpcy5ub3JtYWxpemUoY2xvbmVzLmxlbmd0aCAvIDIsIHRydWUpKTtcblx0XHRcdFx0YXBwZW5kID0gYXBwZW5kICsgaXRlbXNbY2xvbmVzW2Nsb25lcy5sZW5ndGggLSAxXV1bMF0ub3V0ZXJIVE1MO1xuXHRcdFx0XHRjbG9uZXMucHVzaCh0aGlzLm5vcm1hbGl6ZShpdGVtcy5sZW5ndGggLSAxIC0gKGNsb25lcy5sZW5ndGggLSAxKSAvIDIsIHRydWUpKTtcblx0XHRcdFx0cHJlcGVuZCA9IGl0ZW1zW2Nsb25lc1tjbG9uZXMubGVuZ3RoIC0gMV1dWzBdLm91dGVySFRNTCArIHByZXBlbmQ7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2Nsb25lcyA9IGNsb25lcztcblxuXHRcdFx0JChhcHBlbmQpLmFkZENsYXNzKCdjbG9uZWQnKS5hcHBlbmRUbyh0aGlzLiRzdGFnZSk7XG5cdFx0XHQkKHByZXBlbmQpLmFkZENsYXNzKCdjbG9uZWQnKS5wcmVwZW5kVG8odGhpcy4kc3RhZ2UpO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBydGwgPSB0aGlzLnNldHRpbmdzLnJ0bCA/IDEgOiAtMSxcblx0XHRcdFx0c2l6ZSA9IHRoaXMuX2Nsb25lcy5sZW5ndGggKyB0aGlzLl9pdGVtcy5sZW5ndGgsXG5cdFx0XHRcdGl0ZXJhdG9yID0gLTEsXG5cdFx0XHRcdHByZXZpb3VzID0gMCxcblx0XHRcdFx0Y3VycmVudCA9IDAsXG5cdFx0XHRcdGNvb3JkaW5hdGVzID0gW107XG5cblx0XHRcdHdoaWxlICgrK2l0ZXJhdG9yIDwgc2l6ZSkge1xuXHRcdFx0XHRwcmV2aW91cyA9IGNvb3JkaW5hdGVzW2l0ZXJhdG9yIC0gMV0gfHwgMDtcblx0XHRcdFx0Y3VycmVudCA9IHRoaXMuX3dpZHRoc1t0aGlzLnJlbGF0aXZlKGl0ZXJhdG9yKV0gKyB0aGlzLnNldHRpbmdzLm1hcmdpbjtcblx0XHRcdFx0Y29vcmRpbmF0ZXMucHVzaChwcmV2aW91cyArIGN1cnJlbnQgKiBydGwpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBwYWRkaW5nID0gdGhpcy5zZXR0aW5ncy5zdGFnZVBhZGRpbmcsXG5cdFx0XHRcdGNvb3JkaW5hdGVzID0gdGhpcy5fY29vcmRpbmF0ZXMsXG5cdFx0XHRcdGNzcyA9IHtcblx0XHRcdFx0XHQnd2lkdGgnOiBNYXRoLmNlaWwoTWF0aC5hYnMoY29vcmRpbmF0ZXNbY29vcmRpbmF0ZXMubGVuZ3RoIC0gMV0pKSArIHBhZGRpbmcgKiAyLFxuXHRcdFx0XHRcdCdwYWRkaW5nLWxlZnQnOiBwYWRkaW5nIHx8ICcnLFxuXHRcdFx0XHRcdCdwYWRkaW5nLXJpZ2h0JzogcGFkZGluZyB8fCAnJ1xuXHRcdFx0XHR9O1xuXG5cdFx0XHR0aGlzLiRzdGFnZS5jc3MoY3NzKTtcblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ3dpZHRoJywgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oY2FjaGUpIHtcblx0XHRcdHZhciBpdGVyYXRvciA9IHRoaXMuX2Nvb3JkaW5hdGVzLmxlbmd0aCxcblx0XHRcdFx0Z3JpZCA9ICF0aGlzLnNldHRpbmdzLmF1dG9XaWR0aCxcblx0XHRcdFx0aXRlbXMgPSB0aGlzLiRzdGFnZS5jaGlsZHJlbigpO1xuXG5cdFx0XHRpZiAoZ3JpZCAmJiBjYWNoZS5pdGVtcy5tZXJnZSkge1xuXHRcdFx0XHR3aGlsZSAoaXRlcmF0b3ItLSkge1xuXHRcdFx0XHRcdGNhY2hlLmNzcy53aWR0aCA9IHRoaXMuX3dpZHRoc1t0aGlzLnJlbGF0aXZlKGl0ZXJhdG9yKV07XG5cdFx0XHRcdFx0aXRlbXMuZXEoaXRlcmF0b3IpLmNzcyhjYWNoZS5jc3MpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGdyaWQpIHtcblx0XHRcdFx0Y2FjaGUuY3NzLndpZHRoID0gY2FjaGUuaXRlbXMud2lkdGg7XG5cdFx0XHRcdGl0ZW1zLmNzcyhjYWNoZS5jc3MpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnaXRlbXMnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuX2Nvb3JkaW5hdGVzLmxlbmd0aCA8IDEgJiYgdGhpcy4kc3RhZ2UucmVtb3ZlQXR0cignc3R5bGUnKTtcblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ3dpZHRoJywgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oY2FjaGUpIHtcblx0XHRcdGNhY2hlLmN1cnJlbnQgPSBjYWNoZS5jdXJyZW50ID8gdGhpcy4kc3RhZ2UuY2hpbGRyZW4oKS5pbmRleChjYWNoZS5jdXJyZW50KSA6IDA7XG5cdFx0XHRjYWNoZS5jdXJyZW50ID0gTWF0aC5tYXgodGhpcy5taW5pbXVtKCksIE1hdGgubWluKHRoaXMubWF4aW11bSgpLCBjYWNoZS5jdXJyZW50KSk7XG5cdFx0XHR0aGlzLnJlc2V0KGNhY2hlLmN1cnJlbnQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAncG9zaXRpb24nIF0sXG5cdFx0cnVuOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuYW5pbWF0ZSh0aGlzLmNvb3JkaW5hdGVzKHRoaXMuX2N1cnJlbnQpKTtcblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ3dpZHRoJywgJ3Bvc2l0aW9uJywgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcnRsID0gdGhpcy5zZXR0aW5ncy5ydGwgPyAxIDogLTEsXG5cdFx0XHRcdHBhZGRpbmcgPSB0aGlzLnNldHRpbmdzLnN0YWdlUGFkZGluZyAqIDIsXG5cdFx0XHRcdGJlZ2luID0gdGhpcy5jb29yZGluYXRlcyh0aGlzLmN1cnJlbnQoKSkgKyBwYWRkaW5nLFxuXHRcdFx0XHRlbmQgPSBiZWdpbiArIHRoaXMud2lkdGgoKSAqIHJ0bCxcblx0XHRcdFx0aW5uZXIsIG91dGVyLCBtYXRjaGVzID0gW10sIGksIG47XG5cblx0XHRcdGZvciAoaSA9IDAsIG4gPSB0aGlzLl9jb29yZGluYXRlcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0XHRcdFx0aW5uZXIgPSB0aGlzLl9jb29yZGluYXRlc1tpIC0gMV0gfHwgMDtcblx0XHRcdFx0b3V0ZXIgPSBNYXRoLmFicyh0aGlzLl9jb29yZGluYXRlc1tpXSkgKyBwYWRkaW5nICogcnRsO1xuXG5cdFx0XHRcdGlmICgodGhpcy5vcChpbm5lciwgJzw9JywgYmVnaW4pICYmICh0aGlzLm9wKGlubmVyLCAnPicsIGVuZCkpKVxuXHRcdFx0XHRcdHx8ICh0aGlzLm9wKG91dGVyLCAnPCcsIGJlZ2luKSAmJiB0aGlzLm9wKG91dGVyLCAnPicsIGVuZCkpKSB7XG5cdFx0XHRcdFx0bWF0Y2hlcy5wdXNoKGkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuJHN0YWdlLmNoaWxkcmVuKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oJzplcSgnICsgbWF0Y2hlcy5qb2luKCcpLCA6ZXEoJykgKyAnKScpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuXHRcdFx0aWYgKHRoaXMuc2V0dGluZ3MuY2VudGVyKSB7XG5cdFx0XHRcdHRoaXMuJHN0YWdlLmNoaWxkcmVuKCcuY2VudGVyJykucmVtb3ZlQ2xhc3MoJ2NlbnRlcicpO1xuXHRcdFx0XHR0aGlzLiRzdGFnZS5jaGlsZHJlbigpLmVxKHRoaXMuY3VycmVudCgpKS5hZGRDbGFzcygnY2VudGVyJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IF07XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemVzIHRoZSBjYXJvdXNlbC5cblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5lbnRlcignaW5pdGlhbGl6aW5nJyk7XG5cdFx0dGhpcy50cmlnZ2VyKCdpbml0aWFsaXplJyk7XG5cblx0XHR0aGlzLiRlbGVtZW50LnRvZ2dsZUNsYXNzKHRoaXMuc2V0dGluZ3MucnRsQ2xhc3MsIHRoaXMuc2V0dGluZ3MucnRsKTtcblxuXHRcdGlmICh0aGlzLnNldHRpbmdzLmF1dG9XaWR0aCAmJiAhdGhpcy5pcygncHJlLWxvYWRpbmcnKSkge1xuXHRcdFx0dmFyIGltZ3MsIG5lc3RlZFNlbGVjdG9yLCB3aWR0aDtcblx0XHRcdGltZ3MgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ2ltZycpO1xuXHRcdFx0bmVzdGVkU2VsZWN0b3IgPSB0aGlzLnNldHRpbmdzLm5lc3RlZEl0ZW1TZWxlY3RvciA/ICcuJyArIHRoaXMuc2V0dGluZ3MubmVzdGVkSXRlbVNlbGVjdG9yIDogdW5kZWZpbmVkO1xuXHRcdFx0d2lkdGggPSB0aGlzLiRlbGVtZW50LmNoaWxkcmVuKG5lc3RlZFNlbGVjdG9yKS53aWR0aCgpO1xuXG5cdFx0XHRpZiAoaW1ncy5sZW5ndGggJiYgd2lkdGggPD0gMCkge1xuXHRcdFx0XHR0aGlzLnByZWxvYWRBdXRvV2lkdGhJbWFnZXMoaW1ncyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy4kZWxlbWVudC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMubG9hZGluZ0NsYXNzKTtcblxuXHRcdC8vIGNyZWF0ZSBzdGFnZVxuXHRcdHRoaXMuJHN0YWdlID0gJCgnPCcgKyB0aGlzLnNldHRpbmdzLnN0YWdlRWxlbWVudCArICcgY2xhc3M9XCInICsgdGhpcy5zZXR0aW5ncy5zdGFnZUNsYXNzICsgJ1wiLz4nKVxuXHRcdFx0LndyYXAoJzxkaXYgY2xhc3M9XCInICsgdGhpcy5zZXR0aW5ncy5zdGFnZU91dGVyQ2xhc3MgKyAnXCIvPicpO1xuXG5cdFx0Ly8gYXBwZW5kIHN0YWdlXG5cdFx0dGhpcy4kZWxlbWVudC5hcHBlbmQodGhpcy4kc3RhZ2UucGFyZW50KCkpO1xuXG5cdFx0Ly8gYXBwZW5kIGNvbnRlbnRcblx0XHR0aGlzLnJlcGxhY2UodGhpcy4kZWxlbWVudC5jaGlsZHJlbigpLm5vdCh0aGlzLiRzdGFnZS5wYXJlbnQoKSkpO1xuXG5cdFx0Ly8gY2hlY2sgdmlzaWJpbGl0eVxuXHRcdGlmICh0aGlzLiRlbGVtZW50LmlzKCc6dmlzaWJsZScpKSB7XG5cdFx0XHQvLyB1cGRhdGUgdmlld1xuXHRcdFx0dGhpcy5yZWZyZXNoKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGludmFsaWRhdGUgd2lkdGhcblx0XHRcdHRoaXMuaW52YWxpZGF0ZSgnd2lkdGgnKTtcblx0XHR9XG5cblx0XHR0aGlzLiRlbGVtZW50XG5cdFx0XHQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmxvYWRpbmdDbGFzcylcblx0XHRcdC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMubG9hZGVkQ2xhc3MpO1xuXG5cdFx0Ly8gcmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnNcblx0XHR0aGlzLnJlZ2lzdGVyRXZlbnRIYW5kbGVycygpO1xuXG5cdFx0dGhpcy5sZWF2ZSgnaW5pdGlhbGl6aW5nJyk7XG5cdFx0dGhpcy50cmlnZ2VyKCdpbml0aWFsaXplZCcpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXR1cHMgdGhlIGN1cnJlbnQgc2V0dGluZ3MuXG5cdCAqIEB0b2RvIFJlbW92ZSByZXNwb25zaXZlIGNsYXNzZXMuIFdoeSBzaG91bGQgYWRhcHRpdmUgZGVzaWducyBiZSBicm91Z2h0IGludG8gSUU4P1xuXHQgKiBAdG9kbyBTdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzIGJ5IHVzaW5nIGBtYXRjaE1lZGlhYCB3b3VsZCBiZSBuaWNlLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnNldHVwID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHZpZXdwb3J0ID0gdGhpcy52aWV3cG9ydCgpLFxuXHRcdFx0b3ZlcndyaXRlcyA9IHRoaXMub3B0aW9ucy5yZXNwb25zaXZlLFxuXHRcdFx0bWF0Y2ggPSAtMSxcblx0XHRcdHNldHRpbmdzID0gbnVsbDtcblxuXHRcdGlmICghb3ZlcndyaXRlcykge1xuXHRcdFx0c2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgdGhpcy5vcHRpb25zKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JC5lYWNoKG92ZXJ3cml0ZXMsIGZ1bmN0aW9uKGJyZWFrcG9pbnQpIHtcblx0XHRcdFx0aWYgKGJyZWFrcG9pbnQgPD0gdmlld3BvcnQgJiYgYnJlYWtwb2ludCA+IG1hdGNoKSB7XG5cdFx0XHRcdFx0bWF0Y2ggPSBOdW1iZXIoYnJlYWtwb2ludCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMsIG92ZXJ3cml0ZXNbbWF0Y2hdKTtcblx0XHRcdGlmICh0eXBlb2Ygc2V0dGluZ3Muc3RhZ2VQYWRkaW5nID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHNldHRpbmdzLnN0YWdlUGFkZGluZyA9IHNldHRpbmdzLnN0YWdlUGFkZGluZygpO1xuXHRcdFx0fVxuXHRcdFx0ZGVsZXRlIHNldHRpbmdzLnJlc3BvbnNpdmU7XG5cblx0XHRcdC8vIHJlc3BvbnNpdmUgY2xhc3Ncblx0XHRcdGlmIChzZXR0aW5ncy5yZXNwb25zaXZlQ2xhc3MpIHtcblx0XHRcdFx0dGhpcy4kZWxlbWVudC5hdHRyKCdjbGFzcycsXG5cdFx0XHRcdFx0dGhpcy4kZWxlbWVudC5hdHRyKCdjbGFzcycpLnJlcGxhY2UobmV3IFJlZ0V4cCgnKCcgKyB0aGlzLm9wdGlvbnMucmVzcG9uc2l2ZUNsYXNzICsgJy0pXFxcXFMrXFxcXHMnLCAnZycpLCAnJDEnICsgbWF0Y2gpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy50cmlnZ2VyKCdjaGFuZ2UnLCB7IHByb3BlcnR5OiB7IG5hbWU6ICdzZXR0aW5ncycsIHZhbHVlOiBzZXR0aW5ncyB9IH0pO1xuXHRcdHRoaXMuX2JyZWFrcG9pbnQgPSBtYXRjaDtcblx0XHR0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG5cdFx0dGhpcy5pbnZhbGlkYXRlKCdzZXR0aW5ncycpO1xuXHRcdHRoaXMudHJpZ2dlcignY2hhbmdlZCcsIHsgcHJvcGVydHk6IHsgbmFtZTogJ3NldHRpbmdzJywgdmFsdWU6IHRoaXMuc2V0dGluZ3MgfSB9KTtcblx0fTtcblxuXHQvKipcblx0ICogVXBkYXRlcyBvcHRpb24gbG9naWMgaWYgbmVjZXNzZXJ5LlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm9wdGlvbnNMb2dpYyA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh0aGlzLnNldHRpbmdzLmF1dG9XaWR0aCkge1xuXHRcdFx0dGhpcy5zZXR0aW5ncy5zdGFnZVBhZGRpbmcgPSBmYWxzZTtcblx0XHRcdHRoaXMuc2V0dGluZ3MubWVyZ2UgPSBmYWxzZTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFByZXBhcmVzIGFuIGl0ZW0gYmVmb3JlIGFkZC5cblx0ICogQHRvZG8gUmVuYW1lIGV2ZW50IHBhcmFtZXRlciBgY29udGVudGAgdG8gYGl0ZW1gLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEByZXR1cm5zIHtqUXVlcnl8SFRNTEVsZW1lbnR9IC0gVGhlIGl0ZW0gY29udGFpbmVyLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5wcmVwYXJlID0gZnVuY3Rpb24oaXRlbSkge1xuXHRcdHZhciBldmVudCA9IHRoaXMudHJpZ2dlcigncHJlcGFyZScsIHsgY29udGVudDogaXRlbSB9KTtcblxuXHRcdGlmICghZXZlbnQuZGF0YSkge1xuXHRcdFx0ZXZlbnQuZGF0YSA9ICQoJzwnICsgdGhpcy5zZXR0aW5ncy5pdGVtRWxlbWVudCArICcvPicpXG5cdFx0XHRcdC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuaXRlbUNsYXNzKS5hcHBlbmQoaXRlbSlcblx0XHR9XG5cblx0XHR0aGlzLnRyaWdnZXIoJ3ByZXBhcmVkJywgeyBjb250ZW50OiBldmVudC5kYXRhIH0pO1xuXG5cdFx0cmV0dXJuIGV2ZW50LmRhdGE7XG5cdH07XG5cblx0LyoqXG5cdCAqIFVwZGF0ZXMgdGhlIHZpZXcuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdE93bC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGkgPSAwLFxuXHRcdFx0biA9IHRoaXMuX3BpcGUubGVuZ3RoLFxuXHRcdFx0ZmlsdGVyID0gJC5wcm94eShmdW5jdGlvbihwKSB7IHJldHVybiB0aGlzW3BdIH0sIHRoaXMuX2ludmFsaWRhdGVkKSxcblx0XHRcdGNhY2hlID0ge307XG5cblx0XHR3aGlsZSAoaSA8IG4pIHtcblx0XHRcdGlmICh0aGlzLl9pbnZhbGlkYXRlZC5hbGwgfHwgJC5ncmVwKHRoaXMuX3BpcGVbaV0uZmlsdGVyLCBmaWx0ZXIpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dGhpcy5fcGlwZVtpXS5ydW4oY2FjaGUpO1xuXHRcdFx0fVxuXHRcdFx0aSsrO1xuXHRcdH1cblxuXHRcdHRoaXMuX2ludmFsaWRhdGVkID0ge307XG5cblx0XHQhdGhpcy5pcygndmFsaWQnKSAmJiB0aGlzLmVudGVyKCd2YWxpZCcpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSB3aWR0aCBvZiB0aGUgdmlldy5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge093bC5XaWR0aH0gW2RpbWVuc2lvbj1Pd2wuV2lkdGguRGVmYXVsdF0gLSBUaGUgZGltZW5zaW9uIHRvIHJldHVybi5cblx0ICogQHJldHVybnMge051bWJlcn0gLSBUaGUgd2lkdGggb2YgdGhlIHZpZXcgaW4gcGl4ZWwuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLndpZHRoID0gZnVuY3Rpb24oZGltZW5zaW9uKSB7XG5cdFx0ZGltZW5zaW9uID0gZGltZW5zaW9uIHx8IE93bC5XaWR0aC5EZWZhdWx0O1xuXHRcdHN3aXRjaCAoZGltZW5zaW9uKSB7XG5cdFx0XHRjYXNlIE93bC5XaWR0aC5Jbm5lcjpcblx0XHRcdGNhc2UgT3dsLldpZHRoLk91dGVyOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fd2lkdGg7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fd2lkdGggLSB0aGlzLnNldHRpbmdzLnN0YWdlUGFkZGluZyAqIDIgKyB0aGlzLnNldHRpbmdzLm1hcmdpbjtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFJlZnJlc2hlcyB0aGUgY2Fyb3VzZWwgcHJpbWFyaWx5IGZvciBhZGFwdGl2ZSBwdXJwb3Nlcy5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5lbnRlcigncmVmcmVzaGluZycpO1xuXHRcdHRoaXMudHJpZ2dlcigncmVmcmVzaCcpO1xuXG5cdFx0dGhpcy5zZXR1cCgpO1xuXG5cdFx0dGhpcy5vcHRpb25zTG9naWMoKTtcblxuXHRcdHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLnJlZnJlc2hDbGFzcyk7XG5cblx0XHR0aGlzLnVwZGF0ZSgpO1xuXG5cdFx0dGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMucmVmcmVzaENsYXNzKTtcblxuXHRcdHRoaXMubGVhdmUoJ3JlZnJlc2hpbmcnKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3JlZnJlc2hlZCcpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDaGVja3Mgd2luZG93IGByZXNpemVgIGV2ZW50LlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm9uVGhyb3R0bGVkUmVzaXplID0gZnVuY3Rpb24oKSB7XG5cdFx0d2luZG93LmNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVyKTtcblx0XHR0aGlzLnJlc2l6ZVRpbWVyID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5faGFuZGxlcnMub25SZXNpemUsIHRoaXMuc2V0dGluZ3MucmVzcG9uc2l2ZVJlZnJlc2hSYXRlKTtcblx0fTtcblxuXHQvKipcblx0ICogQ2hlY2tzIHdpbmRvdyBgcmVzaXplYCBldmVudC5cblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5vblJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICghdGhpcy5faXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX3dpZHRoID09PSB0aGlzLiRlbGVtZW50LndpZHRoKCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuJGVsZW1lbnQuaXMoJzp2aXNpYmxlJykpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR0aGlzLmVudGVyKCdyZXNpemluZycpO1xuXG5cdFx0aWYgKHRoaXMudHJpZ2dlcigncmVzaXplJykuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcblx0XHRcdHRoaXMubGVhdmUoJ3Jlc2l6aW5nJyk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5pbnZhbGlkYXRlKCd3aWR0aCcpO1xuXG5cdFx0dGhpcy5yZWZyZXNoKCk7XG5cblx0XHR0aGlzLmxlYXZlKCdyZXNpemluZycpO1xuXHRcdHRoaXMudHJpZ2dlcigncmVzaXplZCcpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZWdpc3RlcnMgZXZlbnQgaGFuZGxlcnMuXG5cdCAqIEB0b2RvIENoZWNrIGBtc1BvaW50ZXJFbmFibGVkYFxuXHQgKiBAdG9kbyAjMjYxXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdE93bC5wcm90b3R5cGUucmVnaXN0ZXJFdmVudEhhbmRsZXJzID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCQuc3VwcG9ydC50cmFuc2l0aW9uKSB7XG5cdFx0XHR0aGlzLiRzdGFnZS5vbigkLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQgKyAnLm93bC5jb3JlJywgJC5wcm94eSh0aGlzLm9uVHJhbnNpdGlvbkVuZCwgdGhpcykpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNldHRpbmdzLnJlc3BvbnNpdmUgIT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLm9uKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZXJzLm9uVGhyb3R0bGVkUmVzaXplKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zZXR0aW5ncy5tb3VzZURyYWcpIHtcblx0XHRcdHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmRyYWdDbGFzcyk7XG5cdFx0XHR0aGlzLiRzdGFnZS5vbignbW91c2Vkb3duLm93bC5jb3JlJywgJC5wcm94eSh0aGlzLm9uRHJhZ1N0YXJ0LCB0aGlzKSk7XG5cdFx0XHR0aGlzLiRzdGFnZS5vbignZHJhZ3N0YXJ0Lm93bC5jb3JlIHNlbGVjdHN0YXJ0Lm93bC5jb3JlJywgZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZSB9KTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zZXR0aW5ncy50b3VjaERyYWcpe1xuXHRcdFx0dGhpcy4kc3RhZ2Uub24oJ3RvdWNoc3RhcnQub3dsLmNvcmUnLCAkLnByb3h5KHRoaXMub25EcmFnU3RhcnQsIHRoaXMpKTtcblx0XHRcdHRoaXMuJHN0YWdlLm9uKCd0b3VjaGNhbmNlbC5vd2wuY29yZScsICQucHJveHkodGhpcy5vbkRyYWdFbmQsIHRoaXMpKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgYHRvdWNoc3RhcnRgIGFuZCBgbW91c2Vkb3duYCBldmVudHMuXG5cdCAqIEB0b2RvIEhvcml6b250YWwgc3dpcGUgdGhyZXNob2xkIGFzIG9wdGlvblxuXHQgKiBAdG9kbyAjMjYxXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBUaGUgZXZlbnQgYXJndW1lbnRzLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5vbkRyYWdTdGFydCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIHN0YWdlID0gbnVsbDtcblxuXHRcdGlmIChldmVudC53aGljaCA9PT0gMykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICgkLnN1cHBvcnQudHJhbnNmb3JtKSB7XG5cdFx0XHRzdGFnZSA9IHRoaXMuJHN0YWdlLmNzcygndHJhbnNmb3JtJykucmVwbGFjZSgvLipcXCh8XFwpfCAvZywgJycpLnNwbGl0KCcsJyk7XG5cdFx0XHRzdGFnZSA9IHtcblx0XHRcdFx0eDogc3RhZ2Vbc3RhZ2UubGVuZ3RoID09PSAxNiA/IDEyIDogNF0sXG5cdFx0XHRcdHk6IHN0YWdlW3N0YWdlLmxlbmd0aCA9PT0gMTYgPyAxMyA6IDVdXG5cdFx0XHR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdGFnZSA9IHRoaXMuJHN0YWdlLnBvc2l0aW9uKCk7XG5cdFx0XHRzdGFnZSA9IHtcblx0XHRcdFx0eDogdGhpcy5zZXR0aW5ncy5ydGwgP1xuXHRcdFx0XHRcdHN0YWdlLmxlZnQgKyB0aGlzLiRzdGFnZS53aWR0aCgpIC0gdGhpcy53aWR0aCgpICsgdGhpcy5zZXR0aW5ncy5tYXJnaW4gOlxuXHRcdFx0XHRcdHN0YWdlLmxlZnQsXG5cdFx0XHRcdHk6IHN0YWdlLnRvcFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pcygnYW5pbWF0aW5nJykpIHtcblx0XHRcdCQuc3VwcG9ydC50cmFuc2Zvcm0gPyB0aGlzLmFuaW1hdGUoc3RhZ2UueCkgOiB0aGlzLiRzdGFnZS5zdG9wKClcblx0XHRcdHRoaXMuaW52YWxpZGF0ZSgncG9zaXRpb24nKTtcblx0XHR9XG5cblx0XHR0aGlzLiRlbGVtZW50LnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy5ncmFiQ2xhc3MsIGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nKTtcblxuXHRcdHRoaXMuc3BlZWQoMCk7XG5cblx0XHR0aGlzLl9kcmFnLnRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0XHR0aGlzLl9kcmFnLnRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcblx0XHR0aGlzLl9kcmFnLnN0YWdlLnN0YXJ0ID0gc3RhZ2U7XG5cdFx0dGhpcy5fZHJhZy5zdGFnZS5jdXJyZW50ID0gc3RhZ2U7XG5cdFx0dGhpcy5fZHJhZy5wb2ludGVyID0gdGhpcy5wb2ludGVyKGV2ZW50KTtcblxuXHRcdCQoZG9jdW1lbnQpLm9uKCdtb3VzZXVwLm93bC5jb3JlIHRvdWNoZW5kLm93bC5jb3JlJywgJC5wcm94eSh0aGlzLm9uRHJhZ0VuZCwgdGhpcykpO1xuXG5cdFx0JChkb2N1bWVudCkub25lKCdtb3VzZW1vdmUub3dsLmNvcmUgdG91Y2htb3ZlLm93bC5jb3JlJywgJC5wcm94eShmdW5jdGlvbihldmVudCkge1xuXHRcdFx0dmFyIGRlbHRhID0gdGhpcy5kaWZmZXJlbmNlKHRoaXMuX2RyYWcucG9pbnRlciwgdGhpcy5wb2ludGVyKGV2ZW50KSk7XG5cblx0XHRcdCQoZG9jdW1lbnQpLm9uKCdtb3VzZW1vdmUub3dsLmNvcmUgdG91Y2htb3ZlLm93bC5jb3JlJywgJC5wcm94eSh0aGlzLm9uRHJhZ01vdmUsIHRoaXMpKTtcblxuXHRcdFx0aWYgKE1hdGguYWJzKGRlbHRhLngpIDwgTWF0aC5hYnMoZGVsdGEueSkgJiYgdGhpcy5pcygndmFsaWQnKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdHRoaXMuZW50ZXIoJ2RyYWdnaW5nJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2RyYWcnKTtcblx0XHR9LCB0aGlzKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgdGhlIGB0b3VjaG1vdmVgIGFuZCBgbW91c2Vtb3ZlYCBldmVudHMuXG5cdCAqIEB0b2RvICMyNjFcblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIFRoZSBldmVudCBhcmd1bWVudHMuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm9uRHJhZ01vdmUgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciBtaW5pbXVtID0gbnVsbCxcblx0XHRcdG1heGltdW0gPSBudWxsLFxuXHRcdFx0cHVsbCA9IG51bGwsXG5cdFx0XHRkZWx0YSA9IHRoaXMuZGlmZmVyZW5jZSh0aGlzLl9kcmFnLnBvaW50ZXIsIHRoaXMucG9pbnRlcihldmVudCkpLFxuXHRcdFx0c3RhZ2UgPSB0aGlzLmRpZmZlcmVuY2UodGhpcy5fZHJhZy5zdGFnZS5zdGFydCwgZGVsdGEpO1xuXG5cdFx0aWYgKCF0aGlzLmlzKCdkcmFnZ2luZycpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGlmICh0aGlzLnNldHRpbmdzLmxvb3ApIHtcblx0XHRcdG1pbmltdW0gPSB0aGlzLmNvb3JkaW5hdGVzKHRoaXMubWluaW11bSgpKTtcblx0XHRcdG1heGltdW0gPSB0aGlzLmNvb3JkaW5hdGVzKHRoaXMubWF4aW11bSgpICsgMSkgLSBtaW5pbXVtO1xuXHRcdFx0c3RhZ2UueCA9ICgoKHN0YWdlLnggLSBtaW5pbXVtKSAlIG1heGltdW0gKyBtYXhpbXVtKSAlIG1heGltdW0pICsgbWluaW11bTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWluaW11bSA9IHRoaXMuc2V0dGluZ3MucnRsID8gdGhpcy5jb29yZGluYXRlcyh0aGlzLm1heGltdW0oKSkgOiB0aGlzLmNvb3JkaW5hdGVzKHRoaXMubWluaW11bSgpKTtcblx0XHRcdG1heGltdW0gPSB0aGlzLnNldHRpbmdzLnJ0bCA/IHRoaXMuY29vcmRpbmF0ZXModGhpcy5taW5pbXVtKCkpIDogdGhpcy5jb29yZGluYXRlcyh0aGlzLm1heGltdW0oKSk7XG5cdFx0XHRwdWxsID0gdGhpcy5zZXR0aW5ncy5wdWxsRHJhZyA/IC0xICogZGVsdGEueCAvIDUgOiAwO1xuXHRcdFx0c3RhZ2UueCA9IE1hdGgubWF4KE1hdGgubWluKHN0YWdlLngsIG1pbmltdW0gKyBwdWxsKSwgbWF4aW11bSArIHB1bGwpO1xuXHRcdH1cblxuXHRcdHRoaXMuX2RyYWcuc3RhZ2UuY3VycmVudCA9IHN0YWdlO1xuXG5cdFx0dGhpcy5hbmltYXRlKHN0YWdlLngpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIHRoZSBgdG91Y2hlbmRgIGFuZCBgbW91c2V1cGAgZXZlbnRzLlxuXHQgKiBAdG9kbyAjMjYxXG5cdCAqIEB0b2RvIFRocmVzaG9sZCBmb3IgY2xpY2sgZXZlbnRcblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIFRoZSBldmVudCBhcmd1bWVudHMuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm9uRHJhZ0VuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIGRlbHRhID0gdGhpcy5kaWZmZXJlbmNlKHRoaXMuX2RyYWcucG9pbnRlciwgdGhpcy5wb2ludGVyKGV2ZW50KSksXG5cdFx0XHRzdGFnZSA9IHRoaXMuX2RyYWcuc3RhZ2UuY3VycmVudCxcblx0XHRcdGRpcmVjdGlvbiA9IGRlbHRhLnggPiAwIF4gdGhpcy5zZXR0aW5ncy5ydGwgPyAnbGVmdCcgOiAncmlnaHQnO1xuXG5cdFx0JChkb2N1bWVudCkub2ZmKCcub3dsLmNvcmUnKTtcblxuXHRcdHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmdyYWJDbGFzcyk7XG5cblx0XHRpZiAoZGVsdGEueCAhPT0gMCAmJiB0aGlzLmlzKCdkcmFnZ2luZycpIHx8ICF0aGlzLmlzKCd2YWxpZCcpKSB7XG5cdFx0XHR0aGlzLnNwZWVkKHRoaXMuc2V0dGluZ3MuZHJhZ0VuZFNwZWVkIHx8IHRoaXMuc2V0dGluZ3Muc21hcnRTcGVlZCk7XG5cdFx0XHR0aGlzLmN1cnJlbnQodGhpcy5jbG9zZXN0KHN0YWdlLngsIGRlbHRhLnggIT09IDAgPyBkaXJlY3Rpb24gOiB0aGlzLl9kcmFnLmRpcmVjdGlvbikpO1xuXHRcdFx0dGhpcy5pbnZhbGlkYXRlKCdwb3NpdGlvbicpO1xuXHRcdFx0dGhpcy51cGRhdGUoKTtcblxuXHRcdFx0dGhpcy5fZHJhZy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG5cblx0XHRcdGlmIChNYXRoLmFicyhkZWx0YS54KSA+IDMgfHwgbmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLl9kcmFnLnRpbWUgPiAzMDApIHtcblx0XHRcdFx0dGhpcy5fZHJhZy50YXJnZXQub25lKCdjbGljay5vd2wuY29yZScsIGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2U7IH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICghdGhpcy5pcygnZHJhZ2dpbmcnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMubGVhdmUoJ2RyYWdnaW5nJyk7XG5cdFx0dGhpcy50cmlnZ2VyKCdkcmFnZ2VkJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhlIGNsb3Nlc3QgaXRlbSBmb3IgYSBjb29yZGluYXRlLlxuXHQgKiBAdG9kbyBTZXR0aW5nIGBmcmVlRHJhZ2AgbWFrZXMgYGNsb3Nlc3RgIG5vdCByZXVzYWJsZS4gU2VlICMxNjUuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGNvb3JkaW5hdGUgLSBUaGUgY29vcmRpbmF0ZSBpbiBwaXhlbC5cblx0ICogQHBhcmFtIHtTdHJpbmd9IGRpcmVjdGlvbiAtIFRoZSBkaXJlY3Rpb24gdG8gY2hlY2sgZm9yIHRoZSBjbG9zZXN0IGl0ZW0uIEV0aGVyIGBsZWZ0YCBvciBgcmlnaHRgLlxuXHQgKiBAcmV0dXJuIHtOdW1iZXJ9IC0gVGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBjbG9zZXN0IGl0ZW0uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbihjb29yZGluYXRlLCBkaXJlY3Rpb24pIHtcblx0XHR2YXIgcG9zaXRpb24gPSAtMSxcblx0XHRcdHB1bGwgPSAzMCxcblx0XHRcdHdpZHRoID0gdGhpcy53aWR0aCgpLFxuXHRcdFx0Y29vcmRpbmF0ZXMgPSB0aGlzLmNvb3JkaW5hdGVzKCk7XG5cblx0XHRpZiAoIXRoaXMuc2V0dGluZ3MuZnJlZURyYWcpIHtcblx0XHRcdC8vIGNoZWNrIGNsb3Nlc3QgaXRlbVxuXHRcdFx0JC5lYWNoKGNvb3JkaW5hdGVzLCAkLnByb3h5KGZ1bmN0aW9uKGluZGV4LCB2YWx1ZSkge1xuXHRcdFx0XHQvLyBvbiBhIGxlZnQgcHVsbCwgY2hlY2sgb24gY3VycmVudCBpbmRleFxuXHRcdFx0XHRpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcgJiYgY29vcmRpbmF0ZSA+IHZhbHVlIC0gcHVsbCAmJiBjb29yZGluYXRlIDwgdmFsdWUgKyBwdWxsKSB7XG5cdFx0XHRcdFx0cG9zaXRpb24gPSBpbmRleDtcblx0XHRcdFx0Ly8gb24gYSByaWdodCBwdWxsLCBjaGVjayBvbiBwcmV2aW91cyBpbmRleFxuXHRcdFx0XHQvLyB0byBkbyBzbywgc3VidHJhY3Qgd2lkdGggZnJvbSB2YWx1ZSBhbmQgc2V0IHBvc2l0aW9uID0gaW5kZXggKyAxXG5cdFx0XHRcdH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnICYmIGNvb3JkaW5hdGUgPiB2YWx1ZSAtIHdpZHRoIC0gcHVsbCAmJiBjb29yZGluYXRlIDwgdmFsdWUgLSB3aWR0aCArIHB1bGwpIHtcblx0XHRcdFx0XHRwb3NpdGlvbiA9IGluZGV4ICsgMTtcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLm9wKGNvb3JkaW5hdGUsICc8JywgdmFsdWUpXG5cdFx0XHRcdFx0JiYgdGhpcy5vcChjb29yZGluYXRlLCAnPicsIGNvb3JkaW5hdGVzW2luZGV4ICsgMV0gfHwgdmFsdWUgLSB3aWR0aCkpIHtcblx0XHRcdFx0XHRwb3NpdGlvbiA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gaW5kZXggKyAxIDogaW5kZXg7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHBvc2l0aW9uID09PSAtMTtcblx0XHRcdH0sIHRoaXMpKTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuc2V0dGluZ3MubG9vcCkge1xuXHRcdFx0Ly8gbm9uIGxvb3AgYm91bmRyaWVzXG5cdFx0XHRpZiAodGhpcy5vcChjb29yZGluYXRlLCAnPicsIGNvb3JkaW5hdGVzW3RoaXMubWluaW11bSgpXSkpIHtcblx0XHRcdFx0cG9zaXRpb24gPSBjb29yZGluYXRlID0gdGhpcy5taW5pbXVtKCk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMub3AoY29vcmRpbmF0ZSwgJzwnLCBjb29yZGluYXRlc1t0aGlzLm1heGltdW0oKV0pKSB7XG5cdFx0XHRcdHBvc2l0aW9uID0gY29vcmRpbmF0ZSA9IHRoaXMubWF4aW11bSgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBwb3NpdGlvbjtcblx0fTtcblxuXHQvKipcblx0ICogQW5pbWF0ZXMgdGhlIHN0YWdlLlxuXHQgKiBAdG9kbyAjMjcwXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGNvb3JkaW5hdGUgLSBUaGUgY29vcmRpbmF0ZSBpbiBwaXhlbHMuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmFuaW1hdGUgPSBmdW5jdGlvbihjb29yZGluYXRlKSB7XG5cdFx0dmFyIGFuaW1hdGUgPSB0aGlzLnNwZWVkKCkgPiAwO1xuXG5cdFx0dGhpcy5pcygnYW5pbWF0aW5nJykgJiYgdGhpcy5vblRyYW5zaXRpb25FbmQoKTtcblxuXHRcdGlmIChhbmltYXRlKSB7XG5cdFx0XHR0aGlzLmVudGVyKCdhbmltYXRpbmcnKTtcblx0XHRcdHRoaXMudHJpZ2dlcigndHJhbnNsYXRlJyk7XG5cdFx0fVxuXG5cdFx0aWYgKCQuc3VwcG9ydC50cmFuc2Zvcm0zZCAmJiAkLnN1cHBvcnQudHJhbnNpdGlvbikge1xuXHRcdFx0dGhpcy4kc3RhZ2UuY3NzKHtcblx0XHRcdFx0dHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoJyArIGNvb3JkaW5hdGUgKyAncHgsMHB4LDBweCknLFxuXHRcdFx0XHR0cmFuc2l0aW9uOiAodGhpcy5zcGVlZCgpIC8gMTAwMCkgKyAncydcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBpZiAoYW5pbWF0ZSkge1xuXHRcdFx0dGhpcy4kc3RhZ2UuYW5pbWF0ZSh7XG5cdFx0XHRcdGxlZnQ6IGNvb3JkaW5hdGUgKyAncHgnXG5cdFx0XHR9LCB0aGlzLnNwZWVkKCksIHRoaXMuc2V0dGluZ3MuZmFsbGJhY2tFYXNpbmcsICQucHJveHkodGhpcy5vblRyYW5zaXRpb25FbmQsIHRoaXMpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy4kc3RhZ2UuY3NzKHtcblx0XHRcdFx0bGVmdDogY29vcmRpbmF0ZSArICdweCdcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogQ2hlY2tzIHdoZXRoZXIgdGhlIGNhcm91c2VsIGlzIGluIGEgc3BlY2lmaWMgc3RhdGUgb3Igbm90LlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgLSBUaGUgc3RhdGUgdG8gY2hlY2suXG5cdCAqIEByZXR1cm5zIHtCb29sZWFufSAtIFRoZSBmbGFnIHdoaWNoIGluZGljYXRlcyBpZiB0aGUgY2Fyb3VzZWwgaXMgYnVzeS5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuaXMgPSBmdW5jdGlvbihzdGF0ZSkge1xuXHRcdHJldHVybiB0aGlzLl9zdGF0ZXMuY3VycmVudFtzdGF0ZV0gJiYgdGhpcy5fc3RhdGVzLmN1cnJlbnRbc3RhdGVdID4gMDtcblx0fTtcblxuXHQvKipcblx0ICogU2V0cyB0aGUgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhlIGN1cnJlbnQgaXRlbS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gW3Bvc2l0aW9uXSAtIFRoZSBuZXcgYWJzb2x1dGUgcG9zaXRpb24gb3Igbm90aGluZyB0byBsZWF2ZSBpdCB1bmNoYW5nZWQuXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IC0gVGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IGl0ZW0uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmN1cnJlbnQgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXHRcdGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fY3VycmVudDtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5faXRlbXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdHBvc2l0aW9uID0gdGhpcy5ub3JtYWxpemUocG9zaXRpb24pO1xuXG5cdFx0aWYgKHRoaXMuX2N1cnJlbnQgIT09IHBvc2l0aW9uKSB7XG5cdFx0XHR2YXIgZXZlbnQgPSB0aGlzLnRyaWdnZXIoJ2NoYW5nZScsIHsgcHJvcGVydHk6IHsgbmFtZTogJ3Bvc2l0aW9uJywgdmFsdWU6IHBvc2l0aW9uIH0gfSk7XG5cblx0XHRcdGlmIChldmVudC5kYXRhICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cG9zaXRpb24gPSB0aGlzLm5vcm1hbGl6ZShldmVudC5kYXRhKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fY3VycmVudCA9IHBvc2l0aW9uO1xuXG5cdFx0XHR0aGlzLmludmFsaWRhdGUoJ3Bvc2l0aW9uJyk7XG5cblx0XHRcdHRoaXMudHJpZ2dlcignY2hhbmdlZCcsIHsgcHJvcGVydHk6IHsgbmFtZTogJ3Bvc2l0aW9uJywgdmFsdWU6IHRoaXMuX2N1cnJlbnQgfSB9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5fY3VycmVudDtcblx0fTtcblxuXHQvKipcblx0ICogSW52YWxpZGF0ZXMgdGhlIGdpdmVuIHBhcnQgb2YgdGhlIHVwZGF0ZSByb3V0aW5lLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW3BhcnRdIC0gVGhlIHBhcnQgdG8gaW52YWxpZGF0ZS5cblx0ICogQHJldHVybnMge0FycmF5LjxTdHJpbmc+fSAtIFRoZSBpbnZhbGlkYXRlZCBwYXJ0cy5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuaW52YWxpZGF0ZSA9IGZ1bmN0aW9uKHBhcnQpIHtcblx0XHRpZiAoJC50eXBlKHBhcnQpID09PSAnc3RyaW5nJykge1xuXHRcdFx0dGhpcy5faW52YWxpZGF0ZWRbcGFydF0gPSB0cnVlO1xuXHRcdFx0dGhpcy5pcygndmFsaWQnKSAmJiB0aGlzLmxlYXZlKCd2YWxpZCcpO1xuXHRcdH1cblx0XHRyZXR1cm4gJC5tYXAodGhpcy5faW52YWxpZGF0ZWQsIGZ1bmN0aW9uKHYsIGkpIHsgcmV0dXJuIGkgfSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFJlc2V0cyB0aGUgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhlIGN1cnJlbnQgaXRlbS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gcG9zaXRpb24gLSBUaGUgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhlIG5ldyBpdGVtLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cdFx0cG9zaXRpb24gPSB0aGlzLm5vcm1hbGl6ZShwb3NpdGlvbik7XG5cblx0XHRpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuX3NwZWVkID0gMDtcblx0XHR0aGlzLl9jdXJyZW50ID0gcG9zaXRpb247XG5cblx0XHR0aGlzLnN1cHByZXNzKFsgJ3RyYW5zbGF0ZScsICd0cmFuc2xhdGVkJyBdKTtcblxuXHRcdHRoaXMuYW5pbWF0ZSh0aGlzLmNvb3JkaW5hdGVzKHBvc2l0aW9uKSk7XG5cblx0XHR0aGlzLnJlbGVhc2UoWyAndHJhbnNsYXRlJywgJ3RyYW5zbGF0ZWQnIF0pO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBOb3JtYWxpemVzIGFuIGFic29sdXRlIG9yIGEgcmVsYXRpdmUgcG9zaXRpb24gb2YgYW4gaXRlbS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gcG9zaXRpb24gLSBUaGUgYWJzb2x1dGUgb3IgcmVsYXRpdmUgcG9zaXRpb24gdG8gbm9ybWFsaXplLlxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtyZWxhdGl2ZT1mYWxzZV0gLSBXaGV0aGVyIHRoZSBnaXZlbiBwb3NpdGlvbiBpcyByZWxhdGl2ZSBvciBub3QuXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IC0gVGhlIG5vcm1hbGl6ZWQgcG9zaXRpb24uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBvc2l0aW9uLCByZWxhdGl2ZSkge1xuXHRcdHZhciBuID0gdGhpcy5faXRlbXMubGVuZ3RoLFxuXHRcdFx0bSA9IHJlbGF0aXZlID8gMCA6IHRoaXMuX2Nsb25lcy5sZW5ndGg7XG5cblx0XHRpZiAoIXRoaXMuaXNOdW1lcmljKHBvc2l0aW9uKSB8fCBuIDwgMSkge1xuXHRcdFx0cG9zaXRpb24gPSB1bmRlZmluZWQ7XG5cdFx0fSBlbHNlIGlmIChwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPj0gbiArIG0pIHtcblx0XHRcdHBvc2l0aW9uID0gKChwb3NpdGlvbiAtIG0gLyAyKSAlIG4gKyBuKSAlIG4gKyBtIC8gMjtcblx0XHR9XG5cblx0XHRyZXR1cm4gcG9zaXRpb247XG5cdH07XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGFuIGFic29sdXRlIHBvc2l0aW9uIG9mIGFuIGl0ZW0gaW50byBhIHJlbGF0aXZlIG9uZS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gcG9zaXRpb24gLSBUaGUgYWJzb2x1dGUgcG9zaXRpb24gdG8gY29udmVydC5cblx0ICogQHJldHVybnMge051bWJlcn0gLSBUaGUgY29udmVydGVkIHBvc2l0aW9uLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5yZWxhdGl2ZSA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cdFx0cG9zaXRpb24gLT0gdGhpcy5fY2xvbmVzLmxlbmd0aCAvIDI7XG5cdFx0cmV0dXJuIHRoaXMubm9ybWFsaXplKHBvc2l0aW9uLCB0cnVlKTtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyB0aGUgbWF4aW11bSBwb3NpdGlvbiBmb3IgdGhlIGN1cnJlbnQgaXRlbS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtyZWxhdGl2ZT1mYWxzZV0gLSBXaGV0aGVyIHRvIHJldHVybiBhbiBhYnNvbHV0ZSBwb3NpdGlvbiBvciBhIHJlbGF0aXZlIHBvc2l0aW9uLlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfVxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5tYXhpbXVtID0gZnVuY3Rpb24ocmVsYXRpdmUpIHtcblx0XHR2YXIgc2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLFxuXHRcdFx0bWF4aW11bSA9IHRoaXMuX2Nvb3JkaW5hdGVzLmxlbmd0aCxcblx0XHRcdGl0ZXJhdG9yLFxuXHRcdFx0cmVjaXByb2NhbEl0ZW1zV2lkdGgsXG5cdFx0XHRlbGVtZW50V2lkdGg7XG5cblx0XHRpZiAoc2V0dGluZ3MubG9vcCkge1xuXHRcdFx0bWF4aW11bSA9IHRoaXMuX2Nsb25lcy5sZW5ndGggLyAyICsgdGhpcy5faXRlbXMubGVuZ3RoIC0gMTtcblx0XHR9IGVsc2UgaWYgKHNldHRpbmdzLmF1dG9XaWR0aCB8fCBzZXR0aW5ncy5tZXJnZSkge1xuXHRcdFx0aXRlcmF0b3IgPSB0aGlzLl9pdGVtcy5sZW5ndGg7XG5cdFx0XHRyZWNpcHJvY2FsSXRlbXNXaWR0aCA9IHRoaXMuX2l0ZW1zWy0taXRlcmF0b3JdLndpZHRoKCk7XG5cdFx0XHRlbGVtZW50V2lkdGggPSB0aGlzLiRlbGVtZW50LndpZHRoKCk7XG5cdFx0XHR3aGlsZSAoaXRlcmF0b3ItLSkge1xuXHRcdFx0XHRyZWNpcHJvY2FsSXRlbXNXaWR0aCArPSB0aGlzLl9pdGVtc1tpdGVyYXRvcl0ud2lkdGgoKSArIHRoaXMuc2V0dGluZ3MubWFyZ2luO1xuXHRcdFx0XHRpZiAocmVjaXByb2NhbEl0ZW1zV2lkdGggPiBlbGVtZW50V2lkdGgpIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWF4aW11bSA9IGl0ZXJhdG9yICsgMTtcblx0XHR9IGVsc2UgaWYgKHNldHRpbmdzLmNlbnRlcikge1xuXHRcdFx0bWF4aW11bSA9IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1heGltdW0gPSB0aGlzLl9pdGVtcy5sZW5ndGggLSBzZXR0aW5ncy5pdGVtcztcblx0XHR9XG5cblx0XHRpZiAocmVsYXRpdmUpIHtcblx0XHRcdG1heGltdW0gLT0gdGhpcy5fY2xvbmVzLmxlbmd0aCAvIDI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE1hdGgubWF4KG1heGltdW0sIDApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBtaW5pbXVtIHBvc2l0aW9uIGZvciB0aGUgY3VycmVudCBpdGVtLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW3JlbGF0aXZlPWZhbHNlXSAtIFdoZXRoZXIgdG8gcmV0dXJuIGFuIGFic29sdXRlIHBvc2l0aW9uIG9yIGEgcmVsYXRpdmUgcG9zaXRpb24uXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9XG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm1pbmltdW0gPSBmdW5jdGlvbihyZWxhdGl2ZSkge1xuXHRcdHJldHVybiByZWxhdGl2ZSA/IDAgOiB0aGlzLl9jbG9uZXMubGVuZ3RoIC8gMjtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyBhbiBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgcmVsYXRpdmUgcG9zaXRpb24uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtwb3NpdGlvbl0gLSBUaGUgcmVsYXRpdmUgcG9zaXRpb24gb2YgdGhlIGl0ZW0uXG5cdCAqIEByZXR1cm4ge2pRdWVyeXxBcnJheS48alF1ZXJ5Pn0gLSBUaGUgaXRlbSBhdCB0aGUgZ2l2ZW4gcG9zaXRpb24gb3IgYWxsIGl0ZW1zIGlmIG5vIHBvc2l0aW9uIHdhcyBnaXZlbi5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuaXRlbXMgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXHRcdGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5faXRlbXMuc2xpY2UoKTtcblx0XHR9XG5cblx0XHRwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplKHBvc2l0aW9uLCB0cnVlKTtcblx0XHRyZXR1cm4gdGhpcy5faXRlbXNbcG9zaXRpb25dO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIGFuIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCByZWxhdGl2ZSBwb3NpdGlvbi5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gW3Bvc2l0aW9uXSAtIFRoZSByZWxhdGl2ZSBwb3NpdGlvbiBvZiB0aGUgaXRlbS5cblx0ICogQHJldHVybiB7alF1ZXJ5fEFycmF5LjxqUXVlcnk+fSAtIFRoZSBpdGVtIGF0IHRoZSBnaXZlbiBwb3NpdGlvbiBvciBhbGwgaXRlbXMgaWYgbm8gcG9zaXRpb24gd2FzIGdpdmVuLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5tZXJnZXJzID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0XHRpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX21lcmdlcnMuc2xpY2UoKTtcblx0XHR9XG5cblx0XHRwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplKHBvc2l0aW9uLCB0cnVlKTtcblx0XHRyZXR1cm4gdGhpcy5fbWVyZ2Vyc1twb3NpdGlvbl07XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIGFic29sdXRlIHBvc2l0aW9ucyBvZiBjbG9uZXMgZm9yIGFuIGl0ZW0uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtwb3NpdGlvbl0gLSBUaGUgcmVsYXRpdmUgcG9zaXRpb24gb2YgdGhlIGl0ZW0uXG5cdCAqIEByZXR1cm5zIHtBcnJheS48TnVtYmVyPn0gLSBUaGUgYWJzb2x1dGUgcG9zaXRpb25zIG9mIGNsb25lcyBmb3IgdGhlIGl0ZW0gb3IgYWxsIGlmIG5vIHBvc2l0aW9uIHdhcyBnaXZlbi5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuY2xvbmVzID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0XHR2YXIgb2RkID0gdGhpcy5fY2xvbmVzLmxlbmd0aCAvIDIsXG5cdFx0XHRldmVuID0gb2RkICsgdGhpcy5faXRlbXMubGVuZ3RoLFxuXHRcdFx0bWFwID0gZnVuY3Rpb24oaW5kZXgpIHsgcmV0dXJuIGluZGV4ICUgMiA9PT0gMCA/IGV2ZW4gKyBpbmRleCAvIDIgOiBvZGQgLSAoaW5kZXggKyAxKSAvIDIgfTtcblxuXHRcdGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gJC5tYXAodGhpcy5fY2xvbmVzLCBmdW5jdGlvbih2LCBpKSB7IHJldHVybiBtYXAoaSkgfSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICQubWFwKHRoaXMuX2Nsb25lcywgZnVuY3Rpb24odiwgaSkgeyByZXR1cm4gdiA9PT0gcG9zaXRpb24gPyBtYXAoaSkgOiBudWxsIH0pO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBjdXJyZW50IGFuaW1hdGlvbiBzcGVlZC5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gW3NwZWVkXSAtIFRoZSBhbmltYXRpb24gc3BlZWQgaW4gbWlsbGlzZWNvbmRzIG9yIG5vdGhpbmcgdG8gbGVhdmUgaXQgdW5jaGFuZ2VkLlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSAtIFRoZSBjdXJyZW50IGFuaW1hdGlvbiBzcGVlZCBpbiBtaWxsaXNlY29uZHMuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnNwZWVkID0gZnVuY3Rpb24oc3BlZWQpIHtcblx0XHRpZiAoc3BlZWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5fc3BlZWQgPSBzcGVlZDtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5fc3BlZWQ7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIGNvb3JkaW5hdGUgb2YgYW4gaXRlbS5cblx0ICogQHRvZG8gVGhlIG5hbWUgb2YgdGhpcyBtZXRob2QgaXMgbWlzc2xlYW5kaW5nLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvbiAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgaXRlbSB3aXRoaW4gYG1pbmltdW0oKWAgYW5kIGBtYXhpbXVtKClgLlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfEFycmF5LjxOdW1iZXI+fSAtIFRoZSBjb29yZGluYXRlIG9mIHRoZSBpdGVtIGluIHBpeGVsIG9yIGFsbCBjb29yZGluYXRlcy5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuY29vcmRpbmF0ZXMgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXHRcdHZhciBtdWx0aXBsaWVyID0gMSxcblx0XHRcdG5ld1Bvc2l0aW9uID0gcG9zaXRpb24gLSAxLFxuXHRcdFx0Y29vcmRpbmF0ZTtcblxuXHRcdGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gJC5tYXAodGhpcy5fY29vcmRpbmF0ZXMsICQucHJveHkoZnVuY3Rpb24oY29vcmRpbmF0ZSwgaW5kZXgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29vcmRpbmF0ZXMoaW5kZXgpO1xuXHRcdFx0fSwgdGhpcykpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNldHRpbmdzLmNlbnRlcikge1xuXHRcdFx0aWYgKHRoaXMuc2V0dGluZ3MucnRsKSB7XG5cdFx0XHRcdG11bHRpcGxpZXIgPSAtMTtcblx0XHRcdFx0bmV3UG9zaXRpb24gPSBwb3NpdGlvbiArIDE7XG5cdFx0XHR9XG5cblx0XHRcdGNvb3JkaW5hdGUgPSB0aGlzLl9jb29yZGluYXRlc1twb3NpdGlvbl07XG5cdFx0XHRjb29yZGluYXRlICs9ICh0aGlzLndpZHRoKCkgLSBjb29yZGluYXRlICsgKHRoaXMuX2Nvb3JkaW5hdGVzW25ld1Bvc2l0aW9uXSB8fCAwKSkgLyAyICogbXVsdGlwbGllcjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29vcmRpbmF0ZSA9IHRoaXMuX2Nvb3JkaW5hdGVzW25ld1Bvc2l0aW9uXSB8fCAwO1xuXHRcdH1cblxuXHRcdGNvb3JkaW5hdGUgPSBNYXRoLmNlaWwoY29vcmRpbmF0ZSk7XG5cblx0XHRyZXR1cm4gY29vcmRpbmF0ZTtcblx0fTtcblxuXHQvKipcblx0ICogQ2FsY3VsYXRlcyB0aGUgc3BlZWQgZm9yIGEgdHJhbnNsYXRpb24uXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGZyb20gLSBUaGUgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhlIHN0YXJ0IGl0ZW0uXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB0byAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgdGFyZ2V0IGl0ZW0uXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbZmFjdG9yPXVuZGVmaW5lZF0gLSBUaGUgdGltZSBmYWN0b3IgaW4gbWlsbGlzZWNvbmRzLlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSAtIFRoZSB0aW1lIGluIG1pbGxpc2Vjb25kcyBmb3IgdGhlIHRyYW5zbGF0aW9uLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5kdXJhdGlvbiA9IGZ1bmN0aW9uKGZyb20sIHRvLCBmYWN0b3IpIHtcblx0XHRpZiAoZmFjdG9yID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHRyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoTWF0aC5hYnModG8gLSBmcm9tKSwgMSksIDYpICogTWF0aC5hYnMoKGZhY3RvciB8fCB0aGlzLnNldHRpbmdzLnNtYXJ0U3BlZWQpKTtcblx0fTtcblxuXHQvKipcblx0ICogU2xpZGVzIHRvIHRoZSBzcGVjaWZpZWQgaXRlbS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gcG9zaXRpb24gLSBUaGUgcG9zaXRpb24gb2YgdGhlIGl0ZW0uXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWRdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cblx0ICovXG5cdE93bC5wcm90b3R5cGUudG8gPSBmdW5jdGlvbihwb3NpdGlvbiwgc3BlZWQpIHtcblx0XHR2YXIgY3VycmVudCA9IHRoaXMuY3VycmVudCgpLFxuXHRcdFx0cmV2ZXJ0ID0gbnVsbCxcblx0XHRcdGRpc3RhbmNlID0gcG9zaXRpb24gLSB0aGlzLnJlbGF0aXZlKGN1cnJlbnQpLFxuXHRcdFx0ZGlyZWN0aW9uID0gKGRpc3RhbmNlID4gMCkgLSAoZGlzdGFuY2UgPCAwKSxcblx0XHRcdGl0ZW1zID0gdGhpcy5faXRlbXMubGVuZ3RoLFxuXHRcdFx0bWluaW11bSA9IHRoaXMubWluaW11bSgpLFxuXHRcdFx0bWF4aW11bSA9IHRoaXMubWF4aW11bSgpO1xuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MubG9vcCkge1xuXHRcdFx0aWYgKCF0aGlzLnNldHRpbmdzLnJld2luZCAmJiBNYXRoLmFicyhkaXN0YW5jZSkgPiBpdGVtcyAvIDIpIHtcblx0XHRcdFx0ZGlzdGFuY2UgKz0gZGlyZWN0aW9uICogLTEgKiBpdGVtcztcblx0XHRcdH1cblxuXHRcdFx0cG9zaXRpb24gPSBjdXJyZW50ICsgZGlzdGFuY2U7XG5cdFx0XHRyZXZlcnQgPSAoKHBvc2l0aW9uIC0gbWluaW11bSkgJSBpdGVtcyArIGl0ZW1zKSAlIGl0ZW1zICsgbWluaW11bTtcblxuXHRcdFx0aWYgKHJldmVydCAhPT0gcG9zaXRpb24gJiYgcmV2ZXJ0IC0gZGlzdGFuY2UgPD0gbWF4aW11bSAmJiByZXZlcnQgLSBkaXN0YW5jZSA+IDApIHtcblx0XHRcdFx0Y3VycmVudCA9IHJldmVydCAtIGRpc3RhbmNlO1xuXHRcdFx0XHRwb3NpdGlvbiA9IHJldmVydDtcblx0XHRcdFx0dGhpcy5yZXNldChjdXJyZW50KTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHRoaXMuc2V0dGluZ3MucmV3aW5kKSB7XG5cdFx0XHRtYXhpbXVtICs9IDE7XG5cdFx0XHRwb3NpdGlvbiA9IChwb3NpdGlvbiAlIG1heGltdW0gKyBtYXhpbXVtKSAlIG1heGltdW07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBvc2l0aW9uID0gTWF0aC5tYXgobWluaW11bSwgTWF0aC5taW4obWF4aW11bSwgcG9zaXRpb24pKTtcblx0XHR9XG5cblx0XHR0aGlzLnNwZWVkKHRoaXMuZHVyYXRpb24oY3VycmVudCwgcG9zaXRpb24sIHNwZWVkKSk7XG5cdFx0dGhpcy5jdXJyZW50KHBvc2l0aW9uKTtcblxuXHRcdGlmICh0aGlzLiRlbGVtZW50LmlzKCc6dmlzaWJsZScpKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogU2xpZGVzIHRvIHRoZSBuZXh0IGl0ZW0uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtzcGVlZF0gLSBUaGUgdGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIHRoZSB0cmFuc2l0aW9uLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oc3BlZWQpIHtcblx0XHRzcGVlZCA9IHNwZWVkIHx8IGZhbHNlO1xuXHRcdHRoaXMudG8odGhpcy5yZWxhdGl2ZSh0aGlzLmN1cnJlbnQoKSkgKyAxLCBzcGVlZCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNsaWRlcyB0byB0aGUgcHJldmlvdXMgaXRlbS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gW3NwZWVkXSAtIFRoZSB0aW1lIGluIG1pbGxpc2Vjb25kcyBmb3IgdGhlIHRyYW5zaXRpb24uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbihzcGVlZCkge1xuXHRcdHNwZWVkID0gc3BlZWQgfHwgZmFsc2U7XG5cdFx0dGhpcy50byh0aGlzLnJlbGF0aXZlKHRoaXMuY3VycmVudCgpKSAtIDEsIHNwZWVkKTtcblx0fTtcblxuXHQvKipcblx0ICogSGFuZGxlcyB0aGUgZW5kIG9mIGFuIGFuaW1hdGlvbi5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIFRoZSBldmVudCBhcmd1bWVudHMuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm9uVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cblx0XHQvLyBpZiBjc3MyIGFuaW1hdGlvbiB0aGVuIGV2ZW50IG9iamVjdCBpcyB1bmRlZmluZWRcblx0XHRpZiAoZXZlbnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdC8vIENhdGNoIG9ubHkgb3dsLXN0YWdlIHRyYW5zaXRpb25FbmQgZXZlbnRcblx0XHRcdGlmICgoZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQgfHwgZXZlbnQub3JpZ2luYWxUYXJnZXQpICE9PSB0aGlzLiRzdGFnZS5nZXQoMCkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMubGVhdmUoJ2FuaW1hdGluZycpO1xuXHRcdHRoaXMudHJpZ2dlcigndHJhbnNsYXRlZCcpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHZpZXdwb3J0IHdpZHRoLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEByZXR1cm4ge051bWJlcn0gLSBUaGUgd2lkdGggaW4gcGl4ZWwuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnZpZXdwb3J0ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHdpZHRoO1xuXHRcdGlmICh0aGlzLm9wdGlvbnMucmVzcG9uc2l2ZUJhc2VFbGVtZW50ICE9PSB3aW5kb3cpIHtcblx0XHRcdHdpZHRoID0gJCh0aGlzLm9wdGlvbnMucmVzcG9uc2l2ZUJhc2VFbGVtZW50KS53aWR0aCgpO1xuXHRcdH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGgpIHtcblx0XHRcdHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cdFx0fSBlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSB7XG5cdFx0XHR3aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgJ0NhbiBub3QgZGV0ZWN0IHZpZXdwb3J0IHdpZHRoLic7XG5cdFx0fVxuXHRcdHJldHVybiB3aWR0aDtcblx0fTtcblxuXHQvKipcblx0ICogUmVwbGFjZXMgdGhlIGN1cnJlbnQgY29udGVudC5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fGpRdWVyeXxTdHJpbmd9IGNvbnRlbnQgLSBUaGUgbmV3IGNvbnRlbnQuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbihjb250ZW50KSB7XG5cdFx0dGhpcy4kc3RhZ2UuZW1wdHkoKTtcblx0XHR0aGlzLl9pdGVtcyA9IFtdO1xuXG5cdFx0aWYgKGNvbnRlbnQpIHtcblx0XHRcdGNvbnRlbnQgPSAoY29udGVudCBpbnN0YW5jZW9mIGpRdWVyeSkgPyBjb250ZW50IDogJChjb250ZW50KTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zZXR0aW5ncy5uZXN0ZWRJdGVtU2VsZWN0b3IpIHtcblx0XHRcdGNvbnRlbnQgPSBjb250ZW50LmZpbmQoJy4nICsgdGhpcy5zZXR0aW5ncy5uZXN0ZWRJdGVtU2VsZWN0b3IpO1xuXHRcdH1cblxuXHRcdGNvbnRlbnQuZmlsdGVyKGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMubm9kZVR5cGUgPT09IDE7XG5cdFx0fSkuZWFjaCgkLnByb3h5KGZ1bmN0aW9uKGluZGV4LCBpdGVtKSB7XG5cdFx0XHRpdGVtID0gdGhpcy5wcmVwYXJlKGl0ZW0pO1xuXHRcdFx0dGhpcy4kc3RhZ2UuYXBwZW5kKGl0ZW0pO1xuXHRcdFx0dGhpcy5faXRlbXMucHVzaChpdGVtKTtcblx0XHRcdHRoaXMuX21lcmdlcnMucHVzaChpdGVtLmZpbmQoJ1tkYXRhLW1lcmdlXScpLmFkZEJhY2soJ1tkYXRhLW1lcmdlXScpLmF0dHIoJ2RhdGEtbWVyZ2UnKSAqIDEgfHwgMSk7XG5cdFx0fSwgdGhpcykpO1xuXG5cdFx0dGhpcy5yZXNldCh0aGlzLmlzTnVtZXJpYyh0aGlzLnNldHRpbmdzLnN0YXJ0UG9zaXRpb24pID8gdGhpcy5zZXR0aW5ncy5zdGFydFBvc2l0aW9uIDogMCk7XG5cblx0XHR0aGlzLmludmFsaWRhdGUoJ2l0ZW1zJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEFkZHMgYW4gaXRlbS5cblx0ICogQHRvZG8gVXNlIGBpdGVtYCBpbnN0ZWFkIG9mIGBjb250ZW50YCBmb3IgdGhlIGV2ZW50IGFyZ3VtZW50cy5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fGpRdWVyeXxTdHJpbmd9IGNvbnRlbnQgLSBUaGUgaXRlbSBjb250ZW50IHRvIGFkZC5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtwb3NpdGlvbl0gLSBUaGUgcmVsYXRpdmUgcG9zaXRpb24gYXQgd2hpY2ggdG8gaW5zZXJ0IHRoZSBpdGVtIG90aGVyd2lzZSB0aGUgaXRlbSB3aWxsIGJlIGFkZGVkIHRvIHRoZSBlbmQuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGNvbnRlbnQsIHBvc2l0aW9uKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSB0aGlzLnJlbGF0aXZlKHRoaXMuX2N1cnJlbnQpO1xuXG5cdFx0cG9zaXRpb24gPSBwb3NpdGlvbiA9PT0gdW5kZWZpbmVkID8gdGhpcy5faXRlbXMubGVuZ3RoIDogdGhpcy5ub3JtYWxpemUocG9zaXRpb24sIHRydWUpO1xuXHRcdGNvbnRlbnQgPSBjb250ZW50IGluc3RhbmNlb2YgalF1ZXJ5ID8gY29udGVudCA6ICQoY29udGVudCk7XG5cblx0XHR0aGlzLnRyaWdnZXIoJ2FkZCcsIHsgY29udGVudDogY29udGVudCwgcG9zaXRpb246IHBvc2l0aW9uIH0pO1xuXG5cdFx0Y29udGVudCA9IHRoaXMucHJlcGFyZShjb250ZW50KTtcblxuXHRcdGlmICh0aGlzLl9pdGVtcy5sZW5ndGggPT09IDAgfHwgcG9zaXRpb24gPT09IHRoaXMuX2l0ZW1zLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5faXRlbXMubGVuZ3RoID09PSAwICYmIHRoaXMuJHN0YWdlLmFwcGVuZChjb250ZW50KTtcblx0XHRcdHRoaXMuX2l0ZW1zLmxlbmd0aCAhPT0gMCAmJiB0aGlzLl9pdGVtc1twb3NpdGlvbiAtIDFdLmFmdGVyKGNvbnRlbnQpO1xuXHRcdFx0dGhpcy5faXRlbXMucHVzaChjb250ZW50KTtcblx0XHRcdHRoaXMuX21lcmdlcnMucHVzaChjb250ZW50LmZpbmQoJ1tkYXRhLW1lcmdlXScpLmFkZEJhY2soJ1tkYXRhLW1lcmdlXScpLmF0dHIoJ2RhdGEtbWVyZ2UnKSAqIDEgfHwgMSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2l0ZW1zW3Bvc2l0aW9uXS5iZWZvcmUoY29udGVudCk7XG5cdFx0XHR0aGlzLl9pdGVtcy5zcGxpY2UocG9zaXRpb24sIDAsIGNvbnRlbnQpO1xuXHRcdFx0dGhpcy5fbWVyZ2Vycy5zcGxpY2UocG9zaXRpb24sIDAsIGNvbnRlbnQuZmluZCgnW2RhdGEtbWVyZ2VdJykuYWRkQmFjaygnW2RhdGEtbWVyZ2VdJykuYXR0cignZGF0YS1tZXJnZScpICogMSB8fCAxKTtcblx0XHR9XG5cblx0XHR0aGlzLl9pdGVtc1tjdXJyZW50XSAmJiB0aGlzLnJlc2V0KHRoaXMuX2l0ZW1zW2N1cnJlbnRdLmluZGV4KCkpO1xuXG5cdFx0dGhpcy5pbnZhbGlkYXRlKCdpdGVtcycpO1xuXG5cdFx0dGhpcy50cmlnZ2VyKCdhZGRlZCcsIHsgY29udGVudDogY29udGVudCwgcG9zaXRpb246IHBvc2l0aW9uIH0pO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZW1vdmVzIGFuIGl0ZW0gYnkgaXRzIHBvc2l0aW9uLlxuXHQgKiBAdG9kbyBVc2UgYGl0ZW1gIGluc3RlYWQgb2YgYGNvbnRlbnRgIGZvciB0aGUgZXZlbnQgYXJndW1lbnRzLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvbiAtIFRoZSByZWxhdGl2ZSBwb3NpdGlvbiBvZiB0aGUgaXRlbSB0byByZW1vdmUuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cdFx0cG9zaXRpb24gPSB0aGlzLm5vcm1hbGl6ZShwb3NpdGlvbiwgdHJ1ZSk7XG5cblx0XHRpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMudHJpZ2dlcigncmVtb3ZlJywgeyBjb250ZW50OiB0aGlzLl9pdGVtc1twb3NpdGlvbl0sIHBvc2l0aW9uOiBwb3NpdGlvbiB9KTtcblxuXHRcdHRoaXMuX2l0ZW1zW3Bvc2l0aW9uXS5yZW1vdmUoKTtcblx0XHR0aGlzLl9pdGVtcy5zcGxpY2UocG9zaXRpb24sIDEpO1xuXHRcdHRoaXMuX21lcmdlcnMuc3BsaWNlKHBvc2l0aW9uLCAxKTtcblxuXHRcdHRoaXMuaW52YWxpZGF0ZSgnaXRlbXMnKTtcblxuXHRcdHRoaXMudHJpZ2dlcigncmVtb3ZlZCcsIHsgY29udGVudDogbnVsbCwgcG9zaXRpb246IHBvc2l0aW9uIH0pO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBQcmVsb2FkcyBpbWFnZXMgd2l0aCBhdXRvIHdpZHRoLlxuXHQgKiBAdG9kbyBSZXBsYWNlIGJ5IGEgbW9yZSBnZW5lcmljIGFwcHJvYWNoXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdE93bC5wcm90b3R5cGUucHJlbG9hZEF1dG9XaWR0aEltYWdlcyA9IGZ1bmN0aW9uKGltYWdlcykge1xuXHRcdGltYWdlcy5lYWNoKCQucHJveHkoZnVuY3Rpb24oaSwgZWxlbWVudCkge1xuXHRcdFx0dGhpcy5lbnRlcigncHJlLWxvYWRpbmcnKTtcblx0XHRcdGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuXHRcdFx0JChuZXcgSW1hZ2UoKSkub25lKCdsb2FkJywgJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGVsZW1lbnQuYXR0cignc3JjJywgZS50YXJnZXQuc3JjKTtcblx0XHRcdFx0ZWxlbWVudC5jc3MoJ29wYWNpdHknLCAxKTtcblx0XHRcdFx0dGhpcy5sZWF2ZSgncHJlLWxvYWRpbmcnKTtcblx0XHRcdFx0IXRoaXMuaXMoJ3ByZS1sb2FkaW5nJykgJiYgIXRoaXMuaXMoJ2luaXRpYWxpemluZycpICYmIHRoaXMucmVmcmVzaCgpO1xuXHRcdFx0fSwgdGhpcykpLmF0dHIoJ3NyYycsIGVsZW1lbnQuYXR0cignc3JjJykgfHwgZWxlbWVudC5hdHRyKCdkYXRhLXNyYycpIHx8IGVsZW1lbnQuYXR0cignZGF0YS1zcmMtcmV0aW5hJykpO1xuXHRcdH0sIHRoaXMpKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVzdHJveXMgdGhlIGNhcm91c2VsLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblxuXHRcdHRoaXMuJGVsZW1lbnQub2ZmKCcub3dsLmNvcmUnKTtcblx0XHR0aGlzLiRzdGFnZS5vZmYoJy5vd2wuY29yZScpO1xuXHRcdCQoZG9jdW1lbnQpLm9mZignLm93bC5jb3JlJyk7XG5cblx0XHRpZiAodGhpcy5zZXR0aW5ncy5yZXNwb25zaXZlICE9PSBmYWxzZSkge1xuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVyKTtcblx0XHRcdHRoaXMub2ZmKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZXJzLm9uVGhyb3R0bGVkUmVzaXplKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpIGluIHRoaXMuX3BsdWdpbnMpIHtcblx0XHRcdHRoaXMuX3BsdWdpbnNbaV0uZGVzdHJveSgpO1xuXHRcdH1cblxuXHRcdHRoaXMuJHN0YWdlLmNoaWxkcmVuKCcuY2xvbmVkJykucmVtb3ZlKCk7XG5cblx0XHR0aGlzLiRzdGFnZS51bndyYXAoKTtcblx0XHR0aGlzLiRzdGFnZS5jaGlsZHJlbigpLmNvbnRlbnRzKCkudW53cmFwKCk7XG5cdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oKS51bndyYXAoKTtcblxuXHRcdHRoaXMuJGVsZW1lbnRcblx0XHRcdC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMucmVmcmVzaENsYXNzKVxuXHRcdFx0LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5sb2FkaW5nQ2xhc3MpXG5cdFx0XHQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmxvYWRlZENsYXNzKVxuXHRcdFx0LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5ydGxDbGFzcylcblx0XHRcdC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZHJhZ0NsYXNzKVxuXHRcdFx0LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5ncmFiQ2xhc3MpXG5cdFx0XHQuYXR0cignY2xhc3MnLCB0aGlzLiRlbGVtZW50LmF0dHIoJ2NsYXNzJykucmVwbGFjZShuZXcgUmVnRXhwKHRoaXMub3B0aW9ucy5yZXNwb25zaXZlQ2xhc3MgKyAnLVxcXFxTK1xcXFxzJywgJ2cnKSwgJycpKVxuXHRcdFx0LnJlbW92ZURhdGEoJ293bC5jYXJvdXNlbCcpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBPcGVyYXRvcnMgdG8gY2FsY3VsYXRlIHJpZ2h0LXRvLWxlZnQgYW5kIGxlZnQtdG8tcmlnaHQuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFthXSAtIFRoZSBsZWZ0IHNpZGUgb3BlcmFuZC5cblx0ICogQHBhcmFtIHtTdHJpbmd9IFtvXSAtIFRoZSBvcGVyYXRvci5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtiXSAtIFRoZSByaWdodCBzaWRlIG9wZXJhbmQuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm9wID0gZnVuY3Rpb24oYSwgbywgYikge1xuXHRcdHZhciBydGwgPSB0aGlzLnNldHRpbmdzLnJ0bDtcblx0XHRzd2l0Y2ggKG8pIHtcblx0XHRcdGNhc2UgJzwnOlxuXHRcdFx0XHRyZXR1cm4gcnRsID8gYSA+IGIgOiBhIDwgYjtcblx0XHRcdGNhc2UgJz4nOlxuXHRcdFx0XHRyZXR1cm4gcnRsID8gYSA8IGIgOiBhID4gYjtcblx0XHRcdGNhc2UgJz49Jzpcblx0XHRcdFx0cmV0dXJuIHJ0bCA/IGEgPD0gYiA6IGEgPj0gYjtcblx0XHRcdGNhc2UgJzw9Jzpcblx0XHRcdFx0cmV0dXJuIHJ0bCA/IGEgPj0gYiA6IGEgPD0gYjtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogQXR0YWNoZXMgdG8gYW4gaW50ZXJuYWwgZXZlbnQuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBldmVudCBzb3VyY2UuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCAtIFRoZSBldmVudCBuYW1lLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciAtIFRoZSBldmVudCBoYW5kbGVyIHRvIGF0dGFjaC5cblx0ICogQHBhcmFtIHtCb29sZWFufSBjYXB0dXJlIC0gV2V0aGVyIHRoZSBldmVudCBzaG91bGQgYmUgaGFuZGxlZCBhdCB0aGUgY2FwdHVyaW5nIHBoYXNlIG9yIG5vdC5cblx0ICovXG5cdE93bC5wcm90b3R5cGUub24gPSBmdW5jdGlvbihlbGVtZW50LCBldmVudCwgbGlzdGVuZXIsIGNhcHR1cmUpIHtcblx0XHRpZiAoZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBjYXB0dXJlKTtcblx0XHR9IGVsc2UgaWYgKGVsZW1lbnQuYXR0YWNoRXZlbnQpIHtcblx0XHRcdGVsZW1lbnQuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBsaXN0ZW5lcik7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZXRhY2hlcyBmcm9tIGFuIGludGVybmFsIGV2ZW50LlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZXZlbnQgc291cmNlLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgLSBUaGUgZXZlbnQgbmFtZS5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgLSBUaGUgYXR0YWNoZWQgZXZlbnQgaGFuZGxlciB0byBkZXRhY2guXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gY2FwdHVyZSAtIFdldGhlciB0aGUgYXR0YWNoZWQgZXZlbnQgaGFuZGxlciB3YXMgcmVnaXN0ZXJlZCBhcyBhIGNhcHR1cmluZyBsaXN0ZW5lciBvciBub3QuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKGVsZW1lbnQsIGV2ZW50LCBsaXN0ZW5lciwgY2FwdHVyZSkge1xuXHRcdGlmIChlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGNhcHR1cmUpO1xuXHRcdH0gZWxzZSBpZiAoZWxlbWVudC5kZXRhY2hFdmVudCkge1xuXHRcdFx0ZWxlbWVudC5kZXRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFRyaWdnZXJzIGEgcHVibGljIGV2ZW50LlxuXHQgKiBAdG9kbyBSZW1vdmUgYHN0YXR1c2AsIGByZWxhdGVkVGFyZ2V0YCBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gVGhlIGV2ZW50IG5hbWUuXG5cdCAqIEBwYXJhbSB7Kn0gW2RhdGE9bnVsbF0gLSBUaGUgZXZlbnQgZGF0YS5cblx0ICogQHBhcmFtIHtTdHJpbmd9IFtuYW1lc3BhY2U9Y2Fyb3VzZWxdIC0gVGhlIGV2ZW50IG5hbWVzcGFjZS5cblx0ICogQHBhcmFtIHtTdHJpbmd9IFtzdGF0ZV0gLSBUaGUgc3RhdGUgd2hpY2ggaXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBldmVudC5cblx0ICogQHBhcmFtIHtCb29sZWFufSBbZW50ZXI9ZmFsc2VdIC0gSW5kaWNhdGVzIGlmIHRoZSBjYWxsIGVudGVycyB0aGUgc3BlY2lmaWVkIHN0YXRlIG9yIG5vdC5cblx0ICogQHJldHVybnMge0V2ZW50fSAtIFRoZSBldmVudCBhcmd1bWVudHMuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbihuYW1lLCBkYXRhLCBuYW1lc3BhY2UsIHN0YXRlLCBlbnRlcikge1xuXHRcdHZhciBzdGF0dXMgPSB7XG5cdFx0XHRpdGVtOiB7IGNvdW50OiB0aGlzLl9pdGVtcy5sZW5ndGgsIGluZGV4OiB0aGlzLmN1cnJlbnQoKSB9XG5cdFx0fSwgaGFuZGxlciA9ICQuY2FtZWxDYXNlKFxuXHRcdFx0JC5ncmVwKFsgJ29uJywgbmFtZSwgbmFtZXNwYWNlIF0sIGZ1bmN0aW9uKHYpIHsgcmV0dXJuIHYgfSlcblx0XHRcdFx0LmpvaW4oJy0nKS50b0xvd2VyQ2FzZSgpXG5cdFx0KSwgZXZlbnQgPSAkLkV2ZW50KFxuXHRcdFx0WyBuYW1lLCAnb3dsJywgbmFtZXNwYWNlIHx8ICdjYXJvdXNlbCcgXS5qb2luKCcuJykudG9Mb3dlckNhc2UoKSxcblx0XHRcdCQuZXh0ZW5kKHsgcmVsYXRlZFRhcmdldDogdGhpcyB9LCBzdGF0dXMsIGRhdGEpXG5cdFx0KTtcblxuXHRcdGlmICghdGhpcy5fc3VwcmVzc1tuYW1lXSkge1xuXHRcdFx0JC5lYWNoKHRoaXMuX3BsdWdpbnMsIGZ1bmN0aW9uKG5hbWUsIHBsdWdpbikge1xuXHRcdFx0XHRpZiAocGx1Z2luLm9uVHJpZ2dlcikge1xuXHRcdFx0XHRcdHBsdWdpbi5vblRyaWdnZXIoZXZlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5yZWdpc3Rlcih7IHR5cGU6IE93bC5UeXBlLkV2ZW50LCBuYW1lOiBuYW1lIH0pO1xuXHRcdFx0dGhpcy4kZWxlbWVudC50cmlnZ2VyKGV2ZW50KTtcblxuXHRcdFx0aWYgKHRoaXMuc2V0dGluZ3MgJiYgdHlwZW9mIHRoaXMuc2V0dGluZ3NbaGFuZGxlcl0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dGhpcy5zZXR0aW5nc1toYW5kbGVyXS5jYWxsKHRoaXMsIGV2ZW50KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZXZlbnQ7XG5cdH07XG5cblx0LyoqXG5cdCAqIEVudGVycyBhIHN0YXRlLlxuXHQgKiBAcGFyYW0gbmFtZSAtIFRoZSBzdGF0ZSBuYW1lLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5lbnRlciA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0XHQkLmVhY2goWyBuYW1lIF0uY29uY2F0KHRoaXMuX3N0YXRlcy50YWdzW25hbWVdIHx8IFtdKSwgJC5wcm94eShmdW5jdGlvbihpLCBuYW1lKSB7XG5cdFx0XHRpZiAodGhpcy5fc3RhdGVzLmN1cnJlbnRbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLl9zdGF0ZXMuY3VycmVudFtuYW1lXSA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX3N0YXRlcy5jdXJyZW50W25hbWVdKys7XG5cdFx0fSwgdGhpcykpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBMZWF2ZXMgYSBzdGF0ZS5cblx0ICogQHBhcmFtIG5hbWUgLSBUaGUgc3RhdGUgbmFtZS5cblx0ICovXG5cdE93bC5wcm90b3R5cGUubGVhdmUgPSBmdW5jdGlvbihuYW1lKSB7XG5cdFx0JC5lYWNoKFsgbmFtZSBdLmNvbmNhdCh0aGlzLl9zdGF0ZXMudGFnc1tuYW1lXSB8fCBbXSksICQucHJveHkoZnVuY3Rpb24oaSwgbmFtZSkge1xuXHRcdFx0dGhpcy5fc3RhdGVzLmN1cnJlbnRbbmFtZV0tLTtcblx0XHR9LCB0aGlzKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVycyBhbiBldmVudCBvciBzdGF0ZS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IC0gVGhlIGV2ZW50IG9yIHN0YXRlIHRvIHJlZ2lzdGVyLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uKG9iamVjdCkge1xuXHRcdGlmIChvYmplY3QudHlwZSA9PT0gT3dsLlR5cGUuRXZlbnQpIHtcblx0XHRcdGlmICghJC5ldmVudC5zcGVjaWFsW29iamVjdC5uYW1lXSkge1xuXHRcdFx0XHQkLmV2ZW50LnNwZWNpYWxbb2JqZWN0Lm5hbWVdID0ge307XG5cdFx0XHR9XG5cblx0XHRcdGlmICghJC5ldmVudC5zcGVjaWFsW29iamVjdC5uYW1lXS5vd2wpIHtcblx0XHRcdFx0dmFyIF9kZWZhdWx0ID0gJC5ldmVudC5zcGVjaWFsW29iamVjdC5uYW1lXS5fZGVmYXVsdDtcblx0XHRcdFx0JC5ldmVudC5zcGVjaWFsW29iamVjdC5uYW1lXS5fZGVmYXVsdCA9IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRpZiAoX2RlZmF1bHQgJiYgX2RlZmF1bHQuYXBwbHkgJiYgKCFlLm5hbWVzcGFjZSB8fCBlLm5hbWVzcGFjZS5pbmRleE9mKCdvd2wnKSA9PT0gLTEpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX2RlZmF1bHQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIGUubmFtZXNwYWNlICYmIGUubmFtZXNwYWNlLmluZGV4T2YoJ293bCcpID4gLTE7XG5cdFx0XHRcdH07XG5cdFx0XHRcdCQuZXZlbnQuc3BlY2lhbFtvYmplY3QubmFtZV0ub3dsID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKG9iamVjdC50eXBlID09PSBPd2wuVHlwZS5TdGF0ZSkge1xuXHRcdFx0aWYgKCF0aGlzLl9zdGF0ZXMudGFnc1tvYmplY3QubmFtZV0pIHtcblx0XHRcdFx0dGhpcy5fc3RhdGVzLnRhZ3Nbb2JqZWN0Lm5hbWVdID0gb2JqZWN0LnRhZ3M7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9zdGF0ZXMudGFnc1tvYmplY3QubmFtZV0gPSB0aGlzLl9zdGF0ZXMudGFnc1tvYmplY3QubmFtZV0uY29uY2F0KG9iamVjdC50YWdzKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fc3RhdGVzLnRhZ3Nbb2JqZWN0Lm5hbWVdID0gJC5ncmVwKHRoaXMuX3N0YXRlcy50YWdzW29iamVjdC5uYW1lXSwgJC5wcm94eShmdW5jdGlvbih0YWcsIGkpIHtcblx0XHRcdFx0cmV0dXJuICQuaW5BcnJheSh0YWcsIHRoaXMuX3N0YXRlcy50YWdzW29iamVjdC5uYW1lXSkgPT09IGk7XG5cdFx0XHR9LCB0aGlzKSk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBTdXBwcmVzc2VzIGV2ZW50cy5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge0FycmF5LjxTdHJpbmc+fSBldmVudHMgLSBUaGUgZXZlbnRzIHRvIHN1cHByZXNzLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5zdXBwcmVzcyA9IGZ1bmN0aW9uKGV2ZW50cykge1xuXHRcdCQuZWFjaChldmVudHMsICQucHJveHkoZnVuY3Rpb24oaW5kZXgsIGV2ZW50KSB7XG5cdFx0XHR0aGlzLl9zdXByZXNzW2V2ZW50XSA9IHRydWU7XG5cdFx0fSwgdGhpcykpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZWxlYXNlcyBzdXBwcmVzc2VkIGV2ZW50cy5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge0FycmF5LjxTdHJpbmc+fSBldmVudHMgLSBUaGUgZXZlbnRzIHRvIHJlbGVhc2UuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnJlbGVhc2UgPSBmdW5jdGlvbihldmVudHMpIHtcblx0XHQkLmVhY2goZXZlbnRzLCAkLnByb3h5KGZ1bmN0aW9uKGluZGV4LCBldmVudCkge1xuXHRcdFx0ZGVsZXRlIHRoaXMuX3N1cHJlc3NbZXZlbnRdO1xuXHRcdH0sIHRoaXMpKTtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyB1bmlmaWVkIHBvaW50ZXIgY29vcmRpbmF0ZXMgZnJvbSBldmVudC5cblx0ICogQHRvZG8gIzI2MVxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7RXZlbnR9IC0gVGhlIGBtb3VzZWRvd25gIG9yIGB0b3VjaHN0YXJ0YCBldmVudC5cblx0ICogQHJldHVybnMge09iamVjdH0gLSBDb250YWlucyBgeGAgYW5kIGB5YCBjb29yZGluYXRlcyBvZiBjdXJyZW50IHBvaW50ZXIgcG9zaXRpb24uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnBvaW50ZXIgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciByZXN1bHQgPSB7IHg6IG51bGwsIHk6IG51bGwgfTtcblxuXHRcdGV2ZW50ID0gZXZlbnQub3JpZ2luYWxFdmVudCB8fCBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG5cblx0XHRldmVudCA9IGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggP1xuXHRcdFx0ZXZlbnQudG91Y2hlc1swXSA6IGV2ZW50LmNoYW5nZWRUb3VjaGVzICYmIGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA/XG5cdFx0XHRcdGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdIDogZXZlbnQ7XG5cblx0XHRpZiAoZXZlbnQucGFnZVgpIHtcblx0XHRcdHJlc3VsdC54ID0gZXZlbnQucGFnZVg7XG5cdFx0XHRyZXN1bHQueSA9IGV2ZW50LnBhZ2VZO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHQueCA9IGV2ZW50LmNsaWVudFg7XG5cdFx0XHRyZXN1bHQueSA9IGV2ZW50LmNsaWVudFk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHQvKipcblx0ICogRGV0ZXJtaW5lcyBpZiB0aGUgaW5wdXQgaXMgYSBOdW1iZXIgb3Igc29tZXRoaW5nIHRoYXQgY2FuIGJlIGNvZXJjZWQgdG8gYSBOdW1iZXJcblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8T2JqZWN0fEFycmF5fEJvb2xlYW58UmVnRXhwfEZ1bmN0aW9ufFN5bWJvbH0gLSBUaGUgaW5wdXQgdG8gYmUgdGVzdGVkXG5cdCAqIEByZXR1cm5zIHtCb29sZWFufSAtIEFuIGluZGljYXRpb24gaWYgdGhlIGlucHV0IGlzIGEgTnVtYmVyIG9yIGNhbiBiZSBjb2VyY2VkIHRvIGEgTnVtYmVyXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmlzTnVtZXJpYyA9IGZ1bmN0aW9uKG51bWJlcikge1xuXHRcdHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdChudW1iZXIpKTtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyB0aGUgZGlmZmVyZW5jZSBvZiB0d28gdmVjdG9ycy5cblx0ICogQHRvZG8gIzI2MVxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSAtIFRoZSBmaXJzdCB2ZWN0b3IuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSAtIFRoZSBzZWNvbmQgdmVjdG9yLlxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fSAtIFRoZSBkaWZmZXJlbmNlLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5kaWZmZXJlbmNlID0gZnVuY3Rpb24oZmlyc3QsIHNlY29uZCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR4OiBmaXJzdC54IC0gc2Vjb25kLngsXG5cdFx0XHR5OiBmaXJzdC55IC0gc2Vjb25kLnlcblx0XHR9O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBUaGUgalF1ZXJ5IFBsdWdpbiBmb3IgdGhlIE93bCBDYXJvdXNlbFxuXHQgKiBAdG9kbyBOYXZpZ2F0aW9uIHBsdWdpbiBgbmV4dGAgYW5kIGBwcmV2YFxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHQkLmZuLm93bENhcm91c2VsID0gZnVuY3Rpb24ob3B0aW9uKSB7XG5cdFx0dmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyksXG5cdFx0XHRcdGRhdGEgPSAkdGhpcy5kYXRhKCdvd2wuY2Fyb3VzZWwnKTtcblxuXHRcdFx0aWYgKCFkYXRhKSB7XG5cdFx0XHRcdGRhdGEgPSBuZXcgT3dsKHRoaXMsIHR5cGVvZiBvcHRpb24gPT0gJ29iamVjdCcgJiYgb3B0aW9uKTtcblx0XHRcdFx0JHRoaXMuZGF0YSgnb3dsLmNhcm91c2VsJywgZGF0YSk7XG5cblx0XHRcdFx0JC5lYWNoKFtcblx0XHRcdFx0XHQnbmV4dCcsICdwcmV2JywgJ3RvJywgJ2Rlc3Ryb3knLCAncmVmcmVzaCcsICdyZXBsYWNlJywgJ2FkZCcsICdyZW1vdmUnXG5cdFx0XHRcdF0sIGZ1bmN0aW9uKGksIGV2ZW50KSB7XG5cdFx0XHRcdFx0ZGF0YS5yZWdpc3Rlcih7IHR5cGU6IE93bC5UeXBlLkV2ZW50LCBuYW1lOiBldmVudCB9KTtcblx0XHRcdFx0XHRkYXRhLiRlbGVtZW50Lm9uKGV2ZW50ICsgJy5vd2wuY2Fyb3VzZWwuY29yZScsICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIGUucmVsYXRlZFRhcmdldCAhPT0gdGhpcykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN1cHByZXNzKFsgZXZlbnQgXSk7XG5cdFx0XHRcdFx0XHRcdGRhdGFbZXZlbnRdLmFwcGx5KHRoaXMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG5cdFx0XHRcdFx0XHRcdHRoaXMucmVsZWFzZShbIGV2ZW50IF0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIGRhdGEpKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnICYmIG9wdGlvbi5jaGFyQXQoMCkgIT09ICdfJykge1xuXHRcdFx0XHRkYXRhW29wdGlvbl0uYXBwbHkoZGF0YSwgYXJncyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFRoZSBjb25zdHJ1Y3RvciBmb3IgdGhlIGpRdWVyeSBQbHVnaW5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0JC5mbi5vd2xDYXJvdXNlbC5Db25zdHJ1Y3RvciA9IE93bDtcblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vKipcbiAqIEF1dG9SZWZyZXNoIFBsdWdpblxuICogQHZlcnNpb24gMi4xLjBcbiAqIEBhdXRob3IgQXJ0dXMgS29sYW5vd3NraVxuICogQGF1dGhvciBEYXZpZCBEZXV0c2NoXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuXHQvKipcblx0ICogQ3JlYXRlcyB0aGUgYXV0byByZWZyZXNoIHBsdWdpbi5cblx0ICogQGNsYXNzIFRoZSBBdXRvIFJlZnJlc2ggUGx1Z2luXG5cdCAqIEBwYXJhbSB7T3dsfSBjYXJvdXNlbCAtIFRoZSBPd2wgQ2Fyb3VzZWxcblx0ICovXG5cdHZhciBBdXRvUmVmcmVzaCA9IGZ1bmN0aW9uKGNhcm91c2VsKSB7XG5cdFx0LyoqXG5cdFx0ICogUmVmZXJlbmNlIHRvIHRoZSBjb3JlLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T3dsfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NvcmUgPSBjYXJvdXNlbDtcblxuXHRcdC8qKlxuXHRcdCAqIFJlZnJlc2ggaW50ZXJ2YWwuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtudW1iZXJ9XG5cdFx0ICovXG5cdFx0dGhpcy5faW50ZXJ2YWwgPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogV2hldGhlciB0aGUgZWxlbWVudCBpcyBjdXJyZW50bHkgdmlzaWJsZSBvciBub3QuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtCb29sZWFufVxuXHRcdCAqL1xuXHRcdHRoaXMuX3Zpc2libGUgPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogQWxsIGV2ZW50IGhhbmRsZXJzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2hhbmRsZXJzID0ge1xuXHRcdFx0J2luaXRpYWxpemVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvUmVmcmVzaCkge1xuXHRcdFx0XHRcdHRoaXMud2F0Y2goKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcylcblx0XHR9O1xuXG5cdFx0Ly8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuXHRcdHRoaXMuX2NvcmUub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBBdXRvUmVmcmVzaC5EZWZhdWx0cywgdGhpcy5fY29yZS5vcHRpb25zKTtcblxuXHRcdC8vIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzXG5cdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vbih0aGlzLl9oYW5kbGVycyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlZmF1bHQgb3B0aW9ucy5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0QXV0b1JlZnJlc2guRGVmYXVsdHMgPSB7XG5cdFx0YXV0b1JlZnJlc2g6IHRydWUsXG5cdFx0YXV0b1JlZnJlc2hJbnRlcnZhbDogNTAwXG5cdH07XG5cblx0LyoqXG5cdCAqIFdhdGNoZXMgdGhlIGVsZW1lbnQuXG5cdCAqL1xuXHRBdXRvUmVmcmVzaC5wcm90b3R5cGUud2F0Y2ggPSBmdW5jdGlvbigpIHtcblx0XHRpZiAodGhpcy5faW50ZXJ2YWwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLl92aXNpYmxlID0gdGhpcy5fY29yZS4kZWxlbWVudC5pcygnOnZpc2libGUnKTtcblx0XHR0aGlzLl9pbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgkLnByb3h5KHRoaXMucmVmcmVzaCwgdGhpcyksIHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b1JlZnJlc2hJbnRlcnZhbCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFJlZnJlc2hlcyB0aGUgZWxlbWVudC5cblx0ICovXG5cdEF1dG9SZWZyZXNoLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHRoaXMuX2NvcmUuJGVsZW1lbnQuaXMoJzp2aXNpYmxlJykgPT09IHRoaXMuX3Zpc2libGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLl92aXNpYmxlID0gIXRoaXMuX3Zpc2libGU7XG5cblx0XHR0aGlzLl9jb3JlLiRlbGVtZW50LnRvZ2dsZUNsYXNzKCdvd2wtaGlkZGVuJywgIXRoaXMuX3Zpc2libGUpO1xuXG5cdFx0dGhpcy5fdmlzaWJsZSAmJiAodGhpcy5fY29yZS5pbnZhbGlkYXRlKCd3aWR0aCcpICYmIHRoaXMuX2NvcmUucmVmcmVzaCgpKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVzdHJveXMgdGhlIHBsdWdpbi5cblx0ICovXG5cdEF1dG9SZWZyZXNoLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGhhbmRsZXIsIHByb3BlcnR5O1xuXG5cdFx0d2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpO1xuXG5cdFx0Zm9yIChoYW5kbGVyIGluIHRoaXMuX2hhbmRsZXJzKSB7XG5cdFx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9mZihoYW5kbGVyLCB0aGlzLl9oYW5kbGVyc1toYW5kbGVyXSk7XG5cdFx0fVxuXHRcdGZvciAocHJvcGVydHkgaW4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcblx0XHRcdHR5cGVvZiB0aGlzW3Byb3BlcnR5XSAhPSAnZnVuY3Rpb24nICYmICh0aGlzW3Byb3BlcnR5XSA9IG51bGwpO1xuXHRcdH1cblx0fTtcblxuXHQkLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yLlBsdWdpbnMuQXV0b1JlZnJlc2ggPSBBdXRvUmVmcmVzaDtcblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vKipcbiAqIExhenkgUGx1Z2luXG4gKiBAdmVyc2lvbiAyLjEuMFxuICogQGF1dGhvciBCYXJ0b3N6IFdvamNpZWNob3dza2lcbiAqIEBhdXRob3IgRGF2aWQgRGV1dHNjaFxuICogQGxpY2Vuc2UgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKi9cbjsoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgdGhlIGxhenkgcGx1Z2luLlxuXHQgKiBAY2xhc3MgVGhlIExhenkgUGx1Z2luXG5cdCAqIEBwYXJhbSB7T3dsfSBjYXJvdXNlbCAtIFRoZSBPd2wgQ2Fyb3VzZWxcblx0ICovXG5cdHZhciBMYXp5ID0gZnVuY3Rpb24oY2Fyb3VzZWwpIHtcblxuXHRcdC8qKlxuXHRcdCAqIFJlZmVyZW5jZSB0byB0aGUgY29yZS5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge093bH1cblx0XHQgKi9cblx0XHR0aGlzLl9jb3JlID0gY2Fyb3VzZWw7XG5cblx0XHQvKipcblx0XHQgKiBBbHJlYWR5IGxvYWRlZCBpdGVtcy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge0FycmF5LjxqUXVlcnk+fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2xvYWRlZCA9IFtdO1xuXG5cdFx0LyoqXG5cdFx0ICogRXZlbnQgaGFuZGxlcnMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5faGFuZGxlcnMgPSB7XG5cdFx0XHQnaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsIGNoYW5nZS5vd2wuY2Fyb3VzZWwgcmVzaXplZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKCFlLm5hbWVzcGFjZSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICghdGhpcy5fY29yZS5zZXR0aW5ncyB8fCAhdGhpcy5fY29yZS5zZXR0aW5ncy5sYXp5TG9hZCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICgoZS5wcm9wZXJ0eSAmJiBlLnByb3BlcnR5Lm5hbWUgPT0gJ3Bvc2l0aW9uJykgfHwgZS50eXBlID09ICdpbml0aWFsaXplZCcpIHtcblx0XHRcdFx0XHR2YXIgc2V0dGluZ3MgPSB0aGlzLl9jb3JlLnNldHRpbmdzLFxuXHRcdFx0XHRcdFx0biA9IChzZXR0aW5ncy5jZW50ZXIgJiYgTWF0aC5jZWlsKHNldHRpbmdzLml0ZW1zIC8gMikgfHwgc2V0dGluZ3MuaXRlbXMpLFxuXHRcdFx0XHRcdFx0aSA9ICgoc2V0dGluZ3MuY2VudGVyICYmIG4gKiAtMSkgfHwgMCksXG5cdFx0XHRcdFx0XHRwb3NpdGlvbiA9IChlLnByb3BlcnR5ICYmIGUucHJvcGVydHkudmFsdWUgIT09IHVuZGVmaW5lZCA/IGUucHJvcGVydHkudmFsdWUgOiB0aGlzLl9jb3JlLmN1cnJlbnQoKSkgKyBpLFxuXHRcdFx0XHRcdFx0Y2xvbmVzID0gdGhpcy5fY29yZS5jbG9uZXMoKS5sZW5ndGgsXG5cdFx0XHRcdFx0XHRsb2FkID0gJC5wcm94eShmdW5jdGlvbihpLCB2KSB7IHRoaXMubG9hZCh2KSB9LCB0aGlzKTtcblxuXHRcdFx0XHRcdHdoaWxlIChpKysgPCBuKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmxvYWQoY2xvbmVzIC8gMiArIHRoaXMuX2NvcmUucmVsYXRpdmUocG9zaXRpb24pKTtcblx0XHRcdFx0XHRcdGNsb25lcyAmJiAkLmVhY2godGhpcy5fY29yZS5jbG9uZXModGhpcy5fY29yZS5yZWxhdGl2ZShwb3NpdGlvbikpLCBsb2FkKTtcblx0XHRcdFx0XHRcdHBvc2l0aW9uKys7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKVxuXHRcdH07XG5cblx0XHQvLyBzZXQgdGhlIGRlZmF1bHQgb3B0aW9uc1xuXHRcdHRoaXMuX2NvcmUub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBMYXp5LkRlZmF1bHRzLCB0aGlzLl9jb3JlLm9wdGlvbnMpO1xuXG5cdFx0Ly8gcmVnaXN0ZXIgZXZlbnQgaGFuZGxlclxuXHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub24odGhpcy5faGFuZGxlcnMpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZWZhdWx0IG9wdGlvbnMuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdExhenkuRGVmYXVsdHMgPSB7XG5cdFx0bGF6eUxvYWQ6IGZhbHNlXG5cdH07XG5cblx0LyoqXG5cdCAqIExvYWRzIGFsbCByZXNvdXJjZXMgb2YgYW4gaXRlbSBhdCB0aGUgc3BlY2lmaWVkIHBvc2l0aW9uLlxuXHQgKiBAcGFyYW0ge051bWJlcn0gcG9zaXRpb24gLSBUaGUgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhlIGl0ZW0uXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdExhenkucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXHRcdHZhciAkaXRlbSA9IHRoaXMuX2NvcmUuJHN0YWdlLmNoaWxkcmVuKCkuZXEocG9zaXRpb24pLFxuXHRcdFx0JGVsZW1lbnRzID0gJGl0ZW0gJiYgJGl0ZW0uZmluZCgnLm93bC1sYXp5Jyk7XG5cblx0XHRpZiAoISRlbGVtZW50cyB8fCAkLmluQXJyYXkoJGl0ZW0uZ2V0KDApLCB0aGlzLl9sb2FkZWQpID4gLTEpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQkZWxlbWVudHMuZWFjaCgkLnByb3h5KGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG5cdFx0XHR2YXIgJGVsZW1lbnQgPSAkKGVsZW1lbnQpLCBpbWFnZSxcblx0XHRcdFx0dXJsID0gKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID4gMSAmJiAkZWxlbWVudC5hdHRyKCdkYXRhLXNyYy1yZXRpbmEnKSkgfHwgJGVsZW1lbnQuYXR0cignZGF0YS1zcmMnKTtcblxuXHRcdFx0dGhpcy5fY29yZS50cmlnZ2VyKCdsb2FkJywgeyBlbGVtZW50OiAkZWxlbWVudCwgdXJsOiB1cmwgfSwgJ2xhenknKTtcblxuXHRcdFx0aWYgKCRlbGVtZW50LmlzKCdpbWcnKSkge1xuXHRcdFx0XHQkZWxlbWVudC5vbmUoJ2xvYWQub3dsLmxhenknLCAkLnByb3h5KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCRlbGVtZW50LmNzcygnb3BhY2l0eScsIDEpO1xuXHRcdFx0XHRcdHRoaXMuX2NvcmUudHJpZ2dlcignbG9hZGVkJywgeyBlbGVtZW50OiAkZWxlbWVudCwgdXJsOiB1cmwgfSwgJ2xhenknKTtcblx0XHRcdFx0fSwgdGhpcykpLmF0dHIoJ3NyYycsIHVybCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0XHRpbWFnZS5vbmxvYWQgPSAkLnByb3h5KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCRlbGVtZW50LmNzcyh7XG5cdFx0XHRcdFx0XHQnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJyArIHVybCArICcpJyxcblx0XHRcdFx0XHRcdCdvcGFjaXR5JzogJzEnXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGhpcy5fY29yZS50cmlnZ2VyKCdsb2FkZWQnLCB7IGVsZW1lbnQ6ICRlbGVtZW50LCB1cmw6IHVybCB9LCAnbGF6eScpO1xuXHRcdFx0XHR9LCB0aGlzKTtcblx0XHRcdFx0aW1hZ2Uuc3JjID0gdXJsO1xuXHRcdFx0fVxuXHRcdH0sIHRoaXMpKTtcblxuXHRcdHRoaXMuX2xvYWRlZC5wdXNoKCRpdGVtLmdldCgwKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlc3Ryb3lzIHRoZSBwbHVnaW4uXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdExhenkucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaGFuZGxlciwgcHJvcGVydHk7XG5cblx0XHRmb3IgKGhhbmRsZXIgaW4gdGhpcy5oYW5kbGVycykge1xuXHRcdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vZmYoaGFuZGxlciwgdGhpcy5oYW5kbGVyc1toYW5kbGVyXSk7XG5cdFx0fVxuXHRcdGZvciAocHJvcGVydHkgaW4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcblx0XHRcdHR5cGVvZiB0aGlzW3Byb3BlcnR5XSAhPSAnZnVuY3Rpb24nICYmICh0aGlzW3Byb3BlcnR5XSA9IG51bGwpO1xuXHRcdH1cblx0fTtcblxuXHQkLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yLlBsdWdpbnMuTGF6eSA9IExhenk7XG5cbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcblxuLyoqXG4gKiBBdXRvSGVpZ2h0IFBsdWdpblxuICogQHZlcnNpb24gMi4xLjBcbiAqIEBhdXRob3IgQmFydG9zeiBXb2pjaWVjaG93c2tpXG4gKiBAYXV0aG9yIERhdmlkIERldXRzY2hcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSBhdXRvIGhlaWdodCBwbHVnaW4uXG5cdCAqIEBjbGFzcyBUaGUgQXV0byBIZWlnaHQgUGx1Z2luXG5cdCAqIEBwYXJhbSB7T3dsfSBjYXJvdXNlbCAtIFRoZSBPd2wgQ2Fyb3VzZWxcblx0ICovXG5cdHZhciBBdXRvSGVpZ2h0ID0gZnVuY3Rpb24oY2Fyb3VzZWwpIHtcblx0XHQvKipcblx0XHQgKiBSZWZlcmVuY2UgdG8gdGhlIGNvcmUuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPd2x9XG5cdFx0ICovXG5cdFx0dGhpcy5fY29yZSA9IGNhcm91c2VsO1xuXG5cdFx0LyoqXG5cdFx0ICogQWxsIGV2ZW50IGhhbmRsZXJzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2hhbmRsZXJzID0ge1xuXHRcdFx0J2luaXRpYWxpemVkLm93bC5jYXJvdXNlbCByZWZyZXNoZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9IZWlnaHQpIHtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdjaGFuZ2VkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvSGVpZ2h0ICYmIGUucHJvcGVydHkubmFtZSA9PSAncG9zaXRpb24nKXtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdsb2FkZWQub3dsLmxhenknOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b0hlaWdodFxuXHRcdFx0XHRcdCYmIGUuZWxlbWVudC5jbG9zZXN0KCcuJyArIHRoaXMuX2NvcmUuc2V0dGluZ3MuaXRlbUNsYXNzKS5pbmRleCgpID09PSB0aGlzLl9jb3JlLmN1cnJlbnQoKSkge1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpXG5cdFx0fTtcblxuXHRcdC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcblx0XHR0aGlzLl9jb3JlLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgQXV0b0hlaWdodC5EZWZhdWx0cywgdGhpcy5fY29yZS5vcHRpb25zKTtcblxuXHRcdC8vIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzXG5cdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vbih0aGlzLl9oYW5kbGVycyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlZmF1bHQgb3B0aW9ucy5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0QXV0b0hlaWdodC5EZWZhdWx0cyA9IHtcblx0XHRhdXRvSGVpZ2h0OiBmYWxzZSxcblx0XHRhdXRvSGVpZ2h0Q2xhc3M6ICdvd2wtaGVpZ2h0J1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIHRoZSB2aWV3LlxuXHQgKi9cblx0QXV0b0hlaWdodC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHN0YXJ0ID0gdGhpcy5fY29yZS5fY3VycmVudCxcblx0XHRcdGVuZCA9IHN0YXJ0ICsgdGhpcy5fY29yZS5zZXR0aW5ncy5pdGVtcyxcblx0XHRcdHZpc2libGUgPSB0aGlzLl9jb3JlLiRzdGFnZS5jaGlsZHJlbigpLnRvQXJyYXkoKS5zbGljZShzdGFydCwgZW5kKSxcblx0XHRcdGhlaWdodHMgPSBbXSxcblx0XHRcdG1heGhlaWdodCA9IDA7XG5cblx0XHQkLmVhY2godmlzaWJsZSwgZnVuY3Rpb24oaW5kZXgsIGl0ZW0pIHtcblx0XHRcdGhlaWdodHMucHVzaCgkKGl0ZW0pLmhlaWdodCgpKTtcblx0XHR9KTtcblxuXHRcdG1heGhlaWdodCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhlaWdodHMpO1xuXG5cdFx0dGhpcy5fY29yZS4kc3RhZ2UucGFyZW50KClcblx0XHRcdC5oZWlnaHQobWF4aGVpZ2h0KVxuXHRcdFx0LmFkZENsYXNzKHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b0hlaWdodENsYXNzKTtcblx0fTtcblxuXHRBdXRvSGVpZ2h0LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGhhbmRsZXIsIHByb3BlcnR5O1xuXG5cdFx0Zm9yIChoYW5kbGVyIGluIHRoaXMuX2hhbmRsZXJzKSB7XG5cdFx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9mZihoYW5kbGVyLCB0aGlzLl9oYW5kbGVyc1toYW5kbGVyXSk7XG5cdFx0fVxuXHRcdGZvciAocHJvcGVydHkgaW4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcblx0XHRcdHR5cGVvZiB0aGlzW3Byb3BlcnR5XSAhPSAnZnVuY3Rpb24nICYmICh0aGlzW3Byb3BlcnR5XSA9IG51bGwpO1xuXHRcdH1cblx0fTtcblxuXHQkLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yLlBsdWdpbnMuQXV0b0hlaWdodCA9IEF1dG9IZWlnaHQ7XG5cbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcblxuLyoqXG4gKiBWaWRlbyBQbHVnaW5cbiAqIEB2ZXJzaW9uIDIuMS4wXG4gKiBAYXV0aG9yIEJhcnRvc3ogV29qY2llY2hvd3NraVxuICogQGF1dGhvciBEYXZpZCBEZXV0c2NoXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuXHQvKipcblx0ICogQ3JlYXRlcyB0aGUgdmlkZW8gcGx1Z2luLlxuXHQgKiBAY2xhc3MgVGhlIFZpZGVvIFBsdWdpblxuXHQgKiBAcGFyYW0ge093bH0gY2Fyb3VzZWwgLSBUaGUgT3dsIENhcm91c2VsXG5cdCAqL1xuXHR2YXIgVmlkZW8gPSBmdW5jdGlvbihjYXJvdXNlbCkge1xuXHRcdC8qKlxuXHRcdCAqIFJlZmVyZW5jZSB0byB0aGUgY29yZS5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge093bH1cblx0XHQgKi9cblx0XHR0aGlzLl9jb3JlID0gY2Fyb3VzZWw7XG5cblx0XHQvKipcblx0XHQgKiBDYWNoZSBhbGwgdmlkZW8gVVJMcy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLl92aWRlb3MgPSB7fTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgcGxheWluZyBpdGVtLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7alF1ZXJ5fVxuXHRcdCAqL1xuXHRcdHRoaXMuX3BsYXlpbmcgPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogQWxsIGV2ZW50IGhhbmRsZXJzLlxuXHRcdCAqIEB0b2RvIFRoZSBjbG9uZWQgY29udGVudCByZW1vdmFsZSBpcyB0b28gbGF0ZVxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2hhbmRsZXJzID0ge1xuXHRcdFx0J2luaXRpYWxpemVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UpIHtcblx0XHRcdFx0XHR0aGlzLl9jb3JlLnJlZ2lzdGVyKHsgdHlwZTogJ3N0YXRlJywgbmFtZTogJ3BsYXlpbmcnLCB0YWdzOiBbICdpbnRlcmFjdGluZycgXSB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQncmVzaXplLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5fY29yZS5zZXR0aW5ncy52aWRlbyAmJiB0aGlzLmlzSW5GdWxsU2NyZWVuKCkpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3JlZnJlc2hlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuaXMoJ3Jlc2l6aW5nJykpIHtcblx0XHRcdFx0XHR0aGlzLl9jb3JlLiRzdGFnZS5maW5kKCcuY2xvbmVkIC5vd2wtdmlkZW8tZnJhbWUnKS5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQnY2hhbmdlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIGUucHJvcGVydHkubmFtZSA9PT0gJ3Bvc2l0aW9uJyAmJiB0aGlzLl9wbGF5aW5nKSB7XG5cdFx0XHRcdFx0dGhpcy5zdG9wKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3ByZXBhcmVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoIWUubmFtZXNwYWNlKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyICRlbGVtZW50ID0gJChlLmNvbnRlbnQpLmZpbmQoJy5vd2wtdmlkZW8nKTtcblxuXHRcdFx0XHRpZiAoJGVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0JGVsZW1lbnQuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHRcdFx0XHR0aGlzLmZldGNoKCRlbGVtZW50LCAkKGUuY29udGVudCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKVxuXHRcdH07XG5cblx0XHQvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG5cdFx0dGhpcy5fY29yZS5vcHRpb25zID0gJC5leHRlbmQoe30sIFZpZGVvLkRlZmF1bHRzLCB0aGlzLl9jb3JlLm9wdGlvbnMpO1xuXG5cdFx0Ly8gcmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnNcblx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9uKHRoaXMuX2hhbmRsZXJzKTtcblxuXHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub24oJ2NsaWNrLm93bC52aWRlbycsICcub3dsLXZpZGVvLXBsYXktaWNvbicsICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0dGhpcy5wbGF5KGUpO1xuXHRcdH0sIHRoaXMpKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVmYXVsdCBvcHRpb25zLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRWaWRlby5EZWZhdWx0cyA9IHtcblx0XHR2aWRlbzogZmFsc2UsXG5cdFx0dmlkZW9IZWlnaHQ6IGZhbHNlLFxuXHRcdHZpZGVvV2lkdGg6IGZhbHNlXG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIHZpZGVvIElEIGFuZCB0aGUgdHlwZSAoWW91VHViZS9WaW1lby92emFhciBvbmx5KS5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge2pRdWVyeX0gdGFyZ2V0IC0gVGhlIHRhcmdldCBjb250YWluaW5nIHRoZSB2aWRlbyBkYXRhLlxuXHQgKiBAcGFyYW0ge2pRdWVyeX0gaXRlbSAtIFRoZSBpdGVtIGNvbnRhaW5pbmcgdGhlIHZpZGVvLlxuXHQgKi9cblx0VmlkZW8ucHJvdG90eXBlLmZldGNoID0gZnVuY3Rpb24odGFyZ2V0LCBpdGVtKSB7XG5cdFx0XHR2YXIgdHlwZSA9IChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAodGFyZ2V0LmF0dHIoJ2RhdGEtdmltZW8taWQnKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuICd2aW1lbyc7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0YXJnZXQuYXR0cignZGF0YS12emFhci1pZCcpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJ3Z6YWFyJ1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJ3lvdXR1YmUnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkoKSxcblx0XHRcdFx0aWQgPSB0YXJnZXQuYXR0cignZGF0YS12aW1lby1pZCcpIHx8IHRhcmdldC5hdHRyKCdkYXRhLXlvdXR1YmUtaWQnKSB8fCB0YXJnZXQuYXR0cignZGF0YS12emFhci1pZCcpLFxuXHRcdFx0XHR3aWR0aCA9IHRhcmdldC5hdHRyKCdkYXRhLXdpZHRoJykgfHwgdGhpcy5fY29yZS5zZXR0aW5ncy52aWRlb1dpZHRoLFxuXHRcdFx0XHRoZWlnaHQgPSB0YXJnZXQuYXR0cignZGF0YS1oZWlnaHQnKSB8fCB0aGlzLl9jb3JlLnNldHRpbmdzLnZpZGVvSGVpZ2h0LFxuXHRcdFx0XHR1cmwgPSB0YXJnZXQuYXR0cignaHJlZicpO1xuXG5cdFx0aWYgKHVybCkge1xuXG5cdFx0XHQvKlxuXHRcdFx0XHRcdFBhcnNlcyB0aGUgaWQncyBvdXQgb2YgdGhlIGZvbGxvd2luZyB1cmxzIChhbmQgcHJvYmFibHkgbW9yZSk6XG5cdFx0XHRcdFx0aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj06aWRcblx0XHRcdFx0XHRodHRwczovL3lvdXR1LmJlLzppZFxuXHRcdFx0XHRcdGh0dHBzOi8vdmltZW8uY29tLzppZFxuXHRcdFx0XHRcdGh0dHBzOi8vdmltZW8uY29tL2NoYW5uZWxzLzpjaGFubmVsLzppZFxuXHRcdFx0XHRcdGh0dHBzOi8vdmltZW8uY29tL2dyb3Vwcy86Z3JvdXAvdmlkZW9zLzppZFxuXHRcdFx0XHRcdGh0dHBzOi8vYXBwLnZ6YWFyLmNvbS92aWRlb3MvOmlkXG5cblx0XHRcdFx0XHRWaXN1YWwgZXhhbXBsZTogaHR0cHM6Ly9yZWdleHBlci5jb20vIyhodHRwJTNBJTdDaHR0cHMlM0ElN0MpJTVDJTJGJTVDJTJGKHBsYXllci4lN0N3d3cuJTdDYXBwLiklM0YodmltZW8lNUMuY29tJTdDeW91dHUoYmUlNUMuY29tJTdDJTVDLmJlJTdDYmUlNUMuZ29vZ2xlYXBpcyU1Qy5jb20pJTdDdnphYXIlNUMuY29tKSU1QyUyRih2aWRlbyU1QyUyRiU3Q3ZpZGVvcyU1QyUyRiU3Q2VtYmVkJTVDJTJGJTdDY2hhbm5lbHMlNUMlMkYuJTJCJTVDJTJGJTdDZ3JvdXBzJTVDJTJGLiUyQiU1QyUyRiU3Q3dhdGNoJTVDJTNGdiUzRCU3Q3YlNUMlMkYpJTNGKCU1QkEtWmEtejAtOS5fJTI1LSU1RCopKCU1QyUyNiU1Q1MlMkIpJTNGXG5cdFx0XHQqL1xuXG5cdFx0XHRpZCA9IHVybC5tYXRjaCgvKGh0dHA6fGh0dHBzOnwpXFwvXFwvKHBsYXllci58d3d3LnxhcHAuKT8odmltZW9cXC5jb218eW91dHUoYmVcXC5jb218XFwuYmV8YmVcXC5nb29nbGVhcGlzXFwuY29tKXx2emFhclxcLmNvbSlcXC8odmlkZW9cXC98dmlkZW9zXFwvfGVtYmVkXFwvfGNoYW5uZWxzXFwvLitcXC98Z3JvdXBzXFwvLitcXC98d2F0Y2hcXD92PXx2XFwvKT8oW0EtWmEtejAtOS5fJS1dKikoXFwmXFxTKyk/Lyk7XG5cblx0XHRcdGlmIChpZFszXS5pbmRleE9mKCd5b3V0dScpID4gLTEpIHtcblx0XHRcdFx0dHlwZSA9ICd5b3V0dWJlJztcblx0XHRcdH0gZWxzZSBpZiAoaWRbM10uaW5kZXhPZigndmltZW8nKSA+IC0xKSB7XG5cdFx0XHRcdHR5cGUgPSAndmltZW8nO1xuXHRcdFx0fSBlbHNlIGlmIChpZFszXS5pbmRleE9mKCd2emFhcicpID4gLTEpIHtcblx0XHRcdFx0dHlwZSA9ICd2emFhcic7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1ZpZGVvIFVSTCBub3Qgc3VwcG9ydGVkLicpO1xuXHRcdFx0fVxuXHRcdFx0aWQgPSBpZFs2XTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHZpZGVvIFVSTC4nKTtcblx0XHR9XG5cblx0XHR0aGlzLl92aWRlb3NbdXJsXSA9IHtcblx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRpZDogaWQsXG5cdFx0XHR3aWR0aDogd2lkdGgsXG5cdFx0XHRoZWlnaHQ6IGhlaWdodFxuXHRcdH07XG5cblx0XHRpdGVtLmF0dHIoJ2RhdGEtdmlkZW8nLCB1cmwpO1xuXG5cdFx0dGhpcy50aHVtYm5haWwodGFyZ2V0LCB0aGlzLl92aWRlb3NbdXJsXSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgdmlkZW8gdGh1bWJuYWlsLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7alF1ZXJ5fSB0YXJnZXQgLSBUaGUgdGFyZ2V0IGNvbnRhaW5pbmcgdGhlIHZpZGVvIGRhdGEuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBpbmZvIC0gVGhlIHZpZGVvIGluZm8gb2JqZWN0LlxuXHQgKiBAc2VlIGBmZXRjaGBcblx0ICovXG5cdFZpZGVvLnByb3RvdHlwZS50aHVtYm5haWwgPSBmdW5jdGlvbih0YXJnZXQsIHZpZGVvKSB7XG5cdFx0dmFyIHRuTGluayxcblx0XHRcdGljb24sXG5cdFx0XHRwYXRoLFxuXHRcdFx0ZGltZW5zaW9ucyA9IHZpZGVvLndpZHRoICYmIHZpZGVvLmhlaWdodCA/ICdzdHlsZT1cIndpZHRoOicgKyB2aWRlby53aWR0aCArICdweDtoZWlnaHQ6JyArIHZpZGVvLmhlaWdodCArICdweDtcIicgOiAnJyxcblx0XHRcdGN1c3RvbVRuID0gdGFyZ2V0LmZpbmQoJ2ltZycpLFxuXHRcdFx0c3JjVHlwZSA9ICdzcmMnLFxuXHRcdFx0bGF6eUNsYXNzID0gJycsXG5cdFx0XHRzZXR0aW5ncyA9IHRoaXMuX2NvcmUuc2V0dGluZ3MsXG5cdFx0XHRjcmVhdGUgPSBmdW5jdGlvbihwYXRoKSB7XG5cdFx0XHRcdGljb24gPSAnPGRpdiBjbGFzcz1cIm93bC12aWRlby1wbGF5LWljb25cIj48L2Rpdj4nO1xuXG5cdFx0XHRcdGlmIChzZXR0aW5ncy5sYXp5TG9hZCkge1xuXHRcdFx0XHRcdHRuTGluayA9ICc8ZGl2IGNsYXNzPVwib3dsLXZpZGVvLXRuICcgKyBsYXp5Q2xhc3MgKyAnXCIgJyArIHNyY1R5cGUgKyAnPVwiJyArIHBhdGggKyAnXCI+PC9kaXY+Jztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0bkxpbmsgPSAnPGRpdiBjbGFzcz1cIm93bC12aWRlby10blwiIHN0eWxlPVwib3BhY2l0eToxO2JhY2tncm91bmQtaW1hZ2U6dXJsKCcgKyBwYXRoICsgJylcIj48L2Rpdj4nO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRhcmdldC5hZnRlcih0bkxpbmspO1xuXHRcdFx0XHR0YXJnZXQuYWZ0ZXIoaWNvbik7XG5cdFx0XHR9O1xuXG5cdFx0Ly8gd3JhcCB2aWRlbyBjb250ZW50IGludG8gb3dsLXZpZGVvLXdyYXBwZXIgZGl2XG5cdFx0dGFyZ2V0LndyYXAoJzxkaXYgY2xhc3M9XCJvd2wtdmlkZW8td3JhcHBlclwiJyArIGRpbWVuc2lvbnMgKyAnPjwvZGl2PicpO1xuXG5cdFx0aWYgKHRoaXMuX2NvcmUuc2V0dGluZ3MubGF6eUxvYWQpIHtcblx0XHRcdHNyY1R5cGUgPSAnZGF0YS1zcmMnO1xuXHRcdFx0bGF6eUNsYXNzID0gJ293bC1sYXp5Jztcblx0XHR9XG5cblx0XHQvLyBjdXN0b20gdGh1bWJuYWlsXG5cdFx0aWYgKGN1c3RvbVRuLmxlbmd0aCkge1xuXHRcdFx0Y3JlYXRlKGN1c3RvbVRuLmF0dHIoc3JjVHlwZSkpO1xuXHRcdFx0Y3VzdG9tVG4ucmVtb3ZlKCk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHZpZGVvLnR5cGUgPT09ICd5b3V0dWJlJykge1xuXHRcdFx0cGF0aCA9IFwiLy9pbWcueW91dHViZS5jb20vdmkvXCIgKyB2aWRlby5pZCArIFwiL2hxZGVmYXVsdC5qcGdcIjtcblx0XHRcdGNyZWF0ZShwYXRoKTtcblx0XHR9IGVsc2UgaWYgKHZpZGVvLnR5cGUgPT09ICd2aW1lbycpIHtcblx0XHRcdCQuYWpheCh7XG5cdFx0XHRcdHR5cGU6ICdHRVQnLFxuXHRcdFx0XHR1cmw6ICcvL3ZpbWVvLmNvbS9hcGkvdjIvdmlkZW8vJyArIHZpZGVvLmlkICsgJy5qc29uJyxcblx0XHRcdFx0anNvbnA6ICdjYWxsYmFjaycsXG5cdFx0XHRcdGRhdGFUeXBlOiAnanNvbnAnLFxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRcdFx0cGF0aCA9IGRhdGFbMF0udGh1bWJuYWlsX2xhcmdlO1xuXHRcdFx0XHRcdGNyZWF0ZShwYXRoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIGlmICh2aWRlby50eXBlID09PSAndnphYXInKSB7XG5cdFx0XHQkLmFqYXgoe1xuXHRcdFx0XHR0eXBlOiAnR0VUJyxcblx0XHRcdFx0dXJsOiAnLy92emFhci5jb20vYXBpL3ZpZGVvcy8nICsgdmlkZW8uaWQgKyAnLmpzb24nLFxuXHRcdFx0XHRqc29ucDogJ2NhbGxiYWNrJyxcblx0XHRcdFx0ZGF0YVR5cGU6ICdqc29ucCcsXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdFx0XHRwYXRoID0gZGF0YS5mcmFtZWdyYWJfdXJsO1xuXHRcdFx0XHRcdGNyZWF0ZShwYXRoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBTdG9wcyB0aGUgY3VycmVudCB2aWRlby5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0VmlkZW8ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLl9jb3JlLnRyaWdnZXIoJ3N0b3AnLCBudWxsLCAndmlkZW8nKTtcblx0XHR0aGlzLl9wbGF5aW5nLmZpbmQoJy5vd2wtdmlkZW8tZnJhbWUnKS5yZW1vdmUoKTtcblx0XHR0aGlzLl9wbGF5aW5nLnJlbW92ZUNsYXNzKCdvd2wtdmlkZW8tcGxheWluZycpO1xuXHRcdHRoaXMuX3BsYXlpbmcgPSBudWxsO1xuXHRcdHRoaXMuX2NvcmUubGVhdmUoJ3BsYXlpbmcnKTtcblx0XHR0aGlzLl9jb3JlLnRyaWdnZXIoJ3N0b3BwZWQnLCBudWxsLCAndmlkZW8nKTtcblx0fTtcblxuXHQvKipcblx0ICogU3RhcnRzIHRoZSBjdXJyZW50IHZpZGVvLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gVGhlIGV2ZW50IGFyZ3VtZW50cy5cblx0ICovXG5cdFZpZGVvLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpLFxuXHRcdFx0aXRlbSA9IHRhcmdldC5jbG9zZXN0KCcuJyArIHRoaXMuX2NvcmUuc2V0dGluZ3MuaXRlbUNsYXNzKSxcblx0XHRcdHZpZGVvID0gdGhpcy5fdmlkZW9zW2l0ZW0uYXR0cignZGF0YS12aWRlbycpXSxcblx0XHRcdHdpZHRoID0gdmlkZW8ud2lkdGggfHwgJzEwMCUnLFxuXHRcdFx0aGVpZ2h0ID0gdmlkZW8uaGVpZ2h0IHx8IHRoaXMuX2NvcmUuJHN0YWdlLmhlaWdodCgpLFxuXHRcdFx0aHRtbDtcblxuXHRcdGlmICh0aGlzLl9wbGF5aW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5fY29yZS5lbnRlcigncGxheWluZycpO1xuXHRcdHRoaXMuX2NvcmUudHJpZ2dlcigncGxheScsIG51bGwsICd2aWRlbycpO1xuXG5cdFx0aXRlbSA9IHRoaXMuX2NvcmUuaXRlbXModGhpcy5fY29yZS5yZWxhdGl2ZShpdGVtLmluZGV4KCkpKTtcblxuXHRcdHRoaXMuX2NvcmUucmVzZXQoaXRlbS5pbmRleCgpKTtcblxuXHRcdGlmICh2aWRlby50eXBlID09PSAneW91dHViZScpIHtcblx0XHRcdGh0bWwgPSAnPGlmcmFtZSB3aWR0aD1cIicgKyB3aWR0aCArICdcIiBoZWlnaHQ9XCInICsgaGVpZ2h0ICsgJ1wiIHNyYz1cIi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLycgK1xuXHRcdFx0XHR2aWRlby5pZCArICc/YXV0b3BsYXk9MSZ2PScgKyB2aWRlby5pZCArICdcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+Jztcblx0XHR9IGVsc2UgaWYgKHZpZGVvLnR5cGUgPT09ICd2aW1lbycpIHtcblx0XHRcdGh0bWwgPSAnPGlmcmFtZSBzcmM9XCIvL3BsYXllci52aW1lby5jb20vdmlkZW8vJyArIHZpZGVvLmlkICtcblx0XHRcdFx0Jz9hdXRvcGxheT0xXCIgd2lkdGg9XCInICsgd2lkdGggKyAnXCIgaGVpZ2h0PVwiJyArIGhlaWdodCArXG5cdFx0XHRcdCdcIiBmcmFtZWJvcmRlcj1cIjBcIiB3ZWJraXRhbGxvd2Z1bGxzY3JlZW4gbW96YWxsb3dmdWxsc2NyZWVuIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nO1xuXHRcdH0gZWxzZSBpZiAodmlkZW8udHlwZSA9PT0gJ3Z6YWFyJykge1xuXHRcdFx0aHRtbCA9ICc8aWZyYW1lIGZyYW1lYm9yZGVyPVwiMFwiJyArICdoZWlnaHQ9XCInICsgaGVpZ2h0ICsgJ1wiJyArICd3aWR0aD1cIicgKyB3aWR0aCArXG5cdFx0XHRcdCdcIiBhbGxvd2Z1bGxzY3JlZW4gbW96YWxsb3dmdWxsc2NyZWVuIHdlYmtpdEFsbG93RnVsbFNjcmVlbiAnICtcblx0XHRcdFx0J3NyYz1cIi8vdmlldy52emFhci5jb20vJyArIHZpZGVvLmlkICsgJy9wbGF5ZXI/YXV0b3BsYXk9dHJ1ZVwiPjwvaWZyYW1lPic7XG5cdFx0fVxuXG5cdFx0JCgnPGRpdiBjbGFzcz1cIm93bC12aWRlby1mcmFtZVwiPicgKyBodG1sICsgJzwvZGl2PicpLmluc2VydEFmdGVyKGl0ZW0uZmluZCgnLm93bC12aWRlbycpKTtcblxuXHRcdHRoaXMuX3BsYXlpbmcgPSBpdGVtLmFkZENsYXNzKCdvd2wtdmlkZW8tcGxheWluZycpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDaGVja3Mgd2hldGhlciBhbiB2aWRlbyBpcyBjdXJyZW50bHkgaW4gZnVsbCBzY3JlZW4gbW9kZSBvciBub3QuXG5cdCAqIEB0b2RvIEJhZCBzdHlsZSBiZWNhdXNlIGxvb2tzIGxpa2UgYSByZWFkb25seSBtZXRob2QgYnV0IGNoYW5nZXMgbWVtYmVycy5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcmV0dXJucyB7Qm9vbGVhbn1cblx0ICovXG5cdFZpZGVvLnByb3RvdHlwZS5pc0luRnVsbFNjcmVlbiA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgfHwgZG9jdW1lbnQubW96RnVsbFNjcmVlbkVsZW1lbnQgfHxcblx0XHRcdFx0ZG9jdW1lbnQud2Via2l0RnVsbHNjcmVlbkVsZW1lbnQ7XG5cblx0XHRyZXR1cm4gZWxlbWVudCAmJiAkKGVsZW1lbnQpLnBhcmVudCgpLmhhc0NsYXNzKCdvd2wtdmlkZW8tZnJhbWUnKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVzdHJveXMgdGhlIHBsdWdpbi5cblx0ICovXG5cdFZpZGVvLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGhhbmRsZXIsIHByb3BlcnR5O1xuXG5cdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vZmYoJ2NsaWNrLm93bC52aWRlbycpO1xuXG5cdFx0Zm9yIChoYW5kbGVyIGluIHRoaXMuX2hhbmRsZXJzKSB7XG5cdFx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9mZihoYW5kbGVyLCB0aGlzLl9oYW5kbGVyc1toYW5kbGVyXSk7XG5cdFx0fVxuXHRcdGZvciAocHJvcGVydHkgaW4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcblx0XHRcdHR5cGVvZiB0aGlzW3Byb3BlcnR5XSAhPSAnZnVuY3Rpb24nICYmICh0aGlzW3Byb3BlcnR5XSA9IG51bGwpO1xuXHRcdH1cblx0fTtcblxuXHQkLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yLlBsdWdpbnMuVmlkZW8gPSBWaWRlbztcblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vKipcbiAqIEFuaW1hdGUgUGx1Z2luXG4gKiBAdmVyc2lvbiAyLjEuMFxuICogQGF1dGhvciBCYXJ0b3N6IFdvamNpZWNob3dza2lcbiAqIEBhdXRob3IgRGF2aWQgRGV1dHNjaFxuICogQGxpY2Vuc2UgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKi9cbjsoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgdGhlIGFuaW1hdGUgcGx1Z2luLlxuXHQgKiBAY2xhc3MgVGhlIE5hdmlnYXRpb24gUGx1Z2luXG5cdCAqIEBwYXJhbSB7T3dsfSBzY29wZSAtIFRoZSBPd2wgQ2Fyb3VzZWxcblx0ICovXG5cdHZhciBBbmltYXRlID0gZnVuY3Rpb24oc2NvcGUpIHtcblx0XHR0aGlzLmNvcmUgPSBzY29wZTtcblx0XHR0aGlzLmNvcmUub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBBbmltYXRlLkRlZmF1bHRzLCB0aGlzLmNvcmUub3B0aW9ucyk7XG5cdFx0dGhpcy5zd2FwcGluZyA9IHRydWU7XG5cdFx0dGhpcy5wcmV2aW91cyA9IHVuZGVmaW5lZDtcblx0XHR0aGlzLm5leHQgPSB1bmRlZmluZWQ7XG5cblx0XHR0aGlzLmhhbmRsZXJzID0ge1xuXHRcdFx0J2NoYW5nZS5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIGUucHJvcGVydHkubmFtZSA9PSAncG9zaXRpb24nKSB7XG5cdFx0XHRcdFx0dGhpcy5wcmV2aW91cyA9IHRoaXMuY29yZS5jdXJyZW50KCk7XG5cdFx0XHRcdFx0dGhpcy5uZXh0ID0gZS5wcm9wZXJ0eS52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQnZHJhZy5vd2wuY2Fyb3VzZWwgZHJhZ2dlZC5vd2wuY2Fyb3VzZWwgdHJhbnNsYXRlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlKSB7XG5cdFx0XHRcdFx0dGhpcy5zd2FwcGluZyA9IGUudHlwZSA9PSAndHJhbnNsYXRlZCc7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3RyYW5zbGF0ZS5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuc3dhcHBpbmcgJiYgKHRoaXMuY29yZS5vcHRpb25zLmFuaW1hdGVPdXQgfHwgdGhpcy5jb3JlLm9wdGlvbnMuYW5pbWF0ZUluKSkge1xuXHRcdFx0XHRcdHRoaXMuc3dhcCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKVxuXHRcdH07XG5cblx0XHR0aGlzLmNvcmUuJGVsZW1lbnQub24odGhpcy5oYW5kbGVycyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlZmF1bHQgb3B0aW9ucy5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0QW5pbWF0ZS5EZWZhdWx0cyA9IHtcblx0XHRhbmltYXRlT3V0OiBmYWxzZSxcblx0XHRhbmltYXRlSW46IGZhbHNlXG5cdH07XG5cblx0LyoqXG5cdCAqIFRvZ2dsZXMgdGhlIGFuaW1hdGlvbiBjbGFzc2VzIHdoZW5ldmVyIGFuIHRyYW5zbGF0aW9ucyBzdGFydHMuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHJldHVybnMge0Jvb2xlYW58dW5kZWZpbmVkfVxuXHQgKi9cblx0QW5pbWF0ZS5wcm90b3R5cGUuc3dhcCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0aWYgKHRoaXMuY29yZS5zZXR0aW5ncy5pdGVtcyAhPT0gMSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghJC5zdXBwb3J0LmFuaW1hdGlvbiB8fCAhJC5zdXBwb3J0LnRyYW5zaXRpb24pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmNvcmUuc3BlZWQoMCk7XG5cblx0XHR2YXIgbGVmdCxcblx0XHRcdGNsZWFyID0gJC5wcm94eSh0aGlzLmNsZWFyLCB0aGlzKSxcblx0XHRcdHByZXZpb3VzID0gdGhpcy5jb3JlLiRzdGFnZS5jaGlsZHJlbigpLmVxKHRoaXMucHJldmlvdXMpLFxuXHRcdFx0bmV4dCA9IHRoaXMuY29yZS4kc3RhZ2UuY2hpbGRyZW4oKS5lcSh0aGlzLm5leHQpLFxuXHRcdFx0aW5jb21pbmcgPSB0aGlzLmNvcmUuc2V0dGluZ3MuYW5pbWF0ZUluLFxuXHRcdFx0b3V0Z29pbmcgPSB0aGlzLmNvcmUuc2V0dGluZ3MuYW5pbWF0ZU91dDtcblxuXHRcdGlmICh0aGlzLmNvcmUuY3VycmVudCgpID09PSB0aGlzLnByZXZpb3VzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKG91dGdvaW5nKSB7XG5cdFx0XHRsZWZ0ID0gdGhpcy5jb3JlLmNvb3JkaW5hdGVzKHRoaXMucHJldmlvdXMpIC0gdGhpcy5jb3JlLmNvb3JkaW5hdGVzKHRoaXMubmV4dCk7XG5cdFx0XHRwcmV2aW91cy5vbmUoJC5zdXBwb3J0LmFuaW1hdGlvbi5lbmQsIGNsZWFyKVxuXHRcdFx0XHQuY3NzKCB7ICdsZWZ0JzogbGVmdCArICdweCcgfSApXG5cdFx0XHRcdC5hZGRDbGFzcygnYW5pbWF0ZWQgb3dsLWFuaW1hdGVkLW91dCcpXG5cdFx0XHRcdC5hZGRDbGFzcyhvdXRnb2luZyk7XG5cdFx0fVxuXG5cdFx0aWYgKGluY29taW5nKSB7XG5cdFx0XHRuZXh0Lm9uZSgkLnN1cHBvcnQuYW5pbWF0aW9uLmVuZCwgY2xlYXIpXG5cdFx0XHRcdC5hZGRDbGFzcygnYW5pbWF0ZWQgb3dsLWFuaW1hdGVkLWluJylcblx0XHRcdFx0LmFkZENsYXNzKGluY29taW5nKTtcblx0XHR9XG5cdH07XG5cblx0QW5pbWF0ZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbihlKSB7XG5cdFx0JChlLnRhcmdldCkuY3NzKCB7ICdsZWZ0JzogJycgfSApXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkIG93bC1hbmltYXRlZC1vdXQgb3dsLWFuaW1hdGVkLWluJylcblx0XHRcdC5yZW1vdmVDbGFzcyh0aGlzLmNvcmUuc2V0dGluZ3MuYW5pbWF0ZUluKVxuXHRcdFx0LnJlbW92ZUNsYXNzKHRoaXMuY29yZS5zZXR0aW5ncy5hbmltYXRlT3V0KTtcblx0XHR0aGlzLmNvcmUub25UcmFuc2l0aW9uRW5kKCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlc3Ryb3lzIHRoZSBwbHVnaW4uXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdEFuaW1hdGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaGFuZGxlciwgcHJvcGVydHk7XG5cblx0XHRmb3IgKGhhbmRsZXIgaW4gdGhpcy5oYW5kbGVycykge1xuXHRcdFx0dGhpcy5jb3JlLiRlbGVtZW50Lm9mZihoYW5kbGVyLCB0aGlzLmhhbmRsZXJzW2hhbmRsZXJdKTtcblx0XHR9XG5cdFx0Zm9yIChwcm9wZXJ0eSBpbiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuXHRcdFx0dHlwZW9mIHRoaXNbcHJvcGVydHldICE9ICdmdW5jdGlvbicgJiYgKHRoaXNbcHJvcGVydHldID0gbnVsbCk7XG5cdFx0fVxuXHR9O1xuXG5cdCQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5BbmltYXRlID0gQW5pbWF0ZTtcblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vKipcbiAqIEF1dG9wbGF5IFBsdWdpblxuICogQHZlcnNpb24gMi4xLjBcbiAqIEBhdXRob3IgQmFydG9zeiBXb2pjaWVjaG93c2tpXG4gKiBAYXV0aG9yIEFydHVzIEtvbGFub3dza2lcbiAqIEBhdXRob3IgRGF2aWQgRGV1dHNjaFxuICogQGxpY2Vuc2UgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKi9cbjsoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgdGhlIGF1dG9wbGF5IHBsdWdpbi5cblx0ICogQGNsYXNzIFRoZSBBdXRvcGxheSBQbHVnaW5cblx0ICogQHBhcmFtIHtPd2x9IHNjb3BlIC0gVGhlIE93bCBDYXJvdXNlbFxuXHQgKi9cblx0dmFyIEF1dG9wbGF5ID0gZnVuY3Rpb24oY2Fyb3VzZWwpIHtcblx0XHQvKipcblx0XHQgKiBSZWZlcmVuY2UgdG8gdGhlIGNvcmUuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPd2x9XG5cdFx0ICovXG5cdFx0dGhpcy5fY29yZSA9IGNhcm91c2VsO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGF1dG9wbGF5IHRpbWVvdXQuXG5cdFx0ICogQHR5cGUge1RpbWVvdXR9XG5cdFx0ICovXG5cdFx0dGhpcy5fdGltZW91dCA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBJbmRpY2F0ZXMgd2hlbmV2ZXIgdGhlIGF1dG9wbGF5IGlzIHBhdXNlZC5cblx0XHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0XHQgKi9cblx0XHR0aGlzLl9wYXVzZWQgPSBmYWxzZTtcblxuXHRcdC8qKlxuXHRcdCAqIEFsbCBldmVudCBoYW5kbGVycy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLl9oYW5kbGVycyA9IHtcblx0XHRcdCdjaGFuZ2VkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgZS5wcm9wZXJ0eS5uYW1lID09PSAnc2V0dGluZ3MnKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b3BsYXkpIHtcblx0XHRcdFx0XHRcdHRoaXMucGxheSgpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnN0b3AoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoZS5uYW1lc3BhY2UgJiYgZS5wcm9wZXJ0eS5uYW1lID09PSAncG9zaXRpb24nKSB7XG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZygncGxheT8nLCBlKTtcblx0XHRcdFx0XHRpZiAodGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvcGxheSkge1xuXHRcdFx0XHRcdFx0dGhpcy5fc2V0QXV0b1BsYXlJbnRlcnZhbCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQnaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9wbGF5KSB7XG5cdFx0XHRcdFx0dGhpcy5wbGF5KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3BsYXkub3dsLmF1dG9wbGF5JzogJC5wcm94eShmdW5jdGlvbihlLCB0LCBzKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSkge1xuXHRcdFx0XHRcdHRoaXMucGxheSh0LCBzKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQnc3RvcC5vd2wuYXV0b3BsYXknOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlKSB7XG5cdFx0XHRcdFx0dGhpcy5zdG9wKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J21vdXNlb3Zlci5vd2wuYXV0b3BsYXknOiAkLnByb3h5KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAodGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvcGxheUhvdmVyUGF1c2UgJiYgdGhpcy5fY29yZS5pcygncm90YXRpbmcnKSkge1xuXHRcdFx0XHRcdHRoaXMucGF1c2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQnbW91c2VsZWF2ZS5vd2wuYXV0b3BsYXknOiAkLnByb3h5KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAodGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvcGxheUhvdmVyUGF1c2UgJiYgdGhpcy5fY29yZS5pcygncm90YXRpbmcnKSkge1xuXHRcdFx0XHRcdHRoaXMucGxheSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCd0b3VjaHN0YXJ0Lm93bC5jb3JlJzogJC5wcm94eShmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b3BsYXlIb3ZlclBhdXNlICYmIHRoaXMuX2NvcmUuaXMoJ3JvdGF0aW5nJykpIHtcblx0XHRcdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3RvdWNoZW5kLm93bC5jb3JlJzogJC5wcm94eShmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b3BsYXlIb3ZlclBhdXNlKSB7XG5cdFx0XHRcdFx0dGhpcy5wbGF5KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpXG5cdFx0fTtcblxuXHRcdC8vIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzXG5cdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vbih0aGlzLl9oYW5kbGVycyk7XG5cblx0XHQvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG5cdFx0dGhpcy5fY29yZS5vcHRpb25zID0gJC5leHRlbmQoe30sIEF1dG9wbGF5LkRlZmF1bHRzLCB0aGlzLl9jb3JlLm9wdGlvbnMpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZWZhdWx0IG9wdGlvbnMuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdEF1dG9wbGF5LkRlZmF1bHRzID0ge1xuXHRcdGF1dG9wbGF5OiBmYWxzZSxcblx0XHRhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXG5cdFx0YXV0b3BsYXlIb3ZlclBhdXNlOiBmYWxzZSxcblx0XHRhdXRvcGxheVNwZWVkOiBmYWxzZVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBTdGFydHMgdGhlIGF1dG9wbGF5LlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbdGltZW91dF0gLSBUaGUgaW50ZXJ2YWwgYmVmb3JlIHRoZSBuZXh0IGFuaW1hdGlvbiBzdGFydHMuXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWRdIC0gVGhlIGFuaW1hdGlvbiBzcGVlZCBmb3IgdGhlIGFuaW1hdGlvbnMuXG5cdCAqL1xuXHRBdXRvcGxheS5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKHRpbWVvdXQsIHNwZWVkKSB7XG5cdFx0dGhpcy5fcGF1c2VkID0gZmFsc2U7XG5cblx0XHRpZiAodGhpcy5fY29yZS5pcygncm90YXRpbmcnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuX2NvcmUuZW50ZXIoJ3JvdGF0aW5nJyk7XG5cblx0XHR0aGlzLl9zZXRBdXRvUGxheUludGVydmFsKCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgYSBuZXcgdGltZW91dFxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge051bWJlcn0gW3RpbWVvdXRdIC0gVGhlIGludGVydmFsIGJlZm9yZSB0aGUgbmV4dCBhbmltYXRpb24gc3RhcnRzLlxuXHQgKiBAcGFyYW0ge051bWJlcn0gW3NwZWVkXSAtIFRoZSBhbmltYXRpb24gc3BlZWQgZm9yIHRoZSBhbmltYXRpb25zLlxuXHQgKiBAcmV0dXJuIHtUaW1lb3V0fVxuXHQgKi9cblx0QXV0b3BsYXkucHJvdG90eXBlLl9nZXROZXh0VGltZW91dCA9IGZ1bmN0aW9uKHRpbWVvdXQsIHNwZWVkKSB7XG5cdFx0aWYgKCB0aGlzLl90aW1lb3V0ICkge1xuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcblx0XHR9XG5cdFx0cmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAodGhpcy5fcGF1c2VkIHx8IHRoaXMuX2NvcmUuaXMoJ2J1c3knKSB8fCB0aGlzLl9jb3JlLmlzKCdpbnRlcmFjdGluZycpIHx8IGRvY3VtZW50LmhpZGRlbikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9jb3JlLm5leHQoc3BlZWQgfHwgdGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvcGxheVNwZWVkKTtcblx0XHR9LCB0aGlzKSwgdGltZW91dCB8fCB0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9wbGF5VGltZW91dCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldHMgYXV0b3BsYXkgaW4gbW90aW9uLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0QXV0b3BsYXkucHJvdG90eXBlLl9zZXRBdXRvUGxheUludGVydmFsID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5fdGltZW91dCA9IHRoaXMuX2dldE5leHRUaW1lb3V0KCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFN0b3BzIHRoZSBhdXRvcGxheS5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0QXV0b3BsYXkucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoIXRoaXMuX2NvcmUuaXMoJ3JvdGF0aW5nJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuXHRcdHRoaXMuX2NvcmUubGVhdmUoJ3JvdGF0aW5nJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFN0b3BzIHRoZSBhdXRvcGxheS5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0QXV0b3BsYXkucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCF0aGlzLl9jb3JlLmlzKCdyb3RhdGluZycpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5fcGF1c2VkID0gdHJ1ZTtcblx0fTtcblxuXHQvKipcblx0ICogRGVzdHJveXMgdGhlIHBsdWdpbi5cblx0ICovXG5cdEF1dG9wbGF5LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGhhbmRsZXIsIHByb3BlcnR5O1xuXG5cdFx0dGhpcy5zdG9wKCk7XG5cblx0XHRmb3IgKGhhbmRsZXIgaW4gdGhpcy5faGFuZGxlcnMpIHtcblx0XHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub2ZmKGhhbmRsZXIsIHRoaXMuX2hhbmRsZXJzW2hhbmRsZXJdKTtcblx0XHR9XG5cdFx0Zm9yIChwcm9wZXJ0eSBpbiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuXHRcdFx0dHlwZW9mIHRoaXNbcHJvcGVydHldICE9ICdmdW5jdGlvbicgJiYgKHRoaXNbcHJvcGVydHldID0gbnVsbCk7XG5cdFx0fVxuXHR9O1xuXG5cdCQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5hdXRvcGxheSA9IEF1dG9wbGF5O1xuXG59KSh3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XG5cbi8qKlxuICogTmF2aWdhdGlvbiBQbHVnaW5cbiAqIEB2ZXJzaW9uIDIuMS4wXG4gKiBAYXV0aG9yIEFydHVzIEtvbGFub3dza2lcbiAqIEBhdXRob3IgRGF2aWQgRGV1dHNjaFxuICogQGxpY2Vuc2UgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKi9cbjsoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHQvKipcblx0ICogQ3JlYXRlcyB0aGUgbmF2aWdhdGlvbiBwbHVnaW4uXG5cdCAqIEBjbGFzcyBUaGUgTmF2aWdhdGlvbiBQbHVnaW5cblx0ICogQHBhcmFtIHtPd2x9IGNhcm91c2VsIC0gVGhlIE93bCBDYXJvdXNlbC5cblx0ICovXG5cdHZhciBOYXZpZ2F0aW9uID0gZnVuY3Rpb24oY2Fyb3VzZWwpIHtcblx0XHQvKipcblx0XHQgKiBSZWZlcmVuY2UgdG8gdGhlIGNvcmUuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPd2x9XG5cdFx0ICovXG5cdFx0dGhpcy5fY29yZSA9IGNhcm91c2VsO1xuXG5cdFx0LyoqXG5cdFx0ICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHBsdWdpbiBpcyBpbml0aWFsaXplZCBvciBub3QuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtCb29sZWFufVxuXHRcdCAqL1xuXHRcdHRoaXMuX2luaXRpYWxpemVkID0gZmFsc2U7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgY3VycmVudCBwYWdpbmcgaW5kZXhlcy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge0FycmF5fVxuXHRcdCAqL1xuXHRcdHRoaXMuX3BhZ2VzID0gW107XG5cblx0XHQvKipcblx0XHQgKiBBbGwgRE9NIGVsZW1lbnRzIG9mIHRoZSB1c2VyIGludGVyZmFjZS5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLl9jb250cm9scyA9IHt9O1xuXG5cdFx0LyoqXG5cdFx0ICogTWFya3VwIGZvciBhbiBpbmRpY2F0b3IuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtBcnJheS48U3RyaW5nPn1cblx0XHQgKi9cblx0XHR0aGlzLl90ZW1wbGF0ZXMgPSBbXTtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBjYXJvdXNlbCBlbGVtZW50LlxuXHRcdCAqIEB0eXBlIHtqUXVlcnl9XG5cdFx0ICovXG5cdFx0dGhpcy4kZWxlbWVudCA9IHRoaXMuX2NvcmUuJGVsZW1lbnQ7XG5cblx0XHQvKipcblx0XHQgKiBPdmVycmlkZGVuIG1ldGhvZHMgb2YgdGhlIGNhcm91c2VsLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX292ZXJyaWRlcyA9IHtcblx0XHRcdG5leHQ6IHRoaXMuX2NvcmUubmV4dCxcblx0XHRcdHByZXY6IHRoaXMuX2NvcmUucHJldixcblx0XHRcdHRvOiB0aGlzLl9jb3JlLnRvXG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIEFsbCBldmVudCBoYW5kbGVycy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLl9oYW5kbGVycyA9IHtcblx0XHRcdCdwcmVwYXJlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuc2V0dGluZ3MuZG90c0RhdGEpIHtcblx0XHRcdFx0XHR0aGlzLl90ZW1wbGF0ZXMucHVzaCgnPGRpdiBjbGFzcz1cIicgKyB0aGlzLl9jb3JlLnNldHRpbmdzLmRvdENsYXNzICsgJ1wiPicgK1xuXHRcdFx0XHRcdFx0JChlLmNvbnRlbnQpLmZpbmQoJ1tkYXRhLWRvdF0nKS5hZGRCYWNrKCdbZGF0YS1kb3RdJykuYXR0cignZGF0YS1kb3QnKSArICc8L2Rpdj4nKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQnYWRkZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLmRvdHNEYXRhKSB7XG5cdFx0XHRcdFx0dGhpcy5fdGVtcGxhdGVzLnNwbGljZShlLnBvc2l0aW9uLCAwLCB0aGlzLl90ZW1wbGF0ZXMucG9wKCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdyZW1vdmUub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLmRvdHNEYXRhKSB7XG5cdFx0XHRcdFx0dGhpcy5fdGVtcGxhdGVzLnNwbGljZShlLnBvc2l0aW9uLCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQnY2hhbmdlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIGUucHJvcGVydHkubmFtZSA9PSAncG9zaXRpb24nKSB7XG5cdFx0XHRcdFx0dGhpcy5kcmF3KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J2luaXRpYWxpemVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgIXRoaXMuX2luaXRpYWxpemVkKSB7XG5cdFx0XHRcdFx0dGhpcy5fY29yZS50cmlnZ2VyKCdpbml0aWFsaXplJywgbnVsbCwgJ25hdmlnYXRpb24nKTtcblx0XHRcdFx0XHR0aGlzLmluaXRpYWxpemUoKTtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdFx0XHRcdHRoaXMuZHJhdygpO1xuXHRcdFx0XHRcdHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcblx0XHRcdFx0XHR0aGlzLl9jb3JlLnRyaWdnZXIoJ2luaXRpYWxpemVkJywgbnVsbCwgJ25hdmlnYXRpb24nKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQncmVmcmVzaGVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5faW5pdGlhbGl6ZWQpIHtcblx0XHRcdFx0XHR0aGlzLl9jb3JlLnRyaWdnZXIoJ3JlZnJlc2gnLCBudWxsLCAnbmF2aWdhdGlvbicpO1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0XHRcdFx0dGhpcy5kcmF3KCk7XG5cdFx0XHRcdFx0dGhpcy5fY29yZS50cmlnZ2VyKCdyZWZyZXNoZWQnLCBudWxsLCAnbmF2aWdhdGlvbicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKVxuXHRcdH07XG5cblx0XHQvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG5cdFx0dGhpcy5fY29yZS5vcHRpb25zID0gJC5leHRlbmQoe30sIE5hdmlnYXRpb24uRGVmYXVsdHMsIHRoaXMuX2NvcmUub3B0aW9ucyk7XG5cblx0XHQvLyByZWdpc3RlciBldmVudCBoYW5kbGVyc1xuXHRcdHRoaXMuJGVsZW1lbnQub24odGhpcy5faGFuZGxlcnMpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZWZhdWx0IG9wdGlvbnMuXG5cdCAqIEBwdWJsaWNcblx0ICogQHRvZG8gUmVuYW1lIGBzbGlkZUJ5YCB0byBgbmF2QnlgXG5cdCAqL1xuXHROYXZpZ2F0aW9uLkRlZmF1bHRzID0ge1xuXHRcdG5hdjogZmFsc2UsXG5cdFx0bmF2VGV4dDogWyAncHJldicsICduZXh0JyBdLFxuXHRcdG5hdlNwZWVkOiBmYWxzZSxcblx0XHRuYXZFbGVtZW50OiAnZGl2Jyxcblx0XHRuYXZDb250YWluZXI6IGZhbHNlLFxuXHRcdG5hdkNvbnRhaW5lckNsYXNzOiAnb3dsLW5hdicsXG5cdFx0bmF2Q2xhc3M6IFsgJ293bC1wcmV2JywgJ293bC1uZXh0JyBdLFxuXHRcdHNsaWRlQnk6IDEsXG5cdFx0ZG90Q2xhc3M6ICdvd2wtZG90Jyxcblx0XHRkb3RzQ2xhc3M6ICdvd2wtZG90cycsXG5cdFx0ZG90czogdHJ1ZSxcblx0XHRkb3RzRWFjaDogZmFsc2UsXG5cdFx0ZG90c0RhdGE6IGZhbHNlLFxuXHRcdGRvdHNTcGVlZDogZmFsc2UsXG5cdFx0ZG90c0NvbnRhaW5lcjogZmFsc2Vcblx0fTtcblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZXMgdGhlIGxheW91dCBvZiB0aGUgcGx1Z2luIGFuZCBleHRlbmRzIHRoZSBjYXJvdXNlbC5cblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0TmF2aWdhdGlvbi5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBvdmVycmlkZSxcblx0XHRcdHNldHRpbmdzID0gdGhpcy5fY29yZS5zZXR0aW5ncztcblxuXHRcdC8vIGNyZWF0ZSBET00gc3RydWN0dXJlIGZvciByZWxhdGl2ZSBuYXZpZ2F0aW9uXG5cdFx0dGhpcy5fY29udHJvbHMuJHJlbGF0aXZlID0gKHNldHRpbmdzLm5hdkNvbnRhaW5lciA/ICQoc2V0dGluZ3MubmF2Q29udGFpbmVyKVxuXHRcdFx0OiAkKCc8ZGl2PicpLmFkZENsYXNzKHNldHRpbmdzLm5hdkNvbnRhaW5lckNsYXNzKS5hcHBlbmRUbyh0aGlzLiRlbGVtZW50KSkuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cblx0XHR0aGlzLl9jb250cm9scy4kcHJldmlvdXMgPSAkKCc8JyArIHNldHRpbmdzLm5hdkVsZW1lbnQgKyAnPicpXG5cdFx0XHQuYWRkQ2xhc3Moc2V0dGluZ3MubmF2Q2xhc3NbMF0pXG5cdFx0XHQuaHRtbChzZXR0aW5ncy5uYXZUZXh0WzBdKVxuXHRcdFx0LnByZXBlbmRUbyh0aGlzLl9jb250cm9scy4kcmVsYXRpdmUpXG5cdFx0XHQub24oJ2NsaWNrJywgJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdHRoaXMucHJldihzZXR0aW5ncy5uYXZTcGVlZCk7XG5cdFx0XHR9LCB0aGlzKSk7XG5cdFx0dGhpcy5fY29udHJvbHMuJG5leHQgPSAkKCc8JyArIHNldHRpbmdzLm5hdkVsZW1lbnQgKyAnPicpXG5cdFx0XHQuYWRkQ2xhc3Moc2V0dGluZ3MubmF2Q2xhc3NbMV0pXG5cdFx0XHQuaHRtbChzZXR0aW5ncy5uYXZUZXh0WzFdKVxuXHRcdFx0LmFwcGVuZFRvKHRoaXMuX2NvbnRyb2xzLiRyZWxhdGl2ZSlcblx0XHRcdC5vbignY2xpY2snLCAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dGhpcy5uZXh0KHNldHRpbmdzLm5hdlNwZWVkKTtcblx0XHRcdH0sIHRoaXMpKTtcblxuXHRcdC8vIGNyZWF0ZSBET00gc3RydWN0dXJlIGZvciBhYnNvbHV0ZSBuYXZpZ2F0aW9uXG5cdFx0aWYgKCFzZXR0aW5ncy5kb3RzRGF0YSkge1xuXHRcdFx0dGhpcy5fdGVtcGxhdGVzID0gWyAkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcyhzZXR0aW5ncy5kb3RDbGFzcylcblx0XHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKSlcblx0XHRcdFx0LnByb3AoJ291dGVySFRNTCcpIF07XG5cdFx0fVxuXG5cdFx0dGhpcy5fY29udHJvbHMuJGFic29sdXRlID0gKHNldHRpbmdzLmRvdHNDb250YWluZXIgPyAkKHNldHRpbmdzLmRvdHNDb250YWluZXIpXG5cdFx0XHQ6ICQoJzxkaXY+JykuYWRkQ2xhc3Moc2V0dGluZ3MuZG90c0NsYXNzKS5hcHBlbmRUbyh0aGlzLiRlbGVtZW50KSkuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cblx0XHR0aGlzLl9jb250cm9scy4kYWJzb2x1dGUub24oJ2NsaWNrJywgJ2RpdicsICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyIGluZGV4ID0gJChlLnRhcmdldCkucGFyZW50KCkuaXModGhpcy5fY29udHJvbHMuJGFic29sdXRlKVxuXHRcdFx0XHQ/ICQoZS50YXJnZXQpLmluZGV4KCkgOiAkKGUudGFyZ2V0KS5wYXJlbnQoKS5pbmRleCgpO1xuXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdHRoaXMudG8oaW5kZXgsIHNldHRpbmdzLmRvdHNTcGVlZCk7XG5cdFx0fSwgdGhpcykpO1xuXG5cdFx0Ly8gb3ZlcnJpZGUgcHVibGljIG1ldGhvZHMgb2YgdGhlIGNhcm91c2VsXG5cdFx0Zm9yIChvdmVycmlkZSBpbiB0aGlzLl9vdmVycmlkZXMpIHtcblx0XHRcdHRoaXMuX2NvcmVbb3ZlcnJpZGVdID0gJC5wcm94eSh0aGlzW292ZXJyaWRlXSwgdGhpcyk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZXN0cm95cyB0aGUgcGx1Z2luLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGhhbmRsZXIsIGNvbnRyb2wsIHByb3BlcnR5LCBvdmVycmlkZTtcblxuXHRcdGZvciAoaGFuZGxlciBpbiB0aGlzLl9oYW5kbGVycykge1xuXHRcdFx0dGhpcy4kZWxlbWVudC5vZmYoaGFuZGxlciwgdGhpcy5faGFuZGxlcnNbaGFuZGxlcl0pO1xuXHRcdH1cblx0XHRmb3IgKGNvbnRyb2wgaW4gdGhpcy5fY29udHJvbHMpIHtcblx0XHRcdHRoaXMuX2NvbnRyb2xzW2NvbnRyb2xdLnJlbW92ZSgpO1xuXHRcdH1cblx0XHRmb3IgKG92ZXJyaWRlIGluIHRoaXMub3ZlcmlkZXMpIHtcblx0XHRcdHRoaXMuX2NvcmVbb3ZlcnJpZGVdID0gdGhpcy5fb3ZlcnJpZGVzW292ZXJyaWRlXTtcblx0XHR9XG5cdFx0Zm9yIChwcm9wZXJ0eSBpbiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuXHRcdFx0dHlwZW9mIHRoaXNbcHJvcGVydHldICE9ICdmdW5jdGlvbicgJiYgKHRoaXNbcHJvcGVydHldID0gbnVsbCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIHRoZSBpbnRlcm5hbCBzdGF0ZS5cblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0TmF2aWdhdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGksIGosIGssXG5cdFx0XHRsb3dlciA9IHRoaXMuX2NvcmUuY2xvbmVzKCkubGVuZ3RoIC8gMixcblx0XHRcdHVwcGVyID0gbG93ZXIgKyB0aGlzLl9jb3JlLml0ZW1zKCkubGVuZ3RoLFxuXHRcdFx0bWF4aW11bSA9IHRoaXMuX2NvcmUubWF4aW11bSh0cnVlKSxcblx0XHRcdHNldHRpbmdzID0gdGhpcy5fY29yZS5zZXR0aW5ncyxcblx0XHRcdHNpemUgPSBzZXR0aW5ncy5jZW50ZXIgfHwgc2V0dGluZ3MuYXV0b1dpZHRoIHx8IHNldHRpbmdzLmRvdHNEYXRhXG5cdFx0XHRcdD8gMSA6IHNldHRpbmdzLmRvdHNFYWNoIHx8IHNldHRpbmdzLml0ZW1zO1xuXG5cdFx0aWYgKHNldHRpbmdzLnNsaWRlQnkgIT09ICdwYWdlJykge1xuXHRcdFx0c2V0dGluZ3Muc2xpZGVCeSA9IE1hdGgubWluKHNldHRpbmdzLnNsaWRlQnksIHNldHRpbmdzLml0ZW1zKTtcblx0XHR9XG5cblx0XHRpZiAoc2V0dGluZ3MuZG90cyB8fCBzZXR0aW5ncy5zbGlkZUJ5ID09ICdwYWdlJykge1xuXHRcdFx0dGhpcy5fcGFnZXMgPSBbXTtcblxuXHRcdFx0Zm9yIChpID0gbG93ZXIsIGogPSAwLCBrID0gMDsgaSA8IHVwcGVyOyBpKyspIHtcblx0XHRcdFx0aWYgKGogPj0gc2l6ZSB8fCBqID09PSAwKSB7XG5cdFx0XHRcdFx0dGhpcy5fcGFnZXMucHVzaCh7XG5cdFx0XHRcdFx0XHRzdGFydDogTWF0aC5taW4obWF4aW11bSwgaSAtIGxvd2VyKSxcblx0XHRcdFx0XHRcdGVuZDogaSAtIGxvd2VyICsgc2l6ZSAtIDFcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRpZiAoTWF0aC5taW4obWF4aW11bSwgaSAtIGxvd2VyKSA9PT0gbWF4aW11bSkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGogPSAwLCArK2s7XG5cdFx0XHRcdH1cblx0XHRcdFx0aiArPSB0aGlzLl9jb3JlLm1lcmdlcnModGhpcy5fY29yZS5yZWxhdGl2ZShpKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBEcmF3cyB0aGUgdXNlciBpbnRlcmZhY2UuXG5cdCAqIEB0b2RvIFRoZSBvcHRpb24gYGRvdHNEYXRhYCB3b250IHdvcmsuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdE5hdmlnYXRpb24ucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgZGlmZmVyZW5jZSxcblx0XHRcdHNldHRpbmdzID0gdGhpcy5fY29yZS5zZXR0aW5ncyxcblx0XHRcdGRpc2FibGVkID0gdGhpcy5fY29yZS5pdGVtcygpLmxlbmd0aCA8PSBzZXR0aW5ncy5pdGVtcyxcblx0XHRcdGluZGV4ID0gdGhpcy5fY29yZS5yZWxhdGl2ZSh0aGlzLl9jb3JlLmN1cnJlbnQoKSksXG5cdFx0XHRsb29wID0gc2V0dGluZ3MubG9vcCB8fCBzZXR0aW5ncy5yZXdpbmQ7XG5cblx0XHR0aGlzLl9jb250cm9scy4kcmVsYXRpdmUudG9nZ2xlQ2xhc3MoJ2Rpc2FibGVkJywgIXNldHRpbmdzLm5hdiB8fCBkaXNhYmxlZCk7XG5cblx0XHRpZiAoc2V0dGluZ3MubmF2KSB7XG5cdFx0XHR0aGlzLl9jb250cm9scy4kcHJldmlvdXMudG9nZ2xlQ2xhc3MoJ2Rpc2FibGVkJywgIWxvb3AgJiYgaW5kZXggPD0gdGhpcy5fY29yZS5taW5pbXVtKHRydWUpKTtcblx0XHRcdHRoaXMuX2NvbnRyb2xzLiRuZXh0LnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsICFsb29wICYmIGluZGV4ID49IHRoaXMuX2NvcmUubWF4aW11bSh0cnVlKSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fY29udHJvbHMuJGFic29sdXRlLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsICFzZXR0aW5ncy5kb3RzIHx8IGRpc2FibGVkKTtcblxuXHRcdGlmIChzZXR0aW5ncy5kb3RzKSB7XG5cdFx0XHRkaWZmZXJlbmNlID0gdGhpcy5fcGFnZXMubGVuZ3RoIC0gdGhpcy5fY29udHJvbHMuJGFic29sdXRlLmNoaWxkcmVuKCkubGVuZ3RoO1xuXG5cdFx0XHRpZiAoc2V0dGluZ3MuZG90c0RhdGEgJiYgZGlmZmVyZW5jZSAhPT0gMCkge1xuXHRcdFx0XHR0aGlzLl9jb250cm9scy4kYWJzb2x1dGUuaHRtbCh0aGlzLl90ZW1wbGF0ZXMuam9pbignJykpO1xuXHRcdFx0fSBlbHNlIGlmIChkaWZmZXJlbmNlID4gMCkge1xuXHRcdFx0XHR0aGlzLl9jb250cm9scy4kYWJzb2x1dGUuYXBwZW5kKG5ldyBBcnJheShkaWZmZXJlbmNlICsgMSkuam9pbih0aGlzLl90ZW1wbGF0ZXNbMF0pKTtcblx0XHRcdH0gZWxzZSBpZiAoZGlmZmVyZW5jZSA8IDApIHtcblx0XHRcdFx0dGhpcy5fY29udHJvbHMuJGFic29sdXRlLmNoaWxkcmVuKCkuc2xpY2UoZGlmZmVyZW5jZSkucmVtb3ZlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZS5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0dGhpcy5fY29udHJvbHMuJGFic29sdXRlLmNoaWxkcmVuKCkuZXEoJC5pbkFycmF5KHRoaXMuY3VycmVudCgpLCB0aGlzLl9wYWdlcykpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIEV4dGVuZHMgZXZlbnQgZGF0YS5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIFRoZSBldmVudCBvYmplY3Qgd2hpY2ggZ2V0cyB0aHJvd24uXG5cdCAqL1xuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS5vblRyaWdnZXIgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciBzZXR0aW5ncyA9IHRoaXMuX2NvcmUuc2V0dGluZ3M7XG5cblx0XHRldmVudC5wYWdlID0ge1xuXHRcdFx0aW5kZXg6ICQuaW5BcnJheSh0aGlzLmN1cnJlbnQoKSwgdGhpcy5fcGFnZXMpLFxuXHRcdFx0Y291bnQ6IHRoaXMuX3BhZ2VzLmxlbmd0aCxcblx0XHRcdHNpemU6IHNldHRpbmdzICYmIChzZXR0aW5ncy5jZW50ZXIgfHwgc2V0dGluZ3MuYXV0b1dpZHRoIHx8IHNldHRpbmdzLmRvdHNEYXRhXG5cdFx0XHRcdD8gMSA6IHNldHRpbmdzLmRvdHNFYWNoIHx8IHNldHRpbmdzLml0ZW1zKVxuXHRcdH07XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIGN1cnJlbnQgcGFnZSBwb3NpdGlvbiBvZiB0aGUgY2Fyb3VzZWwuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHJldHVybnMge051bWJlcn1cblx0ICovXG5cdE5hdmlnYXRpb24ucHJvdG90eXBlLmN1cnJlbnQgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgY3VycmVudCA9IHRoaXMuX2NvcmUucmVsYXRpdmUodGhpcy5fY29yZS5jdXJyZW50KCkpO1xuXHRcdHJldHVybiAkLmdyZXAodGhpcy5fcGFnZXMsICQucHJveHkoZnVuY3Rpb24ocGFnZSwgaW5kZXgpIHtcblx0XHRcdHJldHVybiBwYWdlLnN0YXJ0IDw9IGN1cnJlbnQgJiYgcGFnZS5lbmQgPj0gY3VycmVudDtcblx0XHR9LCB0aGlzKSkucG9wKCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIGN1cnJlbnQgc3VjY2Vzb3IvcHJlZGVjZXNzb3IgcG9zaXRpb24uXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHJldHVybnMge051bWJlcn1cblx0ICovXG5cdE5hdmlnYXRpb24ucHJvdG90eXBlLmdldFBvc2l0aW9uID0gZnVuY3Rpb24oc3VjY2Vzc29yKSB7XG5cdFx0dmFyIHBvc2l0aW9uLCBsZW5ndGgsXG5cdFx0XHRzZXR0aW5ncyA9IHRoaXMuX2NvcmUuc2V0dGluZ3M7XG5cblx0XHRpZiAoc2V0dGluZ3Muc2xpZGVCeSA9PSAncGFnZScpIHtcblx0XHRcdHBvc2l0aW9uID0gJC5pbkFycmF5KHRoaXMuY3VycmVudCgpLCB0aGlzLl9wYWdlcyk7XG5cdFx0XHRsZW5ndGggPSB0aGlzLl9wYWdlcy5sZW5ndGg7XG5cdFx0XHRzdWNjZXNzb3IgPyArK3Bvc2l0aW9uIDogLS1wb3NpdGlvbjtcblx0XHRcdHBvc2l0aW9uID0gdGhpcy5fcGFnZXNbKChwb3NpdGlvbiAlIGxlbmd0aCkgKyBsZW5ndGgpICUgbGVuZ3RoXS5zdGFydDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cG9zaXRpb24gPSB0aGlzLl9jb3JlLnJlbGF0aXZlKHRoaXMuX2NvcmUuY3VycmVudCgpKTtcblx0XHRcdGxlbmd0aCA9IHRoaXMuX2NvcmUuaXRlbXMoKS5sZW5ndGg7XG5cdFx0XHRzdWNjZXNzb3IgPyBwb3NpdGlvbiArPSBzZXR0aW5ncy5zbGlkZUJ5IDogcG9zaXRpb24gLT0gc2V0dGluZ3Muc2xpZGVCeTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcG9zaXRpb247XG5cdH07XG5cblx0LyoqXG5cdCAqIFNsaWRlcyB0byB0aGUgbmV4dCBpdGVtIG9yIHBhZ2UuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtzcGVlZD1mYWxzZV0gLSBUaGUgdGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIHRoZSB0cmFuc2l0aW9uLlxuXHQgKi9cblx0TmF2aWdhdGlvbi5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKHNwZWVkKSB7XG5cdFx0JC5wcm94eSh0aGlzLl9vdmVycmlkZXMudG8sIHRoaXMuX2NvcmUpKHRoaXMuZ2V0UG9zaXRpb24odHJ1ZSksIHNwZWVkKTtcblx0fTtcblxuXHQvKipcblx0ICogU2xpZGVzIHRvIHRoZSBwcmV2aW91cyBpdGVtIG9yIHBhZ2UuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtzcGVlZD1mYWxzZV0gLSBUaGUgdGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIHRoZSB0cmFuc2l0aW9uLlxuXHQgKi9cblx0TmF2aWdhdGlvbi5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uKHNwZWVkKSB7XG5cdFx0JC5wcm94eSh0aGlzLl9vdmVycmlkZXMudG8sIHRoaXMuX2NvcmUpKHRoaXMuZ2V0UG9zaXRpb24oZmFsc2UpLCBzcGVlZCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNsaWRlcyB0byB0aGUgc3BlY2lmaWVkIGl0ZW0gb3IgcGFnZS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gcG9zaXRpb24gLSBUaGUgcG9zaXRpb24gb2YgdGhlIGl0ZW0gb3IgcGFnZS5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtzcGVlZF0gLSBUaGUgdGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIHRoZSB0cmFuc2l0aW9uLlxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtzdGFuZGFyZD1mYWxzZV0gLSBXaGV0aGVyIHRvIHVzZSB0aGUgc3RhbmRhcmQgYmVoYXZpb3VyIG9yIG5vdC5cblx0ICovXG5cdE5hdmlnYXRpb24ucHJvdG90eXBlLnRvID0gZnVuY3Rpb24ocG9zaXRpb24sIHNwZWVkLCBzdGFuZGFyZCkge1xuXHRcdHZhciBsZW5ndGg7XG5cblx0XHRpZiAoIXN0YW5kYXJkICYmIHRoaXMuX3BhZ2VzLmxlbmd0aCkge1xuXHRcdFx0bGVuZ3RoID0gdGhpcy5fcGFnZXMubGVuZ3RoO1xuXHRcdFx0JC5wcm94eSh0aGlzLl9vdmVycmlkZXMudG8sIHRoaXMuX2NvcmUpKHRoaXMuX3BhZ2VzWygocG9zaXRpb24gJSBsZW5ndGgpICsgbGVuZ3RoKSAlIGxlbmd0aF0uc3RhcnQsIHNwZWVkKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JC5wcm94eSh0aGlzLl9vdmVycmlkZXMudG8sIHRoaXMuX2NvcmUpKHBvc2l0aW9uLCBzcGVlZCk7XG5cdFx0fVxuXHR9O1xuXG5cdCQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5OYXZpZ2F0aW9uID0gTmF2aWdhdGlvbjtcblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vKipcbiAqIEhhc2ggUGx1Z2luXG4gKiBAdmVyc2lvbiAyLjEuMFxuICogQGF1dGhvciBBcnR1cyBLb2xhbm93c2tpXG4gKiBAYXV0aG9yIERhdmlkIERldXRzY2hcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgdGhlIGhhc2ggcGx1Z2luLlxuXHQgKiBAY2xhc3MgVGhlIEhhc2ggUGx1Z2luXG5cdCAqIEBwYXJhbSB7T3dsfSBjYXJvdXNlbCAtIFRoZSBPd2wgQ2Fyb3VzZWxcblx0ICovXG5cdHZhciBIYXNoID0gZnVuY3Rpb24oY2Fyb3VzZWwpIHtcblx0XHQvKipcblx0XHQgKiBSZWZlcmVuY2UgdG8gdGhlIGNvcmUuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPd2x9XG5cdFx0ICovXG5cdFx0dGhpcy5fY29yZSA9IGNhcm91c2VsO1xuXG5cdFx0LyoqXG5cdFx0ICogSGFzaCBpbmRleCBmb3IgdGhlIGl0ZW1zLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2hhc2hlcyA9IHt9O1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGNhcm91c2VsIGVsZW1lbnQuXG5cdFx0ICogQHR5cGUge2pRdWVyeX1cblx0XHQgKi9cblx0XHR0aGlzLiRlbGVtZW50ID0gdGhpcy5fY29yZS4kZWxlbWVudDtcblxuXHRcdC8qKlxuXHRcdCAqIEFsbCBldmVudCBoYW5kbGVycy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLl9oYW5kbGVycyA9IHtcblx0XHRcdCdpbml0aWFsaXplZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuc2V0dGluZ3Muc3RhcnRQb3NpdGlvbiA9PT0gJ1VSTEhhc2gnKSB7XG5cdFx0XHRcdFx0JCh3aW5kb3cpLnRyaWdnZXIoJ2hhc2hjaGFuZ2Uub3dsLm5hdmlnYXRpb24nKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQncHJlcGFyZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSkge1xuXHRcdFx0XHRcdHZhciBoYXNoID0gJChlLmNvbnRlbnQpLmZpbmQoJ1tkYXRhLWhhc2hdJykuYWRkQmFjaygnW2RhdGEtaGFzaF0nKS5hdHRyKCdkYXRhLWhhc2gnKTtcblxuXHRcdFx0XHRcdGlmICghaGFzaCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuX2hhc2hlc1toYXNoXSA9IGUuY29udGVudDtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQnY2hhbmdlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIGUucHJvcGVydHkubmFtZSA9PT0gJ3Bvc2l0aW9uJykge1xuXHRcdFx0XHRcdHZhciBjdXJyZW50ID0gdGhpcy5fY29yZS5pdGVtcyh0aGlzLl9jb3JlLnJlbGF0aXZlKHRoaXMuX2NvcmUuY3VycmVudCgpKSksXG5cdFx0XHRcdFx0XHRoYXNoID0gJC5tYXAodGhpcy5faGFzaGVzLCBmdW5jdGlvbihpdGVtLCBoYXNoKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBpdGVtID09PSBjdXJyZW50ID8gaGFzaCA6IG51bGw7XG5cdFx0XHRcdFx0XHR9KS5qb2luKCk7XG5cblx0XHRcdFx0XHRpZiAoIWhhc2ggfHwgd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSkgPT09IGhhc2gpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpXG5cdFx0fTtcblxuXHRcdC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcblx0XHR0aGlzLl9jb3JlLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgSGFzaC5EZWZhdWx0cywgdGhpcy5fY29yZS5vcHRpb25zKTtcblxuXHRcdC8vIHJlZ2lzdGVyIHRoZSBldmVudCBoYW5kbGVyc1xuXHRcdHRoaXMuJGVsZW1lbnQub24odGhpcy5faGFuZGxlcnMpO1xuXG5cdFx0Ly8gcmVnaXN0ZXIgZXZlbnQgbGlzdGVuZXIgZm9yIGhhc2ggbmF2aWdhdGlvblxuXHRcdCQod2luZG93KS5vbignaGFzaGNoYW5nZS5vd2wubmF2aWdhdGlvbicsICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSksXG5cdFx0XHRcdGl0ZW1zID0gdGhpcy5fY29yZS4kc3RhZ2UuY2hpbGRyZW4oKSxcblx0XHRcdFx0cG9zaXRpb24gPSB0aGlzLl9oYXNoZXNbaGFzaF0gJiYgaXRlbXMuaW5kZXgodGhpcy5faGFzaGVzW2hhc2hdKTtcblxuXHRcdFx0aWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQgfHwgcG9zaXRpb24gPT09IHRoaXMuX2NvcmUuY3VycmVudCgpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fY29yZS50byh0aGlzLl9jb3JlLnJlbGF0aXZlKHBvc2l0aW9uKSwgZmFsc2UsIHRydWUpO1xuXHRcdH0sIHRoaXMpKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVmYXVsdCBvcHRpb25zLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRIYXNoLkRlZmF1bHRzID0ge1xuXHRcdFVSTGhhc2hMaXN0ZW5lcjogZmFsc2Vcblx0fTtcblxuXHQvKipcblx0ICogRGVzdHJveXMgdGhlIHBsdWdpbi5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0SGFzaC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBoYW5kbGVyLCBwcm9wZXJ0eTtcblxuXHRcdCQod2luZG93KS5vZmYoJ2hhc2hjaGFuZ2Uub3dsLm5hdmlnYXRpb24nKTtcblxuXHRcdGZvciAoaGFuZGxlciBpbiB0aGlzLl9oYW5kbGVycykge1xuXHRcdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vZmYoaGFuZGxlciwgdGhpcy5faGFuZGxlcnNbaGFuZGxlcl0pO1xuXHRcdH1cblx0XHRmb3IgKHByb3BlcnR5IGluIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKSB7XG5cdFx0XHR0eXBlb2YgdGhpc1twcm9wZXJ0eV0gIT0gJ2Z1bmN0aW9uJyAmJiAodGhpc1twcm9wZXJ0eV0gPSBudWxsKTtcblx0XHR9XG5cdH07XG5cblx0JC5mbi5vd2xDYXJvdXNlbC5Db25zdHJ1Y3Rvci5QbHVnaW5zLkhhc2ggPSBIYXNoO1xuXG59KSh3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XG5cbi8qKlxuICogU3VwcG9ydCBQbHVnaW5cbiAqXG4gKiBAdmVyc2lvbiAyLjEuMFxuICogQGF1dGhvciBWaXZpZCBQbGFuZXQgU29mdHdhcmUgR21iSFxuICogQGF1dGhvciBBcnR1cyBLb2xhbm93c2tpXG4gKiBAYXV0aG9yIERhdmlkIERldXRzY2hcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXG5cdHZhciBzdHlsZSA9ICQoJzxzdXBwb3J0PicpLmdldCgwKS5zdHlsZSxcblx0XHRwcmVmaXhlcyA9ICdXZWJraXQgTW96IE8gbXMnLnNwbGl0KCcgJyksXG5cdFx0ZXZlbnRzID0ge1xuXHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHRlbmQ6IHtcblx0XHRcdFx0XHRXZWJraXRUcmFuc2l0aW9uOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG5cdFx0XHRcdFx0TW96VHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnLFxuXHRcdFx0XHRcdE9UcmFuc2l0aW9uOiAnb1RyYW5zaXRpb25FbmQnLFxuXHRcdFx0XHRcdHRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJ1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0YW5pbWF0aW9uOiB7XG5cdFx0XHRcdGVuZDoge1xuXHRcdFx0XHRcdFdlYmtpdEFuaW1hdGlvbjogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG5cdFx0XHRcdFx0TW96QW5pbWF0aW9uOiAnYW5pbWF0aW9uZW5kJyxcblx0XHRcdFx0XHRPQW5pbWF0aW9uOiAnb0FuaW1hdGlvbkVuZCcsXG5cdFx0XHRcdFx0YW5pbWF0aW9uOiAnYW5pbWF0aW9uZW5kJ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR0ZXN0cyA9IHtcblx0XHRcdGNzc3RyYW5zZm9ybXM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gISF0ZXN0KCd0cmFuc2Zvcm0nKTtcblx0XHRcdH0sXG5cdFx0XHRjc3N0cmFuc2Zvcm1zM2Q6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gISF0ZXN0KCdwZXJzcGVjdGl2ZScpO1xuXHRcdFx0fSxcblx0XHRcdGNzc3RyYW5zaXRpb25zOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhdGVzdCgndHJhbnNpdGlvbicpO1xuXHRcdFx0fSxcblx0XHRcdGNzc2FuaW1hdGlvbnM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gISF0ZXN0KCdhbmltYXRpb24nKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdGZ1bmN0aW9uIHRlc3QocHJvcGVydHksIHByZWZpeGVkKSB7XG5cdFx0dmFyIHJlc3VsdCA9IGZhbHNlLFxuXHRcdFx0dXBwZXIgPSBwcm9wZXJ0eS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BlcnR5LnNsaWNlKDEpO1xuXG5cdFx0JC5lYWNoKChwcm9wZXJ0eSArICcgJyArIHByZWZpeGVzLmpvaW4odXBwZXIgKyAnICcpICsgdXBwZXIpLnNwbGl0KCcgJyksIGZ1bmN0aW9uKGksIHByb3BlcnR5KSB7XG5cdFx0XHRpZiAoc3R5bGVbcHJvcGVydHldICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmVzdWx0ID0gcHJlZml4ZWQgPyBwcm9wZXJ0eSA6IHRydWU7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRmdW5jdGlvbiBwcmVmaXhlZChwcm9wZXJ0eSkge1xuXHRcdHJldHVybiB0ZXN0KHByb3BlcnR5LCB0cnVlKTtcblx0fVxuXG5cdGlmICh0ZXN0cy5jc3N0cmFuc2l0aW9ucygpKSB7XG5cdFx0LyoganNoaW50IC1XMDUzICovXG5cdFx0JC5zdXBwb3J0LnRyYW5zaXRpb24gPSBuZXcgU3RyaW5nKHByZWZpeGVkKCd0cmFuc2l0aW9uJykpXG5cdFx0JC5zdXBwb3J0LnRyYW5zaXRpb24uZW5kID0gZXZlbnRzLnRyYW5zaXRpb24uZW5kWyAkLnN1cHBvcnQudHJhbnNpdGlvbiBdO1xuXHR9XG5cblx0aWYgKHRlc3RzLmNzc2FuaW1hdGlvbnMoKSkge1xuXHRcdC8qIGpzaGludCAtVzA1MyAqL1xuXHRcdCQuc3VwcG9ydC5hbmltYXRpb24gPSBuZXcgU3RyaW5nKHByZWZpeGVkKCdhbmltYXRpb24nKSlcblx0XHQkLnN1cHBvcnQuYW5pbWF0aW9uLmVuZCA9IGV2ZW50cy5hbmltYXRpb24uZW5kWyAkLnN1cHBvcnQuYW5pbWF0aW9uIF07XG5cdH1cblxuXHRpZiAodGVzdHMuY3NzdHJhbnNmb3JtcygpKSB7XG5cdFx0LyoganNoaW50IC1XMDUzICovXG5cdFx0JC5zdXBwb3J0LnRyYW5zZm9ybSA9IG5ldyBTdHJpbmcocHJlZml4ZWQoJ3RyYW5zZm9ybScpKTtcblx0XHQkLnN1cHBvcnQudHJhbnNmb3JtM2QgPSB0ZXN0cy5jc3N0cmFuc2Zvcm1zM2QoKTtcblx0fVxuXG59KSh3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XG4iLCIvKiFcbiAqIFZ1ZS5qcyB2Mi41LjEzXG4gKiAoYykgMjAxNC0yMDE3IEV2YW4gWW91XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOnQuVnVlPWUoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQodCl7cmV0dXJuIHZvaWQgMD09PXR8fG51bGw9PT10fWZ1bmN0aW9uIGUodCl7cmV0dXJuIHZvaWQgMCE9PXQmJm51bGwhPT10fWZ1bmN0aW9uIG4odCl7cmV0dXJuITA9PT10fWZ1bmN0aW9uIHIodCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHR8fFwibnVtYmVyXCI9PXR5cGVvZiB0fHxcInN5bWJvbFwiPT10eXBlb2YgdHx8XCJib29sZWFuXCI9PXR5cGVvZiB0fWZ1bmN0aW9uIGkodCl7cmV0dXJuIG51bGwhPT10JiZcIm9iamVjdFwiPT10eXBlb2YgdH1mdW5jdGlvbiBvKHQpe3JldHVyblwiW29iamVjdCBPYmplY3RdXCI9PT1Obi5jYWxsKHQpfWZ1bmN0aW9uIGEodCl7dmFyIGU9cGFyc2VGbG9hdChTdHJpbmcodCkpO3JldHVybiBlPj0wJiZNYXRoLmZsb29yKGUpPT09ZSYmaXNGaW5pdGUodCl9ZnVuY3Rpb24gcyh0KXtyZXR1cm4gbnVsbD09dD9cIlwiOlwib2JqZWN0XCI9PXR5cGVvZiB0P0pTT04uc3RyaW5naWZ5KHQsbnVsbCwyKTpTdHJpbmcodCl9ZnVuY3Rpb24gYyh0KXt2YXIgZT1wYXJzZUZsb2F0KHQpO3JldHVybiBpc05hTihlKT90OmV9ZnVuY3Rpb24gdSh0LGUpe2Zvcih2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpLHI9dC5zcGxpdChcIixcIiksaT0wO2k8ci5sZW5ndGg7aSsrKW5bcltpXV09ITA7cmV0dXJuIGU/ZnVuY3Rpb24odCl7cmV0dXJuIG5bdC50b0xvd2VyQ2FzZSgpXX06ZnVuY3Rpb24odCl7cmV0dXJuIG5bdF19fWZ1bmN0aW9uIGwodCxlKXtpZih0Lmxlbmd0aCl7dmFyIG49dC5pbmRleE9mKGUpO2lmKG4+LTEpcmV0dXJuIHQuc3BsaWNlKG4sMSl9fWZ1bmN0aW9uIGYodCxlKXtyZXR1cm4gTW4uY2FsbCh0LGUpfWZ1bmN0aW9uIHAodCl7dmFyIGU9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIGVbbl18fChlW25dPXQobikpfX1mdW5jdGlvbiBkKHQsZSl7ZnVuY3Rpb24gbihuKXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoO3JldHVybiByP3I+MT90LmFwcGx5KGUsYXJndW1lbnRzKTp0LmNhbGwoZSxuKTp0LmNhbGwoZSl9cmV0dXJuIG4uX2xlbmd0aD10Lmxlbmd0aCxufWZ1bmN0aW9uIHYodCxlKXtlPWV8fDA7Zm9yKHZhciBuPXQubGVuZ3RoLWUscj1uZXcgQXJyYXkobik7bi0tOylyW25dPXRbbitlXTtyZXR1cm4gcn1mdW5jdGlvbiBoKHQsZSl7Zm9yKHZhciBuIGluIGUpdFtuXT1lW25dO3JldHVybiB0fWZ1bmN0aW9uIG0odCl7Zm9yKHZhciBlPXt9LG49MDtuPHQubGVuZ3RoO24rKyl0W25dJiZoKGUsdFtuXSk7cmV0dXJuIGV9ZnVuY3Rpb24geSh0LGUsbil7fWZ1bmN0aW9uIGcodCxlKXtpZih0PT09ZSlyZXR1cm4hMDt2YXIgbj1pKHQpLHI9aShlKTtpZighbnx8IXIpcmV0dXJuIW4mJiFyJiZTdHJpbmcodCk9PT1TdHJpbmcoZSk7dHJ5e3ZhciBvPUFycmF5LmlzQXJyYXkodCksYT1BcnJheS5pc0FycmF5KGUpO2lmKG8mJmEpcmV0dXJuIHQubGVuZ3RoPT09ZS5sZW5ndGgmJnQuZXZlcnkoZnVuY3Rpb24odCxuKXtyZXR1cm4gZyh0LGVbbl0pfSk7aWYob3x8YSlyZXR1cm4hMTt2YXIgcz1PYmplY3Qua2V5cyh0KSxjPU9iamVjdC5rZXlzKGUpO3JldHVybiBzLmxlbmd0aD09PWMubGVuZ3RoJiZzLmV2ZXJ5KGZ1bmN0aW9uKG4pe3JldHVybiBnKHRbbl0sZVtuXSl9KX1jYXRjaCh0KXtyZXR1cm4hMX19ZnVuY3Rpb24gXyh0LGUpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKWlmKGcodFtuXSxlKSlyZXR1cm4gbjtyZXR1cm4tMX1mdW5jdGlvbiBiKHQpe3ZhciBlPSExO3JldHVybiBmdW5jdGlvbigpe2V8fChlPSEwLHQuYXBwbHkodGhpcyxhcmd1bWVudHMpKX19ZnVuY3Rpb24gJCh0KXt2YXIgZT0odCtcIlwiKS5jaGFyQ29kZUF0KDApO3JldHVybiAzNj09PWV8fDk1PT09ZX1mdW5jdGlvbiBDKHQsZSxuLHIpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse3ZhbHVlOm4sZW51bWVyYWJsZTohIXIsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9ZnVuY3Rpb24gdyh0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiYvbmF0aXZlIGNvZGUvLnRlc3QodC50b1N0cmluZygpKX1mdW5jdGlvbiB4KHQpe3JldHVybiBuZXcgbXIodm9pZCAwLHZvaWQgMCx2b2lkIDAsU3RyaW5nKHQpKX1mdW5jdGlvbiBrKHQsZSl7dmFyIG49dC5jb21wb25lbnRPcHRpb25zLHI9bmV3IG1yKHQudGFnLHQuZGF0YSx0LmNoaWxkcmVuLHQudGV4dCx0LmVsbSx0LmNvbnRleHQsbix0LmFzeW5jRmFjdG9yeSk7cmV0dXJuIHIubnM9dC5ucyxyLmlzU3RhdGljPXQuaXNTdGF0aWMsci5rZXk9dC5rZXksci5pc0NvbW1lbnQ9dC5pc0NvbW1lbnQsci5mbkNvbnRleHQ9dC5mbkNvbnRleHQsci5mbk9wdGlvbnM9dC5mbk9wdGlvbnMsci5mblNjb3BlSWQ9dC5mblNjb3BlSWQsci5pc0Nsb25lZD0hMCxlJiYodC5jaGlsZHJlbiYmKHIuY2hpbGRyZW49QSh0LmNoaWxkcmVuLCEwKSksbiYmbi5jaGlsZHJlbiYmKG4uY2hpbGRyZW49QShuLmNoaWxkcmVuLCEwKSkpLHJ9ZnVuY3Rpb24gQSh0LGUpe2Zvcih2YXIgbj10Lmxlbmd0aCxyPW5ldyBBcnJheShuKSxpPTA7aTxuO2krKylyW2ldPWsodFtpXSxlKTtyZXR1cm4gcn1mdW5jdGlvbiBPKHQsZSxuKXt0Ll9fcHJvdG9fXz1lfWZ1bmN0aW9uIFModCxlLG4pe2Zvcih2YXIgcj0wLGk9bi5sZW5ndGg7cjxpO3IrKyl7dmFyIG89bltyXTtDKHQsbyxlW29dKX19ZnVuY3Rpb24gVCh0LGUpe2lmKGkodCkmJiEodCBpbnN0YW5jZW9mIG1yKSl7dmFyIG47cmV0dXJuIGYodCxcIl9fb2JfX1wiKSYmdC5fX29iX18gaW5zdGFuY2VvZiB3cj9uPXQuX19vYl9fOkNyLnNob3VsZENvbnZlcnQmJiF1cigpJiYoQXJyYXkuaXNBcnJheSh0KXx8byh0KSkmJk9iamVjdC5pc0V4dGVuc2libGUodCkmJiF0Ll9pc1Z1ZSYmKG49bmV3IHdyKHQpKSxlJiZuJiZuLnZtQ291bnQrKyxufX1mdW5jdGlvbiBFKHQsZSxuLHIsaSl7dmFyIG89bmV3IHZyLGE9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LGUpO2lmKCFhfHwhMSE9PWEuY29uZmlndXJhYmxlKXt2YXIgcz1hJiZhLmdldCxjPWEmJmEuc2V0LHU9IWkmJlQobik7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7dmFyIGU9cz9zLmNhbGwodCk6bjtyZXR1cm4gdnIudGFyZ2V0JiYoby5kZXBlbmQoKSx1JiYodS5kZXAuZGVwZW5kKCksQXJyYXkuaXNBcnJheShlKSYmSShlKSkpLGV9LHNldDpmdW5jdGlvbihlKXt2YXIgcj1zP3MuY2FsbCh0KTpuO2U9PT1yfHxlIT1lJiZyIT1yfHwoYz9jLmNhbGwodCxlKTpuPWUsdT0haSYmVChlKSxvLm5vdGlmeSgpKX19KX19ZnVuY3Rpb24gaih0LGUsbil7aWYoQXJyYXkuaXNBcnJheSh0KSYmYShlKSlyZXR1cm4gdC5sZW5ndGg9TWF0aC5tYXgodC5sZW5ndGgsZSksdC5zcGxpY2UoZSwxLG4pLG47aWYoZSBpbiB0JiYhKGUgaW4gT2JqZWN0LnByb3RvdHlwZSkpcmV0dXJuIHRbZV09bixuO3ZhciByPXQuX19vYl9fO3JldHVybiB0Ll9pc1Z1ZXx8ciYmci52bUNvdW50P246cj8oRShyLnZhbHVlLGUsbiksci5kZXAubm90aWZ5KCksbik6KHRbZV09bixuKX1mdW5jdGlvbiBOKHQsZSl7aWYoQXJyYXkuaXNBcnJheSh0KSYmYShlKSl0LnNwbGljZShlLDEpO2Vsc2V7dmFyIG49dC5fX29iX187dC5faXNWdWV8fG4mJm4udm1Db3VudHx8Zih0LGUpJiYoZGVsZXRlIHRbZV0sbiYmbi5kZXAubm90aWZ5KCkpfX1mdW5jdGlvbiBJKHQpe2Zvcih2YXIgZT12b2lkIDAsbj0wLHI9dC5sZW5ndGg7bjxyO24rKykoZT10W25dKSYmZS5fX29iX18mJmUuX19vYl9fLmRlcC5kZXBlbmQoKSxBcnJheS5pc0FycmF5KGUpJiZJKGUpfWZ1bmN0aW9uIEwodCxlKXtpZighZSlyZXR1cm4gdDtmb3IodmFyIG4scixpLGE9T2JqZWN0LmtleXMoZSkscz0wO3M8YS5sZW5ndGg7cysrKXI9dFtuPWFbc11dLGk9ZVtuXSxmKHQsbik/byhyKSYmbyhpKSYmTChyLGkpOmoodCxuLGkpO3JldHVybiB0fWZ1bmN0aW9uIE0odCxlLG4pe3JldHVybiBuP2Z1bmN0aW9uKCl7dmFyIHI9XCJmdW5jdGlvblwiPT10eXBlb2YgZT9lLmNhbGwobixuKTplLGk9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90LmNhbGwobixuKTp0O3JldHVybiByP0wocixpKTppfTplP3Q/ZnVuY3Rpb24oKXtyZXR1cm4gTChcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2UuY2FsbCh0aGlzLHRoaXMpOmUsXCJmdW5jdGlvblwiPT10eXBlb2YgdD90LmNhbGwodGhpcyx0aGlzKTp0KX06ZTp0fWZ1bmN0aW9uIEQodCxlKXtyZXR1cm4gZT90P3QuY29uY2F0KGUpOkFycmF5LmlzQXJyYXkoZSk/ZTpbZV06dH1mdW5jdGlvbiBQKHQsZSxuLHIpe3ZhciBpPU9iamVjdC5jcmVhdGUodHx8bnVsbCk7cmV0dXJuIGU/aChpLGUpOml9ZnVuY3Rpb24gRih0LGUsbil7ZnVuY3Rpb24gcihyKXt2YXIgaT14cltyXXx8T3I7dVtyXT1pKHRbcl0sZVtyXSxuLHIpfVwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJihlPWUub3B0aW9ucyksZnVuY3Rpb24odCxlKXt2YXIgbj10LnByb3BzO2lmKG4pe3ZhciByLGksYT17fTtpZihBcnJheS5pc0FycmF5KG4pKWZvcihyPW4ubGVuZ3RoO3ItLTspXCJzdHJpbmdcIj09dHlwZW9mKGk9bltyXSkmJihhW1BuKGkpXT17dHlwZTpudWxsfSk7ZWxzZSBpZihvKG4pKWZvcih2YXIgcyBpbiBuKWk9bltzXSxhW1BuKHMpXT1vKGkpP2k6e3R5cGU6aX07dC5wcm9wcz1hfX0oZSksZnVuY3Rpb24odCxlKXt2YXIgbj10LmluamVjdDtpZihuKXt2YXIgcj10LmluamVjdD17fTtpZihBcnJheS5pc0FycmF5KG4pKWZvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXJbbltpXV09e2Zyb206bltpXX07ZWxzZSBpZihvKG4pKWZvcih2YXIgYSBpbiBuKXt2YXIgcz1uW2FdO3JbYV09byhzKT9oKHtmcm9tOmF9LHMpOntmcm9tOnN9fX19KGUpLGZ1bmN0aW9uKHQpe3ZhciBlPXQuZGlyZWN0aXZlcztpZihlKWZvcih2YXIgbiBpbiBlKXt2YXIgcj1lW25dO1wiZnVuY3Rpb25cIj09dHlwZW9mIHImJihlW25dPXtiaW5kOnIsdXBkYXRlOnJ9KX19KGUpO3ZhciBpPWUuZXh0ZW5kcztpZihpJiYodD1GKHQsaSxuKSksZS5taXhpbnMpZm9yKHZhciBhPTAscz1lLm1peGlucy5sZW5ndGg7YTxzO2ErKyl0PUYodCxlLm1peGluc1thXSxuKTt2YXIgYyx1PXt9O2ZvcihjIGluIHQpcihjKTtmb3IoYyBpbiBlKWYodCxjKXx8cihjKTtyZXR1cm4gdX1mdW5jdGlvbiBSKHQsZSxuLHIpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBuKXt2YXIgaT10W2VdO2lmKGYoaSxuKSlyZXR1cm4gaVtuXTt2YXIgbz1QbihuKTtpZihmKGksbykpcmV0dXJuIGlbb107dmFyIGE9Rm4obyk7aWYoZihpLGEpKXJldHVybiBpW2FdO3JldHVybiBpW25dfHxpW29dfHxpW2FdfX1mdW5jdGlvbiBIKHQsZSxuLHIpe3ZhciBpPWVbdF0sbz0hZihuLHQpLGE9blt0XTtpZihVKEJvb2xlYW4saS50eXBlKSYmKG8mJiFmKGksXCJkZWZhdWx0XCIpP2E9ITE6VShTdHJpbmcsaS50eXBlKXx8XCJcIiE9PWEmJmEhPT1Ibih0KXx8KGE9ITApKSx2b2lkIDA9PT1hKXthPWZ1bmN0aW9uKHQsZSxuKXtpZighZihlLFwiZGVmYXVsdFwiKSlyZXR1cm47dmFyIHI9ZS5kZWZhdWx0O2lmKHQmJnQuJG9wdGlvbnMucHJvcHNEYXRhJiZ2b2lkIDA9PT10LiRvcHRpb25zLnByb3BzRGF0YVtuXSYmdm9pZCAwIT09dC5fcHJvcHNbbl0pcmV0dXJuIHQuX3Byb3BzW25dO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHImJlwiRnVuY3Rpb25cIiE9PUIoZS50eXBlKT9yLmNhbGwodCk6cn0ocixpLHQpO3ZhciBzPUNyLnNob3VsZENvbnZlcnQ7Q3Iuc2hvdWxkQ29udmVydD0hMCxUKGEpLENyLnNob3VsZENvbnZlcnQ9c31yZXR1cm4gYX1mdW5jdGlvbiBCKHQpe3ZhciBlPXQmJnQudG9TdHJpbmcoKS5tYXRjaCgvXlxccypmdW5jdGlvbiAoXFx3KykvKTtyZXR1cm4gZT9lWzFdOlwiXCJ9ZnVuY3Rpb24gVSh0LGUpe2lmKCFBcnJheS5pc0FycmF5KGUpKXJldHVybiBCKGUpPT09Qih0KTtmb3IodmFyIG49MCxyPWUubGVuZ3RoO248cjtuKyspaWYoQihlW25dKT09PUIodCkpcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gVih0LGUsbil7aWYoZSlmb3IodmFyIHI9ZTtyPXIuJHBhcmVudDspe3ZhciBpPXIuJG9wdGlvbnMuZXJyb3JDYXB0dXJlZDtpZihpKWZvcih2YXIgbz0wO288aS5sZW5ndGg7bysrKXRyeXtpZighMT09PWlbb10uY2FsbChyLHQsZSxuKSlyZXR1cm59Y2F0Y2godCl7eih0LHIsXCJlcnJvckNhcHR1cmVkIGhvb2tcIil9fXoodCxlLG4pfWZ1bmN0aW9uIHoodCxlLG4pe2lmKEpuLmVycm9ySGFuZGxlcil0cnl7cmV0dXJuIEpuLmVycm9ySGFuZGxlci5jYWxsKG51bGwsdCxlLG4pfWNhdGNoKHQpe0sodCxudWxsLFwiY29uZmlnLmVycm9ySGFuZGxlclwiKX1LKHQsZSxuKX1mdW5jdGlvbiBLKHQsZSxuKXtpZighR24mJiFabnx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIGNvbnNvbGUpdGhyb3cgdDtjb25zb2xlLmVycm9yKHQpfWZ1bmN0aW9uIEooKXtUcj0hMTt2YXIgdD1Tci5zbGljZSgwKTtTci5sZW5ndGg9MDtmb3IodmFyIGU9MDtlPHQubGVuZ3RoO2UrKyl0W2VdKCl9ZnVuY3Rpb24gcSh0LGUpe3ZhciBuO2lmKFNyLnB1c2goZnVuY3Rpb24oKXtpZih0KXRyeXt0LmNhbGwoZSl9Y2F0Y2godCl7Vih0LGUsXCJuZXh0VGlja1wiKX1lbHNlIG4mJm4oZSl9KSxUcnx8KFRyPSEwLEVyP0FyKCk6a3IoKSksIXQmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm9taXNlKXJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbih0KXtuPXR9KX1mdW5jdGlvbiBXKHQpe0codCxNciksTXIuY2xlYXIoKX1mdW5jdGlvbiBHKHQsZSl7dmFyIG4scixvPUFycmF5LmlzQXJyYXkodCk7aWYoKG98fGkodCkpJiYhT2JqZWN0LmlzRnJvemVuKHQpKXtpZih0Ll9fb2JfXyl7dmFyIGE9dC5fX29iX18uZGVwLmlkO2lmKGUuaGFzKGEpKXJldHVybjtlLmFkZChhKX1pZihvKWZvcihuPXQubGVuZ3RoO24tLTspRyh0W25dLGUpO2Vsc2UgZm9yKG49KHI9T2JqZWN0LmtleXModCkpLmxlbmd0aDtuLS07KUcodFtyW25dXSxlKX19ZnVuY3Rpb24gWih0KXtmdW5jdGlvbiBlKCl7dmFyIHQ9YXJndW1lbnRzLG49ZS5mbnM7aWYoIUFycmF5LmlzQXJyYXkobikpcmV0dXJuIG4uYXBwbHkobnVsbCxhcmd1bWVudHMpO2Zvcih2YXIgcj1uLnNsaWNlKCksaT0wO2k8ci5sZW5ndGg7aSsrKXJbaV0uYXBwbHkobnVsbCx0KX1yZXR1cm4gZS5mbnM9dCxlfWZ1bmN0aW9uIFgoZSxuLHIsaSxvKXt2YXIgYSxzLGMsdTtmb3IoYSBpbiBlKXM9ZVthXSxjPW5bYV0sdT1EcihhKSx0KHMpfHwodChjKT8odChzLmZucykmJihzPWVbYV09WihzKSkscih1Lm5hbWUscyx1Lm9uY2UsdS5jYXB0dXJlLHUucGFzc2l2ZSx1LnBhcmFtcykpOnMhPT1jJiYoYy5mbnM9cyxlW2FdPWMpKTtmb3IoYSBpbiBuKXQoZVthXSkmJmkoKHU9RHIoYSkpLm5hbWUsblthXSx1LmNhcHR1cmUpfWZ1bmN0aW9uIFkocixpLG8pe2Z1bmN0aW9uIGEoKXtvLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxsKHMuZm5zLGEpfXIgaW5zdGFuY2VvZiBtciYmKHI9ci5kYXRhLmhvb2t8fChyLmRhdGEuaG9vaz17fSkpO3ZhciBzLGM9cltpXTt0KGMpP3M9WihbYV0pOmUoYy5mbnMpJiZuKGMubWVyZ2VkKT8ocz1jKS5mbnMucHVzaChhKTpzPVooW2MsYV0pLHMubWVyZ2VkPSEwLHJbaV09c31mdW5jdGlvbiBRKHQsbixyLGksbyl7aWYoZShuKSl7aWYoZihuLHIpKXJldHVybiB0W3JdPW5bcl0sb3x8ZGVsZXRlIG5bcl0sITA7aWYoZihuLGkpKXJldHVybiB0W3JdPW5baV0sb3x8ZGVsZXRlIG5baV0sITB9cmV0dXJuITF9ZnVuY3Rpb24gdHQodCl7cmV0dXJuIGUodCkmJmUodC50ZXh0KSYmZnVuY3Rpb24odCl7cmV0dXJuITE9PT10fSh0LmlzQ29tbWVudCl9ZnVuY3Rpb24gZXQoaSxvKXt2YXIgYSxzLGMsdSxsPVtdO2ZvcihhPTA7YTxpLmxlbmd0aDthKyspdChzPWlbYV0pfHxcImJvb2xlYW5cIj09dHlwZW9mIHN8fCh1PWxbYz1sLmxlbmd0aC0xXSxBcnJheS5pc0FycmF5KHMpP3MubGVuZ3RoPjAmJih0dCgocz1ldChzLChvfHxcIlwiKStcIl9cIithKSlbMF0pJiZ0dCh1KSYmKGxbY109eCh1LnRleHQrc1swXS50ZXh0KSxzLnNoaWZ0KCkpLGwucHVzaC5hcHBseShsLHMpKTpyKHMpP3R0KHUpP2xbY109eCh1LnRleHQrcyk6XCJcIiE9PXMmJmwucHVzaCh4KHMpKTp0dChzKSYmdHQodSk/bFtjXT14KHUudGV4dCtzLnRleHQpOihuKGkuX2lzVkxpc3QpJiZlKHMudGFnKSYmdChzLmtleSkmJmUobykmJihzLmtleT1cIl9fdmxpc3RcIitvK1wiX1wiK2ErXCJfX1wiKSxsLnB1c2gocykpKTtyZXR1cm4gbH1mdW5jdGlvbiBudCh0LGUpe3JldHVybih0Ll9fZXNNb2R1bGV8fGZyJiZcIk1vZHVsZVwiPT09dFtTeW1ib2wudG9TdHJpbmdUYWddKSYmKHQ9dC5kZWZhdWx0KSxpKHQpP2UuZXh0ZW5kKHQpOnR9ZnVuY3Rpb24gcnQodCl7cmV0dXJuIHQuaXNDb21tZW50JiZ0LmFzeW5jRmFjdG9yeX1mdW5jdGlvbiBpdCh0KXtpZihBcnJheS5pc0FycmF5KHQpKWZvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgcj10W25dO2lmKGUocikmJihlKHIuY29tcG9uZW50T3B0aW9ucyl8fHJ0KHIpKSlyZXR1cm4gcn19ZnVuY3Rpb24gb3QodCxlLG4pe24/THIuJG9uY2UodCxlKTpMci4kb24odCxlKX1mdW5jdGlvbiBhdCh0LGUpe0xyLiRvZmYodCxlKX1mdW5jdGlvbiBzdCh0LGUsbil7THI9dCxYKGUsbnx8e30sb3QsYXQpLExyPXZvaWQgMH1mdW5jdGlvbiBjdCh0LGUpe3ZhciBuPXt9O2lmKCF0KXJldHVybiBuO2Zvcih2YXIgcj0wLGk9dC5sZW5ndGg7cjxpO3IrKyl7dmFyIG89dFtyXSxhPW8uZGF0YTtpZihhJiZhLmF0dHJzJiZhLmF0dHJzLnNsb3QmJmRlbGV0ZSBhLmF0dHJzLnNsb3Qsby5jb250ZXh0IT09ZSYmby5mbkNvbnRleHQhPT1lfHwhYXx8bnVsbD09YS5zbG90KShuLmRlZmF1bHR8fChuLmRlZmF1bHQ9W10pKS5wdXNoKG8pO2Vsc2V7dmFyIHM9YS5zbG90LGM9bltzXXx8KG5bc109W10pO1widGVtcGxhdGVcIj09PW8udGFnP2MucHVzaC5hcHBseShjLG8uY2hpbGRyZW58fFtdKTpjLnB1c2gobyl9fWZvcih2YXIgdSBpbiBuKW5bdV0uZXZlcnkodXQpJiZkZWxldGUgblt1XTtyZXR1cm4gbn1mdW5jdGlvbiB1dCh0KXtyZXR1cm4gdC5pc0NvbW1lbnQmJiF0LmFzeW5jRmFjdG9yeXx8XCIgXCI9PT10LnRleHR9ZnVuY3Rpb24gbHQodCxlKXtlPWV8fHt9O2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKUFycmF5LmlzQXJyYXkodFtuXSk/bHQodFtuXSxlKTplW3Rbbl0ua2V5XT10W25dLmZuO3JldHVybiBlfWZ1bmN0aW9uIGZ0KHQpe2Zvcig7dCYmKHQ9dC4kcGFyZW50KTspaWYodC5faW5hY3RpdmUpcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gcHQodCxlKXtpZihlKXtpZih0Ll9kaXJlY3RJbmFjdGl2ZT0hMSxmdCh0KSlyZXR1cm59ZWxzZSBpZih0Ll9kaXJlY3RJbmFjdGl2ZSlyZXR1cm47aWYodC5faW5hY3RpdmV8fG51bGw9PT10Ll9pbmFjdGl2ZSl7dC5faW5hY3RpdmU9ITE7Zm9yKHZhciBuPTA7bjx0LiRjaGlsZHJlbi5sZW5ndGg7bisrKXB0KHQuJGNoaWxkcmVuW25dKTt2dCh0LFwiYWN0aXZhdGVkXCIpfX1mdW5jdGlvbiBkdCh0LGUpe2lmKCEoZSYmKHQuX2RpcmVjdEluYWN0aXZlPSEwLGZ0KHQpKXx8dC5faW5hY3RpdmUpKXt0Ll9pbmFjdGl2ZT0hMDtmb3IodmFyIG49MDtuPHQuJGNoaWxkcmVuLmxlbmd0aDtuKyspZHQodC4kY2hpbGRyZW5bbl0pO3Z0KHQsXCJkZWFjdGl2YXRlZFwiKX19ZnVuY3Rpb24gdnQodCxlKXt2YXIgbj10LiRvcHRpb25zW2VdO2lmKG4pZm9yKHZhciByPTAsaT1uLmxlbmd0aDtyPGk7cisrKXRyeXtuW3JdLmNhbGwodCl9Y2F0Y2gobil7VihuLHQsZStcIiBob29rXCIpfXQuX2hhc0hvb2tFdmVudCYmdC4kZW1pdChcImhvb2s6XCIrZSl9ZnVuY3Rpb24gaHQoKXtVcj0hMDt2YXIgdCxlO2ZvcihGci5zb3J0KGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuaWQtZS5pZH0pLFZyPTA7VnI8RnIubGVuZ3RoO1ZyKyspZT0odD1GcltWcl0pLmlkLEhyW2VdPW51bGwsdC5ydW4oKTt2YXIgbj1Sci5zbGljZSgpLHI9RnIuc2xpY2UoKTtWcj1Gci5sZW5ndGg9UnIubGVuZ3RoPTAsSHI9e30sQnI9VXI9ITEsZnVuY3Rpb24odCl7Zm9yKHZhciBlPTA7ZTx0Lmxlbmd0aDtlKyspdFtlXS5faW5hY3RpdmU9ITAscHQodFtlXSwhMCl9KG4pLGZ1bmN0aW9uKHQpe3ZhciBlPXQubGVuZ3RoO2Zvcig7ZS0tOyl7dmFyIG49dFtlXSxyPW4udm07ci5fd2F0Y2hlcj09PW4mJnIuX2lzTW91bnRlZCYmdnQocixcInVwZGF0ZWRcIil9fShyKSxsciYmSm4uZGV2dG9vbHMmJmxyLmVtaXQoXCJmbHVzaFwiKX1mdW5jdGlvbiBtdCh0LGUsbil7SnIuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbZV1bbl19LEpyLnNldD1mdW5jdGlvbih0KXt0aGlzW2VdW25dPXR9LE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4sSnIpfWZ1bmN0aW9uIHl0KHQpe3QuX3dhdGNoZXJzPVtdO3ZhciBlPXQuJG9wdGlvbnM7ZS5wcm9wcyYmZnVuY3Rpb24odCxlKXt2YXIgbj10LiRvcHRpb25zLnByb3BzRGF0YXx8e30scj10Ll9wcm9wcz17fSxpPXQuJG9wdGlvbnMuX3Byb3BLZXlzPVtdLG89IXQuJHBhcmVudDtDci5zaG91bGRDb252ZXJ0PW87dmFyIGE9ZnVuY3Rpb24obyl7aS5wdXNoKG8pO3ZhciBhPUgobyxlLG4sdCk7RShyLG8sYSksbyBpbiB0fHxtdCh0LFwiX3Byb3BzXCIsbyl9O2Zvcih2YXIgcyBpbiBlKWEocyk7Q3Iuc2hvdWxkQ29udmVydD0hMH0odCxlLnByb3BzKSxlLm1ldGhvZHMmJmZ1bmN0aW9uKHQsZSl7dC4kb3B0aW9ucy5wcm9wcztmb3IodmFyIG4gaW4gZSl0W25dPW51bGw9PWVbbl0/eTpkKGVbbl0sdCl9KHQsZS5tZXRob2RzKSxlLmRhdGE/ZnVuY3Rpb24odCl7dmFyIGU9dC4kb3B0aW9ucy5kYXRhO2U9dC5fZGF0YT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2Z1bmN0aW9uKHQsZSl7dHJ5e3JldHVybiB0LmNhbGwoZSxlKX1jYXRjaCh0KXtyZXR1cm4gVih0LGUsXCJkYXRhKClcIikse319fShlLHQpOmV8fHt9LG8oZSl8fChlPXt9KTt2YXIgbj1PYmplY3Qua2V5cyhlKSxyPXQuJG9wdGlvbnMucHJvcHMsaT0odC4kb3B0aW9ucy5tZXRob2RzLG4ubGVuZ3RoKTtmb3IoO2ktLTspe3ZhciBhPW5baV07ciYmZihyLGEpfHwkKGEpfHxtdCh0LFwiX2RhdGFcIixhKX1UKGUsITApfSh0KTpUKHQuX2RhdGE9e30sITApLGUuY29tcHV0ZWQmJmZ1bmN0aW9uKHQsZSl7dmFyIG49dC5fY29tcHV0ZWRXYXRjaGVycz1PYmplY3QuY3JlYXRlKG51bGwpLHI9dXIoKTtmb3IodmFyIGkgaW4gZSl7dmFyIG89ZVtpXSxhPVwiZnVuY3Rpb25cIj09dHlwZW9mIG8/bzpvLmdldDtyfHwobltpXT1uZXcgS3IodCxhfHx5LHkscXIpKSxpIGluIHR8fGd0KHQsaSxvKX19KHQsZS5jb21wdXRlZCksZS53YXRjaCYmZS53YXRjaCE9PWlyJiZmdW5jdGlvbih0LGUpe2Zvcih2YXIgbiBpbiBlKXt2YXIgcj1lW25dO2lmKEFycmF5LmlzQXJyYXkocikpZm9yKHZhciBpPTA7aTxyLmxlbmd0aDtpKyspYnQodCxuLHJbaV0pO2Vsc2UgYnQodCxuLHIpfX0odCxlLndhdGNoKX1mdW5jdGlvbiBndCh0LGUsbil7dmFyIHI9IXVyKCk7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj8oSnIuZ2V0PXI/X3QoZSk6bixKci5zZXQ9eSk6KEpyLmdldD1uLmdldD9yJiYhMSE9PW4uY2FjaGU/X3QoZSk6bi5nZXQ6eSxKci5zZXQ9bi5zZXQ/bi5zZXQ6eSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSxKcil9ZnVuY3Rpb24gX3QodCl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5fY29tcHV0ZWRXYXRjaGVycyYmdGhpcy5fY29tcHV0ZWRXYXRjaGVyc1t0XTtpZihlKXJldHVybiBlLmRpcnR5JiZlLmV2YWx1YXRlKCksdnIudGFyZ2V0JiZlLmRlcGVuZCgpLGUudmFsdWV9fWZ1bmN0aW9uIGJ0KHQsZSxuLHIpe3JldHVybiBvKG4pJiYocj1uLG49bi5oYW5kbGVyKSxcInN0cmluZ1wiPT10eXBlb2YgbiYmKG49dFtuXSksdC4kd2F0Y2goZSxuLHIpfWZ1bmN0aW9uICR0KHQsZSl7aWYodCl7Zm9yKHZhciBuPU9iamVjdC5jcmVhdGUobnVsbCkscj1mcj9SZWZsZWN0Lm93bktleXModCkuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsZSkuZW51bWVyYWJsZX0pOk9iamVjdC5rZXlzKHQpLGk9MDtpPHIubGVuZ3RoO2krKyl7Zm9yKHZhciBvPXJbaV0sYT10W29dLmZyb20scz1lO3M7KXtpZihzLl9wcm92aWRlZCYmYSBpbiBzLl9wcm92aWRlZCl7bltvXT1zLl9wcm92aWRlZFthXTticmVha31zPXMuJHBhcmVudH1pZighcyYmXCJkZWZhdWx0XCJpbiB0W29dKXt2YXIgYz10W29dLmRlZmF1bHQ7bltvXT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBjP2MuY2FsbChlKTpjfX1yZXR1cm4gbn19ZnVuY3Rpb24gQ3QodCxuKXt2YXIgcixvLGEscyxjO2lmKEFycmF5LmlzQXJyYXkodCl8fFwic3RyaW5nXCI9PXR5cGVvZiB0KWZvcihyPW5ldyBBcnJheSh0Lmxlbmd0aCksbz0wLGE9dC5sZW5ndGg7bzxhO28rKylyW29dPW4odFtvXSxvKTtlbHNlIGlmKFwibnVtYmVyXCI9PXR5cGVvZiB0KWZvcihyPW5ldyBBcnJheSh0KSxvPTA7bzx0O28rKylyW29dPW4obysxLG8pO2Vsc2UgaWYoaSh0KSlmb3Iocz1PYmplY3Qua2V5cyh0KSxyPW5ldyBBcnJheShzLmxlbmd0aCksbz0wLGE9cy5sZW5ndGg7bzxhO28rKyljPXNbb10scltvXT1uKHRbY10sYyxvKTtyZXR1cm4gZShyKSYmKHIuX2lzVkxpc3Q9ITApLHJ9ZnVuY3Rpb24gd3QodCxlLG4scil7dmFyIGksbz10aGlzLiRzY29wZWRTbG90c1t0XTtpZihvKW49bnx8e30sciYmKG49aChoKHt9LHIpLG4pKSxpPW8obil8fGU7ZWxzZXt2YXIgYT10aGlzLiRzbG90c1t0XTthJiYoYS5fcmVuZGVyZWQ9ITApLGk9YXx8ZX12YXIgcz1uJiZuLnNsb3Q7cmV0dXJuIHM/dGhpcy4kY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIse3Nsb3Q6c30saSk6aX1mdW5jdGlvbiB4dCh0KXtyZXR1cm4gUih0aGlzLiRvcHRpb25zLFwiZmlsdGVyc1wiLHQpfHxVbn1mdW5jdGlvbiBrdCh0LGUsbixyKXt2YXIgaT1Kbi5rZXlDb2Rlc1tlXXx8bjtyZXR1cm4gaT9BcnJheS5pc0FycmF5KGkpPy0xPT09aS5pbmRleE9mKHQpOmkhPT10OnI/SG4ocikhPT1lOnZvaWQgMH1mdW5jdGlvbiBBdCh0LGUsbixyLG8pe2lmKG4paWYoaShuKSl7QXJyYXkuaXNBcnJheShuKSYmKG49bShuKSk7dmFyIGEscz1mdW5jdGlvbihpKXtpZihcImNsYXNzXCI9PT1pfHxcInN0eWxlXCI9PT1pfHxMbihpKSlhPXQ7ZWxzZXt2YXIgcz10LmF0dHJzJiZ0LmF0dHJzLnR5cGU7YT1yfHxKbi5tdXN0VXNlUHJvcChlLHMsaSk/dC5kb21Qcm9wc3x8KHQuZG9tUHJvcHM9e30pOnQuYXR0cnN8fCh0LmF0dHJzPXt9KX1pZighKGkgaW4gYSkmJihhW2ldPW5baV0sbykpeyh0Lm9ufHwodC5vbj17fSkpW1widXBkYXRlOlwiK2ldPWZ1bmN0aW9uKHQpe25baV09dH19fTtmb3IodmFyIGMgaW4gbilzKGMpfWVsc2U7cmV0dXJuIHR9ZnVuY3Rpb24gT3QodCxlKXt2YXIgbj10aGlzLl9zdGF0aWNUcmVlc3x8KHRoaXMuX3N0YXRpY1RyZWVzPVtdKSxyPW5bdF07cmV0dXJuIHImJiFlP0FycmF5LmlzQXJyYXkocik/QShyKTprKHIpOihyPW5bdF09dGhpcy4kb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnNbdF0uY2FsbCh0aGlzLl9yZW5kZXJQcm94eSxudWxsLHRoaXMpLFR0KHIsXCJfX3N0YXRpY19fXCIrdCwhMSkscil9ZnVuY3Rpb24gU3QodCxlLG4pe3JldHVybiBUdCh0LFwiX19vbmNlX19cIitlKyhuP1wiX1wiK246XCJcIiksITApLHR9ZnVuY3Rpb24gVHQodCxlLG4pe2lmKEFycmF5LmlzQXJyYXkodCkpZm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspdFtyXSYmXCJzdHJpbmdcIiE9dHlwZW9mIHRbcl0mJkV0KHRbcl0sZStcIl9cIityLG4pO2Vsc2UgRXQodCxlLG4pfWZ1bmN0aW9uIEV0KHQsZSxuKXt0LmlzU3RhdGljPSEwLHQua2V5PWUsdC5pc09uY2U9bn1mdW5jdGlvbiBqdCh0LGUpe2lmKGUpaWYobyhlKSl7dmFyIG49dC5vbj10Lm9uP2goe30sdC5vbik6e307Zm9yKHZhciByIGluIGUpe3ZhciBpPW5bcl0sYT1lW3JdO25bcl09aT9bXS5jb25jYXQoaSxhKTphfX1lbHNlO3JldHVybiB0fWZ1bmN0aW9uIE50KHQpe3QuX289U3QsdC5fbj1jLHQuX3M9cyx0Ll9sPUN0LHQuX3Q9d3QsdC5fcT1nLHQuX2k9Xyx0Ll9tPU90LHQuX2Y9eHQsdC5faz1rdCx0Ll9iPUF0LHQuX3Y9eCx0Ll9lPWdyLHQuX3U9bHQsdC5fZz1qdH1mdW5jdGlvbiBJdCh0LGUscixpLG8pe3ZhciBhPW8ub3B0aW9uczt0aGlzLmRhdGE9dCx0aGlzLnByb3BzPWUsdGhpcy5jaGlsZHJlbj1yLHRoaXMucGFyZW50PWksdGhpcy5saXN0ZW5lcnM9dC5vbnx8am4sdGhpcy5pbmplY3Rpb25zPSR0KGEuaW5qZWN0LGkpLHRoaXMuc2xvdHM9ZnVuY3Rpb24oKXtyZXR1cm4gY3QocixpKX07dmFyIHM9T2JqZWN0LmNyZWF0ZShpKSxjPW4oYS5fY29tcGlsZWQpLHU9IWM7YyYmKHRoaXMuJG9wdGlvbnM9YSx0aGlzLiRzbG90cz10aGlzLnNsb3RzKCksdGhpcy4kc2NvcGVkU2xvdHM9dC5zY29wZWRTbG90c3x8am4pLGEuX3Njb3BlSWQ/dGhpcy5fYz1mdW5jdGlvbih0LGUsbixyKXt2YXIgbz1EdChzLHQsZSxuLHIsdSk7cmV0dXJuIG8mJihvLmZuU2NvcGVJZD1hLl9zY29wZUlkLG8uZm5Db250ZXh0PWkpLG99OnRoaXMuX2M9ZnVuY3Rpb24odCxlLG4scil7cmV0dXJuIER0KHMsdCxlLG4scix1KX19ZnVuY3Rpb24gTHQodCxlKXtmb3IodmFyIG4gaW4gZSl0W1BuKG4pXT1lW25dfWZ1bmN0aW9uIE10KHIsbyxhLHMsYyl7aWYoIXQocikpe3ZhciB1PWEuJG9wdGlvbnMuX2Jhc2U7aWYoaShyKSYmKHI9dS5leHRlbmQocikpLFwiZnVuY3Rpb25cIj09dHlwZW9mIHIpe3ZhciBsO2lmKHQoci5jaWQpJiYobD1yLHZvaWQgMD09PShyPWZ1bmN0aW9uKHIsbyxhKXtpZihuKHIuZXJyb3IpJiZlKHIuZXJyb3JDb21wKSlyZXR1cm4gci5lcnJvckNvbXA7aWYoZShyLnJlc29sdmVkKSlyZXR1cm4gci5yZXNvbHZlZDtpZihuKHIubG9hZGluZykmJmUoci5sb2FkaW5nQ29tcCkpcmV0dXJuIHIubG9hZGluZ0NvbXA7aWYoIWUoci5jb250ZXh0cykpe3ZhciBzPXIuY29udGV4dHM9W2FdLGM9ITAsdT1mdW5jdGlvbigpe2Zvcih2YXIgdD0wLGU9cy5sZW5ndGg7dDxlO3QrKylzW3RdLiRmb3JjZVVwZGF0ZSgpfSxsPWIoZnVuY3Rpb24odCl7ci5yZXNvbHZlZD1udCh0LG8pLGN8fHUoKX0pLGY9YihmdW5jdGlvbih0KXtlKHIuZXJyb3JDb21wKSYmKHIuZXJyb3I9ITAsdSgpKX0pLHA9cihsLGYpO3JldHVybiBpKHApJiYoXCJmdW5jdGlvblwiPT10eXBlb2YgcC50aGVuP3Qoci5yZXNvbHZlZCkmJnAudGhlbihsLGYpOmUocC5jb21wb25lbnQpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBwLmNvbXBvbmVudC50aGVuJiYocC5jb21wb25lbnQudGhlbihsLGYpLGUocC5lcnJvcikmJihyLmVycm9yQ29tcD1udChwLmVycm9yLG8pKSxlKHAubG9hZGluZykmJihyLmxvYWRpbmdDb21wPW50KHAubG9hZGluZyxvKSwwPT09cC5kZWxheT9yLmxvYWRpbmc9ITA6c2V0VGltZW91dChmdW5jdGlvbigpe3Qoci5yZXNvbHZlZCkmJnQoci5lcnJvcikmJihyLmxvYWRpbmc9ITAsdSgpKX0scC5kZWxheXx8MjAwKSksZShwLnRpbWVvdXQpJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dChyLnJlc29sdmVkKSYmZihudWxsKX0scC50aW1lb3V0KSkpLGM9ITEsci5sb2FkaW5nP3IubG9hZGluZ0NvbXA6ci5yZXNvbHZlZH1yLmNvbnRleHRzLnB1c2goYSl9KGwsdSxhKSkpKXJldHVybiBmdW5jdGlvbih0LGUsbixyLGkpe3ZhciBvPWdyKCk7cmV0dXJuIG8uYXN5bmNGYWN0b3J5PXQsby5hc3luY01ldGE9e2RhdGE6ZSxjb250ZXh0Om4sY2hpbGRyZW46cix0YWc6aX0sb30obCxvLGEscyxjKTtvPW98fHt9LEZ0KHIpLGUoby5tb2RlbCkmJmZ1bmN0aW9uKHQsbil7dmFyIHI9dC5tb2RlbCYmdC5tb2RlbC5wcm9wfHxcInZhbHVlXCIsaT10Lm1vZGVsJiZ0Lm1vZGVsLmV2ZW50fHxcImlucHV0XCI7KG4ucHJvcHN8fChuLnByb3BzPXt9KSlbcl09bi5tb2RlbC52YWx1ZTt2YXIgbz1uLm9ufHwobi5vbj17fSk7ZShvW2ldKT9vW2ldPVtuLm1vZGVsLmNhbGxiYWNrXS5jb25jYXQob1tpXSk6b1tpXT1uLm1vZGVsLmNhbGxiYWNrfShyLm9wdGlvbnMsbyk7dmFyIGY9ZnVuY3Rpb24obixyLGkpe3ZhciBvPXIub3B0aW9ucy5wcm9wcztpZighdChvKSl7dmFyIGE9e30scz1uLmF0dHJzLGM9bi5wcm9wcztpZihlKHMpfHxlKGMpKWZvcih2YXIgdSBpbiBvKXt2YXIgbD1Ibih1KTtRKGEsYyx1LGwsITApfHxRKGEscyx1LGwsITEpfXJldHVybiBhfX0obyxyKTtpZihuKHIub3B0aW9ucy5mdW5jdGlvbmFsKSlyZXR1cm4gZnVuY3Rpb24odCxuLHIsaSxvKXt2YXIgYT10Lm9wdGlvbnMscz17fSxjPWEucHJvcHM7aWYoZShjKSlmb3IodmFyIHUgaW4gYylzW3VdPUgodSxjLG58fGpuKTtlbHNlIGUoci5hdHRycykmJkx0KHMsci5hdHRycyksZShyLnByb3BzKSYmTHQocyxyLnByb3BzKTt2YXIgbD1uZXcgSXQocixzLG8saSx0KSxmPWEucmVuZGVyLmNhbGwobnVsbCxsLl9jLGwpO3JldHVybiBmIGluc3RhbmNlb2YgbXImJihmLmZuQ29udGV4dD1pLGYuZm5PcHRpb25zPWEsci5zbG90JiYoKGYuZGF0YXx8KGYuZGF0YT17fSkpLnNsb3Q9ci5zbG90KSksZn0ocixmLG8sYSxzKTt2YXIgcD1vLm9uO2lmKG8ub249by5uYXRpdmVPbixuKHIub3B0aW9ucy5hYnN0cmFjdCkpe3ZhciBkPW8uc2xvdDtvPXt9LGQmJihvLnNsb3Q9ZCl9IWZ1bmN0aW9uKHQpe3QuaG9va3x8KHQuaG9vaz17fSk7Zm9yKHZhciBlPTA7ZTxHci5sZW5ndGg7ZSsrKXt2YXIgbj1HcltlXSxyPXQuaG9va1tuXSxpPVdyW25dO3QuaG9va1tuXT1yP2Z1bmN0aW9uKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKG4scixpLG8pe3QobixyLGksbyksZShuLHIsaSxvKX19KGkscik6aX19KG8pO3ZhciB2PXIub3B0aW9ucy5uYW1lfHxjO3JldHVybiBuZXcgbXIoXCJ2dWUtY29tcG9uZW50LVwiK3IuY2lkKyh2P1wiLVwiK3Y6XCJcIiksbyx2b2lkIDAsdm9pZCAwLHZvaWQgMCxhLHtDdG9yOnIscHJvcHNEYXRhOmYsbGlzdGVuZXJzOnAsdGFnOmMsY2hpbGRyZW46c30sbCl9fX1mdW5jdGlvbiBEdCh0LGksbyxhLHMsYyl7cmV0dXJuKEFycmF5LmlzQXJyYXkobyl8fHIobykpJiYocz1hLGE9byxvPXZvaWQgMCksbihjKSYmKHM9WHIpLGZ1bmN0aW9uKHQsbixpLG8sYSl7aWYoZShpKSYmZShpLl9fb2JfXykpcmV0dXJuIGdyKCk7ZShpKSYmZShpLmlzKSYmKG49aS5pcyk7aWYoIW4pcmV0dXJuIGdyKCk7QXJyYXkuaXNBcnJheShvKSYmXCJmdW5jdGlvblwiPT10eXBlb2Ygb1swXSYmKChpPWl8fHt9KS5zY29wZWRTbG90cz17ZGVmYXVsdDpvWzBdfSxvLmxlbmd0aD0wKTthPT09WHI/bz1mdW5jdGlvbih0KXtyZXR1cm4gcih0KT9beCh0KV06QXJyYXkuaXNBcnJheSh0KT9ldCh0KTp2b2lkIDB9KG8pOmE9PT1aciYmKG89ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTA7ZTx0Lmxlbmd0aDtlKyspaWYoQXJyYXkuaXNBcnJheSh0W2VdKSlyZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSx0KTtyZXR1cm4gdH0obykpO3ZhciBzLGM7aWYoXCJzdHJpbmdcIj09dHlwZW9mIG4pe3ZhciB1O2M9dC4kdm5vZGUmJnQuJHZub2RlLm5zfHxKbi5nZXRUYWdOYW1lc3BhY2Uobikscz1Kbi5pc1Jlc2VydmVkVGFnKG4pP25ldyBtcihKbi5wYXJzZVBsYXRmb3JtVGFnTmFtZShuKSxpLG8sdm9pZCAwLHZvaWQgMCx0KTplKHU9Uih0LiRvcHRpb25zLFwiY29tcG9uZW50c1wiLG4pKT9NdCh1LGksdCxvLG4pOm5ldyBtcihuLGksbyx2b2lkIDAsdm9pZCAwLHQpfWVsc2Ugcz1NdChuLGksdCxvKTtyZXR1cm4gZShzKT8oYyYmUHQocyxjKSxzKTpncigpfSh0LGksbyxhLHMpfWZ1bmN0aW9uIFB0KHIsaSxvKXtpZihyLm5zPWksXCJmb3JlaWduT2JqZWN0XCI9PT1yLnRhZyYmKGk9dm9pZCAwLG89ITApLGUoci5jaGlsZHJlbikpZm9yKHZhciBhPTAscz1yLmNoaWxkcmVuLmxlbmd0aDthPHM7YSsrKXt2YXIgYz1yLmNoaWxkcmVuW2FdO2UoYy50YWcpJiYodChjLm5zKXx8bihvKSkmJlB0KGMsaSxvKX19ZnVuY3Rpb24gRnQodCl7dmFyIGU9dC5vcHRpb25zO2lmKHQuc3VwZXIpe3ZhciBuPUZ0KHQuc3VwZXIpO2lmKG4hPT10LnN1cGVyT3B0aW9ucyl7dC5zdXBlck9wdGlvbnM9bjt2YXIgcj1mdW5jdGlvbih0KXt2YXIgZSxuPXQub3B0aW9ucyxyPXQuZXh0ZW5kT3B0aW9ucyxpPXQuc2VhbGVkT3B0aW9ucztmb3IodmFyIG8gaW4gbiluW29dIT09aVtvXSYmKGV8fChlPXt9KSxlW29dPWZ1bmN0aW9uKHQsZSxuKXt7aWYoQXJyYXkuaXNBcnJheSh0KSl7dmFyIHI9W107bj1BcnJheS5pc0FycmF5KG4pP246W25dLGU9QXJyYXkuaXNBcnJheShlKT9lOltlXTtmb3IodmFyIGk9MDtpPHQubGVuZ3RoO2krKykoZS5pbmRleE9mKHRbaV0pPj0wfHxuLmluZGV4T2YodFtpXSk8MCkmJnIucHVzaCh0W2ldKTtyZXR1cm4gcn1yZXR1cm4gdH19KG5bb10scltvXSxpW29dKSk7cmV0dXJuIGV9KHQpO3ImJmgodC5leHRlbmRPcHRpb25zLHIpLChlPXQub3B0aW9ucz1GKG4sdC5leHRlbmRPcHRpb25zKSkubmFtZSYmKGUuY29tcG9uZW50c1tlLm5hbWVdPXQpfX1yZXR1cm4gZX1mdW5jdGlvbiBSdCh0KXt0aGlzLl9pbml0KHQpfWZ1bmN0aW9uIEh0KHQpe3QuY2lkPTA7dmFyIGU9MTt0LmV4dGVuZD1mdW5jdGlvbih0KXt0PXR8fHt9O3ZhciBuPXRoaXMscj1uLmNpZCxpPXQuX0N0b3J8fCh0Ll9DdG9yPXt9KTtpZihpW3JdKXJldHVybiBpW3JdO3ZhciBvPXQubmFtZXx8bi5vcHRpb25zLm5hbWUsYT1mdW5jdGlvbih0KXt0aGlzLl9pbml0KHQpfTtyZXR1cm4gYS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShuLnByb3RvdHlwZSksYS5wcm90b3R5cGUuY29uc3RydWN0b3I9YSxhLmNpZD1lKyssYS5vcHRpb25zPUYobi5vcHRpb25zLHQpLGEuc3VwZXI9bixhLm9wdGlvbnMucHJvcHMmJmZ1bmN0aW9uKHQpe3ZhciBlPXQub3B0aW9ucy5wcm9wcztmb3IodmFyIG4gaW4gZSltdCh0LnByb3RvdHlwZSxcIl9wcm9wc1wiLG4pfShhKSxhLm9wdGlvbnMuY29tcHV0ZWQmJmZ1bmN0aW9uKHQpe3ZhciBlPXQub3B0aW9ucy5jb21wdXRlZDtmb3IodmFyIG4gaW4gZSlndCh0LnByb3RvdHlwZSxuLGVbbl0pfShhKSxhLmV4dGVuZD1uLmV4dGVuZCxhLm1peGluPW4ubWl4aW4sYS51c2U9bi51c2Usem4uZm9yRWFjaChmdW5jdGlvbih0KXthW3RdPW5bdF19KSxvJiYoYS5vcHRpb25zLmNvbXBvbmVudHNbb109YSksYS5zdXBlck9wdGlvbnM9bi5vcHRpb25zLGEuZXh0ZW5kT3B0aW9ucz10LGEuc2VhbGVkT3B0aW9ucz1oKHt9LGEub3B0aW9ucyksaVtyXT1hLGF9fWZ1bmN0aW9uIEJ0KHQpe3JldHVybiB0JiYodC5DdG9yLm9wdGlvbnMubmFtZXx8dC50YWcpfWZ1bmN0aW9uIFV0KHQsZSl7cmV0dXJuIEFycmF5LmlzQXJyYXkodCk/dC5pbmRleE9mKGUpPi0xOlwic3RyaW5nXCI9PXR5cGVvZiB0P3Quc3BsaXQoXCIsXCIpLmluZGV4T2YoZSk+LTE6ISFmdW5jdGlvbih0KXtyZXR1cm5cIltvYmplY3QgUmVnRXhwXVwiPT09Tm4uY2FsbCh0KX0odCkmJnQudGVzdChlKX1mdW5jdGlvbiBWdCh0LGUpe3ZhciBuPXQuY2FjaGUscj10LmtleXMsaT10Ll92bm9kZTtmb3IodmFyIG8gaW4gbil7dmFyIGE9bltvXTtpZihhKXt2YXIgcz1CdChhLmNvbXBvbmVudE9wdGlvbnMpO3MmJiFlKHMpJiZ6dChuLG8scixpKX19fWZ1bmN0aW9uIHp0KHQsZSxuLHIpe3ZhciBpPXRbZV07IWl8fHImJmkudGFnPT09ci50YWd8fGkuY29tcG9uZW50SW5zdGFuY2UuJGRlc3Ryb3koKSx0W2VdPW51bGwsbChuLGUpfWZ1bmN0aW9uIEt0KHQpe2Zvcih2YXIgbj10LmRhdGEscj10LGk9dDtlKGkuY29tcG9uZW50SW5zdGFuY2UpOykoaT1pLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZSkmJmkuZGF0YSYmKG49SnQoaS5kYXRhLG4pKTtmb3IoO2Uocj1yLnBhcmVudCk7KXImJnIuZGF0YSYmKG49SnQobixyLmRhdGEpKTtyZXR1cm4gZnVuY3Rpb24odCxuKXtpZihlKHQpfHxlKG4pKXJldHVybiBxdCh0LFd0KG4pKTtyZXR1cm5cIlwifShuLnN0YXRpY0NsYXNzLG4uY2xhc3MpfWZ1bmN0aW9uIEp0KHQsbil7cmV0dXJue3N0YXRpY0NsYXNzOnF0KHQuc3RhdGljQ2xhc3Msbi5zdGF0aWNDbGFzcyksY2xhc3M6ZSh0LmNsYXNzKT9bdC5jbGFzcyxuLmNsYXNzXTpuLmNsYXNzfX1mdW5jdGlvbiBxdCh0LGUpe3JldHVybiB0P2U/dCtcIiBcIitlOnQ6ZXx8XCJcIn1mdW5jdGlvbiBXdCh0KXtyZXR1cm4gQXJyYXkuaXNBcnJheSh0KT9mdW5jdGlvbih0KXtmb3IodmFyIG4scj1cIlwiLGk9MCxvPXQubGVuZ3RoO2k8bztpKyspZShuPVd0KHRbaV0pKSYmXCJcIiE9PW4mJihyJiYocis9XCIgXCIpLHIrPW4pO3JldHVybiByfSh0KTppKHQpP2Z1bmN0aW9uKHQpe3ZhciBlPVwiXCI7Zm9yKHZhciBuIGluIHQpdFtuXSYmKGUmJihlKz1cIiBcIiksZSs9bik7cmV0dXJuIGV9KHQpOlwic3RyaW5nXCI9PXR5cGVvZiB0P3Q6XCJcIn1mdW5jdGlvbiBHdCh0KXtyZXR1cm4gYmkodCk/XCJzdmdcIjpcIm1hdGhcIj09PXQ/XCJtYXRoXCI6dm9pZCAwfWZ1bmN0aW9uIFp0KHQpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXt2YXIgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHQpO3JldHVybiBlfHxkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpfXJldHVybiB0fWZ1bmN0aW9uIFh0KHQsZSl7dmFyIG49dC5kYXRhLnJlZjtpZihuKXt2YXIgcj10LmNvbnRleHQsaT10LmNvbXBvbmVudEluc3RhbmNlfHx0LmVsbSxvPXIuJHJlZnM7ZT9BcnJheS5pc0FycmF5KG9bbl0pP2wob1tuXSxpKTpvW25dPT09aSYmKG9bbl09dm9pZCAwKTp0LmRhdGEucmVmSW5Gb3I/QXJyYXkuaXNBcnJheShvW25dKT9vW25dLmluZGV4T2YoaSk8MCYmb1tuXS5wdXNoKGkpOm9bbl09W2ldOm9bbl09aX19ZnVuY3Rpb24gWXQocixpKXtyZXR1cm4gci5rZXk9PT1pLmtleSYmKHIudGFnPT09aS50YWcmJnIuaXNDb21tZW50PT09aS5pc0NvbW1lbnQmJmUoci5kYXRhKT09PWUoaS5kYXRhKSYmZnVuY3Rpb24odCxuKXtpZihcImlucHV0XCIhPT10LnRhZylyZXR1cm4hMDt2YXIgcixpPWUocj10LmRhdGEpJiZlKHI9ci5hdHRycykmJnIudHlwZSxvPWUocj1uLmRhdGEpJiZlKHI9ci5hdHRycykmJnIudHlwZTtyZXR1cm4gaT09PW98fHdpKGkpJiZ3aShvKX0ocixpKXx8bihyLmlzQXN5bmNQbGFjZWhvbGRlcikmJnIuYXN5bmNGYWN0b3J5PT09aS5hc3luY0ZhY3RvcnkmJnQoaS5hc3luY0ZhY3RvcnkuZXJyb3IpKX1mdW5jdGlvbiBRdCh0LG4scil7dmFyIGksbyxhPXt9O2ZvcihpPW47aTw9cjsrK2kpZShvPXRbaV0ua2V5KSYmKGFbb109aSk7cmV0dXJuIGF9ZnVuY3Rpb24gdGUodCxlKXsodC5kYXRhLmRpcmVjdGl2ZXN8fGUuZGF0YS5kaXJlY3RpdmVzKSYmZnVuY3Rpb24odCxlKXt2YXIgbixyLGksbz10PT09QWksYT1lPT09QWkscz1lZSh0LmRhdGEuZGlyZWN0aXZlcyx0LmNvbnRleHQpLGM9ZWUoZS5kYXRhLmRpcmVjdGl2ZXMsZS5jb250ZXh0KSx1PVtdLGw9W107Zm9yKG4gaW4gYylyPXNbbl0saT1jW25dLHI/KGkub2xkVmFsdWU9ci52YWx1ZSxuZShpLFwidXBkYXRlXCIsZSx0KSxpLmRlZiYmaS5kZWYuY29tcG9uZW50VXBkYXRlZCYmbC5wdXNoKGkpKToobmUoaSxcImJpbmRcIixlLHQpLGkuZGVmJiZpLmRlZi5pbnNlcnRlZCYmdS5wdXNoKGkpKTtpZih1Lmxlbmd0aCl7dmFyIGY9ZnVuY3Rpb24oKXtmb3IodmFyIG49MDtuPHUubGVuZ3RoO24rKyluZSh1W25dLFwiaW5zZXJ0ZWRcIixlLHQpfTtvP1koZSxcImluc2VydFwiLGYpOmYoKX1sLmxlbmd0aCYmWShlLFwicG9zdHBhdGNoXCIsZnVuY3Rpb24oKXtmb3IodmFyIG49MDtuPGwubGVuZ3RoO24rKyluZShsW25dLFwiY29tcG9uZW50VXBkYXRlZFwiLGUsdCl9KTtpZighbylmb3IobiBpbiBzKWNbbl18fG5lKHNbbl0sXCJ1bmJpbmRcIix0LHQsYSl9KHQsZSl9ZnVuY3Rpb24gZWUodCxlKXt2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKCF0KXJldHVybiBuO3ZhciByLGk7Zm9yKHI9MDtyPHQubGVuZ3RoO3IrKykoaT10W3JdKS5tb2RpZmllcnN8fChpLm1vZGlmaWVycz1UaSksbltmdW5jdGlvbih0KXtyZXR1cm4gdC5yYXdOYW1lfHx0Lm5hbWUrXCIuXCIrT2JqZWN0LmtleXModC5tb2RpZmllcnN8fHt9KS5qb2luKFwiLlwiKX0oaSldPWksaS5kZWY9UihlLiRvcHRpb25zLFwiZGlyZWN0aXZlc1wiLGkubmFtZSk7cmV0dXJuIG59ZnVuY3Rpb24gbmUodCxlLG4scixpKXt2YXIgbz10LmRlZiYmdC5kZWZbZV07aWYobyl0cnl7byhuLmVsbSx0LG4scixpKX1jYXRjaChyKXtWKHIsbi5jb250ZXh0LFwiZGlyZWN0aXZlIFwiK3QubmFtZStcIiBcIitlK1wiIGhvb2tcIil9fWZ1bmN0aW9uIHJlKG4scil7dmFyIGk9ci5jb21wb25lbnRPcHRpb25zO2lmKCEoZShpKSYmITE9PT1pLkN0b3Iub3B0aW9ucy5pbmhlcml0QXR0cnN8fHQobi5kYXRhLmF0dHJzKSYmdChyLmRhdGEuYXR0cnMpKSl7dmFyIG8sYSxzPXIuZWxtLGM9bi5kYXRhLmF0dHJzfHx7fSx1PXIuZGF0YS5hdHRyc3x8e307ZSh1Ll9fb2JfXykmJih1PXIuZGF0YS5hdHRycz1oKHt9LHUpKTtmb3IobyBpbiB1KWE9dVtvXSxjW29dIT09YSYmaWUocyxvLGEpOyhRbnx8ZXIpJiZ1LnZhbHVlIT09Yy52YWx1ZSYmaWUocyxcInZhbHVlXCIsdS52YWx1ZSk7Zm9yKG8gaW4gYyl0KHVbb10pJiYoaGkobyk/cy5yZW1vdmVBdHRyaWJ1dGVOUyh2aSxtaShvKSk6cGkobyl8fHMucmVtb3ZlQXR0cmlidXRlKG8pKX19ZnVuY3Rpb24gaWUodCxlLG4pe2lmKGRpKGUpKXlpKG4pP3QucmVtb3ZlQXR0cmlidXRlKGUpOihuPVwiYWxsb3dmdWxsc2NyZWVuXCI9PT1lJiZcIkVNQkVEXCI9PT10LnRhZ05hbWU/XCJ0cnVlXCI6ZSx0LnNldEF0dHJpYnV0ZShlLG4pKTtlbHNlIGlmKHBpKGUpKXQuc2V0QXR0cmlidXRlKGUseWkobil8fFwiZmFsc2VcIj09PW4/XCJmYWxzZVwiOlwidHJ1ZVwiKTtlbHNlIGlmKGhpKGUpKXlpKG4pP3QucmVtb3ZlQXR0cmlidXRlTlModmksbWkoZSkpOnQuc2V0QXR0cmlidXRlTlModmksZSxuKTtlbHNlIGlmKHlpKG4pKXQucmVtb3ZlQXR0cmlidXRlKGUpO2Vsc2V7aWYoUW4mJiF0ciYmXCJURVhUQVJFQVwiPT09dC50YWdOYW1lJiZcInBsYWNlaG9sZGVyXCI9PT1lJiYhdC5fX2llcGgpe3ZhciByPWZ1bmN0aW9uKGUpe2Uuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiaW5wdXRcIixyKX07dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIixyKSx0Ll9faWVwaD0hMH10LnNldEF0dHJpYnV0ZShlLG4pfX1mdW5jdGlvbiBvZShuLHIpe3ZhciBpPXIuZWxtLG89ci5kYXRhLGE9bi5kYXRhO2lmKCEodChvLnN0YXRpY0NsYXNzKSYmdChvLmNsYXNzKSYmKHQoYSl8fHQoYS5zdGF0aWNDbGFzcykmJnQoYS5jbGFzcykpKSl7dmFyIHM9S3QociksYz1pLl90cmFuc2l0aW9uQ2xhc3NlcztlKGMpJiYocz1xdChzLFd0KGMpKSkscyE9PWkuX3ByZXZDbGFzcyYmKGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixzKSxpLl9wcmV2Q2xhc3M9cyl9fWZ1bmN0aW9uIGFlKHQpe2Z1bmN0aW9uIGUoKXsoYXx8KGE9W10pKS5wdXNoKHQuc2xpY2UodixpKS50cmltKCkpLHY9aSsxfXZhciBuLHIsaSxvLGEscz0hMSxjPSExLHU9ITEsbD0hMSxmPTAscD0wLGQ9MCx2PTA7Zm9yKGk9MDtpPHQubGVuZ3RoO2krKylpZihyPW4sbj10LmNoYXJDb2RlQXQoaSkscykzOT09PW4mJjkyIT09ciYmKHM9ITEpO2Vsc2UgaWYoYykzND09PW4mJjkyIT09ciYmKGM9ITEpO2Vsc2UgaWYodSk5Nj09PW4mJjkyIT09ciYmKHU9ITEpO2Vsc2UgaWYobCk0Nz09PW4mJjkyIT09ciYmKGw9ITEpO2Vsc2UgaWYoMTI0IT09bnx8MTI0PT09dC5jaGFyQ29kZUF0KGkrMSl8fDEyND09PXQuY2hhckNvZGVBdChpLTEpfHxmfHxwfHxkKXtzd2l0Y2gobil7Y2FzZSAzNDpjPSEwO2JyZWFrO2Nhc2UgMzk6cz0hMDticmVhaztjYXNlIDk2OnU9ITA7YnJlYWs7Y2FzZSA0MDpkKys7YnJlYWs7Y2FzZSA0MTpkLS07YnJlYWs7Y2FzZSA5MTpwKys7YnJlYWs7Y2FzZSA5MzpwLS07YnJlYWs7Y2FzZSAxMjM6ZisrO2JyZWFrO2Nhc2UgMTI1OmYtLX1pZig0Nz09PW4pe2Zvcih2YXIgaD1pLTEsbT12b2lkIDA7aD49MCYmXCIgXCI9PT0obT10LmNoYXJBdChoKSk7aC0tKTttJiZJaS50ZXN0KG0pfHwobD0hMCl9fWVsc2Ugdm9pZCAwPT09bz8odj1pKzEsbz10LnNsaWNlKDAsaSkudHJpbSgpKTplKCk7aWYodm9pZCAwPT09bz9vPXQuc2xpY2UoMCxpKS50cmltKCk6MCE9PXYmJmUoKSxhKWZvcihpPTA7aTxhLmxlbmd0aDtpKyspbz1mdW5jdGlvbih0LGUpe3ZhciBuPWUuaW5kZXhPZihcIihcIik7e2lmKG48MClyZXR1cm4nX2YoXCInK2UrJ1wiKSgnK3QrXCIpXCI7dmFyIHI9ZS5zbGljZSgwLG4pLGk9ZS5zbGljZShuKzEpO3JldHVybidfZihcIicrcisnXCIpKCcrdCtcIixcIitpfX0obyxhW2ldKTtyZXR1cm4gb31mdW5jdGlvbiBzZSh0KXtjb25zb2xlLmVycm9yKFwiW1Z1ZSBjb21waWxlcl06IFwiK3QpfWZ1bmN0aW9uIGNlKHQsZSl7cmV0dXJuIHQ/dC5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHRbZV19KS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIHR9KTpbXX1mdW5jdGlvbiB1ZSh0LGUsbil7KHQucHJvcHN8fCh0LnByb3BzPVtdKSkucHVzaCh7bmFtZTplLHZhbHVlOm59KSx0LnBsYWluPSExfWZ1bmN0aW9uIGxlKHQsZSxuKXsodC5hdHRyc3x8KHQuYXR0cnM9W10pKS5wdXNoKHtuYW1lOmUsdmFsdWU6bn0pLHQucGxhaW49ITF9ZnVuY3Rpb24gZmUodCxlLG4pe3QuYXR0cnNNYXBbZV09bix0LmF0dHJzTGlzdC5wdXNoKHtuYW1lOmUsdmFsdWU6bn0pfWZ1bmN0aW9uIHBlKHQsZSxuLHIsaSxvKXsodC5kaXJlY3RpdmVzfHwodC5kaXJlY3RpdmVzPVtdKSkucHVzaCh7bmFtZTplLHJhd05hbWU6bix2YWx1ZTpyLGFyZzppLG1vZGlmaWVyczpvfSksdC5wbGFpbj0hMX1mdW5jdGlvbiBkZSh0LGUsbixyLGksbyl7KHI9cnx8am4pLmNhcHR1cmUmJihkZWxldGUgci5jYXB0dXJlLGU9XCIhXCIrZSksci5vbmNlJiYoZGVsZXRlIHIub25jZSxlPVwiflwiK2UpLHIucGFzc2l2ZSYmKGRlbGV0ZSByLnBhc3NpdmUsZT1cIiZcIitlKSxcImNsaWNrXCI9PT1lJiYoci5yaWdodD8oZT1cImNvbnRleHRtZW51XCIsZGVsZXRlIHIucmlnaHQpOnIubWlkZGxlJiYoZT1cIm1vdXNldXBcIikpO3ZhciBhO3IubmF0aXZlPyhkZWxldGUgci5uYXRpdmUsYT10Lm5hdGl2ZUV2ZW50c3x8KHQubmF0aXZlRXZlbnRzPXt9KSk6YT10LmV2ZW50c3x8KHQuZXZlbnRzPXt9KTt2YXIgcz17dmFsdWU6bn07ciE9PWpuJiYocy5tb2RpZmllcnM9cik7dmFyIGM9YVtlXTtBcnJheS5pc0FycmF5KGMpP2k/Yy51bnNoaWZ0KHMpOmMucHVzaChzKTphW2VdPWM/aT9bcyxjXTpbYyxzXTpzLHQucGxhaW49ITF9ZnVuY3Rpb24gdmUodCxlLG4pe3ZhciByPWhlKHQsXCI6XCIrZSl8fGhlKHQsXCJ2LWJpbmQ6XCIrZSk7aWYobnVsbCE9cilyZXR1cm4gYWUocik7aWYoITEhPT1uKXt2YXIgaT1oZSh0LGUpO2lmKG51bGwhPWkpcmV0dXJuIEpTT04uc3RyaW5naWZ5KGkpfX1mdW5jdGlvbiBoZSh0LGUsbil7dmFyIHI7aWYobnVsbCE9KHI9dC5hdHRyc01hcFtlXSkpZm9yKHZhciBpPXQuYXR0cnNMaXN0LG89MCxhPWkubGVuZ3RoO288YTtvKyspaWYoaVtvXS5uYW1lPT09ZSl7aS5zcGxpY2UobywxKTticmVha31yZXR1cm4gbiYmZGVsZXRlIHQuYXR0cnNNYXBbZV0scn1mdW5jdGlvbiBtZSh0LGUsbil7dmFyIHI9bnx8e30saT1cIiQkdlwiO3IudHJpbSYmKGk9XCIodHlwZW9mICQkdiA9PT0gJ3N0cmluZyc/ICQkdi50cmltKCk6ICQkdilcIiksci5udW1iZXImJihpPVwiX24oXCIraStcIilcIik7dmFyIG89eWUoZSxpKTt0Lm1vZGVsPXt2YWx1ZTpcIihcIitlK1wiKVwiLGV4cHJlc3Npb246J1wiJytlKydcIicsY2FsbGJhY2s6XCJmdW5jdGlvbiAoJCR2KSB7XCIrbytcIn1cIn19ZnVuY3Rpb24geWUodCxlKXt2YXIgbj1mdW5jdGlvbih0KXtpZihlaT10Lmxlbmd0aCx0LmluZGV4T2YoXCJbXCIpPDB8fHQubGFzdEluZGV4T2YoXCJdXCIpPGVpLTEpcmV0dXJuKGlpPXQubGFzdEluZGV4T2YoXCIuXCIpKT4tMT97ZXhwOnQuc2xpY2UoMCxpaSksa2V5OidcIicrdC5zbGljZShpaSsxKSsnXCInfTp7ZXhwOnQsa2V5Om51bGx9O25pPXQsaWk9b2k9YWk9MDtmb3IoOyFfZSgpOyliZShyaT1nZSgpKT8kZShyaSk6OTE9PT1yaSYmZnVuY3Rpb24odCl7dmFyIGU9MTtvaT1paTtmb3IoOyFfZSgpOylpZih0PWdlKCksYmUodCkpJGUodCk7ZWxzZSBpZig5MT09PXQmJmUrKyw5Mz09PXQmJmUtLSwwPT09ZSl7YWk9aWk7YnJlYWt9fShyaSk7cmV0dXJue2V4cDp0LnNsaWNlKDAsb2kpLGtleTp0LnNsaWNlKG9pKzEsYWkpfX0odCk7cmV0dXJuIG51bGw9PT1uLmtleT90K1wiPVwiK2U6XCIkc2V0KFwiK24uZXhwK1wiLCBcIituLmtleStcIiwgXCIrZStcIilcIn1mdW5jdGlvbiBnZSgpe3JldHVybiBuaS5jaGFyQ29kZUF0KCsraWkpfWZ1bmN0aW9uIF9lKCl7cmV0dXJuIGlpPj1laX1mdW5jdGlvbiBiZSh0KXtyZXR1cm4gMzQ9PT10fHwzOT09PXR9ZnVuY3Rpb24gJGUodCl7Zm9yKHZhciBlPXQ7IV9lKCkmJih0PWdlKCkpIT09ZTspO31mdW5jdGlvbiBDZSh0LGUsbixyLGkpe2U9ZnVuY3Rpb24odCl7cmV0dXJuIHQuX3dpdGhUYXNrfHwodC5fd2l0aFRhc2s9ZnVuY3Rpb24oKXtFcj0hMDt2YXIgZT10LmFwcGx5KG51bGwsYXJndW1lbnRzKTtyZXR1cm4gRXI9ITEsZX0pfShlKSxuJiYoZT1mdW5jdGlvbih0LGUsbil7dmFyIHI9c2k7cmV0dXJuIGZ1bmN0aW9uIGkoKXtudWxsIT09dC5hcHBseShudWxsLGFyZ3VtZW50cykmJndlKGUsaSxuLHIpfX0oZSx0LHIpKSxzaS5hZGRFdmVudExpc3RlbmVyKHQsZSxvcj97Y2FwdHVyZTpyLHBhc3NpdmU6aX06cil9ZnVuY3Rpb24gd2UodCxlLG4scil7KHJ8fHNpKS5yZW1vdmVFdmVudExpc3RlbmVyKHQsZS5fd2l0aFRhc2t8fGUsbil9ZnVuY3Rpb24geGUobixyKXtpZighdChuLmRhdGEub24pfHwhdChyLmRhdGEub24pKXt2YXIgaT1yLmRhdGEub258fHt9LG89bi5kYXRhLm9ufHx7fTtzaT1yLmVsbSxmdW5jdGlvbih0KXtpZihlKHRbTGldKSl7dmFyIG49UW4/XCJjaGFuZ2VcIjpcImlucHV0XCI7dFtuXT1bXS5jb25jYXQodFtMaV0sdFtuXXx8W10pLGRlbGV0ZSB0W0xpXX1lKHRbTWldKSYmKHQuY2hhbmdlPVtdLmNvbmNhdCh0W01pXSx0LmNoYW5nZXx8W10pLGRlbGV0ZSB0W01pXSl9KGkpLFgoaSxvLENlLHdlLHIuY29udGV4dCksc2k9dm9pZCAwfX1mdW5jdGlvbiBrZShuLHIpe2lmKCF0KG4uZGF0YS5kb21Qcm9wcyl8fCF0KHIuZGF0YS5kb21Qcm9wcykpe3ZhciBpLG8sYT1yLmVsbSxzPW4uZGF0YS5kb21Qcm9wc3x8e30sdT1yLmRhdGEuZG9tUHJvcHN8fHt9O2UodS5fX29iX18pJiYodT1yLmRhdGEuZG9tUHJvcHM9aCh7fSx1KSk7Zm9yKGkgaW4gcyl0KHVbaV0pJiYoYVtpXT1cIlwiKTtmb3IoaSBpbiB1KXtpZihvPXVbaV0sXCJ0ZXh0Q29udGVudFwiPT09aXx8XCJpbm5lckhUTUxcIj09PWkpe2lmKHIuY2hpbGRyZW4mJihyLmNoaWxkcmVuLmxlbmd0aD0wKSxvPT09c1tpXSljb250aW51ZTsxPT09YS5jaGlsZE5vZGVzLmxlbmd0aCYmYS5yZW1vdmVDaGlsZChhLmNoaWxkTm9kZXNbMF0pfWlmKFwidmFsdWVcIj09PWkpe2EuX3ZhbHVlPW87dmFyIGw9dChvKT9cIlwiOlN0cmluZyhvKTsoZnVuY3Rpb24odCxuKXtyZXR1cm4hdC5jb21wb3NpbmcmJihcIk9QVElPTlwiPT09dC50YWdOYW1lfHxmdW5jdGlvbih0LGUpe3ZhciBuPSEwO3RyeXtuPWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQhPT10fWNhdGNoKHQpe31yZXR1cm4gbiYmdC52YWx1ZSE9PWV9KHQsbil8fGZ1bmN0aW9uKHQsbil7dmFyIHI9dC52YWx1ZSxpPXQuX3ZNb2RpZmllcnM7aWYoZShpKSl7aWYoaS5sYXp5KXJldHVybiExO2lmKGkubnVtYmVyKXJldHVybiBjKHIpIT09YyhuKTtpZihpLnRyaW0pcmV0dXJuIHIudHJpbSgpIT09bi50cmltKCl9cmV0dXJuIHIhPT1ufSh0LG4pKX0pKGEsbCkmJihhLnZhbHVlPWwpfWVsc2UgYVtpXT1vfX19ZnVuY3Rpb24gQWUodCl7dmFyIGU9T2UodC5zdHlsZSk7cmV0dXJuIHQuc3RhdGljU3R5bGU/aCh0LnN0YXRpY1N0eWxlLGUpOmV9ZnVuY3Rpb24gT2UodCl7cmV0dXJuIEFycmF5LmlzQXJyYXkodCk/bSh0KTpcInN0cmluZ1wiPT10eXBlb2YgdD9GaSh0KTp0fWZ1bmN0aW9uIFNlKG4scil7dmFyIGk9ci5kYXRhLG89bi5kYXRhO2lmKCEodChpLnN0YXRpY1N0eWxlKSYmdChpLnN0eWxlKSYmdChvLnN0YXRpY1N0eWxlKSYmdChvLnN0eWxlKSkpe3ZhciBhLHMsYz1yLmVsbSx1PW8uc3RhdGljU3R5bGUsbD1vLm5vcm1hbGl6ZWRTdHlsZXx8by5zdHlsZXx8e30sZj11fHxsLHA9T2Uoci5kYXRhLnN0eWxlKXx8e307ci5kYXRhLm5vcm1hbGl6ZWRTdHlsZT1lKHAuX19vYl9fKT9oKHt9LHApOnA7dmFyIGQ9ZnVuY3Rpb24odCxlKXt2YXIgbixyPXt9O2lmKGUpZm9yKHZhciBpPXQ7aS5jb21wb25lbnRJbnN0YW5jZTspKGk9aS5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGUpJiZpLmRhdGEmJihuPUFlKGkuZGF0YSkpJiZoKHIsbik7KG49QWUodC5kYXRhKSkmJmgocixuKTtmb3IodmFyIG89dDtvPW8ucGFyZW50OylvLmRhdGEmJihuPUFlKG8uZGF0YSkpJiZoKHIsbik7cmV0dXJuIHJ9KHIsITApO2ZvcihzIGluIGYpdChkW3NdKSYmQmkoYyxzLFwiXCIpO2ZvcihzIGluIGQpKGE9ZFtzXSkhPT1mW3NdJiZCaShjLHMsbnVsbD09YT9cIlwiOmEpfX1mdW5jdGlvbiBUZSh0LGUpe2lmKGUmJihlPWUudHJpbSgpKSlpZih0LmNsYXNzTGlzdCllLmluZGV4T2YoXCIgXCIpPi0xP2Uuc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3JldHVybiB0LmNsYXNzTGlzdC5hZGQoZSl9KTp0LmNsYXNzTGlzdC5hZGQoZSk7ZWxzZXt2YXIgbj1cIiBcIisodC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIikrXCIgXCI7bi5pbmRleE9mKFwiIFwiK2UrXCIgXCIpPDAmJnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwobitlKS50cmltKCkpfX1mdW5jdGlvbiBFZSh0LGUpe2lmKGUmJihlPWUudHJpbSgpKSlpZih0LmNsYXNzTGlzdCllLmluZGV4T2YoXCIgXCIpPi0xP2Uuc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3JldHVybiB0LmNsYXNzTGlzdC5yZW1vdmUoZSl9KTp0LmNsYXNzTGlzdC5yZW1vdmUoZSksdC5jbGFzc0xpc3QubGVuZ3RofHx0LnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpO2Vsc2V7Zm9yKHZhciBuPVwiIFwiKyh0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKStcIiBcIixyPVwiIFwiK2UrXCIgXCI7bi5pbmRleE9mKHIpPj0wOyluPW4ucmVwbGFjZShyLFwiIFwiKTsobj1uLnRyaW0oKSk/dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLG4pOnQucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIil9fWZ1bmN0aW9uIGplKHQpe2lmKHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiB0KXt2YXIgZT17fTtyZXR1cm4hMSE9PXQuY3NzJiZoKGUsS2kodC5uYW1lfHxcInZcIikpLGgoZSx0KSxlfXJldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0P0tpKHQpOnZvaWQgMH19ZnVuY3Rpb24gTmUodCl7UWkoZnVuY3Rpb24oKXtRaSh0KX0pfWZ1bmN0aW9uIEllKHQsZSl7dmFyIG49dC5fdHJhbnNpdGlvbkNsYXNzZXN8fCh0Ll90cmFuc2l0aW9uQ2xhc3Nlcz1bXSk7bi5pbmRleE9mKGUpPDAmJihuLnB1c2goZSksVGUodCxlKSl9ZnVuY3Rpb24gTGUodCxlKXt0Ll90cmFuc2l0aW9uQ2xhc3NlcyYmbCh0Ll90cmFuc2l0aW9uQ2xhc3NlcyxlKSxFZSh0LGUpfWZ1bmN0aW9uIE1lKHQsZSxuKXt2YXIgcj1EZSh0LGUpLGk9ci50eXBlLG89ci50aW1lb3V0LGE9ci5wcm9wQ291bnQ7aWYoIWkpcmV0dXJuIG4oKTt2YXIgcz1pPT09cWk/Wmk6WWksYz0wLHU9ZnVuY3Rpb24oKXt0LnJlbW92ZUV2ZW50TGlzdGVuZXIocyxsKSxuKCl9LGw9ZnVuY3Rpb24oZSl7ZS50YXJnZXQ9PT10JiYrK2M+PWEmJnUoKX07c2V0VGltZW91dChmdW5jdGlvbigpe2M8YSYmdSgpfSxvKzEpLHQuYWRkRXZlbnRMaXN0ZW5lcihzLGwpfWZ1bmN0aW9uIERlKHQsZSl7dmFyIG4scj13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KSxpPXJbR2krXCJEZWxheVwiXS5zcGxpdChcIiwgXCIpLG89cltHaStcIkR1cmF0aW9uXCJdLnNwbGl0KFwiLCBcIiksYT1QZShpLG8pLHM9cltYaStcIkRlbGF5XCJdLnNwbGl0KFwiLCBcIiksYz1yW1hpK1wiRHVyYXRpb25cIl0uc3BsaXQoXCIsIFwiKSx1PVBlKHMsYyksbD0wLGY9MDtlPT09cWk/YT4wJiYobj1xaSxsPWEsZj1vLmxlbmd0aCk6ZT09PVdpP3U+MCYmKG49V2ksbD11LGY9Yy5sZW5ndGgpOmY9KG49KGw9TWF0aC5tYXgoYSx1KSk+MD9hPnU/cWk6V2k6bnVsbCk/bj09PXFpP28ubGVuZ3RoOmMubGVuZ3RoOjA7cmV0dXJue3R5cGU6bix0aW1lb3V0OmwscHJvcENvdW50OmYsaGFzVHJhbnNmb3JtOm49PT1xaSYmdG8udGVzdChyW0dpK1wiUHJvcGVydHlcIl0pfX1mdW5jdGlvbiBQZSh0LGUpe2Zvcig7dC5sZW5ndGg8ZS5sZW5ndGg7KXQ9dC5jb25jYXQodCk7cmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsZS5tYXAoZnVuY3Rpb24oZSxuKXtyZXR1cm4gRmUoZSkrRmUodFtuXSl9KSl9ZnVuY3Rpb24gRmUodCl7cmV0dXJuIDFlMypOdW1iZXIodC5zbGljZSgwLC0xKSl9ZnVuY3Rpb24gUmUobixyKXt2YXIgbz1uLmVsbTtlKG8uX2xlYXZlQ2IpJiYoby5fbGVhdmVDYi5jYW5jZWxsZWQ9ITAsby5fbGVhdmVDYigpKTt2YXIgYT1qZShuLmRhdGEudHJhbnNpdGlvbik7aWYoIXQoYSkmJiFlKG8uX2VudGVyQ2IpJiYxPT09by5ub2RlVHlwZSl7Zm9yKHZhciBzPWEuY3NzLHU9YS50eXBlLGw9YS5lbnRlckNsYXNzLGY9YS5lbnRlclRvQ2xhc3MscD1hLmVudGVyQWN0aXZlQ2xhc3MsZD1hLmFwcGVhckNsYXNzLHY9YS5hcHBlYXJUb0NsYXNzLGg9YS5hcHBlYXJBY3RpdmVDbGFzcyxtPWEuYmVmb3JlRW50ZXIseT1hLmVudGVyLGc9YS5hZnRlckVudGVyLF89YS5lbnRlckNhbmNlbGxlZCwkPWEuYmVmb3JlQXBwZWFyLEM9YS5hcHBlYXIsdz1hLmFmdGVyQXBwZWFyLHg9YS5hcHBlYXJDYW5jZWxsZWQsaz1hLmR1cmF0aW9uLEE9UHIsTz1Qci4kdm5vZGU7TyYmTy5wYXJlbnQ7KUE9KE89Ty5wYXJlbnQpLmNvbnRleHQ7dmFyIFM9IUEuX2lzTW91bnRlZHx8IW4uaXNSb290SW5zZXJ0O2lmKCFTfHxDfHxcIlwiPT09Qyl7dmFyIFQ9UyYmZD9kOmwsRT1TJiZoP2g6cCxqPVMmJnY/djpmLE49Uz8kfHxtOm0sST1TJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBDP0M6eSxMPVM/d3x8ZzpnLE09Uz94fHxfOl8sRD1jKGkoayk/ay5lbnRlcjprKSxQPSExIT09cyYmIXRyLEY9VWUoSSksUj1vLl9lbnRlckNiPWIoZnVuY3Rpb24oKXtQJiYoTGUobyxqKSxMZShvLEUpKSxSLmNhbmNlbGxlZD8oUCYmTGUobyxUKSxNJiZNKG8pKTpMJiZMKG8pLG8uX2VudGVyQ2I9bnVsbH0pO24uZGF0YS5zaG93fHxZKG4sXCJpbnNlcnRcIixmdW5jdGlvbigpe3ZhciB0PW8ucGFyZW50Tm9kZSxlPXQmJnQuX3BlbmRpbmcmJnQuX3BlbmRpbmdbbi5rZXldO2UmJmUudGFnPT09bi50YWcmJmUuZWxtLl9sZWF2ZUNiJiZlLmVsbS5fbGVhdmVDYigpLEkmJkkobyxSKX0pLE4mJk4obyksUCYmKEllKG8sVCksSWUobyxFKSxOZShmdW5jdGlvbigpe0llKG8saiksTGUobyxUKSxSLmNhbmNlbGxlZHx8Rnx8KEJlKEQpP3NldFRpbWVvdXQoUixEKTpNZShvLHUsUikpfSkpLG4uZGF0YS5zaG93JiYociYmcigpLEkmJkkobyxSKSksUHx8Rnx8UigpfX19ZnVuY3Rpb24gSGUobixyKXtmdW5jdGlvbiBvKCl7eC5jYW5jZWxsZWR8fChuLmRhdGEuc2hvd3x8KChhLnBhcmVudE5vZGUuX3BlbmRpbmd8fChhLnBhcmVudE5vZGUuX3BlbmRpbmc9e30pKVtuLmtleV09biksdiYmdihhKSwkJiYoSWUoYSxmKSxJZShhLGQpLE5lKGZ1bmN0aW9uKCl7SWUoYSxwKSxMZShhLGYpLHguY2FuY2VsbGVkfHxDfHwoQmUodyk/c2V0VGltZW91dCh4LHcpOk1lKGEsbCx4KSl9KSksaCYmaChhLHgpLCR8fEN8fHgoKSl9dmFyIGE9bi5lbG07ZShhLl9lbnRlckNiKSYmKGEuX2VudGVyQ2IuY2FuY2VsbGVkPSEwLGEuX2VudGVyQ2IoKSk7dmFyIHM9amUobi5kYXRhLnRyYW5zaXRpb24pO2lmKHQocyl8fDEhPT1hLm5vZGVUeXBlKXJldHVybiByKCk7aWYoIWUoYS5fbGVhdmVDYikpe3ZhciB1PXMuY3NzLGw9cy50eXBlLGY9cy5sZWF2ZUNsYXNzLHA9cy5sZWF2ZVRvQ2xhc3MsZD1zLmxlYXZlQWN0aXZlQ2xhc3Msdj1zLmJlZm9yZUxlYXZlLGg9cy5sZWF2ZSxtPXMuYWZ0ZXJMZWF2ZSx5PXMubGVhdmVDYW5jZWxsZWQsZz1zLmRlbGF5TGVhdmUsXz1zLmR1cmF0aW9uLCQ9ITEhPT11JiYhdHIsQz1VZShoKSx3PWMoaShfKT9fLmxlYXZlOl8pLHg9YS5fbGVhdmVDYj1iKGZ1bmN0aW9uKCl7YS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUuX3BlbmRpbmcmJihhLnBhcmVudE5vZGUuX3BlbmRpbmdbbi5rZXldPW51bGwpLCQmJihMZShhLHApLExlKGEsZCkpLHguY2FuY2VsbGVkPygkJiZMZShhLGYpLHkmJnkoYSkpOihyKCksbSYmbShhKSksYS5fbGVhdmVDYj1udWxsfSk7Zz9nKG8pOm8oKX19ZnVuY3Rpb24gQmUodCl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIHQmJiFpc05hTih0KX1mdW5jdGlvbiBVZShuKXtpZih0KG4pKXJldHVybiExO3ZhciByPW4uZm5zO3JldHVybiBlKHIpP1VlKEFycmF5LmlzQXJyYXkocik/clswXTpyKToobi5fbGVuZ3RofHxuLmxlbmd0aCk+MX1mdW5jdGlvbiBWZSh0LGUpeyEwIT09ZS5kYXRhLnNob3cmJlJlKGUpfWZ1bmN0aW9uIHplKHQsZSxuKXtLZSh0LGUsbiksKFFufHxlcikmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXtLZSh0LGUsbil9LDApfWZ1bmN0aW9uIEtlKHQsZSxuKXt2YXIgcj1lLnZhbHVlLGk9dC5tdWx0aXBsZTtpZighaXx8QXJyYXkuaXNBcnJheShyKSl7Zm9yKHZhciBvLGEscz0wLGM9dC5vcHRpb25zLmxlbmd0aDtzPGM7cysrKWlmKGE9dC5vcHRpb25zW3NdLGkpbz1fKHIscWUoYSkpPi0xLGEuc2VsZWN0ZWQhPT1vJiYoYS5zZWxlY3RlZD1vKTtlbHNlIGlmKGcocWUoYSkscikpcmV0dXJuIHZvaWQodC5zZWxlY3RlZEluZGV4IT09cyYmKHQuc2VsZWN0ZWRJbmRleD1zKSk7aXx8KHQuc2VsZWN0ZWRJbmRleD0tMSl9fWZ1bmN0aW9uIEplKHQsZSl7cmV0dXJuIGUuZXZlcnkoZnVuY3Rpb24oZSl7cmV0dXJuIWcoZSx0KX0pfWZ1bmN0aW9uIHFlKHQpe3JldHVyblwiX3ZhbHVlXCJpbiB0P3QuX3ZhbHVlOnQudmFsdWV9ZnVuY3Rpb24gV2UodCl7dC50YXJnZXQuY29tcG9zaW5nPSEwfWZ1bmN0aW9uIEdlKHQpe3QudGFyZ2V0LmNvbXBvc2luZyYmKHQudGFyZ2V0LmNvbXBvc2luZz0hMSxaZSh0LnRhcmdldCxcImlucHV0XCIpKX1mdW5jdGlvbiBaZSh0LGUpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiSFRNTEV2ZW50c1wiKTtuLmluaXRFdmVudChlLCEwLCEwKSx0LmRpc3BhdGNoRXZlbnQobil9ZnVuY3Rpb24gWGUodCl7cmV0dXJuIXQuY29tcG9uZW50SW5zdGFuY2V8fHQuZGF0YSYmdC5kYXRhLnRyYW5zaXRpb24/dDpYZSh0LmNvbXBvbmVudEluc3RhbmNlLl92bm9kZSl9ZnVuY3Rpb24gWWUodCl7dmFyIGU9dCYmdC5jb21wb25lbnRPcHRpb25zO3JldHVybiBlJiZlLkN0b3Iub3B0aW9ucy5hYnN0cmFjdD9ZZShpdChlLmNoaWxkcmVuKSk6dH1mdW5jdGlvbiBRZSh0KXt2YXIgZT17fSxuPXQuJG9wdGlvbnM7Zm9yKHZhciByIGluIG4ucHJvcHNEYXRhKWVbcl09dFtyXTt2YXIgaT1uLl9wYXJlbnRMaXN0ZW5lcnM7Zm9yKHZhciBvIGluIGkpZVtQbihvKV09aVtvXTtyZXR1cm4gZX1mdW5jdGlvbiB0bih0LGUpe2lmKC9cXGQta2VlcC1hbGl2ZSQvLnRlc3QoZS50YWcpKXJldHVybiB0KFwia2VlcC1hbGl2ZVwiLHtwcm9wczplLmNvbXBvbmVudE9wdGlvbnMucHJvcHNEYXRhfSl9ZnVuY3Rpb24gZW4odCl7dC5lbG0uX21vdmVDYiYmdC5lbG0uX21vdmVDYigpLHQuZWxtLl9lbnRlckNiJiZ0LmVsbS5fZW50ZXJDYigpfWZ1bmN0aW9uIG5uKHQpe3QuZGF0YS5uZXdQb3M9dC5lbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCl9ZnVuY3Rpb24gcm4odCl7dmFyIGU9dC5kYXRhLnBvcyxuPXQuZGF0YS5uZXdQb3Mscj1lLmxlZnQtbi5sZWZ0LGk9ZS50b3Atbi50b3A7aWYocnx8aSl7dC5kYXRhLm1vdmVkPSEwO3ZhciBvPXQuZWxtLnN0eWxlO28udHJhbnNmb3JtPW8uV2Via2l0VHJhbnNmb3JtPVwidHJhbnNsYXRlKFwiK3IrXCJweCxcIitpK1wicHgpXCIsby50cmFuc2l0aW9uRHVyYXRpb249XCIwc1wifX1mdW5jdGlvbiBvbih0LGUpe3ZhciBuPWU/em86Vm87cmV0dXJuIHQucmVwbGFjZShuLGZ1bmN0aW9uKHQpe3JldHVybiBVb1t0XX0pfWZ1bmN0aW9uIGFuKHQsZSxuKXtyZXR1cm57dHlwZToxLHRhZzp0LGF0dHJzTGlzdDplLGF0dHJzTWFwOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT17fSxuPTAscj10Lmxlbmd0aDtuPHI7bisrKWVbdFtuXS5uYW1lXT10W25dLnZhbHVlO3JldHVybiBlfShlKSxwYXJlbnQ6bixjaGlsZHJlbjpbXX19ZnVuY3Rpb24gc24odCxlKXtmdW5jdGlvbiBuKHQpe3QucHJlJiYocz0hMSksTG8odC50YWcpJiYoYz0hMSk7Zm9yKHZhciBuPTA7bjxJby5sZW5ndGg7bisrKUlvW25dKHQsZSl9VG89ZS53YXJufHxzZSxMbz1lLmlzUHJlVGFnfHxCbixNbz1lLm11c3RVc2VQcm9wfHxCbixEbz1lLmdldFRhZ05hbWVzcGFjZXx8Qm4sam89Y2UoZS5tb2R1bGVzLFwidHJhbnNmb3JtTm9kZVwiKSxObz1jZShlLm1vZHVsZXMsXCJwcmVUcmFuc2Zvcm1Ob2RlXCIpLElvPWNlKGUubW9kdWxlcyxcInBvc3RUcmFuc2Zvcm1Ob2RlXCIpLEVvPWUuZGVsaW1pdGVyczt2YXIgcixpLG89W10sYT0hMSE9PWUucHJlc2VydmVXaGl0ZXNwYWNlLHM9ITEsYz0hMTtyZXR1cm4gZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBuKGUpe2wrPWUsdD10LnN1YnN0cmluZyhlKX1mdW5jdGlvbiByKHQsbixyKXt2YXIgaSxzO2lmKG51bGw9PW4mJihuPWwpLG51bGw9PXImJihyPWwpLHQmJihzPXQudG9Mb3dlckNhc2UoKSksdClmb3IoaT1hLmxlbmd0aC0xO2k+PTAmJmFbaV0ubG93ZXJDYXNlZFRhZyE9PXM7aS0tKTtlbHNlIGk9MDtpZihpPj0wKXtmb3IodmFyIGM9YS5sZW5ndGgtMTtjPj1pO2MtLSllLmVuZCYmZS5lbmQoYVtjXS50YWcsbixyKTthLmxlbmd0aD1pLG89aSYmYVtpLTFdLnRhZ31lbHNlXCJiclwiPT09cz9lLnN0YXJ0JiZlLnN0YXJ0KHQsW10sITAsbixyKTpcInBcIj09PXMmJihlLnN0YXJ0JiZlLnN0YXJ0KHQsW10sITEsbixyKSxlLmVuZCYmZS5lbmQodCxuLHIpKX1mb3IodmFyIGksbyxhPVtdLHM9ZS5leHBlY3RIVE1MLGM9ZS5pc1VuYXJ5VGFnfHxCbix1PWUuY2FuQmVMZWZ0T3BlblRhZ3x8Qm4sbD0wO3Q7KXtpZihpPXQsbyYmSG8obykpe3ZhciBmPTAscD1vLnRvTG93ZXJDYXNlKCksZD1Cb1twXXx8KEJvW3BdPW5ldyBSZWdFeHAoXCIoW1xcXFxzXFxcXFNdKj8pKDwvXCIrcCtcIltePl0qPilcIixcImlcIikpLHY9dC5yZXBsYWNlKGQsZnVuY3Rpb24odCxuLHIpe3JldHVybiBmPXIubGVuZ3RoLEhvKHApfHxcIm5vc2NyaXB0XCI9PT1wfHwobj1uLnJlcGxhY2UoLzwhLS0oW1xcc1xcU10qPyktLT4vZyxcIiQxXCIpLnJlcGxhY2UoLzwhXFxbQ0RBVEFcXFsoW1xcc1xcU10qPyldXT4vZyxcIiQxXCIpKSxKbyhwLG4pJiYobj1uLnNsaWNlKDEpKSxlLmNoYXJzJiZlLmNoYXJzKG4pLFwiXCJ9KTtsKz10Lmxlbmd0aC12Lmxlbmd0aCx0PXYscihwLGwtZixsKX1lbHNle3ZhciBoPXQuaW5kZXhPZihcIjxcIik7aWYoMD09PWgpe2lmKEFvLnRlc3QodCkpe3ZhciBtPXQuaW5kZXhPZihcIi0tXFx4M2VcIik7aWYobT49MCl7ZS5zaG91bGRLZWVwQ29tbWVudCYmZS5jb21tZW50KHQuc3Vic3RyaW5nKDQsbSkpLG4obSszKTtjb250aW51ZX19aWYoT28udGVzdCh0KSl7dmFyIHk9dC5pbmRleE9mKFwiXT5cIik7aWYoeT49MCl7bih5KzIpO2NvbnRpbnVlfX12YXIgZz10Lm1hdGNoKGtvKTtpZihnKXtuKGdbMF0ubGVuZ3RoKTtjb250aW51ZX12YXIgXz10Lm1hdGNoKHhvKTtpZihfKXt2YXIgYj1sO24oX1swXS5sZW5ndGgpLHIoX1sxXSxiLGwpO2NvbnRpbnVlfXZhciAkPWZ1bmN0aW9uKCl7dmFyIGU9dC5tYXRjaChDbyk7aWYoZSl7dmFyIHI9e3RhZ05hbWU6ZVsxXSxhdHRyczpbXSxzdGFydDpsfTtuKGVbMF0ubGVuZ3RoKTtmb3IodmFyIGksbzshKGk9dC5tYXRjaCh3bykpJiYobz10Lm1hdGNoKF9vKSk7KW4ob1swXS5sZW5ndGgpLHIuYXR0cnMucHVzaChvKTtpZihpKXJldHVybiByLnVuYXJ5U2xhc2g9aVsxXSxuKGlbMF0ubGVuZ3RoKSxyLmVuZD1sLHJ9fSgpO2lmKCQpeyFmdW5jdGlvbih0KXt2YXIgbj10LnRhZ05hbWUsaT10LnVuYXJ5U2xhc2g7cyYmKFwicFwiPT09byYmZ28obikmJnIobyksdShuKSYmbz09PW4mJnIobikpO2Zvcih2YXIgbD1jKG4pfHwhIWksZj10LmF0dHJzLmxlbmd0aCxwPW5ldyBBcnJheShmKSxkPTA7ZDxmO2QrKyl7dmFyIHY9dC5hdHRyc1tkXTtTbyYmLTE9PT12WzBdLmluZGV4T2YoJ1wiXCInKSYmKFwiXCI9PT12WzNdJiZkZWxldGUgdlszXSxcIlwiPT09dls0XSYmZGVsZXRlIHZbNF0sXCJcIj09PXZbNV0mJmRlbGV0ZSB2WzVdKTt2YXIgaD12WzNdfHx2WzRdfHx2WzVdfHxcIlwiLG09XCJhXCI9PT1uJiZcImhyZWZcIj09PXZbMV0/ZS5zaG91bGREZWNvZGVOZXdsaW5lc0ZvckhyZWY6ZS5zaG91bGREZWNvZGVOZXdsaW5lcztwW2RdPXtuYW1lOnZbMV0sdmFsdWU6b24oaCxtKX19bHx8KGEucHVzaCh7dGFnOm4sbG93ZXJDYXNlZFRhZzpuLnRvTG93ZXJDYXNlKCksYXR0cnM6cH0pLG89biksZS5zdGFydCYmZS5zdGFydChuLHAsbCx0LnN0YXJ0LHQuZW5kKX0oJCksSm8obyx0KSYmbigxKTtjb250aW51ZX19dmFyIEM9dm9pZCAwLHc9dm9pZCAwLHg9dm9pZCAwO2lmKGg+PTApe2Zvcih3PXQuc2xpY2UoaCk7ISh4by50ZXN0KHcpfHxDby50ZXN0KHcpfHxBby50ZXN0KHcpfHxPby50ZXN0KHcpfHwoeD13LmluZGV4T2YoXCI8XCIsMSkpPDApOyloKz14LHc9dC5zbGljZShoKTtDPXQuc3Vic3RyaW5nKDAsaCksbihoKX1oPDAmJihDPXQsdD1cIlwiKSxlLmNoYXJzJiZDJiZlLmNoYXJzKEMpfWlmKHQ9PT1pKXtlLmNoYXJzJiZlLmNoYXJzKHQpO2JyZWFrfX1yKCl9KHQse3dhcm46VG8sZXhwZWN0SFRNTDplLmV4cGVjdEhUTUwsaXNVbmFyeVRhZzplLmlzVW5hcnlUYWcsY2FuQmVMZWZ0T3BlblRhZzplLmNhbkJlTGVmdE9wZW5UYWcsc2hvdWxkRGVjb2RlTmV3bGluZXM6ZS5zaG91bGREZWNvZGVOZXdsaW5lcyxzaG91bGREZWNvZGVOZXdsaW5lc0ZvckhyZWY6ZS5zaG91bGREZWNvZGVOZXdsaW5lc0ZvckhyZWYsc2hvdWxkS2VlcENvbW1lbnQ6ZS5jb21tZW50cyxzdGFydDpmdW5jdGlvbih0LGEsdSl7dmFyIGw9aSYmaS5uc3x8RG8odCk7UW4mJlwic3ZnXCI9PT1sJiYoYT1mdW5jdGlvbih0KXtmb3IodmFyIGU9W10sbj0wO248dC5sZW5ndGg7bisrKXt2YXIgcj10W25dO25hLnRlc3Qoci5uYW1lKXx8KHIubmFtZT1yLm5hbWUucmVwbGFjZShyYSxcIlwiKSxlLnB1c2gocikpfXJldHVybiBlfShhKSk7dmFyIGY9YW4odCxhLGkpO2wmJihmLm5zPWwpLGZ1bmN0aW9uKHQpe3JldHVyblwic3R5bGVcIj09PXQudGFnfHxcInNjcmlwdFwiPT09dC50YWcmJighdC5hdHRyc01hcC50eXBlfHxcInRleHQvamF2YXNjcmlwdFwiPT09dC5hdHRyc01hcC50eXBlKX0oZikmJiF1cigpJiYoZi5mb3JiaWRkZW49ITApO2Zvcih2YXIgcD0wO3A8Tm8ubGVuZ3RoO3ArKylmPU5vW3BdKGYsZSl8fGY7aWYoc3x8KCFmdW5jdGlvbih0KXtudWxsIT1oZSh0LFwidi1wcmVcIikmJih0LnByZT0hMCl9KGYpLGYucHJlJiYocz0hMCkpLExvKGYudGFnKSYmKGM9ITApLHM/ZnVuY3Rpb24odCl7dmFyIGU9dC5hdHRyc0xpc3QubGVuZ3RoO2lmKGUpZm9yKHZhciBuPXQuYXR0cnM9bmV3IEFycmF5KGUpLHI9MDtyPGU7cisrKW5bcl09e25hbWU6dC5hdHRyc0xpc3Rbcl0ubmFtZSx2YWx1ZTpKU09OLnN0cmluZ2lmeSh0LmF0dHJzTGlzdFtyXS52YWx1ZSl9O2Vsc2UgdC5wcmV8fCh0LnBsYWluPSEwKX0oZik6Zi5wcm9jZXNzZWR8fCh1bihmKSxmdW5jdGlvbih0KXt2YXIgZT1oZSh0LFwidi1pZlwiKTtpZihlKXQuaWY9ZSxsbih0LHtleHA6ZSxibG9jazp0fSk7ZWxzZXtudWxsIT1oZSh0LFwidi1lbHNlXCIpJiYodC5lbHNlPSEwKTt2YXIgbj1oZSh0LFwidi1lbHNlLWlmXCIpO24mJih0LmVsc2VpZj1uKX19KGYpLGZ1bmN0aW9uKHQpe251bGwhPWhlKHQsXCJ2LW9uY2VcIikmJih0Lm9uY2U9ITApfShmKSxjbihmLGUpKSxyP28ubGVuZ3RofHxyLmlmJiYoZi5lbHNlaWZ8fGYuZWxzZSkmJmxuKHIse2V4cDpmLmVsc2VpZixibG9jazpmfSk6cj1mLGkmJiFmLmZvcmJpZGRlbilpZihmLmVsc2VpZnx8Zi5lbHNlKSFmdW5jdGlvbih0LGUpe3ZhciBuPWZ1bmN0aW9uKHQpe3ZhciBlPXQubGVuZ3RoO2Zvcig7ZS0tOyl7aWYoMT09PXRbZV0udHlwZSlyZXR1cm4gdFtlXTt0LnBvcCgpfX0oZS5jaGlsZHJlbik7biYmbi5pZiYmbG4obix7ZXhwOnQuZWxzZWlmLGJsb2NrOnR9KX0oZixpKTtlbHNlIGlmKGYuc2xvdFNjb3BlKXtpLnBsYWluPSExO3ZhciBkPWYuc2xvdFRhcmdldHx8J1wiZGVmYXVsdFwiJzsoaS5zY29wZWRTbG90c3x8KGkuc2NvcGVkU2xvdHM9e30pKVtkXT1mfWVsc2UgaS5jaGlsZHJlbi5wdXNoKGYpLGYucGFyZW50PWk7dT9uKGYpOihpPWYsby5wdXNoKGYpKX0sZW5kOmZ1bmN0aW9uKCl7dmFyIHQ9b1tvLmxlbmd0aC0xXSxlPXQuY2hpbGRyZW5bdC5jaGlsZHJlbi5sZW5ndGgtMV07ZSYmMz09PWUudHlwZSYmXCIgXCI9PT1lLnRleHQmJiFjJiZ0LmNoaWxkcmVuLnBvcCgpLG8ubGVuZ3RoLT0xLGk9b1tvLmxlbmd0aC0xXSxuKHQpfSxjaGFyczpmdW5jdGlvbih0KXtpZihpJiYoIVFufHxcInRleHRhcmVhXCIhPT1pLnRhZ3x8aS5hdHRyc01hcC5wbGFjZWhvbGRlciE9PXQpKXt2YXIgZT1pLmNoaWxkcmVuO2lmKHQ9Y3x8dC50cmltKCk/ZnVuY3Rpb24odCl7cmV0dXJuXCJzY3JpcHRcIj09PXQudGFnfHxcInN0eWxlXCI9PT10LnRhZ30oaSk/dDplYSh0KTphJiZlLmxlbmd0aD9cIiBcIjpcIlwiKXt2YXIgbjshcyYmXCIgXCIhPT10JiYobj1mdW5jdGlvbih0LGUpe3ZhciBuPWU/Zm8oZSk6dW87aWYobi50ZXN0KHQpKXtmb3IodmFyIHIsaSxvLGE9W10scz1bXSxjPW4ubGFzdEluZGV4PTA7cj1uLmV4ZWModCk7KXsoaT1yLmluZGV4KT5jJiYocy5wdXNoKG89dC5zbGljZShjLGkpKSxhLnB1c2goSlNPTi5zdHJpbmdpZnkobykpKTt2YXIgdT1hZShyWzFdLnRyaW0oKSk7YS5wdXNoKFwiX3MoXCIrdStcIilcIikscy5wdXNoKHtcIkBiaW5kaW5nXCI6dX0pLGM9aStyWzBdLmxlbmd0aH1yZXR1cm4gYzx0Lmxlbmd0aCYmKHMucHVzaChvPXQuc2xpY2UoYykpLGEucHVzaChKU09OLnN0cmluZ2lmeShvKSkpLHtleHByZXNzaW9uOmEuam9pbihcIitcIiksdG9rZW5zOnN9fX0odCxFbykpP2UucHVzaCh7dHlwZToyLGV4cHJlc3Npb246bi5leHByZXNzaW9uLHRva2VuczpuLnRva2Vucyx0ZXh0OnR9KTpcIiBcIj09PXQmJmUubGVuZ3RoJiZcIiBcIj09PWVbZS5sZW5ndGgtMV0udGV4dHx8ZS5wdXNoKHt0eXBlOjMsdGV4dDp0fSl9fX0sY29tbWVudDpmdW5jdGlvbih0KXtpLmNoaWxkcmVuLnB1c2goe3R5cGU6Myx0ZXh0OnQsaXNDb21tZW50OiEwfSl9fSkscn1mdW5jdGlvbiBjbih0LGUpeyFmdW5jdGlvbih0KXt2YXIgZT12ZSh0LFwia2V5XCIpO2UmJih0LmtleT1lKX0odCksdC5wbGFpbj0hdC5rZXkmJiF0LmF0dHJzTGlzdC5sZW5ndGgsZnVuY3Rpb24odCl7dmFyIGU9dmUodCxcInJlZlwiKTtlJiYodC5yZWY9ZSx0LnJlZkluRm9yPWZ1bmN0aW9uKHQpe3ZhciBlPXQ7Zm9yKDtlOyl7aWYodm9pZCAwIT09ZS5mb3IpcmV0dXJuITA7ZT1lLnBhcmVudH1yZXR1cm4hMX0odCkpfSh0KSxmdW5jdGlvbih0KXtpZihcInNsb3RcIj09PXQudGFnKXQuc2xvdE5hbWU9dmUodCxcIm5hbWVcIik7ZWxzZXt2YXIgZTtcInRlbXBsYXRlXCI9PT10LnRhZz8oZT1oZSh0LFwic2NvcGVcIiksdC5zbG90U2NvcGU9ZXx8aGUodCxcInNsb3Qtc2NvcGVcIikpOihlPWhlKHQsXCJzbG90LXNjb3BlXCIpKSYmKHQuc2xvdFNjb3BlPWUpO3ZhciBuPXZlKHQsXCJzbG90XCIpO24mJih0LnNsb3RUYXJnZXQ9J1wiXCInPT09bj8nXCJkZWZhdWx0XCInOm4sXCJ0ZW1wbGF0ZVwiPT09dC50YWd8fHQuc2xvdFNjb3BlfHxsZSh0LFwic2xvdFwiLG4pKX19KHQpLGZ1bmN0aW9uKHQpe3ZhciBlOyhlPXZlKHQsXCJpc1wiKSkmJih0LmNvbXBvbmVudD1lKTtudWxsIT1oZSh0LFwiaW5saW5lLXRlbXBsYXRlXCIpJiYodC5pbmxpbmVUZW1wbGF0ZT0hMCl9KHQpO2Zvcih2YXIgbj0wO248am8ubGVuZ3RoO24rKyl0PWpvW25dKHQsZSl8fHQ7IWZ1bmN0aW9uKHQpe3ZhciBlLG4scixpLG8sYSxzLGM9dC5hdHRyc0xpc3Q7Zm9yKGU9MCxuPWMubGVuZ3RoO2U8bjtlKyspaWYocj1pPWNbZV0ubmFtZSxvPWNbZV0udmFsdWUsV28udGVzdChyKSlpZih0Lmhhc0JpbmRpbmdzPSEwLChhPWZ1bmN0aW9uKHQpe3ZhciBlPXQubWF0Y2godGEpO2lmKGUpe3ZhciBuPXt9O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24odCl7blt0LnNsaWNlKDEpXT0hMH0pLG59fShyKSkmJihyPXIucmVwbGFjZSh0YSxcIlwiKSksUW8udGVzdChyKSlyPXIucmVwbGFjZShRbyxcIlwiKSxvPWFlKG8pLHM9ITEsYSYmKGEucHJvcCYmKHM9ITAsXCJpbm5lckh0bWxcIj09PShyPVBuKHIpKSYmKHI9XCJpbm5lckhUTUxcIikpLGEuY2FtZWwmJihyPVBuKHIpKSxhLnN5bmMmJmRlKHQsXCJ1cGRhdGU6XCIrUG4ocikseWUobyxcIiRldmVudFwiKSkpLHN8fCF0LmNvbXBvbmVudCYmTW8odC50YWcsdC5hdHRyc01hcC50eXBlLHIpP3VlKHQscixvKTpsZSh0LHIsbyk7ZWxzZSBpZihxby50ZXN0KHIpKXI9ci5yZXBsYWNlKHFvLFwiXCIpLGRlKHQscixvLGEsITEpO2Vsc2V7dmFyIHU9KHI9ci5yZXBsYWNlKFdvLFwiXCIpKS5tYXRjaChZbyksbD11JiZ1WzFdO2wmJihyPXIuc2xpY2UoMCwtKGwubGVuZ3RoKzEpKSkscGUodCxyLGksbyxsLGEpfWVsc2UgbGUodCxyLEpTT04uc3RyaW5naWZ5KG8pKSwhdC5jb21wb25lbnQmJlwibXV0ZWRcIj09PXImJk1vKHQudGFnLHQuYXR0cnNNYXAudHlwZSxyKSYmdWUodCxyLFwidHJ1ZVwiKX0odCl9ZnVuY3Rpb24gdW4odCl7dmFyIGU7aWYoZT1oZSh0LFwidi1mb3JcIikpe3ZhciBuPWZ1bmN0aW9uKHQpe3ZhciBlPXQubWF0Y2goR28pO2lmKCFlKXJldHVybjt2YXIgbj17fTtuLmZvcj1lWzJdLnRyaW0oKTt2YXIgcj1lWzFdLnRyaW0oKS5yZXBsYWNlKFhvLFwiXCIpLGk9ci5tYXRjaChabyk7aT8obi5hbGlhcz1yLnJlcGxhY2UoWm8sXCJcIiksbi5pdGVyYXRvcjE9aVsxXS50cmltKCksaVsyXSYmKG4uaXRlcmF0b3IyPWlbMl0udHJpbSgpKSk6bi5hbGlhcz1yO3JldHVybiBufShlKTtuJiZoKHQsbil9fWZ1bmN0aW9uIGxuKHQsZSl7dC5pZkNvbmRpdGlvbnN8fCh0LmlmQ29uZGl0aW9ucz1bXSksdC5pZkNvbmRpdGlvbnMucHVzaChlKX1mdW5jdGlvbiBmbih0KXtyZXR1cm4gYW4odC50YWcsdC5hdHRyc0xpc3Quc2xpY2UoKSx0LnBhcmVudCl9ZnVuY3Rpb24gcG4odCl7aWYodC5zdGF0aWM9ZnVuY3Rpb24odCl7aWYoMj09PXQudHlwZSlyZXR1cm4hMTtpZigzPT09dC50eXBlKXJldHVybiEwO3JldHVybiEoIXQucHJlJiYodC5oYXNCaW5kaW5nc3x8dC5pZnx8dC5mb3J8fEluKHQudGFnKXx8IUZvKHQudGFnKXx8ZnVuY3Rpb24odCl7Zm9yKDt0LnBhcmVudDspe2lmKFwidGVtcGxhdGVcIiE9PSh0PXQucGFyZW50KS50YWcpcmV0dXJuITE7aWYodC5mb3IpcmV0dXJuITB9cmV0dXJuITF9KHQpfHwhT2JqZWN0LmtleXModCkuZXZlcnkoUG8pKSl9KHQpLDE9PT10LnR5cGUpe2lmKCFGbyh0LnRhZykmJlwic2xvdFwiIT09dC50YWcmJm51bGw9PXQuYXR0cnNNYXBbXCJpbmxpbmUtdGVtcGxhdGVcIl0pcmV0dXJuO2Zvcih2YXIgZT0wLG49dC5jaGlsZHJlbi5sZW5ndGg7ZTxuO2UrKyl7dmFyIHI9dC5jaGlsZHJlbltlXTtwbihyKSxyLnN0YXRpY3x8KHQuc3RhdGljPSExKX1pZih0LmlmQ29uZGl0aW9ucylmb3IodmFyIGk9MSxvPXQuaWZDb25kaXRpb25zLmxlbmd0aDtpPG87aSsrKXt2YXIgYT10LmlmQ29uZGl0aW9uc1tpXS5ibG9jaztwbihhKSxhLnN0YXRpY3x8KHQuc3RhdGljPSExKX19fWZ1bmN0aW9uIGRuKHQsZSl7aWYoMT09PXQudHlwZSl7aWYoKHQuc3RhdGljfHx0Lm9uY2UpJiYodC5zdGF0aWNJbkZvcj1lKSx0LnN0YXRpYyYmdC5jaGlsZHJlbi5sZW5ndGgmJigxIT09dC5jaGlsZHJlbi5sZW5ndGh8fDMhPT10LmNoaWxkcmVuWzBdLnR5cGUpKXJldHVybiB2b2lkKHQuc3RhdGljUm9vdD0hMCk7aWYodC5zdGF0aWNSb290PSExLHQuY2hpbGRyZW4pZm9yKHZhciBuPTAscj10LmNoaWxkcmVuLmxlbmd0aDtuPHI7bisrKWRuKHQuY2hpbGRyZW5bbl0sZXx8ISF0LmZvcik7aWYodC5pZkNvbmRpdGlvbnMpZm9yKHZhciBpPTEsbz10LmlmQ29uZGl0aW9ucy5sZW5ndGg7aTxvO2krKylkbih0LmlmQ29uZGl0aW9uc1tpXS5ibG9jayxlKX19ZnVuY3Rpb24gdm4odCxlLG4pe3ZhciByPWU/XCJuYXRpdmVPbjp7XCI6XCJvbjp7XCI7Zm9yKHZhciBpIGluIHQpcis9J1wiJytpKydcIjonK2huKGksdFtpXSkrXCIsXCI7cmV0dXJuIHIuc2xpY2UoMCwtMSkrXCJ9XCJ9ZnVuY3Rpb24gaG4odCxlKXtpZighZSlyZXR1cm5cImZ1bmN0aW9uKCl7fVwiO2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuXCJbXCIrZS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGhuKHQsZSl9KS5qb2luKFwiLFwiKStcIl1cIjt2YXIgbj1jYS50ZXN0KGUudmFsdWUpLHI9c2EudGVzdChlLnZhbHVlKTtpZihlLm1vZGlmaWVycyl7dmFyIGk9XCJcIixvPVwiXCIsYT1bXTtmb3IodmFyIHMgaW4gZS5tb2RpZmllcnMpaWYoZmFbc10pbys9ZmFbc10sdWFbc10mJmEucHVzaChzKTtlbHNlIGlmKFwiZXhhY3RcIj09PXMpe3ZhciBjPWUubW9kaWZpZXJzO28rPWxhKFtcImN0cmxcIixcInNoaWZ0XCIsXCJhbHRcIixcIm1ldGFcIl0uZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiFjW3RdfSkubWFwKGZ1bmN0aW9uKHQpe3JldHVyblwiJGV2ZW50LlwiK3QrXCJLZXlcIn0pLmpvaW4oXCJ8fFwiKSl9ZWxzZSBhLnB1c2gocyk7YS5sZW5ndGgmJihpKz1mdW5jdGlvbih0KXtyZXR1cm5cImlmKCEoJ2J1dHRvbicgaW4gJGV2ZW50KSYmXCIrdC5tYXAobW4pLmpvaW4oXCImJlwiKStcIilyZXR1cm4gbnVsbDtcIn0oYSkpLG8mJihpKz1vKTtyZXR1cm5cImZ1bmN0aW9uKCRldmVudCl7XCIraSsobj9lLnZhbHVlK1wiKCRldmVudClcIjpyP1wiKFwiK2UudmFsdWUrXCIpKCRldmVudClcIjplLnZhbHVlKStcIn1cIn1yZXR1cm4gbnx8cj9lLnZhbHVlOlwiZnVuY3Rpb24oJGV2ZW50KXtcIitlLnZhbHVlK1wifVwifWZ1bmN0aW9uIG1uKHQpe3ZhciBlPXBhcnNlSW50KHQsMTApO2lmKGUpcmV0dXJuXCIkZXZlbnQua2V5Q29kZSE9PVwiK2U7dmFyIG49dWFbdF07cmV0dXJuXCJfaygkZXZlbnQua2V5Q29kZSxcIitKU09OLnN0cmluZ2lmeSh0KStcIixcIitKU09OLnN0cmluZ2lmeShuKStcIiwkZXZlbnQua2V5KVwifWZ1bmN0aW9uIHluKHQsZSl7dmFyIG49bmV3IGRhKGUpO3JldHVybntyZW5kZXI6XCJ3aXRoKHRoaXMpe3JldHVybiBcIisodD9nbih0LG4pOidfYyhcImRpdlwiKScpK1wifVwiLHN0YXRpY1JlbmRlckZuczpuLnN0YXRpY1JlbmRlckZuc319ZnVuY3Rpb24gZ24odCxlKXtpZih0LnN0YXRpY1Jvb3QmJiF0LnN0YXRpY1Byb2Nlc3NlZClyZXR1cm4gX24odCxlKTtpZih0Lm9uY2UmJiF0Lm9uY2VQcm9jZXNzZWQpcmV0dXJuIGJuKHQsZSk7aWYodC5mb3ImJiF0LmZvclByb2Nlc3NlZClyZXR1cm4gZnVuY3Rpb24odCxlLG4scil7dmFyIGk9dC5mb3Isbz10LmFsaWFzLGE9dC5pdGVyYXRvcjE/XCIsXCIrdC5pdGVyYXRvcjE6XCJcIixzPXQuaXRlcmF0b3IyP1wiLFwiK3QuaXRlcmF0b3IyOlwiXCI7cmV0dXJuIHQuZm9yUHJvY2Vzc2VkPSEwLChyfHxcIl9sXCIpK1wiKChcIitpK1wiKSxmdW5jdGlvbihcIitvK2ErcytcIil7cmV0dXJuIFwiKyhufHxnbikodCxlKStcIn0pXCJ9KHQsZSk7aWYodC5pZiYmIXQuaWZQcm9jZXNzZWQpcmV0dXJuICRuKHQsZSk7aWYoXCJ0ZW1wbGF0ZVwiIT09dC50YWd8fHQuc2xvdFRhcmdldCl7aWYoXCJzbG90XCI9PT10LnRhZylyZXR1cm4gZnVuY3Rpb24odCxlKXt2YXIgbj10LnNsb3ROYW1lfHwnXCJkZWZhdWx0XCInLHI9a24odCxlKSxpPVwiX3QoXCIrbisocj9cIixcIityOlwiXCIpLG89dC5hdHRycyYmXCJ7XCIrdC5hdHRycy5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIFBuKHQubmFtZSkrXCI6XCIrdC52YWx1ZX0pLmpvaW4oXCIsXCIpK1wifVwiLGE9dC5hdHRyc01hcFtcInYtYmluZFwiXTshbyYmIWF8fHJ8fChpKz1cIixudWxsXCIpO28mJihpKz1cIixcIitvKTthJiYoaSs9KG8/XCJcIjpcIixudWxsXCIpK1wiLFwiK2EpO3JldHVybiBpK1wiKVwifSh0LGUpO3ZhciBuO2lmKHQuY29tcG9uZW50KW49ZnVuY3Rpb24odCxlLG4pe3ZhciByPWUuaW5saW5lVGVtcGxhdGU/bnVsbDprbihlLG4sITApO3JldHVyblwiX2MoXCIrdCtcIixcIit3bihlLG4pKyhyP1wiLFwiK3I6XCJcIikrXCIpXCJ9KHQuY29tcG9uZW50LHQsZSk7ZWxzZXt2YXIgcj10LnBsYWluP3ZvaWQgMDp3bih0LGUpLGk9dC5pbmxpbmVUZW1wbGF0ZT9udWxsOmtuKHQsZSwhMCk7bj1cIl9jKCdcIit0LnRhZytcIidcIisocj9cIixcIityOlwiXCIpKyhpP1wiLFwiK2k6XCJcIikrXCIpXCJ9Zm9yKHZhciBvPTA7bzxlLnRyYW5zZm9ybXMubGVuZ3RoO28rKyluPWUudHJhbnNmb3Jtc1tvXSh0LG4pO3JldHVybiBufXJldHVybiBrbih0LGUpfHxcInZvaWQgMFwifWZ1bmN0aW9uIF9uKHQsZSl7cmV0dXJuIHQuc3RhdGljUHJvY2Vzc2VkPSEwLGUuc3RhdGljUmVuZGVyRm5zLnB1c2goXCJ3aXRoKHRoaXMpe3JldHVybiBcIitnbih0LGUpK1wifVwiKSxcIl9tKFwiKyhlLnN0YXRpY1JlbmRlckZucy5sZW5ndGgtMSkrKHQuc3RhdGljSW5Gb3I/XCIsdHJ1ZVwiOlwiXCIpK1wiKVwifWZ1bmN0aW9uIGJuKHQsZSl7aWYodC5vbmNlUHJvY2Vzc2VkPSEwLHQuaWYmJiF0LmlmUHJvY2Vzc2VkKXJldHVybiAkbih0LGUpO2lmKHQuc3RhdGljSW5Gb3Ipe2Zvcih2YXIgbj1cIlwiLHI9dC5wYXJlbnQ7cjspe2lmKHIuZm9yKXtuPXIua2V5O2JyZWFrfXI9ci5wYXJlbnR9cmV0dXJuIG4/XCJfbyhcIitnbih0LGUpK1wiLFwiK2Uub25jZUlkKysrXCIsXCIrbitcIilcIjpnbih0LGUpfXJldHVybiBfbih0LGUpfWZ1bmN0aW9uICRuKHQsZSxuLHIpe3JldHVybiB0LmlmUHJvY2Vzc2VkPSEwLENuKHQuaWZDb25kaXRpb25zLnNsaWNlKCksZSxuLHIpfWZ1bmN0aW9uIENuKHQsZSxuLHIpe2Z1bmN0aW9uIGkodCl7cmV0dXJuIG4/bih0LGUpOnQub25jZT9ibih0LGUpOmduKHQsZSl9aWYoIXQubGVuZ3RoKXJldHVybiByfHxcIl9lKClcIjt2YXIgbz10LnNoaWZ0KCk7cmV0dXJuIG8uZXhwP1wiKFwiK28uZXhwK1wiKT9cIitpKG8uYmxvY2spK1wiOlwiK0NuKHQsZSxuLHIpOlwiXCIraShvLmJsb2NrKX1mdW5jdGlvbiB3bih0LGUpe3ZhciBuPVwie1wiLHI9ZnVuY3Rpb24odCxlKXt2YXIgbj10LmRpcmVjdGl2ZXM7aWYoIW4pcmV0dXJuO3ZhciByLGksbyxhLHM9XCJkaXJlY3RpdmVzOltcIixjPSExO2ZvcihyPTAsaT1uLmxlbmd0aDtyPGk7cisrKXtvPW5bcl0sYT0hMDt2YXIgdT1lLmRpcmVjdGl2ZXNbby5uYW1lXTt1JiYoYT0hIXUodCxvLGUud2FybikpLGEmJihjPSEwLHMrPSd7bmFtZTpcIicrby5uYW1lKydcIixyYXdOYW1lOlwiJytvLnJhd05hbWUrJ1wiJysoby52YWx1ZT9cIix2YWx1ZTooXCIrby52YWx1ZStcIiksZXhwcmVzc2lvbjpcIitKU09OLnN0cmluZ2lmeShvLnZhbHVlKTpcIlwiKSsoby5hcmc/Jyxhcmc6XCInK28uYXJnKydcIic6XCJcIikrKG8ubW9kaWZpZXJzP1wiLG1vZGlmaWVyczpcIitKU09OLnN0cmluZ2lmeShvLm1vZGlmaWVycyk6XCJcIikrXCJ9LFwiKX1pZihjKXJldHVybiBzLnNsaWNlKDAsLTEpK1wiXVwifSh0LGUpO3ImJihuKz1yK1wiLFwiKSx0LmtleSYmKG4rPVwia2V5OlwiK3Qua2V5K1wiLFwiKSx0LnJlZiYmKG4rPVwicmVmOlwiK3QucmVmK1wiLFwiKSx0LnJlZkluRm9yJiYobis9XCJyZWZJbkZvcjp0cnVlLFwiKSx0LnByZSYmKG4rPVwicHJlOnRydWUsXCIpLHQuY29tcG9uZW50JiYobis9J3RhZzpcIicrdC50YWcrJ1wiLCcpO2Zvcih2YXIgaT0wO2k8ZS5kYXRhR2VuRm5zLmxlbmd0aDtpKyspbis9ZS5kYXRhR2VuRm5zW2ldKHQpO2lmKHQuYXR0cnMmJihuKz1cImF0dHJzOntcIitPbih0LmF0dHJzKStcIn0sXCIpLHQucHJvcHMmJihuKz1cImRvbVByb3BzOntcIitPbih0LnByb3BzKStcIn0sXCIpLHQuZXZlbnRzJiYobis9dm4odC5ldmVudHMsITEsZS53YXJuKStcIixcIiksdC5uYXRpdmVFdmVudHMmJihuKz12bih0Lm5hdGl2ZUV2ZW50cywhMCxlLndhcm4pK1wiLFwiKSx0LnNsb3RUYXJnZXQmJiF0LnNsb3RTY29wZSYmKG4rPVwic2xvdDpcIit0LnNsb3RUYXJnZXQrXCIsXCIpLHQuc2NvcGVkU2xvdHMmJihuKz1mdW5jdGlvbih0LGUpe3JldHVyblwic2NvcGVkU2xvdHM6X3UoW1wiK09iamVjdC5rZXlzKHQpLm1hcChmdW5jdGlvbihuKXtyZXR1cm4geG4obix0W25dLGUpfSkuam9pbihcIixcIikrXCJdKVwifSh0LnNjb3BlZFNsb3RzLGUpK1wiLFwiKSx0Lm1vZGVsJiYobis9XCJtb2RlbDp7dmFsdWU6XCIrdC5tb2RlbC52YWx1ZStcIixjYWxsYmFjazpcIit0Lm1vZGVsLmNhbGxiYWNrK1wiLGV4cHJlc3Npb246XCIrdC5tb2RlbC5leHByZXNzaW9uK1wifSxcIiksdC5pbmxpbmVUZW1wbGF0ZSl7dmFyIG89ZnVuY3Rpb24odCxlKXt2YXIgbj10LmNoaWxkcmVuWzBdO2lmKDE9PT1uLnR5cGUpe3ZhciByPXluKG4sZS5vcHRpb25zKTtyZXR1cm5cImlubGluZVRlbXBsYXRlOntyZW5kZXI6ZnVuY3Rpb24oKXtcIityLnJlbmRlcitcIn0sc3RhdGljUmVuZGVyRm5zOltcIityLnN0YXRpY1JlbmRlckZucy5tYXAoZnVuY3Rpb24odCl7cmV0dXJuXCJmdW5jdGlvbigpe1wiK3QrXCJ9XCJ9KS5qb2luKFwiLFwiKStcIl19XCJ9fSh0LGUpO28mJihuKz1vK1wiLFwiKX1yZXR1cm4gbj1uLnJlcGxhY2UoLywkLyxcIlwiKStcIn1cIix0LndyYXBEYXRhJiYobj10LndyYXBEYXRhKG4pKSx0LndyYXBMaXN0ZW5lcnMmJihuPXQud3JhcExpc3RlbmVycyhuKSksbn1mdW5jdGlvbiB4bih0LGUsbil7aWYoZS5mb3ImJiFlLmZvclByb2Nlc3NlZClyZXR1cm4gZnVuY3Rpb24odCxlLG4pe3ZhciByPWUuZm9yLGk9ZS5hbGlhcyxvPWUuaXRlcmF0b3IxP1wiLFwiK2UuaXRlcmF0b3IxOlwiXCIsYT1lLml0ZXJhdG9yMj9cIixcIitlLml0ZXJhdG9yMjpcIlwiO3JldHVybiBlLmZvclByb2Nlc3NlZD0hMCxcIl9sKChcIityK1wiKSxmdW5jdGlvbihcIitpK28rYStcIil7cmV0dXJuIFwiK3huKHQsZSxuKStcIn0pXCJ9KHQsZSxuKTtyZXR1cm5cIntrZXk6XCIrdCtcIixmbjpcIisoXCJmdW5jdGlvbihcIitTdHJpbmcoZS5zbG90U2NvcGUpK1wiKXtyZXR1cm4gXCIrKFwidGVtcGxhdGVcIj09PWUudGFnP2UuaWY/ZS5pZitcIj9cIisoa24oZSxuKXx8XCJ1bmRlZmluZWRcIikrXCI6dW5kZWZpbmVkXCI6a24oZSxuKXx8XCJ1bmRlZmluZWRcIjpnbihlLG4pKStcIn1cIikrXCJ9XCJ9ZnVuY3Rpb24ga24odCxlLG4scixpKXt2YXIgbz10LmNoaWxkcmVuO2lmKG8ubGVuZ3RoKXt2YXIgYT1vWzBdO2lmKDE9PT1vLmxlbmd0aCYmYS5mb3ImJlwidGVtcGxhdGVcIiE9PWEudGFnJiZcInNsb3RcIiE9PWEudGFnKXJldHVybihyfHxnbikoYSxlKTt2YXIgcz1uP2Z1bmN0aW9uKHQsZSl7Zm9yKHZhciBuPTAscj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgaT10W3JdO2lmKDE9PT1pLnR5cGUpe2lmKEFuKGkpfHxpLmlmQ29uZGl0aW9ucyYmaS5pZkNvbmRpdGlvbnMuc29tZShmdW5jdGlvbih0KXtyZXR1cm4gQW4odC5ibG9jayl9KSl7bj0yO2JyZWFrfShlKGkpfHxpLmlmQ29uZGl0aW9ucyYmaS5pZkNvbmRpdGlvbnMuc29tZShmdW5jdGlvbih0KXtyZXR1cm4gZSh0LmJsb2NrKX0pKSYmKG49MSl9fXJldHVybiBufShvLGUubWF5YmVDb21wb25lbnQpOjAsYz1pfHxmdW5jdGlvbih0LGUpe2lmKDE9PT10LnR5cGUpcmV0dXJuIGduKHQsZSk7cmV0dXJuIDM9PT10LnR5cGUmJnQuaXNDb21tZW50P2Z1bmN0aW9uKHQpe3JldHVyblwiX2UoXCIrSlNPTi5zdHJpbmdpZnkodC50ZXh0KStcIilcIn0odCk6ZnVuY3Rpb24odCl7cmV0dXJuXCJfdihcIisoMj09PXQudHlwZT90LmV4cHJlc3Npb246U24oSlNPTi5zdHJpbmdpZnkodC50ZXh0KSkpK1wiKVwifSh0KX07cmV0dXJuXCJbXCIrby5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIGModCxlKX0pLmpvaW4oXCIsXCIpK1wiXVwiKyhzP1wiLFwiK3M6XCJcIil9fWZ1bmN0aW9uIEFuKHQpe3JldHVybiB2b2lkIDAhPT10LmZvcnx8XCJ0ZW1wbGF0ZVwiPT09dC50YWd8fFwic2xvdFwiPT09dC50YWd9ZnVuY3Rpb24gT24odCl7Zm9yKHZhciBlPVwiXCIsbj0wO248dC5sZW5ndGg7bisrKXt2YXIgcj10W25dO2UrPSdcIicrci5uYW1lKydcIjonK1NuKHIudmFsdWUpK1wiLFwifXJldHVybiBlLnNsaWNlKDAsLTEpfWZ1bmN0aW9uIFNuKHQpe3JldHVybiB0LnJlcGxhY2UoL1xcdTIwMjgvZyxcIlxcXFx1MjAyOFwiKS5yZXBsYWNlKC9cXHUyMDI5L2csXCJcXFxcdTIwMjlcIil9ZnVuY3Rpb24gVG4odCxlKXt0cnl7cmV0dXJuIG5ldyBGdW5jdGlvbih0KX1jYXRjaChuKXtyZXR1cm4gZS5wdXNoKHtlcnI6bixjb2RlOnR9KSx5fX1mdW5jdGlvbiBFbih0KXtyZXR1cm4gUm89Um98fGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksUm8uaW5uZXJIVE1MPXQ/JzxhIGhyZWY9XCJcXG5cIi8+JzonPGRpdiBhPVwiXFxuXCIvPicsUm8uaW5uZXJIVE1MLmluZGV4T2YoXCImIzEwO1wiKT4wfXZhciBqbj1PYmplY3QuZnJlZXplKHt9KSxObj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLEluPXUoXCJzbG90LGNvbXBvbmVudFwiLCEwKSxMbj11KFwia2V5LHJlZixzbG90LHNsb3Qtc2NvcGUsaXNcIiksTW49T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxEbj0vLShcXHcpL2csUG49cChmdW5jdGlvbih0KXtyZXR1cm4gdC5yZXBsYWNlKERuLGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGU/ZS50b1VwcGVyQ2FzZSgpOlwiXCJ9KX0pLEZuPXAoZnVuY3Rpb24odCl7cmV0dXJuIHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKX0pLFJuPS9cXEIoW0EtWl0pL2csSG49cChmdW5jdGlvbih0KXtyZXR1cm4gdC5yZXBsYWNlKFJuLFwiLSQxXCIpLnRvTG93ZXJDYXNlKCl9KSxCbj1mdW5jdGlvbih0LGUsbil7cmV0dXJuITF9LFVuPWZ1bmN0aW9uKHQpe3JldHVybiB0fSxWbj1cImRhdGEtc2VydmVyLXJlbmRlcmVkXCIsem49W1wiY29tcG9uZW50XCIsXCJkaXJlY3RpdmVcIixcImZpbHRlclwiXSxLbj1bXCJiZWZvcmVDcmVhdGVcIixcImNyZWF0ZWRcIixcImJlZm9yZU1vdW50XCIsXCJtb3VudGVkXCIsXCJiZWZvcmVVcGRhdGVcIixcInVwZGF0ZWRcIixcImJlZm9yZURlc3Ryb3lcIixcImRlc3Ryb3llZFwiLFwiYWN0aXZhdGVkXCIsXCJkZWFjdGl2YXRlZFwiLFwiZXJyb3JDYXB0dXJlZFwiXSxKbj17b3B0aW9uTWVyZ2VTdHJhdGVnaWVzOk9iamVjdC5jcmVhdGUobnVsbCksc2lsZW50OiExLHByb2R1Y3Rpb25UaXA6ITEsZGV2dG9vbHM6ITEscGVyZm9ybWFuY2U6ITEsZXJyb3JIYW5kbGVyOm51bGwsd2FybkhhbmRsZXI6bnVsbCxpZ25vcmVkRWxlbWVudHM6W10sa2V5Q29kZXM6T2JqZWN0LmNyZWF0ZShudWxsKSxpc1Jlc2VydmVkVGFnOkJuLGlzUmVzZXJ2ZWRBdHRyOkJuLGlzVW5rbm93bkVsZW1lbnQ6Qm4sZ2V0VGFnTmFtZXNwYWNlOnkscGFyc2VQbGF0Zm9ybVRhZ05hbWU6VW4sbXVzdFVzZVByb3A6Qm4sX2xpZmVjeWNsZUhvb2tzOktufSxxbj0vW15cXHcuJF0vLFduPVwiX19wcm90b19fXCJpbnt9LEduPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3csWm49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFdYRW52aXJvbm1lbnQmJiEhV1hFbnZpcm9ubWVudC5wbGF0Zm9ybSxYbj1abiYmV1hFbnZpcm9ubWVudC5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpLFluPUduJiZ3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLFFuPVluJiYvbXNpZXx0cmlkZW50Ly50ZXN0KFluKSx0cj1ZbiYmWW4uaW5kZXhPZihcIm1zaWUgOS4wXCIpPjAsZXI9WW4mJlluLmluZGV4T2YoXCJlZGdlL1wiKT4wLG5yPVluJiZZbi5pbmRleE9mKFwiYW5kcm9pZFwiKT4wfHxcImFuZHJvaWRcIj09PVhuLHJyPVluJiYvaXBob25lfGlwYWR8aXBvZHxpb3MvLnRlc3QoWW4pfHxcImlvc1wiPT09WG4saXI9KFluJiYvY2hyb21lXFwvXFxkKy8udGVzdChZbikse30ud2F0Y2gpLG9yPSExO2lmKEduKXRyeXt2YXIgYXI9e307T2JqZWN0LmRlZmluZVByb3BlcnR5KGFyLFwicGFzc2l2ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtvcj0hMH19KSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3QtcGFzc2l2ZVwiLG51bGwsYXIpfWNhdGNoKHQpe312YXIgc3IsY3IsdXI9ZnVuY3Rpb24oKXtyZXR1cm4gdm9pZCAwPT09c3ImJihzcj0hR24mJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWwmJlwic2VydmVyXCI9PT1nbG9iYWwucHJvY2Vzcy5lbnYuVlVFX0VOViksc3J9LGxyPUduJiZ3aW5kb3cuX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyxmcj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZ3KFN5bWJvbCkmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBSZWZsZWN0JiZ3KFJlZmxlY3Qub3duS2V5cyk7Y3I9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFNldCYmdyhTZXQpP1NldDpmdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt0aGlzLnNldD1PYmplY3QuY3JlYXRlKG51bGwpfXJldHVybiB0LnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuITA9PT10aGlzLnNldFt0XX0sdC5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKHQpe3RoaXMuc2V0W3RdPSEwfSx0LnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuc2V0PU9iamVjdC5jcmVhdGUobnVsbCl9LHR9KCk7dmFyIHByPXksZHI9MCx2cj1mdW5jdGlvbigpe3RoaXMuaWQ9ZHIrKyx0aGlzLnN1YnM9W119O3ZyLnByb3RvdHlwZS5hZGRTdWI9ZnVuY3Rpb24odCl7dGhpcy5zdWJzLnB1c2godCl9LHZyLnByb3RvdHlwZS5yZW1vdmVTdWI9ZnVuY3Rpb24odCl7bCh0aGlzLnN1YnMsdCl9LHZyLnByb3RvdHlwZS5kZXBlbmQ9ZnVuY3Rpb24oKXt2ci50YXJnZXQmJnZyLnRhcmdldC5hZGREZXAodGhpcyl9LHZyLnByb3RvdHlwZS5ub3RpZnk9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9dGhpcy5zdWJzLnNsaWNlKCksZT0wLG49dC5sZW5ndGg7ZTxuO2UrKyl0W2VdLnVwZGF0ZSgpfSx2ci50YXJnZXQ9bnVsbDt2YXIgaHI9W10sbXI9ZnVuY3Rpb24odCxlLG4scixpLG8sYSxzKXt0aGlzLnRhZz10LHRoaXMuZGF0YT1lLHRoaXMuY2hpbGRyZW49bix0aGlzLnRleHQ9cix0aGlzLmVsbT1pLHRoaXMubnM9dm9pZCAwLHRoaXMuY29udGV4dD1vLHRoaXMuZm5Db250ZXh0PXZvaWQgMCx0aGlzLmZuT3B0aW9ucz12b2lkIDAsdGhpcy5mblNjb3BlSWQ9dm9pZCAwLHRoaXMua2V5PWUmJmUua2V5LHRoaXMuY29tcG9uZW50T3B0aW9ucz1hLHRoaXMuY29tcG9uZW50SW5zdGFuY2U9dm9pZCAwLHRoaXMucGFyZW50PXZvaWQgMCx0aGlzLnJhdz0hMSx0aGlzLmlzU3RhdGljPSExLHRoaXMuaXNSb290SW5zZXJ0PSEwLHRoaXMuaXNDb21tZW50PSExLHRoaXMuaXNDbG9uZWQ9ITEsdGhpcy5pc09uY2U9ITEsdGhpcy5hc3luY0ZhY3Rvcnk9cyx0aGlzLmFzeW5jTWV0YT12b2lkIDAsdGhpcy5pc0FzeW5jUGxhY2Vob2xkZXI9ITF9LHlyPXtjaGlsZDp7Y29uZmlndXJhYmxlOiEwfX07eXIuY2hpbGQuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29tcG9uZW50SW5zdGFuY2V9LE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG1yLnByb3RvdHlwZSx5cik7dmFyIGdyPWZ1bmN0aW9uKHQpe3ZvaWQgMD09PXQmJih0PVwiXCIpO3ZhciBlPW5ldyBtcjtyZXR1cm4gZS50ZXh0PXQsZS5pc0NvbW1lbnQ9ITAsZX0sX3I9QXJyYXkucHJvdG90eXBlLGJyPU9iamVjdC5jcmVhdGUoX3IpO1tcInB1c2hcIixcInBvcFwiLFwic2hpZnRcIixcInVuc2hpZnRcIixcInNwbGljZVwiLFwic29ydFwiLFwicmV2ZXJzZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBlPV9yW3RdO0MoYnIsdCxmdW5jdGlvbigpe2Zvcih2YXIgbj1bXSxyPWFyZ3VtZW50cy5sZW5ndGg7ci0tOyluW3JdPWFyZ3VtZW50c1tyXTt2YXIgaSxvPWUuYXBwbHkodGhpcyxuKSxhPXRoaXMuX19vYl9fO3N3aXRjaCh0KXtjYXNlXCJwdXNoXCI6Y2FzZVwidW5zaGlmdFwiOmk9bjticmVhaztjYXNlXCJzcGxpY2VcIjppPW4uc2xpY2UoMil9cmV0dXJuIGkmJmEub2JzZXJ2ZUFycmF5KGkpLGEuZGVwLm5vdGlmeSgpLG99KX0pO3ZhciAkcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiciksQ3I9e3Nob3VsZENvbnZlcnQ6ITB9LHdyPWZ1bmN0aW9uKHQpe2lmKHRoaXMudmFsdWU9dCx0aGlzLmRlcD1uZXcgdnIsdGhpcy52bUNvdW50PTAsQyh0LFwiX19vYl9fXCIsdGhpcyksQXJyYXkuaXNBcnJheSh0KSl7KFduP086UykodCxiciwkciksdGhpcy5vYnNlcnZlQXJyYXkodCl9ZWxzZSB0aGlzLndhbGsodCl9O3dyLnByb3RvdHlwZS53YWxrPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1PYmplY3Qua2V5cyh0KSxuPTA7bjxlLmxlbmd0aDtuKyspRSh0LGVbbl0sdFtlW25dXSl9LHdyLnByb3RvdHlwZS5vYnNlcnZlQXJyYXk9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTAsbj10Lmxlbmd0aDtlPG47ZSsrKVQodFtlXSl9O3ZhciB4cj1Kbi5vcHRpb25NZXJnZVN0cmF0ZWdpZXM7eHIuZGF0YT1mdW5jdGlvbih0LGUsbil7cmV0dXJuIG4/TSh0LGUsbik6ZSYmXCJmdW5jdGlvblwiIT10eXBlb2YgZT90Ok0odCxlKX0sS24uZm9yRWFjaChmdW5jdGlvbih0KXt4clt0XT1EfSksem4uZm9yRWFjaChmdW5jdGlvbih0KXt4clt0K1wic1wiXT1QfSkseHIud2F0Y2g9ZnVuY3Rpb24odCxlLG4scil7aWYodD09PWlyJiYodD12b2lkIDApLGU9PT1pciYmKGU9dm9pZCAwKSwhZSlyZXR1cm4gT2JqZWN0LmNyZWF0ZSh0fHxudWxsKTtpZighdClyZXR1cm4gZTt2YXIgaT17fTtoKGksdCk7Zm9yKHZhciBvIGluIGUpe3ZhciBhPWlbb10scz1lW29dO2EmJiFBcnJheS5pc0FycmF5KGEpJiYoYT1bYV0pLGlbb109YT9hLmNvbmNhdChzKTpBcnJheS5pc0FycmF5KHMpP3M6W3NdfXJldHVybiBpfSx4ci5wcm9wcz14ci5tZXRob2RzPXhyLmluamVjdD14ci5jb21wdXRlZD1mdW5jdGlvbih0LGUsbixyKXtpZighdClyZXR1cm4gZTt2YXIgaT1PYmplY3QuY3JlYXRlKG51bGwpO3JldHVybiBoKGksdCksZSYmaChpLGUpLGl9LHhyLnByb3ZpZGU9TTt2YXIga3IsQXIsT3I9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdm9pZCAwPT09ZT90OmV9LFNyPVtdLFRyPSExLEVyPSExO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZXRJbW1lZGlhdGUmJncoc2V0SW1tZWRpYXRlKSlBcj1mdW5jdGlvbigpe3NldEltbWVkaWF0ZShKKX07ZWxzZSBpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgTWVzc2FnZUNoYW5uZWx8fCF3KE1lc3NhZ2VDaGFubmVsKSYmXCJbb2JqZWN0IE1lc3NhZ2VDaGFubmVsQ29uc3RydWN0b3JdXCIhPT1NZXNzYWdlQ2hhbm5lbC50b1N0cmluZygpKUFyPWZ1bmN0aW9uKCl7c2V0VGltZW91dChKLDApfTtlbHNle3ZhciBqcj1uZXcgTWVzc2FnZUNoYW5uZWwsTnI9anIucG9ydDI7anIucG9ydDEub25tZXNzYWdlPUosQXI9ZnVuY3Rpb24oKXtOci5wb3N0TWVzc2FnZSgxKX19aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFByb21pc2UmJncoUHJvbWlzZSkpe3ZhciBJcj1Qcm9taXNlLnJlc29sdmUoKTtrcj1mdW5jdGlvbigpe0lyLnRoZW4oSikscnImJnNldFRpbWVvdXQoeSl9fWVsc2Uga3I9QXI7dmFyIExyLE1yPW5ldyBjcixEcj1wKGZ1bmN0aW9uKHQpe3ZhciBlPVwiJlwiPT09dC5jaGFyQXQoMCksbj1cIn5cIj09PSh0PWU/dC5zbGljZSgxKTp0KS5jaGFyQXQoMCkscj1cIiFcIj09PSh0PW4/dC5zbGljZSgxKTp0KS5jaGFyQXQoMCk7cmV0dXJuIHQ9cj90LnNsaWNlKDEpOnQse25hbWU6dCxvbmNlOm4sY2FwdHVyZTpyLHBhc3NpdmU6ZX19KSxQcj1udWxsLEZyPVtdLFJyPVtdLEhyPXt9LEJyPSExLFVyPSExLFZyPTAsenI9MCxLcj1mdW5jdGlvbih0LGUsbixyLGkpe3RoaXMudm09dCxpJiYodC5fd2F0Y2hlcj10aGlzKSx0Ll93YXRjaGVycy5wdXNoKHRoaXMpLHI/KHRoaXMuZGVlcD0hIXIuZGVlcCx0aGlzLnVzZXI9ISFyLnVzZXIsdGhpcy5sYXp5PSEhci5sYXp5LHRoaXMuc3luYz0hIXIuc3luYyk6dGhpcy5kZWVwPXRoaXMudXNlcj10aGlzLmxhenk9dGhpcy5zeW5jPSExLHRoaXMuY2I9bix0aGlzLmlkPSsrenIsdGhpcy5hY3RpdmU9ITAsdGhpcy5kaXJ0eT10aGlzLmxhenksdGhpcy5kZXBzPVtdLHRoaXMubmV3RGVwcz1bXSx0aGlzLmRlcElkcz1uZXcgY3IsdGhpcy5uZXdEZXBJZHM9bmV3IGNyLHRoaXMuZXhwcmVzc2lvbj1cIlwiLFwiZnVuY3Rpb25cIj09dHlwZW9mIGU/dGhpcy5nZXR0ZXI9ZToodGhpcy5nZXR0ZXI9ZnVuY3Rpb24odCl7aWYoIXFuLnRlc3QodCkpe3ZhciBlPXQuc3BsaXQoXCIuXCIpO3JldHVybiBmdW5jdGlvbih0KXtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKyl7aWYoIXQpcmV0dXJuO3Q9dFtlW25dXX1yZXR1cm4gdH19fShlKSx0aGlzLmdldHRlcnx8KHRoaXMuZ2V0dGVyPWZ1bmN0aW9uKCl7fSkpLHRoaXMudmFsdWU9dGhpcy5sYXp5P3ZvaWQgMDp0aGlzLmdldCgpfTtLci5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKCl7IWZ1bmN0aW9uKHQpe3ZyLnRhcmdldCYmaHIucHVzaCh2ci50YXJnZXQpLHZyLnRhcmdldD10fSh0aGlzKTt2YXIgdCxlPXRoaXMudm07dHJ5e3Q9dGhpcy5nZXR0ZXIuY2FsbChlLGUpfWNhdGNoKHQpe2lmKCF0aGlzLnVzZXIpdGhyb3cgdDtWKHQsZSwnZ2V0dGVyIGZvciB3YXRjaGVyIFwiJyt0aGlzLmV4cHJlc3Npb24rJ1wiJyl9ZmluYWxseXt0aGlzLmRlZXAmJlcodCksdnIudGFyZ2V0PWhyLnBvcCgpLHRoaXMuY2xlYW51cERlcHMoKX1yZXR1cm4gdH0sS3IucHJvdG90eXBlLmFkZERlcD1mdW5jdGlvbih0KXt2YXIgZT10LmlkO3RoaXMubmV3RGVwSWRzLmhhcyhlKXx8KHRoaXMubmV3RGVwSWRzLmFkZChlKSx0aGlzLm5ld0RlcHMucHVzaCh0KSx0aGlzLmRlcElkcy5oYXMoZSl8fHQuYWRkU3ViKHRoaXMpKX0sS3IucHJvdG90eXBlLmNsZWFudXBEZXBzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PXRoaXMuZGVwcy5sZW5ndGg7dC0tOyl7dmFyIGU9dGhpcy5kZXBzW3RdO3RoaXMubmV3RGVwSWRzLmhhcyhlLmlkKXx8ZS5yZW1vdmVTdWIodGhpcyl9dmFyIG49dGhpcy5kZXBJZHM7dGhpcy5kZXBJZHM9dGhpcy5uZXdEZXBJZHMsdGhpcy5uZXdEZXBJZHM9bix0aGlzLm5ld0RlcElkcy5jbGVhcigpLG49dGhpcy5kZXBzLHRoaXMuZGVwcz10aGlzLm5ld0RlcHMsdGhpcy5uZXdEZXBzPW4sdGhpcy5uZXdEZXBzLmxlbmd0aD0wfSxLci5wcm90b3R5cGUudXBkYXRlPWZ1bmN0aW9uKCl7dGhpcy5sYXp5P3RoaXMuZGlydHk9ITA6dGhpcy5zeW5jP3RoaXMucnVuKCk6ZnVuY3Rpb24odCl7dmFyIGU9dC5pZDtpZihudWxsPT1IcltlXSl7aWYoSHJbZV09ITAsVXIpe2Zvcih2YXIgbj1Gci5sZW5ndGgtMTtuPlZyJiZGcltuXS5pZD50LmlkOyluLS07RnIuc3BsaWNlKG4rMSwwLHQpfWVsc2UgRnIucHVzaCh0KTtCcnx8KEJyPSEwLHEoaHQpKX19KHRoaXMpfSxLci5wcm90b3R5cGUucnVuPWZ1bmN0aW9uKCl7aWYodGhpcy5hY3RpdmUpe3ZhciB0PXRoaXMuZ2V0KCk7aWYodCE9PXRoaXMudmFsdWV8fGkodCl8fHRoaXMuZGVlcCl7dmFyIGU9dGhpcy52YWx1ZTtpZih0aGlzLnZhbHVlPXQsdGhpcy51c2VyKXRyeXt0aGlzLmNiLmNhbGwodGhpcy52bSx0LGUpfWNhdGNoKHQpe1YodCx0aGlzLnZtLCdjYWxsYmFjayBmb3Igd2F0Y2hlciBcIicrdGhpcy5leHByZXNzaW9uKydcIicpfWVsc2UgdGhpcy5jYi5jYWxsKHRoaXMudm0sdCxlKX19fSxLci5wcm90b3R5cGUuZXZhbHVhdGU9ZnVuY3Rpb24oKXt0aGlzLnZhbHVlPXRoaXMuZ2V0KCksdGhpcy5kaXJ0eT0hMX0sS3IucHJvdG90eXBlLmRlcGVuZD1mdW5jdGlvbigpe2Zvcih2YXIgdD10aGlzLmRlcHMubGVuZ3RoO3QtLTspdGhpcy5kZXBzW3RdLmRlcGVuZCgpfSxLci5wcm90b3R5cGUudGVhcmRvd249ZnVuY3Rpb24oKXtpZih0aGlzLmFjdGl2ZSl7dGhpcy52bS5faXNCZWluZ0Rlc3Ryb3llZHx8bCh0aGlzLnZtLl93YXRjaGVycyx0aGlzKTtmb3IodmFyIHQ9dGhpcy5kZXBzLmxlbmd0aDt0LS07KXRoaXMuZGVwc1t0XS5yZW1vdmVTdWIodGhpcyk7dGhpcy5hY3RpdmU9ITF9fTt2YXIgSnI9e2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDp5LHNldDp5fSxxcj17bGF6eTohMH07TnQoSXQucHJvdG90eXBlKTt2YXIgV3I9e2luaXQ6ZnVuY3Rpb24odCxuLHIsaSl7aWYoIXQuY29tcG9uZW50SW5zdGFuY2V8fHQuY29tcG9uZW50SW5zdGFuY2UuX2lzRGVzdHJveWVkKXsodC5jb21wb25lbnRJbnN0YW5jZT1mdW5jdGlvbih0LG4scixpKXt2YXIgbz17X2lzQ29tcG9uZW50OiEwLHBhcmVudDpuLF9wYXJlbnRWbm9kZTp0LF9wYXJlbnRFbG06cnx8bnVsbCxfcmVmRWxtOml8fG51bGx9LGE9dC5kYXRhLmlubGluZVRlbXBsYXRlO3JldHVybiBlKGEpJiYoby5yZW5kZXI9YS5yZW5kZXIsby5zdGF0aWNSZW5kZXJGbnM9YS5zdGF0aWNSZW5kZXJGbnMpLG5ldyB0LmNvbXBvbmVudE9wdGlvbnMuQ3RvcihvKX0odCxQcixyLGkpKS4kbW91bnQobj90LmVsbTp2b2lkIDAsbil9ZWxzZSBpZih0LmRhdGEua2VlcEFsaXZlKXt2YXIgbz10O1dyLnByZXBhdGNoKG8sbyl9fSxwcmVwYXRjaDpmdW5jdGlvbih0LGUpe3ZhciBuPWUuY29tcG9uZW50T3B0aW9uczshZnVuY3Rpb24odCxlLG4scixpKXt2YXIgbz0hIShpfHx0LiRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbnx8ci5kYXRhLnNjb3BlZFNsb3RzfHx0LiRzY29wZWRTbG90cyE9PWpuKTtpZih0LiRvcHRpb25zLl9wYXJlbnRWbm9kZT1yLHQuJHZub2RlPXIsdC5fdm5vZGUmJih0Ll92bm9kZS5wYXJlbnQ9ciksdC4kb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW49aSx0LiRhdHRycz1yLmRhdGEmJnIuZGF0YS5hdHRyc3x8am4sdC4kbGlzdGVuZXJzPW58fGpuLGUmJnQuJG9wdGlvbnMucHJvcHMpe0NyLnNob3VsZENvbnZlcnQ9ITE7Zm9yKHZhciBhPXQuX3Byb3BzLHM9dC4kb3B0aW9ucy5fcHJvcEtleXN8fFtdLGM9MDtjPHMubGVuZ3RoO2MrKyl7dmFyIHU9c1tjXTthW3VdPUgodSx0LiRvcHRpb25zLnByb3BzLGUsdCl9Q3Iuc2hvdWxkQ29udmVydD0hMCx0LiRvcHRpb25zLnByb3BzRGF0YT1lfWlmKG4pe3ZhciBsPXQuJG9wdGlvbnMuX3BhcmVudExpc3RlbmVyczt0LiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM9bixzdCh0LG4sbCl9byYmKHQuJHNsb3RzPWN0KGksci5jb250ZXh0KSx0LiRmb3JjZVVwZGF0ZSgpKX0oZS5jb21wb25lbnRJbnN0YW5jZT10LmNvbXBvbmVudEluc3RhbmNlLG4ucHJvcHNEYXRhLG4ubGlzdGVuZXJzLGUsbi5jaGlsZHJlbil9LGluc2VydDpmdW5jdGlvbih0KXt2YXIgZT10LmNvbnRleHQsbj10LmNvbXBvbmVudEluc3RhbmNlO24uX2lzTW91bnRlZHx8KG4uX2lzTW91bnRlZD0hMCx2dChuLFwibW91bnRlZFwiKSksdC5kYXRhLmtlZXBBbGl2ZSYmKGUuX2lzTW91bnRlZD9mdW5jdGlvbih0KXt0Ll9pbmFjdGl2ZT0hMSxSci5wdXNoKHQpfShuKTpwdChuLCEwKSl9LGRlc3Ryb3k6ZnVuY3Rpb24odCl7dmFyIGU9dC5jb21wb25lbnRJbnN0YW5jZTtlLl9pc0Rlc3Ryb3llZHx8KHQuZGF0YS5rZWVwQWxpdmU/ZHQoZSwhMCk6ZS4kZGVzdHJveSgpKX19LEdyPU9iamVjdC5rZXlzKFdyKSxacj0xLFhyPTIsWXI9MDshZnVuY3Rpb24odCl7dC5wcm90b3R5cGUuX2luaXQ9ZnVuY3Rpb24odCl7dGhpcy5fdWlkPVlyKyssdGhpcy5faXNWdWU9ITAsdCYmdC5faXNDb21wb25lbnQ/ZnVuY3Rpb24odCxlKXt2YXIgbj10LiRvcHRpb25zPU9iamVjdC5jcmVhdGUodC5jb25zdHJ1Y3Rvci5vcHRpb25zKSxyPWUuX3BhcmVudFZub2RlO24ucGFyZW50PWUucGFyZW50LG4uX3BhcmVudFZub2RlPXIsbi5fcGFyZW50RWxtPWUuX3BhcmVudEVsbSxuLl9yZWZFbG09ZS5fcmVmRWxtO3ZhciBpPXIuY29tcG9uZW50T3B0aW9ucztuLnByb3BzRGF0YT1pLnByb3BzRGF0YSxuLl9wYXJlbnRMaXN0ZW5lcnM9aS5saXN0ZW5lcnMsbi5fcmVuZGVyQ2hpbGRyZW49aS5jaGlsZHJlbixuLl9jb21wb25lbnRUYWc9aS50YWcsZS5yZW5kZXImJihuLnJlbmRlcj1lLnJlbmRlcixuLnN0YXRpY1JlbmRlckZucz1lLnN0YXRpY1JlbmRlckZucyl9KHRoaXMsdCk6dGhpcy4kb3B0aW9ucz1GKEZ0KHRoaXMuY29uc3RydWN0b3IpLHR8fHt9LHRoaXMpLHRoaXMuX3JlbmRlclByb3h5PXRoaXMsdGhpcy5fc2VsZj10aGlzLGZ1bmN0aW9uKHQpe3ZhciBlPXQuJG9wdGlvbnMsbj1lLnBhcmVudDtpZihuJiYhZS5hYnN0cmFjdCl7Zm9yKDtuLiRvcHRpb25zLmFic3RyYWN0JiZuLiRwYXJlbnQ7KW49bi4kcGFyZW50O24uJGNoaWxkcmVuLnB1c2godCl9dC4kcGFyZW50PW4sdC4kcm9vdD1uP24uJHJvb3Q6dCx0LiRjaGlsZHJlbj1bXSx0LiRyZWZzPXt9LHQuX3dhdGNoZXI9bnVsbCx0Ll9pbmFjdGl2ZT1udWxsLHQuX2RpcmVjdEluYWN0aXZlPSExLHQuX2lzTW91bnRlZD0hMSx0Ll9pc0Rlc3Ryb3llZD0hMSx0Ll9pc0JlaW5nRGVzdHJveWVkPSExfSh0aGlzKSxmdW5jdGlvbih0KXt0Ll9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSx0Ll9oYXNIb29rRXZlbnQ9ITE7dmFyIGU9dC4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzO2UmJnN0KHQsZSl9KHRoaXMpLGZ1bmN0aW9uKHQpe3QuX3Zub2RlPW51bGwsdC5fc3RhdGljVHJlZXM9bnVsbDt2YXIgZT10LiRvcHRpb25zLG49dC4kdm5vZGU9ZS5fcGFyZW50Vm5vZGUscj1uJiZuLmNvbnRleHQ7dC4kc2xvdHM9Y3QoZS5fcmVuZGVyQ2hpbGRyZW4sciksdC4kc2NvcGVkU2xvdHM9am4sdC5fYz1mdW5jdGlvbihlLG4scixpKXtyZXR1cm4gRHQodCxlLG4scixpLCExKX0sdC4kY3JlYXRlRWxlbWVudD1mdW5jdGlvbihlLG4scixpKXtyZXR1cm4gRHQodCxlLG4scixpLCEwKX07dmFyIGk9biYmbi5kYXRhO0UodCxcIiRhdHRyc1wiLGkmJmkuYXR0cnN8fGpuLDAsITApLEUodCxcIiRsaXN0ZW5lcnNcIixlLl9wYXJlbnRMaXN0ZW5lcnN8fGpuLDAsITApfSh0aGlzKSx2dCh0aGlzLFwiYmVmb3JlQ3JlYXRlXCIpLGZ1bmN0aW9uKHQpe3ZhciBlPSR0KHQuJG9wdGlvbnMuaW5qZWN0LHQpO2UmJihDci5zaG91bGRDb252ZXJ0PSExLE9iamVjdC5rZXlzKGUpLmZvckVhY2goZnVuY3Rpb24obil7RSh0LG4sZVtuXSl9KSxDci5zaG91bGRDb252ZXJ0PSEwKX0odGhpcykseXQodGhpcyksZnVuY3Rpb24odCl7dmFyIGU9dC4kb3B0aW9ucy5wcm92aWRlO2UmJih0Ll9wcm92aWRlZD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2UuY2FsbCh0KTplKX0odGhpcyksdnQodGhpcyxcImNyZWF0ZWRcIiksdGhpcy4kb3B0aW9ucy5lbCYmdGhpcy4kbW91bnQodGhpcy4kb3B0aW9ucy5lbCl9fShSdCksZnVuY3Rpb24odCl7dmFyIGU9e307ZS5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZGF0YX07dmFyIG49e307bi5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fcHJvcHN9LE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcIiRkYXRhXCIsZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiJHByb3BzXCIsbiksdC5wcm90b3R5cGUuJHNldD1qLHQucHJvdG90eXBlLiRkZWxldGU9Tix0LnByb3RvdHlwZS4kd2F0Y2g9ZnVuY3Rpb24odCxlLG4pe2lmKG8oZSkpcmV0dXJuIGJ0KHRoaXMsdCxlLG4pOyhuPW58fHt9KS51c2VyPSEwO3ZhciByPW5ldyBLcih0aGlzLHQsZSxuKTtyZXR1cm4gbi5pbW1lZGlhdGUmJmUuY2FsbCh0aGlzLHIudmFsdWUpLGZ1bmN0aW9uKCl7ci50ZWFyZG93bigpfX19KFJ0KSxmdW5jdGlvbih0KXt2YXIgZT0vXmhvb2s6Lzt0LnByb3RvdHlwZS4kb249ZnVuY3Rpb24odCxuKXtpZihBcnJheS5pc0FycmF5KHQpKWZvcih2YXIgcj0wLGk9dC5sZW5ndGg7cjxpO3IrKyl0aGlzLiRvbih0W3JdLG4pO2Vsc2UodGhpcy5fZXZlbnRzW3RdfHwodGhpcy5fZXZlbnRzW3RdPVtdKSkucHVzaChuKSxlLnRlc3QodCkmJih0aGlzLl9oYXNIb29rRXZlbnQ9ITApO3JldHVybiB0aGlzfSx0LnByb3RvdHlwZS4kb25jZT1mdW5jdGlvbih0LGUpe2Z1bmN0aW9uIG4oKXtyLiRvZmYodCxuKSxlLmFwcGx5KHIsYXJndW1lbnRzKX12YXIgcj10aGlzO3JldHVybiBuLmZuPWUsci4kb24odCxuKSxyfSx0LnByb3RvdHlwZS4kb2ZmPWZ1bmN0aW9uKHQsZSl7aWYoIWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpLHRoaXM7aWYoQXJyYXkuaXNBcnJheSh0KSl7Zm9yKHZhciBuPTAscj10Lmxlbmd0aDtuPHI7bisrKXRoaXMuJG9mZih0W25dLGUpO3JldHVybiB0aGlzfXZhciBpPXRoaXMuX2V2ZW50c1t0XTtpZighaSlyZXR1cm4gdGhpcztpZighZSlyZXR1cm4gdGhpcy5fZXZlbnRzW3RdPW51bGwsdGhpcztpZihlKWZvcih2YXIgbyxhPWkubGVuZ3RoO2EtLTspaWYoKG89aVthXSk9PT1lfHxvLmZuPT09ZSl7aS5zcGxpY2UoYSwxKTticmVha31yZXR1cm4gdGhpc30sdC5wcm90b3R5cGUuJGVtaXQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxuPWUuX2V2ZW50c1t0XTtpZihuKXtuPW4ubGVuZ3RoPjE/dihuKTpuO2Zvcih2YXIgcj12KGFyZ3VtZW50cywxKSxpPTAsbz1uLmxlbmd0aDtpPG87aSsrKXRyeXtuW2ldLmFwcGx5KGUscil9Y2F0Y2gobil7VihuLGUsJ2V2ZW50IGhhbmRsZXIgZm9yIFwiJyt0KydcIicpfX1yZXR1cm4gZX19KFJ0KSxmdW5jdGlvbih0KXt0LnByb3RvdHlwZS5fdXBkYXRlPWZ1bmN0aW9uKHQsZSl7dGhpcy5faXNNb3VudGVkJiZ2dCh0aGlzLFwiYmVmb3JlVXBkYXRlXCIpO3ZhciBuPXRoaXMuJGVsLHI9dGhpcy5fdm5vZGUsaT1QcjtQcj10aGlzLHRoaXMuX3Zub2RlPXQscj90aGlzLiRlbD10aGlzLl9fcGF0Y2hfXyhyLHQpOih0aGlzLiRlbD10aGlzLl9fcGF0Y2hfXyh0aGlzLiRlbCx0LGUsITEsdGhpcy4kb3B0aW9ucy5fcGFyZW50RWxtLHRoaXMuJG9wdGlvbnMuX3JlZkVsbSksdGhpcy4kb3B0aW9ucy5fcGFyZW50RWxtPXRoaXMuJG9wdGlvbnMuX3JlZkVsbT1udWxsKSxQcj1pLG4mJihuLl9fdnVlX189bnVsbCksdGhpcy4kZWwmJih0aGlzLiRlbC5fX3Z1ZV9fPXRoaXMpLHRoaXMuJHZub2RlJiZ0aGlzLiRwYXJlbnQmJnRoaXMuJHZub2RlPT09dGhpcy4kcGFyZW50Ll92bm9kZSYmKHRoaXMuJHBhcmVudC4kZWw9dGhpcy4kZWwpfSx0LnByb3RvdHlwZS4kZm9yY2VVcGRhdGU9ZnVuY3Rpb24oKXt0aGlzLl93YXRjaGVyJiZ0aGlzLl93YXRjaGVyLnVwZGF0ZSgpfSx0LnByb3RvdHlwZS4kZGVzdHJveT1mdW5jdGlvbigpe2lmKCF0aGlzLl9pc0JlaW5nRGVzdHJveWVkKXt2dCh0aGlzLFwiYmVmb3JlRGVzdHJveVwiKSx0aGlzLl9pc0JlaW5nRGVzdHJveWVkPSEwO3ZhciB0PXRoaXMuJHBhcmVudDshdHx8dC5faXNCZWluZ0Rlc3Ryb3llZHx8dGhpcy4kb3B0aW9ucy5hYnN0cmFjdHx8bCh0LiRjaGlsZHJlbix0aGlzKSx0aGlzLl93YXRjaGVyJiZ0aGlzLl93YXRjaGVyLnRlYXJkb3duKCk7Zm9yKHZhciBlPXRoaXMuX3dhdGNoZXJzLmxlbmd0aDtlLS07KXRoaXMuX3dhdGNoZXJzW2VdLnRlYXJkb3duKCk7dGhpcy5fZGF0YS5fX29iX18mJnRoaXMuX2RhdGEuX19vYl9fLnZtQ291bnQtLSx0aGlzLl9pc0Rlc3Ryb3llZD0hMCx0aGlzLl9fcGF0Y2hfXyh0aGlzLl92bm9kZSxudWxsKSx2dCh0aGlzLFwiZGVzdHJveWVkXCIpLHRoaXMuJG9mZigpLHRoaXMuJGVsJiYodGhpcy4kZWwuX192dWVfXz1udWxsKSx0aGlzLiR2bm9kZSYmKHRoaXMuJHZub2RlLnBhcmVudD1udWxsKX19fShSdCksZnVuY3Rpb24odCl7TnQodC5wcm90b3R5cGUpLHQucHJvdG90eXBlLiRuZXh0VGljaz1mdW5jdGlvbih0KXtyZXR1cm4gcSh0LHRoaXMpfSx0LnByb3RvdHlwZS5fcmVuZGVyPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQuJG9wdGlvbnMsbj1lLnJlbmRlcixyPWUuX3BhcmVudFZub2RlO2lmKHQuX2lzTW91bnRlZClmb3IodmFyIGkgaW4gdC4kc2xvdHMpe3ZhciBvPXQuJHNsb3RzW2ldOyhvLl9yZW5kZXJlZHx8b1swXSYmb1swXS5lbG0pJiYodC4kc2xvdHNbaV09QShvLCEwKSl9dC4kc2NvcGVkU2xvdHM9ciYmci5kYXRhLnNjb3BlZFNsb3RzfHxqbix0LiR2bm9kZT1yO3ZhciBhO3RyeXthPW4uY2FsbCh0Ll9yZW5kZXJQcm94eSx0LiRjcmVhdGVFbGVtZW50KX1jYXRjaChlKXtWKGUsdCxcInJlbmRlclwiKSxhPXQuX3Zub2RlfXJldHVybiBhIGluc3RhbmNlb2YgbXJ8fChhPWdyKCkpLGEucGFyZW50PXIsYX19KFJ0KTt2YXIgUXI9W1N0cmluZyxSZWdFeHAsQXJyYXldLHRpPXtLZWVwQWxpdmU6e25hbWU6XCJrZWVwLWFsaXZlXCIsYWJzdHJhY3Q6ITAscHJvcHM6e2luY2x1ZGU6UXIsZXhjbHVkZTpRcixtYXg6W1N0cmluZyxOdW1iZXJdfSxjcmVhdGVkOmZ1bmN0aW9uKCl7dGhpcy5jYWNoZT1PYmplY3QuY3JlYXRlKG51bGwpLHRoaXMua2V5cz1bXX0sZGVzdHJveWVkOmZ1bmN0aW9uKCl7Zm9yKHZhciB0IGluIHRoaXMuY2FjaGUpenQodGhpcy5jYWNoZSx0LHRoaXMua2V5cyl9LHdhdGNoOntpbmNsdWRlOmZ1bmN0aW9uKHQpe1Z0KHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIFV0KHQsZSl9KX0sZXhjbHVkZTpmdW5jdGlvbih0KXtWdCh0aGlzLGZ1bmN0aW9uKGUpe3JldHVybiFVdCh0LGUpfSl9fSxyZW5kZXI6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLiRzbG90cy5kZWZhdWx0LGU9aXQodCksbj1lJiZlLmNvbXBvbmVudE9wdGlvbnM7aWYobil7dmFyIHI9QnQobiksaT10aGlzLmluY2x1ZGUsbz10aGlzLmV4Y2x1ZGU7aWYoaSYmKCFyfHwhVXQoaSxyKSl8fG8mJnImJlV0KG8scikpcmV0dXJuIGU7dmFyIGE9dGhpcy5jYWNoZSxzPXRoaXMua2V5cyxjPW51bGw9PWUua2V5P24uQ3Rvci5jaWQrKG4udGFnP1wiOjpcIituLnRhZzpcIlwiKTplLmtleTthW2NdPyhlLmNvbXBvbmVudEluc3RhbmNlPWFbY10uY29tcG9uZW50SW5zdGFuY2UsbChzLGMpLHMucHVzaChjKSk6KGFbY109ZSxzLnB1c2goYyksdGhpcy5tYXgmJnMubGVuZ3RoPnBhcnNlSW50KHRoaXMubWF4KSYmenQoYSxzWzBdLHMsdGhpcy5fdm5vZGUpKSxlLmRhdGEua2VlcEFsaXZlPSEwfXJldHVybiBlfHx0JiZ0WzBdfX19OyFmdW5jdGlvbih0KXt2YXIgZT17fTtlLmdldD1mdW5jdGlvbigpe3JldHVybiBKbn0sT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJjb25maWdcIixlKSx0LnV0aWw9e3dhcm46cHIsZXh0ZW5kOmgsbWVyZ2VPcHRpb25zOkYsZGVmaW5lUmVhY3RpdmU6RX0sdC5zZXQ9aix0LmRlbGV0ZT1OLHQubmV4dFRpY2s9cSx0Lm9wdGlvbnM9T2JqZWN0LmNyZWF0ZShudWxsKSx6bi5mb3JFYWNoKGZ1bmN0aW9uKGUpe3Qub3B0aW9uc1tlK1wic1wiXT1PYmplY3QuY3JlYXRlKG51bGwpfSksdC5vcHRpb25zLl9iYXNlPXQsaCh0Lm9wdGlvbnMuY29tcG9uZW50cyx0aSksZnVuY3Rpb24odCl7dC51c2U9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5faW5zdGFsbGVkUGx1Z2luc3x8KHRoaXMuX2luc3RhbGxlZFBsdWdpbnM9W10pO2lmKGUuaW5kZXhPZih0KT4tMSlyZXR1cm4gdGhpczt2YXIgbj12KGFyZ3VtZW50cywxKTtyZXR1cm4gbi51bnNoaWZ0KHRoaXMpLFwiZnVuY3Rpb25cIj09dHlwZW9mIHQuaW5zdGFsbD90Lmluc3RhbGwuYXBwbHkodCxuKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiZ0LmFwcGx5KG51bGwsbiksZS5wdXNoKHQpLHRoaXN9fSh0KSxmdW5jdGlvbih0KXt0Lm1peGluPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLm9wdGlvbnM9Rih0aGlzLm9wdGlvbnMsdCksdGhpc319KHQpLEh0KHQpLGZ1bmN0aW9uKHQpe3puLmZvckVhY2goZnVuY3Rpb24oZSl7dFtlXT1mdW5jdGlvbih0LG4pe3JldHVybiBuPyhcImNvbXBvbmVudFwiPT09ZSYmbyhuKSYmKG4ubmFtZT1uLm5hbWV8fHQsbj10aGlzLm9wdGlvbnMuX2Jhc2UuZXh0ZW5kKG4pKSxcImRpcmVjdGl2ZVwiPT09ZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49e2JpbmQ6bix1cGRhdGU6bn0pLHRoaXMub3B0aW9uc1tlK1wic1wiXVt0XT1uLG4pOnRoaXMub3B0aW9uc1tlK1wic1wiXVt0XX19KX0odCl9KFJ0KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoUnQucHJvdG90eXBlLFwiJGlzU2VydmVyXCIse2dldDp1cn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSdC5wcm90b3R5cGUsXCIkc3NyQ29udGV4dFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kdm5vZGUmJnRoaXMuJHZub2RlLnNzckNvbnRleHR9fSksUnQudmVyc2lvbj1cIjIuNS4xM1wiO3ZhciBlaSxuaSxyaSxpaSxvaSxhaSxzaSxjaSx1aT11KFwic3R5bGUsY2xhc3NcIiksbGk9dShcImlucHV0LHRleHRhcmVhLG9wdGlvbixzZWxlY3QscHJvZ3Jlc3NcIiksZmk9ZnVuY3Rpb24odCxlLG4pe3JldHVyblwidmFsdWVcIj09PW4mJmxpKHQpJiZcImJ1dHRvblwiIT09ZXx8XCJzZWxlY3RlZFwiPT09biYmXCJvcHRpb25cIj09PXR8fFwiY2hlY2tlZFwiPT09biYmXCJpbnB1dFwiPT09dHx8XCJtdXRlZFwiPT09biYmXCJ2aWRlb1wiPT09dH0scGk9dShcImNvbnRlbnRlZGl0YWJsZSxkcmFnZ2FibGUsc3BlbGxjaGVja1wiKSxkaT11KFwiYWxsb3dmdWxsc2NyZWVuLGFzeW5jLGF1dG9mb2N1cyxhdXRvcGxheSxjaGVja2VkLGNvbXBhY3QsY29udHJvbHMsZGVjbGFyZSxkZWZhdWx0LGRlZmF1bHRjaGVja2VkLGRlZmF1bHRtdXRlZCxkZWZhdWx0c2VsZWN0ZWQsZGVmZXIsZGlzYWJsZWQsZW5hYmxlZCxmb3Jtbm92YWxpZGF0ZSxoaWRkZW4saW5kZXRlcm1pbmF0ZSxpbmVydCxpc21hcCxpdGVtc2NvcGUsbG9vcCxtdWx0aXBsZSxtdXRlZCxub2hyZWYsbm9yZXNpemUsbm9zaGFkZSxub3ZhbGlkYXRlLG5vd3JhcCxvcGVuLHBhdXNlb25leGl0LHJlYWRvbmx5LHJlcXVpcmVkLHJldmVyc2VkLHNjb3BlZCxzZWFtbGVzcyxzZWxlY3RlZCxzb3J0YWJsZSx0cmFuc2xhdGUsdHJ1ZXNwZWVkLHR5cGVtdXN0bWF0Y2gsdmlzaWJsZVwiKSx2aT1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixoaT1mdW5jdGlvbih0KXtyZXR1cm5cIjpcIj09PXQuY2hhckF0KDUpJiZcInhsaW5rXCI9PT10LnNsaWNlKDAsNSl9LG1pPWZ1bmN0aW9uKHQpe3JldHVybiBoaSh0KT90LnNsaWNlKDYsdC5sZW5ndGgpOlwiXCJ9LHlpPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsPT10fHwhMT09PXR9LGdpPXtzdmc6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLG1hdGg6XCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCJ9LF9pPXUoXCJodG1sLGJvZHksYmFzZSxoZWFkLGxpbmssbWV0YSxzdHlsZSx0aXRsZSxhZGRyZXNzLGFydGljbGUsYXNpZGUsZm9vdGVyLGhlYWRlcixoMSxoMixoMyxoNCxoNSxoNixoZ3JvdXAsbmF2LHNlY3Rpb24sZGl2LGRkLGRsLGR0LGZpZ2NhcHRpb24sZmlndXJlLHBpY3R1cmUsaHIsaW1nLGxpLG1haW4sb2wscCxwcmUsdWwsYSxiLGFiYnIsYmRpLGJkbyxicixjaXRlLGNvZGUsZGF0YSxkZm4sZW0saSxrYmQsbWFyayxxLHJwLHJ0LHJ0YyxydWJ5LHMsc2FtcCxzbWFsbCxzcGFuLHN0cm9uZyxzdWIsc3VwLHRpbWUsdSx2YXIsd2JyLGFyZWEsYXVkaW8sbWFwLHRyYWNrLHZpZGVvLGVtYmVkLG9iamVjdCxwYXJhbSxzb3VyY2UsY2FudmFzLHNjcmlwdCxub3NjcmlwdCxkZWwsaW5zLGNhcHRpb24sY29sLGNvbGdyb3VwLHRhYmxlLHRoZWFkLHRib2R5LHRkLHRoLHRyLGJ1dHRvbixkYXRhbGlzdCxmaWVsZHNldCxmb3JtLGlucHV0LGxhYmVsLGxlZ2VuZCxtZXRlcixvcHRncm91cCxvcHRpb24sb3V0cHV0LHByb2dyZXNzLHNlbGVjdCx0ZXh0YXJlYSxkZXRhaWxzLGRpYWxvZyxtZW51LG1lbnVpdGVtLHN1bW1hcnksY29udGVudCxlbGVtZW50LHNoYWRvdyx0ZW1wbGF0ZSxibG9ja3F1b3RlLGlmcmFtZSx0Zm9vdFwiKSxiaT11KFwic3ZnLGFuaW1hdGUsY2lyY2xlLGNsaXBwYXRoLGN1cnNvcixkZWZzLGRlc2MsZWxsaXBzZSxmaWx0ZXIsZm9udC1mYWNlLGZvcmVpZ25PYmplY3QsZyxnbHlwaCxpbWFnZSxsaW5lLG1hcmtlcixtYXNrLG1pc3NpbmctZ2x5cGgscGF0aCxwYXR0ZXJuLHBvbHlnb24scG9seWxpbmUscmVjdCxzd2l0Y2gsc3ltYm9sLHRleHQsdGV4dHBhdGgsdHNwYW4sdXNlLHZpZXdcIiwhMCksJGk9ZnVuY3Rpb24odCl7cmV0dXJuIF9pKHQpfHxiaSh0KX0sQ2k9T2JqZWN0LmNyZWF0ZShudWxsKSx3aT11KFwidGV4dCxudW1iZXIscGFzc3dvcmQsc2VhcmNoLGVtYWlsLHRlbCx1cmxcIikseGk9T2JqZWN0LmZyZWV6ZSh7Y3JlYXRlRWxlbWVudDpmdW5jdGlvbih0LGUpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodCk7cmV0dXJuXCJzZWxlY3RcIiE9PXQ/bjooZS5kYXRhJiZlLmRhdGEuYXR0cnMmJnZvaWQgMCE9PWUuZGF0YS5hdHRycy5tdWx0aXBsZSYmbi5zZXRBdHRyaWJ1dGUoXCJtdWx0aXBsZVwiLFwibXVsdGlwbGVcIiksbil9LGNyZWF0ZUVsZW1lbnROUzpmdW5jdGlvbih0LGUpe3JldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoZ2lbdF0sZSl9LGNyZWF0ZVRleHROb2RlOmZ1bmN0aW9uKHQpe3JldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0KX0sY3JlYXRlQ29tbWVudDpmdW5jdGlvbih0KXtyZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0KX0saW5zZXJ0QmVmb3JlOmZ1bmN0aW9uKHQsZSxuKXt0Lmluc2VydEJlZm9yZShlLG4pfSxyZW1vdmVDaGlsZDpmdW5jdGlvbih0LGUpe3QucmVtb3ZlQ2hpbGQoZSl9LGFwcGVuZENoaWxkOmZ1bmN0aW9uKHQsZSl7dC5hcHBlbmRDaGlsZChlKX0scGFyZW50Tm9kZTpmdW5jdGlvbih0KXtyZXR1cm4gdC5wYXJlbnROb2RlfSxuZXh0U2libGluZzpmdW5jdGlvbih0KXtyZXR1cm4gdC5uZXh0U2libGluZ30sdGFnTmFtZTpmdW5jdGlvbih0KXtyZXR1cm4gdC50YWdOYW1lfSxzZXRUZXh0Q29udGVudDpmdW5jdGlvbih0LGUpe3QudGV4dENvbnRlbnQ9ZX0sc2V0QXR0cmlidXRlOmZ1bmN0aW9uKHQsZSxuKXt0LnNldEF0dHJpYnV0ZShlLG4pfX0pLGtpPXtjcmVhdGU6ZnVuY3Rpb24odCxlKXtYdChlKX0sdXBkYXRlOmZ1bmN0aW9uKHQsZSl7dC5kYXRhLnJlZiE9PWUuZGF0YS5yZWYmJihYdCh0LCEwKSxYdChlKSl9LGRlc3Ryb3k6ZnVuY3Rpb24odCl7WHQodCwhMCl9fSxBaT1uZXcgbXIoXCJcIix7fSxbXSksT2k9W1wiY3JlYXRlXCIsXCJhY3RpdmF0ZVwiLFwidXBkYXRlXCIsXCJyZW1vdmVcIixcImRlc3Ryb3lcIl0sU2k9e2NyZWF0ZTp0ZSx1cGRhdGU6dGUsZGVzdHJveTpmdW5jdGlvbih0KXt0ZSh0LEFpKX19LFRpPU9iamVjdC5jcmVhdGUobnVsbCksRWk9W2tpLFNpXSxqaT17Y3JlYXRlOnJlLHVwZGF0ZTpyZX0sTmk9e2NyZWF0ZTpvZSx1cGRhdGU6b2V9LElpPS9bXFx3KS4rXFwtXyRcXF1dLyxMaT1cIl9fclwiLE1pPVwiX19jXCIsRGk9e2NyZWF0ZTp4ZSx1cGRhdGU6eGV9LFBpPXtjcmVhdGU6a2UsdXBkYXRlOmtlfSxGaT1wKGZ1bmN0aW9uKHQpe3ZhciBlPXt9LG49LzooLispLztyZXR1cm4gdC5zcGxpdCgvOyg/IVteKF0qXFwpKS9nKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2lmKHQpe3ZhciByPXQuc3BsaXQobik7ci5sZW5ndGg+MSYmKGVbclswXS50cmltKCldPXJbMV0udHJpbSgpKX19KSxlfSksUmk9L14tLS8sSGk9L1xccyohaW1wb3J0YW50JC8sQmk9ZnVuY3Rpb24odCxlLG4pe2lmKFJpLnRlc3QoZSkpdC5zdHlsZS5zZXRQcm9wZXJ0eShlLG4pO2Vsc2UgaWYoSGkudGVzdChuKSl0LnN0eWxlLnNldFByb3BlcnR5KGUsbi5yZXBsYWNlKEhpLFwiXCIpLFwiaW1wb3J0YW50XCIpO2Vsc2V7dmFyIHI9VmkoZSk7aWYoQXJyYXkuaXNBcnJheShuKSlmb3IodmFyIGk9MCxvPW4ubGVuZ3RoO2k8bztpKyspdC5zdHlsZVtyXT1uW2ldO2Vsc2UgdC5zdHlsZVtyXT1ufX0sVWk9W1wiV2Via2l0XCIsXCJNb3pcIixcIm1zXCJdLFZpPXAoZnVuY3Rpb24odCl7aWYoY2k9Y2l8fGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGUsXCJmaWx0ZXJcIiE9PSh0PVBuKHQpKSYmdCBpbiBjaSlyZXR1cm4gdDtmb3IodmFyIGU9dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpLG49MDtuPFVpLmxlbmd0aDtuKyspe3ZhciByPVVpW25dK2U7aWYociBpbiBjaSlyZXR1cm4gcn19KSx6aT17Y3JlYXRlOlNlLHVwZGF0ZTpTZX0sS2k9cChmdW5jdGlvbih0KXtyZXR1cm57ZW50ZXJDbGFzczp0K1wiLWVudGVyXCIsZW50ZXJUb0NsYXNzOnQrXCItZW50ZXItdG9cIixlbnRlckFjdGl2ZUNsYXNzOnQrXCItZW50ZXItYWN0aXZlXCIsbGVhdmVDbGFzczp0K1wiLWxlYXZlXCIsbGVhdmVUb0NsYXNzOnQrXCItbGVhdmUtdG9cIixsZWF2ZUFjdGl2ZUNsYXNzOnQrXCItbGVhdmUtYWN0aXZlXCJ9fSksSmk9R24mJiF0cixxaT1cInRyYW5zaXRpb25cIixXaT1cImFuaW1hdGlvblwiLEdpPVwidHJhbnNpdGlvblwiLFppPVwidHJhbnNpdGlvbmVuZFwiLFhpPVwiYW5pbWF0aW9uXCIsWWk9XCJhbmltYXRpb25lbmRcIjtKaSYmKHZvaWQgMD09PXdpbmRvdy5vbnRyYW5zaXRpb25lbmQmJnZvaWQgMCE9PXdpbmRvdy5vbndlYmtpdHRyYW5zaXRpb25lbmQmJihHaT1cIldlYmtpdFRyYW5zaXRpb25cIixaaT1cIndlYmtpdFRyYW5zaXRpb25FbmRcIiksdm9pZCAwPT09d2luZG93Lm9uYW5pbWF0aW9uZW5kJiZ2b2lkIDAhPT13aW5kb3cub253ZWJraXRhbmltYXRpb25lbmQmJihYaT1cIldlYmtpdEFuaW1hdGlvblwiLFlpPVwid2Via2l0QW5pbWF0aW9uRW5kXCIpKTt2YXIgUWk9R24/d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT93aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KTpzZXRUaW1lb3V0OmZ1bmN0aW9uKHQpe3JldHVybiB0KCl9LHRvPS9cXGIodHJhbnNmb3JtfGFsbCkoLHwkKS8sZW89ZnVuY3Rpb24oaSl7ZnVuY3Rpb24gbyh0KXt2YXIgbj1BLnBhcmVudE5vZGUodCk7ZShuKSYmQS5yZW1vdmVDaGlsZChuLHQpfWZ1bmN0aW9uIGEodCxyLGksbyxhKXtpZih0LmlzUm9vdEluc2VydD0hYSwhZnVuY3Rpb24odCxyLGksbyl7dmFyIGE9dC5kYXRhO2lmKGUoYSkpe3ZhciB1PWUodC5jb21wb25lbnRJbnN0YW5jZSkmJmEua2VlcEFsaXZlO2lmKGUoYT1hLmhvb2spJiZlKGE9YS5pbml0KSYmYSh0LCExLGksbyksZSh0LmNvbXBvbmVudEluc3RhbmNlKSlyZXR1cm4gcyh0LHIpLG4odSkmJmZ1bmN0aW9uKHQsbixyLGkpe2Zvcih2YXIgbyxhPXQ7YS5jb21wb25lbnRJbnN0YW5jZTspaWYoYT1hLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZSxlKG89YS5kYXRhKSYmZShvPW8udHJhbnNpdGlvbikpe2ZvcihvPTA7bzx4LmFjdGl2YXRlLmxlbmd0aDsrK28peC5hY3RpdmF0ZVtvXShBaSxhKTtuLnB1c2goYSk7YnJlYWt9YyhyLHQuZWxtLGkpfSh0LHIsaSxvKSwhMH19KHQscixpLG8pKXt2YXIgdT10LmRhdGEsZj10LmNoaWxkcmVuLHY9dC50YWc7ZSh2KT8odC5lbG09dC5ucz9BLmNyZWF0ZUVsZW1lbnROUyh0Lm5zLHYpOkEuY3JlYXRlRWxlbWVudCh2LHQpLGQodCksbCh0LGYsciksZSh1KSYmcCh0LHIpLGMoaSx0LmVsbSxvKSk6bih0LmlzQ29tbWVudCk/KHQuZWxtPUEuY3JlYXRlQ29tbWVudCh0LnRleHQpLGMoaSx0LmVsbSxvKSk6KHQuZWxtPUEuY3JlYXRlVGV4dE5vZGUodC50ZXh0KSxjKGksdC5lbG0sbykpfX1mdW5jdGlvbiBzKHQsbil7ZSh0LmRhdGEucGVuZGluZ0luc2VydCkmJihuLnB1c2guYXBwbHkobix0LmRhdGEucGVuZGluZ0luc2VydCksdC5kYXRhLnBlbmRpbmdJbnNlcnQ9bnVsbCksdC5lbG09dC5jb21wb25lbnRJbnN0YW5jZS4kZWwsZih0KT8ocCh0LG4pLGQodCkpOihYdCh0KSxuLnB1c2godCkpfWZ1bmN0aW9uIGModCxuLHIpe2UodCkmJihlKHIpP3IucGFyZW50Tm9kZT09PXQmJkEuaW5zZXJ0QmVmb3JlKHQsbixyKTpBLmFwcGVuZENoaWxkKHQsbikpfWZ1bmN0aW9uIGwodCxlLG4pe2lmKEFycmF5LmlzQXJyYXkoZSkpZm9yKHZhciBpPTA7aTxlLmxlbmd0aDsrK2kpYShlW2ldLG4sdC5lbG0sbnVsbCwhMCk7ZWxzZSByKHQudGV4dCkmJkEuYXBwZW5kQ2hpbGQodC5lbG0sQS5jcmVhdGVUZXh0Tm9kZShTdHJpbmcodC50ZXh0KSkpfWZ1bmN0aW9uIGYodCl7Zm9yKDt0LmNvbXBvbmVudEluc3RhbmNlOyl0PXQuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlO3JldHVybiBlKHQudGFnKX1mdW5jdGlvbiBwKHQsbil7Zm9yKHZhciByPTA7cjx4LmNyZWF0ZS5sZW5ndGg7KytyKXguY3JlYXRlW3JdKEFpLHQpO2UoQz10LmRhdGEuaG9vaykmJihlKEMuY3JlYXRlKSYmQy5jcmVhdGUoQWksdCksZShDLmluc2VydCkmJm4ucHVzaCh0KSl9ZnVuY3Rpb24gZCh0KXt2YXIgbjtpZihlKG49dC5mblNjb3BlSWQpKUEuc2V0QXR0cmlidXRlKHQuZWxtLG4sXCJcIik7ZWxzZSBmb3IodmFyIHI9dDtyOyllKG49ci5jb250ZXh0KSYmZShuPW4uJG9wdGlvbnMuX3Njb3BlSWQpJiZBLnNldEF0dHJpYnV0ZSh0LmVsbSxuLFwiXCIpLHI9ci5wYXJlbnQ7ZShuPVByKSYmbiE9PXQuY29udGV4dCYmbiE9PXQuZm5Db250ZXh0JiZlKG49bi4kb3B0aW9ucy5fc2NvcGVJZCkmJkEuc2V0QXR0cmlidXRlKHQuZWxtLG4sXCJcIil9ZnVuY3Rpb24gdih0LGUsbixyLGksbyl7Zm9yKDtyPD1pOysrcilhKG5bcl0sbyx0LGUpfWZ1bmN0aW9uIGgodCl7dmFyIG4scixpPXQuZGF0YTtpZihlKGkpKWZvcihlKG49aS5ob29rKSYmZShuPW4uZGVzdHJveSkmJm4odCksbj0wO248eC5kZXN0cm95Lmxlbmd0aDsrK24peC5kZXN0cm95W25dKHQpO2lmKGUobj10LmNoaWxkcmVuKSlmb3Iocj0wO3I8dC5jaGlsZHJlbi5sZW5ndGg7KytyKWgodC5jaGlsZHJlbltyXSl9ZnVuY3Rpb24gbSh0LG4scixpKXtmb3IoO3I8PWk7KytyKXt2YXIgYT1uW3JdO2UoYSkmJihlKGEudGFnKT8oeShhKSxoKGEpKTpvKGEuZWxtKSl9fWZ1bmN0aW9uIHkodCxuKXtpZihlKG4pfHxlKHQuZGF0YSkpe3ZhciByLGk9eC5yZW1vdmUubGVuZ3RoKzE7Zm9yKGUobik/bi5saXN0ZW5lcnMrPWk6bj1mdW5jdGlvbih0LGUpe2Z1bmN0aW9uIG4oKXswPT0tLW4ubGlzdGVuZXJzJiZvKHQpfXJldHVybiBuLmxpc3RlbmVycz1lLG59KHQuZWxtLGkpLGUocj10LmNvbXBvbmVudEluc3RhbmNlKSYmZShyPXIuX3Zub2RlKSYmZShyLmRhdGEpJiZ5KHIsbikscj0wO3I8eC5yZW1vdmUubGVuZ3RoOysrcil4LnJlbW92ZVtyXSh0LG4pO2Uocj10LmRhdGEuaG9vaykmJmUocj1yLnJlbW92ZSk/cih0LG4pOm4oKX1lbHNlIG8odC5lbG0pfWZ1bmN0aW9uIGcobixyLGksbyxzKXtmb3IodmFyIGMsdSxsLGY9MCxwPTAsZD1yLmxlbmd0aC0xLGg9clswXSx5PXJbZF0sZz1pLmxlbmd0aC0xLGI9aVswXSwkPWlbZ10sQz0hcztmPD1kJiZwPD1nOyl0KGgpP2g9clsrK2ZdOnQoeSk/eT1yWy0tZF06WXQoaCxiKT8oXyhoLGIsbyksaD1yWysrZl0sYj1pWysrcF0pOll0KHksJCk/KF8oeSwkLG8pLHk9clstLWRdLCQ9aVstLWddKTpZdChoLCQpPyhfKGgsJCxvKSxDJiZBLmluc2VydEJlZm9yZShuLGguZWxtLEEubmV4dFNpYmxpbmcoeS5lbG0pKSxoPXJbKytmXSwkPWlbLS1nXSk6WXQoeSxiKT8oXyh5LGIsbyksQyYmQS5pbnNlcnRCZWZvcmUobix5LmVsbSxoLmVsbSkseT1yWy0tZF0sYj1pWysrcF0pOih0KGMpJiYoYz1RdChyLGYsZCkpLHQodT1lKGIua2V5KT9jW2Iua2V5XTpmdW5jdGlvbih0LG4scixpKXtmb3IodmFyIG89cjtvPGk7bysrKXt2YXIgYT1uW29dO2lmKGUoYSkmJll0KHQsYSkpcmV0dXJuIG99fShiLHIsZixkKSk/YShiLG8sbixoLmVsbSk6WXQobD1yW3VdLGIpPyhfKGwsYixvKSxyW3VdPXZvaWQgMCxDJiZBLmluc2VydEJlZm9yZShuLGwuZWxtLGguZWxtKSk6YShiLG8sbixoLmVsbSksYj1pWysrcF0pO2Y+ZD92KG4sdChpW2crMV0pP251bGw6aVtnKzFdLmVsbSxpLHAsZyxvKTpwPmcmJm0oMCxyLGYsZCl9ZnVuY3Rpb24gXyhyLGksbyxhKXtpZihyIT09aSl7dmFyIHM9aS5lbG09ci5lbG07aWYobihyLmlzQXN5bmNQbGFjZWhvbGRlcikpZShpLmFzeW5jRmFjdG9yeS5yZXNvbHZlZCk/JChyLmVsbSxpLG8pOmkuaXNBc3luY1BsYWNlaG9sZGVyPSEwO2Vsc2UgaWYobihpLmlzU3RhdGljKSYmbihyLmlzU3RhdGljKSYmaS5rZXk9PT1yLmtleSYmKG4oaS5pc0Nsb25lZCl8fG4oaS5pc09uY2UpKSlpLmNvbXBvbmVudEluc3RhbmNlPXIuY29tcG9uZW50SW5zdGFuY2U7ZWxzZXt2YXIgYyx1PWkuZGF0YTtlKHUpJiZlKGM9dS5ob29rKSYmZShjPWMucHJlcGF0Y2gpJiZjKHIsaSk7dmFyIGw9ci5jaGlsZHJlbixwPWkuY2hpbGRyZW47aWYoZSh1KSYmZihpKSl7Zm9yKGM9MDtjPHgudXBkYXRlLmxlbmd0aDsrK2MpeC51cGRhdGVbY10ocixpKTtlKGM9dS5ob29rKSYmZShjPWMudXBkYXRlKSYmYyhyLGkpfXQoaS50ZXh0KT9lKGwpJiZlKHApP2whPT1wJiZnKHMsbCxwLG8sYSk6ZShwKT8oZShyLnRleHQpJiZBLnNldFRleHRDb250ZW50KHMsXCJcIiksdihzLG51bGwscCwwLHAubGVuZ3RoLTEsbykpOmUobCk/bSgwLGwsMCxsLmxlbmd0aC0xKTplKHIudGV4dCkmJkEuc2V0VGV4dENvbnRlbnQocyxcIlwiKTpyLnRleHQhPT1pLnRleHQmJkEuc2V0VGV4dENvbnRlbnQocyxpLnRleHQpLGUodSkmJmUoYz11Lmhvb2spJiZlKGM9Yy5wb3N0cGF0Y2gpJiZjKHIsaSl9fX1mdW5jdGlvbiBiKHQscixpKXtpZihuKGkpJiZlKHQucGFyZW50KSl0LnBhcmVudC5kYXRhLnBlbmRpbmdJbnNlcnQ9cjtlbHNlIGZvcih2YXIgbz0wO288ci5sZW5ndGg7KytvKXJbb10uZGF0YS5ob29rLmluc2VydChyW29dKX1mdW5jdGlvbiAkKHQscixpLG8pe3ZhciBhLGM9ci50YWcsdT1yLmRhdGEsZj1yLmNoaWxkcmVuO2lmKG89b3x8dSYmdS5wcmUsci5lbG09dCxuKHIuaXNDb21tZW50KSYmZShyLmFzeW5jRmFjdG9yeSkpcmV0dXJuIHIuaXNBc3luY1BsYWNlaG9sZGVyPSEwLCEwO2lmKGUodSkmJihlKGE9dS5ob29rKSYmZShhPWEuaW5pdCkmJmEociwhMCksZShhPXIuY29tcG9uZW50SW5zdGFuY2UpKSlyZXR1cm4gcyhyLGkpLCEwO2lmKGUoYykpe2lmKGUoZikpaWYodC5oYXNDaGlsZE5vZGVzKCkpaWYoZShhPXUpJiZlKGE9YS5kb21Qcm9wcykmJmUoYT1hLmlubmVySFRNTCkpe2lmKGEhPT10LmlubmVySFRNTClyZXR1cm4hMX1lbHNle2Zvcih2YXIgZD0hMCx2PXQuZmlyc3RDaGlsZCxoPTA7aDxmLmxlbmd0aDtoKyspe2lmKCF2fHwhJCh2LGZbaF0saSxvKSl7ZD0hMTticmVha312PXYubmV4dFNpYmxpbmd9aWYoIWR8fHYpcmV0dXJuITF9ZWxzZSBsKHIsZixpKTtpZihlKHUpKXt2YXIgbT0hMTtmb3IodmFyIHkgaW4gdSlpZighTyh5KSl7bT0hMCxwKHIsaSk7YnJlYWt9IW0mJnUuY2xhc3MmJlcodS5jbGFzcyl9fWVsc2UgdC5kYXRhIT09ci50ZXh0JiYodC5kYXRhPXIudGV4dCk7cmV0dXJuITB9dmFyIEMsdyx4PXt9LGs9aS5tb2R1bGVzLEE9aS5ub2RlT3BzO2ZvcihDPTA7QzxPaS5sZW5ndGg7KytDKWZvcih4W09pW0NdXT1bXSx3PTA7dzxrLmxlbmd0aDsrK3cpZShrW3ddW09pW0NdXSkmJnhbT2lbQ11dLnB1c2goa1t3XVtPaVtDXV0pO3ZhciBPPXUoXCJhdHRycyxjbGFzcyxzdGF0aWNDbGFzcyxzdGF0aWNTdHlsZSxrZXlcIik7cmV0dXJuIGZ1bmN0aW9uKHIsaSxvLHMsYyx1KXtpZighdChpKSl7dmFyIGw9ITEscD1bXTtpZih0KHIpKWw9ITAsYShpLHAsYyx1KTtlbHNle3ZhciBkPWUoci5ub2RlVHlwZSk7aWYoIWQmJll0KHIsaSkpXyhyLGkscCxzKTtlbHNle2lmKGQpe2lmKDE9PT1yLm5vZGVUeXBlJiZyLmhhc0F0dHJpYnV0ZShWbikmJihyLnJlbW92ZUF0dHJpYnV0ZShWbiksbz0hMCksbihvKSYmJChyLGkscCkpcmV0dXJuIGIoaSxwLCEwKSxyO3I9ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBtcihBLnRhZ05hbWUodCkudG9Mb3dlckNhc2UoKSx7fSxbXSx2b2lkIDAsdCl9KHIpfXZhciB2PXIuZWxtLHk9QS5wYXJlbnROb2RlKHYpO2lmKGEoaSxwLHYuX2xlYXZlQ2I/bnVsbDp5LEEubmV4dFNpYmxpbmcodikpLGUoaS5wYXJlbnQpKWZvcih2YXIgZz1pLnBhcmVudCxDPWYoaSk7Zzspe2Zvcih2YXIgdz0wO3c8eC5kZXN0cm95Lmxlbmd0aDsrK3cpeC5kZXN0cm95W3ddKGcpO2lmKGcuZWxtPWkuZWxtLEMpe2Zvcih2YXIgaz0wO2s8eC5jcmVhdGUubGVuZ3RoOysrayl4LmNyZWF0ZVtrXShBaSxnKTt2YXIgTz1nLmRhdGEuaG9vay5pbnNlcnQ7aWYoTy5tZXJnZWQpZm9yKHZhciBTPTE7UzxPLmZucy5sZW5ndGg7UysrKU8uZm5zW1NdKCl9ZWxzZSBYdChnKTtnPWcucGFyZW50fWUoeSk/bSgwLFtyXSwwLDApOmUoci50YWcpJiZoKHIpfX1yZXR1cm4gYihpLHAsbCksaS5lbG19ZShyKSYmaChyKX19KHtub2RlT3BzOnhpLG1vZHVsZXM6W2ppLE5pLERpLFBpLHppLEduP3tjcmVhdGU6VmUsYWN0aXZhdGU6VmUscmVtb3ZlOmZ1bmN0aW9uKHQsZSl7ITAhPT10LmRhdGEuc2hvdz9IZSh0LGUpOmUoKX19Ont9XS5jb25jYXQoRWkpfSk7dHImJmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzZWxlY3Rpb25jaGFuZ2VcIixmdW5jdGlvbigpe3ZhciB0PWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7dCYmdC52bW9kZWwmJlplKHQsXCJpbnB1dFwiKX0pO3ZhciBubz17aW5zZXJ0ZWQ6ZnVuY3Rpb24odCxlLG4scil7XCJzZWxlY3RcIj09PW4udGFnPyhyLmVsbSYmIXIuZWxtLl92T3B0aW9ucz9ZKG4sXCJwb3N0cGF0Y2hcIixmdW5jdGlvbigpe25vLmNvbXBvbmVudFVwZGF0ZWQodCxlLG4pfSk6emUodCxlLG4uY29udGV4dCksdC5fdk9wdGlvbnM9W10ubWFwLmNhbGwodC5vcHRpb25zLHFlKSk6KFwidGV4dGFyZWFcIj09PW4udGFnfHx3aSh0LnR5cGUpKSYmKHQuX3ZNb2RpZmllcnM9ZS5tb2RpZmllcnMsZS5tb2RpZmllcnMubGF6eXx8KHQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLEdlKSxucnx8KHQuYWRkRXZlbnRMaXN0ZW5lcihcImNvbXBvc2l0aW9uc3RhcnRcIixXZSksdC5hZGRFdmVudExpc3RlbmVyKFwiY29tcG9zaXRpb25lbmRcIixHZSkpLHRyJiYodC52bW9kZWw9ITApKSl9LGNvbXBvbmVudFVwZGF0ZWQ6ZnVuY3Rpb24odCxlLG4pe2lmKFwic2VsZWN0XCI9PT1uLnRhZyl7emUodCxlLG4uY29udGV4dCk7dmFyIHI9dC5fdk9wdGlvbnMsaT10Ll92T3B0aW9ucz1bXS5tYXAuY2FsbCh0Lm9wdGlvbnMscWUpO2lmKGkuc29tZShmdW5jdGlvbih0LGUpe3JldHVybiFnKHQscltlXSl9KSl7KHQubXVsdGlwbGU/ZS52YWx1ZS5zb21lKGZ1bmN0aW9uKHQpe3JldHVybiBKZSh0LGkpfSk6ZS52YWx1ZSE9PWUub2xkVmFsdWUmJkplKGUudmFsdWUsaSkpJiZaZSh0LFwiY2hhbmdlXCIpfX19fSxybz17bW9kZWw6bm8sc2hvdzp7YmluZDpmdW5jdGlvbih0LGUsbil7dmFyIHI9ZS52YWx1ZSxpPShuPVhlKG4pKS5kYXRhJiZuLmRhdGEudHJhbnNpdGlvbixvPXQuX192T3JpZ2luYWxEaXNwbGF5PVwibm9uZVwiPT09dC5zdHlsZS5kaXNwbGF5P1wiXCI6dC5zdHlsZS5kaXNwbGF5O3ImJmk/KG4uZGF0YS5zaG93PSEwLFJlKG4sZnVuY3Rpb24oKXt0LnN0eWxlLmRpc3BsYXk9b30pKTp0LnN0eWxlLmRpc3BsYXk9cj9vOlwibm9uZVwifSx1cGRhdGU6ZnVuY3Rpb24odCxlLG4pe3ZhciByPWUudmFsdWU7aWYociE9PWUub2xkVmFsdWUpeyhuPVhlKG4pKS5kYXRhJiZuLmRhdGEudHJhbnNpdGlvbj8obi5kYXRhLnNob3c9ITAscj9SZShuLGZ1bmN0aW9uKCl7dC5zdHlsZS5kaXNwbGF5PXQuX192T3JpZ2luYWxEaXNwbGF5fSk6SGUobixmdW5jdGlvbigpe3Quc3R5bGUuZGlzcGxheT1cIm5vbmVcIn0pKTp0LnN0eWxlLmRpc3BsYXk9cj90Ll9fdk9yaWdpbmFsRGlzcGxheTpcIm5vbmVcIn19LHVuYmluZDpmdW5jdGlvbih0LGUsbixyLGkpe2l8fCh0LnN0eWxlLmRpc3BsYXk9dC5fX3ZPcmlnaW5hbERpc3BsYXkpfX19LGlvPXtuYW1lOlN0cmluZyxhcHBlYXI6Qm9vbGVhbixjc3M6Qm9vbGVhbixtb2RlOlN0cmluZyx0eXBlOlN0cmluZyxlbnRlckNsYXNzOlN0cmluZyxsZWF2ZUNsYXNzOlN0cmluZyxlbnRlclRvQ2xhc3M6U3RyaW5nLGxlYXZlVG9DbGFzczpTdHJpbmcsZW50ZXJBY3RpdmVDbGFzczpTdHJpbmcsbGVhdmVBY3RpdmVDbGFzczpTdHJpbmcsYXBwZWFyQ2xhc3M6U3RyaW5nLGFwcGVhckFjdGl2ZUNsYXNzOlN0cmluZyxhcHBlYXJUb0NsYXNzOlN0cmluZyxkdXJhdGlvbjpbTnVtYmVyLFN0cmluZyxPYmplY3RdfSxvbz17bmFtZTpcInRyYW5zaXRpb25cIixwcm9wczppbyxhYnN0cmFjdDohMCxyZW5kZXI6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxuPXRoaXMuJHNsb3RzLmRlZmF1bHQ7aWYobiYmKG49bi5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQudGFnfHxydCh0KX0pKS5sZW5ndGgpe3ZhciBpPXRoaXMubW9kZSxvPW5bMF07aWYoZnVuY3Rpb24odCl7Zm9yKDt0PXQucGFyZW50OylpZih0LmRhdGEudHJhbnNpdGlvbilyZXR1cm4hMH0odGhpcy4kdm5vZGUpKXJldHVybiBvO3ZhciBhPVllKG8pO2lmKCFhKXJldHVybiBvO2lmKHRoaXMuX2xlYXZpbmcpcmV0dXJuIHRuKHQsbyk7dmFyIHM9XCJfX3RyYW5zaXRpb24tXCIrdGhpcy5fdWlkK1wiLVwiO2Eua2V5PW51bGw9PWEua2V5P2EuaXNDb21tZW50P3MrXCJjb21tZW50XCI6cythLnRhZzpyKGEua2V5KT8wPT09U3RyaW5nKGEua2V5KS5pbmRleE9mKHMpP2Eua2V5OnMrYS5rZXk6YS5rZXk7dmFyIGM9KGEuZGF0YXx8KGEuZGF0YT17fSkpLnRyYW5zaXRpb249UWUodGhpcyksdT10aGlzLl92bm9kZSxsPVllKHUpO2lmKGEuZGF0YS5kaXJlY3RpdmVzJiZhLmRhdGEuZGlyZWN0aXZlcy5zb21lKGZ1bmN0aW9uKHQpe3JldHVyblwic2hvd1wiPT09dC5uYW1lfSkmJihhLmRhdGEuc2hvdz0hMCksbCYmbC5kYXRhJiYhZnVuY3Rpb24odCxlKXtyZXR1cm4gZS5rZXk9PT10LmtleSYmZS50YWc9PT10LnRhZ30oYSxsKSYmIXJ0KGwpJiYoIWwuY29tcG9uZW50SW5zdGFuY2V8fCFsLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZS5pc0NvbW1lbnQpKXt2YXIgZj1sLmRhdGEudHJhbnNpdGlvbj1oKHt9LGMpO2lmKFwib3V0LWluXCI9PT1pKXJldHVybiB0aGlzLl9sZWF2aW5nPSEwLFkoZixcImFmdGVyTGVhdmVcIixmdW5jdGlvbigpe2UuX2xlYXZpbmc9ITEsZS4kZm9yY2VVcGRhdGUoKX0pLHRuKHQsbyk7aWYoXCJpbi1vdXRcIj09PWkpe2lmKHJ0KGEpKXJldHVybiB1O3ZhciBwLGQ9ZnVuY3Rpb24oKXtwKCl9O1koYyxcImFmdGVyRW50ZXJcIixkKSxZKGMsXCJlbnRlckNhbmNlbGxlZFwiLGQpLFkoZixcImRlbGF5TGVhdmVcIixmdW5jdGlvbih0KXtwPXR9KX19cmV0dXJuIG99fX0sYW89aCh7dGFnOlN0cmluZyxtb3ZlQ2xhc3M6U3RyaW5nfSxpbyk7ZGVsZXRlIGFvLm1vZGU7dmFyIHNvPXtUcmFuc2l0aW9uOm9vLFRyYW5zaXRpb25Hcm91cDp7cHJvcHM6YW8scmVuZGVyOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT10aGlzLnRhZ3x8dGhpcy4kdm5vZGUuZGF0YS50YWd8fFwic3BhblwiLG49T2JqZWN0LmNyZWF0ZShudWxsKSxyPXRoaXMucHJldkNoaWxkcmVuPXRoaXMuY2hpbGRyZW4saT10aGlzLiRzbG90cy5kZWZhdWx0fHxbXSxvPXRoaXMuY2hpbGRyZW49W10sYT1RZSh0aGlzKSxzPTA7czxpLmxlbmd0aDtzKyspe3ZhciBjPWlbc107Yy50YWcmJm51bGwhPWMua2V5JiYwIT09U3RyaW5nKGMua2V5KS5pbmRleE9mKFwiX192bGlzdFwiKSYmKG8ucHVzaChjKSxuW2Mua2V5XT1jLChjLmRhdGF8fChjLmRhdGE9e30pKS50cmFuc2l0aW9uPWEpfWlmKHIpe2Zvcih2YXIgdT1bXSxsPVtdLGY9MDtmPHIubGVuZ3RoO2YrKyl7dmFyIHA9cltmXTtwLmRhdGEudHJhbnNpdGlvbj1hLHAuZGF0YS5wb3M9cC5lbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksbltwLmtleV0/dS5wdXNoKHApOmwucHVzaChwKX10aGlzLmtlcHQ9dChlLG51bGwsdSksdGhpcy5yZW1vdmVkPWx9cmV0dXJuIHQoZSxudWxsLG8pfSxiZWZvcmVVcGRhdGU6ZnVuY3Rpb24oKXt0aGlzLl9fcGF0Y2hfXyh0aGlzLl92bm9kZSx0aGlzLmtlcHQsITEsITApLHRoaXMuX3Zub2RlPXRoaXMua2VwdH0sdXBkYXRlZDpmdW5jdGlvbigpe3ZhciB0PXRoaXMucHJldkNoaWxkcmVuLGU9dGhpcy5tb3ZlQ2xhc3N8fCh0aGlzLm5hbWV8fFwidlwiKStcIi1tb3ZlXCI7dC5sZW5ndGgmJnRoaXMuaGFzTW92ZSh0WzBdLmVsbSxlKSYmKHQuZm9yRWFjaChlbiksdC5mb3JFYWNoKG5uKSx0LmZvckVhY2gocm4pLHRoaXMuX3JlZmxvdz1kb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCx0LmZvckVhY2goZnVuY3Rpb24odCl7aWYodC5kYXRhLm1vdmVkKXt2YXIgbj10LmVsbSxyPW4uc3R5bGU7SWUobixlKSxyLnRyYW5zZm9ybT1yLldlYmtpdFRyYW5zZm9ybT1yLnRyYW5zaXRpb25EdXJhdGlvbj1cIlwiLG4uYWRkRXZlbnRMaXN0ZW5lcihaaSxuLl9tb3ZlQ2I9ZnVuY3Rpb24gdChyKXtyJiYhL3RyYW5zZm9ybSQvLnRlc3Qoci5wcm9wZXJ0eU5hbWUpfHwobi5yZW1vdmVFdmVudExpc3RlbmVyKFppLHQpLG4uX21vdmVDYj1udWxsLExlKG4sZSkpfSl9fSkpfSxtZXRob2RzOntoYXNNb3ZlOmZ1bmN0aW9uKHQsZSl7aWYoIUppKXJldHVybiExO2lmKHRoaXMuX2hhc01vdmUpcmV0dXJuIHRoaXMuX2hhc01vdmU7dmFyIG49dC5jbG9uZU5vZGUoKTt0Ll90cmFuc2l0aW9uQ2xhc3NlcyYmdC5fdHJhbnNpdGlvbkNsYXNzZXMuZm9yRWFjaChmdW5jdGlvbih0KXtFZShuLHQpfSksVGUobixlKSxuLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsdGhpcy4kZWwuYXBwZW5kQ2hpbGQobik7dmFyIHI9RGUobik7cmV0dXJuIHRoaXMuJGVsLnJlbW92ZUNoaWxkKG4pLHRoaXMuX2hhc01vdmU9ci5oYXNUcmFuc2Zvcm19fX19O1J0LmNvbmZpZy5tdXN0VXNlUHJvcD1maSxSdC5jb25maWcuaXNSZXNlcnZlZFRhZz0kaSxSdC5jb25maWcuaXNSZXNlcnZlZEF0dHI9dWksUnQuY29uZmlnLmdldFRhZ05hbWVzcGFjZT1HdCxSdC5jb25maWcuaXNVbmtub3duRWxlbWVudD1mdW5jdGlvbih0KXtpZighR24pcmV0dXJuITA7aWYoJGkodCkpcmV0dXJuITE7aWYodD10LnRvTG93ZXJDYXNlKCksbnVsbCE9Q2lbdF0pcmV0dXJuIENpW3RdO3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodCk7cmV0dXJuIHQuaW5kZXhPZihcIi1cIik+LTE/Q2lbdF09ZS5jb25zdHJ1Y3Rvcj09PXdpbmRvdy5IVE1MVW5rbm93bkVsZW1lbnR8fGUuY29uc3RydWN0b3I9PT13aW5kb3cuSFRNTEVsZW1lbnQ6Q2lbdF09L0hUTUxVbmtub3duRWxlbWVudC8udGVzdChlLnRvU3RyaW5nKCkpfSxoKFJ0Lm9wdGlvbnMuZGlyZWN0aXZlcyxybyksaChSdC5vcHRpb25zLmNvbXBvbmVudHMsc28pLFJ0LnByb3RvdHlwZS5fX3BhdGNoX189R24/ZW86eSxSdC5wcm90b3R5cGUuJG1vdW50PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQ9dCYmR24/WnQodCk6dm9pZCAwLGZ1bmN0aW9uKHQsZSxuKXt0LiRlbD1lLHQuJG9wdGlvbnMucmVuZGVyfHwodC4kb3B0aW9ucy5yZW5kZXI9Z3IpLHZ0KHQsXCJiZWZvcmVNb3VudFwiKTt2YXIgcjtyZXR1cm4gcj1mdW5jdGlvbigpe3QuX3VwZGF0ZSh0Ll9yZW5kZXIoKSxuKX0sbmV3IEtyKHQscix5LG51bGwsITApLG49ITEsbnVsbD09dC4kdm5vZGUmJih0Ll9pc01vdW50ZWQ9ITAsdnQodCxcIm1vdW50ZWRcIikpLHR9KHRoaXMsdCxlKX0sUnQubmV4dFRpY2soZnVuY3Rpb24oKXtKbi5kZXZ0b29scyYmbHImJmxyLmVtaXQoXCJpbml0XCIsUnQpfSwwKTt2YXIgY28sdW89L1xce1xceygoPzoufFxcbikrPylcXH1cXH0vZyxsbz0vWy0uKis/XiR7fSgpfFtcXF1cXC9cXFxcXS9nLGZvPXAoZnVuY3Rpb24odCl7dmFyIGU9dFswXS5yZXBsYWNlKGxvLFwiXFxcXCQmXCIpLG49dFsxXS5yZXBsYWNlKGxvLFwiXFxcXCQmXCIpO3JldHVybiBuZXcgUmVnRXhwKGUrXCIoKD86LnxcXFxcbikrPylcIituLFwiZ1wiKX0pLHBvPXtzdGF0aWNLZXlzOltcInN0YXRpY0NsYXNzXCJdLHRyYW5zZm9ybU5vZGU6ZnVuY3Rpb24odCxlKXtlLndhcm47dmFyIG49aGUodCxcImNsYXNzXCIpO24mJih0LnN0YXRpY0NsYXNzPUpTT04uc3RyaW5naWZ5KG4pKTt2YXIgcj12ZSh0LFwiY2xhc3NcIiwhMSk7ciYmKHQuY2xhc3NCaW5kaW5nPXIpfSxnZW5EYXRhOmZ1bmN0aW9uKHQpe3ZhciBlPVwiXCI7cmV0dXJuIHQuc3RhdGljQ2xhc3MmJihlKz1cInN0YXRpY0NsYXNzOlwiK3Quc3RhdGljQ2xhc3MrXCIsXCIpLHQuY2xhc3NCaW5kaW5nJiYoZSs9XCJjbGFzczpcIit0LmNsYXNzQmluZGluZytcIixcIiksZX19LHZvPXtzdGF0aWNLZXlzOltcInN0YXRpY1N0eWxlXCJdLHRyYW5zZm9ybU5vZGU6ZnVuY3Rpb24odCxlKXtlLndhcm47dmFyIG49aGUodCxcInN0eWxlXCIpO24mJih0LnN0YXRpY1N0eWxlPUpTT04uc3RyaW5naWZ5KEZpKG4pKSk7dmFyIHI9dmUodCxcInN0eWxlXCIsITEpO3ImJih0LnN0eWxlQmluZGluZz1yKX0sZ2VuRGF0YTpmdW5jdGlvbih0KXt2YXIgZT1cIlwiO3JldHVybiB0LnN0YXRpY1N0eWxlJiYoZSs9XCJzdGF0aWNTdHlsZTpcIit0LnN0YXRpY1N0eWxlK1wiLFwiKSx0LnN0eWxlQmluZGluZyYmKGUrPVwic3R5bGU6KFwiK3Quc3R5bGVCaW5kaW5nK1wiKSxcIiksZX19LGhvPWZ1bmN0aW9uKHQpe3JldHVybiBjbz1jb3x8ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxjby5pbm5lckhUTUw9dCxjby50ZXh0Q29udGVudH0sbW89dShcImFyZWEsYmFzZSxicixjb2wsZW1iZWQsZnJhbWUsaHIsaW1nLGlucHV0LGlzaW5kZXgsa2V5Z2VuLGxpbmssbWV0YSxwYXJhbSxzb3VyY2UsdHJhY2ssd2JyXCIpLHlvPXUoXCJjb2xncm91cCxkZCxkdCxsaSxvcHRpb25zLHAsdGQsdGZvb3QsdGgsdGhlYWQsdHIsc291cmNlXCIpLGdvPXUoXCJhZGRyZXNzLGFydGljbGUsYXNpZGUsYmFzZSxibG9ja3F1b3RlLGJvZHksY2FwdGlvbixjb2wsY29sZ3JvdXAsZGQsZGV0YWlscyxkaWFsb2csZGl2LGRsLGR0LGZpZWxkc2V0LGZpZ2NhcHRpb24sZmlndXJlLGZvb3Rlcixmb3JtLGgxLGgyLGgzLGg0LGg1LGg2LGhlYWQsaGVhZGVyLGhncm91cCxocixodG1sLGxlZ2VuZCxsaSxtZW51aXRlbSxtZXRhLG9wdGdyb3VwLG9wdGlvbixwYXJhbSxycCxydCxzb3VyY2Usc3R5bGUsc3VtbWFyeSx0Ym9keSx0ZCx0Zm9vdCx0aCx0aGVhZCx0aXRsZSx0cix0cmFja1wiKSxfbz0vXlxccyooW15cXHNcIic8PlxcLz1dKykoPzpcXHMqKD0pXFxzKig/OlwiKFteXCJdKilcIit8JyhbXiddKiknK3woW15cXHNcIic9PD5gXSspKSk/Lyxibz1cIlthLXpBLVpfXVtcXFxcd1xcXFwtXFxcXC5dKlwiLCRvPVwiKCg/OlwiK2JvK1wiXFxcXDopP1wiK2JvK1wiKVwiLENvPW5ldyBSZWdFeHAoXCJePFwiKyRvKSx3bz0vXlxccyooXFwvPyk+Lyx4bz1uZXcgUmVnRXhwKFwiXjxcXFxcL1wiKyRvK1wiW14+XSo+XCIpLGtvPS9ePCFET0NUWVBFIFtePl0rPi9pLEFvPS9ePCEtLS8sT289L148IVxcWy8sU289ITE7XCJ4XCIucmVwbGFjZSgveCguKT8vZyxmdW5jdGlvbih0LGUpe1NvPVwiXCI9PT1lfSk7dmFyIFRvLEVvLGpvLE5vLElvLExvLE1vLERvLFBvLEZvLFJvLEhvPXUoXCJzY3JpcHQsc3R5bGUsdGV4dGFyZWFcIiwhMCksQm89e30sVW89e1wiJmx0O1wiOlwiPFwiLFwiJmd0O1wiOlwiPlwiLFwiJnF1b3Q7XCI6J1wiJyxcIiZhbXA7XCI6XCImXCIsXCImIzEwO1wiOlwiXFxuXCIsXCImIzk7XCI6XCJcXHRcIn0sVm89LyYoPzpsdHxndHxxdW90fGFtcCk7L2csem89LyYoPzpsdHxndHxxdW90fGFtcHwjMTB8IzkpOy9nLEtvPXUoXCJwcmUsdGV4dGFyZWFcIiwhMCksSm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gdCYmS28odCkmJlwiXFxuXCI9PT1lWzBdfSxxbz0vXkB8XnYtb246LyxXbz0vXnYtfF5AfF46LyxHbz0vKC4qPylcXHMrKD86aW58b2YpXFxzKyguKikvLFpvPS8sKFteLFxcfVxcXV0qKSg/OiwoW14sXFx9XFxdXSopKT8kLyxYbz0vXlxcKHxcXCkkL2csWW89LzooLiopJC8sUW89L146fF52LWJpbmQ6Lyx0YT0vXFwuW14uXSsvZyxlYT1wKGhvKSxuYT0vXnhtbG5zOk5TXFxkKy8scmE9L15OU1xcZCs6LyxpYT1bcG8sdm8se3ByZVRyYW5zZm9ybU5vZGU6ZnVuY3Rpb24odCxlKXtpZihcImlucHV0XCI9PT10LnRhZyl7dmFyIG49dC5hdHRyc01hcDtpZihuW1widi1tb2RlbFwiXSYmKG5bXCJ2LWJpbmQ6dHlwZVwiXXx8bltcIjp0eXBlXCJdKSl7dmFyIHI9dmUodCxcInR5cGVcIiksaT1oZSh0LFwidi1pZlwiLCEwKSxvPWk/XCImJihcIitpK1wiKVwiOlwiXCIsYT1udWxsIT1oZSh0LFwidi1lbHNlXCIsITApLHM9aGUodCxcInYtZWxzZS1pZlwiLCEwKSxjPWZuKHQpO3VuKGMpLGZlKGMsXCJ0eXBlXCIsXCJjaGVja2JveFwiKSxjbihjLGUpLGMucHJvY2Vzc2VkPSEwLGMuaWY9XCIoXCIrcitcIik9PT0nY2hlY2tib3gnXCIrbyxsbihjLHtleHA6Yy5pZixibG9jazpjfSk7dmFyIHU9Zm4odCk7aGUodSxcInYtZm9yXCIsITApLGZlKHUsXCJ0eXBlXCIsXCJyYWRpb1wiKSxjbih1LGUpLGxuKGMse2V4cDpcIihcIityK1wiKT09PSdyYWRpbydcIitvLGJsb2NrOnV9KTt2YXIgbD1mbih0KTtyZXR1cm4gaGUobCxcInYtZm9yXCIsITApLGZlKGwsXCI6dHlwZVwiLHIpLGNuKGwsZSksbG4oYyx7ZXhwOmksYmxvY2s6bH0pLGE/Yy5lbHNlPSEwOnMmJihjLmVsc2VpZj1zKSxjfX19fV0sb2E9e2V4cGVjdEhUTUw6ITAsbW9kdWxlczppYSxkaXJlY3RpdmVzOnttb2RlbDpmdW5jdGlvbih0LGUsbil7dmFyIHI9ZS52YWx1ZSxpPWUubW9kaWZpZXJzLG89dC50YWcsYT10LmF0dHJzTWFwLnR5cGU7aWYodC5jb21wb25lbnQpcmV0dXJuIG1lKHQscixpKSwhMTtpZihcInNlbGVjdFwiPT09bykhZnVuY3Rpb24odCxlLG4pe3ZhciByPSd2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsZnVuY3Rpb24obyl7cmV0dXJuIG8uc2VsZWN0ZWR9KS5tYXAoZnVuY3Rpb24obyl7dmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZTtyZXR1cm4gJysobiYmbi5udW1iZXI/XCJfbih2YWwpXCI6XCJ2YWxcIikrXCJ9KTtcIjtyPXIrXCIgXCIreWUoZSxcIiRldmVudC50YXJnZXQubXVsdGlwbGUgPyAkJHNlbGVjdGVkVmFsIDogJCRzZWxlY3RlZFZhbFswXVwiKSxkZSh0LFwiY2hhbmdlXCIscixudWxsLCEwKX0odCxyLGkpO2Vsc2UgaWYoXCJpbnB1dFwiPT09byYmXCJjaGVja2JveFwiPT09YSkhZnVuY3Rpb24odCxlLG4pe3ZhciByPW4mJm4ubnVtYmVyLGk9dmUodCxcInZhbHVlXCIpfHxcIm51bGxcIixvPXZlKHQsXCJ0cnVlLXZhbHVlXCIpfHxcInRydWVcIixhPXZlKHQsXCJmYWxzZS12YWx1ZVwiKXx8XCJmYWxzZVwiO3VlKHQsXCJjaGVja2VkXCIsXCJBcnJheS5pc0FycmF5KFwiK2UrXCIpP19pKFwiK2UrXCIsXCIraStcIik+LTFcIisoXCJ0cnVlXCI9PT1vP1wiOihcIitlK1wiKVwiOlwiOl9xKFwiK2UrXCIsXCIrbytcIilcIikpLGRlKHQsXCJjaGFuZ2VcIixcInZhciAkJGE9XCIrZStcIiwkJGVsPSRldmVudC50YXJnZXQsJCRjPSQkZWwuY2hlY2tlZD8oXCIrbytcIik6KFwiK2ErXCIpO2lmKEFycmF5LmlzQXJyYXkoJCRhKSl7dmFyICQkdj1cIisocj9cIl9uKFwiK2krXCIpXCI6aSkrXCIsJCRpPV9pKCQkYSwkJHYpO2lmKCQkZWwuY2hlY2tlZCl7JCRpPDAmJihcIitlK1wiPSQkYS5jb25jYXQoWyQkdl0pKX1lbHNleyQkaT4tMSYmKFwiK2UrXCI9JCRhLnNsaWNlKDAsJCRpKS5jb25jYXQoJCRhLnNsaWNlKCQkaSsxKSkpfX1lbHNle1wiK3llKGUsXCIkJGNcIikrXCJ9XCIsbnVsbCwhMCl9KHQscixpKTtlbHNlIGlmKFwiaW5wdXRcIj09PW8mJlwicmFkaW9cIj09PWEpIWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uJiZuLm51bWJlcixpPXZlKHQsXCJ2YWx1ZVwiKXx8XCJudWxsXCI7dWUodCxcImNoZWNrZWRcIixcIl9xKFwiK2UrXCIsXCIrKGk9cj9cIl9uKFwiK2krXCIpXCI6aSkrXCIpXCIpLGRlKHQsXCJjaGFuZ2VcIix5ZShlLGkpLG51bGwsITApfSh0LHIsaSk7ZWxzZSBpZihcImlucHV0XCI9PT1vfHxcInRleHRhcmVhXCI9PT1vKSFmdW5jdGlvbih0LGUsbil7dmFyIHI9dC5hdHRyc01hcC50eXBlLGk9bnx8e30sbz1pLmxhenksYT1pLm51bWJlcixzPWkudHJpbSxjPSFvJiZcInJhbmdlXCIhPT1yLHU9bz9cImNoYW5nZVwiOlwicmFuZ2VcIj09PXI/TGk6XCJpbnB1dFwiLGw9XCIkZXZlbnQudGFyZ2V0LnZhbHVlXCI7cyYmKGw9XCIkZXZlbnQudGFyZ2V0LnZhbHVlLnRyaW0oKVwiKSxhJiYobD1cIl9uKFwiK2wrXCIpXCIpO3ZhciBmPXllKGUsbCk7YyYmKGY9XCJpZigkZXZlbnQudGFyZ2V0LmNvbXBvc2luZylyZXR1cm47XCIrZiksdWUodCxcInZhbHVlXCIsXCIoXCIrZStcIilcIiksZGUodCx1LGYsbnVsbCwhMCksKHN8fGEpJiZkZSh0LFwiYmx1clwiLFwiJGZvcmNlVXBkYXRlKClcIil9KHQscixpKTtlbHNlIGlmKCFKbi5pc1Jlc2VydmVkVGFnKG8pKXJldHVybiBtZSh0LHIsaSksITE7cmV0dXJuITB9LHRleHQ6ZnVuY3Rpb24odCxlKXtlLnZhbHVlJiZ1ZSh0LFwidGV4dENvbnRlbnRcIixcIl9zKFwiK2UudmFsdWUrXCIpXCIpfSxodG1sOmZ1bmN0aW9uKHQsZSl7ZS52YWx1ZSYmdWUodCxcImlubmVySFRNTFwiLFwiX3MoXCIrZS52YWx1ZStcIilcIil9fSxpc1ByZVRhZzpmdW5jdGlvbih0KXtyZXR1cm5cInByZVwiPT09dH0saXNVbmFyeVRhZzptbyxtdXN0VXNlUHJvcDpmaSxjYW5CZUxlZnRPcGVuVGFnOnlvLGlzUmVzZXJ2ZWRUYWc6JGksZ2V0VGFnTmFtZXNwYWNlOkd0LHN0YXRpY0tleXM6ZnVuY3Rpb24odCl7cmV0dXJuIHQucmVkdWNlKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuY29uY2F0KGUuc3RhdGljS2V5c3x8W10pfSxbXSkuam9pbihcIixcIil9KGlhKX0sYWE9cChmdW5jdGlvbih0KXtyZXR1cm4gdShcInR5cGUsdGFnLGF0dHJzTGlzdCxhdHRyc01hcCxwbGFpbixwYXJlbnQsY2hpbGRyZW4sYXR0cnNcIisodD9cIixcIit0OlwiXCIpKX0pLHNhPS9eXFxzKihbXFx3JF9dK3xcXChbXildKj9cXCkpXFxzKj0+fF5mdW5jdGlvblxccypcXCgvLGNhPS9eXFxzKltBLVphLXpfJF1bXFx3JF0qKD86XFwuW0EtWmEtel8kXVtcXHckXSp8XFxbJy4qPyddfFxcW1wiLio/XCJdfFxcW1xcZCtdfFxcW1tBLVphLXpfJF1bXFx3JF0qXSkqXFxzKiQvLHVhPXtlc2M6MjcsdGFiOjksZW50ZXI6MTMsc3BhY2U6MzIsdXA6MzgsbGVmdDozNyxyaWdodDozOSxkb3duOjQwLGRlbGV0ZTpbOCw0Nl19LGxhPWZ1bmN0aW9uKHQpe3JldHVyblwiaWYoXCIrdCtcIilyZXR1cm4gbnVsbDtcIn0sZmE9e3N0b3A6XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XCIscHJldmVudDpcIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1wiLHNlbGY6bGEoXCIkZXZlbnQudGFyZ2V0ICE9PSAkZXZlbnQuY3VycmVudFRhcmdldFwiKSxjdHJsOmxhKFwiISRldmVudC5jdHJsS2V5XCIpLHNoaWZ0OmxhKFwiISRldmVudC5zaGlmdEtleVwiKSxhbHQ6bGEoXCIhJGV2ZW50LmFsdEtleVwiKSxtZXRhOmxhKFwiISRldmVudC5tZXRhS2V5XCIpLGxlZnQ6bGEoXCInYnV0dG9uJyBpbiAkZXZlbnQgJiYgJGV2ZW50LmJ1dHRvbiAhPT0gMFwiKSxtaWRkbGU6bGEoXCInYnV0dG9uJyBpbiAkZXZlbnQgJiYgJGV2ZW50LmJ1dHRvbiAhPT0gMVwiKSxyaWdodDpsYShcIididXR0b24nIGluICRldmVudCAmJiAkZXZlbnQuYnV0dG9uICE9PSAyXCIpfSxwYT17b246ZnVuY3Rpb24odCxlKXt0LndyYXBMaXN0ZW5lcnM9ZnVuY3Rpb24odCl7cmV0dXJuXCJfZyhcIit0K1wiLFwiK2UudmFsdWUrXCIpXCJ9fSxiaW5kOmZ1bmN0aW9uKHQsZSl7dC53cmFwRGF0YT1mdW5jdGlvbihuKXtyZXR1cm5cIl9iKFwiK24rXCIsJ1wiK3QudGFnK1wiJyxcIitlLnZhbHVlK1wiLFwiKyhlLm1vZGlmaWVycyYmZS5tb2RpZmllcnMucHJvcD9cInRydWVcIjpcImZhbHNlXCIpKyhlLm1vZGlmaWVycyYmZS5tb2RpZmllcnMuc3luYz9cIix0cnVlXCI6XCJcIikrXCIpXCJ9fSxjbG9hazp5fSxkYT1mdW5jdGlvbih0KXt0aGlzLm9wdGlvbnM9dCx0aGlzLndhcm49dC53YXJufHxzZSx0aGlzLnRyYW5zZm9ybXM9Y2UodC5tb2R1bGVzLFwidHJhbnNmb3JtQ29kZVwiKSx0aGlzLmRhdGFHZW5GbnM9Y2UodC5tb2R1bGVzLFwiZ2VuRGF0YVwiKSx0aGlzLmRpcmVjdGl2ZXM9aChoKHt9LHBhKSx0LmRpcmVjdGl2ZXMpO3ZhciBlPXQuaXNSZXNlcnZlZFRhZ3x8Qm47dGhpcy5tYXliZUNvbXBvbmVudD1mdW5jdGlvbih0KXtyZXR1cm4hZSh0LnRhZyl9LHRoaXMub25jZUlkPTAsdGhpcy5zdGF0aWNSZW5kZXJGbnM9W119LHZhPShuZXcgUmVnRXhwKFwiXFxcXGJcIitcImRvLGlmLGZvcixsZXQsbmV3LHRyeSx2YXIsY2FzZSxlbHNlLHdpdGgsYXdhaXQsYnJlYWssY2F0Y2gsY2xhc3MsY29uc3Qsc3VwZXIsdGhyb3csd2hpbGUseWllbGQsZGVsZXRlLGV4cG9ydCxpbXBvcnQscmV0dXJuLHN3aXRjaCxkZWZhdWx0LGV4dGVuZHMsZmluYWxseSxjb250aW51ZSxkZWJ1Z2dlcixmdW5jdGlvbixhcmd1bWVudHNcIi5zcGxpdChcIixcIikuam9pbihcIlxcXFxifFxcXFxiXCIpK1wiXFxcXGJcIiksbmV3IFJlZ0V4cChcIlxcXFxiXCIrXCJkZWxldGUsdHlwZW9mLHZvaWRcIi5zcGxpdChcIixcIikuam9pbihcIlxcXFxzKlxcXFwoW15cXFxcKV0qXFxcXCl8XFxcXGJcIikrXCJcXFxccypcXFxcKFteXFxcXCldKlxcXFwpXCIpLGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiBuKG4scil7dmFyIGk9T2JqZWN0LmNyZWF0ZShlKSxvPVtdLGE9W107aWYoaS53YXJuPWZ1bmN0aW9uKHQsZSl7KGU/YTpvKS5wdXNoKHQpfSxyKXtyLm1vZHVsZXMmJihpLm1vZHVsZXM9KGUubW9kdWxlc3x8W10pLmNvbmNhdChyLm1vZHVsZXMpKSxyLmRpcmVjdGl2ZXMmJihpLmRpcmVjdGl2ZXM9aChPYmplY3QuY3JlYXRlKGUuZGlyZWN0aXZlc3x8bnVsbCksci5kaXJlY3RpdmVzKSk7Zm9yKHZhciBzIGluIHIpXCJtb2R1bGVzXCIhPT1zJiZcImRpcmVjdGl2ZXNcIiE9PXMmJihpW3NdPXJbc10pfXZhciBjPXQobixpKTtyZXR1cm4gYy5lcnJvcnM9byxjLnRpcHM9YSxjfXJldHVybntjb21waWxlOm4sY29tcGlsZVRvRnVuY3Rpb25zOmZ1bmN0aW9uKHQpe3ZhciBlPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJuIGZ1bmN0aW9uKG4scixpKXsocj1oKHt9LHIpKS53YXJuLGRlbGV0ZSByLndhcm47dmFyIG89ci5kZWxpbWl0ZXJzP1N0cmluZyhyLmRlbGltaXRlcnMpK246bjtpZihlW29dKXJldHVybiBlW29dO3ZhciBhPXQobixyKSxzPXt9LGM9W107cmV0dXJuIHMucmVuZGVyPVRuKGEucmVuZGVyLGMpLHMuc3RhdGljUmVuZGVyRm5zPWEuc3RhdGljUmVuZGVyRm5zLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gVG4odCxjKX0pLGVbb109c319KG4pfX19KGZ1bmN0aW9uKHQsZSl7dmFyIG49c24odC50cmltKCksZSk7ITEhPT1lLm9wdGltaXplJiZmdW5jdGlvbih0LGUpe3QmJihQbz1hYShlLnN0YXRpY0tleXN8fFwiXCIpLEZvPWUuaXNSZXNlcnZlZFRhZ3x8Qm4scG4odCksZG4odCwhMSkpfShuLGUpO3ZhciByPXluKG4sZSk7cmV0dXJue2FzdDpuLHJlbmRlcjpyLnJlbmRlcixzdGF0aWNSZW5kZXJGbnM6ci5zdGF0aWNSZW5kZXJGbnN9fSkob2EpLmNvbXBpbGVUb0Z1bmN0aW9ucyksaGE9ISFHbiYmRW4oITEpLG1hPSEhR24mJkVuKCEwKSx5YT1wKGZ1bmN0aW9uKHQpe3ZhciBlPVp0KHQpO3JldHVybiBlJiZlLmlubmVySFRNTH0pLGdhPVJ0LnByb3RvdHlwZS4kbW91bnQ7cmV0dXJuIFJ0LnByb3RvdHlwZS4kbW91bnQ9ZnVuY3Rpb24odCxlKXtpZigodD10JiZadCh0KSk9PT1kb2N1bWVudC5ib2R5fHx0PT09ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KXJldHVybiB0aGlzO3ZhciBuPXRoaXMuJG9wdGlvbnM7aWYoIW4ucmVuZGVyKXt2YXIgcj1uLnRlbXBsYXRlO2lmKHIpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHIpXCIjXCI9PT1yLmNoYXJBdCgwKSYmKHI9eWEocikpO2Vsc2V7aWYoIXIubm9kZVR5cGUpcmV0dXJuIHRoaXM7cj1yLmlubmVySFRNTH1lbHNlIHQmJihyPWZ1bmN0aW9uKHQpe2lmKHQub3V0ZXJIVE1MKXJldHVybiB0Lm91dGVySFRNTDt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBlLmFwcGVuZENoaWxkKHQuY2xvbmVOb2RlKCEwKSksZS5pbm5lckhUTUx9KHQpKTtpZihyKXt2YXIgaT12YShyLHtzaG91bGREZWNvZGVOZXdsaW5lczpoYSxzaG91bGREZWNvZGVOZXdsaW5lc0ZvckhyZWY6bWEsZGVsaW1pdGVyczpuLmRlbGltaXRlcnMsY29tbWVudHM6bi5jb21tZW50c30sdGhpcyksbz1pLnJlbmRlcixhPWkuc3RhdGljUmVuZGVyRm5zO24ucmVuZGVyPW8sbi5zdGF0aWNSZW5kZXJGbnM9YX19cmV0dXJuIGdhLmNhbGwodGhpcyx0LGUpfSxSdC5jb21waWxlPXZhLFJ0fSk7IiwidmFyIHNjcm9sbENvbXBvbmVudCA9IChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9IHtcclxuICAgICAgICBjdXJyZW50IDogMCxcclxuICAgICAgICBwcmV2aW91cyA6IDAsXHJcbiAgICAgICAgYmFja3VwIDogMFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBQUklWQVRFID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHNjcm9sbENoZWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNjcm9sbFBvc2l0aW9uLnByZXZpb3VzID0gc2Nyb2xsUG9zaXRpb24uY3VycmVudDtcclxuICAgICAgICBzY3JvbGxQb3NpdGlvbi5jdXJyZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCB3aW5kb3cucGFnZVlPZmZzZXQgfHwgd2luZG93LnNjcm9sbFk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qIHNjcm9sbCB0byAqL1xyXG4gICAgc2Nyb2xsTW92ZVRvID0gZnVuY3Rpb24gKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKCAwLCBwb3NpdGlvbiApO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKiBzYXZlIHNjcm9sbCBwb3NpdGlvbiAqL1xyXG4gICAgc2Nyb2xsU2F2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzY3JvbGxQb3NpdGlvbi5iYWNrdXAgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IHdpbmRvdy5wYWdlWU9mZnNldCB8fCB3aW5kb3cuc2Nyb2xsWTtcclxuICAgIH07XHJcblxyXG4gICAgLyogc2Nyb2xsIGVuYWJsZSAqL1xyXG4gICAgc2Nyb2xsRW5hYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJyc7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9ICcnO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKiBzY3JvbGwgZGlzYWJsZSAqL1xyXG4gICAgc2Nyb2xsRGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKiByZXR1cm4gZG93biB8fCB1cCAqL1xyXG4gICAgc2Nyb2xsRGlyZWN0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoIHNjcm9sbFBvc2l0aW9uLmN1cnJlbnQgPj0gc2Nyb2xsUG9zaXRpb24ucHJldmlvdXMgKSA/ICdkb3duJyA6ICd1cCc7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvLyBJTklUID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHNjcm9sbENoZWNrKCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgc2Nyb2xsQ2hlY2soKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyBQVUJMSUMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY3VycmVudCA6IGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgICAgICAgICAgaWYodHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgICAgIHNjcm9sbE1vdmVUbyh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxDaGVjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsQ2hlY2soKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzY3JvbGxQb3NpdGlvbi5jdXJyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaXJlY3Rpb24gOiBmdW5jdGlvbigpeyByZXR1cm4gc2Nyb2xsRGlyZWN0aW9uKCkgfSxcclxuICAgICAgICBlbmFibGUgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBzY3JvbGxFbmFibGUoKTtcclxuICAgICAgICAgICAgc2Nyb2xsTW92ZVRvKHNjcm9sbFBvc2l0aW9uLmJhY2t1cCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaXNhYmxlIDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgc2Nyb2xsU2F2ZSgpO1xyXG4gICAgICAgICAgICBzY3JvbGxEaXNhYmxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KCkpOyIsbnVsbCwidmFyIGdvYWxDb21wb25lbnQgPSAoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgc2VydmljZXMgPSB7XHJcbiAgICAgICAgeWFDb3VudGVySUQgOiBmYWxzZSxcclxuICAgICAgICBtYWlsUnVJRCA6IGZhbHNlLFxyXG4gICAgICAgIGdhVXNlZCA6IHRydWUsXHJcbiAgICAgICAgZmJxVXNlZCA6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgLy8gUFJJVkFURSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBnb2FsRG9uZSA9IGZ1bmN0aW9uIChnb2FsTmFtZSkge1xyXG4gICAgICAgIGlmKHNlcnZpY2VzLnlhQ291bnRlcklEICE9PScnICYmICB0eXBlb2Ygd2luZG93Wyd5YUNvdW50ZXInICsgc2VydmljZXMueWFDb3VudGVySURdICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgd2luZG93Wyd5YUNvdW50ZXInICsgc2VydmljZXMueWFDb3VudGVySURdLnJlYWNoR29hbChnb2FsTmFtZSwgZnVuY3Rpb24gKCkge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihzZXJ2aWNlcy5tYWlsUnVJRCAhPT0nJyAmJiB0eXBlb2YgX3RtciAhPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgIF90bXIucHVzaCh7IGlkOiBzZXJ2aWNlcy5tYWlsUnVJRCwgdHlwZTogJ3JlYWNoR29hbCcsIGdvYWw6IGdvYWxOYW1lIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihzZXJ2aWNlcy5nYVVzZWQgJiYgdHlwZW9mIGdhICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgZ2EoJ3NlbmQnLCAnZXZlbnQnLCAnYnV0dG9uJywgZ29hbE5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihzZXJ2aWNlcy5mYnFVc2VkICYmIHR5cGVvZiBmYnEgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICBmYnEoJ3RyYWNrJywgZ29hbE5hbWUsIHsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBkZWJ1ZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCAneWFDb3VudGVySUQ6ICcgKyAodHlwZW9mIHdpbmRvd1sneWFDb3VudGVyJyArIHNlcnZpY2VzLnlhQ291bnRlcklEXSAhPT0gXCJ1bmRlZmluZWRcIikgKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coICdnYVVzZWQ6ICcgKyAodHlwZW9mIGdhICE9PSBcInVuZGVmaW5lZFwiKSApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyggJ2ZicVVzZWQ6ICcgKyAodHlwZW9mIGZicSAhPT0gXCJ1bmRlZmluZWRcIikgKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coICdtYWlsUnVJRDogJyArICh0eXBlb2YgX3RtciAhPT0gXCJ1bmRlZmluZWRcIikgKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFBVQkxJQyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZWFjaCA6IGZ1bmN0aW9uKGdvYWxOYW1lLCBldmVudCl7XHJcbiAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgJyc7XHJcbiAgICAgICAgICAgIGlmKCBldmVudCA9PT0gXCJcIil7IGdvYWxEb25lKGdvYWxOYW1lKTsgfVxyXG4gICAgICAgICAgICBpZiggZXZlbnQgPT09IFwib25sb2FkXCIpeyB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7IGdvYWxEb25lKGdvYWxOYW1lKTsgfSB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWJ1ZyA6IGZ1bmN0aW9uKCl7IGRlYnVnKCk7IH1cclxuICAgIH1cclxufSgpKTtcclxuXHJcbiIsImZ1bmN0aW9uIE1lZGlhRXZlbnRMaXN0ZW5lcihxdWVyeU9wdGlvbil7XHJcbiAgICB2YXIgX3NlbGYgPSB0aGlzO1xyXG4gICAgX3NlbGYucmVzb2x1dGlvbkN1cnIgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIF9zZWxmLnJlc29sdXRpb25MYXN0ID0gMDtcclxuICAgIC8vIGRlZmF1bHQgZGV2aWNlIGJyZWFrcG9pbnRzINC40LvQuCDQuNC3INC+0L/RhtC40Lkg0L/RgNC4INC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4XHJcbiAgICBfc2VsZi5xdWVyaWVzID0gKHR5cGVvZiBxdWVyeU9wdGlvbiAhPT0gdW5kZWZpbmVkKSA/IHF1ZXJ5T3B0aW9uIDpbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnbW9iaWxlJyxcclxuICAgICAgICAgICAgbWluUmVzb2x1dGlvbjogMCxcclxuICAgICAgICAgICAgbWF4UmVzb2x1dGlvbjogNDE5LFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzRWFjaDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnbGFuZHNjYXBlJyxcclxuICAgICAgICAgICAgbWluUmVzb2x1dGlvbjogNDIwLFxyXG4gICAgICAgICAgICBtYXhSZXNvbHV0aW9uOiAxMDIzLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzRWFjaDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnZGVza3RvcCcsXHJcbiAgICAgICAgICAgIG1pblJlc29sdXRpb246IDEwMjQsXHJcbiAgICAgICAgICAgIG1heFJlc29sdXRpb246IDE5MjAsXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNFYWNoOiBmYWxzZSxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdlYWNoLXJlc2l6ZScsXHJcbiAgICAgICAgICAgIG1pblJlc29sdXRpb246IDAsXHJcbiAgICAgICAgICAgIG1heFJlc29sdXRpb246IDE5MjAwLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzRWFjaDogdHJ1ZSxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICAvLyDQtNC+0LHQsNCy0LvQtdC90LjQtSDRhNGD0L3QutGG0LjQuSDQvdCwINGA0LDQt9C90YvQtSDRgNCw0LfRgNC10YjQtdC90LjRj1xyXG4gICAgX3NlbGYuYWRkUXVlcnlBY3Rpb24gPSBmdW5jdGlvbihxdWVyeU5hbWUsIGZ1bmMpe1xyXG4gICAgICAgIF9zZWxmLnF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICAgICAgaWYoIGl0ZW0ubmFtZSA9PT0gcXVlcnlOYW1lKXtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2FsbGJhY2sucHVzaChmdW5jKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyDQstGL0L/QvtC70L3Rj9C10Lwg0YHQutGA0LjQv9GC0Ysg0LTQu9GPINC/0LXRgNC10YXQvtC00LAg0L3QsCDQutC+0L3QutGA0LXRgtC90L7QtSDRgNCw0LfRgNGI0LXQvdC10LjQtVxyXG4gICAgX3NlbGYuZG9RdWVyeUFjdGlvbiA9IGZ1bmN0aW9uKHF1ZXJ5TmFtZSl7XHJcbiAgICAgICAgX3NlbGYucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgICAgICAvLyDQuNGJ0LXQvCDQvdGD0LbQvdC+0LUg0YDQsNC30YDQtdGI0LXQvdC40LVcclxuICAgICAgICAgICAgaWYoIGl0ZW0ubmFtZSA9PT0gcXVlcnlOYW1lKXtcclxuICAgICAgICAgICAgICAgIC8vINC30LDQv9GD0YHQutCw0LXQvCDQstGB0LUg0LrQvtC70LHRjdC60LhcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2FsbGJhY2suZm9yRWFjaChmdW5jdGlvbihpdGVtKXsgaXRlbSgpOyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgLy8g0L/RgNC+0LLQtdGA0LrQsCDQsNC60YLQuNCy0L3Ri9GFINC80LXQtNC40LAg0LfQsNC/0YDQvtGB0L7QslxyXG4gICAgX3NlbGYucmVzaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vINC+0L/RgNC10LTQtdC70Y/QtdC8INGC0LXQutGD0YnQtdC1INGA0LDQt9GA0LXRiNC10L3QuNC1XHJcbiAgICAgICAgX3NlbGYucmVzb2x1dGlvbkN1cnIgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICAvLyDQv9GA0L7RhdC+0LTQuNC8INC/0L4g0LLRgdC10Lwg0YDQsNC30YDQtdGI0LXQvdC40Y/QvFxyXG4gICAgICAgIF9zZWxmLnF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbihzY3JlZW4pe1xyXG4gICAgICAgICAgICBpZiggc2NyZWVuLm1pblJlc29sdXRpb24gPD0gX3NlbGYucmVzb2x1dGlvbkN1cnIgJiYgX3NlbGYucmVzb2x1dGlvbkN1cnIgPD0gc2NyZWVuLm1heFJlc29sdXRpb24gKXtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQstGL0L/QvtC70L3Rj9C10Lwg0L/QvtC00LLQtdGI0LXQvdGL0LUg0YHQutGA0LjQv9GC0YssINC10YHQu9C4INC90LAg0Y3RgtC+0Lwg0YDQsNC30YDQtdGI0LXQvdC40LUg0LjRhSDQvdGD0LbQvdC+INCy0YvQv9C+0LvQvdGP0YLRjCDQv9GA0Lgg0LrQsNC20LTQvtC8INGA0LXRgdCw0LnQt9C1XHJcbiAgICAgICAgICAgICAgICBpZihzY3JlZW4uaXNFYWNoKXsgX3NlbGYuZG9RdWVyeUFjdGlvbihzY3JlZW4ubmFtZSk7IH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQtdGB0LvQuCDRgdC80LXQvdC40LvQvtGB0Ywg0L3QsCDQsNC60YLQuNCy0L3QvtC1LCDRgtC+INCy0YvQv9C+0LvQvdGP0LXQvCDQv9C+0LTQstC10YjQtdC90YvQtSDRgdC60YDQuNC/0YLRi1xyXG4gICAgICAgICAgICAgICAgaWYoIXNjcmVlbi5pc0FjdGl2ZSAmJiAhc2NyZWVuLmlzRWFjaCl7IF9zZWxmLmRvUXVlcnlBY3Rpb24oc2NyZWVuLm5hbWUpOyB9XHJcbiAgICAgICAgICAgICAgICBzY3JlZW4uaXNBY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vINC40L3QsNGH0LUg0L/QtdGA0LXQutC70Y7Rh9Cw0LXQvCDRhNC70LDQsywg0LXRgdC70Lgg0YDQsNC30YDQtdGI0LXQvdC40LUg0L3QtdCw0LrRgtC40LLQvdC+XHJcbiAgICAgICAgICAgICAgICBzY3JlZW4uaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vINC30LDQv9C+0LzQuNC90LDQtdC8INGA0LDQt9GA0LXRiNC10L3QuNC1XHJcbiAgICAgICAgX3NlbGYucmVzb2x1dGlvbkxhc3QgPSAgX3NlbGYucmVzb2x1dGlvbkN1cnI7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICAvLyDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjRj1xyXG4gICAgX3NlbGYuaW5pdCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8g0LfQsNC/0YPRgdC60LDQtdC8INC/0YDQvtGF0L7QtCDQv9C+INCy0YHQtdC8INGA0LDQt9GA0LXRiNC10L3QuNGP0Lwg0LTQu9GPINC/0LXRgNCy0L7QuSDQt9Cw0LPRgNGD0LfQutC4XHJcbiAgICAgICAgX3NlbGYucmVzaXplKCk7XHJcbiAgICAgICAgLy8g0Lgg0LLQtdGI0LDQtdC8INC+0LHRgNCw0LHQvtGC0YfQuNC6INC90LAg0LLRgdC1INC/0L7RgdC70LXQtNGD0YnRjtC40LUg0YDQtdGB0LDQudC30YtcclxuICAgICAgICB3aW5kb3cub25yZXNpemUgPSAgZnVuY3Rpb24gcmVzaXplKCl7XHJcbiAgICAgICAgICAgIF9zZWxmLnJlc2l6ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIF9zZWxmLmRlYnVnID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCBfc2VsZi5xdWVyaWVzICk7XHJcbiAgICB9O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4iLCIoZnVuY3Rpb24oICQgKXtcclxuXHJcbiAgICB2YXIgZGVmYXVsdHMgPSB7XHJcbiAgICAgICAgLy8g0LTQtdGE0L7Qu9GC0L3Ri9C1INC+0L/RhtC40LhcclxuICAgICAgICBtaW5SZXNvbHV0aW9uOiAxMDAwLFxyXG4gICAgICAgIGV4dHJhV2lkdGg6IDYxXHJcbiAgICB9O1xyXG4gICAgdmFyIHN0YXRlcyA9e1xyXG4gICAgICAgIGhhc0V4dHJhOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgbWV0aG9kcyA9IHtcclxuXHJcbiAgICAgICAgaW5pdCA6IGZ1bmN0aW9uKCBvcHRpb25zICkge1xyXG5cclxuICAgICAgICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVudVJvb3QgPSAkKHRoaXMpLmZpbmQoJ3VsJykubm90KCd1bCB1bCcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lbnVJdGVtcyA9IG1lbnVSb290LmZpbmQoJ2xpJykubm90KCdsaSBsaScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lcldpZHRoID0gbWVudVJvb3Qud2lkdGgoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBtZXRob2RzLmFkZEV4dHJhQmFyKG1lbnVSb290LCBtZW51SXRlbXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcldpZHRoID0gbWVudVJvb3Qud2lkdGgoKTtcclxuICAgICAgICAgICAgICAgIG1ldGhvZHMuaGlkZUl0ZW0obWVudVJvb3QsIG1lbnVJdGVtcywgY29udGFpbmVyV2lkdGgsIG9wdGlvbnMuZXh0cmFXaWR0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29udGFpbmVyV2lkdGggPSBtZW51Um9vdC53aWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcldpZHRoID0gbWVudVJvb3Qud2lkdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IG9wdGlvbnMubWluUmVzb2x1dGlvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZHMuaGlkZUl0ZW0obWVudVJvb3QsIG1lbnVJdGVtcywgY29udGFpbmVyV2lkdGgsIG9wdGlvbnMuZXh0cmFXaWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICByZXNpemUgOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGFkZEV4dHJhQmFyOiBmdW5jdGlvbiAobWVudVJvb3QsIG1lbnVJdGVtcykge1xyXG4gICAgICAgICAgICB2YXIgZXh0cmFiYXJDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBtZW51SXRlbXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgZXh0cmFiYXJDb250ZW50ID0gZXh0cmFiYXJDb250ZW50ICsgbWVudUl0ZW1zLmVxKGkpLmdldCgwKS5vdXRlckhUTUw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1lbnVSb290LmFwcGVuZChcclxuICAgICAgICAgICAgICAgICc8bGkgY2xhc3M9XCJtZW51LXRvcF9faXRlbSAtZXh0cmFCYXIgLWhhcy1kcm9wLWRvd24gLWRyb3AtZG93bi1pbnZlcnNlXCI+JyArXHJcbiAgICAgICAgICAgICAgICAnPGJ1dHRvbiBjbGFzcz1cIm1lbnUtdG9wX19pdGVtLW5hbWVcIj4uLi48L2J1dHRvbj4nICtcclxuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibWVudS10b3BfX2Ryb3AtZG93blwiPicgK1xyXG4gICAgICAgICAgICAgICAgJzx1bCBjbGFzcz1cIm1lbnUtdG9wX19saXN0XCI+JyArXHJcbiAgICAgICAgICAgICAgICBleHRyYWJhckNvbnRlbnQgK1xyXG4gICAgICAgICAgICAgICAgJzwvdWw+JyArXHJcbiAgICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnPC9saT4nXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG1lbnVSb290LmZpbmQoJy4tZXh0cmFCYXIgLm1lbnUtdG9wX19kcm9wLWRvd24gLm1lbnUtdG9wX19kcm9wLWRvd24nKS5yZW1vdmUoKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDRg9C00LDQu9GP0LXRgiDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3Rg9GOINCy0YvQv9Cw0LTQsNGI0LrRg1xyXG4gICAgICAgIHJlbW92ZUV4dHJhQmFyIDogZnVuY3Rpb24gKG1lbnVSb290KSB7XHJcbiAgICAgICAgICAgIG1lbnVSb290LmZpbmQoJy4tZXh0cmFCYXInKS5yZW1vdmUoKTtcclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgLy8g0L/RgNC+0LLQtdGA0Y/QtdGCINGN0LvQtdC80LXQvdGC0YssINC10YHQu9C4INGN0LvQtdC80LXQvdGC0YMg0L3QtSDRhdCy0LDRgtCw0LXRgiDQvNC10YHRgtCwLCDRgtC+INGB0LrRgNGL0LLQsNC10YIg0LXQs9C+XHJcbiAgICAgICAgaGlkZUl0ZW0gOiBmdW5jdGlvbiAobWVudVJvb3QsIG1lbnVJdGVtcywgY29udGFpbmVyV2lkdGgsIGV4dHJhV2lkdGgpIHtcclxuICAgICAgICAgICAgLy8g0L/QvtC00LPQvtGC0LDQstC70LjQstCw0LXQvCDQstGL0L/QsNC00LDRiNC60YMg0LTRg9Cx0LvRkdGA0LBcclxuICAgICAgICAgICAgdmFyIGR1YmxlciA9IG1lbnVSb290LmZpbmQoJy4tZXh0cmFCYXInKTtcclxuICAgICAgICAgICAgdmFyIGR1Ymxlckxpc3QgPSBkdWJsZXIuZmluZCgnLm1lbnUtdG9wX19pdGVtJyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGR1Ymxlckxpc3QpO1xyXG4gICAgICAgICAgICBkdWJsZXIucmVtb3ZlQ2xhc3MoJy1oaWRkZW4nKTtcclxuICAgICAgICAgICAgbWVudUl0ZW1zLnJlbW92ZUNsYXNzKCctaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHZhciBkZWJ1Z0xvZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NvbnRhaW5lcldpZHRoICcgKyBjb250YWluZXJXaWR0aCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgd2lkdGggPSBjb250YWluZXJXaWR0aDtcclxuICAgICAgICAgICAgdmFyIHN1bVdpZHRoID0gMDtcclxuICAgICAgICAgICAgc3RhdGVzLmhhc0V4dHJhID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBtZW51SXRlbXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsV2lkdGggPSBtZW51SXRlbXMuZXEoaSkud2lkdGgoKTtcclxuICAgICAgICAgICAgICAgIGlmKGRlYnVnTG9nKXtjb25zb2xlLmxvZyhtZW51SXRlbXMuZXEoaSkuY2hpbGRyZW4oJ2EnKS5odG1sKCksIGVsV2lkdGgsIHN1bVdpZHRoICsgZWxXaWR0aCk7fVxyXG4gICAgICAgICAgICAgICAgLy8g0L/RgNC+0LLQtdGA0Y/QtdC8INCy0LvQsNC30LjRgiDQu9C4INGC0LXQutGD0YnQuNC5INC/0YPQvdC60YJcclxuICAgICAgICAgICAgICAgIGlmKHN1bVdpZHRoICsgZWxXaWR0aCA8PSB3aWR0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g0LTQsDpcclxuICAgICAgICAgICAgICAgICAgICAvLyDQv9GA0L7QstC10YDRj9C10Lwg0Y3RgtC+INC/0L7RgdC70LXQtNC90LjQuSDQv9GD0L3QutGCXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZGVidWdMb2cpe2NvbnNvbGUubG9nKCfQv9GA0L7QstC10YDRj9C10Lwg0LLQu9Cw0LfQuNGCINC70Lgg0YLQtdC60YPRidC40Lkg0L/Rg9C90LrRgiAtICDQtNCwJyk7fVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGkgPT09IG1lbnVJdGVtcy5sZW5ndGgtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINC00LA6INGD0LTQsNC70Y/QtdC8INC80L3QvtCz0L7RgtC+0YfQuNC1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1Ymxlci5yZW1vdmVDbGFzcygnLWhpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkdWJsZXJMaXN0LmVxKGkpLmFkZENsYXNzKCctaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRlYnVnTG9nKXtjb25zb2xlLmxvZygn0L/RgNC+0LLQtdGA0Y/QtdC8INGN0YLQviDQv9C+0YHQu9C10LTQvdC40Lkg0L/Rg9C90LrRgiAtICDQtNCwJyk7fVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINC90LXRgjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0L/RgNC+0LLQtdGA0Y/QtdC8INC+0YHRgtCw0LvQvtGB0Ywg0LvQuCDQvNC10YHRgtC+INC00LvRjyDQvNC90L7Qs9C+0YLQvtGH0LjRj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkZWJ1Z0xvZyl7Y29uc29sZS5sb2coJ9C/0YDQvtCy0LXRgNGP0LXQvCDRjdGC0L4g0L/QvtGB0LvQtdC00L3QuNC5INC/0YPQvdC60YIgLSAg0L3QtdGCJyk7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzdW1XaWR0aCArIGVsV2lkdGggKyBleHRyYVdpZHRoIDw9IHdpZHRoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINC00LA6INC/0LXRgNC10YXQvtC00LjQvCDQuiDRgdC70LXQtNGD0Y7RidC10LzRgyDQv9GD0L3QutGC0YNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRlYnVnTG9nKXtjb25zb2xlLmxvZygn0L/RgNC+0LLQtdGA0Y/QtdC8INC+0YHRgtCw0LvQvtGB0Ywg0LvQuCDQvNC10YHRgtC+INC00LvRjyDQvNC90L7Qs9C+0YLQvtGH0LjRjyAtICDQtNCwJyk7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVibGVyTGlzdC5lcShpKS5hZGRDbGFzcygnLWhpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0L3QtdGCOiDQv9C+0LrQsNC30YvQstCw0LXQvCDQvNC90L7Qs9C+0YLQvtGH0LjQtSDQstC80LXRgdGC0L4g0Y3RgtC+0LPQviDQv9GD0L3QutGC0LBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtcy5lcShpKS5hZGRDbGFzcygnLWhpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGVidWdMb2cpe2NvbnNvbGUubG9nKCfQv9GA0L7QstC10YDRj9C10Lwg0L7RgdGC0LDQu9C+0YHRjCDQu9C4INC80LXRgdGC0L4g0LTQu9GPINC80L3QvtCz0L7RgtC+0YfQuNGPIC0gINC90LXRgicpO31cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vINC90LXRgjog0L/QvtC60LDQt9GL0LLQsNC10Lwg0LzQvdC+0LPQvtGC0L7Rh9C40LUg0LLQvNC10YHRgtC+INGN0YLQvtCz0L4g0L/Rg9C90LrRgtCwXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZGVidWdMb2cpe2NvbnNvbGUubG9nKCfQv9GA0L7QstC10YDRj9C10Lwg0LLQu9Cw0LfQuNGCINC70Lgg0YLQtdC60YPRidC40Lkg0L/Rg9C90LrRgiAtICDQvdC10YInKTt9XHJcbiAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW1zLmVxKGkpLmFkZENsYXNzKCctaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVzLmhhc0V4dHJhID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzdW1XaWR0aCA9IHN1bVdpZHRoICsgZWxXaWR0aDtcclxuICAgICAgICAgICAgICAgIGlmKGRlYnVnTG9nKXtjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO31cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIXN0YXRlcy5oYXNFeHRyYSl7XHJcbiAgICAgICAgICAgICAgICBkdWJsZXIuYWRkQ2xhc3MoJy1oaWRkZW4nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgJC5mbi5tZW51U21hcnQgPSBmdW5jdGlvbihtZXRob2QpIHtcclxuXHJcbiAgICAgICAgaWYgKCBtZXRob2RzW21ldGhvZF0gKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXRob2RzWyBtZXRob2QgXS5hcHBseSggdGhpcywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMSApKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlb2YgbWV0aG9kID09PSAnb2JqZWN0JyB8fCAhIG1ldGhvZCApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZHMuaW5pdC5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJC5lcnJvciggJ9Cc0LXRgtC+0LQgJyArICBtZXRob2QgKyAnINC90LUg0YHRg9GJ0LXRgdGC0LLRg9C10YIg0LIgalF1ZXJ5Lm1lbnVTbWFydCcgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbn0pKCBqUXVlcnkgKTsiLCJmdW5jdGlvbiBpbml0TWVudU1vYmlsZShpZCwgZGF0YSkge1xyXG5cclxuICAgIHZhciBtZW51TW9iaWxlID0gbmV3IFZ1ZSh7XHJcbiAgICAgICAgZWw6ICcjbWVudS1tb2JpbGUtJyArIGlkLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZWw6ICcjbWVudS1tb2JpbGUtJyArIGlkLFxyXG4gICAgICAgICAgICB0cmVlOiBkYXRhLFxyXG4gICAgICAgICAgICBhY3RpdmVOb2RlOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogZGF0YVswXS5pZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGRhdGFbMF0ubmFtZSxcclxuICAgICAgICAgICAgICAgIHBhcmVudElkOiBkYXRhWzBdLnBhcmVudElkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZW1wbGF0ZTpcclxuICAgICAgICAnPHRyYW5zaXRpb24gbmFtZT1cIm1lbnUtbW9iaWxlLXRvZ2dsZVwiIG1vZGU9XCJvdXQtaW5cIj4nICtcclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtZW51LW1vYmlsZVwiIGlkPVwibWVudS1tb2JpbGUtJyArIGlkICsgJ1wiIHYtaWY9XCJzaG93XCI+JyArXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbWVudS1tb2JpbGUtaGVhZGVyIGJlZ2luXHJcbiAgICAgICAgICAgICAgICAnPHRyYW5zaXRpb24gbmFtZT1cIm1lbnUtbW9iaWxlLWhlYWRlci10b2dnbGVcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1lbnUtbW9iaWxlX19oZWFkZXJcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtZW51LW1vYmlsZV9fdGl0bGVcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8YnV0dG9uIGNsYXNzPVwibWVudS1tb2JpbGVfX3RpdGxlLWJ0blwiIDpkYXRhLW5vZGU9XCJhY3RpdmVOb2RlLmlkXCIgdi1vbjpjbGljay5wcmV2ZW50PVwiYWN0aXZlUGFyZW50Tm9kZVwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8aSBjbGFzcz1cIm1lbnUtbW9iaWxlX19pY29uLWFycm93LXJpZ2h0XCIgdi1pZj1cImFjdGl2ZU5vZGUuaWRcIj48L2k+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3t7IGFjdGl2ZU5vZGUubmFtZSB9fScgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvYnV0dG9uPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8YnV0dG9uIGNsYXNzPVwibWVudS1tb2JpbGVfX3N3aXRjaGVyLWJ0blwiIHYtb246Y2xpY2sucHJldmVudD1cImNsb3NlTWVudVwiPjxzcGFuPjwvc3Bhbj48L2J1dHRvbj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnPC90cmFuc2l0aW9uPicgK1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIG1lbnUtbW9iaWxlX19saXN0IGJlZ2luXHJcbiAgICAgICAgICAgICAgICAnPHVsIGNsYXNzPVwibWVudS1tb2JpbGVfX2xpc3RcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPHRlbXBsYXRlICB2LWZvcj1cIml0ZW0gaW4gdHJlZVwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8bWVudS1tb2JpbGUtaXRlbSB2LWlmPVwiaXRlbS5wYXJlbnRJZCA9PT0gYWN0aXZlTm9kZS5pZFwiIHYtYmluZDppdGVtPVwiaXRlbVwiIDprZXk9XCJpdGVtLmlkXCIgPjwvbWVudS1tb2JpbGUtaXRlbT4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPC90ZW1wbGF0ZT4nICtcclxuICAgICAgICAgICAgICAgICc8L3VsPicgK1xyXG5cclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICc8L3RyYW5zaXRpb24+JyxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGdldE5vZGVQYXJhbTogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuaWQgPSBpbnB1dC5pZDtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5uYW1lID0gaW5wdXQubmFtZTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wYXJlbnRJZCA9IGlucHV0LnBhcmVudElkO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2xvc2VNZW51OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAkKCB0aGlzLmVsKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZU5vZGUgPSBtZW51TW9iaWxlLmdldE5vZGVQYXJhbSggdGhpcy50cmVlWzBdICk7XHJcbiAgICAgICAgICAgICAgICBhcHAuc2Nyb2xsLmVuYWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFjdGl2ZVBhcmVudE5vZGU6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYoIHRoaXMuYWN0aXZlTm9kZS5wYXJlbnRJZCAhPT0gbnVsbCApe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRJZCA9IHRoaXMuYWN0aXZlTm9kZS5wYXJlbnRJZDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbWVudU1vYmlsZS50cmVlLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lbnVNb2JpbGUudHJlZVtpXS5pZCA9PT0gcGFyZW50SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVNb2JpbGUuYWN0aXZlTm9kZSA9IG1lbnVNb2JpbGUuZ2V0Tm9kZVBhcmFtKCBtZW51TW9iaWxlLnRyZWVbaV0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVudU1vYmlsZS5jbG9zZU1lbnUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICAnbWVudS1tb2JpbGUtaXRlbSc6IHtcclxuICAgICAgICAgICAgICAgIHByb3BzOiBbJ2l0ZW0nLCAnYWN0aXZlTm9kZSddLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6XHJcbiAgICAgICAgICAgICAgICAnPHRyYW5zaXRpb24gbmFtZT1cIm1lbnUtbW9iaWxlLWl0ZW0tc2hvd1wiIG1vZGU9XCJvdXQtaW5cIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPGxpIGNsYXNzPVwibWVudS1tb2JpbGVfX2l0ZW1cIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzxhIGNsYXNzPVwibWVudS1tb2JpbGVfX2l0ZW0tbmFtZVwiIHYtYmluZDpocmVmPVwiaXRlbS5ocmVmXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAne3sgaXRlbS5uYW1lIH19JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQuNC60L7QvdC60LAg0YHQviDRgdGC0YDQtdC70LrQvtC5LCDQtNC70Y8g0Y3Qu9C10LzQtdC90YLQvtCyINCx0LXQtyDQv9C+0YLQvtC80LrQvtCyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIHYtaWY9XCIhaXRlbS5oYXNDaGlsZFwiIGNsYXNzPVwibWVudS1tb2JpbGVfX2l0ZW0tYnRuXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8aSBjbGFzcz1cIm1lbnUtbW9iaWxlX19pY29uLWFycm93LWxlZnRcIj48L2k+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8L2E+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQtNC70Y8g0Y3Qu9C10LzQtdC90YLQvtCyINGBINC/0L7QtNC60LDRgtC10LPQvtGA0LjRj9C80Lgg0LTQvtCx0LDQstC70Y/QtdC8INC60L3QvtC/0L7Rh9C60YMg0L/QvtC60LDQt9GL0LLQsNGO0YnRg9GOINGN0YLQuCDQv9C+0LTRgNCw0LfQtNC10LvRi1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxidXR0b24gdi1pZj1cIml0ZW0uaGFzQ2hpbGRcIiBjbGFzcz1cIm1lbnUtbW9iaWxlX19pdGVtLWJ0biBoYXNDaGlsZFwiICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJzaG93Q2hpbGRcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8aSBjbGFzcz1cIm1lbnUtbW9iaWxlX19pY29uLW1vcmVcIj48L2k+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L2J1dHRvbj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPC9saT4nICtcclxuICAgICAgICAgICAgICAgICc8L3RyYW5zaXRpb24+JyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q2hpbGQ6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51TW9iaWxlLmFjdGl2ZU5vZGUgPSBtZW51TW9iaWxlLmdldE5vZGVQYXJhbSggdGhpcy5fcHJvcHMuaXRlbSApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBtZW51TW9iaWxlO1xyXG59XHJcblxyXG5cclxuIiwiZnVuY3Rpb24gTWVudU1vYmlsZShvcHRpb25zKXtcclxuXHJcbiAgICAvLyDQlNC10YDQtdCy0L4g0LzQtdC90Y4sINCy0LrQu9GO0YfQsNC10YIg0LIg0YHQtdCx0Y8g0YLQvtC70YzQutC+INGD0LfQu9GLLCDQu9C40YHRgtGM0Y8g0LjQs9C90L7RgNC40YDRg9GO0YLRgdGPXHJcblxyXG5cclxuICAgIHZhciB0ZXh0ID0ge1xyXG4gICAgICAgIHJvb3RUaXRsZTogJ9Cc0LXQvdGOJ1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc2VsZWN0b3JzID0ge1xyXG4gICAgICAgIGNvbnRhaW5lcjogJy5qcy1tZW51LW1vYmlsZScsXHJcbiAgICAgICAgbm9kZVJvb3Q6ICdbZGF0YS1tZW51LW1vYmlsZS0tcm9vdF0nLFxyXG4gICAgICAgIG5vZGVMaW5rOiAnW2RhdGEtbWVudS1tb2JpbGUtLWl0ZW0tbmFtZV0nLFxyXG4gICAgICAgIG5vZGU6ICdkYXRhLW1lbnUtbW9iaWxlLS1oYXMtZHJvcC1kb3duJyxcclxuICAgICAgICBidG5Ub2dnbGU6ICdbZGF0YS1tZW51LW1vYmlsZS0tc3dpdGNoZXItYnRuXSdcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGlkID0gTWF0aC5yb3VuZCggTWF0aC5yYW5kb20oKSoxMDAwMCk7XHJcblxyXG5cclxuICAgIC8vINC/0LXRgNC10L7Qv9GA0LXQtNC10LvRj9C10Lwg0L/QtdGA0LXQvNC10L3QvdGL0LUg0LXRgdC70Lgg0L3QsNC00L4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS9cclxuXHJcbiAgICAvLyDQv9C10YDQtdC+0L/RgNC10LTQtdC70Y/QtdC8INGB0LLQvtC50YHRgtCy0LAsINC10YHQu9C4INGN0YLQviDQvdC10L7QsdGF0L7QtNC40LzQvlxyXG4gICAgZnVuY3Rpb24gc2V0T3B0aW9ucyhjb250YWluZXIpe1xyXG4gICAgICAgIC8vIHRleHQgPSAkLmV4dGVuZCh7fSwgc2VsZWN0b3JzLCBvcHRpb25zLnRleHQpO1xyXG4gICAgICAgIC8vIHNlbGVjdG9ycyA9ICQuZXh0ZW5kKHt9LCBzZWxlY3RvcnMsIG9wdGlvbnMuc2VsZWN0b3JzKTtcclxuICAgICAgICB0ZXh0LnJvb3RUaXRsZSA9ICQoY29udGFpbmVyKS5maW5kKHNlbGVjdG9ycy5idG5Ub2dnbGUpLnRleHQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDRgNCw0LHQvtGC0LAg0YEg0LTQtdGA0LXQstC+0LwgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0vXHJcblxyXG4gICAgZnVuY3Rpb24gYnVpbGRNZW51KG5vZGVSb290KXtcclxuICAgICAgICB2YXIgdHJlZSA9IFtdO1xyXG4gICAgICAgIHZhciBfaWQgPSAwO1xyXG4gICAgICAgIC8vINC30LDQtNCw0ZHQvCDQutC+0YDQtdC90YxcclxuICAgICAgICB0cmVlLnB1c2goeyBpZDogX2lkLCBuYW1lOiB0ZXh0LnJvb3RUaXRsZSwgZWxlbWVudExpbms6IG5vZGVSb290LCBoYXNDaGlsZDogdHJ1ZSwgcGFyZW50SWQ6IG51bGwgfSk7XHJcbiAgICAgICAgLy8g0YDQtdC60YPRgNGB0LjQstC90L4g0YHRgtGA0L7QuNC8INC+0YHRgtCw0LvRjNC90L7QtSDQtNC10YDQtdCy0L5cclxuICAgICAgICBmdW5jdGlvbiBidWlsZChwYXJlbnROb2RlKXtcclxuICAgICAgICAgICAgdmFyIHBhcmVudCA9ICQocGFyZW50Tm9kZS5lbGVtZW50TGluayk7XHJcbiAgICAgICAgICAgIHZhciBlbCA9IHBhcmVudC5maW5kKCdsaScpLm5vdCggcGFyZW50LmZpbmQoJ2xpIGxpJykpO1xyXG4gICAgICAgICAgICBlbC5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF9pZCsrO1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJOb2RlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJCh0aGlzKS5jaGlsZHJlbihzZWxlY3RvcnMubm9kZUxpbmspLnRleHQoKSxcclxuICAgICAgICAgICAgICAgICAgICBocmVmOiAkKHRoaXMpLmNoaWxkcmVuKHNlbGVjdG9ycy5ub2RlTGluaykuYXR0cignaHJlZicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRMaW5rOiAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc0NoaWxkOiAgJCh0aGlzKS5hdHRyKHNlbGVjdG9ycy5ub2RlKSAhPSBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudElkOiBwYXJlbnROb2RlLmlkXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdHJlZS5wdXNoKGN1cnJOb2RlKTtcclxuICAgICAgICAgICAgICAgIGlmKGN1cnJOb2RlLmhhc0NoaWxkKXsgIGJ1aWxkKGN1cnJOb2RlKSB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZCggZ2V0Tm9kZVJvb3QodHJlZSkgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRyZWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyTWVudSh0cmVlKXtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0cmVlKTtcclxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCcnICtcclxuICAgICAgICAgICAgJzxtZW51LW1vYmlsZSBjbGFzcz1cIm1lbnUtbW9iaWxlXCIgaWQ9XCJtZW51LW1vYmlsZS0nICsgaWQgKyAnXCI+PC9tZW51LW1vYmlsZT4nXHJcbiAgICAgICAgKTtcclxuICAgICAgICB2YXIgdnVlTWVudU1vYmlsZSA9IGluaXRNZW51TW9iaWxlKGlkLCB0cmVlKTtcclxuICAgICAgICByZXR1cm4gdnVlTWVudU1vYmlsZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQstGB0L/QvtC80L7Qs9Cw0YLQtdC70YzQvdGL0LUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09L1xyXG5cclxuICAgIC8vINCf0L7Qu9GD0YfQtdC90LjRjyDRg9C30LvQsCDQv9C+IElEXHJcbiAgICBmdW5jdGlvbiBnZXROb2RlQnlJZChpZCwgdHJlZSl7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgLy/QuNGJ0LXQvCDRjdC70LXQvNC10L3RgiDRgSDQt9Cw0LTQsNC90L3Ri9C8IGlkXHJcbiAgICAgICAgdHJlZS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgICAgICBpZiggaXRlbS5pZCA9PSBpZCApe1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gaXRlbTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vINC10YHQu9C4INGN0LvQtdC80LXQvdGC0LAg0YEg0YLQsNC60LjQvCBpZCDQvdC10YIsINGC0L4g0LLQvtC30LLRgNCw0YnQsNC10LwgbnVsbFxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0J/QvtC70YPRh9C10L3QuNGPINC60L7RgNC90Y9cclxuICAgIGZ1bmN0aW9uIGdldE5vZGVSb290KHRyZWUpe1xyXG4gICAgICAgIHJldHVybiBnZXROb2RlQnlJZCgwLCB0cmVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8g0J7QsdGA0LDQsdC+0YLQutCwINGB0L7QsdGL0YLQuNC5ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0vXHJcblxyXG4gICAgZnVuY3Rpb24gYWRkSGFuZGxlclRvZ2dsZUJ0bihjb250YWluZXIsIHZ1ZU1lbnVNb2JpbGUpe1xyXG4gICAgICAgICQoY29udGFpbmVyKS5vbignY2xpY2snLCBzZWxlY3RvcnMuYnRuVG9nZ2xlLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZ1ZU1lbnVNb2JpbGUuc2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgIGFwcC5zY3JvbGwuZGlzYWJsZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGluaXRpYWxpemUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0vXHJcbiAgICAkKHNlbGVjdG9ycy5jb250YWluZXIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNldE9wdGlvbnMoJCh0aGlzKSk7ICAvLyDQv9C10YDQtdC+0L/RgNC10LTQtdC70Y/QtdC8INGB0LLQvtC50YHRgtCy0LAsINC10YHQu9C4INGN0YLQviDQvdC10L7QsdGF0L7QtNC40LzQvlxyXG4gICAgICAgIHZhciB0cmVlID0gYnVpbGRNZW51KCQodGhpcykuZmluZChzZWxlY3RvcnMubm9kZVJvb3QpKTsgIC8vINGB0L7Qt9C00LDRkdC8INC80L7QtNC10LvRjCDQvNC10L3RjlxyXG4gICAgICAgIHZhciB2dWVNZW51TW9iaWxlID0gcmVuZGVyTWVudSh0cmVlKTsgICAvLyDRgNC10L3QtdC00LXRgNC40Lwg0LzQtdC90Y4sINC60L7Qu9Cx0Y3QutC+0Lwg0L3QsNCy0LXRiNC40LLQsNC10Lwg0L7QsdGA0LDQsdC+0YLRh9C40LrQuFxyXG4gICAgICAgIGFkZEhhbmRsZXJUb2dnbGVCdG4odGhpcywgdnVlTWVudU1vYmlsZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBwdWJsaWMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09L1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuIiwidmFyIFRhYmxlcyA9IChmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vIHByaXZhdGUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgd3JhcFRhYmxlcyA9IGZ1bmN0aW9uICh0YWJsZVNlbGVjdG9yKXtcclxuICAgICAgICAkKHRhYmxlU2VsZWN0b3IpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY3VyclRhYmxlID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgLy8gdmFyIGNsYXNzTmFtZSA9IFwidGFibGUtcmVzcG9uc2l2ZVwiO1xyXG4gICAgICAgICAgICAvLyBpZihjdXJyVGFibGUuYXR0cignZGF0YS12aWV3LXR5cGUnKSA9PSAnaG9yaXpvbnRhbCcpeyBjbGFzc05hbWUgKz0gJyAtaG9yaXpvbnRhbCc7IH1cclxuICAgICAgICAgICAgY3VyclRhYmxlLndyYXAoXCI8ZGl2IGNsYXNzPSd0YWJsZS1yZXNwb25zaXZlJz48ZGl2IGNsYXNzPSd0YWJsZS1yZXNwb25zaXZlX19zY3JvbGwnPjwvZGl2PjwvZGl2PlwiKTtcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBwdWJsaWMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZGRNb2JpbGVWaWV3OiBmdW5jdGlvbih0YWJsZVNlbGVjdG9yKXtcclxuICAgICAgICAgICAgd3JhcFRhYmxlcyh0YWJsZVNlbGVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCkpOyIsIi8vIGpzLXNwb2lsZXItYXJlYSAtINGB0LrRgNGL0LLQsNC10YIg0L7QsdC70LDRgdGC0Ywg0L/QvtC0INGB0L/QvtC50LvQtdGAXHJcbi8vXHJcbi8vINC40YHRhdC+0LTQvdGL0Lkg0LrQvtC0XHJcbi8vIDxkaXYgY2xhc3M9XCJqcy1zcG9pbGVyLWFyZWEgaGlkZGVuLW1kXCJcclxuLy8gZGF0YS1tb2JpbGUtb25seT1cInRydWVcIlxyXG4vLyBkYXRhLXRleHQtb3BlbmVkPVwi0KHQutGA0YvRgtGMXCJcclxuLy8gZGF0YS10ZXh0LWNsb3NlZD1cItCf0L7QutCw0LfQsNGC0Ywg0L/QvtC70L3QvtGB0YLRjNGOXCI+XHJcbi8vICA8IS0tINGC0YPRgiDQutC+0L3RgtC10L3RgiDQutC+0YLQvtGA0YvQuSDQvdGD0LbQvdC+INGB0LrRgNGL0LLQsNGC0YwgLS0+XHJcbi8vIDwvZGl2PlxyXG5cclxuLy8gINGB0LXQs9C90LXRgNC40YDQvtCy0LDQvdGL0Lkg0LrQvtC0XHJcbi8vICA8ZGl2IGNsYXNzPVwic3BvaWxlclwiPlxyXG4vLyAgICAgIDxkaXYgIGNsYXNzPVwic3BvaWxlciBqcy1zcG9pbGVyLWFyZWFcIj48IS0tINGC0YPRgiDQutC+0L3RgtC10L3RgiDQutC+0YLQvtGA0YvQuSDQvdGD0LbQvdC+INGB0LrRgNGL0LLQsNGC0YwgLS0+PC9kaXY+XHJcbi8vICAgICAgPGJ1dHRvbiBjbGFzcz1cInNwb2lsZXJfX2J0blwiID48c3Bhbj5CdG48L3NwYW4+PC9idXR0b24+XHJcbi8vICA8L2Rpdj5cclxuXHJcbiQoJy5qcy1zcG9pbGVyLWFyZWEnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgc2VsZiA9ICQodGhpcyk7XHJcblxyXG4gICAgLy8g0LrRjdGI0LjRgNGD0LXQvCBkYXRhLdCw0YLRgNC40LHRg9GC0YssINC/0L7QtNGB0YLQsNCy0LvRj9GPINC30L3QsNGH0LXQvdC40Y8g0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4sINC10YHQu9C4INCw0YLRgNC40LHRg9GC0Ysg0L3QtSDQt9Cw0LTQsNC90YtcclxuICAgIHZhciBidG5UZXh0T3BlbmVkID0gc2VsZi5hdHRyKCdkYXRhLXRleHQtb3BlbmVkJykgPyBzZWxmLmF0dHIoJ2RhdGEtdGV4dC1vcGVuZWQnKSA6ICfQodC60YDRi9GC0YwnLFxyXG4gICAgICAgIGJ0blRleHRDbG9zZWQgPSBzZWxmLmF0dHIoJ2RhdGEtdGV4dC1jbG9zZWQnKSA/IHNlbGYuYXR0cignZGF0YS10ZXh0LWNsb3NlZCcpIDogJ9Ch0LzQvtGC0YDQtdGC0Ywg0L/QvtC70L3QvtGB0YLRjNGOJyxcclxuICAgICAgICBidG5DbGFzcyA9IHNlbGYuYXR0cignZGF0YS1idG4tY2xhc3MnKSA/IHNlbGYuYXR0cignZGF0YS1idG4tY2xhc3MnKSA6ICcnIDtcclxuXHJcbiAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0L3QtdC+0LHRhdC+0LTQuNC80YvQuSBodG1sXHJcbiAgICBzZWxmLmFkZENsYXNzKCdzcG9pbGVyX19jb250ZW50Jyk7XHJcbiAgICBzZWxmLndyYXAoJzxkaXYgY2xhc3M9XCJzcG9pbGVyXCI+PC9kaXY+Jyk7XHJcbiAgICBzZWxmLnBhcmVudCgpLmFwcGVuZCgnPGJ1dHRvbiBjbGFzcz1cInNwb2lsZXJfX2J0biBidG4gJyArIGJ0bkNsYXNzICsgJ1wiPjxzcGFuPicgKyBidG5UZXh0Q2xvc2VkICsgJzwvc3Bhbj48L2J1dHRvbj4nKTtcclxuXHJcbiAgICAvLyDQutGN0YjQuNGA0YPQtdC8INGN0LvQtdC80LXQvdGC0YtcclxuICAgIHZhciBjb250YWluZXIgPSBzZWxmLnBhcmVudCgpLFxyXG4gICAgICAgIGNvbnRlbnQgPSBzZWxmLFxyXG4gICAgICAgIGJ0biA9IGNvbnRhaW5lci5maW5kKCcuc3BvaWxlcl9fYnRuJyk7XHJcblxyXG5cclxuICAgIC8vINC00L7QsdCw0LLQu9GP0LXQvCDQutC70LDRgdGBIGhpZGRlbi0qL3Zpc2libGUtKiDQtNC70Y8g0LrQvdC+0L/QutC4INC10YHQu9C4INC90LDQtNC+XHJcbiAgICAvLyDQutC70LDRgdGBINC00L7QsdCw0LLQu9GP0LXRgtGB0Y8sINC10YHQu9C4INGDINC60L7QvdGC0LXQvdGC0LAg0LXRgdGC0Ywg0LrQu9Cw0YHRgSBoaWRkZW4tKlxyXG4gICAgdmFyIGNsYXNzTGlzdCA9IGNvbnRlbnQuYXR0cignY2xhc3MnKS5zcGxpdCgvXFxzKy8pLFxyXG4gICAgICAgIGlzUmVzcG9uc2UgPSBmYWxzZTtcclxuICAgICQuZWFjaChjbGFzc0xpc3QsIGZ1bmN0aW9uKGluZGV4LCBpdGVtKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0uc3Vic3RyaW5nKDAsNykgPT09ICdoaWRkZW4tJykge1xyXG4gICAgICAgICAgICBidG4uYWRkQ2xhc3MoJ2hpZGRlbiB2aXNpYmxlLScgKyBpdGVtLnN1YnN0cmluZyg3LDkpKTtcclxuICAgICAgICAgICAgaXNSZXNwb25zZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZighaXNSZXNwb25zZSl7XHJcbiAgICAgICAgY29udGVudC5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0LLQtdGI0LDQtdC8INGB0L7QsdGL0YLQuNGPXHJcbiAgICBidG4ub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBjb250ZW50LnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgYnRuLnRvZ2dsZUNsYXNzKCdpcy1vcGVuZWQnKTtcclxuICAgICAgICBpZihidG4uaGFzQ2xhc3MoJ2lzLW9wZW5lZCcpKXtcclxuICAgICAgICAgICAgYnRuLmZpbmQoJ3NwYW4nKS50ZXh0KGJ0blRleHRPcGVuZWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ0bi5maW5kKCdzcGFuJykudGV4dChidG5UZXh0Q2xvc2VkKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuJCgnLmpzLXNwb2lsZXItaXRlbXMnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgc2VsZiA9ICQodGhpcyk7XHJcblxyXG4gICAgLy8g0LrRjdGI0LjRgNGD0LXQvCBkYXRhLdCw0YLRgNC40LHRg9GC0YssINC/0L7QtNGB0YLQsNCy0LvRj9GPINC30L3QsNGH0LXQvdC40Y8g0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4sINC10YHQu9C4INCw0YLRgNC40LHRg9GC0Ysg0L3QtSDQt9Cw0LTQsNC90YtcclxuICAgIHZhciBidG5UZXh0T3BlbmVkID0gc2VsZi5hdHRyKCdkYXRhLXRleHQtb3BlbmVkJykgPyBzZWxmLmF0dHIoJ2RhdGEtdGV4dC1vcGVuZWQnKSA6ICfQodC60YDRi9GC0YwnLFxyXG4gICAgICAgIGJ0blRleHRDbG9zZWQgPSBzZWxmLmF0dHIoJ2RhdGEtdGV4dC1jbG9zZWQnKSA/IHNlbGYuYXR0cignZGF0YS10ZXh0LWNsb3NlZCcpIDogJ9Ch0LzQvtGC0YDQtdGC0Ywg0L/QvtC70L3QvtGB0YLRjNGOJyxcclxuICAgICAgICBidG5DbGFzcyA9IHNlbGYuYXR0cignZGF0YS1idG4tY2xhc3MnKSA/IHNlbGYuYXR0cignZGF0YS1idG4tY2xhc3MnKSA6ICcnIDtcclxuXHJcbiAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0L3QtdC+0LHRhdC+0LTQuNC80YvQuSBodG1sXHJcbiAgICBzZWxmLmFkZENsYXNzKCdzcG9pbGVyX19jb250ZW50Jyk7XHJcbiAgICBzZWxmLndyYXAoJzxkaXYgY2xhc3M9XCJzcG9pbGVyXCI+PC9kaXY+Jyk7XHJcbiAgICBzZWxmLnBhcmVudCgpLmFwcGVuZCgnPGJ1dHRvbiBjbGFzcz1cInNwb2lsZXJfX2J0biBidG4gJyArIGJ0bkNsYXNzICsgJ1wiPjxzcGFuPicgKyBidG5UZXh0Q2xvc2VkICsgJzwvc3Bhbj48L2J1dHRvbj4nKTtcclxuXHJcblxyXG59KTsiLG51bGwsInZhciBtZW51TW9iaWxlID0gbmV3IE1lbnVNb2JpbGUoe30pO1xyXG4kKCcuanMtbWVudS1zbWFydCcpLm1lbnVTbWFydCgpOyIsIihmdW5jdGlvbiBzbGlkZXJIZWFkZXIoKSB7XHJcbiAgICB2YXIgc2xpZGVySGVhZGVyID0ge1xyXG4gICAgICAgIGNhcm91c2VsIDogJChcIi5qcy1zbGlkZXItaGVhZGVyIC5vd2wtY2Fyb3VzZWxcIiksXHJcbiAgICAgICAgbmV4dEJ0biA6ICQoXCIuanMtc2xpZGVyLWhlYWRlciAuanMtbmF2LW5leHRcIiksXHJcbiAgICAgICAgcHJldkJ0biA6ICQoXCIuanMtc2xpZGVyLWhlYWRlciAuanMtbmF2LXByZXZcIiksXHJcbiAgICAgICAgY291bnRlciA6ICQoXCIuanMtc2xpZGVyLWhlYWRlciAuanMtbmF2LWNvdW50ZXJcIiksXHJcbiAgICAgICAgZGlyZWN0aW9uIDogJ2ZvcndhcmQnICAgLy8gaW52ZXJzZVxyXG4gICAgfTtcclxuICAgIHNsaWRlckhlYWRlci5jYXJvdXNlbC5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA2MDAwLFxyXG4gICAgICAgIGxvb3A6dHJ1ZSxcclxuICAgICAgICBtYXJnaW46MCxcclxuICAgICAgICBuYXY6ZmFsc2UsXHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgYW5pbWF0ZU91dDogJ3NsaWRlT3V0RG93bicsXHJcbiAgICAgICAgYW5pbWF0ZUluOiAnZmxpcEluWCcsXHJcbiAgICAgICAgb25Jbml0aWFsaXplZDogcmVuZGVyQ291bnRlcixcclxuICAgICAgICBvblRyYW5zbGF0ZTogcmVuZGVyQ291bnRlclxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyQ291bnRlcihldmVudCkge1xyXG4gICAgICAgIC8vIG5vcm1hbGl6ZSBpbmRleFxyXG4gICAgICAgIGlmKCBzbGlkZXJIZWFkZXIuZGlyZWN0aW9uID09PSAnaW52ZXJzZScgJiYgZXZlbnQuaXRlbS5pbmRleC0xID09PSAwKXtcclxuICAgICAgICAgICAgc2xpZGVySGVhZGVyLmNvdW50ZXIuaHRtbCggZXZlbnQuaXRlbS5jb3VudCArICcvJyArIGV2ZW50Lml0ZW0uY291bnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNsaWRlckhlYWRlci5jb3VudGVyLmh0bWwoZXZlbnQuaXRlbS5pbmRleC0xICsgJy8nICsgZXZlbnQuaXRlbS5jb3VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNsaWRlckhlYWRlci5uZXh0QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHNsaWRlckhlYWRlci5kaXJlY3Rpb24gPSAnZm9yd2FyZCc7XHJcbiAgICAgICAgc2xpZGVySGVhZGVyLmNhcm91c2VsLnRyaWdnZXIoJ25leHQub3dsLmNhcm91c2VsJyk7XHJcbiAgICB9KTtcclxuICAgIHNsaWRlckhlYWRlci5wcmV2QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHNsaWRlckhlYWRlci5kaXJlY3Rpb24gPSAnaW52ZXJzZSc7XHJcbiAgICAgICAgc2xpZGVySGVhZGVyLmNhcm91c2VsLnRyaWdnZXIoJ3ByZXYub3dsLmNhcm91c2VsJyk7XHJcbiAgICB9KTtcclxufSgpKTsiLCIoZnVuY3Rpb24gYWR2YW50YWdlcygpIHtcclxuICAgIHZhciBhZHZhbnRhZ2VzID0ge1xyXG4gICAgICAgIGNhcm91c2VsIDogJChcIi5qcy1hZHZhbnRhZ2VzIC5vd2wtY2Fyb3VzZWxcIiksXHJcbiAgICAgICAgbmV4dEJ0biA6ICQoXCIuanMtYWR2YW50YWdlcyAuanMtbmF2LW5leHRcIiksXHJcbiAgICAgICAgcHJldkJ0biA6ICQoXCIuanMtYWR2YW50YWdlcyAuanMtbmF2LXByZXZcIilcclxuICAgIH07XHJcbiAgICAkKGFkdmFudGFnZXMuY2Fyb3VzZWwpLmltYWdlc0xvYWRlZCgpXHJcbiAgICAgICAgLmFsd2F5cyggZnVuY3Rpb24oIGluc3RhbmNlICkge1xyXG4gICAgICAgICAgICBhZHZhbnRhZ2VzLmNhcm91c2VsLm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogNCxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmUgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgMDogeyBpdGVtczogMX0sXHJcbiAgICAgICAgICAgICAgICAgICAgNDgwOiB7IGl0ZW1zOiAyfSxcclxuICAgICAgICAgICAgICAgICAgICA3Njg6IHsgaXRlbXM6IDN9LFxyXG4gICAgICAgICAgICAgICAgICAgIDEwMjQ6IHsgaXRlbXM6IDR9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhZHZhbnRhZ2VzLm5leHRCdG4uY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBhZHZhbnRhZ2VzLmNhcm91c2VsLnRyaWdnZXIoJ25leHQub3dsLmNhcm91c2VsJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhZHZhbnRhZ2VzLnByZXZCdG4uY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBhZHZhbnRhZ2VzLmNhcm91c2VsLnRyaWdnZXIoJ3ByZXYub3dsLmNhcm91c2VsJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZhaWwoIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ29uZSBvciBtb3JlIGltYWdlcyBpcyBicm9rZW4gaW4gJyArIGFkdmFudGFnZXMuY2Fyb3VzZWwuc2VsZWN0b3IpO1xyXG4gICAgICAgIH0pO1xyXG5cclxufSgpKTsiLCIoZnVuY3Rpb24gaGl0c1dpZGdldCgpIHtcclxuICAgIHZhciBoaXRzV2lkZ2V0ID0ge1xyXG4gICAgICAgIGNhcm91c2VsIDogJChcIi5qcy1oaXRzLXdpZGdldCAub3dsLWNhcm91c2VsXCIpLFxyXG4gICAgICAgIG5leHRCdG4gOiAkKFwiLmpzLWhpdHMtd2lkZ2V0IC5qcy1uYXYtbmV4dFwiKSxcclxuICAgICAgICBwcmV2QnRuIDogJChcIi5qcy1oaXRzLXdpZGdldCAuanMtbmF2LXByZXZcIilcclxuICAgIH07XHJcbiAgICAkKGhpdHNXaWRnZXQuY2Fyb3VzZWwpLmltYWdlc0xvYWRlZCgpXHJcbiAgICAgICAgLmFsd2F5cyggZnVuY3Rpb24oIGluc3RhbmNlICkge1xyXG4gICAgICAgICAgICBoaXRzV2lkZ2V0LmNhcm91c2VsLm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgICAgIGNlbnRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIyLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIDA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6MVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgOTgwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaGl0c1dpZGdldC5uZXh0QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaGl0c1dpZGdldC5jYXJvdXNlbC50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaGl0c1dpZGdldC5wcmV2QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaGl0c1dpZGdldC5jYXJvdXNlbC50cmlnZ2VyKCdwcmV2Lm93bC5jYXJvdXNlbCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5mYWlsKCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdvbmUgb3IgbW9yZSBpbWFnZXMgaXMgYnJva2VuIGluICcgKyBoaXRzV2lkZ2V0LmNhcm91c2VsLnNlbGVjdG9yKTtcclxuICAgICAgICB9KTtcclxuXHJcbn0oKSk7IiwiKGZ1bmN0aW9uIGFydGljbGVzV2lkZ2V0KCkge1xyXG4gICAgdmFyIGFydGljbGVzV2lkZ2V0ID0ge1xyXG4gICAgICAgIGNhcm91c2VsIDogJChcIi5qcy1hcnRpY2xlcy13aWRnZXQgLm93bC1jYXJvdXNlbFwiKSxcclxuICAgICAgICBuZXh0QnRuIDogJChcIi5qcy1hcnRpY2xlcy13aWRnZXQgLmpzLW5hdi1uZXh0XCIpLFxyXG4gICAgICAgIHByZXZCdG4gOiAkKFwiLmpzLWFydGljbGVzLXdpZGdldCAuanMtbmF2LXByZXZcIilcclxuICAgIH07XHJcbiAgICAkKGFydGljbGVzV2lkZ2V0LmNhcm91c2VsKS5pbWFnZXNMb2FkZWQoKVxyXG4gICAgICAgIC5hbHdheXMoIGZ1bmN0aW9uKCBpbnN0YW5jZSApIHtcclxuICAgICAgICAgICAgYXJ0aWNsZXNXaWRnZXQuY2Fyb3VzZWwub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICAgICAgY2VudGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9XaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjIsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgMDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczoxXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICA5ODA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhcnRpY2xlc1dpZGdldC5uZXh0QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZXNXaWRnZXQuY2Fyb3VzZWwudHJpZ2dlcignbmV4dC5vd2wuY2Fyb3VzZWwnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFydGljbGVzV2lkZ2V0LnByZXZCdG4uY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlc1dpZGdldC5jYXJvdXNlbC50cmlnZ2VyKCdwcmV2Lm93bC5jYXJvdXNlbCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5mYWlsKCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdvbmUgb3IgbW9yZSBpbWFnZXMgaXMgYnJva2VuIGluICcgKyBhcnRpY2xlc1dpZGdldC5jYXJvdXNlbC5zZWxlY3Rvcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG59KCkpOyIsIihmdW5jdGlvbiBuZXdzV2lkZ2V0KCkge1xyXG4gICAgdmFyIG5ld3NXaWRnZXQgPSB7XHJcbiAgICAgICAgY2Fyb3VzZWwgOiAkKFwiLmpzLW5ld3Mtd2lkZ2V0IC5uZXdzLXdpZGdldF9fY2Fyb3VzZWwub3dsLWNhcm91c2VsXCIpLFxyXG4gICAgICAgIG5leHRCdG4gOiAkKFwiLmpzLW5ld3Mtd2lkZ2V0IC5qcy1uYXYtbmV4dFwiKSxcclxuICAgICAgICBwcmV2QnRuIDogJChcIi5qcy1uZXdzLXdpZGdldCAuanMtbmF2LXByZXZcIilcclxuICAgIH07XHJcbiAgICAkKG5ld3NXaWRnZXQuY2Fyb3VzZWwpLmltYWdlc0xvYWRlZCgpXHJcbiAgICAgICAgLmFsd2F5cyggZnVuY3Rpb24oIGluc3RhbmNlICkge1xyXG4gICAgICAgICAgICBuZXdzV2lkZ2V0LmNhcm91c2VsLm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgICAgIGNlbnRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIyLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIDA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6MVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgOTgwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbmV3c1dpZGdldC5uZXh0QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgbmV3c1dpZGdldC5jYXJvdXNlbC50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbmV3c1dpZGdldC5wcmV2QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgbmV3c1dpZGdldC5jYXJvdXNlbC50cmlnZ2VyKCdwcmV2Lm93bC5jYXJvdXNlbCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5mYWlsKCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdvbmUgb3IgbW9yZSBpbWFnZXMgaXMgYnJva2VuIGluICcgKyBuZXdzV2lkZ2V0LmNhcm91c2VsKTtcclxuICAgICAgICB9KTtcclxuXHJcbn0oKSk7XHJcblxyXG4oZnVuY3Rpb24gYmFubmVyc1dpZGdldCgpIHtcclxuICAgIHZhciBiYW5uZXJzV2lkZ2V0ID0ge1xyXG4gICAgICAgIGNhcm91c2VsIDogJChcIi5qcy1uZXdzLXdpZGdldCAuYmFubmVyc19fY2Fyb3VzZWwub3dsLWNhcm91c2VsXCIpLFxyXG4gICAgfTtcclxuICAgICQoYmFubmVyc1dpZGdldC5jYXJvdXNlbCkuaW1hZ2VzTG9hZGVkKClcclxuICAgICAgICAuYWx3YXlzKCBmdW5jdGlvbiggaW5zdGFuY2UgKSB7XHJcbiAgICAgICAgICAgIGJhbm5lcnNXaWRnZXQuY2Fyb3VzZWwub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICAgICAgY2VudGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9XaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjIsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgMDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczoxXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICA5ODA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZhaWwoIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ29uZSBvciBtb3JlIGltYWdlcyBpcyBicm9rZW4gaW4gJyArIGJhbm5lcnNXaWRnZXQuY2Fyb3VzZWwpO1xyXG4gICAgICAgIH0pO1xyXG59KCkpOyIsIihmdW5jdGlvbiBnYWxlcnlGdWxsd2lkdGhDZW50ZXJlZCgpIHtcclxuICAgIHZhciBnYWxlcnlGdWxsd2lkdGhDZW50ZXJlZCA9IHtcclxuICAgICAgICBjYXJvdXNlbCA6ICQoXCIuanMtZ2FsZXJ5LWZ1bGx3aWR0aC1jZW50ZXJlZCAub3dsLWNhcm91c2VsXCIpLFxyXG4gICAgICAgIG5leHRCdG4gOiAkKFwiLmpzLWdhbGVyeS1mdWxsd2lkdGgtY2VudGVyZWQgLmpzLW5hdi1uZXh0XCIpLFxyXG4gICAgICAgIHByZXZCdG4gOiAkKFwiLmpzLWdhbGVyeS1mdWxsd2lkdGgtY2VudGVyZWQgLmpzLW5hdi1wcmV2XCIpXHJcbiAgICB9O1xyXG4gICAgJChnYWxlcnlGdWxsd2lkdGhDZW50ZXJlZC5jYXJvdXNlbCkuaW1hZ2VzTG9hZGVkKClcclxuICAgICAgICAuYWx3YXlzKCBmdW5jdGlvbiggaW5zdGFuY2UgKSB7XHJcbiAgICAgICAgICAgIGdhbGVyeUZ1bGx3aWR0aENlbnRlcmVkLmNhcm91c2VsLm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgICAgIGNlbnRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGdhbGVyeUZ1bGx3aWR0aENlbnRlcmVkLm5leHRCdG4uY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBnYWxlcnlGdWxsd2lkdGhDZW50ZXJlZC5jYXJvdXNlbC50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZ2FsZXJ5RnVsbHdpZHRoQ2VudGVyZWQucHJldkJ0bi5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGdhbGVyeUZ1bGx3aWR0aENlbnRlcmVkLmNhcm91c2VsLnRyaWdnZXIoJ3ByZXYub3dsLmNhcm91c2VsJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZhaWwoIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ29uZSBvciBtb3JlIGltYWdlcyBpcyBicm9rZW4gaW4gJyArIGdhbGVyeUZ1bGx3aWR0aENlbnRlcmVkLmNhcm91c2VsLnNlbGVjdG9yKTtcclxuICAgICAgICB9KTtcclxuXHJcbn0oKSk7IiwiKGZ1bmN0aW9uIGNlcnRpZmljYXRlcygpIHtcclxuICAgIHZhciBjZXJ0aWZpY2F0ZXMgPSB7XHJcbiAgICAgICAgY2Fyb3VzZWwgOiAkKFwiLmpzLWNlcnRpZmljYXRlcyAub3dsLWNhcm91c2VsXCIpLFxyXG4gICAgICAgIG5leHRCdG4gOiAkKFwiLmpzLWNlcnRpZmljYXRlcyAuanMtbmF2LW5leHRcIiksXHJcbiAgICAgICAgcHJldkJ0biA6ICQoXCIuanMtY2VydGlmaWNhdGVzIC5qcy1uYXYtcHJldlwiKVxyXG4gICAgfTtcclxuICAgICQoY2VydGlmaWNhdGVzLmNhcm91c2VsKS5pbWFnZXNMb2FkZWQoKVxyXG4gICAgICAgIC5hbHdheXMoIGZ1bmN0aW9uKCBpbnN0YW5jZSApIHtcclxuICAgICAgICAgICAgY2VydGlmaWNhdGVzLmNhcm91c2VsLm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvV2lkdGg6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjAsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgMDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczoxXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICA5ODA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjZXJ0aWZpY2F0ZXMubmV4dEJ0bi5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNlcnRpZmljYXRlcy5jYXJvdXNlbC50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2VydGlmaWNhdGVzLnByZXZCdG4uY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjZXJ0aWZpY2F0ZXMuY2Fyb3VzZWwudHJpZ2dlcigncHJldi5vd2wuY2Fyb3VzZWwnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmFpbCggZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignb25lIG9yIG1vcmUgaW1hZ2VzIGlzIGJyb2tlbiBpbiAnICsgY2VydGlmaWNhdGVzLmNhcm91c2VsLnNlbGVjdG9yKTtcclxuICAgICAgICB9KTtcclxuXHJcbn0oKSk7XHJcbihmdW5jdGlvbiBwYXJ0bmVycygpIHtcclxuICAgIHZhciBwYXJ0bmVycyA9IHtcclxuICAgICAgICBjYXJvdXNlbCA6ICQoXCIuanMtcGFydG5lcnMgLm93bC1jYXJvdXNlbFwiKSxcclxuICAgICAgICBuZXh0QnRuIDogJChcIi5qcy1wYXJ0bmVycyAuanMtbmF2LW5leHRcIiksXHJcbiAgICAgICAgcHJldkJ0biA6ICQoXCIuanMtcGFydG5lcnMgLmpzLW5hdi1wcmV2XCIpXHJcbiAgICB9O1xyXG4gICAgJChwYXJ0bmVycy5jYXJvdXNlbCkuaW1hZ2VzTG9hZGVkKClcclxuICAgICAgICAuYWx3YXlzKCBmdW5jdGlvbiggaW5zdGFuY2UgKSB7XHJcbiAgICAgICAgICAgIHBhcnRuZXJzLmNhcm91c2VsLm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvV2lkdGg6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjUsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgMDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczoxXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICA5ODA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBwYXJ0bmVycy5uZXh0QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcGFydG5lcnMuY2Fyb3VzZWwudHJpZ2dlcignbmV4dC5vd2wuY2Fyb3VzZWwnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHBhcnRuZXJzLnByZXZCdG4uY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0bmVycy5jYXJvdXNlbC50cmlnZ2VyKCdwcmV2Lm93bC5jYXJvdXNlbCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5mYWlsKCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdvbmUgb3IgbW9yZSBpbWFnZXMgaXMgYnJva2VuIGluICcgKyBwYXJ0bmVycy5jYXJvdXNlbCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG59KCkpOyIsIihmdW5jdGlvbiB0ZXN0aW1vbmlhbHNXaWRnZXQoKSB7XHJcbiAgICB2YXIgdGVzdGltb25pYWxzV2lkZ2V0ID0ge1xyXG4gICAgICAgIGNhcm91c2VsIDogJChcIi5qcy10ZXN0aW1vbmlhbHMtd2lkZ2V0IC5ieHNsaWRlclwiKSxcclxuICAgICAgICBuZXh0QnRuIDogJChcIi5qcy10ZXN0aW1vbmlhbHMtd2lkZ2V0IC5qcy1uYXYtbmV4dFwiKSxcclxuICAgICAgICBwcmV2QnRuIDogJChcIi5qcy10ZXN0aW1vbmlhbHMtd2lkZ2V0IC5qcy1uYXYtcHJldlwiKVxyXG4gICAgfTtcclxuICAgIC8vINGB0L7RhdGA0LDQvdGP0LXQvCDRgdC70LDQudC00LXRgCDQsiB0ZXN0aW1vbmlhbHNXaWRnZXQuY2Fyb3VzZWxcclxuICAgIHRlc3RpbW9uaWFsc1dpZGdldC5jYXJvdXNlbC5ieFNsaWRlcigpO1xyXG5cclxuICAgIHRlc3RpbW9uaWFsc1dpZGdldC5uZXh0QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRlc3RpbW9uaWFsc1dpZGdldC5jYXJvdXNlbC5nb1RvTmV4dFNsaWRlKCk7XHJcbiAgICB9KTtcclxuICAgIHRlc3RpbW9uaWFsc1dpZGdldC5wcmV2QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRlc3RpbW9uaWFsc1dpZGdldC5jYXJvdXNlbC5nb1RvUHJldlNsaWRlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtZWRpYUV2ZW50TGlzdGVuZXIuYWRkUXVlcnlBY3Rpb24oJ21vYmlsZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGVzdGltb25pYWxzV2lkZ2V0LmNhcm91c2VsLnJlbG9hZFNsaWRlcih7XHJcbiAgICAgICAgICAgIG1vZGU6ICdob3Jpem9udGFsJyxcclxuICAgICAgICAgICAgaW5maW5pdGVMb29wOiB0cnVlLFxyXG4gICAgICAgICAgICBlYXNpbmc6IFwiZWFzZS1pblwiLFxyXG4gICAgICAgICAgICBwYWdlcjogdHJ1ZSxcclxuICAgICAgICAgICAgY29udHJvbHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBtaW5TbGlkZXM6IDEsXHJcbiAgICAgICAgICAgIG1heFNsaWRlczogMSxcclxuICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtZWRpYUV2ZW50TGlzdGVuZXIuYWRkUXVlcnlBY3Rpb24oJ2Rlc2t0b3AnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRlc3RpbW9uaWFsc1dpZGdldC5jYXJvdXNlbC5yZWxvYWRTbGlkZXIoe1xyXG4gICAgICAgICAgICBtb2RlOiAndmVydGljYWwnLFxyXG4gICAgICAgICAgICBpbmZpbml0ZUxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIGVhc2luZzogXCJlYXNlLWluXCIsXHJcbiAgICAgICAgICAgIHBhZ2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgY29udHJvbHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBtaW5TbGlkZXM6IDIsXHJcbiAgICAgICAgICAgIG1heFNsaWRlczogMixcclxuICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSgpKTtcclxuIiwiY29uc29sZS5sb2coJ21haW4nKTsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4vLyBtZWRpYUV2ZW50TGlzdGVuZXIg0LjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXQvCDQv9C+0YHQu9C1INCy0YHQtdGFINC00L7QsdCw0LLQu9C10L3QuNC5LFxyXG4vLyDRgdC60YDQuNC/0YLRiyDQv9C+0LTQstC10YjQtdC90YvQtSDQv9C+0LfQttC1INC90LUg0L7RgtGA0LDQsdC+0YLQsNGO0YIg0L/RgNC4INC/0LXRgNCy0L7QuSDQt9Cw0LPRgNGD0LfQutC1XHJcbm1lZGlhRXZlbnRMaXN0ZW5lci5pbml0KCk7XHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovIl19
