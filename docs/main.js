(()=>{"use strict";var t={192:(t,e,n)=>{n.d(e,{Z:()=>o});var i=n(645),s=n.n(i)()((function(t){return t[1]}));s.push([t.id,"body{margin:0;overflow:hidden}\n",""]);const o=s},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"==typeof t&&(t=[[null,t,""]]);var s={};if(i)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(s[r]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);i&&s[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},404:(t,e,n)=>{n.r(e),n.d(e,{default:()=>r});var i=n(379),s=n.n(i),o=n(192);s()(o.Z,{insert:"head",singleton:!1});const r=o.Z.locals||{}},379:(t,e,n)=>{var i,s=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),o=[];function r(t){for(var e=-1,n=0;n<o.length;n++)if(o[n].identifier===t){e=n;break}return e}function a(t,e){for(var n={},i=[],s=0;s<t.length;s++){var a=t[s],c=e.base?a[0]+e.base:a[0],h=n[c]||0,u="".concat(c," ").concat(h);n[c]=h+1;var l=r(u),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==l?(o[l].references++,o[l].updater(d)):o.push({identifier:u,updater:m(d,e),references:1}),i.push(u)}return i}function c(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var r=s(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var h,u=(h=[],function(t,e){return h[t]=e,h.filter(Boolean).join("\n")});function l(t,e,n,i){var s=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=u(e,s);else{var o=document.createTextNode(s),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}function d(t,e,n){var i=n.css,s=n.media,o=n.sourceMap;if(s?t.setAttribute("media",s):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var f=null,v=0;function m(t,e){var n,i,s;if(e.singleton){var o=v++;n=f||(f=c(e)),i=l.bind(null,n,o,!1),s=l.bind(null,n,o,!0)}else n=c(e),i=d.bind(null,n,e),s=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else s()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var n=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<n.length;i++){var s=r(n[i]);o[s].references--}for(var c=a(t,e),h=0;h<n.length;h++){var u=r(n[h]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=c}}}},235:(t,e)=>{e.__esModule=!0,e.Canvas=void 0;var n=function(){function t(){this.element=document.querySelector("canvas"),this.ctx=this.element.getContext("2d"),this.resizeCanvas()}return t.prototype.resizeCanvas=function(){window.innerWidth===this.element.width&&window.innerHeight===this.element.height||(this.element.width=window.innerWidth,this.element.height=window.innerHeight)},t}();e.Canvas=n},550:(t,e)=>{e.__esModule=!0,e.colors=void 0,e.colors={blue:"#30c5ffff",lightBlue:"#a0dde6ff",black:"#2a2d34ff",green:"#5c946eff",lightGreen:"#80c2afff"}},565:(t,e,n)=>{e.__esModule=!0,e.Draw=void 0;var i=n(593),s=function(){function t(t,e){var n=this;this.mouse=new i.Utils.Mouse,this.frequency=.03,this.increment=.03,this.amplitude=100,this.sin=function(t){return Math.sin(t*n.waveLength+n.increment)*n.amplitude},this.cos=function(t){return Math.cos(t*n.waveLength+n.increment)*n.amplitude},this.canvas=t,this.ctx=t.getContext("2d"),this.x=t.width/2,this.y=t.height/2,this.waveLength=e,this.color=i.Utils.randomColor()}return t.prototype.update=function(){this.x=this.canvas.width/2,this.y=this.canvas.height/2,this.mouseDistance=this.mouse.getMouseDistance(this.x,this.y),this.amplitude=(this.canvas.width>this.canvas.height?this.canvas.width-this.canvas.height-this.mouseDistance:this.canvas.height-this.canvas.width-this.mouseDistance)/5,this.increment+=this.frequency,this.effect1()},t.prototype.effect1=function(){this.ctx.beginPath(),this.ctx.moveTo(this.x+this.sin((this.canvas.width/2-this.mouseDistance)/3),this.y+this.cos(this.mouseDistance/2)),this.ctx.lineTo(this.x+this.cos((this.canvas.width/2-this.mouseDistance)/2),this.y+this.cos((this.canvas.width/2-this.mouseDistance)/3)),this.ctx.strokeStyle=this.color,this.ctx.lineWidth=2,this.ctx.stroke()},t.prototype.effect2=function(){this.ctx.beginPath(),this.ctx.moveTo(this.x+this.sin((this.canvas.width/2-this.mouseDistance)/3),this.y+this.cos(this.mouseDistance/2)),this.ctx.lineTo(this.x+this.cos((this.canvas.width/2-this.mouseDistance)/2),this.y+this.cos((this.canvas.width/2-this.mouseDistance)/3)),this.ctx.strokeStyle=this.color,this.ctx.lineWidth=2,this.ctx.stroke()},t}();e.Draw=s},607:(t,e,n)=>{n(404);var i=n(235),s=n(550),o=n(416),r=new i.Canvas,a=new o.Swarm(r.element,20),c=function(){r.resizeCanvas(),requestAnimationFrame(c),r.ctx.fillStyle=s.colors.black,r.ctx.fillRect(0,0,r.element.width,r.element.height),a.update()};c()},416:(t,e,n)=>{e.__esModule=!0,e.Swarm=void 0;var i=n(565),s=function(){function t(t,e){this.swarmArr=[],this.nAmount=e,this.canvas=t,this.spawnSwarm()}return t.prototype.spawnSwarm=function(){for(var t=0;t<this.nAmount;t++){var e=t/1e3;this.swarmArr.push(new i.Draw(this.canvas,e))}},t.prototype.update=function(){this.swarmArr.forEach((function(t){t.update()}))},t}();e.Swarm=s},593:(t,e,n)=>{e.__esModule=!0,e.Utils=void 0;var i,s,o=n(550);i=e.Utils||(e.Utils={}),s=function(){function t(){var t=this;this.mouse={x:0,y:0},addEventListener("mousemove",(function(e){t.mouse.x=e.clientX,t.mouse.y=e.clientY}))}return t.prototype.getMouseDistance=function(t,e){return i.getDistance(t,e,this.mouse.x,this.mouse.y)},t}(),i.Mouse=s,i.getDistance=function(t,e,n,i){return Math.sqrt(Math.pow(n-t,2)+Math.pow(i-e,2))},i.randomColor=function(){var t=[];for(var e in o.colors)"black"!==e&&t.push(e);var n=t[i.random(t.length-1)];return o.colors[n]},i.random=function(t,e,n){void 0===e&&(e=0),void 0===n&&(n=!0);var i=Math.random()*(t-e)+e;return n?Math.floor(i):i}}},e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={id:i,exports:{}};return t[i](s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(607)})();