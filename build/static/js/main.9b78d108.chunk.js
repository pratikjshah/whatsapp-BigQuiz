(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(60),i=t.n(o),c=t(124),l=t(125),u=t(29),s=t.n(u),d=t(61),m=t(5),f=t(21),h=t(62),p=t(1),b=t(2);function g(){var n=Object(p.a)(["\n  display: inline-flex;\n  padding: 8px 10px;\n  border-radius: 6px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n"]);return g=function(){return n},n}function v(){var n=Object(p.a)(["\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n"]);return v=function(){return n},n}function y(){var n=Object(p.a)(["\n  appearance: none;\n  font: inherit;\n  color: inherit;\n"]);return y=function(){return n},n}function k(){var n=Object(p.a)(["\n  font-size: 100%;\n  font-family: inherit;\n  padding: 0;\n  border: 0;\n  margin: 0;\n  appearance: none;\n  box-shadow: none;\n"]);return k=function(){return n},n}function x(){var n=Object(p.a)(["\n  text-indent: 101%;\n  overflow: hidden;\n  white-space: nowrap;\n"]);return x=function(){return n},n}function O(){var n=Object(p.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n"]);return O=function(){return n},n}var w=Object(b.b)(O()),E=Object(b.b)(x()),j=Object(b.b)(k()),S=Object(b.b)(y()),A=Object(b.b)(v()),C=Object(b.b)(g()),M=["#1f7aec","#fe7c7f","#6bcbef","#fc644b","#35cd96","#e542a3","#91ab01","#ba33dc","#ffa97a","#029d00","#dfb610"];function T(){var n=Object(p.a)(["\n  flex: 0 0 auto;\n  align-self: flex-end;\n  margin-left: 1rem;\n  white-space: nowrap;\n  font-size: 75%;\n  opacity: 0.6;\n\n  @media (max-width: 699px) {\n    margin-top: 0.25rem;\n  }\n"]);return T=function(){return n},n}function D(){var n=Object(p.a)(["\n  ","\n\n  white-space: pre-wrap;\n"]);return D=function(){return n},n}function B(){var n=Object(p.a)(["\n  margin-bottom: 0.25rem;\n  font-weight: bold;\n  font-size: 75%;\n  color: ",";\n"]);return B=function(){return n},n}function R(){var n=Object(p.a)(["\n  flex: 1 1 auto;\n"]);return R=function(){return n},n}function L(){var n=Object(p.a)(["\n      flex-flow: column;\n    "]);return L=function(){return n},n}function P(){var n=Object(p.a)(["\n      text-align: left;\n      background-color: ",";\n    "]);return P=function(){return n},n}function G(){var n=Object(p.a)(["\n      text-align: left;\n      background-color: ",";\n    "]);return G=function(){return n},n}function z(){var n=Object(p.a)(["\n      background-color: ",";\n    "]);return z=function(){return n},n}function K(){var n=Object(p.a)(["\n  ","\n\n  background-color: white;\n  max-width: 84%;\n  ","\n  ","\n  ","\n  ","\n\n  @media (max-width: 699px) {\n    flex-direction: column;\n  }\n\n  @media (min-width: 700px) {\n    max-width: 65%;\n  }\n\n  .media {\n    max-width: 100%;\n    max-height: 50vh;\n  }\n"]);return K=function(){return n},n}function N(){var n=Object(p.a)(["\n      margin-top: 0.25rem;\n    "]);return N=function(){return n},n}function J(){var n=Object(p.a)(["\n      text-align: right;\n    "]);return J=function(){return n},n}function F(){var n=Object(p.a)(["\n      text-align: center;\n    "]);return F=function(){return n},n}function H(){var n=Object(p.a)(["\n  margin-top: 1rem;\n  margin-left: auto;\n  margin-right: auto;\n  ","\n  ","\n  ","\n"]);return H=function(){return n},n}var I=b.c.li(H(),function(n){return n.isSystem&&Object(b.b)(F())},function(n){return n.isActiveUser&&Object(b.b)(J())},function(n){return n.sameAuthorAsPrevious&&Object(b.b)(N())}),V=b.c.div(K(),C,function(n){return n.isSystem&&Object(b.b)(z(),"#fff5c4")},function(n){return n.isActiveUser&&Object(b.b)(G(),"#ddf7c8")},function(n){return n.isQuestion&&Object(b.b)(P(),"#c8f0ff")},function(n){return n.hasAttachment&&Object(b.b)(L())}),q=b.c.div(R()),Q=b.c.div(B(),function(n){return n.color}),U=b.c.div(D(),A),W=b.c.time(T());function _(n){return new Date(n).toLocaleDateString("en-IN",{weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0})}function Y(n){var e=n.message;if(n.hasAttachment){var t=e.split(" (file attached)")[0],a=e.split(" (file attached)")[1],r='<img class="media" src="./media/'+t+'" />';0===t.indexOf("VID")&&(r='<video width="auto" class="media" controls><source src="./media/'+t+'" type="video/mp4">Your browser does not support HTML5 video.</video>'),e=r+a}return e}var Z=function(n){var e=n.message,t=n.color,a=n.isActiveUser,o=n.sameAuthorAsPrevious,i=n.isQuestion,c=n.hasAttachment,l="System"===e.author,u=_(e.date);return r.a.createElement(I,{isSystem:l,isActiveUser:a,sameAuthorAsPrevious:o},r.a.createElement(V,{isSystem:l,isActiveUser:a,isQuestion:i,hasAttachment:c},r.a.createElement(q,null,!l&&r.a.createElement(Q,{color:t},e.author),r.a.createElement(U,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:Y(e)}}))),!l&&r.a.createElement(W,{dateTime:u},_(e.date))))};Z.defaultProps={color:"black",isActiveUser:!1,sameAuthorAsPrevious:!1};var X=Z,$=t(65),nn=t.n($);function en(){var n=Object(p.a)(["\n  ","\n\n  text-align: center;\n  background-color: ",";\n  color: white;\n"]);return en=function(){return n},n}function tn(){var n=Object(p.a)(["\n  text-align: center;\n"]);return tn=function(){return n},n}function an(){var n=Object(p.a)(["\n  padding: 0;\n  list-style: none;\n  max-width: 968px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return an=function(){return n},n}function rn(){var n=Object(p.a)(["\n  flex-grow: 1;\n  padding: 0 1rem;\n  min-height: 90vh;\n  background-color: ",";\n  background-image: url(",");\n\n  @media (min-width: 700px) {\n    padding: 0 2.4rem;\n  }\n"]);return rn=function(){return n},n}var on=b.c.div(rn(),"#e5ddd5",nn.a),cn=b.c.ul(an()),ln=b.c.p(tn()),un=b.c.span(en(),C,"#07bc4c"),sn=function(n){var e=n.messages,t=n.limit,a=Array.from(new Set(e.map(function(n){return n.author}))).filter(function(n){return"System"!==n}),o=1;if(a.length>2){var i=a.length-1;o=Math.floor(Math.random()*(i-1+1)+1)}var c=a[o],l=a.reduce(function(n,e,t){return Object(h.a)({},n,Object(f.a)({},e,M[t%M.length]))},{}),u=e.slice(0,t),s=u.length!==e.length;return r.a.createElement(on,null,e.length>0&&r.a.createElement(ln,null,r.a.createElement(un,null,"Showing ",s?"first":"all"," ",u.length," ","messages ",s&&r.a.createElement("span",null,"(out of ",e.length,")"))),r.a.createElement(cn,null,u.map(function(n,e,t){var a=t[e-1];return r.a.createElement(X,{key:e,message:n,date:n.date,color:l[n.author],isActiveUser:c===n.author,isQuestion:n.isQuestion,hasAttachment:n.hasAttachment,sameAuthorAsPrevious:a&&a.author===n.author})})))};sn.defaultProps={limit:1/0};var dn=r.a.memo(sn),mn=function(){return r.a.createElement("small",null,"Made by ",r.a.createElement("a",{href:"http://pratikshah.website"},"Pratik Shah"))},fn=10,hn=20,pn=t(66),bn=t.n(pn),gn=t(67),vn=t.n(gn);function yn(){var n=Object(p.a)(["\n  padding: 10px;\n  display: flex;\n  align-items: center;\n\n  > *:first-child {\n    flex: 1 1 auto;\n  }\n\n  @media (max-width: 699px) {\n    flex-direction: column;\n\n    > * + * {\n      margin-top: 0.5rem;\n    }\n  }\n\n  @media (min-width: 700px) {\n    > * + * {\n      margin-left: 1rem;\n    }\n  }\n"]);return yn=function(){return n},n}function kn(){var n=Object(p.a)(["\n  font-size: 80%;\n  opacity: 0.6;\n"]);return kn=function(){return n},n}function xn(){var n=Object(p.a)(["\n  ","\n\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  width: 100%;\n  height: 1.8rem;\n  padding: 0 0.3rem;\n  background-color: #fafafa;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.07);\n"]);return xn=function(){return n},n}function On(){var n=Object(p.a)(["\n  display: block;\n  opacity: 0.8;\n"]);return On=function(){return n},n}function wn(){var n=Object(p.a)(["\n  * + * {\n    margin-top: 0.375rem;\n  }\n"]);return wn=function(){return n},n}function En(){var n=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: absolute;\n  top: ",";\n  left: 0;\n  bottom: 0;\n  right: 0;\n  padding: 1rem;\n  border-top: 1px solid #eee;\n"]);return En=function(){return n},n}function jn(){var n=Object(p.a)(["\n  position: fixed;\n  width: 280px;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  background-color: white;\n  transform: translate3d(",", 0, 0);\n  transition: transform 0.3s ease;\n  z-index: ",";\n"]);return jn=function(){return n},n}function Sn(){var n=Object(p.a)(["\n      pointer-events: none;\n    "]);return Sn=function(){return n},n}function An(){var n=Object(p.a)(["\n  ","\n\n  display: block;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  background-color: black;\n  opacity: ",";\n  transition: opacity 0.3s ease;\n  z-index: ",";\n  ","\n"]);return An=function(){return n},n}function Cn(){var n=Object(p.a)(["\n  ","\n  ","\n\n  position: absolute;\n  width: ",";\n  height: ",";\n  top: 0;\n  right: 0;\n  background-color: transparent;\n  opacity: 0.5;\n  transition: opacity 0.3s ease;\n\n  &:hover,\n  &:focus {\n    opacity: 1;\n  }\n\n  &::before,\n  &::after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 20px;\n    height: 2px;\n    top: 50%;\n    left: 50%;\n    transform-origin: 50% 50%;\n    background-color: black;\n  }\n\n  &::before {\n    transform: translate3d(-50%, -50%, 0) rotate(45deg);\n  }\n\n  &::after {\n    transform: translate3d(-50%, -50%, 0) rotate(135deg);\n  }\n"]);return Cn=function(){return n},n}function Mn(){var n=Object(p.a)(["\n  ","\n  ","\n\n  position: fixed;\n  width: ",";\n  height: ",";\n  left: 1rem;\n  bottom: 1rem;\n  border-radius: 50%;\n  background-color: ",";\n\n  &::after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 16px;\n    height: 2px;\n    top: 50%;\n    left: 50%;\n    transform: translate3d(-50%, -50%, 0);\n    background-color: white;\n    box-shadow: 0 -5px 0 white, 0 5px 0 white;\n  }\n\n  @media (min-width: 700px) {\n    left: 2rem;\n    bottom: 2rem;\n  }\n"]);return Mn=function(){return n},n}function Tn(){var n=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n"]);return Tn=function(){return n},n}function Dn(){var n=Object(p.a)(["\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    font-family: sans-serif;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    color: #333;\n  }\n\n  a {\n    text-decoration: none;\n    color: ",";\n\n    &:visited {\n      color: ",";\n    }\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n  html,\n  body {\n    height: 100%;\n  }\n\n  #root {\n    height: auto;\n    background-image: linear-gradient(159deg, #1D1E1F 0%, #151617 77%);\n    background: #5855d6;\n    position: relative;\n    display: block;\n  }\n\n  .rootContainer {\n    background-image: url(",");\n    background-repeat: repeat;\n    background-size: cover;\n    background-attachment: fixed;\n    opacity: 1;\n    display: block;\n    position: relative;\n  }\n\n  media {\n    display: block;\n    min-height: 48px;\n    min-width: 64px;\n    margin: 16px 0;\n    background-image: url(",");\n    background-position: center;\n    background-size: contain;\n    background-repeat: no-repeat;\n    opacity: 0.24;\n\n  }\n\n  .relative {\n    position: relative;\n  }\n  .absolute {\n    position: absolute;\n  }\n\n  .box-shadow {\n    box-shadow: 0 3px 6px 0 rgba(0,0,0,.3);\n  }\n\n  .header {\n    background: #2D384A;\n    background: transparent;\n  }\n  .header .top-header {\n    background: #1F2733;\n    background: transparent;\n    height: 64px;\n    width: 100%;\n    font-size: 24px;\n    line-height: 64px;\n  }\n  .container {\n    z-index: 10;\n  }\n  .container .card {\n    max-width: 992px;\n    margin: 0 auto;\n    -webkit-border-radius: 3px !important;\n    -moz-border-radius: 3px !important;\n    border-radius: 3px !important;\n    border: none !important;\n        background: #ffffff;\n  }\n  .header .card {\n    background: none;\n  }\n  .header .card > div {\n    font-size: 3.25rem;\n    line-height: 3.5rem;\n    margin: 2rem 0 1.4rem;\n    font-weight: 800;\n    color: #fff;\n    display: inline-block;\n    width: 100%;\n    text-align: center;\n  }\n\n  .header .card span.whatsapp {\n    font-size: 1.6rem;\n    display: block;\n    line-height: 2rem;\n  }\n\n  .header .card span.quiz {\n    font-weight: bolder;\n  }\n\n  .quizTitle {\n    display: block;\n    text-align: center;\n    margin: 1.4rem 0;\n    font-size: 1.4rem;\n    font-weight: 900;\n  }\n\n  .footer {\n    padding: 48px 0;\n    background: none !important;\n    color: rgba(255,255,255,0.84);\n    text-align: center;\n    font-size: 1rem;\n  }\n\n  .footer a {\n    color: #ffffff !important;\n    text-decoration: underline;\n  }\n\n"]);return Dn=function(){return n},n}var Bn=Object(b.a)(Dn(),"#07bc4c","#0c9842",vn.a,bn.a),Rn=b.c.div(Tn()),Ln=b.c.button(Mn(),j,E,"44px","44px","#07bc4c"),Pn=b.c.button(Cn(),j,E,"44px","44px"),Gn=b.c.button(An(),j,function(n){return n.isActive?.4:0},fn,function(n){return!n.isActive&&Object(b.b)(Sn())}),zn=b.c.aside(jn(),function(n){return n.isOpen?0:"-100%"},hn),Kn=b.c.div(En(),"44px"),Nn=b.c.div(wn()),Jn=b.c.label(On()),Fn=b.c.input(xn(),S),Hn=b.c.div(kn()),In=b.c.header(yn()),Vn=function(n,e){var t=Object(a.useState)(n),r=Object(m.a)(t,2),o=r[0],i=r[1];return Object(a.useEffect)(function(){var t=setTimeout(function(){i(n)},e);return function(){clearTimeout(t)}},[n,e]),o},qn=function(){var n=Object(a.useState)([]),e=Object(m.a)(n,2),t=e[0],o=e[1],i=Object(a.useState)(5e3),c=Object(m.a)(i,2),l=c[0],u=c[1],f=Object(a.useState)(!1),h=Object(m.a)(f,2),p=h[0],b=h[1],g=Object(a.useRef)(null),v=Object(a.useRef)(null),y=Object(a.useRef)(!0),k=function(){b(!1)};function x(){return(x=Object(d.a)(s.a.mark(function n(){var e,t;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("./__chat.json");case 2:return e=n.sent,n.next=5,e.text();case 5:t=n.sent,o(JSON.parse(t));case 7:case"end":return n.stop()}},n)}))).apply(this,arguments)}return Object(a.useEffect)(function(){y.current?function(){x.apply(this,arguments)}():p?g.current.focus():v.current.focus()},[p]),Object(a.useEffect)(function(){y.current=!1},[]),Object(a.useEffect)(function(){var n=function(n){27===n.keyCode&&k()};return document.addEventListener("keydown",n),function(){return document.removeEventListener("keydown",n)}},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Bn,null),r.a.createElement("div",{className:"header relative"},r.a.createElement("div",{className:"container relative"},r.a.createElement("div",{className:"card relative"},r.a.createElement("div",null,r.a.createElement("span",{className:"quiz"},"BigQuiz \ud83d\udcac"))))),r.a.createElement("div",{className:"container relative"},r.a.createElement("div",{className:"card box-shadow relative"},r.a.createElement(Rn,null,r.a.createElement(dn,{messages:t,limit:Vn(l,5e3)}),r.a.createElement(Ln,{type:"button",onClick:function(){b(!0)},ref:v},"Open menu"),r.a.createElement(Gn,{type:"button",isActive:p,onClick:k,tabIndex:"-1"}),r.a.createElement(zn,{isOpen:p},r.a.createElement(Pn,{type:"button",onClick:k,ref:g},"Close menu"),r.a.createElement(Kn,null,r.a.createElement(Nn,null,r.a.createElement(Jn,{htmlFor:"limit"},"Messages limit"),r.a.createElement(Fn,{id:"limit",type:"number",min:"0",max:t.length,value:l,onChange:function(n){return u(parseInt(n.currentTarget.value,10))}}),r.a.createElement(Hn,null,"A high number may freeze the page for a while, change this with caution")),r.a.createElement("div",null,r.a.createElement(mn,null))))))),r.a.createElement("div",{className:"container relative"},r.a.createElement("div",{className:"card relative footer"},"Developed with \ud83d\udc9c by ",r.a.createElement("a",{href:"http://pratikshah.website",target:"_blank"},"Pratik Shah"))))},Qn=t(68),Un=t.n(Qn),Wn=t(33);function _n(){var n=Object(p.a)(["\n  ","\n\n  &:focus + "," {\n    ","\n  }\n"]);return _n=function(){return n},n}function Yn(){var n=Object(p.a)(["\n  font-family: monospace;\n  background-color: #eee;\n  border: 1px solid #ddd;\n  border-radius: 2px;\n  display: inline-block;\n  padding: 1px 3px;\n"]);return Yn=function(){return n},n}function Zn(){var n=Object(p.a)(["\n  margin: 0;\n"]);return Zn=function(){return n},n}function Xn(){var n=Object(p.a)(["\n  display: block;\n  border-radius: 10px;\n  padding: 20px;\n  border: 2px dashed #ccc;\n  ","\n"]);return Xn=function(){return n},n}function $n(){var n=Object(p.a)(["\n  background-color: #eee;\n  border-color: ",";\n"]);return $n=function(){return n},n}var ne=Object(b.b)($n(),"#07bc4c"),ee=b.c.label(Xn(),function(n){return n.isHighlighted&&ne}),te=b.c.p(Zn()),ae=b.c.span(Yn()),re=b.c.input(_n(),w,ee,ne),oe=function(n){n.preventDefault(),n.stopPropagation()},ie=function(n){var e=n.id,t=n.onFileUpload,o=Object(a.useState)(!1),i=Object(m.a)(o,2),c=i[0],l=i[1],u=function(n){oe(n),l(!0)};return r.a.createElement("form",{onDragEnter:u,onDragOver:u,onDragLeave:function(n){oe(n),l(!1)},onDrop:function(n){oe(n),l(!1),t(n.dataTransfer.files[0])}},r.a.createElement(re,{id:e,type:"file",accept:"text/plain, application/zip",onChange:function(n){return t(n.target.files[0])}}),r.a.createElement(ee,{htmlFor:e,isHighlighted:c},r.a.createElement(te,null,"Click here to upload a file or drag and drop it onto the dashed region (supported formats: ",r.a.createElement(ae,null,"txt"),","," ",r.a.createElement(ae,null,"zip"),")")))},ce=t(69),le=t.n(ce),ue=function(n,e){console.error(e||n),alert(n)},se=function(){var n=Object(a.useState)([]),e=Object(m.a)(n,2),t=e[0],o=e[1],i=Object(a.useState)(5e3),c=Object(m.a)(i,2),l=c[0],u=c[1],s=Object(a.useState)(!1),d=Object(m.a)(s,2),f=d[0],h=d[1],p=Object(a.useRef)(null),b=Object(a.useRef)(null),g=Object(a.useRef)(!0),v=["Yoda","General Crix Madine","Shu Mai","Malakili (Rancor Keeper)","Baze Malbus","Mama the Hutt","Ody Mandrell","Darth Maul","Saelt-Marae (Yak Face)","Mawhonic","Droopy McCool","Pharl McQuarrie","ME-8D9","Lyn Me","Tion Medon","Del Meeko","Aks Moe","Sly Moore","Morley","Moff Delian Mors","Mon Mothma","Admiral Conan Antonio Motti","A'Koba","Admiral Gial Ackbar","Sim Aloo (Imperial Dignitary)","Almec","Mas Amedda","Amee","Padm\u221a\xa9 Amidala","Cassian Andor","Fodesinbeed Annodue","Raymus Antilles","Wedge Antilles","AP-5","Queen Apailana","Sergeant Appo (CC-1119)","Doctor Chelli Lona Aphra","Faro Argyus","Aiolin and Morit Astarte","Ello Asty","Attichitcuk","AZI-3","Ponda Baba (Walrus Man)","Kitster Banai","Cad Bane","Darth Bane","Barada","Jom Barell","Moradmin Bast","BB-8","BB-9E","Tobias Beckett","Val Beckett","The Bendu","Shara Bey","Sio Bibble","Depa Billaba","Jar Jar Binks","Temiri Blagg","Commander Bly","Bobbajo","Dud Bolt","Mister Bones","Lux Bonteri","Mina Bonteri","Borvo the Hutt","Bossk","Ezra Bridger","BT-1 (a.k.a. Bee-Tee)","Sora Bulq","C1-10P (a.k.a. Chopper)","C-3PO","Lando Calrissian","Captain Moden Canady","Ransolm Casterfo","Chewbacca","Chief Chirpa","Rush Clovis","Commander Cody","Lieutenant Kaydel Ko Connix","Captain Jeremoch Colton","Cord\u221a\xa9","Salacious B. Crumb","Arvel Crynyd","Dr. Cylo","Commander Larma D'Acy","Figrin D'an","Kes Dameron","Poe Dameron","Vober Dand","Joclad Danva","Dapp","Biggs Darklighter","General Oro Dassyne","Gizor Dellso","Dengar","Bren Derlin","Ima-Gun Di","Rinnrivin Di","Tan Divo","DJ","Lott Dod","Jan Dodonna","Daultay Dofine","Lushros Dofine","Dogma","Count DookuDarth Tyranus","Dorm\u221a\xa9","Cin Drallig","Garven Dreis (a.k.a. Red Leader)","Droidbait (CT-00-2010)","Rio Durant","Lok Durd","Eirta\u221a\xa9","Dine\u221a\xa9 Ellberger","Ell\u221a\xa9","Caluan Ematt","Embo","Emperor's Royal Guard","Jas Emari","Ebe E. Endocott","Galen Erso","Jyn Erso","Lyra Erso","EV-9D9","Moralo Eval","Doctor Cornelius Evazan","Onaconda Farr","Boba Fett","Jango Fett","Feral","Commander Fil","Finn","Kit Fisto","Clone Trooper Fives","FN-1824","FN-2003 (a.k.a. Slip)","FN-2199 (a.k.a. Nines)","Bib Fortuna","Commander Fox","FX-7","GA-97","Adi Gallia","Gardulla the Hutt","Yarna d'al' Gargan","Garindan (a.k.a. Long Snoot)","Gasgano","Saw Gerrera","Gonk droid (a.k.a. GNK power droid)","Commander Gree","Greedo","Janus Greejatus","Captain Gregor","General Grievous","Grummgar","Gungi","Nute Gunray","Mars Guo","Rune Haako","Hardcase","Rako Hardeen","Gideon Hask","Hevy","San Hill","Clegg Holdfast","Vice Admiral Amilyn Holdo","Tey How","Huyang","Armitage Hux","Brendol Hux","IG-88","Chirrut \u221a\xe9mwe","Inquisitors (Inquisitorius)","Grand Inquisitor","Inquisitor: Fifth Brother","Inquisitor: Sixth Brother","Inquisitor: Seventh Sister","Inquisitor: Eighth Brother","Sidon Ithano","Jabba the Hutt","Queen Jamillia","Wes Janson","Kanan Jarrus","Jaxxon","Greeata Jendowanian","Moff Tiaan Jerjerrod","Commander Jet","Dexter Jettster","Qui-Gon Jinn","Jira","Jubnuk","K-2SO","Tee Watt Kaa","General Kalani","Agent Kallus","Harter Kalonia","Maz Kanata","Colonel Kaplan","Karbin","Karina the Great","Alton Kastle","King Katuunko","Coleman Kcaj","Obi-Wan Kenobi","Ki-Adi-Mundi","Klaatu","Klaud","Klik-Klak","Derek Hobbie Klivian","Agen Kolar","Plo Koon","Eeth Koth","Sergeant Kreel","Pong Krell","Orson Krennic","Black Krrsantan","Bo-Katan Kryze","Satine Kryze","Conder Kyl","Thane Kyrell","L3-37","L'ulo L'ampar","Aito Laff","Beru Whitesun Lars","Cliegg Lars","Owen Lars","Cut Lawquane","Tasu Leech","Xamuel Lennox","Tallissan Tallie Lintra","Slowen Lo","Lobot","Logray","Lumat","General Crix Madine","Shu Mai","Malakili (Rancor Keeper)","Baze Malbus","Mama the Hutt","Ody Mandrell","Darth Maul","Saelt-Marae (Yak Face)","Mawhonic","Droopy McCool","Pharl McQuarrie","ME-8D9","Lyn Me","Tion Medon","Del Meeko","Aks Moe","Sly Moore","Morley","Moff Delian Mors","Mon Mothma","Admiral Conan Antonio Motti","Jobal Naberrie","Pooja Naberrie","Ruwee Naberrie","Ryoo Naberrie","Sola Naberrie","Momaw Nadon (Hammerhead)","Boss Rugor Nass","Captain Lorth Needa","Queen Neeyutnee","Enfys Nest","Bazine Netal","Niima the Hutt","Jocasta Nu","Po Nudo","Nien Nunb","Has Obbit","Barriss Offee","Hondo Ohnaka","Ric Oli\u221a\xa9","Omi","Ketsu Onyo","Oola","OOM-9","Savage Opress","Bail Organa","Queen Breha Organa","Leia Organa","Garazeb Zeb Orrelios","Orrimaarko (Prune Face)","Admiral Kendal Ozzel","Odd Ball","Pablo-Jill","Teemto Pagalies","Jessika Jess Testor Pava","Sheev PalpatineDarth Sidious","Captain Quarsh Panaka","Casca Panzoro","Reeve Panzoro","Baron Papanoida","Che Amanwe Papanoida","Chi Eekway Papanoida","Paploo","Captain Phasma","Even Piell","Admiral Firmus Piett","Darth Plagueis","Sarco Plank","Unkar Plutt","Poggle the Lesser","Yarael Poof","Jek Tono Porkins","Nahdonnis Praji","Governor Arihnda Pryce","PZ-4CO","R2-D2","R2-KT","R3-S6","R4-P17","R5-D4","RA-7 (Death Star droid)","Rab\u221a\xa9","Admiral Raddus","Dak Ralter","Oppo Rancisis","Admiral Dodd Rancit","Rappertunie","Sinjir Rath Velus","Gallius Rax(a.k.a. The Operator)","Eneb Ray","Max Rebo","Ciena Ree","Ree-Yees","Kylo Ren","Captain Rex","Rey","General Carlist Rieekan","Riley","Rogue Squadron","Romba","Bodhi Rook","Pagetti Rook (Weequay)","Rotta the Hutt","Rukh","Sab\u221a\xa9","Sach\u221a\xa9","Admiral U.O. Statura","Joph Seastriker","Queen Miraj Scintel","Admiral Terrinald Screed","Sebulba","Aayla Secura","Korr Sella","Zev Senesca","Echuu Shen-Jon","Sifo-Dyas","Aurra Sing","Anakin SkywalkerDarth Vader","Luke Skywalker","Shmi Skywalker","Rae Sloane","The Smuggler","Snaggletooth","Supreme Leader Snoke","Sy Snootles","Osi Sobeck","Han Solo","Greer Sonnel","Sana Starros","Lama Su","Shriv Suurgav","Mercurial Swift","Gavyn Sykes","Cham Syndulla","Hera Syndulla","Jacen Syndulla","Orn Free Taa","General Cassio Tagge","Mother Talzin","Wat Tambor","Riff Tamson","Ahsoka Tano","Tarfful","Jova Tarkin","Grand Moff Wilhuff Tarkin","Captain Roos Tarpals","TC-14","Berch Teller","Teebo","Teedo","Mod Terrik","Tessek (Squid Head)","Lor San Tekka","Petty Officer Thanisson","Inspector Thanoth","Lieutenant Thire","Grand Admiral Thrawn","C'ai Threnalli","Shaak Ti","Paige Tico","Rose Tico","Saesee Tiin","Bala-Tik","Tikkes","Meena Tills","Quay Tolsite","Bargwill Tomder","Wag Too","Coleman Trebor","Admiral Trench","Strono Tuggs","Clone Trooper Tup","Letta Turmond","Longo Two-Guns","Captain Gregar Typho","Ratts Tyerell","Finis Valorum","Eli Vanto","Nahdar Vebb","General Maximilian Veers","Asajj Ventress","Evaan Verlaine","Garrick Versio","Iden Versio","Chancellor Lanever Villecham","Dr. Nuvo Vindi","Pre Vizsla","Tulon Voidgazer","Dryden Vos","Quinlan Vos"],y=[];!function(n){for(var e,t,a=n.length;0!==a;)t=Math.floor(Math.random()*a),e=n[a-=1],n[a]=n[t],n[t]=e}(v);var k=function(){h(!1)};function x(n){console.log(n.length);var e,t=[],a=[],r=[],i={},c=0,l=!1,u=!0,s=!1,d=void 0;try{for(var m,f=n[Symbol.iterator]();!(u=(m=f.next()).done);u=!0){var h=m.value;h.date=h.date+"","System"!==h.author&&(h.author=(e=h.author,y.indexOf(e)<0&&y.push(e),v[y.indexOf(e)])),h.message.search(/(file attached)/g)>0?h.hasAttachment=!0:h.hasAttachment=!1,h.message.search(/#startquiz/g)>=0&&(t.push(c),l=!0,i.start=c),h.message.search(/#endquiz/g)>=0&&(a.push(c),l&&(i.end=c,l=!1,r.push(i),i={})),h.isQuestion=O(h.message),c++}}catch(b){s=!0,d=b}finally{try{u||null==f.return||f.return()}finally{if(s)throw d}}if(l&&(i.end=n.length-1,l=!1,r.push(i)),r.length>=1){var p=r[r.length-1];n=n.slice(p.start,p.end+1)}!function(n,e){if(!n)throw"Blob object is required.";if(!n.type)try{n.type="video/webm"}catch(i){}var t=(n.type||"video/webm").split("/")[1];if(e&&-1!==e.indexOf(".")){var a=e.split(".");e=a[0],t=a[1]}var r=(e||Math.round(9999999999*Math.random())+888888888)+"."+t;if("undefined"!==typeof navigator.msSaveOrOpenBlob)return navigator.msSaveOrOpenBlob(n,r);if("undefined"!==typeof navigator.msSaveBlob)return navigator.msSaveBlob(n,r);var o=document.createElement("a");o.href=URL.createObjectURL(n),o.download=r,o.style="display:none;opacity:0;color:transparent;",(document.body||document.documentElement).appendChild(o),"function"===typeof o.click?o.click():(o.target="_blank",o.dispatchEvent(new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0}))),(window.URL||window.webkitURL).revokeObjectURL(o.href)}(new Blob([JSON.stringify(n)],{type:"application/json"}),"__chat.json"),o(n),console.log(n)}function O(n){for(var e=["who","what","when","where","why","how","identify","id","\\?","fact"],t=n.toLowerCase(),a=0,r=0;r<e.length;r++){var o=new RegExp(e[r],"g");(t.match(o)||[]).length>0&&a++}return a>2}return Object(a.useEffect)(function(){g.current||(f?p.current.focus():b.current.focus())},[f]),Object(a.useEffect)(function(){g.current=!1},[]),Object(a.useEffect)(function(){var n=function(n){27===n.keyCode&&k()};return document.addEventListener("keydown",n),function(){return document.removeEventListener("keydown",n)}},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Bn,null),r.a.createElement(Rn,null,r.a.createElement(In,null,r.a.createElement(ie,{onFileUpload:function(n){if(n){var e=new FileReader;"application/zip"===n.type?(e.onloadend=function(n){var e=n.target.result;(new Un.a).loadAsync(e).then(function(n){var e=n.files,t=Object.entries(e).filter(function(n){return Object(m.a)(n,1)[0].endsWith(".txt")});if(!t.length)throw new Error("No txt files found in archive");return t.sort(function(n,e){var t=Object(m.a)(n,1)[0],a=Object(m.a)(e,1)[0];return t.length-a.length})[0][1].async("string")}).then(Wn.parseString).then(o).catch(ue)},e.readAsArrayBuffer(n)):"text/plain"===n.type?(e.onloadend=function(){return Object(Wn.parseString)(e.result).then(function(n){x(n)}).catch(function(n){return ue("An error has occurred while parsing the file",n)})},e.readAsText(n)):ue("File type ".concat(n.type," not supported"))}},id:"dropzone"}),r.a.createElement("span",null,"OR"),r.a.createElement("a",{href:le.a,download:!0},"Download example chat")),r.a.createElement(dn,{messages:t,limit:Vn(l,5e3)}),r.a.createElement(Ln,{type:"button",onClick:function(){h(!0)},ref:b},"Open menu"),r.a.createElement(Gn,{type:"button",isActive:f,onClick:k,tabIndex:"-1"}),r.a.createElement(zn,{isOpen:f},r.a.createElement(Pn,{type:"button",onClick:k,ref:p},"Close menu"),r.a.createElement(Kn,null,r.a.createElement(Nn,null,r.a.createElement(Jn,{htmlFor:"limit"},"Messages limit"),r.a.createElement(Fn,{id:"limit",type:"number",min:"0",max:t.length,value:l,onChange:function(n){return u(parseInt(n.currentTarget.value,10))}}),r.a.createElement(Hn,null,"A high number may freeze the page for a while, change this with caution")),r.a.createElement("div",null,r.a.createElement(mn,null))))))},de=r.a.createElement(c.a,null,r.a.createElement("div",{className:"rootContainer"},r.a.createElement(l.a,{exact:!0,path:"/",component:qn}),r.a.createElement(l.a,{path:"/__uploader",component:se})));i.a.render(de,document.getElementById("root"))},65:function(n,e,t){n.exports=t.p+"static/media/bg.eb71b142.png"},66:function(n,e,t){n.exports=t.p+"static/media/error.1bc77022.svg"},67:function(n,e,t){n.exports=t.p+"static/media/random-shapes.1daab8f1.svg"},69:function(n,e,t){n.exports=t.p+"static/media/whatsapp-chat-example.570e52ac.zip"},73:function(n,e,t){n.exports=t(121)},86:function(n,e){},88:function(n,e){}},[[73,1,2]]]);
//# sourceMappingURL=main.9b78d108.chunk.js.map