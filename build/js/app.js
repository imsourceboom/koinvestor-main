!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){(function(n){var r,o;
/*! smooth-scroll v16.0.0 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),r=this;do{for(t=n.length;0<=--t&&n.item(t)!==r;);}while(t<0&&(r=r.parentElement));return r}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var r=(new Date).getTime(),o=Math.max(0,16-(r-e)),i=window.setTimeout(function(){t(r+o)},o);return e=r+o,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),o=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(r=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var e={};return Array.prototype.forEach.call(arguments,function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}}),e},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),r=n.length,o=-1,i="",a=n.charCodeAt(0);++o<r;){if(0===(t=n.charCodeAt(o)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=1<=t&&t<=31||127==t||0===o&&48<=t&&t<=57||1===o&&48<=t&&t<=57&&45===a?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(o):"\\"+n.charAt(o)}return"#"+i},o=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},i=function(t,n,r,o){if(n.emitEvents&&"function"==typeof e.CustomEvent){var i=new CustomEvent(t,{bubbles:!0,detail:{anchor:r,toggle:o}});document.dispatchEvent(i)}};return function(a,s){var c,l,u,d,f={cancelScroll:function(e){cancelAnimationFrame(d),d=null,e||i("scrollCancel",c)},animateScroll:function(r,a,s){f.cancelScroll();var l=n(c||t,s||{}),m="[object Number]"===Object.prototype.toString.call(r),p=m||!r.tagName?null:r;if(m||p){var y=e.pageYOffset;l.header&&!u&&(u=document.querySelector(l.header));var h,v,g,b,w,S,E,O,A=function(t){return t?(n=t,parseInt(e.getComputedStyle(n).height,10)+t.offsetTop):0;var n}(u),q=m?r:function(t,n,r,i){var a=0;if(t.offsetParent)for(;a+=t.offsetTop,t=t.offsetParent;);return a=Math.max(a-n-r,0),i&&(a=Math.min(a,o()-e.innerHeight)),a}(p,A,parseInt("function"==typeof l.offset?l.offset(r,a):l.offset,10),l.clip),x=q-y,L=o(),T=0,j=(h=x,g=(v=l).speedAsDuration?v.speed:Math.abs(h/1e3*v.speed),v.durationMax&&g>v.durationMax?v.durationMax:v.durationMin&&g<v.durationMin?v.durationMin:parseInt(g,10));0===e.pageYOffset&&e.scrollTo(0,0),E=r,O=l,m||history.pushState&&O.updateURL&&history.pushState({smoothScroll:JSON.stringify(O),anchor:E.id},document.title,E===document.documentElement?"#top":"#"+E.id),i("scrollStart",l,r,a),f.cancelScroll(!0),e.requestAnimationFrame(function t(n){var o,s,c;b||(b=n),T+=n-b,S=y+x*(s=w=1<(w=0===j?0:T/j)?1:w,"easeInQuad"===(o=l).easing&&(c=s*s),"easeOutQuad"===o.easing&&(c=s*(2-s)),"easeInOutQuad"===o.easing&&(c=s<.5?2*s*s:(4-2*s)*s-1),"easeInCubic"===o.easing&&(c=s*s*s),"easeOutCubic"===o.easing&&(c=--s*s*s+1),"easeInOutCubic"===o.easing&&(c=s<.5?4*s*s*s:(s-1)*(2*s-2)*(2*s-2)+1),"easeInQuart"===o.easing&&(c=s*s*s*s),"easeOutQuart"===o.easing&&(c=1- --s*s*s*s),"easeInOutQuart"===o.easing&&(c=s<.5?8*s*s*s*s:1-8*--s*s*s*s),"easeInQuint"===o.easing&&(c=s*s*s*s*s),"easeOutQuint"===o.easing&&(c=1+--s*s*s*s*s),"easeInOutQuint"===o.easing&&(c=s<.5?16*s*s*s*s*s:1+16*--s*s*s*s*s),o.customEasing&&(c=o.customEasing(s)),c||s),e.scrollTo(0,Math.floor(S)),function(t,n){var o,s,c,u=e.pageYOffset;if(t==n||u==n||(y<n&&e.innerHeight+u)>=L)return f.cancelScroll(!0),s=n,c=m,0===(o=r)&&document.body.focus(),c||(o.focus(),document.activeElement!==o&&(o.setAttribute("tabindex","-1"),o.focus(),o.style.outline="none"),e.scrollTo(0,s)),i("scrollStop",l,r,a),!(d=b=null)}(S,q)||(d=e.requestAnimationFrame(t),b=n)})}}},m=function(t){if(!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)&&0===t.button&&!t.metaKey&&!t.ctrlKey&&"closest"in t.target&&(l=t.target.closest(a))&&"a"===l.tagName.toLowerCase()&&!t.target.closest(c.ignore)&&l.hostname===e.location.hostname&&l.pathname===e.location.pathname&&/#/.test(l.href)){var n=r(l.hash),o=c.topOnEmptyHash&&"#"===n?document.documentElement:document.querySelector(n);(o=o||"#top"!==n?o:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}}(c),f.animateScroll(o,l))}},p=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(c)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(r(history.state.anchor)))||f.animateScroll(t,null,{updateURL:!1})}};return f.destroy=function(){c&&(document.removeEventListener("click",m,!1),e.removeEventListener("popstate",p,!1),f.cancelScroll(),d=u=l=c=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";f.destroy(),c=n(t,s||{}),u=c.header?document.querySelector(c.header):null,document.addEventListener("click",m,!1),c.updateURL&&c.popstate&&e.addEventListener("popstate",p,!1)}(),f}}(o)}.apply(t,[]))||(e.exports=r)}).call(this,n(1))},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":n(window))&&(r=window)}e.exports=r},function(e,t,n){"use strict";n.r(t);var r=document,o=(r.querySelector("body"),{self:r.querySelector("body > header"),logo:r.querySelector("body> header figure "),nav:r.querySelector("body > header nav"),li:r.querySelectorAll("body > header nav ul li"),hamburger:r.querySelector("body > header .hamburger")}),i={self:r.querySelector("body > article.cover"),typed:r.querySelector("body > article.cover > .logo"),arrow:r.querySelector("body > article.cover .arrow")},a={self:r.querySelector("body > main"),section:r.querySelectorAll("body > main > section")},s=(r.querySelector("body > main > #about"),{self:r.querySelector("body > main > #contact"),name:r.querySelector("#contact input#name"),email:r.querySelector("#contact input#email"),message:r.querySelector("#contact textarea#message"),button:r.querySelector("#contact button")});console.log("Webpack On!!");var c=a.self,l=i.self,u=i.typed,d=i.arrow,f=Array.from(o.li),m=o.logo,p=o.hamburger;window.addEventListener("scroll",function(){"none"!==l.style.display&&(u.classList.add("trigger"),d.classList.add("disappear"),setTimeout(function(){l.style.display="none",setTimeout(function(){"none"===l.style.display&&(window.scrollTo(0,0),c.classList.add("active"),f.map(function(e){e.classList.add("reveal")}),m.classList.add("active"),p.classList.add("active"))})},1500))});var y=n(0);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/new(n.n(y).a)('a[href*="#"]',{speed:500,speedAsDuration:!0});var v=function(e){return"object"===h(window.Node)?e instanceof window.Node:null!==e&&"object"===h(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName};function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/var b=function(e){var t=Object.prototype.toString.call(e);return"object"===g(window.NodeList)?e instanceof window.NodeList:null!==e&&"object"===g(e)&&"number"==typeof e.length&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(t)&&(0===e.length||v(e[0]))};
/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/var w=function(e,t){if(void 0===t&&(t=document),e instanceof Array)return e.filter(v);if(v(e))return[e];if(b(e))return Array.prototype.slice.call(e);if("string"==typeof e)try{var n=t.querySelectorAll(e);return Array.prototype.slice.call(n)}catch(e){return[]}return[]};
/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/function S(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(16===e.length)return e;if(6===e.length){var t=E();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function E(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function O(e,t){for(var n=S(e),r=S(t),o=[],i=0;i<4;i++)for(var a=[n[i],n[i+4],n[i+8],n[i+12]],s=0;s<4;s++){var c=4*s,l=[r[c],r[c+1],r[c+2],r[c+3]],u=a[0]*l[0]+a[1]*l[1]+a[2]*l[2]+a[3]*l[3];o[i+c]=u}return o}function A(e){if("string"==typeof e){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t)return S(t[2].split(", ").map(parseFloat))}return E()}function q(e){var t=Math.PI/180*e,n=E();return n[0]=n[5]=Math.cos(t),n[1]=n[4]=Math.sin(t),n[4]*=-1,n}function x(e,t){var n=E();return n[0]=e,n[5]="number"==typeof t?t:e,n}
/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
var L,T=(L=Date.now(),function(e){var t=Date.now();t-L>16?(L=t,e(t)):setTimeout(function(){return T(e)},0)}),j=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||T,k={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};var M={success:function(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})},failure:function(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}};function I(e){return null!==e&&e instanceof Object&&(e.constructor===Object||"[object Object]"===Object.prototype.toString.call(e))}function P(e,t){if(I(e))return Object.keys(e).forEach(function(n){return t(e[n],n,e)});if(e instanceof Array)return e.forEach(function(n,r){return t(n,r,e)});throw new TypeError("Expected either an array or object literal.")}function R(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(this.constructor.debug&&console){var r="%cScrollReveal: "+e;t.forEach(function(e){return r+="\n — "+e}),console.log(r,"color: #ea654b;")}}function C(){var e=this,t={active:[],stale:[]},n={active:[],stale:[]},r={active:[],stale:[]};try{P(w("[data-sr-id]"),function(e){var n=parseInt(e.getAttribute("data-sr-id"));t.active.push(n)})}catch(e){throw e}P(this.store.elements,function(e){-1===t.active.indexOf(e.id)&&t.stale.push(e.id)}),P(t.stale,function(t){return delete e.store.elements[t]}),P(this.store.elements,function(e){-1===r.active.indexOf(e.containerId)&&r.active.push(e.containerId),e.hasOwnProperty("sequence")&&-1===n.active.indexOf(e.sequence.id)&&n.active.push(e.sequence.id)}),P(this.store.containers,function(e){-1===r.active.indexOf(e.id)&&r.stale.push(e.id)}),P(r.stale,function(t){var n=e.store.containers[t].node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate),delete e.store.containers[t]}),P(this.store.sequences,function(e){-1===n.active.indexOf(e.id)&&n.stale.push(e.id)}),P(n.stale,function(t){return delete e.store.sequences[t]})}function F(e){var t,n=this;try{P(w(e),function(e){var r=e.getAttribute("data-sr-id");if(null!==r){t=!0;var o=n.store.elements[r];o.callbackTimer&&window.clearTimeout(o.callbackTimer.clock),e.setAttribute("style",o.styles.inline.generated),e.removeAttribute("data-sr-id"),delete n.store.elements[r]}})}catch(e){return R.call(this,"Clean failed.",e.message)}if(t)try{C.call(this)}catch(e){return R.call(this,"Clean failed.",e.message)}}var N=function(){var e={},t=document.documentElement.style;function n(n,r){if(void 0===r&&(r=t),n&&"string"==typeof n){if(e[n])return e[n];if("string"==typeof r[n])return e[n]=n;if("string"==typeof r["-webkit-"+n])return e[n]="-webkit-"+n;throw new RangeError('Unable to find "'+n+'" style property.')}throw new TypeError("Expected a string.")}return n.clearCache=function(){return e={}},n}();function D(e){var t=window.getComputedStyle(e.node),n=t.position,r=e.config,o={},i=(e.node.getAttribute("style")||"").match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];o.computed=i?i.map(function(e){return e.trim()}).join("; ")+";":"",o.generated=i.some(function(e){return e.match(/visibility\s?:\s?visible/i)})?o.computed:i.concat(["visibility: visible"]).map(function(e){return e.trim()}).join("; ")+";";var a,s,c,l=parseFloat(t.opacity),u=isNaN(parseFloat(r.opacity))?parseFloat(t.opacity):parseFloat(r.opacity),d={computed:l!==u?"opacity: "+l+";":"",generated:l!==u?"opacity: "+u+";":""},f=[];if(parseFloat(r.distance)){var m="top"===r.origin||"bottom"===r.origin?"Y":"X",p=r.distance;"top"!==r.origin&&"left"!==r.origin||(p=/^-/.test(p)?p.substr(1):"-"+p);var y=p.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),h=y[0];switch(y[1]){case"em":p=parseInt(t.fontSize)*h;break;case"px":p=h;break;case"%":p="Y"===m?e.node.getBoundingClientRect().height*h/100:e.node.getBoundingClientRect().width*h/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}"Y"===m?f.push(function(e){var t=E();return t[13]=e,t}(p)):f.push(function(e){var t=E();return t[12]=e,t}(p))}r.rotate.x&&f.push((a=r.rotate.x,s=Math.PI/180*a,(c=E())[5]=c[10]=Math.cos(s),c[6]=c[9]=Math.sin(s),c[9]*=-1,c)),r.rotate.y&&f.push(function(e){var t=Math.PI/180*e,n=E();return n[0]=n[10]=Math.cos(t),n[2]=n[8]=Math.sin(t),n[2]*=-1,n}(r.rotate.y)),r.rotate.z&&f.push(q(r.rotate.z)),1!==r.scale&&(0===r.scale?f.push(x(2e-4)):f.push(x(r.scale)));var v={};if(f.length){v.property=N("transform"),v.computed={raw:t[v.property],matrix:A(t[v.property])},f.unshift(v.computed.matrix);var g=f.reduce(O);v.generated={initial:v.property+": matrix3d("+g.join(", ")+");",final:v.property+": matrix3d("+v.computed.matrix.join(", ")+");"}}else v.generated={initial:"",final:""};var b={};if(d.generated||v.generated.initial){b.property=N("transition"),b.computed=t[b.property],b.fragments=[];var w=r.delay,S=r.duration,L=r.easing;d.generated&&b.fragments.push({delayed:"opacity "+S/1e3+"s "+L+" "+w/1e3+"s",instant:"opacity "+S/1e3+"s "+L+" 0s"}),v.generated.initial&&b.fragments.push({delayed:v.property+" "+S/1e3+"s "+L+" "+w/1e3+"s",instant:v.property+" "+S/1e3+"s "+L+" 0s"}),b.computed&&!b.computed.match(/all 0s/)&&b.fragments.unshift({delayed:b.computed,instant:b.computed});var T=b.fragments.reduce(function(e,t,n){return e.delayed+=0===n?t.delayed:", "+t.delayed,e.instant+=0===n?t.instant:", "+t.instant,e},{delayed:"",instant:""});b.generated={delayed:b.property+": "+T.delayed+";",instant:b.property+": "+T.instant+";"}}else b.generated={delayed:"",instant:""};return{inline:o,opacity:d,position:n,transform:v,transition:b}}function H(e,t){void 0===t&&(t={});var n=t.pristine||this.pristine,r="always"===e.config.useDelay||"onload"===e.config.useDelay&&n||"once"===e.config.useDelay&&!e.seen,o=e.visible&&!e.revealed,i=!e.visible&&e.revealed&&e.config.reset;return t.reveal||o?function(e,t){var n=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?n.push(e.styles.transition.generated.delayed):n.push(e.styles.transition.generated.instant);e.revealed=e.seen=!0,e.node.setAttribute("style",n.filter(function(e){return""!==e}).join(" ")),z.call(this,e,t)}.call(this,e,r):t.reset||i?function(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,e.node.setAttribute("style",t.filter(function(e){return""!==e}).join(" ")),z.call(this,e)}.call(this,e):void 0}function z(e,t){var n=this,r=t?e.config.duration+e.config.delay:e.config.duration,o=e.revealed?e.config.beforeReveal:e.config.beforeReset,i=e.revealed?e.config.afterReveal:e.config.afterReset,a=0;e.callbackTimer&&(a=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),o(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){i(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&F.call(n,e.node)},r-a)}}var Q,U=(Q=0,function(){return Q++});function Y(e,t){if(void 0===t&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return H.call(this,e,{reset:!0});var n=this.store.sequences[e.sequence.id],r=e.sequence.index;if(n){var o=new W(n,"visible",this.store),i=new W(n,"revealed",this.store);if(n.models={visible:o,revealed:i},!i.body.length){var a=n.members[o.body[0]],s=this.store.elements[a];if(s)return J.call(this,n,o.body[0],-1,t),J.call(this,n,o.body[0],1,t),H.call(this,s,{reveal:!0,pristine:t})}if(!n.blocked.head&&r===[].concat(i.head).pop()&&r>=[].concat(o.body).shift())return J.call(this,n,r,-1,t),H.call(this,e,{reveal:!0,pristine:t});if(!n.blocked.foot&&r===[].concat(i.foot).shift()&&r<=[].concat(o.body).pop())return J.call(this,n,r,1,t),H.call(this,e,{reveal:!0,pristine:t})}}function _(e){var t=Math.abs(e);if(isNaN(t))throw new RangeError("Invalid sequence interval.");this.id=U(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1}}function W(e,t,n){var r=this;this.head=[],this.body=[],this.foot=[],P(e.members,function(e,o){var i=n.elements[e];i&&i[t]&&r.body.push(o)}),this.body.length&&P(e.members,function(e,o){var i=n.elements[e];i&&!i[t]&&(o<r.body[0]?r.head.push(o):r.foot.push(o))})}function J(e,t,n,r){var o=this,i=["head",null,"foot"][1+n],a=e.members[t+n],s=this.store.elements[a];e.blocked[i]=!0,setTimeout(function(){e.blocked[i]=!1,s&&Y.call(o,s,r)},e.interval)}function $(){var e=this;C.call(this),P(this.store.elements,function(e){var t=[e.styles.inline.generated];e.visible?(t.push(e.styles.opacity.computed),t.push(e.styles.transform.generated.final),e.revealed=!0):(t.push(e.styles.opacity.generated),t.push(e.styles.transform.generated.initial),e.revealed=!1),e.node.setAttribute("style",t.filter(function(e){return""!==e}).join(" "))}),P(this.store.containers,function(t){var n=t.node===document.documentElement?window:t.node;n.addEventListener("scroll",e.delegate),n.addEventListener("resize",e.delegate)}),this.delegate(),this.initTimeout=null}function B(e){return void 0===e&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}function K(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(I(e))return P(t,function(t){P(t,function(t,n){I(t)?(e[n]&&I(e[n])||(e[n]={}),K(e[n],t)):e[n]=t})}),e;throw new TypeError("Target must be an object literal.")}function X(e,t,n){var r=this;void 0===t&&(t={}),void 0===n&&(n=!1);var o,i=[],a=t.interval||k.interval;try{a&&(o=new _(a));var s=w(e);if(!s.length)throw new Error("Invalid reveal target.");var c=s.reduce(function(e,n){var a={},s=n.getAttribute("data-sr-id");s?(K(a,r.store.elements[s]),a.node.setAttribute("style",a.styles.inline.computed)):(a.id=U(),a.node=n,a.seen=!1,a.revealed=!1,a.visible=!1);var c=K({},a.config||r.defaults,t);if(!c.mobile&&B()||!c.desktop&&!B())return s&&F.call(r,a),e;var l,u=w(c.container)[0];if(!u)throw new Error("Invalid container.");return u.contains(n)?(null===(l=function(e){var t=[],n=arguments.length-1;for(;n-- >0;)t[n]=arguments[n+1];var r=null;return P(t,function(t){P(t,function(t){null===r&&t.node===e&&(r=t.id)})}),r}(u,i,r.store.containers))&&(l=U(),i.push({id:l,node:u})),a.config=c,a.containerId=l,a.styles=D(a),o&&(a.sequence={id:o.id,index:o.members.length},o.members.push(a.id)),e.push(a),e):e},[]);P(c,function(e){r.store.elements[e.id]=e,e.node.setAttribute("data-sr-id",e.id)})}catch(e){return R.call(this,"Reveal failed.",e.message)}P(i,function(e){r.store.containers[e.id]={id:e.id,node:e.node}}),o&&(this.store.sequences[o.id]=o),!0!==n&&(this.store.history.push({target:e,options:t}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout($.bind(this),0))}var G=Math.sign||function(e){return(e>0)-(e<0)||+e};function V(e,t){var n=t?e.node.clientHeight:e.node.offsetHeight,r=t?e.node.clientWidth:e.node.offsetWidth,o=0,i=0,a=e.node;do{isNaN(a.offsetTop)||(o+=a.offsetTop),isNaN(a.offsetLeft)||(i+=a.offsetLeft),a=a.offsetParent}while(a);return{bounds:{top:o,right:i+r,bottom:o+n,left:i},height:n,width:r}}function Z(e,t){var n=this;void 0===e&&(e={type:"init"}),void 0===t&&(t=this.store.elements),j(function(){var r="init"===e.type||"resize"===e.type;P(n.store.containers,function(e){r&&(e.geometry=V.call(n,e,!0));var t=function(e){var t,n;return e.node===document.documentElement?(t=window.pageYOffset,n=window.pageXOffset):(t=e.node.scrollTop,n=e.node.scrollLeft),{top:t,left:n}}.call(n,e);e.scroll&&(e.direction={x:G(t.left-e.scroll.left),y:G(t.top-e.scroll.top)}),e.scroll=t}),P(t,function(e){r&&(e.geometry=V.call(n,e)),e.visible=function(e){void 0===e&&(e={});var t=this.store.containers[e.containerId];if(t){var n=Math.max(0,Math.min(1,e.config.viewFactor)),r=e.config.viewOffset,o=e.geometry.bounds.top+e.geometry.height*n,i=e.geometry.bounds.right-e.geometry.width*n,a=e.geometry.bounds.bottom-e.geometry.height*n,s=e.geometry.bounds.left+e.geometry.width*n,c=t.geometry.bounds.top+t.scroll.top+r.top,l=t.geometry.bounds.right+t.scroll.left-r.right,u=t.geometry.bounds.bottom+t.scroll.top-r.bottom,d=t.geometry.bounds.left+t.scroll.left+r.left;return o<u&&i>d&&a>c&&s<l||"fixed"===e.styles.position}}.call(n,e)}),P(t,function(e){e.sequence?Y.call(n,e):H.call(n,e)}),n.pristine=!1})}var ee,te,ne,re,oe,ie,ae,se,ce="4.0.5";function le(e){var t;if(void 0===e&&(e={}),void 0===this||Object.getPrototypeOf(this)!==le.prototype)return new le(e);if(!le.isSupported())return R.call(this,"Instantiation failed.","This browser is not supported."),M.failure();try{t=K({},ie||k,e)}catch(e){return R.call(this,"Invalid configuration.",e.message),M.failure()}try{if(!w(t.container)[0])throw new Error("Invalid container.")}catch(e){return R.call(this,e.message),M.failure()}return!(ie=t).mobile&&B()||!ie.desktop&&!B()?(R.call(this,"This device is disabled.","desktop: "+ie.desktop,"mobile: "+ie.mobile),M.failure()):(M.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,ee=ee||Z.bind(this),te=te||function(){var e=this;P(this.store.elements,function(e){e.node.setAttribute("style",e.styles.inline.generated),e.node.removeAttribute("data-sr-id")}),P(this.store.containers,function(t){var n=t.node===document.documentElement?window:t.node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}.bind(this),ne=ne||X.bind(this),re=re||F.bind(this),oe=oe||function(){var e=this;P(this.store.history,function(t){X.call(e,t.target,t.options,!0)}),$.call(this)}.bind(this),Object.defineProperty(this,"delegate",{get:function(){return ee}}),Object.defineProperty(this,"destroy",{get:function(){return te}}),Object.defineProperty(this,"reveal",{get:function(){return ne}}),Object.defineProperty(this,"clean",{get:function(){return re}}),Object.defineProperty(this,"sync",{get:function(){return oe}}),Object.defineProperty(this,"defaults",{get:function(){return ie}}),Object.defineProperty(this,"version",{get:function(){return ce}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),se||(se=this))}le.isSupported=function(){return("transform"in(e=document.documentElement.style)||"WebkitTransform"in e)&&function(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}();var e},Object.defineProperty(le,"debug",{get:function(){return ae||!1},set:function(e){return ae="boolean"==typeof e?e:ae}}),le();var ue,de,fe,me=le;window.sr=new me((fe=!1,(de="reset")in(ue={reset:!0,distance:"30px"})?Object.defineProperty(ue,de,{value:fe,enumerable:!0,configurable:!0,writable:!0}):ue[de]=fe,ue)),sr.reveal("main > section");sr.reveal("figure.cube > img",{beforeReset:function(e){e.classList.remove("active")},beforeReveal:function(e){e.classList.add("active")}}),sr.reveal("figure.cube",{origin:"top",distance:"30px",delay:300});for(var pe=100;pe<1e3;pe+=100)sr.reveal(".delay2-"+pe,{delay:pe});sr.reveal("#about .wrap",{delay:300}),sr.reveal("#team .profile",{delay:300}),sr.reveal("#services .mining h1",{distance:"50px"}),sr.reveal("#services .mining li",{delay:300,distance:"50px"}),sr.reveal("#services .advisory h1",{distance:"50px"}),sr.reveal("#services .advisory li",{delay:300,distance:"50px"}),sr.reveal("#portfolio li",{delay:300}),sr.reveal("#partners li",{delay:300}),sr.reveal("#contact .address",{delay:300}),sr.reveal("#contact input",{delay:300}),sr.reveal("#contact textarea",{delay:300}),sr.reveal("#contact button",{delay:300});var ye=o.hamburger,he=o.nav,ve=Array.from(o.li),ge=function(e){ye.classList.toggle("is-active"),he.classList.toggle("active")};ye.addEventListener("click",ge),ve.map(function(e){e.addEventListener("click",ge)});var be=Array.from(o.li),we=Array.from(a.section);window.addEventListener("scroll",function(){we.map(function(e,t){var n=e.getBoundingClientRect().top;n>-300&&n<300?be[t].classList.add("active"):be[t].classList.remove("active"),4===t&&n<-150&&(be[t].classList.remove("active"),be[5].classList.add("active"))})});var Se=s.name,Ee=s.email,Oe=s.message,Ae=s.button;s.self.addEventListener("keyup",function(){Se.value.length>0&&Ee.value.length>0&&Oe.value.length>0?Ae.classList.add("can-send"):Ae.classList.remove("can-send")})}]);
//# sourceMappingURL=app.js.map