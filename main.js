(()=>{"use strict";function t(){return function(){const t=document.createElement("div");return t.textContent="HOME CONTENT",t}()}const e=document.createElement("div");e.classList.add("main-content");const n={home:a("HOME","home"),menu:a("MENU","menu"),contact:a("CONTACT","contact")};let c,o,d;function i(t){for(let t of Object.values(n))t.classList.remove("active");t.classList.add("active")}function a(t,e){const n=document.createElement("div");return n.id=e,n.classList.add("tab"),n.textContent=t,n.addEventListener("click",s),n}function s(a){!function(){for(;e.firstChild;)e.removeChild(e.firstChild)}();const s=a.target.id;let r;"home"===s?(c||(c=t()),r=c):"menu"===s?(o||(o=function(){const t=document.createElement("div");return t.textContent="MENU CONTENT",t}()),r=o):"contact"===s&&(d||(d=function(){const t=document.createElement("div");return t.textContent="CONTACT CONTENT",t}()),r=d),i(n[s]),e.appendChild(r)}!function(){const o=document.querySelector("#content");o.appendChild(function(){const t=document.createElement("div"),e=document.createElement("div");e.classList.add("tab-list");for(let t of Object.values(n))e.appendChild(t);return i(n.home),t.appendChild(e),t}()),o.appendChild(e),c||(c=t()),e.appendChild(c)}()})();