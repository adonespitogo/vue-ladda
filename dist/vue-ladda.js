!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueLadda=e():t.VueLadda=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,n){n(9);var r=n(7)(n(1),n(8),null,null);r.options.__file="/home/adonesp/Projects/vue-ladda/src/vue-ladda.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] vue-ladda.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(5),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default={name:"VueLadda",props:{buttonClass:{type:[String,Object],default:"ladda-button"},dataStyle:{type:String,default:"expand-left"},loading:{type:Boolean,required:!0},progress:{validator:function(t){return t>=0&&t<=1},default:0}},watch:{loading:function(t){t?this.ladda.start():this.ladda.stop()},progress:function(t){this.ladda.setProgress(t)}},methods:{handleClick:function(t){this.$emit("click",t)}},mounted:function(){this.ladda=o.default.create(this.$refs.ladda),this.loading?this.ladda.start():this.ladda.stop()},beforeDestroy:function(){this.ladda.remove(),delete this.ladda}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=function(t){return t&&t.__esModule?t:{default:t}}(r),a={install:function(t,e){t.component("vue-ladda",o.default)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(a),e.default=o.default},function(t,e,n){e=t.exports=n(4)(!1),e.push([t.i,"",""])},function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var a=r(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([a]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){/*!
 * Ladda
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2016 Hakim El Hattab, http://hakim.se
 */
!function(e,r){"use strict";t.exports=r(n(6))}(0,function(t){"use strict";function e(t){if(void 0===t)return void console.warn("Ladda button target must be defined.");if(/ladda-button/i.test(t.className)||(t.className+=" ladda-button"),t.hasAttribute("data-style")||t.setAttribute("data-style","expand-right"),!t.querySelector(".ladda-label")){var e=document.createElement("span");e.className="ladda-label",s(t,e)}var n,r=t.querySelector(".ladda-spinner");r||(r=document.createElement("span"),r.className="ladda-spinner"),t.appendChild(r);var o,a={start:function(){return n||(n=i(t)),t.disabled=!0,t.setAttribute("data-loading",""),clearTimeout(o),n.spin(r),this.setProgress(0),this},startAfter:function(t){return clearTimeout(o),o=setTimeout(function(){a.start()},t),this},stop:function(){return a.isLoading()&&(t.disabled=!1,t.removeAttribute("data-loading")),clearTimeout(o),n&&(o=setTimeout(function(){n.stop()},1e3)),this},toggle:function(){return this.isLoading()?this.stop():this.start()},setProgress:function(e){e=Math.max(Math.min(e,1),0);var n=t.querySelector(".ladda-progress");0===e&&n&&n.parentNode?n.parentNode.removeChild(n):(n||(n=document.createElement("div"),n.className="ladda-progress",t.appendChild(n)),n.style.width=(e||0)*t.offsetWidth+"px")},enable:function(){return this.stop()},disable:function(){return this.stop(),t.disabled=!0,this},isLoading:function(){return t.hasAttribute("data-loading")},remove:function(){clearTimeout(o),t.disabled=!1,t.removeAttribute("data-loading"),n&&(n.stop(),n=null),d.splice(d.indexOf(a),1)}};return d.push(a),a}function n(t,e){for(;t.parentNode&&t.tagName!==e;)t=t.parentNode;return e===t.tagName?t:void 0}function r(t){var e=["input","textarea","select"],n=[];return e.forEach(function(e){for(var r=t.getElementsByTagName(e),o=0;o<r.length;o++)r[o].hasAttribute("required")&&n.push(r[o])}),n}function o(t,e){var n;if("string"==typeof t)n=document.querySelectorAll(t);else{if("object"!=typeof t)throw new Error("target must be string or object");n=[t]}e=e||{};for(var r=0;r<n.length;r++)u(n[r],e)}function a(){for(var t=0,e=d.length;t<e;t++)d[t].stop()}function i(e){var n,r,o=e.offsetHeight;0===o&&(o=parseFloat(window.getComputedStyle(e).height)),o>32&&(o*=.8),e.hasAttribute("data-spinner-size")&&(o=parseInt(e.getAttribute("data-spinner-size"),10)),e.hasAttribute("data-spinner-color")&&(n=e.getAttribute("data-spinner-color")),e.hasAttribute("data-spinner-lines")&&(r=parseInt(e.getAttribute("data-spinner-lines"),10));var a=.2*o,i=.6*a,s=a<7?2:3;return new t({color:n||"#fff",lines:r||12,radius:a,length:i,width:s,zIndex:"auto",top:"auto",left:"auto",className:""})}function s(t,e){var n=document.createRange();n.selectNodeContents(t),n.surroundContents(e),t.appendChild(e)}function u(t,o){if("function"==typeof t.addEventListener){var a=e(t),i=-1;t.addEventListener("click",function(){var e=!0,s=n(t,"FORM");if(void 0!==s&&!s.hasAttribute("novalidate"))if("function"==typeof s.checkValidity)e=s.checkValidity();else for(var u=r(s),d=0;d<u.length;d++){var l=u[d],c=l.getAttribute("type");if(""===l.value.replace(/^\s+|\s+$/g,"")&&(e=!1),"checkbox"!==c&&"radio"!==c||l.checked||(e=!1),"email"===c&&(e=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i.test(l.value)),"url"===c&&(e=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(l.value)),!e)break}e&&(a.startAfter(1),"number"==typeof o.timeout&&(clearTimeout(i),i=setTimeout(a.stop,o.timeout)),"function"==typeof o.callback&&o.callback.apply(null,[a]))},!1)}}var d=[];return{bind:o,create:e,stopAll:a}})},function(t,e,n){var r,o;!function(a,i){"object"==typeof t&&t.exports?t.exports=i():(r=i,void 0!==(o="function"==typeof r?r.call(e,n,e,t):r)&&(t.exports=o))}(0,function(){"use strict";function t(t,e){var n,r=document.createElement(t||"div");for(n in e)r[n]=e[n];return r}function e(t){for(var e=1,n=arguments.length;e<n;e++)t.appendChild(arguments[e]);return t}function n(t,e,n,r){var o=["opacity",e,~~(100*t),n,r].join("-"),a=.01+n/r*100,i=Math.max(1-(1-t)/e*(100-a),t),s=u.substring(0,u.indexOf("Animation")).toLowerCase(),l=s&&"-"+s+"-"||"";return c[o]||(d.insertRule("@"+l+"keyframes "+o+"{0%{opacity:"+i+"}"+a+"%{opacity:"+t+"}"+(a+.01)+"%{opacity:1}"+(a+e)%100+"%{opacity:"+t+"}100%{opacity:"+i+"}}",d.cssRules.length),c[o]=1),o}function r(t,e){var n,r,o=t.style;if(e=e.charAt(0).toUpperCase()+e.slice(1),void 0!==o[e])return e;for(r=0;r<l.length;r++)if(n=l[r]+e,void 0!==o[n])return n}function o(t,e){for(var n in e)t.style[r(t,n)||n]=e[n];return t}function a(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)void 0===t[r]&&(t[r]=n[r])}return t}function i(t,e){return"string"==typeof t?t:t[e%t.length]}function s(t){this.opts=a(t||{},s.defaults,f)}var u,d,l=["webkit","Moz","ms","O"],c={},f={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",opacity:.25,rotate:0,direction:1,speed:1,trail:100,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:!1,hwaccel:!1,position:"absolute"};if(s.defaults={},a(s.prototype,{spin:function(e){this.stop();var n=this,r=n.opts,a=n.el=t(null,{className:r.className});if(o(a,{position:r.position,width:0,zIndex:r.zIndex,left:r.left,top:r.top}),e&&e.insertBefore(a,e.firstChild||null),a.setAttribute("role","progressbar"),n.lines(a,n.opts),!u){var i,s=0,d=(r.lines-1)*(1-r.direction)/2,l=r.fps,c=l/r.speed,f=(1-r.opacity)/(c*r.trail/100),p=c/r.lines;!function t(){s++;for(var e=0;e<r.lines;e++)i=Math.max(1-(s+(r.lines-e)*p)%c*f,r.opacity),n.opacity(a,e*r.direction+d,i,r);n.timeout=n.el&&setTimeout(t,~~(1e3/l))}()}return n},stop:function(){var t=this.el;return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),this.el=void 0),this},lines:function(r,a){function s(e,n){return o(t(),{position:"absolute",width:a.scale*(a.length+a.width)+"px",height:a.scale*a.width+"px",background:e,boxShadow:n,transformOrigin:"left",transform:"rotate("+~~(360/a.lines*l+a.rotate)+"deg) translate("+a.scale*a.radius+"px,0)",borderRadius:(a.corners*a.scale*a.width>>1)+"px"})}for(var d,l=0,c=(a.lines-1)*(1-a.direction)/2;l<a.lines;l++)d=o(t(),{position:"absolute",top:1+~(a.scale*a.width/2)+"px",transform:a.hwaccel?"translate3d(0,0,0)":"",opacity:a.opacity,animation:u&&n(a.opacity,a.trail,c+l*a.direction,a.lines)+" "+1/a.speed+"s linear infinite"}),a.shadow&&e(d,o(s("#000","0 0 4px #000"),{top:"2px"})),e(r,e(d,s(i(a.color,l),"0 0 1px rgba(0,0,0,.1)")));return r},opacity:function(t,e,n){e<t.childNodes.length&&(t.childNodes[e].style.opacity=n)}}),"undefined"!=typeof document){d=function(){var n=t("style",{type:"text/css"});return e(document.getElementsByTagName("head")[0],n),n.sheet||n.styleSheet}();var p=o(t("group"),{behavior:"url(#default#VML)"});!r(p,"transform")&&p.adj?function(){function n(e,n){return t("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',n)}d.addRule(".spin-vml","behavior:url(#default#VML)"),s.prototype.lines=function(t,r){function a(){return o(n("group",{coordsize:l+" "+l,coordorigin:-d+" "+-d}),{width:l,height:l})}function s(t,s,u){e(f,e(o(a(),{rotation:360/r.lines*t+"deg",left:~~s}),e(o(n("roundrect",{arcsize:r.corners}),{width:d,height:r.scale*r.width,left:r.scale*r.radius,top:-r.scale*r.width>>1,filter:u}),n("fill",{color:i(r.color,t),opacity:r.opacity}),n("stroke",{opacity:0}))))}var u,d=r.scale*(r.length+r.width),l=2*r.scale*d,c=-(r.width+r.length)*r.scale*2+"px",f=o(a(),{position:"absolute",top:c,left:c});if(r.shadow)for(u=1;u<=r.lines;u++)s(u,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(u=1;u<=r.lines;u++)s(u);return e(t,f)},s.prototype.opacity=function(t,e,n,r){var o=t.firstChild;r=r.shadow&&r.lines||0,o&&e+r<o.childNodes.length&&(o=o.childNodes[e+r],o=o&&o.firstChild,(o=o&&o.firstChild)&&(o.opacity=n))}}():u=r(p,"animation")}return s})},function(t,e){t.exports=function(t,e,n,r){var o,a=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(o=t,a=t.default);var s="function"==typeof a?a.options:a;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),r){var u=Object.create(s.computed||null);Object.keys(r).forEach(function(t){var e=r[t];u[t]=function(){return e}}),s.computed=u}return{esModule:o,exports:a,options:s}}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{ref:"ladda",class:t.buttonClass,attrs:{"data-style":t.dataStyle},on:{click:t.handleClick}},[t._t("default",[n("span",{staticClass:"ladda-label"},[t._v("Submit")])])],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e,n){var r=n(3);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(10)("e5cb09de",r,!1)},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=l[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(a(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],o=0;o<n.parts.length;o++)i.push(a(n.parts[o]));l[n.id]={id:n.id,refs:1,parts:i}}}}function o(){var t=document.createElement("style");return t.type="text/css",c.appendChild(t),t}function a(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(m){var a=p++;r=f||(f=o()),e=i.bind(null,r,a,!1),n=i.bind(null,r,a,!0)}else r=o(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function i(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=F(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function s(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=n(11),l={},c=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var o=d(t,e);return r(o),function(e){for(var n=[],a=0;a<o.length;a++){var i=o[a],s=l[i.id];s.refs--,n.push(s)}e?(o=d(t,e),r(o)):o=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete l[s.id]}}}};var F=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=a[0],s=a[1],u=a[2],d=a[3],l={id:t+":"+o,css:s,media:u,sourceMap:d};r[i]?r[i].parts.push(l):n.push(r[i]={id:i,parts:[l]})}return n}}])});