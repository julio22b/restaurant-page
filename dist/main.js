!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=(e,t,n,o)=>{const r=document.querySelector(`${e}`),c=document.createElement(`${t}`);c.textContent=`${n}`,c.classList.add(`${o}`),r.appendChild(c)};function r(){document.querySelector(".menu-items-wrapper").style.display="none"}function c(){document.querySelector("h1").style.display="none",document.querySelector(".description").style.display="none"}function i(){document.querySelector(".contactWrapper").style.display="none"}o("#content","div","","tabsWrapper"),o(".tabsWrapper","div","Home","home"),o(".tabsWrapper","div","Menu","menu"),o(".tabsWrapper","div","Contact","contact"),o("#content","h1","CitoBar","header"),o("#content","div","","description"),o(".description","p","Gastronomy"),o(".description","p","Events"),o(".description","p","Live Music"),o(".description","p","Cocktails and Drinks"),o(".description","p","Open every day from 11:00 AM"),function(){o("#content","div","","menu-items-wrapper");for(let e=1;e<5;e++)o(".menu-items-wrapper","div","",`menu-item${e}`);o(".menu-item1","span","Delicious pancakes with sliced strawberry","item-description"),o(".menu-item2","span","Gourment hamburger with fries","item-description"),o(".menu-item3","span","Mouthwatering brownies","item-description"),o(".menu-item4","span","Exquisite blue curacao with ice","item-description")}(),o("#content","div","","contactWrapper"),o(".contactWrapper","p","Address: 114 San Carlos Rd.\n    North Olmsted, OH 44070"),o(".contactWrapper","p","Phone: (476) 241-4505"),o(".contactWrapper","p","Email: citobar@fakebar.com");const u=document.querySelector(".menu");u.addEventListener("click",c),u.addEventListener("click",i),u.addEventListener("click",(function(){document.querySelector(".menu-items-wrapper").style.display="flex",document.querySelector(".menu").style.color="rgb(158,39, 39)",document.querySelector(".menu").style.textShadow="1px 1px 1px white",document.querySelector(".home").style.color="white",document.querySelector(".home").style.textShadow="none",document.querySelector(".contact").style.color="white",document.querySelector(".contact").style.textShadow="none"}));const l=document.querySelector(".home");l.addEventListener("click",i),l.addEventListener("click",r),l.addEventListener("click",(function(){document.querySelector(".home").style.color="rgb(158,39, 39)",document.querySelector(".home").style.textShadow="1px 1px 1px white",document.querySelector(".menu").style.color="white",document.querySelector(".menu").style.textShadow="none",document.querySelector(".contact").style.color="white",document.querySelector(".contact").style.textShadow="none",document.querySelector("h1").style.display="block",document.querySelector(".description").style.display="block"}));const d=document.querySelector(".contact");d.addEventListener("click",r),d.addEventListener("click",c),d.addEventListener("click",(function(){document.querySelector(".contactWrapper").style.display="block",document.querySelector(".menu").style.color="white",document.querySelector(".menu").style.textShadow="none",document.querySelector(".home").style.color="white",document.querySelector(".home").style.textShadow="none",document.querySelector(".contact").style.color="rgb(158,39, 39)",document.querySelector(".contact").style.textShadow="1px 1px 1px white"}))}]);